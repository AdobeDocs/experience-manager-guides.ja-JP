---
title: 変換ワークフロー用の Java ベースの API
description: 変換ワークフロー用の Java ベースの API について説明します
exl-id: 807d9ffa-23e3-476c-992d-c1f495233892
feature: Java-Based API Conversion Workflow
role: Developer
level: Experienced
source-git-commit: 8c80a4da8e61909aab0f2db81ef97149774b36c4
workflow-type: tm+mt
source-wordcount: '300'
ht-degree: 5%

---

# 変換ワークフロー用の Java ベースの API {#id175UB30E05Z}

>[!NOTE]
>
> Experience Manager Guidesで使用可能な Java ベースの API を使用して、カスタムプラグインを作成し、標準のワークフローを拡張できます。 この記事は、2024 年 11 月にアーカイブされる予定です。
> Java ベースの API の使用に関する最新および詳細なドキュメントについては、[![javadoc](https://javadoc.io/badge2/com.adobe.aem/aem-guides-sdk-api/javadoc.svg)](https://javadoc.io/doc/com.adobe.aem/aem-guides-sdk-api) を参照してください。




次の Java ベースの API を使用すると、HTML文書と Word 文書を DITA 形式に変換できます。 これらの API は、バンドルの形式で使用できます。 これらの API を使用するには、コードにこのバンドルを含める必要があります。

**バンドルの詳細**:

- グループ ID:**com.adobe.fmdita**

- アーティファクト ID: **api**

- バージョン：**3.2**

- パッケージ：**com.adobe.fmdita.api.conversion**

- クラス詳細：

  ```JAVA
  public class ConversionUtils extends Object
  ```

  **ConversionUtils** クラスには、HTML文書と Word 文書を DITA 形式に変換するメソッドが含まれています。


## HTMLドキュメントを変換

`convertHtmlToDita` メソッドは、HTML文書を DITA フォーマットに変換します。

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
| `session` | javax.jcr.Session | 有効な JCR セッション。 |
| `inputFile` | 文字列 | AEM リポジトリ内のソースHTMLファイルの絶対パス。 |
| `destPath` | 文字列 | 変換された DITA ファイルが保存される保存先の絶対パス。 |
| `createRev` | ブール値 | ファイルのリビジョンを指定された宛先に作成する\（`true`\）かどうかを指定します\（`false`\）。 これは、変換先の場所に変換後のファイルの既存のバージョンが含まれている場合にのみ考慮されます。 |

**例外**:
`RepositoryException` をスローします。

## Word ドキュメントの変換

``convertWordToDita`` メソッドは、Word 文書を DITA 形式に変換します。

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
| `session` | javax.jcr.Session | 有効な JCR セッション。 |
| `inputFile` | 文字列 | AEM リポジトリ内のソース Word ファイルの絶対パス。 |
| `destPath` | 文字列 | 変換された DITA ファイルが保存される保存先の絶対パス。 |
| `style2tagMap` | 文字列 | 変換に使用されるスタイルマッピングファイルの絶対パス。 |
| `createRev` | ブール値 | ファイルのリビジョンを指定された宛先に作成する\（`true`\）かどうかを指定します\（`false`\）。 これは、変換先の場所に変換後のファイルの既存のバージョンが含まれている場合にのみ考慮されます。 |

**例外**:
`RepositoryException` をスローします。
