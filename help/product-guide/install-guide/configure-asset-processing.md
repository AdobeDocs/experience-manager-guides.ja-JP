---
title: オンプレミス サービスのアセット処理の設定
description: オンプレミス サービスのアセット処理の設定
feature: Output Generation
role: Admin
level: Experienced
exl-id: 9d771bba-aa90-4726-a75f-1cb7b804a192
source-git-commit: ccaf2ead1a9a24ab822298c6b9ef6866a1c32e8c
workflow-type: tm+mt
source-wordcount: '68'
ht-degree: 2%

---

# アセット処理機能の設定

アセット処理機能を設定するには、次の手順を実行します。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.config.ConfigManager* バンドルを検索して選択します。

1. 必要に応じて設定`Enable Guides asset processing scheduled job`を構成します。 デフォルトでは、設定は有効になっています。

1. 「**保存**」を選択します。
