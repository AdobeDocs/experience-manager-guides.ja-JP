---
title: オンプレミスサービス用の DITA Assets レプリケーションの設定
description: オンプレミスサービス用に dita アセットレプリケーションを設定する方法を説明します
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 356ea6edd5e688fb1f77e737c705ed0bd4d2e7f0
workflow-type: tm+mt
source-wordcount: '71'
ht-degree: 2%

---

# DITA アセットレプリケーションの設定

アセット処理機能を設定するには、次の手順を実行します。

1. Adobe Experience Manager Web コンソール設定ページを開きます。

   設定ページにアクセスするためのデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.config.ConfigManager* バンドルを検索して選択します。

1. 要件に応じて設定 `Replicate DITA assets` を設定します。 デフォルトでは、この設定は有効になっています。


   ![](assets/dita-assets-replication.png){width="350" align="left"}


1. 「**保存**」を選択します。
