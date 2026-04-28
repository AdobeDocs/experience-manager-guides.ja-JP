---
title: マップコンソールからDITA マップの出力を生成する
description: AEM GuidesのマップコンソールからDITA マップの出力を生成します。 増分出力の生成と、出力タスクのステータスの表示、キャンセルおよび削除方法について説明します。
feature: Publishing
role: User
hide: true
exl-id: 5c2a8239-e6eb-482b-a11b-3732e667c880
source-git-commit: a70b3ce942b3e69445ad1d7ba6c8f7542e0ff176
workflow-type: tm+mt
source-wordcount: '1421'
ht-degree: 0%

---

# マップコンソールからDITA マップの出力を生成する {#id1825FG00UHT}

DITA マップの出力を生成するには、次の手順を実行します。

1. Assets UIで、パブリッシュするDITA マップファイルに移動してクリックします。

   DITA マップコンソールに、出力の生成に使用できる出力プリセットのリストが表示されます。

1. 出力の生成に使用する1つまたは複数の出力プリセットを選択します。

   ![](images/generate-multiple-outputs-uuid.png){width="800" align="left"}

   >[!NOTE]
   >
   > AEM サイト出力を生成する場合、公開プロセスでは、`.ditamap` ファイルで定義された構造を使用してAEM サイト構造を作成します。

1. 「生成」アイコンをクリックして、出力生成プロセスを開始します。


