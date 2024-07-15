---
title: 付録
description: 詳しくは、変換用のInDesignファイルを準備する方法を参照してください
exl-id: 02da0e61-7a73-4c4c-9bd7-2664d90fa728
feature: InDesign File Conversion
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '2851'
ht-degree: 0%

---

# 付録 {#id195AD0L60Y4}

## 変換用のInDesignファイルを準備 {#id195DBF0045Z}

InDesignは、魅力的で複雑なドキュメントを作成するための豊富な機能を作成者に提供します。 多くの場合、ドキュメントの様々な部分がページ上に視覚的に配置されますが、これらのテキストフレーム間のフローを提供しようとすることはありません。 テキストフレームの「*読み取り順序*」が定義されていない場合、IDML ファイルには、意味のある順序に従わないストーリーが含まれます。 最終結果は、段落、表、グラフィックをランダムな順序で含む 1 つまたは複数の DITA トピックになります。

DITA エディタで DITA コンテンツを正しい順番に編集することもできますが、IDML ファイルを作成する前にInDesignファイルを修正する方がはるかに簡単です。 この操作は、ソースドキュメントの外観を変更せずに実行できます。 また、読み取り順序を適切に定義することで、ソースドキュメントにアクセスできるようにする利点もあります。

***テキストフレームのスレッド化***

