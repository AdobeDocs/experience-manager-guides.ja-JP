---
title: トピックを見る
description: AEM Guidesのレビューアー、ドキュメントビュー、トピックビュー、コンテキストツールバー、プレビューモード、コメントへの添付ファイルの追加、条件パネルとしてトピックをレビューし、機能を使用する方法について説明します。
feature: Reviewing
role: User
hide: true
exl-id: 371d89b8-fe05-4477-9bf8-cc47c0899108
source-git-commit: a70b3ce942b3e69445ad1d7ba6c8f7542e0ff176
workflow-type: tm+mt
source-wordcount: '2362'
ht-degree: 0%

---

# トピックを見る {#id2056B0W0FBI}

レビュー担当者の場合は、レビュートピックへのリンクが記載されたレビューリクエストメールが届きます。 リンクをクリックすると、レビューページに移動し、共有トピックに関するフィードバックを追加できます。

トピックをレビューするには、次の手順を実行します。

1. レビューリクエストメールに記載されている直接リンクをクリックします。

   トピックまたはマップリンクがブラウザーで開きます。

   >[!NOTE]
   >
   > AEM ユーザーインターフェイスのインボックス通知領域からトピックレビューリンクにアクセスすることもできます。

1. トピックのレビューの開始方法に応じて、次の2つの画面のいずれかを表示できます。

   >[!NOTE]
   >
   > でレビューを作成した場合、UIが異なる場合があります。
   >
   > - AEM Guides as a Cloud Service 2022年11月リリース以前
   > - AEM Guides バージョン 4.1以前



   DITA マップを使用してレビューワークフローを開始すると、次の画面が表示されます。

   ![](images/multiple-topics-review.png){width="800" align="left"}

   この画面では、次のオプションを使用できます。

   - **A**: レビュータスクの名前。
   - **B**: トピック表示アイコンをクリックして、トピックパネルを表示または非表示にします。

   - **C**：検索バーにタイトルまたはファイルパスのテキストの一部を入力して、必要なトピックを検索できます。

     検索バーの近くの![](images/view-options.svg)を選択して、すべてのトピックを表示するか、コメント付きのトピックを表示するかを選択します。 デフォルトでは、レビュータスクに存在するすべてのトピックを表示できます。


   - **D**: ***F***&#x200B;によって強調表示された数値は、ここから目的のフィルターオプションを選択してフィルタリングできます。 コメントは、タイプ、ステータス、レビュアーまたはバージョンによってフィルタリングできます。 例えば、レビュー中の各トピックで取り消し線のコメントが何件行われたかを確認する場合は、フィルターアイコンをクリックし、「**レビュータイプ** \> **削除**」を選択します。

     >[!NOTE]
     >
     > フィルターを適用すると、選択したフィルターに一致するコメントのみがコメントパネルに表示されます。 フィルターされたコメントの数は、トピックパネルの左側に表示されます。

   - **E**：現在のレビュー担当者にレビュー用に割り当てられたトピックは黒で表示され、クリック可能です。 レビュー担当者がトピックリンクをクリックすると、そのトピックが画面の上部に表示されます。
   - **F**：レビュー用に使用できないトピックがグレー表示されています。 トピックは読み取り専用モードで表示され、そのようなトピックにレビューコメントを追加することはできません。

   - **G**: トピックで受信したコメントの数。 この数値は、適用するフィルターに基づいて変更されます。

   マップ内のすべてのトピックは、単一の複合ドキュメントとして表示されます。 レビュー担当者がレビューできるトピックは通常どおり表示されます。 レビューでレビューできないトピックは表示されません。

   ![](images/review-read-only.png){width="800" align="left"}

   上記のスクリーンショットでは、「一般的な説明」トピックが現在のレビュー担当者のレビュー用に共有されています。これは通常どおり表示されます。 ただし、次のトピック「フライトのコンテンツの履歴」はレビュー用に共有されず、読み取り専用モードで表示されます。 現在注目されているトピックは、目次でも強調表示されます。

   トピックまたは複数のトピックを選択してレビュー用に共有すると、次の画面が表示されます。

   ![](images/review-composite-view.png){width="800" align="left"}

   >[!NOTE]
   >
   > 複数のトピックの場合、これらのトピックはドキュメントビューで1つの複合ドキュメントとして表示されます。 上のスクリーンショットは、1つのビューで次から次へと表示される2つの異なるトピックを示しています。

