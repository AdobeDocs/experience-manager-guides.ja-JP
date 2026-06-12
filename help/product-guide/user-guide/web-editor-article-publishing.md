---
title: ナレッジベース出力の生成
description: マップコンソールから1つ以上の記事を公開する方法について説明します。 AEM GuidesのDITA マップで1つ以上のトピックの出力を生成します。
exl-id: d89ce69d-8d4c-4265-bfca-60763f561afd
feature: Publishing
role: User
TQID: https://experienceleague.adobe.com/ZoHALUOHRMDqjz0JjR4ZQFXtYju6LQOdy1nwuzwvw5E
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
  - id: afb45297-4313-4f67-818e-bc0b03abe086
subfeature_v2:
  - id: f9dbea21-a714-40dd-bc90-080d8046c93f
  - id: fd6cc9e1-e5e5-494e-b7b1-a32f2d6cd7c9
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 346
ht-degree: 0%

---

# ナレッジベース出力の生成 {#id218CL05J0M1}

Adobe Experience Manager Guidesには、1つまたは複数のナレッジベース記事を同時に公開できる記事ベースの公開機能が搭載されています。

さらに、Adobe Experience Managerのコアコンポーネント上に構築されたOOTB コンテンツテンプレートを利用して、テクニカルコンテンツのナレッジベースのリポジトリを構築できます。 このテンプレートは顧客のニーズに合わせてカスタマイズできます。このエンジンを使用すると、ユーザーはDITA マップを追加の方法で作成し、トピックを準備ができたときに公開できます。

DITA マップ内の一部のトピックに対してのみコンテンツを更新した場合は、必ずしもマップ全体を公開する必要はありません。 更新されたトピックのみを選択して公開できます。

記事ベースの公開の場合は、ナレッジベース DITA マップの出力プリセットを作成する必要があります。 マップには、公開するトピックを含める必要があります。 また、条件を適用し、出力プリセットのAEM Sitesの詳細を指定することもできます。 次に、**出力を生成**&#x200B;機能を使用して出力を生成できます。

記事ベースの出力を生成するには、次の手順を実行します。

1. [記事ベースの出力用のナレッジベースプリセット &#x200B;](./generate-output-knowledge-base.md)を作成します。
1. 「**記事**」タブに移動し、出力を生成するトピックを選択します。
1. 上部の「**出力を生成**」を選択して、出力を生成します。

   ![](images/add-preset-articles-tab_cs.png)

1. **公開用にファイルを確認** プロンプトで、**公開**&#x200B;を選択して、公開および確認するファイルを選択します。

   ![新規](images/knowledge-base-confirm-files-for-publishing.png)

   出力生成プロセスのステータスを表示します。 **トピック**&#x200B;列には、出力が生成されるトピックが一覧表示され、**ステータス**&#x200B;列には各トピックの公開ステータスが表示されます。


   ![](images/add-preset-output-generated_cs.png)

   出力を表示するには、**Output Generated** ダイアログボックスを閉じ、プリセットページで「**出力を表示**」を選択します。


   >[!NOTE]
   >
   > オプションメニューから、既存の出力プリセットの名前を変更、複製、または削除することもできます。


**親トピック：**&#x200B;[&#x200B;編集者との共同作業](web-editor.md)
