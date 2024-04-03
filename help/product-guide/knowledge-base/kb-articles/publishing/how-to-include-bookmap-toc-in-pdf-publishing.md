---
title: NativePDF を使用した TOC（目次）公開
description: NativePDF を使用した Dita ブックマップ用の TOC およびその他のブックリストの公開
feature: Native PDF Output
role: User, Admin
source-git-commit: 6ccaef5d35d492fe8dbe0f8b52af8d11258f3d2a
workflow-type: tm+mt
source-wordcount: '255'
ht-degree: 0%

---

# ブックマップの TOC をPDF公開で生成

## ブックマップの設定

次を含める： `<toc>`  element：ブックマップの `<frontmatter>`要素を `<booklists>` 要素を選択します。  ネスト a `<toc>` 内部の要素 `<booklists>` 例：

```
<frontmatter>
  <booklists>
    <toc/>  <figurelist/>
    <tablelist/>
  </booklists>
</frontmatter>
```

DITA 仕様では、 `<backmatter>` 」セクションにも追加します。


```
<backmatter>
    <booklists>
      <toc/>
      <figurelist/>
      <indexlist/>
    </booklists>
  </backmatter>
```

TOC とブックリストは、ブックマップで定義された構造に基づいて自動的に生成されます。

ブックマップを設定したら、「ネイティブPDF」を使用してPDF出力を生成します。 TOC やブックリストを含むブックマップの構造と参照を処理します。

## TOC デザインとPDF内の順序

ネイティブPDF機能は、目次のレイアウトとデザインを調整する便利な方法を提供します。

デザインは、layout.css を使用して、目次とスタイルに別のページレイアウトを使用して制御できます。

TOC と他のブックリストの順序は、PDF内のブックマップの構造に基づいています。

![toc](../assets/publishing/toc.png)


## FAQ

- ### Ditamap の TOC をPDFに含める方法

Ditamaps 自体には、ブックマップとは異なり、目次 (TOC) が直接存在しません。 ただし、ディタマップはコンテンツの構造を定義する上で重要な役割を果たし、TOC 生成プロセスに間接的に影響します。

Ditamap を公開している場合、ネイティブPDFは TOC とブックリストを自動的に生成する機能を提供します。ネイティブPDF設定から ditamap での TOC の生成を有効/無効にできます。

![目次を無効にする](../assets/publishing/pageorder.png)

## その他のリソース：

- [ネイティブPDFデザインのページレイアウトドキュメント](https://experienceleague.adobe.com/en/docs/experience-manager-guides/using/install-guide/on-prem-ig/output-gen-config/config-native-pdf-publish/design-page-layout)
- [ネイティブPDFの基本事項の収録済みエキスパートセッション](https://experienceleague.adobe.com/en/docs/experience-manager-guides/using/knowledge-base/expert-session/native-pdf-publishing-essentials-feb23)

<br>
<br>

AEM Guides コミュニティに質問を投稿します。 [フォーラム](https://experienceleaguecommunities.adobe.com/t5/experience-manager-guides/ct-p/aem-xml-documentation) を参照してください。


