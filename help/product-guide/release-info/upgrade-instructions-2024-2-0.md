---
title: リリースノート | Adobe Experience Managerガイド、2024.2.0 リリースのアップグレード手順と修正された問題
description: 互換性マトリックスと、Adobe Experience Managerガイドas a Cloud Serviceの 2024.2.0 リリースにアップグレードする方法について説明します。
source-git-commit: 9022b8fbae9ff9eba962ca75e25c1f1137b008f8
workflow-type: tm+mt
source-wordcount: '866'
ht-degree: 0%

---

# 2024.2.0 リリースのアップグレード手順

この記事では、Adobe Experience Managerガイドas a Cloud Serviceの 2024.2.0 リリースのアップグレード手順と互換性マトリックスについて説明します。

新機能および機能強化の詳細については、「 [2024.2.0 リリースの新機能](whats-new-2024-2-0.md).

このリリースで修正された問題の一覧については、 [2024.2.0 リリースの問題を修正しました](fixed-issues-2024-2-0.md).


## 互換性マトリックス

このセクションでは、as a Cloud ServiceのExperience Managerガイドの 2024.2.0 リリースでサポートされているソフトウェアアプリケーションの互換性マトリックスを示します。

### FrameMakerとFrameMaker Publishing Server

| Experience Managerガイド as a Cloud リリース | FMPS | FrameMaker |
| --- | --- | --- |
| 2024.2.0 | 互換性がありません | 2022 以降 |
| | | |


### 酸素コネクタ

| Experience Managerガイド as a Cloud リリース | Oxygen Connector ウィンドウ | Oxygen Connector Mac | Oxygen Windows で編集 | Oxen Macで編集 |
| --- | --- | --- | --- | --- |
| 2024.2.0 | 3.5-uuid 1 | 3.5-uuid 1 | 2.3 | 2.3 |
|  |  |  |  |


### ナレッジベーステンプレートバージョン

| コンポーネントのパッケージ名 | コンポーネントのバージョン | テンプレートバージョン |
|---|---|---|
| Experience ManagerガイドコンポーネントCloud Service用コンテンツパッケージ | dxml-components.all-1.2.2 | aem-site-template-dxml.all-1.0.15 |

## 2024.2.0 リリースへのアップグレード

Experience Managerガイドは、Experience Manageras a Cloud Serviceの現在の（最新の）リリースをアップグレードすると、自動的にアップグレードされます。


既存のリリースに対してまだ実行していない場合は、Experience Managerガイドas a Cloud Serviceの次の手順を実行します。

### サーブレットを介したスクリプトのトリガーを有効にする手順

(2023 年 6 月リリースのリリースより前のリリースのExperience Managerガイドas a Cloud Serviceの場合のみ )

インストールが完了したら、「トリガーを押して翻訳ジョブを開始」を選択できます。

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

前の応答 JSON では、キー `lockNodePath` は、送信されたジョブを指す、リポジトリで作成されたノードへのパスを保持します。 ジョブが完了すると、ジョブは自動的に削除されます。その後、このノードを参照してジョブのステータスを確認できます。

このジョブが完了するまで待ってから、次の手順に進みます。

>[!NOTE]
>
> ノードがまだ存在するかどうか、およびジョブのステータスを確認する必要があります。

```
GET
http://<aem_domain>/var/dxml/executor-locks/translation-map-upgrade/1683190032886.json
```

### リンク切れレポートを使用するために既存のコンテンツを後で処理する手順

(2023 年 6 月リリースのリリースより前のリリースのExperience Managerガイドas a Cloud Serviceの場合のみ )

既存のコンテンツを後処理し、新しい壊れたリンクレポートを使用するには、次の手順を実行します。

1. （オプション）システムに 100,000 個を超える DITA ファイルがある場合、 `queryLimitReads` および `queryLimitInMemory` under `org.apache.jackrabbit.oak.query.QueryEngineSettingsService` を大きい値 ( 存在するアセットの数（例：200,000）を超える値 ) に設定し、再デプロイします。

   - 指示に従い、 *設定の上書き* 設定ファイルを作成するには、 Adobe Experience Manager Guides のインストールと設定をas a Cloud Service的に行ってください。
   - 設定ファイルで、次の（プロパティ）詳細を指定して、 `queryLimitReads` および `queryLimitInMemory` オプション：

     | PID | プロパティキー | プロパティの値 |
     |---|---|---|
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitReads | 値：200000デフォルト値：100000 |
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitInMemory | 値：200000デフォルト値：100000 |

1. サーバーに対してPOSTリクエストを実行します（正しい認証を使用） - `http://<server>//bin/guides/reports/upgrade`.

1. API は jobId を返します。 ジョブのステータスを確認するには、ジョブ ID を持つGETリクエストを同じエンドポイントに送信します。 `http://<server>/bin/guides/reports/upgrade?jobId= {jobId}`
( 例： `http://localhost:8080/bin/guides/reports/upgrade?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`)

1. ジョブが完了すると、前のGETリクエストへの応答が成功します。 何らかの理由でジョブが失敗した場合は、サーバーログから失敗を確認できます。

1. のデフォルト値または以前の既存の値に戻す `queryLimitReads` 手順 1 で変更した場合。

### 「レポート」タブの新しい検索と置換、およびトピックリストを使用するために既存のコンテンツをインデックス化する手順は次のとおりです。

(2023 年 6 月リリースのリリースより前のリリースのExperience Managerガイドas a Cloud Serviceの場合のみ )

既存のコンテンツのインデックス作成に関する次の手順を実行し、「レポート」タブのマップレベルおよびトピックリストで新しい検索と置換テキストを使用します。

1. サーバーに対してPOSTリクエストを実行します（正しい認証を使用） - `http://<server:port>/bin/guides/map-find/indexing`. （任意）マップの特定のパスを渡してインデックスを作成できます。デフォルトでは、すべてのマップがインデックス付けされます|| 例： `https://<Server:port>/bin/guides/map-find/indexing?paths=<path of the MAP in repository>`)

1. API は jobId を返します。 ジョブのステータスを確認するには、ジョブ ID を持つGETリクエストを同じエンドポイントに送信します。 `http://<server:port>/bin/guides/map-find/indexing?jobId={jobId}`( 例： `http://localhost:8080/bin/guides/reports/upgrade?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`)

1. ジョブが完了すると、前のGETリクエストへの応答が成功します。 何らかの理由でジョブが失敗した場合は、サーバーログから失敗を確認できます。

1. 手順 1 で変更した場合は、デフォルト値または以前の既存値 queryLimitReads に戻します。

### を処理する手順 `'fmdita rewriter'` 競合

Experience Managerガイドには [**custom sling rewriter**](../cs-install-guide/conf-output-generation.md#custom-rewriter) クロスマップ（2 つの異なるマップのトピック間のリンク）の場合に生成されるリンクを処理するためのモジュール。

コードベースに別のカスタム Sling リライターがある場合は、 `'order'` 値が 50 より大きい (Experience Managerガイド sling rewriter が使用する ) `'order'` 50.  これを上書きするには、50 より大きい値が必要です。 詳しくは、 [出力書き換えパイプライン](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html).

このアップグレードの間、 `'order'` の値を 1000 から 50 に変更した場合、既存のカスタムリライターがある場合は、とマージする必要があります。 `'fmdita-rewriter'`.



