---
title: 出力生成を操作するJava ベースのAPI
description: 出力生成を操作するJava ベースのAPIについて説明します
exl-id: e19439df-39ec-47fd-9da5-24f51750a7e5
feature: Java-Based API Publishing
role: Developer
level: Experienced
TQID: https://experienceleague.adobe.com/i5mTM1VtBg3QFUa-sBmF2pH8BITRn9j-efw2dr8VwCU
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a01bfd36-4ab8-4bf8-9dc0-5b45b890552e
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
  - id: c6d09140-3c91-45d3-b7ed-b681af752f43
subfeature_v2:
  - id: fd6cc9e1-e5e5-494e-b7b1-a32f2d6cd7c9
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 225
ht-degree: 2%

---

# 出力生成を操作するJava ベースのAPI {#id175UB30E05Z}

>[!NOTE]
>
> Experience Manager Guidesで利用可能なJava ベースのAPIを使用して、カスタムプラグインを作成し、すぐに利用できるワークフローを拡張できます。 この記事は2024年11月にアーカイブされます。
> Java ベースのAPIの使用に関する最新かつ詳細なドキュメントについては、[![javadoc](https://javadoc.io/badge2/com.adobe.aem/aem-guides-sdk-api/javadoc.svg)](https://javadoc.io/doc/com.adobe.aem/aem-guides-sdk-api)を参照してください。

次のJava ベースのAPIを使用すると、DITA マップの出力を生成できます。 このAPIは、バンドルの形式で使用できます。 このAPIを使用するには、このバンドルをコードに含める必要があります。

バンドルの詳細：

- グループ ID: **com.adobe.fmdita**

- アーティファクト ID: **api**

- バージョン：**3.4**

- パッケージ：**&#x200B;**&#x200B;com.adobe.fmdita.api.maps&#x200B;**&#x200B;**

- クラスの詳細：

  ```JAVA
  public class **PublishUtils** extends Object
  ```

  **`PublishUtils`** クラスには、1つ以上の出力プリセットの出力を生成するためのメソッドが含まれています。


## 出力を生成

``generateOutput`` メソッドは、指定された出力プリセットを使用して、DITA マップファイルの出力を生成します。

**構文**：

```JAVA
public static void generateOutput(Session session,
String sourcePath,
String outputName)
throws GuidesApiException
```

**パラメーター**:

| 名前 | 種類 | 説明 |
|----|----|-----------|
| `session` | javax.jcr.Session | 有効なJCR セッション。 |
| ``sourcePath`` | 文字列 | 出力を生成する必要があるDITA マップファイルのパス \（AEM リポジトリ内\）。 |
| ``outputName`` | 文字列 | 出力の生成に使用する出力プリセットの名前。 パイプ \（&quot;\|&quot;\）区切り文字（例：`aemsite\|pdfoutput`）を使用して、複数の出力プリセットを指定できます。 |

**例外**:
``javax.jcr.RepositoryException``、`java.io.IOException`、`java.lang.Exception`をスローします。
