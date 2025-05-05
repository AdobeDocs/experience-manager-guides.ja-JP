---
title: 出力生成を操作するための Java ベースの API
description: 出力生成を操作するための Java ベースの API について説明します
exl-id: e19439df-39ec-47fd-9da5-24f51750a7e5
feature: Java-Based API Publishing
role: Developer
level: Experienced
source-git-commit: ee4eb829ebe215315b05cd1f376e934c02a73b1e
workflow-type: tm+mt
source-wordcount: '201'
ht-degree: 2%

---

# 出力生成を操作するための Java ベースの API {#id175UB30E05Z}

>[!NOTE]
>
> Experience Manager Guidesで使用可能な Java ベースの API を使用して、カスタムプラグインを作成し、標準のワークフローを拡張できます。 この記事は、2024 年 11 月にアーカイブされる予定です。
> Java ベースの API の使用に関する最新および詳細なドキュメントについては、[![javadoc](https://javadoc.io/badge2/com.adobe.aem/aem-guides-sdk-api/javadoc.svg)](https://javadoc.io/doc/com.adobe.aem/aem-guides-sdk-api) を参照してください。

次の Java ベースの API を使用すると、DITA マップの出力を生成できます。 この API は、バンドルの形式で使用できます。 この API を使用するには、コードにこのバンドルを含める必要があります。

バンドルの詳細

- グループ ID:**com.adobe.fmdita**

- アーティファクト ID: **api**

- バージョン：**3.4**

- パッケージ：**&#x200B;**&#x200B;com.adobe.fmdita.api.maps&#x200B;**&#x200B;**

- クラス詳細：

  ```JAVA
  public class **PublishUtils** extends Object
  ```

  **`PublishUtils`** クラスには、1 つ以上の出力プリセットの出力を生成するメソッドが含まれています。


## 出力を生成

``generateOutput`` メソッドは、指定した出力プリセットを使用して DITA マップファイルの出力を生成します。

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
| `session` | javax.jcr.Session | 有効な JCR セッション。 |
| ``sourcePath`` | 文字列 | 出力を生成する必要がある DITA マップファイルのパス \（AEM リポジトリ内） |
| ``outputName`` | 文字列 | 出力の生成に使用する出力プリセットの名前。 複数の出力プリセットは、パイプ\（&quot;\|&quot;\）区切り文字（例：`aemsite\|pdfoutput`）を使用して指定できます。 |

**例外**:
``javax.jcr.RepositoryException``、`java.io.IOException`、および `java.lang.Exception` をスローします。