1. ツールバーの右上隅にある「**コメント**」アイコンをクリックして、コメントパネルを開きます。

   ツールバーから適切なコメントタイプを選択してレビューコメントを入力し、Enter キーを押してコメントを送信します。

   >[!NOTE]
   >
   > コメントパネルには、現在のトピックに対してのみ指定されたコメントが表示されます。 フォーカスを他のトピックに移動すると、他のトピックに対するコメントが表示されます。

1. トピックのレビューが完了したら、「**閉じる**」ボタンをクリックします。 **閉じる** ボタンをクリックすると、レビュートピックにアクセスしたページにリダイレクトされます。

## レビュー画面で利用可能な追加機能

**ドキュメント ビューとトピック ビュー** – 既定では、複数のトピックがレビュー用に共有されている場合、トピックの複合ドキュメント ビューがレビュー担当者に表示されます。 DITA マップレビューの場合、マップ内のすべてのトピックは、ブックビューに似た単一のドキュメントの形式で表示されます。 必要に応じて、特定のトピックをクリックして、そのトピックのみをレビュー画面に表示することもできます。

When you view a single topic, then you get an additional option to switch back to the document view. 次のスクリーンショットでは、マップファイルの特定のトピックがレビュー用に開かれています。 ハイライト表示されたオプション「**ドキュメント表示を表示**」を使用すると、ユーザーはマップファイルのドキュメントビューに戻ることができます。

![](images/switch-document-view.png){width="800" align="left"}

**様々な種類のコメントツールを使用する** - テキストを強調表示、テキストを強調表示、テキストを挿入、またはコメントノートを追加して、インラインコメントを追加できます。 コメントツールバーに用意されている様々な種類のコメントツールについては、以下で説明します。

![](images/comments-toolbar.png){width="350" align="left"}

- **ハイライト** \（![](images/review-highlight-icon.svg)\）: ハイライトコメントを追加するには、テキストを選択してハイライトアイコンをクリックします。 または、ハイライトアイコンをクリックして、目的のテキストを選択します。

  ![](images/highlight-comment.png){width="650" align="left"}

  注釈パネルにポップアップが表示され、ハイライト表示されたコンテンツに注釈を追加できます。

- **取り消し線** \（![](images/review-text-strike-through-icon.svg)\）: コンテンツの削除を提案する場合は、コンテンツを選択して取り消し線アイコンをクリックします。 Or, select the desired text and click the Delete key:

  コメント パネルにポップアップが表示され、削除したコンテンツにコメントを追加できます。

- **テキストを挿入** \（![](images/review-insert-text-icon.svg)\）: テキストを挿入する場合は、テキストを挿入アイコンをクリックし、テキストを挿入する場所にカーソルを置いて、情報を入力します。 Or, place the cursor where you want to insert text and start typing. The added information appears in green colored font:

- **Add Comment**\(![](images/review-comment-icon.svg)\): If you want to add a sticky note type of comment, click the Add Comment icon and enter the comment in the pop-up.


**コンテキストツールバー**

You can also highlight or strikethrough text quickly with the contextual toolbar. コンテキストツールバーを使用してコメントするには、次の手順を実行します。

1. ハイライトまたは取り消すテキストを選択します。 コンテキストツールバーが表示されます。

   ![](images/review-quick-launch-toolbar.png){width="550" align="left"}

1. Click the **Highlight** or **Strikethrough** icon.
1. You can add comments in the comment panel for the highlight or strikethrough action.

