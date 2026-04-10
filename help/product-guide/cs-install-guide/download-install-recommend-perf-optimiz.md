---
title: パフォーマンス最適化に関する推奨事項
description: パフォーマンス最適化に関する推奨事項を学ぶ
exl-id: 92ac1f81-2f51-44b0-82c3-56b39e8f3027
feature: Performance Optimization
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 564ee1731be2378744ffd2ed54a2fd423901a0b3
workflow-type: tm+mt
source-wordcount: '149'
ht-degree: 0%

---

# パフォーマンス最適化に関する推奨事項 {#id213BD0JG0XA}

パフォーマンスを最適化するには、次の点を考慮する必要があります。

- コンテンツとインデックス作成のエクスペリエンスを最適化するには、AEM ドキュメントの「[ コンテンツ検索とインデックス作成を最適化](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/operations/indexing.html?lang=ja)」を参照してください。

- 公開用にカスタム DITA-OTを使用している場合に、Xerces Jarにパッチを適用します。 ユースケースに応じて、これは必須の設定です。 この変更は、出力の公開にカスタム DITA-OTを使用する場合にのみ必要です。

  *必要な設定*: カスタム DITA-OT パッケージのXerces Jar ファイルを、出荷されたOOTB ファイルに置き換えます。 デフォルトのOOTB xercesImpl-2.11.0.jar ファイルは、/libs/fmdita/dita\_resources/DITA-OT.zip ファイル内で使用できます。 xercesImpl-2.11.0.jar ファイルの名前を、置き換える古いXerces Jar ファイルと一致するように変更してください。 これは実行時に実行できます。

  この変更により、多数のトピックを含むDITA マップを公開する際の公開時間とメモリの使用率が削減されます。


**親トピック：**[ ダウンロードしてインストール ](download-install.md)
