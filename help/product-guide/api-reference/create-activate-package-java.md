---
title: パッケージを作成してアクティブ化するための Java ベースの API
description: パッケージを作成してアクティブ化するための Java ベースの API について説明します
exl-id: b801c2b3-445f-4aa7-a4f2-029563d7cb3a
feature: Java-Based API Packages
role: Developer
level: Experienced
source-git-commit: 4ce78061ddb193d3c16241ff32fa87060c9c7bd6
workflow-type: tm+mt
source-wordcount: '550'
ht-degree: 0%

---

# パッケージを作成してアクティブ化するための Java ベースの API {#id175UB30E05Z}

次の Java ベースの API を使用すると、CRX パッケージを作成してアクティブ化できます。 この API は、バンドルの形式で使用できます。 この API を使用するには、コードにこのバンドルを含める必要があります。

バンドルの詳細

- グループ ID: **com.adobe.fmdita**

- アーティファクト ID: **api**

- バージョン : **3.3**

- パッケージ： **com.adobe.fmdita.api.crxactivate**

- クラス詳細：

  ```JAVA
  public class CRXActivator
  ```

  この **`CRXActivator`** クラスには、CRX パッケージを作成し、パブリッシュインスタンス上にレプリケートするためのメソッドが含まれています。


## パッケージの作成とアクティブ化

この `activate` メソッドは、オーサーインスタンス上で CRX パッケージを作成し、必要に応じてパブリッシュインスタンスにレプリケートします。 AEM レプリケーションパラメーターがオーサーインスタンスに既に設定されていると想定します。 このメソッドは、JSON 文字列の入力パラメーターとして提供されたルールのリストに基づいて CRX パッケージを作成します。
>[!NOTE]
>
> 作成またはアクティベーションプロセス中に発生したエラーは、に書き込まれます `outputstream`.

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

**パラメーター**: |名前|種類|説明| |----|----|-----------| |`json`|String|ビルドする CRX パッケージを決定する JSON 文字列。 次の形式を使用して JSON 文字列を作成します。 <br>- `activate`: Boolean \（タイプ`true`/`false`\）に設定します。 オーサーインスタンスで作成された CRX パッケージをパブリッシュインスタンスにレプリケートするかどうかを指定します。 <br> - `rules`:JSON 配列タイプです。 CRX パッケージを構築するために順番に処理される JSON ルールの配列。 <br> - `rootPath`：文字列タイプです。 ノード/プロパティクエリが実行されるベースパス。 ノード/プロパティクエリが存在しない場合、ルートパスおよびルートパスの下に存在するすべてのノードが CRX パッケージに含まれます。 <br> - `nodeQueries`：正規表現配列タイプです。 ルートパスの下の特定のファイルを含めるために使用される正規表現の配列。 <br> - `propertyQueries`:JSON 配列タイプです。 ルートパスで実行される XPath クエリと、クエリの実行後に各 JCR ノードに存在するプロパティの名前で構成される、各 JSON オブジェクトを含む JSON オブジェクトの配列。 各 JCR ノードのプロパティの値は、パスまたはパスの配列にする必要があります。 このプロパティに存在するパスは CRX パッケージに追加されます。| |`outputstream`|java.io.OutputStream|クエリの実行、ファイルの組み込み、CRX パッケージの作成、アクティブ化など、様々なステージの結果を書き込むために使用されます。 作成またはアクティベーションプロセス中に発生したエラーは、に書き込まれます `outputstream`. これはデバッグに役立ちます。| |`session`|文字列|アクティブ化権限を持つ有効な JCR セッション。| |`activationTarget`|文字列|（*オプション*） `preview` または `publish` Cloud Service用および `publish` オンプレミス ソフトウェアの場合 <br> - Cloud Serviceの場合、パラメーターに無効な値が含まれていると、パッケージの有効化は失敗します。 <br> - オンプレミスソフトウェアで、パラメーターに無効な値が含まれている場合、エラーがログに記録され、デフォルト値を使用して公開が行われます。 `publish`. |

**例外**:

スロー `java.io.IOException` および `java.io.IllegalArgumentException`


オプションパラメーターを定義しない場合、 `activationTarget`これにより、Cloud Serviceとオンプレミスの両方のソフトウェアにデフォルトのパブリッシュエージェントを使用してアクティベートされます。


**例**：次の例は、JSON クエリの作成方法を示しています。

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
- に存在するパス `fileReference` /content/output/sites/hierarchy\_ditamap の下のノードのプロパティがパッケージに含まれます。
