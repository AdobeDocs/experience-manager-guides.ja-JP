---
title: 出力管理用REST API
description: 出力管理用REST APIについて説明します
exl-id: dab654f5-555d-4a89-bc94-55b1e938f255
feature: Rest API Output Management
role: Developer
level: Experienced
TQID: https://experienceleague.adobe.com/7vLVD99129fILw0haQUZFlUn5y7pqMcTxakT6OeW3Uo
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a01bfd36-4ab8-4bf8-9dc0-5b45b890552e
  - id: c6d09140-3c91-45d3-b7ed-b681af752f43
subfeature_v2:
  - id: ac94cb1b-ba77-439b-aa1f-2d8a6bec3dc3
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 1204
ht-degree: 6%

---

# 出力管理用REST API {#id175UB30E05Z}

AEM Guidesの出力を管理するには、次のREST APIを使用できます。

## DITA マップのすべての出力プリセットを取得する {#get-output-presets-dita-map}

DITA マップ用に設定されたすべての出力プリセットを取得するPOST メソッド。

**要求URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/publishlistener

**パラメーター**:

| 名前 | 種類 | 必須 | 説明 |
|----|----|--------|-----------|
| `:operation` | 文字列 | はい | 呼び出される操作の名前。 このパラメーターの値は`getalloutputs`です。<br> **注意：**&#x200B;値では大文字と小文字が区別されません。 |
| `sourcePath` | 文字列 | はい | DITA マップファイルの絶対パス。 |

**応答値**:
次の要素を含むJSON Output Preset オブジェクトの配列を返します。

| 要素 | 説明 |
|-------|-----------|
| `outputName` | 出力プリセットの名前。 出力名は、定義済みのDITA マップの範囲で一意です。 |
| `outputType` | このプリセットを使用して生成される出力の種類（AEM サイト、PDF、EPUBなど）。 使用可能なオプションは次のとおりです。<br>- AEMSITE <br>- PDF <br>- HTML5 <br>- EPUB <br>- カスタム |
| `outputTitle` | 出力プリセット設定のわかりやすい名前。 これは、出力プリセットの「設定名」プロパティの値を定義するために使用します。 |
| `ditaValPathList` | 目的の出力を生成するために使用するDITAVAL ファイルパスの配列。 |
| `targetPath` | 出力が公開または保存されるパス。 |
| `siteName` | *\（AEM サイトの出力\）* AEM サイトの名前。 |
| `templatePath` | *\（For AEM Site output\）* テンプレートノードのパスを使用して、目的の出力を生成します。 |
| `searchScope` | 検索操作の範囲を指定します。 このパラメーターの値は`local`に設定する必要があります。 |
| `generateTOC` | *\（For AEM Site output\）*&#x200B;目次が生成されるかどうかを指定します\（true\） or not \（false\）。 |
| `generateBreadcrumbs` | *\（For AEM Site output\）* パンくずリストが\（true\）生成されるかどうかを指定します\（false\）。 |
| `overwriteStrategy` | *\（For AEM Site output\）*&#x200B;出力先のファイルが\（true\）上書きされるかどうかを指定します\（false\）。 |
| `pdfGenerator` | 使用するPDF生成エンジンを指定します。 指定可能な値：<br>- DITAOT <br>- FMPS |

>[!NOTE]
>
> `DitaValPath`要素はサポートされなくなりました。

## 出力プリセットの作成

DITA マップ用に新しい出力プリセットを作成するPOST メソッド。

**要求URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/publishlistener

**パラメーター**:

| 名前 | 種類 | 必須 | 説明 |
|----|----|--------|-----------|
| `:operation` | 文字列 | はい | 呼び出される操作の名前。 このパラメーターの値は``createoutput``です。<br> **注意：**&#x200B;値では大文字と小文字が区別されません。 |
| `sourcePath` | 文字列 | はい | DITA マップファイルの絶対パス。 |
| `outputTitle` | 文字列 | はい | 出力プリセット設定のわかりやすい名前。 これは、出力プリセットの設定名プロパティの値を定義するために使用されます。<br> **メモ：**&#x200B;新しい出力プリセットが作成されると、バックエンドシステムは、指定されたタイトルから出力プリセットの一意の名前を駆動します。 |
| `outputType` | 文字列 | はい | このプリセットを使用して生成される出力の種類（AEM サイト、PDF、EPUBなど）。 使用可能なオプションは次のとおりです。<br>- AEMSITE <br>- PDF <br>- HTML5 <br>- EPUB <br>- カスタム |

**応答値**:

| 要素 | 説明 |
|-------|-----------|
| `outputName` | 新しく作成した出力プリセットの一意の名前。 この名前は、`outputTitle` パラメーターの値から派生しています。 |

## 出力プリセットを保存

出力プリセットで行われた変更を保存するPOST メソッド。

**要求URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/publishlistener

**パラメーター**:

