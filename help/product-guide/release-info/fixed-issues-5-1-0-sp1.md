---
title: リリースノート | Adobe Experience Manager Guides 5.1.0 Service Pack 1 リリースの修正済みの問題
description: Adobe Experience Manager Guides 5.1.0 Service Pack 1 リリースのバグ修正について説明します
role: Leader
exl-id: 4b51085b-1f71-41e2-b0a9-88a12990fc97
TQID: https://experienceleague.adobe.com/HEWV5RxPUfqUYf6m6kQW-fU-LiAM0UFGbfzKjtOCZxk
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a3bd6397-2eb2-4908-a61c-226e26855dca
role_v2: id: f8a45b24-4be7-4f1b-909b-60d06b483a20
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 144
ht-degree: 1%

---

# 5.1.0 サービスパック 1 リリース（2025年10月）で修正された問題


この記事では、Adobe Experience Manager Guidesの5.1.0 Service Pack 1 リリースの様々な領域で修正されたバグについて説明します。

5.1.0 サービスパック 1 リリース ](upgrade-instructions-5-1-0-sp1.md)の[ アップグレード手順について説明します。


## プラットフォーム

- 非UUIDからUUIDに移行して最新バージョン（5.0以降）にアップグレードする場合、フォルダー間で参照画像を移動し、その後DITA ファイル（これらの画像が参照されていた場所）を以前のバージョンに戻すと、画像参照が壊れます。 （GUIDES-34315）

## 公開

- AEM Sitesでベースラインを使用してDITA マップを公開する場合（従来のコンポーネントマッピングを使用）、属性`processing-role = resource-only`を持つマップエレメントも公開されます。 （GUIDES-34298）
