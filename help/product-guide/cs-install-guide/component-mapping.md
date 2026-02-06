---
title: AEM Sitesのコンポーネントマッピング
description: AEM Sitesのコンポーネントマッピングの実行方法を説明します
feature: Installation
role: Admin
level: Experienced
exl-id: f59e3ad5-bf9c-468d-aab7-144c8c2335ac
source-git-commit: beb1ca15fdfb0e7ea30e6e685ac67a2a398cc064
workflow-type: tm+mt
source-wordcount: '1042'
ht-degree: 0%

---

# AEM Sitesのコンポーネントマッピング

この記事では、（複合コンポーネントマッピングを使用した）AEM サイトのコンポーネントマッピングの様々な側面について説明します。

## コンポーネントマッピングルール

ルールの JSON 配列（`componentmapping.json`）を使用して、HTMLをコンポーネントに変換します。 ルールはできるだけシンプル、明確、具体的に保ちます。

### HTML要素とそのクラスのターゲット設定

- HTMLのタグ名を `name` に書き込みます。
- その要素に適用された CSS クラスを `class` に含めます（クラスが存在する場合）。
例：

  ```html
  <div class ="sample-class">
  <p> Sample html element </p>
  </div>
  ```

  ```json
  {
  "name": "div",
  "class": "sample-class",
  "resourceType": "guides-components/components/table",
  "attributeMap": []
  }
  ```

上記の要素を定義する際は、以下を確認します。

- コンマ区切りのリストを `name` 定できます（例：`"h1, h2"`）。
- `class` が要素上に存在する必要があります（リストされているすべてのクラスが一致する必要があります）。
- `resourceType` は、`table` コンポーネントを使用することを示しています。 `guides-components` パッケージは、Guides が提供する OOTB です。 必要に応じて、`core/wcm/` などの他のコンポーネントパッケージを使用することもできます。

### JCR ノードにプロパティを保存するには、attributeMap を使用します

`attributeMap` にエントリを追加して、出力ノードのプロパティを設定します。 各エントリは `attrs[to] = value` を生成します。
一般的なパターン：

```json
// copy an attribute
{ "attribute": "src", "to": "image-src" }
// read content or tag name
{ "from": "textContent", "to": "jcr:title" }
{ "from": "outerHTML",  "to": "text" }
{ "from": "innerHTML",  "to": "text" }
{ "from": "name",       "to": "type" }  // the tag name, e.g., "h2"
// constant value
{ "value": true, "to": "textIsRich" }
```

以下は、画像要素のHTML to JSON の例です。

```html
<img src="/content/dam/aemg-docs/tragopan.svg" class="cmp-image__image" itemprop="contentUrl" data-cmp-hook-image="image" alt="">
```

```json
{
    "name": "img",
    "resourceType": "core/wcm/components/image/v2/image",
    "attributeMap": [
      {
        "from": "src",
        "to": "fileReference"
      },
      {
        "value": ["fileReference"],
        "to": "path-attributes"
      }
    ]
  }
```

### 専用のエントリを介したパスの正規化

値を正規化（絶対値にする）する場合は、次のオプションを使用して、どの属性キーを正規化するかを宣言します。

```json
{
  "value": ["text"],
  "to": "path-attributes"
}
```

次の重要な点に注意してください。

- 正規化するプロパティ名のリストを `value` で指定します（例：`["text"]`、`["href", "src"]`）。
- システムは、最終コンポーネントを構築する際に、これらのプロパティ名で見つかった値を正規化します。


### コンポーネントに分割する前にHTML値を抽出

`from` を使用して、ドキュメントを個別のコンポーネントに分割する前に要素から値を読み取る方法を指定します。

- `"textContent"`：要素のプレーンテキスト
- `"outerHTML"`：要素とその内部マークアップ
- `"innerHTML"`：要素の内部マークアップのみ
- その他の文字列：属性名として扱われます（例：`"src"`、`"href"`）


例：

```json
{ "from": "textContent", "to": "jcr:title" }
{ "from": "outerHTML",  "to": "text" }
{ "from": "innerHTML",  "to": "snippet" }
{ "from": "src",        "to": "image#src" }
```

### componentmapping.json における最小限のエンドツーエンドの例

```json
[
  {
    "name": "h1, h2",
    "class": "topic-title",
    "resourceType": "core/wcm/components/title/v2/title",
    "attributeMap": [
      { "from": "textContent", "to": "text" },
      { "from": "name",        "to": "type" }
    ]
  },
  {
    "name": "img",
    "class": "hero",
    "resourceType": "weretail/components/content/heroimage",
    "attributeMap": [
      { "from": "src", "to": "image#src" },
      { "value": ["image#src"], "to": "path-attributes" }
    ]
  },
  {
    "name": "#element",
    "resourceType": "core/wcm/components/text/v2/text",
    "attributeMap": [
      { "from": "outerHTML", "to": "text" },
      { "value": true,        "to": "textIsRich" }
    ]
  }
]
```

