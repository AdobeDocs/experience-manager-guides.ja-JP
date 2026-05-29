---
title: 参照ストアのクリーンアップジョブの設定
description: 参照ストアのクリーンアップジョブの設定
feature: Output Generation
role: Admin
level: Experienced
exl-id: 58f98313-fc91-43b3-9553-aa5ab4946925
source-git-commit: 370a28a06a37b632873a79c9b83b8660a0221dd8
workflow-type: tm+mt
source-wordcount: '247'
ht-degree: 3%

---

# 参照ストアのクリーンアップの設定

参照ストアのクリーンアップ ジョブを設定し、`Guides BTree deletion`設定を管理して、システムを最適化し、ストレージをクリーンに保ちます。

## 参照ストアのクリーンアップ ジョブの設定

次のタブには、Experience Manager Guidesの設定に基づいて参照ストアのクリーンアップジョブを設定する手順が示されています。Cloud Serviceまたはオンプレミス。

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

1. cron式を更新して、参照ストアのクリーンアップスケジューラージョブの実行頻度を設定します。

1. 次に示すように、リファレンスストアのクリーンアップスケジューラーを設定します。

   ![](assets/btree-cleanup-config.png)

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
1. 設定を有効にする&#x200B;**ガイドのツリー削除が有効になりました** （btree.deletion.enabled）。

   ![](assets/btree-cleanup-setting.png)

1. 「**保存**」を選択します。

>[!ENDTABS]
