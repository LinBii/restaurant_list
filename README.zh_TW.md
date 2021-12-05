# 餐廳清單

餐廳清單是一個以Node.js和Express打造的網頁，為想要尋找餐廳的使用者服務。

![snapshot_index](./public/snapshots/snapshot_index.png)
![snapshot_view](./public/snapshots/snapshot_view.png)

[English README](README.md)

## 功能

* 查看所有餐廳
* 顯示餐廳的詳細資訊
* 編輯餐廳的詳細資訊
* 新增餐廳
* 刪除餐廳
* 透過Google地圖找到餐廳位置
* 透過類別及名稱搜尋餐廳


## 安裝與執行步驟

1. 安裝Node.js和npm
2. 把專案複製到本地
3. 在本地開啟之後，透過終端機進入資料夾，輸入：

   ```bash
   npm install
   ```

4. 安裝完畢後，輸入：

   ```bash
   npm run start
   ```

5. 若看見此行訊息則代表順利運作：

   ```bash
   Express is listening on http://localhost:3000
   mongodb connected!
   ```

6. 若欲暫停使用，請按ctrl + c

## 開發工具

* Node.js 14.16.0
* Express 4.17.1
* Express-Handlebars 4.0.2
* MongoDB
* Mongoose 6.0.5
* Bootstrap 4.2.1
* Font-awesome Latest 5.x