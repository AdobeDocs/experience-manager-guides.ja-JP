---
title: トピックとコンテンツフラグメントモデル間のJSON ベースのマッピングを設定します。
description: トピックとコンテンツフラグメントモデル間のJSON ベースのマッピングを設定する方法について説明します。
exl-id: 21446bcb-e7df-4823-acc3-1fdc7473f0d1
feature: Output Generation
role: Admin
level: Experienced
hidefromtoc: yes
TQID: https://experienceleague.adobe.com/RQfBAqnFbJwbscxdqkuPFf8N8HnXXy-Z-SuiwlleofY
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2: id: b1ef4d86-3917-4b76-a0bc-4a4771f9b3b0
role_v2: id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 239
ht-degree: 0%

---

# トピックとコンテンツフラグメントのマッピングの作成

AEM Guidesには、トピックとコンテンツフラグメントモデル間のJSON ベースのマッピングを作成する機能が用意されています。 このマッピングを使用すると、トピック内の一部またはすべての要素に含まれるコンテンツをコンテンツフラグメントに公開できます。

1. *contentFragmentMapping.json*&#x200B;をダウンロードするには、Adobe Experience Managerに管理者としてログインします。
1. 上部のAdobe Experience Manager リンクを選択し、**ツール**&#x200B;を選択します。
1. ツールのリストから「ガイド」を選択し、**フォルダープロファイル**&#x200B;を選択します。
1. 「**グローバルプロファイル**」タイルを選択します。
1. 「**XML エディター設定**」タブを選択し、上部の&#x200B;**編集** アイコンを選択します。
1. **ダウンロード** アイコンを選択して、*contentFragmentMapping.json* ファイルをローカルシステムにダウンロードします。 その後、ファイルに変更を加えて、同じものをアップロードできます。

1. 次の検証に従う必要があります。

   1. JSON ファイルを指定する必要があります
   2. 少なくとも1つのオブジェクトを含む配列を含める必要があり、すべてのオブジェクトに次のオブジェクトを含める必要があります。


      `"name": string `

      `"mapping": array`

      マッピングの各オブジェクトには、次のものが含まれている必要があります。

      `"modelField": string`

      `"xpath": string`

      `"outputType": string`
1. ファイルを保存してアップロードします。

サンプルファイル：

```
[
  {
    "mapping": [
      {
        "modelField": "title",
        "xpath": "/topic[1]/title[1]",
        "outputType": "textContent"
      },
      {
        "modelField": "shortdesc",
        "xpath": "/topic[1]/shortdesc[1]",
        "outputType": "textContent"
      },
      {
        "modelField": "topicData",
        "xpath": "/topic[1]/body[1]",
        "outputType": "outerHTML"
      }
    ],
    "name": "Full Topic"
  },
  {
    "mapping": [
      {
        "modelField": "title",
        "xpath": "/topic[1]/title[1]",
        "outputType": "textContent"
      },
      {
        "modelField": "shortdesc",
        "xpath": "/topic[1]/shortdesc[1]",
        "outputType": "textContent"
      },
      {
        "modelField": "heroImage",
        "xpath": "/topic[1]/body[1]/p[1]/image[1]",
        "outputType": "outerHTML"
      },
      {
        "modelField": "dataTable",
        "xpath": "/topic[1]/body[1]/table[1]",
        "outputType": "outerHTML"
      }
    ],
    "name": "Sample Example with XPath"
  }
]
```

デフォルトのマッピングを使用して、トピック全体を公開できます。 「**コンテンツフラグメントとして公開**」ダイアログボックスのドロップダウンから「`Full Topic`」マッピングを選択し、コンテンツフラグメントモデルに「topicData」フィールドがあります。
