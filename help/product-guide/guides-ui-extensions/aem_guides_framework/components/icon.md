---
title: アイコン
description: アイコン
role: User, Admin
source-git-commit: be06612d832785a91a3b2a89b84e0c2438ba30f2
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
