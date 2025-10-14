---
title: ネイティブ PDF | Cloud Services 用のPDFを公開するためのベース出力の場所の設定
description: Cloud Services 用のPDFを公開するためのベース出力場所の設定
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: ab6f1f09de2ef758d7f05ba0a49194ac9f387dea
workflow-type: tm+mt
source-wordcount: '79'
ht-degree: 2%

---

# Cloud Services の出力を公開するためのベース出力場所の設定

ベース出力の場所を設定するには、次の手順を実行します。

1. [&#x200B; 設定の上書き &#x200B;](../cs-install-guide/download-install-additional-config-override.md) の手順に従って、設定ファイルを作成します。

1. 設定ファイルで、次の（プロパティ）の詳細を指定して、ベース出力の場所を設定します。

   | PID | プロパティキー | プロパティの値 |
   |---|---|---|
   | `com.adobe.fmdita.config.ConfigManager` | `base.output.path` | **デフォルト値：** &quot;/content/dam/fmdita-outputs&quot; |
