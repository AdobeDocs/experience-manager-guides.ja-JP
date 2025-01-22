---
title: AEM Guidesを使用したAEM Sitesでのコンテキストコンテンツ変数（CCVAR）の有効化
description: AEM Guidesを使用したAEM Sitesでのコンテキストコンテンツ変数（CCVAR）の操作
exl-id: null
feature: Web Editor
role: User, Admin
source-git-commit: ac40ab63b691ea31dfa1a3c9f7644b357b3167a4
workflow-type: tm+mt
source-wordcount: '466'
ht-degree: 2%

---

# AEM Guidesを使用したAEM Sitesでのコンテキストコンテンツ変数（CCVAR）の有効化

コンテキストコンテンツ変数（CCVAR）は、作成者が作成したテキストで動的コンテンツ変数を直接使用できるようにする、ACS Commons の機能です。 CCVAR はAEM Sitesで一般的に使用されますが、この記事では、**AEM Guidesで作成されたコンテンツから生成されたページを使用して** 主に DITA マップで定義されたキーワードを使用して *同様の機能を実現する方法を説明し* す。


## コンテキストコンテンツ変数（CCVAR）とは

CCVAR を使用すると、作成者はコンテンツに動的変数を挿入し、コンテキストに基づいて実行時に解決されます。 例えば、`((page_properties.pageTitle))` などの変数は、コンテンツのレンダリング中にページタイトルを動的に取り込むことができます。


## AEM Guidesから生成されたAEM Sitesで CCVAR を有効にする方法

AEM Guidesをすべてのコンテンツ（AEM Sites、PDF、HTML5 など）のソースとして使用する場合、AEM Guidesから生成されたページで CCVAR を有効にするには、キーワードを使用して CCVAR 名を定義する必要があります。 ガイドでこれを行うには、`<keydef>` 要素を使用して DITA マップに **キーワード** を定義します。 これらのキーワードは動的な値（または CCVAR 名）に対応し、DITA トピックで参照できます。


## 前提条件

先に進む前に、次の前提条件が満たされていることを確認します。

1. **AEM ACS Commons がインストールされています**:
   - **ACS AEM Commons** がAEM インスタンスにインストールされていることを確認します。 これは、CCVAR を使用する場合に必要です。

2. **コンテキストコンテンツ変数の設定**:
   - **公式ドキュメント** を使用して、AEMで [ コンテキストコンテンツ変数 ](https://adobe-consulting-services.github.io/acs-aem-commons/features/contextual-content-variables/index.html) の設定を行います。 変更してはいけないものの一例は、次のとおりです。
      - **プロパティの集計** を有効にします。
      - **HTMLの書き換え** を構成しています（HTML出力を使用する場合）。
      - **JSON の書き換え** の設定（JSON 出力を使用する場合）。



## AEM Guidesで CCVAR を有効にする手順

### 1. DITA Map でのキーワードの定義

- AEM Guidesで、DITA マップの `<keydef>` エレメントを使用して CCVAR に対応するキーワードを定義します。
- 次に例を示します。

```xml
  <keydef keys="product">
    <topicmeta>
      <keywords>
        <keyword>((page_properties.pageTitle))</keyword>
      </keywords>
    </topicmeta>
  </keydef>
```

- `keys` 属性（この例では `product`）は、DITA トピックでこの変数を参照するために使用されます。


## 2. DITA トピックでのキーワードの使用

- このトピックでは、CCVar を使用する場所では常にキーワードを使用します。
- 次に例を示します。

```xml
  <p>This is the title of the product: <keyword keyref="product"/> </p>
```

- `keyref` 属性は、`<keydef>` 要素（この場合は `product`）で定義された `keys` 値を指します。
- 出力生成時に、キーワードは対応する CCVar 値に置き換えられます。


## 3.出力を生成する

- AEM Sites用に出力を生成すると、キーワード参照は、対応する動的な値に解決されます。
- 次に例を示します。
   - `((page_properties.pageTitle))` が `My Product` に解決される場合、出力には次の内容が表示されます。

```xml
   This is the title of the product: My Product.
```


## ユースケース例

ページの言語を動的に DITA トピックに挿入するとします。 これを実現する方法を次に示します。

**DITA マップでのキーワードの定義**:

```xml
   <keydef keys="pageLanguage">
     <topicmeta>
       <keywords>
         <keyword>((inherited_page_properties.jcr:language))</keyword>
       </keywords>
     </topicmeta>
   </keydef>
```

**DITA トピック内のキーワードの参照**:

```xml
   <p>The title of this page is: <keyword keyref="pageLanguage"/>.</p>
```

**生成された出力**:

`((inherited_page_properties.jcr:language))` が `en` に解決される場合、出力には次の内容が表示されます。

```
     The language of this page is: en.
```


### リソース

**コンテキストコンテンツ変数** について詳しくは、次の公式ドキュメントを参照してください。\
[AEM Commons のコンテキストコンテンツ変数 ](https://adobe-consulting-services.github.io/acs-aem-commons/features/contextual-content-variables/index.html)