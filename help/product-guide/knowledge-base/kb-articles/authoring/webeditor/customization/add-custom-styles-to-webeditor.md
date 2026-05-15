---
title: Guides webeditorへのカスタムスタイルの追加
description: Guides ウェビナーの外観を変更するカスタムスタイルを追加する方法について説明します。
exl-id: 03143fb2-d05d-4103-b172-8b91880b7f9e
feature: Web Editor
role: User, Admin
TQID: https://experienceleague.adobe.com/uQc8TTz7dHxbN6-zbin-esQevLoJR-IMR1hchrwEs8M
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2:
  - id: ad602516-aca3-4247-9ae8-f393d958efa9
  - id: b1ef4d86-3917-4b76-a0bc-4a4771f9b3b0
  - id: f89f75b0-cf2e-4e96-aec8-fe8c39cbd0ef
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 300
ht-degree: 0%

---

# Guides webeditorへのカスタムスタイルの追加

この記事では、カスタムスタイルを追加してwebeditorのデフォルトのルックアンドフィールを変更する方法について説明します。

これには次の手順が含まれます。
- フォルダープロファイル XML エディター設定を使用したカスタムスタイルの追加
- webeditorでそれぞれのフォルダープロファイルを選択し、変更をテストする


## 実例を挙げて実施

例えば、短い説明とタイトルを、エディターのスタイルの側面を持つ個別のブロックとして表示したい場合は、これを理解しましょう。

![&#x200B; カスタムスタイルを使用したweb エディターのプレビュー](../../../assets/authoring/webeditor-customstyles-preview.png)


## 導入中


### フォルダープロファイルへのカスタム CSSの追加

フォルダープロファイルを使用して、「XML エディター設定」タブの&#x200B;*css_layout.css*&#x200B;を確認し、カスタムスタイルを持つCSSを追加します

[フォルダープロファイルとCSS テンプレートレイアウトの設定について詳しくは、このリンクを使用してください](https://experienceleague.adobe.com/docs/experience-manager-guides-learn/videos/advanced-user-guide/editor-configuration.html?lang=en#customize-the-css-template-layout)

web エディターで上記のスタイルを設定するには、次の手順を使用します。
- [css_layout.css](../../../assets/authoring/webeditor-customstyles-css_layout.css)を使用して、選択したフォルダープロファイルにアップロードします
- AEM パッケージマネージャーを使用して、添付パッケージ [webeditor-styles-resources.zip](../../../assets/authoring/webeditor-styles-resources.zip)をインストールし、上記のCSS ファイルで使用するリソースをインストールします

```
This will install the resources at path "/content/dam/resources" which will include sub-folders "fonts" and "images"
```


### テスト

- web エディターを開く
- ユーザー設定から、カスタムスタイルを追加したフォルダープロファイルを選択します。 グローバルプロファイルに追加した場合は、おそらく既にそれを使用しています。
- トピックを開くと、編集領域にカスタム UIが必要になります

```
Please note this is compatible to AEM Guides version 4.2 and AEM Guides cloud version 2303 (March)
```


## 参照

また、[Webeditorに関するエキスパートセッション &#x200B;](https://experienceleague.adobe.com/docs/experience-manager-guides-learn/tutorials/knowledge-base/expert-session/webbased-authoring-jan2023.html?lang=en)で取り上げられているwebeditor設定とカスタマイズに関するエキスパートセッションにも興味があるかもしれません
