---
title: ネイティブPDF | 変数をPDF出力で使用
description: PDF 出力テンプレートおよび出力テンプレートでの変数の使用
source-git-commit: f1fd9c9e3fd3f228feeff469d04221fc3b0ab30f
workflow-type: tm+mt
source-wordcount: '1446'
ht-degree: 0%

---

# PDF 出力での変数

変数は、再利用可能な情報として機能するデータの名前と値のペアです。 これにより、内容がポータブルになり、簡単に更新できます。 変数またはその値を変更すると、その変数または値のすべての発生件数更新されます。



## 新しい変数を作成

変数を作成するには、次の手順を実行します。

![新しい変数を作成](assets/add-variable-default.png){width="800" align="left"}

*変数を作成し、その値を定義します。*


1. Web エディターで、 **出力** タブをクリックします。
1. 選択 **変数** <img alt= "変数アイコン" src="./assets/variables-icon.svg" width="25"> をクリックします。
1. 選択 **編集** <img alt= "鉛筆アイコンを編集" src="./assets/edit_pencil_icon.svg" width="25"> 開く **変数** 編集者です。
変数はアルファベット順に一覧表示されます。
1. 名前&#x200B;****&#x200B;列に変数名を入力し、**値**&#x200B;列に値を入力します。
   >[!TIP]
   >
   >任意のHTML 内容を変数値として使用して、変数値を特定の形式で表示できます。 例えば、変数値にタグを追加して`<b>`、ガイド&#x200B;**Experience Manager値を**&#x200B;太字で表示することができます。また、リポジトリから画像を値として追加することもできます。

1. 選択 **変数を追加** <img alt= "追加アイコン" src="./assets/add-icon.svg" width="25"> をクリックして新しい変数を追加します。 既存の変数と同じ名前の変数を作成することはできません。 エラーが表示されます。

   >[!NOTE]
   >
   >次を選択しない場合、 **変数を追加** <img alt= "追加アイコン" src="./assets/add-icon.svg" width="25">の場合、変数は作成されず、リストに追加されません。

これにより、デフォルト値を持つ変数を作成できます。 次に例を示します。
* ProductName:Experience Managerガイド
* バージョン番号： 2300
* リリース日： 01/01/2023


### 変数の編集

変数は、次の 2 つの方法で編集できます。

**左側の変数パネルから**

1. 変数を **変数** パネル。
1. 変数の上にマウスポインターを置くと、 **オプション** メニューで、 **編集** オプション。
1. Adobe Analytics の **変数を編集** ダイアログボックスで、選択した変数のデフォルト値を編集できます。
1. 「**完了**」をクリックします。

**変数エディターから**

1. 選択 **変数** <img alt= "変数アイコン" src="./assets/variables-icon.svg" width="25"> をクリックします。
1. 選択 **編集** <img alt= "鉛筆アイコンを編集" src="./assets/edit_pencil_icon.svg" width="25">**をクリックして、変数** 編集者を開きます。

1. **変数**&#x200B;編集者では、選択した変数の値を編集できます。

変数 編集者 で&#x200B;**行った変更を保存して、左側の変数**&#x200B;パネル表示&#x200B;****&#x200B;必要があります。

>[!NOTE]
>
> 変数値を編集すると、Adobe Experience Managerガイドは適用可能なすべての参照を同時に更新します。

### 変数Searchおよびプレビュー

変数の値を検索およびプレビューできます。 文字列を **変数** パネル。 変数名とその値に基づいて、両方の変数を検索します。
変数をプレビューするには、次の 2 つの方法があります。

変数のプレビューにデフォルト値が表示されます。 例えば、ProductName 変数のデフォルト値を「Adobe Experience Manager Guides」と定義した場合、この値はプレビューに表示されます。

**左側の変数パネルから**


1. 変数を **変数** パネル。
1. 変数の上にマウスポインターを置くと、 **オプション** メニューで、 **プレビュー** オプション。

![変数プレビューは、変数パネルから](assets/variables-panel-preview-default.png){width="550" align="left"}

*変数のデフォルト値をプレビューします。*

**変数エディターから**

1. リストの変数の上にマウスポインターを置くと、 **オプション** メニュー。
1. **プレビュー**&#x200B;を選択します。




### 変数を複製

変数を複製し、必要に応じて値を変更できます。


