---
title: 出力を生成
description: AEM Guidesのマップコンソールとマップダッシュボードから、DITA マップの出力を生成します。
exl-id: d6cbd44c-e74c-4192-bcc4-fb7752c59508
feature: Publishing
role: User
source-git-commit: 12ba7129255257970ddd7a0989149be664ce9803
workflow-type: tm+mt
source-wordcount: '511'
ht-degree: 0%

---

# 出力を生成

DITA マップの出力を生成するには、次の2つの方法があります。

- [ マップコンソールからDITA マップの出力を生成](#generate-output-for-a-dita-map-from-the-map-console)
- [マップダッシュボードからDITA マップの出力を生成する](#generate-output-for-a-dita-map-from-the-map-dashboard)

## マップコンソールからDITA マップの出力を生成する

マップコンソールを使用してDITA マップの出力を生成するには、次の手順を実行します。

1. [ マップコンソールでマップファイルを開く](./open-files-map-console.md)。
2. DITA マップコンソールが表示され、出力の生成に使用できる&#x200B;**出力プリセット**&#x200B;のリストが表示されます。

3. 出力の生成に使用するプリセットを開き、**出力の生成**&#x200B;を選択して生成プロセスを開始します。

   <img src="images/generate-output-pdf.png" alt="「メタデータ」タブ" width="600">

   または、プリセットにカーソルを合わせて、プリセットコンテキストメニューから「**生成**」を選択します。


   <img src="images/generate-preset-map-console.png" alt="「メタデータ」タブ" width="600">

出力の生成が完了したら、**出力を表示**&#x200B;を選択して出力を表示します。

**成功** ダイアログボックスが画面の右下隅に表示されます。

出力が成功しない場合は、以下のエラーメッセージが表示されます。

<img src="images/error-log.png" alt="エラーログ" width="250">

エラーログを表示するには、**閉じる**&#x200B;を選択し、選択したプリセットタブにカーソルを合わせて、プリセットコンテキストメニューから&#x200B;**ログを表示**&#x200B;を選択します。

## マップダッシュボードからDITA マップの出力を生成する

マップダッシュボードを使用してDITA マップの出力を生成するには、次の手順を実行します。

1. Assets UIで、パブリッシュするDITA マップファイルに移動して選択します。

   DITA マップコンソールに、出力の生成に使用できる出力プリセットのリストが表示されます。

1. 出力の生成に使用する1つまたは複数の出力プリセットを選択します。

   ![](images/generate-multiple-outputs-uuid.png)

1. **Generate** アイコンを選択して、出力生成プロセスを開始します。


出力生成リクエストの現在のステータスは、**出力** タブで確認できます。 詳細については、[出力生成タスクのステータスを表示](./generate-output-manage-process.md#view-the-status-of-the-output-generation-task)するを参照してください。

>[!IMPORTANT]
>
> プリセットの出力生成プロセスがキュー内または処理中の場合、同じプリセットに対して別の出力生成タスクを開始することはできません。

1つ以上のトピックのAEM Sites出力や、マップコンソールからDITA マップ全体を生成することもできます。 詳細については、[ ナレッジベース出力の生成](web-editor-article-publishing.md#id218CK0U019I)を参照してください。

## `chunk`属性を使用したDITA マップ内の異なるトピックの結合

DITA マップには、参照、概念、タスクなど、様々なトピックタイプを含めることができます。 `chunk=to-content`属性を使用すると、これらのトピックを結合して、AEM Sitesで1 ページの出力を生成できます。 ただし、結合されたトピックを適切に公開するには、管理者がDITA プロファイルで正しいXML カタログを設定していることを確認します。

このシステムでは、適切なDTD ルールを正しく識別して適用するために、XML カタログ内の`composite` キーワードを含むパブリック IDが必要です。
この設定は、標準XML カタログにデフォルトで含まれています。 ただし、カスタム XML カタログを使用している場合は、管理者がこのパブリック IDを設定に追加していることを確認してください。 これを使用しない場合、結合されたトピックが正しく公開されない可能性があります。

カスタム DTD/XSDでパブリック IDとシステム IDを使用する方法について詳しくは、[DITAの特殊化の統合](../cs-install-guide/dita-ot-specialization.md#integrate-dita-specialization-id211mb0e00xa)を参照してください。



**親トピック：**[&#x200B;出力生成](generate-output.md)
