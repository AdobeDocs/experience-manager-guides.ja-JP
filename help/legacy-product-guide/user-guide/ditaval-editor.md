---
title: DITAVAL エディターを使用
description: AEM GuidesのDIVATAL エディターを使用して、DITAVAL ファイルを作成および編集する方法について説明します。 DITAVAL エディターがオーサービューとソースビューでDITAVAL ファイルをどのようにサポートしているかをご確認ください。
feature: Authoring, DITAVAL Editor
role: User
hide: true
exl-id: 8eee347d-840e-4eaf-9441-c7c53a7c3aa0
TQID: https://experienceleague.adobe.com/kIveRGwg17BgYGEsn9dgAtr8r5HFlEya-nD7gK2G--c
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
subfeature_v2:
  - id: ad602516-aca3-4247-9ae8-f393d958efa9
  - id: ca593223-d11a-4a52-b369-a8e081e71737
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 792
ht-degree: 0%

---

# DITAVAL エディター {#ditaval-editor}

DITAVAL ファイルは、条件付き出力の生成に使用されます。 1つのトピックで、要素の属性を使用して条件を追加し、コンテンツをコンディショナライズできます。 次に、DITAVAL ファイルを作成します。このファイルでは、コンテンツを生成するために取得する必要がある条件と、最終的な出力から除外する条件を指定します。

AEM Guidesでは、DITAVAL エディターを使用してDITAVAL ファイルを簡単に作成および編集できます。 DITAVAL エディターは、システムで定義されている属性\（またはタグ\）を取得し、それらを使用してDITAVAL ファイルを作成または編集できます。 AEMでのタグの作成と管理について詳しくは、AEM ドキュメントの「[&#x200B; タグの管理](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/authoring/features/tags.html?lang=ja)」を参照してください。

## DITAVAL ファイルを作成

DITAVAL ファイルを作成するには、次の手順を実行します。

1. Assets UIで、DITAVAL ファイルを作成する場所に移動します。

1. **作成** \> **DITA トピック**&#x200B;をクリックします。

1. ブループリントページで、「DITAVAL ファイルテンプレート」を選択し、「**次へ**」をクリックします。

1. プロパティ ページで、DITAVAL ファイルの&#x200B;**タイトル**&#x200B;と&#x200B;**名前**&#x200B;を指定します。

   >[!NOTE]
   >
   > 名前は、ファイルのタイトルに基づいて自動的に提案されます。 ファイル名を手動で指定する場合は、「名前」にスペース、アポストロフィ、または中括弧が含まれておらず、.ditavalで終わっていることを確認します。

1. 「**作成**」をクリックします。 トピック作成メッセージが表示されます。

   DITAVAL エディターでDITAVAL ファイルを開くか、AEM リポジトリでトピックファイルを保存するかを選択できます。


## DITAVAL ファイルを編集

DITAVAL ファイルを編集するには、次の手順を実行します。

1. Assets UIで、編集するDITAVAL ファイルに移動します。

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

**作成者**：これは、DITAVAL エディターの一般的な表示です。表示される内容は、\（WYSISYG\）です。 プロパティを追加または削除するには、プロパティ、その値、およびアクションをドロップダウンリストで表示するシンプルなユーザーインターフェイスを使用します。 作成者ビューでは、個々のプロパティを挿入し、すべてのプロパティをワンクリックで挿入するオプションがあります。

また、ファイル名にポインターを置くと、現在作業しているDITAVAL ファイルのバージョンを確認できます。

**Source**: Source ビューには、DITAVAL ファイルを構成する基になるXMLが表示されます。 作成者は、このビューで通常のテキスト編集を行うだけでなく、スマートカタログを使用してプロパティを追加または編集することもできます。

スマートカタログを呼び出すには、プロパティ定義の最後にカーソルを置き、「&lt;」と入力します。 エディターには、その場所に挿入できるすべての有効なXML要素のリストが表示されます。

![](images/ditaval-source-view.png)
