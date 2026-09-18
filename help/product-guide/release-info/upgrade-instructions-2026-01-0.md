---
title: リリースノート | Adobe Experience Manager Guides（2026.01.0 リリース）のアップグレード手順と修正された問題
description: 互換性マトリックスと、Adobe Experience Manager Guides as a Cloud Serviceの2026.01.0 リリースにアップグレードする方法について説明します。
exl-id: 25513149-c852-4dd4-8a44-f03969af3bd6
source-git-commit: 100b115fcc6bd5522e88a3e236f3771d13ce389c
workflow-type: tm+mt
source-wordcount: '1147'
ht-degree: 1%
---
# 2026.01.0 リリースのアップグレード手順

この記事では、Adobe Experience Manager Guides as a Cloud Serviceの2026.01.0 リリースのアップグレード手順と互換性マトリックスについて説明します。

新機能と機能強化について詳しくは、[2026.01.0 リリース ](whats-new-2026-01-0.md)の新機能を参照してください。

このリリースで修正された問題のリストについては、[2026.01.0 リリース ](fixed-issues-2026-01-0.md)で修正された問題を参照してください。

## 互換性マトリックス

この節では、Experience Manager Guides as a Cloud Serviceの2026.01.0 リリースでサポートされているソフトウェアアプリケーションの互換性マトリックスを示します。

### FrameMakerとFrameMaker Publishing Server

| Experience Manager Guides as a Cloud リリース | FMPS | FrameMaker | Oxygen Author |
| --- | --- | --- | --- |
| 2026.01.0 | 互換性がありません | 2022年以降 | 26.1 |


### Oxygen コネクタ

| Experience Manager Guides as a Cloud リリース | Oxygen コネクタウィンドウ | Oxygen Connector Mac | Oxygen ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- | --- | --- |
| 2026.01.0 | 3.8 -uuid 1 | 3.8 -uuid 1 | 2.3 | 2.3 |


### ナレッジベースのテンプレートバージョン

| コンポーネントパッケージ名 | コンポーネントバージョン | テンプレートバージョン |
|---|---|---|
| Cloud Service用Experience Manager Guides コンポーネントコンテンツパッケージ | guides-components.all-1.4.0 | aem-site-template-dxml-1.0.17 |


### 新しいAEM サイトテンプレートのバージョン

| コンポーネントバージョン | サイトバージョン |
|---|---|
| guides-components.all-1.4.0 | aemg-sites-template-1.3.0 |

## 前提条件

標準のDITA動作では、外部リソースへの参照のみを目的としているため、scope=`external`属性を内部リンクに適用しないでください。 この属性を内部リンクに適用し、そのようなアセットを移動すると、ワークフローが中断される可能性があります。 Experience Manager Guidesで管理されているコンテンツの場合は、代わりにデフォルトのscope=`local`またはキーベースの参照を使用します。

## 2026.01.0 リリースへのアップグレード

Experience Manager Guidesは、Experience Manager as a Cloud Serviceの最新リリースにアップグレードすると自動的にアップグレードされます。

>[!NOTE]
>
> このリリースには、フォルダープロファイル設定（ui_config.json）のアップデートが含まれています。 カスタム設定を使用している場合は、アップグレードする前に、必ずそれらのバックアップを取ってください。 更新後、最新バージョンで導入された変更に合わせて、設定を確認して調整します。

既存のリリースでExperience Manager Guides as a Cloud Serviceを実行していない場合は、次の手順を実行します。

### サーブレットを使用したスクリプトのトリガーを有効にする手順

（Experience Manager Guides as a Cloud Serviceの2023年6月リリースより前のリリースを使用している場合のみ）

インストールが完了したら、トリガーを押して翻訳ジョブを開始します。

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

前の応答JSONでは、キー`lockNodePath`は、送信されたジョブを指すリポジトリで作成されたノードへのパスを保持します。 ジョブが完了すると自動的に削除され、ジョブのステータスについては、このノードを参照できます。

このジョブが完了するまで待ってから、次の手順に進みます。

>[!NOTE]
>
> ノードがまだ存在するかどうかを確認し、ジョブのステータスを確認する必要があります。

```
GET
http://<aem_domain>/var/dxml/executor-locks/translation-map-upgrade/1683190032886.json
```

### 既存のコンテンツを後処理して、壊れたリンクレポートを使用する手順

（Experience Manager Guides as a Cloud Serviceの2023年6月リリースより前のリリースを使用している場合のみ）

既存のコンテンツを後処理し、新しい壊れたリンクレポートを使用するには、次の手順を実行します。

