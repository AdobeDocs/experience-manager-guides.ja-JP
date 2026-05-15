---
title: トピックとエクスペリエンスフラグメントテンプレート間のJSON ベースのマッピングを設定します。
description: トピックとエクスペリエンスフラグメントテンプレート間のJSON ベースのマッピングを設定する方法について説明します。
feature: Output Generation
role: Admin
level: Experienced
exl-id: 2b59db60-61b5-4a7e-bbf1-35cab8b89323
TQID: https://experienceleague.adobe.com/bV5SVF5pLwakZ-0auAHQc8dRH6e7axDGZQufU0i9p14
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2:
  - id: b1ef4d86-3917-4b76-a0bc-4a4771f9b3b0
  - id: fd6cc9e1-e5e5-494e-b7b1-a32f2d6cd7c9
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 406
ht-degree: 0%

---

# トピックとエクスペリエンスフラグメント間のマッピングの作成

Adobe Experience Manager Guidesには、トピックとエクスペリエンスフラグメントテンプレートの間にJSON ベースのマッピングを作成する機能が用意されています。 このマッピングを使用すると、トピック内の一部またはすべての要素に含まれるコンテンツをエクスペリエンスフラグメントに公開できます。

1. *experienceFragmentMapping.json*&#x200B;をダウンロードするには、Adobe Experience Managerに管理者としてログインします。
1. 上部のAdobe Experience Manager リンクを選択し、**ツール**&#x200B;を選択します。
1. ツールのリストから「ガイド」を選択し、**フォルダープロファイル**&#x200B;を選択します。
1. 設定するプロファイルタイルを選択します。 グローバルプロファイルまたはフォルダーレベルのプロファイルのマッピングを設定できます。 例えば、**グローバルプロファイル** タイルを選択します。
1. 「**XML エディター設定**」タブを選択し、上部の&#x200B;**編集** アイコンを選択します。
1. **ダウンロード** アイコンを選択して、*experienceFragmentMapping.json* ファイルをローカルシステムにダウンロードします。 その後、ファイルに変更を加えて、同じものをアップロードできます。

1. 次の検証に従う必要があります。

   1. JSON ファイルを指定する必要があります
   2. 少なくとも1つのオブジェクトを含む配列を含める必要があり、すべてのオブジェクトに次のオブジェクトを含める必要があります。


      `"template": string `

      `"mapping": array`

      マッピングの各オブジェクトには、次のものが含まれている必要があります。

      `"name": string`

      `"class": string`

      `"resourceType": string`

      `"attributeMap": array`


1. ファイルを保存してアップロードします。

Experience Manager Guidesは、トピック全体をHTMLに変換し、その後、エクスペリエンスフラグメントで使用されるコアコンポーネントにマッピングできます。 例えば、`<p>` タグのコンテンツをマッピングして、エクスペリエンスフラグメントにテキストコンポーネントを作成できます。
* `name`: HTML要素を指定します。 例：`<div>`、`<img>`
* `class`: HTML要素に対応するDITA要素タグを指定します。 例：`<p>` `<image>`
* `resourceType`: エクスペリエンスフラグメントで使用されるコンポーネントに適用されるリソースタイプを指定します。 例えば、`wcm/foundation/components/text`はwcm `text` コンポーネントのresourceTypeです。
* `attributeMap`: テキストコンポーネントを`RichText`としてレンダリングするか、画像コンポーネントの`fileReference`を含めるかなど、コンポーネントに追加情報を提供します。




サンプルファイル：

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



Web エディターからエクスペリエンスフラグメントを公開する際に、**エクスペリエンスフラグメントを生成** ダイアログボックスのドロップダウンから`Template`を選択し、**マッピング** フィールドでテンプレートで使用可能なマッピングを表示します。 テンプレートにカスタムマッピングがない場合は、デフォルトのマッピングが一覧表示されます。 デフォルトのマッピングを使用すると、トピック全体をエクスペリエンスフラグメントとして公開できます。

詳しくは、[&#x200B; エクスペリエンスフラグメントの公開](../user-guide/publish-experience-fragment.md)を参照してください。
