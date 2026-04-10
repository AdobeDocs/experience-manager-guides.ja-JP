---
title: DITA以外のコンテンツの移行
description: DITA以外のコンテンツを移行する方法について説明します
feature: Migration
role: Admin
level: Experienced
source-git-commit: b416334318a83e882c32318bc4769d24268cdd1c
workflow-type: tm+mt
source-wordcount: '3521'
ht-degree: 0%

---

# DITA以外のコンテンツの移行 {#id181AH0R02HT}

この節では、DITA以外のドキュメントをDITA形式に移行する移行プロセスについて説明します。 AEM Guidesには、次のソースからの移行が用意されています。

- [Microsoft Word](#id1949B040Z5Z)

- [InDesign ドキュメント](#id195AD0B0K5Z)

- [XHTML](#id1949B04L0Y4)

- [非構造化FrameMaker ドキュメント](#id1949B050VUI)

- [その他の構造化文書](#id1949B0590YK)


## Microsoft Word ドキュメントの移行 {#id1949B040Z5Z}

AEM Guidesを使用すると、既存のWord ドキュメント \（`.docx`\）をDITA トピックタイプドキュメントに移行できます。 入力フォルダーと出力フォルダーの場所を他のパラメーターと共に指定する必要があり、ドキュメントがDITA ドキュメントに変換されます。 内容によっては、.dita ファイルと.ditamap ファイルがあります。

Word文書を正常に変換するには、文書を適切に構造化する必要があります。 例えば、文書にはタイトルを付け、その後に見出し1、見出し2などを付けます。 各見出しには、ある程度の内容を含める必要があります。 ドキュメントの構造が適切でない場合、プロセスが期待どおりに動作しない可能性があります。

デフォルトでは、AEM Guidesは[Word-DITA \（Word2DITA\）変換フレームワーク &#x200B;](http://www.dita4publishers.org/docs/repo/org.dita4publishers.word2dita/word2dita/word2dita-intro.html)を使用します。 この変換は、[&#x200B; スタイルからタグへのマッピング &#x200B;](http://www.dita4publishers.org/docs/repo/org.dita4publishers.word2dita/word2dita/style-to-tag-map-overview.html)設定ファイルによって異なります。 Word2DITA変換を正常に使用するには、変換のためにWord文書を準備するための次のガイドラインを考慮する必要があります。

>[!NOTE]
>
> デフォルトのスタイルからタグへのマッピング設定ファイルで変更を行った場合は、更新したスタイルマッピングを確認するガイドラインを更新して使用する必要があります。

- ドキュメントがタイトルで始まっていることを確認します。このタイトルはDITA マップタイトルにマッピングされます。 また、タイトルの後には、通常のコンテンツを使用する必要があります。

- タイトルの後には、「見出し1」、「見出し2」などがあります。 各見出しには何らかのコンテンツが必要です。 見出しは、新しいコンセプトタイプのトピックに変換されます。 生成されたトピックの階層は、文書内の見出しレベルに従って表示されます。例えば、見出し1は見出し2の前に表示され、見出し2は見出し3のコンテンツの前に表示されます。

- 文書には、少なくとも1つの見出しタイプのコンテンツが必要です。

- グループ化された画像がないことを確認します。 ドキュメント内の画像をグループ化している場合は、そのような画像をすべてグループ化を解除します。

- すべてのヘッダーとフッターを削除します。

- 太字、斜体、下線などのインラインスタイルは、`b`、`i`、および`u`要素に変換されます。

- 順序付けされたリストと順序付けされていないリストはすべて、`ol`および`ul`要素に変換されます。 これは、ネストされたリスト、テーブル内のリスト、メモ、または脚注にも適用されます。

- すべてのハイパーリンクが`xref`に変換されます。

- 変換されたファイルのファイル名は、見出しテキストの後にファイル番号が付いたものに基づいています。 ファイル番号は、文書内の見出しテキストの位置に基づく連続番号です。 例えば、見出しテキストが「サンプル見出し」で、文書の見出しが10番目の場合、このトピックの結果のファイル名はSample\_Heading\_10.ditaと似ています。


### 既存のWord ドキュメントをDITA トピックタイプのドキュメントに変換

次のタブには、既存のWord ドキュメントをExperience Manager Guidesの設定に基づいてDITA トピックタイプドキュメントに変換する手順が示されています。Cloud Serviceまたはオンプレミス。

>[!BEGINTABS]

>[!TAB Cloud Service]

既存のWord ドキュメントをDITA トピックタイプドキュメントに変換するには、次の手順を実行します。

1. パッケージマネージャーを使用して、/libs/fmdita/config/w2d\_io.xml ファイルをダウンロードします。

1. ダウンロードしたw2d\_io.xml ファイルをカスタマイズします。

1. Cloud ManagerのGit リポジトリの次の場所にファイルを追加します。

   /apps/fmdita/config/w2d\_io.xml

   `w2d_io.xml` ファイルには、次の設定可能なパラメーターが含まれています。

   - `inputDir`要素で、ソース Word ドキュメントが使用可能な入力フォルダーの場所を指定します。 例えば、Word文書が`wordtodita` フォルダーの`projects`という名前のフォルダーに保存されている場合、場所を`/content/dam/projects/wordtodita/`と指定します

   - `outputDir`要素で、出力フォルダーの場所を指定するか、デフォルトの出力場所を保持して、変換されたDITA ドキュメントを保存します。 指定した出力フォルダーがDAMに存在しない場合、変換ワークフローによって出力フォルダーが作成されます。

   - `createRev`要素について、変換されたDITA トピックの新しいバージョンを\（`true`\）作成するか、\（`false`\）作成しないかを指定します。

   - `s2tMap`要素で、Word文書スタイルからDITA要素へのマッピングを含むマップファイルの場所を指定します。 デフォルトのマッピングは、次の場所にあるファイルに保存されます。

     ```
     /libs/fmdita/word2dita/word-builtin-styles-style2tagmap.xml
     ```

     >[!NOTE]
     >
     > `word-builtin-styles-style2tagmap.xml` ファイルの構造とカスタマイズ方法について詳しくは、[DITA For Publishers ユーザーガイド &#x200B;](http://www.dita4publishers.org/docs/repo/org.dita4publishers.word2dita/word2dita/style-to-tag-map-overview.html)の「*タグマッピングのスタイル*」を参照してください。

   - props2Propagate エレメントで、DITA マップに渡すプロパティを指定します。 このプロパティは、ドキュメントメタデータから変換されたDITA アセットにdc:title,dc:subject,dam:keywords,dam:categoryなどのデフォルトメタデータを渡すために必要です。

1. Cloud Manager パイプラインを実行して、更新された設定をデプロイします。

1. `w2d_io.xml` ファイルで必要なパラメーターを設定したら、AEMにログインし、Assets UIを開きます。

1. 入力フォルダーの場所\（`wordtodita`\）に移動します。

1. ソース Word ドキュメントをこのフォルダーにアップロードします。 DAMでのコンテンツのアップロードについて詳しくは、[既存のDITA コンテンツのアップロード &#x200B;](upload-dita-content.md#)を参照してください。


`config` `/config` ブロックを使用すると、変換する設定の1つまたは複数のブロックを定義できます。 変換ワークフローが実行され、DITA トピック形式の最終出力が`outputDir`要素で指定された場所に保存されます。

**既存ユーザーのカスタマイズ更新**

AEM Guides as a Cloud Serviceの既存のユーザーで、2021年8月リリースから2022年1月以降のバージョンにアップグレードする場合は、ファイルの移動数が少なくなるため、特定のプロパティを更新します。

>[!NOTE]
>
> このアップデートは、既にMicrosoft WordからDITAへの変換ワークフローを使用している場合にのみ適用されます。

- ファイルパス：/apps/fmdita/config/w2d\_io.xml
- `<s2tMap>`の値を/apps/dxml/word2dita/word-builtin-styles-style2tagmap.xmlから/libs/fmdita/word2dita/word-builtin-styles-style2tagmap.xmlに変更します
- Cloud Manager Git リポジトリで必要な変更を行います。クラウドサービスでは、/apps内のすべてのファイルがCloud Manager Gitを介してオーバーレイされます。

>[!TAB  オンプレミス ]

既存のWord ドキュメントをDITA トピックタイプドキュメントに変換するには、次の手順を実行します。

1. AEMにログインし、CRXDE Lite モードを開きます。

1. 次の場所にあるデフォルトの設定ファイルに移動します。

   `/libs/fmdita/config/w2d_io.xml`

1. `config` ノード内に`apps` フォルダーのオーバーレイノードを作成します。

1. `apps` ノードで使用可能な設定ファイルに移動します。

   `/apps/fmdita/config/w2d_io.xml`

   `w2d_io.xml` ファイルには、次の設定可能なパラメーターが含まれています。

   - `inputDir`要素で、ソース Word ドキュメントが使用可能な入力フォルダーの場所を指定します。 例えば、Word文書が`wordtodita` フォルダーの`projects`という名前のフォルダーに保存されている場合、場所を`/content/dam/projects/wordtodita/`と指定します

   - `outputDir`要素で、出力フォルダーの場所を指定するか、デフォルトの出力場所を保持して、変換されたDITA ドキュメントを保存します。 指定した出力フォルダーがDAMに存在しない場合、変換ワークフローによって出力フォルダーが作成されます。

   - `createRev`要素について、変換されたDITA トピックの新しいバージョンを\（`true`\）作成するか、\（`false`\）作成しないかを指定します。

   - `s2tMap`要素で、Word文書スタイルからDITA要素へのマッピングを含むマップファイルの場所を指定します。 デフォルトのマッピングは、次の場所にあるファイルに保存されます。

     ```XML
     /libs/fmdita/word2dita/word-builtin-styles-style2tagmap.xml
     ```

     >[!NOTE]
     >
     > `word-builtin-styles-style2tagmap.xml` ファイルの構造とカスタマイズ方法について詳しくは、[DITA For Publishers ユーザーガイド &#x200B;](http://www.dita4publishers.org/docs/repo/org.dita4publishers.word2dita/word2dita/style-to-tag-map-overview.html)の「*タグマッピングのスタイル*」を参照してください。

   - props2Propagate エレメントで、DITA マップに渡すプロパティを指定します。 このプロパティは、ドキュメントメタデータから変換されたDITA アセットにdc:title,dc:subject,dam:keywords,dam:categoryなどのデフォルトメタデータを渡すために必要です。

1. `w2d_io.xml` ファイルを保存します。

1. `w2d_io.xml` ファイルで必要なパラメーターを設定したら、AEMにログインし、Assets UIを開きます。

1. 入力フォルダーの場所\（`wordtodita`\）に移動します。

1. ソース Word ドキュメントをこのフォルダーにアップロードします。 DAMでのコンテンツのアップロードについて詳しくは、[既存のDITA コンテンツのアップロード &#x200B;](upload-dita-content.md#)を参照してください。


`config` `/config` ブロックを使用すると、変換する設定の1つまたは複数のブロックを定義できます。 変換ワークフローが実行され、DITA トピック形式の最終出力が`outputDir`要素で指定された場所に保存されます。

>[!ENDTABS]

## Adobe InDesign ドキュメントの移行 {#id195AD0B0K5Z}

AEM Guidesでは、InDesign ドキュメントを変換できます。 FrameMakerと同様に、InDesignでは非構造化ドキュメントや構造化ドキュメントも作成できます。 非構造化文書では、段落スタイルと文字スタイルを使用してコンテンツを書式設定します。 構造化文書では、要素とそれに対応する属性を使用します。

変換プロセスでは、段落スタイルおよび文字スタイル形式を関連するDITA要素にマッピングする必要があります。 同様に、構造化文書の場合、マッピングファイルには、InDesign要素とDITA要素および属性を持つ属性の1対1のマッピングが含まれます。

コンバージョンプロセスでは、バックエンドで次のアクションを実行します。

- *InDesign Markup Language* \（IDML\） ファイルが作業用ディレクトリに展開されます。
- designmap.xml ファイルが読み込まれ、個々のInDesign ストーリーが見つかります。
- すべてのストーリーは単一のXML インスタンスにマージされ、「空」のストーリーは破棄されます。
- 埋め込まれたすべてのグラフィックが書き出されます。
- 表やグラフィックなどの標準構造をDITA形式に事前に変換します。
- マッピングファイルに基づいて、最終出力にマッピングするスタイルまたは構造。
- 個々のDITA トピックとDITA マップファイルの作成と検証。
- 一時ファイルの削除。

一般に、変換プロセスでは、[変換に向けてInDesign ファイルを準備](aemg-appendix.md#id195DBF0045Z)し、[InDesignからDITAへの移行](aemg-appendix.md#id194AF0003HT)用のマッピングファイルを準備する必要があります。変換プロセスを実行するには、指定した手順に従う必要があります。

既存のInDesign ドキュメントをDITA トピックタイプドキュメントに変換するには、次の手順を実行します。

1. AEMにログインし、CRXDE Lite モードを開きます。

1. 次の場所にあるデフォルトの設定ファイルに移動します。

   `/libs/fmdita/config/idml2dita_io.xml`
1. 必要に応じてカスタム設定を作成するには、`config` ノード内に`apps` フォルダーのオーバーレイノードを作成します。

1. 次のファイルまたはフォルダーを`libs` フォルダーからapps フォルダーにコピーします。

   - `/fmdita/config/idml2dita_io.xml`
   - `/fmdita/idml2dita/config`
   - `/fmdita/idml2dita/xsl`

1. `apps` ノードで使用可能な設定ファイルに移動します。

   `/apps/fmdita/config/idml2dita_io.xml`

1. `idml12dita` ファイル内の`idml2dita_io.xml` フォルダーに存在する設定のマッピングを追加します。
1. `idml2dita_io.xml` ファイルに次のプロパティを追加します。

   ```
   <entry key="idml2DitaConfig">/apps/fmdita/idml2dita/config</entry>
   
   <entry key="idml2DitaXsl">/apps/fmdita/idml2dita/xsl</entry>
   ```

1. `config` ノード内に`apps` フォルダーのオーバーレイノードを作成します。


   `idml2dita_io.xml` ファイルで次のパラメーターを設定します。

   - `inputDir`要素で、ソース InDesign ドキュメントが使用可能な入力フォルダーの場所を指定します。 例えば、InDesign ドキュメントが`indesigntodita` フォルダーの`projects`という名前のフォルダーに保存されている場合、場所を`/content/dam/idmlfiles/indesigntodita/`と指定します

   - `outputDir`要素で、出力フォルダーの場所を指定するか、デフォルトの出力場所を保持して、変換されたDITA ドキュメントを保存します。 指定した出力フォルダーがDAMに存在しない場合、変換ワークフローによって出力フォルダーが作成されます。

   - `mapStyle` エレメントで、InDesign ドキュメントスタイルとDITA エレメントのマッピングを含むマップファイルの場所を指定します。 デフォルトのマッピングは、次の場所にあるファイルに保存されます。

     ```
     /stmap.adobeidml.xml
     ```

     >[!NOTE]
     >
     > `stmap.adobeidml.xml` ファイルの構造とカスタマイズ方法について詳しくは、[付録](aemg-appendix.md#id194AF0003HT)を参照してください。

1. `idml2dita_io.xml` ファイルを保存します。

1. `idml2dita_io.xml` ファイルで必要なパラメーターを設定したら、AEMにログインし、Assets UIを開きます。

1. 入力フォルダーの場所\（`indesigntodita`\）に移動します。

1. ソースのInDesign ドキュメントをこのフォルダーにアップロードします。 DAMでのコンテンツのアップロードについて詳しくは、[既存のDITA コンテンツのアップロード &#x200B;](upload-dita-content.md#)を参照してください。


## XHTML ドキュメントの移行 {#id1949B04L0Y4}

AEM Guidesを使用すると、既存のXHTML ドキュメントをDITA トピックタイプドキュメントに変換できます。 入力フォルダーと出力フォルダーの場所を他のパラメーターと共に指定し、ドキュメントをDITA形式に変換する必要があります。 構造化HTML ドキュメントを変換するには、次の2つの方法があります。

- すべてのドキュメントを入力フォルダーにアップロードするか、または
- メディアファイルと一緒にすべてのドキュメントのZIP ファイルを作成し、入力フォルダーにアップロードします。 この方法は、通常、互いにリンクされ、目次\（index.html\）がある一連のHTML ファイルに使用されます。 index.html ファイルには、セット内のすべてのHTML ファイルへのリンクが含まれています。

すべてのファイルを個別にアップロードする場合でも、ZIPにバンドルする場合でも、変換プロセスでは、HTML ファイルと結果のDITA ファイルの間に1対1のマッピングが作成されます。 これは基本的に、入力フォルダー内の.html ファイルごとに.dita ファイルが作成されていることを意味します。

ドキュメントをZIP ファイルにアップロードするには、次の点を考慮する必要があります。

- 参照されているすべてのトピックは、ZIP ファイル内に配置する必要があります。

- 参照されているすべてのメディアファイルは、相対リンクを使用してトピックファイル内で参照する必要があります。

- index.html ファイルを作成し、目次に追加するトピックへのリンクを追加します。 このindex.html ファイルは、DITA マップファイルの作成に使用されます。 index.html ファイルでは、次のコードサンプルに示すように、ネストされたトピックのリストを作成することもできます。

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

  すべての`ul` タグには、`class`属性が`book`に設定されている必要があります。 同様に、すべての`li` タグの`class`を`topicref`に設定する必要があります。

- インラインスタイルを使用する場合は、インラインスタイルをXHTML ファイル内のCSS ベースのスタイルクラスに変換します。 次に、スタイル属性マッピングを使用して、これらのクラスベースのスタイルを、変換されたDITA ファイルのDITA `outputclass`属性に変換します。

  これらのDITA ファイルからHTMLまたはAEM サイト出力を生成する際に、`outputclass`属性を使用して、生成されたHTMLまたはAEM サイトにスタイルクラスを適用し、ソースのHTML コンテンツに一致させることができます。


ZIP ファイルを作成する際の考慮事項とは別に、XHTML ドキュメントも適切に構造化する必要があります。 例えば、文書には&#x200B;*タイトル*&#x200B;を付け、その後&#x200B;*見出し1*、*見出し2*&#x200B;などを付けます。 各見出しには、ある程度の内容を含める必要があります。 ドキュメントの構造が適切でない場合、移行プロセスが期待どおりに機能しない可能性があります。

### 既存のXHTML ドキュメントをDITA トピックに変換する

次のタブには、既存のXHTML ドキュメントをExperience Manager Guidesの設定に基づいてDITA トピックに変換する手順が示されています。Cloud Serviceまたはオンプレミスです。

>[!BEGINTABS]

>[!TAB Cloud Service]

既存のXHTML ドキュメントをDITA トピックに変換するには、次の手順を実行します。

1. パッケージマネージャーを使用して、/libs/fmdita/config/h2d\_io.xml ファイルをダウンロードします。

1. ダウンロードしたh2d\_io.xml ファイルをカスタマイズします。

1. Cloud ManagerのGit リポジトリの次の場所にファイルを追加します。

   /apps/fmdita/config/h2d\_io.xml

   `h2d_io.xml` ファイルには、次の設定可能なパラメーターが含まれています。

   - `inputDir`要素で、ソース XHTML ドキュメントが使用可能な入力フォルダーの場所を指定します。 例えば、XHTML ドキュメントが`xhtmltodita` フォルダーの`projects`という名前のフォルダーに保存されている場合、場所を`/content/dam/projects/xhtmltodita/`と指定します

   - `outputDir`要素で、出力フォルダーの場所を指定するか、デフォルトの出力場所を保持します。 指定した出力フォルダーがDAMに存在しない場合、変換ワークフローによって出力フォルダーが作成されます。

   - `createRev`要素について、変換されたDITA トピックの新しいバージョンを\（`true`\）作成するか、\（`false`\）作成しないかを指定します。

1. Cloud Manager パイプラインを実行して、更新された設定をデプロイします。

1. `w2d_io.xml` ファイルで必要なパラメーターを設定したら、AEMにログインし、Assets UIを開きます。

1. *\（Optional\）*&#x200B;変換された文書に関連リンクのセクションを追加することもできます。 この機能を有効にするには、次の手順を実行します。

   >[!NOTE]
   >
   > デフォルトでは、変換された文書に関連リンクのセクションは作成されません。

   1. パッケージマネージャーを使用して、/libs/fmdita/html2dita/h2d.xsl ファイルをダウンロードします。

   2. 次のパラメーターを検索します。

      `<xsl:param name="generate-related-links" select="false()"/>`

   3. 上記のパラメーターの値を`true()`に設定します。

   4. Cloud ManagerのGit リポジトリの次の場所に、更新されたファイルをコミットします。

      /libs/fmdita/html2dita/

   5. Cloud Manager パイプラインを実行して、更新された設定をデプロイします。

1. 入力フォルダーの場所\（`xhtmltodita`\）に移動します。

1. ソース XHTML ドキュメントをこのフォルダーにアップロードします。 DAMでのコンテンツのアップロードについて詳しくは、[既存のDITA コンテンツのアップロード &#x200B;](upload-dita-content.md#)を参照してください。


`<config> </config>` ブロックを使用すると、変換する設定の1つまたは複数のブロックを定義できます。 変換ワークフローが実行され、DITA トピック形式の最終出力が`outputDir`要素で指定された場所に保存されます。

>[!TAB  オンプレミス ]

既存のXHTML ドキュメントをDITA トピックに変換するには、次の手順を実行します。

1. AEMにログインし、CRXDE Lite モードを開きます。

1. 次の場所にあるデフォルトの設定ファイルに移動します。

   `/libs/fmdita/config/h2d_io.xml`

1. `config` ノード内に`apps` フォルダーのオーバーレイノードを作成します。

1. `apps` ノードで使用可能な設定ファイルに移動します。

   `/apps/fmdita/config/h2d_io.xml`

   `h2d_io.xml` ファイルには、次の設定可能なパラメーターが含まれています。

   - `inputDir`要素で、ソース XHTML ドキュメントが使用可能な入力フォルダーの場所を指定します。 例えば、XHTML ドキュメントが`xhtmltodita` フォルダーの`projects`という名前のフォルダーに保存されている場合、場所を`/content/dam/projects/xhtmltodita/`と指定します

   - `outputDir`要素で、出力フォルダーの場所を指定するか、デフォルトの出力場所を保持します。 指定した出力フォルダーがDAMに存在しない場合、変換ワークフローによって出力フォルダーが作成されます。

   - `createRev`要素について、変換されたDITA トピックの新しいバージョンを\（`true`\）作成するか、\（`false`\）作成しないかを指定します。

1. `h2d_io.xml` ファイルを保存します。

1. `h2d_io.xml` ファイルで必要なパラメーターを設定したら、AEMにログインし、Assets UIを開きます。

1. *\（Optional\）*&#x200B;変換された文書に関連リンクのセクションを追加することもできます。 この機能を有効にするには、次の手順を実行します。

   >[!NOTE]
   >
   > デフォルトでは、変換された文書に関連リンクのセクションは作成されません。

   1. 次の場所にあるh2d.xsl ファイルに移動します。

      /libs/fmdita/html2dita/

   2. 次のパラメーターを検索します。

      `<xsl:param name="generate-related-links" select="false()"/>`

   3. 上記のパラメーターの値を`true()`に設定します。
   4. ファイルを保存して閉じます。
1. 入力フォルダーの場所\（`xhtmltodita`\）に移動します。

1. ソース XHTML ドキュメントをこのフォルダーにアップロードします。 DAMでのコンテンツのアップロードについて詳しくは、[既存のDITA コンテンツのアップロード &#x200B;](upload-dita-content.md#)を参照してください。


`<config> </config>` ブロックを使用すると、変換する設定の1つまたは複数のブロックを定義できます。 変換ワークフローが実行され、DITA トピック形式の最終出力が`outputDir`要素で指定された場所に保存されます。

>[!ENDTABS]

## 非構造化FrameMaker ドキュメントの移行 {#id1949B050VUI}

非構造化Adobe FrameMaker コンテンツ（.fmおよび.book）を構造化DITAに変換するには、FrameMakerの変換テーブルメカニズムを使用できます。 このプロセスでは、テンプレートベースのアプローチを使用して既存のコンテンツを評価し、コンバージョンテーブルを通じてFrameMaker スタイルをDITAにマッピングすることに重点を置きます。 詳しくは、[Adobe FrameMakerの非構造化ドキュメントからDITAへのテクニカルドキュメントの移行](https://migrate-from-unstructured-to-dita-step-by-step-guide.meetus.adobeevents.com/)を参照してください。

変換後、構造化コンテンツをAEM Guidesに移行できます。 詳しくは、[WebDAV ツールとFrameMaker](./upload-dita-content.md)を使用して既存のDITA コンテンツをアップロードするを参照してください。

## その他の構造化文書の移行 {#id1949B0590YK}

AEM Guidesを使用すると、既存の構造化ドキュメントを有効なDITA ドキュメントに変換できます。 入力と出力フォルダーの場所、変換ファイルの場所、最終出力を保存する拡張子、新しいバージョンのドキュメントが必要かどうかを指定する必要があります。

次のタブには、Experience Manager Guidesの設定に基づいて他の構造化ドキュメントを移行する手順が表示されます。Cloud Serviceまたはオンプレミス。


>[!BEGINTABS]

>[!TAB Cloud Service]

既存の構造化文書をDITA形式に変換するには、次の手順を実行します。

1. パッケージマネージャーを使用して、/libs/fmdita/config/XSLConfig.xml ファイルをダウンロードします。

1. Cloud ManagerのGit リポジトリの次の場所にXSLConfig.xml ファイルのコピーを作成します。

   `/apps/fmdita/config/XSLConfig.xml`

   `XSLConfig.xml` ファイルには、次の設定可能なパラメーターが含まれています。

   - `inputDir`要素で、ソース構造化文書が使用可能な入力フォルダーの場所を指定します。 例えば、構造化文書が`xsltodita` フォルダーの`projects`という名前のフォルダーに保存されている場合、場所を`/content/dam/projects/xsltodita/`と指定します

   - `outputDir`要素で、出力フォルダーの場所を指定するか、デフォルトの出力場所を保持します。 指定した出力フォルダーがDAMに存在しない場合、変換ワークフローによって出力フォルダーが作成されます。

   - `xslFolder`要素で、XSL変換ファイルが保存されるフォルダーの場所を指定します。

   - ``xslPath``要素で、変換プロセスの開始に使用するプライマリ .XSL ファイルの場所を指定します。

   - ``outputExt``要素で、変換ストリームから作成される最終出力ファイルのファイル拡張子を指定します。

   - `createRev`要素について、変換されたDITA トピックの新しいバージョンを\（`true`\）作成するか、\（`false`\）作成しないかを指定します。

1. `XSLConfig.xml` ファイルを保存します。

1. `XSLConfig.xml` ファイルで必要なパラメーターを設定したら、AEMにログインし、Assets UIを開きます。

1. 入力フォルダーの場所\（`xsltodita`\）に移動します。

1. ソース構造化文書をこのフォルダーにアップロードします。 DAMでのコンテンツのアップロードについて詳しくは、[既存のDITA コンテンツのアップロード &#x200B;](upload-dita-content.md#)を参照してください。


`<config> </config>` ブロックを使用すると、変換する設定の1つまたは複数のブロックを定義できます。 変換ワークフローが実行され、DITA トピック形式の最終出力が`outputDir`要素で指定された場所に保存されます。

>[!TAB  オンプレミス ]

1. AEMにログインし、CRXDE Lite モードを開きます。

1. 次の場所にあるデフォルトの設定ファイルに移動します。

   `/libs/fmdita/config/XSLConfig.xml`

1. `config` ノード内に`apps` フォルダーのオーバーレイノードを作成します。

1. `apps` ノードで使用可能な設定ファイルに移動します。

   `/apps/fmdita/config/XSLConfig.xml`

   `XSLConfig.xml` ファイルには、次の設定可能なパラメーターが含まれています。

   - `inputDir`要素で、ソース構造化文書が使用可能な入力フォルダーの場所を指定します。 例えば、構造化文書が`xsltodita` フォルダーの`projects`という名前のフォルダーに保存されている場合、場所を`/content/dam/projects/xsltodita/`と指定します

   - `outputDir`要素で、出力フォルダーの場所を指定するか、デフォルトの出力場所を保持します。 指定した出力フォルダーがDAMに存在しない場合、変換ワークフローによって出力フォルダーが作成されます。

   - `xslFolder`要素で、XSL変換ファイルが保存されるフォルダーの場所を指定します。

   - ``xslPath``要素で、変換プロセスの開始に使用するプライマリ .XSL ファイルの場所を指定します。

   - ``outputExt``要素で、変換ストリームから作成される最終出力ファイルのファイル拡張子を指定します。

   - `createRev`要素について、変換されたDITA トピックの新しいバージョンを\（`true`\）作成するか、\（`false`\）作成しないかを指定します。

1. `XSLConfig.xml` ファイルを保存します。

1. `XSLConfig.xml` ファイルで必要なパラメーターを設定したら、AEMにログインし、Assets UIを開きます。

1. 入力フォルダーの場所\（`xsltodita`\）に移動します。

1. ソース構造化文書をこのフォルダーにアップロードします。 DAMでのコンテンツのアップロードについて詳しくは、[既存のDITA コンテンツのアップロード &#x200B;](upload-dita-content.md#)を参照してください。


`<config> </config>` ブロックを使用すると、変換する設定の1つまたは複数のブロックを定義できます。 変換ワークフローが実行され、DITA トピック形式の最終出力が`outputDir`要素で指定された場所に保存されます。

>[!ENDTABS]

**親トピック：**&#x200B;[&#x200B;既存のコンテンツを移行](migrate-content.md)
