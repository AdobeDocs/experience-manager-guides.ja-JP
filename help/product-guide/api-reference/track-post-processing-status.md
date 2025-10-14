---
title: フォルダーまたはアセットの後処理を追跡する API
description: フォルダーまたはアセットの後処理を追跡する API について説明します
feature: Post-Processing Event Handler
role: Developer
level: Experienced
source-git-commit: 558108650aeeeda440895972e460fa523b804bb2
workflow-type: tm+mt
source-wordcount: '150'
ht-degree: 13%

---

# フォルダーまたはアセットの後処理ステータスを追跡する API

次に、非同期ジョブを開始してアセットのステータスを取得する POST メソッドを示します。

## ガイドでアセットのステータスを確認する

**リクエスト URL**

`http://<aem-guides-server>:<port-number>bin/guides/v1/assets/status `

**パラメーター**

| 名前 | 型 | 必須 | 説明 |
|----|----|--------|-----------|
| `path` | 文字列 | はい | ステータスを取得する必要があるフォルダーまたはアセットパス。 |
| `excludedPaths` | 文字列 | いいえ | 上記のリストから除外するフォルダーパス。 |

```JSON
{ 

    "paths": [ 

        "/content/dam/status-fetch1", 

        "/content/dam/status-fetch2" 

    ], 

    "excludedPaths": [ 

        "content/dam/status-fetch1/excluded-folder" 

    ] 

} 
```

**応答値**
jobId は、非同期ジョブのステータスを取得するためにポーリングします。

```JSON
{ 

  "jobId": "akjhdfalkj1132", 

  "status": "WAITING", 

 

} 
```

## Poller API

上記の API で実行された非同期ジョブのステータスを取得するGET メソッド。

**リクエスト URL**

`http://<aem-guides-server>:<port-number>bin/guides/v1/assets/status`

**パラメーター**

| 名前 | 型 | 必須 | 説明 |
|----|----|--------|-----------|
| `jobId` | 文字列 | はい | 上記の API によって返されたジョブ ID。 |

**応答値**

アセットとそのステータスのリスト。

```JSON
{ 

  "jobId": " akjhdfalkj1132", 

  "status": "SUCCESS", 

  "assets": [ 

    { 

      "path": "/content/dam/status-fetch1/a.dita", 

      "uuid": "GUID-1293914ansd", 

      "status": "SUCCESS", 

      "exists": true 

    }, 

    { 

      "path": "/content/dam/status-fetch1/b.dita", 

      "uuid": "GUID-1883241", 

      "status": "FAILURE", 

      "exists": true 

    } 

 

  ] 

} 
```

**ステータス値：** 成功、失敗、処理、保留
