---
title: PDFのネイティブ公開機能| カスタム改訂バースタイルの操作
description: 改訂バーにスタイルを適用する方法について説明します。
exl-id: a81ec56c-ccbb-4599-a696-8edef7a73cdd
feature: Output Generation
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 3aadc59f5034828cf319992b7acb32d5a88eaf93
workflow-type: tm+mt
source-wordcount: '348'
ht-degree: 0%

---

# カスタム改訂バーのスタイルの操作

改訂バーとは、新しいコンテンツや改訂されたコンテンツを視覚的に識別する縦線のことです。 AEM Guidesでは、トピック内の変更されたコンテンツの左側に変更バーを表示し、PDF出力の目次に変更されたトピックを表示できます。

改訂バーの表示について詳しくは、*PDF出力の公開*&#x200B;の「公開済みバージョン [間に改訂バーを使用してPDFを作成する」設定を参照してください。](../web-editor/native-pdf-web-editor.md)

## トピック内のコンテンツの変更

変更バーは、挿入、変更、または削除されたトピックのコンテンツの左側に表示されます。

次のスタイルを変更して、変更されたコンテンツを表示したり、改訂バーを含むを表示したりできます。


>[!NOTE]
>
>これらのスタイルは`layout.css` ファイルの一部であり、必要に応じて編集できます。

例えば、`.inserted-block` スタイルのcolor属性を使用して、挿入したコンテンツを公開されたPDF出力に表示する方法を定義できます。


```css
...
.inserted-block { 
  color: #2ECC40; 
  display: inline; 
  -ro-comment-content: " "; 
  -ro-comment-style: underline; 
  -ro-comment-title: "Inserted"; 
  -ro-comment-date: attr(data-time); 
  -ro-comment-dateformat: "yyyy/dd/MM HH:mm:ss"; 
} 
...
```

同様に、`.deleted-block` スタイルを使用して、削除したコンテンツを公開されたPDF出力に表示する方法を定義できます。

```css
...
.deleted-block { 
  display: inline; 
  color: #FF6961; 
  text-decoration: line-through; 
  -ro-comment-content: " "; 
  -ro-comment-style: strikeout; 
  -ro-comment-title: "Deleted"; 
  -ro-comment-date: attr(data-time); 
  -ro-comment-dateformat: "yyyy/dd/MM HH:mm:ss"; 
} 
...
```

`.inserted-change-bar`および`.deleted-change-bar` スタイルを使用して、更新されたコンテンツの左側に表示される改訂バーの外観を変更できます。

例えば、`-ro-change-bar-color` スタイルの`.inserted-change-bar`属性を使用して、挿入された改訂バーを緑色で表示できます。 `-ro-change-bar-color` スタイルの`.deleted-change-bar`属性を使用して、削除された変更バーを赤色で表示することもできます。

```css
...
.inserted-change-bar { 
  -ro-change-bar-color: #2ECC40; 
} 

.deleted-change-bar { 
  -ro-change-bar-color: #FF6961; 
  } 
...
```

<img src="./assets/changed-bar-content.png" alt="変更されたバーのトピックコンテンツ" width="500">

## 目次（TOC）で変更されたトピック

PDF出力の目次で、変更されたトピックの左側に変更バーを追加することもできます。 `-ro-change-bar-color` スタイルの`.changed-topic`属性を使用して、目次リストで更新されたトピックに対して、選択した色の変更バーを追加できます。

例えば、緑色の改訂バーを追加できます。

```css
...
.changed-topic { 
 -ro-change-bar-color: #2ECC40; 
}  
...
```


これにより、一部の更新が行われた目次のすべてのトピックに対して、緑色の変更バーが表示されます。 目次で変更されたトピックをクリックして、詳細な変更を表示できます。

<img src="./assets/changed-bar-TOC.png" alt="改訂バー目次" width="500">
