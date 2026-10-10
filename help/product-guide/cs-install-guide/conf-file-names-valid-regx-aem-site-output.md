---
title: AEM サイト出力の有効なファイル名を設定する
description: AEM サイト出力の有効なファイル名を設定する方法を説明します
exl-id: 05215bec-653b-4563-83c6-a1bb16200469
feature: Filename Configuration
role: Admin
level: Experienced
TQID: 'https://experienceleague.adobe.com/hhc9Q8A-Eq3e8PAHHDXf1jXf8qVb-p4sU3Cum53ra9M'
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
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
source-wordcount: '145'
ht-degree: 1%
---
# AEM サイト出力の有効なファイル名を設定する {#id214GK0X0KXA}

DITA トピックで許可される有効なファイル名文字のリストと同様に、AEM サイト出力用に有効なファイル名文字のリストを設定することもできます。 URLで許可されていない既知の文字の一部：``'<>`@$``。 これらの文字は、AEM サイト出力ファイル名の生成中に見つかった場合に、アンダースコア「`_`」に自動変換するように設定されています。

設定ファイルを作成するには、[設定の上書き](download-install-additional-config-override.md#)の手順を使用します。 コンフィギュレーションファイルで、次の\（property\）詳細を指定して、AEM サイト出力に有効な文字を設定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.common.SanitizeNodeNameImpl` | `aemsite.DisallowedFileNameChars` | AEM サイトの出力ファイル名に、置き換える文字をアンダースコアで追加します。<br> **デフォルト値**: ``'<\>\`@$`` |

**親トピック：**[ ファイル名の設定](conf-file-names.md)
