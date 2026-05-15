---
title: リリースノート | Adobe Experience Manager Guides 5.0.0 Service Pack 3 リリースの修正済みの問題
description: Adobe Experience Manager Guides 5.0.0 Service Pack 3 リリースのバグ修正について説明します
role: Leader
exl-id: ba915d58-4de8-4c4f-b338-29b64451d60d
TQID: https://experienceleague.adobe.com/qENxN8e84lkLpfHhXwIDcAGINdcqqs4eOZhpiV3DKxA
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
role_v2: id: f8a45b24-4be7-4f1b-909b-60d06b483a20
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 128
ht-degree: 0%

---

# 5.0.0 サービスパック 3 リリース（2026年2月）で修正された問題


この記事では、Adobe Experience Manager Guidesの5.0.0 Service Pack 3 リリースの様々な領域で修正されたバグについて説明します。

5.0.0 Service Pack 3 リリース ](upgrade-instructions-5-0-0-sp3.md)の[ アップグレード手順について説明します。

## 翻訳

- 最初に、特定のバージョンを持つ言語固有のアセットとして管理された画像（例：`/en/`）が、更新されたバージョンを持つグローバルフォルダーに移動され、ベースライン書き出しが実行されると、新しいベースラインはその画像の古い言語固有のバージョンを引き続き参照し、ベースラインの書き出しが失敗します。 （GUIDES-39394）
