---
title: リリースノート | Adobe Experience Managerガイド 4.2.1 リリースの新機能
description: Adobe Experience Managerガイドの 4.2.1 リリースの新機能と拡張機能について説明します。
exl-id: 441aa7ec-d88c-42cb-83f0-d0f6e58bfa41
feature: What's New
role: Leader
source-git-commit: 6d8c01f20f7b59fed92c404561b647d9ebecb050
workflow-type: tm+mt
source-wordcount: '710'
ht-degree: 0%

---

# Adobe Experience Managerガイドの 4.2.1 リリース（2023 年 5 月）の新機能

この記事では、Adobe Experience Managerガイド ( 後で *AEMガイド*) をクリックします。

アップグレードの手順、互換性マトリックス、およびこのリリースで修正された問題について詳しくは、 [リリースノート](release-notes-4-2-1.md) 記事。

## Web エディターからAEMホームページに移動します。

これで、Web エディターからAEMナビゲーションページに簡単に移動できます。

![](assets/web-editor-launch-page.png){width="800" align="left"}

* 次をクリック： **ガイド** アイコン (![](assets/aem-guides-icon.png) ) をクリックし、AEMナビゲーションページに戻ります。


詳しくは、 [AEM Navigation ページ](../user-guide/web-editor-launch-editor.md#id2056BG00RZJ).

## PDF公開での高度なメタデータのサポート

AEMガイドで、PDF出力のメタデータにマッピングされるメタデータに対する高度なサポートを提供するようになりました。 メタデータオプションには、作成者名、ドキュメントのタイトル、キーワード、著作権情報、その他のデータフィールドなど、ドキュメントとその内容に関する情報が含まれます。

<img src="assets/pdf-metadata.png" alt=" ネイティブ pdf メタデータ">

XMPファイルを読み込むと、AEMガイドはファイルから情報を選択できます。 また、ドロップダウンを使用してメタデータの名前と値を指定することもできます。 また、名前フィールドに直接入力して、カスタムメタデータを追加することもできます。

詳しくは、 **メタデータ** 機能の説明 [PDF出力プリセットの作成](../web-editor/native-pdf-web-editor.md).

### 拡張アウトライン表示パネル

AEMガイドでは、改善されたアウトラインビューパネルを使用して、ドキュメントで使用される要素の階層ビューを取得できます。

<img src="assets/select-element-content-outline-view_cs.png" alt=" ネイティブ pdf メタデータ">

アウトライン・ビューには、次の機能強化が含まれます。

* 「表示オプション」ドロップダウンが「アウトライン・ビュー」パネルの上部に表示されます。 要素に ID、属性、テキストが含まれている場合は、ドロップダウンからそれらを選択して、要素と共に表示できます。 アウトライン・ビュー・パネルに表示できる属性は、管理者が **エディター設定**.

* 検索機能を使用すると、名前、ID、テキストまたは属性値で要素を検索できます。

詳細については、「アウトライン・ビュー機能の説明」を参照してください。 [左パネル](../user-guide/web-editor-features.md#id2051EA0M0HS) 」セクションに入力します。

## Web エディターからマルチメディアレポートを生成する

AEMガイドは、技術ドキュメントに関するレポートを生成する機能を提供します。  この機能を使用して、トピックリストを表示し、ドキュメントのメタデータを管理できます。 現在のマップのすべての参照で使用されているマルチメディアを、 **レポート** 」タブをクリックします。

現在のマップ内の参照で使用されるマルチメディアに関する詳細な情報を含むマルチメディアレポートを生成できます。 レポートに表示されるマルチメディアファイルを柔軟にフィルタリングし、並べ替えることができます。
また、CSV を生成して、DITA マップで使用するマルチメディアの現在のスナップショットをダウンロードすることもできます。

<img src="assets/web-editor-reports-multimedia.png" alt="マルチメディアレポート" width="600">

詳しくは、 [Web エディターからの DITA マップレポート](../user-guide/reports-web-editor.md) 」セクションに入力します。

## ネイティブPDF | 変更バーを使用して、目次の変更されたトピックを示します。

AEMガイドで、出力されたトピックの目次内で変更されたPDFをすばやく識別できるようになりました。  目次の変更済みトピックの左側に変更バーが表示されます。 目次のトピックをクリックすると、詳細な変更が表示されます。

<img src="assets/change-marker-toc.png" alt="目次のマーカーを変更 " width="500">

詳しくは、 [カスタムの変更バースタイルを使用する](../native-pdf/change-bar-style.md).



## ネイティブPDF | 脚注コンポーネントのページマーカーのスタイル設定

これで、足の音符のページマーカーのスタイルを設定できます。 例えば、角括弧を追加したり、色を変更したりできます。 これらのスタイルを使用すると、ドキュメント内のページのマーカーを簡単に識別できます。

詳しくは、 [脚注でのカスタムスタイルの使用](../native-pdf/footnote-number-style.md).

## Web エディターでビデオまたはオーディオファイルを開いて再生します。

AEMガイドで、Web エディターでオーディオまたはビデオファイルを開いて再生する機能が提供されるようになりました。 ビデオのボリュームまたはビューを変更できます。 ショートカットメニューには、次のオプションもあります。 **ダウンロード**，変更 **再生速度**&#x200B;または表示 **ピクチャーインピクチャー**.

<img src="assets/video-web-editor.png" alt="ビデオを再生" width="600">

詳しくは、 [左パネル](../user-guide/web-editor-features.md#id2051EA0M0HS) 」セクションに入力します。
