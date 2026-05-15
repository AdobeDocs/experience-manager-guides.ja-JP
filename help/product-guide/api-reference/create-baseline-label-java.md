---
title: ベースラインとラベルを操作するJava ベースのAPI
description: ベースラインとラベルを操作するJava ベースのAPIについて説明します
exl-id: 0e2ba1bb-f5bf-44da-848a-a55385460c83
feature: Java-Based API Baseline
role: Developer
level: Experienced
TQID: https://experienceleague.adobe.com/3vpR2zCp5a6dBn6RkSKgBeU7cS3Me-HE0KQxc-duYCk
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a01bfd36-4ab8-4bf8-9dc0-5b45b890552eid: c6d09140-3c91-45d3-b7ed-b681af752f43id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
role_v2: id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 944
ht-degree: 2%

---

# ベースラインとラベルを操作するJava ベースのAPI {#id175UB30E05Z}

>[!NOTE]
>
> Experience Manager Guidesで利用可能なJava ベースのAPIを使用して、カスタムプラグインを作成し、すぐに利用できるワークフローを拡張できます。 この記事は2024年11月にアーカイブされます。
> Java ベースのAPIの使用に関する最新かつ詳細なドキュメントについては、[![javadoc](https://javadoc.io/badge2/com.adobe.aem/aem-guides-sdk-api/javadoc.svg)](https://javadoc.io/doc/com.adobe.aem/aem-guides-sdk-api)を参照してください。


次のJava ベースのAPIを使用すると、ベースラインを作成し、ベースライン内のファイルにラベルを追加できます。 これらのAPIは、バンドルの形式で使用できます。 これらのAPIを使用するには、このバンドルをコードに含める必要があります。

バンドルの詳細：

- グループ ID: **com.adobe.fmdita**

- アーティファクト ID: **api**

- バージョン：**3.5**

- パッケージ：**com.adobe.fmdita.api.baselines**

- クラスの詳細：

  ```JAVA
  public class BaselineUtils extends Object
  ```

  **BaselineUtils** クラスには、ベースラインを作成し、ベースライン内のファイルにラベルを適用するためのメソッドが含まれています。


## ベースラインの作成

create baseline メソッドには、XML Documentation ソリューションバージョン 3.5用と、3.5より前のリリース \（バージョン 3.4、3.3および3.2\）用の2つのバージョンがあります。 バージョン 3.5 APIでは、マップファイル内のラベル、直接参照、間接参照を使用してベースラインを作成できます。

別のバージョンのAPIでは、日時を使用してベースラインを作成します。 このAPIは、XML Documentation ソリューション 3.4、3.3、または3.2を使用するシステムとの下位互換性のために保持されます。

**構文\（バージョン 3.5\）**:

```JAVA
public static String createBaseline(Session session, 
String sourcePath, 
String baselineTitle, 
String label, 
LinkedHashMap directContext, 
LinkedHashMap indirectContext) 
throws GuidesApiException
```

**パラメーター**:

| 名前 | 種類 | 説明 |
|----|----|-----------|
| `session` | javax.jcr.Session | 有効なJCR セッション。 ユーザーセッションには、DITA マップの読み取りと書き込みの両方の権限と、ベースラインに含まれるすべての参照ファイルの読み取り権限の両方が必要です。 |
| `sourcePath` | 文字列 | AEM リポジトリのDITA マップファイルの絶対パス。 |
| `baselineTitle` | 文字列 | ベースラインの一意のタイトル。 |
| `label` | 文字列 | 特定のラベルが適用されているトピックのバージョンを選択します。 |
| `directContext` | LinkedHashMap&lt;String, Object\> | 直接参照されたトピック \（content\）に基づく設定が選択され、マップに記載されている順序に従ってバージョンを解決します。<br> マップのすべてのキーを反復後にバージョンが見つからない場合、ベースライン作成プロセスは失敗します。<br> HashMapが空の場合\（デフォルトでは空でnullでないマップを送信\）、デフォルトでは<br>`directContext.put("label", label);` <br>と入力されます `directContext.put("latest", true);` <br> ベースライン作成で、特定のラベルのバージョンのみを選択し、そのようなバージョンが存在しない場合に失敗する場合は、`label` キーと、ベースラインを作成するラベルを入力します。 |
| `indirectContext` | LinkedHashMap&lt;String, Object\> | 間接的に参照されるトピック \（参照コンテンツ\）に基づく設定が選択され、マップに記載されている順序に従ってバージョンを解決します。<br> マップのすべてのキーを反復後にバージョンが見つからない場合、ベースライン作成プロセスは失敗します。<br> HashMapが空の場合\（空でデフォルトの\）、デフォルトでは次のように入力されます：<br>`indirectContext.put("label", label);` <br>`indirectContext.put "pickAutomatically", null);` <br> バージョンを自動的に取得する代わりに最新バージョンにしたい場合は、<br>`indirectContext.put("pickAutomatically", null);` <br> :_<br>`indirectContext.put("latest", true)`に置き換えます。 |

**返品**:
ベースラインの名前。JCR リポジトリ内のベースラインのノード名です。 新しく作成されたベースラインのタイトルは、DITA マップのベースラインページにユーザーに表示されます。

**例外**:
同じタイトルのベースラインが既に存在する場合、``ItemExistExceptiom``をスローします。

**構文\（バージョン 3.4、3.3、および3.2\）**

```JAVA
public static String createBaseline
(Session session, 
String sourcePath, 
String baselineTitle, 
Date versionDate) throws GuidesApiException
```

**パラメーター**:

| 名前 | 種類 | 説明 |
|----|----|-----------|
| `session` | javax.jcr.Session | 有効なJCR セッション。 ユーザーセッションには、DITA マップの読み取りと書き込みの両方の権限と、ベースラインに含まれるすべての参照ファイルの読み取り権限の両方が必要です。 |
| ``sourcePath`` | 文字列 | AEM リポジトリのDITA マップファイルの絶対パス。 |
| `baselineTitle` | 文字列 | ベースラインの一意のタイトル。 |
| `versionDate` | 日付 | ベースラインは、この日付のトピック\（DITA マップから直接参照）のバージョンを使用して作成されます。 日付を`d-MM-yyyy H:mm`形式で指定してください。 |

**返品**:
ベースラインの名前。JCR リポジトリ内のベースラインのノード名です。 新しく作成されたベースラインのタイトルは、DITA マップのベースラインページにユーザーに表示されます。

**例外**:
``RepositoryException.``をスロー

## ラベルの適用

``applyLabel`` メソッドは、ベースライン内のファイルに1つまたは複数のラベルを適用します。

**構文**：

```JAVA
public static void applyLabel(Session session,
                  String sourcePath,
                  String baselineName,
                  String label)
                  throws RepositoryException, WorkflowException, Exception
```

**パラメーター**:

| 名前 | 種類 | 説明 |
|----|----|-----------|
| `session` | javax.jcr.Session | 有効なJCR セッション。 |
| `sourcePath` | 文字列 | AEM リポジトリのDITA マップファイルの絶対パス。 |
| ``baselineName`` | 文字列 | ラベルを適用するベースラインノードの名前。 ベースラインノードの名前を取得するには、[\#id185NFF0085Z](#id185NFF0085Z) メソッドを使用するか、CRXDEでDITA マップのベースラインノードを確認します。<br> **注意：** ラベルは、ベースラインのマップファイルから直接参照されるファイルのバージョンに適用されます。 |
| `label` | 文字列 | ベースライン内のファイルに適用されるラベル。 ラベルに次の文字が含まれていないことを確認します。&amp;sol; &amp;comma; &amp;colon; &amp;comma; &amp;lbrack; &amp;comma; &amp;vert; &amp;comma; &amp;ast; <br>複数のラベルを設定する場合は、Label1、Label2などのコンマでラベルを区切ります。 |

**例外**:
`RepositoryException`をスローします。

## ラベルの削除

``deleteLabel`` メソッドは、ベースライン内のファイルから1つまたは複数のラベルを削除します。

**構文**：

```JAVA
public static Map
<String, String> deleteLabel(Session session, 
String sourcePath, 
String baselineName, 
String label) throws GuidesApiException
```

**パラメーター**:

| 名前 | 種類 | 説明 |
|----|----|-----------|
| `session` | javax.jcr.Session | 有効なJCR セッション。 |
| `sourcePath` | 文字列 | AEM リポジトリのDITA マップファイルの絶対パス。 |
| `baselineName` | 文字列 | ラベルを削除するベースラインの名前。<br> **注意：** ラベルは、ベースラインのマップファイルから直接参照されているファイルのバージョンから削除されます。 |
| `label` | 文字列 | ベースラインのファイルから削除するラベル。<br> 複数のラベルを削除する場合は、ラベルをコンマ（Label1、Label2など）で区切ります。 |

**返品**:
ベースライン内のすべてのファイルに対する`path:deletedlabels`の&#x200B;*key:value* ペアを含むマップ。

**例外**:
``RepositoryException`, `VersionException`, `Exception``をスローします。
