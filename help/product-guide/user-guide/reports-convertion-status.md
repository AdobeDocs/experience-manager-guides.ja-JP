---
title: コンバージョンステータスレポート
description: AEM Guidesで、様々な形式のドキュメントをDITAに変換します。 フィルターを追加し、コンバージョンステータスレポートを表示する方法について説明します。
exl-id: 0a4699e5-865f-40e1-a17f-5e1a248ea955
feature: Report Generation
role: User
TQID: https://experienceleague.adobe.com/-Jgxys5YiwelOf7jQHYQ4Y9ARYzwLCZ8lNStdnT4oLI
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a3bd6397-2eb2-4908-a61c-226e26855dcaid: d90290ec-3e61-4ebd-8649-bcafe0836803
subfeature_v2: id: cdab8659-8d50-4417-b6fd-762f347c13ee
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554
topic_v2: id: f5c2a4bb-71ca-4d7e-8efd-442250e6ba48
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 318
ht-degree: 0%

---

# コンバージョンステータスレポート {#id205BBA00WZZ}

Adobe Experience Manager Guidesには、様々な形式のドキュメントをDITAに変換するための強力なコンバージョン機能が用意されています。 コンバージョンステータスレポートには、Experience Manager Guidesで実行されたすべてのコンバージョンタスクが統合されたビューが表示されます。

コンバージョンステータスレポートを表示するには、次の手順を実行します。

1. 上部の「Adobe Experience Manager」ロゴを選択し、「**ツール**」を選択します。

1. ツールのリストから「**ガイド**」を選択します。

1. 「**コンバージョンステータスレポート**」タイルを選択します。

   コンバージョンステータスレポートは、システムで実行されたすべてのコンバージョンタスクに対して表示されます。

   ![](images/conversion-status-report-new.png)

1. このレポートページは、次の2つの部分に分かれています。

   - **フィルター：**

     ファイルタイプとコンバージョンステータスに基づいて、レポートデータをフィルタリングできます。 「ファイル形式」では、Word文書、構造化HTML、XML、DocBookおよびIDML形式の文書のレポートデータを表示できます。 「ステータス」で、「正常」、「失敗」、「アクティブ」、「キューに入れた」を実行したタスクのレポートデータを表示するように選択できます。

     次のスクリーンショットは、成功ステータスを持つコンバージョンタスクのレポートデータを表示します。

     ![](images/conversion-report-failed-active-queued-new.png)

   - **レポートデータ：**

     レポートデータには、次の列が含まれます。

      - **ファイル名**：変換プロセスが実行されたソースファイルの名前。 「ファイル名」リンクを選択すると、ソースドキュメントの場所に移動します。

      - **ファイルの種類**: Word、構造化HTML、XML、IDML、DocBookなどのソース文書の種類です。

      - **追加者**：変換タスクを実行したユーザーの名前。

      - **追加日**: タスクが実行された日付。 日付を選択すると、ログファイルがダウンロードされます。

      - **パス**: ソースドキュメントの完全なパス。

      - **ステータス**：コンバージョンタスクのステータス – 成功、失敗、アクティブ、またはキュー。

      - **Output**：正常に変換されたドキュメントのパス。 出力リンクを選択すると、出力が保存される場所に移動します。


**親トピック：**[ レポートの概要](reports-intro.md)
