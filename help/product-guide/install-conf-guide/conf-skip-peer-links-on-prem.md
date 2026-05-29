---
title: オンプレミスのベースライン V1のピアリンクのスキップを設定する
description: オンプレミスのベースライン V1のピアリンクのスキップを有効または無効にする方法を説明します
feature: Configuration
role: Admin
level: Experienced
source-git-commit: 8d231bdbf00adb354bc31616e880495b00a3959c
workflow-type: tm+mt
source-wordcount: '101'
ht-degree: 1%

---

# オンプレミスの古いベースラインのピアリンクのスキップを設定する

次の手順では、オンプレミス環境で古いベースラインのピアリンクのスキップを有効にする方法を説明します。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.config.ConfigManager** バンドルを検索して選択します。

1. ベースライン V1 **（guides.baseline.v1.skip.peer.links）の設定** ピアリンクをスキップする設定を有効にします。 デフォルトでは、この設定は無効になっています。

1. 「**保存**」を選択します。
