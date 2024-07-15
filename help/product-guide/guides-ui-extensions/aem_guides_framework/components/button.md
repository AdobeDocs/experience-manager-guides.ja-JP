---
title: ボタン
description: ボタン
role: User, Admin
exl-id: 40e3f254-f94e-4f43-8ff5-2e6e1eb1cb6f
source-git-commit: e40ebf4122decc431d0abb2cdf1794ea704e5496
workflow-type: tm+mt
source-wordcount: '60'
ht-degree: 5%

---

# ボタン

ボタンを表示するには、コンポーネント、ボタンを使用します。
JUI のボタンコンポーネントは HTML `<button/>` を表します。

```js title="buttonJSON.js"
const buttonJSON = {
  "component": "button",//tells the component name
  "label": "Yes, login",//tells the text for the button
  "variant": "cta",//tells the variants for the button which  provides default styles
  "on-click": "done",//tells what function to run after user clicks the button
};
```

これにより、`Yes, login` というラベルのボタンが生成されます。 その他のプロパティには、バリアント、ラベル、クリック時が含まれますが、これらに限定されません。
> **_注意：_** コントローラ内のコマンドを呼び出すための構文は `on-<events>` のとおりです。

レンダリングされたボタンは次のようになります。

![button](imgs/yes_login_button.png "Button")
