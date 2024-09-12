---
title: DITA マップを操作する Java ベースの API
description: DITA マップで使用する Java ベースの API について説明します
exl-id: bd91fc90-75f8-487c-99d1-2637e9cf9924
feature: Java-Based API Dita Map
role: Developer
level: Experienced
source-git-commit: 8c80a4da8e61909aab0f2db81ef97149774b36c4
workflow-type: tm+mt
source-wordcount: '1068'
ht-degree: 3%

---

# DITA マップを操作する Java ベースの API {#id175UB30E05Z}

>[!NOTE]
>
> Experience Manager Guidesで使用可能な Java ベースの API を使用して、カスタムプラグインを作成し、標準のワークフローを拡張できます。 この記事は、2024 年 11 月にアーカイブされる予定です。
> Java ベースの API の使用に関する最新および詳細なドキュメントについては、[![javadoc](https://javadoc.io/badge2/com.adobe.aem/aem-guides-sdk-api/javadoc.svg)](https://javadoc.io/doc/com.adobe.aem/aem-guides-sdk-api) を参照してください。



次の Java ベースの API を使用すると、AEM Guidesで DITA マップを操作できます。 これらの API は、バンドルの形式で使用できます。 これらの API を使用するには、コードにこのバンドルを含める必要があります。

バンドルの詳細

- グループ ID:**com.adobe.fmdita**

- アーティファクト ID: **api**

- バージョン：**3.2**

- パッケージ：**com.adobe.fmdita.api.maps**

- クラス詳細：

  ```JAVA
  public class MapUtilities extends Object
  ```

  MapUtilities クラスには、DITA マップファイルからメタデータ情報を取得するメソッドが含まれています。


## 依存を含む DITA マップのダウンロード

`zipMapWithDependents` メソッドは、参照トピック、サブマップ、イメージ、DTD などのすべての依存と共に DITA マップを含む.zip ファイルを作成します。 DITA マップの.zip ファイルは、指定のベースラインに基づいて作成されます。

また、同じ構造\（親および子フォルダー\）を維持するか、すべての依存ファイル用の 1 つのフォルダー内にフラットファイル構造を作成することもできます。

>[!IMPORTANT]
>
> 依存ファイルがない場合、API は例外をスローし、.zip ファイルの作成に失敗します。

**構文**：

```JAVA
public static void zipMapWithDependents(Session session, 
                     String sourcePath, 
                     String baseline, 
                     OutputStream outputStream,
                     boolean flatFS) 
                     throws RepositoryException, IOException
```

**パラメーター**:

| 名前 | 種類 | 説明 |
|----|----|-----------|
| `session` | javax.jcr.Session | 有効な JCR セッション。 |
| `sourcePath` | 文字列 | ダウンロードが必要な DITA マップファイルのパス \（AEM リポジトリ内） |
| `outputStream` | java.io.OutputStream | ZIP を書き込むストリーム。 |
| `baseline` | 文字列 | バージョン管理されたコンテンツを取得するために使用されるベースラインのタイトル。<br> **メモ：** この値では大文字と小文字が区別されます。 |
| flatFS | ブール値 | \（オプション\） true に設定すると、ファイルのフラット構造が ZIP ファイルで返されます。 たとえば、DITA マップが複数のフォルダ内のコンテンツを参照する場合、参照されるすべてのファイルが 1 つのフォルダに取り込まれます。 同じ名前のファイルが存在する場合は、数字のサフィックスを追加して名前を変更します。 すべての参照\（in DITA map and topics\）は、フラットフォルダ構造内のファイルの新しい場所に基づいて更新されるため、自動的に処理されます。 false に設定した場合、フォルダー構造は ZIP ファイルにそのまま保持されます。 DITA マップが複数の場所からファイルを参照する場合、これらすべての場所も ZIP ファイルに作成されます。 ZIP ファイルを復元すると、正確なフォルダー構造が復元先の場所に作成されます。 <br> このパラメーターのデフォルト値は false です。 |

**戻り値**
ZIP の内容は `outputStream` に書き込まれます。

**例外**:
``javax.jcr.RepositoryException``、`java.io.IOException` をスローします。

## 依存を持つ DITA マップをダウンロードします\（非同期\）

または、依存を含む DITA マップを非同期モードでダウンロードできます。 この方法は、大きな DITA マップの場合により便利です。

`zipMapWithDependents` メソッドは、参照トピック、サブマップ、イメージ、DTD などのすべての依存と共に DITA マップを含む.zip ファイルを作成します。 DITA マップの.zip ファイルは、指定のベースラインに基づいて作成されます。

また、同じ構造\（親および子フォルダー\）を維持するか、すべての依存ファイル用の 1 つのフォルダー内にフラットファイル構造を作成することもできます。

>[!NOTE]
>
> このノードは、output.history.purgetime 設定（定義されている場合）、またはデフォルトの 5 日間に基づいて、しばらくすると自動的に削除されます。

**構文**：

```JAVA
public static CompletableFuture<Node> zipMapWithDependencies(Session session,
                     String sourcePath, 
                     String baseline, 
                     boolean flatFS) 
```

**パラメーター**:

| 名前 | 種類 | 説明 |
|----|----|-----------|
| `session` | javax.jcr.Session | 有効な JCR セッション。 |
| `sourcePath` | 文字列 | ダウンロードが必要な DITA マップファイルのパス \（AEM リポジトリ内） |
| `baseline` | 文字列 | バージョン管理されたコンテンツを取得するために使用されるベースラインのタイトル。<br> **メモ：** この値では大文字と小文字が区別されます。 |
| flatFS | ブール値 | \（オプション\） true に設定すると、ファイルのフラット構造が ZIP ファイルで返されます。 たとえば、DITA マップが複数のフォルダ内のコンテンツを参照する場合、参照されるすべてのファイルが 1 つのフォルダに取り込まれます。 同じ名前のファイルが存在する場合は、数字のサフィックスを追加して名前を変更します。 すべての参照\（in DITA map and topics\）は、フラットフォルダ構造内のファイルの新しい場所に基づいて更新されるため、自動的に処理されます。 false に設定した場合、フォルダー構造は ZIP ファイルにそのまま保持されます。 DITA マップが複数の場所からファイルを参照する場合、これらすべての場所も ZIP ファイルに作成されます。 ZIP ファイルを復元すると、正確なフォルダー構造が復元先の場所に作成されます。<br> このパラメーターのデフォルト値は false です。 |

**戻り値**
zip ファイルのノードは `CompletableFuture` クラスにラップされます。 ユーザーは引き続き非同期処理を実行でき、ノードが必要なときに `.get()`method of future を使用してスレッドをブロックできます。 返される値はエラーで終わることもあり、`.exceptionally()` のメソッドで処理できます。

## ベースラインのリストの取得

``getBaselineList`` メソッドは、特定の DITA マップに存在するすべてのベースラインのリストを取得します。

**構文**：

```JAVA
public static List<HashMap<String,String>> getBaselineList( 
                  javax.jcr.Session session, 
                  String sourcePath)
                  throws javax.jcr.RepositoryException
```

**パラメーター**:

| 名前 | 種類 | 説明 |
|----|----|-----------|
| `session` | javax.jcr.Session | 有効な JCR セッション。 |
| `sourcePath` | 文字列 | ベースライン情報を取得する DITA マップファイルのパス \（AEM リポジトリ内）。 |

**戻り値**
`HashMap` オブジェクトのリスト。 各 `HashMap` オブジェクトは、ベースラインを表し、ベースラインの名前とタイトルが含まれます。

**例外**:
``javax.jcr.RepositoryException`` をスローします。

## 条件付きプリセットのリストの取得

``getConditionalPresetList`` メソッドは、特定の DITA マップに存在するすべての条件付きプリセットのリストを取得します。

**構文**：

```JAVA
public static List<HashMap<String,String>> getConditionalPresetList (
                  javax.jcr.Session session,
                  String sourcePath)
                  throws javax.jcr.RepositoryException
```

**パラメーター**:

| 名前 | 種類 | 説明 |
|----|----|-----------|
| `session` | javax.jcr.Session | 有効な JCR セッション。 |
| `sourcePath` | 文字列 | 条件付きプリセット情報を取得する DITA マップファイルのパス \（AEM リポジトリ内） |

**戻り値**
`HashMap` オブジェクトのリスト。 各 `HashMap` オブジェクトは、条件付きプリセットを表し、条件付きプリセットの名前とタイトルが含まれています。

**例外**:
``javax.jcr.RepositoryException`` をスローします。

## 条件付きプリセットの DITAVAL ファイル情報の取得

``getDitavalFromConditionalPreset`` メソッドは、特定の DITA マップの条件付きプリセットに対応する DITAVAL ファイルのパスを取得します。

**構文**：

```JAVA
public static String getDitavalFromConditionalPreset
    (Session session,
    String sourcePath, 
    String cpName) throws RepositoryException
```

**パラメーター**:

| 名前 | 種類 | 説明 |
|----|----|-----------|
| `session` | javax.jcr.Session | 有効な JCR セッション。 |
| `sourcePath` | 文字列 | DITAVAL ファイルを取得する DITA マップファイルのパス \（AEM リポジトリ内） |
| `cpName` | 文字列 | DITAVAL ファイルを取得する DITA マップ内の条件付きプリセットの名前。 |

**戻り値**
DITA マップファイルで定義された条件付きプリセットに対応する DITAVAL ファイルのパス。

## ノードのすべての依存関係の取得

``getAllDependencies`` メソッドは、指定されたノードのすべての依存関係を返します。

**構文**：

```JAVA
public static List
<Node> getAllDependencies 
(Node rootNode) throws GuidesApiException
```

**パラメーター**:

| 名前 | 種類 | 説明 |
|----|----|-----------|
| `rootNode` | javax.jcr.Node | すべての依存関係を取得するルートノード。 |

**戻り値**
ルートノードのすべての依存関係を含むノードリスト。
