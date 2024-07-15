---
title: 変換ワークフロー用の Java ベースの API
description: 変換ワークフロー用の Java ベースの API について説明します
exl-id: 807d9ffa-23e3-476c-992d-c1f495233892
feature: Java-Based API Conversion Workflow
role: Developer
level: Experienced
source-git-commit: be06612d832785a91a3b2a89b84e0c2438ba30f2
workflow-type: tm+mt
source-wordcount: '259'
ht-degree: 0%

---

# 変換ワークフロー用の Java ベースの API {#id175UB30E05Z}

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
|名前|種類|説明|
|----|----|-----------|
|`session`|javax.jcr.Session|有効な JCR セッション。|
|`inputFile`|String|AEM リポジトリ内のソースHTMLファイルの絶対パス。|
|`destPath`|文字列|変換された DITA ファイルを保存する保存先の絶対パス。|
|`createRev`|ブール値|ファイルのリビジョンを指定された宛先に作成するかどうかを指定します\（`true`\）。\（`false`\） これは、変換後のファイルの既存のバージョンが変換先の場所に含まれている場合にのみ考慮されます。|

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
|名前|種類|説明|
|----|----|-----------|
|`session`|javax.jcr.Session|有効な JCR セッション。|
|`inputFile`|String|AEM リポジトリ内のソース Word ファイルの絶対パス。|
|`destPath`|文字列|変換された DITA ファイルを保存する保存先の絶対パス。|
|`style2tagMap`|String|変換に使用するスタイル マッピング ファイルの絶対パス。|
|`createRev`|ブール値|ファイルのリビジョンを指定された宛先に作成するかどうかを指定します\（`true`\）。\（`false`\） これは、変換後のファイルの既存のバージョンが変換先の場所に含まれている場合にのみ考慮されます。|

**例外**:
`RepositoryException` をスローします。