**コメントパネルを使用したレビュー** - コメントパネルには、現在のトピックに対して与えられたコメントのリストが表示されます。 このパネルには、トピックが複数のレビュー担当者に送信された場合の、他のレビュー担当者からのコメントも一覧表示されます。 Each comment in the comment panel is linked to the corresponding text in the current topic. コメント付きテキストを識別するのに役立ちます。 Each comment displays the name of the reviewer who has added the comment along with the timestamp.

注釈は、文書内の注釈テキストの順序で表示されます。 For example, there is a highlight comment on the first sentence and an insert text comment on the second sentence in the first paragraph then the highlight text comment is displayed before the inserted text comment.

The tasks that you can perform using the Comments panel are described below:

- Clicking on a comment highlights and shows the corresponding comment&#39;s location in the document.
- You can add replies to comments.
- You can edit your own comment by clicking on your commented text in the Comments panel and then selecting **Edit** from the Options menu.
- You can delete your own comments by clicking on the comment in the Comments panel and then selecting the **Delete** option from the Options menu.

  ![](images/review-comment-options-menu.png){width="300" align="left"}

  >[!NOTE]
  >
  > The Options menu appears only when you hover over your own comments. It is not displayed for the comments by other reviewers.

- All participating users can respond to comments submitted by other users. On a comment, click **Reply** and press Enter to submit a response.

**プレビューモード**

- Opening a topic in the Preview mode shows how a topic will be displayed when it is viewed by an author after applying all the changes. For example, all inserted text is shown as normal text and all striked off \(deleted\) text is removed from the content.

- The following screenshot shows the content in *Review* mode:

![](images/review-author-mode.png){width="550" align="left"}

The following screenshot shows the content in *Preview* mode:

![](images/review-preview-mode.png){width="550" align="left"}

**Add attachments to comments** -   If you want to supplement your comment by providing additional information which is available in some other file, you can do so by attaching it with your comment. As a reviewer, you can easily add one or multiple files from your local system to your comment. A file can be added to all supported forms of comments - Highlight, Strikethrough, Insert Text, or a Comment.

When you insert any of the comments, the commenting pop-up appears. After providing additional comments or information in the pop-up, you submit it by hitting Enter. Once the comment is added, you get the option to add an attachment to that comment.

![](images/comment-pop-up-panel.png){width="800" align="left"}

In the above screenshot, the document contains the highlight comment&#39;s pop-up and the comment is also added in the Comments panel. The file attachment icon ![](images/file-attach-review.svg)is available along with the comment at both the locations.

Perform the following steps to add attachment to your comment:

1. Click the *Add Attachment* icon ![](images/file-attach-review.svg) on the comment with which you want to add an attachment.

   The file Open dialog appears.

1. Select one or multiple files you want to attach.

   The selected files are shown along with the comment in the Comments panel.

   In the Comments panel you can see the file name and its size. You also have an option to remove a file by clicking the delete icon ![](images/Delete_icon.svg) associated with the file name.

1. 「**送信**」をクリックします。

   The attachments are uploaded and added to the comment.


**Additional notes on working with attachments:**

- By default, only two files attached with a comment are shown. If there are more files, then **View Attachment** button on the right shows the number of all attachments \(which are more than two\) associated with the comment. You can click the number to view all attachments. For example, if you have four attachments with a comment, you will see +2 on the button.

![](images/review-view-attachment.png){width="550" align="left"}

- Hovering the mouse pointer over an attachment gives the options to download or remove the attachment. Removing the attachment is available only if the current reviewer has added that comment, as shown the following screenshot:

![](images/current-user-comment-options.png){width="550" align="left"}

The other reviewers or authors get only the download attachment option.

![](images/other-reviewer-download.png){width="550" align="left"}

- You can download all attachments associated with a comment from the **View Attachments** dialog. Select the attachments and click the **Download** icon at the comment level.

- You can also delete the attachments associated with a comment from the **View Attachments** dialog. Select the attachments and click the **Delete** icon.

![](images/attach-files-comments-panel.png){width="550" align="left"}


