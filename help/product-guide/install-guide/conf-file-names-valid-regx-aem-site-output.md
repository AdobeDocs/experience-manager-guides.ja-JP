---
title: AEM Site 出力の有効なファイル名の設定
description: AEM サイト出力の有効なファイル名を設定する方法を説明します
exl-id: 1e69d6f8-7baf-4189-bbbd-34cd0fec6634
feature: Filename Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '141'
ht-degree: 0%

---

# AEM Site 出力の有効なファイル名の設定 {#id214GK0X0KXA}

DITA トピックに使用できる有効なファイル名文字の一覧と同様に、AEM Site 出力に有効なファイル名文字の一覧を構成することもできます。 URL で使用できない既知の文字の一部は次のとおりです。```'<>`@$``` これらの文字は、AEM Site 出力ファイル名の生成中に見つかると、自動的にアンダースコア「_」に変換されます。 AEM サイト出力に有効な文字を設定できる設定は、`com.adobe.fmdita.common.SanitizeNodeNameImpl` バンドルにあります。 **AEM Sitesに公開する際に使用できない文字セットを設定する** を設定して、AEM Site 出力ファイル名にアンダースコアで置き換える文字を含めます。

**親トピック：**[ ファイル名の設定 ](conf-file-names.md)