InDesignでは、あるフレームを別のフレームにリンクするプロセスに *「スレッド*」という用語を使用します。 テキストフレームのスレッド化の詳細については、InDesignドキュメントの *[スレッド化テキスト ](https://helpx.adobe.com/in/indesign/using/threading-text.html)* を参照してください。

***重なり合うフレーム***

一部のInDesign文書では、レイアウト上の理由から、スレッド化されていない重なり合うフレームが使用されます。 このコンテンツをメインスレッドに結合するのは非常に困難な場合があります。 DITA 環境で結果を編集するのが最適な方法かもしれません。

***InDesign事例***

InDesignドキュメント内のコンテンツのスレッド化された各フローは、「*story*」と呼ばれます。 最適な結果を得るには、ストーリー数を制限することをお勧めします。 ただし、文書には、DITA 出力に必要ない部分があります。 例えば、ページフッターが必要になることはめったにありませんが、慎重に処理されない場合は、トピックの途中に表示される場合があります。

ドキュメント内で不要なテキストを除外する最も簡単な方法は、不要なコンテンツにのみ使用される特別な *段落タグ* を指定することです。 例えば、フッターに *\[Basic Paragraph\]* を再利用する代わりに、専用の *Footer* タグを作成します。 次に、MapStyle ファイルで、次のようにドロップする *Footer* 段落を設定します。

```XML
<paraRule style="Footer" local="0" refactor="drop">
   <attributeRules createID="false"/>
</paraRule>
```

***DITA 文書型へのマッピング***

トピックの開始をマークできる段落スタイルまたは要素をソースドキュメントに少なくとも 1 つ含めることが不可欠です。 ドキュメントでは、最上位のタイトルの名前として *見出し 1* を使用するのが一般的です。 その後、そのスタイルから特定の DITA Doctype へのマッピングを作成できます。 ドキュメントが適切に整理され、*見出し 1* の使用が全体で一定である場合は、良い結果が得られます。

***複数の DITA Doctypes***

一部の *Heading1* 段落を異なる DITA Doctype に変換する必要がある場合は、InDesignして段落スタイルを複製します。 これらのスタイルに、必要に応じて *Heading1\_genTask* や *Heading1\_troubleshooting* などの識別しやすい名前を付けます。 次に、mapStyle ファイルを次のように設定します。

```XML
<doctypes>
   <doctypeParaRule style="Heading1" local="0" mapToDoctype="concept">
      <attributeRules createID="true"/>
   </doctypeParaRule>
   <doctypeParaRule style="Heading1_genTask" local="0" mapToDoctype=" generalTask">
      <attributeRules createID="true"/>
   </doctypeParaRule>
   <doctypeParaRule style="Heading1_troubleshooting" local="0"mapToDoctype=" troubleshooting">
      <attributeRules createID="true"/>
   </doctypeParaRule>
</doctypes>
```

***構造化InDesign書類***

InDesignは XML との緩やかな関係を持っています。 文書には XML DTD を含めることができ、メインストーリーはその DTD に対して有効ですが、コンテンツの一部が XML で、DTD が含まれていないハイブリッド文書を作成することもできます。 これらは、DITA への変換が成功した場合の望ましくないケースです。 ドキュメントに XML 部分が含まれている場合は、出力を XML に保存して、結果が許容可能かどうかを確認します。 そうでない場合、DITA コンテンツにも無効なコンテンツが含まれるか、完全に失敗する可能性があります。

***テーブルの書式設定***

InDesignの表フォーマット規則から DITA の同等の表フォーマットへの変換は、複雑なプロセスです。 これは、DITA で使用される Oasis \（CALS\）表モデルが提供する基本オプションに比べて、ソースファイルで利用できる豊富な書式設定機能が原因です。 垂直方向と水平方向のテキストの整列が提供され、同様の結果が得られますが、「両端揃え」テキストは常にテキストの方向に従って両端揃えになり、「InDesign」では「左揃え」と「右揃え」が可能になります。

InDesignの列区切り記号と行区切り記号の処理は、Oasis テーブル モデルの基本オプションよりもはるかに優れています。 InDesignには、4 つのセルの罫線が用意されています。罫線の種類\（実線またはパターン\）、罫線の太さ、罫線の色、境界線の濃淡、境界線のギャップの色、境界線のギャップの濃淡です。 これらはすべて、各セル \（entry element\）の右側と下部の境界線にマッピングする必要があります。選択肢は 0 または 1 のみです。境界線を非表示にするか、境界線を表示します。

InDesignの境界線のルールは、次のレベルで適用できます。

- テーブルスタイル
- セルのスタイル
- 各セルのローカルオーバーライド

DITA 変換プロセスへのInDesignでは、次のように境界決定が適用されます。

- 表スタイルは、垂直罫線の `colspec/@colsep` 属性にマッピングされます。 水平ルールは、`row/@rowsep` 属性にマッピングされます。 どちらの場合も、境界線が定義されていない場合、属性は作成されません。
- セルスタイルは、`entry/@colsep` 属性と `entry/@rowsep` 属性にマッピングされます。 これらの値は、表スタイルから派生した罫線を上書きします。
- ローカルオーバーライドは、書式をセルに直接適用し、表スタイルとセルスタイルをオーバーライドします。

***代替パターン***

InDesignの表スタイルを使用すると、列とセルの罫線を交互のパターンに従うことができます。 この機能は変換に対応していますが、結果は、1 つのパターン グループが決定\（1\）を表示するようにマップされ、他のパターン グループが決定\（0\）を非表示にするようにマップされた場合にのみ明らかになります。

## DITA マイグレーションにInDesignするマッピング ファイルを用意する {#id194AF0003HT}

正しい DITA 変換には、ソース文書の内容に一致するマッピングファイルが必要です。 構造化されていないInDesign文書の場合、使用可能なすべての段落スタイルと文字スタイルをマッピングする必要があります。 XML 構造InDesign文書の場合、関連する DTD 内のすべてのエレメントをマッピングする必要があります。

非構造化InDesign・ドキュメントと構造化ドキュメントのマッピング・ファイルは異なります。 これは、非構造化ソース・コンテンツを DITA に変換するための複雑な処理要件が原因です。

マッピングファイルのサンプルを以下に示します。

```XML
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE styleMap SYSTEM "mapStyle.dtd">
<styleMap xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="mapStyle.xsd" >
   <doctypes>
      <mapDoctypeParaRule root="itpx:stories" mapToDoctype="map">
         <attributeRules createID="true">
            <addNew name="outputclass" value="map"/>
         </attributeRules>
      </mapDoctypeParaRule>
      <doctypeParaRule style="Heading 1" local="0" mapToDoctype="concept">
         <attributeRules createID="true"/>
      </doctypeParaRule>
      <doctypeParaRule style="Heading A" local="0" mapToDoctype="topic">
         <attributeRules createID="true"/>
      </doctypeParaRule>
   </doctypes>
   <wrappingRules>
      <wrap elements="li+" context="number" wrapper="ol">
         <attributeRules createID="true"/>
      </wrap>
      <wrap elements="li+" context="bullet" wrapper="ul">
         <attributeRules createID="true"/>
      </wrap>
   </wrappingRules>
   <paragraphStyleRules>
      <paraRule style="Heading 2" local="0"  mapTo="p">
         <attributeRules createID="true"/>
      </paraRule>
      <paraRule style="Heading 3" local="0"  mapTo="p">
         <attributeRules createID="true"/>
      </paraRule>
      <paraRule style="List Paragraph" local="p[-|-|-|-|-|b|-|-]" context="bullet" mapTo="li">
         <attributeRules createID="true"/>
      </paraRule>
      <paraRule style="List Paragraph" local="p[-|-|-|-|-|n|-|-]" context="number" mapTo="li">
         <attributeRules createID="true"/>
      </paraRule>
      <paraRule style="List Paragraph" local="0" context="bullet" mapTo="li">
         <attributeRules createID="true"/>
      </paraRule>
      <paraRule style="Normal" local="0"  mapTo="p">
         <attributeRules createID="true"/>
      </paraRule>
      <paraRule style="Normal" local="p[-|-|-|-|-|b|-|-]" context="bullet" mapTo="li">
         <attributeRules createID="true"/>
      </paraRule>
      <paraRule style="Title" local="0"  mapTo="p">
         <attributeRules createID="true"/>
      </paraRule>
   </paragraphStyleRules>
   <characterStyleRules>
      <charRule style="Bold" local="0" mapTo="b">
         <attributeRules createID="false"/>
      </charRule>
      <charRule style="Code" local="0" mapTo="codeph">
         <attributeRules createID="false"/>
      </charRule>
      <charRule style="[No character style]" local="c[Bold|-|-|-|-|-|-|-]" mapTo="b">
         <attributeRules createID="false"/>
      </charRule>
      <charRule style="[No character style]" local="c[Italic|-|-|-|-|-|-|-]" mapTo="i">
         <attributeRules createID="false"/>
      </charRule>
   </characterStyleRules>
</styleMap>
```

マッピングファイルは、すべてのソース段落スタイルと文字スタイルコードを一覧表示するシンプルな構造の XML ファイルです。 ファイルの内容は次のとおりです。

**スタイルマッピング**

`styleMap` 要素には、マッピングファイルのバージョンを記録するための `@map_date` と `@map_version` の 2 つのオプション属性を指定できます。

**ドキュメントタイプ**

`doctypes` 要素には、サポートされる DITA マップとトピックマッピングが一覧表示されます。

**ドキュメントタイプの段落ルールのマッピング**

`mapDoctypeParaRule` 要素は必須です。 ソース XML のルート要素は常に DITA マップのルート `map` 要素にマップされるので、この要素の属性は編集できません。

**ドキュメントタイプの段落ルール**

`doctypeParaRule` 要素は必須です。 これにより、コンバージョンプロセスで新しいトピックの開始を特定できます。 通常、`@style` 属性は `@local` 属性を 0 に設定して単独で使用されます。 ただし、選択したスタイルに常にローカルの書式の上書きがある場合は、各スタイルにルールとローカルの上書きを追加する必要があります。 これは、生成されるマッピングファイル内で、次の場所や類似の場所を認識するのが簡単です。

```XML
<paraRule style="Heading 1" local="0" mapTo="p">
   <attributeRules createID="true"/>
</paraRule>
<paraRule style="Heading 1" local="p[Italic|-|-|-|-|-|-|-]" mapTo="p">
   <attributeRules createID="true"/>
</paraRule>
```

上記の例では、「Heading1」という `@style` に 2 つの `paraRule` 要素があります。 必要に応じて `@mapToDoctype` 属性を設定して、同等の `doctypeParaRule` 要素を作成します。

`doctypeParaRule` で使用される属性について以下で説明します。

- `@style`：ソースInDesignドキュメント内のスタイルの名前
- `@local`: [\#id194CG0V005Z](#id194CG0V005Z) を参照してください。
- `@mapToDoctype`：すべての有効な `doctypes` の列挙リストから取得された DITA トピックタイプの名前。

**要素の折り返しルール**

エレメントの折り返し規則では、取り込みドキュメント内のエレメントを、属性値のセットに従って定義済みのエレメントに折り返したり移動したりする方法を定義します。

***`wrap`要素***

これはオプションの要素です。 `wrap` 要素には、ラップまたは移動される要素のリストが表示されます。 折り返しは、通常、一連の要素に共通の親要素を指定する必要がある場合に使用されます。 例えば、複数の `li` 要素が 1 つの `ol` 要素にラップされている場合などです。 `wrap` た、図や表のタイトルなどの要素を移動する場合にも使用できます。

`wrap` で使用される属性について以下で説明します。

- `@element`：要素名の後のプラス記号は、同じ名前を持つ隣接するすべての要素が、`@wrapper` 属性で名前が付けられた要素にラップされることを示しています。
- `@wrapper`：折り返し要素の名前。
- `@context`：特定の要素のラップ方法をより詳細に調整する方法を提供します。 次の例は、一連の `li` 要素を、順序付きリスト `ol` または順不同リスト `ul` のいずれかで、`@context` の値に従ってマッピングする方法を示しています（コンテキストは `paraRule` 要素で定義されます）。

  ```XML
  <wrap elements="li+" context="number" wrapper="ol">
     <attributeRules createID="true"/>
  </wrap>
  <wrap elements="li+" context="bullet" wrapper="ul">
     <attributeRules createID="true"/>
  </wrap>
  ```


次の例は、`title` および `image` 要素から `fig` 要素を作成する方法を示しています：

- `@elements`：リストされた要素をコンマで区切って、`@wrapper` 属性にという名前の要素でラップします。 図のタイトルを画像の下に含めるのが一般的な方法なので、タイトルは `image` の直後の `title` 要素になります。

  次のラップルールです。

  ```XML
  <wrap elements="title, image" context="FigTitle" wrapper="fig">
     <attributeRules createID="true"/>
  </wrap>
  ```

  次の中間 XML を変換します。

  ```XML
  <image href="Links/myImage.png" scale="59">
     <title>IDML2DITA workflow</title>
  ```

  次の有効な DITA 図構造に変換します。

  ```XML
  <fig id="id397504">
     <title>IDML2DITA workflow</title>
     <image href="Links/myImage.png" scale="59">
  </fig>
  ```

- `@wrapper`：折り返し要素の名前。
- `@context`：特定の要素のラップ方法をさらに絞り込む方法を提供します\（コンテキストは `paraRule` の要素で定義されます\）。

次の例は、`title` を `table` に移動する方法を示しています。

- `@elements`:`table` ージの直前または直後に配置された `title` 要素は、`@wrapper` 属性でという名前の要素にラップされます。 XPath スタイルの述語では、title 要素の位置を `[before]` または `[after]` として識別できます。

  例：次のラップルール：

  ```XML
  <wrap elements="title[before]" context="TableTitle" wrapper="table">
     <attributeRules createID="true"/>
  </wrap>
  ```

  次の中間 XML を変換します。

  ```XML
  <title>IDML2DITA workflow</title>
  <table id="id289742" outputclass="BasicTable">
     <tgroup cols="2">
        <colspec colname="0" colwidth="0.7*">
           <colspec colname="1" colwidth="0.3*">
  ```

  この有効な DITA 図構造に適用するには、次の手順を実行します。

  ```XML
  <table id="id289742" outputclass="BasicTable">
     <title>IDML2DITA workflow</title>
     <tgroup cols="2">
        <colspec colname="0" colwidth="0.7*">
           <colspec colname="1" colwidth="0.3*">
  ```

- `@wrapper`：折り返し要素の名前。

- `@context`：特定の要素のラップ方法をさらに絞り込む方法を提供します\（コンテキストは `paraRule` の要素で定義されます\）。


**段落スタイルルール**

`<paragraphStyleRule>` の要素について以下で説明します。

***`paraRule`要素***

`paraRule` 要素は必須です。 すべての段落スタイルのマッピングルールを指定します。 InDesignドキュメントでは、すべてのテキストが段落スタイルのサブ構造内に含まれ、スタイルのない段落も含めて `[No paragraph style]` という名前が付けられます。 角括弧は、組み込みのInDesignスタイル名を示します。

>[!NOTE]
>
> 角括弧は、組み込みのInDesignスタイル名を示します。

`paraRule` で使用される属性について以下で説明します。

- `@style`：ソースInDesignドキュメント内のスタイルの名前
- `@local`: [\#id194CG0V005Z](#id194CG0V005Z) を参照してください。
- `@mapTo`: DITA ターゲット要素の名前。

- `@context`：この属性は、複数のラッパーを選択できる場合に、特定の **ラップ** ルールにリンクするために使用されます。 例：`li` 要素は `ol` または `ul` 要素でラップされる場合があります。 様々なリストタイプを特定するには、特定のスタイル名または `@local` 属性を使用します。これらの属性には、以下の項目が表示されます。
   - `local="p[-|-|-|-|-|b|-|-]"` フィールド 6 の&#39;`b`&#39;が箇条書きリスト項目を示している場合。 この場合、`@context` を&#39;`bullet`&#39;に設定します。
   - `local="p[-|-|-|-|-|n|-|-]"` ここで、フィールド 6 の「`n`」は、番号付きリスト項目を示します。 この場合、`@context` を&#39;`number`&#39;に設定します。

- `@commentOut`：この属性を使用すると、ターゲット要素を XML コメントでラップできるので、情報は失われませんが、ユーザーが手動で処理できます。 これは、ソースコンテンツを DITA 構造規則に強制的に準拠させることができない場合に役立ちます。

- `@refactor`：このオプションの属性には、次の 2 つの値の選択肢があります。

- `unwrap`：一致した要素は、コンテンツを保持したまま削除されます。

- `drop`：一致した要素とそのすべてのコンテンツが削除されます。


**文字スタイルのルール**

`charRule` の要素について以下で説明します。

>[!NOTE]
>
> 組み込みの文字スタイルは前処理中に削除されるので、`local="0"` 成時 `[No character style]` はマッピングは行われません。

***`charRule`要素***

これはオプションの要素です。

これらは、すべての文字スタイルのマッピングルールです。 InDesign文書では、すべてのテキストが文字スタイルの子要素内に含まれます。

`charRule` で使用される属性について以下で説明します。

- `@style`：ソースInDesignドキュメント内のスタイルの名前
- `@local`: [\#id194CG0V005Z](#id194CG0V005Z) を参照してください。
- `@mapTo`: DITA ターゲット要素の名前。
- `@refactor`：このオプションの属性には、次の 2 つの値の選択肢があります。
   - `unwrap`：一致した要素は、コンテンツを保持したまま削除されます。

   - `drop`：一致した要素とそのすべてのコンテンツが削除されます。


**属性ルール**

この要素は、次の要素コンテキストの子にすることができます。

- `mapDoctypeParaRule`
- `mapDoctypeElemRule`
- `doctypeParaRule`
- `doctypeElemRule`
- `paraRule`
- `charRule`
- `elementRule`

属性ルールの目的は、一致した要素の属性を管理することです。

コンテキストに応じて、`attributeRules` 要素では次の属性を使用できます。

- `@createID`：一致する要素の一意の ID を生成します。 使用できる値は `true` または `false` です。 すべてのコンテキストで使用できます。
- `@copyAll`：構造化ソースファイルの場合にのみ、ソース XML コンテンツからすべての属性をコピーします。 指定できる値は、`true` または `false` です。 コンテキスト `mapDoctypeParaRule`、`mapDoctypeElemRule`、`doctypeElemRule`、`elementRule` で使用できます。


`attributeRules` で使用される属性について以下で説明します。

>[!NOTE]
>
> この要素には、複数の子要素を含めることができます。

- `addNew`：一致した要素に新しい属性を追加します。 すべてのコンテキストで使用できます。 次の 2 つの属性があります。
   - `@name`：正しい XML 名である必要があります。できれば DITA コンテキストで有効です。
   - `@value`: リテラルテキストまたは単純な XPath 式を指定できます。
- `copyAtt`：単一の属性をターゲットにコピーします。コピー中に名前を変更することもできます。 値は変更されません。 コンテキスト `mapDoctypeParaRule`、`mapDoctypeElemRule`、`doctypeElemRule`、`elementRule` で使用できます。 この要素が存在する場合、`@copyAllAtts` の値は `false` と見なされます。 次の 2 つの属性があります。
   - `@name`：ソース XML 要素に存在する属性の名前である必要があります。
   - `@mapTo`：正しい XML 名である必要があります。できれば DITA コンテキストで有効です。

**ローカル書式設定コード**

InDesign文書では、段落スタイルおよび文字スタイルに対して数百種類の異なる書式の上書きが可能です。 これらのプロパティのほとんどは、コンバージョンプロセスで役に立つ役割を提供しません。 ただし、ドキュメントのセマンティクスに影響を与え、変換プロセスに影響を与える必要がある書式設定機能の中核セットを特定しました。

`@local` 属性は、特別な区切り形式として表示され、8 つのフィールドと、形式の上書きのタイプを示すプレフィックスが提供されます。 書式設定コードのフィールドを次に示します。

- パラ スタイルのローカル オーバーライドの場合は接頭辞 **p**、文字スタイルのローカル オーバーライドの場合は接頭辞 **c** です。
- **フォントスタイル** 姓であり、「***Bold Condensed Italic***」などのプロパティです。
- **フォントサイズ** （ポイント）。
- **文字の位置** 上付きまたは下付き文字。
- アンダースコアの場合は **下**。
- 打ち消し線に対する **ストライク**。
- リストタイプを箇条書きまたは番号付きとして識別するための **リストコード** - InDesignで常に使用されるわけではありません。
- **箇条書きコード** ドキュメント内の定義済みの箇条書きタイプをすべて一覧表示します。
- **番号コード** ドキュメント内の定義済みの番号付けスタイルをすべて一覧表示します。

この機能を慎重に使用すると、ローカルフォーマットが失われるのを防ぎ、スタイル設定されたコンテンツから DITA への転送の品質を向上させることができます。 この例は、箇条書きリストの 16 pt の斜体テキスト `p[Italic|16|-|-|-|b|-|-]` を意味するように解決できます。

**構造マッピング**

構造マッピングファイルは、すべてのソース要素と関連する属性タイプを一覧表示する単純な構造を持つ、スタイルマッピングファイルに似ています。 使用するマッピングファイルのバージョンを記録するために、`@map_date` と `@map_version` の 2 つの属性が提供されています。

**ドキュメントタイプ**

`doctypes` 要素には、サポートされる DITA マップとトピックマッピングが一覧表示されます。

**ドキュメントタイプ要素ルールのマッピング**

`mapDoctypeElemRule` 要素は必須です。 ソース XML のルート要素は常に DITA マップのルート `map` 要素にマップされるので、この要素の属性は編集できません。

**要素の折り返しルール**

**`elementRules`element** すべての要素が一覧表示されます。

**`elementRule`要素** `elementRule` 要素は必須です。 これらは、すべてのソース要素のマッピングルールです。 InDesignドキュメントには非構造化スタイル要素が含まれていますが、「***ハイブリッドモード***」処理が有効になっていない限り、構造化コンテンツでは無視されます。

`elementRule` で使用される属性について以下で説明します。

- `@elementName`：ソースInDesignドキュメント内の要素名

- `@local`: [\#id194CG0V005Z](#id194CG0V005Z) を参照してください。 \（ハイブリッドドキュメントでのみ有用\）

- `@mapTo`: DITA ターゲット要素の名前。

- `@refactor`：このオプションの属性には、次の 2 つの値の選択肢があります。

   - `unwrap`：一致した要素は、コンテンツを保持したまま削除されます。

   - `drop`：一致した要素とそのすべてのコンテンツが削除されます。

- `@context`：この属性は、複数のラッパーを選択できる場合に、特定のラップルールにリンクするために使用されます。 例：`li` 要素は `ol` または `ul` 要素でラップされる場合があります。

- `@commentOut`：この属性を使用すると、ターゲット要素を XML コメントでラップできるので、情報は失われませんが、ユーザーが手動で処理できます。 これは、ソースコンテンツを DITA 構造規則に強制的に準拠させることができない場合に役立ちます。


## AEM Guidesのトラブルシューティング

AEM Guidesをインストールして設定したら、問題のトラブルシューティングを行うことができます。

## 参照を検証

指定されたスクリプトを実行して、参照を検証できます。 これらのスクリプトは、壊れた参照を特定し、パッチを適用したり修正したりするのに役立ちます。

- `/bin/fmdita/validatebtree?operation=validate` – 壊れたコンテンツ参照は報告されますが、修正されません。
- `/bin/fmdita/validatebtree?operation=patch` – 壊れたコンテンツ参照とパッチを一覧表示するか、それらを修正します。

**スクリプトを検証**

製品パッケージで使用可能な validate スクリプトを使用して参照を確認するには、次の手順を実行します。

1. 検証スクリプト \[`/bin/fmdita/validatebtree?operation=validate`\] を実行して、壊れた参照が新たに存在するかどうかを確認します。
1. 検証スクリプトでエラーが報告された場合は、パッチスクリプトを使用してパッチを適用できます。
1. 以下に示す詳細を記録し、必要に応じてカスタマーサクセスチームと共有します。
1. 
   - validate スクリプトで出力されたログ
- 「`/content/fmdita/references`」のパッケージ
- 報告されたシナリオに応じて、その他の必要な詳細

**パッチスクリプト**

製品パッケージで使用可能な patch スクリプトを使用して、壊れた参照にパッチを適用するには、次の手順を実行します。

1. パッチスクリプト `[/bin/fmdita/validatebtree?operation=patch]` を実行して、壊れた参照を修正します。 スクリプトの実行には数分かかり、処理が進むたびにログが出力されます。 実行が完了すると、最後に「`Done`」が出力されます。

   **注意：* ログは、参照用にコピーして保存することをお勧めします。

1. パッチスクリプトが正常に実行されると、次のチェックを実行できます。
1. 
   - 新しいノード「`references_backup_<timestamp>"` が `/content/fmdita` の下に作成されたことを確認します。
- 参照が修正されていることを確認します

**ロガー**

また、次に示すように、このスクリプト実行に対して個別のロガーを作成することもできます。

- クラス「`adobe.fmdita.common.BTreeReferenceValidator`」にロガーを追加
- `DEBUG` に設定

作成されたログファイルは、スクリプトの実行に関連するすべての情報を記録します。これは、ブラウザーからスクリプトをトリガーしながらブラウザーセッションがタイムアウトした場合に役立ちます。
