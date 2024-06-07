---
title: リリースノート | Adobe Experience Manager Guides 2024.06.0 リリースのアップグレード手順と修正された問題
description: 互換性マトリックスと、as a Cloud ServiceのAdobe Experience Manager Guides 2024.06.0 リリースへのアップグレード方法について説明します。
source-git-commit: 5c62a267ea71905a4f796b4613fea176e57d9236
workflow-type: tm+mt
source-wordcount: '1019'
ht-degree: 4%

---

# 2024.06.0 リリースのアップグレード手順

この記事では、Adobe Experience Manager Guides as a Cloud Serviceの 2024.06.0 リリースのアップグレード手順と互換性マトリックスについて説明します。

新機能と機能強化について詳しくは、[ 2024.06.0リリースの新機能](whats-new-2024-06-0.md)を参照してください。

このリリースで修正された問題の一覧については、[2024.06.0リリースで修正された問題](fixed-issues-2024-06-0.md)を参照してください。

## 互換性マトリックス

このセクションでは、2024.06.0 リリースのas a Cloud ServiceExperience Manager ガイドでサポートされるソフトウェア アプリケーションの互換表を示します。

### FrameMakerとFrameMaker Publishing Server

| Experience Managerガイド as a Cloud リリース | FMPS | FrameMaker |
| --- | --- | --- |
| 2024.06.0 | 互換性がありません | 2022 以上 |
| | | |


### 酸素コネクタ

| Experience Managerガイド as a Cloud リリース | 酸素コネクタウィンドウ | 酸素コネクタMac | 酸素ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- | --- | --- |
| 2024.06.0 | 3.5-uuid 1 | 3.5-uuid 1 | 2.3 | 2.3 |
|  |  |  |  |


### ナレッジベーステンプレートバージョン

| コンポーネントパッケージ名 | コンポーネントのバージョン | テンプレートのバージョン |
|---|---|---|
| Cloud Service用のExperience Managerガイドコンポーネントコンテンツパッケージ | dxml-components.all-1.2.2 | aem-site-template-dxml.all-1.0.16 |

## 2024.06.0 リリースへのアップグレード

Experience Managerガイドは、現在の（最新の）Experience Manageras a Cloud Serviceリリースをアップグレードすると、自動的にアップグレードされます。

>[!NOTE]
>
> 現在（最新）のリリースの使用を開始したら、上書きされた設定を最新の設定と比較して、最新の機能を取得します。
>- ui_config.json （フォルダープロファイルで設定されている可能性）


as a Cloud ServiceのExperience Managerガイドについて、既存のリリースでまだ手順を完了していない場合は、次の手順を実行します。

### サーブレットを使用したスクリプトのトリガーを有効にする手順

（2023 年 6 月リリースのExperience Managerガイドのas a Cloud Serviceリリースより前のリリースを使用している場合のみ）

インストールが完了したら、トリガーを押して翻訳ジョブを開始できます。

POST:

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

（2023 年 6 月リリースのExperience Managerガイドのas a Cloud Serviceリリースより前のリリースを使用している場合のみ）

既存のコンテンツを後処理し、新しい壊れたリンクのレポートを使用するには、次の手順を実行します。

1. （オプション）システムに 100,000 個を超える DITA ファイルがある場合は、 `queryLimitReads` および `queryLimitInMemory` 未満 `org.apache.jackrabbit.oak.query.QueryEngineSettingsService` を大きい値（存在するアセットの数より大きい値（例：200,000）に変更してから、再デプロイします。

   - に記載されている手順を使用します。 *設定の上書き* 設定ファイルを作成するには、Adobe Experience Manager Guides のインストールと設定のas a Cloud Serviceセクションを参照してください。
   - 設定ファイルで、以下の（プロパティ）の詳細を指定して、 `queryLimitReads` および `queryLimitInMemory` オプション：

     | PID | プロパティキー | プロパティの値 |
     |---|---|---|
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitReads | 値：200000 デフォルト値：100000 |
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitInMemory | 値：200000 デフォルト値：100000 |

