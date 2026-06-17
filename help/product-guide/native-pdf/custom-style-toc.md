---
title: PDFのネイティブ公開機能|目次エントリとトピックコンテンツにカスタムスタイルを適用
description: スタイルシートを使用してコンテンツのスタイルを作成する方法について説明します。
exl-id: f65c9683-a1fc-432a-854b-83e8f39d7dae
feature: Output Generation
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/cqknNhuPThhuNTsLZzwnrUzPJguIPs4J-3rX6PVR2V8
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
role_v2: id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: febac97b369bad427f0f650f2cdc69b0ca6c9f69
workflow-type: tm+mt
source-wordcount: 460
ht-degree: 0%

---

# 目次エントリとトピックコンテンツにカスタムスタイルを適用する

サポートされているマップ要素（`<topicref>`や`<topichead>`など）で`outputclass`属性を使用すると、目次エントリ、トピックヘッド、または個々のトピックにカスタムスタイルを適用できます。 トピック全体にカスタム書式設定を適用するには、CSSで`outputclass`属性のスタイル定義を拡張します。

## `<topicref>`で参照されるトピックのスタイル設定

`outputclass`を`<topicref>`要素に適用して、生成されたPDF内の目次エントリ、トピックタイトル、または完全なトピックコンテンツのスタイルを設定できます。

例えば、レビューが必要なトピックを特定するには、DITA マップの対応する`<topicref>`要素にoutputclass属性を追加し、CSSで関連するスタイルを定義します。

次の例では、*フライト履歴* トピックに`outputclass`属性が割り当てられ、値は`new-topic`です。

<img src="./assets/new-topic-attribute-in-map.png" width="500">

`new-topic` クラスを使用して、次のスタイルを定義できます。

* 目次またはミニ目次のメインエントリ
* メインコンテンツ内のトピックのタイトル
* タイトルを含むトピックのコンテンツ全体

次のCSS定義は、目次エントリとトピックタイトルのテキストカラーを変更します。

```css
.new-topic {
  color:#CC5309
}
```

この定義は、目次のテキストの色とトピックのタイトルを制御します。 次のPDF出力は、目次エントリに適用される異なるカラーを示しています。

<img src="./assets/pdf-output-toc-entry.jpg" width="500">

トピックのタイトルも同じ色を使用してスタイル設定されます。

<img src="./assets/pdf-output-topic-title.jpg" width="500">

目次エントリとトピックのタイトルに異なるスタイルを適用する場合は、次のように別々に定義できます。

```css
...
/*for styling TOC entry */
.new-topic {
  color:#CC3509
}

/* for styling topic's title */
.new-topic.title {
  color:#092ACC
}
...
```

トピックコンテンツ全体にスタイルを適用するには、クラス名に`-content`接尾辞を追加します。 次の例では、トピックコンテンツに変更バーを追加します。

```css
...
/* for styling the topic's content */
.new-topic-content {
  -ro-change-bar-color:#A609CC;
}
...
```

上記のスタイル属性を使用すると、次に示すように、*フライト履歴* トピックの左側に変更バーが追加されます。

<img src="./assets/pdf-output-topic-content.jpg" width="500">

## `topichead`要素にスタイルを適用

`<topichead>`要素の`outputclass`属性を使用して、目次エントリと`topichead`用に生成された見出しに異なるスタイルを適用できます。

例えば、DITA マップで次の`topichead`を定義する場合は、

```xml
<topichead navtitle="Getting Started" outputclass="new-topichead">
    ...
</topichead>
```

`new-topichead` クラスは、TOCのtopichead エントリと、topichead用に生成された見出しに適用されます。

見出しに別のスタイルを適用する場合は、`<topicref>`が目次エントリとトピックタイトルに対して個別のスタイル設定をサポートする方法と同様に、見出しに別のクラスを定義します。

```css
...
/* Style for the topichead TOC entry */
.new-topichead {
  color: #CC5309;
}

/* Style for the topichead heading */
.new-topichead.title {
  color: #092ACC;
}...
```

Topicheadに関連付けられているコンテンツにスタイルを設定する場合は、クラス名に`- content`接尾辞を追加します。

```css
.new-topichead-content {
    border-left: 2px solid #cccccc;
    padding-left: 8px;
}
```



## 目次から空の行を削除

トピックのタイトルを定義していない場合は、そのトピックの目次に空の行が表示されます。

目次とミニ目次から空の行を削除するには、`layout.css`に次のスタイルを追加します。

```css
.toc-body a:empty,
.chaptoc-body a:empty {
    display: none;
} 
```

