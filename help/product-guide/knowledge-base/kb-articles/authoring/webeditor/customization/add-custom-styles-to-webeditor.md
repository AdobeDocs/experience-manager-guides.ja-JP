---
title: Guides ウェビエディターへのカスタムスタイルの追加
description: カスタムスタイルを追加して、Guides ウェビエディターのルックアンドフィールを変更する方法を説明します。
exl-id: 03143fb2-d05d-4103-b172-8b91880b7f9e
feature: Web Editor
role: User, Admin
source-git-commit: be06612d832785a91a3b2a89b84e0c2438ba30f2
workflow-type: tm+mt
source-wordcount: '261'
ht-degree: 0%

---

# Guides ウェビエディターへのカスタムスタイルの追加

この記事では、カスタムスタイルを追加して、webeditor のデフォルトのルックアンドフィールを変更する方法を説明します。

これには、次の手順が含まれます。
- フォルダープロファイル XML エディター設定を使用したカスタムスタイルの追加
- Webeditor での各フォルダープロファイルの選択と変更のテスト


## 例を使用した実装

短い説明とタイトルを、スタイルの側面を持つ別のブロックとしてエディターに表示する例について説明します。

![&#x200B; カスタムスタイルを使用した webeditor のプレビュー &#x200B;](../../../assets/authoring/webeditor-customstyles-preview.png)


## これを実装する


### フォルダープロファイルへのカスタム CSS の追加

フォルダープロファイルを使用して「XML エディター設定」タブで *css_layout.css* を確認し、カスタムスタイルを持つ CSS を追加します。

[&#x200B; フォルダープロファイルと CSS テンプレートレイアウトの設定について詳しくは、このリンクを参照してください &#x200B;](https://experienceleague.adobe.com/docs/experience-manager-guides-learn/videos/advanced-user-guide/editor-configuration.html?lang=ja#customize-the-css-template-layout)

以下を使用して、ウェビデターで上記のスタイルを設定します。
- [css_layout.css](../../../assets/authoring/webeditor-customstyles-css_layout.css) を使用し、選択したフォルダープロファイルにアップロードします
- AEM パッケージマネージャーを使用して、添付パッケージ [webeditor-styles-resources.zip](../../../assets/authoring/webeditor-styles-resources.zip) をインストールし、上記の CSS ファイルで使用されているリソースをインストールします

```
This will install the resources at path "/content/dam/resources" which will include sub-folders "fonts" and "images"
```


### テスト

- Web エディターを開く
- ユーザーの環境設定から、カスタムスタイルを追加したフォルダープロファイルを選択します。 グローバルプロファイルに追加した場合は、既に使用している可能性があります。
- トピックを開くと、編集領域にカスタム UI が必要であることがわかります

```
Please note this is compatible to AEM Guides version 4.2 and AEM Guides cloud version 2303 (March)
```


## 参照

また、「webeditor に関するエキスパートセッション [&#x200B; で説明している、webeditor 設定とカスタマイズに関するエキスパートセッションにも関心があるかもしれ &#x200B;](https://experienceleague.adobe.com/docs/experience-manager-guides-learn/tutorials/knowledge-base/expert-session/webbased-authoring-jan2023.html?lang=ja) せん。
