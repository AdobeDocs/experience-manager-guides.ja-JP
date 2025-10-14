---
title: パフォーマンス最適化のためのRecommendations
description: パフォーマンス最適化のためのRecommendationsについて説明します
exl-id: 92ac1f81-2f51-44b0-82c3-56b39e8f3027
feature: Performance Optimization
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '149'
ht-degree: 0%

---

# パフォーマンス最適化のためのRecommendations {#id213BD0JG0XA}

パフォーマンスを最適化する際は、次の点を考慮してください。

- コンテンツとインデックス作成のエクスペリエンスを最適化するには、AEM ドキュメントの [&#x200B; コンテンツの検索とインデックス作成の最適化 &#x200B;](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/operations/indexing.html?lang=ja) を参照してください。

- カスタム DITA-OT を使用して発行する際に、Xerces Jar にパッチを適用します。 ユースケースによっては、これは必須の設定です。 この変更は、出力の発行にカスタム DITA-OT を使用する場合にのみ必要です。

  *必要な設定*：カスタム DITA-OT パッケージ内の Xerces Jar ファイルを、付属の OOTB に置き換えます。 デフォルトの OOTB xercesImpl-2.11.0.jar ファイルは、/libs/fmdita/dita\_resources/DITA-OT.zip ファイル内にあります。 xercesImpl-2.11.0.jar ファイルの名前を、置き換える古い Xerces Jar ファイルと一致するように変更します。 これは実行時に行うことができます。

  この変更により、多数のトピックを含む DITA マップを公開する際に、公開時間とメモリの使用量が削減されます。


**親トピック：**&#x200B;[&#x200B; ダウンロードとインストール &#x200B;](download-install.md)
