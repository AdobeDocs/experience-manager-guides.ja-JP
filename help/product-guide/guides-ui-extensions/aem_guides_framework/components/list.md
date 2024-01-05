---
title: リスト
description: リスト
source-git-commit: dfd4c898d3c093bfee1a8a6efff4e395efd20c60
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

ここで、言語は単純な文字列の配列です。 `languages = ["English", "Hindi", "French"]`
オブジェクトのリストをレンダリングする場合は、item config を使用して構造を指定できます。

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

通常、itemConfig は `widget`. ウィジェットの詳細については、次の URL を参照してください： [ウィジェット](../Widgets/basic-widget.md)

レンダリングされたリストは次のようになります。

![リスト](./imgs/list.png "リスト")
