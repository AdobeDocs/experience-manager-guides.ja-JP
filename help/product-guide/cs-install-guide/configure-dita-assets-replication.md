---
title: DITA Assets Replication for Cloud Serviceの設定
description: Cloud Serviceのdita アセットレプリケーションを設定する方法について説明します
feature: Output Generation
role: Admin
level: Experienced
exl-id: 1eafc6b2-2b85-486a-bb2c-0038fae1fef9
hidefromtoc: true
source-git-commit: 564ee1731be2378744ffd2ed54a2fd423901a0b3
workflow-type: tm+mt
source-wordcount: '60'
ht-degree: 3%

---

# DITA アセットレプリケーションの設定

アセット処理機能を設定するには、次の手順を実行します。

1. 設定ファイルを作成するには、[設定の上書き](../cs-install-guide/download-install-additional-config-override.md)の手順を使用します。

1. 設定ファイルで、次の（プロパティ）詳細を指定します。

   | PID | プロパティキー | プロパティの値 |
   |---|---|---|
   | `com.adobe.fmdita.config.ConfigManager` | `publish.replicate` | **デフォルト値：** &quot;true&quot; |
