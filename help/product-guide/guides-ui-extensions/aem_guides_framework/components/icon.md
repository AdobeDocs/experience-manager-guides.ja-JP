---
sidebar_position: 4
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '47'
ht-degree: 2%

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
