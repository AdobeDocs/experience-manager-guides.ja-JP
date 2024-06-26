---
title: ウィジェット
description: ウィジェットについて
role: User, Admin
source-git-commit: be06612d832785a91a3b2a89b84e0c2438ba30f2
workflow-type: tm+mt
source-wordcount: '87'
ht-degree: 0%

---


# ウィジェット

コンポーネントの節で説明したように、複数の基本コンポーネントを組み合わせてウィジェットを作成できます。
ウィジェットを使用して、新しい「より複雑な」コンポーネントを作成したり、コンポーネントの項目に構造を設定したりできます。

ウィジェットの概念について説明しましょう。

まず、言語のリストを表示する簡単なウィジェットを作成します。

```js title="basicWidget.js"
const widgetJSON =  {
    "component": "div", 
    "id": "widget_languages", 
    "items": [ // adding components to the widget
        {
            "component": "div",
            "items": [
                {
                    "component": "icon",
                    "icon": "info"
                },
                {
                    "component": "label",
                    "label": "List of some languages"
                }
            ]
        },
        {
            "component": "list",
            "data": "@languages"
        }
    ]
},
```

ここで `@languages` は、次のモデルで定義された配列です： `widget_languages` 形式： [&quot;英語&quot;, &quot;フランス語&quot;, &quot;ヒンディー語&quot;, &quot;スペイン語&quot;, &quot;ウルドゥー語&quot;]

レンダリングされた基本ウィジェットは次のようになります。

![basic_widget](imgs/basic_widget.png "基本ウィジェット")
