---
title: DITA 以外のコンテンツの移行
description: DITA 以外のコンテンツを移行する方法
exl-id: cf437fb8-ed33-47af-aa7e-ffd8acd232da
feature: Migration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '2889'
ht-degree: 0%

---

# DITA 以外のコンテンツの移行 {#id181AH0R02HT}

この節では、DITA 以外の文書を DITA 形式に移行する手順を説明します。 AEM Guidesは次のソースから移行できます。

- [Microsoft Word](#id1949B040Z5Z)

- [InDesignドキュメント](#id195AD0B0K5Z)

- [XHTML](#id1949B04L0Y4)

- [構造化されていないFrameMaker文書](#id1949B050VUI)

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

1. パッケージマネージャーを使用して/libs/fmdita/config/w2d\_io.xml ファイルをダウンロードします。

1. ダウンロードした w2d\_io.xml ファイルをカスタマイズします。

1. Cloud Managerの Git リポジトリ内の次の場所に、ファイルを追加します。

   /apps/fmdita/config/w2d\_io.xml

   `w2d_io.xml` ファイルには、次の設定可能なパラメーターが含まれています。

   - `inputDir` 要素で、ソース Word ドキュメントを使用できる入力フォルダーの場所を指定します。 例えば、Word ドキュメントが `projects` のフォルダーの `wordtodita` という名前のフォルダーに保存されている場合、その場所は `/content/dam/projects/wordtodita/` のように指定します。

   - `outputDir` エレメントで、出力フォルダの場所を指定するか、変換後の DITA 文書を保存するデフォルトの出力場所を残します。 指定された出力フォルダーが DAM に存在しない場合、変換ワークフローは出力フォルダーを作成します。

   - `createRev` 要素では、変換後の DITA トピックの新しいバージョンを\（`true`\）で作成するかどうかを指定します\（`false`\）。

   - `s2tMap` 要素で、Word 文書スタイルから DITA 要素へのマッピングを含むマップファイルの場所を指定します。 デフォルトのマッピングは、次の場所にあるファイルに保存されます。

     ```
     /libs/fmdita/word2dita/word-builtin-styles-style2tagmap.xml
     ```

     >[!NOTE]
     >
     > ファイルの構造とカスタマイズ方法 `word-builtin-styles-style2tagmap.xml` ついて詳しくは、『 *DITA For Publishers ユーザガイド ](http://www.dita4publishers.org/docs/repo/org.dita4publishers.word2dita/word2dita/style-to-tag-map-overview.html) の [ スタイルからタグマッピング* を参照してください。

   - props2Propagate エレメントで、DITA マップに渡すプロパティを指定します。 このプロパティは、文書メタデータから変換後の DITA アセットに dc:title、dc:subject、dam:keywords、dam:category などのデフォルトのメタデータを渡すために必要です。

1. Cloud Manager パイプラインを実行して、更新された設定をデプロイします。

1. `w2d_io.xml` ファイルで必要なパラメーターを設定したら、AEMにログインしてAssets UI を開きます。

1. 入力フォルダーの場所\（`wordtodita`\）に移動します。

1. ソースの Word ドキュメントをこのフォルダーにアップロードします。 DAM へのコンテンツのアップロードについては、[ 既存の DITA コンテンツのアップロード ](migrate-content-upload-existing-dita-content.md#) を参照してください。


`config` `/config` ブロックを使用すると、変換用の設定の 1 つまたは複数のブロックを定義できます。 変換ワークフローが実行され、DITA トピック形式の最終出力が `outputDir` エレメントで指定した場所に保存されます。

**既存ユーザー向けのカスタマイズの更新**

既にAEM Guidesのas a Cloud Serviceを使用していて、2021 年 8 月のリリースから 2022 年 1 月またはそれ以降のリリースにアップグレードする場合は、移動されたファイルがほとんどないので、指定のプロパティを更新します。

>[!NOTE]
>
> この更新は、既にMicrosoft Word から DITA への変換ワークフローを使用している場合にのみ適用されます。

- ファイルパス：/apps/fmdita/config/w2d\_io.xml
- `<s2tMap>` の値を/apps/dxml/word2dita/word-builtin-styles-style2tagmap.xmlから/libs/fmdita/word2dita/word-builtin-styles-style2tagmap.xmlに変更します
- Cloud Service の場合、/apps 内のすべてのファイルがCloud Manager Git を介してオーバーレイされるので、Cloud Manager Git リポジトリで必要な変更を加えます。

## Adobe InDesign ドキュメントの移行 {#id195AD0B0K5Z}

AEM Guidesでは、InDesignドキュメントを変換できます。 FrameMakerと同様に、InDesignを使用すれば、非構造化ドキュメントと構造化ドキュメントを作成することもできます。 非構造化ドキュメントでは、段落スタイルと文字スタイルを使用してコンテンツの形式を設定します。 構造化ドキュメントでは、要素と、それに対応する属性を使用します。

変換プロセスでは、段落および文字スタイル形式を関連する DITA エレメントにマッピングする必要があります。 同様に、構造化文書の場合、マッピングファイルには、InDesignエレメントと属性と DITA エレメントと属性の 1 対 1 のマッピングが含まれます。

変換プロセスには、バックエンドの次のアクションが含まれます。

- *InDesign マークアップ言語* \（IDML\） ファイルが作業ディレクトリに展開されています。
- designmap.xml ファイルが読み込まれ、個々のInDesign ストーリーが検索されます。
- すべてのストーリーは単一の XML インスタンスに結合され、「空の」ストーリーは破棄されます。
- すべての埋め込みグラフィックが書き出されます。
- 表やグラフィックなどの標準構造の DITA 形式への事前変換。
- マッピングファイルに基づいて最終出力へのスタイルまたは構造マッピング。
- 個々の DITA トピックと DITA マップファイルの作成と検証。
- 一時ファイルの削除。

大まかに言えば、コンバージョンプロセスでは [ コンバージョン用のInDesignInDesign ファイルを準備する ](appendix.md#id195DBF0045Z)[appendix.md\#id195DBF0045Z](appendix.md#id195DBF0045Z) と [DITA マイグレーション用のマッピングファイルを準備する ](appendix.md#id194AF0003HT)[appendix.md\#id194AF0003HT](appendix.md#id194AF0003HT) の手順に従う必要があります。

次の手順を実行して、既存のInDesign文書を DITA トピック型文書に変換します。

1. AEMにログインし、CRXDE Liteモードを開きます。

1. 次の場所にあるデフォルトの設定ファイルに移動します。

   `/libs/fmdita/config/idml2dita_io.xml`

1. `apps` ノード内に `config` フォルダーのオーバーレイノードを作成します。

1. `apps` ノードで使用可能な設定ファイルに移動します。

   `/apps/fmdita/config/idml2dita_io.xml`

   `idml2dita_io.xml` ファイルで次のパラメーターを設定します。

   - `inputDir` 要素で、ソースInDesignドキュメントを使用できる入力フォルダーの場所を指定します。 例えば、InDesignドキュメントが `projects` のフォルダー内の `indesigntodita` という名前のフォルダーに格納されている場合、その場所は `/content/dam/idmlfiles/indesigntodita/` のように指定します。

   - `outputDir` エレメントで、出力フォルダの場所を指定するか、変換後の DITA 文書を保存するデフォルトの出力場所を残します。 指定された出力フォルダーが DAM に存在しない場合、変換ワークフローは出力フォルダーを作成します。

   - `mapStyle` エレメントで、InDesign文書スタイルの DITA エレメントへのマッピングを含むマップファイルの場所を指定します。 デフォルトのマッピングは、次の場所にあるファイルに保存されます。

     ```
     /stmap.adobeidml.xml
     ```

     >[!NOTE]
     >
     > ファイルの構造とカスタマイズ方法 `stmap.adobeidml.xml` ついて詳しくは、付録の [appendix.md\#id194AF0003HT](appendix.md#id194AF0003HT) を参照してください。

1. `idml2dita_io.xml` ファイルを保存します。

1. `idml2dita_io.xml` ファイルで必要なパラメーターを設定したら、AEMにログインしてAssets UI を開きます。

1. 入力フォルダーの場所\（`indesigntodita`\）に移動します。

1. ソースInDesignドキュメントをこのフォルダーにアップロードします。 DAM へのコンテンツのアップロードについては、[ 既存の DITA コンテンツのアップロード ](migrate-content-upload-existing-dita-content.md#) を参照してください。


## XHTML ドキュメントの移行 {#id1949B04L0Y4}

AEM Guidesを使用すると、既存の XHTML 文書を DITA トピックタイプの文書に変換できます。 入力フォルダと出力フォルダの場所を他のパラメータと共に指定する必要があり、文書は DITA 形式に変換されます。 構造化HTML文書を変換するには、次の 2 つの方法があります。

- すべてのドキュメントを入力フォルダーにアップロードする
- すべてのドキュメントの ZIP をメディアファイルと共に作成し、入力フォルダーにアップロードします。 この方法は、通常、相互にリンクされた一連のHTMLファイルに使用され、目次\（index.html\）があります。 index.html ファイルには、セット内のすべてのHTMLファイルへのリンクが含まれています。

すべてのファイルを個別にアップロードする場合でも、ZIP にバンドルする場合でも、変換プロセスによって、HTMLファイルと結果の DITA ファイルとの間に 1 対 1 のマッピングが作成されます。 つまり、入力フォルダ内の.html ファイルごとに.dita ファイルが 1 つ作成されます。

ドキュメントを ZIP ファイルでアップロードする際は、次の点を考慮する必要があります。

- 参照されるトピックはすべて ZIP ファイル内に配置する必要があります。

- 参照されるすべてのメディア ファイルは、相対リンクを使用してトピック ファイル内で参照する必要があります。

- index.html ファイルを作成し、目次に追加するトピックへのリンクを追加します。 この index.html ファイルは、DITA マップファイルの作成に使用されます。 index.html ファイルでは、次のコード例に示すように、ネストされたトピックのリストを作成することもできます。

  ```
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

  これらの DITA ファイルからHTMLまたはAEM Site 出力を生成する際に、生成されたHTMLまたはAEM Site にスタイルクラスを適用してソースHTMLのコンテンツと一致させるために、`outputclass` 属性を使用できます。


ZIP ファイルを作成する際の考慮事項とは別に、XHTML ドキュメントも適切に構造化されている必要があります。 例えば、ドキュメントには *タイトル*、その後に *見出し 1*、*見出し 2* などが続く必要があります。 各見出しには、いくつかのコンテンツが含まれている必要があります。 ドキュメントが適切に構造化されていない場合、移行プロセスが期待どおりに動作しない可能性があります。

既存の XHTML 文書を DITA トピックに変換するには、次の手順を実行します。

1. パッケージマネージャーを使用して/libs/fmdita/config/h2d\_io.xml ファイルをダウンロードします。

1. ダウンロードした h2d\_io.xml ファイルをカスタマイズします。

1. Cloud Managerの Git リポジトリ内の次の場所に、ファイルを追加します。

   /apps/fmdita/config/h2d\_io.xml

   `h2d_io.xml` ファイルには、次の設定可能なパラメーターが含まれています。

   - `inputDir` 要素で、ソース XHTML ドキュメントを使用できる入力フォルダーの場所を指定します。 例えば、XHTML ドキュメントが `projects` のフォルダー内の `xhtmltodita` という名前のフォルダーに保存されている場合、その場所は `/content/dam/projects/xhtmltodita/` のように指定します。

   - `outputDir` 要素で、出力フォルダーの場所を指定するか、デフォルトの出力場所のままにします。 指定された出力フォルダーが DAM に存在しない場合、変換ワークフローは出力フォルダーを作成します。

   - `createRev` 要素では、変換後の DITA トピックの新しいバージョンを\（`true`\）で作成するかどうかを指定します\（`false`\）。

1. Cloud Manager パイプラインを実行して、更新された設定をデプロイします。

1. `w2d_io.xml` ファイルで必要なパラメーターを設定したら、AEMにログインしてAssets UI を開きます。

1. *\（オプション\）* 変換後のドキュメントに関連リンクセクションを追加することもできます。 この機能を有効にするには、次の手順を実行します。

   >[!NOTE]
   >
   > デフォルトでは、変換後のドキュメントに関連リンクセクションは作成されません。

   1. パッケージマネージャーを使用して/libs/fmdita/html2dita/h2d.xsl ファイルをダウンロードします。

   2. 次のパラメーターを検索します。

      `<xsl:param name="generate-related-links" select="false()"/>`

   3. 上記のパラメーターの値を `true()` に設定します。

   4. 更新したファイルをCloud Manager Git リポジトリの次の場所にコミットします。

      /libs/fmdita/html2dita/

   5. Cloud Manager パイプラインを実行して、更新された設定をデプロイします。

1. 入力フォルダーの場所\（`xhtmltodita`\）に移動します。

1. ソース XHTML ドキュメントをこのフォルダーにアップロードします。 DAM へのコンテンツのアップロードについては、[ 既存の DITA コンテンツのアップロード ](migrate-content-upload-existing-dita-content.md#) を参照してください。


`<config> </config>` ブロックを使用すると、変換用の設定の 1 つまたは複数のブロックを定義できます。 変換ワークフローが実行され、DITA トピック形式の最終出力が `outputDir` エレメントで指定した場所に保存されます。

## 非構造化FrameMaker・ドキュメントの移行 {#id1949B050VUI}

AEM Guidesを使用すると、既存の非構造化FrameMaker\（`.fm` and `.book`\）文書を DITA 文書に変換できます。 最初のステップは、FrameMakerを使用してスタイル マッピングを作成し、それらの設定を.sts ファイルに保存することです。 次に、カスタム DITA を使用している場合は、カスタムFrameMakerを `ditaElems.xml` ファイルのソースエレメントフォーマットにマップできます。 例えば、重要なメモをすべて処理する `impnote` という名前のカスタム要素を作成した場合は、`ditaElems.xml` ファイルでこのカスタム要素を定義できます。 このカスタム要素が定義されると、`impnote` の要素を含むFrameMakerドキュメントの変換中にAEM Guidesでエラーが発生することはありません。

また、カスタムまたは有効な DITA 要素を使用して追加の属性を指定する場合は、style2attrMap.xml ファイルでそれらの属性を定義できます。 例えば、`impnote` 要素と共に渡される `important` の値を使用して `type` 属性を指定できます。 この追加情報は、style2attrMap.xml ファイルで指定できます。

指定に加えて

既存の非構造化FrameMaker文書を DITA フォーマットに変換するには、次の手順を実行します。

1. FrameMakerでスタイルマッピングを作成し、それらの設定を.sts ファイルに保存します。

1. パッケージマネージャーを使用して/libs/fmdita/config/ditaElems.xml ファイルをダウンロードします。

1. カスタム DITA エレメントがある場合は、次の場所にある `ditaElems.xml` ファイルで定義します。

   `/libs/fmdita/config/ditaElems.xml`

1. ditaElems.xml ファイルのコピーをCloud Manager Git リポジトリ内の次の場所に作成します。

   `/apps/fmdita/config/ditaElems.xml`

1. `apps` ノードで使用可能な設定ファイルに移動します。

   `/apps/fmdita/config/ditaElems.xml`

   `ditaElems.xml` ファイルには、設定可能なパラメーターが 1 つ含まれています。

   - `elem` パラメータで、変換後の DITA 文書で使用するカスタム要素の名前を指定します。 このエレメントは、生成された DITA 文書にそのまま渡されます。

1. 追加の属性を指定する場合は、次の場所にある `style2attrMap.xml` ファイルで追加の属性を定義します。

   `/libs/fmdita/config/style2attrMap.xml`

1. `apps` ノード内に `config` フォルダーのオーバーレイノードを作成します。

1. `apps` ノードで使用可能な設定ファイルに移動します。

   `/apps/fmdita/config/style2attrMap.xml`

   `style2attrMap.xml` ファイルには、次の設定可能なパラメーターが含まれています。

   - `fmStyle` パラメーターで、マッピングするFrameMakerドキュメントで使用されるソースフォーマットを指定します。

   - `ditaAttr` エレメントで、ソースフォーマットにマップする DITA 属性を指定します。

   - `ditaVal` 要素で、マッピングされた属性の値を指定します。 値がない場合は、このエントリを空白のままにできます。

1. `style2attrMap.xml` ファイルを保存します。

1. `style2attrMap.xml` ファイルで必要なパラメーターを設定したら、AEMにログインしてAssets UI を開きます。

1. 変換するFrameMakerドキュメントに移動して、クリックします。

   出力の生成に使用できる出力プリセットのリストを示す DITA マップコンソールが表示されます。

1. DITA 出力形式を選択し、必要なパラメータを設定します。

   >[!NOTE]
   >
   > FrameMakerで作成したのと同じ設定ファイル \（.sts\）を使用する必要があります。 また、設定名と宛先パスも指定します。

1. **生成** アイコンをクリックして、出力生成プロセスを開始します。


`<attrMap> </attrMap>` ブロックを使用すると、変換用の設定の 1 つまたは複数のブロックを定義できます。 コンテンツによっては、.dita ファイルと.ditamap ファイルを変換後のファイルとして使用できます。

## 他の構造化文書を移行する {#id1949B0590YK}

AEM Guidesを使用すると、既存の構造化文書を有効な DITA 文書に変換できます。 入力および出力フォルダの場所、変換ファイルの場所、最終出力を保存する拡張子、およびドキュメントの新しいバージョンが必要かどうかを指定する必要があります。

既存の構造化文書を DITA 形式に変換するには、次の手順を実行します。

1. パッケージマネージャーを使用して/libs/fmdita/config/XSLConfig.xml ファイルをダウンロードします。

1. Cloud Managerの Git リポジトリ内の次の場所に、XSLConfig.xml ファイルのコピーを作成します。

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
