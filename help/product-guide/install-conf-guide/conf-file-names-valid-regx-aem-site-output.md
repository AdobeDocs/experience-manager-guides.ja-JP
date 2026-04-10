---
title: AEM サイト出力の有効なファイル名を設定する
description: AEM サイト出力の有効なファイル名を設定する方法を説明します
feature: Filename Configuration
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '217'
ht-degree: 0%

---

# AEM サイト出力の有効なファイル名を設定する {#id214GK0X0KXA}

DITA トピックで許可される有効なファイル名文字のリストと同様に、AEM サイト出力用に有効なファイル名文字のリストを設定することもできます。 URLで許可されていない既知の文字の一部：``'<>`@$``。 これらの文字は、AEM サイト出力ファイル名の生成中に見つかった場合に、アンダースコア「`_`」に自動変換するように設定されています。

次のタブでは、Experience Manager Guidesの設定に基づいてAEM サイト出力に有効なファイル名を設定する手順を示します。Cloud Serviceまたはオンプレミスです。

>[!BEGINTABS]

>[!TAB Cloud Service]

設定ファイルを作成するには、[設定の上書き](download-install-config-override.md#)の手順を使用します。 コンフィギュレーションファイルで、次の\（property\）詳細を指定して、AEM サイト出力に有効な文字を設定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.common.SanitizeNodeNameImpl` | `aemsite.DisallowedFileNameChars` | AEM サイトの出力ファイル名に、置き換える文字をアンダースコアで追加します。<br> **デフォルト値**: ``'<\>\`@$`` |

>[!TAB  オンプレミス ]

AEM サイト出力で有効な文字を設定できる設定は、`com.adobe.fmdita.common.SanitizeNodeNameImpl` バンドルに存在します。 **AEM サイトの出力ファイル名にアンダースコアで置き換える文字を含めるには、「AEM Sites**&#x200B;への公開時に許可されていない文字セット」設定を設定します。

>[!ENDTABS]
