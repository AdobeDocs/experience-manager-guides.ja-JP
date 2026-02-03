---
title: 翻訳プロジェクトを作成
description: API 翻訳プロジェクトの作成について説明します
feature: Post-Processing Event Handler
role: Developer
level: Experienced
source-git-commit: 41dd3dee5f9d64fb5c58b5b302cc9759e48e3631
workflow-type: tm+mt
source-wordcount: '199'
ht-degree: 18%

---

# 翻訳プロジェクトを作成

必要なプロジェクト詳細を受け入れて翻訳プロジェクトを作成するのに役立つ POST メソッド。

## リクエスト URL

`http://<aem-guides-server>:<port-number>/bin/guides/v1/translation/project/create`

## リクエストタイプ

POST

## リクエストパラメーター

| 名前 | 種類 | 説明 |
|----|----|-----------|
| `type` | String | newTranslationProject, xliffTranslationProject, newMultiLingualTranslationProject, addToExistingProject, newScopingTranslationProject |
| `versionDetails`、`versionSelector` | 文字列 | ベースライン、最新バージョン、versionAsOfDate |
| `language` | 文字列 | コンマ区切りの言語「de」、「fr」 |
| `map.id` | 文字列 | 翻訳するソースマップの GUID |
| `map.path` | 文字列 | 翻訳するソースマップのパス |
| `referenceType` | 文字列 | 間接、直接 |
| `fileType` | 文字列 | マップ、トピック、その他 |
| `documentState` | 文字列 | は、ユーザーがマップのプロファイルに割り当てたリストの 1 つになります |
| `translationStatus` | 文字列 | 非同期、同期中、最新、期限切れ、処理中、コピーがない、なし、なし |

>[!NOTE]
>
>翻訳プロジェクトを作成する際は、`map.id` または `map.path` を使用できます。

## リクエストの例

```JSON
{
  "title": "Test Project 1 on Dec 5",
  "type": "newTranslationProject",
  "translationDetails": {
    "map": {
      "id": "GUID-06527014-062d-46dc-8fea-48b4b4497c51-en",
      "path": "/content/dam/ajay-test/lang/en/m2.ditamap"
    },
    "languages": ["de"],
    "versionDetails": {
      "versionSelector": "latestVersion"
    }
  },
  "filterDetails": [
    { "name": "referenceType", "values": [] },
    { "name": "fileType", "values": [] },
    { "name": "documentState", "values": [] },
    { "name": "translationStatus", "values": [] }
   ]
```

## 応答値

```JSON
{
  "executionId": "5c13c571-3407-46d5-8f45-50ea9e05a212",
  "path": "/content/projects/test_project_1_ondec5"
}
```

**応答コード**

- 200 成功
- 400 無効な入力
- 401 未認証のアクセス
- 500 内部サーバーエラー

## サンプルリクエスト

### 既存のプロジェクトへの追加

```json
{
  "title": "Add to existing Project",
  "type": "addToExistingProject",
  "path": "/content/projects/test_project_1_existing",
  "translationDetails": {
    "map": {
      "id": "GUID-06527014-062d-46dc-8fea-48b4b4497c51-en"
    },
    "languages": ["de"],
    "versionDetails": {
      "versionSelector": "versionAsOfDate",
      "version": "2025-12-05T10:30:00+01:30"
    }
  },
  "filterDetails": [
    { "name": "referenceType", "values": [] },
    { "name": "fileType", "values": [] },
    { "name": "documentState", "values": [] },
    { "name": "translationStatus", "values": [] }
  ]
}
```

### ベースラインを使用して既存のプロジェクトに追加

```json
{
  "title": "Add to existin project Project with baseline",
  "type": "addToExistingProject",
  "path": "/content/projects/existing_project_path",
  "translationDetails": {
    "map": {
      "id": "GUID-06527014-062d-46dc-8fea-48b4b4497c51-en"
    },
    "languages": ["de"],
    "versionDetails": {
      "versionSelector": "baseline",
      "version": "test1"
    }
  },
  "filterDetails": [
    { "name": "referenceType", "values": ["Direct"] },
    { "name": "fileType", "values": [] },
    { "name": "documentState", "values": [] },
    { "name": "translationStatus", "values": [] }
  ]
}
```

## 翻訳プロジェクトの作成ステータス

新しく作成された翻訳プロジェクトの翻訳ステータスをトラッキングするGET API。

## リクエスト URL

`http://<aem-guides-server>:<port-number>/bin/guides/v1/translation/project/creationstatus`

## リクエストタイプ

GET

## リクエストパラメーター

| 名前 | 種類 | 説明 |
|----|----|-----------|
| `path` | String | プロジェクトのパス |
| `languageStatusMap` | 文字列 | リクエストされた言語ごとに、完了ステータス（処理中、完了、失敗、スキップ）を返します |


## リクエストの例

```json
{
  "path": "/content/projects/test_project_1_ondec5",
  "languageStatusMap": {
    "de": "Completed"
  }
}
```



