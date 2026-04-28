---
title: コンテンツ翻訳のベストプラクティス
description: AEM Guidesにおけるコンテンツ翻訳のベストプラクティスを解説します。 翻訳サービスの設定方法、新しい翻訳プロジェクトの作成方法、翻訳ジョブの開始方法について説明します。
feature: Translation
role: User
hide: true
exl-id: 09e813fd-ec22-4d2e-9ee7-098d562ad44f
source-git-commit: a70b3ce942b3e69445ad1d7ba6c8f7542e0ff176
workflow-type: tm+mt
source-wordcount: '1315'
ht-degree: 2%

---

# コンテンツ翻訳のベストプラクティス {#id1678G0S702F}

コンテンツを翻訳する際には、次の点を考慮してください。

- フォルダー名とファイル名は、次のようなファイル命名規則に準拠している必要があります。スペース、アポストロフィ、中括弧、等号、特殊文字または非ASCII文字を使用しないでください。

- コンテンツを異なる言語で翻訳する場合は、各言語に対応するフォルダーを作成する必要があります。 これらの各言語フォルダーには、その言語に対応するコンテンツが含まれます。 例えば、ドイツ語の`de`、フランス語の`fr`などの言語指定子を使用してフォルダーを作成できます。 または、フランスで使用されるフランス語の場合は`fr-FR`、カナダで使用されるフランス語の場合は`fr-CA`のような言語および地域指定子を使用してフォルダーを作成できます。
- ターゲット言語には、インスタンス上のターゲット言語フォルダーに従って、実際のロケールも選択する必要があります。
- クラウド設定はソースフォルダーと同じである必要があり、1つのフォルダーにクラウド設定が1つだけ存在する必要があります。 複数の翻訳コネクタを使用する場合は、/confの下に複数のフォルダーを作成できます。
- フォルダーには1000個を超えるファイルを含めることはできません。
- 翻訳プロセスの開始を担当するユーザーに、ソース言語フォルダーとターゲット言語フォルダーに対する読み取り、変更、作成および削除権限があることを確認します。
- コンテンツを翻訳するには翻訳プロジェクトを作成する必要があるため、ユーザーはAEMでプロジェクトを作成するためのアクセス権を持っている必要があります。
- コンディショナルプリセットをマップで使用する場合は、翻訳プロセスを開始する前にコンディショナルプリセットを作成する必要があります。 コンディショナルプリセットもマップの翻訳版にバンドルされるため、翻訳プロセスを開始する前にプリセットを作成して、翻訳版で使用できるようにします。
- コンテンツ翻訳プロセスは、AEM Assets UIではなく、DITA マップコンソールから開始する必要があります。
- コンポーネントベースのDITA翻訳ワークフローは、人による翻訳を介してコンテンツを翻訳する場合は使用しないでください。 ただし、このオプションは機械翻訳に使用する必要があります。
- ローカライゼーションを必要としないグローバルに使用されるコンテンツとメディアは、言語コピーから除外する必要があります。
- ローカライズする必要があるすべての一般的なコンテンツは、言語フォルダーの下の共通フォルダーに保持する必要があります。

次の図は、コンテンツと3つの言語コピーをグローバルに使用したAEMのフォルダー構造の例を示しています。

![](images/aem-directory_structure.png){width="800" align="left"}

## Configure translation service

Perform the following steps to configure the human or machine translation service to use:

1. In the Assets UI, select the source language folder.

1. Open the folder properties, and go to **Cloud Services** tab.

1. In the **Cloud Services** tab, configure the translation service that you want to use.

   You can configure machine-based or human translation.

   Ensure that there is only one configuration for translation connector in one folder. Multiple folders can be created under /conf, if there are multiple translation connectors. The source language folder must have a cloud configuration selected before starting the translation process.

   >[!NOTE]
   >
   > See [Configuring the Translation Integration Framework](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/administering/reusing-content/translation/integration-framework.html?lang=en) in AEM documentation for details on integrating with third-party translation services.

1. Click **Save &amp; Close** to save the updated folder properties.


>[!TIP]
>
> See the *Translation* section in the Best practices guide for the best practices around translating content.

## 新しい翻訳プロジェクトを作成

Perform the following steps to create a translation project:

