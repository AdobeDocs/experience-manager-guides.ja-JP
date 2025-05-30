---
title: 変更したトピックを翻訳
description: AEM Guidesで変更されたトピックを再翻訳する方法を説明します。
feature: Translation
role: User
hide: true
exl-id: b623b109-8695-40e5-9e28-78f78cf57ad6
source-git-commit: ea597cd14469f21e197c700542b9be7c373aef14
workflow-type: tm+mt
source-wordcount: '607'
ht-degree: 0%

---

# 変更したトピックを翻訳 {#id16A5A0B6072}

一部のトピックを変更する場合は、そのトピックを再翻訳する必要があります。 変更されたトピックを DITA マップから追跡できます。 ソース言語コピーフォルダで、DITA マップファイルをクリックし、「翻訳」タブをクリックします。 再翻訳が必要かどうかにかかわらず、各トピックのステータスを確認できます。

次の手順を実行して、再翻訳用の変更されたトピックを送信します。

1. ソース言語コピーフォルダから DITA マップファイルをクリックします。

1. 「**翻訳**」タブをクリックします。

1. 左側の **フィルター** パネルで、ステータスを確認する **翻訳言語** を選択し、「**完了**」をクリックします。

   各トピックの翻訳ステータスを確認できます。 翻訳用に送信されたトピックとは異なるリビジョンのトピックがあるトピックには、**期限切れ** ステータスが表示されます。

   >[!NOTE]
   >
   > 翻訳ワークフローは、ソース言語フォルダーのトピックファイルの最後に保存されたリビジョンと、翻訳済みバージョンを比較します。

   矢印をクリックすると、詳細が表示されます。 最新ではない特定の言語コピーが表示されます。

   ![](images/out-of-sync-uuid.png){width="800" align="left"}

1. チェックボックスをオンにして、再翻訳するトピックを選択します。

   非同期の日付を選択すると、参照パネルの **フィルター** アイコンの上に「**言語コピーを作成/更新** オプションと **「同期の不一致ステータスを解除**」ボタンが表示されます。

   **同期の解除** ボタンを使用して、DITA マップ内のトピックの期限切れステータスをオーバーライドできます。 例えば、英語バージョンのトピックで翻訳が不要な変更を加えた場合に、このボタンを使用して、選択したトピックの期限切れステータスを変更できます。

   >[!NOTE]
   >
   > **非同期ステータスを解除** ボタンをクリックすると、選択した非同期トピックのトピックのステータスが最新に設定されます。

1. **言語コピーを更新** をクリックし、翻訳ジョブを設定します。

1. 新しい翻訳プロジェクトを作成するか、既存の翻訳プロジェクトにトピックを追加するかを選択できます。 翻訳プロジェクトを設定するために必要な詳細を指定します。

1. 「**開始**」をクリックします。

   トピックが翻訳用に送信されたことを示す確認メッセージが表示されます。

1. プロジェクトコンソールで翻訳プロジェクトに移動します。 新しい翻訳ジョブカードがフォルダーに作成されます。 省略記号をクリックして、フォルダーのアセットを表示します。

   ![](images/incremental-job.PNG){width="300" align="left"}

1. 翻訳を開始するには、翻訳ジョブ カードの矢印をクリックし、リストから **開始** を選択します。 ジョブが開始されたことを示すメッセージが表示されます。

   また、翻訳ジョブ カードの下部にある省略記号をクリックすると、翻訳されているトピックのステータスを表示することもできます。

   >[!NOTE]
   >
   > 人間による翻訳サービスを使用している場合は、翻訳用にコンテンツを書き出す必要があります。 翻訳済みコンテンツを取得したら、それを翻訳プロジェクトに読み込む必要があります。

1. 翻訳が完了すると、ステータスが **レビューへの準備完了** に変わります。 省略記号をクリックしてトピックの詳細を表示し、ツールバーから次のいずれかの操作を行います。

   - **Assetsで表示** をクリックし、翻訳を確認します。

   - 変更内容が正しく翻訳されたと思われる場合は、「**翻訳を承認**」をクリックします。 確認メッセージが表示されます。

   - ジョブを再実行する必要があると思われる場合は、「**翻訳を拒否**」をクリックします。 却下メッセージが表示されます。

   >[!NOTE]
   >
   > 翻訳されたアセットを承認または却下することが重要です。承認または却下しない場合、ファイルは一時的な場所にとどまり、DAM にコピーされません。

1. Assets UI のソース言語フォルダにある DITA マップファイルに戻ります。 再翻訳されたトピックが同期されるようになりました。


**親トピック：**&#x200B;[ コンテンツを翻訳 ](translation.md)
