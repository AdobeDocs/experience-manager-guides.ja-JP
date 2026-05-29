---
title: アセットの一括処理を開始するAPI
description: アセットの一括処理を開始するAPIについて説明します
feature: Post-Processing Event Handler
role: Developer
level: Experienced
exl-id: feba6d8e-c363-4360-af33-92a01dcf6672
TQID: https://experienceleague.adobe.com/rGPpMIf5X5lfZZy2ZWk9lizd2E7UyRT8BLkSBb0o320
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
role_v2: id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
source-git-commit: a13143053c75ab65cbcd20a52c8ca3fb953edecf
workflow-type: tm+mt
source-wordcount: 639
ht-degree: 11%

---

# アセットの一括処理を開始するAPI

>[!NOTE]
>
> 最新のREST API エンドポイントの定義と関連する詳細については、`https://<aem-author-url>/libs/fmdita/clientlibs/api-docs/index.html`のSwagger ドキュメントを参照してください（`<aem-author-url>`をAEM サーバーのURLに置き換えます）。 この記事は2026年10月にアーカイブされる予定なので、今後Swagger ドキュメントを使用して最新のAPI情報を入手することをお勧めします。

指定されたパスに対して一括アセット処理を開始するPOST メソッド。 このAPIは、JCR ベースとデータベースベースの両方のアセット処理をサポートします。 指定されたパスとそのサブパスの下にあるすべてのアセットを処理する非同期ジョブが開始されます。 開始すると、APIは一意のprocessingIDを返し、これを使用してジョブステータスを追跡できます。

**リクエスト URL**

`http://<aem-guides-server>:<port-number>/bin/guides/v1/assets/process`

**要求パラメーター**

| 名前 | 種類 | 必須 | 説明 |
|----|----|--------|-----------|
| `path` | 文字列 | はい | 処理するAEM リポジトリ内のフォルダーまたはアセットの絶対パス。 |
| `excludedPaths` | 文字列 | いいえ | 処理から除外するパスのリスト |
| `type` | 文字列 | はい | 実行する処理のタイプ。 例：ASSET_PROCESSING。 |
| `filter` | オブジェクト | いいえ | 選択したアセットに適用されるフィルター |

**オブジェクトフィールドのフィルター**

| 名前 | 種類 | 説明 |
|----|----|-----------|
| fileTypes | 文字列 | 処理するアセットタイプ： 使用可能な値：DITATOPIC、DITAMAP、MARKDOWN、HTML/CSS、DITAVALなど。 |
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

非同期ジョブのステータスを取得するためにポーリングするprocessingId。

```JSON
{
  "processingId": "akjhdfalkj1132"
}
```

**応答コード**

- 200件の成功
- 400無効な入力
- 401不正アクセス
- 500内部サーバーエラー

## ジョブの状態を確認

以前に開始したアセット処理ジョブの現在のステータスを取得するGET メソッド。

**リクエスト URL**

`http://<aem-guides-server>:<port-number>/bin/guides/v1/assets/process/status`

**要求パラメーター**

| 名前 | 種類 | 必須 | 説明 |
|----|----|--------|-----------|
| `processingId` | 文字列 | はい | ステータスがクエリされているジョブの一意のID。 |

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

- 200件の成功
- 400無効な入力
- 401不正アクセス
- 500内部サーバーエラー

## ジョブのログを表示

指定されたジョブ IDのログを取得するGET メソッド。 このAPIは、アセット処理ジョブのログを取得します。 processingidは必須です。 APIには、オフセットと制限のパラメーターと、テール戦略が用意されています。

**リクエスト URL**

`http://<aem-guides-server>:<port-number>/bin/guides/v1/assets/process/logs`

**要求パラメーター**

| 名前 | 種類 | 必須 | 説明 |
|----|----|--------|-----------|
| `processingId` | 文字列 | はい | ログを表示するジョブの一意のID。 |
| `offset` | 整数 | いいえ | ログを読み取る開始点（行番号）。 ページ分割で最初のN行をスキップするために使用します。 |
| `limit` | 整数 | いいえ | 取得するログ行の最大数。 |
| `tail` | 整数 | いいえ | 最後から取得するログ行の数。 |


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

- 200件の成功
- 400無効な入力
- 401不正アクセス
- 500内部サーバーエラー


## ジョブのログのダウンロード

特定のジョブのログファイルをZIP形式でダウンロードするGET メソッド。

**リクエスト URL**

`http://<aem-guides-server>:<port-number>/bin/guides/v1/assets/process/logs/download`

**要求パラメーター**

| 名前 | 種類 | 必須 | 説明 |
|----|----|--------|-----------|
| `processingId` | 文字列 | はい | ログファイルをダウンロードする必要があるジョブの一意のID。 |


**応答の例**

```JSON
{
  "logFilePaths": [
    "string"
  ]
}
 
```

**応答コード**

- 400無効な入力
- 401不正アクセス
- 500内部サーバーエラー

## ジョブをキャンセル

進行中の一括アセット処理リクエストをキャンセルするPOST API。 ジョブが見つからない場合、APIはエラーを返します。

**リクエスト URL**

`http://<aem-guides-server>:<port-number>/bin/guides/v1/assets/process/cancel`

**要求パラメーター**

| 名前 | 種類 | 必須 | 説明 |
|----|----|--------|-----------|
| `processingId` | 文字列 | はい | ステータスがクエリされているジョブの一意のID。 |


**応答コード**

- 200件の成功
- 400無効な入力
- 401不正アクセス
- 500内部サーバーエラー


## ジョブを再開

以前にキャンセルまたは失敗した一括アセット処理リクエストを再起動するPOST API。 最後のチェックポイントから処理が再開されます。 ジョブが見つからないか、現在実行中の場合、APIはエラーを返します。

**リクエスト URL**

`http://<aem-guides-server>:<port-number>/bin/guides/v1/assets/process/resume`

**要求パラメーター**

| 名前 | 種類 | 必須 | 説明 |
|----|----|--------|-----------|
| `processingId` | 文字列 | はい | ステータスがクエリされているジョブの一意のID。 |


**応答コード**

- 200件の成功
- 400無効な入力
- 401不正アクセス
- 500内部サーバーエラー

## ジョブ履歴の表示

Asset Post-Processingの最後の「N」実行を返すGET API。

**リクエスト URL**

`http://<aem-guides-server>:<port-number>/bin/guides/v1/assets/process/history`

**要求パラメーター**

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
