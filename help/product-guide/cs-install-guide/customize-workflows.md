---
title: ワークフローの設定とカスタマイズ
description: ワークフローの設定およびカスタマイズ方法を学ぶ
exl-id: a5742082-cc0b-49d9-9921-d0da1b272ea5
feature: Workflow Configuration
role: Admin
level: Experienced
source-git-commit: 01efb1f17b39fcbc48d78dd1ae818ece167f4fe5
workflow-type: tm+mt
source-wordcount: '1762'
ht-degree: 2%

---

# ワークフローの設定とカスタマイズ {#id181AI0OJ0RO}

ワークフローを使用すると、Adobe Experience Manager \（AEM\） アクティビティを自動化できます。 ワークフローは、特定の順序で実行される一連のステップで構成されます。 各ステップで実行するアクティビティを個別に定義できます。 例えば、トピックレビューが作成されたときに、グループ内のすべてのレビュー担当者にメール通知を送信できます。 または、出力生成タスクが完了したときにパブリッシャーに通知を送信します。

AEMのワークフローについて詳しくは、以下を参照してください。

- [&#x200B; ワークフローインスタンスの管理 &#x200B;](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/administering/workflows-administering.html?lang=ja)

- ワークフローの適用とワークフローへの参加：[&#x200B; プロジェクトワークフローの操作 &#x200B;](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/authoring/projects/workflows.html?lang=ja)。


このトピックの節では、AEM Guidesに付属しているデフォルトのワークフローで実行できる様々なカスタマイズについて説明します。

## レビューワークフローのカスタマイズ {#id176NE0C00HS}

すべての組織のコンテンツオーサリングチームは、ビジネス要件を満たすために特定の方法で作業します。 組織によっては、専用のエディターがあるのに対して、他の組織では、自動編集審査システムを導入している場合があります。 例えば、組織では、一般的なオーサリングと公開のワークフローに、のようなタスクを含めることができます。作成者がコンテンツのオーサリングを完了すると、自動的にレビュー担当者に送信され、レビューが完了すると、最終出力を生成するために公開者に送信されます。 AEMでは、コンテンツやアセットに対して実行するアクティビティを、プロセスの形式で組み合わせて、AEMのワークフローにマッピングできます。 AEMのワークフローについて詳しくは、AEM ドキュメントの [&#x200B; ワークフローの管理 &#x200B;](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/administering/workflows-administering.html?lang=ja) を参照してください。

AEM Guidesでは、デフォルトのレビューワークフローをカスタマイズできます。 他のオーサリングワークフローまたは公開ワークフローで、次の 4 つのカスタムレビュー関連のプロセスを使用できます。

- **レビューを作成**：このプロセスでは、レビュータスクの作成に必要なメタデータを準備します。 例えば、レビュー権限をレビュー担当者に割り当て、トピックのステータスをレビュー中に設定し、レビュータイムラインを設定します。 4 つのプロセスのうち、これはカスタムワークフローに含める必要がある唯一の必須プロセスです。 ワークフローで、他の 3 つのプロセスを含めるか除外するかを選択できます。

- **レビュータスクの割り当て**：このプロセスは、レビュータスクを作成し、開始者とレビュー担当者にタスク通知を送信します。

- **レビューメールの送信**：このプロセスは、レビューメールをイニシエーターとレビュー担当者に送信します。

- **レビューをクローズするジョブのスケジュール**：このプロセスにより、期限に達したレビュー・プロセスが確実に完了します。


カスタムレビューワークフローを作成する場合、最初のタスクは、作成レビュープロセスで必要なメタデータを設定することです。 それには、ECMA スクリプトを作成します。 メタデータを割り当てる ECMA スクリプトのサンプルを、トピックとマップの両方について以下に示します。

**トピック用**

```javascript
var workflowdata=workItem.getWorkflowData();
workflowdata.getMetaDataMap().put("initiator","admin");
workflowdata.getMetaDataMap().put("operation","AEM_REVIEW");
workflowdata.getMetaDataMap().put("orgTopics","/content/dam/xml-solution/review.xml");
workflowdata.getMetaDataMap().put("payloadJson","{\"base\":\"/content/dam/xml-solution\",\"asset\":[\"/content/dam/xml-solution/review.xml\"],\"referrer\":\""}");
workflowdata.getMetaDataMap().put("deadline","2017-06-27T13:19:00.000+05:30");
workflowdata.getMetaDataMap().put("title","Review through custom workflow");
workflowdata.getMetaDataMap().put("description","Initiate this review process using the AEM workflow");
workflowdata.getMetaDataMap().put("assignee","user-one", "user-two");
workflowdata.getMetaDataMap().put("status","1");
workflowdata.getMetaDataMap().put("projectPath","/content/projects/review");
workflowdata.getMetaDataMap().put("startTime", System.currentTimeMillis());
workflowdata.getMetaDataMap().put("reviewType", "AEM");
workflowdata.getMetaDataMap().put("versionJson", "[{\"path\":\"GUID-ca6ae229-889a-4d98-a1c6-60b08a820bb3.dita\",\"review\":true,\"version\":\"1.0\",\"reviewers\":[\"projects-samplereviewproject-owner\"]}]");
workflowdata.getMetaDataMap().put("isDitamap","false");
workflowdata.getMetaDataMap().put("reviewVersion","3.0");
```

**マップ用**

```javascript
var workflowdata = workItem.getWorkflowData();
workflowdata.getMetaDataMap().put("initiator", "admin");
workflowdata.getMetaDataMap().put("operation", "AEM_REVIEW");
workflowdata.getMetaDataMap().put("orgTopics", "GUID-ae42f13c-7201-4453-9a3a-c87675a5868e.dita|GUID-28a6517b-1b62-4d3a-b7dc-0e823225b6a5.dita|GUID-dd699e10-118d-4f1b-bf19-7f1973092227.dita|");
var payloadJson = "{\"referrer\":\"\",\"rootMap\":\"GUID-17feb385-acf3-4113-b838-77b11fd6988d.ditamap\",\"asset\":[\"GUID-17feb385-acf3-4113-b838-77b11fd6988d.ditamap\"],\"base\":\"/content/dam\"}";
workflowdata.getMetaDataMap().put("payloadJson", payloadJson);
workflowdata.getMetaDataMap().put("deadline", "2047-06-27T13:19:00.000+05:30");
workflowdata.getMetaDataMap().put("title", "Review task via workflow with map");
workflowdata.getMetaDataMap().put("description", "Review task via workflow with map Description");
workflowdata.getMetaDataMap().put("assignee", "user-one");
workflowdata.getMetaDataMap().put("status", "1");
workflowdata.getMetaDataMap().put("projectPath", "/content/projects/review_project_via_workflow");
workflowdata.getMetaDataMap().put("startTime", new Date().getTime());
var versionJson = "[{\"path\":\"GUID-ae42f13c-7201-4453-9a3a-c87675a5868e.dita\",\"version\":\"1.0\",\"review\":true,\"reviewers\":[\"starling-regression-user\"]},{\"path\":\"GUID-28a6517b-1b62-4d3a-b7dc-0e823225b6a5.dita\",\"version\":\"1.0\",\"review\":true,\"reviewers\":[\"starling-regression-user\"]},{\"path\":\"GUID-dd699e10-118d-4f1b-bf19-7f1973092227.dita\",\"version\":\"1.0\",\"review\":true,\"reviewers\":[\"starling-regression-user\"]}]";
workflowdata.getMetaDataMap().put("versionJson", versionJson);
workflowdata.getMetaDataMap().put("notifyViaEmail", "true");
workflowdata.getMetaDataMap().put("allowAllReviewers", "false");
workflowdata.getMetaDataMap().put("isDitamap", "true");
workflowdata.getMetaDataMap().put("ditamap", "GUID-17feb385-acf3-4113-b838-77b11fd6988d.ditamap");
var ditamapHierarchy = "[{\"path\":\"GUID-17feb385-acf3-4113-b838-77b11fd6988d.ditamap\",\"items\":[{\"path\":\"GUID-db5787bb-5467-4dc3-b3e5-cfde562ee745.ditamap\",\"items\":[{\"path\":\"GUID-ae42f13c-7201-4453-9a3a-c87675a5868e.dita\",\"items\":[],\"title\":\"\"},{\"path\":\"GUID-28a6517b-1b62-4d3a-b7dc-0e823225b6a5.dita\",\"items\":[],\"title\":\"\"}],\"title\":\"\"},{\"path\":\"GUID-dd699e10-118d-4f1b-bf19-7f1973092227.dita\",\"items\":[],\"title\":\"\"}]}]";
workflowdata.getMetaDataMap().put("ditamapHierarchy", ditamapHierarchy);
workflowdata.getMetaDataMap().put("reviewVersion","3.0");
```

`/etc/workflows/scripts` ノードにこれらのスクリプトを作成できます。 次の表に、前述の両方の ECMA スクリプトによって割り当てられるプロパティを示します。

| Property | タイプ | 説明 |
|--------|----|-----------|
| `initiator` | String | レビュータスクを開始するユーザーのユーザー ID。 |
| `operation` | 文字列 | `AEM_REVIEW` として設定された静的な値。 |
| `orgTopics` | 文字列 | レビュー用に共有されるトピックのパス。 複数のトピックをコンマで区切って指定します。 |
| `payloadJson` | JSON オブジェクト | 次の値を指定します。-   `base`：レビュー用に送信されたトピックを含む親フォルダーのパス。 <br> -   `asset`：レビュー用に送信されたトピックのパス。 <br> -   `referrer`：空白のままにします。 |
| `deadline` | 文字列 | 時刻を `yyyy-MM-dd'T'HH:mm:ss.SSSXXX` 形式で指定します。 |
| `title` | 文字列 | レビュータスクのタイトルを入力します。 |
| `description` | 文字列 | レビュータスクの説明を入力します。 |
| `assignee` | 文字列 | レビュー用にトピックを送信するユーザーのユーザー ID。 |
| `status` | 整数 | 1 に設定された静的な値。 |
| `startTime` | Long | `System.currentTimeMillis()` 関数を使用して、現在のシステム時間を取得します。 |
| `projectPath` | 文字列 | レビュータスクが割り当てられるレビュープロジェクトのパス （例：/content/projects/samplereviewproject）。 |
| `reviewType` | 文字列 | 静的値「AEM」。 |
| `versionJson` | JSON オブジェクト | versionJson は、各トピックオブジェクトが次の構造を持つ、レビュー中のトピックのリストです [ { &quot;path&quot;: &quot;/content/dam/1-topic.dita&quot;, &quot;version&quot;: &quot;1.1&quot;, &quot;review&quot;: true, &quot;reviewers&quot;: [&quot;projects-we_retail-editor&quot;] } ] |
| `isDitamap` | ブーリアン | false/true |
| `ditamapHierarchy` | JSON オブジェクト | マップが確認用に送信される場合、ここにある値は次のようになります。&lbrack; { &quot;path&quot;: &quot;GUID-f0df1513-fe07-473f-9960-477d4df29c87.ditamap&quot;, &quot;items&quot;: [ { &quot;path&quot;: &quot;GUID-9747e8ab-8cf1-45dd-9e20-d47d482f67d.d.dita&quot;, &quot;title&quot;: &quot;&quot;, &quot;items&quot;: [] } } ]。 |
| `ditamap` | 文字列 | レビュータスクの ditamap のパスを指定します |
| `allowAllReviewers` | ブーリアン | false/true |
| `notifyViaEmail` | ブーリアン | false/true |
| `reviewVersion` | 文字列 | レビューワークフローの現在のバージョンを指定します。 デフォルト値は `3.0` に設定されています。<br> [&#x200B; 作成者 &#x200B;](../user-guide/review-close-review-task.md) および [&#x200B; レビュー担当者 &#x200B;](../user-guide/review-complete-review-tasks.md) の新しいレビューワークフロー機能を有効にするには、`reviewVersion` が `3.0` に設定されていることを確認します。 |


スクリプトを作成したら、ワークフローで作成レビュープロセスを呼び出す前に呼び出します。 その後、要件に応じて、他のレビューワークフロープロセスを呼び出すことができます。

### パージ設定からレビューワークフローを削除

ワークフローエンジンのパフォーマンスを向上させるために、完了したワークフローインスタンスをAEM リポジトリーから定期的に削除することができます。 デフォルトのAEM設定を使用している場合は、完了したすべてのワークフローインスタンスが、指定した期間の後にクリーンアップされます。 これにより、すべてのレビューワークフローがAEM リポジトリからパージされます。

自動パージ設定からレビューワークフローモデル \（情報\）を削除することで、レビューワークフローが自動パージされないようにすることができます。 レビューワークフローモデルを自動パージリストから削除するには **&#x200B;**&#x200B;Adobe Granite のワークフローパージ設定を使用する必要があります。

「**Adobe Granite のワークフローのパージ設定**」で、安全にパージできるワークフローを少なくとも 1 つリストしていることを確認します。 例えば、AEM Guidesで作成された次のワークフローのいずれかを使用できます。

- /etc/workflow/models/publishditamap/jcr:content/model
- /etc/workflow/models/post-dita-project-creation-tasks/ jcr:content/model

**Adobe Granite のワークフローのパージ設定にワークフローを追加すると** AEMによって設定にリストされているワークフローのみがパージされます。 これにより、AEMからレビューワークフロー情報がパージされなくなります。

**Adobe Granite のワークフローのパージ設定の指定について詳しくは** AEM ドキュメントの *ワークフローインスタンスの管理* を参照してください。

### メールとAEM通知のカスタマイズ

メール通知は、多数のAEM Guides ワークフローで利用されます。 例えば、レビュータスクを開始すると、レビュー担当者にメール通知が送信されます。 ただし、メール通知が送信されるようにするには、AEMでこの機能を有効にする必要があります。 AEMでメール通知を有効にするには、AEM ドキュメントの [&#x200B; メールの送信 &#x200B;](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/implementing/developing/development-guidelines.html?lang=ja#sending-email) を参照してください。

AEM Guidesには、カスタマイズ可能な、レビューワークフローで使用されるメールおよびAEM通知のセットが含まれています。 これらの通知をカスタマイズするには、次の手順を実行します。

1. パッケージマネージャーを使用してフォルダー `/libs/fmdita/mail/review` ダウンロードします。

   >[!NOTE]
   >
   > ``libs`` ノードでデフォルトの設定ファイルをカスタマイズする必要はありません。 ``libs`` ノードに ``apps`` ノードのオーバーレイを作成し、``apps`` ノードでのみ必要なファイルを更新する必要があります。

1. `review` フォルダーには、次のサブフォルダーが含まれます。

   - `aem-notification`
   - `CSS`
   - `email-notification`

   これらのサブフォルダーについて詳しくは、以下で説明します。

   | サブフォルダーの確認 | 説明 |
   |-----------------|-----------|
   | `aem-notification` | カスタマイズ可能な様々なAEM通知タイプが含まれます。<br> `closed` <br> `content-updated` <br> `feedback-addressed` <br> `feedback-provided` <br> `requested` <br> `reviewer-removed` <br> `tag-mention` <br> これらのサブフォルダー内に `primary.vm` ファイルと `secondary.vm` ファイルがあり、これを使用してAEM通知のタイトルと説明をそれぞれカスタマイズできます。 |
   | `CSS` | メール通知のスタイル設定をカスタマイズするための `email-notification.css` ファイルが含まれています。 |
   | `email-notification` | カスタマイズ可能な様々なメール通知タイプが含まれます。<br> `closed` <br> `content-updated` <br> `feedback-addressed` <br> `feedback-provided` <br> `requested` <br> `reviewer-removed` <br> `tag-mention` <br> これらのサブフォルダー内に、`primary.vm` ファイルと `secondary.vm` ファイルがあり、それぞれメール通知の件名と本文をカスタマイズできます。 |

各通知タイプの定義の概要を次に示します。

- `closed`：レビュータスクが閉じられたときのトリガー。
- `content-updated`：作成者またはイニシエーターがコンテンツを更新する際のトリガー。
- `feedback-addressed`：作成者またはイニシエーターがコメントに対処し、レビュー担当者に再検討をリクエストする際のトリガー。
- レビュー担当者がタスクに完了のマークを付けるときに、レビュータスクの作成者または開始者にタスクレベルのコメントを提供して、トリガーを `feedback-provided` します。
- `requested`：作成者またはイニシエーターがレビュータスクを作成する際にトリガーが発生します。
- `reviewer-removed`：レビュータスクからレビュー担当者が割り当て解除されたときのトリガー。
- `tag-mention`：レビューのコメントでユーザーがメンションされたり、タグ付けされたりした場合のトリガー。

メールまたはAEM通知をカスタマイズする際は、`primary.vm` ファイルと `secondary.vm` ファイルで使用する、次の事前定義済みの変数セットのみを使用してください。


| **変数名** | **説明** | **データタイプ** |
|-------------------------|---------------------------------------------------------------|---------------|
| `projectPath` | レビュータスクを含むプロジェクトへのパス | 文字列 |
| `reviewTitle` | レビュータスクのタイトル | 文字列 |
| `projectName` | プロジェクト名 | 文字列 |
| `commentator` | コメントを追加したユーザーの名前 | 文字列 |
| `commentExcerpt` | 追加されたコメントのスニペット | 文字列 |
| `taskLink` | レビュータスクへの直接リンク | URL |
| `authorName` | レビュータスクを作成または更新した作成者の名前 | 文字列 |
| `dueDate` | レビュータスクの期限 | 日付 |
| `reviewerName` | タスクに割り当てられたレビュー担当者の名前 | 文字列 |
| `user` | レビュータスクに関与するユーザー（作成者、レビュー担当者、管理者など）。 | 文字列 |
| `recipient` | 通知を受信する特定のユーザー | 文字列 |


## 出力後生成ワークフローのカスタマイズ {#id17A6GI004Y4}

AEM Guidesでは、出力後の生成ワークフローを柔軟に指定できます。 AEM Guidesを使用して生成される出力に対して、いくつかの後処理タスクを実行できます。 例えば、生成されたAEM Site の出力に一部の CQ タグを適用したり、PDFの出力に特定のプロパティを設定したり、出力の生成後に一連のユーザーにメールを送信したりできます。

新しいワークフローモデルを作成して、出力後生成ワークフローとして使用できます。 出力後生成ワークフローがトリガーされると、出力生成ワークフローは、ワークフローメタデータマップを介してコンテキスト情報を共有します。このマップを使用して、生成された出力に対して処理を実行できます。 次の表に、メタデータとして共有されるコンテキスト情報を示します。

| Property | タイプ | 説明 |
|--------|----|-----------|
| ``outputName`` | String | 出力の生成に使用する出力プリセットの名前。 |
| `generatedPath` | 文字列 | 生成された出力が保存される DAM 内のパス。 |
| `outputType` | com.adobe.fmdita.output.OutputType | 出力プリセットのタイプ。 |
| `outputTitle` | 文字列 | 出力プリセットのタイトル。 |
| `outputHistoryPath` | 文字列 | 履歴ノードのリポジトリーパス。 |
| `isSuccess` | ブーリアン | 出力生成プロセスの最終的なステータス（成功または失敗）を示すフラグ。 |
| `logPath` | 文字列 | 出力生成ログが保存される DAM 内のパス。 |
| `generatedTime` | Long | 出力生成プロセスがトリガーされた時間。 |
| `initiator` | 文字列 | 出力生成ワークフローをトリガーしたユーザーのユーザー ID。 |

出力生成メタデータを利用するには、ECMA スクリプトまたは OSGi バンドルを作成します。 メタデータを使用する ECMA スクリプトのサンプルを以下に示します。

>[!NOTE]
>
> ``/etc/workflows/scripts`` ノードにこのスクリプトを作成できます。

```javascript
var session = workflowSession.getSession(); // Obtain session object to read/write the repository.
var payload = workItem.getWorkflowData().getPayload().toString(); // Get the workflow payload (the ditamap file on which the generation was triggered)
var metadata = workItem.getWorkflowData().getMetaDataMap(); // Get the workflow metadata object
var generatedPath = metadata.get("generatedPath"); // supplied by AEM Guides
var username = metadata.get("initiator"); // supplied by AEM Guides
var successful = metadata.get("isSuccess"); // supplied by AEM Guides
var title = metadata.get("outputTitle"); // supplied by AEM Guides
var subject = "Output Generation Finished";
var message = "Generation of output " + title + " just finished " + 
(successful ? "successfully. " : "unsuccessfully. ");
    message += "It was triggered by " + username;    
if (successful) {
    message += "<br/><br/>The path to the generated output is " + 
generatedPath;
}
/*
    MailerAPI.sendMail("dl-docs-authors", subject, message);
*/
```

スクリプトを作成したら、ワークフローでカスタムスクリプトを呼び出します。 その後、要件に応じて、他のワークフロープロセスを呼び出すことができます。 カスタムワークフローを設計したら、ワークフロープロセスの最後の手順として *生成後に最終処理* を呼び出します。 *生成後に最終処理* ステップでは、出力生成プロセスの完了時に、出力生成タスクのステータスが確実に *完了* に更新されます。 カスタムの出力後生成ワークフローを作成したら、任意の出力生成プリセットを使用して設定できます。 必要なプリセットの *生成後のワークフローを実行* プロパティで、必要なワークフローを選択します。 設定した出力プリセットを使用して出力生成タスクを実行すると、タスクのステータス\（「出力」タブ内）が *後処理* に変わります。
