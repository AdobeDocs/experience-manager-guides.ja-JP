---
title: リスト
description: リスト
role: User, Admin
exl-id: 333b5e24-efba-4a51-8f68-83b5d1d7daec
source-git-commit: e40ebf4122decc431d0abb2cdf1794ea704e5496
workflow-type: tm+mt
source-wordcount: '59'
ht-degree: 5%

---

# リスト

リストを表示するには、コンポーネントリストを使用します。

```js title="list.js"
const listJSON =  {
    "component": "list", //tells the component name
    "data": "@languages", // an array of list items
},
```

ここで、言語は文字列の単純な配列です。 `languages = ["English", "Hindi", "French"]`
オブジェクトのリストをレンダリングする場合は、項目設定を使用して構造を指定できます。

```js title="list.js"
const listJSON =  {
    "component": "list", //tells the component name
    "data": "@projects", // an array of list items
    "itemConfig": { // used to define the structure of the list items.
    "component": "widget",
    "id": "checkbox_label"
    }
},
```

通常、itemConfig は `widget` です。 ウィジェットについて詳しくは、[&#x200B; ウィジェット &#x200B;](../Widgets/basic-widget.md) を参照してください

レンダリングされたリストは次のようになります。

![list](./imgs/list.png "List")
