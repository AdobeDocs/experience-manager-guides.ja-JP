---
title: トピック内の段落を翻訳から除外する
description: トピック内の段落を翻訳から除外する方法
feature: Translation
role: User
exl-id: 21e41bb4-52f3-4352-92d9-4a60f636de99
TQID: https://experienceleague.adobe.com/IAY5PLpWlHEpMygjmHI-BqS75-VqAU5x1o9mdiu4Aac
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 148
ht-degree: 0%

---

# トピック内の段落を翻訳から除外する方法

最も簡単な方法は、translation=no属性を利用することです。

+ 作成者は、翻訳しない段落に&#x200B;**translation=no**&#x200B;という追加属性を挿入できます。 翻訳ベンダーに通知する必要があり、末尾でこの属性を持つテキストを無視するように設定できます。
+ OOTB機械翻訳（体験版Microsoft翻訳コネクタを使用）でも、同じ動作が示されます。
+ Microsoft翻訳を使用したテスト：段落レベルで&#x200B;**translate=no**&#x200B;属性を定義した場合、段落全体が翻訳されません。 この属性は任意の要素で定義でき、その要素内のコンテンツは翻訳されません。


これについて詳しく説明しているスクリーンショットをいくつか紹介します。

**Source コンテンツ**

![Source コンテンツ ](assets/source-content.jpg)

**スペイン語で翻訳されたコンテンツ**

![ スペイン語で翻訳されたコンテンツ ](assets/trans-content.jpg)
