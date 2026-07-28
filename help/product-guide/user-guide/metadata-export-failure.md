---
title: Experience Manager Guidesの「文字列が長すぎます」例外でメタデータの書き出しが失敗する
description: Assets UIでGuides コンテンツのメタデータの書き出しが失敗する理由を説明します。
feature: Authoring, Publishing
role: User
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
topic_v2:
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
source-git-commit: 1c61df4820e559417410d25c81800637481b040c
workflow-type: tm+mt
source-wordcount: 274
ht-degree: 0%

---

# フォルダーのメタデータの書き出しが「文字列が長すぎます」という例外で失敗するのはなぜですか？

Assets UIからフォルダーのメタデータ [&#128279;](https://experienceleague.adobe.com/ja/docs/experience-manager-65/content/assets/using/metadata#export-metadata)を書き出すと、書き出しジョブが`String is too long`件の例外で失敗する可能性があります。 これは通常、フォルダーに`baselineObj`などの文字列以外の値を格納するExperience Manager Guides固有のプロパティが含まれている場合に発生します。

**なぜこのようなことが起こるのですか？**

アセットのメタデータノードに保存されているプロパティの中には、Experience Manager Guidesによって内部で使用され、プレーン文字列値ではなくJSON オブジェクトなどのデータを含むものもあります。 フォルダーのメタデータを書き出す際に、**書き出すプロパティ**&#x200B;が&#x200B;**All**&#x200B;に設定されている場合、書き出しジョブはすべてのプロパティを文字列に変換しようとし、この種類のデータを保持するプロパティで失敗します。

**どのように防止されますか？**

このエラーを回避するために、**アセットメタデータエクスポーター設定**&#x200B;では、次のプロパティがデフォルトでメタデータエクスポートから除外されます。

- `baseline`
- `namedoutputs`
- `conditionpresets`
- `nextgenbaselinestore`

**これらのプロパティを引き続き書き出せますか？**

はい。 書き出しに1つ以上のプロパティが必要な場合は、**アセットメタデータエクスポーター設定**&#x200B;を編集して、除外リストから削除できます。

除外リストからプロパティを削除しても、書き出しが成功するとは限りません。 基礎となるデータのサイズと内容によっては、同じ例外でジョブが失敗する場合があります。 プロパティを再度有効にした後にこの問題が発生した場合は、除外リストにプロパティを追加して、デフォルトの信頼できる書き出し動作を復元します。
