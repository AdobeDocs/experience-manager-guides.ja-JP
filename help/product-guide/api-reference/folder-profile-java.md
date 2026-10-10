---
title: フォルダープロファイルを操作するためのJava ベースのAPI
description: フォルダープロファイルを操作するためのJava ベースのAPIについて説明します
exl-id: 388ae654-c4f9-4bb7-ba98-370b8919e3a6
feature: Java-Based API Folder Profiles
role: Developer
level: Experienced
TQID: 'https://experienceleague.adobe.com/-rZBkRHgOJDh0hpvpMgRx7jyvcYstElA4ztdjXmpATU'
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
feature_v2:
  - id: a01bfd36-4ab8-4bf8-9dc0-5b45b890552e
    internal-label: APIs
  - id: c6d09140-3c91-45d3-b7ed-b681af752f43
    internal-label: APIs
subfeature_v2:
  - id: bc523de0-ab16-4d84-a1f2-ab36dfeb1a6d
    internal-label: Java Based API Folder Profiles
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '317'
ht-degree: 2%
---
# フォルダープロファイルを操作するためのJava ベースのAPI {#id175UB30E05Z}

>[!NOTE]
>
> Experience Manager Guidesで利用可能なJava ベースのAPIを使用して、カスタムプラグインを作成し、すぐに利用できるワークフローを拡張できます。 この記事は2024年11月にアーカイブされます。
> Java ベースのAPIの使用に関する最新かつ詳細なドキュメントについては、[![javadoc](https://javadoc.io/badge2/com.adobe.aem/aem-guides-sdk-api/javadoc.svg)](https://javadoc.io/doc/com.adobe.aem/aem-guides-sdk-api)を参照してください。




次のJava ベースのAPIを使用すると、条件付き属性をフォルダーレベルのプロファイルに追加できます。 このAPIは、バンドルの形式で使用できます。 このAPIを使用するには、このバンドルをコードに含める必要があります。

バンドルの詳細：

- グループ ID: **com.adobe.fmdita**

- アーティファクト ID: **api**

- バージョン：**3.2**

- パッケージ：**com.adobe.fmdita.api.profiles**

- クラスの詳細：

  ```JAVA
  public class FolderProfileUtils extends Object
  ```

  **`FolderProfileUtils`** クラスには、フォルダープロファイルに条件付き属性を追加するメソッドが含まれています。


## フォルダープロファイルへの条件付き属性の追加

``addAttributeProfiles`` メソッドは、条件付き属性をフォルダーレベルのプロファイルに追加します。

**構文**：

```JAVA
public static boolean addAttributeProfiles
(List
<String> attributeNames, 
List
    <String> values, 
List
        <String> labels,
String profileName, 
Session session) throws GuidesApiException
```

**パラメーター**:

| 名前 | 種類 | 説明 |
|----|----|-----------|
| ``attributeNames`` | String | 属性名のリスト。 |
| ``values`` | 文字列 | 指定された属性の値のリスト。 |
| `labels` | 文字列 | `attribute` ～ `value` ペアのラベルのリスト。 [1](#fntarg_1) |
| `profileName` | 文字列 | これらの属性、値、ラベルを適用する必要があるフォルダーレベルのプロファイルの名前。 **重要：** プロファイルで定義されているすべての既存のattributes-values-labelsが上書きされます。 |
| `session` | javax.jcr.Session | 有効なJCR セッション。 |

**返品**:
`true`を成功に導く。 失敗した場合は、例外がスローされます。

**例外**:
次のシナリオで``java.lang.Exception``をスローします。

- APIが`resourceResolverFactory` オブジェクトを取得できなかった場合。 その場合、バンドルを再起動する必要があります。
- APIに渡されたパラメーターが無効な場合。
- 特定のフォルダープロファイルの管理者ではないユーザーなど、権限のないユーザーセッションを通じてAPIが呼び出された場合。

[1](#fnsrc_1)配列リスト内の同じインデックスの`attributeNames`、`values`および`labels`は、同じエントリに対応する必要があります。
