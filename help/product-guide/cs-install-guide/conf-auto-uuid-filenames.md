---
title: UUID に基づく自動ファイル名の設定
description: UUID に基づいて自動ファイル名を設定する方法を学ぶ
exl-id: bdbdf119-b928-4ed2-bab3-d99370da8aa9
feature: Filename Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '193'
ht-degree: 1%

---

# UUID に基づく自動ファイル名の設定 {#id205QG070D5Z}

デフォルトでは、トピックまたはマップファイルを作成すると、作成者にファイル名も指定するオプションが与えられます。 作成者は、必要に応じてファイル名を自由に割り当てることができます。 ただし、これにより不整合が生じる可能性があり、大規模なドキュメントシステムでは様々なファイル名が表示されます。 管理者は、システム内で作成するファイルのファイル名を作成者が割り当てることを制限できます。 新しいトピック ファイルまたはマップ ファイルごとに、UUID ベースのファイル名を自動的に割り当てることができます。

[&#x200B; 設定の上書き &#x200B;](download-install-additional-config-override.md#) の手順に従って、設定ファイルを作成します。 設定ファイルで、次の\（property\）の詳細を指定して、UUID に基づいた自動ファイル名を設定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.uniquefilenames` | ブール値\（true/false\）.<br> **デフォルト値**:false |

>[!NOTE]
>
> このオプションをオンにすると、作成者には、新しいトピックまたはマップ ファイルの作成時にファイル名を指定するオプションが表示されません。 新しいトピックまたはマップファイルは、Assets UI と web エディターから作成できます。

**親トピック：**&#x200B;[&#x200B; ファイル名の設定 &#x200B;](conf-file-names.md)
