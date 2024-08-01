---
title: パッケージを作成してアクティブ化するための Java ベースの API
description: パッケージを作成してアクティブ化するための Java ベースの API について説明します
exl-id: b801c2b3-445f-4aa7-a4f2-029563d7cb3a
feature: Java-Based API Packages
role: Developer
level: Experienced
source-git-commit: 1bb422427822e7f369e0c1be7de6b12ec012075e
workflow-type: tm+mt
source-wordcount: '550'
ht-degree: 1%

---

# パッケージを作成してアクティブ化するための Java ベースの API {#id175UB30E05Z}

次の Java ベースの API を使用すると、CRX パッケージを作成してアクティブ化できます。 この API は、バンドルの形式で使用できます。 この API を使用するには、コードにこのバンドルを含める必要があります。

バンドルの詳細

- グループ ID:**com.adobe.fmdita**

- アーティファクト ID: **api**

- バージョン：**3.3**

- パッケージ：**com.adobe.fmdita.api.crxactivate**

- クラス詳細：

  ```JAVA
  public class CRXActivator
  ```

  **`CRXActivator`** クラスには、CRX パッケージを作成し、パブリッシュインスタンス上でレプリケートするためのメソッドが含まれています。


## パッケージの作成とアクティブ化

`activate` メソッドは、オーサーインスタンス上にCRX パッケージを作成し、必要に応じてパブリッシュインスタンスにレプリケートします。 AEM レプリケーションパラメーターがオーサーインスタンスに既に設定されていると想定します。 このメソッドは、JSON 文字列の入力パラメーターとして提供されたルールのリストに基づいて、CRX パッケージを作成します。
>[!NOTE]
>
> 作成またはアクティベーションプロセス中に発生したエラーは、`outputstream` に書き込まれます。

### 2 つのパラメーターを使用した例

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

### 3 番目のオプションパラメーターを使用した例

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
| `json` | String | ビルドするCRX パッケージを決定する JSON 文字列。 次の形式を使用して JSON 文字列を作成します。<br>- `activate`：はブール型\（`true`/`false`\）です。 オーサーインスタンスで作成されたCRX パッケージをパブリッシュインスタンスにレプリケートするかどうかを指定します。 <br> - `rules`:JSON 配列タイプです。 CRX パッケージを構築するために順次処理される JSON ルールの配列。 <br> - `rootPath`：文字列型です。 ノード/プロパティクエリが実行されるベースパス。 ノード/プロパティクエリが存在しない場合、ルートパスおよびルートパスの下に存在するすべてのノードがCRX パッケージに含まれます。 <br> - `nodeQueries`：正規表現配列タイプです。 ルートパスの下の特定のファイルを含めるために使用される正規表現の配列。 <br> - `propertyQueries`:JSON 配列タイプです。 ルートパスで実行される XPath クエリと、クエリの実行後に各 JCR ノードに存在するプロパティの名前で構成される、各 JSON オブジェクトを含む JSON オブジェクトの配列。 各 JCR ノードのプロパティの値は、パスまたはパスの配列にする必要があります。 このプロパティに存在するパスがCRX パッケージに追加されます。 |
| `outputstream` | java.io.OutputStream | クエリの実行、ファイルの組み込み、CRX パッケージの作成、アクティブ化など、様々なステージの結果を書き込むために使用されます。 作成またはアクティベーションプロセス中に発生したエラーは、`outputstream` に書き込まれます。 これはデバッグに役立ちます。 |
| `session` | 文字列 | アクティベーション権限を持つ有効な JCR セッション。 |
| `activationTarget` | 文字列 | （*オプション*）Cloud Serviceの場合は `preview` または `publish`、オンプレミスソフトウェアの場合は `publish` <br> -Cloud Serviceの場合、パラメーターに無効な値が含まれていると、パッケージのアクティベーションが失敗します。 <br> - オンプレミスソフトウェアの場合、パラメーターに無効な値が含まれていると、エラーがログに記録され、デフォルト値 `publish` を使用して公開が行われます。 |

**例外**:

`java.io.IOException` と `java.io.IllegalArgumentException` をスロー


オプションのパラメーター `activationTarget` を指定しない場合は、Cloud Serviceーとオンプレミスの両方でデフォルトのパブリッシュエージェントを使用してアクティベートされます。


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

サンプルの JSON クエリは、次のルールで構成されています。

- /content/dam/nested パスの下の.png、.jpg、および.gif 画像のみがパッケージに含まれます。
- /content/output/sites/hierarchy\_ditamap の下のすべてのノードがパッケージに含まれます。
- /content/output/sites/hierarchy\_ditamap 以下のノードの `fileReference` プロパティにあるパスがパッケージに含まれます。
