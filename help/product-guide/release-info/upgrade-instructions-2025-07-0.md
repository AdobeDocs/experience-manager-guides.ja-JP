---
title: リリースノート | Adobe Experience Manager Guides（2025.07.0 リリース）のアップグレード手順と修正された問題
description: 互換性マトリックスと、Adobe Experience Manager Guides as a Cloud Serviceの2025.07.0 リリースにアップグレードする方法について説明します。
exl-id: 391b8995-3938-4de6-b402-599a1c8df100
TQID: https://experienceleague.adobe.com/z7F-Ig9Qj--Vx99-onwl5d8BaB-mcNjcxuaQ4q06R8M
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
  - id: afb45297-4313-4f67-818e-bc0b03abe086
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
  - id: d90290ec-3e61-4ebd-8649-bcafe0836803
subfeature_v2:
  - id: b1ef4d86-3917-4b76-a0bc-4a4771f9b3b0
  - id: cda0baeb-996e-4aaa-92d1-41032e34fd68
  - id: d5ea0417-7932-4688-a3e2-4d3b2e7076a3
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 1041
ht-degree: 4%

---

# 2025.07.0 リリースのアップグレード手順

この記事では、Adobe Experience Manager Guides as a Cloud Serviceの2025.07.0 リリースのアップグレード手順と互換性マトリックスについて説明します。

新機能と機能強化について詳しくは、[&#x200B; 2025.07.0リリースの新機能](whats-new-2025-07-0.md)を参照してください。

このリリースで修正された問題の一覧については、[2025.07.0リリースで修正された問題](fixed-issues-2025-07-0.md)を参照してください。

## 互換性マトリックス

この節では、Experience Manager Guides as a Cloud Serviceの2025.07.0 リリースでサポートされているソフトウェアアプリケーションの互換性マトリックスを示します。

### FrameMakerとFrameMaker Publishing Server

| Experience Manager Guides as a Cloud リリース | FMPS | FrameMaker |
| --- | --- | --- |
| 2025.07.0 | 互換性がありません | 2022年以降 |


### Oxygen コネクタ

| Experience Manager Guides as a Cloud リリース | Oxygen コネクタウィンドウ | Oxygen Connector Mac | Oxygen ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- | --- | --- |
| 2025.07.0 | 3.8 -uuid 1 | 3.8 -uuid 1 | 2.3 | 2.3 |


### ナレッジベースのテンプレートバージョン

| コンポーネントパッケージ名 | コンポーネントバージョン | テンプレートバージョン |
|---|---|---|
| Cloud Service用Experience Manager Guides コンポーネントコンテンツパッケージ | guides-components.all-1.4.0 | aem-site-template-dxml-1.0.17 |


### 新しいAEM サイトテンプレートのバージョン

| コンポーネントバージョン | サイトバージョン |
|---|---|
| guides-components.all-1.4.0 | aemg-sites-template-1.3.0 |


## 2025.07.0 リリースへのアップグレード

Experience Manager Guidesは、Experience Manager as a Cloud Serviceの最新リリースをアップグレードすると、自動的にアップグレードされます。

>[!NOTE]
>
> 最新（最新）リリースの使用を開始したら、上書きされた設定を最新の設定と比較して、最新の機能を入手します。
>- ui_config.json （フォルダープロファイルで設定されている可能性があります）


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

1. ジョブが完了すると、以前のGET リクエストは正常に応答します。 何らかの理由でジョブが失敗した場合は、サーバーログからエラーを確認できます。

1. 手順1で変更した場合は、デフォルト値または以前の既存の値`queryLimitReads`に戻します。

### 「レポート」タブの新しい検索と置換およびトピックリストを使用して、既存のコンテンツをインデックス化する手順：

（Experience Manager Guides as a Cloud Serviceの2023年6月リリースより前のリリースを使用している場合のみ）

既存のコンテンツのインデックスを作成するには、次の手順を実行し、「レポート」タブのマップレベルとトピックリストで新しい検索と置換のテキストを使用します。

1. サーバーへのPOST リクエストを実行します（正しい認証を使用） - `http://<server:port>/bin/guides/map-find/indexing`。 （オプション：マップの特定のパスを渡してインデックスを作成できます。デフォルトでは、すべてのマップにインデックスが付けられます||例：`https://<Server:port>/bin/guides/map-find/indexing?paths=<path of the MAP in repository>`）

1. ルートフォルダーを渡して、特定のフォルダー（およびそのサブフォルダー）のDITA マップをインデックス化することもできます。 例えば、`http://<server:port\>/bin/guides/map-find/indexing?root=/content/dam/test` のようになります。 パス パラメーターとルート パラメーターの両方が渡された場合は、パス パラメーターのみが考慮されます。

1. APIはjobIdを返します。 ジョブのステータスを確認するには、ジョブ IDを持つGET リクエストを同じエンドポイント `http://<server:port>/bin/guides/map-find/indexing?jobId={jobId}`に送信できます（例：`http://localhost:8080/bin/guides/reports/upgrade?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`）

1. ジョブが完了すると、以前のGET リクエストは成功して応答し、マップが失敗した場合にメンションします。 正常にインデックス付けされたマップは、サーバーログから確認できます。

### `'fmdita rewriter'`競合を処理する手順

Experience Manager Guidesには、クロスマップの場合に生成されるリンク（2つの異なるマップのトピック間のリンク）を処理するための&#x200B;[**カスタム sling rewriter**](../cs-install-guide/conf-output-generation.md#custom-rewriter) モジュールがあります。

コードベースに別のカスタムスリングリライターがある場合は、`'order'`値が50より大きい値を使用します。これは、Experience Manager Guides sling リライターが`'order'` 50を使用するからです。 これを上書きするには、50を超える値が必要です。 詳細については、[出力の書き換えパイプライン &#x200B;](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html)を参照してください。

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
