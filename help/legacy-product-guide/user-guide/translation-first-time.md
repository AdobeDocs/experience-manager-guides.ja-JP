---
title: コンテンツ翻訳のベストプラクティス
description: AEM Guidesのコンテンツ翻訳のベストプラクティスについて説明します。 翻訳サービスの設定方法、新しい翻訳プロジェクトの作成方法、翻訳ジョブの開始方法について説明します。
feature: Translation
role: User
source-git-commit: 76c731c6a0e496b5b1237b9b9fb84adda8fa8a92
workflow-type: tm+mt
source-wordcount: '1295'
ht-degree: 2%

---

# コンテンツ翻訳のベストプラクティス {#id1678G0S702F}

コンテンツを翻訳する際は、次の点に注意してください。

- フォルダー名とファイル名は、ファイル命名規則（スペース、アポストロフィ、中括弧、等号、特殊文字、非 ASCII 文字など）に従っている必要があります。

- コンテンツを異なる言語で翻訳する場合、各言語に対応するフォルダーを作成する必要があります。 これらの各言語フォルダーには、その言語に対応するコンテンツが含まれます。 例えば、ドイツ語の場合は `de`、フランス語の場合は `fr` などの言語指定子を使用してフォルダーを作成できます。 または、言語と地域識別子（フランス語の場合は `fr-FR`、カナダ語の場合は `fr-CA`）を使用してフォルダーを作成できます。
- また、ターゲット言語には、インスタンスのターゲット言語フォルダーに従って実際のロケールが選択されている必要があります。
- クラウド設定はソースフォルダーと同じである必要があり、1 つのフォルダーには 1 つのクラウド設定のみが存在する必要があります。 複数の翻訳コネクタを使用する場合は、/conf に複数のフォルダーを作成できます。
- フォルダーには 1000 個を超えるファイルを含めないでください。
- 翻訳プロセスの開始を担当するユーザーが、ソース言語フォルダーとターゲット言語フォルダーに対する読み取り、変更、作成、削除の権限を持っていることを確認します。
- コンテンツの翻訳には翻訳プロジェクトを作成する必要があるので、AEMでプロジェクトを作成するためのアクセス権が必要です。
- マップで条件付きプリセットを使用する場合は、翻訳プロセスを開始する前に条件付きプリセットを作成する必要があります。 また、条件付きプリセットは翻訳済みバージョンのマップにバンドルされているので、翻訳プロセスを開始する前にプリセットを作成して、翻訳済みバージョンで使用できるようにします。
- コンテンツ翻訳プロセスは、AEM Assets UI ではなく、DITA マップコンソールから開始する必要があります。
- 人間による翻訳でコンテンツを翻訳する場合は、コンポーネントベースの DITA 翻訳ワークフローを使用しないでください。 ただし、このオプションは機械翻訳に使用する必要があります。
- グローバルに使用されるコンテンツやメディアは、ローカライゼーションが不要なので、言語コピーから除外する必要があります。
- ローカライズが必要なすべての共通コンテンツは、言語フォルダーの下の共通フォルダーに保存する必要があります。

次の図は、コンテンツと 3 つの言語コピーをグローバルに使用したAEMのフォルダー構造の例を示しています。

![](images/aem-directory_structure.png){width="800" align="left"}

## 翻訳サービスの設定

使用する人間による翻訳または機械翻訳サービスを設定するには、次の手順を実行します。

1. Assets UI で、ソース言語フォルダーを選択します。

1. フォルダーのプロパティを開き、「**Cloud Service**」タブに移動します。

1. 「**0}Cloud Service」タブで、使用する翻訳サービスを設定します。**

   機械翻訳または人間翻訳を設定できます。

   翻訳コネクタの設定が 1 つのフォルダーに 1 つだけあることを確認します。 複数の翻訳コネクタがある場合は、/conf 下に複数のフォルダーを作成できます。 翻訳プロセスを開始する前に、ソース言語フォルダーのクラウド設定を選択する必要があります。

   >[!NOTE]
   >
   > サードパーティの翻訳サービスとの統合について詳しくは、AEM ドキュメントの [ 翻訳統合フレームワークの設定 ](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/administering/reusing-content/translation/integration-framework.html?lang=en) を参照してください。

1. **保存して閉じる** をクリックして、更新したフォルダープロパティを保存します。


>[!TIP]
>
> コンテンツの翻訳に関するベストプラクティスについては、ベストプラクティスガイドの *翻訳* の節を参照してください。

## 新しい翻訳プロジェクトを作成

翻訳プロジェクトを作成するには、次の手順を実行します。

