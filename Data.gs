/*************************************************
 *  DỮ LIỆU
 *************************************************/
// npm run release
// ===== DANH SÁCH THƯ MỤC =====
const FOLDERS = [
  {
    name: "TPM",
    page: "tpm", icon: "https://lh3.googleusercontent.com/d/1NbGA5q3sHaj7_j7Zm2vCYiDYTKuIKDet"
  },
  {
    name: "TIÊU CHUẨN 5S",
    page: "tc5s", icon: "https://lh3.googleusercontent.com/d/10cSWmFz7oxUz3zmO-Z0uPMUr_Dk1g9OM"
  },
  {
    name: "TỔNG QUAN ISO",
    page: "iso", icon: "https://lh3.googleusercontent.com/d/1IhQEtyH3TL57GIlnTo7TGWZqzyjL7HCX"
  },
  {
    name: "SHE & EN",
    page: "she_en", icon: "https://lh3.googleusercontent.com/d/1JHuCi53a2hecO_Ceq6a1VP3hUohvYO7D"
  },
  {
    name: "CẤU TRÚC MÁY",
    page: "cautruc", icon: "https://lh3.googleusercontent.com/d/1nGn1eeUX1m_q3KAlg5Z5D7Babd3YlHst"
  },
  {
    name: "BÀI KIỂM TRA",
    page: "quiz", icon: "https://lh3.googleusercontent.com/d/1GTEUAy1KGa2PImZIiXaICKhqpjVQAPD3"
  }
];
// ===== FILE THƯ MỤC =====
const FILE_PAGES = {
  tpm: [
    /*{ name: "0. 📁 CẤU TRÚC MÁY", page: "cautruc" },*/
    { name: "1. TỔNG QUAN TPM", id: "15RrMxGvMlfrFoJf1DVIBcSFBMaxaHAq0" },
    { name: "2. ĐÀO TẠO AM 5 BƯỚC", id: "1SEaDIooMtOqVw9wsIXYurRxmLkuTcd3t" },
    { name: "3. NHẬN BIẾT 7 ĐIỂM BẤT THƯỜNG", id: "1WH7nqL3VasN8q6hnAm6sRdoCZTqKTKWC" },
    { name: "4. ĐÀO TẠO VỀ VỆ SINH TRONG CILT", id: "18vrRpEw4BI9qE14tEhmCgLCoEeLzrMS7" },
    { name: "5. ĐÀO TẠO VỀ BÔI TRƠN TRONG CILT", id: "1bgM9uGmJGhESE88qPn4KuX7LtwAHvVWu" },
    { name: "6. ĐÀO TẠO VỀ SIẾT CHẶT TRONG CILT", id: "1Vu6jP4D193AQiWDJfe7AVMDUf87gc0hN" },
    { name: "7. ĐÀO TẠO 5 GIÁC QUAN", id: "1RQ-ltKAH7OxW9Xg94_7QkUPxllKpqGjZ" },
    { name: "8. HIỂU VỀ 7 LOẠI KAIZEN TRONG AM", id: "11pPUMqgj1VanFQkjiFRjJGEfelJU2ZFQ" },
    { name: "9. HƯỚNG DẪN PHÂN TÍCH NGUYÊN NHÂN", id: "1X7TO9advmIXlwDTl84Q1E3MpD52amPoM" },
    { name: "10. NHỮNG NỘI DUNG CỦA BẢNG HOẠT ĐỘNG", id: "1j-mEXc1i4u2RQuxqGXX4hEnFToA84m72" },
    { name: "11. ĐỊNH NGHĨA 22 LOSSES", id: "1dZh9aTzTHJygGZifTdsYXgO-8Pfz563E" },
    { name: "12. CÁCH TÍNH OEE", id: "14A_ZexebqaZy8vR4ipuzDYna-Fn7W5SC" }
  ],
  cautruc: [
    { name: "BẢNG PHÂN LOẠI MÁY THEO LINE", id: "1Lvf14jWW49gGZsMOwci1tPsOePERbRUC" },
    { name: "1. GẦU TẢI", id: "1xrTzt8bzrJf9v7vlTmU88baJOEp_YjT6" },
    { name: "2. XÍCH TẢI", id: "1N7Qvt3YU2fenKGhrBiZRVUJYVpZVTI14" },
    { name: "3. VÍT TẢI", id: "18TQnUcgYdBYvGyvMDnx_KuToObFkipzy" },
    { name: "4. MÁY CÁM VIÊN", id: "1MWGdoxZpbXTLuwX0lUmuB-HHruwMTUxz" },
    { name: "5. MÁY NGHIỀN", id: "1Cnzuepw41B5Zo3IJ8PnmSoGu0sCngg8R" },
    { name: "6. AIRLOCK", id: "1KPrDAxkWPHJqN687ogdHSuCd4Yh0XI0v" },
    { name: "7. COOLER", id: "1FlqTrIF2c_UM0vpIUD6RukpkwAYG8VNG" },
    { name: "8. SLIDE", id: "13TTCLXKpwwjfl3Wwd6L-pLQY4eGZuLxa" },
    { name: "9. BĂNG TẢI", id: "1x6TsTg-wXYuTwDpzLEam8RbMyJ1z3qvb" },
    { name: "10. FLAPBOX", id: "14scRmXf_RBiWw0wOpOkHMxwPbqy_rNUw" },
    { name: "11. TURNHEAD", id: "1tVexSkjmK5u-vAEfRU1fuGdSKNcIheaA" },
    { name: "12. MÁY MIXER", id: "1aBgwZhw_c1BUgkRlVoLyym2Wlkzd9M5Y" },
    { name: "13. MÁY CÂN", id: "1lkSadS6NaIER5NMvvV1P-WaNwRDY0iyS" },
    { name: "14. MÁY NÉN KHÍ", id: "1-lFn5i4iBUdYWClSFTspsANN1ymgI_eC" },
    { name: "15. MÁY PHÁT ĐIỆN ", id: "16PE6J23fZBmNP-CpIFkcHuoUlz0Eqtjm" },
    { name: "16. TRUCKDUMP", id: "1-1nt9I1A3XYUns0RDHh4i1OA_DZp4QZT" },
    { name: "17. BƠM CỨU HỎA", id: "1h7zFP27Fn7L4Z6fxQZkpqY92TkmGBew8" },
    { name: "18. MÁY HÚT BỤI", id: "1HMG0DoapAytnsPNYysaayuePM23T7IbL" },
    { name: "19. CONDITIONER", id: "1_KP_gH37Ohy4E6kg4h84QVg1a1CxMRtS" },
    { name: "20. EXPANDER", id: "1F9DAs8GLhDvUtJtKeR6aV7dUaj8JCyIw" },
    { name: "21. WING CRUMBER", id: "13pkePgzv9-ASEcjvAqPKZBn1DuM3rds6" },
    { name: "22. BOILER", id: "1LmOcGbEVRfhvBo2Wx9QuuP_yiWBRJ4Mi" },
    { name: "23. LÒ SẤY", id: "1ofBdufwEYqxovGbB4dzdDHPJDc3z5mY-" },
    { name: "24. EXTRUDER", id: "1O4m9TpXZ1uEUAzlnqbjSBgvqJKJgoAZF" },
    { name: "25. QUẠT HÚT", id: "1uBKH0AY2rK_g2P2wm8vip8NUAqXNji4-" },
    { name: "26. MÁY SÀNG", id: "17-SgEd2jvRL0L0HMFBuwKLmcAVTwYsB-" },
    { name: "27. MÁY LÀM SẠCH", id: "1mEPZcCv0MXXQcYHLcdBA4yJwmlWShTcp" },
    { name: "28. AUTO PACKING", id: "1ky7sKu8fEYMLTF8jn-pEtn5DOhM9c3-b" },
    { name: "29. ROBOT GẮP BAO", id: "1UbbzgWUoI-lEzT4cwKUGv92-6i-6-uGR" },
    { name: "30. MÁY LẤY MẪU QC", id: "1M6KwmJmOmKY0cj6jZIPiM05aXyaDGd3s" },
    { name: "31. CẦU CÂN", id: "1M6KwmJmOmKY0cj6jZIPiM05aXyaDGd3s" },
    { name: "32. MÁY BIẾN ÁP", id: "1Cue67XcRtxDAjNG1_vNsIBHmUZ3yKcva" },
    { name: "33. MDB", id: "1qSkFeG0aZHUjKbr5LAeL76ius1X6d4EW" },
    { name: "34. MCC", id: "1btUY04uqe4MRdLbSqIB134rEKph3fL3t" },
    { name: "35. CCB", id: "1v4acm086NGcSeGY76z99mWG86valbYeP" }
  ],
  tc5s: [
    { name: "1. TRAINNING 5S", id: "1UJ6oA9IKMNakvrQpEG_QCGDKAFWCOp6N" }
  ],
  iso: [
    { name: "1. TỔNG QUAN ISO", id: "1hYC4tHrHvMB45QX5XhfKp99X1ureaE86" },
    { name: "2. THUẬT NGỮ TRONG ISO", id: "1tf3zZBOup62jxqUMQ59r-UsFoEclsuvi" },
    { name: "3. MỤC TIÊU ISO", id: "1ZGs80hhffKsPYngmOPhcoTpUFRY_fsfd" },
    { name: "4. CHÍNH SÁCH ISO", id: "1lo2WEy6WQJ9l-LPfhZVMySenyogoFJog" }
  ],
  she_en: [
    { name: "1. TIÊU CHUẨN QUẢN LÝ", id: "1oU5eMrN1wRE5k4DtVwgMWRcXOKliwGHy" },
    { name: "2. TIÊU CHUẨN KỸ THUẬT", id: "14AWH-QznCwzCclhBygC2B9sci55X7KPM" },
    { name: "3. SỔ TAY AN TOÀN", id: "1AQd2aKtbct87zCUNgGV08lAmC1h2BwCo" },
    { name: "4. SỔ TAY MÔI TRƯỜNG", id: "1jyjXP3ZaINhOqdFj0pAXOefFJzaJoula" }
  ],
  quiz: [
    { name: "1. LÀM BÀI TEST TRỰC TIẾP", msg: "VUI LÒNG LIÊN HỆ:<br> MR. DIỄN : 096 811 57 68<br> MRS. HỒNG ANH : 0387 022 604<br> ĐỂ ĐƯỢC HỖ TRỢ !" },
    { name: "2. LÀM BÀI TEST TRỰC TUYẾN", page: "quiz1" },
    { name: "3. Ý KIẾN ĐỀ XUẤT/PHẢN HỒI", url: "https://forms.gle/jauNZounNy1uT1r48" },
    { name: "4. XEM ĐIỂM SỐ", page: "score" }
  ],
  quiz1: [
    { name: "1. KIỂM TRA 7 ĐIỂM BẤT THƯỜNG", url: "https://forms.gle/uUTfEnc26i5Xa9iN6" },
    { name: "2. KIỂM TRA TỔNG QUAN TPM", url: "https://forms.gle/88auyaU8DeSmjes56" },
    { name: "3. KIỂM TRA HỆ THỐNG 5S", url: "https://forms.gle/ihQkmDmvWigx4EQh9" },
    { name: "4. KIỂM TRA KIẾN THỨC AM", url: "https://forms.gle/MFdm4GEgEUM2krh87" },
    { name: "5. KIỂM TRA KIẾN THỨC ET", url: "https://forms.gle/1a2" },
    { name: "6. KIỂM TRA KIẾN THỨC SHE", url: "https://forms.gle/11x" },
    {
      name: "7. KIỂM TRA CẤU TRÚC MÁY",
      submenu: [

        { name: "1. KIỂM TRA KIẾN THỨC MÁY ÉP VIÊN", url: "https://forms.gle/ZEVpmbS6z5jnVafz6" },
        { name: "2. KIỂM TRA KIẾN THỨC MÁY NGHIỀN", url: "https://forms.gle/D2ZF7R4d2GtGm1tj7" },
        { name: "3. KIỂM TRA KIẾN THỨC MÁY MIXER", url: "https://forms.gle/LmPFGT6fkZBVn7yu5" },
        { name: "4. KIỂM TRA KIẾN THỨC MÁY SÀNG", url: "https://forms.gle/StsvYuscGBkEwsQt6" },
        { name: "5. KIỂM TRA KIẾN THỨC MÁY HÚT BỤI", url: "https://forms.gle/kbjxXv6aGmNijMLu7" },
        { name: "6. KIỂM TRA KIẾN THỨC MÁY PHÁT ĐIỆN", url: "https://forms.gle/WRbbqvFugNnX8BbZA" },
        { name: "7. KIỂM TRA KIẾN THỨC MÁY BIẾN ÁP", url: "https://forms.gle/odwyea9ik12APGJN8" },
        { name: "8. KIỂM TRA KIẾN THỨC BOILER ", url: "https://forms.gle/BHPUFKWUXcFqVP2H6" },
        { name: "9. KIỂM TRA KIẾN THỨC LÒ SẤY", url: "https://forms.gle/V6eU8saUykJdzSQeA" },
        { name: "10. KIỂM TRA KIẾN THỨC TRUCKDUMP", url: "https://forms.gle/3BF9Ybq8nvKQX8zM9" },
        { name: "11. KIỂM TRA KIẾN THỨC BƠM CỨ HỎA", url: "https://forms.gle/TkRXrvkNY3pRshgV8" },
        { name: "12. KIỂM TRA KIẾN THỨC SLIDE", url: "https://forms.gle/w5XKNUiUkWJjfJhs5" },
        { name: "13. KIỂM TRA KIẾN THỨC VÍT TẢI", url: "https://forms.gle/XHxzofWcHKdehbc36" },
        { name: "14. KIỂM TRA KIẾN THỨC XÍCH TẢI", url: "https://forms.gle/MabTijpL11nV7MND8" },
        { name: "15. KIỂM TRA KIẾN THỨC GẦU TẢI", url: "https://forms.gle/9oB6w6X7GDk7Cgq88" },
        { name: "16. KIỂM TRA KIẾN THỨC AIRLOCK", url: "https://forms.gle/bvNT8HaAKXkvmEy19" },
        { name: "17. KIỂM TRA KIẾN THỨC BĂNG TẢI", url: "https://forms.gle/9u2PMYoSt6jNUwQEA" },
        { name: "18. KIỂM TRA KIẾN THỨC FLAPBOX", url: "https://forms.gle/9o7qqJEmPusZ9QsG7" },
        { name: "19. KIỂM TRA KIẾN THỨC TURNHEAD", url: "https://forms.gle/RNfbwGK1EUErstqH7" },
        { name: "20. KIỂM TRA KIẾN THỨC COOLER", url: "https://forms.gle/ehZyp8yd7K22xCX2A" },
        { name: "21. KIỂM TRA KIẾN THỨC WINGCRUMBER", url: "https://forms.gle/5H8NRfh3JBjh7s6U8" },
        { name: "22. KIỂM TRA KIẾN THỨC QUẠT HÚT ", url: "https://forms.gle/N9QqR6cc1gGzmZMg6" },
        { name: "23. KIỂM TRA KIẾN THỨC CONDITIONER ", url: "https://forms.gle/7tHMyuKWABSk4Byq7" },
        { name: "24. KIỂM TRA KIẾN THỨC EXPANDER", url: "https://forms.gle/YiCYxrAKDDkSrjpn9" },
        { name: "25. KIỂM TRA KIẾN THỨC EXTRUDER", url: "https://forms.gle/Yt2ohRcgJ8KEAEgE8" },
        { name: "26. KIỂM TRA KIẾN THỨC MÁY LÀM SẠCH", url: "https://forms.gle/8SjKqfqoE651NnjA7" },
        { name: "27. KIỂM TRA KIẾN THỨC MÁY AUTO PACKING", url: "https://forms.gle/LcPbchJp2dfXourM8" },
        { name: "28. KIỂM TRA KIẾN THỨC ROBOT GẮP BAO", url: "https://forms.gle/KeBiT4tisPwXMptY7" },
        { name: "29. KIỂM TRA KIẾN THỨC CẦU CÂN", url: "https://forms.gle/XkMPimbLYWTP3ksSA" },
        { name: "30. KIỂM TRA KIẾN THỨC MBD", url: "https://forms.gle/k7XKoPNuyGo6vZUm7" },
        { name: "31. KIỂM TRA KIẾN THỨC MCC", url: "https://forms.gle/ZHGf1Cx6LVsS3iuf7" },
        { name: "32. KIỂM TRA KIẾN THỨC CCB", url: "https://forms.gle/7vCnuvG6VNWmzQxV7" },
        { name: "33. KIỂM TRA KIẾN THỨC MÁY CÂN PACKING", url: "https://forms.gle/vWbnV8YBHpKrfrwU8" },
        // { name: "34. KIỂM TRA KIẾN THỨC ", url: "" },
        // { name: "35. KIỂM TRA KIẾN THỨC ", url: "" },
      ]
    },
    { name: "8. XEM ĐIỂM SỐ", page: "score" }
  ]
};