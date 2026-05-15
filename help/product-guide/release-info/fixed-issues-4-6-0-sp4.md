---
title: リリースノート | Adobe Experience Manager Guides 4.6.0 Service Pack 4 リリースの修正済みの問題
description: Adobe Experience Manager Guides 4.6.0 Service Pack 4 リリースのバグ修正について説明します
role: Leader
exl-id: ad69ea47-7880-43d1-8567-cd608fedb462
TQID: https://experienceleague.adobe.com/4ILARUO5umX41xE3Lcie-FsP396sgSqfbrWlMqdjsQ4
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a3bd6397-2eb2-4908-a61c-226e26855dcaid: ab01a588-7dea-43f2-a699-0b3f128465d6
subfeature_v2: id: d6596f3f-92a7-43ec-b444-237db6adad05
role_v2: id: f8a45b24-4be7-4f1b-909b-60d06b483a20
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 234
ht-degree: 4%

---

# 4.6.0 サービスパック 4 リリース（2025年4月）で修正された問題


この記事では、Adobe Experience Manager Guidesの4.6.0 Service Pack 4 リリースの様々な領域で修正されたバグについて説明します。

4.6.0 サービスパック 4 リリース ](upgrade-instructions-4-6-0-sp4.md)の[ アップグレード手順について説明します。

## オーサリング

- **作成者** ビューでトピック内の画像をドラッグ&amp;ドロップすると、画像参照が壊れ、データが失われます。 (25769)
- マップ内の`topicref`を&#x200B;**作成者** ビューでドラッグ&amp;ドロップすると、意図した操作を実行できず、ドラッグした`topicref`の横にある`topicref`が削除されます。 (19460)
- トピックの更新中または作成中にJCR セッション接続を閉じないと、メモリリークやサービスのダウンタイムが発生します。 (26282)

## 公開

- DITA コンテンツに`external`のスコープを持たずにweb リンクがある場合、ネイティブ PDFの公開は無期限に続きます。 (26434)
- 多数のラベルを持つ新しいベースラインを作成する場合、ラベルローダーが失敗し、ラベルが取得されるのを防ぎます。 (16232)
- ネイティブ PDFおよびAEM サイトの公開が停止し、コンテンツにエラーがある場合にキューに入れられます。 (26516)

## 既知の問題

Adobeでは、このリリースに関する次の既知の問題を特定しました。

- DITA コンテンツに`scope`属性を含まない外部リンクが含まれている場合、Windowsでのネイティブ PDFの公開でエラーが発生します。
