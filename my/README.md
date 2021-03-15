# my

## 如何執行程式？
 
```
npm install
npm run serve
```

## 專案架構

`components folder`: 所有 components

+ `Card`: 每一本書
+ `Cards`: 書列
+ `Footer`: 尾
+ `Header`: 頭

`view folder`: 主頁面以及 Detail 頁面

## 邏輯說明

一開始會進入 `Home` ，`Home` 會將 server 的 response 以 `Card` 呈現在頁面，
當點擊 `Card` 會藉由 `Vue Router` 進入 `Detail`，並且能在裡面修改 server 資料。

## libraries

`view-router`: 以不用重新 request server 的方式，藉由 bundle 直接在 client 端切換路徑

## Difficulties

1. The Vue Router, Vue life cycle ...等尚未理解其中的運作模式，以致直接切換每一本書的路徑無法顯示價格與數量，也無法直接更改 server 資訊，必須重新整理或者先回到`/books`
