---
title: NativePDFを使用した目次の公開
description: NativePDFを使用したdita ブックマップの目次およびその他のブックリストの公開
feature: Native PDF Output
author: Pulkit Nagpal(punagpal)
role: User, Admin
exl-id: c551f0a8-f973-4c5a-bd34-f52890a91342
TQID: https://experienceleague.adobe.com/GyB4TpCF64rEGNgHVPKq4fUCBQsJjqh4jWA0CJC4A-0
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 322
ht-degree: 0%

---

# PDF パブリッシングでのBookmapの目次の生成

## ブックマップの設定

`<toc>`要素を含める：
ブックマップの`<frontmatter>`要素内で、`<booklists>`要素を見つけます。  `<toc>`要素を次のように`<booklists>`内にネストします：

```
<frontmatter>
  <booklists>
    <toc/>  <figurelist/>
    <tablelist/>
  </booklists>
</frontmatter>
```

DITA仕様では、目次とブックリストを`<backmatter>` セクション内に配置することもできます。


```
<backmatter>
    <booklists>
      <toc/>
      <figurelist/>
      <indexlist/>
    </booklists>
  </backmatter>
```

目次を含むbookmapのサンプル構造、frontmatterのfigure-listとtable-list、backmatterのindex-list。

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

目次とブックリストは、ブックマップで定義された構造に基づいて自動的に生成されます。

ブックマップを設定したら、Native PDFを使用してPDF出力を生成します。 目次やブックリストを含む、ブックマップの構造と参照を処理します。

## PDFでの目次デザインとその順序

PDFのネイティブ機能を使用すると、目次のレイアウトとデザインをカスタマイズできます。

目次とスタイルのページレイアウトを個別に管理するには、layout.cssを使用します。

PDFの目次およびその他のブックリストの順序は、ブックマップの構造のみに基づいています。

![目次](../assets/publishing/toc.png)


## よくある質問

### PDFにDitamapの目次を含める方法

Ditamap自体には、ブックマップのように目次（TOC）が直接含まれていません。 ただし、ditamapは、コンテンツの構造を定義する上で重要な役割を果たし、間接的に目次の生成プロセスに貢献します。

Ditamapを公開している場合、Native PDFでは、目次とブックリストを自動的に生成する機能が提供されます。Native PDFの設定から、ditamapでの目次の生成を有効または無効にすることができます。

![無効にする目次](../assets/publishing/pageorder.png)

## その他のリソース :

- [PDFのネイティブデザインページレイアウトドキュメント](https://experienceleague.adobe.com/ja/docs/experience-manager-guides/using/install-guide/on-prem-ig/output-gen-config/config-native-pdf-publish/design-page-layout)
- [Adobe PDF essentialsのネイティブエクスペリエンスセッション](https://experienceleague.adobe.com/ja/docs/experience-manager-guides/using/knowledge-base/expert-session/native-pdf-publishing-essentials-feb23)

<br>
<br>

質問がある場合は、AEM Guides コミュニティ [&#x200B; フォーラム &#x200B;](https://experienceleaguecommunities.adobe.com/t5/experience-manager-guides/ct-p/aem-xml-documentation?profile.language=ja)に投稿してください。



