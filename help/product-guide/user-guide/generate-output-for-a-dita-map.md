---
title: 出力を生成
description: AEM Guidesのマップコンソールとマップダッシュボードから DITA マップの出力を生成します。
exl-id: d6cbd44c-e74c-4192-bcc4-fb7752c59508
feature: Publishing
role: User
source-git-commit: ac83f613d87547fc7f6a18070545e40ad4963616
workflow-type: tm+mt
source-wordcount: '368'
ht-degree: 0%

---

# 出力を生成

DITA マップの出力を生成する方法は 2 つあります。

- [Map コンソールから DITA マップの出力を生成する ](#generate-output-for-a-dita-map-from-the-map-console)
- [マップダッシュボードから DITA マップの出力を生成します](#generate-output-for-a-dita-map-from-the-map-dashboard)

## Map コンソールから DITA マップの出力を生成

マップコンソールを使用して DITA マップの出力を生成するには、次の手順を実行します。

1. [ マップコンソールでマップファイルを開きます ](./open-files-map-console.md)。
2. 出力の生成に使用できる **出力プリセット** のリストとともに DITA マップコンソールが表示されます。

3. 出力の生成に使用するプリセットを開き、「**出力を生成**」を選択して生成プロセスを開始します。

   <img src="images/generate-output-pdf.png" alt="「メタデータ」タブ" width="600">

   または、プリセットの上にマウスポインターを置き、プリセットのコンテキストメニューから「**生成**」を選択します。


   <img src="images/generate-preset-map-console.png" alt="「メタデータ」タブ" width="600">

出力の生成が完了したら、「**出力を表示**」を選択して出力を表示します。

画面の右下隅に **成功** ダイアログボックスが表示されます。

出力が成功しなかった場合は、次のエラーメッセージが表示されます。

<img src="images/error-log.png" alt="エラーログ" width="250">

エラーログを表示するには、「**解除**」を選択し、選択した「プリセット」タブにマウスポインターを置いて、プリセットコンテキストメニューから「**ログを表示**」を選択します。

## マップダッシュボードから DITA マップの出力を生成します

マップダッシュボードを使用して DITA マップの出力を生成するには、次の手順を実行します。

1. Assets UI で、公開する DITA マップファイルに移動して選択します。

   出力の生成に使用できる出力プリセットのリストが表示された DITA マップコンソールが表示されます。

1. 出力の生成に使用する 1 つまたは複数の出力プリセットを選択します。

   ![](images/generate-multiple-outputs-uuid.png){align="left"}

1. 「**生成**」アイコンを選択して、出力生成プロセスを開始します。


出力生成リクエストの現在のステータスは、「**出力**」タブに表示されます。 詳しくは、[ 出力生成タスクのステータスを表示 ](./generate-output-manage-process.md#view-the-status-of-the-output-generation-task) を参照してください。

>[!IMPORTANT]
>
> プリセットの出力生成プロセスがキュー内または処理中の場合、同じプリセットに対して別の出力生成タスクを開始することはできません。

1 つ以上のトピックのAEM Sites出力や、DITA マップ全体をマップコンソールから生成することもできます。 詳しくは、[ ナレッジベース出力の生成 ](web-editor-article-publishing.md#id218CK0U019I) を参照してください。




**親トピック：**[ 出力生成 ](generate-output.md)
