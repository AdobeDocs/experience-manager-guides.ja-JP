---
title: テキスト領域
description: テキスト領域
role: User, Admin
exl-id: 4c576acc-fa6a-4c41-9b92-443ba51dc8ee
TQID: https://experienceleague.adobe.com/ws7FgyxoutcYEts9wIJ3iQyjIwUfLrCgolSamc8ybDY
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 65
ht-degree: 3%

---

# テキストフィールドとテキストエリア

テキストを入力として取り込むには、コンポーネント、テキストフィールド、テキスト領域を使用します。
JUIのテキスト領域コンポーネントは、html `<textarea/>`を表します。

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

ここでは、`on-keyup`はコントローラ内のコマンドを呼び出すための構文です。
これにより、Enter キーを押すとイベント `submitName`が呼び出されるtextAreaが生成されます

レンダリングされたテキスト領域は次のようになります。

![ テキスト領域](./imgs/text_area.png " テキスト領域")
