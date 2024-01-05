---
title: アイコン
description: アイコン
source-git-commit: 2e1cb576fa3b0a765304508e5f7962a154f1a72c
workflow-type: tm+mt
source-wordcount: '49'
ht-degree: 6%

---

# アイコン

アイコンを表示するには、コンポーネントのアイコンを使用します。
JUI のテキスト領域コンポーネントは、html を表します。 `<icon/>`.

アイコンは次の場所で使用できます： [Adobeスペクトルアイコン](https://spectrum.adobe.com/page/icons/) はアプリと互換性があります。

```js title="icon.js"
const iconJSON =  {
    "component": "icon", //tells the component name
    "icon": "info", // name of the icon to be used
    "size": "S", // size of the icon
    "title": "Information" // tooltip corresponding to the icon.
},
```

アイコンをボタンに追加することもできます。

レンダリングされたアイコンは次のようになります。

![アイコン](./imgs/info_icon.png "アイコン")
