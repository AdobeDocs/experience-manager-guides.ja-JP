---
title: トピックとエクスペリエンスフラグメントテンプレート間の JSON ベースのマッピングを設定します。
description: トピックとエクスペリエンスフラグメントテンプレートの間に JSON ベースのマッピングを設定する方法を説明します。
feature: Output Generation
role: Admin
level: Experienced
exl-id: 2b59db60-61b5-4a7e-bbf1-35cab8b89323
source-git-commit: d525775afeeb89754762ff514126b1c3a3307b3f
workflow-type: tm+mt
source-wordcount: '402'
ht-degree: 0%

---

# トピックとエクスペリエンスフラグメント間のマッピングの作成

Adobe Experience Manager Guidesは、トピックとエクスペリエンスフラグメントテンプレートの間に JSON ベースのマッピングを作成する機能を提供します。 このマッピングを使用して、トピック内の一部またはすべての要素に存在するコンテンツをエクスペリエンスフラグメントに公開できます。

1. *experienceFragmentMapping.json* をダウンロードするには、管理者としてAdobe Experience Managerにログインします。
1. 上部の「Adobe Experience Manager」リンクを選択し、「**ツール**」を選択します。
1. ツールのリストから「ガイド」を選択し、「**フォルダープロファイル**」を選択します。
1. 設定するプロファイルタイルを選択します。 グローバルプロファイルまたはフォルダーレベルのプロファイルのマッピングを設定できます。 例えば、「**グローバルプロファイル**」タイルを選択します。
1. 「**XML エディター設定**」タブを選択し、上部の **編集** アイコンを選択します。
1. **ダウンロード** アイコンを選択して、*experienceFragmentMapping.json* ファイルをローカルシステムにダウンロードします。 その後、ファイルに変更を加えて、同じものをアップロードできます。

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

Experience Manager Guidesは、トピック全体をHTMLに変換し、エクスペリエンスフラグメントで使用するコアコンポーネントにマッピングできます。 例えば、`<p>` タグのコンテンツをマッピングして、エクスペリエンスフラグメントにテキストコンポーネントを作成できます。
* `name`:HTML要素を指定します。 例：`<div>`、`<img>`
* `class`: HTMLエレメントに対応する DITA エレメントタグを指定します。 例：`<p>` `<image>`
* `resourceType`：エクスペリエンスフラグメントで使用されるコンポーネントに適用できるリソースタイプを指定します。 例えば、`wcm/foundation/components/text` は wcm `text` コンポーネントの resourceType です。
* `attributeMap`: テキストコンポーネントを `RichText` としてレンダリングするか、画像コンポーネントの `fileReference` を含めるかなど、コンポーネントに追加情報を提供します。




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



Web エディターからエクスペリエンスフラグメントを公開する際に、**エクスペリエンスフラグメントを生成** ダイアログボックスのドロップダウンから `Template` を選択し、テンプレートで使用可能なマッピングを **マッピング** フィールドに表示します。 テンプレートにカスタムマッピングが存在しない場合は、デフォルトのマッピングが表示されます。 デフォルトのマッピングを使用すると、トピック全体をエクスペリエンスフラグメントとして公開できます。

詳しくは、[Publish エクスペリエンスフラグメント &#x200B;](../user-guide/publish-experience-fragment.md) を参照してください。
