---
title: ワークフローの設定とカスタマイズ
description: ワークフローを設定およびカスタマイズする方法について説明します
feature: Workflow Configuration
role: Admin
level: Experienced
source-git-commit: 834959a6a0e22cd5d2b2c5d0e57ceb6d45c0c666
workflow-type: tm+mt
source-wordcount: '2158'
ht-degree: 2%

---

# ワークフローの設定とカスタマイズ {#id181AI0OJ0RO}

ワークフローを使用すると、Adobe Experience Manager \（AEM\）アクティビティを自動化できます。 ワークフローは、特定の順序で実行される一連のステップで構成されます。 各ステップで実行するアクティビティを定義できます。 例えば、トピックレビューの作成時に、グループ内のすべてのレビュー担当者にメール通知を送信できます。 または、出力生成タスクが完了したときにパブリッシャーに通知を送信します。

AEMのワークフローについて詳しくは、以下を参照してください。

| Cloud Service | オンプレミス |
|-------------|------------|
| <ul><li>[&#x200B; ワークフローインスタンスの管理](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/administering/workflows-administering.html?lang=ja)</li><li>ワークフローの適用と参加：[&#x200B; プロジェクトワークフローの操作](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/authoring/projects/workflows.html)</li></ul> | <ul><li>[ワークフローの管理](https://helpx.adobe.com/experience-manager/6-5/sites/administering/using/workflows.html)</li><li>ワークフローの適用と参加：[&#x200B; ワークフローの操作](https://helpx.adobe.com/experience-manager/6-5/sites/authoring/using/workflows.html)</li><li>ワークフローモデルの作成とワークフロー機能の拡張：[&#x200B; ワークフローの開発と拡張](https://helpx.adobe.com/experience-manager/6-5/sites/developing/using/workflows.html)</li><li>重要なサーバーリソースを使用するワークフローのパフォーマンスを改善しています：[同時ワークフロー処理](https://helpx.adobe.com/experience-manager/6-5/sites/deploying/using/configuring-performance.html#ConfiguringforPerformance)</li></ul> |

このトピックでは、AEM Guidesに付属するデフォルトのワークフローで行える様々なカスタマイズについて説明します。

## レビューワークフローをカスタマイズ {#id176NE0C00HS}

あらゆる企業のコンテンツオーサリングチームは、ビジネス要件に対応するために特定の方法で作業しています。 一部の組織では専用のエディターを導入していますが、別の組織では自動化されたエディトリアルレビューシステムを導入している場合もあります。 例えば、一般的なオーサリングと公開のワークフローでは、作成者がコンテンツのオーサリングを行うたびに、レビュー担当者に自動的に送信され、レビューが完了すると、最終的な出力を生成するためにパブリッシャーに送信されます。 AEMでは、コンテンツとアセットに対して行ったアクティビティを、プロセスの形で組み合わせ、AEM ワークフローにマッピングできます。 AEMのワークフローについて詳しくは、AEM ドキュメントの[&#x200B; ワークフローの管理](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/administering/workflows-administering.html?lang=ja)を参照してください。

AEM Guidesでは、デフォルトのレビューワークフローをカスタマイズできます。 次の4つのカスタムレビュー関連プロセスを、他のオーサリングワークフローまたは公開ワークフローで使用できます。

- **レビューを作成**：このプロセスは、レビュータスクの作成に必要なメタデータを準備します。 例えば、レビュー担当者へのレビュー権限の割り当て、レビュー中のトピックのステータスの設定、レビュータイムラインの設定などを行います。 4つのプロセスのうち、カスタムワークフローに含める必要がある必須プロセスはこれだけです。 ワークフローで、他の3つのプロセスを含めるか除外するかを選択できます。

- **レビュータスクの割り当て**：このプロセスはレビュータスクを作成し、開始者とレビューアーにタスク通知を送信します。

- **レビュー電子メールを送信**：このプロセスでは、レビュー電子メールを開始者とレビュー担当者に送信します。

- **レビューを終了するジョブをスケジュール**：このプロセスにより、期限に達したときにレビュープロセスが完了します。


カスタムレビューワークフローを作成する場合、最初のタスクは、レビューを作成プロセスで必要なメタデータを設定することです。 これを行うには、ECMA スクリプトを作成します。 メタデータを割り当てるECMA スクリプトのサンプルを、以下のトピックとマップの両方に示します。

トピック **の**

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

**マップ**&#x200B;の場合

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

これらのスクリプトは`/etc/workflows/scripts` ノードで作成できます。 次の表に、前述のECMA スクリプトの両方で割り当てられるプロパティを示します。

| Property | タイプ | 説明 |
|--------|----|-----------|
| `initiator` | String | レビュータスクを開始するユーザーのユーザーID。 |
| `operation` | 文字列 | `AEM_REVIEW`に設定された静的な値。 |
| `orgTopics` | 文字列 | レビュー用に共有されているトピックのパス。 複数のトピックをコンマで区切って指定します。 |
| `payloadJson` | JSON オブジェクト | 次の値を指定します。-   `base`：レビュー用に送信されたトピックを含む親フォルダーのパス。 <br> -   `asset`：レビュー用に送信されたトピックのパス。 <br> -   `referrer`：空白のままにします。 |
| `deadline` | 文字列 | 時間を`yyyy-MM-dd'T'HH:mm:ss.SSSXXX`形式で指定してください。 |
| `title` | 文字列 | レビュータスクのタイトルを入力します。 |
| `description` | 文字列 | レビュータスクの説明を入力します。 |
| `assignee` | 文字列 | レビュー用にトピックを送信するユーザーのユーザーID。 |
| `status` | 整数 | 静的値を1に設定します。 |
| `startTime` | Long | 現在のシステム時間を取得するには、`System.currentTimeMillis()`関数を使用します。 |
| `projectPath` | 文字列 | レビュータスクが割り当てられるレビュープロジェクトのパス（例：/content/projects/samplereviewproject）。 |
| `reviewType` | 文字列 | 静的値「AEM」。 |
| `versionJson` | JSON オブジェクト | versionJsonは、各トピックオブジェクトが次の構造を持つレビュー中のトピックのリストです[ { &quot;path&quot;: &quot;/content/dam/1-topic.dita&quot;, &quot;version&quot;: &quot;1.1&quot;, &quot;review&quot;: true, &quot;reviewers&quot;: [&quot;projects-we_retail-editor&quot;] } ] &rbrack; |
| `isDitamap` | ブーリアン | false/true |
| `ditamapHierarchy` | JSON オブジェクト | マップをレビュー用に送信する場合、ここで示す値は次のようになります。[ { &quot;path&quot;: &quot;GUID-f0df1513-fe07-473f-9960-477d4df29c87.ditamap&quot;, &quot;items&quot;: [ { &quot;path&quot;: &quot;GUID-9747e8ab-8cf1-45dd-9e20-d48f67d&quot;, dita&quot; &quot;title&quot;: &quot;&quot;, &quot;items&quot;: [] } ] } ] &rbrack; |
| `ditamap` | 文字列 | レビュータスクのditamapのパスを指定します |
| `allowAllReviewers` | ブーリアン | false/true |
| `notifyViaEmail` | ブーリアン | false/true |
| `reviewVersion` | 文字列 | レビューワークフローの現在のバージョンを指定します。 デフォルト値は`3.0`に設定されています。<br> [作成者](../user-guide/review-close-review-task.md)および[&#x200B; レビュー担当者](../user-guide/review-complete-review-tasks.md)の新しいレビューワークフロー機能を有効にするには、`reviewVersion`が`3.0`に設定されていることを確認してください。 |


スクリプトを作成したら、ワークフローで「レビューを作成」プロセスを呼び出す前にスクリプトを呼び出します。 その後、要件に応じて、他のレビューワークフロープロセスを呼び出すことができます。

### パージ設定からレビューワークフローを削除する

ワークフローエンジンのパフォーマンスを向上させるために、完成したワークフローインスタンスをAEM リポジトリから定期的にパージできます。 デフォルトのAEM設定を使用している場合、完了したすべてのワークフローインスタンスは、特定の時間が経過した後にクリーンアップされます。 これにより、すべてのレビューワークフローがAEM リポジトリからパージされます。

自動消去の設定からレビューワークフローモデル \（information\）を削除することで、レビューワークフローの自動消去を防止できます。 **Adobe Granite Workflow Purge Configuration**&#x200B;を使用して、レビューワークフローモデルを自動パージ リストから削除する必要があります。

**Adobe Granite Workflow Purge Configuration**&#x200B;で、安全にパージできるワークフローを1つ以上一覧表示してください。 例えば、AEM Guidesで作成された次のいずれかのワークフローを使用できます。

- /etc/workflow/models/publishditamap/jcr:content/model
- /etc/workflow/models/post-dita-project-creation-tasks/ jcr:content/model

**Adobe Granite Workflow Purge Configuration**&#x200B;にワークフローを追加すると、AEMが設定にリストされているワークフローのみをパージするようになります。 これにより、AEMがレビューワークフロー情報をパージしないようにします。

**Adobe Granite Workflow Purge Configuration**&#x200B;の設定について詳しくは、AEM ドキュメントの&#x200B;*Workflow Instancesの管理*&#x200B;を参照してください。

### メールとAEM通知のカスタマイズ

AEM Guidesの多くのワークフローでは、メール通知を使用しています。 例えば、レビュータスクを開始すると、メール通知がレビュー担当者に送信されます。 ただし、電子メール通知が送信されるようにするには、AEMでこの機能を有効にする必要があります。 AEMでメール通知を有効にするには、AEM ドキュメントの記事[&#x200B; メールの送信](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/implementing/developing/development-guidelines.html?lang=ja#sending-email)を参照してください。

AEM Guidesには、レビューワークフローで使用される電子メールとAEM通知のセットが含まれており、カスタマイズできます。 これらの通知をカスタマイズするには、次の手順を実行します。

1. パッケージマネージャーを使用して`/libs/fmdita/mail/review` フォルダーをダウンロードします。

   >[!NOTE]
   >
   > ``libs`` ノードで使用できる既定の構成ファイルのカスタマイズを行わないでください。 ``libs`` ノードで``apps`` ノードのオーバーレイを作成し、``apps`` ノードでのみ必要なファイルを更新する必要があります。

1. `review` フォルダーには、次のサブフォルダーが含まれています。

   - `aem-notification`
   - `CSS`
   - `email-notification`

   これらのサブフォルダーの詳細な説明を以下に示します。

   | サブフォルダーのレビュー | 説明 |
   |-----------------|-----------|
   | `aem-notification` | カスタマイズ可能な様々なAEM通知タイプが含まれています。<br> `closed` <br> `content-updated` <br> `feedback-addressed` <br> `feedback-provided` <br> `requested` <br> `reviewer-removed` <br> `tag-mention` <br>これらのサブフォルダー内には、`primary.vm`および`secondary.vm`個のファイルが配置されており、それぞれAEM通知のタイトルと説明をカスタマイズできます。 |
   | `CSS` | メール通知のスタイル設定をカスタマイズするための`email-notification.css` ファイルが含まれています。 |
   | `email-notification` | カスタマイズ可能な様々なメール通知タイプが含まれます。<br> `closed` <br> `content-updated` <br> `feedback-addressed` <br> `feedback-provided` <br> `requested` <br> `reviewer-removed` <br> `tag-mention` <br>これらのサブフォルダー内には、`primary.vm`および`secondary.vm`個のファイルが配置されており、それぞれメール通知の件名と本文をカスタマイズできます。 |

各通知タイプの定義は次のとおりです。

- `closed`：レビュータスクが閉じられたときのトリガー。
- `content-updated`：作成者またはイニシエータがコンテンツを更新するとトリガーが発生します。
- `feedback-addressed`：作成者またはイニシエータがコメントに対応し、レビュー担当者に再審査を依頼する際のトリガー。
- レビューアーが、レビュータスクの作成者または開始者にタスクレベルのコメントを提供することで、タスクを完了とマークすると、`feedback-provided`件のトリガーが発生します。
- `requested`：作成者または開始者がレビュータスクを作成する際のトリガー。
- `reviewer-removed`：レビュー担当者がレビュータスクから割り当て解除されたときのトリガー。
- `tag-mention`: レビューコメントでユーザーがメンションまたはタグ付けされたときのトリガー。

電子メールまたはAEM通知をカスタマイズする際は、`primary.vm`および`secondary.vm` ファイルで使用されている次の事前定義済み変数セットのみを使用するようにしてください。


| **変数名** | **説明** | **データ型** |
|-------------------------|---------------------------------------------------------------|---------------|
| `projectPath` | レビュータスクを含むプロジェクトへのパス | 文字列 |
| `reviewTitle` | レビュータスクのタイトル | 文字列 |
| `projectName` | プロジェクト名 | 文字列 |
| `commentator` | コメントを追加したユーザーの名前 | 文字列 |
| `commentExcerpt` | 追加されたコメントのスニペット | 文字列 |
| `taskLink` | レビュータスクへの直接リンク | URL |
| `authorName` | レビュータスクを作成または更新した作成者の名前 | 文字列 |
| `dueDate` | レビュータスクの期日 | 日付 |
| `reviewerName` | タスクに割り当てられたレビュー担当者の名前 | 文字列 |
| `user` | 作成者、レビュー担当者、管理者など、レビュータスクに関わるユーザー。 | 文字列 |
| `recipient` | 通知を受信する特定のユーザー | 文字列 |


## 出力後の生成ワークフローのカスタマイズ {#id17A6GI004Y4}

AEM Guidesでは、出力後の生成ワークフローを柔軟に指定できます。 AEM Guidesを使用して生成された出力に対して、いくつかの後処理タスクを実行できます。 例えば、生成されたAEM サイト出力にCQ タグを適用したり、PDF出力に特定のプロパティを設定したり、出力が生成されたら、一連のユーザーにメールを送信したりできます。

出力後の生成ワークフローとして使用する新しいワークフローモデルを作成できます。 出力後の生成ワークフローがトリガーされると、出力生成ワークフローはワークフローメタデータマップを通じてコンテキスト情報を共有します。この情報を使用して、生成された出力に対する処理を実行できます。 次の表に、メタデータとして共有されるコンテキスト情報を示します。

| Property | タイプ | 説明 |
|--------|----|-----------|
| ``outputName`` | String | 出力の生成に使用する出力プリセットの名前。 |
| `generatedPath` | 文字列 | 生成された出力が保存されるDAM内のパス。 |
| `outputType` | com.adobe.fmdita.output.OutputType | 出力プリセットのタイプ。 |
| `outputTitle` | 文字列 | 出力プリセットのタイトル。 |
| `outputHistoryPath` | 文字列 | 履歴ノードのリポジトリーパス。 |
| `isSuccess` | ブーリアン | 出力生成プロセスの最終ステータス（成功または失敗）を示すフラグ。 |
| `logPath` | 文字列 | 出力生成ログが保存されるDAM内のパス。 |
| `generatedTime` | Long | 出力生成プロセスがトリガーされた時刻。 |
| `initiator` | 文字列 | 出力生成ワークフローをトリガーしたユーザーのユーザーID。 |

出力生成メタデータを使用するには、ECMA スクリプトまたはOSGi バンドルを作成します。 メタデータを使用するECMA スクリプトのサンプルを以下に示します。

>[!NOTE]
>
> このスクリプトは``/etc/workflows/scripts`` ノードで作成できます。

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

スクリプトを作成したら、ワークフローでカスタムスクリプトを呼び出します。 そして、要件に応じて、他のワークフロープロセスを呼び出すことができます。 カスタムワークフローをデザインしたら、*ポストジェネレーションの最終版*&#x200B;をワークフロープロセスの最後のステップとして呼び出します。 *生成後の最終処理*&#x200B;手順では、出力生成プロセスの完了時に、出力生成タスクのステータスが&#x200B;*完了*&#x200B;に更新されます。 カスタムの出力後生成ワークフローを作成した後、任意の出力生成プリセットを使用して設定できます。 必要なプリセットの「*生成後ワークフローを実行*」プロパティで、必要なワークフローを選択します。 設定された出力プリセットを使用して出力生成タスクを実行すると、タスクのステータス \（出力タブの\）が&#x200B;*後処理*&#x200B;に変わります。


## アセットの更新ワークフローのカスタマイズ（オンプレミスのみ）

デフォルトでは、AEM Asset \（XMLまたは非XML\）を作成または更新するたびに、*DAM アセットの更新* ワークフロートリガーが実行されます。 例えば、トピックを作成または更新すると、*DAM アセットの更新* ワークフローが実行されます。 *DAM アセットの更新* ワークフローは、Assetsから関連メタデータを抽出しようとします。 標準装備の&#x200B;*アセット更新ワークフロー*&#x200B;には、DITA ファイルから関連するメタデータを抽出する手順はなく、*DAM アセット更新* ワークフローは、実行時に多くのログを生成します。 追加のログを避ける場合は、すべてのXML ファイルを処理からスキップするようにワークフローを設定できます。

次の手順を実行して、*DAM アセットの更新* ワークフローをカスタマイズします。

1. **ワークフローランチャー** ページを開きます。

   ワークフローランチャーページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/libs/cq/workflow/admin/console/content/launchers.html
   ```

1. ワークフローランチャーのリストから、**DAM アセットの更新** ワークフローのプロパティを開きます。

1. 次の式を使用して条件を追加します。

   ```json
   jcr:content/metadata/dc:format!=application/xml
   ```

1. 「**保存して閉じる**」をクリックします。


## 後処理XML ワークフローの設定（オンプレミスのみ）

AEM Guidesでは、AEMでDITA コンテンツを操作するための多数のワークフローを作成します。 例えば、DITA コンテンツのアップロードや既存のコンテンツの更新時に実行されるワークフローがあります。 これらのワークフローはDITA ドキュメントを解析し、メタデータの設定、新しいDITA マップへのデフォルト出力プリセットの追加、その他の関連タスクなど、様々なタスクを実行します。

>[!NOTE]
>
> デフォルトの後処理ワークフローをカスタマイズまたは拡張するには、Adobe Experience Manager Guides *の* API リファレンスに記載されている後処理イベントハンドラーを使用できます。

次のプロパティは、AEM Guidesでの後処理ワークフローの実行方法を制御します。

>[!NOTE]
>
> 次のプロパティは、Web コンソールからアクセスできます。http://&lt;server name\>:&lt;port\>/system/console/configMgr

| プロパティ | バンドル名 | 説明 |
|--------|-----------|-----------|
| Dynamic Outrefs | `com.adobe.fmdita.postprocess.PostProcessObservation` | 後処理が実行されていないすべてのファイルについて、トピックファイルを解析して出力参照を取得します。 処理するファイル数が多い場合はシステムを過負荷にする可能性があるため、このオプションを無効にすることをお勧めします。 |
| 後処理Threads | `com.adobe.fmdita.config.ConfigManager` | 後処理ワークフローに使用する後処理スレッドの数を設定します。 <br> デフォルト値は1です。 |