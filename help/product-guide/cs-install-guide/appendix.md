---
title: 付録
description: InDesign ドキュメントを移行用に準備する方法について説明します
exl-id: 71b09039-b220-45f3-b334-c23f5b09dadc
feature: InDesign File Conversion, Troubleshooting
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 564ee1731be2378744ffd2ed54a2fd423901a0b3
workflow-type: tm+mt
source-wordcount: '2852'
ht-degree: 0%

---

# 付録 {#id195AD0L60Y4}

## AEM Guidesのトラブルシューティング

AEM Guidesをインストールして設定したら、問題をトラブルシューティングできます。

## 参照を検証

指定されたスクリプトを実行して、参照を検証できます。 これらのスクリプトは、壊れた参照を特定し、修正または修正するのに役立ちます。

- `/bin/fmdita/validatebtree?operation=validate` – 壊れたコンテンツ参照を報告しますが、修正はしません。

- `/bin/fmdita/validatebtree?operation=patch` – 壊れたコンテンツ参照とパッチを一覧表示するか、それらを修正します。


**スクリプトの検証**

次の手順を実行して、製品パッケージで使用可能な検証スクリプトを使用して、参照を確認します。

1. 検証スクリプト \[`/bin/fmdita/validatebtree?operation=validate`\]を実行して、新しい壊れた参照がないか確認します。
1. 検証スクリプトでエラーが報告された場合は、パッチスクリプトを使用してパッチを適用できます。
1. 以下の詳細を記録し、必要に応じてカスタマーサクセス部門と共有します。
1. 
   - スクリプトの検証によって出力されたログ
- 「`/content/fmdita/references`」のパッケージ
- 報告されたシナリオに応じて、その他の必要な詳細

**パッチスクリプト**

製品パッケージで使用可能なパッチスクリプトを使用して、破損した参照にパッチを適用するには、次の手順を実行します。

1. パッチスクリプト `[/bin/fmdita/validatebtree?operation=patch]`を実行して、壊れた参照を修正します。 スクリプトの実行には数分かかり、進行状況に応じてログが出力されます。 実行が完了すると、最後に「`Done`」が印刷されます。

>[!NOTE]
>
> 参照目的でログをコピーして保存することをお勧めします。

1. パッチスクリプトが正常に実行されると、次のチェックを実行できます。
1. 
   - 新しいノード「`references_backup_<timestamp>"`」が`/content/fmdita`の下に作成されたことを確認します
- 参照が修正されていることを確認します

**ロガー**

以下に示す詳細に従って、このスクリプト実行に対して個別のロガーを作成することもできます。

- クラス「`adobe.fmdita.common.BTreeReferenceValidator`」にロガーを追加
- `DEBUG`に設定

作成されたログファイルには、スクリプト実行に関連するすべての情報が記録されます。これは、ブラウザーからスクリプトをトリガーする際に、ブラウザーセッションのタイムアウトが発生した場合に役立ちます。

## 変換するInDesign ファイルの準備 {#id195DBF0045Z}

InDesignには、魅力的で複雑なドキュメントを作成するための豊富な機能が用意されています。 多くの場合、これは、ドキュメントのさまざまな部分がページ上に視覚的に配置されますが、それらのテキストフレーム間のフローを提供しようとしません。 テキストフレームの&#39;*読み上げ順序*&#39;が定義されていない場合、IDML ファイルには、意味のある順序に従わない可能性のあるストーリーが含まれます。 最終的な結果は、段落、表、グラフィックがランダムな順序で並んだ1つ以上のDITA トピックになります。

DITA エディターでDITA コンテンツを適切な順序に変更することは可能ですが、IDML ファイルを作成する前にInDesign ファイルを修正する方がはるかに簡単です。 これは、ソースドキュメントの外観を変更せずに行うことができます。 また、読み上げ順序を適切に定義することで、ソースドキュメントをアクセス可能にするというメリットもあります。

***テキスト枠をスレッド化***

