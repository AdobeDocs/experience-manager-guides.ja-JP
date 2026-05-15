---
title: ウィジェット
description: ウィジェットについて
role: User, Admin
exl-id: 96e960df-d595-4d58-8ad4-27057f857bac
TQID: https://experienceleague.adobe.com/SssVShlzFB3kjQCV-cNAOZVYb0TYSQ1CjtWoax2Q-LU
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 86
ht-degree: 2%

---

# ウィジェット

コンポーネント セクションで説明されているように、複数の基本コンポーネントを組み合わせてウィジェットを作成できます。
ウィジェットを使用すると、新しい「より複雑な」コンポーネントを作成したり、コンポーネントのアイテムに構造を与えたりできます。

ウィジェットのコンセプトについて説明します。

まず、シンプルなウィジェットで言語のリストを表示します。

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

ここでは、`@languages`は`widget_languages`のモデルで[&quot;English&quot;, &quot;French&quot;, &quot;Hindi&quot;, &quot;Spanish&quot;, &quot;Urdu&quot;]として定義されている配列です

レンダリングされた基本ウィジェットは次のようになります。

![basic_widget](imgs/basic_widget.png "基本ウィジェット ")
