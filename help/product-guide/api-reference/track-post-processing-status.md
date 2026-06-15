---
title: フォルダーまたはアセットの後処理を追跡するAPI
description: フォルダーまたはアセットの後処理を追跡するAPIについて説明します
feature: Post-Processing Event Handler
role: Developer
level: Experienced
exl-id: f902fac1-2717-4696-a835-c4b0bb8add3d
TQID: https://experienceleague.adobe.com/Lyv-S5o-Z40bMqqIHhbxKrsmn9CCqHRnqnpiq91EjGU
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
source-git-commit: 1d80ca88a3a6637a118657367b86b499675f6d0e
workflow-type: tm+mt
source-wordcount: 150
ht-degree: 13%

---

# フォルダーまたはアセットの後処理ステータスを追跡するAPI

次に、アセットのステータスを取得するために非同期ジョブを開始するPOST メソッドを示します。

## ガイドでのアセットのステータスの検索

**リクエスト URL**

`http://<aem-guides-server>:<port-number>bin/guides/v1/assets/status `

**パラメーター**

| 名前 | 種類 | 必須 | 説明 |
|----|----|--------|-----------|
| `path` | 文字列 | はい | ステータスの取得が必要なフォルダーまたはアセットパス。 |
| `excludedPaths` | 文字列 | いいえ | 上記リストから除外するフォルダーパス。 |

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
非同期ジョブのステータスを取得するためにポーリングするjobId。

```JSON
{ 

  "jobId": "akjhdfalkj1132", 

  "status": "WAITING", 

 

} 
```

## Poller API

上記のAPIによって実行される非同期ジョブのステータスを取得するGET メソッド。

**リクエスト URL**

`http://<aem-guides-server>:<port-number>bin/guides/v1/assets/status`

**パラメーター**

| 名前 | 種類 | 必須 | 説明 |
|----|----|--------|-----------|
| `jobId` | 文字列 | はい | 上記のAPIによって返されたジョブ ID。 |

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

**ステータス値：**&#x200B;成功、失敗、処理中、保留中