InDesignでは、1つのフレームを別のフレームにリンクするプロセスに&#x200B;*&#39;スレッド&#39;*&#x200B;という用語を使用しています。 テキスト枠のスレッド化について詳しくは、InDesign ドキュメントの&#x200B;*[テキストのスレッド ](https://helpx.adobe.com/in/indesign/using/threading-text.html)*&#x200B;のトピックを参照してください。

***重なり合うフレーム***

一部のInDesign ドキュメントでは、レイアウト上の理由から、スレッドなし重なりフレームを使用しています。 このコンテンツをメインスレッドに統合するのは非常に難しいかもしれません。 最良のオプションは、DITA環境で結果を編集することです。

***InDesign ストーリー***

InDesign ドキュメント内の各スレッド化されたコンテンツのフローは、&#39;*ストーリー*&#39;と呼ばれます。 最適な結果を得るには、ストーリーの数を制限することをお勧めします。 ただし、DITA出力で必要とされないドキュメントの一部が存在する場合があります。 例えば、ページのフッターが必要になることはほとんどありませんが、慎重に処理しなければ、トピックの中央に表示されることがあります。

文書内で必要のないテキストを除外する最も簡単な方法は、不要なコンテンツにのみ使用される特殊な&#x200B;*段落タグ*&#x200B;を文書に与えることです。 例えば、フッターに&#x200B;*\[基本段落\]*&#x200B;を再利用する代わりに、専用の&#x200B;*フッター* タグを作成します。 次に、MapStyle ファイルで、*フッター*&#x200B;段落を次のようにドロップするように設定するだけです。

```
<paraRule style="Footer" local="0" refactor="drop">
   <attributeRules createID="false"/>
</paraRule>
```

***DITA doctypesへのマッピング***

ソースドキュメントには、トピックの先頭をマークできる段落スタイルまたはエレメントが少なくとも1つ含まれていることが重要です。 ドキュメントでは、*Heading1*&#x200B;をドキュメント内の最上位タイトルの名前として使用するのが一般的です。 その後、そのスタイルから特定のDITA ドックタイプへのマッピングを作成できます。 文書が適切に整理され、*見出し1*&#x200B;の使用が常に続く場合は、良好な結果が得られます。

***複数のDITA doctypes***

*見出し1*&#x200B;の段落の一部を異なるDITA ドックタイプに変換する必要がある場合は、InDesignで段落スタイルを複製します。 これらのスタイルには、*Heading1\_genTask*&#x200B;や&#x200B;*Heading1\_troubleshooting*&#x200B;など、わかりやすい名前を付けます。 次に、次に示すようにmapStyle ファイルを設定します。