1. （オプション）システムに100,000個を超えるDITA ファイルがある場合は、`org.apache.jackrabbit.oak.query.QueryEngineSettingsService`の`queryLimitReads`と`queryLimitInMemory`をより大きな値（存在するアセット数より大きな値、例えば200,000個）に更新してから再展開します。

   - Adobe Experience Manager Guides as a Cloud Serviceの「*設定の上書き*」セクションで指定されている手順を使用して、設定ファイルを作成します。
   - 設定ファイルで、次の（プロパティ）詳細を指定して、`queryLimitReads`および`queryLimitInMemory` オプションを設定します。

     | PID | プロパティキー | プロパティの値 |
     |---|---|---|
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitReads | 値：200000 デフォルト値：100000 |
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitInMemory | 値：200000 デフォルト値：100000 |

1. サーバーへのPOST リクエストを実行します（正しい認証を使用） - `http://<server>//bin/guides/reports/upgrade`。

1. APIはjobIdを返します。 ジョブのステータスを確認するには、ジョブ IDを持つGET リクエストを同じエンドポイントに送信できます。 `http://<server>/bin/guides/reports/upgrade?jobId= {jobId}`
（例：`http://localhost:8080/bin/guides/reports/upgrade?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`）

1. ジョブが完了すると、前のGET リクエストが成功して応答します。 何らかの理由でジョブが失敗した場合は、サーバーログからエラーを確認できます。

1. 手順1で変更した場合は、デフォルト値または以前の既存の値`queryLimitReads`に戻します。

### 「レポート」タブの新しい検索と置換およびトピックリストを使用して、既存のコンテンツをインデックス化する手順：

（Experience Manager Guides as a Cloud Serviceの2023年6月リリースより前のリリースを使用している場合のみ）

既存のコンテンツのインデックスを作成するには、次の手順を実行し、「レポート」タブのマップレベルとトピックリストで新しい検索と置換のテキストを使用します。

1. サーバーへのPOST リクエストを実行します（正しい認証を使用） - `http://<server:port>/bin/guides/map-find/indexing`。 （オプション：マップの特定のパスを渡してインデックスを作成できます。デフォルトでは、すべてのマップにインデックスが付けられます||例：`https://<Server:port>/bin/guides/map-find/indexing?paths=<path of the MAP in repository>`）

1. ルートフォルダーを渡して、特定のフォルダー（およびそのサブフォルダー）のDITA マップをインデックス化することもできます。 例えば、`http://<server:port\>/bin/guides/map-find/indexing?root=/content/dam/test` のようになります。 パス パラメーターとルート パラメーターの両方が渡された場合は、パス パラメーターのみが考慮されます。

1. APIはjobIdを返します。 ジョブのステータスを確認するには、ジョブ IDを持つGET リクエストを同じエンドポイント `http://<server:port>/bin/guides/map-find/indexing?jobId={jobId}`に送信できます（例：`http://localhost:8080/bin/guides/reports/upgrade?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`）

1. ジョブが完了すると、前のGET リクエストが成功して応答し、マップが失敗した場合にメンションします。 正常にインデックス付けされたマップは、サーバーログから確認できます。

### `'fmdita rewriter'`競合を処理する手順

Experience Manager Guidesには、クロスマップの場合に生成されるリンク（2つの異なるマップのトピック間のリンク）を処理するための&#x200B;[**カスタム sling rewriter**](../cs-install-guide/conf-output-generation.md#custom-rewriter) モジュールがあります。

コードベースに別のカスタムスリングリライターがある場合は、`'order'`値が50より大きい値を使用します。これは、Experience Manager Guides sling リライターが`'order'` 50を使用するからです。 これを上書きするには、50を超える値が必要です。 詳細については、[出力の書き換えパイプライン ](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html)を参照してください。

このアップグレードでは、`'order'`の値が1000から50に変更されるので、既存のカスタムリライターがある場合は`fmdita-rewriter`と結合する必要があります。

### コンテンツフラグメントのB ツリー移行を実行する手順

コンテンツフラグメントに対する参照が表示されない場合は、トリガーをヒットして移行ジョブを開始します。

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

以前の応答であるJSONでは、キー`lockNodePath`は、リポジトリで作成されたノードへのパスを保持し、これは送信されたジョブを指します。 ジョブが完了すると、自動的に削除されます。 ジョブのステータスについては、このノードを参照できます。

このジョブが完了するまで待ってから、次の手順に進みます。

>[!NOTE]
>
>ノードがまだ存在するかどうかを確認し、ジョブのステータスを確認する必要があります。

GET:

```
http://<aem_domain>/var/dxml/executor-locks/cf-reference-store-btree-migration/1683190032886.json
```

### すべての出力プリセットに対してDITAVAL ファイルに検索フィルターを適用する手順

フィルターが正しく機能するように、ui_config.jsonを更新します。 次に示すように、**browseFilters** > **非DITA ファイル** > **Ditaval ファイル**&#x200B;にリストされているプロパティを変更します。

```
{
  "title": "Ditaval Files",
  "property": "LOWER_NAME",
  "operation": "like",
  "value": ".ditaval"
}
```
