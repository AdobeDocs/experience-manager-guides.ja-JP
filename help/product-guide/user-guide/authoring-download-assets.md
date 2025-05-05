---
title: ファイルをダウンロード
description: AEM Guidesの DITA マップコンソールからファイルをダウンロードする方法と、AEM リポジトリに DITA マップファイルを書き出す方法を説明します。
exl-id: ae9eb355-d3ac-446a-958b-5f2da43f5533
feature: Content Management
role: User
source-git-commit: 632b253a36822b4b5b93766153f0fc3a1116b616
workflow-type: tm+mt
source-wordcount: '441'
ht-degree: 0%

---

# ファイルをダウンロード {#id216MC0H0BE8}

DITA ファイルと非 DITA ファイルを含むアセットをダウンロードできます。 アセットをダウンロードする方法は複数あります。Adobe Experience Managerにネイティブな方法もあれば、Adobe Experience Manager Guidesでサポートされている方法もあります。 Adobe Experience Managerのネイティブなアセットのダウンロード情報については、Adobe Experience Manager ドキュメントの [Adobe Experience Managerからのアセットのダウンロード ](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/assets/manage/download-assets-from-aem.html?lang=ja) を参照してください。 次の節では、Experience Manager Guidesで DITA マップコンソールを使用してファイルをダウンロードする仕組みについて説明します。

## DITA マップファイルのエクスポート

DITA マップファイルをAdobe Experience Manager リポジトリに格納したら、マップファイルとその依存ファイルをダウンロードできます。 これにより、オフラインでの編集、検証、レビュー、または単にバックアップを作成するために、完全なマップ ファイルを柔軟に共有できます。

次の手順を実行して、DITA マップファイルとその依存ファイルをダウンロードします。

1. Assets UI で、ダウンロードする DITA マップに移動します。

1. DITA マップを選択して、DITA マップコンソールで開きます。

1. 「**トピック**」タブを選択して、DITA マップで使用可能なトピックのリストを表示します。

1. メインツールバーで、「**マップをダウンロード**」を選択します。

   マップをダウンロード ダイアログが表示されます。

   ![](images/download-map.png){width="300" align="left"}

1. 「**ダウンロード**」を選択します。 マップをダウンロード ダイアログでは、次のオプションを選択できます。

   - **ベースラインを使用**:DITA マップ用に作成されたベースラインのリストを取得するには、このオプションを選択します。 特定のベースラインに基づいてマップ・ファイルとそのコンテンツをダウンロードする場合は、ドロップダウン・リストから「ベースライン」を選択します。 ベースラインの操作の詳細については、「[ ベースラインの操作 ](generate-output-use-baseline-for-publishing.md#)」を参照してください。

   - **ファイル階層を統合**：参照されるすべてのトピックおよびメディアファイルを 1 つのフォルダーに保存するには、このオプションを選択します。


   >[!NOTE]
   >
   > オプションを選択せずにマップ ファイルをダウンロードすることもできます。 その場合、参照されるトピックおよびメディア ファイルの最後の永続バージョンがダウンロードされます。

1. 「**ダウンロード**」ボタンを選択すると、マップのダウンロードリクエストはキューに入れられます。 マップをダウンロードする準備が整うと、次の通知が届きます。

   ![](images/download-map-prompt.png){width="550" align="left"}

   - 「**ダウンロード**」を選択して、マップファイルを.zip 形式でダウンロードします。

   - 後でマップファイルをダウンロードするには、「**後でダウンロード**」を選択します。 ダウンロードリンクには、Adobe Experience Manager通知インボックスからアクセスできます。 生成されたマップ通知をインボックスで選択し、.zip 形式でマップをダウンロードします。

   >[!NOTE]
   >
   > デフォルトでは、ダウンロードされたマップはAdobe Experience Managerの通知インボックスに 5 日間残ります。

![](images/download-map-inbox.png){width="300" align="left"}

マップがダウンロードされたら、マップを選択し、上部の「開く」アイコンを使用して、選択したレポートを開くことができます。

**親トピック：**&#x200B;[ コンテンツの管理 ](authoring.md)
