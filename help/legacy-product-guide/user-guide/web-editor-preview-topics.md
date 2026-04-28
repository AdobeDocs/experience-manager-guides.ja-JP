---
title: トピックのプレビュー
description: AEM Guidesでトピックをプレビューする方法について説明します。 プレビューモードで使用できる機能について説明します。 AEM ガイドでの分岐、元に戻し、以降のバージョン管理。
feature: Authoring
role: User
hide: true
exl-id: c2c24b6f-08e8-47be-be33-b3e9fb50052e
source-git-commit: a70b3ce942b3e69445ad1d7ba6c8f7542e0ff176
workflow-type: tm+mt
source-wordcount: '1863'
ht-degree: 0%

---

# トピックのプレビュー {#id1696II000QR}

トピックが作成されると、AEM Guidesはそのトピックのプレビューを生成します。 プレビューモードには、ドキュメントの操作に使用できる様々な機能が用意されています。

トピックをプレビューするには、次の手順を実行します。

1. Assets UIで、表示するトピックに移動します。
1. 表示するトピックをクリックします。

   トピックのプレビューがAssets UIに表示されます。

   >[!NOTE]
   >
   > アクティブなトピックまたはDITA マップのバージョンは、トピックの「ファイル」タブの右上隅に表示されます。

   >[!IMPORTANT]
   >
   > プレビューツールバーの次の機能の位置は、AEM サーバーの設定によって異なる場合があります。 一部の機能はメインツールバーで利用でき、その他の機能は詳細メニューで利用できます。

## プレビューモードで使用できる機能

![](images/preview-screen.png){width="800" align="left"}

プレビューモードのツールバーから、次の操作を実行できます。

**プロパティ**

選択したトピックのプロパティを表示します。 AEMのバージョンにもとづいて、メタデータ、スケジュール\（de\）アクティベーション、参照、ドキュメントの状態などのプロパティを確認できます。

>[!NOTE]
>
> トピックのタイトルプロパティは、DITA トピックまたはマップの`title` タグから自動入力されます。 プロパティウィンドウを使用してタイトルを変更すると、その変更は失われます。 タイトルプロパティを更新する場合は、Web エディターを使用して更新する必要があります。

「プロパティ」ページには、マップやトピックの使用場所、ドキュメント内の参照など、参照に関する有用な情報が含まれます。 プロパティ ページには、文書の2種類の参照が一覧表示されます（**で使用される**&#x200B;と&#x200B;**送信される参照**）。

**使用済み**&#x200B;の参照には、現在のファイルが参照または使用されているドキュメントが一覧表示されます。 **送信の参照**&#x200B;には、現在の文書で参照されている文書が一覧表示されます。

The \(+\) icon in the **Used In** references section allows you to further navigate upwards to find where that topic is being used or referred.

![](images/used-in-dialog_cs.png){width="800" align="left"}

Clicking the ![](images/right-arrow-used-in-dialog.svg)icon next to a document shows the map or topic files where that document is being further referred.

**Conditional Filtering \(A/B\)**

If your topic has conditional content, then you will see the A/B icon on the toolbar. Clicking on this icon opens a pop-up that allows you to filter the content as per the available conditions in the topic.

>[!NOTE]
>
> The conditional content is highlighted using light background color in the Web Editor.

![](images/conditional-popup_cs.png){width="300" align="left"}

**編集**

- Open the topic for editing in the Web Editor. The **Edit** option will not be available if your administrator has enabled the **Disable Edit Without Checkout** option. With the option enabled, you will see the **Edit** option only after checking out a topic file.

**Key Resolution**

- If you want to use a keyspace file for the topic, click the Key Resolution icon. You can then choose a key space from the Key Resolution pop-up.

**ソース**

- Open the XML source code of a file. You can view the underlying XML code of a map, topic or DITAVAL file by opening the file in the Preview mode and clicking the Source icon. The XML Source pop-up displays the XML source code. You can select a specific code from the file or press `Ctrl`+`a` to select the entire content.

  >[!NOTE]
  >
  > To get the source code view of a DITA map file, select the file in Assets UI and click Source.

  ![](images/xml-source-code-view-from-preview_cs.png){width="800" align="left"}

**Share UUID Link**

- AEM Guides allows you to share the UUID-based links for DITA maps, topics, and image files from the following places:

   - Assets UI
   - DITA map&#39;s console
   - Topic or image&#39;s Preview

