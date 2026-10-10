---
title: オンプレミスセットアップ用のカスタムインデックス作成デプロイメント
description: オンプレミス設定のカスタム インデックス コンテンツの設定方法について説明します
feature: Web Editor Configuration
role: Admin
level: Experienced
exl-id: 5b9e4936-f674-41d3-a7b2-3d42a2523693
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
feature_v2:
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
    internal-label: Configuration
subfeature_v2:
  - id: b0521e56-a0b2-40b6-bf47-ebc98751f9ba
    internal-label: Web Editor configuration
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '132'
ht-degree: 0%
---
# 検索と置換（Source ビュー）機能のインデックス再作成

作成者ビューに表示されるコンテンツ全体と、検索文字列の基になるSource コンテンツ（エレメント、タグ、属性値を含むXML構造）をスキャンできる&#x200B;**検索および置換（Source ビュー）**&#x200B;機能を有効にするには、インデックス再作成が必要です。

## インデックス再作成

オンプレミス設定の場合、インデックス定義はパッケージに含まれます。 この機能を有効にするには、コンテンツのインデックスを再作成する必要があります。

ノード ` /oak:index/guidesAssetLucene`のプロパティ `reindex=true (Boolean)`を設定して、以前にキャプチャしたコンテンツを再インデックス化することにより、インデックス再作成を開始します。

インデックス再作成プロセスは、システムがこのプロパティを自動的にfalseに戻すまで続行されます。 システムログで、インデックス再作成操作の進行状況を監視できます。
