---
title: PDFのネイティブ公開機能|目次エントリとトピックコンテンツにカスタムスタイルを適用
description: スタイルシートを使用してコンテンツのスタイルを作成する方法について説明します。
exl-id: f65c9683-a1fc-432a-854b-83e8f39d7dae
feature: Output Generation
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 3aadc59f5034828cf319992b7acb32d5a88eaf93
workflow-type: tm+mt
source-wordcount: '399'
ht-degree: 0%

---

# 目次エントリとトピックコンテンツにカスタムスタイルを適用する

目次エントリまたは特定のトピックにカスタムスタイルを適用する場合があります。 これは、`outputclass`属性をDITA マップの`<topicref>`要素に関連付けることで実現できます。 また、トピック全体にカスタム形式を適用する場合は、CSSで属性のスタイル定義を拡張することで、これを実現できます。

レビュー用に送信する新しいトピックの例を見てみましょう。 更新されたトピックを簡単に識別するには、`outputclass`属性をDITA マップの`<topicref>`要素に追加し、CSSで同じスタイルを定義する必要があります。

次の例では、*フライト履歴* トピックに`outputclass`属性が割り当てられ、値は`new-topic`です。

<img src="./assets/new-topic-attribute-in-map.png" width="500">

CSSの`new-topic`のクラス定義では、次の項目のスタイルを定義できます。
* 目次またはミニ目次のメインエントリ
* メインコンテンツ内のトピックのタイトル
* タイトルを含むトピックのコンテンツ全体

CSSでこれらのシナリオをそれぞれ定義する方法を見てみましょう。 次の`new-topic` クラスのCSS定義では、テキストの色が変更されています。

```css
…
.new-topic {
  color: #CC5309
}
…
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
  color: #CC3509
}

/* for styling topic's title */
.new-topic.title {
  color: #092ACC
}
...
```

最後に、トピック内のコンテンツ全体にスタイルを適用することもできます。 このためには、クラス名にサフィックス「`-content`」を追加する必要があります。 次の例では、トピックのコンテンツ全体に変更バーが追加されています。

```css
...
/* for styling the topic's content */
.new-topic-content {
  -ro-change-bar-color: #A609CC;
}
...
```

上記のスタイル属性を使用すると、次に示すように、*フライト履歴* トピックの左側に変更バーが追加されます。

<img src="./assets/pdf-output-topic-content.jpg" width="500">

## 目次から空の行を削除

トピックのタイトルを定義していない場合は、そのトピックの目次に空の行が表示されます。

目次とミニ目次から空の行を削除するには、`layout.css`に次のスタイルを追加します。

```css
.toc-body a:empty,
.chaptoc-body a:empty {
    display: none;
} 
```