A new option **Share UUID Link** is shown in the toolbar of the above-mentioned areas. The following screenshot shows the **Share UUID Link** option in the Preview mode of a topic:

![](images/share-uuid-link_cs.png){width="800" align="left"}

In the Asset UI, this option is visible when you select a file. プレビューモードでは、このオプションはデフォルトでメインツールバーで使用できます。 DITA マップコンソールでは、このオプションは「出力プリセット」セクションに表示されます。

URLをコピーしたら、他のユーザーと同じものを共有して、ファイルに直接アクセスできるようにします。 このリンクは、ファイルがリポジトリ内の別の場所に移動された場合でも有効です。 リンクが失敗するのは、ファイルがリポジトリから削除されたときだけです。

DITA マップコンソールまたはファイルのプレビューモードからリンクを共有する場合、ユーザーはファイルの同じビューに移動します。 ただし、Assets UIからマップファイルのリンクを共有すると、ユーザーはマップのコンソールに移動します。 同様に、トピックファイルまたは画像ファイルの場合、ファイルのプレビューが表示されます。

>[!IMPORTANT]
>
> リンクは、他のトピックの参照リンクとして使用することはできません。リポジトリ内のファイルへの直接アクセスのみが許可されます。 また、ファイルがリポジトリで使用可能である限り、リンクは引き続き有効です。 ファイルがリポジトリ内の別の場所に移動しても、リンクは有効なままです。 リンクは、ファイルがリポジトリから削除されたときにのみ失敗します。

**チェックアウト/チェックイン**

- チェックアウト機能とチェックイン機能を切り替えます。 ファイルがチェックアウトされると、現在のユーザーはファイルに対する排他的な書き込み権限を取得します。 チェックアウトしたファイルは、Web エディターで開いて編集できます。 必要な変更を行ったら、チェックインアイコンをクリックしてDAMにファイルを保存します。

トピックをチェックアウトすると、ファイルのステータスがチェックアウト済みとしてカード表示とリストビューに表示されます。

カード表示でファイルをチェックアウトしました。

![](images/checkout-card-62.png){width="300" align="left"}

リスト表示でファイルをチェックアウトしました。

![](images/checkout-list-62.png){width="550" align="left"}

チェックアウトされた列が表示されない場合は、**リスト表示**&#x200B;の下の&#x200B;**設定を表示**&#x200B;を選択し、**列を設定** ダイアログで&#x200B;**チェックアウト** ステータスを選択します。

![](images/list-view-settings-check-out_cs.png){width="800" align="left"}

>[!TIP]
>
> ファイルのチェックアウトとチェックインの操作に関するベストプラクティスについては、ベストプラクティスガイドの「コンテンツのバージョン管理」セクションを参照してください。

**Web ベースのバージョンの違い**

- トピックに変更が加えられた場合は、そのトピックのさまざまなバージョンで行われた変更を簡単に確認できます。 トピックの様々なバージョンの変更点を調べるには：

  >[!IMPORTANT]
  >
  > 次の手順で説明する方法は、DITA ファイルにのみ適用されます。 DITA以外のファイルの場合は、タイムラインビューを使用してバージョンを作成するか、既存のバージョンのファイルを復元します。

   1. トピックをプレビューモードで開きます。

   1. 左側のパネルで、**バージョン履歴**&#x200B;をクリックし、バージョンを選択します。

      ![](images/timeline-versions62_cs.png){width="800" align="left"}

   1. リストされたバージョンから、基本バージョンとして使用するバージョンを選択し、**バージョンのプレビュー**&#x200B;をクリックします。 選択したバージョンのプレビューがバージョンプレビューウィンドウに表示されます。

   1. 「**差分を表示**」リストから、基本バージョンと比較するバージョンを選択します。

      ![](images/show-diff-list-cropped.png){width="800" align="left"}

      変更されたコンテンツは、トピックプレビューでハイライト表示されます。 緑で強調表示されたコンテンツは、新しく追加されたコンテンツを示し、赤で表示されたコンテンツは削除されたコンテンツです。

      ![](images/version-difference.png){width="800" align="left"}


### 分岐、元に戻し、その後のバージョン管理 {#id193PG0Y051X}

