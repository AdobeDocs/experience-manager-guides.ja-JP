---
title: クラウドサービスのB ツリーのクリーンアップジョブの設定
description: クラウドサービスのB ツリーのクリーンアップジョブの設定
feature: Output Generation
role: Admin
level: Experienced
exl-id: de464e92-f17b-4c99-98f2-fdba8d214129
TQID: https://experienceleague.adobe.com/-n4Winzqo-HNb2FDH6RI223UT9uvuOc8-OT7mgXjblc
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 132
ht-degree: 3%

---

# B ツリークリーンアップの設定

B ツリーのクリーンアップ ジョブを設定し、`Guides BTree deletion`設定を管理して、システムを最適化し、ストレージをクリーンに保ちます。

## B ツリーのクリーンアップ ジョブの設定

B ツリーのクリーンアップジョブを設定するには、次の手順を実行します。

1. 設定ファイルを作成するには、[設定の上書き](../cs-install-guide/download-install-additional-config-override.md)の手順を使用します。

1. 設定ファイルで、次の（プロパティ）詳細を指定します。

   | PID | プロパティキー | プロパティの値 |
   |---|---|---|
   | `com.adobe.guides.utils.schedulers.GuidesBTreesCleanupSchedulerJob` | `cronExpression` | **デフォルト値：** &quot;0 0 0 0 * * ?&quot; |


## ガイド B ツリー削除の有効化の設定

設定を有効にするには、次の手順を実行します。

1. 設定ファイルを作成するには、[設定の上書き](../cs-install-guide/download-install-additional-config-override.md)の手順を使用します。

1. 設定ファイルで、次の（プロパティ）詳細を指定します。

   | PID | プロパティキー | プロパティの値 |
   |---|---|---|
   | `com.adobe.fmdita.config.ConfigManager` | `btree.deletion.enabled` | **デフォルト値：** &quot;True&quot; |
