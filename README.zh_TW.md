# 餐廳清單

餐廳清單是一個以Node.js和Express打造的網頁，可以記錄自己喜愛的餐廳。使用者需要註冊（直接註冊或是Facebook登入）之後才能夠使用餐廳清單的功能。

## 登入頁面
![snapshot_login](./public/snapshots/snapshot_login.png)
## 註冊頁面
![snapshot_register](./public/snapshots/snapshot_register.png)
## 首頁
![snapshot_index](./public/snapshots/snapshot_index.png)
## 詳細資訊頁面
![snapshot_view](./public/snapshots/snapshot_view.png)
## 新增頁面
![snapshot_create](./public/snapshots/snapshot_create.png)
## 編輯頁面
![snapshot_edit](./public/snapshots/snapshot_edit.png)

[English README](README.md)

## 功能

* 透過Facebook註冊登入
* 查看所有餐廳
* 新增餐廳
* 刪除餐廳
* 顯示餐廳的詳細資訊
* 編輯餐廳的詳細資訊
* 透過Google地圖找到餐廳位置
* 透過類別及名稱搜尋餐廳


## 安裝與執行步驟

1. 安裝Node.js、npm及MongoDB
2. 把專案複製到本地
3. 在本地開啟之後，透過終端機進入資料夾，輸入：

   ```bash
   npm install
   ```

4. 開啟MongoDB伺服器，建立名為restaurant-list的資料庫，在終端機產生種子資料，輸入：

   ```bash
   npm run seed
   ```

5. 產生種子資料完畢後，輸入：

   ```bash
   npm run start
   ```

6. 若看見此行訊息則代表順利運作：

   ```bash
   Express is listening on http://localhost:3000
   mongodb connected!
   ```

7. 若欲暫停使用，請按ctrl + c

## 測試資料
* 帳號
  * email_1: user1@example.com
  * email_2: user2@example.com
  * 密碼: 12345678

## 開發工具

* Node.js 14.16.0
* Express 4.17.1
* Express-Handlebars 4.0.2
* MongoDB
* Mongoose 6.0.14
* bcryptjs 2.4.3
* connect-flash 0.1.1
* dotenv 10.0.0
* passport 0.5.2
* passport-facebook 3.0.0
* passport-local 1.0.0
* Bootstrap 4.2.1
* Font-awesome Latest 5.x