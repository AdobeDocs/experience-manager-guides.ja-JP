---
title: リスト
description: リスト
role: User, Admin
exl-id: 333b5e24-efba-4a51-8f68-83b5d1d7daec
TQID: https://experienceleague.adobe.com/2mjVuKodk-Jn7tGoiF1fNpCnTd1VqK57oATMiN2gd0o
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 58
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

ここでは、言語は文字列の単純な配列です。 `languages = ["English", "Hindi", "French"]`
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

通常、itemConfigは`widget`です。 ウィジェットについて詳しくは、[ ウィジェット ](../Widgets/basic-widget.md)を参照してください

レンダリングされたリストは次のようになります。

![ リスト ](./imgs/list.png " リスト ")
