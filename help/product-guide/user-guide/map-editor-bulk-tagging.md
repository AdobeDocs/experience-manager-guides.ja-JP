---
title: DITA コンテンツの一括タグ付け
description: AEM Guidesのコンテンツの一括タグ付けを使用して、DITA コンテンツの検出性を向上させます。 1 つまたは複数のトピックにバルクタグを適用、削除、表示、非表示にする方法を説明します。
exl-id: 4c6639a3-333b-44ad-9aec-735a327c3320
feature: Metadata Management
role: User
source-git-commit: 9898f98d897da4da9ca76a89efd262239606ac2e
workflow-type: tm+mt
source-wordcount: '706'
ht-degree: 1%

---

# DITA コンテンツの一括タグ付け {#id179SG0TN05Z}

タグを使用すると、コンテンツリポジトリ内および公開済み出力のコンテンツをグループ化または分類できます。 コンテンツにタグを適用した場合は、コンテンツのオーサリングに役立つ関連トピックを DITA マップ内で簡単に見つけることができます。 公開された出力を使用すると、エンドユーザーは適切なタグを配置することで、適切なコンテンツをより迅速に見つけることができます。

Adobe Experience Manager Guidesを使用すると、いくつかの手順で DITA コンテンツにタグを付けることができます。 一括タグ付け機能を使用して、複数のトピック、DITA マップ、またはサブマップに複数のタグを適用できます。 または、個々のトピックにタグを適用することもできます。 タグ付けはAdobe Experience Managerのネイティブ機能です。タグの作成と管理について詳しくは、Adobe Experience Manager ドキュメントの [ タグの管理 ](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/authoring/features/tags.html?lang=ja) 節を参照してください。

デフォルトでは、Experience Manager Guides リポジトリー内のすべてのタグが保存されているフォルダーの読み取りアクセス権は、Adobe Experience Managerによって付与されません。 Adobe Experience Manager リポジトリで定義されているタグを使用するには、タグが格納されているフォルダーへのアクセス権の付与をシステム管理者に依頼する必要があります。

## 一括タグを適用

一括タグ付け機能を使用して、複数のタグを一度に適用します。 次の手順を実行して、DITA マップ内のトピックにタグを適用します。

1. Assets UI で、DITA マップファイルに移動して選択します。

   出力の生成に使用できる出力プリセットのリストを示す DITA マップコンソールが表示されます。

1. **トピック** を選択します。

   DITA マップで使用可能なトピックのリストが表示されます。 トピックのタイトルの下に、トピックの UUID が表示されます。

1. タグを適用するトピックまたはサブマップを選択します。

   ![](images/apply-tags-uuid.png){width="650" align="left"}


   >[!NOTE]
   >
   > 上のスクリーンショットは、選択および展開されたサブマップを示しています。 サブマップを選択すると、サブマップの下にあるすべてのトピックも選択されます。

1. 「**タグを適用**」を選択します。

   タグを選択ダイアログが表示されます。

1. 選択したトピックに適用するタグを 1 つ以上選択します。

1. 選択を確認します。

   選択したタグがトピックに適用され、トピックのタイトルの横に表示されます。

   >[!NOTE]
   >
   > トピックにタグを追加した後に、トピックを移動または削除すると、それらのトピックのタグも削除されます。 ただし、そのトピックは削除するまでマップに残ります。


## 個々のトピックへのタグの適用

個々のトピックにタグを適用するには、次の手順を実行します。

1. Assets UI で、タグを適用するトピックファイルに移動して選択します。

1. ツールバーの「**プロパティ**」を選択します。

   トピックのプロパティページが表示されます。

1. 「基本」タブで、「**タグ** フィールドの横にある参照アイコンを選択します。

1. 選択したトピックに適用するタグを 1 つ以上選択します。

1. 選択を確認します。

1. 「**タグを適用**」を選択します。

   選択したタグがトピックに適用され、「タグ」フィールドに表示されます。

1. 「**保存して閉じる**」を選択します。


## タグを削除

ビジネスニーズに応じて、任意の DITA トピックのタグ付け情報を変更できます。 すべてのタグを一度に削除したり、トピック上で無効なタグのみを削除したりすることが簡単にできます。

1 つ以上のトピックからすべてのタグを削除するには、次の手順を実行します。

1. Assets UI で、DITA マップファイルに移動して選択します。

   出力の生成に使用できる出力プリセットのリストを示す DITA マップコンソールが表示されます。

1. **トピック** を選択します。

   DITA マップで使用可能なトピックのリストが表示されます。

1. タグを削除するトピックを選択します。

1. 「**タグを削除**」を選択します。

   >[!NOTE]
   >
   > 「タグを削除」アイコンが表示されない場合は、「タグを非表示」機能が有効になっていないことを確認してください。

1. 削除を確認ダイアログで、「**OK**」を選択して、選択したトピックからタグを削除します。


## タグの表示/非表示

トピックに適用されるタグのリストが長い場合は、移動が少し面倒になる場合があります。 タグ非表示アイコンを選択すると、DITA マップのコンソールビューでタグを簡単に非表示にすることができます。 同様に、タグが表示されていない場合、「タグを表示」を選択するとすべてのタグが表示されます。

**親トピック：**&#x200B;[ メタデータを管理 ](manage-metadata.md)
