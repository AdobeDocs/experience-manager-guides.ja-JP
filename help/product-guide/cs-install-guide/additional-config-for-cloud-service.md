---
title: クラウドサービスをアップグレードするための追加設定
description: クラウドサービスをアップグレードするための追加設定について説明します
exl-id: 3d60d06b-ce50-4948-b50d-bd373051d055
hidefromtoc: true
source-git-commit: 564ee1731be2378744ffd2ed54a2fd423901a0b3
workflow-type: tm+mt
source-wordcount: '849'
ht-degree: 0%

---

# AEM Guides as Cloud Serviceをアップグレードするための追加設定

>[!INFO]
>
>この記事は、カスタムフォルダープロファイル設定（`ui_config.json`）を設定している場合に適用されます。 アップグレードのたびに、必要に応じて設定を確認して変更し、最新の変更との互換性を確認します。

アップグレードするバージョンによっては、新しいCloud Service バージョンで導入された変更点を統合するために、追加の設定手順が必要になる場合があります。

一部の設定は、特定のバージョンにのみ適用されます。 以下の設定セクションを参照し、設定に適用できる必要な設定を適用してください。

## すべての出力プリセットに対してDITAVAL ファイルに検索フィルターを適用する手順

フィルターが正しく機能するように、ui_config.jsonを更新します。 次に示すように、**browseFilters** > **非DITA ファイル** > **Ditaval ファイル**&#x200B;にリストされているプロパティを変更します。

```
{
  "title": "Ditaval Files",
  "property": "LOWER_NAME",
  "operation": "like",
  "value": ".ditaval"
}
```

## コンテンツフラグメントのB ツリー移行を実行する手順

コンテンツフラグメントの参照が表示されない場合は、移行ジョブを実行するように選択できます。

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

## `'fmdita rewriter'`競合を処理する手順

Experience Manager Guidesには、クロスマップの場合に生成されるリンク（2つの異なるマップのトピック間のリンク）を処理するための&#x200B;[**カスタム sling rewriter**](../cs-install-guide/conf-output-generation.md#custom-rewriter) モジュールがあります。

コードベースに別のカスタムスリングリライターがある場合は、`'order'`値が50より大きい値を使用します。これは、Experience Manager Guides sling リライターが`'order'` 50を使用するからです。 これを上書きするには、50を超える値が必要です。 詳細については、[出力の書き換えパイプライン &#x200B;](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html)を参照してください。

このアップグレードでは、`'order'`の値が1000から50に変更されるので、既存のカスタムリライターがある場合は`fmdita-rewriter`と結合する必要があります。

## 2023年6月以前のバージョンに適用される設定

次の設定は、2023年6月より前にリリースされたExperience Manager Guides as a Cloud Serviceのバージョンを使用している場合にのみ必要です。 以下の関連セクションを展開して、必要な設定を適用し、必要な更新との互換性を確認します。

+++既存のコンテンツをインデックス化して、「レポート」タブの新しい検索と置換およびトピックリストを使用する手順
既存のコンテンツのインデックスを作成するには、次の手順を実行し、「レポート」タブのマップレベルとトピックリストで新しい検索と置換のテキストを使用します。

1. サーバーへのPOST リクエストを実行します（正しい認証を使用） - `http://<server:port>/bin/guides/map-find/indexing`。 （オプション：マップの特定のパスを渡してインデックスを作成できます。デフォルトでは、すべてのマップにインデックスが付けられます||例：`https://<Server:port>/bin/guides/map-find/indexing?paths=<path of the MAP in repository>`）

1. ルートフォルダーを渡して、特定のフォルダー（およびそのサブフォルダー）のDITA マップをインデックス化することもできます。 例えば、`http://<server:port\>/bin/guides/map-find/indexing?root=/content/dam/test` のようになります。パス パラメーターとルート パラメーターの両方が渡された場合は、パス パラメーターのみが考慮されます。

1. APIはjobIdを返します。 ジョブのステータスを確認するには、ジョブ IDを持つGET リクエストを同じエンドポイント `http://<server:port>/bin/guides/map-find/indexing?jobId={jobId}`に送信できます（例：`http://localhost:8080/bin/guides/reports/upgrade?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`）

1. ジョブが完了すると、以前のGET リクエストは成功して応答し、マップが失敗した場合にメンションします。 正常にインデックス付けされたマップは、サーバーログから確認できます。

+++

+++既存のコンテンツを後処理して、壊れたリンクレポートを使用する手順 
既存のコンテンツを後処理し、新しい壊れたリンクレポートを使用するには、次の手順を実行します。

1. （オプション）システムに100,000個を超えるDITA ファイルがある場合は、`queryLimitReads`の`queryLimitInMemory`と`org.apache.jackrabbit.oak.query.QueryEngineSettingsService`をより大きな値（存在するアセット数より大きな値、例えば200,000個）に更新してから再展開します。

   - Adobe Experience Manager Guides as a Cloud Serviceの「*設定の上書き*」セクションで指定されている手順を使用して、設定ファイルを作成します。
   - 設定ファイルで、次の（プロパティ）詳細を指定して、`queryLimitReads`および`queryLimitInMemory` オプションを設定します。

     | PID | プロパティキー | プロパティの値 |
     |---|---|---|
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitReads | 値：200000 デフォルト値：100000 |
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitInMemory | 値：200000 デフォルト値：100000 |

1. サーバーへのPOST リクエストを実行します（正しい認証を使用） - `http://<server>//bin/guides/reports/upgrade`。

1. APIはjobIdを返します。 ジョブのステータスを確認するには、ジョブ IDを持つGET リクエストを同じエンドポイント `http://<server>/bin/guides/reports/upgrade?jobId= {jobId}`に送信できます
（例：`http://localhost:8080/bin/guides/reports/upgrade?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`）

1. ジョブが完了すると、以前のGET リクエストは正常に応答します。 何らかの理由でジョブが失敗した場合は、サーバーログからエラーを確認できます。

1. 手順1で変更した場合は、デフォルト値または以前の既存の値`queryLimitReads`に戻します。

+++

+++サーブレットを使用したスクリプトのトリガーを有効にする手順
インストールが完了したら、翻訳ジョブを開始するように選択できます。

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

+++
