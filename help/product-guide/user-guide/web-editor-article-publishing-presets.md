---
title: Web エディターからの出力プリセットの作成
description: Web エディターから出力プリセットを作成します。 AEM Guidesで出力プリセットを編集、名前変更、複製、削除する方法について説明します。
exl-id: cd38b039-ef91-45c9-a226-433e57b09873
feature: Authoring, Features of Web Editor, Publishing
role: User
TQID: https://experienceleague.adobe.com/e5BEPmlmFDY2ipC8nNQPjrgGx3cV6AaD4PmZYw4hAYI
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
source-wordcount: 368
ht-degree: 0%

---

# エディターからナレッジベースの出力プリセットを作成する {#id218CL400JW3}

DITA マップの出力プリセットを作成するには、次の手順を実行します。

1. Assets UIで、編集するマップファイルに移動します。

1. マップファイルの排他的ロックを取得するには、マップファイルを選択し、**チェックアウト**&#x200B;を選択します。

1. マップファイルのアクションメニューから「**トピックを編集**」オプションを選択します。

   マップファイルがエディターで編集用に開きます。

   >[!NOTE]
   >
   > 高度なマップエディターを使用して、マップから任意のトピックを追加または削除できます。 詳細については、[高度なマップエディターの操作](map-editor-advanced-map-editor.md#)を参照してください。

1. 「**マップコンソールで開く**」アイコンを選択します。 マップがマップコンソールで開きます。

1. 「**出力プリセット**」タブに移動し、「+」アイコンを選択して、DITA マップの出力プリセットを作成します。

1. 「**Type**」ドロップダウンから「**ナレッジベース**」を選択し、名前を入力して、**新しい出力プリセット**」ダイアログボックスで「**Adobe Experience Manager**」を選択します。
1. 「**現在のフォルダープロファイルに追加**」オプションを選択して、現在のフォルダープロファイルの出力プリセットを作成します。 ![&#x200B; フォルダープロファイルアイコン &#x200B;](images/global-preset-icon.svg) アイコンは、フォルダープロファイルレベルのプリセットを示します。

   [&#x200B; グローバルおよびフォルダープロファイル出力プリセットの管理](./web-editor-manage-output-presets.md)の詳細をご覧ください。

1. 「**追加**」を選択します。

   ナレッジベース用のプリセットが作成されます。


   ![新規](images/knowledge-base-preset-dialog-box.png)

プリセットを作成したら、特定のナレッジベース記事の出力を生成できます。 これを行うには、**記事** タブに移動し、出力を生成するトピックを選択します。
1. 上部の「**出力を生成**」を選択して、出力を生成します。

   ![](images/add-preset-articles-tab_cs.png)

1. **公開用にファイルを確認** プロンプトで、**公開**&#x200B;を選択して、公開および確認するファイルを選択します。

   ![新規](images/knowledge-base-confirm-files-for-publishing.png)

出力生成プロセスのステータスを表示します。 **トピック**&#x200B;列には、出力が生成されるトピックが一覧表示され、**ステータス**&#x200B;列には各トピックの公開ステータスが表示されます。


![](images/add-preset-output-generated_cs.png)

出力を表示するには、「生成された出力」ダイアログボックスを閉じ、プリセットページで「**出力を表示**」を選択します。


>[!NOTE]
>
> オプションメニューから、既存の出力プリセットの名前を変更、複製、または削除することもできます。



**親トピック：**&#x200B;[&#x200B; エディターからの記事ベースの公開](web-editor-article-publishing.md)
