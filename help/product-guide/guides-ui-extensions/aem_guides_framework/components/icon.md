---
title: アイコン
description: アイコン
role: User, Admin
exl-id: 5ba41c77-7329-49fc-bce5-02682261ea8e
TQID: https://experienceleague.adobe.com/5c5VcpdsC33tCSWajYHY08FIVVmxkidHnj9nKNzgeUA
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 51
ht-degree: 5%

---

# アイコン

アイコンを表示するには、コンポーネントのアイコンを使用します。
JUIのテキスト領域コンポーネントは、html `<icon/>`を表します。

[Adobe Spectrum Icons](https://spectrum.adobe.com/page/icons/)で利用できるアイコンは、当社のアプリと互換性があります。

```js title="icon.js"
const iconJSON =  {
    "component": "icon", //tells the component name
    "icon": "info", // name of the icon to be used
    "size": "S", // size of the icon
    "title": "Information" // tooltip corresponding to the icon.
},
```

ボタンにアイコンを追加することもできます。

レンダリングされたアイコンは次のようになります。

![&#x200B; アイコン &#x200B;](./imgs/info_icon.png " アイコン ")
