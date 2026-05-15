---
title: UUIDに基づく自動ファイル名の設定
description: UUIDに基づいて自動ファイル名を設定する方法を説明します
exl-id: bdbdf119-b928-4ed2-bab3-d99370da8aa9
feature: Filename Configuration
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/HxTJaPGbwH31vitQ-Cu6wPyCuzZSWDXtq6xMY4hXEAI
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2:
  - id: ccd46b93-df7f-4458-ba4c-90a3562d9ab0
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 197
ht-degree: 1%

---

# UUIDに基づく自動ファイル名の設定 {#id205QG070D5Z}

デフォルトでは、トピックまたはマップファイルが作成されると、作成者にはファイル名も指定するオプションが提供されます。 作成者は、必要に応じてファイル名を自由に割り当てることができます。 ただし、これにより一貫性が損なわれる可能性があり、大規模なドキュメントシステムでは幅広いファイル名を使用できます。 管理者は、作成者がシステムで作成するファイルにファイル名を割り当てることを制限できます。 新しいトピックまたはマップファイルごとに、UUID ベースのファイル名を自動的に割り当てることができます。

設定ファイルを作成するには、[設定の上書き](download-install-additional-config-override.md#)の手順を使用します。 設定ファイルで、UUIDに基づいて自動ファイル名を設定するための次の\（property\）詳細を指定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.uniquefilenames` | ブール値\（true/false\）。<br> **デフォルト値**: false |

>[!NOTE]
>
> このオプションをオンにすると、新しいトピックまたはマップファイルの作成時に、ファイル名を指定するオプションが作成者に表示されなくなります。 新しいトピックファイルまたはマップファイルは、Assets UIとWeb エディターから作成できます。

**親トピック：**&#x200B;[&#x200B; ファイル名の設定](conf-file-names.md)
