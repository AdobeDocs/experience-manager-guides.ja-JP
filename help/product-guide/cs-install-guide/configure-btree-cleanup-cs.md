---
title: クラウドサービスのB ツリーのクリーンアップジョブの設定
description: クラウドサービスのB ツリーのクリーンアップジョブの設定
feature: Output Generation
role: Admin
level: Experienced
exl-id: de464e92-f17b-4c99-98f2-fdba8d214129
hidefromtoc: true
source-git-commit: 564ee1731be2378744ffd2ed54a2fd423901a0b3
workflow-type: tm+mt
source-wordcount: '125'
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
