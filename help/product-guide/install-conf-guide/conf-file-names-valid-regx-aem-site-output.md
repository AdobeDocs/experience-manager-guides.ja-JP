---
title: AEM サイト出力の有効なファイル名を設定する
description: AEM サイト出力の有効なファイル名を設定する方法を説明します
feature: Filename Configuration
role: Admin
level: Experienced
exl-id: b2bc5159-2144-4683-970d-738949ac9662
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
feature_v2:
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
    internal-label: Configuration
subfeature_v2:
  - id: ccd46b93-df7f-4458-ba4c-90a3562d9ab0
    internal-label: Filename configuration
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '219'
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
