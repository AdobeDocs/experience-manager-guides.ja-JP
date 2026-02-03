---
title: リリースノート | Adobe Experience Manager Guides 2026.01.0 リリースのアップグレード手順と修正された問題
description: 互換性マトリックスと、Adobe Experience Manager Guides as a Cloud Serviceの 2026.01.0 リリースにアップグレードする方法について説明します。
source-git-commit: e6dab21263731b42567729649a11e9d0a74f1dfd
workflow-type: tm+mt
source-wordcount: '1139'
ht-degree: 3%

---

# 2026.01.0 リリースのアップグレード手順

この記事では、Adobe Experience Manager Guides as a Cloud Service 2026.01.0 リリースのアップグレード手順と互換性マトリックスについて説明します。

新機能と機能強化について詳しくは、[ 2026.01.0リリースの新機能](whats-new-2026-01-0.md)を参照してください。

このリリースで修正された問題の一覧については、[2026.01.0リリースで修正された問題](fixed-issues-2026-01-0.md)を参照してください。

## 互換性マトリックス

この節では、Experience Manager Guides as a Cloud Service 2026.01.0 リリースでサポートされているソフトウェアアプリケーションの互換表について説明します。

### FrameMakerとFrameMaker Publishing Server

| Experience Manager Guides as a Cloud リリース | FMPS | FrameMaker | 酸素作成者 |
| --- | --- | --- | --- |
| 2026.01.0 | 互換性がありません | 2022 以上 | 26.1 |


### 酸素コネクタ

| Experience Manager Guides as a Cloud リリース | 酸素コネクタウィンドウ | 酸素コネクタMac | 酸素ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- | --- | --- |
| 2026.01.0 | 3.8 -uuid 1 | 3.8 -uuid 1 | 2.3 | 2.3 |


### ナレッジベーステンプレートバージョン

| コンポーネントパッケージ名 | コンポーネントのバージョン | テンプレートのバージョン |
|---|---|---|
| Cloud Service用Experience Manager Guides コンポーネントコンテンツパッケージ | guides-components.all-1.4.0 | aem-site-template-dxml-1.0.17 |


### 新しいバージョンのAEM サイトテンプレート

| コンポーネントのバージョン | サイトバージョン |
|---|---|
| guides-components.all-1.4.0 | aemg-sites-template-1.3.0 |

## 前提条件

標準の DITA 動作と同様に、scope=`external` 属性は内部リンクには適用できません。外部リソースへの参照のみを目的としているからです。 この属性を内部リンクに適用してそのようなアセットを移動すると、ワークフローが中断される場合があります。 Experience Manager Guidesで管理されるコンテンツの場合は、デフォルトの scope=`local` またはキーベースの参照を代わりに使用します。

## 2026.01.0 リリースへのアップグレード

Experience Manager Guidesは、Experience Manager as a Cloud Serviceの最新リリースにアップグレードすると、自動的にアップグレードされます。

>[!NOTE]
>
> このリリースには、フォルダープロファイル設定（ui_config.json）の更新が含まれています。 カスタム設定を使用している場合は、アップグレードの前にこれらの設定を必ずバックアップしてください。 更新後、最新バージョンで導入された変更に合わせて設定を確認および調整します。

既存のリリースでExperience Manager Guides as a Cloud Serviceを早く実行していない場合は、次の手順を実行します。

### サーブレットを使用したスクリプトのトリガーを有効にする手順

（2023 年 6 月のExperience Manager Guides as a Cloud Service リリースより前のリリースを使用している場合のみ）

インストールが完了したら、トリガーを押して翻訳ジョブを開始できます。

投稿：

```
http://localhost:4503/bin/guides/script/start?jobType=translation-map-upgrade
```

応答：

```
{
"msg": "Job is successfully submitted and lock node is created for future reference",
"lockNodePath": "/var/dxml/executor-locks/translation-map-upgrade/1683190032886",
"status": "SCHEDULED"
}
```

前の応答 JSON では、キー `lockNodePath` は、送信されたジョブを指す、リポジトリで作成されたノードへのパスを保持します。 ジョブが完了すると自動的に削除されるので、このノードでジョブのステータスを確認できます。

このジョブが完了するのを待ってから、次の手順に進みます。

>[!NOTE]
>
> ノードがまだ存在するかどうか、およびジョブのステータスを確認する必要があります。

```
GET
http://<aem_domain>/var/dxml/executor-locks/translation-map-upgrade/1683190032886.json
```

### 壊れたリンクレポートを使用するために、既存のコンテンツを後処理する手順

（2023 年 6 月のExperience Manager Guides as a Cloud Service リリースより前のリリースを使用している場合のみ）

既存のコンテンツを後処理し、新しい壊れたリンクのレポートを使用するには、次の手順を実行します。

