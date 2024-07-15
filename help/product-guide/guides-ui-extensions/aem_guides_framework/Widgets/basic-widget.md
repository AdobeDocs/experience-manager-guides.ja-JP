---
title: ウィジェット
description: ウィジェットについて
role: User, Admin
exl-id: 96e960df-d595-4d58-8ad4-27057f857bac
source-git-commit: e40ebf4122decc431d0abb2cdf1794ea704e5496
workflow-type: tm+mt
source-wordcount: '87'
ht-degree: 2%

---

# ウィジェット

コンポーネント セクションで説明しているように、複数の基本コンポーネントを組み合わせてウィジェットを作成できます。
ウィジェットを使用すると、新しい「より複雑な」コンポーネントを作成したり、コンポーネントの項目に構造を指定したりできます。

ウィジェットの概念について詳しく説明します。

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

ここで、`widget_languages` のモデルで定義される配列は `@languages` です。[ 「英語」、「フランス語」、「ヒンディー語」、「スペイン語」、「ウルドゥ語」 ]

レンダリングされた基本ウィジェットは次のようになります。

![basic_widget](imgs/basic_widget.png "Basic ウィジェット ")
