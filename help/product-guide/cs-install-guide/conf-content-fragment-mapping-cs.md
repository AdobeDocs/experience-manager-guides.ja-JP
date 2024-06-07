---
title: トピックとコンテンツフラグメントモデルの間に JSON ベースのマッピングを設定します。
description: トピックとコンテンツフラグメントモデルの間に JSON ベースのマッピングを設定する方法について説明します。
exl-id: 438e2964-b9c7-462a-a68c-8031bd97911c
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: f8c71e18f5e2e5dbc5a2abdbb92c72fdad3bb233
workflow-type: tm+mt
source-wordcount: '233'
ht-degree: 0%

---

# トピックとコンテンツフラグメント間のマッピングの作成

AEM ガイドには、トピックとコンテンツフラグメントモデルの間に JSON ベースのマッピングを作成する機能が用意されています。 このマッピングを使用して、トピック内の一部またはすべての要素に存在するコンテンツをコンテンツフラグメントに公開できます。

1. をダウンロードします *contentFragmentMapping.json*&#x200B;にアクセスし、管理者としてAdobe Experience Managerにログインします。
1. 上部の「Adobe Experience Manager」リンクを選択し、 **ツール**.
1. ツールのリストから「ガイド」を選択し、 **フォルダープロファイル**.
1. 「」を選択します **グローバルプロファイル** タイル。
1. 「」を選択します **XML エディターの設定** tab キーを押しながら **編集** 上部のアイコン。
1. 「」を選択します **Download** アイコンをクリックして *contentFragmentMapping.json*  ローカルシステム上のファイル。 その後、ファイルに変更を加えて、同じものをアップロードできます。

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

デフォルトのマッピングを使用して、トピック全体を公開できます。 「」を選択します `Full Topic` ドロップダウンからのマッピング **コンテンツフラグメントを生成** コンテンツフラグメントモデルに「topicData」フィールドが含まれている。
