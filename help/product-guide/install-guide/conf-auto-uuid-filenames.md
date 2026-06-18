---
title: UUIDに基づく自動ファイル名の設定
description: UUIDに基づいて自動ファイル名を設定する方法を説明します
exl-id: 2a599228-6d46-494f-a57a-96c3f30e073a
feature: Filename Configuration
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/2oXpOlXt4gZ3GELX7SmwPJoWJYM71f0cZFy2--M6AYM
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2:
  - id: ccd46b93-df7f-4458-ba4c-90a3562d9ab0
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: cc73b81787a3c3dbe8390d93e558064327e59965
workflow-type: tm+mt
source-wordcount: 220
ht-degree: 0%

---

# UUIDに基づく自動ファイル名の設定 {#id205QG070D5Z}

デフォルトでは、トピックまたはマップファイルが作成されると、作成者にはファイル名も指定するオプションが提供されます。 作成者は、必要に応じてファイル名を自由に割り当てることができます。 ただし、これにより一貫性が損なわれる可能性があり、大規模なドキュメントシステムでは幅広いファイル名を使用できます。 管理者は、作成者がシステムで作成するファイルにファイル名を割り当てることを制限できます。 新しいトピックまたはマップファイルごとに、UUID ベースのファイル名を自動的に割り当てることができます。

次の手順を実行して、システムで作成されたすべての新規ファイルにUUID ベースのファイル名を自動的に割り当てます。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.xmleditor.config.XmlEditorConfig* バンドルを検索してクリックします。

1. 「**UUID ベースのシステム ファイル名を使用**」オプションを選択します。

1. 「**保存**」をクリックします。


>[!NOTE]
>
> デフォルトでは、このオプションはオフになっています。 このオプションをオンにすると、新しいトピックまたはマップファイルの作成時に、ファイル名を指定するオプションが作成者に表示されなくなります。 新しいトピックファイルまたはマップファイルは、Assets UIとエディターから作成できます。

**親トピック：**&#x200B;[&#x200B; ファイル名の設定](conf-file-names.md)
