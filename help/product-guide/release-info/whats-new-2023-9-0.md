---
title: リリースノート | 2023 年 9 月リリースのAdobe Experience Managerガイドの新機能
description: 2023 年 9 月リリースのAdobe Experience Managerガイドの新機能と機能強化についてas a Cloud Service
exl-id: d185d27f-0cbb-4ec6-ac65-cb69f7572c3f
feature: What's New
role: Leader
source-git-commit: 6d8c01f20f7b59fed92c404561b647d9ebecb050
workflow-type: tm+mt
source-wordcount: '1683'
ht-degree: 0%

---

# 2023 年 9 月リリースのAdobe Experience Managerガイドas a Cloud Serviceの新機能

この記事では、Adobe Experience Managerガイド ( 後で *AEMガイドas a Cloud Service*) をクリックします。

アップグレードの手順、互換性マトリックス、およびこのリリースで修正された問題について詳しくは、 [リリースノート](release-notes-2023-9-0.md).

## データソースに接続してトピックを挿入する

AEMガイドには、既製のコネクタが用意されており、データソースとの接続を支援し、AEMガイドを真のコンテンツハブにするのに役立ちます。 これにより、手動でのデータ追加やレプリケーションに費やす時間と労力を節約できるメリットが得られます。

管理者は、JIRA および SQL(MySQL、PostgreSQL、SQL Server、SQLite) などの既存の標準コネクタに加えて、MariaDB、H2DB、AdobeCommerce、Elasticsearchのデータベース用のコネクタも設定できます。 また、既定のインターフェイスを拡張して、他のコネクタを追加することもできます。

設定済みのコネクタは、 **データソース** パネルを使用して、Web エディターで設定できます。

<img src="assets/data-sources.png" alt="パネル内のデータソースリスト" width="300">

*接続されたデータソースを表示します。*

接続されたデータソースからトピックを作成できるようになりました。 トピックには、テーブル、リスト、段落など、様々な形式のデータを含めることができます。 また、すべてのトピックに対して DITA マップを作成できます。 データソースから取り込む際に、トピックにメタデータを関連付けることができます。

詳しくは、 [データソースのデータを使用する](../user-guide/web-editor-content-snippet.md).

## コンテンツに引用を追加する

引用は、コンテンツに追加された情報のソースへの参照です。 引用は、信頼を確立し、盗用を防ぐのに役立ちます。 引用文は、読者がソースを特定し、テキストに表示される情報を確認するのに役立ちます。

AEMガイドで、引用符を追加したり、引用符を読み込んで、コンテンツに適用したりできます。 これらの引用文は、本、Web サイト、雑誌の任意のソースから追加できます。

トピックに引用文を挿入した後、Web エディターでプレビューできます。 また、ネイティブPDFを使用して、引用を含むコンテンツを公開できます。

![パネルに一覧表示される引用](assets/citation-panel.png){width="300" align="left"}

*引用文書パネルで引用文書のリストを表示します。*

詳しくは、 [コンテンツの引用文書を追加および管理します。](../user-guide/web-editor-apply-citations.md).


## コンテンツフラグメントに公開

コンテンツフラグメントは、AEMの個別のコンテンツです。 コンテンツモデルに基づく構造化コンテンツです。 コンテンツフラグメントは、デザイン情報やレイアウト情報のない純粋なコンテンツです。 AEMがサポートするチャネルとは独立して、オーサリングや管理をおこなうことができます。 コンテンツフラグメントのモジュール性と再利用性により、柔軟性、一貫性、効率性、管理が容易になります。

現在のAEMガイドでは、トピックまたはトピック内の要素をコンテンツフラグメントに公開する方法を提供しています。 トピックとコンテンツフラグメントモデルの間に JSON ベースのマッピングを作成できます。 このマッピングを使用して、トピック内の一部またはすべての要素に存在するコンテンツをコンテンツフラグメントに公開します。

AEMガイドとコンテンツフラグメントの力を活かし、任意のAEMサイトでコンテンツフラグメントを使用できます。 詳細は、コンテンツフラグメントでサポートされている API を使用して抽出することもできます。

![コンテンツフラグメントを公開するオプション](assets/content-fragment-publish.png){width="550" align="left"}

