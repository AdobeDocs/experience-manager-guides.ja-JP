---
title: DITA コンテンツの一括タグ付け
description: AEM Guidesでコンテンツの一括タグ付けを使用して、DITA コンテンツの見つけやすさを向上させます。 Learn how to apply, remove, show, or hide bulk tags on a single or multiple topics.
feature: Metadata Management
role: User
hide: true
exl-id: b320e34f-ee0a-4cc3-b4f6-d322fbb29844
source-git-commit: a70b3ce942b3e69445ad1d7ba6c8f7542e0ff176
workflow-type: tm+mt
source-wordcount: '716'
ht-degree: 0%

---

# DITA コンテンツの一括タグ付け {#id179SG0TN05Z}

Tags allow you to group or classify content within your content repository and also in the published output. If you have applied tags on your content, you can easily find related topics within a DITA map that can help you to authoring content. 公開された出力により、エンドユーザーは適切なタグを配置して、適切なコンテンツをより早く見つけることができます。

AEM Guidesでは、数回クリックするだけでDITA コンテンツにタグ付けすることができます。 一括タグ付け機能を使用すると、複数のトピック、DITA マップ、またはサブマップに複数のタグを適用できます。 または、個々のトピックにタグを適用することもできます。 タグ付けはAEMのネイティブ機能です。タグの作成と管理について詳しくは、AEM ドキュメントの「[&#x200B; タグの管理](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/authoring/features/tags.html?lang=ja)」セクションを参照してください。

デフォルトでは、AEM Guidesは、AEM リポジトリ内のすべてのタグが保存されているフォルダー上の任意のユーザーに読み取りアクセス権を付与しません。 To use tags defined in the AEM repository, you must ask your system administrator to grant access on the folder where the tags are stored.

## Apply bulk tags

一括タグ付け機能を使用すると、複数のタグを一度に適用できます。 DITA マップのトピックにタグを適用するには、次の手順を実行します。

1. Assets UIで、DITA マップファイルに移動してクリックします。

   DITA マップコンソールが表示され、出力の生成に使用できる出力プリセットのリストが表示されます。

1. **トピック**&#x200B;をクリックします。

   DITA マップで使用可能なトピックのリストが表示されます。 The UUIDs of topics&#39; is shown below the topic title.

1. タグを適用するトピックまたはサブマップを選択します。

   ![](images/apply-tags-uuid.png){width="650" align="left"}


   >[!NOTE]
   >
   > 上のスクリーンショットは、選択および拡張されたサブマップを示しています。 On selecting the sub-map, all the topics under the sub-map are also selected.

1. Click **Apply Tags**.

   The Select Tags dialog appears.

1. Select one or more tags that you want to apply on the selected topics.

1. Confirm your selection.

   The selected tags are applied on the topics and shown next to the topic title.

   >[!NOTE]
   >
   > After adding tags to your topics, if you move or delete a topic, then the tags for those topics are also removed. However, that topic remains in the map until you remove it.


## Apply tags on an individual topic

Perform the following steps to apply tags to an individual topic:

1. In the Assets UI, navigate to and select the topic file on which you want to apply tags.

1. In the toolbar, click **Properties**.

   The topic&#39;s properties page appears.

1. In the Basic tab, click the Browse icon next the **Tags** field.

1. Select one or more tags that you want to apply on the selected topic.

1. Confirm your selection.

1. Click **Apply Tags**.

   The selected tags are applied on the topic and shown in the Tags field.

1. 「**保存して閉じる**」をクリックします。


## タグを削除

As per your business needs, you can change the tagging information for any DITA topic. You can easily remove all tags at once or remove only those tags that are no valid on the topic.

Perform the following steps to remove all tags from one or more topics:

1. Assets UIで、DITA マップファイルに移動してクリックします。

   The DITA map console appears showing the list of Output Presets available to generate output.

1. **トピック**&#x200B;をクリックします。

   A list of topics available in the DITA map are displayed.

1. Select the topics from which you want to remove tags.

1. 「**タグを削除**」をクリックします。

   >[!NOTE]
   >
   > タグを削除アイコンが表示されていない場合は、タグを非表示にする機能が有効になっていないことを確認します。

1. 削除を確認ダイアログで、**OK**&#x200B;をクリックして、選択したトピックからタグを削除します。


## タグの表示/非表示

トピックに適用されるタグのリストが長い場合は、移動が少し面倒になる可能性があります。 タグを非表示アイコンをクリックすると、DITA マップコンソールビューからタグを簡単に非表示にできます。 同様に、タグが表示されていない場合は、「タグを表示」をクリックすると、すべてのタグが表示されます。

**親トピック：**&#x200B;[&#x200B; メタデータの管理](manage-metadata.md)
