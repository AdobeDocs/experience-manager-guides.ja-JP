---
title: コンバージョンステータスレポート
description: AEM Guidesで異なるフォーマットの文書を DITA に変換します。 フィルターを追加する方法、およびコンバージョンステータスレポートを表示する方法について説明します。
feature: Report Generation
role: User
source-git-commit: 76c731c6a0e496b5b1237b9b9fb84adda8fa8a92
workflow-type: tm+mt
source-wordcount: '319'
ht-degree: 0%

---

# コンバージョンステータスレポート {#id205BBA00WZZ}

AEM Guidesには、様々なフォーマットの文書を DITA に変換する堅牢な変換機能が用意されています。 コンバージョンステータスレポートは、AEM Guidesで実行されるすべてのコンバージョンタスクの統合ビューを提供します。

コンバージョンステータスレポートを表示するには、次の手順を実行します。

1. 上部の「Adobe Experience Manager」リンクをクリックし、「**ツール**」を選択します。

1. ツールのリストから **ガイド** を選択します。

1. **コンバージョンステータスレポート** タイルをクリックします。

   コンバージョンステータスレポートは、システムで実行されるすべてのコンバージョンタスクに対して表示されます。

   ![](images/conversion-status-report.png){width="800" align="left"}

1. レポートページは次の 2 つの部分に分かれています。

   - **フィルター：**

     ファイルタイプとコンバージョンステータスに基づいて、レポートデータをフィルタリングできます。 [ ファイルの種類 ] では、Word 文書、構造化HTML、XML、および DocBook 文書のレポート データを表示できます。 ステータスでは、実行が成功、失敗、アクティブ、待機中のいずれかのタスクのレポートデータを表示するように選択できます。

     次のスクリーンショットは、失敗、アクティブ、待機中のステータスを持つコンバージョンタスクのレポートデータを示しています。

     ![](images/conversion-report-failed-active-queued.png){width="800" align="left"}

   - **レポートデータ：**

     レポートデータには、次の列が含まれます。

      - **ファイル名**：変換プロセスが実行されたソースファイルの名前 ファイル名のリンクをクリックすると、ソースドキュメントの場所に移動します。

      - **ファイル形式**：ソース文書の種類。Word、構造化HTML、XML、DocBook などがあります。

      - **追加者**：コンバージョンタスクを実行したユーザーの名前

      - **追加日**：タスクが実行された日付。 追加日リンクをクリックすると、ログファイルがダウンロードされます。

      - **パス**：ソースドキュメントの完全なパス。

      - **ステータス**：コンバージョンタスクのステータス（成功、失敗、アクティブ、待機中）。

      - **出力**：正常に変換されたドキュメントのパス。 出力リンクをクリックすると、出力が保存されている場所に移動します。


**親トピック：**[ Reports](reports-intro.md)