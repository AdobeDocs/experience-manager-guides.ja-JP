---
title: オンプレミスセットアップ用のカスタムインデックス作成デプロイメント
description: オンプレミス設定のカスタム インデックス コンテンツの設定方法について説明します
feature: Web Editor Configuration
role: Admin
level: Experienced
exl-id: 5b9e4936-f674-41d3-a7b2-3d42a2523693
hidefromtoc: true
source-git-commit: 3aadc59f5034828cf319992b7acb32d5a88eaf93
workflow-type: tm+mt
source-wordcount: '129'
ht-degree: 0%

---

# 検索と置換（Source ビュー）機能のインデックス再作成

作成者ビューに表示されるコンテンツ全体と、検索文字列の基になるSource コンテンツ（エレメント、タグ、属性値を含むXML構造）をスキャンできる&#x200B;**検索および置換（Source ビュー）**&#x200B;機能を有効にするには、インデックス再作成が必要です。

## インデックス再作成

オンプレミス設定の場合、インデックス定義はパッケージに含まれます。 この機能を有効にするには、コンテンツのインデックスを再作成する必要があります。

ノード `reindex=true (Boolean)`のプロパティ ` /oak:index/guidesAssetLucene`を設定して、以前にキャプチャしたコンテンツを再インデックス化することにより、インデックス再作成を開始します。

インデックス再作成プロセスは、システムがこのプロパティを自動的にfalseに戻すまで続行されます。 システムログで、インデックス再作成操作の進行状況を監視できます。
