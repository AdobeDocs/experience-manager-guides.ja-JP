---
title: リリースノート | Adobe Experience Manager Guides 4.2.1 リリースの新機能
description: Adobe Experience Manager Guides 4.2.1 リリースの新機能と強化機能について説明します
exl-id: 441aa7ec-d88c-42cb-83f0-d0f6e58bfa41
feature: What's New
role: Leader
TQID: https://experienceleague.adobe.com/k-n-2PgbaHCR7-9cpjaeK1vD3T2rA-TeuMxBI78dpIU
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
  - id: d90290ec-3e61-4ebd-8649-bcafe0836803
role_v2:
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 706
ht-degree: 0%

---

# Adobe Experience Manager Guidesの4.2.1 リリース（2023年5月）の新機能

この記事では、Adobe Experience Manager Guides（後で&#x200B;*AEM Guides*&#x200B;と呼ばれます）のバージョン 4.2.1の新機能と強化機能について説明します。

アップグレード手順、互換性マトリックス、およびこのリリースで修正された問題について詳しくは、[&#x200B; リリースノート &#x200B;](release-notes-4-2-1.md)の記事を参照してください。

## Web エディターからAEM ホームページに移動します

Web エディターからAEM ナビゲーションページに簡単に移動できるようになりました。

![](assets/web-editor-launch-page.png){width="800"}

* 「**ガイド**」アイコン（![](assets/aem-guides-icon.png)）をクリックして、AEMのナビゲーションページに戻ります。


詳しくは、[AEMのナビゲーションページ &#x200B;](../user-guide/web-editor-launch-editor.md#id2056BG00RZJ)を参照してください。

## PDF公開時の高度なメタデータのサポート

AEM Guidesでは、PDF出力のメタデータにマッピングされるメタデータの高度なサポートが提供されるようになりました。 メタデータオプションには、作成者の名前、ドキュメントタイトル、キーワード、著作権情報、その他のデータフィールドなど、ドキュメントとそのコンテンツに関する情報が含まれます。

<img src="assets/pdf-metadata.png" alt=" ネイティブ pdf メタデータ">

XMP ファイルを読み込むことができ、AEM Guidesはファイルから情報を選択できます。 ドロップダウンを使用して、メタデータ名と値を指定するオプションもあります。 また、「名前」フィールドに直接入力して、カスタムメタデータを追加することもできます。

詳しくは、[PDF出力プリセットの作成](../web-editor/native-pdf-web-editor.md)の&#x200B;**メタデータ**&#x200B;機能の説明を参照してください。

### 拡張アウトライン表示パネル

AEM Guidesでは、ドキュメントで使用されるエレメントの階層ビューを取得するための改善されたアウトライン表示パネルを提供しています。

<img src="assets/select-element-content-outline-view_cs.png" alt=" ネイティブ pdf メタデータ">

アウトラインビューには、次の機能強化が用意されています。

* アウトライン表示パネルの上に「表示オプション」ドロップダウンが表示されます。 エレメントにID、属性およびテキストがある場合は、ドロップダウンからエレメントを選択して、エレメントと共に表示できます。 アウトライン表示パネルに表示できる属性は、管理者が&#x200B;**エディター設定**&#x200B;内で設定した表示属性の設定によって決まります。

* 検索機能を使用すると、名前、ID、テキストまたは属性値でエレメントを検索できます。

詳しくは、[左パネル &#x200B;](../user-guide/web-editor-features.md#id2051EA0M0HS) セクションのアウトライン表示機能の説明を参照してください。

## Web エディターからのマルチメディアレポートの生成

AEM Guidesには、テクニカルドキュメントのレポートを生成する機能が用意されています。  この機能を使用すると、トピックリストを表示したり、ドキュメントのメタデータを管理したりできます。 また、Web エディターの「**レポート**」タブから、現在のマップのすべての参照で使用されているマルチメディアを確認することもできます。

現在のマップ内の参照で使用されるマルチメディアに関する詳細情報を含むマルチメディアレポートを生成できます。 レポートにリストされているマルチメディアファイルを柔軟にフィルタリングおよび並べ替えることができます。
CSVを生成して、DITA マップで使用されているマルチメディアの現在のスナップショットをダウンロードすることもできます。

<img src="assets/web-editor-reports-multimedia.png" alt="マルチメディアレポート" width="600">

詳しくは、「[DITA マップレポートのマルチメディアレポート機能の生成」のWeb エディター](../user-guide/reports-web-editor.md) セクションを参照してください。

## ネイティブ PDF |目次の変更されたトピックを示す改訂バー

AEM Guidesでは、PDF出力の目次で変更されたトピックをすばやく特定できるようになりました。  目次の変更されたトピックの左側に変更バーが表示されます。 目次のトピックをクリックして、詳細な変更を表示できます。

<img src="assets/change-marker-toc.png" alt="目次のマーカーを変更 " width="500">

詳細については、[&#x200B; カスタム改訂バーのスタイルの操作](../native-pdf/change-bar-style.md)を参照してください。



## ネイティブ PDF |脚注コンポーネントのページマーカーのスタイル設定

これで、脚注のページマーカーのスタイルを設定できます。 例えば、角括弧を追加したり、色を変更したりできます。 これらのスタイルは、ユーザーが文書内のページマーカーを簡単に識別するのに役立ちます。

詳しくは、[脚注でカスタムスタイルを使用する](../native-pdf/footnote-number-style.md)を参照してください。

## Web エディターでビデオファイルまたはオーディオファイルを開いて再生する

AEM Guidesには、Web エディターでオーディオファイルまたはビデオファイルを開いて再生する機能が追加されました。 ビデオのボリュームまたはビューを変更できます。 ショートカットメニューには、**ダウンロード**、**再生速度**&#x200B;の変更、または&#x200B;**画像の表示**&#x200B;のオプションもあります。

<img src="assets/video-web-editor.png" alt="動画を再生" width="600">

詳しくは、[左パネル &#x200B;](../user-guide/web-editor-features.md#id2051EA0M0HS) セクションのリポジトリビュー機能の説明を参照してください。
