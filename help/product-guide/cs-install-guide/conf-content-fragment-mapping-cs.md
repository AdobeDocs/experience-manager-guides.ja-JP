---
title: トピックとコンテンツフラグメントモデルの間に JSON ベースのマッピングを設定します。
description: トピックとコンテンツフラグメントモデルの間に JSON ベースのマッピングを設定する方法について説明します。
exl-id: 438e2964-b9c7-462a-a68c-8031bd97911c
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 97d7776c81e7776d0248d6711ae5d05c46c44239
workflow-type: tm+mt
source-wordcount: '271'
ht-degree: 0%

---

# トピックとコンテンツフラグメント間のマッピングの作成



Adobe Experience Manager Guidesでは、トピックとコンテンツフラグメントモデルの間に JSON ベースのマッピングを作成できます。 JSON ベースのマッピングを使用すると、トピック内の一部またはすべての要素に存在するコンテンツをコンテンツフラグメントに公開できます。

>[!NOTE]
> 
> 4.6 以降のバージョンを使用する場合、このマッピングを作成する必要はありません。トピック要素を、コンテンツフラグメントモデルに存在するフィールドにドラッグできます。
> 詳しくは、[&#x200B; コンテンツフラグメントの公開 &#x200B;](../user-guide/publish-content-fragment.md) 方法を参照してください。


1. *contentFragmentMapping.json* をダウンロードするには、管理者としてAdobe Experience Managerにログインします。
1. 上部の「Adobe Experience Manager」リンクを選択し、「**ツール**」を選択します。
1. ツールのリストから「ガイド」を選択し、「**フォルダープロファイル**」を選択します。
1. **グローバルプロファイル** タイルを選択します。
1. 「**XML エディター設定**」タブを選択し、上部の **編集** アイコンを選択します。
1. **ダウンロード** アイコンを選択して、*contentFragmentMapping.json* ファイルをローカルシステムにダウンロードします。 その後、ファイルに変更を加えて、同じものをアップロードできます。

1. 次の検証に従う必要があります。

   1. JSON ファイルにする必要があります
   2. 少なくとも 1 つのオブジェクトを含む配列を含む必要があり、すべてのオブジェクトには次を含める必要があります。


      `"name": string `

      `"mapping": array`

      マッピングの各オブジェクトには、次の内容を含める必要があります。

      `"modelField": string`

      `"xpath": string`

      `"outputType": string`
1. ファイルを保存してアップロードします。

サンプル ファイル：

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

デフォルトのマッピングを使用して、トピック全体を公開できます。 ドロップダウン **コンテンツフラグメントを生成** ダイアログボックスから `Full Topic` マッピングを選択し、コンテンツフラグメントモデルに「topicData」フィールドを追加します。
