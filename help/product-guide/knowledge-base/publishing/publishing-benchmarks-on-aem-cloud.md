---
title: AEMaaCSでのベンチマークの公開に関するガイド
description: AEM Cloudでの公開に関するシステム制限について説明します。
feature: Publishing
role: User, Admin
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
feature_v2:
  - id: f59890ff-de81-47d5-9ef8-7ab2dd10c6c3
    internal-label: Authoring and publishing content
subfeature_v2:
  - id: f901afa4-5613-4581-add5-219fa5f03fb5
    internal-label: Publishing
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '289'
ht-degree: 21%
---
# AEMaaCSでのAEM Guides公開ベンチマーク

このベンチマークは、AEM Guides as a Cloud Serviceの様々な出力プリセットおよび大きくなるマップサイズでの新しい公開APIのパフォーマンスを評価します。 ここでの目的は、スケーラビリティの動作を把握し、パフォーマンスのボトルネックを特定することです。

パブリッシングサービスは、自動スケーリング機能を備えた[ マイクロサービスベースのアーキテクチャ ](https://experienceleague.adobe.com/en/docs/experience-manager-guides/using/knowledge-base/kb-articles/publishing/publish-microservice-architecture-and-performance)を使用し、追加のポッドを通じて大きなワークロードを処理できるようにします。

## 実行環境

- **AEM リリース**:2026.4.25322.20260407T085152Z
- **Guides アドオンリリース**: 2026.5.0
- **初期ポッド数**: 2 ポッド
- **自動スケーリング動作**：負荷が増加すると、4つのノードで最大4つのポッドを拡張
- **vCPU**: 10
- ポッドあたり&#x200B;**RAM**: 8 GB
- **同時ユーザー**: 1人のユーザー

>[!NOTE]
>
> この演習では、マップ サイズが大きくなるにつれて公開がどのように動作するかを確認し、大きなマップがスループット、レイテンシ、読み込み中の公開全体の完了に与える影響を強調しました。


## 出力の生成番号

**ネイティブ AEM サイト**

| MapSize | 実行時間（秒） | マイクロサービス |
| ------- | ------------------ | ------------ |
| 10 | 62.378 | はい |
| 100 | 64.27 | はい |
| 1000 | 93.091 | はい |
| 5000 | 496.319 | はい |
| 10000 | 922.602 | はい |

**ネイティブ PDF**

| MapSize | 実行時間（秒） | マイクロサービス |
| ------- | ------------------ | ------------ |
| 10 | 62.302 | はい |
| 100 | 62.431 | はい |
| 1000 | 108.666 | はい |
| 5000 | 201.379 | はい |
| 10000 | 1170.689 | はい |

**PDF**

| MapSize | 実行時間（秒） | マイクロサービス |
| ------- | ------------------ | ------------ |
| 10 | 30.926 | はい |
| 100 | 30.987 | はい |
| 1000 | 77.007 | はい |
| 5000 | 247.505 | はい |
| 10000 | 686.61 | はい |

**HTML5**

| MapSize | 実行時間（秒） | マイクロサービス |
| ------- | ------------------ | ------------ |
| 10 | 30.844 | はい |
| 100 | 30.834 | はい |
| 1000 | 77.384 | はい |
| 5000 | 170.237 | はい |
| 10000 | 419.166 | はい |


## 重要な観察

- AEM サイトの生成時間は、使用されているテンプレートによって異なります。 複雑なテンプレートを使用すると、実行時間が長くなる場合があります。
- カスタム公開実行時間は、サンプルのカスタム出力に基づいています。 カスタム公開時間は、顧客自身の変換ロジックにのみ依存します。