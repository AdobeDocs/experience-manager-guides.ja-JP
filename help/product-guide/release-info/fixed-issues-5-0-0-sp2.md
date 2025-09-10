---
title: リリースノート | Adobe Experience Manager Guides 5.0.0 サービスパック 2 リリースの問題を修正しました
description: Adobe Experience Manager Guides 5.0.0 サービスパック 2 リリースのバグ修正について説明します
role: Leader
source-git-commit: 91f820e7d82d7d0c0fd8bb73b97bf2c04176a7b6
workflow-type: tm+mt
source-wordcount: '124'
ht-degree: 0%

---

# 5.0.0 サービスパック 2 リリース（2025 年 9 月）の問題を修正しました


この記事では、Adobe Experience Manager Guides 5.0.0 サービスパック 2 リリースの様々な領域で修正されたバグについて説明します。

[5.0.0 サービスパック 2 リリースのアップグレード手順 ](upgrade-instructions-5-0-0-sp2.md) について説明します。

## プラットフォーム

- UUID 移行スクリプトを実行した後に 4.3.1 から最新バージョン（5.0 以降）にアップグレードする場合、参照画像をフォルダ間で移動してから、DITA ファイル（これらの画像が参照されていた場所）を以前のバージョンに戻すと、画像参照が壊れます。 （GUIDES-34315）