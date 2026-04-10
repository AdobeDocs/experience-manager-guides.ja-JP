---
title: クラウドサービスのB ツリーのクリーンアップジョブの設定
description: クラウドサービスのB ツリーのクリーンアップジョブの設定
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '235'
ht-degree: 3%

---

# B ツリークリーンアップの設定

B ツリーのクリーンアップ ジョブを設定し、`Guides BTree deletion`設定を管理して、システムを最適化し、ストレージをクリーンに保ちます。

## B ツリーのクリーンアップ ジョブの設定

次のタブには、Experience Manager Guidesの設定に基づいてB-tree クリーンアップジョブを設定する手順が示されています。Cloud Serviceまたはオンプレミス。

>[!BEGINTABS]

>[!TAB Cloud Service]

1. 設定ファイルを作成するには、[設定の上書き](download-install-config-override.md)の手順を使用します。

1. 設定ファイルで、次の（プロパティ）詳細を指定します。

   | PID | プロパティキー | プロパティの値 |
   |---|---|---|
   | `com.adobe.guides.utils.schedulers.GuidesBTreesCleanupSchedulerJob` | `cronExpression` | **デフォルト値：** &quot;0 0 0 0 * * ?&quot; |

>[!TAB  オンプレミス ]

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.guides.utils.schedulers.GuidesBTreesCleanupSchedulerJob* バンドルを検索して選択します。

1. Cron式を更新して、B ツリークリーンアップスケジューラージョブの実行頻度を設定します。

1. 次に示すように、B ツリークリーンアップスケジューラーを設定します。

   ![](assets/btree-cleanup-config.png){align="left"}

1. 「**保存**」を選択します。

>[!ENDTABS]

## ガイド B ツリー削除の有効化の設定

Experience Manager Guidesの設定に基づいて設定を有効にする手順は、Cloud Serviceまたはオンプレミスのタブで説明します。

>[!BEGINTABS]

>[!TAB Cloud Service]

1. 設定ファイルを作成するには、[設定の上書き](download-install-config-override.md)の手順を使用します。

1. 設定ファイルで、次の（プロパティ）詳細を指定します。

   | PID | プロパティキー | プロパティの値 |
   |---|---|---|
   | `com.adobe.fmdita.config.ConfigManager` | `btree.deletion.enabled` | **デフォルト値：** &quot;True&quot; |

>[!TAB  オンプレミス ]

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.config.ConfigManager* バンドルを検索して選択します。
1. 設定`Guides btree deletion enabled`を有効にします。

   ![](assets/btree-cleanup-setting.png){align="left"}

1. 「**保存**」を選択します。

>[!ENDTABS]