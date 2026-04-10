---
title: Cloud Serviceのアセット処理の設定
description: Cloud Serviceのアセット処理を設定する方法を説明します
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '113'
ht-degree: 3%

---

# アセット処理機能の設定

Experience Manager Guidesの設定に基づいて、Cloud Serviceまたはオンプレミスのアセット処理機能を設定する手順を次のタブに示します。

>[!BEGINTABS]

>[!TAB Cloud Service]

1. 設定ファイルを作成するには、[設定の上書き](download-install-config-override.md)の手順を使用します。

1. 設定ファイルで、次の（プロパティ）詳細を指定します。

   | PID | プロパティキー | プロパティの値 |
   |---|---|---|
   | `com.adobe.fmdita.config.ConfigManager` | `enable.asset.processing.scheduler` | **デフォルト値：** &quot;true&quot; |

>[!TAB  オンプレミス ]

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.config.ConfigManager* バンドルを検索して選択します。

1. 必要に応じて設定`Enable Guides asset processing scheduled job`を構成します。 デフォルトでは、設定は有効になっています。

1. 「**保存**」を選択します。

>[!ENDTABS]