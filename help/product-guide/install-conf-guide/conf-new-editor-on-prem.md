---
title: 新しいエディターを設定
description: 新規エディターを有効または無効にする方法を説明します
feature: Configuration
role: Admin
level: Experienced
source-git-commit: 8d231bdbf00adb354bc31616e880495b00a3959c
workflow-type: tm+mt
source-wordcount: '79'
ht-degree: 2%

---

# オンプレミス用に新しいエディターを設定

>[!IMPORTANT]
>
> ランタイム環境でシステム設定を手動で適用する代わりに、コードを使用してシステム設定をデプロイします。

次の手順では、オンプレミス環境で新しいエディターを有効にする方法について説明します。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.config.ConfigManager** バンドルを検索して選択します。

1. 設定&#x200B;**エディターを有効にする2.0** （`enable.markup.editor`）を有効にします。

1. 「**保存**」を選択します。