ターゲットとする要素とクラスを定義し、`attributeMap` を使用してノードプロパティを設定し、パスを正規化する `path-attributes` エントリを追加して、抽出する値に適した `from` を選択します。 上記で使用した `heroimage` は、`we-retail` サイトのコンポーネントです。

**メモ**：デフォルトのリッチテキストについて話し合い、そのテキストを使用する要素を特定することが重要です。

## カスタムコンポーネントの作成

セル内に画像を表示するカスタムのテーブルコンポーネントを作成する方法を説明します。 このアプローチにより、動的コンテンツのクリーンで再利用可能なデザインが保証されます。 作成する内容、効果的な理由、主な前提条件、概要レベルの設計などについて説明します。

### 作成する内容

HTMLのテーブルコンテンツを受け入れ、その中のすべての `<img>` をAEM Core Image コンポーネントの出力に置き換えるカスタムテーブルコンポーネント。 これにより、テーブルのマークアップを完全に制御しながら、コア画像の機能（レスポンシブ画像、alt 処理、アクセシビリティ）を再利用できます。
この方法を使用すると、（複合コンポーネントマッピングを使用して）AEM サイト用に他のカスタムコンポーネントを構築できます。

### このアプローチを選ぶ理由

- **再利用**：再実装する代わりに、Core Image の成熟した動作を活用します。
- **一貫性**：テーブル内の画像は、サイトの他の場所の画像と同じように動作します。
- **サーバーサイド**：画像は、パフォーマンス、SEO、アクセシビリティのためにサーバーにレンダリングされます。

### 前提条件

- AEM SDKが実行中で、このプロジェクトがチェックアウトされています。
- コアコンポーネントはAEM インスタンスにインストールされます。
- Maven のビルドとデプロイが可能です。

### 概要レベルの設計

- 作成者は、コンポーネントダイアログのテーブルにHTMLを提供します。
- Sling モデルは、HTMLを解析して `<img>` のタグを見つけ、各画像に対して、コア画像コンポーネントをサーバーサイドでレンダリングするサービスを呼び出します。
- このモデルは、元の `<img>` を、キャプチャされたコア画像HTMLにスワップし、完成したHTMLを HTL に渡して出力します。

テーブルは 1 回出力されます。このテーブルには、既にコア画像のマークアップが含まれています。 クライアントサイドの DOM 操作は必要ありません。

### フォルダー構造と主要なファイル（このリポジトリ内）

- コンポーネント HTL および clientlibs:`ui.apps/src/main/content/jcr_root/apps/guides-components/components/table/`
   - `table.html` （HTL レンダラー）
   - `_cq_editConfig.xml` （リスナーを更新）
   - `clientlibs/`、`css.txt`、`js.txt`、`css/table.css` を使用した `js/table.js`
- Sling モデル：`core/src/main/java/com/adobe/guides/aem/components/core/models/TableModel.java`
- 画像レンダリングサービス : `core/src/main/java/com/adobe/guides/aem/components/core/services/ImageComponentRenderer.java`

### 実装の手順

**表コンポーネント（コンポーネントノード）の定義**

`apps/guides-components/components/table` の下にコンポーネントを作成します。 まだ登録されていない場合は、次のような最小限の `.content.xml` を追加して、サイドパネルに登録します。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:sling="http://sling.apache.org/jcr/sling/1.0"
          xmlns:jcr="http://www.jcp.org/jcr/1.0"
          jcr:primaryType="cq:Component"
          jcr:title="Table"
          componentGroup="Guides - Custom"/>
```

作成者がページに追加できるコンポーネントであることをAEMに示します。

**HTL およびインクルードスタイルを使用したレンダリング**

Sling モデルを使用し、処理済みのHTMLを出力します。 CSS/JS の clientlib カテゴリを含めます。

```html
<sly data-sly-use.model="com.adobe.guides.aem.components.core.models.TableModel"
     data-sly-use.clientLib="/libs/granite/sightly/templates/clientlib.html">
</sly>
<sly data-sly-call="${clientLib.css @ categories='guides-components.table'}"></sly>
<sly data-sly-test="${wcmmode.edit && !model.hasContent}">
  <div class="cq-placeholder" data-emptytext="${component.title}"></div>
</sly>
<div data-sly-test="${model.hasContent}"
     class="gu-table-wrapper ${model.enableResponsive ? 'gu-table--responsive' : ''} gu-table--style-${model.tableStyle}"
     id="${model.componentId}">
  ${model.processedTableHtml @ context='unsafe'}