>[!NOTE]
>
> この手順を実行する前に、「コンテンツ翻訳のベストプラクティス [ の説明に従って必要な言語ルートとターゲットフォルダーを作成したことを確認してください ](#id1678G0S702F)。

1. Assets UI で、DITA マップファイルをクリックします。

1. 「**翻訳**」タブをクリックします。

1. **ターゲット言語** リストから、プロジェクトを翻訳するロケールを選択し、「**完了**」をクリックします。

   トピックおよび関連アセットの概要と詳細が表示されます。

   >[!IMPORTANT]
   >
   > **ターゲット言語** には、ソース言語と並行して言語フォルダーが作成された言語のみが表示されます。 ソース言語フォルダーから 1 レベル下など、他のレベルで作成された言語フォルダーも表示されません。 すべてのターゲット言語フォルダーを、ソース言語フォルダーと同じレベルに作成してください。

1. 翻訳のために送信するトピックを選択します。

   次のトピックのフィルタリングオプションも使用できます。

   >[!NOTE]
   >
   > 必要なフィルターを適用した後、フィルターパネルで **完了** をクリックして、選択に基づいてトピックをフィルターします。

   - **翻訳ステータス**：翻訳ステータスに基づいてトピックをフィルタリングする場合に選択します。 使用可能なオプションは、「非同期」、「コピーがない」、「処理中」、「同期中」です。
   - **検索**：トピックタイトルで検索する用語を 1 つ以上入力します。
   - **Sourceの種類**: ファイルの種類に基づいてトピックをフィルターします。 使用可能なオプションは、「すべて」、「DITA」、「DITA マップ」、「リソース」です。
   - **次の後に変更されたSource バージョン**: トピックを変更日時に基づいてフィルター処理します。 指定した日時以降に変更されたすべてのトピックがリストに表示されます。
   - **ベースライン**:「ベースラインの使用」をクリックし、マップに作成されたベースラインを選択します。 選択したベースラインに含まれるすべてのファイルが翻訳ページに表示されます。 ベースラインから目的のファイルを選択し、翻訳プロセスを続行できます。 コンテンツが翻訳されたら、翻訳済みベースラインを書き出すことができます。 翻訳済みベースラインのエクスポートについて詳しくは、「[ 翻訳済みベースラインのエクスポート ](generate-output-use-baseline-for-publishing.md#id196SE600GHS)」を参照してください。
1. フィルターパネルの下部にある **言語コピーを作成/更新** をクリックします。

1. **プロジェクト** リストから「**新しい翻訳プロジェクトを作成**」を選択します。

   >[!NOTE]
   >
   > 既に翻訳プロジェクトがある場合、そのプロジェクトにトピックを追加できます。 「**プロジェクト**」リストから「**既存の翻訳プロジェクトに追加**」オプションを選択し、「**既存の翻訳プロジェクト**」リストからプロジェクトを選択します。

1. 「**プロジェクトタイトル**」フィールドに、プロジェクトのタイトルを入力します。

1. 「**Include DITA Map**」オプションを選択して、変換用のマップを送信します。
1. **開始** をクリックして、新しい翻訳プロジェクトを作成します。

   選択したバージョンのトピックを使用して新しい翻訳プロジェクトが作成されます。 この時点で、翻訳プロジェクトが作成されたことを確認するポップアップメッセージが表示されます。 すべてのターゲット言語コピーが翻訳プロジェクトで使用できるようになると、インボックスに通知が届きます。 翻訳プロジェクトにターゲット言語コピー領域が使用可能になったら、翻訳ジョブを開始できます。

   ![](images/status-translation-uuid.png){width="800" align="left"}


「翻訳」タブには、次のセクションがあります。

- **概要**：参照されるトピックとソース言語の数とそのコードが表示されます。
- **詳細**：トピックのタイトル、トピックのタイプ、トピックの言語コード、ソース言語、ソーストピックのバージョン、トピックに追加されたラベル、翻訳ステータスが表示されます。




## 翻訳ジョブの開始 {#id225IK030OE8}

翻訳ジョブを開始するには、次の手順を実行します。

1. **プロジェクト** コンソールで、ローカライゼーション用に作成したプロジェクトフォルダーに移動します。

1. ローカリゼーションプロジェクトをクリックして詳細ページを開きます。

1. **翻訳ジョブ** タイルの矢印をクリックし、リストから **開始** を選択して、翻訳ワークフローを開始します。

   >[!NOTE]
   >
   > 人間による翻訳サービスを使用している場合は、翻訳用にコンテンツを書き出す必要があります。 翻訳済みコンテンツを取得したら、それを翻訳プロジェクトに読み込む必要があります。

1. 翻訳ジョブのステータスを表示するには、「**翻訳ジョブ**」タイルの一番下にある省略記号をクリックします。


翻訳が完了すると、翻訳ジョブのステータスが *レビューへの準備完了* に変わります。 翻訳プロセスを完了するには、プロジェクトコンソールの翻訳ジョブタイルから翻訳済みコピーとアセットメタデータを承認する必要があります。

>[!NOTE]
>
> 翻訳ジョブの 1 つ以上のトピックの翻訳を拒否すると、拒否されたすべてのトピックの翻訳ステータス **処理中** が元のステータスに戻ります。 参照されたトピックのステータスは、最新の翻訳状態に従ってチェックされ、元に戻されます。 また、宛先プロジェクトで作成された翻訳ファイルは、翻訳が拒否されても削除されません。

**親トピック：**[ コンテンツを翻訳 ](translation.md)