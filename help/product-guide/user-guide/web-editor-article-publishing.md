---
title: ナレッジベース出力の生成
description: マップコンソールから1つ以上の記事を公開する方法について説明します。 AEM GuidesのDITA マップで1つ以上のトピックの出力を生成します。
exl-id: d89ce69d-8d4c-4265-bfca-60763f561afd
feature: Publishing
role: User
TQID: 'https://experienceleague.adobe.com/ZoHALUOHRMDqjz0JjR4ZQFXtYju6LQOdy1nwuzwvw5E'
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
    internal-label: Publishing
  - id: afb45297-4313-4f67-818e-bc0b03abe086
    internal-label: Knowledge base
  - id: f59890ff-de81-47d5-9ef8-7ab2dd10c6c3
    internal-label: Authoring and publishing content
subfeature_v2:
  - id: f9dbea21-a714-40dd-bc90-080d8046c93f
    internal-label: Map console
  - id: fd6cc9e1-e5e5-494e-b7b1-a32f2d6cd7c9
    internal-label: Output generation
  - id: f901afa4-5613-4581-add5-219fa5f03fb5
    internal-label: Publishing
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
source-git-commit: 43e3af5a6d753e6124acf1d56e99497f6b9c4cd9
workflow-type: tm+mt
source-wordcount: '754'
ht-degree: 0%
---
# ナレッジベース出力の生成 {#id218CL05J0M1}

Adobe Experience Manager Guidesには、1つまたは複数のナレッジベース記事を同時に公開できる記事ベースの公開機能が搭載されています。

さらに、Adobe Experience Managerのコアコンポーネント上に構築されたOOTB コンテンツテンプレートを利用して、テクニカルコンテンツのナレッジベースのリポジトリを構築できます。 このテンプレートは顧客のニーズに合わせてカスタマイズできます。このエンジンを使用すると、ユーザーはDITA マップを追加の方法で作成し、トピックを準備ができたときに公開できます。

DITA マップ内の一部のトピックに対してのみコンテンツを更新した場合は、必ずしもマップ全体を公開する必要はありません。 更新されたトピックのみを選択して公開できます。

記事ベースの公開の場合は、ナレッジベース DITA マップの出力プリセットを作成する必要があります。 マップには、公開するトピックを含める必要があります。 また、条件を適用し、出力プリセットのAEM Sitesの詳細を指定することもできます。 次に、**出力を生成**&#x200B;機能を使用して出力を生成できます。

記事ベースの出力を生成するには、次の手順を実行します。

1. [記事ベースの出力用のナレッジベースプリセット ](./generate-output-knowledge-base.md)を作成します。
1. 「**記事**」タブに移動し、出力を生成するトピックを選択します。

   ![](images/add-preset-articles-tab_cs.png)

   >[!NOTE]
   >
   > Salesforceに公開すると、公開用にトピックが選択されていない場合、**記事** タブの横に警告アイコンが表示されます。 1つ以上のトピックを選択すると、警告アイコンが表示されなくなります。
1. 上部の「**出力を生成**」を選択して、出力を生成します。
1. **公開用にファイルを確認** プロンプトで、**公開**&#x200B;を選択して、公開および確認するファイルを選択します。

   ![新規](images/knowledge-base-confirm-files-for-publishing.png)

   出力生成プロセスのステータスを表示します。 **トピック**&#x200B;列には、出力が生成されるトピックが一覧表示され、**ステータス**&#x200B;列には各トピックの公開ステータスが表示されます。


   ![](images/add-preset-output-generated_cs.png)

   出力を表示するには、**Output Generated** ダイアログボックスを閉じ、プリセットページで「**出力を表示**」を選択します。


   >[!NOTE]
   >
   > オプションメニューから、既存の出力プリセットの名前を変更、複製、または削除することもできます。

## バックエンド処理を使用した拡張Salesforce公開機能

Experience Manager Guides as Cloud Serviceの2026.11.0 リリース以降、強化されたSalesforce パブリッシング体験を利用できます。 バックエンド処理を使用して、大規模な公開ジョブをサポートし、セキュリティを向上させ、既存の公開プロセスの問題に対処します。

>[!NOTE]
>
> 拡張Salesforce パブリッシングエクスペリエンスは、デフォルトでは無効になっています。 有効にするには、Adobe カスタマーサクセス チームにお問い合わせください。

拡張エクスペリエンスを使用してSalesforceに記事を公開する場合は、次の追加機能を使用できます。

- **未選択のトピックに対する警告**：公開用にトピックが選択されていない場合、Salesforce ナレッジベース出力プリセットの「**記事**」タブに警告インジケーターが表示されます。 1つ以上のトピックを選択すると、警告が表示されなくなります。

  ![](./images/articles-tab-salesforce-kb.png)
- **記事レベルの公開ステータス**：出力生成後、成功や失敗などの各記事の公開ステータスと、そのトピックまたはファイル名が&#x200B;**Saleforce公開結果** ダイアログに表示されます。

  ![](./images/salesforce-publish-results-dialog.png)

- **公開ログ**：公開ログを確認し、エラーまたは警告をトラブルシューティングするには、Salesforce ナレッジベース出力プリセットの「**ログを表示**」オプションを使用します。

  ![](./images/salesforce-kb-view-log-option.png)

  ログには、公開結果の概要も表示されます。

  ![](./images/download-log-sf.png)
- **出力履歴**: **マップコンソール**&#x200B;または&#x200B;**Assets UI**&#x200B;から、タスクの公開の出力履歴を表示します。

  公開タスクの管理について詳しくは、[出力生成プロセスの管理](./generate-output-manage-process.md)を参照してください。

  ![](./images/salesforce-publishing-output-history-panel.png)
- **最適化されたアセットの公開：** Salesforceにトピックを公開する際、Experience Manager Guidesは、参照アセット（マルチメディアやその他のDITA以外のファイルなど）が最後の公開以降に変更されたかどうかを確認します。 変更されたアセットのみが再度公開され、変更されていないアセットはスキップされます。 これにより、冗長なアセット更新を減らし、公開の効率を向上させることができます。

### PKCEおよび更新トークンベースの認証

拡張されたSalesforce パブリッシングエクスペリエンスでは、トークンベースの更新の認証もサポートされているため、アクセストークンの有効期限が切れると、Experience Manager GuidesからSalesforceに繰り返しログインする必要がなくなります。

>[!NOTE]
>
> 更新トークンのサポートは、デフォルトでは無効になっています。 有効にするには、Adobe カスタマーサクセス チームにお問い合わせください。

この機能を使用するには、**いつでもリクエストを実行する（refresh_token、offline_access）**&#x200B;が選択したOAuth スコープに含まれていることを確認し、**サポートされる認証フローのコード交換（PKCE）拡張機能のプルーフキーを要求**&#x200B;がSalesforce接続アプリで有効になっていることを確認します。

Experience Manager Guidesで更新トークンのサポートを有効にすると、PKCE サポートが自動的に有効になります。 ただし、認証が正常に機能するように、対応する設定をSalesforceで有効にする必要があります。


**親トピック：**[&#x200B;編集者との共同作業](web-editor.md)
