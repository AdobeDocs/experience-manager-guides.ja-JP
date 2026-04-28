---
title: 公開ダッシュボードを使用した公開タスクの管理
description: AEM Guidesの公開ダッシュボードを使用して、公開タスクを管理できます。 公開ダッシュボードにアクセスし、公開タスクをキャンセルする方法について説明します。
feature: Publishing
role: User
hide: true
exl-id: 9d311979-a7d7-47f5-945c-520eda99798f
source-git-commit: a70b3ce942b3e69445ad1d7ba6c8f7542e0ff176
workflow-type: tm+mt
source-wordcount: '523'
ht-degree: 0%

---

# 公開ダッシュボードを使用した公開タスクの管理 {#id205CC08305Z}

システム上で多数の公開タスクを実行している場合、各DITA マップを個別にチェックして公開タスクを監視することは事実上不可能になります。 AEM Guidesを使用すると、管理者とパブリッシャーは、システム内で実行されているすべての公開タスクを一元的に把握できます。 アクティブなすべての公開タスクのリストは、公開ダッシュボードで使用できます。

公開ダッシュボードには、現在システムで実行されているすべての公開タスクの概要が表示されます。

![](images/publish-dashboard.png){width="800" align="left"}

公開ダッシュボードには、次の詳細が含まれます。

- **マップタイトル** – 現在公開中または公開キューにあるマップファイルのタイトル。

- **ファイル名** - DITA マップのファイル名。

- **出力プリセット** – 出力の生成に使用される出力プリセットの名前。

- **開始者** – 公開タスクを開始したユーザーのユーザー名。

- **開始日** – 公開タスクが開始された日時。

- **経過時間** – 公開タスクがシステムで実行されてからの時間。

- **アイコンを削除** – 公開タスクをキャンセルまたは終了します。

公開ダッシュボードの左側のパネルには、次のフィルターオプションがあります。

- **出力プリセット** – 現在アクティブな公開タスクを表示する1つ以上の出力プリセットを選択します。 次のスクリーンショットでは、公開タスクがフィルタリングされ、AEM サイト出力プリセットを使用するタスクのみが表示されます。

  ![](images/publish-dashboard-preset-filter.png){width="800" align="left"}

- **開始者** – 選択したユーザーが開始した公開タスクを表示するには、リストからユーザー名を選択します。

- **マップ** - リストからマップファイルを選択して、選択したマップで実行されている公開タスクを表示します。

## 公開ダッシュボードへのアクセス {#id205CC100DY4}

公開ダッシュボードにアクセスするには、次の手順を実行します。

>[!NOTE]
>
> パブリッシュダッシュボードにアクセスできるのは、管理者またはパブリッシャーのみです。

1. 上部のAdobe Experience Manager リンクをクリックし、**ツール**&#x200B;を選択します。

1. Select **Guides** from the list of tools.

1. 「**公開ダッシュボード**」タイルをクリックします。

   公開ダッシュボードが開き、システム内のすべてのアクティブな公開タスクのリストが表示されます。

   If you click on the File Name link, the DITA map console of the selected map is shown.

   ![](images/publish-dashboard-click-filename-link.png){width="800" align="left"}


>[!NOTE]
>
> マップダッシュボードから出力を生成する際に、「出力」タブから「公開」ダッシュボードにアクセスすることもできます。 詳細については、[出力生成タスクのステータスの表示](generate-output-for-a-dita-map.md#viewing_output_history)を参照してください。

## Cancel a publishing task

パブリッシュダッシュボードから出力生成タスクをキャンセルするには、次の手順を実行します。

1. [公開ダッシュボードにアクセス ](#id205CC100DY4)。

1. From the list of active publishing tasks, click the delete icon of a task that you want to cancel.

   ![](images/publish-dashboard-cancel-task.png){width="800" align="left"}

1. Click **Yes** on the Confirm Cancellation message prompt.

   キャンセル コマンドは受け入れられ、タスクがアクティブな状態のままである限り、キャンセルが試行されます。 Once the task is successfully terminated, it is removed from the currently active task list. タスクのステータスも、DITA マップコンソールで「キャンセル済み」として更新されます。 次のスクリーンショットでは、*HTML5* タスクが公開ダッシュボードからキャンセルされ、そのステータスもDITA マップコンソールで変更されています。

   ![](images/cancelled-output-task.png){width="800" align="left"}


**親トピック：**[&#x200B;出力生成](generate-output.md)
