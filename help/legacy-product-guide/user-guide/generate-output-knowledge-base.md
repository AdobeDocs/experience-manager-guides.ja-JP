---
title: ナレッジベース
description: Web エディターとマップダッシュボードからナレッジベースプリセットを作成する方法を説明します。 AEM Guidesでナレッジベースの出力プリセットを設定する。
feature: Publishing
role: User
exl-id: 5fc81de9-9ae0-4cd4-a7ef-b52eed2479f7
source-git-commit: 83966cc9187b13dd3b5956821e0aa038b41db28e
workflow-type: tm+mt
source-wordcount: '1158'
ht-degree: 1%

---

# ナレッジベース {#knowledge-base}

**ナレッジベース** プリセットは、web エディターから作成できます。

リポジトリパネルの **マップ表示** で DITA マップファイルを開き、「**出力**」タブで「+」アイコンを選択して出力プリセットを作成します。次に、「**新規出力プリセット**」ダイアログの **タイプ** ドロップダウンから「**ナレッジベース**」を選択します。 プリセットに名前を付け、**Adobe Experience Manager**、{Salesforce **または** ServiceNow **を使用して出力を生成する対象を選** できます。




## ナレッジベースの設定{#knowledge-base-configuration}


Web エディターでは、次の設定が「一般 **タブと** 記事 **タブに整理されて** ます。 また、ターゲットとして選択した特定の **ナレッジベース**、**Adobe Experience Manager** **、{Salesforce** または **ServiceNow** に対する設定も指定できます。


### 一般

| ナレッジベースオプション | 説明 |
| --- | --- |
| 次を使用して条件を適用 | 次のいずれかのオプションを選択します。<br><br>* **適用なし**：公開済みの出力に条件を適用しない場合は、このオプションを選択します。<br>* **DITAVAL ファイル**: パーソナライズされたコンテンツを生成するには、DITAVAL ファイルを選択します。 参照ダイアログを使用するか、ファイルパスを入力して、複数の DITAVAL ファイルを選択できます。 削除するには、ファイル名の近くにある十字のアイコンを使用します。 DITAVAL ファイルは指定された順序で評価されるため、最初のファイルで指定された条件は、後のファイルで指定された一致条件よりも優先されます。 ファイルを追加または削除することで、ファイルの順序を維持できます。 DITAVAL ファイルを別の場所に移動したり、削除しても、プリセットから自動的には削除されません。 ファイルが移動または削除された場合は、場所を更新する必要があります。 ファイル名の上にマウスポインターを置くと、Adobe Experience Manager リポジトリー内でファイルが格納されているパスが表示されます。 DITAVAL ファイルのみを選択できます。他のファイル タイプを選択すると、エラーが表示されます。<br>* **条件プリセット**：出力の公開中に条件を適用する条件プリセットをドロップダウンから選択します。 このオプションは、DITA マップコンソールの「条件プリセット」タブに存在する条件を追加した場合に表示されます。 条件プリセットについて詳しくは、「[ 条件プリセットの使用 ](generate-output-use-condition-presets.md#id1825FL004PN)」を参照してください。 |
| ベースラインの使用 | 選択した DITA マップにベースラインを作成した場合、このオプションを選択して、公開するバージョンを指定します。<br><br> 詳細については、「[ ベースラインの使用 ](generate-output-use-baseline-for-publishing.md#id1825FI0J0PF) を参照してください。 |
| 生成後のワークフロー | このオプションを選択すると、新しい「生成後のワークフロー」ドロップダウンリストが表示され、Adobe Experience Managerで設定されたすべてのワークフローが表示されます。 出力の生成が完了したら、実行するワークフローを選択する必要があります。<br><br>**注意**:Cloud Serviceのインストールおよび設定ガイドにある [ 出力後の生成ワークフローをカスタマイズする ](/help/product-guide/cs-install-guide/customize-workflows.md#id17A6GI004Y4) 方法の節について詳しく説明します。 |

### ServiceNow

| ServiceNow オプション | 説明 |
| --- | --- |
| Publish プロファイル | ドロップダウンを使用して、管理者が設定した ServiceNow 接続プロファイルから選択します。 管理者が公開プロファイルを作成する方法について詳しくは、「[ 左パネル ](./web-editor-features.md#id2051EA0M0HS)」セクションの **エディター設定** 機能の説明を参照してください。 |
| ナレッジベース | このフィールドを使用して、必要な ServiceNow サポート技術情報を選択します。 ServiceNow サイトにナレッジベースを設定し、権限に基づいてコンテンツを保存できます。 この DITA マップの記事は、これらのナレッジベースに公開できます。 |
| カテゴリとサブカテゴリ | カテゴリは、ServiceNow ナレッジベース記事の検索と分類に使用される階層ツリーのようなものです。 カテゴリとサブカテゴリを追加して、目次のトピックとサブトピックを ServiceNow サイトのそのカテゴリとサブカテゴリに公開します。 |

### Salesforce

| Salesforce オプション | 説明 |
| --- | --- |
| Publish プロファイル | ドロップダウンを使用して、管理者が設定した Salesforce 接続プロファイルから選択します。 管理者が公開プロファイルを作成する方法について詳しくは、「[ 左パネル ](./web-editor-features.md#id2051EA0M0HS)」セクションの **エディター設定** 機能の説明を参照してください。 |
| レコードタイプ | ドロップダウンを使用して、ユーザープロファイルに基づく表示設定に従って、Salesforce で設定されたレコードタイプの中から選択します。 Salesforce レコードタイプは、1 つのタイプの多数のレコードをそのオブジェクトに対してグループ化する方法です。 パブリケーションの編成方法を定義します。 例えば、FAQ ページのレイアウトやフィールドに従って、FAQ レコードタイプを選択して公開できます。 |
| 記事コンテンツフィールド | レコードタイプごとに異なるフィールドと一意のレイアウトを使用できます。 これらのフィールドを使用して、記事のタイプに応じて特定の情報を入力します。 例えば、FAQ の記事のタイトル、回答および式を表示できます。 |
| カテゴリ | ドロップダウンからカテゴリを選択し、そのカテゴリの TOC のトピックを Salesforce サイトに公開します。 |

また、Salesforce および ServiceNow プリセットでは、以下のオプションも表示できます。

| オプション | 説明 |
| --- | --- |
| 記事の本文からトピックの見出しを削除します。 | 公開された出力の記事からトピックの見出しを削除するには、このオプションを選択します。 |
| ドラフトとしてアップロード | トピックをアップロードしてユーザーが使用できるようにする前にドラフトとして共有するには、このオプションを選択します。 |
| 画像をアップロード | トピック内の画像を公開済みの出力に含める場合は、このオプションを選択します。 |
| リンクされたドキュメントのアップロード | トピック内でリンクされているドキュメントを発行済みの出力に含めるには、このオプションを選択します。 |


### Adobe Experience Manager

>[!NOTE]
>
>管理者によって設定されている場合は、Adobe Experience Manager ナレッジベースプリセットを使用できます。 詳細については、『インストールと設定ガイド』の [Web エディターからの記事ベースの公開 ](/help/product-guide/install-guide/configure-article-based-publishing.md) の節を参照してください。

| Adobe Experience Managerオプション | 説明 |
| --- | --- |
| 記事のパスを使用 | このオプションを選択して、サポート技術情報のテンプレートを含むフォルダーの **記事のパス** を表示します。 |
| 記事のパス | このフィールドは、「記事のパスを使用 **オプションを選択した場合に表示さ** ます。 出力が格納されているAdobe Experience Manager リポジトリ内で、ナレッジベースサイトを参照して選択します。 |
| サイト | このフィールドを使用して、必要なAdobe Experience Manager ナレッジベースを選択します。 Adobe Experience Manager サイトにナレッジベースを設定し、権限に基づいてコンテンツを保存できます。 この DITA マップの記事は、これらのナレッジベースに公開できます。 |
| カテゴリ | ドロップダウンからカテゴリを選択し、そのカテゴリに含まれる TOC のトピックをAdobeExperience Manager サイトに公開します。 |
| セクションテンプレートと記事テンプレート | これらは、出力のコンテンツを整理するために使用される構造コンポーネントです。 これらは、Adobe Experience Manager サイトテンプレートで事前に定義されています。 |
| 生成後のワークフロー | このオプションを選択すると、Adobe Experience Managerで設定されたすべてのワークフローを含む新しい生成後ワークフローのドロップダウンリストが表示されます。 出力生成ワークフローの完了後に実行するワークフローを選択する必要があります。<br> インストールおよび設定ガイドの [ 出力後の生成ワークフローをカスタマイズする方法の詳細 ](/help/product-guide/install-guide/customize-workflows.md#id17A6GI004Y4) 節です。 |

>[!TIP]
> 
>**更新** ![ 更新アイコン ](images/navtitle-refresh-icon.svg) を選択して、選択したナレッジベーステンプレートに従って、フィールドの各テンプレートに値を入力します。

### 記事

このタブには、マップのツリーまたは階層ビューが表示されます。 ナレッジベースに公開するトピックを選択します。 目次ノードを展開し、公開するトピックを選択します。

**親トピック：**[ 出力プリセットについて ](generate-output-understand-presets.md)