1. （オプション）システムに 100,000 個を超える DITA ファイルがある場合は、`queryLimitReads` 下の `queryLimitInMemory` および `org.apache.jackrabbit.oak.query.QueryEngineSettingsService` を大きい値（存在するアセットの数を超える値は、たとえば 200,000）に変更してから再デプロイします。

   - Adobe Experience Manager Guides as a Cloud Serviceのインストールと設定の *設定の上書き* の節で説明した手順に従って、設定ファイルを作成します。
   - 設定ファイルで、`queryLimitReads` と `queryLimitInMemory` オプションを設定するために、次の（プロパティ）の詳細を指定します。

     | PID | プロパティキー | プロパティの値 |
     |---|---|---|
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitReads | 値：200000 デフォルト値：100000 |
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitInMemory | 値：200000 デフォルト値：100000 |

1. （正しい認証で） サーバーへの POST リクエストを実行します – `http://<server>//bin/guides/reports/upgrade`。

1. API は jobId を返します。 ジョブのステータスを確認するには、同じエンドポイント `http://<server>/bin/guides/reports/upgrade?jobId= {jobId}` にジョブ ID を含むGET リクエストを送信します。
（例：`http://localhost:8080/bin/guides/reports/upgrade?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`）

1. ジョブが完了すると、前回のGET リクエストが正常に応答します。 何らかの理由でジョブが失敗した場合は、サーバーログに失敗が記録されています。

1. 手順 1 で変更した場合は、デフォルトまたは以前の既存の値 `queryLimitReads` に戻します。

### 「レポート」タブで新しい「検索と置換」および「トピック」リストを使用するために、既存のコンテンツにインデックスを作成する手順は次のとおりです。

（2023 年 6 月のExperience Manager Guides as a Cloud Service リリースより前のリリースを使用している場合のみ）

既存のコンテンツのインデックスを作成する次の手順を実行し、「レポート」タブの新しい検索と置換のテキストをマップレベルとトピックリストで使用します。

1. （正しい認証で） サーバーへの POST リクエストを実行します – `http://<server:port>/bin/guides/map-find/indexing`。 （オプション：マップの特定のパスをインデックスを作成するために渡すことができます。デフォルトでは、すべてのマップにインデックスが作成されます||例：`https://<Server:port>/bin/guides/map-find/indexing?paths=<path of the MAP in repository>`）。

1. ルートフォルダーを渡して、特定のフォルダー（およびそのサブフォルダー）の DITA マップのインデックスを作成することもできます。 例えば、`http://<server:port\>/bin/guides/map-find/indexing?root=/content/dam/test` のようになります。paths パラメーターと root パラメーターの両方が渡される場合、paths パラメーターのみが考慮されることに注意してください。

1. API は jobId を返します。 ジョブのステータスを確認するには、同じエンドポイント `http://<server:port>/bin/guides/map-find/indexing?jobId={jobId}` （例：`http://localhost:8080/bin/guides/reports/upgrade?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`）にジョブ ID を含むGET リクエストを送信します

1. ジョブが完了すると、前のGET リクエストが成功を示して応答し、失敗したマップがあるかどうかに関して言及します。 正常にインデックス化されたマップは、サーバ ログから確認できます。

### `'fmdita rewriter'` の競合を処理する手順

Experience Manager Guidesには、クロスマップ（2 つの異なるマップのトピック間のリンク）の場合に生成されるリンクを処理する [**custom sling rewriter**](../cs-install-guide/conf-output-generation.md#custom-rewriter) モジュールがあります。

コードベースに別のカスタム sling rewriter がある場合は、Experience Manager Guides sling rewriter が 50 を使用するように、50 より大きい `'order'` 値を使用し `'order'` す。 これを上書きするには、50 より大きい値が必要です。 詳しくは、[ 出力の書き換えパイプライン ](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html) を参照してください。

このアップグレード中に、`'order'` の値が 1000 から 50 に変更されるので、既存のカスタムリライターがある場合は `fmdita-rewriter` と結合する必要があります。

### コンテンツフラグメントの B-Tree 移行を実行する手順

コンテンツフラグメントの参照が表示されない場合は、トリガーを押して移行ジョブを開始できます。

投稿：

```
http://localhost:4503/bin/guides/script/start?jobType=cf-reference-store-btree-migration
```


応答：

```
{
"msg": "Job is successfully submitted and lock node is created for future reference",
"lockNodePath": "/var/dxml/executor-locks/cf-reference-store-btree-migration/1683190032886",
"status": "SCHEDULED"
}
```

前の応答では、キー `lockNodePath`JSON は、リポジトリで作成されたノードへのパスを保持します。これは、送信されたジョブを指します。 ジョブが完了すると、自動的に削除されます。 ジョブのステータスについては、このノードを参照してください。

このジョブが完了するのを待ってから、次の手順に進みます。

>[!NOTE]
>
>ノードがまだ存在するかどうか、およびジョブのステータスを確認する必要があります。

GET:

```
http://<aem_domain>/var/dxml/executor-locks/cf-reference-store-btree-migration/1683190032886.json
```

### すべての出力プリセットの DITAVAL ファイルに検索フィルターを適用する手順

フィルターが正しく機能するようにするには、ui_config.json を更新します。 以下のように、**browseFilters**/**Non-DITA files**/**Ditaval Files** の下にリストされているプロパティを変更します。

```
{
  "title": "Ditaval Files",
  "property": "LOWER_NAME",
  "operation": "like",
  "value": ".ditaval"
}
```
