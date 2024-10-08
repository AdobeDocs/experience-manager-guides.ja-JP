---
title: リリースノート | Adobe Experience Manager Guides 4.3.0 リリースの新機能
description: Adobe Experience Manager Guides 4.3.0 リリースの新機能と機能強化について説明します
exl-id: 36decbf0-ec9d-43e2-99b7-85b0f9a87bc1
feature: What's New
role: Leader
source-git-commit: 5a444e88b0adba7fa3d498437df39b729b10b5eb
workflow-type: tm+mt
source-wordcount: '2655'
ht-degree: 0%

---

# Adobe Experience Manager Guides 4.3.0 リリースの新機能（2023 年 7 月）

この記事では、Adobe Experience Manager Guides バージョン 4.3.0 （後で *AEM Guides* と呼ばれます）の新機能および拡張機能について説明します。

アップグレード手順、互換性マトリックス、このリリースで修正された問題について詳しくは、[ リリースノート ](./release-notes-4-3.md) を参照してください。


## データソースに接続し、トピックにデータを挿入する

これで、AEM Guidesの標準搭載のコネクタを使用して、データソースにすばやく接続できます。 データソースに接続すると、データとソースの同期を維持でき、データに対する更新が自動的に反映され、AEM Guidesが真のコンテンツハブになります。 この機能により、データを手動で追加またはコピーする時間と労力を節約できます。

AEM Guidesを使用すると、管理者は、JIRA および SQL （MySQL、PostgreSQL、SQL Server、SQLite）データベース用の標準のコネクタを設定できます。 また、デフォルトのインターフェイスを拡張することで、他のコネクタを追加することもできます。
追加したら、設定済みのコネクタを web エディターのデータソースパネルに表示できます。

<img src="assets/data-sources.png" alt="パネル内のデータソースリスト" width="300">

接続されたデータソースからデータを取得するコンテンツスニペットを作成します。 その後、データをトピックに挿入し、編集できます。 コンテンツスニペットジェネレーターを作成したら、それを再利用して任意のトピックにデータを挿入できます。

また、接続されたデータソースからトピックを作成できるようになりました。 トピックには、テーブル、リスト、段落など、様々な形式のデータを含めることができます。 また、すべてのトピックに対して DITA マップを作成することもできます。 データソースから取り込む際に、トピックにメタデータを関連付けることができます。

詳しくは、[ データソースのデータを使用 ](../user-guide/web-editor-content-snippet.md) を参照してください。

## コンテンツへの引用文献の追加

引用は、コンテンツに追加された情報のソースへの参照です。 引用は、信頼性を確立し、盗用を防ぐのに役立ちます。 引用は、読者がソースを見つけて、テキストに表示される情報を確認するのに役立ちます。

AEM Guidesでは、引用文を追加したり、引用文を読み込んでコンテンツに適用したりできます。 これらの引用は、書籍、Web サイト、ジャーナルの任意のソースから追加できます。

トピックに引用文を挿入した後、Web エディターでプレビューできます。 ネイティブPDFを使用して、引用のあるコンテンツを公開することもできます。

![ 合議体に掲げる引用 ](assets/citation-panel.png){width="300" align="left"}


詳しくは、[ コンテンツでの引用の追加と管理 ](../user-guide/web-editor-apply-citations.md) を参照してください。

## コンテンツフラグメントへのPublish

コンテンツフラグメントは、AEMの個別のコンテンツです。 コンテンツモデルに基づく構造化コンテンツです。 コンテンツフラグメントは、デザイン情報やレイアウト情報を含まない純粋なコンテンツです。 これらは、AEMがサポートするチャネルとは独立して作成および管理できます。 コンテンツフラグメントのモジュール性と再利用性により、柔軟性、一貫性、効率、管理の簡素化が実現します。

AEM Guidesでは、トピックまたはトピック内の要素をコンテンツフラグメントに公開する方法を提供するようになりました。 トピックとコンテンツフラグメントモデルの間に JSON ベースのマッピングを作成できます。 このマッピングを使用して、トピック内の一部またはすべての要素に存在するコンテンツをコンテンツフラグメントに公開します。

