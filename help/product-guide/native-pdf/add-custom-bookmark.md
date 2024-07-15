---
title: ネイティブPDFのPublish機能 | PDF出力へのカスタムブックマークの追加
description: スタイルシートの使用を作成し、コンテンツのスタイルを作成する方法について説明します。
exl-id: 6e6dbba3-da41-4066-b7b2-735a3d92b70a
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '230'
ht-degree: 0%

---

# PDF出力へのカスタムブックマークの追加

通常、DITA マップ内の目次は、最終的なPDF出力でブックマークとして複製されます。 この目次は、DITA マップのトピックまたはセクションのタイトルから作成されます。 PDF出力の特定のコンテンツにカスタムブックマークを追加して、簡単に移動できるようにしたい場合があります。 これを行うには、要素に `outputclass` 属性を追加し、次の属性を適用します。

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

PDFの出力では、以下に示すように、*連絡先リスト* テーブルがPDFブックマークリストの 2 番目のレベルに追加されます。

<img src="./assets/custom-bookmark-in-pdf-output.png" width="500">

>[!NOTE]
>
>カスタム ブックマークを追加するレベルを選択する必要があります。 親トピックのブックマークより小さい数値を指定すると、カスタムブックマークは親ブックマークの位置を取り、それ以外のブックマークは子として表示されます。 これにより、予期しないブックマーク構造が生じる可能性があります。
