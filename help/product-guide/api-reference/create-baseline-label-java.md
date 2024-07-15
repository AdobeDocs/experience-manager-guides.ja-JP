---
title: ベースラインとラベルを操作するための Java ベースの API
description: ベースラインとラベルで動作する Java ベースの API について学ぶ
exl-id: 0e2ba1bb-f5bf-44da-848a-a55385460c83
feature: Java-Based API Baseline
role: Developer
level: Experienced
source-git-commit: be06612d832785a91a3b2a89b84e0c2438ba30f2
workflow-type: tm+mt
source-wordcount: '890'
ht-degree: 0%

---

# ベースラインとラベルを操作するための Java ベースの API {#id175UB30E05Z}

次の Java ベースの API を使用すると、ベースラインを作成し、ベースライン内のファイルにラベルを追加できます。 これらの API は、バンドルの形式で使用できます。 これらの API を使用するには、コードにこのバンドルを含める必要があります。

バンドルの詳細

- グループ ID:**com.adobe.fmdita**

- アーティファクト ID: **api**

- バージョン：**3.5**

- パッケージ：**com.adobe.fmdita.api.baselines**

- クラス詳細：

  ```JAVA
  public class BaselineUtils extends Object
  ```

  **BaselineUtils** クラスには、ベースラインを作成し、ベースライン内のファイルにラベルを適用するためのメソッドが含まれています。


## ベースラインの作成

ベースラインの作成メソッドには、XML Documentation ソリューションバージョン 3.5 用と、3.5 リリースより前のバージョン \（バージョン 3.4、3.3、および 3.2\を含む）用の 2 つのバージョンがあります。 バージョン 3.5 API では、マップ ファイル内のラベル、直接参照、間接参照を使用してベースラインを作成できます。

他のバージョンの API では日時を使用してベースラインを作成します。 この API は、XML Documentation ソリューション 3.4、3.3 または 3.2 を使用しているシステムとの下位互換性を保つために保持されています。

**構文\（バージョン 3.5\用）**:

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
|名前|種類|説明|
|----|----|-----------|
|`session`|javax.jcr.Session|有効な JCR セッション。 ユーザーセッションには、DITA マップに対する読み取りおよび書き込みパーミッションと、ベースラインに含まれるすべての参照ファイルに対する読み取りパーミッションの両方が必要です。|
|`sourcePath`|文字列|AEM リポジトリ内の DITA マップファイルの絶対パス。|
|`baselineTitle`|文字列|ベースラインの一意のタイトル。|
|`label`|文字列|指定したラベルが適用されているトピックのバージョンを選択します。|
|`directContext`|LinkedHashMap&lt;String, Object\>|直接参照されるトピック \（content\）が選択された設定に基づいて、バージョンを解決するためにマップに記載されている順序に従います。 <br> マップのすべてのキーを反復処理した後にバージョンが見つからない場合、ベースラインの作成プロセスは失敗します。 <br> HashMap が空の\（send empty and not null map for default\）の場合、デフォルトでは <br>`directContext.put("label", label);` <br> と入力されます `directContext.put("latest", true);` <br> ベースラインの作成で特定のラベルのバージョンのみを選択し、そのバージョンが存在しない場合に失敗する場合は、ベースラインを作成するラベルと `label` キーを入力します。|
|`indirectContext`|LinkedHashMap&lt;String, Object\>|間接的に参照されるトピック \（参照コンテンツ\）が選択された設定に基づいて、バージョンを解決するためにマップに記述されている順序に従います。 <br> マップのすべてのキーを反復処理した後にバージョンが見つからない場合、ベースラインの作成プロセスは失敗します。 <br> HashMap が空の\（send empty and not null map for default\）の場合、デフォルトでは、次のように入力されます。<br>`indirectContext.put("label", label);` <br>`indirectContext.put "pickAutomatically", null);` <br> バージョンを自動的に取得する代わりに最新バージョンにする場合は、<br>`indirectContext.put("pickAutomatically", null);` <br> を置換します。 _with:_ <br>`indirectContext.put("latest", true)`|