*トピックをコンテンツフラグメントに公開します。*

詳しくは、 [コンテンツフラグメントに公開](../user-guide//publish-content-fragment.md).

## レビューの強化

AEMガイドで、次の機能を使用したレビュー機能の改善がおこなわれました。

### 検索レビューのトピック

レビューの実施は、AEMガイドの重要な機能です。 レビュー担当者が自分に割り当てられたドキュメントを確認するのに役立ちます。
レビューパネルのトピックビューの検索バーにタイトルやファイルパスのテキストの一部を入力して、トピックを検索できるようになりました。 すべてのトピックを表示するか、コメント付きのトピックを表示するかを選択することもできます。 デフォルトでは、レビュータスクに存在するすべてのトピックを表示できます。 詳しくは、 [トピックを確認](../user-guide/review-topics.md).

![レビュートピックパネルでの検索](assets/review-search-topic.png){width="800" align="left"}

*レビューパネルでレビュートピックを検索します。*



## Guides Extension Framework

AEM Guides Extension Framework を使用して拡張機能を提供するには、AEMガイドの上にカスタムパッケージを作成します。 これらのパッケージは、開発者やコンサルタントに役立ち、エディターでコンポーネントに対して拡張性を付与するのに役立ちます。 ボタン、ダイアログ、ドロップダウンをターゲットにし、AEM Guides UI と簡単に連携できるカスタム JavaScript を追加できます。



## ネイティブPDFの強化

AEMガイドをより堅牢なPDFにするために、2023 年 9 月リリースで次のネイティブ製品の機能強化がおこなわれました。



### PDF出力のページの並べ替え

PDF内の以下のセクションの表示/非表示を切り替えたり、最終的なPDF出力での表示順を変更したりできます。

* 目次
* 章およびトピック
* 図の一覧
* テーブルのリスト
* 索引
* 用語集
* 引用
* ページレイアウト

PDF出力で特定のセクションを表示しない場合は、切り替えスイッチをオフにして非表示にできます。

詳しくは、 [ページの順序](../native-pdf/components-pdf-template.md#page-order).

### ページを結合

ネイティブPDF出力では、デフォルトで、すべてのセクションが新しいページから始まります。 これで、セクションを前のページまたは次のページに結合できます。 これにより、PDF出力で選択したページと続くセクションが公開され、間に改ページはありません。

詳しくは、 **ページを結合** 機能の説明 [ページの順序](../native-pdf/components-pdf-template.md#page-order) 」セクションに入力します。

### 現在のページからチャプターを開始します

奇数ページまたは偶数ページから章を開始するための基本的な設定、目次の構造、TOC エントリの引出線の形式を定義できます。

これで、現在のページからチャプターを開始することもできます。 これを選択すると、改ページなしで、すべての章が継続して公開されます。 例えば、チャプターが 15 ページの途中で終わる場合、次のチャプターも 15 ページ目から始まります。

詳しくは、 **一般** タブの説明  [詳細PDF設定](../native-pdf/components-pdf-template.md#advanced-pdf-settings-advanced-pdf-settings).

### 静的ページ

また、カスタムのページレイアウトを作成し、静的ページとしてPDF出力に公開することもできます。 これにより、メモや空白ページなどの静的コンテンツを追加できます。

詳しくは、 **静的ページ** 機能の説明 [ページの順序](../native-pdf/components-pdf-template.md#page-order) 」セクションに入力します。


### クロスリファレンスの変数

変数を使用して相互参照を定義できます。 変数を使用する場合、その値がプロパティから選択されます。

現在は、 {figure} および {table}.
用途 {figure}図形番号に相互参照を追加するには、次の手順に従います。 図表番号は、図表番号用に定義した自動番号スタイルから選択されます。

用途 {table} をクリックして、テーブル番号に相互参照を追加します。 キャプション用に定義した自動番号スタイルから、テーブル番号が選択されます。

詳しくは、 [相互参照](../native-pdf/components-pdf-template.md##cross-references).



### CSS エディターの再設計

現在は、CSS エディターのデザインが変更され、セレクターとスタイルプロパティを使用したユーザーエクスペリエンスが向上しました。

#### スタイルを追加ダイアログの機能強化

カスタムセレクターを使用して複雑なスタイルを追加できるようになりました。 新しい「セレクター」フィールドを使用すると、Class、Tag、Pseudo Class の組み合わせ以外にカスタムセレクターを追加できます。 例えば、 `table a.link` 表内のすべてのハイパーリンクのスタイル。

![ネイティブ pdf テンプレートでのスタイルの追加](assets/add-styles-native-pdf.png){width="300" align="left"}

*新しいスタイルの詳細を追加します。*

#### スタイルのプロパティをカスタマイズ

現在のAEMガイドでは、スタイルのプレビューセクションの下にある新しいプロパティパネルを紹介しています。 プロパティパネルから、スタイルのプロパティをより効率的かつ迅速に編集できます。


## 単一の列挙定義での複数の件名定義のサポート

1 つのマップで 1 つ以上の件名の定義を定義し、別のマップで列挙の定義を定義して、マップの参照を追加できるようになりました。 件名列挙の参照は、同じマップまたは参照先のマップで解決されます。

また、条件を定義して、トピック内の特定の要素に適用することもできます。  条件は、特定の要素に対してのみ表示され、他のすべての要素に対しては表示されません。

サブジェクト定義と列挙の階層的定義の処理の詳細については、「サブジェクトスキーム」機能の説明を参照してください。 [左パネル](../user-guide/web-editor-features.md#id2051EA0M0HS) 」セクションに入力します。





## マップコレクション内のすべてのプリセットを選択

個々のプリセットとすべてのフォルダープロファイルプリセットを有効にできるだけでなく、DITA マップのすべてのプリセットを一度に有効にすることもできます。
![マップコレクションを編集](assets/edit-map-collection-cs.png){width="800" align="left"}\
*マップコレクション内のすべてのプリセットを選択します。*

詳しくは、 [出力生成にマップコレクションを使用](../user-guide/generate-output-use-map-collection-output-generation.md).


## 一括公開PDFでのネイティブダッシュボードのサポート


AEMガイドの一括アクティベーション機能を使用すると、オーサリングからパブリッシュインスタンスに至るまで、コンテンツをすばやく簡単にアクティベートできます。 一括アクティベーションマップで、ネイティブPDFの出力プリセット、AEMサイト、PDF、HTML5、カスタム、JSON の出力を含めることができます。
詳しくは、 [公開済みコンテンツの一括アクティベーション](../user-guide/conf-bulk-activation.md).

## 一括移動ツールの改善

管理者は、改善された一括移動ツールを使用して、多数のファイルを含むフォルダを別の場所に移動できます。
[ ファイルを参照 ] ダイアログボックスを使用して、移動するソースフォルダを選択できます。 また、ソースフォルダを移動する移動先を参照して選択することもできます。 選択 ![情報アイコン](assets/info-icon.svg) {width="25" align="left"} フィールドの近くで詳細を表示できます。

詳しくは、 [ファイルを一括で移動](../user-guide/authoring-file-management.md#move-files-bulk).


## コンテキストメニューからのプレビューエクスペリエンスの強化

コンテキストメニューを使用すると、ファイル（.dita、.xml、オーディオ、ビデオ、画像）を開かずにすばやくプレビューできます。 プレビューパネルのサイズを変更できます。コンテンツに参照リンクが含まれている場合は、そのリンクを選択して新しいタブで開くことができます。

![プレビューパネル ](assets/quick-preview_cs.png){width="800" align="left"}

*ペインでファイルをプレビューします。*

コンテキストメニューの詳細については、 **ファイルのオプション** 機能の説明 [左パネル](../user-guide/web-editor-features.md#id2051EA0M0HS) 」セクションに入力します。


## 「宛先のパス」、「サイト名」、「ファイル名」の各オプションで、現在の日時の変数を使用します。

AEM Site またはPDFで出力を生成する際に、変数を使用して **宛先のパス**, **サイト名**&#x200B;または **ファイル名** オプション。 これで、 `${system_date}`および `${system_time}` 変数。 これらの変数を使用して、これらのオプションに現在の日付と時刻を追加できます。

方法を学ぶ [変数を使用して、[ 宛先のパス ]、[ サイト名 ]、または [ ファイル名 ] オプションを設定します。](../user-guide/generate-output-use-variables.md).