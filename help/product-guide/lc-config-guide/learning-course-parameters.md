---
title: 学習者の進捗とコースの完了に関する SCORM 主要指標
description: 学習者の進捗とコースの完了に関する SCORM 主要指標について説明します
feature: Authoring
role: Admin
level: Experienced
source-git-commit: 0dff380131dadc971f257eb464700392328164e5
workflow-type: tm+mt
source-wordcount: '279'
ht-degree: 1%

---

# 学習者の進捗とコースの完了に関する SCORM 主要指標

この記事では、SCORM パッケージで取得される主要なパラメータを、対応するフィールドおよび例とともに示します。 これらのパラメーターは、学習者の進行状況、コースの完了、インタラクションの詳細、クイズパフォーマンスに関する重要なインサイトを提供します。 管理者はこの情報を使用して、トラッキングを検証し、レポートを設定し、LMS 環境内で正確な分析を確実に行うことができます。 以下は、SCORM パッケージに含まれる各パラメータに指定されたサンプル値です。

| **パラメーター名** | **説明** | **フィールド** | **例** |
|---|---|---|---|
| **コースの完了ステータス** | コースが完了しているかどうかを示します | cmi.completion_status | 未完了 |
| **試行回数** | 学習者による試行回数 | LMS 側の試行カウンター/コンテンツ | 試行回数：1 |
| **SCORM パッケージの場所** | コース内の現在のブックマークまたは場所 | cmi.location | - |
| **進捗完了** | Learner&#39;s progress | cmi.progress_measure | 0.87 |
| **合計時間（試行）** | 現在の試行に費やされた合計時間 | cmi.total_time | 0000:01:09.87 |
| **目次の表示とトピック数** | 目次の表示とトピックの完了の詳細を表示 | Project.HideTOC, Project.TotalTopics, Project.TopicsCompleted | - |
| **トピックごとのステータス** | 各トピックの完了と合格のステータス | カスタムのレッスンごとの状態 | - |
| **選択の状態の質問ごと** | 質問ごとに学習者が選択した選択肢をトラッキングします | value, generated_id, checked | - |
| **質問の全体的なスコアリング** | 質問レベルおよび集計で獲得したスコア | {&quot;score&quot;:0,&quot;maxScore&quot;:1} および % | &quot;score&quot;:33.33,&quot;maxScore&quot;:100,&quot;minScore&quot;:0 |
| **各質問レベルでのインタラクション** | 質問ごとの学習者インタラクションの詳細 | id/type/timestamp/correct_response/learner_response/result/latency | - |
| **コース全体のステータス** | 合格/不合格および全体的な進行状況を示します | success_status, completion_status, score, progress_measure | 合格または不合格 |
| **学習者の詳細** | 学習者を ID と名前で識別 | cmi.learner_id, cmi.learner_name | アルバート |
| **クイズパラメーター** | クイズのタイミングと合格点の設定 | cmi.max_time_allowed, cmi.scaled_passing_score, cmi.time_limit_action | 未定義または設定値 |