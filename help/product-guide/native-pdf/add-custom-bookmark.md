---
title: ネイティブのPDF公開機能 | PDF出力へのカスタムブックマークの追加
description: スタイルシートの使用を作成し、コンテンツのスタイルを作成する方法について説明します。
exl-id: 6e6dbba3-da41-4066-b7b2-735a3d92b70a
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 1c96f25c3b970d04d23e8faf94a8f39095f6bd2c
workflow-type: tm+mt
source-wordcount: '347'
ht-degree: 0%

---

# PDF出力へのカスタムブックマークの追加

通常、DITA マップ内の目次は、最終的なPDF出力でブックマークとして複製されます。これには、選択時に目次ページを開く **コンテンツ** タイトルが含まれます。 この目次は、DITA マップのトピックまたはセクションのタイトルから作成されます。

ナビゲーションを容易にするために、PDF出力の特定のコンテンツにカスタムブックマークを追加したい場合があります。 これを行うには、要素に `outputclass` 属性を追加し、次の属性を適用します。

`bookmark-level: 3`

ここで、`bookmark-level` は属性で、数値 `3` ブックマークが追加されたブックマーク階層のレベルを示す値です。 次の例では、第 1 レベルのトピック「Contacts」に「Contact list」というテーブルがあり、このテーブルに、値が `custom-bookmark` の `outputclass` 属性を追加しました。


<img src="./assets/custom-bookmark-attribute.png" width="500">

`custom-bookmark` クラスの次の定義が CSS ファイルに追加されます。

```css
…
/*Adding a custom bookmark*/
.custom-bookmark{
    bookmark-level: 2
}
…
```

PDFの出力では、以下に示すように、*連絡先リスト* テーブルがPDF ブックマークリストの 2 番目のレベルに追加されます。

![](assets/custom-bookmark-in-pdf-output.png) {width="300" align="left"}

>[!NOTE]
>
>カスタム ブックマークを追加するレベルを選択する必要があります。 親トピックのブックマークより小さい数値を指定すると、カスタムブックマークは親ブックマークの位置を取り、それ以外のブックマークは子として表示されます。 これにより、予期しないブックマーク構造が生じる可能性があります。

**PDF出力ブックマークからのコンテンツタイトルの削除**

PDF出力に **Contents** タイトルを含めない場合は、要素ではなく要素の中に **Contents** を配置す `<p>` ことで削除 `<h1>` きます。

コンテンツのタイトルをブックマークから削除する手順を以下に示します。

1. PDFの出力用として使用するPDF テンプレートを開きます。
2. **ページレイアウト** 内の **目次ページ** を開きます。
目次ページが右側に表示されます。
3. **Source** モードに切り替えて、コンテンツがある要素を `<h1>` から `<p>` に変更します。

変更前：

```
<h1 class="toc-title">Contents</h1>
```

変更後：

```
<p class="toc-title">Contents</p>
```

変更を保存し、出力を再生成します。