- 一般的なオーサリング環境では、特定のリリースに対応するために、トピックの新しいブランチを作成する必要があります。 他のバージョン管理システムと同様に、AEM Guidesでは、既存のバージョンのトピックからブランチを作成したり、古いバージョンのトピックに戻したりできます。 AEM Guidesのバージョン管理機能を使用すると、次の作業を実行できます。

   - トピックの既存のバージョンからブランチを作成する
   - 新しいブランチで後続のバージョンを作成する
   - トピックの特定のバージョンに戻す

  次の図は、典型的な分岐とその後のバージョン管理システムを示しています。

  ![](images/branching_illustration.png){width="550" align="center"}

  新しいトピックの場合、最初のバージョンには1.0という番号が付けられます。 その後、トピックのすべての新しいバージョンは、1.1、1.2などの増分番号で保存されます。 トピックのブランチを作成すると、ブランチの作成元のバージョン番号を取得し、バージョンの最後に。0を追加して新しいブランチが作成されます。 図に示すように、トピックのバージョン 1.1から新しいブランチが作成されます。 新しいブランチは1.1.0としてバージョン管理されています。 その後、このブランチにトピックの新しいバージョンを保存するたびに、1.1.1、1.1.2などの増分バージョン番号が取得されます。

  分岐と同様に、作業中または現在のバージョンを、リポジトリに存在する任意のバージョンに戻すこともできます。 バージョンに戻すには、トピックの目的のバージョンを選択し、**バージョン履歴** パネルで&#x200B;**このバージョン**&#x200B;に戻すをクリックします。

  次の手順を実行して、ブランチを作成し、バージョンに戻し、トピックの後続のバージョンを維持します。

  >[!IMPORTANT]
  >
  > 次の手順で説明する方法は、DITA ファイルにのみ適用されます。 DITA以外のファイルの場合は、タイムラインビューを使用してバージョンを作成するか、既存のバージョンのファイルを復元します。

   1. Assets UIでトピックにアクセスします。

      >[!NOTE]
      >
      > トピックをプレビューモードで開いて、手順3に進むこともできます。

   1. ブランチを作成するトピックを選択します。

   1. 左側のパネルで、**バージョン履歴**&#x200B;をクリックします。

      >[!NOTE]
      >
      > A list of versions available for the selected topic is displayed. Each version contains the timestamp, user name, version comment, and [label](web-editor-use-label.md#) information.

   1. ブランチを作成するバージョンを選択します。 In the following screenshot, version 1.2 is selected for creating a branch.

      ![](images/branching.png){width="300" align="left"}

      >[!NOTE]
      >
      > トピックの現在のバージョンには、バージョン番号の横に記載されている&#x200B;*\（Current\）*&#x200B;が含まれています。

   1. 「**このバージョンに戻す**」をクリックします。

      A message appears asking you to confirm the creation of a new branch.

   1. *\（Optional\）* メッセージプロンプトで、**現在の作業コピーを新しいバージョンとして保存**&#x200B;を選択するオプションが表示されます。 このオプションの選択に基づいて、次の2つのアクションが可能です。

      - このオプションを選択すると、バージョン 1.1からブランチが作成されます。 また、トピックの新しいバージョンもトピックの現在の作業コピーから作成され、次のバージョン - 1.4として保存されます。

        ![](images/next_version_created_over_working_copy.png){width="300" align="left"}

        Version 1.2 becomes your current working copy of the topic. Any version saved after this is created under the new branch of 1.1. 例えば、このブランチの新しいトピックの後続のバージョンは1.2.0として保存されます。

        ![](images/new_version_in_branch.png){width="300" align="left"}

      - If you do not select this option, then no new version from the current working copy of the topic is created. トピックのバージョン 1.2から新しいブランチが作成されます。 トピックの後続のバージョンは、1.2 ブランチの下に1.2.0、1.2.1などに保存されます。

        ![](images/new_version_without_working_copy.png){width="300" align="left"}

   1. 「**OK**」をクリックします。


  選択したバージョンのトピックから新しいブランチが作成されます。 上記のプロセスは、トピックの特定のバージョンに戻す場合にも適用できます。 特定のバージョンに戻すとは、選択したバージョンから新しいブランチを作成し、そのバージョンをトピックの現在の作業コピーにすることです。 バージョン復元履歴レポートで、復元済みのファイルの履歴を表示することもできます。 このレポートについて詳しくは、[ ファイルのバージョン履歴を元に戻すレポート ](reports-reverted-file-version-history.md#)を参照してください。

**親トピック：**[ トピックの作成とプレビュー](create-preview-topics.md)
