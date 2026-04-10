---
title: Cloud Serviceのアセット処理の設定
description: Cloud Serviceのアセット処理を設定する方法を説明します
feature: Output Generation
role: Admin
level: Experienced
exl-id: 219a096f-4087-489f-9b3b-104864817198
hidefromtoc: true
source-git-commit: 564ee1731be2378744ffd2ed54a2fd423901a0b3
workflow-type: tm+mt
source-wordcount: '58'
ht-degree: 3%

---

# アセット処理機能の設定

アセット処理機能を設定するには、次の手順を実行します。

1. 設定ファイルを作成するには、[設定の上書き](../cs-install-guide/download-install-additional-config-override.md)の手順を使用します。

1. 設定ファイルで、次の（プロパティ）詳細を指定します。

   | PID | プロパティキー | プロパティの値 |
   |---|---|---|
   | `com.adobe.fmdita.config.ConfigManager` | `enable.asset.processing.scheduler` | **デフォルト値：** &quot;true&quot; |
