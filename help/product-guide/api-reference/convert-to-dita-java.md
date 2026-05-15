---
title: コンバージョンワークフロー用のJava ベースのAPI
description: コンバージョンワークフロー用のJava ベース APIについて説明します
exl-id: 807d9ffa-23e3-476c-992d-c1f495233892
feature: Java-Based API Conversion Workflow
role: Developer
level: Experienced
TQID: https://experienceleague.adobe.com/gAntb7T-OGlwRNInxAsV8orxL3H9qL19Dsjwf5FZ14I
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a01bfd36-4ab8-4bf8-9dc0-5b45b890552eid: c6d09140-3c91-45d3-b7ed-b681af752f43
role_v2: id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 324
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
