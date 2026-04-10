---
title: DITA Assets レプリケーションの設定
description: dita アセットレプリケーションの設定方法について説明します
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 453da51a42984b912547570f2e1de70806b41171
workflow-type: tm+mt
source-wordcount: '109'
ht-degree: 3%

---

# DITA アセットレプリケーションの設定

次のタブには、Experience Manager Guidesの設定に基づいてDITA アセットレプリケーション機能を設定する手順が示されています。Cloud Serviceまたはオンプレミス。

>[!BEGINTABS]

>[!TAB Cloud Service]

1. 設定ファイルを作成するには、[設定の上書き](../install-conf-guide/download-install-config-override.md)の手順を使用します。

1. 設定ファイルで、次の（プロパティ）詳細を指定します。

   | PID | プロパティキー | プロパティの値 |
   |---|---|---|
   | `com.adobe.fmdita.config.ConfigManager` | `publish.replicate` | **デフォルト値：** &quot;true&quot; |

>[!TAB  オンプレミス ]

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.config.ConfigManager* バンドルを検索して選択します。

1. 必要に応じて設定`Replicate DITA assets`を構成します。 デフォルトでは、設定は有効になっています。


   ![](assets/dita-assets-replication.png){width="350" align="left"}


1. 「**保存**」を選択します。

>[!ENDTABS]