AEM Guidesとコンテンツフラグメントの機能を最大限に活用して、任意のAEM サイトでコンテンツフラグメントを使用します。 また、コンテンツフラグメントでサポートされている API を使用して詳細を抽出することもできます。

![ コンテンツフラグメントを公開するオプション ](assets/content-fragment-publish.png){width="550" align="left"}


## 機能強化の確認

AEM Guidesは、次の機能でレビュー機能が強化されました。

### レビュープロジェクトとアクティブなレビュータスクを表示するレビューパネル

AEM Guidesは、レビューをよりシームレスにします。 Web エディター内にレビューパネルが用意されています。 レビューパネルには、すべてのレビュープロジェクトと、自分が属するレビュープロジェクト内のアクティブなレビュータスクが表示されます。

この機能を使用すると、作成者はレビュータスクを簡単に開いてコメントを表示し、一元的なビューでコメントにすばやく対処できます。
![](assets/active-review-task-comments.png){width="800" align="left"}
詳しくは、「左パネル **セクション内の** レビュー [ 機能の説明を参照し ](../user-guide/web-editor-features.md#id2051EA0M0HS) ください。

### レビュートピックを検索

レビューの実施は、AEM Guidesの重要な機能です。 これは、レビュー担当者が割り当てられたドキュメントをレビューするのに役立ちます。
これで、レビュー・パネルのトピック・ビューの検索バーにタイトルまたはファイル・パスのテキストの一部を入力して、トピックを検索できます。 すべてのトピックを表示するか、コメント付きのトピックを表示するかを選択することもできます。 デフォルトでは、レビュータスクに存在するすべてのトピックを表示できます。


![ レビュートピック パネルでの検索 ](assets/review-search-topic.png){width="800" align="left"}

詳しくは、「トピックを確認 [ を参照してください ](../user-guide/review-topics.md)。

## Guides 拡張機能フレームワーク

AEM Guides上にカスタムパッケージを作成し、AEM Guides Extension Framework を使用して拡張機能を提供します。 これらのパッケージは、開発者やコンサルタントがエディターのコンポーネントを拡張するのに役立ちます。 ボタン、ダイアログ、ドロップダウンをターゲットにして、AEM Guides UI と簡単に相互運用できるカスタム JavaScriptを追加できます。



## ネイティブPDFの機能強化

4.3.0 リリースでは、AEM Guidesをより堅牢なPDFにするために、次のネイティブ製品の機能強化が行われました。

### 言語変数のサポート

AEM Guidesでは言語変数をサポートしています。 PDF変数を使用して、標準提供のラベルのローカライズ版を定義できます（メモ、注意、警告、静的テキストなど）。
PDF出力および出力テンプレートの適切なセクションに、言語変数またはローカライズ版のラベルを追加できます。

#### PDF出力の言語変数

言語変数を使用して、メモ、注意、警告などの要素のローカライズされたラベルを定義できます。 これらの変数の値を 1 つ以上のPDFで更新すると、ローカライズされた値が言語の出力で自動的に選択されます。
例えば、次のような方法で「メモ」ラベルをPDF出力に表示できます。

* 英語：Note
* フランス語：Remarque
* ドイツ語：ヒンワイス

#### 出力テンプレートの言語変数

様々な言語でPDF出力を作成する場合は、言語ごとにローカライズされたテキストを含む様々なPDFテンプレートを作成する必要がありました。 現在は、言語変数機能を使用して、テンプレートを作成する必要があるのは 1 回だけです。 次に、ローカライズが必要な静的テキストについて、対応する言語変数を作成し、テンプレートで使用できます。
文全体や段落など、長いテキストに対して言語変数を作成できます。 また、スタイルを適用し、HTMLマークアップを使用してこれらの言語変数の書式を設定することもできます。

詳しくは、[ 言語変数のサポート ](../native-pdf/native-pdf-language-variables.md) を参照してください。

### 下書き文書のPDF出力に透かしを追加する

まだ承認されていないドキュメントのPDF出力に透かしを追加できるようになりました。 この透かしは、「承認済み」ドキュメント状態のドキュメントのPDFを生成した場合には表示されません。 例えば、PDF出力に透かしドラフトを追加できます。

詳しくは、「[ ドラフトドキュメントの透かしをPDF出力に追加 ](../native-pdf/use-javascript-content-style.md#watermark-draft-document) を参照してください。

### PDFレイアウトでAEM メタデータを使用する機能

メタデータは、コンテンツの説明または定義です。 このメタデータは、ソース DITA マップのコンテンツに保存されます。

AEM Guidesで、アセットのメタデータプロパティを選択して、ページレイアウトに追加することもできます。 次に、AEM Guidesはアセットのこれらのメタデータプロパティを選択し、PDF出力に公開します。


![ ネイティブ pdf のメタデータの追加 ](assets/native-pdf-metadata-asset.png){width="300" align="left"}

>[!NOTE]
>
> AEM Guidesは、DITA マップのメタデータプロパティもサポートします。

詳しくは、[ フィールドとメタデータを追加 ](../native-pdf/design-page-layout.md#add-fields-metadata) を参照してください。


### PDF出力でのページの順序付け

PDF内の以下のセクションの表示/非表示を切り替えたり、最終的なPDF出力で表示する順序を調整したりできます。

* 目次
* チャプターとトピック
* 図のリスト
* テーブルのリスト
* 索引
* 用語集
* 引用
* ページレイアウト

PDF出力の特定のセクションを表示しない場合は、切り替えスイッチをオフにして非表示にできます。

詳しくは、「ページ順序 [ を参照してくだ ](../native-pdf/components-pdf-template.md#page-order) い。

### ページの結合

ネイティブPDF出力では、デフォルトで、すべてのセクションが新しいページから始まります。 これで、セクションを前のページまたは次のページに結合できます。 これにより、PDF出力で選択されたページに続くセクションが公開され、ページ区切りはなくなります。

詳しくは、「ページの順序 [ のページの結合機能の説明を参照し ](../native-pdf/components-pdf-template.md#page-order) ください。

### 静的ページ

カスタムページレイアウトを作成して、PDF出力で静的ページとして公開することもできます。 これにより、メモや空白のページなどの静的コンテンツを追加できます。

詳しくは、静的ページの機能の説明 [ ページ順序 ](../native-pdf/components-pdf-template.md#page-order) の節を参照してください。


### クロスリファレンスの変数

変数を使用して相互参照を定義できます。 変数を使用すると、その値がプロパティから選択されます。

{figure} と {table} も使用できるようになりました。
{figure} を使用して、図形番号に相互参照を追加します。 図表番号として定義した自動番号スタイルから図番号が選択されます。

{table} を使用して、テーブル番号に相互参照を追加します。 キャプションに対して定義した自動番号スタイルからテーブル番号が選択されます。

詳しくは、[ 相互参照 ](../native-pdf/components-pdf-template.md##cross-references) を参照してください。

### 現在のページからチャプターを開始

奇数ページまたは偶数ページからチャプターを開始するための基本的な設定、目次の構造、および目次エントリの引出線の形式を定義できます。

現在のページからチャプターを開始することもできます。 これを選択すると、すべてのチャプターが連続して公開され、改ページは一切行われません。 例えば、チャプターが 15 ページの途中で終了する場合、次のチャプターも 15 ページ目から開始します。


### ネイティブPDF出力の生成中に一時HTMLファイルにアクセスする機能

AEM Guidesで、ネイティブPDF出力の生成時に作成された一時HTMLファイルをダウンロードできるようになりました。 出力プリセット設定で、一時ファイルをダウンロードするオプションを選択します。  AEM Guidesでは、出力の生成時に作成された一時ファイルを、そのプリセットを使用してダウンロードできます。

この機能により、暫定スタイルおよびレイアウトにアクセスして、生成プロセスに関するより優れたインサイトを得ることができます。また、要件に従って CSS スタイルを修正または変更するのに役立ちます。

![ ネイティブ pdf の詳細設定ダイアログ ](assets/native-pdf-advanced-settings.png){width="800" align="left"}

詳しくは、[PDF出力プリセットの作成 ](../web-editor/native-pdf-web-editor.md#create-output-preset) を参照してください。


### CSS エディターの再設計

CSS エディターのデザインを一新し、セレクターとスタイルプロパティのユーザーエクスペリエンスが向上しました。

#### スタイルを追加ダイアログの機能強化

カスタムセレクターを使用して、複雑なスタイルを追加できるようになりました。 新しいセレクターフィールドは、クラス、タグ、疑似クラスの組み合わせ以外のカスタムセレクターを追加するのに役立ちます。 例えば、テーブル内のすべて `table a.link` ハイパーリンクにスタイルを作成できます。

![ ネイティブ pdf テンプレートへのスタイルの追加 ](assets/add-styles-native-pdf.png){width="300" align="left"}

#### スタイルのプロパティのカスタマイズ

AEM Guidesでは、スタイルの「プレビュー」セクションに新しいプロパティパネルが表示されるようになりました。 プロパティパネルからスタイルのプロパティをより効率的かつ迅速に編集できます。


## リポジトリビュー内でのファイルの名前変更と移動

リポジトリパネルからファイルの名前を変更または移動できるようになりました。 この機能は便利で、リポジトリーパネルからファイルを簡単に管理するのに役立ちます。 ファイルを選択し、選択したファイルの **オプション** メニューを使用して、ファイルの名前を変更したり移動したりできます。 ファイルを移動または名前変更すると、AEM Guidesに成功メッセージが表示されます。

![ ファイルのオプション メニュー ](assets/rename-move-assets.png){width="550" align="left"}

ファイルのオプションメニューについて詳しくは、「左パネル **セクションの** リポジトリ表示 [ 機能の説明を参照してくだ ](../user-guide/web-editor-features.md#id2051EA0M0HS) い。

## Web エディターのリンク切れレポート

AEM Guidesでは、技術文書の全体的な完全性を確認し、web エディターからレポートを生成できます。 2023 年 6 月リリースに、AEM Guidesで壊れたリンクを表示および修正する機能が追加されました。 これは、壊れたリンクの管理に役立つ便利なレポートです。 DITA マップに存在する壊れたリンクを簡単に表示して修正できます。
![ 壊れたリンクのレポート ](assets/broken-link-report.png){width="800" align="left"}

リンクを修正すると、壊れたリンクのリストの下に表示されなくなります。

詳しくは、[ 壊れたリンクの表示と修正 ](../user-guide/reports-web-editor.md#report-broken-links) を参照してください。

## スキーマトロンの機能強化

### レポートステートメントを使用してスキーマ内のルールを確認

AEM Guidesでは、スキーマトロンを含むレポートステートメントもサポートするようになりました。 テストステートメントが true と評価されると、report ステートメントがメッセージを生成します。 たとえば、簡単な説明を 150 文字以下にする場合、レポート ステートメントを定義して、簡単な説明が 150 文字を超えるトピックをチェックできます。

詳しくは、[ アサートステートメントとレポートステートメントを使用してルールをチェックする ](../user-guide/support-schematron-file.md#schematron-assert-report) を参照してください。

### 正規表現式の使用

正規表現を使用して、matches （）関数を含むルールを定義し、Schematron ファイルを使用して検証を実行することもできます。

詳しくは、[ 正規表現式の使用 ](../user-guide/support-schematron-file.md#schematron-assert-report) を参照してください。


### 抽象パターンの定義

AEM Guidesは Schematron の抽象パターンもサポートしています。 一般的な抽象パターンを定義し、これらの抽象パターンを再利用できます。 抽象パターンを使用すると、スキーマを簡略化でき、検証ロジックの管理と更新にも役立ちます。


詳しくは、[ 抽象パターンの定義 ](../user-guide/support-schematron-file.md#schematron-abstract-patterns) を参照してください。

## 翻訳での XLIFF 形式のサポート

AEM Guidesでは、翻訳機能で XML Localization Interchange File Format （XLIFF）形式もサポートされています。 また、**新しい XLIFF 翻訳プロジェクトを作成** を選択して、XML コンテンツを XLIFF 形式に変換できるようになりました。 AEM Guidesは、XLIFF バージョン 1.2 をサポートしています。

この形式を使用すると、コンテンツを業界標準の XLIFF 形式に書き出し、それを翻訳ベンダーに提供できます。 詳しくは、[ 翻訳プロジェクトの作成 ](../user-guide/translate-documents-web-editor.md#create-translation-project) を参照してください。

![ 翻訳プロジェクトの種類 ](assets/translation-project-types.png){width="350" align="left"}


## マップコレクションの機能強化

マップ コレクションを使用すると、複数のマップを整理してバッチ パブリッシュできます。 マップ コレクションに対して多くの新しい機能強化が行われました。

* これで、ネイティブPDF出力プリセットをマップコレクションに追加し、それらを使用してPDF出力を生成できるようになりました。
* 管理者が作成したグローバルプロファイルプリセットとフォルダープロファイルプリセットを表示し、それらを使用してPDF出力を生成できます。
* 個々のプリセットを選択できるだけでなく、DITA マップのすべてのフォルダープロファイルプリセットを一度に有効にすることもできます。
  ![ マップ コレクションを編集する ](assets/edit-map-collection.png){width="800" align="left"}

詳しくは、[ 出力生成にマップ コレクションを使用 ](../user-guide/generate-output-use-map-collection-output-generation.md) を参照してください。

## 一括Publish ダッシュボードでのネイティブPDFのサポート


AEM Guidesの一括アクティベーション機能を使用すると、オーサリングからパブリッシュインスタンスまで、コンテンツをすばやく簡単にアクティベーションできます。 一括有効化マップには、ネイティブPDF出力プリセット、AEM サイト、PDF、HTML 5、カスタム、JSON 出力を含めることができます。
詳しくは、[ 公開済みコンテンツの一括アクティベーション ](../user-guide/conf-bulk-activation.md) を参照してください。

## 改良された一括移動ツール

管理者は、改善された一括移動ツールを使用して、多数のファイルがあるフォルダーを別の場所に移動できるようになりました。
ファイルを参照ダイアログを使用して、移動するソースフォルダーを選択できます。 また、ソースフォルダーを移動する宛先の場所を参照して選択することもできます。 フィールドの近くにある ![ 情報アイコン ](assets/info-icon.svg) {width="25" align="left"} を選択して、そのフィールドに関する詳細を表示します。

詳しくは、[ ファイルを一括で移動 ](../user-guide/authoring-file-management.md#move-files-bulk) を参照してください。

## お気に入りパネルの改善

AEM Guidesを使用すると、ファイルやフォルダーのコレクションやお気に入りのリストを作成し、それらを簡単に使用できます。 **お気に入り** パネルで **オプション** メニューも使用できるようになりました。 選択したコレクションの名前を変更したり、**オプション** メニューから削除したりできます。 「**更新**」オプションを選択すると、リポジトリからファイルまたはフォルダーの新しいリストを取得できます。 フォルダーのコンテンツは、Assets UI でも表示できます。

![ お気に入りパネル ](assets/favorites-options.png){width="650" align="left"}

>[!NOTE]
>
> 上部の「**更新** アイコンを使用してリストを更新することもできます。

お気に入りコレクションの **オプション** メニューについて詳しくは、**左パネル [ セクションの** お気に入り ](../user-guide/web-editor-features.md#id2051EA0M0HS) 機能の説明を参照してください。

## システムテーマに切り替える

また、デバイステーマを使用できるようになりました。 **ユーザーの環境設定** を使用して、デバイスのテーマに基づいて明るいテーマと暗いテーマを自動的に切り替えるようにAEM Guidesを設定できます。

![ ユーザー環境設定 ](assets/device-theme-user-preferences.png){width="550" align="left"}

詳しくは、「メインツールバー **セクションの** ユーザー環境設定 [ 機能の説明を参照し ](../user-guide/web-editor-features.md#id2051EA0G05Z) ください。
