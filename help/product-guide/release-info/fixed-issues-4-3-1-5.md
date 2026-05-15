---
title: リリースノート | Adobe Experience Manager Guides 4.3.1.5 リリースの修正済みの問題
description: Adobe Experience Manager Guidesの4.3.1.5 リリースのバグ修正について説明します
role: Leader
exl-id: 082dca28-15da-417c-b511-74eb5ac68078
TQID: https://experienceleague.adobe.com/ujQFyhAp5bIB1OJnmqvbHCaiDip7T2qsjlVAWevykK8
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
role_v2:
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 130
ht-degree: 6%

---

# 4.3.1.5 リリースで修正された問題


この記事では、Adobe Experience Manager Guidesの4.3.1.5 リリースの様々な領域で修正されたバグについて説明します。



4.3.1.5 リリース [&#128279;](../release-info/upgrade-instructions-4-3-1-5.md)の アップグレード手順について説明します。


## オーサリング

- `<codeblock>`内のインライン要素の間にスペースを追加すると、生成された出力で改行が発生します。 (15247)
- 「エレメントを挿入」ダイアログボックスからエレメントを追加する際に、エクスペリエンスの問題が発生します。 (15108)

## 公開

- 外部スコープを持つコンテンツの公開に関するエラーログに誤った情報が表示される。 (15242)
- `HTTP`で始まるDITA ファイルへの内部リンクは、外部リンクと同様に扱われ、スコープエラーが発生します。 (15155)
- DITA マップでAEM サイトの再生成が失敗する。 (14369)

## 管理

- **fmditaTopicrefs** プロパティには、絶対パスではなく相対パスが表示されます。 (15341)
