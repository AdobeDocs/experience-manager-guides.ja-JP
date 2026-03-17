---
title: DITA ソースアセットのレプリケーションの管理
description: DITA ソースアセットのレプリケーション方法を説明します
feature: Publishing
role: User
source-git-commit: 52921a33d30817434424772ff32b1b31d4878497
workflow-type: tm+mt
source-wordcount: '155'
ht-degree: 0%

---

# DITA ソースアセットのレプリケーションの管理

一部のパブリッシュ環境で、DITA コンテンツから生成された出力が **クイック公開** または **公開を管理** を使用して公開されると、AEMは DITA マップや、場合によっては DITA トピックなど、関連する DITA ソースアセットも公開しようとします。 これは、AEMが DITA アセットを生成された Sites ページの依存関係として扱うためです。

![](images/quick-publish-site-instance.png){width="350" align="left"}

DITA コンテンツが意図せずにパブリッシュ環境にレプリケーションされるのを防ぎ、パフォーマンスの問題を回避するために、管理者は Configuration Manager を使用して DITA アセットのレプリケーションを明示的に管理する必要があります。 この設定により、管理者は DITA マップ、DITA トピック、XML ファイル、Markdown （.md） ファイルなど、サポートされる DITA アセットタイプのレプリケーションを制御できます。

DITA アセットレプリケーション機能を設定するには、使用する設定に応じて、[Cloud Service用に DITA アセットレプリケーションを設定 ](../cs-install-guide/configure-dita-assets-replication.md) または [ オンプレミス用に DITA アセットレプリケーションを設定 ](../install-guide/configure-dita-asset-replication.md) を表示します

