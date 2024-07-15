---
title: 出力生成を操作するための Java ベースの API
description: 出力生成を操作するための Java ベースの API について説明します
exl-id: e19439df-39ec-47fd-9da5-24f51750a7e5
feature: Java-Based API Publishing
role: Developer
level: Experienced
source-git-commit: be06612d832785a91a3b2a89b84e0c2438ba30f2
workflow-type: tm+mt
source-wordcount: '160'
ht-degree: 0%

---

# 出力生成を操作するための Java ベースの API {#id175UB30E05Z}

次の Java ベースの API を使用すると、DITA マップの出力を生成できます。 この API は、バンドルの形式で使用できます。 この API を使用するには、コードにこのバンドルを含める必要があります。

バンドルの詳細

- グループ ID:**com.adobe.fmdita**

- アーティファクト ID: **api**

- バージョン：**3.4**

- パッケージ：****com.adobe.fmdita.api.maps****

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
|名前|種類|説明|
|----|----|-----------|
|`session`|javax.jcr.Session|有効な JCR セッション。|
|``sourcePath``|文字列|出力を生成する必要がある DITA マップ ファイルのパス \（AEM リポジトリ\）。|
|``outputName``|文字列|出力の生成に使用する出力プリセットの名前。 複数の出力プリセットは、パイプ \（&quot;\|&quot;\）区切り文字（例：`aemsite\|pdfoutput`）を使用して指定できます。

**例外**:
``javax.jcr.RepositoryException``、`java.io.IOException`、および `java.lang.Exception` をスローします。
