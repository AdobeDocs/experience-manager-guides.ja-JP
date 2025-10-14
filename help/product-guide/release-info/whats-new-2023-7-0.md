---
title: リリースノート | Adobe Experience Manager Guidesの新機能、2023 年 7 月リリース
description: Adobe Experience Manager Guides as a Cloud Serviceの 2023 年 7 月リリースの新機能と機能強化について説明します
exl-id: 4b907729-4fbf-48ed-a2e1-014bd1101c73
feature: What's New
role: Leader
source-git-commit: 7d0ae0f13ab77a10beb89fcb0d8592b05c3828bd
workflow-type: tm+mt
source-wordcount: '687'
ht-degree: 0%

---

# Adobe Experience Manager Guides as a Cloud Serviceの 2023 年 7 月リリースの新機能

この記事では、Adobe Experience Manager Guides 2023 年 7 月バージョン（後の *AEM Guides as a Cloud Service*）の新機能および拡張機能について説明します。

アップグレード手順、互換性マトリックス、このリリースで修正された問題について詳しくは、[&#x200B; リリースノート &#x200B;](release-notes-2023-7-0.md) を参照してください。

## データソースに接続し、トピックにデータを挿入する

これで、AEM Guidesの標準搭載のコネクタを使用して、データソースにすばやく接続できます。 データソースに接続すると、データとソースの同期を維持でき、データに対する更新が自動的に反映され、AEM Guidesが真のコンテンツハブになります。 この機能により、データを手動で追加またはコピーする時間と労力を節約できます。

AEM Guidesでは、管理者が、JIRA および SQL （MySQL、PostgreSQL、SQL Server、SQLite）データベース用の標準のコネクタを設定できるようになりました。 また、デフォルトのインターフェイスを拡張することで、他のコネクタを追加することもできます。

追加したら、設定済みのコネクタを web エディターの **データソース** パネルに表示できます。

![](assets/code-snippet-generator.png){width="300" align="left"}

コンテンツスニペットジェネレーターを作成して、接続されたデータソースからデータを取得できます。 その後、データをトピックに挿入し、編集できます。

コンテンツスニペットジェネレーターを作成したら、それを再利用して任意のトピックにデータを挿入できます。 詳しくは、[&#x200B; データソースからコンテンツスニペットを挿入する &#x200B;](../user-guide/web-editor-content-snippet.md) を参照してください。



## レビュープロジェクトとアクティブなレビュータスクを表示するレビューパネル

AEM Guidesは、レビューをよりシームレスにします。 Web エディター内にレビューパネルが用意されています。 レビューパネルには、すべてのレビュープロジェクトと、自分が属するレビュープロジェクト内のアクティブなレビュータスクが表示されます。

この機能を使用すると、作成者はレビュータスクを簡単に開いてコメントを表示し、一元的なビューでコメントにすばやく対処できます。
![](assets/active-review-task-comments.png){width="800" align="left"}
詳しくは、「左パネル **セクション内の** レビュー [&#x200B; 機能の説明を参照し &#x200B;](../user-guide/web-editor-features.md#id2051EA0M0HS) ください。


## マップコレクションの機能強化

マップ コレクションを使用すると、複数のマップを整理してバッチ パブリッシュできます。 マップ コレクションに対して多くの新しい機能強化が行われました。

- また、ネイティブのPDF出力プリセットをマップコレクションに追加し、それらを使用してPDF出力を生成することもできます。
- 管理者が作成したグローバルプロファイルプリセットとフォルダープロファイルプリセットを表示し、それらを使用してPDF出力を生成できます。
- 個々のプリセットを選択できるだけでなく、DITA マップのすべてのフォルダープロファイルプリセットを一度に有効にすることもできます。
  ![](assets/edit-map-collection.png){width="800" align="left"}

詳しくは、[&#x200B; 出力生成にマップ コレクションを使用 &#x200B;](../user-guide/generate-output-use-map-collection-output-generation.md) を参照してください。

## ネイティブのHTML出力の生成中に、一時PDF ファイルにアクセスする機能

AEM Guidesで、ネイティブ PDF出力の生成時に作成された一時HTML ファイルをダウンロードできるようになりました。 出力プリセット設定で、一時ファイルをダウンロードするオプションを選択します。  AEM Guidesでは、出力の生成時に作成された一時ファイルを、そのプリセットを使用してダウンロードできます。

この機能により、暫定スタイルおよびレイアウトにアクセスして、生成プロセスに関するより優れたインサイトを得ることができます。また、要件に従って CSS スタイルを修正または変更するのに役立ちます。

![](assets/native-pdf-advanced-settings.png){width="800" align="left"}

詳しくは、[PDF出力プリセットの作成 &#x200B;](../web-editor/native-pdf-web-editor.md#create-output-preset) を参照してください。

## HTML5 とカスタム出力を生成するマイクロサービスベースのパブリッシング

新しいパブリッシングマイクロサービスを使用すると、AEM Guides as a Cloud Serviceで大規模なパブリッシングワークロードを同時に実行し、業界をリードするAdobe I/O Runtime サーバーレスプラットフォームを活用できます。 マイクロサービスを使用すれば、HTML5 とカスタム出力を生成することもできます。
複数の公開リクエストを実行し、パフォーマンスを向上させてこれらの出力形式を生成できます。
詳しくは、[AEM Guides as a Cloud Serviceのマイクロサービスベースの公開を設定する &#x200B;](../knowledge-base/publishing/configure-microservices.md) を参照してください。

## AEM Guidesのバージョンの詳細を詳細情報に表示します。

これで、AEMの **バージョン情報** 概要）と共に、AEM Guidesのバージョンの詳細を確認できます。 現在のバージョンの詳細は、「AEMのナビゲーション」ページの **ヘルプ** の **バージョン情報** オプションで確認できます。

![](assets/about-aem-help.png){width="800" align="left"}
