---
title: フォルダープロファイルを操作するための Java ベースの API
description: フォルダープロファイルを操作するための Java ベースの API について説明します
exl-id: 388ae654-c4f9-4bb7-ba98-370b8919e3a6
feature: Java-Based API Folder Profiles
role: Developer
level: Experienced
source-git-commit: 8c80a4da8e61909aab0f2db81ef97149774b36c4
workflow-type: tm+mt
source-wordcount: '286'
ht-degree: 2%

---

# フォルダープロファイルを操作するための Java ベースの API {#id175UB30E05Z}

>[!NOTE]
>
> Experience Manager Guidesで使用可能な Java ベースの API を使用して、カスタムプラグインを作成し、標準のワークフローを拡張できます。 この記事は、2024 年 11 月にアーカイブされる予定です。
> Java ベースの API の使用に関する最新および詳細なドキュメントについては、[![javadoc](https://javadoc.io/badge2/com.adobe.aem/aem-guides-sdk-api/javadoc.svg)](https://javadoc.io/doc/com.adobe.aem/aem-guides-sdk-api) を参照してください。




次の Java ベースの API を使用すると、フォルダーレベルのプロファイルに条件属性を追加できます。 この API は、バンドルの形式で使用できます。 この API を使用するには、コードにこのバンドルを含める必要があります。

バンドルの詳細

- グループ ID:**com.adobe.fmdita**

- アーティファクト ID: **api**

- バージョン：**3.2**

- パッケージ：**com.adobe.fmdita.api.profiles**

- クラス詳細：

  ```JAVA
  public class FolderProfileUtils extends Object
  ```

  **`FolderProfileUtils`** クラスには、フォルダープロファイルに条件属性を追加するためのメソッドが含まれています。


## フォルダープロファイルへの条件付き属性の追加

``addAttributeProfiles`` メソッドは、フォルダーレベルのプロファイルに条件付き属性を追加します。

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
| `labels` | 文字列 | `attribute` ～ `value` のペアのラベルのリスト。 [1](#fntarg_1) |
| `profileName` | 文字列 | これらの属性、値およびラベルを適用する必要があるフォルダーレベルのプロファイルの名前。 **重要：** プロファイルで定義されている既存の属性 – 値 – ラベルはすべて上書きされます。 |
| `session` | javax.jcr.Session | 有効な JCR セッション。 |

**戻り値**
成功を `true` します。 エラーが発生した場合、例外がスローされます。

**例外**:
次のシナリオでは、``java.lang.Exception`` をスローします。

- API がオブジェクトを取得でき `resourceResolverFactory` かった場合。 その場合は、バンドルを再起動する必要があります。
- API に渡されたパラメーターが無効な場合。
- 指定されたフォルダープロファイルの管理者でないユーザーなど、権限のないユーザーセッションを使用して API が呼び出された場合。

[1](#fnsrc_1) 配列リスト内の同じインデックスにある `attributeNames`、`values`、および `labels` は、同じエントリに対応する必要があります。
