---
title: コンバージョンワークフロー用のJava ベースのAPI
description: コンバージョンワークフロー用のJava ベース APIについて説明します
exl-id: 807d9ffa-23e3-476c-992d-c1f495233892
feature: Java-Based API Conversion Workflow
role: Developer
level: Experienced
TQID: 'https://experienceleague.adobe.com/gAntb7T-OGlwRNInxAsV8orxL3H9qL19Dsjwf5FZ14I'
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
  - id: c2674c69-1bed-41fa-ba40-ab1a5382af59
    internal-label: Java Based API Conversion Workflow
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '326'
ht-degree: 4%
---
# コンバージョンワークフロー用のJava ベースのAPI {#id175UB30E05Z}

>[!NOTE]
>
> Experience Manager Guidesで利用可能なJava ベースのAPIを使用して、カスタムプラグインを作成し、すぐに利用できるワークフローを拡張できます。 この記事は2024年11月にアーカイブされます。
> Java ベースのAPIの使用に関する最新かつ詳細なドキュメントについては、[![javadoc](https://javadoc.io/badge2/com.adobe.aem/aem-guides-sdk-api/javadoc.svg)](https://javadoc.io/doc/com.adobe.aem/aem-guides-sdk-api)を参照してください。




次のJava ベースのAPIを使用すると、HTML文書とWord文書をDITA形式に変換できます。 これらのAPIは、バンドルの形式で使用できます。 これらのAPIを使用するには、このバンドルをコードに含める必要があります。

**バンドルの詳細**:

- グループ ID: **com.adobe.fmdita**

- アーティファクト ID: **api**

- バージョン：**3.2**

- パッケージ：**com.adobe.fmdita.api.conversion**

- クラスの詳細：

  ```JAVA
  public class ConversionUtils extends Object
  ```

  **ConversionUtils** クラスには、HTMLおよびWord ドキュメントをDITA形式に変換するメソッドが含まれています。


## HTML ドキュメントの変換

`convertHtmlToDita` メソッドは、HTML ドキュメントをDITA フォーマットに変換します。

**構文**：

```JAVA
public static void convertHtmlToDita(Session session, 
                  String inputFile, 
                  String destPath, 
                  boolean createRev) 
                  throws RepositoryException, WorkflowException
```

**パラメーター**:

| 名前 | 種類 | 説明 |
|----|----|-----------|
| `session` | javax.jcr.Session | 有効なJCR セッション。 |
| `inputFile` | 文字列 | AEM リポジトリ内のソース HTML ファイルの絶対パス。 |
| `destPath` | 文字列 | 変換されたDITA ファイルが保存される保存先の絶対パス。 |
| `createRev` | ブーリアン | ファイルのリビジョンが指定された宛先に\（`true`\）作成されるかどうかを指定します\（`false`\）。 これは、変換先の場所に既存のバージョンの変換済みファイルが含まれている場合にのみ考慮されます。 |

**例外**:
`RepositoryException`をスローします。

## Word文書の変換

``convertWordToDita`` メソッドは、Word文書をDITA形式に変換します。

**構文**：

```JAVA
public static void convertWordToDita(Session session, 
                  String inputFile,
                  String destPath, 
                  String style2tagMap, 
                  boolean createRev) 
                  throws RepositoryException, WorkflowException
```

**パラメーター**:

| 名前 | 種類 | 説明 |
|----|----|-----------|
| `session` | javax.jcr.Session | 有効なJCR セッション。 |
| `inputFile` | 文字列 | AEM リポジトリ内のソース Word ファイルの絶対パス。 |
| `destPath` | 文字列 | 変換されたDITA ファイルが保存される保存先の絶対パス。 |
| `style2tagMap` | 文字列 | 変換に使用されるスタイルマッピングファイルの絶対パス。 |
| `createRev` | ブーリアン | ファイルのリビジョンが指定された宛先に\（`true`\）作成されるかどうかを指定します\（`false`\）。 これは、変換先の場所に既存のバージョンの変換済みファイルが含まれている場合にのみ考慮されます。 |

**例外**:
`RepositoryException`をスローします。
