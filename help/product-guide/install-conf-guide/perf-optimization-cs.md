---
title: Cloud Serviceのパフォーマンスを最適化するための推奨事項
description: パフォーマンス最適化に関する推奨事項を学ぶ
feature: Performance Optimization
role: Admin
level: Experienced
exl-id: 6c9684d4-180f-4ccb-bfd6-6c82a8a7b720
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
feature_v2:
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
    internal-label: Configuration
subfeature_v2:
  - id: baa3aa24-d162-4a57-b73a-d27341145083
    internal-label: Performance optimization
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '152'
ht-degree: 5%
---
# Cloud Serviceのパフォーマンスを最適化するための推奨事項 {#id213BD0JG0XA}

パフォーマンスを最適化するには、次の点を考慮する必要があります。

- コンテンツとインデックス作成のエクスペリエンスを最適化するには、AEM ドキュメントの「[ コンテンツ検索とインデックス作成を最適化](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/operations/indexing.html?lang=ja)」を参照してください。

- 公開用にカスタム DITA-OTを使用している場合に、Xerces Jarにパッチを適用します。 ユースケースに応じて、これは必須の設定です。 この変更は、出力の公開にカスタム DITA-OTを使用する場合にのみ必要です。

  *必要な設定*: カスタム DITA-OT パッケージのXerces Jar ファイルを、出荷されたOOTB ファイルに置き換えます。 デフォルトのOOTB `xercesImpl-2.11.0.jar` ファイルは、`/libs/fmdita/dita\_resources/DITA-OT.zip` ファイル内で使用できます。 置き換える古いXerces Jar ファイルと一致するように、`xercesImpl-2.11.0.jar` ファイルの名前を変更してください。 これは実行時に実行できます。

  この変更により、多数のトピックを含むDITA マップを公開する際の公開時間とメモリの使用率が削減されます。
