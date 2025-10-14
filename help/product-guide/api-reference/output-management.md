---
title: 出力管理用の REST API
description: 出力管理用の REST API について説明します
exl-id: dab654f5-555d-4a89-bc94-55b1e938f255
feature: Rest API Output Management
role: Developer
level: Experienced
source-git-commit: 45ae1471fe0f0586764ede9dd96530b7f75f69ee
workflow-type: tm+mt
source-wordcount: '1175'
ht-degree: 6%

---

# 出力管理用の REST API {#id175UB30E05Z}

AEM Guidesで出力を管理するには、次の REST API を使用できます。

## DITA マップのすべての出力プリセットの取得 {#get-output-presets-dita-map}

DITA マップ用に設定されたすべての出力プリセットを取得するPOSTメソッド。

**リクエスト URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/publishlistener

**パラメーター**:

| 名前 | 型 | 必須 | 説明 |
|----|----|--------|-----------|
| `:operation` | 文字列 | はい | 呼び出される操作の名前。 このパラメーターの値は `getalloutputs` です。<br> **メモ：** この値では、大文字と小文字が区別されません。 |
| `sourcePath` | 文字列 | はい | DITA マップファイルの絶対パス。 |

**応答値**:
JSON 出力プリセットオブジェクトの配列を返します。各オブジェクトには、次の要素が含まれます。

| 要素 | 説明 |
|-------|-----------|
| `outputName` | 出力プリセットの名前 出力名は、定義されている DITA マップのスコープ内で一意です。 |
| `outputType` | このプリセットを使用して生成される出力のタイプ （AEM サイト、PDF、EPUB、その他）。 使用できるオプションは次のとおりです。<br>-   AEMSITE <br>-   PDF<br>-   HTML5 <br>-   EPUB<br>-   CUSTOM |
| `outputTitle` | 出力プリセット設定のわかりやすい名前。 出力プリセットの「設定名」プロパティの値を定義するために使用します。 |
| `ditaValPathList` | 目的の出力を生成するために使用される DITAVAL ファイルパスの配列。 |
| `targetPath` | 出力が公開または保存されるパス。 |
| `siteName` | *\（AEM サイト出力用\）* AEM サイトの名前。 |
| `templatePath` | *\（AEM Site 出力の場合\）* 目的の出力の生成に使用されるテンプレートノードのパス。 |
| `searchScope` | 検索操作の範囲を指定します。 このパラメーターの値は `local` に設定する必要があります。 |
| `generateTOC` | *\（AEM Site 出力の場合\）* 目次を生成するかどうかを\（true\）指定します\（false\）。 |
| `generateBreadcrumbs` | *\（AEM Site 出力の場合\）* パンくずリストを生成する\（true\）か\（false\）かを指定します。 |
| `overwriteStrategy` | *\（AEM Site 出力の場合\）* 出力先のファイルを\（true\）で上書きするかどうかを\（false\）で指定します。 |
| `pdfGenerator` | 使用するPDF生成エンジンを指定します。 使用可能な値は次のとおりです。<br>-   DITAOT <br>-   FMPS |

>[!NOTE]
>
> `DitaValPath` 要素はサポートされなくなりました。

## 出力プリセットの作成

DITA マップの新しい出力プリセットを作成するPOST方式。

**リクエスト URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/publishlistener

**パラメーター**:

| 名前 | 型 | 必須 | 説明 |
|----|----|--------|-----------|
| `:operation` | 文字列 | はい | 呼び出される操作の名前。 このパラメーターの値は ``createoutput`` です。<br> **メモ：** この値では、大文字と小文字が区別されません。 |
| `sourcePath` | 文字列 | はい | DITA マップファイルの絶対パス。 |
| `outputTitle` | 文字列 | はい | 出力プリセット設定のわかりやすい名前。 出力プリセットの「設定名」プロパティの値を定義する場合に使用します。<br> **メモ：** 新しい出力プリセットが作成されると、バックエンドシステムは指定されたタイトルから出力プリセットの一意の名前を駆動します。 |
| `outputType` | 文字列 | はい | このプリセットを使用して生成される出力のタイプ （AEM サイト、PDF、EPUB、その他）。 使用できるオプションは次のとおりです。<br>-   AEMSITE <br>-   PDF<br>-   HTML5 <br>-   EPUB<br>-   CUSTOM |

**応答値**:

| 要素 | 説明 |
|-------|-----------|
| `outputName` | 新しく作成した出力プリセットの一意の名前。 この名前は、`outputTitle` パラメーターの値から派生します。 |

## 出力プリセットを保存

出力プリセットに加えられた変更を保存するPOST方式。

**リクエスト URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/publishlistener

**パラメーター**:

