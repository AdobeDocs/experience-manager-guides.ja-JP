---
title: UUID に基づく自動ファイル名の設定
description: UUID に基づいて自動ファイル名を設定する方法を説明します
exl-id: 2a599228-6d46-494f-a57a-96c3f30e073a
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '217'
ht-degree: 0%

---

# UUID に基づく自動ファイル名の設定 {#id205QG070D5Z}

デフォルトでは、トピックまたはマップファイルが作成されると、作成者にはファイル名を指定するオプションが与えられます。 作成者は、必要に応じて、自由にファイル名を割り当てることができます。 ただし、これにより不整合が生じる可能性があり、大規模なドキュメントシステムでは様々なファイル名を見ることができます。 管理者は、作成者がシステム内で作成するファイルに対してファイル名を割り当てることを制限できます。 新しいトピックまたはマップファイルごとに、UUID ベースのファイル名を自動的に割り当てるように選択できます。

システムで作成されるすべての新しいファイルに、UUID ベースのファイル名を自動的に割り当てるには、次の手順を実行します。

1. Adobe Experience Manager Web コンソール設定ページを開きます。

   設定ページにアクセスするデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. を検索して、 *com.adobe.fmdita.xmleditor.config.XmlEditorConfig* バンドル。

1. を選択します。 **UUID ベースのシステムファイル名を使用** オプション。

1. 「**保存**」をクリックします。


>[!NOTE]
>
> デフォルトでは、このオプションはオフになっています。 このオプションをオンにすると、作成者は新しいトピックまたはマップファイルの作成時にファイル名を指定するオプションを表示できません。 新しいトピックまたはマップファイルは、Assets UI と Web エディターから作成できます。

**親トピック：**[&#x200B;ファイル名を設定](conf-file-names.md)
