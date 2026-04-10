---
title: トピックとエクスペリエンスフラグメントテンプレート間のJSON ベースのマッピングを設定します。
description: トピックとエクスペリエンスフラグメントテンプレート間のJSON ベースのマッピングを設定する方法について説明します。
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 834959a6a0e22cd5d2b2c5d0e57ceb6d45c0c666
workflow-type: tm+mt
source-wordcount: '405'
ht-degree: 0%

---

# Cloud Serviceのトピックとエクスペリエンスフラグメントのマッピングを作成する

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



Web エディターからエクスペリエンスフラグメントを公開する際に、`Template` エクスペリエンスフラグメントを生成&#x200B;**ダイアログボックスのドロップダウンから**&#x200B;を選択し、**マッピング** フィールドでテンプレートで使用可能なマッピングを表示します。 テンプレートにカスタムマッピングがない場合は、デフォルトのマッピングが一覧表示されます。 デフォルトのマッピングを使用すると、トピック全体をエクスペリエンスフラグメントとして公開できます。

詳しくは、[&#x200B; エクスペリエンスフラグメントの公開](../user-guide/publish-experience-fragment.md)を参照してください。
