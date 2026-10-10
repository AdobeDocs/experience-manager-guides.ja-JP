---
title: コンバージョンワークフロー用REST API
description: コンバージョンワークフロー用REST APIについて説明します
exl-id: f091782e-ab54-4db4-9018-9bcbff9da7b2
feature: Rest API Conversion Workflow
role: Developer
level: Experienced
TQID: 'https://experienceleague.adobe.com/EG-ugDPVpviaEI1SXHOaFLPfChkzqQ8tSkPV-LZ-X3o'
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
feature_v2:
  - id: a01bfd36-4ab8-4bf8-9dc0-5b45b890552e
    internal-label: APIs
  - id: c6d09140-3c91-45d3-b7ed-b681af752f43
    internal-label: APIs
subfeature_v2:
  - id: d3b388b7-b49d-4f87-b444-9b6f7fc2ef0c
    internal-label: REST API Conversion Workflow
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '402'
ht-degree: 9%
---
# コンバージョンワークフロー用REST API {#id175UB30E05Z}

次のREST APIを使用すると、Word、HTML、InDesignのドキュメントをDITA形式に変換できます。

## Word文書の変換

Word文書をDITA形式に変換するGET メソッド。

**要求URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/fmdita/conversion

| 名前 | 種類 | 必須 | 説明 |
|----|----|--------|-----------|
| ``operation`` | 文字列 | はい | 呼び出される操作の名前。 このパラメーターの値は``word2dita``です。<br> **注意：**&#x200B;値では大文字と小文字が区別されません。 |
| `inputFile` | 文字列 | はい | AEM リポジトリ内のソース Word ファイルの絶対パス。 |
| `destPath` | 文字列 | はい | 変換されたDITA ファイルが保存される保存先の絶対パス。 |
| `createRev` | ブーリアン | はい | ファイルのリビジョンが指定された宛先に\（`true`\）作成されるかどうかを指定します\（`false`\）。 これは、変換先の場所に既存のバージョンの変換済みファイルが含まれている場合にのみ考慮されます。 |
| `style2tagMap` | 文字列 | はい | 変換に使用されるスタイルマッピングファイルの絶対パス。 |

**応答値**:
HTTP 200 \（Successful\）応答を返します。

## HTML ドキュメントの変換

HTML ドキュメントをDITA形式に変換するGET メソッド。

**要求URL**:

http://*<aem-guides-server\>*: *<port-number\>*/bin/fmdita/conversion

**パラメーター**:

| 名前 | 種類 | 必須 | 説明 |
|----|----|--------|-----------|
| `operation` | 文字列 | はい | 呼び出される操作の名前。 このパラメーターの値は``html2dita``です。<br> **注意：**&#x200B;値では大文字と小文字が区別されません。 |
| `inputFile` | 文字列 | はい | AEM リポジトリ内のソース HTML ファイルの絶対パス。 |
| `destPath` | 文字列 | はい | 変換されたDITA ファイルが保存される保存先の絶対パス。 |
| `createRev` | ブーリアン | はい | ファイルのリビジョンが指定された宛先に\（`true`\）作成されるかどうかを指定します\（`false`\）。 これは、変換先の場所に既存のバージョンの変換済みファイルが含まれている場合にのみ考慮されます。 |

**応答値**:

HTTP 200 \（Successful\）応答を返します。

## InDesign ドキュメントの変換

InDesign ドキュメントをDITA形式に変換するGET メソッド。

**要求URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/fmdita/conversion

**パラメーター**:

| 名前 | 種類 | 必須 | 説明 |
|----|----|--------|-----------|
| ``operation`` | 文字列 | はい | 呼び出される操作の名前。 このパラメーターの値は``idml2dita``です。<br> **注意：**&#x200B;値では大文字と小文字が区別されません。 |
| `inputFile` | 文字列 | はい | AEM リポジトリ内のソース InDesign ファイルの絶対パス。 |
| `destPath` | 文字列 | はい | 変換されたDITA ファイルが保存される保存先の絶対パス。 |
| `createRev` | ブーリアン | はい | ファイルのリビジョンが指定された宛先に\（`true`\）作成されるかどうかを指定します\（`false`\）。 これは、変換先の場所に既存のバージョンの変換済みファイルが含まれている場合にのみ考慮されます。 |

**応答値**:
HTTP 200 \（Successful\）応答を返します。
