---
title: AEM サイト出力の有効なファイル名を設定する
description: AEM サイト出力の有効なファイル名を設定する方法を説明します
exl-id: 05215bec-653b-4563-83c6-a1bb16200469
feature: Filename Configuration
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 564ee1731be2378744ffd2ed54a2fd423901a0b3
workflow-type: tm+mt
source-wordcount: '146'
ht-degree: 1%

---

# AEM サイト出力の有効なファイル名を設定する {#id214GK0X0KXA}

DITA トピックで許可される有効なファイル名文字のリストと同様に、AEM サイト出力用に有効なファイル名文字のリストを設定することもできます。 URLで許可されていない既知の文字の一部：``'<>`@$``。 これらの文字は、AEM サイト出力ファイル名の生成中に見つかった場合に、アンダースコア「`_`」に自動変換するように設定されています。

設定ファイルを作成するには、[設定の上書き](download-install-additional-config-override.md#)の手順を使用します。 コンフィギュレーションファイルで、次の\（property\）詳細を指定して、AEM サイト出力に有効な文字を設定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.common.SanitizeNodeNameImpl` | `aemsite.DisallowedFileNameChars` | AEM サイトの出力ファイル名に、置き換える文字をアンダースコアで追加します。<br> **デフォルト値**: ``'<\>\`@$`` |

**親トピック：**[ ファイル名の設定](conf-file-names.md)
