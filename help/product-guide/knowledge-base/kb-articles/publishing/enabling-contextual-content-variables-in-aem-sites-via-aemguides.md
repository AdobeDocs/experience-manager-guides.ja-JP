---
title: AEM Guidesから生成されたAEM Sites ページでのコンテキストコンテンツ変数（CCVAR）の有効化
description: AEM Guidesから生成されたAEM Sites ページでのコンテキストコンテンツ変数（CCVAR）の操作
feature: Web Editor
role: User, Admin
exl-id: f9adbb3f-6c1c-4d6f-b55d-1fb45acca91a
TQID: 'https://experienceleague.adobe.com/ehW4uJQaj3XqejwquxVwFo4vFx6q7qCsVIm6MowolZE'
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
    internal-label: Publishing
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
    internal-label: Configuration
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
    internal-label: Authoring
subfeature_v2:
  - id: f89f75b0-cf2e-4e96-aec8-fe8c39cbd0ef
    internal-label: Web Editor
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '497'
ht-degree: 3%
---
# AEM Guidesから生成されたAEM Sites ページでのコンテキストコンテンツ変数（CCVAR）の有効化

コンテキストコンテンツ変数（CCVAR）は、作成者が作成したテキストで動的コンテンツ変数を直接使用できるようにするACS Commons機能です。 CCVARはAEM Sitesで一般的に使用されますが、この記事では、**AEM Guides***で作成されたコンテンツから生成されたページを通じて、主にDITA マップ*&#x200B;で定義されたキーワードを使用して、同様の機能を実現する方法について説明します。


## コンテキストコンテンツ変数（CCVAR）とは何ですか？

CCVARを使用すると、作成者はコンテンツに動的変数を挿入できます。動的変数は、実行時にコンテキストに基づいて解決されます。 例えば、`((page_properties.pageTitle))`などの変数は、コンテンツのレンダリング中にページタイトルを動的に取得できます。


## AEM Guidesから生成されたAEM Sites ページでCCVARを有効にするにはどうすればよいですか？

AEM Guidesがすべてのコンテンツ（AEM Sites、PDF、HTML5など）のソースとして使用されていることを考えると、AEM Guidesから生成されたページでCCVARを有効にするには、キーワードを使用してCCVAR名を定義する必要があります。 これをガイドで行うには、`<keydef>`要素を使用してDITA マップで&#x200B;**キーワード**&#x200B;を定義します。 これらのキーワードは動的な値（またはCCVAR名）に対応できるため、DITA トピックで参照できます。


## 前提条件

続行する前に、次の前提条件が満たされていることを確認してください。

1. **AEM ACS Commonsがインストールされました**:
   - **ACS AEM Commons**&#x200B;がAEM インスタンスにインストールされていることを確認します。 これは、CCVARの使用に必要です。

2. **コンテキスト コンテンツ変数の設定**:
   - [公式ドキュメント &#x200B;](https://adobe-consulting-services.github.io/acs-aem-commons/features/contextual-content-variables/index.html)を使用して、AEMの&#x200B;**コンテキストコンテンツ変数**&#x200B;の設定を完了します。 これには次が含まれます。
     - **プロパティ集計**&#x200B;を有効にしています。
     - HTML出力を使用している場合は、**HTML書き換え**&#x200B;を設定しています。
     - **JSON書き換え**&#x200B;の設定（JSON出力を使用する場合）。



## AEM GuidesでCCVARを有効にする手順

### &#x200B;1. DITA マップでのキーワードの定義

- AEM Guidesでは、DITA マップの`<keydef>`要素を使用してキーワードを定義し、CCVARに対応させます。
- 例：

```xml
  <keydef keys="product">
    <topicmeta>
      <keywords>
        <keyword>((page_properties.pageTitle))</keyword>
      </keywords>
    </topicmeta>
  </keydef>
```

- `keys`属性（この例では`product`）を使用して、DITA トピックでこの変数を参照します。


## &#x200B;2. DITA トピックでのキーワードの使用

- トピックでは、CCVarを使用する場所でキーワードを使用します。
- 例：

```xml
  <p>This is the title of the product: <keyword keyref="product"/> </p>
```

- `keyref`属性は、`<keydef>`要素で定義された`keys`値（この場合は`product`）を指しています。
- 出力生成時に、キーワードは対応するCCVar値に置き換えられます。


## &#x200B;3. 出力を生成

- AEM Sitesの出力を生成すると、キーワード参照は対応する動的な値に解決されます。
- 例：
  - `((page_properties.pageTitle))`が`My Product`に解決した場合、出力は次のように表示されます。

```xml
   This is the title of the product: My Product.
```


## ユースケース例

ページの言語をDITA トピックに動的に挿入するとします。 その方法は次のとおりです。

**DITA マップでキーワードを定義**:

```xml
   <keydef keys="pageLanguage">
     <topicmeta>
       <keywords>
         <keyword>((inherited_page_properties.jcr:language))</keyword>
       </keywords>
     </topicmeta>
   </keydef>
```

**DITA トピックでキーワードを参照**:

```xml
   <p>The title of this page is: <keyword keyref="pageLanguage"/>.</p>
```

**生成された出力**:

`((inherited_page_properties.jcr:language))`が`en`に解決した場合、出力は次のように表示されます。

```
     The language of this page is: en.
```


### リソース

**コンテキストコンテンツ変数**&#x200B;の詳細については、公式ドキュメントを参照してください。\
AEM Commons[&#128279;](https://adobe-consulting-services.github.io/acs-aem-commons/features/contextual-content-variables/index.html)の コンテキスト コンテンツ変数
