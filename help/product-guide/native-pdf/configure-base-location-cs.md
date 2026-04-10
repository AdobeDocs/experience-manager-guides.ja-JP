---
title: Native PDF | PDF for Cloud サービスを公開するための基本出力場所の設定
description: PDF for Cloud サービスを公開するための基本出力場所の設定
feature: Output Generation
role: Admin
level: Experienced
exl-id: d79085d6-938a-4e80-84a2-03562e6b76e0
hidefromtoc: true
source-git-commit: 564ee1731be2378744ffd2ed54a2fd423901a0b3
workflow-type: tm+mt
source-wordcount: '79'
ht-degree: 2%

---

# クラウドサービスの出力を公開するための基本出力場所の設定

ベース出力の場所を設定するには、次の手順を実行します。

1. 設定ファイルを作成するには、[設定の上書き](../cs-install-guide/download-install-additional-config-override.md)の手順を使用します。

1. 設定ファイルで、次の（プロパティ）詳細を指定して、ベース出力の場所を設定します。

   | PID | プロパティキー | プロパティの値 |
   |---|---|---|
   | `com.adobe.fmdita.config.ConfigManager` | `base.output.path` | **デフォルト値：** &quot;/content/dam/fmdita-outputs&quot; |
