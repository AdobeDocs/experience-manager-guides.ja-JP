---
title: DITA PDFの最初のページにエンタープライズブランドを追加する
description: 表紙と章ページを統合することで、企業のブランディングを達成し、コンテンツの上部に企業のアイデンティティが明確に表示されます。
feature: Native PDF Output
author: Pulkit Nagpal(punagpal)
role: User, Admin
exl-id: ab452529-3c7f-4057-a0f6-212b9f52a99d
TQID: https://experienceleague.adobe.com/6CGRK2QWFZ6nIXmIAQZy3lX7t4KYP2-HeyqlVW2-7eE
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
subfeature_v2:
  - id: d6596f3f-92a7-43ec-b444-237db6adad05
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 422
ht-degree: 0%

---

# DITA PDFの最初のページにエンタープライズブランドを追加する

## 解説します。

FrontCover ページとチャプターページをシームレスに統合することで、エンタープライズブランディングを実現し、コンテンツの上部に企業のIDが目立つように表示されます。

- [コンテンツの設定](#set-up-your-content)
- [PDF テンプレートで必要な変更を行う](#create-necessary-changes-in-pdf-template)

**前：**

![&#x200B; ブランディングを修正する前：PDFのプリブランディングのレイアウトを示すスクリーンショット &#x200B;](../assets/publishing/branding-image1.png)
<br>
<br>

**後：**

![&#x200B; ブランディングを修正した後：PDFのポストブランディングのレイアウトを示すスクリーンショット &#x200B;](../assets/publishing/branding-image2.png)

## コンテンツの設定

PDF形式でコンテンツを公開するには、DitamapまたはBookmapを作成する必要があります。

ブックマップ構造の例：

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

Ditamap構造の例：

```
<map title="My map Title">

  <topicref href="topic1.dita" >
  </topicref>
  <topicref href="topic2.dita">
  </topicref>
  
</map>
```

Bookmapに`<frontmatter>`が含まれている場合、PDFのFrontCoverは自動生成されます。


## PDF テンプレートで必要な変更を行う

このセクションでは、テンプレートを設定します。 （最初に、ハイテク テンプレートを使用または複製できます）。

### テンプレートの設定：

- PDFのネイティブテンプレートを開きます。
- FrontCover ページレイアウトに移動し、編集します。
- ここで、`data-region="content"`にブランド画像を追加します。
- 必要に応じて、チャプターテンプレートに必要な変更を追加します。
- コンテンツに応じて、次の手順に従います。


#### PDFの生成にDitamapを使用している場合：

DITAMAPを公開する場合、Native PDFには、FrontCover ページを自動生成する機能が用意されています。 FrontCover ページの生成を有効または無効にするオプションは、ネイティブ PDF テンプレートで設定できます。

結合するには：
- PDFのネイティブテンプレート設定/ ページレイアウト順序に移動します
- 次のページ（章とトピック）にFrontCoverを統合します。
  ![章を使用したFrontCoverの統合：ネイティブ PDF テンプレート設定を示すスクリーンショット &#x200B;](../assets/publishing/branding-image3.png)
- テンプレートを保存し、このテンプレートをプリセット用に選択して公開します。


#### BookmapをPDFの生成に使用している場合

ブックマップの場合、ページレイアウト順序の順序は、テンプレートの順序ではなく、ブックマップの構造によって制御されます。

これを実現するため、NativePDFのJavaScript機能を利用します。

- 以下に、テンプレートのリソースフォルダーにJavaScriptを追加します

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

- このJavaScriptを章テンプレートに含めます。
  ![&#x200B; チャプターテンプレートにJavaScriptを含める：ページレイアウトのエントリを示すスクリーンショット PDF テンプレート &#x200B;](../assets/publishing/branding-image4.png)

- プリセットオプションからJavaScriptを有効にする
  ![JavaScript プリセット設定を有効にする：JavaScriptを有効にするプリセット設定を示すスクリーンショット &#x200B;](../assets/publishing/branding-image5.png)

- 公開します！

## 添付ファイル :

- [サンプルのPDF テンプレートパッケージをダウンロードして、適用された変更を確認します。](../assets/publishing/NativePDF_DemoTemplate.zip)
- [サンプルのPDF プリセットパッケージをダウンロードして、適用された変更を確認します。](../assets/publishing/Preset_Package.zip)


## 関連トピックス：

- [PDFにDITA ブックマップの目次を含める方法](./how-to-include-bookmap-toc-in-pdf-publishing.md)
- [Adobe PDFのエキスパートセッションの動画](../../expert-sessions/native-pdf-publishing-eamples-part1-june2023.md)