**Conditions panel** -   If your topic has conditional content, then you will see the **Conditions** \(![](images/conditions-icon.svg)\) icon on the right. Clicking on **Conditions** icon opens the Conditions panel that allows you to highlight the content as per the available conditions in the topic.

:   By default **Highlight All Conditions** option is enabled, all conditions are selected, the entire content is displayed, and the conditionalized content is shown as highlighted both in review and preview mode.

:   You can disable **Highlight All Conditions** option and see all the content present in the topic as normal text without any highlights.

![](images/review-conditions-panel.png){width="350" align="left"}

You can choose to hide or show a specific condition.

- 条件を非表示にした場合、その条件を持つコンテンツはレビューモードでハイライト表示されません。
- 条件付きコンテンツがレビューモードで強調表示されている場合。 例えば、次のスクリーンショットでは、コンテンツのみが2つの条件を使用します – `win`と`mac`が強調表示されます。


![](images/review-condition-normal-mode.png){width="650" align="left"}

プレビューモードでは、表示された2つの条件（`win`と`mac`）を使用する条件付きコンテンツと条件付きコンテンツが表示されます。 条件が非表示になっている残りの条件付きコンテンツは表示されません。

**リアルタイムレビュー** -   コメントパネルは、コメントと、コメントに対して作成者が実行したフィードバックまたはアクションをリアルタイムで更新します。

- 複数のレビュー担当者が、同じドキュメントにコメントを残したり、コメントに同時に返信したりできます。 画面の右上隅にあるユーザーアイコンの上にマウスを置くと、現在ドキュメントをレビューしているユーザーを確認できます。

- トピックが複数のレビュータスクの一部である場合、一方のタスクで行われたコメントは、もう一方のタスクには表示されません。

- 古いコメントアイコン \（![](images/outdated-comment-icon.svg)\）をクリックすると、ドキュメントの最新バージョンとコメント済みバージョンの違いが表示されます。 バージョン番号\（比較するバージョンの\）がドキュメントの上部に表示されます。

  ![](images/comments-page-review-mode.png){width="800" align="left"}

  >[!NOTE]
  >
  > 「古いコメント」アイコンにカーソルを合わせると、コメントが追加されたトピックのバージョン番号が表示されます。 例えば、バージョン 1.0でコメントが付けられた場合は、同じことが表示されます。

- 古いコメントをクリックすると、そのコメントのバージョンが左側のパネルに表示されます。 前のバージョンは左側のパネルに表示され、現在のバージョンは右側のパネルに表示されます。 古いバージョンに関するすべてのコメントは、左側に読み込まれます。 以前のバージョンと現在のバージョンを比較できます。

**コメントをフィルター** -   ドキュメント内のコメントをフィルタリングして、必要に応じて特定のコメントを表示できます。 コメントをフィルタリングするには、コメントパネルの「コメントを検索」テキストボックスの右側にあるメニューに表示される&#x200B;**フィルター** アイコン \（![](images/filter-search-icon.svg)\）をクリックします。

**フィルタータイプ** ダイアログから次のフィルターオプションを1つ以上選択し、**適用**&#x200B;をクリックします。

- **種類を確認** - コメントの種類に基づいてフィルター – ハイライト、削除、挿入、またはコメント。
- **ステータスのレビュー** - コメントのステータス（「承認済み」、「却下」、「なし」など）に基づいてフィルタリングします。
- **レビュー担当者** – レビュー担当者の名前に基づいてフィルターを実行します。

- **バージョン** - トピックの特定のバージョンで受信したコメントに基づいてフィルタリングします。

  フィルターを使用すると、右側のパネルのコメントが選択内容に応じてフィルタリングされ、左側のパネルのコメント数が適宜更新されます。


フィルターを削除してすべてのコメントを表示するには、**フィルタータイプ** ダイアログからすべてのフィルターの選択を解除し、**適用**&#x200B;をクリックします。

**親トピック：**[ トピックまたはマップのレビュー](review.md)
