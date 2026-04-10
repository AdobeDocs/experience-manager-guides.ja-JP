---
title: オンプレミスサービス用のDITA Assets レプリケーションの設定
description: オンプレミス サービス用にdita アセット レプリケーションを設定する方法について説明します
feature: Output Generation
role: Admin
level: Experienced
exl-id: 49fd9dfe-e1a5-4388-abbd-ec5d45669b45
hidefromtoc: true
source-git-commit: 3aadc59f5034828cf319992b7acb32d5a88eaf93
workflow-type: tm+mt
source-wordcount: '71'
ht-degree: 2%

---

# DITA アセットレプリケーションの設定

アセット処理機能を設定するには、次の手順を実行します。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.config.ConfigManager* バンドルを検索して選択します。

1. 必要に応じて設定`Replicate DITA assets`を構成します。 デフォルトでは、設定は有効になっています。


   ![](assets/dita-assets-replication.png){width="350" align="left"}


1. 「**保存**」を選択します。
