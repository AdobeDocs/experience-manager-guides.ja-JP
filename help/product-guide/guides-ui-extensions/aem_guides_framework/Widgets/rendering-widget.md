---
title: ウィジェットのレンダリング
description: JUI ウィジェットでのレンダリングの仕組み
source-git-commit: f9a72e44fe1a3d90180ff728189a24ea9c7b1b1a
workflow-type: tm+mt
source-wordcount: '86'
ht-degree: 0%

---

# ウィジェットのレンダリング

ウィジェットをレンダリングするには、ウィジェットをそのウィジェットを使用して参照します。 `id`

ウィジェットをレンダリングするには `widget_languages` アプリの任意の場所で、次のシンプルな構文を使用できます。

```json
{
    "component": "widget",
    "id": "widget_languages"
}
```

ウィジェットは、複雑なアイテムをレンダリングする場合にも使用できます。例えば、各ファイルにコントリビュータのリストをレンダリングする場合などです。
ここで、ウィジェットは次のように構築できます。

```js title="fileContributorsWidget.js"
const widgetJSON =  {
    component: "div", 
    id: "file_contributors", 
    items: [ // adding components to the widget
        {
            component: "div",
            items: [
                {
                    component: "icon",
                    icon: "file"
                },
                {
                    component: "label",
                    label: "@fileName"
                }
            ]
        },
        {
            component: "list",
            data: "@contributors",
            itemConfig: {
                component: "label"
            }
        }
    ]
},
```

次に、各ファイルの寄稿者のリストをレンダリングするために、リストを次のように書き込みます。

```js title="fileContributorsList.js"
const listJSON = {
    component: "list"
    data: "@files"
    itemConfig: {
        component: "widget",
        id: "file_contributors"
    }
}
```

ここ `@files` は、フィールドを含むファイルオブジェクトのリストです

```typescript
- fileName: string
- contributors: Array<String>
```
