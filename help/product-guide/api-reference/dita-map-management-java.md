---
title: DITA マップを操作するためのJava ベースのAPI
description: DITA マップを操作するJava ベースのAPIについて説明します
exl-id: bd91fc90-75f8-487c-99d1-2637e9cf9924
feature: Java-Based API Dita Map
role: Developer
level: Experienced
TQID: https://experienceleague.adobe.com/XDVopMV3mqDipQ1P3FgfJPquykDrl1trrZYd2S-KLpw
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a01bfd36-4ab8-4bf8-9dc0-5b45b890552eid: c6d09140-3c91-45d3-b7ed-b681af752f43id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
role_v2: id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
topic_v2: id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 1096
ht-degree: 3%

---

# DITA マップを操作するためのJava ベースのAPI {#id175UB30E05Z}

>[!NOTE]
>
> Experience Manager Guidesで利用可能なJava ベースのAPIを使用して、カスタムプラグインを作成し、すぐに利用できるワークフローを拡張できます。 この記事は2024年11月にアーカイブされます。
> Java ベースのAPIの使用に関する最新かつ詳細なドキュメントについては、[![javadoc](https://javadoc.io/badge2/com.adobe.aem/aem-guides-sdk-api/javadoc.svg)](https://javadoc.io/doc/com.adobe.aem/aem-guides-sdk-api)を参照してください。



次のJava ベースのAPIを使用すると、AEM GuidesでDITA マップを操作できます。 これらのAPIは、バンドルの形式で使用できます。 これらのAPIを使用するには、このバンドルをコードに含める必要があります。

バンドルの詳細：

- グループ ID: **com.adobe.fmdita**

- アーティファクト ID: **api**

- バージョン：**3.2**

- パッケージ：**com.adobe.fmdita.api.maps**

- クラスの詳細：

  ```JAVA
  public class MapUtilities extends Object
  ```

  MapUtilities クラスには、DITA マップファイルからメタデータ情報を取得するメソッドが含まれています。


## 扶養家族を含むDITA マップのダウンロード

`zipMapWithDependents` メソッドは、参照トピック、サブマップ、画像、DTDなどのすべての依存ファイルと共に、DITA マップを含む.zip ファイルを作成します。 DITA マップの.zip ファイルは、特定のベースラインに基づいて作成されます。

また、同じ構造\（親フォルダーと子フォルダー\）を維持するか、すべての依存ファイルに対して1つのフォルダー内にフラットファイル構造を作成することもできます。

>[!IMPORTANT]
>
> APIは例外をスローし、依存ファイルのいずれかが見つからない場合は.zip ファイルを作成できません。

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
| `session` | javax.jcr.Session | 有効なJCR セッション。 |
| `sourcePath` | 文字列 | ダウンロードが必要なDITA マップファイルのパス \（AEM リポジトリ内\）。 |
| `outputStream` | java.io.OutputStream | ZIPを書き込むストリーム。 |
| `baseline` | 文字列 | バージョン管理されたコンテンツの取得に使用されるベースラインのタイトル。<br> **注意：**&#x200B;値では大文字と小文字が区別されます。 |
| flatFS | ブーリアン | \（オプション\） trueに設定すると、ZIP ファイルにフラットなファイル構造が返されます。 例えば、DITA マップが複数のフォルダー内のコンテンツを参照している場合、参照されているすべてのファイルが1つのフォルダーに取り込まれます。 同じ名前のファイルがある場合、これらのファイルは数値サフィックスを追加して名前が変更されます。 フラットフォルダー構造内のファイルの新しい場所に基づいて更新される参照\（DITA マップおよびトピック\）は、すべて自動的に処理されます。 falseに設定した場合、フォルダー構造はZIP ファイル内と同じように維持されます。 DITA マップが複数の場所のファイルを参照する場合は、それらの場所もすべてZIP ファイルに作成されます。 ZIP ファイルを復元すると、正確なフォルダー構造が保存先の場所に作成されます。<br> このパラメーターのデフォルト値はfalseです。 |

**返品**:
ZIPの内容は`outputStream`に書き込まれます。

**例外**:
``javax.jcr.RepositoryException``、`java.io.IOException`をスローします。

## 扶養家族を含むDITA マップをダウンロード \（Asynchronously\）

または、非同期モードで依存関係を持つDITA マップをダウンロードすることもできます。 この方法は、大規模なDITA マップで使用する場合に便利です。

`zipMapWithDependents` メソッドは、参照トピック、サブマップ、画像、DTDなどのすべての依存ファイルと共に、DITA マップを含む.zip ファイルを作成します。 DITA マップの.zip ファイルは、特定のベースラインに基づいて作成されます。

また、同じ構造\（親フォルダーと子フォルダー\）を維持するか、すべての依存ファイルに対して1つのフォルダー内にフラットファイル構造を作成することもできます。

>[!NOTE]
>
> このノードは、output.history.purgetime設定を定義した場合、またはデフォルトで5日間の場合、一定期間後に自動的に削除されます。

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
| `session` | javax.jcr.Session | 有効なJCR セッション。 |
| `sourcePath` | 文字列 | ダウンロードが必要なDITA マップファイルのパス \（AEM リポジトリ内\）。 |
| `baseline` | 文字列 | バージョン管理されたコンテンツの取得に使用されるベースラインのタイトル。<br> **注意：**&#x200B;値では大文字と小文字が区別されます。 |
| flatFS | ブーリアン | \（オプション\） trueに設定すると、ZIP ファイルにフラットなファイル構造が返されます。 例えば、DITA マップが複数のフォルダー内のコンテンツを参照している場合、参照されているすべてのファイルが1つのフォルダーに取り込まれます。 同じ名前のファイルがある場合、これらのファイルは数値サフィックスを追加して名前が変更されます。 フラットフォルダー構造内のファイルの新しい場所に基づいて更新される参照\（DITA マップおよびトピック\）は、すべて自動的に処理されます。 falseに設定した場合、フォルダー構造はZIP ファイル内と同じように維持されます。 DITA マップが複数の場所のファイルを参照する場合は、それらの場所もすべてZIP ファイルに作成されます。 ZIP ファイルを復元すると、宛先の場所に正確なフォルダー構造が作成されます。<br> このパラメーターのデフォルト値はfalseです。 |

**返品**:
zip ファイルのノードは`CompletableFuture` クラスでラップされます。 ユーザーは非同期的に処理を続けることができ、将来の`.get()` メソッドを使用して、ノードが必要なときにスレッドをブロックすることができます。 返される値はエラーで終わることもあり、これは`.exceptionally()` メソッドで処理できます。

## ベースラインのリストを取得

``getBaselineList`` メソッドは、特定のDITA マップに存在するすべてのベースラインのリストを取得します。

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
| `session` | javax.jcr.Session | 有効なJCR セッション。 |
| `sourcePath` | 文字列 | ベースライン情報を取得するDITA マップファイルのパス \（AEM リポジトリ内\）。 |

**返品**:
`HashMap` オブジェクトのリスト。 各`HashMap` オブジェクトはベースラインを表し、ベースラインの名前とタイトルを含みます。

**例外**:
``javax.jcr.RepositoryException``をスローします。

## コンディショナルプリセットのリストを取得

``getConditionalPresetList`` メソッドは、特定のDITA マップに存在するすべてのコンディショナルプリセットのリストを取得します。

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
| `session` | javax.jcr.Session | 有効なJCR セッション。 |
| `sourcePath` | 文字列 | コンディショナルプリセット情報を取得するDITA マップファイルのパス \（AEM リポジトリ内\）。 |

**返品**:
`HashMap` オブジェクトのリスト。 各`HashMap` オブジェクトは、コンディショナルプリセットを表し、コンディショナルプリセットの名前とタイトルを含みます。

**例外**:
``javax.jcr.RepositoryException``をスローします。

## 条件付きプリセットのDITAVAL ファイル情報を取得する

``getDitavalFromConditionalPreset`` メソッドは、特定のDITA マップのコンディショナルプリセットに対応するDITAVAL ファイルのパスを取得します。

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
| `session` | javax.jcr.Session | 有効なJCR セッション。 |
| `sourcePath` | 文字列 | DITAVAL ファイルを取得するDITA マップファイルのパス \（AEM リポジトリ内\）。 |
| `cpName` | 文字列 | DITAVAL ファイルを取得するDITA マップ内のコンディショナルプリセットの名前。 |

**返品**:
DITA マップファイルで定義されたコンディショナルプリセットに対応するDITAVAL ファイルのパス。

## ノードのすべての依存関係を取得

``getAllDependencies`` メソッドは、特定のノードのすべての依存関係を返します。

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

**返品**:
ルートノードのすべての依存関係を含むノードリスト。