</div>
```

モデルは、コア画像が既にレンダリングされた完全なHTMLを返すので、HTL は出力するだけです。

**Sling モデルを追加してHTMLを処理し、コア画像をレンダリングする**

モデルは、ダイアログフィールドを読み取り、テーブル HTMLを解析し、各 `<img>` を検索して、サービスを介してコア画像HTMLに置き換えます。

`TableModel` に関する重要なノウハウの一部を次に示します。

- リソースプロパティから `tableHtml`、`enableResponsive`、`tableStyle` を読み取ります。
- は Jsoup を使用してHTMLを安全に解析および編集します。
- `ImageComponentRenderer` を呼び出してコア画像をレンダリングし、HTMLをキャプチャします。
- 元の `<img>` から CSS クラスおよびスタイルを保持します。
- DAM パスを正規化します（`/jcr:content/renditions/*` を削除します）。

```java
@Model(adaptables = {Resource.class, SlingHttpServletRequest.class},
       defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class TableModel {
  @ValueMapValue private String tableHtml;
  @ValueMapValue private boolean enableResponsive;
  @ValueMapValue private String tableStyle;
  @OSGiService private ImageComponentRenderer imageRenderer;
  // ...
  @PostConstruct
  protected void init() {
    // parse HTML, for each <img> build image props (fileReference, alt, title)
    // call imageRenderer.renderImageComponent(...)
    // replace <img> with returned Core Image HTML
  }
  public String getProcessedTableHtml() { /* return final HTML */ }
}
```

これにより、サーバーでロジックが一元化され、コア画像の動作が再利用されます。

**サービスを使用したコア画像のレンダリング（サーバーサイドインクルード）**

`ImageComponentRenderer` は、コア画像コンポーネントをレンダリングし、出力をキャプチャします。 0.43188884

- `core/wcm/components/image/v2/image` を強制するリソースをラップします。
- は `RequestDispatcher#include` を使用してレンダリングします。
- 応答を文字列としてキャプチャします。

```java
@Component(service = ImageComponentRenderer.class)
public class ImageComponentRenderer {
  private static final String IMAGE_RESOURCE_TYPE = "core/wcm/components/image/v2/image";
  public String renderImageComponent(Resource base, Map<String,Object> props,
                                     SlingHttpServletRequest req, SlingHttpServletResponse resp) {
    // create wrapped resource with IMAGE_RESOURCE_TYPE and props
    // dispatcher.include(...) with a response wrapper to capture HTML
    // return captured HTML
  }
}
```

これにより、子コンポーネントとしてだけでなく **必要な場所にコア画像を** ドロップできます。

**クライアントライブラリ**

小さなスタイルまたは今後の JS 用に clientlib を作成します。 上記の HTL は、`guides-components.table` カテゴリを読み込みます。

```java
clientlibs/css.txt
  #base=css
  table.css
clientlibs/js.txt
  #base=js
  table.js
  
```

これにより、スタイルやスクリプトがモジュール化され、検索可能になります。

**ダイアログフィールド（作成者入力）**

少なくとも次のプロパティを持つダイアログを追加します。

- **テーブルHTML**:`./tableHtml` （textarea）；テーブルのHTML。
- **レスポンシブを有効にする**:`./enableResponsive` （チェックボックス）。レスポンシブなラッパークラスを切り替えます。
- **表スタイル**:`./tableStyle` （選択）。スタイル修飾子クラスを適用します。

これらのマップは 1:1 を Sling モデルのプロパティにマッピングし、レンダリングを制御します。

**テンプレート上でのコンポーネントの許可**

テンプレートエディターで、レイアウトコンテナポリシー/許可されたコンポーネント/**ガイド – カスタム** の下のテーブルコンポーネントを有効にを編集します。

作成者は、ポリシーで許可されるまでコンポーネントを追加できません。

## オーサリングのヒント

- テーブルに有効なHTMLを貼り付けます。 モデルは、画像 URL の不要部分を削除して調整します。
- 画像に DAM アセットパスを使用します。レンディションは元のアセットパスに正規化されます。
- 可能な場合は、HTMLで代替テキストを指定します。そうでない場合は、画像が装飾的にマークされます。

## 制約

- このサービスはコアイメージ v2 を強制します。 バージョンを切り替えるには、`IMAGE_RESOURCE_TYPE` を更新します。
- 合成レンダリングの場合、モデルはコア画像で生成された `.coreimg.` URL を直接 DAM パスに置き換え、`srcset` を削除して URL が壊れないようにします。
- レンダリングはすべてサーバーで 1 回行われます。JavaScriptはオプションです。

## クイックリファレンス（実装）

- HTML: `ui.apps/.../components/table/table.html`
- Clientlibs: `ui.apps/.../components/table/clientlibs/`
- モデル：`core/.../models/TableModel.java`
- サービス：`core/.../services/ImageComponentRenderer.java`

このパターンは、サーバーサイドでコアコンポーネントを使用してカスタムコンポーネントを構成し、コアロジックを再利用する際にマークアップを保持する方法を示しています。
