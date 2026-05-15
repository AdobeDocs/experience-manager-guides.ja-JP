---
title: パッケージを作成およびアクティブ化するためのJava ベースのAPI
description: パッケージを作成およびアクティブ化するためのJava ベースのAPIについて説明します
exl-id: b801c2b3-445f-4aa7-a4f2-029563d7cb3a
feature: Java-Based API Packages
role: Developer
level: Experienced
TQID: https://experienceleague.adobe.com/g5Mp7tMM9JaAYwNmMyPmaFEcI0fx66vrX8ry97lIUF8
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a01bfd36-4ab8-4bf8-9dc0-5b45b890552eid: a3bd6397-2eb2-4908-a61c-226e26855dcaid: c6d09140-3c91-45d3-b7ed-b681af752f43
role_v2: id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 618
ht-degree: 1%

---

# パッケージを作成およびアクティブ化するためのJava ベースのAPI {#id175UB30E05Z}

>[!NOTE]
>
> Experience Manager Guidesで利用可能なJava ベースのAPIを使用して、カスタムプラグインを作成し、すぐに利用できるワークフローを拡張できます。 この記事は2024年11月にアーカイブされます。
> Java ベースのAPIの使用に関する最新かつ詳細なドキュメントについては、[![javadoc](https://javadoc.io/badge2/com.adobe.aem/aem-guides-sdk-api/javadoc.svg)](https://javadoc.io/doc/com.adobe.aem/aem-guides-sdk-api)を参照してください。


次のJava ベースのAPIを使用すると、CRX パッケージを作成してアクティブ化できます。 このAPIは、バンドルの形式で使用できます。 このAPIを使用するには、このバンドルをコードに含める必要があります。

バンドルの詳細：

- グループ ID: **com.adobe.fmdita**

- アーティファクト ID: **api**

- バージョン：**3.3**

- パッケージ：**com.adobe.fmdita.api.crxactivate**

- クラスの詳細：

  ```JAVA
  public class CRXActivator
  ```

  **`CRXActivator`** クラスには、CRX パッケージを作成し、パブリッシュインスタンスでレプリケートするためのメソッドが含まれています。


## パッケージの作成とアクティベート

`activate` メソッドは、オーサーインスタンスにCRX パッケージを作成し、必要に応じてパブリッシュインスタンスにレプリケートします。 AEM レプリケーションパラメーターは、オーサーインスタンスで既に設定されていることが前提です。 このメソッドは、JSON文字列内の入力パラメーターとして指定されたルールのリストに基づいて、CRX パッケージを作成します。
>[!NOTE]
>
> 作成またはアクティブ化プロセス中に発生したエラーは、`outputstream`に書き込まれます。

### 2つのパラメーターを使用した例

**構文**：


```JAVA
public static void activate
(
  String json, 
  OutputStream outputstream, 
  Session session
) 
throws GuidesApiException
```

### 3番目のオプションパラメーターを含む例

```JAVA
public static void activate
(
  String json, 
  OutputStream outputstream,
  String activationTarget, 
  Session session
) 
throws GuidesApiException
```

**パラメーター**:

| 名前 | 種類 | 説明 |
|----|----|-----------|
| `json` | 文字列 | 構築するCRX パッケージを決定するJSON文字列。 次の形式を使用してJSON文字列を作成します：<br>- `activate`：はBoolean \（`true`/`false`\）型です。 オーサーインスタンスで作成されたCRX パッケージをパブリッシュインスタンスにレプリケートするかどうかを指定します。<br> - `rules`: JSON配列タイプです。 CRX パッケージを構築するために順次処理されるJSON ルールの配列。<br> - `rootPath`：はString タイプです。 ノード/プロパティクエリが実行されるベースパス。 ノード/プロパティクエリが存在しない場合、ルートパスと、ルートパスの下に存在するすべてのノードがCRX パッケージに含まれます。<br> - `nodeQueries`: Regex Array タイプです。 ルートパスの下に特定のファイルを含めるために使用される正規表現の配列。<br> - `propertyQueries`: JSON配列タイプです。 ルートパスで実行されるXPath クエリと、クエリの実行後に各JCR ノードに存在するプロパティの名前で構成される各JSON オブジェクトを含むJSON オブジェクトの配列。 各JCR ノードのプロパティの値は、パスまたはパスの配列である必要があります。 このプロパティに存在するパスは、CRX パッケージに追加されます。 |
| `outputstream` | java.io.OutputStream | これは、クエリの実行、ファイルのインクルージョン、CRX パッケージの作成、アクティベーションなど、様々なステージの結果を書き込むために使用されます。 作成中またはアクティブ化プロセス中に発生したエラーは、`outputstream`に書き込まれます。 これはデバッグに便利です。 |
| `session` | 文字列 | アクティブ化権限を持つ有効なJCR セッション。 |
| `activationTarget` | 文字列 | （*オプション*） `preview`または`publish` （Cloud Serviceの場合）、および`publish` （オンプレミスソフトウェアの場合） <br> - Cloud Serviceの場合、パラメーターに無効な値が含まれている場合、パッケージアクティベーションに失敗します。<br> - オンプレミス ソフトウェアの場合、パラメーターに無効な値が含まれている場合、エラーはログに記録され、デフォルト値`publish`を使用して公開が行われます。 |

**例外**:

`java.io.IOException`と`java.io.IllegalArgumentException`をスローします


オプションのパラメーター`activationTarget`を定義しない場合、Cloud Serviceとオンプレミスソフトウェアの両方のデフォルトのパブリッシュエージェントを使用してアクティブ化されます。


**例**:
次の例は、JSON クエリを作成する方法を示しています。

```JSON
{
  "activate": true,
  "rules": [
    {
      "rootPath": "/content/dam/nested",
      "nodeQueries": [
        ".*\\.jpg",
        ".*\\.png",
        ".*\\.gif"        
      ]
    },
    {
      "rootPath": "/content/output/sites/hierarchy_ditamap"
    },
    {
      "rootPath": "/content/output/sites/hierarchy_ditamap",
      "propertyQueries": [
        {
          "query": "//*[@fileReference]",
          "property": "fileReference"
        }
      ]
    }
  ]
}
```

JSON クエリの例は、次のルールで構成されます。

- パッケージには、/content/dam/nested path の.png、.jpg、.gif画像のみが含まれます。
- /content/output/sites/hierarchy\_ditamap配下のすべてのノードがパッケージに含まれます。
- /content/output/sites/hierarchy\_ditamapの下のノードの`fileReference` プロパティに存在するパスは、パッケージに含まれます。