```
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

***構造化InDesign ドキュメント***

InDesignはXMLと緩い関係にあります。 ドキュメントにはXML DTDを含めることができ、メインストーリーはそのDTDに対して有効な場合がありますが、一部のコンテンツはXMLですが、DTDが含まれていないハイブリッド文書を作成することもできます。 これらは、DITAへの変換を成功させるための望ましくないケースです。 文書にXML部分が含まれている場合は、出力をXMLに保存し、結果が許容できるかどうかを確認します。 そうでない場合、DITA コンテンツには無効なコンテンツも含まれるか、完全に失敗する可能性があります。

***表の書式設定***

InDesignの表書式ルールからDITAの同等の表書式への変換は複雑なプロセスです。 これは、ソースファイルで利用できる豊富な書式設定機能と、DITAで使用されるOasis \（CALS\） テーブルモデルで提供される基本的なオプションが原因です。 垂直方向と水平方向のテキストの整列が提供され、同様の結果が得られますが、両端揃えテキストは常にテキストの向きに合わせて揃えられます。また、InDesignでは左揃えテキストと右揃えテキストを使用できます。

InDesignの列区切り記号と行区切り記号の処理は、Oasis テーブルモデルの基本的なオプションよりもはるかに優れています。 InDesignには、境界線の種類\（実線またはパターン\）、境界線の太さ、境界線の色、境界線の色合い、境界線の間隔の色および境界線の間隔の色合いという4つのセルの境界線が用意されています。 これらはすべて、各セルの右下の境界線にマッピングする必要があります\（entry element\）唯一の選択肢は0または1です – 境界線を非表示にするか、境界線を表示します。

InDesignの境界線は、次のレベルで適用できます。

- 表スタイル
- セルスタイル
- 各セルのローカルの上書き

InDesignからDITAへの変換プロセスでは、次のように境界線の判定が適用されます。

- 縦組みルールの場合、テーブル スタイルは`colspec/@colsep`属性にマッピングされます。 水平方向のルールは`row/@rowsep`属性にマッピングされます。 どちらの場合も、境界線が定義されていない場合、属性は作成されません。
- セルスタイルは`entry/@colsep`および`entry/@rowsep`属性にマッピングされます。 これらの値は、派生した表スタイルの境界線を上書きします。
- ローカルオーバーライドでは、書式をセルに直接適用し、表スタイルとセルスタイルをオーバーライドします。

***代替パターン***

InDesignの表スタイルを使用すると、列とセルの罫線を交互のパターンに従わせることができます。 この機能は変換でサポートされていますが、1つのパターングループが罫線\（1\）を表示するようにマップされ、他のパターングループマップが罫線\（0\）を非表示にする場合にのみ、結果は明らかになります。

## InDesignからDITAへの移行用のマッピングファイルの準備 {#id194AF0003HT}

正しいDITA変換には、ソースドキュメントの内容に一致するマッピングファイルが必要です。 非構造化InDesign文書の場合、使用可能なすべての段落スタイルと文字スタイルをマッピングする必要があります。 XML構造化InDesign ドキュメントの場合、関連するDTD内のすべてのエレメントをマッピングする必要があります。

非構造化InDesign ドキュメントと構造化ドキュメントのマッピングファイルは異なります。 これは、非構造化ソースコンテンツをDITAに変換するための複雑な処理要件が原因です。

マッピングファイルのサンプルを以下に示します。

```
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

マッピングファイルは、すべてのソース段落スタイルと文字スタイルコードをリストするシンプルな構造のXML ファイルです。 ファイルの内容は次のとおりです。

**スタイルマッピング**

`styleMap`要素では、マッピングファイルのバージョンを記録するために、2つのオプション属性（`@map_date`と`@map_version`）を指定できます。

**ドキュメントタイプ**

`doctypes`要素には、サポートされているDITA マップとトピックマッピングが一覧表示されます。

**ドキュメントタイプの段落ルールをマップ**

`mapDoctypeParaRule`要素は必須です。 ソース XMLのルート要素は常にDITA マップのルート `map`要素にマッピングされるため、この要素の属性を編集することはできません。

**ドキュメントタイプの段落ルール**

`doctypeParaRule`要素は必須です。 これにより、コンバージョンプロセスで、新しいトピックの始まりを特定することができます。 通常、`@style`属性は単独で使用され、`@local`属性は0に設定されます。 ただし、選択したスタイルに常にローカルの書式設定の上書きがある場合は、各スタイルのルールとローカルの上書きを追加する必要があります。 これは、生成されたマッピングファイルで簡単に認識でき、次のようなことが見つかります。

```
<paraRule style="Heading 1" local="0" mapTo="p">
   <attributeRules createID="true"/>
</paraRule>
<paraRule style="Heading 1" local="p[Italic|-|-|-|-|-|-|-]" mapTo="p">
   <attributeRules createID="true"/>
</paraRule>
```

上記の例では、`paraRule` = &quot;Heading1&quot;に2つの`@style`要素があります。 必要に応じて、`doctypeParaRule`属性が設定された同等の`@mapToDoctype`要素を作成します。

`doctypeParaRule`で使用される属性は次のとおりです。