1. リストの変数にマウスポインターを合わせてオプション&#x200B;****&#x200B;メニュー表示。
1. [複製&#x200B;**] を選択します**。

変数のデフォルト名はです。 `<selected variable name>` （「サンプル」など）。 必要に応じて名前を変更できます。

### 変数の削除

変数を削除するには、次の 2 つの方法があります。

**左側の変数パネルから**

1. 変数を **変数** パネル。
1. 変数の上にマウスポインターを置くと、 **オプション** メニューで、 **削除** オプション。

**変数エディターから**

1. リストの変数の上にマウスポインターを置くと、 **オプション** メニュー。
1. 選択 **削除** オプション。

すべての変数セットから変数が削除されます。

## 出力プリセットの変数セット

Adobe Experience Managerガイドは、変数に代替値を割り当てることができる変数セットもサポートしています。 例えば、ある会社は A と B という 2 つの商品を販売できます。それぞれに異なる仕様があります。 これらの仕様には、製品名、バージョン番号、リリース日が含まれる場合があります。 ブランディングには、他にも違いが生じる場合があります。 変数セットを使用して、変数に異なる値のセットを定義します。 出力を生成する際に、適切な変数セットを選択し、必要な出力を生成します。

### 変数セットの設定

変数を追加する前に、変数セットを設定する必要があります。



1. 選択 **設定** <img alt= "設定アイコン" src="./assets/settings-icon.svg" width="25"> 開く **変数セットの設定** ダイアログボックス。
   ![変数セットの設定](assets/configure-variable-set.png){width="550" align="left"}
1. 変数セット名を **名前** 列。
1. 選択 **変数を追加** <img alt= "追加アイコン" src="./assets/add-icon.svg" width="25"> をクリックして、新しい変数セットを追加します。 変数セットはアルファベット順に表示されます。
1. 次の項目を選択できます。 **削除** をクリックして、変数セットを削除します。

### 変数セットの操作

すべての変数セットに同じ変数がありますが、異なる値を設定できます。

特定の変数セットの値を表示、編集およびプレビューできます。 次の中から変数セットを選択します： **変数セット** ドロップダウン。 選択した変数セットに従って値が表示されます。
特定の変数セット内の変数の値を編集すると、デフォルトの値が上書きされ、選択した変数セットの値が変更されます。
例えば、変数セットに対して次の値を設定できます。 *Adobeセット 1* および *Adobeセット 2* .


**変数セット 1**: *Adobeセット 1*

* 製品名： ProductA
* バージョン番号： 2311
* リリース日： 11/02/2023


**変数セット 2**: *Adobeセット 2*

* 製品名： ProductB
* バージョン番号： 2310
* リリース日： 09/07/2023

すべての新しい変数が、すべての変数セットに追加されます。 変数を削除または複製すると、すべての変数セットに対して更新されます。

また、変数セットの値をプレビューすることもできます。
例えば、変数セットの場合、 *Adobeセット 1*&#x200B;に設定した場合、ProductName 変数の値を「ProductA」に設定すると、変数エディターのプレビューにこの値が表示されます。

![変数エディターでの変数のプレビュー](assets/variables-editor-preview.png){width="550" align="left"}

*選択した変数セットで定義した値をプレビューします。*

### 変数の値をリセット

値を編集した場合は、変数をデフォルト値にリセットすることもできます。
リセット <img alt= "リセットアイコン" src="./assets/application-variable-revert.svg" width="25"> は、変更された値を持つ変数に対して表示されます。
例えば、ProductName 変数の値を Experience Manager ガイドのデフォルト値にリセットできます。

## ネイティブテンプレートでの変数のPDF

製品ドキュメントの出力を生成する際に変数を追加して、移植性を高め、簡単に更新できるようにすることができます。 これらの変数は、ドキュメントの異なるページ間に表示されるページレイアウト内に挿入できます。 例えば、ページレイアウトのヘッダー領域（またはフッターや本文などの他の部分）に表示される ProductName 変数を追加できます。



ProductName と同様の変数をヘッダー領域に挿入するには、次の手順を実行します。
1. 必要なページレイアウトを編集用に開きます。

   >[!NOTE]
   >
   > 表示 [ページレイアウトのカスタマイズ](../native-pdf/components-pdf-template.md#customize-a-page-layout-customize-page-layout) ページレイアウトを開いてカスタマイズまたは編集するためのセクション。

1. 変数の挿入をアクティブにするには、ヘッダーを選択します。

1. 変数の挿入方法は次の 2 つです。

   **左側の変数パネルから**

   * 変数&#x200B;**パネルから**&#x200B;変数をドラッグしてヘッダー領域にドロップします。

   **ツールバーから**

   1. 選択 **変数/フィールドを挿入** <img alt= "変数アイコン" src="./assets/variables-icon.svg" width="25">。
   1. Adobe Analytics の **変数** ダイアログボックスで、変数の名前を選択して、ヘッダー領域に挿入します。
   1. また、テキストボックスに検索文字列を入力することもできます。 指定された文字列を含む変数名がフィルタリングされ、リストに表示されます。 選択した変数がヘッダー領域に挿入されます。 変数のデフォルト値を表示できます。
   1. 変数を置き換えるには、変数値をダブルクリックし、 **変数** ダイアログボックス。 変数が置き換えられます。


## 変数を使用してPDF出力を生成

様々な変数の値を使用して、PDF出力を生成できます。 レイアウトを生成する前に、出力プリセットの **変数セット** 」ドロップダウンリストで値を選択します。

![変数セットドロップダウン](assets/output-preset-variable-dropdown.png){width="550" align="left"}

*PDF 出力の生成に使用する変数セットを出力プリセットのドロップダウンから選択します。*

>[!NOTE]
>
> ドロップダウンから「(デフォルト)」を選択して、すべての変数のデフォルト値公開することもできます。

選択した変数セットに応じて、変数セットで定義された変数値に対応する出力が得られます。 例えば、変数セット *Adobeセット 1*&#x200B;の場合、このセットで定義されている変数の値が出力に表示されます。


<img src="assets/variable-pdf-output.png" alt="変数を使用したPDF出力" width="500" border="2px">

*ページPDFの変数を使用してレイアウト出力を生成します。*

また、必要に応じて任意の変数セットの値をすばやく更新し、出力を再生成することもできます。 例えば、バージョンの詳細を更新する必要がある場合は、VersionNumber 変数でバージョンの値を更新し、出力を再生成できます。


