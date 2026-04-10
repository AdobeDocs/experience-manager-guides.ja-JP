---
title: AEM Sitesのコンポーネントマッピング
description: AEM Sitesのコンポーネントマッピングの方法を説明します
feature: Installation
role: Admin
level: Experienced
exl-id: f59e3ad5-bf9c-468d-aab7-144c8c2335ac
hidefromtoc: true
source-git-commit: 564ee1731be2378744ffd2ed54a2fd423901a0b3
workflow-type: tm+mt
source-wordcount: '1042'
ht-degree: 0%

---

# AEM Sitesのコンポーネントマッピング

この記事では、（複合コンポーネントマッピングを使用して）AEM サイトのコンポーネントマッピングのさまざまな側面について説明します。

## コンポーネントマッピングルール

HTMLをコンポーネントに変換するには、ルールのJSON配列（`componentmapping.json`）を使用します。 ルールはできるだけシンプルかつ明示的で、具体的なものにする必要があります。

### HTML要素とそのクラスをターゲットにする

- HTML タグ名を`name`に書き込みます。
- クラスが存在する場合、その要素に適用されたCSS クラスを`class`に含めます。
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

上記の要素を定義する際は、次の点を確認してください。

- `name`はコンマ区切りのリストにできます（例：`"h1, h2"`）。
- `class`は要素に存在する必要があります（リストされているすべてのクラスが一致する必要があります）。
- `resourceType`は、`table` コンポーネントを使用する予定であることを示します。 `guides-components` パッケージは、Guidesが提供するOOTBです。 必要に応じて、`core/wcm/`などの他のコンポーネントパッケージも使用できます。

### attributeMapを使用してJCR ノードにプロパティを保存する

出力ノードにプロパティを設定するには、`attributeMap`にエントリを追加します。 各エントリは`attrs[to] = value`を生成します。
共通パターン：

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

次に、HTMLからJSONへの画像エレメントの例を示します。

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

### 専用エントリを使用したパスの正規化

値を正規化（絶対化）する場合は、次を使用してどの属性キーを正規化するかを宣言します。

```json
{
  "value": ["text"],
  "to": "path-attributes"
}
```

次の重要な点に注意してください。

- `value`で正規化するプロパティ名のリストを入力します（例：`["text"]`または`["href", "src"]`）。
- 最終的なコンポーネントを構築する際に、これらのプロパティ名の下にある値が正規化されます。


### コンポーネントに分割する前にHTML値を抽出する

ドキュメントを個別のコンポーネントに分割する前に、`from`を使用してエレメントから値を読み取る方法を指定します。

- `"textContent"`：要素のプレーンテキスト
- `"outerHTML"`：要素とその内部マークアップ
- `"innerHTML"`：要素の内部マークアップのみ
- その他の文字列：属性名として扱われます（例：`"src"`、`"href"`）。


例：

```json
{ "from": "textContent", "to": "jcr:title" }
{ "from": "outerHTML",  "to": "text" }
{ "from": "innerHTML",  "to": "snippet" }
{ "from": "src",        "to": "image#src" }
```

### componentmapping.jsonの最小エンドツーエンドの例

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

ターゲットとする要素とクラスを定義し、`attributeMap`を使用してノードプロパティを設定し、`path-attributes` エントリを追加してパスを正規化し、抽出する値に対して適切な`from`を選択します。 上記の`heroimage`は`we-retail` サイトのコンポーネントです。

**メモ**：デフォルトのリッチテキストについて説明し、そのリッチテキストが使用される要素を特定することが重要です。

## カスタムコンポーネントの作成

セル内に画像を表示するカスタムテーブルコンポーネントを作成する方法について説明します。 このアプローチにより、動的なコンテンツを実現する際に、クリーンで再利用可能なデザインを実現できます。 構築する要素、その理由、主要な前提条件、高度なデザインなどについて説明します。

### 構築する要素

HTML テーブルの内容を受け入れ、その中のすべての`<img>`をAEM Core Image コンポーネントの出力に置き換えるカスタムテーブルコンポーネント。 これにより、テーブルのマークアップを完全に制御しながら、コア画像の機能（レスポンシブ画像、alt処理、アクセシビリティ）を再利用できます。
この方法を使用すると、AEM サイト用の他のカスタムコンポーネントを構築できます（複合コンポーネントマッピングを使用）。

### このアプローチの理由

- **再利用**: コア画像の再実装ではなく、成熟した動作を活用します。
- **一貫性**：テーブル内の画像は、サイト上の他の場所の画像と同じように動作します。
- **サーバーサイド**：画像は、パフォーマンス、SEO、アクセシビリティのために、サーバー上でレンダリングされます。

### 前提条件

- AEM SDKが実行中で、このプロジェクトはチェックアウトされました。
- AEM インスタンスにインストールされたコアコンポーネント。
- Mavenを利用できます。

### 高度なデザイン

- オーサーは、コンポーネントダイアログのテーブルにHTMLを提供します。
- Sling モデルは、HTMLを解析し、`<img>` タグを見つけ、各イメージに対して、Core Image コンポーネントをサーバーサイドでレンダリングするサービスを呼び出します。
- モデルは、元の`<img>`をキャプチャしたCore Image HTMLと交換し、完成したHTMLをHTLに渡して出力します。

テーブルは1回出力され、既にコア画像マークアップが含まれています。 クライアントサイドのDOM操作は必要ありません。

