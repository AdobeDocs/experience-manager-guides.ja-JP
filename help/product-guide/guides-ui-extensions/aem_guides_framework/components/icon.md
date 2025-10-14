---
title: アイコン
description: アイコン
role: User, Admin
exl-id: 5ba41c77-7329-49fc-bce5-02682261ea8e
source-git-commit: e40ebf4122decc431d0abb2cdf1794ea704e5496
workflow-type: tm+mt
source-wordcount: '49'
ht-degree: 6%

---

# アイコン

アイコンを表示するには、コンポーネント、アイコンを使用します。
JUI のテキスト領域コンポーネントは HTML `<icon/>` を表します。

[Adobe スペクトラム アイコン &#x200B;](https://spectrum.adobe.com/page/icons/) で利用できるアイコンは、アプリと互換性があります。

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

![icon](./imgs/info_icon.png "Icon")
