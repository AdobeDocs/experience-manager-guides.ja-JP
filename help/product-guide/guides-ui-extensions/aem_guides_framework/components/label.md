---
title: ラベル
description: ラベル
role: User, Admin
source-git-commit: be06612d832785a91a3b2a89b84e0c2438ba30f2
workflow-type: tm+mt
source-wordcount: '46'
ht-degree: 6%

---

# ラベル

任意のテキストや文字列を表示するには、コンポーネント、ラベルを使用します。
JUI のラベルコンポーネントは html を表します `<label/>`.

静的ラベルの追加例を以下に示します

```js title="staticLabel.js"
const staticLabelJSON =  {
    "component": "label", //tells the component name
    "label": "This is an example label", // the string to be displayed
}
```

以下の JSON に動的文字列が表示されます。

```js title="dynamicLabel.js"
const labelJSON =  {
    "component": "label", //tells the component name
    "label": "@name", // the variable storing the text to be displayed
},
```

レンダリングされたラベルは次のようになります。

![ラベル](./imgs/label.png "ラベル")