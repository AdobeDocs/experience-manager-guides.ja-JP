---
title: アセットの一括処理を開始するための API
description: アセットの一括処理を開始するための API について説明します
feature: Post-Processing Event Handler
role: Developer
level: Experienced
source-git-commit: 8671a26bfee2d9e3b4e70a8f2615568c08c0a370
workflow-type: tm+mt
source-wordcount: '587'
ht-degree: 12%

---

# アセットの一括処理を開始するための API

指定されたパスの一括アセット処理を開始する POST メソッド。 この API は、JCR ベースとデータベースベースの両方のアセット処理をサポートしています。 指定されたパスとそのサブパスの下にあるすべてのアセットを処理する非同期ジョブを開始します。 開始時に、API は一意の processingID を返します。これを使用して、ジョブのステータスを追跡できます。

**リクエスト URL**

`http://<aem-guides-server>:<port-number>/bin/guides/v1/assets/process`

**リクエストパラメーター**

| 名前 | 型 | 必須 | 説明 |
|----|----|--------|-----------|
| `path` | 文字列 | はい | 処理するAEM リポジトリ内のフォルダーまたはアセットの絶対パス。 |
| `excludedPaths` | 文字列 | いいえ | 処理から除外するパスのリスト |
| `type` | 文字列 | はい | 実行する処理のタイプ。 例：ASSET_PROCESSING |
| `filter` | オブジェクト | いいえ | 選択したアセットに適用されるフィルター |

**オブジェクトフィールドをフィルタリング**

| 名前 | 種類 | 説明 |
|----|----|-----------|
| fileTypes | 文字列 | 処理するアセットタイプ。 使用できる値：DITATOPIC、DITAMAP、MARKDOWN、HTML/CSS、DITAVAL、その他。 |
| startTime | 整数 | アセット作成時間の下限 |
| 終了時 | 整数 | アセット作成時間の上限 |

**リクエストの例**

```JSON
{
  "path": "/content/dam/status-fetch1",
  "excludedPaths": [
    "content/dam/status-fetch1/excluded-folder"
  ],
  "type": "ASSET_PROCESSING",
  "filter": {
        "fileTypes": ["DITAMAP", "DITATOPIC"],
        "startTime": 1758876933000
        "endTime": 1764932039000
    }
}
```

**応答値**

非同期ジョブのステータスを取得するためにポーリングする processingId。

```JSON
{
  "processingId": "akjhdfalkj1132"
}
```

**応答コード**

- 200 成功
- 400 無効な入力
- 401 未認証のアクセス
- 500 内部サーバーエラー

## ジョブステータスの確認

以前に開始されたアセット処理ジョブの現在のステータスを取得するGET メソッド。

**リクエスト URL**

`http://<aem-guides-server>:<port-number>/bin/guides/v1/assets/process/status`

**リクエストパラメーター**

| 名前 | 型 | 必須 | 説明 |
|----|----|--------|-----------|
| `processingId` | 文字列 | はい | ステータスを問い合わせるジョブの一意の ID。 |

**応答の例**

```JSON
{
  "processingId": "string",
  "path": "string",
  "excludedPaths": ["string"],
  "status": "WAITING",
  "triggeredCount": 0,
  "startedAt": 0,
  "completedAt": 0,
  "hasLogs": true,
  "createdBy": "string",
  "type": "ASSET_PROCESSING",
  "migrationSet": {
    "totalFiles": 0,
    "calculationStatus": "WAITING"
  },
  "eta": {
    "value": 0,
    "unit": "string"
  },
  "comments": "string",
  "restartable": true,
  "resumable": true,
  "cancellable": true
}
```

**応答コード**

- 200 成功
- 400 無効な入力
- 401 未認証のアクセス
- 500 内部サーバーエラー

## ジョブログの表示

特定のジョブ ID のログを取得するGET メソッド。 この API は、アセット処理ジョブのログを取得します。 processingid は必須です。 API は、オフセットパラメーターと制限パラメーター、テール戦略を提供します。

**リクエスト URL**

