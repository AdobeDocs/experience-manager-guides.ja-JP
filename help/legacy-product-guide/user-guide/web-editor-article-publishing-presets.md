---
title: Web エディターからの出力プリセットの作成
description: Web エディターから出力プリセットを作成します。 AEM Guidesで出力プリセットを編集、名前変更、複製、削除する方法について説明します。
feature: Authoring, Features of Web Editor, Publishing
role: User
hide: true
exl-id: ce8e3614-907b-4172-a8f0-e81e4dc096df
TQID: https://experienceleague.adobe.com/nCmtXuQXfOVVHbmGrRT6rVzEa6NlR-o9TGmwhqczWPs
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2:
  - id: ad602516-aca3-4247-9ae8-f393d958efa9
  - id: f89f75b0-cf2e-4e96-aec8-fe8c39cbd0ef
  - id: fd6cc9e1-e5e5-494e-b7b1-a32f2d6cd7c9
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 370
ht-degree: 0%

---

# Web エディターからの出力プリセットの作成 {#id218CL400JW3}

DITA マップの出力プリセットを作成するには、次の手順を実行します。

1. Assets UIで、編集するマップファイルに移動します。

1. マップファイルの排他的ロックを取得するには、マップファイルを選択し、**チェックアウト**&#x200B;をクリックします。

1. マップファイルのアクションメニューから「**トピックを編集**」オプションを選択します。

   マップファイルは、Web エディターで編集するために開きます。

   >[!NOTE]
   >
   > 高度なマップエディターを使用して、マップから任意のトピックを追加または削除できます。 詳しくは、[高度なマップエディターの操作](map-editor-advanced-map-editor.md#)を参照してください。

1. 「**出力**」タブで、「+」アイコンを選択して、DITA マップの出力プリセットを作成します。

   ![](images/output-tab-preset_cs.png){width="350"}

1. プリセットを追加ダイアログにプリセットの名前を入力し、**追加**&#x200B;をクリックします。

1. 次の設定の詳細を入力します。

   1. 「**一般**」タブで必要なオプションを選択します。 出力プリセットは、条件の有無を問わず作成できます。 DITVAL ファイルを使用することもできます。 AEM Guidesでは、特定のバージョンのDITA マップを公開するためのベースラインを選択することもできます。
   1. 「**AEM**」タブにAEM サイトの詳細を入力します。 **サイト**&#x200B;には、AEM リポジトリで使用可能なAEM Sitesのリストが表示されます。 **カテゴリ**、**セクションテンプレート**&#x200B;および&#x200B;**記事テンプレート**&#x200B;は、出力のルックアンドフィールを整理するために使用される構造的コンポーネントです。 これらは、AEM サイトテンプレートで事前定義されています。

      >[!NOTE]
      >
      > 各ドロップダウンを更新して、次のドロップダウンでさらに分類を取得します。

   1. 「**記事**」タブから、出力を生成するトピックを選択します。
1. 上部の「**プリセットを生成**」アイコンを選択して、出力を生成します。

   ![](images/add-preset-articles-tab_cs.png){width="800"}

1. 出力生成プロセスのステータスが表示されます。 **トピック**&#x200B;列には、出力が生成されるトピックが一覧表示され、**ステータス**&#x200B;列には各トピックの公開ステータスが表示されます。

   出力を表示するには、トピックの上にマウスポインターを置き、「出力を表示」をクリックします。

   ![](images/add-preset-output-generated_cs.png){width="800"}


>[!NOTE]
>
> オプションメニューから、既存の出力プリセットを編集、名前変更、複製、または削除することもできます。

![](images/edit-preset_cs.png){width="550"}

**親トピック：**&#x200B;[&#x200B; Web エディターからの記事ベースの公開](web-editor-article-publishing.md)
