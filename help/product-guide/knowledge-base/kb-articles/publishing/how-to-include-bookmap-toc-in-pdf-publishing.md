---
title: NativePDF を使用した目次の公開
description: NativePDF を使用した dita ブックマップの目次およびその他のブックリストの公開
feature: Native PDF Output
author: Pulkit Nagpal(punagpal)
role: User, Admin
exl-id: c551f0a8-f973-4c5a-bd34-f52890a91342
source-git-commit: 7638f3634ad45bbadda64ec6e3f706cbb65d696c
workflow-type: tm+mt
source-wordcount: '268'
ht-degree: 0%

---

# PDFパブリッシングでのブックマップの目次の生成

## ブックマップの設定

`<toc>` の要素を含めます。
ブックマップの `<frontmatter>`element 内で、`<booklists>` の要素を見つけます。  `<toc>` 要素を `<booklists>` 内に次のようにネストします。

```
<frontmatter>
  <booklists>
    <toc/>  <figurelist/>
    <tablelist/>
  </booklists>
</frontmatter>
```

DITA 仕様を使用すると、目次とブックリストを `<backmatter>` セクション内にも配置できます。


```
<backmatter>
    <booklists>
      <toc/>
      <figurelist/>
      <indexlist/>
    </booklists>
  </backmatter>
```

TOC、figure-list および table-list を frontmatter に、index-list を backmatter に使用したブックマップのサンプル構造。

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

ブックマップで定義された構造に基づいて、目次とブックリストが自動的に生成されます。

ブックマップを設定したら、ネイティブPDFを使用してPDF出力を生成します。 TOC やブックリストなど、ブックマップ構造と参照を処理します。

## PDFでの目次デザインとその順序

ネイティブPDF機能は、目次のレイアウトとデザインをカスタマイズするための便利な手段を提供します。

layout.css を使用して、TOC とスタイルの個別のページレイアウトを介してデザインを制御できます。

TOC およびその他のブックリストのPDF順序は、ブックマップの構造にのみ基づいています。

![toc](../assets/publishing/toc.png)


## FAQ

- ### Ditamap の TOC をPDFに含める方法

Ditamaps 自体は、ブックマップのように目次（TOC）を直接持っていません。 ただし、ditamaps は、コンテンツの構造を定義するうえで重要な役割を果たし、間接的に目次の生成プロセスに貢献します。

Ditamap を公開している場合、Native PDFが目次とブックリストを自動的に生成する機能を提供します。Native PDF設定から ditamap で目次の生成を有効/無効にできます。

![ 目次を有効にする ](../assets/publishing/pageorder.png)

## その他のリソース :

- [ ネイティブPDFデザインページレイアウトのドキュメント ](https://experienceleague.adobe.com/ja/docs/experience-manager-guides/using/install-guide/on-prem-ig/output-gen-config/config-native-pdf-publish/design-page-layout)
- [ ネイティブPDFの要点を事前に記録したエキスパートセッション ](https://experienceleague.adobe.com/ja/docs/experience-manager-guides/using/knowledge-base/expert-session/native-pdf-publishing-essentials-feb23)

<br>
<br>

クエリがある場合は、AEM Guides Community [forum](https://experienceleaguecommunities.adobe.com/t5/experience-manager-guides/ct-p/aem-xml-documentation?profile.language=ja) でPostしてください。



