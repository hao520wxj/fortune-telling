# 福緣金香堂 - 官方網站

台中傳統金香與專業八字命理諮詢網站

## 📁 檔案結構

```
website/
├── index.html          # 主頁面 (HTML 結構)
├── css/
│   └── styles.css      # 樣式表 (CSS)
├── js/
│   └── main.js         # 主要功能腳本 (JavaScript)
└── README.md           # 說明文件
```

## 🚀 如何使用

### 方法 1: 直接開啟
直接用瀏覽器開啟 `index.html` 即可檢視網站

### 方法 2: 本地伺服器 (推薦)
使用本地伺服器可避免 CORS 問題：

**使用 Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**使用 Node.js (http-server):**
```bash
npx http-server
```

**使用 VS Code:**
安裝 "Live Server" 擴充套件，右鍵點擊 index.html → "Open with Live Server"

然後在瀏覽器開啟 `http://localhost:8000`

## 📝 檔案說明

### index.html
- 網站的主要 HTML 結構
- 包含所有頁面內容
- 引用外部 CSS 和 JavaScript 檔案
- 已優化 SEO 和無障礙性 (Accessibility)

### css/styles.css
- 所有自訂樣式
- 包含導航欄、輪播圖、服務項目等樣式
- 響應式設計 (RWD) 樣式
- 無障礙焦點狀態樣式

### js/main.js
- 導航欄滾動效果
- 手機版選單控制
- 輪播圖自動播放功能
- 服務項目切換功能
- 鍵盤無障礙支援

## 🎨 使用的技術

- **HTML5** - 語意化標籤
- **Tailwind CSS** (CDN) - 實用優先的 CSS 框架
- **Vanilla JavaScript** - 原生 JavaScript，無依賴
- **Lucide Icons** - 現代化圖示庫
- **Google Fonts** - Noto Sans TC & Noto Serif TC

## ✨ 功能特色

- ✅ 響應式設計 (手機、平板、桌面)
- ✅ 圖片輪播 (自動播放、手動控制)
- ✅ 服務項目互動展示
- ✅ 平滑滾動導航
- ✅ 手機版選單
- ✅ 無障礙設計 (ARIA 標籤、鍵盤導航)
- ✅ SEO 優化 (Meta 標籤、結構化資料)
- ✅ Google Maps 整合

## 🔧 自訂設定

### 修改顏色主題
在 `index.html` 中找到 Tailwind 配置：
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#9A2E2E',   // 朱紅色
                accent: '#C5A065',    // 金色
                secondary: '#F9F7F2', // 米白色背景
                dark: '#2A1F1D',      // 深墨色
                line: '#06C755',      // LINE 綠色
            }
        }
    }
}
```

### 修改輪播速度
在 `js/main.js` 中修改常數：
```javascript
const CAROUSEL_INTERVAL = 5000; // 毫秒 (5000 = 5 秒)
```

### 更新 LINE ID
全域搜尋並替換 `@fortune88` 為你的 LINE ID

### 更新地圖位置
在 `index.html` 中找到 Google Maps iframe，修改地址參數

## 📱 瀏覽器支援

- ✅ Chrome (最新版)
- ✅ Firefox (最新版)
- ✅ Safari (最新版)
- ✅ Edge (最新版)
- ⚠️ IE 11 (部分功能可能不支援)

## 📈 效能優化建議

1. **圖片優化**: 將 Unsplash 圖片下載並壓縮後使用
2. **本地化 CSS**: 下載 Tailwind CSS 並自訂配置
3. **最小化檔案**: 使用工具壓縮 CSS/JS
4. **CDN**: 考慮使用 CDN 服務加速載入

## 🐛 常見問題

**Q: 網站開啟後樣式跑掉？**
A: 確認 `css/styles.css` 路徑正確，建議使用本地伺服器開啟

**Q: JavaScript 功能沒有作用？**
A: 檢查 `js/main.js` 路徑，並確認瀏覽器控制台無錯誤訊息

**Q: 圖片無法顯示？**
A: 確認網路連線正常，圖片來自 Unsplash CDN

## 📞 聯絡資訊

- **LINE ID**: @fortune88
- **地址**: 台中市中區成功路88號
- **營業時間**: 每日 08:30 - 21:00

## 📄 授權

Copyright © 2024 福緣金香堂. All rights reserved.

---

**最後更新**: 2025-11-27
# fortune-telling
