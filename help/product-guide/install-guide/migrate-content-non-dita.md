---
title: DITA 以外のコンテンツの移行
description: DITA 以外のコンテンツを移行する方法
exl-id: 4597d1be-5426-4eba-8490-e42d0e565427
feature: Migration
role: Admin
level: Experienced
source-git-commit: 77756fe76c3d615683dcd62627adfcf18bcbb633
workflow-type: tm+mt
source-wordcount: '2393'
ht-degree: 0%

---

# DITA 以外のコンテンツの移行 {#id181AH0R02HT}

この節では、DITA 以外の文書を DITA 形式に移行する手順を説明します。 AEM Guidesは次のソースから移行できます。

- [Microsoft Word](#id1949B040Z5Z)

- [InDesign ドキュメント](#id195AD0B0K5Z)

- [XHTML](#id1949B04L0Y4)

- [構造化されていないFrameMaker ドキュメント](#id1949B050VUI)

- [その他の構造化文書](#id1949B0590YK)


## Microsoft Word ドキュメントの移行 {#id1949B040Z5Z}

AEM Guidesを使用すると、既存の Word 文書\（`.docx`\）を DITA トピックタイプの文書にマイグレートできます。 入力フォルダと出力フォルダの場所を他のパラメータと共に指定する必要があり、文書が DITA 文書に変換されます。 コンテンツによっては、.dita ファイルと.ditamap ファイルを使用できます。

Word ドキュメントを正常に変換するには、ドキュメントが適切に構造化されている必要があります。 例えば、ドキュメントにはタイトルが必要で、その後に見出し 1、見出し 2 などが必要です。 各見出しには、いくつかのコンテンツが含まれている必要があります。 ドキュメントが適切に構造化されていない場合、プロセスが期待どおりに動作しない可能性があります。

デフォルトでは、AEM Guidesは [Word-to-DITA \（Word2DITA\）変換フレームワーク ](http://www.dita4publishers.org/docs/repo/org.dita4publishers.word2dita/word2dita/word2dita-intro.html) を使用します。 この変換は、[ スタイルからタグへのマッピング ](http://www.dita4publishers.org/docs/repo/org.dita4publishers.word2dita/word2dita/style-to-tag-map-overview.html) 設定ファイルによって異なります。 Word2DITA 変換を正常に使用するには、変換用の Word 文書を準備する際に、次のガイドラインを考慮する必要があります。

>[!NOTE]
>
> デフォルトのスタイルとタグのマッピング設定ファイルを変更する場合は、更新後のスタイルマッピングを確認するガイドラインを更新して使用する必要があります。

- 文書がタイトルで始まっていることを確認します。このタイトルは DITA マップのタイトルにマップされます。 また、タイトルの後には、通常のコンテンツが必要です。

- タイトルの後には、見出し 1、見出し 2 などがあります。 各見出しには、いくつかのコンテンツが含まれている必要があります。 見出しは、新しい概念タイプのトピックに変換されます。 生成されるトピックの階層は、ドキュメントの見出しレベルに従います。例えば、「見出し 1」は「見出し 2」の前、「見出し 2」は「見出し 3」の内容の前になります。

- ドキュメントには、少なくとも 1 つの見出しタイプのコンテンツが必要です。

- グループ化された画像がないことを確認します。 ドキュメントに画像をグループ化している場合は、グループ化を解除します。

- すべてのヘッダーとフッターを削除します。

- 太字、斜体、下線などのインラインスタイルは、`b`、`i`、`u` の各要素に変換されます。

- 順序付きリストと順序なしのリストはすべて、`ol` 要素と `ul` 要素に変換されます。 これは、ネストされたリスト、テーブル内のリスト、メモ、または脚注にも適用されます。

- すべてのハイパーリンクは `xref` に変換されます。

- 変換されたファイルのファイル名は、見出しテキストの後にファイル番号を付けたものになります。 ファイル番号は、ドキュメント内の見出しテキストの位置に基づく連番です。 例えば、見出しテキストが「Sample Heading」で、文書内の 10 番目の見出しである場合、このトピックのファイル名は Sample\_Heading\_10.dita のようになります。


次の手順を実行して、既存の Word 文書を DITA トピックタイプの文書に変換します。

1. AEMにログインし、CRXDE Lite モードを開きます。

1. 次の場所にあるデフォルトの設定ファイルに移動します。

   `/libs/fmdita/config/w2d_io.xml`

1. `config` ノード内に `apps` フォルダーのオーバーレイノードを作成します。

1. `apps` ノードで使用可能な設定ファイルに移動します。

   `/apps/fmdita/config/w2d_io.xml`

   `w2d_io.xml` ファイルには、次の設定可能なパラメーターが含まれています。

   - `inputDir` 要素で、ソース Word ドキュメントを使用できる入力フォルダーの場所を指定します。 例えば、Word ドキュメントが `wordtodita` のフォルダーの `projects` という名前のフォルダーに保存されている場合、その場所は `/content/dam/projects/wordtodita/` のように指定します。

   - `outputDir` エレメントで、出力フォルダの場所を指定するか、変換後の DITA 文書を保存するデフォルトの出力場所を残します。 指定された出力フォルダーが DAM に存在しない場合、変換ワークフローは出力フォルダーを作成します。

   - `createRev` 要素では、変換後の DITA トピックの新しいバージョンを\（`true`\）で作成するかどうかを指定します\（`false`\）。

   - `s2tMap` 要素で、Word 文書スタイルから DITA 要素へのマッピングを含むマップファイルの場所を指定します。 デフォルトのマッピングは、次の場所にあるファイルに保存されます。

     ```XML
     /libs/fmdita/word2dita/word-builtin-styles-style2tagmap.xml
     ```

     >[!NOTE]
     >
     > ファイルの構造とカスタマイズ方法 `word-builtin-styles-style2tagmap.xml` ついて詳しくは、『 [DITA For Publishers ユーザガイド ](http://www.dita4publishers.org/docs/repo/org.dita4publishers.word2dita/word2dita/style-to-tag-map-overview.html) の *スタイルからタグマッピング* を参照してください。

   - props2Propagate エレメントで、DITA マップに渡すプロパティを指定します。 このプロパティは、dc:title,dc:subject,dam:keywords,dam:category などのデフォルトのメタデータを文書メタデータから変換後の DITA アセットに渡すために必要です。

1. `w2d_io.xml` ファイルを保存します。

1. `w2d_io.xml` ファイルで必要なパラメーターを設定したら、AEMにログインしてAssets UI を開きます。

1. 入力フォルダーの場所\（`wordtodita`\）に移動します。

1. ソースの Word ドキュメントをこのフォルダーにアップロードします。 DAM へのコンテンツのアップロードについては、[ 既存の DITA コンテンツのアップロード ](migrate-content-upload-existing-dita-content.md#) を参照してください。


`config` `/config` ブロックを使用すると、変換用の設定の 1 つまたは複数のブロックを定義できます。 変換ワークフローが実行され、DITA トピック形式の最終出力が `outputDir` エレメントで指定した場所に保存されます。

## Adobe InDesign ドキュメントの移行 {#id195AD0B0K5Z}

AEM Guidesでは、InDesign ドキュメントを変換できます。 FrameMakerと同様に、InDesignでも、非構造化ドキュメントと構造化ドキュメントを作成できます。 非構造化ドキュメントでは、段落スタイルと文字スタイルを使用してコンテンツの形式を設定します。 構造化ドキュメントでは、要素と、それに対応する属性を使用します。

変換プロセスでは、段落および文字スタイル形式を関連する DITA エレメントにマッピングする必要があります。 同様に、構造化文書の場合、マッピングファイルには、InDesignのエレメントと属性が DITA エレメントと属性に 1 対 1 でマッピングされます。

変換プロセスには、バックエンドの次のアクションが含まれます。

- *InDesign Markup Language* \（IDML\） ファイルが作業ディレクトリに展開されています。
- designmap.xml ファイルが読み取られ、個々のInDesign ストーリーが検索されます。
- すべてのストーリーは単一の XML インスタンスに結合され、「空の」ストーリーは破棄されます。
- すべての埋め込みグラフィックが書き出されます。
- 表やグラフィックなどの標準構造の DITA 形式への事前変換。
- マッピングファイルに基づいて最終出力へのスタイルまたは構造マッピング。
- 個々の DITA トピックと DITA マップファイルの作成と検証。
- 一時ファイルの削除。

大まかに言えば、変換プロセスでは [ 変換用のInDesign ファイルの準備 ](appendix.md#id195DBF0045Z) および [InDesignから DITA への移行用のマッピングファイルの準備 ](appendix.md#id194AF0003HT) を行う必要があります。その後、変換プロセスを実行するための手順に従う必要があります。

次の手順を実行して、既存のInDesign文書を DITA トピック型文書に変換します。

1. AEMにログインし、CRXDE Lite モードを開きます。

1. 次の場所にあるデフォルトの設定ファイルに移動します。

   `/libs/fmdita/config/idml2dita_io.xml`

1. 必要に応じてカスタム設定を作成するには、`config` フォルダーのオーバーレイノードを `apps` ノード内に作成します。

1. 以下のファイルまたはフォルダーを `libs` フォルダーから apps フォルダーにコピーします。

   - `/fmdita/config/idml2dita_io.xml`
   - `/fmdita/idml2dita/config`
   - `/fmdita/idml2dita/xsl`

1. `apps` ノードで使用可能な設定ファイルに移動します。

   `/apps/fmdita/config/idml2dita_io.xml`

1. `idml12dita` ファイル内の `idml2dita_io.xml` フォルダーにある設定のマッピングを追加します。
1. ファイルに次のプロパティ `idml2dita_io.xml` 追加します。

   ```
   <entry key="idml2DitaConfig">/apps/fmdita/idml2dita/config</entry>
   
   <entry key="idml2DitaXsl">/apps/fmdita/idml2dita/xsl</entry>
   ```

`idml2dita_io.xml` ファイルで次のパラメーターを設定します。

- `inputDir` 要素で、ソース InDesign ドキュメントを使用できる入力フォルダーの場所を指定します。 例えば、InDesign ドキュメントが `indesigntodita` のフォルダー内の `projects` という名前のフォルダーに保存されている場合、その場所は `/content/dam/idmlfiles/indesigntodita/` のように指定します。

- `outputDir` エレメントで、出力フォルダの場所を指定するか、変換後の DITA 文書を保存するデフォルトの出力場所を残します。 指定された出力フォルダーが DAM に存在しない場合、変換ワークフローは出力フォルダーを作成します。

- `mapStyle` エレメントで、InDesign文書スタイルの DITA エレメントへのマッピングを含むマップファイルの場所を指定します。 デフォルトのマッピングは、次の場所にあるファイルに保存されます。

```XML
    /stmap.adobeidml.xml
```

>[!NOTE]
>
> ファイルの構造とカスタマイズ方法 `stmap.adobeidml.xml` ついて詳しくは、[ 付録 ](appendix.md#id194AF0003HT) の「InDesignから DITA へのマイグレーション用のマッピングファイルを準備する *の節を参照してください*。

1. `idml2dita_io.xml` ファイルを保存します。

1. `idml2dita_io.xml` ファイルで必要なパラメーターを設定したら、AEMにログインしてAssets UI を開きます。

1. 入力フォルダーの場所\（`indesigntodita`\）に移動します。

1. ソース InDesign ドキュメントをこのフォルダーにアップロードします。 DAM へのコンテンツのアップロードについては、[ 既存の DITA コンテンツのアップロード ](migrate-content-upload-existing-dita-content.md#) を参照してください。


## XHTML ドキュメントの移行 {#id1949B04L0Y4}

AEM Guidesを使用すると、既存の XHTML 文書を DITA トピックタイプの文書に変換できます。 入力フォルダと出力フォルダの場所を他のパラメータと共に指定する必要があり、文書は DITA 形式に変換されます。 構造化HTML ドキュメントの変換には、次の 2 つの方法を使用できます。

- すべてのドキュメントを入力フォルダーにアップロードする
- すべてのドキュメントの ZIP をメディアファイルと共に作成し、入力フォルダーにアップロードします。 この方法は、通常、相互にリンクしている一連のHTML ファイルに使用され、目次\（index.html\）があります。 index.html ファイルには、セット内のすべてのHTML ファイルへのリンクが含まれています。

すべてのファイルを個別にアップロードする場合でも、ZIP にバンドルする場合でも、変換プロセスによって、HTML ファイルと結果の DITA ファイルとの間で 1 対 1 のマッピングが作成されます。 つまり、入力フォルダ内の.html ファイルごとに.dita ファイルが 1 つ作成されます。

ドキュメントを ZIP ファイルでアップロードする際は、次の点を考慮する必要があります。

- 参照されるトピックはすべて ZIP ファイル内に配置する必要があります。

- 参照されるすべてのメディア ファイルは、相対リンクを使用してトピック ファイル内で参照する必要があります。

- index.html ファイルを作成し、目次に追加するトピックへのリンクを追加します。 この index.html ファイルは、DITA マップファイルの作成に使用されます。 index.html ファイルでは、次のコード例に示すように、ネストされたトピックのリストを作成することもできます。

  ```XML
  <?xml version="1.0" encoding="UTF-8"?>
  <html
  xmlns="http://www.w3.org/1999/xhtml">
      <head>
          <title>Sample Index File</title>
      </head>
      <body>
          <h1>Sample Index</h1>
          <div class="content">
              <ul class="book">
                  <li class="topicref">
                      <a href="Topic1.html">Topic 1</a>
                      <ul class="book">
                          <li class="topicref">
                              <a href="Topic1-1.html">Topic 1.1</a>
                          </li>
                          <li class="topicref">
                              <a href="Topic1-2.html">Topic 1.2</a>
                          </li>
                      </ul>
                  </li>
                  <li class="topicref">
                      <a href="Topic2.html">Topic 2</a>
                  </li>
              </ul>
          </div>
      </body>
  </html>
  ```

  すべての `ul` タグの `class` 属性を `book` に設定する必要があります。 同様に、すべての `li` タグの `class` を `topicref` に設定する必要があります。

- インラインスタイルを使用する場合は、XHTML ファイル内でインラインスタイルを CSS ベースのスタイルクラスに変換します。 次に、スタイル属性マッピングを使用して、これらのクラスベースのスタイルを、変換後の DITA ファイル内の DITA `outputclass` 属性に変換します。

  これらの DITA ファイルからHTMLまたはAEM Site 出力を生成する際に、生成されたHTMLまたはAEM Site にスタイルクラスを適用してソースのHTML コンテンツと一致させるために、`outputclass` 属性を使用できます。


ZIP ファイルを作成する際の考慮事項とは別に、XHTML ドキュメントも適切に構造化されている必要があります。 例えば、ドキュメントには *タイトル*、その後に *見出し 1*、*見出し 2* などが続く必要があります。 各見出しには、いくつかのコンテンツが含まれている必要があります。 ドキュメントが適切に構造化されていない場合、移行プロセスが期待どおりに動作しない可能性があります。

既存の XHTML 文書を DITA トピックに変換するには、次の手順を実行します。

1. AEMにログインし、CRXDE Lite モードを開きます。

1. 次の場所にあるデフォルトの設定ファイルに移動します。

   `/libs/fmdita/config/h2d_io.xml`

1. `config` ノード内に `apps` フォルダーのオーバーレイノードを作成します。

1. `apps` ノードで使用可能な設定ファイルに移動します。

   `/apps/fmdita/config/h2d_io.xml`

   `h2d_io.xml` ファイルには、次の設定可能なパラメーターが含まれています。

   - `inputDir` 要素で、ソース XHTML ドキュメントを使用できる入力フォルダーの場所を指定します。 例えば、XHTML ドキュメントが `xhtmltodita` のフォルダー内の `projects` という名前のフォルダーに保存されている場合、その場所は `/content/dam/projects/xhtmltodita/` のように指定します。

   - `outputDir` 要素で、出力フォルダーの場所を指定するか、デフォルトの出力場所のままにします。 指定された出力フォルダーが DAM に存在しない場合、変換ワークフローは出力フォルダーを作成します。

   - `createRev` 要素では、変換後の DITA トピックの新しいバージョンを\（`true`\）で作成するかどうかを指定します\（`false`\）。

1. `h2d_io.xml` ファイルを保存します。

1. `h2d_io.xml` ファイルで必要なパラメーターを設定したら、AEMにログインしてAssets UI を開きます。

1. *\（オプション\）* 変換後のドキュメントに関連リンクセクションを追加することもできます。 この機能を有効にするには、次の手順を実行します。

   >[!NOTE]
   >
   > デフォルトでは、変換後のドキュメントに関連リンクセクションは作成されません。

   1. 次の場所にある h2d.xsl ファイルに移動します。

      /libs/fmdita/html2dita/

   2. 次のパラメーターを検索します。

      `<xsl:param name="generate-related-links" select="false()"/>`

   3. 上記のパラメーターの値を `true()` に設定します。
   4. ファイルを保存して閉じます。
1. 入力フォルダーの場所\（`xhtmltodita`\）に移動します。

1. ソース XHTML ドキュメントをこのフォルダーにアップロードします。 DAM へのコンテンツのアップロードについては、[ 既存の DITA コンテンツのアップロード ](migrate-content-upload-existing-dita-content.md#) を参照してください。


`<config> </config>` ブロックを使用すると、変換用の設定の 1 つまたは複数のブロックを定義できます。 変換ワークフローが実行され、DITA トピック形式の最終出力が `outputDir` エレメントで指定した場所に保存されます。

## 非構造化FrameMaker ドキュメントの移行 {#id1949B050VUI}

AEM Guidesでは、構造化されていないAdobe FrameMaker コンテンツ（.fm と.book）の構造化された DITA への移行をサポートしています。 このプロセスでは、テンプレートベースのアプローチを使用して既存のコンテンツを評価し、コンバージョンテーブルを通じてFrameMaker スタイルを DITA にマッピングすることに重点を置いています。 変換後は、構造化コンテンツを編集および検証し、出力のカスタマイズをサポートしながら、PDFやモバイル対応のHTML5 などの形式に公開できます。 詳しくは、[Adobe FrameMakerで技術文書を非構造化から DITA に移行する ](https://migrate-from-unstructured-to-dita-step-by-step-guide.meetus.adobeevents.com/) を参照してください。

<!-- Deprecated information -
 //The first step is to create style mappings using FrameMaker and save those settings in a .sts file. Next, if you are using custom DITA, then you can map your custom elements with the source FrameMaker formats in the `ditaElems.xml` file. For example, if you have created a custom element named `impnote` to handle all important notes, then you can define this custom element in the `ditaElems.xml` file. Once this custom element is defined, AEM Guides would not raise an error while converting FrameMaker document containing `impnote` element.

Also, If you want to specify some additional attributes with your custom or valid DITA element, you can define those in the style2attrMap.xml file. For example, you can specify the `type` attribute with the value of `important` to be passed on with the `impnote` element. This additional information can be specified in the style2attrMap.xml file.

In addition to specifying

To convert your existing unstructured FrameMaker documents into DITA format, perform the following steps:

1.  Create style mappings in FrameMaker and save those settings in a .sts file.

1.  Log into AEM and open the CRXDE Lite mode.

1.  If you have custom DITA elements, define those in the `ditaElems.xml` file available at the following location:

    `/libs/fmdita/config/ditaElems.xml`

1.  Create an overlay node of the `config` folder within the `apps` node.

1.  Navigate to the configuration file available in the `apps` node:

    `/apps/fmdita/config/ditaElems.xml`

    The `ditaElems.xml` file contains a single configurable parameter:

    -   In the `elem` parameter, specify the name of the custom element that you want to use in your converted DITA documents. This element would be passed on as is in the generated DITA documents.

1.  If you want to specify additional attributes, define those in the `style2attrMap.xml` file available at the following location:

    `/libs/fmdita/config/style2attrMap.xml`

1.  Create an overlay node of the `config` folder within the `apps` node.

1.  Navigate to the configuration file available in the `apps` node:

    `/apps/fmdita/config/style2attrMap.xml`

    The `style2attrMap.xml` file contains the following configurable parameters:

    -   In the `fmStyle` parameter, specify the source format used in the FrameMaker document that you want to map.

    -   In the`ditaAttr` element, specify the DITA attribute that you want to map with the source format.

    -   In the `ditaVal` element, specify the value for the mapped attribute. If you don't have any value, you can leave this entry blank.

1.  Save the `style2attrMap.xml` file.

1. After configuring the required parameters in the `style2attrMap.xml` file, log into AEM and open the Assets UI.

1. Navigate to and click on the FrameMaker document that you want to convert.

    The DITA map console appears showing the list of Output Presets available to generate output.

1. Select DITA output format and configure the required parameters.

    >[!NOTE]
    >
    > You must use the same settings file \(.sts\) that you created in FrameMaker. Also, specify the Settings Name and Destination Path.

1. Click the **Generate** icon to start the output generation process.


Using the `<attrMap> </attrMap>` block, you can define one or multiple blocks of configurations for conversion. Depending on the content, you could have a .dita file and a .ditamap file as the converted files.

-->

## 他の構造化文書を移行する {#id1949B0590YK}

AEM Guidesを使用すると、既存の構造化文書を有効な DITA 文書に変換できます。 入力および出力フォルダの場所、変換ファイルの場所、最終出力を保存する拡張子、およびドキュメントの新しいバージョンが必要かどうかを指定する必要があります。

既存の構造化文書を DITA 形式に変換するには、次の手順を実行します。

1. AEMにログインし、CRXDE Lite モードを開きます。

1. 次の場所にあるデフォルトの設定ファイルに移動します。

   `/libs/fmdita/config/XSLConfig.xml`

1. `config` ノード内に `apps` フォルダーのオーバーレイノードを作成します。

1. `apps` ノードで使用可能な設定ファイルに移動します。

   `/apps/fmdita/config/XSLConfig.xml`

   `XSLConfig.xml` ファイルには、次の設定可能なパラメーターが含まれています。

   - `inputDir` 要素で、ソース構造化ドキュメントを使用できる入力フォルダーの場所を指定します。 例えば、構造化ドキュメントがフォルダー内の `xsltodita` という名前のフォルダーに格納されてい `projects` 場合は、`/content/dam/projects/xsltodita/` のように場所を指定します。

   - `outputDir` 要素で、出力フォルダーの場所を指定するか、デフォルトの出力場所のままにします。 指定された出力フォルダーが DAM に存在しない場合、変換ワークフローは出力フォルダーを作成します。

   - `xslFolder` 要素で、XSL 変換ファイルが保存されるフォルダーの場所を指定します。

   - ``xslPath`` 要素で、変換プロセスを開始するために使用されるプライマリ .XSL ファイルの場所を指定します。

   - ``outputExt`` 要素で、変換ストリームから作成された最終的な出力ファイルのファイル拡張子を指定します。

   - `createRev` 要素では、変換後の DITA トピックの新しいバージョンを\（`true`\）で作成するかどうかを指定します\（`false`\）。

1. `XSLConfig.xml` ファイルを保存します。

1. `XSLConfig.xml` ファイルで必要なパラメーターを設定したら、AEMにログインしてAssets UI を開きます。

1. 入力フォルダーの場所\（`xsltodita`\）に移動します。

1. ソースの構造化ドキュメントをこのフォルダーにアップロードします。 DAM へのコンテンツのアップロードについては、[ 既存の DITA コンテンツのアップロード ](migrate-content-upload-existing-dita-content.md#) を参照してください。


`<config> </config>` ブロックを使用すると、変換用の設定の 1 つまたは複数のブロックを定義できます。 変換ワークフローが実行され、DITA トピック形式の最終出力が `outputDir` エレメントで指定した場所に保存されます。

**親トピック：**[ 既存のコンテンツを移行 ](migrate-content.md)
