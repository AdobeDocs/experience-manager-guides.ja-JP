---
title: パフォーマンス最適化に関する推奨事項
description: パフォーマンス最適化に関する推奨事項を学ぶ
exl-id: 92ac1f81-2f51-44b0-82c3-56b39e8f3027
feature: Performance Optimization
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/vh0hogZNMjKrCL12WdKVuwF2qXdzy64KxIhhB-K4esA
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
  - id: b1210526-416b-4ef6-bcc0-1692e99f30e9
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
  - id: e88e74c7-6080-446a-8eb0-496f1ac5f7e6
subfeature_v2:
  - id: baa3aa24-d162-4a57-b73a-d27341145083
  - id: c8841798-1a28-4264-a46a-984860f8e6f6
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
topic_v2:
  - id: cdd65e7e-8839-44a2-bc21-0e03623b5dd1
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
  - id: eddd9b14-83bd-4ff4-9072-54a4a484abb7
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 162
ht-degree: 5%

---

# パフォーマンス最適化に関する推奨事項 {#id213BD0JG0XA}

パフォーマンスを最適化するには、次の点を考慮する必要があります。

- コンテンツとインデックス作成のエクスペリエンスを最適化するには、AEM ドキュメントの「[&#x200B; コンテンツ検索とインデックス作成を最適化](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/operations/indexing.html?lang=ja)」を参照してください。

- 公開用にカスタム DITA-OTを使用している場合に、Xerces Jarにパッチを適用します。 ユースケースに応じて、これは必須の設定です。 この変更は、出力の公開にカスタム DITA-OTを使用する場合にのみ必要です。

  *必要な設定*: カスタム DITA-OT パッケージのXerces Jar ファイルを、出荷されたOOTB ファイルに置き換えます。 デフォルトのOOTB xercesImpl-2.11.0.jar ファイルは、/libs/fmdita/dita\_resources/DITA-OT.zip ファイル内で使用できます。 xercesImpl-2.11.0.jar ファイルの名前を、置き換える古いXerces Jar ファイルと一致するように変更してください。 これは実行時に実行できます。

  この変更により、多数のトピックを含むDITA マップを公開する際の公開時間とメモリの使用率が削減されます。


**親トピック：**&#x200B;[&#x200B; ダウンロードしてインストール &#x200B;](download-install.md)
