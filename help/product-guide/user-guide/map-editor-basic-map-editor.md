---
title: 基本マップエディタを使用する
description: AEMガイドの基本マップエディタを使用する方法について説明します。 マップレベルとトピックレベルでの基本的なマップエディタの機能を理解します。 DITA マップで関係テーブルを作成および編集します。
exl-id: 13da729d-e8f7-46ae-873a-1bfc32da974f
feature: Authoring, Map Editor
role: User
source-git-commit: be06612d832785a91a3b2a89b84e0c2438ba30f2
workflow-type: tm+mt
source-wordcount: '1408'
ht-degree: 0%

---

# 基本マップエディタを使用する {#id1942CM005Y4}

基本マップエディターは、AEMリポジトリからトピックを追加し、DITA マップまたはブックマップを作成するための、簡単なドラッグ&amp;ドロップ機能を提供します。 ネストされたトピック、関係テーブル、属性およびメタデータ情報を追加し、マップの正確性を検証することもできます。

>[!NOTE]
>
> 管理者が [ 高度なマップエディタ ] オプションを有効にしている場合は、[ 基本マップエディタ ] にアクセスできません。 既定では、すべてのマップファイルは [ 詳細マップエディタ ] で開きます。

次のセクションでは、基本マップエディタで使用できる様々な機能について説明します。

## マップファイルにトピックを追加する {#id193CBL0505Z}

マップファイルを作成したら、マップファイルにトピックを追加する必要があります。 基本マップエディタを使用して、トピック、関係テーブル、または他のマップファイルを追加できます。

次の手順を実行して、マップファイルを作成します。

1. Assets UI で、編集するマップファイルに移動します。

1. マップファイルに排他ロックを設定するには、マップファイルを選択し、 **チェックアウト**.

   >[!NOTE]
   >
   > マップファイルに排他的なロックを設定すると、他のユーザはマップを編集できなくなります。 ただし、マップファイル内のトピックでは作業できます。

1. マップファイルを選択した状態で、 **編集**.

   マップファイルが、マップエディタで編集用に開きます。 マップエディタを使用して、参照レールに表示されている現在使用可能なトピックを使用してマップを作成します。

   ![](images/dita-map-01.png){width="800" align="left"}

1. の使用 **参照** パネルを開き、追加するトピックまたはサブマップを含むフォルダに移動します。

   >[!NOTE]
   >
   > 参照レールの任意のフォルダーから、トピックまたはサブマップを追加できます。

1. 最初のトピックをマップに追加するには、トピックを [ 基本マップエディタ ] にドラッグ&amp;ドロップします。

   >[!NOTE]
   >
   > 最初のリンクを追加した後、マップ内の既存のトピックにマウスを移動すると、「新しい参照を追加」リンクが使用可能になります。

1. 後続のトピックまたはサブマップを追加するには、トピックまたはサブマップをマップ内の必要な場所にドラッグ&amp;ドロップします。

   DITA マップにサブマップを追加すると、サブマップが DITA マップ内のリンクとして表示されます。 サブマップのすべてのトピックを表示するには、サブマップのリンクをクリックします。 サブマップのコンテンツが新しいタブに表示されます。

   >[!NOTE]
   >
   > マップ内の既存のトピックに新しいトピックをドロップすると、トピックの置き換えに関するメッセージが表示されます。 トピックを置き換える場合は [ はい ] をクリックし、置き換えを行わない場合は [ いいえ ] をクリックします。 [Ctrl]+[Z] と [Ctrl]+[Y] を使用して、マップ内の変更を元に戻したり、やり直したりできます。

1. 「**保存**」をクリックします。


## [ 基本マップエディタ ] のツールバーで使用できるフィーチャ

[ 基本マップエディタ ] のメインツールバーでは、次のタスクを実行できます。

![](images/ditamap-toolbar-actions.png){width="800" align="left"}

**A：検索**

DAM から必要なトピックを検索し、含めることができます。 このアイコンをクリックすると、検索ダイアログが表示されます。

![](images/search-dita-map.png){width="800" align="left"}

検索するキーワードを入力します。これらのキーワードはトピックのファイル名、コンテンツ、および属性値に一致します。 検索結果が利用可能になったら、目的のトピックを選択し、「チェック」ボタンをクリックして、選択したファイルをマップ構造の最後に追加します。 Modify Date パラメータを指定すると、検索結果をフィルタリングできます。

**B：グループ**

