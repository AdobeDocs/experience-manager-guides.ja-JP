---
title: DITA ソースアセットのレプリケーションの管理
description: DITA ソースアセットのレプリケーションを実行する方法について説明します
feature: Publishing
role: User
exl-id: 71aec782-2cc1-4fd5-b35b-97a603c3dd48
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
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '156'
ht-degree: 0%
---
# DITA ソースアセットのレプリケーションの管理

DITA コンテンツから生成された出力が、一部のパブリッシュ環境で&#x200B;**クイック公開**&#x200B;または&#x200B;**公開を管理**&#x200B;を使用して公開される場合、AEMでは、DITA マップやDITA トピックなどの関連するDITA ソースアセットも公開しようとします。 これは、AEMがDITA アセットを生成されたSites ページの依存関係として扱うためです。

![](images/quick-publish-site-instance.png){width="350"}

DITA コンテンツのパブリッシュ環境への意図しないレプリケーションを防ぎ、パフォーマンスの問題を回避するには、管理者はConfiguration Managerを通じてDITA アセットレプリケーションを明示的に管理する必要があります。 この設定により、管理者は、DITA マップ、DITA トピック、XML ファイル、Markdown （.md）ファイルなど、サポートされているDITA アセットタイプのレプリケーションを制御できます。

DITA アセットレプリケーション機能を設定するには、使用している設定に応じて、[Cloud Service用DITA アセットレプリケーションの設定](../cs-install-guide/configure-dita-assets-replication.md)または[ オンプレミス用DITA アセットレプリケーションの設定](../install-guide/configure-dita-asset-replication.md)を表示します
