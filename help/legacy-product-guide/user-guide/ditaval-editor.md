---
title: Use DITAVAL editor
description: Understand how to create and edit DITAVAL files using the DIVATAL Editor in AEM Guides. Know how the DITAVAL editor supports DITAVAL files in author and source views.
feature: Authoring, DITAVAL Editor
role: User
hide: true
exl-id: 8eee347d-840e-4eaf-9441-c7c53a7c3aa0
source-git-commit: a70b3ce942b3e69445ad1d7ba6c8f7542e0ff176
workflow-type: tm+mt
source-wordcount: '792'
ht-degree: 0%

---

# DITAVAL エディター {#ditaval-editor}

DITAVAL files are used to generate conditional output. In a single topic, you can add conditions using element attributes to conditionalize content. Then, you create a DITAVAL file wherein you specify the conditions that should be picked up to generate content, and which condition should be left out from the final output.

AEM Guides allows you to easily create and edit DITAVAL files using the DITAVAL editor. The DITAVAL editor retrieves the attributes \(or tags\) defined in your system, and you can use them to create or edit DITAVAL files. For more details about creating and managing tags in AEM, see [Administering Tags](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/authoring/features/tags.html?lang=ja) section in AEM documentation.

## Create DITAVAL file

Perform the following steps to create a DITAVAL file:

1. In the Assets UI, navigate to the location where you want to create the DITAVAL file.

1. Click **Create** \> **DITA Topic**.

1. On the Blueprint page, select DITAVAL file template and click **Next**.

1. On the Properties page, specify the **Title** and **Name** for the DITAVAL file.

   >[!NOTE]
   >
   > The name is automatically suggested based on the Title of your file. If you want to manually specify the file name, then ensure that the Name does not contain any spaces, apostrophe, or braces and ends with .ditaval.

1. 「**作成**」をクリックします。 トピック作成メッセージが表示されます。

   You can choose to open the DITAVAL file for editing in the DITAVAL editor, or the save the topic file in the AEM repository.


## Edit DITAVAL file

Perform the following steps to edit a DITAVAL file:

1. In the Assets UI, navigate to the DITAVAL file that you want to edit.

1. ファイルの排他的ロックを取得するには、ファイルを選択し、**チェックアウト**&#x200B;をクリックします。

1. ファイルを選択し、**編集**&#x200B;をクリックして、AEM Guides DITAVAL エディターでファイルを開きます。

   DITAVAL エディターでは、次のタスクを実行できます。

   A：左パネルの切り替え
左パネル表示を切り替えます。 DITA マップを使用してDITAVAL ファイルを開くと、マップとリポジトリがこのパネルに表示されます。 DITA マップを使用してファイルを開く方法について詳しくは、[DITA マップを使用してトピックを編集](map-editor-advanced-map-editor.md#id17ACJ0F0FHS)を参照してください。

   B：保存
ファイルに加えた変更を保存します。 変更内容はすべて、現在のバージョンのファイルに保存されます。

   C: プロパティを追加
DITAVAL ファイルに1つのプロパティを追加します。

   ![](images/ditaval-editor-props.png)

   最初のドロップダウンには、DITAVAL ファイルで使用できる許可されたDITA属性が一覧表示されます。 サポートされている属性は5つあります（`audience`、`platform`、`product`、`props`、`otherprops`）。

   2番目のドロップダウンリストには、選択した属性に設定された値が表示されます。 次のドロップダウンリストには、選択した属性に対して設定できるアクションが表示されます。 アクション ドロップダウンで使用できる値は、`include`、`exclude`、`passthrough`、および`flag`です。 これらの値について詳しくは、OASIS DITA ドキュメントの[prop](http://docs.oasis-open.org/dita/dita/v1.3/errata01/os/complete/part3-all-inclusive/langRef/ditaval/ditaval-prop.html#ditaval-prop)要素の定義を参照してください

   D：すべてのプロパティを追加
システムで定義されているすべてのコンディショナルプロパティまたは属性を1回のクリックで追加する場合は、「すべてのプロパティを追加」機能を使用します。

   >[!NOTE]
   >
   > 定義済みのすべてのコンディショナルプロパティがDITAVAL ファイルに既に存在する場合、それ以上のプロパティを追加することはできません。 このシナリオでは、エラーメッセージが表示されます。

   ![](images/ditaval-all-props.png)

1. DITAVAL ファイルの編集が完了したら、**保存**&#x200B;をクリックします。

   >[!NOTE]
   >
   > 保存せずにファイルを閉じると、変更は失われます。 AEM リポジトリに変更をコミットしない場合は、**閉じる**&#x200B;をクリックし、**保存されていない変更** ダイアログで&#x200B;**保存せずに閉じる**&#x200B;をクリックします。


## DITAVAL エディタービュー

AEM GuidesのDITAVAL エディターでは、DITAVAL ファイルを2つの異なるモードまたはビューで表示できます。

**作成者**:   これは、DITAVAL エディターの一般的なWhat You See Is What You Get \（WYSISYG\）ビューです。 プロパティを追加または削除するには、プロパティ、その値、およびアクションをドロップダウンリストで表示するシンプルなユーザーインターフェイスを使用します。 作成者ビューでは、個々のプロパティを挿入し、すべてのプロパティをワンクリックで挿入するオプションがあります。

また、ファイル名にポインターを置くと、現在作業しているDITAVAL ファイルのバージョンを確認できます。

**Source**:   Source ビューには、DITAVAL ファイルを構成する基になるXMLが表示されます。 作成者は、このビューで通常のテキスト編集を行うだけでなく、スマートカタログを使用してプロパティを追加または編集することもできます。

スマートカタログを呼び出すには、プロパティ定義の最後にカーソルを置き、「&lt;」と入力します。 エディターには、その場所に挿入できるすべての有効なXML要素のリストが表示されます。

![](images/ditaval-source-view.png)
