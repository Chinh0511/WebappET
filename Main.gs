
/*************************************************/
const SCORE_SHEET_ID = "1OXys5HpcadRlnbXMw8R0vRAJV254rN6KhTJm-MFBaPM";
const SCORE_SHEET_NAME = "Tổng hợp";
const EXPORT_FOLDER_ID = "10RvpFw4CsVflZhGG8Ur29y3II8Tarrb4";
/*************************************************
 *  ROUTER
 *************************************************/
function doGet(e) {
  let page = "";
  let parent = "";
  if (e && e.parameter) {
    page = e.parameter.page || "";
    parent = e.parameter.parent || "";
  }
  if (!page) {
    return renderHome();
  }
  if (page == "score") {
    return renderScorePage();
  }
  if (FILE_PAGES[page]) {
    return renderFiles(page, parent);
  }
  return renderHome();
}
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
/*************************************************
 * TRANG CHỦ
 *************************************************/
function renderHome() {
  const t = HtmlService.createTemplateFromFile("Home");
  t.baseUrl = ScriptApp.getService().getUrl();
  t.folders = FOLDERS;
  return t.evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/*************************************************
*  TRANG FILE
*************************************************/
function renderFiles(page, parent) {
  const t = HtmlService.createTemplateFromFile("Files");
  t.baseUrl = ScriptApp.getService().getUrl();
  t.page = page;
  t.parent = parent;
  t.files = FILE_PAGES[page] || [];
  return t.evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);

}

/*************************************************
 * TRANG XEM ĐIỂM
 *************************************************/
function renderScorePage() {
  const t = HtmlService.createTemplateFromFile("Score");
  t.baseUrl = ScriptApp.getService().getUrl();

  return t.evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

