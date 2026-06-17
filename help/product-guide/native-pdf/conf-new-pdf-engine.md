---
title: 新しいPDF エンジンを有効にする
description: Experience Manager Guidesで新しいPDF エンジンを有効にする方法について説明します
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: f3f30400f776f746427e257e2c937ff3413aa9ac
workflow-type: tm+mt
source-wordcount: '74'
ht-degree: 2%

---


# ネイティブ PDF エンジン v2の設定

ネイティブ PDF用の新しい公開エンジン、つまり&#x200B;_ネイティブ PDF エンジン v2_&#x200B;では、_ネイティブ PDF エンジン v1_&#x200B;の問題に関する更新されたPDF レンダリング機能と修正が提供されます。

設定ファイルを作成するには、[設定の上書き](../install-conf-guide/download-install-config-override.md)の手順を使用します。 設定ファイルで、次の（プロパティ）詳細を指定します。

| PID | プロパティキー | プロパティの値 |
|-----|--------------|----------------|
| `com.adobe.fmdita.publish.config.GuidesPublishConfiguratorService` | `guides.publish.config` | `{"PDF_ENGINE": "v2"}` <br> デフォルト値：`v1` |