>[!NOTE]
>
> Before performing steps in this procedure, ensure that you have created the required language root and target folders as described in the [Best practices for content translation](#id1678G0S702F).

1. In the Assets UI, click on the DITA map file.

1. Click the **Translation** tab.

1. From the **Target Languages** list, select the locale to which you want to translate your project and click **Done**.

   A Summary and Details of topics and associated assets is shown.

   >[!IMPORTANT]
   >
   > The **Target Languages** show only those languages for which a language folder is created parallel to the source language. A language folder created at any other level, such as one level down from the source language folder is also not shown. Ensure that you create all your target language folders at the same level as your source language folder.

1. Select the topics that you want to send for translation.

   You can also use the following topic filtering options:

   >[!NOTE]
   >
   > After applying the required filter, click **Done** in the Filter panel to filter topics based on your selection.

   - **Translation Status**: Choose to filter topics based on their translation status. 使用可能なオプションは、同期なし、コピーなし、処理中、同期中です。
   - **検索**: トピックタイトルで検索する1つまたは複数の用語を入力します。
   - **Sourceの種類**：ファイルの種類に基づいてトピックをフィルタリングすることを選択します。 使用可能なオプションは、すべて、DITA、DITA マップ、リソースです。
   - **Source バージョン変更後**：変更日時に基づいてトピックをフィルタリングすることを選択します。 指定した日時より後に変更されたすべてのトピックがリストに表示されます。
   - **ベースライン**: 「ベースラインを使用」をクリックし、マップ上に作成されたベースラインを選択します。 選択したベースラインの一部であるすべてのファイルが翻訳ページに表示されます。 ベースラインから目的のファイルを選択し、翻訳プロセスを進めることができます。 コンテンツが翻訳されたら、翻訳されたベースラインを書き出すことができます。 翻訳されたベースラインの書き出しについて詳しくは、[翻訳されたベースラインの書き出し](generate-output-use-baseline-for-publishing.md#id196SE600GHS)を参照してください。
1. フィルターパネルの下部にある「**言語コピーを作成/更新**」をクリックします。

1. **プロジェクト** リストから、**新しい翻訳プロジェクトの作成**&#x200B;を選択します。

   >[!NOTE]
   >
   > 既に翻訳プロジェクトがある場合は、そのプロジェクトにトピックを追加できます。 **プロジェクト** リストから「**既存の翻訳プロジェクトに追加**」オプションを選択し、**既存の翻訳プロジェクト** リストからプロジェクトを選択します。

1. 「**プロジェクトタイトル**」フィールドに、プロジェクトのタイトルを入力します。

1. 「**DITA マップを含める**」オプションを選択して、翻訳用にマップを送信します。
1. **開始**&#x200B;をクリックして、新しい翻訳プロジェクトを作成します。

   選択したバージョンのトピックを含む新しい翻訳プロジェクトが作成されます。 このとき、翻訳プロジェクトが作成されたことを確認するポップアップメッセージが表示されます。 翻訳プロジェクトですべてのターゲット言語コピーを使用できるようになると、インボックスに通知が届きます。 翻訳プロジェクトで使用可能な領域をターゲット言語コピーしたら、翻訳ジョブを開始できます。

   ![](images/status-translation-uuid.png){width="800" align="left"}


「翻訳」タブには、次のセクションがあります。

- **概要**：参照されたトピックの数とソース言語とそのコードを表示します。
- **詳細**: トピックのタイトル、トピックの種類、トピックの言語コード、ソース言語、ソーストピックのバージョン、トピックに追加されたラベル、翻訳ステータスを表示します。




## 翻訳ジョブを開始 {#id225IK030OE8}

Perform the following steps to start the translation job:

1. In the **Projects** console, navigate to the project folder you created for localization.

1. Click the localization project to open the details page.

1. Click the arrow on the **Translation Job** tile, and select **Start** from the list to start the translation workflow.

   >[!NOTE]
   >
   > 人間による翻訳サービスを使用している場合は、翻訳用にコンテンツを書き出す必要があります。 翻訳されたコンテンツが完成したら、それを翻訳プロジェクトに読み込む必要があります。

1. 翻訳ジョブのステータスを表示するには、「**翻訳ジョブ**」タイルの一番下にある省略記号をクリックします。


After the translation completes, the status of the translation job changes to *Ready to Review*. To complete the translation process, you need to accept the translated copy and asset metadata from the Translation Job tile in the Project console.

>[!NOTE]
>
> If you reject the translation for one or more topics in a translation job, the **In Progress** translation status of all the rejected topics reverts to their original status. The status of the referred topics is checked and reverted according to the latest translation state. Also, the translation files created in the destination project are not deleted even if the translation is rejected for them.

**親トピック：**&#x200B;[&#x200B; コンテンツを翻訳](translation.md)