1. （正しいPOSTを使用して）サーバへの認証リクエストを実行します。 `http://<server>//bin/guides/reports/upgrade`.

1. API は jobId を返します。 ジョブのステータスを確認するには、ジョブ ID を含むGETリクエストを同じエンドポイントに送信します。 `http://<server>/bin/guides/reports/upgrade?jobId= {jobId}`
（例： `http://localhost:8080/bin/guides/reports/upgrade?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`）

1. ジョブが完了すると、前回のGETリクエストが正常に応答します。 何らかの理由でジョブが失敗した場合は、サーバーログに失敗が記録されています。

1. デフォルトまたは以前の既存の値に戻す `queryLimitReads` 手順 1 で変更した場合。

### 「レポート」タブで新しい「検索と置換」および「トピック」リストを使用するために、既存のコンテンツにインデックスを作成する手順は次のとおりです。

（2023 年 6 月リリースのExperience Managerガイドのas a Cloud Serviceリリースより前のリリースを使用している場合のみ）

既存のコンテンツのインデックスを作成する次の手順を実行し、「レポート」タブの新しい検索と置換のテキストをマップレベルとトピックリストで使用します。

1. （正しいPOSTを使用して）サーバへの認証リクエストを実行します。 `http://<server:port>/bin/guides/map-find/indexing`. （オプション：マップの特定のパスを渡してインデックスを作成できます。デフォルトでは、すべてのマップにインデックス||が作成されます。例： `https://<Server:port>/bin/guides/map-find/indexing?paths=<path of the MAP in repository>`）

1. ルートフォルダーを渡して、特定のフォルダー（およびそのサブフォルダー）の DITA マップのインデックスを作成することもできます。 例えば、`http://<server:port\>/bin/guides/map-find/indexing?root=/content/dam/test` のようになります。paths パラメーターと root パラメーターの両方が渡される場合、paths パラメーターのみが考慮されることに注意してください。

1. API は jobId を返します。 ジョブのステータスを確認するには、ジョブ ID を含むGETリクエストを同じエンドポイントに送信します。 `http://<server:port>/bin/guides/map-find/indexing?jobId={jobId}`（例： `http://localhost:8080/bin/guides/reports/upgrade?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`）

1. ジョブが完了すると、前回のGETリクエストが成功を示して応答し、マップが失敗したかどうかを示します。 正常にインデックス化されたマップは、サーバ ログから確認できます。

### を処理する手順 `'fmdita rewriter'` 矛盾

Experience Managerガイドにはがあります [**カスタム sling rewriter**](../cs-install-guide/conf-output-generation.md#custom-rewriter) クロスマップ（2 つの異なるマップのトピック間のリンク）の場合に生成されるリンクを処理するモジュール。

コードベースに別のカスタム sling リライターがある場合は、 `'order'` Experience Managerガイド sling rewriter が使用する 50 より大きい値 `'order'` 50。 これを上書きするには、50 より大きい値が必要です。 詳しくは、次を参照してください [出力の書き換えパイプライン](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html).

このアップグレード中、以下を行いました `'order'` 値が 1000 から 50 に変更された場合は、既存のカスタムリライターを結合する必要があります。 `fmdita-rewriter`.



### コンテンツフラグメントの B-Tree 移行を実行する手順

コンテンツフラグメントの参照が表示されない場合は、トリガーを押して移行ジョブを開始できます。

POST:

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

前の応答では、JSON、キー `lockNodePath` は、リポジトリで作成されたノードへのパスを保持します。これは、送信されたジョブを指します。 ジョブが完了すると、自動的に削除されます。 ジョブのステータスについては、このノードを参照してください。

このジョブが完了するのを待ってから、次の手順に進みます。

>[!NOTE]
>
>ノードがまだ存在するかどうか、およびジョブのステータスを確認する必要があります。

GET:

```
http://<aem_domain>/var/dxml/executor-locks/cf-reference-store-btree-migration/1683190032886.json
```
