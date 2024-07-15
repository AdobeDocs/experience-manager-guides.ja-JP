---
title: リリースノート | Adobe Experience Manager Guides 4.3.1.5 リリースの問題を修正しました
description: Adobe Experience Manager Guides 4.3.1.5 リリースのバグ修正について説明します
role: Leader
exl-id: 082dca28-15da-417c-b511-74eb5ac68078
source-git-commit: e40ebf4122decc431d0abb2cdf1794ea704e5496
workflow-type: tm+mt
source-wordcount: '135'
ht-degree: 2%

---

# 4.3.1.5 リリースの問題を修正しました


この記事では、Adobe Experience Manager Guides リリース 4.3.1.5 の様々な領域で修正されたバグについて説明します。



[4.3.1.5 リリースのアップグレード手順 ](../release-info/upgrade-instructions-4-3-1-5.md) について説明します。


## オーサリング

- `<codeblock>` 内のインライン要素間にスペースを追加すると、生成される出力で改行が発生する。 （15247）
- 「要素を挿入」ダイアログボックスから要素を追加する際に、エクスペリエンスの問題が発生します。 （15108）

## 公開

- エラーログに、外部範囲を使用したコンテンツの公開に関する誤った情報が表示される。 （15242）
- `HTTP` で始まる DITA ファイルへの内部リンクは外部リンクとして扱われ、範囲エラーが発生します。 （15155）
- DITA マップのAEM サイトの再生成に失敗します。 （14369）

## 管理

- **fmditaTopicrefs** プロパティは、絶対パスではなく相対パスを表示します。 （15341）