**戻り値**
ベースラインの名前（JCR リポジトリのベースラインのノード名）。 新しく作成されたベースラインのタイトルは、DITA マップの「ベースライン」ページでユーザーに表示されます。

**例外**:
同じタイトルのベースラインが既に存在する場合、``ItemExistExceptiom`` をスローします。

**構文\（バージョン 3.4、3.3、3.2 の場合）**

```JAVA
public static String createBaseline
(Session session, 
String sourcePath, 
String baselineTitle, 
Date versionDate) throws GuidesApiException
```

**パラメーター**:
|名前|種類|説明|
|----|----|-----------|
|`session`|javax.jcr.Session|有効な JCR セッション。 ユーザーセッションには、DITA マップに対する読み取りおよび書き込みパーミッションと、ベースラインに含まれるすべての参照ファイルに対する読み取りパーミッションの両方が必要です。|
|``sourcePath``|文字列|AEM リポジトリ内の DITA マップファイルの絶対パス。|
|`baselineTitle`|文字列|ベースラインの一意のタイトル。|
|`versionDate`|日付|ベースラインは、この日付と同じように、トピックのバージョン\（DITA マップから直接参照\）を使用して作成されます。 日付を `d-MM-yyyy H:mm` 形式で指定します。|

**戻り値**
ベースラインの名前（JCR リポジトリのベースラインのノード名）。 新しく作成されたベースラインのタイトルは、DITA マップの「ベースライン」ページでユーザーに表示されます。

**例外**:
``RepositoryException.`` をスロー

## ラベルの適用

``applyLabel`` メソッドは、ベースラインのファイルに 1 つまたは複数のラベルを適用します。

**構文**：

```JAVA
public static void applyLabel(Session session,
                  String sourcePath,
                  String baselineName,
                  String label)
                  throws RepositoryException, WorkflowException, Exception
```

**パラメーター**:
|名前|種類|説明|
|----|----|-----------|
|`session`|javax.jcr.Session|有効な JCR セッション。|
|`sourcePath`|文字列|AEM リポジトリ内の DITA マップファイルの絶対パス。|
|``baselineName``|文字列|ラベルを適用する必要があるベースライン ノードの名前。 ベースラインノードの名前を取得するには、[\#id185NFF0085Z](#id185NFF0085Z) メソッドを使用するか、CRXDE<br> で DITA マップのベースラインノードを確認します。 **メモ：** ラベルは、ベースラインのマップファイルから直接参照されるファイルのバージョンに適用されます。|
|`label`|文字列|ベースラインのファイルに適用されるラベル。 ラベルに次の文字が含まれていないことを確認します：&amp;sol; &amp;comma; &amp;colon; &amp;comma; &amp;lbrack; &amp;comma; rbrack; &amp;comma; &amp;vert; &amp;comma;ast; <br> 複数のラベルを設定する場合は、ラベルをコンマで区切ります（例：Label1, Label2）。

**例外**:
`RepositoryException` をスローします。

## ラベルを削除

``deleteLabel`` メソッドは、ベースラインのファイルから 1 つまたは複数のラベルを削除します。

**構文**：

```JAVA
public static Map
<String, String> deleteLabel(Session session, 
String sourcePath, 
String baselineName, 
String label) throws GuidesApiException
```

**パラメーター**:
|名前|種類|説明|
|----|----|-----------|
|`session`|javax.jcr.Session|有効な JCR セッション。|
|`sourcePath`|文字列|AEM リポジトリ内の DITA マップファイルの絶対パス。|
|`baselineName`|文字列|ラベルを削除する必要があるベースラインの名前。<br> **メモ：** ラベルは、ベースラインのマップファイルから直接参照されるファイルのバージョンから削除されます。|
|`label`|文字列|ベースライン内のファイルから削除するラベル。 <br> 複数のラベルを削除する場合は、コンマでラベルを区切ります。例：Label1, Label2。|

**戻り値**
ベースライン内のすべてのファイルの `path:deletedlabels` の *key:value* ペアを持つマップ。

**例外**:
``RepositoryException`, `VersionException`, `Exception`` をスローします。
