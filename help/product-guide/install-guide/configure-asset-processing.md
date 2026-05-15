---
title: オンプレミス サービスのアセット処理の設定
description: オンプレミス サービスのアセット処理の設定
feature: Output Generation
role: Admin
level: Experienced
exl-id: 9d771bba-aa90-4726-a75f-1cb7b804a192
TQID: https://experienceleague.adobe.com/GDyCE4ziLqhXXJTgFuv-uVf-2W86-OSNeMCMWYT35wg
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 68
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