### フォルダー構造とキーファイル（このリポジトリ内）

- コンポーネント HTLおよびclientlibs: `ui.apps/src/main/content/jcr_root/apps/guides-components/components/table/`
   - `table.html` （HTL レンダラー）
   - `_cq_editConfig.xml` （リスナーを更新）
   - `clientlibs/` （`css.txt`、`js.txt`、`css/table.css`、`js/table.js`）
- Sling モデル：`core/src/main/java/com/adobe/guides/aem/components/core/models/TableModel.java`
- 画像レンダリングサービス：`core/src/main/java/com/adobe/guides/aem/components/core/services/ImageComponentRenderer.java`

### 実装の手順

**テーブルコンポーネント（コンポーネントノード）を定義**

`apps/guides-components/components/table`の下にコンポーネントを作成します。 まだ持っていない場合は、サイドパネルに登録するために、以下のように最小値の`.content.xml`を追加します。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:sling="http://sling.apache.org/jcr/sling/1.0"
          xmlns:jcr="http://www.jcp.org/jcr/1.0"
          jcr:primaryType="cq:Component"
          jcr:title="Table"
          componentGroup="Guides - Custom"/>
```

作成者がページに追加できるコンポーネントであることをAEMに示します。

**HTLでレンダリングし、スタイルを含める**

Sling モデルを使用して、処理されたHTMLを出力します。 CSS/JS用にclientlib カテゴリを含めます。

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

このモデルは、既にレンダリングされたCore Imageを含む完全なHTMLを返すため、HTLはそれを印刷するだけです。

**Sling モデルを追加してHTMLを処理し、Core Imageをレンダリングします**

モデルは、ダイアログフィールドを読み取り、テーブル HTMLを解析し、各`<img>`を見つけ、サービスを介してCore Image HTMLに置き換えます。

`TableModel`の重要なノウハウを以下に示します。

- リソースのプロパティから`tableHtml`、`enableResponsive`、`tableStyle`を読み取ります。
- Jsoupを使用して、HTMLを安全に解析および編集します。
- `ImageComponentRenderer`を呼び出して、コア画像をレンダリングし、HTMLをキャプチャします。
- 元の`<img>`からCSS クラスとスタイルを保持します。
- DAM パスを正規化します（`/jcr:content/renditions/*`を削除）。

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

これにより、サーバー上のロジックが一元化され、コアイメージの動作が再利用されます。

**サービス経由でコアイメージをレンダリングする（サーバーサイドのインクルード）**

`ImageComponentRenderer`はコア画像コンポーネントをレンダリングし、出力をキャプチャします。 It

- `core/wcm/components/image/v2/image`を強制するリソースをラップします。
- は、`RequestDispatcher#include`を使用してレンダリングします。
- 応答を文字列として取得します。

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

これにより、子コンポーネントとしてだけでなく、**必要な場所に** コアイメージをドロップできます。

**クライアントライブラリ**

小さなスタイルまたは将来のJS用にclientlibを作成します。 上記のHTLは、`guides-components.table` カテゴリを読み込みます。

```java
clientlibs/css.txt
  #base=css
  table.css
clientlibs/js.txt
  #base=js
  table.js
  
```

これにより、スタイル/スクリプトがモジュール化され、見つけやすくなります。

**ダイアログフィールド （作成者入力）**

少なくとも次のプロパティを含むダイアログを追加します。

- **テーブル HTML**: `./tableHtml` （textarea）; テーブルのHTML。
- **レスポンシブを有効にする**: `./enableResponsive` （チェックボックス）。レスポンシブラッパークラスを切り替えます。
- **表スタイル**: `./tableStyle` （選択）。スタイル修飾子クラスを適用します。

これらのマップ 1:1は、Sling モデルのプロパティと制御レンダリングにマッピングされます。

**テンプレートのコンポーネントを許可**

テンプレートエディターで、レイアウトコンテナポリシー/許可されたコンポーネント/テーブルコンポーネントを&#x200B;**ガイド – カスタム**&#x200B;の下で有効にするを編集します。

作成者は、ポリシーで許可されるまでコンポーネントを追加できません。

## オーサリングのヒント

- テーブルに有効なHTMLを貼り付けます。 モデルは画像URLをサニタイズおよび調整します。
- 画像にはDAM アセットパスを使用します。レンディションは元のアセットパスに正規化されます。
- 可能な場合は、HTMLに代替テキストを入力します。それ以外の場合は、画像に装飾的なマークが付けられます。

## 制約

- Core Image v2を提供しています。 バージョンを切り替えるには、`IMAGE_RESOURCE_TYPE`を更新してください。
- 合成レンダリングの場合、モデルはCore Imageで生成された`.coreimg.`個のURLを直接DAM パスに置き換え、壊れたURLを避けるために`srcset`個を削除します。
- すべてのレンダリングは、サーバー上で1回実行されます。JavaScriptはオプションです。

## クイックリファレンス（実装）

- HTML: `ui.apps/.../components/table/table.html`
- Clientlibs: `ui.apps/.../components/table/clientlibs/`
- モデル：`core/.../models/TableModel.java`
- サービス：`core/.../services/ImageComponentRenderer.java`

このパターンでは、コアコンポーネントをサーバーサイドで作成し、コアロジックを再利用しながらマークアップを維持する方法を示します。
