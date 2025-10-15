---
title: リリースノート | Adobe Experience Manager Guides 5.1.0 サービスパック 1 リリースの問題を修正しました
description: Adobe Experience Manager Guides 5.1.0 サービスパック 1 リリースのバグ修正について説明します
role: Leader
source-git-commit: 575488e1b378c17419add75876a8e7f7423d5116
workflow-type: tm+mt
source-wordcount: '148'
ht-degree: 1%

---

# 5.1.0 サービスパック 1 リリース（2025 年 10 月）の問題を修正しました


この記事では、Adobe Experience Manager Guides 5.1.0 サービスパック 1 リリースの様々な領域で修正されたバグについて説明します。

[5.1.0 サービスパック 1 リリースのアップグレード手順 ](upgrade-instructions-5-1-0-sp1.md) について説明します。


## プラットフォーム

- 非 UUID から UUID に移行して最新バージョン （5.0 以降）にアップグレードする場合、参照イメージをフォルダ間で移動してから、DITA ファイル （これらのイメージが参照されていた場所）を以前のバージョンに戻すと、イメージ参照が壊れます。 （GUIDES-34315）

## 公開

- （従来のコンポーネントマッピングを使用して）AEM Sitesのベースラインを使用して DITA マップを公開すると、属性 `processing-role = resource-only` を持つマップ要素も公開されます。 （GUIDES-34298）
