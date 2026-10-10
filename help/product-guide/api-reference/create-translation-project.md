---
title: 翻訳プロジェクトを作成
description: API翻訳プロジェクトの作成について詳しく見る
feature: Post-Processing Event Handler
role: Developer
level: Experienced
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
feature_v2:
  - id: c6d09140-3c91-45d3-b7ed-b681af752f43
    internal-label: APIs
subfeature_v2:
  - id: e0bef973-8c57-4760-9b12-ec950a3c7247
    internal-label: Post processing event handler
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '249'
ht-degree: 15%
---

# 翻訳プロジェクトを作成

>[!NOTE]
>
> 最新のREST API エンドポイントの定義と関連する詳細については、`https://<aem-author-url>/libs/fmdita/clientlibs/api-docs/index.html`のSwagger ドキュメントを参照してください（`<aem-author-url>`をAEM サーバーのURLに置き換えます）。 この記事は2026年10月にアーカイブされる予定なので、今後Swagger ドキュメントを使用して最新のAPI情報を入手することをお勧めします。

必要なプロジェクトの詳細を受け入れることで、翻訳プロジェクトを作成するのに役立つPOST メソッド。

## リクエスト URL

`http://<aem-guides-server>:<port-number>/bin/guides/v1/translation/project/create`

## リクエストタイプ

POST

## リクエストパラメーター

| 名前 | 種類 | 説明 |
|----|----|-----------|
| `type` | 文字列 | newTranslationProject, xliffTranslationProject, newMultiLingualTranslationProject, addToExistingProject, newScopingTranslationProject |
| `versionDetails`, `versionSelector` | 文字列 | Baseline, latestVersion, versionAsOfDate |
| `language` | 文字列 | コンマ区切り言語「de」、「fr」 |
| `map.id` | 文字列 | 翻訳するソースマップのGUID |
| `map.path` | 文字列 | 翻訳するソースマップのパス |
| `referenceType` | 文字列 | 間接、ダイレクト |
| `fileType` | 文字列 | マップ、トピック、その他 |
| `documentState` | 文字列 | は、マップのプロファイルでユーザーによって割り当てられたリストの1つです |
| `translationStatus` | 文字列 | 同期なし、同期中、最新、古い、処理中、コピーが見つからない、なし、なし |

>[!NOTE]
>
>翻訳プロジェクトの作成時に`map.id`または`map.path`を使用できます。

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

- 200件の成功
- 400無効な入力
- 401不正アクセス
- 500内部サーバーエラー

## リクエストの例

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

### ベースラインで既存のプロジェクトに追加

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

## 翻訳プロジェクトの作成状況

新しく作成された翻訳プロジェクトの翻訳ステータスを追跡するGET API。

## リクエスト URL

`http://<aem-guides-server>:<port-number>/bin/guides/v1/translation/project/creationstatus`

## リクエストタイプ

GET

## リクエストパラメーター

| 名前 | 種類 | 説明 |
|----|----|-----------|
| `path` | 文字列 | プロジェクトのパス |
| `languageStatusMap` | 文字列 | リクエストされた言語ごとに、完了ステータス（「進行中」、「完了」、「失敗」、「スキップ」）を返します |


## リクエストの例

```json
{
  "path": "/content/projects/test_project_1_ondec5",
  "languageStatusMap": {
    "de": "Completed"
  }
}
```
