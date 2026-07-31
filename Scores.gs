function getScoreFilters() {
  const ss = SpreadsheetApp.openById(SCORE_SHEET_ID);
  const sh = ss.getSheetByName(SCORE_SHEET_NAME);
  const data = sh.getDataRange().getValues();
  const phongBan =
    [...new Set(data.slice(1).map(r => r[2]))]
      .filter(String)
      .sort();
  const baiThi =
    [...new Set(data.slice(1).map(r => r[3]))]
      .filter(String)
      .sort();
  return {
    phongBan,
    baiThi
  };
}
function searchScores(phongBan, baiThi) {
  const ss = SpreadsheetApp.openById(SCORE_SHEET_ID);
  const sh = ss.getSheetByName(SCORE_SHEET_NAME);
  let data = sh.getDataRange().getValues();
  // bỏ dòng tiêu đề
  data.shift();
  data = data.filter(r => {
    const matchPhongBan =
      phongBan === "Tất cả" ||
      r[2] === phongBan;
    const matchBaiThi =
      baiThi === "Tất cả" ||
      r[3] === baiThi;
    return matchPhongBan && matchBaiThi;
  });
  // sắp xếp điểm giảm dần
  data.sort((a, b) => {
    const baiThiA = String(a[3] || "").trim();
    const baiThiB = String(b[3] || "").trim();
    const compareBaiThi =
      baiThiA.localeCompare(baiThiB, "vi");
    if (compareBaiThi !== 0) {
      return compareBaiThi;
    } 
    return Number(b[5] || 0) - Number(a[5] || 0);
    });
  const total = data.length;
  const avg =
    total > 0
      ? (
        data.reduce((sum, row) =>
          sum + Number(row[5] || 0), 0
        ) / total
      ).toFixed(1)
      : 0;
  const max =
    total > 0
      ? Math.max(...data.map(r => Number(r[5] || 0)))
      : 0;
  const passRate =
    total > 0
      ? (
        data.filter(r => Number(r[5] || 0) >= 80).length
        / total * 100
      ).toFixed(1)
      : 0;
  return {
    total: total,
    avg: avg,
    max: max,
    passRate: passRate,
    rows: data.map(r => ({
      hoTen: r[1],
      phongBan: r[2],
      baiThi: r[3],
      diem: r[5]
    }))
  };
}
/*************************************************
 * TRANG XUẤT FILE
 *************************************************/
function exportScoreExcel(phongBan, baiThi) {
  const ss = SpreadsheetApp.openById(SCORE_SHEET_ID);
  const sh = ss.getSheetByName(SCORE_SHEET_NAME);
  let data = sh.getDataRange().getValues();
  data.shift();
  data = data.filter(r => {
    return (phongBan == "Tất cả" || r[2] == phongBan) &&
      (baiThi == "Tất cả" || r[3] == baiThi);
  });
  data.sort((a, b) => Number(b[5] || 0) - Number(a[5] || 0));
  const total = data.length;
  const avg = total
    ? data.reduce((s, r) => s + Number(r[5] || 0), 0) / total
    : 0;
  const max = total
    ? Math.max(...data.map(r => Number(r[5] || 0)))
    : 0;
  const pass = total
    ? data.filter(r => Number(r[5]) >= 80).length / total
    : 0;
  const report = SpreadsheetApp.create("TEMP_REPORT");
  const sheet = report.getSheets()[0];
  sheet.clear();
  sheet.getRange("A1:E1").merge();
  sheet.getRange("A1")
    .setValue("BÁO CÁO KẾT QUẢ KIỂM TRA ET")
    .setFontSize(16)
    .setFontWeight("bold")
    .setHorizontalAlignment("center")
    .setVerticalAlignment("middle")
    .setBackground("#1565c0")
    .setFontColor("white");
  sheet.getRange("B3:E3").setValues([[
    "Tổng số",
    "Điểm trung bình",
    "Điểm cao nhất",
    "Tỷ lệ đạt"
  ]]);
  sheet.getRange("B4:E4").setValues([[
    total,
    avg,
    max,
    pass
  ]]);
  sheet.getRange("C4").setNumberFormat("0.0");
  sheet.getRange("E4").setNumberFormat("0.0%");
  sheet.getRange("B3:E3")
    .setBackground("#1565c0")
    .setFontColor("white")
    .setFontWeight("bold");
  sheet.getRange("B4:E4")
    .setHorizontalAlignment("center");
  const start = 6;
  sheet.getRange(start, 1, 1, 5).setValues([[
    "STT",
    "Họ và tên",
    "Phòng ban",
    "Bài kiểm tra",
    "Điểm (%)"
  ]]);
  sheet.getRange(start, 1, 1, 5)
    .setBackground("#1565c0")
    .setFontColor("white")
    .setFontWeight("bold");
  const values = [];
  data.forEach((r, i) => {
    values.push([
      i + 1,
      r[1],
      r[2],
      r[3],
      Number(r[5])
    ]);
  });
  if (values.length) {
    sheet.getRange(start + 1, 1, values.length, 5)
      .setValues(values);
  }
  sheet.setFrozenRows(start);
  sheet.getRange(start, 1, values.length + 1, 5)
    .createFilter();
  sheet.setHiddenGridlines(true);
  sheet.setRowHeight(1, 40);
  sheet.setColumnWidth(1, 60);
  sheet.setColumnWidth(2, 160);
  sheet.setColumnWidth(3, 160);
  sheet.setColumnWidth(4, 215);
  sheet.setColumnWidth(5, 100);
  sheet.getRange(start + 1, 1, data.length + 1, 1).setHorizontalAlignment("center"); 
  sheet.getRange(start + 1, 5, data.length + 1, 1).setHorizontalAlignment("center"); 
  sheet.getRange(1, 1, sheet.getLastRow(), 5)
    .setBorder(true, true, true, true, true, true);
  for (let i = 0; i < values.length; i++) {
    const cell = sheet.getRange(start + 1 + i, 5);
    const score = values[i][4];
    if (score < 80) {
      cell.setBackground("#ffcdd2");
    } else if (score < 85) {
      cell.setBackground("#fff9c4");
    } else if (score < 90) {
      cell.setBackground("#c8e6c9");
    } else if (score < 95) {
      cell.setBackground("#81d4fa");
    } else {
      cell.setBackground("#b39ddb");
    }
  }
  SpreadsheetApp.flush();
  const fileName =
    "BaoCaoET_" +
    Utilities.formatDate(
      new Date(),
      Session.getScriptTimeZone(),
      "ddMMyyyy_HHmmss"
    );
  // URL export Excel
  const exportUrl =
    "https://docs.google.com/spreadsheets/d/" +
    report.getId() +
    "/export?format=xlsx";
  // Lấy token
  const token = ScriptApp.getOAuthToken();
  // Gọi export
  const response = UrlFetchApp.fetch(exportUrl, {
    headers: {
      Authorization: "Bearer " + token
    }
  });
  const blob = response.getBlob().setName(fileName + ".xlsx");
  const folder = DriveApp.getFolderById(EXPORT_FOLDER_ID);
  const excelFile = folder.createFile(blob);
  // Xóa Google Spreadsheet tạm
  DriveApp.getFileById(report.getId()).setTrashed(true);
  // Trả về link tải
  return "https://drive.google.com/uc?export=download&id=" + excelFile.getId();
}