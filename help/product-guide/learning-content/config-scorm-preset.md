---
title: SCORM プリセット設定
description: 製品トレーニングと学習で、さまざまなSCORM プリセット設定について説明します
feature: Authoring
role: User
exl-id: b3000708-6120-4725-bea1-0b8e58048948
TQID: https://experienceleague.adobe.com/9WSwgksrX0fahrniOalbizWFXCqcW0QlGAHn707vm-k
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: ab01a588-7dea-43f2-a699-0b3f128465d6id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554
source-git-commit: f7c0b10f032c2584fb6e951da898faaeb4ca7aaf
workflow-type: tm+mt
source-wordcount: 331
ht-degree: 0%

---

# SCORM出力プリセットの設定

プリセットを作成したら、SCORM プリセット設定を行います。 プリセット設定オプションは、「一般」、「コンテンツ」、「公開」の各タブに整理されています。

- **一般：** サポートされているバージョン、出力パス、ZIP ファイル名、出力テンプレート、学習者の経験に関連するその他のオプションなど、基本的な出力設定を指定するために使用します。

  ![](assets/scorm-general-tab-v3.png){width="650"}

  **学習者の経験**

   - **学習者はコンテンツを順番に進める必要があります**：学習者がクイズを決まった順序で進み、スキップしたり質問の間を飛び越えたりできないようにします。
   - **学習者は、すべての質問を試して続行する必要があります**：学習者がクイズを送信する前にすべての質問を試すことを求め、不完全な送信を防ぎます。
   - **各試行に対して質問順序をランダム化**：各試行に対して異なる順序でクイズの質問を表示し、予測可能性を減らします。
   - **各回の回答選択肢をランダム化**：回答毎に回答選択肢を切り替え、位置に基づいて推測する可能性を減らします。
   - **クイズレポートで質問IDを使用**: クイズレポートに一意の質問IDを含めることで、特定の質問に対する追跡、分析、結果のマッピングが容易になります。
   - **生成後ワークフロー**：このオプションを選択すると、設定されたすべてのワークフローを含む新しい「生成後ワークフロー」ドロップダウンリストが表示されます。

- **コンテンツ：**&#x200B;使用可能な条件付きフィルタリング（DITAVALを使用するか、一部の条件プリセットを使用）と変数セットを指定するために使用します。

  ![](assets/scorm-content-tab.png){width="650"}


- **LMSへの公開：**&#x200B;この設定を使用して、コンテンツをAdobe Learning Manager（ALM）に直接公開します。 **Publish server** ドロップダウンから、**Adobe Learning Manager**&#x200B;を選択し、以前にWorkspace設定で設定した必要な&#x200B;**Publish profile**&#x200B;を選択します。 選択したプロファイルを使用して接続を確立し、生成されたコンテンツをALMにアップロードします。

  >[!NOTE]
  >
  > コンテンツをALMに公開する前に、Adobe Learning Manager公開プロファイルを設定する必要があります。 詳しくは、[ プロファイルの公開](../lc-config-guide/lc-folder-profile.md)を参照してください。

  ![](assets/scorm-publish-lms.png){width="650"}

すべての変更を設定したら、SCORM プリセットページのツールバーの右隅にある&#x200B;**Save**&#x200B;を使用して、SCORM プリセットの変更を保存します。
