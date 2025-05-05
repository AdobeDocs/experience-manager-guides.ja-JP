---
title: AEM Site 出力の有効なファイル名の設定
description: AEM サイト出力の有効なファイル名を設定する方法を説明します
exl-id: 05215bec-653b-4563-83c6-a1bb16200469
feature: Filename Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '146'
ht-degree: 1%

---

# AEM Site 出力の有効なファイル名の設定 {#id214GK0X0KXA}

DITA トピックに使用できる有効なファイル名文字の一覧と同様に、AEM Site 出力に有効なファイル名文字の一覧を構成することもできます。 URL で使用できない既知の文字の一部は次のとおりです。``'<>`@$`` AEM Site 出力ファイル名の生成中に見つかると、自動的にアンダースコア「`_`」に変換されます。

[ 設定の上書き ](download-install-additional-config-override.md#) の手順に従って、設定ファイルを作成します。 設定ファイルで、次の\（property\）の詳細を指定して、AEM Site 出力に有効な文字を設定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.common.SanitizeNodeNameImpl` | `aemsite.DisallowedFileNameChars` | AEM Site 出力ファイル名に、アンダースコアに置き換える文字を追加します。<br> **デフォルト値**: ``'<\>\`@$`` |

**親トピック：**&#x200B;[ ファイル名の設定 ](conf-file-names.md)
