---
title: コンバージョンワークフロー用の REST API
description: コンバージョンワークフロー用の REST API について説明します
exl-id: f091782e-ab54-4db4-9018-9bcbff9da7b2
feature: Rest API Conversion Workflow
role: Developer
level: Experienced
source-git-commit: 45ae1471fe0f0586764ede9dd96530b7f75f69ee
workflow-type: tm+mt
source-wordcount: '390'
ht-degree: 9%

---

# コンバージョンワークフロー用の REST API {#id175UB30E05Z}

次の REST API を使用すると、Word、HTML、およびInDesign文書を DITA フォーマットに変換できます。

## Word ドキュメントの変換

Word 文書を DITA フォーマットに変換するGET方式。

**リクエスト URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/fmdita/conversion

| 名前 | 型 | 必須 | 説明 |
|----|----|--------|-----------|
| ``operation`` | 文字列 | はい | 呼び出される操作の名前。 このパラメーターの値は ``word2dita`` です。<br> **メモ：** この値では、大文字と小文字が区別されません。 |
| `inputFile` | 文字列 | はい | AEM リポジトリ内のソース Word ファイルの絶対パス。 |
| `destPath` | 文字列 | はい | 変換された DITA ファイルが保存される保存先の絶対パス。 |
| `createRev` | ブール値 | はい | ファイルのリビジョンを指定された宛先に作成する\（`true`\）かどうかを指定します\（`false`\）。 これは、変換先の場所に変換後のファイルの既存のバージョンが含まれている場合にのみ考慮されます。 |
| `style2tagMap` | 文字列 | はい | 変換に使用されるスタイルマッピングファイルの絶対パス。 |

**応答値**:
HTTP 200 \（成功\）応答を返します。

## HTMLドキュメントを変換

HTML文書を DITA フォーマットに変換するGET方式。

**リクエスト URL**:

http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/fmdita/conversion

**パラメーター**:

| 名前 | 型 | 必須 | 説明 |
|----|----|--------|-----------|
| `operation` | 文字列 | はい | 呼び出される操作の名前。 このパラメーターの値は ``html2dita`` です。<br> **メモ：** この値では、大文字と小文字が区別されません。 |
| `inputFile` | 文字列 | はい | AEM リポジトリ内のソースHTMLファイルの絶対パス。 |
| `destPath` | 文字列 | はい | 変換された DITA ファイルが保存される保存先の絶対パス。 |
| `createRev` | ブール値 | はい | ファイルのリビジョンを指定された宛先に作成する\（`true`\）かどうかを指定します\（`false`\）。 これは、変換先の場所に変換後のファイルの既存のバージョンが含まれている場合にのみ考慮されます。 |

**応答値**:

HTTP 200 \（成功\）応答を返します。

## InDesignドキュメントを変換

InDesign文書を DITA フォーマットに変換するGET方式。

**リクエスト URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/fmdita/conversion

**パラメーター**:

| 名前 | 型 | 必須 | 説明 |
|----|----|--------|-----------|
| ``operation`` | 文字列 | はい | 呼び出される操作の名前。 このパラメーターの値は ``idml2dita`` です。<br> **メモ：** この値では、大文字と小文字が区別されません。 |
| `inputFile` | 文字列 | はい | AEM リポジトリ内のソースInDesignファイルの絶対パス。 |
| `destPath` | 文字列 | はい | 変換された DITA ファイルが保存される保存先の絶対パス。 |
| `createRev` | ブール値 | はい | ファイルのリビジョンを指定された宛先に作成する\（`true`\）かどうかを指定します\（`false`\）。 これは、変換先の場所に変換後のファイルの既存のバージョンが含まれている場合にのみ考慮されます。 |

**応答値**:
HTTP 200 \（成功\）応答を返します。
