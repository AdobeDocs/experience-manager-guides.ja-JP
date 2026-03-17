---
title: Cloud Service 用の DITA Assets レプリケーションの設定
description: Cloud Service 用に dita アセットレプリケーションを設定する方法を説明します
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 356ea6edd5e688fb1f77e737c705ed0bd4d2e7f0
workflow-type: tm+mt
source-wordcount: '60'
ht-degree: 3%

---

# DITA アセットレプリケーションの設定

アセット処理機能を設定するには、次の手順を実行します。

1. [ 設定の上書き ](../cs-install-guide/download-install-additional-config-override.md) の手順に従って、設定ファイルを作成します。

1. 設定ファイルで、次の（プロパティ）の詳細を指定します。

   | PID | プロパティキー | プロパティの値 |
   |---|---|---|
   | `com.adobe.fmdita.config.ConfigManager` | `publish.replicate` | **デフォルト値：** &quot;true&quot; |
