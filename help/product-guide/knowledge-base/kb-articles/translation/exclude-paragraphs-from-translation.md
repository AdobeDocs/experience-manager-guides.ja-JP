---
title: トピック内の段落を翻訳から除外
description: トピック内の段落を翻訳から除外する方法
feature: Translation
role: User
exl-id: 21e41bb4-52f3-4352-92d9-4a60f636de99
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '148'
ht-degree: 0%

---

# トピック内の段落を翻訳から除外する方法

最も簡単な方法は、translation=no 属性を利用することです。

+ 作成者は、翻訳しない段落に追加の属性を **translation=no** として挿入できます。 翻訳ベンダーに通知する必要があり、ベンダーは最後に設定を行って、この属性を持つテキストを無視できます。
+ OOTB 機械翻訳（体験版Microsoft翻訳コネクタを使用）でも、同じ動作が示されます。
+ Microsoft翻訳を使用したテスト：段落レベルで **translate=no** 属性を定義した場合、段落全体が翻訳されません。 この属性は任意の要素で定義でき、その要素内のコンテンツは翻訳されません。


これについて詳しく説明するスクリーンショットを以下に示します。

**Source コンテンツ**

![Source コンテンツ ](assets/source-content.jpg)

**スペイン語の翻訳済みコンテンツ**

![ スペイン語の翻訳済みコンテンツ ](assets/trans-content.jpg)
