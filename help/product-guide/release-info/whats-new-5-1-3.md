---
title: リリースノート | Adobe Experience Manager Guides 5.1.0 Service Pack 3 リリースの新機能
description: Adobe Experience Manager Guidesの5.1.0 Service Pack 3 リリースの新機能と強化機能について説明します
role: Leader
exl-id: 1b2e45a8-bea6-4b78-bd2e-cc02df86f40a
TQID: https://experienceleague.adobe.com/dXXQ1YvVduT11vvF5qyXHLqnuo1xMKkAb5I-EoD2JAA
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
subfeature_v2:
  - id: fd6cc9e1-e5e5-494e-b7b1-a32f2d6cd7c9
role_v2:
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 176
ht-degree: 0%

---

# 5.1.0 サービスパック 3 リリース（2025年12月）の新機能

この記事では、Adobe Experience Manager Guidesのバージョン 5.1.0 サービスパック 3で導入された新機能と強化機能について説明します。

このリリースで修正された問題のリストについては、5.1.0 サービスパック 3 リリース [&#128279;](fixed-issues-5-1-0-sp3.md)の修正済みの問題を参照してください。

5.1.0 サービスパック 3 リリース [&#128279;](../release-info/upgrade-instructions-5-1-0-sp3.md)の アップグレード手順について説明します。


## 特定の出力プリセット用のカスタム画像レンディションの設定

`renditionmapping.xml`の`outputName`属性を使用して、同じ出力タイプの個々の出力プリセットに異なる画像レンディションを設定できるようになりました。 この機能強化により、様々なシナリオに対して様々な画像解像度を必要とするコンテンツを公開する際の柔軟性が向上します。 例えば、HTML5のメイン出力に高解像度の画像を使用し、サムネールを小さくすると軽量なプリセットを作成できます。

詳細については、[出力生成](../install-guide/conf-output-generation.md#handle-image-rendition-during-output-generation)での画像レンディションの処理を参照してください。
