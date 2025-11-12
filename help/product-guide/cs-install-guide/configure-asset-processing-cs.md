---
title: Cloud Service のアセット処理の設定
description: Cloud Service のアセット処理を設定する方法を説明します
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 5b29b2b5f725b5d9a2029fb232e62f387a5338fd
workflow-type: tm+mt
source-wordcount: '58'
ht-degree: 3%

---

# アセット処理機能の設定

アセット処理機能を設定するには、次の手順を実行します。

1. [&#x200B; 設定の上書き &#x200B;](../cs-install-guide/download-install-additional-config-override.md) の手順に従って、設定ファイルを作成します。

1. 設定ファイルで、次の（プロパティ）の詳細を指定します。

   | PID | プロパティキー | プロパティの値 |
   |---|---|---|
   | `com.adobe.fmdita.config.ConfigManager` | `enable.asset.processing.scheduler` | **デフォルト値：** &quot;true&quot; |
