---
title: オンプレミスサービス用の B ツリーのクリーンアップジョブの設定
description: オンプレミスサービス用の B ツリーのクリーンアップジョブの設定
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: e1b332b100cc8e3937557e4617d66352c1a0dc3c
workflow-type: tm+mt
source-wordcount: '145'
ht-degree: 2%

---

# B-tree クリーンアップの設定

B-tree クリーンアップジョブを設定し、`Guides B-tree deletion` 設定を管理して、システムの最適化とストレージのクリーンアップを維持します。

## B ツリークリーンアップジョブの設定

B ツリーのクリーンアップジョブを設定するには、次の手順を実行します。

1. Adobe Experience Manager Web コンソール設定ページを開きます。

   設定ページにアクセスするためのデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.guides.utils.schedulers.GuidesBTreesCleanupSchedulerJob* バンドルを検索して選択します。

1. Cron 式を更新して、B-tree クリーンアップスケジューラーのジョブ実行頻度を設定します。

1. 以下に示すように、B-tree のクリーンアップ・スケジューラを構成します。

   ![](assets/btree-cleanup-config.png){align="left"}

1. 「**保存**」を選択します。


## ガイド B ツリー削除を有効にする設定

この設定を有効にするには、以下の手順を実行します。

1. Adobe Experience Manager Web コンソール設定ページを開きます。

   設定ページにアクセスするためのデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.config.ConfigManager* バンドルを検索して選択します。
1. 設定 `Guides btree deletion enabled` を有効にします。

   ![](assets/btree-cleanup-setting.png){align="left"}

1. 「**保存**」を選択します。