`http://<aem-guides-server>:<port-number>/bin/guides/v1/assets/process/logs`

**リクエストパラメーター**

| 名前 | 型 | 必須 | 説明 |
|----|----|--------|-----------|
| `processingId` | 文字列 | はい | ログを表示するジョブの一意の ID。 |
| `offset` | 整数 | いいえ | ログを読み取る開始点（行番号）。 最初の N 行をスキップするページネーションに使用します。 |
| `limit` | 整数 | いいえ | 取得するログ行の最大数。 |
| `tail` | 整数 | いいえ | 末尾から取得するログ行の数。 |


**応答の例**

```JSON
{
  "lines": [
    "string"
  ],
  "limit": 0,
  "offset": 0,
  "hasMore": true
}
```

**応答コード**

- 200 成功
- 400 無効な入力
- 401 未認証のアクセス
- 500 内部サーバーエラー


## ジョブログのダウンロード

特定のジョブのログファイルを ZIP 形式でダウンロードするGET メソッド。

**リクエスト URL**

`http://<aem-guides-server>:<port-number>/bin/guides/v1/assets/process/logs/download`

**リクエストパラメーター**

| 名前 | 型 | 必須 | 説明 |
|----|----|--------|-----------|
| `processingId` | 文字列 | はい | ログファイルのダウンロードが必要なジョブの一意の ID。 |


**応答の例**

```JSON
{
  "logFilePaths": [
    "string"
  ]
}
 
```

**応答コード**

- 400 無効な入力
- 401 未認証のアクセス
- 500 内部サーバーエラー

## ジョブをキャンセル

進行中の一括アセット処理リクエストをキャンセルする POST API。 ジョブが見つからない場合、API はエラーを返します。

**リクエスト URL**

`http://<aem-guides-server>:<port-number>/bin/guides/v1/assets/process/cancel`

**リクエストパラメーター**

| 名前 | 型 | 必須 | 説明 |
|----|----|--------|-----------|
| `processingId` | 文字列 | はい | ステータスを問い合わせるジョブの一意の ID。 |


**応答コード**

- 200 成功
- 400 無効な入力
- 401 未認証のアクセス
- 500 内部サーバーエラー


## ジョブを再開

以前にキャンセルまたは失敗した一括アセット処理リクエストを再起動する POST API。 最後のチェックポイントから処理を再開します。 ジョブが見つからない場合や現在実行中の場合、API はエラーを返します。

**リクエスト URL**

`http://<aem-guides-server>:<port-number>/bin/guides/v1/assets/process/resume`

**リクエストパラメーター**

| 名前 | 型 | 必須 | 説明 |
|----|----|--------|-----------|
| `processingId` | 文字列 | はい | ステータスを問い合わせるジョブの一意の ID。 |


**応答コード**

- 200 成功
- 400 無効な入力
- 401 未認証のアクセス
- 500 内部サーバーエラー

## ジョブ履歴の表示

アセットの後処理の最後の「N」回の実行を返すGET API。

**リクエスト URL**

`http://<aem-guides-server>:<port-number>/bin/guides/v1/assets/process/history`

**リクエストパラメーター**

なし. このGET リクエストは、入力パラメーターを必要とせずにジョブ履歴を取得します。

**応答の例**

```JSON
{
  "executionHistory": [
    {
      "processingId": "165f1de6-68c4-4dcd-9223-2b7242b62306",
      "path": "/content/dam/22858",
      "status": "SUCCESS",
      "triggeredCount": 6,
      "startedAt": 1761291362776,
      "completedAt": 1761291364026,
      "hasLogs": true,
      "createdBy": "user",
      "type": "ASSET_PROCESSING",
      "migrationSet": {
        "totalFiles": 6,
        "calculationStatus": "SUCCESS"
      },
      "eta": {
        "value": 0,
        "unit": "SECONDS"
      },
      "comments": "",
      "filter": {
        "fileTypes": [],
        "filterProcessedAssets": false
      },
      "cancellable": false,
      "resumable": false,
      "restartable": true
    }
  ]
}
```



