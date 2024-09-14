---
title: DITA PDFの最初のページにエンタープライズブランディングを追加
description: カバーページとチャプターページを統合し、企業の ID がコンテンツの上部に明確に表示されるようにすることで、会社のブランディングを達成します。
feature: Native PDF Output
author: Pulkit Nagpal(punagpal)
role: User, Admin
source-git-commit: a9f8622dc5a2647bcff32c8895700d5c5933be4a
workflow-type: tm+mt
source-wordcount: '419'
ht-degree: 0%

---

# DITA PDFの最初のページにエンタープライズブランディングを追加

## この記事では、次の内容について説明します。

FrontCover ページとチャプターページをシームレスに結合して企業のブランディングを達成し、企業の ID がコンテンツの上部に目立つように表示されるようにします。

- [コンテンツの設定](#set-up-your-content)
- [PDFテンプレートで必要な変更を行う](#create-necessary-changes-in-pdf-template)

**前：**

![ ブランディングを修正する前：ブランド化前のPDFレイアウトを示すスクリーンショット ](../assets/publishing/branding-image1.png)
<br>
<br>

**After:**

![ ブランディングを修正した後：ブランド後のPDFのレイアウトを示すスクリーンショット ](../assets/publishing/branding-image2.png)

## コンテンツの設定

PDFフォーマットでコンテンツを公開するには、Ditamap またはブックマップを作成する必要があります。

ブックマップ構造のサンプル :

```
<bookmap>
  <title>My Bookmap Title </title>
  <frontmatter>
    <booklists>
      <toc/>
      <figurelist/>
      <tablelist/>
    </booklists>
  </frontmatter>

  <chapter href="chapter1.ditamap">
  <chapter href="chapter2.ditamap">
  </chapter>

  <backmatter>
    <booklists>
      <indexlist/>
    </booklists>
  </backmatter>
</bookmap>
```

Ditamap 構造の例：

```
<map title="My map Title">

  <topicref href="topic1.dita" >
  </topicref>
  <topicref href="topic2.dita">
  </topicref>
  
</map>
```

Bookmap に `<frontmatter>` が含まれている場合、PDFの FrontCover が自動的に生成されます。


## PDFテンプレートで必要な変更を行う

この節では、テンプレートを設定します。 （ハイテク テンプレートを使用または複製して開始できます。）

### テンプレートを設定します。

- ネイティブPDFテンプレートに移動します。
- FrontCover ページのレイアウトに移動して編集します。
- ここでは、`data-region="content"` でブランディング画像を追加します。
- 必要に応じて、チャプターテンプレートにその他の必要な変更を追加します。
- 次に、コンテンツに応じて、次の手順に従います。


#### PDFの生成に Ditamap を使用する場合：

DITAMAP を公開するとき、Native PDFは FrontCover ページを自動生成する機能を提供します。 FrontCover ページの生成を有効または無効にするオプションは、ネイティブPDFテンプレートで設定できます。

結合するには：
- ネイティブのPDFテンプレート設定/ ページレイアウトの順序に移動します。
- 次に、FrontCover と次のページ（チャプターとトピック）を統合します。
  ![FrontCover とチャプターの結合：ネイティブPDFテンプレートの設定を示すスクリーンショット ](../assets/publishing/branding-image3.png)
- テンプレートを保存し、プリセットでこのテンプレートを選択して公開します。


#### PDFの生成に Bookmap を使用する場合

ブックマップの場合、ページレイアウトの順序のシーケンスは、テンプレートの順序ではなく、ブックマップの構造によって制御されます。

Bookmap でこれを実現するために、NativePDF のJavaScript機能を利用します。

- テンプレートのリソースフォルダーで、JavaScriptの下に追加します

```
window.addEventListener('DOMContentLoaded', function () {
    window.pdfLayout.onAfterPagination(function () {
        var frontMatterWrappers = document.querySelectorAll('.rh-front-matter-wrapper');

        frontMatterWrappers.forEach(function(wrapper) {
            var contentDiv = wrapper.querySelector('div[data-region="content"]');
            var chapterBody = document.querySelector('.chapter-body');

            if (contentDiv && chapterBody) {
                chapterBody.insertBefore(contentDiv, chapterBody.firstChild);
            }

            wrapper.remove();
        });
    });
});
```

- このJavaScriptをチャプターテンプレートに含めます。
  ![ チャプターテンプレートにJavaScriptを含める：ページレイアウトPDFテンプレートのエントリを示すスクリーンショット ](../assets/publishing/branding-image4.png)

- プリセットオプションからJavaScriptを有効にする
  ![JavaScript プリセット設定を有効にする：JavaScriptを有効にするためのプリセット設定を示すスクリーンショット ](../assets/publishing/branding-image5.png)

- Publish!

## 添付ファイル :

- [適用された変更内容を確認するには、サンプルのPDFテンプレートパッケージをダウンロードします。](../assets/publishing/NativePDF_DemoTemplate.zip)
- [サンプルのPDFプリセットパッケージをダウンロードして、適用された変更を確認します。](../assets/publishing/Preset_Package.zip)


## その他のリソース：

- [DITA Bookmap の目次をPDFに含める方法](./how-to-include-bookmap-toc-in-pdf-publishing.md)
- [ネイティブPDFに関するエキスパートセッションビデオ](../../expert-sessions/native-pdf-publishing-eamples-part1-june2023.md)

