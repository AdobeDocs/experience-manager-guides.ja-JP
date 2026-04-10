---
title: UUIDに基づく自動ファイル名の設定
description: UUIDに基づいて自動ファイル名を設定する方法を説明します
exl-id: 2a599228-6d46-494f-a57a-96c3f30e073a
feature: Filename Configuration
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 3aadc59f5034828cf319992b7acb32d5a88eaf93
workflow-type: tm+mt
source-wordcount: '217'
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
> デフォルトでは、このオプションはオフになっています。 このオプションをオンにすると、新しいトピックまたはマップファイルの作成時に、ファイル名を指定するオプションが作成者に表示されなくなります。 新しいトピックファイルまたはマップファイルは、Assets UIとWeb エディターから作成できます。

**親トピック：**&#x200B;[&#x200B; ファイル名の設定](conf-file-names.md)