| 名前 | 型 | 必須 | 説明 |
|----|----|--------|-----------|
| `:operation` | 文字列 | はい | 呼び出される操作の名前。 このパラメーターの値は ``saveoutput`` です。<br> **メモ：** この値では、大文字と小文字が区別されません。 |
| `sourcePath` | 文字列 | はい | DITA マップファイルの絶対パス。 |
| `outputObj` | 文字列 | はい | 更新される出力プリセットのプロパティを含む JSON オブジェクト。 `outputObj.outputName` プロパティには、更新する出力プリセットの名前が含まれています。 JSON オブジェクトの形式については、**DITA マップのすべての出力プリセットの取得 [&#x200B; の表** 応答値 &#x200B;](#get-output-presets-dita-map) を参照してください。 |

**応答値**:
HTTP 200 \（成功\）応答を返します。

## 特定の出力プリセットの取得

既存の出力プリセットを取得するPOSTメソッド。

**リクエスト URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/publishlistener

**パラメーター**:

| 名前 | 型 | 必須 | 説明 |
|----|----|--------|-----------|
| `:operation` | 文字列 | はい | 呼び出される操作の名前。 このパラメーターの値は `getoutput` です。 <br>**メモ：** この値では、大文字と小文字が区別されません。 |
| `sourcePath` | 文字列 | はい | DITA マップファイルの絶対パス。 |
| `outputName` | 文字列 | はい | 詳細を取得する必要がある出力プリセットの名前。 |

**応答値**:

| 要素 | 説明 |
|-------|-----------|
| `outputName` | 出力プリセットの名前 出力名は、定義されている DITA マップのスコープ内で一意です。 |
| `outputType` | このプリセットを使用して生成される出力のタイプ （AEM サイト、PDF、EPUB、その他）。 使用できるオプションは次のとおりです。<br>-   AEMSITE <br>-   PDF<br>-   HTML5 <br>-   EPUB<br>-   CUSTOM <br> |
| `outputTitle` | 出力プリセット設定のわかりやすい名前。 出力プリセットの「設定名」プロパティの値を定義するために使用します。 |
| `ditaValPathList` | 目的の出力を生成するために使用される DITAVAL ファイルパスの配列。 |
| `targetPath` | 出力が公開または保存されるパス。 |
| `siteName` | \（AEM サイト出力用\）AEM サイトの名前。 |
| `siteTitle` | \（AEM サイト出力用\）AEM サイトのタイトル。 |
| `templatePath` | \（AEM Site 出力の場合\）目的の出力を生成するために使用されるテンプレートノードのパス。 |
| `searchScope` | 検索操作の範囲を指定します。 このパラメーターの値は `local` に設定する必要があります。 |
| `generateTOC` | \（AEM Site 出力の場合\）目次を生成するかどうかを\（true\）指定します\（false\）。 |
| `generateBreadcrumbs` | \（AEM Site 出力の場合\） パンくずリストを生成するかどうかを\（true\）指定します\（false\）。 |
| `overwriteFiles` | \（AEM Site 出力の場合\）コピー先のファイルを\（true\）上書きするかどうかを\（false\）指定します。 |
| `pdfGenerator` | 使用するPDF生成エンジンを指定します。 使用可能な値は次のとおりです。<br>-   DITAOT <br>-   FMPS |

>[!NOTE]
>
> `DitaValPath` 要素はサポートされなくなりました。

## 出力を生成

1 つ以上の出力プリセットを使用して出力を生成するGET方式。

**リクエスト URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/publishlistener

**パラメーター**:

| 名前 | 型 | 必須 | 説明 |
|----|----|--------|-----------|
| `operation` | 文字列 | はい | 呼び出される操作の名前。 このパラメーターの値は `GENERATEOUTPUT` です。<br> **メモ：** この値では大文字と小文字が区別されます。 |
| `source` | 文字列 | はい | DITA マップファイルの絶対パス。 |
| `outputName` | 文字列 | はい | 出力の生成に使用する出力プリセットの名前。 複数の出力プリセットは、パイプ\（&quot;\|&quot;\）区切り文字（例：`aemsite|pdfoutput`）を使用して指定できます。 |

**応答値**:
HTTP 200 \（成功\）応答を返します。

## 増分出力を生成

1 つ以上の出力プリセットを使用してAEM Site の増分出力を生成するGET手法。

**リクエスト URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/publishlistener

**パラメーター**:

| 名前 | 型 | 必須 | 説明 |
|----|----|--------|-----------|
| `operation` | 文字列 | はい | 呼び出される操作の名前。 このパラメーターの値は `INCREMENTALPUBLISH` です。 <br>**メモ：** この値では大文字と小文字が区別されます。 |
| `contentPath` | JSON | はい | DITA マップファイルとトピックファイルの絶対パスと出力プリセットの名前。 構築ブロックとして次の例を使用します。 |

```XML
{
   {   
   "ditamap": 
      "/content/dam/sample/sample.ditamap",   
   "topics": [     
      "/content/dam/sample/topic1.xml",     
      "/content/dam/sample/topic2.xml"   
         ],   
   "fullMaps": [     
      "/content/dam/sample/submap.ditamap"   
      ],   
   "maps": [     
      "/content/dam/sample/keyspace.ditamap"   
      ],   
   "outputs": [     
      "aemsite"   
      ] 
   }
}
```

- `ditamap` 属性は、出力の生成に使用される DITA マップの絶対パスを取ります。
- `topics` 属性は、更新され、再公開する必要があるトピックの配列を取得します。
- `fullMaps` 属性には、増分出力の生成に必要なマップ ファイル \（チャンク サブマップなど）のパスと、そのトピックが含まれます。
- `maps` 属性には、ディスク上でトピックなしで抽出されたマップ ファイル \（キースペース参照の解決用\）のパスが含まれます。
- `outputs` 属性は、出力の生成に使用される出力プリセット名の配列を取ります。

**応答値**:
HTTP 200 \（成功\）応答を返します。

## 出力プリセットを削除

出力プリセットを削除するPOSTメソッド。

**リクエスト URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/publishlistener

**パラメーター**:

| 名前 | 型 | 必須 | 説明 |
|----|----|--------|-----------|
| `:operation` | 文字列 | はい | 呼び出される操作の名前。 このパラメーターの値は `deleteoutput` です。<br> **メモ：** この値では、大文字と小文字が区別されません。 |
| `sourcePath` | 文字列 | はい | DITA マップファイルの絶対パス。 |
| `outputName` | 文字列 | はい | 削除する出力プリセットの名前。 |

**応答値**:
HTTP 200 \（成功\）応答を返します。
