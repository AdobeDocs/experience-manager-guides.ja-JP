---
title: トピックとコンテンツフラグメントモデル間のJSON ベースのマッピングを設定します。
description: トピックとコンテンツフラグメントモデル間のJSON ベースのマッピングを設定する方法について説明します。
exl-id: 438e2964-b9c7-462a-a68c-8031bd97911c
feature: Output Generation
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 564ee1731be2378744ffd2ed54a2fd423901a0b3
workflow-type: tm+mt
source-wordcount: '271'
ht-degree: 0%

---

# トピックとコンテンツフラグメントのマッピングの作成



Adobe Experience Manager Guidesでは、トピックとコンテンツフラグメントモデルの間にJSON ベースのマッピングを作成できます。 JSON ベースのマッピングを使用して、トピック内の一部またはすべての要素に含まれるコンテンツをコンテンツフラグメントに公開できます。

>[!NOTE]
> 
> 4.6以降のバージョンを使用している場合は、このマッピングを作成する必要はありません。トピック要素をコンテンツフラグメントモデルに存在するフィールドにドラッグできます。
> コンテンツフラグメントを[公開する方法について詳しくは、](../user-guide/publish-content-fragment.md)を参照してください。


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

デフォルトのマッピングを使用して、トピック全体を公開できます。 ドロップダウン `Full Topic` コンテンツフラグメントを生成&#x200B;**ダイアログボックスから** マッピングを選択し、コンテンツフラグメントモデルに「topicData」フィールドを含めます。
