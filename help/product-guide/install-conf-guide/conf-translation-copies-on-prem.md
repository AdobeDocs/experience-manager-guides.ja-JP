---
title: オンプレミスの翻訳ワークフローでの宛先コピーの初期化の設定
description: オンプレミスの翻訳ワークフローで、宛先コピーの初期化を有効または無効にする方法を説明します
feature: Configuration
role: Admin
level: Experienced
source-git-commit: 8d231bdbf00adb354bc31616e880495b00a3959c
workflow-type: tm+mt
source-wordcount: '111'
ht-degree: 1%

---

# オンプレミスの翻訳ワークフローでの宛先コピーの初期化の設定

次の手順では、オンプレミス環境の翻訳ワークフローで宛先コピーの初期化を有効にする方法を説明します。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.config.ConfigManager** バンドルを検索して選択します。

1. 必要に応じて、ソースコンテンツ **（translation.workflow.propagate.source.content）を使用して宛先言語コピーを初期化する設定を有効または無効にします。**&#x200B;この設定は、従来の翻訳ワークフローが無効になっている場合にのみ適用されます。

1. 「**保存**」を選択します。