- `@style`: ソース InDesign ドキュメント内のスタイルの名前。
- `@local`: [\#id194CG0V005Z](#id194CG0V005Z)を参照してください。
- `@mapToDoctype`：有効なすべての`doctypes`の列挙リストからのDITA トピックタイプの名前。

**要素のラッピングルール**

エレメントのラッピングルールは、一連の属性値に従って、入力ドキュメント内のエレメントを定義済みのエレメントにラップまたは移動する方法を定義します。

***`wrap`要素***

これはオプションの要素です。 `wrap`要素には、ラップまたは移動される要素が一覧表示されます。 ラッピングは通常、一連の要素に共通の親要素を与える必要がある場合に使用されます。 例えば、複数の`li`要素が`ol`要素にラップされています。 さらに、`wrap`は、図や表のタイトルなどの要素の移動に使用できます。

`wrap`で使用される属性は次のとおりです。

- `@element`：要素名の後にプラス記号を付けると、同じ名前のすべての隣接する要素が、`@wrapper`属性にという名前の要素で折り返されます。
- `@wrapper`: ラッピング要素の名前。
- `@context`：特定の要素のラップ方法をさらに絞り込む方法を提供します。 次の例は、順序付きリスト `li`または順序なしリスト `ol`の一連の`ul`要素を、`@context`値\（コンテキストは`paraRule`要素\）に従ってマッピングする方法を示しています。

  ```
  <wrap elements="li+" context="number" wrapper="ol">
     <attributeRules createID="true"/>
  </wrap>
  <wrap elements="li+" context="bullet" wrapper="ul">
     <attributeRules createID="true"/>
  </wrap>
  ```


次の例は、`fig`と`title`要素から`image`要素を作成する方法を示しています。

- `@elements`: コンマで区切られ、リストされた要素は、`@wrapper`属性にという名前の要素でラップされます。 画像の下に図のタイトルを含めるという一般的な方法により、タイトルは`title`の直後の`image`要素になります。

  次のラッピングルール：

  ```
  <wrap elements="title, image" context="FigTitle" wrapper="fig">
     <attributeRules createID="true"/>
  </wrap>
  ```

  次の中間XMLを変換します。

  ```
  <image href="Links/myImage.png" scale="59">
     <title>IDML2DITA workflow</title>
  ```

  次の有効なDITA図形構造に変更します。

  ```
  <fig id="id397504">
     <title>IDML2DITA workflow</title>
     <image href="Links/myImage.png" scale="59">
  </fig>
  ```

- `@wrapper`: ラッピング要素の名前。
- `@context`：特定の要素のラップ方法をさらに絞り込む方法を提供します\（コンテキストは`paraRule`要素で定義されています\）。

次の例は、`title`を`table`に移動する方法を示しています。

- `@elements`: `title`の直前または直後にある`table`要素は、`@wrapper`属性にという名前の要素でラップされます。 XPath スタイルの述語では、タイトル要素の位置を`[before]`または`[after]`として識別できます。

  例：次のラップ規則：

  ```
  <wrap elements="title[before]" context="TableTitle" wrapper="table">
     <attributeRules createID="true"/>
  </wrap>
  ```

  次の中間XMLを変換します。

  ```
  <title>IDML2DITA workflow</title>
  <table id="id289742" outputclass="BasicTable">
     <tgroup cols="2">
        <colspec colname="0" colwidth="0.7*">
           <colspec colname="1" colwidth="0.3*">
  ```

  この有効なDITA図形構造に次の手順を実行します。

  ```
  <table id="id289742" outputclass="BasicTable">
     <title>IDML2DITA workflow</title>
     <tgroup cols="2">
        <colspec colname="0" colwidth="0.7*">
           <colspec colname="1" colwidth="0.3*">
  ```

- `@wrapper`: ラッピング要素の名前。

- `@context`：特定の要素のラップ方法をさらに絞り込む方法を提供します\（コンテキストは`paraRule`要素で定義されています\）。


**段落スタイルルール**

`paragraphStyleRule`要素について次に説明します。

** `paraRule`要素**

`paraRule`要素は必須です。 すべての段落スタイルのマッピングルールを指定します。 InDesign ドキュメントでは、すべてのテキストが段落スタイルのサブ構造内に含まれます。スタイルのない段落も`\[No paragraph style\]`という名前になります。 正方形の角かっこ、これらは組み込みのInDesign スタイル名を示します。

>[!NOTE]
>
> 角括弧は、組み込みのInDesign スタイル名を示します。

`paraRule`で使用される属性は次のとおりです。

- `@style`: ソース InDesign ドキュメント内のスタイルの名前。
- `@local`: [\#id194CG0V005Z](#id194CG0V005Z)を参照してください。
- `@mapTo`: DITA ターゲット要素の名前。

- `@context`：この属性は、複数のラッパーの選択肢が使用可能な場合に、特定の&#x200B;**ラップ** ルールにリンクするために使用されます。 例：`li`要素は、`ol`要素または`ul`要素のいずれかにラップできます。 異なるリストタイプを識別するには、特定のスタイル名または`@local`属性を使用して、次を表示できます。
   - `local="p[-|-|-|-|-|b|-|-]"` フィールド 6の&#39;`b`&#39;は、箇条書きリスト項目を示します。 この場合、`@context`を&#39;`bullet`&#39;に設定します。
   - `local="p[-|-|-|-|-|n|-|-]"` フィールド 6の&#39;`n`&#39;は番号付きリスト項目を示します。 この場合、`@context`を&#39;`number`&#39;に設定します。

- `@commentOut`：この属性を使用すると、XML コメント内のターゲット要素の折り返しが可能になり、情報が失われることはなく、ユーザーが手動で処理できるようになります。 これは、ソースコンテンツがDITA構造ルールに強制的に準拠できない場合に便利です。

- `@refactor`：このオプション属性には、次の2つの値の選択肢があります。

- `unwrap`：一致した要素は、そのコンテンツを保持している間に削除されます。

- `drop`：一致した要素とそのすべてのコンテンツが削除されます。


**文字スタイルルール**

`charRule`要素について次に説明します。

>[!NOTE]
>
> 事前処理中に削除されるので、`[No character style]`の場合、組み込み文字スタイル `local="0"`のマッピングは行われません。

***`charRule`要素***

これはオプションの要素です。

すべての文字スタイルのマッピングルールです。 InDesign ドキュメントでは、すべてのテキストが文字スタイルの子エレメント内に含まれます。

`charRule`で使用される属性は次のとおりです。

- `@style`: ソース InDesign ドキュメント内のスタイルの名前。
- `@local`: [\#id194CG0V005Z](#id194CG0V005Z)を参照してください。
- `@mapTo`: DITA ターゲット要素の名前。
- `@refactor`：このオプション属性には、次の2つの値の選択肢があります。
   - `unwrap`：一致した要素は、そのコンテンツを保持している間に削除されます。

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

コンテキストに応じて、次の属性を`attributeRules`要素で使用できます。

- `@createID`：一致する要素の一意のIDを生成します。 値`true`または`false`は許可されています。 あらゆるコンテキストで利用可能です。
- `@copyAll`：構造化されたソース ファイルに対してのみ、ソース XML コンテンツからすべての属性をコピーします。 指定できる値は`true`または`false`です。 コンテキスト `mapDoctypeParaRule`、`mapDoctypeElemRule`、`doctypeElemRule`、`elementRule`で使用できます。


`attributeRules`で使用される属性は次のとおりです。

>[!NOTE]
>
> この要素には、複数の子要素を含めることができます。

- `addNew`：一致した要素に新しい属性を追加します。 あらゆるコンテキストで利用可能です。 これには2つの属性があります。
   - `@name`：有効なXML名である必要があります。DITA コンテキストで有効であることが望ましいです。
   - `@value`: リテラルテキストまたは単純なXPath式を指定できます。
- `copyAtt`：必要に応じて、プロセス内で名前を変更しながら、単一の属性をターゲットにコピーします。 値は変更されません。 コンテキスト `mapDoctypeParaRule`、`mapDoctypeElemRule`、`doctypeElemRule`、`elementRule`で使用できます。 この要素が存在する場合、`@copyAllAtts`値は`false`と見なされます。 これには2つの属性があります。
   - `@name`: ソース XML要素に存在する属性の名前である必要があります。
   - `@mapTo`：有効なXML名である必要があります。DITA コンテキストで有効であることが望ましいです。

**ローカルの書式設定コード**

どのInDesign ドキュメントでも、段落スタイルと文字スタイルで数百種類の書式設定を上書きすることができます。 これらのプロパティの多くは、コンバージョンのプロセスで役に立ちません。 ただし、ドキュメントのセマンティクスに影響を与え、変換プロセスに影響を与える必要がある書式設定機能のコアセットを特定しました。

`@local`属性は特殊な区切り形式で表示され、8つのフィールドとプレフィックスが指定され、書式設定の上書きのタイプが表示されます。 書式設定コードフィールドを以下に示します。

- 段落スタイルのローカルオーバーライドのプレフィックス **p**、文字スタイルのローカルオーバーライドのプレフィックス **c**。
- **フォントスタイル**&#x200B;は姓であり、&#39;***Bold Condensed Italic***&#39;などのプロパティです。
- **フォントサイズ** （ポイント）。
- 上付き文字または下付き文字の&#x200B;**文字位置**。
- アンダースコアの&#x200B;**アンダー**。
- **取り消し**&#x200B;で取り消します。
- リストの種類を箇条書きまたは番号付きとして識別するための&#x200B;**リストコード**&#x200B;は、InDesignでは必ずしも使用されません。
- **箇条書きコード**&#x200B;には、文書内のすべての定義済み箇条書きタイプが一覧表示されます。
- **番号コード**&#x200B;には、文書内のすべての定義済み番号付けスタイルが一覧表示されます。

この機能を慎重に使用すると、それ以外の場合は、ローカルフォーマットを失うと、スタイル設定されたコンテンツからDITAへの転送の品質が向上する可能性があります。 この例は、箇条書きリストの斜体16 pt テキストを意味するように解決できます：`p[Italic|16|-|-|-|b|-|-]`。

**構造マッピング**

構造マッピングファイルは、すべてのソース要素と関連する属性タイプを一覧表示するシンプルな構造のスタイルマッピングファイルと似ています。 使用するマッピングファイルのバージョンを記録するために、`@map_date`と`@map_version`の2つの属性が提供されます。

**ドキュメントタイプ**

`doctypes`要素には、サポートされているDITA マップとトピックマッピングが一覧表示されます。

**ドキュメントタイプ要素ルールのマッピング**

`mapDoctypeElemRule`要素は必須です。 ソース XMLのルート要素は常にDITA マップのルート `map`要素にマッピングされるため、この要素の属性を編集することはできません。

**要素のラッピングルール**

[\#id194CG600NY4](#id194CG600NY4)を参照してください。

**`elementRules`要素**

これにはすべての[\#id194CGC00SHS](#id194CGC00SHS)要素が一覧表示されます。

**`elementRule`要素**

`elementRule`要素は必須です。 これがすべてのソース要素のマッピングルールです。 InDesign ドキュメントには非構造化スタイル要素が含まれていますが、&#39;***ハイブリッドモード***&#39;処理が有効になっていない限り、構造化コンテンツでは無視されます。

`elementRule`で使用される属性は次のとおりです。

- `@elementName`: ソース InDesign ドキュメント内のエレメントの名前。

- `@local`: [\#id194CG0V005Z](#id194CG0V005Z)を参照してください。 \（ハイブリッドドキュメントにのみ便利\）。

- `@mapTo`: DITA ターゲット要素の名前。

- `@refactor`：このオプション属性には、次の2つの値の選択肢があります。

   - `unwrap`：一致した要素は、そのコンテンツを保持している間に削除されます。

   - `drop`：一致した要素とそのすべてのコンテンツが削除されます。

- `@context`：この属性は、複数のラッパーの選択肢がある場合に、特定のラッピングルールにリンクするために使用されます。 例：`li`要素は、`ol`要素または`ul`要素のいずれかにラップできます。

- `@commentOut`：この属性を使用すると、XML コメント内のターゲット要素の折り返しが可能になり、情報が失われることはなく、ユーザーが手動で処理できるようになります。 これは、ソースコンテンツがDITA構造ルールに強制的に準拠できない場合に便利です。
