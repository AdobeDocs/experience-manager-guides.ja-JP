---
title: ウィジェットのレンダリング
description: JUI ウィジェットでのレンダリングの仕組み
role: User, Admin
exl-id: 381cc7b9-c957-40be-9db4-8347eefe2fa7
source-git-commit: e40ebf4122decc431d0abb2cdf1794ea704e5496
workflow-type: tm+mt
source-wordcount: '86'
ht-degree: 0%

---

# ウィジェットのレンダリング

`id` を使用して参照することで、ウィジェットをレンダリングできます

アプリ内の任意の場所でウィジェット `widget_languages` をレンダリングするには、シンプルな構文を使用できます。

```json
{
    "component": "widget",
    "id": "widget_languages"
}
```

ウィジェットは、複雑な項目をレンダリングするためにも使用できます。例えば、各ファイルに対する投稿者のリストをレンダリングするとします。
ここでは、ウィジェットは次のように構築できます。

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

次に、各ファイルの投稿者のリストをレンダリングするために、リストを次のように記述します。

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

フィールド `@files` 含まれるファイルオブジェクトのリストを以下に示します

```typescript
- fileName: string
- contributors: Array<String>
```
