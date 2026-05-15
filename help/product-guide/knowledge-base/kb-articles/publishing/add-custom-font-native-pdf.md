---
title: DITA PDFにカスタムフォントを追加する
description: カスタムのフォント統合を実現して、ネイティブ DITA PDF内のすべてのコンテンツでブランドアイデンティティとビジュアルの一貫性を強化します。
feature: Native PDF Output
author: Pulkit Nagpal(punagpal)
role: User, Admin
exl-id: 151e3b1c-6340-4ff2-84d4-246bc4b68065
TQID: https://experienceleague.adobe.com/xqr9eYA2XTcyXL8X4aS-Wu2-FmU8-aCWDpb-L2BBFqI
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
subfeature_v2:
  - id: d6596f3f-92a7-43ec-b444-237db6adad05
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 223
ht-degree: 0%

---

# DITA Native PDFにカスタムフォントを追加する

## 主な内容：

カスタムフォントを追加することで、あらゆるコンテンツでブランドアイデンティティと視覚的な一貫性を強化できます。

このプロセスには、次の3つのステップがあります。

- [カスタムフォントのアップロード](#step-1--upload-the-custom-font-to-the-resource-folder-of-your-template)
- [PDF テンプレートのスタイルシートに必要な変更を加える](#step-2--make-necessary-changes-in-pdf-templatess-stylesheet)

- [使用中のフォントを埋め込む（オプション）](#step-3-optional--embed-used-font-in-pdf)

## 手順1：カスタムフォントをテンプレートのリソースフォルダーにアップロードする

![&#x200B; カスタムフォントのアップロードと](../assets/publishing/custom-font1.png)のインポート

## 手順2 :PDF テンプレートのスタイルシートを変更する

PDFのテンプレートのスタイルシート ![&#128279;](../assets/publishing/custom-font2.png)の フォント面

## 手順3 （オプション）：使用したフォントをPDFに埋め込む

![DITA PDFへのカスタムフォントの埋め込み](../assets/publishing/custom-font3.png)

## よくある質問

### Adobe Fontsは使用できますか？

> はい、fonts.adobe.comに移動し、「Web プロジェクトに追加」をクリックします。
> 
> `" @import url("https://use.typekit.net/xxxx.css")`のようなインポート コードをコピーします。
>
> コンテンツ CSSを貼り付け、CSS ファイルで必要な変更を行います。

![DITA PDFでアドビフォントを使用](../assets/publishing/custom-font4.png)


### PDFにフォントが表示されない

> フォント名のスペルをダブルチェック（最も一般的な間違い）
>
> PDFを開いているシステムでフォントが使用できない場合は、フォントを埋め込むことにします

## その他の質問については、それぞれのCSMにお問い合わせください


## 関連トピックス：

- [PDFにDITA ブックマップの目次を含める方法](./how-to-include-bookmap-toc-in-pdf-publishing.md)
- [PDF パブリッシングに目次を含める方法](./how-to-include-bookmap-toc-in-pdf-publishing.md)
- [ネイティブPDFに関するエキスパートセッションの動画](../../expert-sessions/native-pdf-publishing-eamples-part1-june2023.md)
