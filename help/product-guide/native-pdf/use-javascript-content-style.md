---
title: PDFのネイティブ公開機能| JavaScriptを使用したコンテンツやスタイルの操作
description: スタイルシートを使用してコンテンツのスタイルを作成する方法について説明します。
exl-id: 2f301f6a-0d1c-4194-84c2-0fddaef8d3ec
feature: Output Generation
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: ad12cac61d14bc68bf73dc407a74a22c8248d7b3
workflow-type: tm+mt
source-wordcount: '519'
ht-degree: 1%

---

# JavaScriptを使用したコンテンツやスタイルの操作

PDFのネイティブ公開機能を使用すると、JavaScriptを実行して、最終的なPDFが生成される前に、コンテンツに適用されたコンテンツやスタイルを操作できます。 この機能により、最終的な出力の生成方法を完全に制御できます。 例えば、別のPDFにあるPDF出力に法的通知を追加することができます。 JavaScriptを使用すると、基本コンテンツ用にPDFが作成された後、最終的なPDFが生成される前に、法的通知の情報を追加できます。\
JavaScriptの実行をサポートするために、PDFのネイティブ公開機能では、次のコールバック関数を使用できます。

* `window.pdfLayout.onBeforeCreateTOC(callback)`：このコールバック関数は、目次が生成される前に実行されます。
* `window.pdfLayout.onBeforePagination(callback)`：このコールバック関数は、目次が生成された後に実行されますが、PDFで改ページが追加される前に実行されます。
* `window.pdfLayout.onAfterPagination(callback)`：このコールバック関数は、目次と改ページがPDFに追加された後に実行されます。

>[!NOTE]
>
>内部的には、これらのコールアウト関数の実行シーケンスが維持されます。 最初にonBeforeCreateTOCが実行され、次にonBeforePaginationが実行され、最後にonAfterPaginationが実行されます。

実行するコンテンツまたはスタイル変更のタイプに基づいて、使用するコールバック関数を選択できます。 例えば、コンテンツを追加する場合は、目次を生成する前に行うことをお勧めします。 同様に、スタイル設定を変更する場合は、ページネーションの前または後に行うことができます。

次の例では、図のタイトルの位置が画像の上から画像の下に変更されます。 そのためには、プリセットでJavaScriptの実行オプションを有効にする必要があります。 これを行うには、次の手順を実行します。

1. プリセットを開いて編集します。
1. 「**詳細**」タブに移動します。
1. 「**JavaScriptを有効にする**」オプションを選択します。
1. プリセットを保存して閉じます。

次に、次のコードを含むJavaScript ファイルを作成し、テンプレートの「リソース」フォルダー内に保存します。

```css
...
/*
* DITA only allows the figure title to be placed above images 
* This JavaScript code is used to move the figure title below the image
* */
window.addEventListener('DOMContentLoaded', function () {
    window.pdfLayout.onBeforeCreateTOC(function() {
        var titleNodes = document.querySelectorAll('.fig > .title')
        for (var i = 0; i < titleNodes.length; i++) {
            var titleNode = titleNodes[i]
            var figNode = titleNode.parentNode
            var imageNode = figNode.querySelector('.image')
            if(imageNode && imageNode.parentNode !== figNode) {
              imageNode = imageNode.parentNode
            }
            if (figNode && imageNode && imageNode.parentNode === figNode) {
                figNode.insertBefore(imageNode, titleNode)
            }
        }
    })
});
...
```

>[!NOTE]
>
>コールバック関数を使用する前に、`window.addEventListener('DOMContentLoaded', function ()`関数を呼び出す必要があります。

次に、このスクリプトをPDF出力の生成に使用するテンプレートファイルから呼び出す必要があります。 この例では、目次テンプレートに追加します。 `<script>` タグが`<div>` タグ内の事前定義された`<body>` タグ内に追加されていることを確認します。 `<head>` タグ内または`<body>` タグ外に追加すると、スクリプトは実行されません。

<img src="./assets/js-added-resources-template.png" width="500">

このコードを使用して生成された出力と、テンプレートには画像の下に図のタイトルが表示されます。

<img src="./assets/fig-title-below-image.png" width="500">

## ドラフトドキュメントのPDF出力に透かしを追加する {#watermark-draft-document}

JavaScriptを使用して、条件付き透かしを追加することもできます。 定義された条件が満たされると、これらの透かしはドキュメントに追加されます。\
例えば、次のコードを含むJavaScript ファイルを作成して、未承認の文書のPDF出力に透かしを入れることができます。 この透かしは、文書のPDFを「承認済み」状態で生成した場合には表示されません。

```css
...
/*
* This file can be used to add a watermark to the PDF output
* */

window.addEventListener('DOMContentLoaded', function () {
    var watermark = 'Draft'
    var metaTag = document.getElementsByTagName('meta')
    css = "@page {\n  @left-middle {\n    content: \"".concat(watermark, "\";\n    z-index: 100;\n    font-family: sans-serif;\n    font-size: 80pt;\n    font-weight: bold;\n    color: gray(0, 0.3);\n    text-align: center;\n    transform: rotate(-54.7deg);\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n  }\n}")
    head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    window.pdfLayout.onBeforePagination(function () {
        for (let i = 0; i < metaTag.length; i++) {
            if (metaTag[i].getAttribute('name') === 'docstate' && metaTag[i].getAttribute('value') !== 'Approved') {
                head.appendChild(style);
            }
        }
    })
});
...
```

このコードを使用して生成されたPDF出力には、文書の表紙に透かし&#x200B;*ドラフト*&#x200B;が表示されます。

<img src="./assets/draft-watermark.png" width="500">
