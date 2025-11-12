---
title: クラウドサービス用の B ツリーのクリーンアップジョブの設定
description: クラウドサービス用の B ツリーのクリーンアップジョブの設定
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 5b29b2b5f725b5d9a2029fb232e62f387a5338fd
workflow-type: tm+mt
source-wordcount: '125'
ht-degree: 3%

---

# B-tree クリーンアップの設定

B-tree クリーンアップジョブを設定し、`Guides BTree deletion` 設定を管理して、システムの最適化とストレージのクリーンアップを維持します。

## B ツリークリーンアップジョブの設定

B ツリーのクリーンアップジョブを設定するには、次の手順を実行します。

1. [ 設定の上書き ](../cs-install-guide/download-install-additional-config-override.md) の手順に従って、設定ファイルを作成します。

1. 設定ファイルで、次の（プロパティ）の詳細を指定します。

   | PID | プロパティキー | プロパティの値 |
   |---|---|---|
   | `com.adobe.guides.utils.schedulers.GuidesBTreesCleanupSchedulerJob` | `cronExpression` | **デフォルト値：** &quot;0 0 0 * * ?&quot; |


## ガイド B ツリー削除を有効にする設定

この設定を有効にするには、以下の手順を実行します。

1. [ 設定の上書き ](../cs-install-guide/download-install-additional-config-override.md) の手順に従って、設定ファイルを作成します。

1. 設定ファイルで、次の（プロパティ）の詳細を指定します。

   | PID | プロパティキー | プロパティの値 |
   |---|---|---|
   | `com.adobe.fmdita.config.ConfigManager` | `btree.deletion.enabled` | **デフォルト値：** &quot;True&quot; |