---
title: オンプレミスサービスのアセット処理の設定
description: オンプレミスサービスのアセット処理の設定
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: e1b332b100cc8e3937557e4617d66352c1a0dc3c
workflow-type: tm+mt
source-wordcount: '66'
ht-degree: 3%

---

# アセット処理機能の設定

アセット処理機能を設定するには、次の手順を実行します。

1. Adobe Experience Manager Web コンソール設定ページを開きます。

   設定ページにアクセスするためのデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.config.ConfigManager* バンドルを検索して選択します。

1. 要件に応じて設定 `Enable Guides asset processing scheduled job` を設定します。 デフォルトでは、この設定は有効になっています。

1. 「**保存**」を選択します。
