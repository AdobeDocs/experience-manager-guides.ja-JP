---
title: トピックとエクスペリエンスフラグメントテンプレート間の JSON ベースのマッピングを設定します。
description: トピックとエクスペリエンスフラグメントテンプレートの間に JSON ベースのマッピングを設定する方法を説明します。
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: f252537d15d7e8f8651dddb0ae635905705e4adf
workflow-type: tm+mt
source-wordcount: '402'
ht-degree: 0%

---

# トピックとエクスペリエンスフラグメント間のマッピングの作成

Adobe Experience Manager ガイドには、トピックとエクスペリエンスフラグメントテンプレートの間に JSON ベースのマッピングを作成する機能が用意されています。 このマッピングを使用して、トピック内の一部またはすべての要素に存在するコンテンツをエクスペリエンスフラグメントに公開できます。

1. をダウンロードします *experienceFragmentMapping.json*&#x200B;にアクセスし、管理者としてAdobe Experience Managerにログインします。
1. 上部の「Adobe Experience Manager」リンクを選択し、 **ツール**.
1. ツールのリストから「ガイド」を選択し、 **フォルダープロファイル**.
1. 設定するプロファイルタイルを選択します。 グローバルプロファイルまたはフォルダーレベルのプロファイルのマッピングを設定できます。 例えば、 **グローバルプロファイル** タイル。
1. 「」を選択します **XML エディターの設定** tab キーを押しながら **編集** 上部のアイコン。
1. 「」を選択します **Download** アイコンをクリックして *experienceFragmentMapping.json*  ローカルシステム上のファイル。 その後、ファイルに変更を加えて、同じものをアップロードできます。

1. 次の検証に従う必要があります。

   1. JSON ファイルにする必要があります
   2. 少なくとも 1 つのオブジェクトを含む配列を含む必要があり、すべてのオブジェクトには次を含める必要があります。


      `"template": string `

      `"mapping": array`

      マッピングの各オブジェクトには、次の内容を含める必要があります。

      `"name": string`

      `"class": string`

      `"resourceType": string`

      `"attributeMap": array`


1. ファイルを保存してアップロードします。

Experience Managerガイドでは、トピック全体をHTMLに変換し、エクスペリエンスフラグメントで使用するコアコンポーネントにマッピングできます。 例えば、内のコンテンツは `<p>` タグをマッピングして、エクスペリエンスフラグメントにテキストコンポーネントを作成できます。
* `name`:HTMLを指定します。 例：`<div>`、`<img>`
* `class`:HTMLエレメントに対応する DITA エレメントタグを指定します。 例： `<p>` `<image>`
* `resourceType`：エクスペリエンスフラグメントで使用されるコンポーネントに適用できるリソースタイプを指定します。 例： `wcm/foundation/components/text` は、wcm の resourceType です。 `text` コンポーネント。
* `attributeMap`：テキストコンポーネントを次の形式でレンダリングするかどうかなど、コンポーネントに追加情報を提供します `RichText` または次を含む `fileReference` 画像コンポーネントの。




サンプル ファイル：

```
[
  {
    "template": "default",
    "mapping": [
      {
        "name": "#element",
        "resourceType": "wcm/foundation/components/text",
        "attributeMap": [
          {
            "from": "outerHTML",
            "to": "text"
          },
          {
            "value": true,
            "to": "textIsRich"
          }
        ]
      }
    ]
  },
  {
    "template": "/conf/we-retail/settings/wcm/templates/experience-fragment-web-variation",
    "mapping": [
      {
        "name": "div",
        "class": "title",
        "resourceType": "wcm/foundation/components/text",
        "attributeMap": [
          {
            "from": "outerHTML",
            "to": "text"
          },
          {
            "value": true,
            "to": "textIsRich"
          }
        ]
      },
      {
        "name": "h1, h2, h3, h4, h5, h6",
        "resourceType": "wcm/foundation/components/text",
        "attributeMap": [
          {
            "from": "outerHTML",
            "to": "text"
          },
          {
            "value": true,
            "to": "textIsRich"
          }
        ]
      },
      {
        "name": "div",
        "class": "p",
        "resourceType": "wcm/foundation/components/text",
        "attributeMap": [
          {
            "from": "outerHTML",
            "to": "text"
          },
          {
            "value": true,
            "to": "textIsRich"
          }
        ]
      },
      {
        "name": "img",
        "class": "image",
        "resourceType": "wcm/foundation/components/image",
        "attributeMap": [
          {
            "from": "outerHTML",
            "to": "fileReference"
          }
        ]
      },
      {
        "name": "#element",
        "resourceType": "wcm/foundation/components/text",
        "attributeMap": [
          {
            "from": "outerHTML",
            "to": "text"
          },
          {
            "value": true,
            "to": "textIsRich"
          }
        ]
      }
    ]
  }
]
```



Web エディターからエクスペリエンスフラグメントを公開する際に、 `Template` のドロップダウンから **エクスペリエンスフラグメントを生成** ダイアログを開き、 **マッピング** フィールド。 テンプレートにカスタムマッピングが存在しない場合は、デフォルトのマッピングが表示されます。 デフォルトのマッピングを使用すると、トピック全体をエクスペリエンスフラグメントとして公開できます。

詳しくは、次を参照してください [エクスペリエンスフラグメントの公開](../user-guide/publish-experience-fragment.md).

