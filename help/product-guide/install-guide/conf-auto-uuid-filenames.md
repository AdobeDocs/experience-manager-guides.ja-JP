---
title: UUID に基づく自動ファイル名の設定
description: UUID に基づいて自動ファイル名を設定する方法を学ぶ
exl-id: 2a599228-6d46-494f-a57a-96c3f30e073a
feature: Filename Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '217'
ht-degree: 0%

---

# UUID に基づく自動ファイル名の設定 {#id205QG070D5Z}

デフォルトでは、トピックまたはマップファイルを作成すると、作成者にファイル名も指定するオプションが与えられます。 作成者は、必要に応じてファイル名を自由に割り当てることができます。 ただし、これにより不整合が生じる可能性があり、大規模なドキュメントシステムでは様々なファイル名が表示されます。 管理者は、システム内で作成するファイルのファイル名を作成者が割り当てることを制限できます。 新しいトピック ファイルまたはマップ ファイルごとに、UUID ベースのファイル名を自動的に割り当てることができます。

次の手順を実行して、システムで作成されるすべての新しいファイルに UUID ベースのファイル名を自動的に割り当てます。

1. Adobe Experience Manager Web コンソール設定ページを開きます。

   設定ページにアクセスするためのデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.xmleditor.config.XmlEditorConfig* バンドルを検索してクリックします。

1. 「**UUID ベースのシステムファイル名を使用**」オプションを選択します。

1. 「**保存**」をクリックします。


>[!NOTE]
>
> デフォルトでは、このオプションはオフになっています。 このオプションをオンにすると、作成者には、新しいトピックまたはマップ ファイルの作成時にファイル名を指定するオプションが表示されません。 新しいトピックまたはマップファイルは、Assets UI と web エディターから作成できます。

**親トピック：**[ ファイル名の設定 ](conf-file-names.md)
