---
title: リリースノート | Adobe Experience Manager Guides 5.0.0 サービスパック 3 リリースの問題を修正しました
description: Adobe Experience Manager Guides 5.0.0 サービスパック 3 リリースのバグ修正について説明します
role: Leader
source-git-commit: e72bf237352f6007242901c0e409037129459101
workflow-type: tm+mt
source-wordcount: '131'
ht-degree: 0%

---

# 5.0.0 サービスパック 3 リリース（2026 年 2 月）の問題を修正しました


この記事では、Adobe Experience Manager Guides 5.0.0 サービスパック 3 リリースの様々な領域で修正されたバグについて説明します。

[5.0.0 サービスパック 3 リリースのアップグレード手順 ](upgrade-instructions-5-0-0-sp3.md) について説明します。

## 翻訳

- 特定のバージョンの言語固有のアセットとして最初に管理されていた画像（`/en/` など）が、更新されたバージョンのグローバルフォルダーに移動されてベースラインの書き出しが実行されると、新しいベースラインはその画像の古い言語固有のバージョンを引き続き参照するので、ベースラインの書き出しに失敗します。 （GUIDES-39394）
