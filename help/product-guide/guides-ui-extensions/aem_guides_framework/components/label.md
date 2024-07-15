---
title: ラベル
description: ラベル
role: User, Admin
exl-id: aceefb08-3198-4c3a-90ec-ac1cdde28582
source-git-commit: e40ebf4122decc431d0abb2cdf1794ea704e5496
workflow-type: tm+mt
source-wordcount: '46'
ht-degree: 6%

---

# ラベル

任意のテキストまたは文字列を表示するには、コンポーネント label を使用します。
JUI のラベルコンポーネントは HTML `<label/>` を表します。

以下は、静的ラベルを追加する例です

```js title="staticLabel.js"
const staticLabelJSON =  {
    "component": "label", //tells the component name
    "label": "This is an example label", // the string to be displayed
}
```

以下の JSON は、動的文字列を表示します。

```js title="dynamicLabel.js"
const labelJSON =  {
    "component": "label", //tells the component name
    "label": "@name", // the variable storing the text to be displayed
},
```

レンダリングされたラベルは次のようになります。

![label](./imgs/label.png "Label")