トピックの左側にあるチェックボックスをクリックし、ツールバーの「グループ」をクリックして、選択したトピックをグループ化します。 トピックのグループ化について詳しくは、 [topicgroup](https://docs.oasis-open.org/dita/v1.0/langspec/topicgroup.html) OASIS DITA 言語仕様のドキュメント。

**C：削除**

トピックの左側にあるチェックボックスをクリックし、ツールバーの「削除」をクリックして、選択したトピックをマップから削除します。

**D：数値を表示/数値を非表示**

マップ内のトピックの番号を表示（または非表示）します。

**E：検証**

マップが有効か、エラーがあるかを確認します。

**F：デフォルトモード/XML モード**

Adobe Analytics の **デフォルトのモード**&#x200B;をクリックすると、トピックのプレビューが新しいタブに表示されます。 をクリックして、 **デフォルトのモード** アイコンはモードを変更します。 **XML モード**. In **XML モード**&#x200B;をクリックすると、トピック行の任意の場所をクリックすると、トピック内のトピック参照の基になる XML が表示されます。 ソース XML ビューには、 **自動インデント** XML コードを見栄えのよい簡単に読み取り可能な形式で再編成するオプション。 マップを手動で編集している場合は、ソースビューも検証チェックを実行します。 XML にエラーが含まれる場合は、同じことが **XML モード** DITA マップファイルを保存することはできません。 マップ全体の XML を表示する場合は、トピックの境界の外側の任意の場所をクリックします。


**注意：** デフォルトモードでは、キーボードショートカットを使用して\(`Ctrl+z`\) または\(`Ctrl+y`\) 最後のアクション。


![](images/dita-map-invalid-source.png){width="650" align="left"}

**G：マップのプロパティ**

マップの属性とメタデータ情報を設定できる [ マップのプロパティ ] ダイアログボックスを表示します。 属性を追加するには、 **追加** ダイアログの左下隅にあるボタンで、 **属性** 」ドロップダウンリストから選択できます。 リストから、追加する属性を選択します。 選択した属性に DTD で事前定義値が指定されている場合、それらの値は新しいドロップダウンリストに表示されます。 目的の値をドロップダウンリストから選択できます。 定義済みの値がない場合は、選択した属性の値を入力するテキストボックスが表示されます。

![](images/map-properties.png){width="300" align="left"}

## 基本マップエディタのトピックレベルで使用できる機能

基本マップエディタでトピックまたはサブマップファイルにマウスポインタを合わせると、次のタスクを実行できます。

![](images/ditamap-actions.png){width="650" align="left"}

**A：左に移動または右に移動**

トピックを左右に移動するには、左向きまたは右向きの矢印アイコンをクリックします。 このようにトピックを移動すると、その上のトピックに関して、子（ネスト）または兄弟（ネストを削除）になります。

**B：プロパティ**

「プロパティ」アイコンをクリックして、Topicref の「プロパティ」ダイアログを開きます。 このダイアログを使用して、トピックの属性とメタデータ情報を設定できます。 標準のトピックの属性とメタデータについて詳しくは、 [topicref](https://docs.oasis-open.org/dita/v1.2/os/spec/langref/topicref.html) OASIS DITA 言語仕様のドキュメント。


![](images/map-properties-metadata.png){width="350" align="left"}

**C：新しい参照を追加**

新しい参照を現在のトピックの兄弟として追加するには、新しい参照を追加アイコンをクリックします。

**D：新しいキー定義を追加**

キーアイコンをクリックして、新しいキー定義を追加します。 上書きされたキーまたはマップで既に定義されているキーは、赤で表示されます。 キー定義の [ プロパティ ] アイコンをクリックすると、[ キー定義プロパティ ] ダイアログボックスが表示されます。

## 基本マップエディタでの関係テーブルの操作 {#id1944B0I0COB}

AEM Guides のマップエディターには、DITA マップで関係テーブルを作成および編集できる強力な機能が付属しています。

基本マップエディタでリレーションシップテーブルを操作するには、次の手順を実行します。

1. Assets UI で、関係テーブルを作成する DITA マップに移動します。

1. DITA マップをクリックして、DITA マップコンソールで開きます。

1. を選択します。 **トピック** タブをクリックして、DITA マップで使用可能なトピックのリストを表示します。

   >[!TIP]
   >
   > 「トピック」タブには、従属ファイルと共にマップファイルをダウンロードするオプションが表示されます。 詳しくは、 [DITA マップファイルの書き出し](authoring-download-assets.md#id218UBA00IXA).

1. メインツールバーで、 **編集**.

   マップファイルが [ 基本マップエディタ ] で開きます。

1. 選択 **Reltable** をクリックします。

   ![](images/reltable.png){width="650" align="left"}

1. トピックリストから関連付け可能なエディタにトピックをドラッグ&amp;ドロップします。

   >[!NOTE]
   >
   > 参照レールの任意のフォルダーからトピックを追加できます。

   ![](images/create-reltable.png){width="550" align="left"}

1. 関係テーブルにヘッダーを追加するには、 **Releheader を追加**.

1. 関係テーブルに列を追加するには、 **列を追加**.

   ![](images/complete-reltable.png){width="550" align="left"}

1. 「**保存**」をクリックします。


また、関係テーブルエディターから次の操作を実行できます。

**行または列の削除**

テーブルから列を削除する場合は、列ヘッダーのチェックボックスを選択して、「削除」をクリックします。 テーブルから行を削除する場合は、各行の最初の列にあるチェックボックスを選択して、「削除」をクリックします。

**トピックの削除**

テーブルからトピックを削除する場合は、トピックの横にあるバツ印アイコンをクリックします。

**関係テーブルを削除**

関係テーブルを削除する場合は、関係テーブルの外側の任意の場所をクリックし、「削除」をクリックします。

**親トピック：**[&#x200B;マップエディタを使用する](map-editor.md)
