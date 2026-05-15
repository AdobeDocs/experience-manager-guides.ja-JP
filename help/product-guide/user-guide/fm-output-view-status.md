---
title: 出力生成タスクのステータスの表示
description: FrameMaker ドキュメントの出力キューを表示します。 出力生成タスクのステータスを表示する方法を説明します。
exl-id: c358f747-f0a5-4d9e-a96f-20f30663101f
feature: Publishing FrameMaker Documents
role: User
TQID: https://experienceleague.adobe.com/YL5ug0bhsYa-00J2fGQ-K-Cp6VE46KpC4Ss7hG64yRk
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a3bd6397-2eb2-4908-a61c-226e26855dcaid: ec4263d9-bf7c-44c7-b3f1-3e664861c8f2
subfeature_v2: id: bf79f6d3-0ad0-4d82-99e4-42ce98324d60id: fd6cc9e1-e5e5-494e-b7b1-a32f2d6cd7c9
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 248
ht-degree: 0%

---

# 出力生成タスクのステータスの表示 {#viewing_output_history}

FrameMaker ドキュメントの出力生成タスクを開始すると、Adobe Experience Manager Guidesはこのタスクを出力生成キューに送信します。 このキューはリアルタイムで更新され、キュー内の各出力生成タスクのステータスが表示されます。

出力生成キューを表示するには、次の手順を実行します。

1. Assets UIで、出力生成ステータスを確認するFrameMaker ドキュメントに移動して選択します。

1. 出力を選択します。

   ![](images/output-queued-fm.png)

1. 出力ページは、次の2つの部分に分かれています。

   - **キューに入れた出力：**

     生成待ち、または生成処理中の出力を一覧表示します。 また、キューに入れられたタスクに使用される出力生成設定またはプリセット、タイプ、タスクを開始したユーザー、タスクがキューに入れてからの時間、および現在のステータスを確認することもできます。

   - **生成された出力**

     完了した出力タスクが一覧表示されます。 繰り返しますが、ここに示されている情報はキュー出力セクションと似ていますが、出力生成時間の違いだけです。

     このリストでは、正常に実行されたタスクまたは失敗したタスクがある場合があります。 正常に完了したタスクに対して、公開プロセスによってログファイル \（logs.txt\）が作成されます。このログファイルには、「生成時」列のリンクを選択してアクセスできます。


**親トピック：**[ FrameMaker ドキュメントの出力を生成](fm-output-generatation.md)