| 名前 | 種類 | 必須 | 説明 |
|----|----|--------|-----------|
| `:operation` | 文字列 | はい | 呼び出される操作の名前。 このパラメーターの値は``saveoutput``です。<br> **注意：**&#x200B;値では大文字と小文字が区別されません。 |
| `sourcePath` | 文字列 | はい | DITA マップファイルの絶対パス。 |
| `outputObj` | 文字列 | はい | 更新中の出力プリセットのプロパティを含むJSON オブジェクト。 `outputObj.outputName` プロパティには、更新する出力プリセットの名前が含まれています。 JSON オブジェクトの形式については、[DITA マップのすべての出力プリセットを取得](#get-output-presets-dita-map)の&#x200B;**応答値** テーブルを参照してください。 |

**応答値**:
HTTP 200 \（Successful\）応答を返します。

## 特定の出力プリセットの取得

既存の出力プリセットを取得するPOST メソッド。

**要求URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/publishlistener

**パラメーター**:

| 名前 | 種類 | 必須 | 説明 |
|----|----|--------|-----------|
| `:operation` | 文字列 | はい | 呼び出される操作の名前。 このパラメーターの値は`getoutput`です。 <br>**注意：**&#x200B;値では大文字と小文字が区別されません。 |
| `sourcePath` | 文字列 | はい | DITA マップファイルの絶対パス。 |
| `outputName` | 文字列 | はい | 詳細を取得する必要がある出力プリセットの名前。 |

**応答値**:

| 要素 | 説明 |
|-------|-----------|
| `outputName` | 出力プリセットの名前。 出力名は、定義済みのDITA マップの範囲で一意です。 |
| `outputType` | このプリセットを使用して生成される出力の種類（AEM サイト、PDF、EPUBなど）。 使用可能なオプションは、<br>- AEMSITE <br>- PDF <br>- HTML5 <br>- EPUB <br>- カスタム <br>です |
| `outputTitle` | 出力プリセット設定のわかりやすい名前。 これは、出力プリセットの「設定名」プロパティの値を定義するために使用します。 |
| `ditaValPathList` | 目的の出力を生成するために使用するDITAVAL ファイルパスの配列。 |
| `targetPath` | 出力が公開または保存されるパス。 |
| `siteName` | \（AEM サイト出力\）AEM サイトの名前。 |
| `siteTitle` | \（AEM サイト出力の場合\） AEM サイトのタイトル。 |
| `templatePath` | \（For AEM Site output\）目的の出力を生成するために使用するテンプレートノードのパス。 |
| `searchScope` | 検索操作の範囲を指定します。 このパラメーターの値は`local`に設定する必要があります。 |
| `generateTOC` | \（AEM サイト出力\）目次が生成されるかどうかを指定します\（true\）。\（false\） |
| `generateBreadcrumbs` | \（AEM サイト出力\）パンくずリストを生成するかどうかを指定します\（true\）。 |
| `overwriteFiles` | \（AEM サイト出力\）出力先のファイルが\（true\）上書きされるかどうかを指定します\（false\）。 |
| `pdfGenerator` | 使用するPDF生成エンジンを指定します。 指定可能な値：<br>- DITAOT <br>- FMPS |

>[!NOTE]
>
> `DitaValPath`要素はサポートされなくなりました。

## 出力を生成

1つ以上の出力プリセットを使用して出力を生成するGET メソッド。

**要求URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/publishlistener

**パラメーター**:

| 名前 | 種類 | 必須 | 説明 |
|----|----|--------|-----------|
| `operation` | 文字列 | はい | 呼び出される操作の名前。 このパラメーターの値は`GENERATEOUTPUT`です。<br> **注意：**&#x200B;値では大文字と小文字が区別されます。 |
| `source` | 文字列 | はい | DITA マップファイルの絶対パス。 |
| `outputName` | 文字列 | はい | 出力の生成に使用する出力プリセットの名前。 パイプ \（&quot;\|&quot;\）区切り文字（例：`aemsite\|pdfoutput`）を使用して、複数の出力プリセットを指定できます。 |

**応答値**:
HTTP 200 \（Successful\）応答を返します。

## 増分出力の生成

1つ以上の出力プリセットを使用して、AEM サイトの増分出力を生成するGET メソッド。

**要求URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/publishlistener

**パラメーター**:

| 名前 | 種類 | 必須 | 説明 |
|----|----|--------|-----------|
| `operation` | 文字列 | はい | 呼び出される操作の名前。 このパラメーターの値は`INCREMENTALPUBLISH`です。 <br>**注意：**&#x200B;値では大文字と小文字が区別されます。 |
| `contentPath` | JSON | はい | DITA マップファイルとトピックファイルの絶対パスと、出力プリセットの名前。 次の例を構成要素として使用します。 |

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

- `ditamap`属性は、出力の生成に使用されるDITA マップの絶対パスを取得します。
- `topics`属性には、更新され、再公開する必要があるトピックの配列が含まれます。
- `fullMaps`属性には、増分出力生成のトピックと共に必要なマップファイル \（チャンク化されたサブマップなど）のパスが含まれています。
- `maps`属性には、トピックなしでディスク上で抽出されたマップファイル \（キースペース参照を解決するための\）のパスが含まれています。
- `outputs`属性には、出力の生成に使用される出力プリセット名の配列が含まれます。

**応答値**:
HTTP 200 \（Successful\）応答を返します。

## 出力プリセットの削除

出力プリセットを削除するPOST メソッド。

**要求URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/publishlistener

**パラメーター**:

| 名前 | 種類 | 必須 | 説明 |
|----|----|--------|-----------|
| `:operation` | 文字列 | はい | 呼び出される操作の名前。 このパラメーターの値は`deleteoutput`です。<br> **注意：**&#x200B;値では大文字と小文字が区別されません。 |
| `sourcePath` | 文字列 | はい | DITA マップファイルの絶対パス。 |
| `outputName` | 文字列 | はい | 削除する出力プリセットの名前。 |

**応答値**:
HTTP 200 \（Successful\）応答を返します。
