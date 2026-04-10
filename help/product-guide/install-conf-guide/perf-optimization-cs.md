---
title: Cloud Serviceのパフォーマンスを最適化するための推奨事項
description: パフォーマンス最適化に関する推奨事項を学ぶ
feature: Performance Optimization
role: Admin
level: Experienced
source-git-commit: 834959a6a0e22cd5d2b2c5d0e57ceb6d45c0c666
workflow-type: tm+mt
source-wordcount: '141'
ht-degree: 0%

---

# Cloud Serviceのパフォーマンスを最適化するための推奨事項 {#id213BD0JG0XA}

パフォーマンスを最適化するには、次の点を考慮する必要があります。

- コンテンツとインデックス作成のエクスペリエンスを最適化するには、AEM ドキュメントの「[ コンテンツ検索とインデックス作成を最適化](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/operations/indexing.html?lang=ja)」を参照してください。

- 公開用にカスタム DITA-OTを使用している場合に、Xerces Jarにパッチを適用します。 ユースケースに応じて、これは必須の設定です。 この変更は、出力の公開にカスタム DITA-OTを使用する場合にのみ必要です。

  *必要な設定*: カスタム DITA-OT パッケージのXerces Jar ファイルを、出荷されたOOTB ファイルに置き換えます。 デフォルトのOOTB `xercesImpl-2.11.0.jar` ファイルは、`/libs/fmdita/dita\_resources/DITA-OT.zip` ファイル内で使用できます。 置き換える古いXerces Jar ファイルと一致するように、`xercesImpl-2.11.0.jar` ファイルの名前を変更してください。 これは実行時に実行できます。

  この変更により、多数のトピックを含むDITA マップを公開する際の公開時間とメモリの使用率が削減されます。

