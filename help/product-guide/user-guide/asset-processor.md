---
title: アセットの処理と再処理
description: アセットの処理方法を学ぶ
feature: Migration
role: Admin
level: Experienced
exl-id: 27786098-119c-4b7a-8275-8a89d435294f
source-git-commit: 851dafc1f17864bf6a295de7be12ffe513c3af57
workflow-type: tm+mt
source-wordcount: '509'
ht-degree: 0%

---

# アセットの処理または再処理

公開などのデータ集約型のワークフローでは、パフォーマンスと信頼性を維持するために効率的なアセット管理が不可欠です。 アセットの処理または再処理プロセスは、大量のデータ操作が必要な、ユーザー固有のアセットを処理するように特別に設計されています。 このアプローチは、アセットの初期処理でエラーが発生した場合と、後処理トリガーがないためにファイルがまったく処理されなかった場合という 2 つの主なシナリオに対応します。 ターゲットを絞ったフォルダーレベルの処理を有効にすることで、ユーザーは必要なアセットのみを分離して処理できるので、不要な計算のオーバーヘッドを回避できます。 この選択的なアプローチにより、パフォーマンスが大幅に向上し、公開やレポートの生成などの重要な操作に必要な時間が短縮されます。 全体的に、複雑なデータタスクの処理の効率と速度の向上に貢献します。

>[!NOTE]
>
> 大規模なデータセットでは、システムのパフォーマンスに影響を与えないように、処理はピーク時を避けて実行することをお勧めします。 処理タスクが完了したら、詳細を確認して結果を分析できます。

## アセットの処理

以下の手順に従って、アセットを処理または再処理します。

1. 上部のAdobe Experience Manager ロゴを選択し、「**ツール**」を選択します。
1. **ツール** パネルで「**ガイド**」を選択します。
1. **アセットプロセッサー** タイルを選択します。

   ![flow-asset-processor](images/flow-asset-processor.png){align="left"}

1. Guides Asset Processor ウィンドウが開き、以下に詳細が表示されます。 また、このウィンドウには、最後の 5 つの移行に関する情報のみが表示されます。

   - **実行 ID**：実行する再処理タスクごとの一意の ID です。

   - **フォルダー**：再処理用に選択されたフォルダーを表示します。

   - **除外されたフォルダー**：再処理から除外されるフォルダーを指します。

   - **開始時刻：** 再処理プロセスが開始された日時を表示します。

   - **終了時間**：再処理プロセスが終了した日時を表示します。

   - **ステータス**：再処理のステータス（処理中、完了またはキャンセル）を指します。

   ![Guides-asset-processor](images/guides-asset-processor.png){align="left"}

1. ウィンドウの右上隅にある「**新しいプロセス**」タブを選択して、新しい処理タスクを開始します。

   ![New-process-asset-processor](images/new-process-asset-processor.png){width="550" align="left"}

1. 処理または再処理するフォルダーを選択します。 また、（選択した親フォルダー内で）除外または無視するフォルダーを選択することもできます。

   >[!NOTE]
   >
   >処理に選択できるフォルダーは、一度に 1 つだけです。 特定の操作に対して、複数のフォルダーを除外できます。

1. 「**作成**」を選択します。スニペットに示すように、「成功 **とプロセスが正常にトリガーされました** を示すポップアップが表示されます。 同じことがリストに反映されます。 ウィンドウで再処理タスクのステータスを確認できます。

   ![Message-asset-processor](images/message-asset-processor.png){width="550" align="left"}


## 処理タスクのその他のオプション

処理タスクが開始されると、そのタスクに追加のオプションを使用できます。 これらのオプションにアクセスするには、タスクの実行 ID の上にマウスポインターを置きます。 これらのオプションの詳細を以下に示します。

- **再起動**：以前に成功したアセット処理タスクを再開します。

  ![restart-asset-processor](images/restart-asset-processor.png){align="left"}

- **再開**：以前にキャンセルされた、または失敗したアセット処理タスクを再開します。

  ![resume-asset-processor](images/resume-asset-processor.png){align="left"}

- **キャンセル**：現在進行中のアセット処理タスクをキャンセルします。

  ![cancel-asset-processor](images/cancel-asset-processor.png){align="left"}

- **ログを表示**：アセット処理タスクのログを表示します。 進行中のタスクの場合、ログには、推定残り時間やアセットのステータスなどの詳細な処理情報が表示されます。 このログリストには、最新の 500 エントリまで表示されます。 完全なログをダウンロードできます。

  ![logs-asset-processor](images/logs-asset-processor.png){align="left"}
