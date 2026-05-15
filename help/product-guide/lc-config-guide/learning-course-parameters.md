---
title: 学習者の進捗状況とコースの完了率に関するSCORM主要指標
description: 学習者の進捗状況とコースの完了に関するSCORM主要指標について説明します
feature: Authoring
role: Admin
level: Experienced
exl-id: f25cbbbd-5d9f-47b0-9260-8062e026913d
TQID: https://experienceleague.adobe.com/ZyY9sjaqGANXlUI5l3OsP-i1Pu-es-B-iGnpPJjQYrY
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
topic_v2:
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 281
ht-degree: 1%

---

# 学習者の進捗状況とコースの完了率に関するSCORM主要指標

この記事では、SCORM パッケージに取り込まれた主要なパラメーターと、対応するフィールドと例を示します。 これらのパラメーターは、学習者の進捗状況、コースの完了、インタラクションの詳細、クイズのパフォーマンスに関する重要なインサイトを提供します。 管理者はこの情報を使用して、追跡の検証、レポートの設定、LMS環境内での正確な分析を確認できます。 以下は、SCORM パッケージに表示される各パラメーターに提供されるサンプル値です。

| **パラメーター名** | **説明** | **フィールド** | **例** |
|---|---|---|---|
| **コースの完了状況** | コースが完了したかどうかを示します | cmi.completion_status | 不完全 |
| **試行回数** | 学習者による試行回数 | LMS側の試行カウンター/コンテンツ | 試行：1 |
| **SCORM パッケージの場所** | コース内の現在のブックマークまたは場所 | cmi.location | - |
| **進行状況** | 学習者の進捗状況 | cmi.progress_measure | 0.87 |
| **合計時間（試行）** | 現在の試行に費やされた合計時間 | cmi.total_time | 0000:01:09.87 |
| **目次の可視性とトピック数** | 目次の表示とトピックの完了の詳細を表示 | Project.HideTOC, Project.TotalTopics, Project.TopicsCompleted | - |
| **トピックステータスごと** | 各トピックの完了状況と合格ステータス | レッスンごとのカスタムステート | - |
| **質問ごとに選択状態** | 学習者が選択した選択肢を質問ごとに追跡します | value, generated_id, checked | - |
| **全体的な質問スコアリング** | 質問レベルおよび集計でのスコアの達成 | {&quot;score&quot;:0,&quot;maxScore&quot;:1}および% | &quot;score&quot;:33.33,&quot;maxScore&quot;:100,&quot;minScore&quot;:0 |
| **各質問レベルでのインタラクション** | 質問ごとの学習者インタラクションの詳細 | id/type/timestamp/correct_response/learner_response/result/latency | - |
| **コース全体のステータス** | 合否と全体的な進行状況を示します | success_status, completion_status, score, progress_measure | 合格か失敗か |
| **学習者の詳細** | IDと名前で学習者を識別 | cmi.learner_id, cmi.learner_name | アルバート |
| **クイズパラメーター** | クイズタイミングと合格スコアの設定 | cmi.max_time_allowed, cmi.scaled_passing_score, cmi.time_limit_action | 未定義または設定された値 |
