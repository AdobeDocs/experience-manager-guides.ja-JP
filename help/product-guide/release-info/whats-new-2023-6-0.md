---
title: リリースノート | Adobe Experience Manager Guidesの新機能（2023年6月リリース）
description: Adobe Experience Manager Guides as a Cloud Serviceの2023年6月リリースの新機能と強化機能について説明します
exl-id: 625f9702-2b91-4622-9fec-282f47f1d7a6
feature: What's New
role: Leader
source-git-commit: 12ba7129255257970ddd7a0989149be664ce9803
workflow-type: tm+mt
source-wordcount: '1216'
ht-degree: 0%

---

# Adobe Experience Manager Guides as a Cloud Serviceの2023年6月リリースの新機能

この記事では、Adobe Experience Manager Guidesの2023年6月バージョン（後に&#x200B;*AEM Guides as a Cloud Service*&#x200B;と呼ばれます）の新機能と強化機能について説明します。

アップグレード手順、互換性マトリックス、およびこのリリースで修正された問題について詳しくは、[&#x200B; リリースノート &#x200B;](release-notes-2023-6-0.md)を参照してください。

## Web エディターでの壊れたリンクのレポート

AEM Guidesを使用すると、テクニカルドキュメントの全体的な完成度を確認し、Web エディターからレポートを生成できます。 2023年6月リリースのAEM Guidesでは、破損したリンクを表示および修正する機能が提供されています。 これは、壊れたリンクを管理するのに役立つ便利なレポートです。 DITA マップに存在する壊れたリンクを簡単に表示し、修正することもできます。
![](assets/broken-link-report.png){width="800"}

リンクを修正すると、壊れたリンクのリストの下に表示されません。

詳しくは、[破損したリンクの表示と修正](../user-guide/reports-web-editor.md#report-broken-links)を参照してください。

## リポジトリビュー内でのファイルの名前の変更と移動

リポジトリパネルからファイルの名前を変更したり、移動したりすることもできます。 この機能は便利で、リポジトリパネルからファイルを簡単に管理できます。 ファイルを選択し、選択したファイルの&#x200B;**オプション** メニューを使用して名前を変更または移動できます。 ファイルを移動または名前を変更すると、AEM Guidesに成功メッセージが表示されます。

![](assets/rename-move-assets.png){width="650"}

ファイルのオプションメニューについて詳しくは、[左パネル &#x200B;](../user-guide/web-editor-features.md#id2051EA0M0HS) セクションの&#x200B;**リポジトリビュー**&#x200B;機能の説明を参照してください。

## PDFのネイティブ機能

### ドラフトドキュメントのPDF出力に透かしを追加する

これで、未承認の文書のPDF出力に透かしを追加できます。 この透かしは、文書のPDFを「承認済み」状態で生成した場合には表示されません。 例えば、PDF出力に透かしドラフトを追加できます。

詳しくは、[下書きドキュメントのPDF出力に透かしを追加する](../native-pdf/use-javascript-content-style.md#watermark-draft-document)を参照してください。

### 言語変数のサポート

AEM Guidesでは、言語変数をサポートしています。 言語変数を使用すると、メモ、注意、警告などの標準ラベルのローカライズ版や、PDF出力の静的テキストを定義できます。
PDF出力および出力テンプレートの適切なセクションに、言語変数またはラベルのローカライズ版を追加できます。

#### PDF出力の言語変数

言語変数を使用して、メモ、注意、警告などの要素のローカライズされたラベルを定義できます。 これらの変数の値を1つ以上の言語で更新すると、ローカライズされた値がPDF出力で自動的に選択されます。
例えば、次の方法でPDF出力にラベルノートを表示できます。

* 英語：メモ
* フランス語：Remarque
* ドイツ語：Hinweis

#### 出力テンプレートの言語変数

PDF出力を様々な言語で作成する場合は、各言語用のローカライズされたテキストを含む様々なPDF テンプレートを作成する必要がありました。 言語変数機能を使用すれば、テンプレートを一度作成するだけで済みます。 次に、ローカライズする必要がある静的テキストについて、対応する言語変数を作成し、テンプレートで使用できます。
文全体や段落など、長いテキストの言語変数を作成できます。 また、スタイルを適用し、HTML マークアップを使用してこれらの言語変数を書式設定することもできます。

詳しくは、[言語変数のサポート &#x200B;](../native-pdf/native-pdf-language-variables.md)を参照してください。

### PDF レイアウトでAEM メタデータを使用する機能

メタデータとは、コンテンツの説明または定義のことです。 このメタデータは、ソース DITA マップコンテンツに保存されます。

Adobe AEM Guidesでは、アセットのメタデータプロパティを選択して、ページレイアウトに追加することもできます。 次に、AEM Guidesはアセットのこれらのメタデータプロパティを選択し、PDF出力で公開します。


![](assets/native-pdf-metadata-asset.png){width="550"}

>[!NOTE]
>
> AEM Guidesは、DITA マップのメタデータプロパティもサポートしています。

詳細については、[&#x200B; フィールドとメタデータの追加](../native-pdf/design-page-layout.md#add-fields-metadata)を参照してください。


## Schematronの機能強化

### Report ステートメントを使用して、Schematronのルールを確認する

AEM Guidesは、Schematronでレポートステートメントもサポートするようになりました。 レポート文は、テスト文がtrueと評価されたときにメッセージを生成します。 例えば、短い説明を150文字以下にする場合は、レポート文を定義して、短い説明が150文字以上のトピックを確認できます。

詳細については、[&#x200B; アサートステートメントとレポートステートメントを使用してルールを確認する](../user-guide/support-schematron-file.md#schematron-assert-report)を参照してください。

### 正規表現の使用

正規表現を使用してmatches （）関数でルールを定義し、Schematron ファイルを使用して検証を実行することもできます。

詳しくは、[正規表現の使用](../user-guide/support-schematron-file.md#schematron-assert-report)を参照してください。


### 抽象パターンを定義する

AEM Guidesは、Schematronの抽象パターンもサポートしています。 一般的な抽象パターンを定義して、これらの抽象パターンを再利用できます。 抽象パターンは、Schematron スキーマを簡素化し、検証ロジックの管理と更新にも役立ちます。


詳しくは、[抽象パターンの定義](../user-guide/support-schematron-file.md#schematron-abstract-patterns)を参照してください。

## Web エディターからAEM ホームページに移動します

Web エディターからAEM ホームページに簡単に移動できるようになりました。

![](assets/web-editor-launch-page.png){width="800"}

* 「**ガイド**」アイコン（![](assets/aem-guides-icon.png)）をクリックして、AEMのナビゲーションページに戻ります。


詳しくは、[AEMのナビゲーションページ &#x200B;](../user-guide/web-editor-launch-editor.md#id2056BG00RZJ)を参照してください。

## 件名の定義と列挙の階層定義の処理

AEM Guidesには、分類の被写体と制御値を定義するために使用されるDITA マップの特殊な形式である被写体スキーム マップを作成する強力な機能が搭載されています。 AEM Guidesでは、マップ内の被写体の定義と別のマップ内の列挙定義を定義することもできます。 その後、マップ参照を追加し、件名スキームを使用できます。
サブジェクト列挙の参照は、同じマップまたは参照されたマップで解決されます。

件名の定義と列挙の階層定義の処理について詳しくは、[左パネル &#x200B;](../user-guide/web-editor-features.md#id2051EA0M0HS) セクションの&#x200B;**件名スキーム**&#x200B;機能の説明を参照してください。

## 翻訳でのXLIFF形式のサポート

AEM Guidesでは、XML Localization Interchange File Format （XLIFF）形式のサポートも提供されています。 また、**新しいXLIFF翻訳プロジェクトを作成**&#x200B;して、XML コンテンツをXLIFF形式に変換することもできます。
この形式を使用すると、コンテンツを業界標準のXLIFF形式に書き出してから、翻訳ベンダーに同じものを提供できます。詳細については、[翻訳プロジェクトの作成](../user-guide/translate-documents-web-editor.md#create-translation-project)を参照してください。

![](assets/translation-project-types.png){width="350"}



## 改善されたお気に入りパネル

AEM Guidesを使用すると、ファイルやフォルダーのコレクションやお気に入りのリストを作成し、簡単に使用できます。 現在、**オプション** メニューは、**お気に入り** パネルでも使用できます。 選択したコレクションの名前を変更するか、**オプション** メニューから削除できます。 「**更新**」オプションを選択して、リポジトリからファイルまたはフォルダーの新しいリストを取得できます。 Assets UIでフォルダーの内容を表示することもできます。

![](assets/favorites-options.png){width="650"}

>[!NOTE]
>
> 上部の&#x200B;**更新** アイコンを使用して、リストを更新することもできます。

お気に入りコレクションの&#x200B;**オプション** メニューについて詳しくは、[左パネル &#x200B;](../user-guide/web-editor-features.md#id2051EA0M0HS) セクションの&#x200B;**お気に入り**&#x200B;機能の説明を参照してください。

## システムテーマに切り替え

デバイスのテーマを使用できるようになりました。 **ユーザー環境設定**&#x200B;を使用すると、AEM Guidesで、デバイスのテーマに基づいて明るいテーマと暗いテーマを自動的に切り替えるように設定できます。

![](assets/device-theme-user-preferences.png){width="550"}

詳細については、[&#x200B; メインツールバー](../user-guide/web-editor-features.md#id2051EA0G05Z) セクションの&#x200B;**ユーザー環境設定**&#x200B;機能の説明を参照してください。