出力をクリックすると、出力生成リクエストの現在のステータスを表示できます。 詳細については、[出力生成タスクのステータスの表示](#viewing_output_history)を参照してください

>[!IMPORTANT]
>
> プリセットの出力生成プロセスがキュー内または処理中の場合、同じプリセットに対して別の出力生成タスクを開始することはできません。

Web エディターから、DITA マップ用に作成された1つ以上の出力プリセットのPDF出力を生成できます。 詳細については、[&#x200B; クイック生成パネルを使用してプリセットの出力を生成および表示する](web-editor-quick-generate-panel.md#)を参照してください。

1つ以上のトピックのAEM サイト出力や、Web エディターからDITA マップ全体を生成することもできます。 詳しくは、[Web エディターからの記事ベースの公開](web-editor-article-publishing.md#id218CK0U019I)を参照してください。

## 増分出力生成 {#generating_standalone_topic}

>[!NOTE]
>
> 増分出力の生成は、AEM サイト出力にのみ適用されます。 また、DITA マップまたはサブマップからDITA \（.dita/.xml\）トピックのみを再生成できます。 DITA マップ、サブマップ、トピックグループ、または`@processing-role="resource-only"`のトピックを選択した場合、再生成オプションは使用できません。

DITA マップ内の少数のトピックのみを更新し、更新されたトピックのみを公開するインスタンスが多数ある場合があります。 このような状況に対応するために、AEM Guidesでは増分出力を作成できます。 いくつかのトピックを更新した場合は、DITA マップ全体を再生成する必要はありません。 更新されたトピックのみを選択して再生成できます。

マップがチャンク化され、そのマップ内の1つのトピックを更新した場合は、更新されたトピックまたはコンテンツを出力に反映するために、マップ全体を再生成する必要があります。 出力の再生成オプションはトピックレベルでは取得されず、\（chunked\） マップレベルでのみ使用できます。 これは、親マップとすべてのサブマップに適用されます。

特定のトピックまたはトピックのグループの出力を再生成するには、次の手順を実行します。

>[!IMPORTANT]
>
> AEM サイト出力を再生成する場合、出力は、添付されたベースラインではなく、現在のバージョンのファイルを使用して作成されます。

1. Assets UIで、DITA マップファイルに移動してクリックします。

   DITA マップコンソールに、出力の生成に使用できる出力プリセットのリストが表示されます。

1. 「**トピック**」タブを選択します。

   DITA マップで使用可能なトピックのリストが表示されます。

1. 再生成するトピックを選択します。

   >[!NOTE]
   >
   > DITA マップに新しいトピックを追加した場合、ここから新しいトピックを生成することはできません。 最初に、新しく追加したトピックをDITA マップ公開機能を使用して公開する必要があります。

   ![](images/regenerate-topics.png){width="800" align="left"}

1. 「**再生成**」をクリックします。

   「選択したトピックを再生成」ページが表示されます。

1. 選択したトピックの再生成に使用する出力プリセットを選択します。

1. 「**再生成**」をクリックして、出力生成プロセスを開始します。


>[!IMPORTANT]
>
> トピックタイトルの名前を変更してトピックを再生成した場合、更新されたトピックタイトルはDITA マップの目次に反映されません。 目次のトピックタイトルを更新するには、DITA マップ全体を生成する必要があります。

出力をクリックすると、出力生成リクエストの現在のステータスを表示できます。 詳しくは、[出力生成タスクのステータスの表示](#viewing_output_history)を参照してください。

## 出力生成タスクのステータスの表示 {#viewing_output_history}

マップの出力生成タスクを開始するか、選択したトピックを再生成すると、AEM Guidesはこのタスクを出力生成キューに送信します。 このキューはリアルタイムで更新され、キュー内の各出力生成タスクのステータスが表示されます。

出力生成キューを表示するには、次の手順を実行します。

1. Assets UIで、出力生成ステータスを確認するマップファイルに移動してクリックします。

1. Click **Outputs**.

   ![](images/output-queued.png){width="800" align="left"}

   The Outputs page is divided into two parts:

   - **Queued Outputs:**

     Lists the outputs that are either waiting to be generated or are under generation process. The queued or in progress tasks are shown with a blue color icon before the preset name. You can also find the output generation setting or preset used for the queued task, the type, user who initiated the task, time since when the task is queued, and the current status.

     Click on the link to access the **Publish Dashboard** and view the current running status. A list of all active publishing tasks is available in the Publish Dashboard. The **Queued Outputs** and the **Publish Dashboard** link are displayed only when there are outputs that are either waiting to be generated or are under generation process. They don&#39;t appear when the output tasks have been completed.For more details on Publish Dashboard, see [Manage publish tasks using the Publish Dashboard](generate-output-publish-dashboard.md#).

   - **Generated Outputs**

     Lists the output tasks that have been completed. Again, the information shown here is similar to the Queued Outputs section with a few differences. You have new set of information in the form of output result icon and the output generation time.

     In this list, you could have tasks that have executed successfully, tasks that have executed with message, or failed tasks. The successful tasks are shown with green color icon, the tasks with a message have an orange color icon, and the failed tasks are shown with red color icon.

     For all the tasks, the publishing process creates a log file \(logs.txt\) that can be accessed by clicking the link in the Generated At column. For tasks that have failed or have messages, you can check the log file, which is explained in the section [View and check the log file](generate-output-basic-troubleshooting.md#id1822G0P0CHS).

     >[!NOTE]
     >
     > When you click on a link of the generated PDF output, you are asked to download the PDF. This is the default behavior in AEM 6.5 and 6.4.


## Cancel an output generation task {#id2061H100T5Z}

AEM Guides gives publishers a simple and easy way to cancel any ongoing publishing task. As a publisher, you can cancel an ongoing publishing task from the DITA map console or the [Publish Dashboard](generate-output-publish-dashboard.md#).

Perform the following steps to cancel an output generation task from the DITA map console:

1. In the Assets UI, navigate to and click on the map file for which you want to cancel an ongoing output generation task.

1. Click **Outputs**.

1. In the Queued Outputs list, hover the pointer over a task that you want to cancel.

1. Click the *Cancel This Job* icon.

   ![](images/cancel-publish-task-map-console.png){width="800" align="left"}

1. Click **Yes** on the Confirm Cancellation message prompt.

   ![](images/confirm-cancel-output-map-condole.png){width="800" align="left"}

   If the task has not yet started, the cancel command is executed on the task. For a task that is being canceled, the Status is set to Canceling.

   Once the task is successfully canceled, it is moved to the **Generated Outputs** list with a **Cancelled** status. When you hover over the canceled task, it shows the name of the user who has canceled the task. In the following screenshot, the *HTML5* task is canceled.

   ![](images/cancelled-output-task.png){width="800" align="left"}


## Delete an output task from DITA map console

When you generate multiple outputs for a DITA map, over a period of time the Generated Outputs list for such a map becomes very long. As a publisher you can clean the output history of any map file by removing the outdated tasks from the *Generated Outputs* list. Note that the output is not removed from the system, only the entry of the generated output is removed from the *Generated Outputs* list.

Perform the following steps to remove an output task from the Generated Output list:

1. In the Assets UI, navigate to and click on the map file from which you want to delete the tasks.

1. Click **Outputs**.

1. In the Generated Outputs list, hover the pointer over a task that you want to delete.

1. Click the delete icon.

   ![](images/delete-output-task.png){width="800" align="left"}

1. Click **Yes** on the Confirm Delete message prompt.

   The task is deleted from the Generated Outputs list.


**親トピック：**&#x200B;[&#x200B;出力生成](generate-output.md)
