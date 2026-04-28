---
title: マップの作成
description: Create a map with Map Editor in AEM Guides. Find the steps to create a map file based on a map template.
feature: Authoring, Map Editor
role: User
hide: true
exl-id: 981ecaeb-9b1f-4c7a-8336-7746a739bedc
source-git-commit: a70b3ce942b3e69445ad1d7ba6c8f7542e0ff176
workflow-type: tm+mt
source-wordcount: '472'
ht-degree: 0%

---

# マップの作成 {#id176FEN0D05Z}

AEM Guides provides two out-of-the-box map templates - DITA map and Bookmap. You can also create your own map templates and share those with your authors to create map files.

Perform the following steps to create a map file:

1. In the Assets UI, navigate to the location where you want to create the map file.

1. Click **Create** \> **DITA Map**.

1. On the Blueprint page, select the type of map templates you want to use and click **Next**.

   >[!NOTE]
   >
   > The way the topics are referred in a map file depend on the map template. For example, if you select the Map template, then the topic references \(`topicref`\) are used to refer to topics. In case of a Bookmap, topic references are created using the `chapter` element in DITA.

   ![](images/map-template.png){width="650" align="left"}

1. On the Properties page, specify the map **Title**.

1. \(Optional\) Specify the file **Name**.

   If your administrator has configured automatic file name based on UUID setting, then you will not see the option to specify the file name. A UUID-based file name is automatically assigned to the file.

   If the file naming option is available, then also the name is automatically suggested based on the Title of your map. If you want to manually specify the map file name, then ensure that the file name does not contain any spaces, apostrophe, or braces and ends with `.ditamap`.

1. 「**作成**」をクリックします。

   The Map Created message appears.

   Every new map file that you create from the Assets UI **Create** \> **DITA Map** or the Web Editor is assigned a unique map ID. Also, the new map is saved as the latest working copy in DAM. Until you save a revision of a newly created map, you will not see any version number in the Version History. If you open the map for editing, the version information is shown in the right top corner of the map file&#39;s tab:

   ![](images/first-version-map-none.png){width="650" align="left"}

   The version information for a newly created map is shown as *none*. 新しいバージョンを保存すると、バージョン番号が1.0として割り当てられます。 新しいバージョンの保存について詳しくは、[新しいバージョンとして保存](web-editor-features.md#save-as-new-version-id209ME400GXA)を参照してください。

   設定済みのマップエディターでマップを開くか、AEM リポジトリにマップファイルを保存します。

   >[!NOTE]
   >
   > 詳細マップエディターを使用するには、Web エディターでマップファイルにアクセスします。 管理者が詳細マップエディターをマップファイルのデフォルトのエディターとして設定している場合、マップファイルは詳細マップエディターで直接開いて編集できます。 Adobe Experience Manager Guides as a Cloud Serviceのインストールと設定の「*高度なマップエディターをデフォルトとして設定する*」セクションを参照してください。


**親トピック：**[ マップエディターの操作](map-editor.md)
