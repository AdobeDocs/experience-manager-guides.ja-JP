---
title: テキスト領域
description: テキスト領域
source-git-commit: 2e1cb576fa3b0a765304508e5f7962a154f1a72c
workflow-type: tm+mt
source-wordcount: '64'
ht-degree: 3%

---

# テキストフィールドとテキスト領域

テキストを入力として使用するには、コンポーネント、テキストフィールドおよびテキスト領域を使用します。
JUI のテキスト領域コンポーネントは、html を表します。 `<textarea/>`.

```js title="textArea.js"
const textAreaJSON =  {
    "component": "textarea", //tells the component name
    "id": "input_name", // can be used to give a unique identifier to a component
    "data": "@name", // the variable storing the inputted text
    "on-keyup": {
        "name": "submitName",
        "eventArgs": {
            "keys": [
            "ENTER"
            ]
        }
    },
},
```

ここで `on-keyup` は、コントローラ内のコマンドを呼び出すための構文です。
これにより、 textArea が生成され、 Enter キーを押すとイベントが呼び出されます `submitName`

レンダリングされたテキスト領域は次のようになります。

![text-area](./imgs/text_area.png "テキスト領域")
