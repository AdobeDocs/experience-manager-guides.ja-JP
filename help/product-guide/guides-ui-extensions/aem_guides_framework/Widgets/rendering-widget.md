---
title: ウィジェットのレンダリング
description: JUI ウィジェットでのレンダリングの仕組み
role: User, Admin
exl-id: 381cc7b9-c957-40be-9db4-8347eefe2fa7
TQID: https://experienceleague.adobe.com/-VznRFHuyxLqumy55MssEvPMMHIIt2BelCe7C6zBqR8
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 86
ht-degree: 0%

---

# ウィジェットのレンダリング

ウィジェットをレンダリングするには、`id`を使用してウィジェットを参照します

アプリ内の任意の場所にウィジェット `widget_languages`をレンダリングするには、次のシンプルな構文を使用します。

```json
{
    "component": "widget",
    "id": "widget_languages"
}
```

ウィジェットを使用して、各ファイルにコントリビューターのリストをレンダリングするなどの複雑なアイテムをレンダリングすることもできます。
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

次に、各ファイルのコントリビューターのリストをレンダリングするには、リストを次のように書きます。

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

ここでは`@files`は、フィールドを含むファイルオブジェクトのリストです

```typescript
- fileName: string
- contributors: Array<String>
```
