---
title: AEM Site 出力用の有効なファイル名の設定
description: AEM Site 出力用の有効なファイル名を設定する方法を説明します
exl-id: 1e69d6f8-7baf-4189-bbbd-34cd0fec6634
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '141'
ht-degree: 0%

---

# AEM Site 出力用の有効なファイル名の設定 {#id214GK0X0KXA}

DITA トピックで使用できる有効なファイル名文字のリストと同様に、AEM Site 出力用の有効なファイル名文字のリストを設定することもできます。 URL で使用できない既知の文字の一部を次に示します。 ```'<>`@$```. これらの文字は、AEM Site の出力ファイル名の生成時に、アンダースコア「_」に自動的に変換されるように設定されます。 AEM Site の出力で有効な文字を設定できる設定は、 `com.adobe.fmdita.common.SanitizeNodeNameImpl` バンドル。 **AEM Sitesへの公開用に許可されない文字セットの設定** AEM Site の出力ファイル名に、アンダースコアに置き換える文字を含めるように設定します。

**親トピック：**[&#x200B;ファイル名を設定](conf-file-names.md)
