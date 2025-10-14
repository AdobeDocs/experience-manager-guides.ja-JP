---
title: リリースノート | Adobe Experience Manager Guidesの新機能、2023 年 10 月リリース
description: Adobe Experience Manager Guidesas a Cloud Serviceの 2023 年 10 月リリースの新機能および機能強化について説明します。
exl-id: 41bfed0d-5901-4ada-b6d7-a5be93b25ba8
feature: What's New
role: Leader
source-git-commit: 6d8c01f20f7b59fed92c404561b647d9ebecb050
workflow-type: tm+mt
source-wordcount: '623'
ht-degree: 0%

---

# Adobe Experience Manager Guidesas a Cloud Serviceの 2023 年 10 月リリースの新機能

この記事では、Adobe Experience Manager Guidesの 2023 年 10 月バージョン（後で *AEM Guidesas a Cloud Service* と呼ばれます）の新機能および機能強化について説明します。

アップグレード手順、互換性マトリックス、このリリースで修正された問題について詳しくは、[&#x200B; リリースノート &#x200B;](release-notes-2023-10-0.md) を参照してください。


## ユーザーインターフェイスからのデータソースコネクタの設定

Experience Manager Guidesには、データソースに標準搭載されたコネクタを設定するのに役立つ **データソース** ツールが用意されました。 JIRA、SQL （MySQL、PostgreSQL、Microsoft SQL Server、SQLite、MariaDB、H2DB）、AdobeCommerce およびElasticsearchデータベース用のコネクタを簡単に作成できます。

また、データソースコネクタの編集、再接続、複製、削除を簡単に行うこともできます。 [&#x200B; ユーザーインターフェイスからデータソースコネクタを簡単に設定できる &#x200B;](../cs-install-guide/conf-data-source-connector-tools.md) 方法を説明します。

![&#x200B; データソースパネルに表示されるデータソースコネクタ &#x200B;](assets/data-sources-create-window.png){width="550" align="left"}

*データソースパネルでデータソースコネクタを作成および表示します。*

## トピックジェネレーターのログの表示

また、コンテンツ生成ログファイルも表示できるようになりました。 このログファイルは、警告、エラー、例外を確認するのに役立ちます。  トピック ジェネレータの [&#x200B; オプション &#x200B;](../user-guide/web-editor-content-snippet.md#options-for-a-topic-generator) を使用して、トピック ジェネレータを簡単に生成および管理する方法を説明します。

## データソーステンプレートでの Velocity ツールのサポート

Experience Manager Guides テンプレートで Velocity ツールを使用できるようになりました。 これらのツールを使用すると、データソースから取得したデータに様々な機能を適用できます。 テンプレートは、コンテンツスニペットやトピックの作成時に使用できます。 この機能により、各データセットに同じ機能を手動で適用する時間と労力を節約できます。  また、正確な結果が得られます。
たとえば、$mathTool を使用して数学関数を実行できます。
詳しくは、[&#x200B; データソーステンプレートでの Velocity ツールの使用 &#x200B;](../user-guide/web-editor-content-snippet.md#use-velocity-tools) を参照してください。


## ネイティブPDFの機能強化

2023 年 10 月リリースで、次のネイティブPDFの機能強化が行われました。

### レイアウトの最初のページのページ番号をリセットする

ネイティブPDF出力では、ページ番号を再開し、番号付けの開始位置を指定できます。 これで、セクションの最初のオカレンスに対してのみ番号付けを開始することもできます。
[&#x200B; ページレイアウトのページプロパティの操作 &#x200B;](../native-pdf/design-page-layout.md#page-props-page-layout) 方法について詳しく説明します。


### 目次に自動番号のないチャプターを表示

Experience Manager Guidesには、目次（TOC）のチャプター名と共にチャプター番号が表示されます。 これで、チャプター番号を含まないチャプター名のみを公開するように選択できます。 [&#x200B; テンプレートのPDFの詳細設定 &#x200B;](../native-pdf/components-pdf-template.md#advanced-pdf-settings) の設定方法について詳しく説明します。

## Web エディターからのマップのダウンロード

これで、Web エディターのマップビューでマップを編集できるだけでなく、ダウンロードすることもできます。 特定のベースラインを使用してマップをダウンロードするように選択できます。 また、階層を統合して、すべてのファイルとフォルダーを 1 つのフォルダーに保存するオプションもあります。

詳しくは、「**左パネル [」セクション内の** マップビュー &#x200B;](../user-guide/web-editor-features.md#id2051EA0M0HS) 機能の説明を参照してください。

![&#x200B; リポジトリ表示でのファイルのオプションメニュー &#x200B;](assets/options-menu-repo-view-file-level-2310.png){width="550" align="left"}

*リポジトリビューでファイルを選択し、ファイルに対してアクションを実行するオプションを選択します*。

## 酸素コネクタプラグインでのファイルの編集

Experience Manager Guidesでは、web エディターでファイルを選択し、Oxygen コネクタプラグインでファイルを編集できるようになりました。 このオプションは、標準サポートの一部として有効になっていません。

詳しくは、**左パネル [&#x200B; の節にある** ファイルのオプション &#x200B;](../user-guide/web-editor-features.md#id2051EA0M0HS) 機能の説明を参照してください。
