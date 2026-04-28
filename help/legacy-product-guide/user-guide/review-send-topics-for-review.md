---
title: Send topics for review
description: Learn how to create a review task and send topics for review in AEM Guides. Send one or more topics in a DITA map for review.
feature: Reviewing
role: User
hide: true
exl-id: 4e47536a-ad78-4c97-9cea-a6af854f6e2f
source-git-commit: a70b3ce942b3e69445ad1d7ba6c8f7542e0ff176
workflow-type: tm+mt
source-wordcount: '2775'
ht-degree: 0%

---

# Send topics for review {#id199RD0S035Z}

The review workflow creates a multi-reviewer environment wherein the initiator specifies a list of topics for review, add multiple reviewers, and assigns a timeline for the review task. AEM Guides allows users belonging to the Authors and Publishers groups to initiate a review.

As the review workflow is project-specific, the initiator of review must be a part of the project team or have rights to create a project. At the time of creating a project, you define the team members for the project and assign them various roles or groups. For more information about projects, see [Create a DITA project](authoring-create-dita-project.md#).

You can create a review task from:

- **Web Editor**: Allows you to send an individual topic or DITA map for review. Note that the workflow for creating a review task is common across the Web Editor and Assets UI. Only the method of launching the review workflow differs. For information about launching the review workflow from the Web Editor, see the [Create Review Task](web-editor-features.md#id215OCJ00JXA) feature in the Web Editor.

- **Assets UI**: Allows you to send one or multiple topics and DITA map for review. Sharing documents for review from Assets UI workflow is covered under this topic.


From the Assets UI, there are two ways in which an Author/Publisher can create a review task:

- Send one or more topics for review
- Send multiple topics from a DITA map for review

## Send one or more topics for review {#id1721E600FY4}

>[!IMPORTANT]
>
> Before you create a review task, ensure that you have created a project and added reviewers to that project.

To create a review task and send topics for review, perform the following steps:

>[!NOTE]
>
> You can create a review task only if you are an author or publisher in a DITA project.

1. Navigate to the required folder in the Assets UI.

1. Click the Select icon in the quick action and select the topics you want to send for review.

   ![](images/select-asset-62.png){width="300" align="left"}

1. ツールバーで、**レビュータスクの作成**&#x200B;をクリックします。 レビュータスクの作成ページが表示されます。

   >[!NOTE]
   >
   > レビュータスクは、リビジョンを持つトピックに対してのみ作成できます。 選択したトピックにリビジョンがない場合、プロンプトが表示されます。

   ![](images/create-review-task-023.png){width="650" align="left"}

1. タスクの&#x200B;**タイトル**&#x200B;を入力し、ドロップダウンリストからDITA **プロジェクト**&#x200B;を選択します。

1. 「**割り当て先**」ドロップダウンフィールドで、レビュー用にトピックを送信するレビューアーを選択します。

   レビュータスクは、プロジェクトの個々のユーザーまたはユーザーグループに割り当てることができます。 レビュータスクを個々のユーザーに割り当てることができるのは、プロジェクトの管理者グループに属している場合のみです。そうでない場合は、「割り当て先」フィールドにユーザーグループのみが表示されます。

   >[!NOTE]
   >
   > レビューワークフローはプロジェクト固有です。 プロジェクトを作成する場合は、チームメンバーをプロジェクトに追加し、グループに割り当てます。 ここでプロジェクトを選択すると、そのプロジェクトに属するメンバーを選択できます。 プロジェクトについて詳しくは、[DITA プロジェクトの作成](authoring-create-dita-project.md#)を参照してください。

1. タスクの&#x200B;**説明**&#x200B;を入力します。

   この説明は、レビュー担当者に送信される通知メールの本文として使用されます。

1. レビューの期限をマークするには、**期日**&#x200B;と時間を選択します。

   >[!NOTE]
   >
   > 期限に達すると、レビュータスクが完了したことを通知する電子メールが開始者に送信されます。 開始者は、[&#x200B; レビューダッシュボード &#x200B;](review-manage-tasks-review-dashboard.md#)からレビュータスクの期限を延長できます。

1. **ルートマップパス**&#x200B;からルートマップを選択します。 このロードマップは、レビューコンテンツで使用されるすべての主要な参照と用語集の用語を解決するために使用されます。 ロードマップを選択しない場合、DITA トピックに関連付けられている主要な参照や用語集の用語は、レビュー用にトピックを送信する前に解決されません。

   DITA マップのレビューを作成する場合、デフォルトでは&#x200B;**ルートマップパス**&#x200B;がそのマップのパスに設定されます。 1つまたは複数のトピックのレビューを作成する場合、デフォルトでは、**ルートマップパス**&#x200B;はユーザー環境設定で定義されたマップに設定されます。

   >[!NOTE]
   >
   > 選択したルートマップは、キー参照を解決する際に最も優先されます。 詳しくは、[&#x200B; キー参照の解決](map-editor-other-features.md#id176GD01H05Z)を参照してください。

1. 異なるレビュー担当者を異なるトピックに割り当てることができるので、**担当者に任意のトピックをレビューすることを許可** オプションは、レビュー担当者がレビュータスクのすべてのトピックをレビューできるか、レビューに割り当てられたトピックのみをレビューできるかを制御します。

   If you want to allow all reviewers to review any topic in the review task, select **Allow Assignees to Review Any Topic**.

   If you do not select this option then reviewers added in the **Assign To** field will have access to review only those topics that are assigned to them.

1. 「**次へ**」をクリックします。

   The Content page is displayed.

   ![](images/content_page_review.png){width="800" align="left"}

1. On the Content page, select a version of the topic that you want to share for review.

   You can use one of the following methods to select a version:

   - *\(Default\)* Choose the option **Their Latest Version** to select the last saved revision of the topics.
   - Choose the **Version On** option and specify the date and time to select a version as on the specified date and time. If there is no version of topic available on the specified date, then a version available immediately after the specified date and time is selected.
   - Choose the **Select a Label** option and select a label from the drop-down list.
1. After making your selection for choosing a version, click **Apply**.

   The version based on the selected option is chosen for the topics.

   >[!NOTE]
   >
   > You can also manually select the desired version from the **Version** drop-down list of each topic.

1. 「**次へ**」をクリックします。

   The Reviewers page is displayed wherein you can add or remove reviewers. By default, the reviewers added in the Assign To field are auto-added to each topic selected for the review.

   ![](images/add-reviewers-topics.png){width="650" align="left"}

1. On the Reviewers page, you can add or remove reviewers. The following operations are available on the Reviewers page:

   - **すべてを選択**: トピックリストのすべてのトピックを選択します。 すべてのトピックを選択した後、バッチ操作を簡単に実行できます。
   - **選択範囲をクリア**: トピック リストで選択したトピックの選択を解除します。

     >[!NOTE]
     >
     > トピックの横にあるチェックボックスをクリックして、トピックを個別に選択または選択解除することもできます。

   - **追加**：レビュー担当者を追加ダイアログを表示します。 選択したトピックにレビュー担当者として追加するレビュー担当者またはユーザーの役割\（またはグループ\）の名前を入力できます。
   - **削除**：レビュー担当者を削除ダイアログを表示します。 選択したトピックからレビュアーとして削除するレビュアーまたはユーザーの役割\（またはグループ\）の名前を入力できます。

     >[!NOTE]
     >
     > You can also remove a review from a topic by clicking the cross sign in the reviewer&#39;s box.

   - **再割り当て**：レビュー担当者を再割り当てダイアログを表示します。 レビュータスクを割り当てるレビューアーまたはユーザーの役割\（またはグループ\）の名前を入力できます。 これにより、選択したトピックから既存のレビュー担当者がすべて削除され、新しく選択したレビュー担当者がそれらのトピックに割り当てられます。
   - **書き出し**: レビュータスクの詳細をCSV ファイルに書き出すことができます。 このファイルには、トピックのパスとタイトル、レビュー担当者の名前、レビュー用に送信されたトピックのバージョンなどの詳細が含まれています。
   - **レビュー担当者を編集**: トピックリストの![](images/edit_pencil_icon.svg) アイコンをクリックすると、レビュー担当者を編集ダイアログが表示されます。 選択したトピックのレビュー担当者を、このダイアログから追加または削除できます。
1. 「**作成**」をクリックして、レビュータスクを作成します。

   レビュータスクが正常に作成されると、確認メッセージが表示されます。 レビュー用に送信されたトピックの[&#x200B; ドキュメントの状態](web-editor-document-states.md#)は、「レビュー中」に設定されています。

   >[!NOTE]
   >
   > 画面右上の「通知ベル」をクリックして、レビュータスクが正常に作成されたことを確認することもできます。 通知パネルには、レビュータスクの一部であったレビュー担当者に対して1件ずつ、レビューの開始者に対して1件ずつ通知が表示されます。


すべてのレビュー担当者に、レビュー用のトピックまたは複数のトピックが割り当てられたことを知らせる電子メールが送信されます。 このメールには、クリックしてブラウザーウィンドウでトピックにアクセスできる直接リンクが含まれています。

複数のトピックが割り当てられている場合、レビュー担当者はweb ブラウザーのトピックのドロップダウンリストでトピックを表示および選択できます。

## DITA マップから複数のトピックをレビュー用に送信する

DITA マップは、ブック内のトピックを論理的に整理したものです。 個々のトピックをレビュー用に送信すると、レビュー担当者はブック内のそのトピックの場所に関する情報を取得しません。 レビュー担当者が、レビュー中のトピックの正確な場所に関する情報を持っている場合、レビュー中のトピックに関するより優れたコンテキストがレビュアーに表示されます。

AEM Guidesを使用すると、DITA マップ内の1つ以上のトピックを同時にレビュー用に送信できます。 レビュー担当者は、レビュー用に共有されたトピックと共に、完全なマップファイルを確認できます。 これにより、レビュー担当者は、マップまたはブックファイル内のトピックのコンテキストを簡単に確認できます。

複数のレビュータスクでレビュー用に同じDITA マップを共有できます。 例えば、DITA マップ内にトピック A、B、C、D、Eがある場合、1つのレビュータスクでは、レビュー用にA、B、Cを共有でき、別のレビュータスクでは、レビュー用にトピック C、D、Eを送信できます。 レビュープロセスでは、複数のレビュータスクで同じトピックとマップファイルを共有できます。 For the common topic in multiple review tasks, the comments given in one review task do not overwrite or merge with the comments in the other review tasks.

>[!IMPORTANT]
>
> マップファイルのトピックが複数のレビュータスクで共有されている場合、すべてのレビュータスクが完了するまで、そのステータスは「レビュー中」と表示されます。

To send one or multiple topics along with the map file for review, perform the following steps:

>[!IMPORTANT]
>
> マップファイルを通じてレビューを開始した後は、新しいトピックを追加したり、既存のトピックを削除したりして、マップファイルの構造を変更しないでください。

1. Assets UIで必要なフォルダーに移動します。

   >[!NOTE]
   >
   > コンソールのビューがカード表示またはリスト表示に設定されていることを確認します。

1. レビュー用のトピックを送信する場所からマップを選択します。

1. ツールバーで、**レビュータスクの作成**&#x200B;をクリックします。 レビュータスクの作成ページが表示されます。

1. タスクの&#x200B;**タイトル**&#x200B;を入力し、ドロップダウンリストからDITA **プロジェクト**&#x200B;を選択します。

   >[!NOTE]
   >
   > レビュータスクは、リビジョンを持つトピックに対してのみ作成できます。 マップにリビジョンのないトピックが含まれている場合は、そのようなファイルのリストを示すプロンプトが表示されます。 リビジョンのないファイルは、レビュータスクから除外されます。

1. 「**割り当て先**」ドロップダウンフィールドで、レビュー用にトピックを送信するレビューアーを選択します。

   レビュータスクは、プロジェクトの個々のユーザーまたはユーザーグループに割り当てることができます。 レビュータスクを個々のユーザーに割り当てることができるのは、プロジェクトの管理者グループに属している場合のみです。そうでない場合は、「割り当て先」フィールドにユーザーグループのみが表示されます。

   >[!NOTE]
   >
   > レビューワークフローはプロジェクト固有です。 プロジェクトを作成する場合は、チームメンバーをプロジェクトに追加し、グループに割り当てます。 ここでプロジェクトを選択すると、そのプロジェクトに属するメンバーを選択できます。 プロジェクトについて詳しくは、[DITA プロジェクトの作成](authoring-create-dita-project.md#)を参照してください。

1. タスクの&#x200B;**説明**&#x200B;を入力します。

   この説明は、レビュー担当者に送信される通知メールの本文として使用されます。

1. レビューの期限をマークするには、**期日**&#x200B;と時間を選択します。

   >[!NOTE]
   >
   > 期限に達すると、レビュータスクが完了したことを通知する電子メールが開始者に送信されます。 開始者は、[&#x200B; レビューダッシュボード &#x200B;](review-manage-tasks-review-dashboard.md#)からレビュータスクの期限を延長できます。

1. 異なるレビュー担当者を異なるトピックに割り当てることができるので、**担当者に任意のトピックをレビューすることを許可** オプションは、レビュー担当者がレビュータスクのすべてのトピックをレビューできるか、レビューに割り当てられたトピックのみをレビューできるかを制御します。

   すべてのレビュー担当者がレビュータスクの任意のトピックをレビューできるようにするには、**担当者が任意のトピックをレビューすることを許可**&#x200B;を選択します。

   このオプションを選択しない場合、**割り当て先** フィールドに追加されたレビュー担当者は、割り当てられたトピックのみをレビューするためのアクセス権を持ちます。

1. 「**次へ**」をクリックします。

   コンテンツページは、マップファイルから参照されているすべてのトピックで表示されます。 DITA マップにネストされたマップが含まれている場合は、ネストされたマップのトピックもここに一覧表示されます。

   ![](images/content-page-map-review.png){width="800" align="left"}

1. コンテンツ ページで、レビュー用に共有するトピックのバージョンを選択します。

   次のいずれかの方法を使用して、バージョンを選択できます。

   - *\（Default\）* オプション **最新バージョン**&#x200B;を選択して、トピックの最後に保存されたリビジョンを選択します。
   - 「**バージョンの日付**」オプションを選択し、日時に応じてバージョンを選択する日時を指定します。 指定した日付に利用可能なトピックのバージョンがない場合は、指定した日時の直後に利用可能なバージョンが選択されます。
   - 「**ラベルを選択**」オプションを選択し、ドロップダウンリストからラベルを選択します。 選択したラベルを含むすべてのトピックが&#x200B;**バージョン** ドロップダウンリストで選択されます。
   - 「**ベースラインを選択**」オプションを選択し、ドロップダウンリストからベースラインを選択します。 選択したベースラインの一部であるすべてのトピックバージョンは、**バージョン** ドロップダウンリストで選択されます。
1. バージョンを選択するための選択を行った後、**適用**&#x200B;をクリックします。

   選択したオプションに基づくバージョンがトピックに選択されます。

   >[!NOTE]
   >
   > 各トピックの&#x200B;**バージョン** ドロップダウンリストから、目的のバージョンを手動で選択することもできます。

1. 「**次へ**」をクリックします。

   レビュー担当者ページが表示され、レビュー担当者を追加または削除できます。 デフォルトでは、「割り当て先」フィールドに追加されたレビュー担当者は、レビュー用に選択された各トピックに自動的に追加されます。

1. レビュー担当者ページで、レビュー担当者を追加または削除できます。 レビュー担当者ページでは、次の操作を使用できます。

   - **すべてを選択**: トピックリストのすべてのトピックを選択します。 すべてのトピックを選択した後、バッチ操作を簡単に実行できます。
   - **選択範囲をクリア**: トピック リストで選択したトピックの選択を解除します。

     >[!NOTE]
     >
     > トピックの横にあるチェックボックスをクリックして、トピックを個別に選択または選択解除することもできます。

   - **追加**：レビュー担当者を追加ダイアログを表示します。 選択したトピックにレビュー担当者として追加するレビュー担当者またはユーザーの役割\（またはグループ\）の名前を入力できます。
   - **削除**：レビュー担当者を削除ダイアログを表示します。 選択したトピックからレビュアーとして削除するレビュアーまたはユーザーの役割\（またはグループ\）の名前を入力できます。
   - **再割り当て**：レビュー担当者を再割り当てダイアログを表示します。 レビュータスクを割り当てるレビューアーまたはユーザーの役割\（またはグループ\）の名前を入力できます。 これにより、選択したトピックから既存のレビュー担当者がすべて削除され、新しく選択したレビュー担当者がそれらのトピックに割り当てられます。
   - **書き出し**: レビュータスクの詳細をCSV ファイルに書き出すことができます。 このファイルには、トピックのパスとタイトル、レビュー担当者の名前、レビュー用に送信されたトピックのバージョンなどの詳細が含まれています。
   - **レビュー担当者を編集**: トピックリストの![](images/edit_pencil_icon.svg) アイコンをクリックすると、レビュー担当者を編集ダイアログが表示されます。 選択したトピックのレビュー担当者を、このダイアログから追加または削除できます。
   >[!IMPORTANT]
   >
   > You must assign at least one reviewer to create the review task.

1. 「**作成**」をクリックして、レビュータスクを作成します。

   レビュータスクが正常に作成されると、確認メッセージが表示されます。 レビュー用に送信されたトピックの[&#x200B; ドキュメントの状態](web-editor-document-states.md#)は、「レビュー中」に設定されています。

   >[!NOTE]
   >
   > You can also click Notifications panel at the top right of the interface and confirm that the task has been created successfully. In the Notifications panel, you will find one notification each for the reviews who were a part of the review task and one notification for the initiator of the review.

   >[!IMPORTANT]
   >
   > Once you have initiated a review, you must not move or delete the DITA map or topics to a different location. Doing so will result in a break in the review process.


An email is sent to all the reviewers, notifying that they have been assigned topics for review. このメールには、クリックしてブラウザーウィンドウでトピックにアクセスできる直接リンクが含まれています。 The topics along with the DITA map are opened in the review mode.

**親トピック：**&#x200B;[&#x200B; トピックまたはマップのレビュー](review.md)
