---
title: ボタン
description: ボタン
source-git-commit: 2e1cb576fa3b0a765304508e5f7962a154f1a72c
workflow-type: tm+mt
source-wordcount: '60'
ht-degree: 5%

---


# ボタン

ボタンを表示するには、コンポーネントの「 」ボタンを使用します。
JUI のボタンコンポーネントは html を表します `<button/>`.

```js title="buttonJSON.js"
const buttonJSON = {
  "component": "button",//tells the component name
  "label": "Yes, login",//tells the text for the button
  "variant": "cta",//tells the variants for the button which  provides default styles
  "on-click": "done",//tells what function to run after user clicks the button
};
```

これにより、 `Yes, login`. その他のプロパティには、variant、label、on-click などがありますが、これらに限定されません。
> **_注意：_**  The `on-<events>` は、コントローラ内のコマンドを呼び出すための構文です。

レンダリングされたボタンは次のようになります。

![ボタン](imgs/yes_login_button.png "ボタン")
