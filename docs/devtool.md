# Vue DevTools 安裝指南

本專案使用 `vite-plugin-vue-devtools` 來提供增強的除錯體驗。

## 安裝

1. 安裝插件作為開發依賴：

```bash
npm install vite-plugin-vue-devtools -D
```

2. 設定 `vite.config.js`：

```javascript
import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    VueDevTools(),
  ],
})
```

3. 啟動開發伺服器：

```bash
npm run dev
```

Vue DevTools 的浮層現在應該會出現在您的瀏覽器中。
