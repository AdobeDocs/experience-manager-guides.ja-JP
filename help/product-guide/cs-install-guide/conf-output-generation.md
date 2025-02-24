---
title: 出力生成設定の指定
description: 出力生成設定を指定する方法を学ぶ
exl-id: b5cf4f6c-dc56-428e-a514-6c9f879ac03d
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: a2e52572edf0915c1701a384d396a32de2429f53
workflow-type: tm+mt
source-wordcount: '5620'
ht-degree: 1%

---

# 出力生成設定の指定 {#id181AI0B0E30}

AEM Guidesには、出力生成プロセスをカスタマイズするための多くの設定オプションが用意されています。 このトピックでは、出力生成プロセスの設定に役立つすべての設定とカスタマイズについて説明します。

## DITA マップダッシュボードの「ベースライン」タブの設定 {#id223MD0D0YRM}

DITA マップダッシュボードで「ベースライン」 タブを非表示にするには、次の手順を実行します。

1. [ 設定の上書き ](download-install-additional-config-override.md#) の手順に従って、設定ファイルを作成します。
1. 設定ファイルで、マップダッシュボードの「ベースライン」タブを設定するために、次の\（property\）詳細を指定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `hide.tabs.baseline` | ブール\（`true/false`\）**デフォルト値**: `true` |

>[!NOTE]
>
> この設定はデフォルトで有効になっており、マップダッシュボードでは「ベースライン」タブは使用できません。

## 既存のAEM サイト内で混合型公開を設定する {#id1691I0V0MGR}

DITA コンテンツを含むAEM Site がある場合は、AEM Site 出力を設定して、DITA コンテンツをサイト内の事前定義済みの場所に公開できます。 例えば、次のAEM サイトページのスクリーンショットでは、`ditacontent` ノードは DITA コンテンツを格納するために予約されています。

![](assets/publish-in-aem-site.png)

ページの残りのノードは、AEM サイトエディターから直接作成されます。 DITA コンテンツを事前定義済みの場所に公開するように公開設定を指定すると、既存の非 DITA コンテンツがAEM Guides公開プロセスで変更されることはありません。

定義済みノードに DITA コンテンツを発行できるようにするには、既存のサイトで次の設定を実行する必要があります。

- サイトのテンプレートプロパティの設定

- サイトにノードを追加して DITA コンテンツを公開


既存のサイトのテンプレートプロパティを設定するには、次の手順を実行します。

1. パッケージマネージャーを使用して/libs/fmdita/config/templates/default ファイルをダウンロードします。

   >[!NOTE]
   >
   > `libs` ノードでデフォルトの設定ファイルをカスタマイズする必要はありません。 `apps` ノードに `libs` ノードのオーバーレイを作成し、`apps` ノードでのみ必要なファイルを更新する必要があります。

1. 以下のプロパティを追加します。

   | プロパティ名 | タイプ | 値 |
   |-------------|----|-----|
   | `topicContentNode` | 文字列 | DITA コンテンツを公開するノード名を指定します。 例えば、AEM Guidesが DITA コンテンツを公開するデフォルトのノードは <br> です。 `jcr:content/contentnode` |
   | `topicHeadNode` | 文字列 | DITA コンテンツのメタデータ情報を保存するノード名を指定します。 例えば、AEM Guidesがメタデータ情報を格納するデフォルトのノードは <br> です。 `jcr:content/headnode` |


次にサイトのテンプレート設定を使用して DITA コンテンツを公開すると、そのコンテンツは `topicContentNode` および `topicHeadNode` プロパティで指定したノードに公開されます。

## AEM サイト出力のカスタマイズ {#id166TG0B30WR}

AEM Guidesでは、次の形式での出力の作成がサポートされています。

- AEM サイト
- PDF
- HTML5
- EPUB
- DITA-OT によるカスタム出力

AEM サイトの出力については、異なる出力タスクに異なるデザインテンプレートを割り当てることができます。 これらのデザインテンプレートは、異なるレイアウトで DITA コンテンツをレンダリングできます。 例えば、内部オーディエンスと外部オーディエンスに対して異なるデザインテンプレートを指定できます。

カスタマイズした DITA Open Toolkit \（DITA-OT\） プラグインをAEM Guidesで使用することもできます。 これらのカスタム DITA-OT プラグインをアップロードすると、特定の方法でPDF出力を生成できます。

>[!TIP]
>
> AEM サイト出力の作成に関するベストプラクティスについては、ベストプラクティスガイドの *AEM サイトの公開* の節を参照してください。


### 出力を生成するためのデザインテンプレートのカスタマイズ {#customize_xml-add-on}

AEM Guidesでは、事前定義済みの一連のデザインテンプレートを使用して、AEM Site 出力を生成します。 AEM Guidesのデザインテンプレートをカスタマイズして、企業のブランディングに合った出力を生成できます。 デザインテンプレートは、様々なスタイル \（CSS\）、スクリプト \（サーバー側とクライアント側の両方\）、リソース \（画像、ロゴ、その他のアセット\）、およびこれらすべてのリソースを結び付ける JCR ノードのコレクションです。 デザインテンプレートは、単一のサーバーサイドスクリプトと複数の JCR ノードのみで構成するか、スタイル、リソース、JCR ノードの複雑な組み合わせで構成することができます。 デザインテンプレートは、AEM Guides サイト出力を生成する際にAEM パブリッシングサブシステムで使用され、生成された出力の構造、ルックアンドフィールを制御します。

デザイン テンプレート リソースをサーバ上のどこに配置するかについては制限はありませんが、通常は機能に応じて論理的に編成されます。 例えば、デフォルトのテンプレートでは、すべてのJavaScriptと CSS ファイルがフォルダーに保存 `/etc/designs/fmdita/clientlibs/siteoutput/default` れています。 これらのファイルが配置されている場所では、それらのファイルは JCR ノードのコレクションによってリンクされます。 これらの JCR ノードとファイルによって、デザインテンプレート全体が構成されます。

AEM Guidesに付属しているデフォルトのデザインテンプレートを使用すると、ランディング、トピックおよび検索ページのコンポーネントをカスタマイズできます。 デフォルトのデザインと対応する参照テンプレートのコピーを作成し、異なるコンポーネントを指定して目的の出力を生成できます。

次の手順を実行して、AEM Site の出力生成に使用する独自のデザインテンプレートを指定します。

1. パッケージマネージャーを使用して、次の場所からデフォルトのデザインテンプレートをダウンロードします。

   /libs/fmdita/config/templates

1. ダウンロードしたファイルのコピーをCloud Manager Git リポジトリ内の次の場所に作成します。

   /apps/fmdita/config/templates

1. また、デフォルトのテンプレートノードから参照されたテンプレートをダウンロードしてコピーする必要もあります。 参照されるテンプレートは、次の場所に配置されます。

   /libs/fmdita/templates/default/cqtemplates

   次の表に、AEM Guides デザインテンプレートのプロパティを示します。

   | プロパティ | 説明 |
   |--------|-----------|
   | `landingPageTemplate`、`searchPageTemplate`、`topicPageTemplate`、`shadowPageTemplate` | これらの対応するページの `cq:Template` ノード （ランディング、検索、トピック\）を指定してください。 デフォルトでは、これらのページの `cq:Template` ノードは `/libs/fmdita/templates/default/cqtemplates` ノードにあります。 このノードは、ランディングページ、検索ページ、トピックページの構造とプロパティを定義します。<br> `shadowPageTemplate` は、チャンクされたコンテンツの最適化に使用されます。 このプロパティの値を次に設定する必要があります。`fmdita/templates/default/cqtemplates/shadowpage` <br> **メモ：**`topicPageTemplate` の値を指定する必要があります。 `landingPageTemplate` と `searchPageTemplate` はオプションのプロパティです。 検索ページとランディングページを生成しない場合は、これらのプロパティを指定しないでください。 |
   | `title` | デザインテンプレートのわかりやすい名前。 |
   | `topicContentNode` | トピックページ内の DITA コンテンツを格納するノードの場所。 パスは、トピックページを基準とした相対パスです。 |
   | `topicHeadNode` | DITA コンテンツから派生したヘッド値\（またはメタデータ\）を含むノードの場所。 パスはトピックページを基準とした相対パスです。 |
   | `tocNode` | 目次を含むノードの場所。 パスは、ランディングページまたは宛先パスを基準とした相対パスです。 |
   | `basePathProp` | 公開されたサイトのルートのパスを保存するプロパティ名。 |
   | `indexPathProp` | 公開されたサイトのランディングページまたはインデックスページのパスを保存するプロパティ名。 |
   | `pdfPathProp` | トピックのPDFの生成が有効な場合に、トピックのPDFのパスを保存するためのプロパティ名。 |
   | `pdfTypeProp` | PDF世代のタイプを格納するプロパティ名。 現在、このプロパティには常に「トピック」が含まれています。 |
   | `searchPathProp` | テンプレートに検索ページが含まれている場合に、検索ページのパスを保存するためのプロパティ名。 |
   | `siteTitleProp` | 公開するサイトのタイトルを保存するためのプロパティ名。 通常、このタイトルはパブリッシュするマップのタイトルと同じです。 |
   | `sourcePathProp` | 現在のページのソース DITA トピックのパスを保存するためのプロパティ名。 |
   | `tocPathProp` | 公開されたサイトの目次ルートのパスを保存するプロパティ名。 |


>[!NOTE]
>
> カスタムデザインテンプレートノードを作成したら、AEM サイト出力プリセットのデザインオプションを更新して、カスタムデザインテンプレートノードを使用する必要があります。

詳しくは、[ 最初のAdobe Experience Manager Web サイトの作成 ](https://experienceleague.adobe.com/docs/experience-manager-learn/getting-started-wknd-tutorial-develop/overview.html?lang=ja) および [ 基本 ](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/implementing/developing/full-stack/develop-wknd-tutorial.html?lang=en) 「AEMでの独自 Web サイトの開発」を参照してください。

### AEM サイト出力の生成にドキュメントタイトルを使用

AEM Site 出力を生成する場合、URL の生成方法は、コンテンツの検出性に重要な役割を果たします。 UUID ベースのファイル名を使用している場合、ファイルの UUID に基づいて URL を生成しても、検索しづらくなります。 管理者または公開者は、AEM サイト出力の URL の生成方法を制御できます。 AEM Guidesでは、UUID ベースのファイル名ではなくファイルのタイトルを使用して、AEM サイト出力の URL を生成できる設定を提供します。 デフォルトでは、UUID ベースのファイルシステムの場合、このオプションはオンになっています。 つまり、UUID ベースのファイルシステムに対してAEM サイト出力を生成する場合、ファイルの UUID ではなく URL の生成にファイルのタイトルが使用されます。

>[!NOTE]
>
> さらに、AEM Site 出力の URL に一連の文字のみを含めるルールを設定することもできます。 詳しくは、[ トピックを作成し、AEM サイトの出力を公開するためのファイル名のサニタイズルールの設定 ](#id2164D0KD0XA) を参照してください。

[ 設定の上書き ](download-install-additional-config-override.md#) の手順に従って、設定ファイルを作成します。 設定ファイルで、次の\（property\）の詳細を指定して、AEM サイト出力での URL 生成を設定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `aemsite.pagetitle` | ブール \（true/false\） ページタイトルを使用して出力を生成する場合は、このプロパティを true に設定します。 デフォルトでは、ファイル名を使用するように設定されています。<br> **デフォルト値**:false |

### ドキュメントのタイトルを使用するには、AEM サイト出力の URL を設定します

AEM Site 出力の URL にドキュメントタイトルを使用できます。 ファイル名が存在しないか、特殊文字がすべて含まれる場合は、AEM サイト出力の URL で特殊文字を区切り文字に置き換えるようにシステムを設定できます。 また、最初の子トピックの名前に置き換えるように設定することもできます。


ページ名を設定するには、次の手順を実行します。

1. [ 設定の上書き ](download-install-additional-config-override.md#) の手順に従って、設定ファイルを作成します。
1. 設定ファイルで、次の（プロパティ）の詳細を指定して、トピックのページ名を設定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.common.SanitizeNodeName` | `nodename.systemDefinedPageName` | ブール値（`true/false`）。 **デフォルト値**: `false` |

たとえば、`<topichead>` の *@navtitle* にすべての特殊文字があり、`aemsite.pagetitle` プロパティを true に設定した場合、既定では区切り文字が使用されます。 `nodename.systemDefinedPageName` プロパティを true に設定すると、最初の子トピックの名前が表示されます。


### AEM Sitesやその他の形式でトピックを作成し、出力を公開するためのファイル名のサニタイズルールを設定します {#id2164D0KD0XA}

管理者は、ファイル名に使用できる有効な特殊文字のリストを定義できます。これらの特殊文字が、最終的にAEM サイトの出力の URL になります。 以前のリリースでは、`@`、`$`、`>` などの特殊文字を含むファイル名を定義できていました。 これらの特殊文字により、AEM サイトページの生成時に URL がエンコードされていました。

3.8 リリース以降、ファイル名で使用できる特殊文字のリストを定義する設定が追加されました。 デフォルトでは、有効なファイル名設定には「`a-z A-Z 0-9 - _`」が含まれます。 つまり、ファイルを作成する際に、ファイルのタイトルに任意の特殊文字を含めることができますが、内部的には、ファイル名ではハイフン\（`-`\）に置き換えられます。 例えば、ファイルのタイトルを Introduction 1 またはIntroduction@1にすることができ、これらの場合に生成される対応するファイル名は Introduction-1 になります。

有効な文字のリストを定義する場合、これらの文字「`*/:[\]|#%{}?&<>"/+`」と `a space` は常にハイフン \（`-`\）に置き換えられることに注意してください。

>[!NOTE]
>
> 有効な特殊文字リストを設定しないと、ファイル作成プロセスで予期しない結果が生じる場合があります。

[ 設定の上書き ](download-install-additional-config-override.md#) の手順に従って、設定ファイルを作成します。 設定ファイルで、次の\（property\）の詳細を指定して、ファイル名とAEM サイト出力に有効な特殊文字を設定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.common.SanitizeNodeNameImpl` | `aemsite.DisallowedFileNameChars` | プロパティが ``'<>`@$`` に設定されていることを確認します。 このリストには、さらに特殊文字を追加できます。 |

>[!NOTE]
> 
> 上記の設定は、すべての出力形式に適用されます。 つまり、PDF、HTMLまたはカスタム出力を生成する際に、最終的な出力は、設定されたファイル名のサニタイズルールに従います。

その他のプロパティも設定できます。例えば、ファイル名で小文字を使用する、無効な文字を処理するための区切り文字、ファイル名に使用できる最大文字数などです。 これらのプロパティを設定するには、次のキーと値のペアを設定ファイルに追加します。

| プロパティキー | プロパティの値 |
|------------|--------------|
| `nodename.uselower` | ブール値\（true/false\）.<br> **デフォルト値**:true |
| `nodename.separator` | 任意の文字。<br> **デフォルト値**:\_ *\（underscore\）* |
| `nodename.maxlength` | 整数値。<br> **デフォルト値**:50 |

### AEM サイトノード構造のフラット化の設定

AEM Site 出力を生成すると、トピック内の各要素のノードが内部に作成されます。 何千ものトピックを持つ DITA マップの場合、このノード構造は深くなりすぎることがあります。 このタイプの深くネストされたノード構造は、大規模なサイトの場合にパフォーマンスの問題が発生する可能性があります。 次のスナップショットは、AEM Site 出力の深くネストされたノード構造を示しています。

![](assets/deep-nested-aem-site-node-structure.png)

上記のスナップショットでは、`p` 要素とその後に続くサブ要素ごとにノードが作成され、トピックで使用されるその他のすべての要素に対して同様の構造が作成されます。

AEM Guidesを使用すると、AEM サイト出力のノード構造が内部でどのように作成されるかを設定できます。 指定した要素のノード構造を統合できます。つまり、メイン要素と見なされる要素を定義し、その中のすべてのサブ要素をメイン要素と結合できます。 例えば、`p` 要素を統合する場合、`p` 要素内に表示される要素は、メインの `p` 要素と結合されます。 `p` 要素内のサブ要素に対しては、別のメモは作成されません。 次のスナップショットは、要素でフラット化されたノード構造 `p` 示しています。

![](assets/flattened-aem-site-node-structure.png)

AEMサイトのノード構造を統合するには、次の手順を実行します。

1. ノード構造をフラット化する要素を特定します。

1. `apps` ノードの `libs` ノードをオーバーレイし、elementmapping.xml ファイルを開きます。

1. ノード構造を統合する要素の定義に `<flatten>true</flatten>` プロパティを追加します。 例えば、`p` 要素のノード構造を統合する場合は、次に示すように、要素の定義に flatten 属性 `p` 追加します。

   ```XML
   <ditaelement>
         <name>p</name>
         <class>- topic/p</class>
         <componentpath>fmdita/components/dita/wrapper</componentpath>
         <type>COMPOSITE</type>
         <target>para</target>
         <flatten>true</flatten>
         <wrapelement>div</wrapelement>
      </ditaelement>
   ```

   >[!NOTE]
   >
   > デフォルトでは、`p` 要素に flatten ノードプロパティが設定されています。

1. [ 設定の上書き ](download-install-additional-config-override.md#) の手順に従って、設定ファイルを作成します。
1. 設定ファイルで、次の\（property\）の詳細を指定します。

   | PID | プロパティキー | プロパティの値 |
   |---|------------|--------------|
   | `com.adobe.dxml.flattening.FlatteningConfigurationService` | `flattening.enabled` | ブール値\（true/false\）.<br> **デフォルト値**: `false` |


これで、AEM Site 出力を生成すると、`p` 要素内のノードが統合され、`p` 要素自体に保存されます。 CRXDE の `p` 要素の新しいフラット化プロパティを参照してください。

![](assets/flatten-aem-site-note-props-crxde.png)

**AEM Site 出力のコンテンツ内の文字列を検索する**

デフォルトでは、AEM Site の出力内でのみ、タイトル内の文字列を検索できます。 タイトルの文字列と、AEM Site 出力の内容または本文の両方を検索するように設定できます。

>[!NOTE]
>
> コンテンツ内の一部の要素に対して検索が機能する場合がありますが、コンテンツ全体に対して機能するように設定できます。

![](assets/flatten-aem-site-note-props-crxde-search.png)

検索を有効にするには、AEM サイトノード構造のフラット化を設定する必要があります。

注意 :

最大 1 MB のフラット化されたコンテンツを検索できます。 例えば、前のスクリーンショットでは、&lt;p\> タグの下のコンテンツが &lt;= 1Mb かどうかを検索できます。

>[!NOTE]
>
> `<flatten>` 属性が true に設定されている場合にのみ、要素に対する検索が機能します。 デフォルトでは、AEM Guidesでは、&lt;p\> &lt;ul\> &lt;lI\> のような一般的に使用されるテキスト要素に対して、`<flatten>` 属性が true に設定されています。 ただし、一部のカスタム要素を作成した場合は、elementmapping.xml ファイルで `<flatten>` 属性を true に設定する必要があります。

**AEM サイトノード構造のフラット化の防止**

AEM サイト出力を統合するノードを指定する場合と同様に、この設定から除外する要素を指定することもできます。 例えば、`body` の要素のノードを統合しても、`body` 内の `table` 要素を統合しない場合は、`table` 要素の定義内に exclude プロパティを追加できます。

`table` 要素をフラット化から除外するには、`table` 要素の定義に次のプロパティを追加します。

`<preventancestorflattening>true|false</preventancestorflattening>`

### AEM Site 出力での削除済みページのバージョン管理の設定

「既存の出力ページ」設定で **削除および** 作成 ****オプションを選択してAEM サイト出力を生成すると、削除するページ\（s\）のバージョンが作成されます。 削除前にバージョンの作成を停止するようにシステムを設定できます。

次の手順を実行して、削除するページ\（s\）のバージョンの作成を停止します。

1. [ 設定の上書き ](download-install-additional-config-override.md#) の手順に従って、設定ファイルを作成します。
1. 設定ファイルで、「**削除されたページのバージョンを作成しない**」オプションを設定するために、次の\（property\）の詳細を指定します。

   | PID | プロパティキー | プロパティの値 |
   |---|------------|--------------|
   | `com.adobe.fmdita.confi g.ConfigManager` | `no.version.creation.on.deletion` | ブール値\（true/false\）.<br> **デフォルト値**: `true` |

   >[!NOTE]
   >
   > このオプションを選択すると、ユーザーは、バージョンを作成せずに任意のページ\を直接削除できます。 このオプションを選択しない場合は、ページが削除される前にバージョンが作成されます。

### Experience Manager Guidesを使用したカスタムリライターの設定 {#custom-rewriter}

Experience Manager Guidesには、クロスマップ（2 つの異なるマップのトピック間のリンク）の場合に生成されるリンクを処理するカスタム sling [**rewriter**](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html) モジュールがあります。 このリライター設定は、次のパスにインストールされています：<br> `/apps/fmdita/config/rewriter/fmdita-crossmap-link-patcher`。

コードベースに別のカスタム sling rewriter がある場合は、Experience Manager Guides sling rewriter が 50 を使用するように、50 より大きい `'order'` 値を使用し `'order'` す。  これを上書きするには、>50 の値が必要です。 詳しくは、[ 出力の書き換えパイプライン ](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html) を参照してください。


## DITA-OT 経由での出力の公開でのメタデータの使用 {#id191LF0U0TY4}

AEM Guidesには、DITA-OT を使用して出力を公開する際に、カスタムメタデータを渡す方法が用意されています。 管理者および公開者は、次のタスクを実行して、公開された出力にカスタムメタデータを設定して使用する必要があります。

- 管理者は、必要なメタデータをシステムに追加して、DITA マップの「プロパティ」 ページで使用できるようにします。

- 管理者は、カスタムメタデータをメタデータリストに追加して、DITA マップコンソールに表示されるようにします。

- パブリッシャーとして、DITA マップを使用してカスタムメタデータを設定および追加し、必要な出力を生成します。


必要なメタデータをシステムに追加するには、次の手順を実行します。

1. Adobe Experience Managerに管理者としてログインします。

1. 上部の「Adobe Experience Manager」リンクをクリックし、「**ツール**」を選択します。

1. ツールのリストから **0}Assets} を選択します。**

1. **メタデータスキーマ** タイルをクリックします。

   メタデータスキーマFormsページが表示されます。

1. リストから **デフォルト** フォームを選択します。

   >[!NOTE]
   >
   > DITA マップの「プロパティ」 ページに表示されるプロパティは、このフォームから取得されます。

1. 「**編集**」をクリックします。

1. 公開済みの出力で使用するカスタムメタデータを追加します。 例えば、次の手順を使用してオーディエンスメタデータを追加します。

   1. **フォームを作成** コンポーネントリストから、**1 行のテキスト** コンポーネントをフォームにドラッグ&amp;ドロップします。

   2. 新しいフィールドを選択して、フィールドの **設定** を開きます。

   3. **フィールドラベル** に、メタデータ名「オーディエンス」を入力します。

   4. **プロパティにマッピング** 設定で、を指定します。/jcr:content/metadata/&lt; メタデータの名前\>。 この例では、をに設定します。/jcr:content/metadata/audience です。

   これらの手順を使用して、必要なメタデータパラメーターをすべて追加します。

1. 「**保存**」をクリックします。


すべての DITA マップの「プロパティ」 ページに新しいパラメータが表示されます。

![](assets/properties-page-custom-metadata.PNG)

次に、DITA マップコンソールでカスタムメタデータを使用できるようにする必要があります。 次の手順を実行して、DITA マップダッシュボードでカスタムメタデータを使用できるようにします。

1. パッケージマネージャーを使用して、Cloud Managerの Git リポジトリの次の場所にある metadataList ファイルにアクセスします。

   /libs/fmdita/config/metadataList

   >[!NOTE]
   >
   > metadataList ファイルには、マップダッシュボードの DITA マップの **プロパティ** ドロップダウンリストに表示されるプロパティのリストが含まれています。 デフォルトでは、このファイルには 4 つのプロパティ（docstate、dc:language、dc:description、dc:title）がリストされています。

1. メタデータスキーマのFormsページに追加したカスタムメタデータを追加します。 この例では、デフォルトリストの末尾にオーディエンスパラメーターを追加します。


これで、DITA マップコンソールの **プロパティ** ドロップダウンリストにカスタムメタデータが表示されます。

最後に、パブリッシャーとして、公開出力にカスタムメタデータを含める必要があります。 出力の生成時にカスタムメタデータを処理するには、次の手順を実行します。

1. Assets UI で、公開する DITA マップに移動します。

1. DITA マップファイルを選択し、そのプロパティページを開きます。

1. プロパティ ページで、カスタムメタデータの値を指定します。 この例では、オーディエンスパラメーターに External の値を指定しました。

   ![](assets/properties-page-custom-metadata-value.png)

1. 「**保存して閉じる**」をクリックします。

1. DITA マップファイルをクリックして、DITA マップコンソールを開きます。

1. 「**出力プリセット**」タブで、出力の生成に使用する出力プリセットを選択します。

1. 「**編集**」をクリックします。

1. **プロパティ** ドロップダウンリストから、公開プロセスに渡すプロパティを選択します。

   ![](assets/props-in-publish-output.PNG)


選択したプロパティやメタデータが公開プロセスに渡され、最終的な出力で使用できるようになります。

### DITA-OT に渡すメタデータの処理の検証

DITA-OT に渡されたメタデータ値を検証するには、クラウド対応 JAR を使用するローカル環境を使用できます。 クラウド上のローカルファイルシステムにアクセスできないので、メタデータファイルを検証するには、クラウド対応 jar を使用する方法しかありません。

- ファイル名：metadata.xml
- ファイルの場所：crx-quickstart/profiles/ditamaps/&lt;ditamap-1234\>

  metadata.xml にアクセスするには：

   - AEM インスタンスが実行されているサーバーの場所にログインします。
   - crx-quickstart/profiles/ditamaps/&lt;newly-created-directory-name\>/metadata.xmlに移行します。
- サンプルファイル形式：

  **metadata.xml**

  ```XML
  <?xml version="1.0" encoding="UTF-8" standalone="no"?>
  <root>
     <Path id="/absolutePath/sampleMap.ditamap">
        <metadata>
           <meta isArray="false" key="dc:description">This is a file</meta>
           <meta isArray="false" key="dc:title">Myfile</meta>
           <meta isArray="true" key="multivalueText">One;Two;Three</meta>
        </metadata>
     </Path>
     <Path id="/absolutePath/sampleTopic.dita">
        <metadata>
           <meta isArray="false" key="dc:description">description for the accountability</meta>
           <meta isArray="false" key="dc:title">accountability title</meta>
           <meta isArray="true" key="multivalueText">value1</meta>
        </metadata>
     </Path>
  </root>
  ```


- isArray: メタデータが複数値\（Array\）かどうかを定義するブール属性。 値はセミコロンで区切られます。
- パス ID：一時ディレクトリに保存されているファイルへの絶対パス。

>[!NOTE]
>
> ファイルに特定のメタデータが存在しない場合、キーを含む &lt;meta\> タグは、metadata.xml ファイルのそのファイルのプロパティとして表示されません。

## ルートマップメタデータを受け入れるように、DITA-OT コマンドライン引数フィールドを設定します

DITA-OT コマンドライン引数フィールドを使用してルートマップメタデータを渡すには、次の手順を実行します。

1. [ 設定の上書き ](download-install-additional-config-override.md#) の手順に従って、設定ファイルを作成します。
1. 設定ファイルで、次の\（property\）詳細を指定して、プリセットの DITA-OT コマンドライン引数フィールドを設定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `pass.metadata.args.cmd.line` | ブール\（`true/false`\）**デフォルト値**: `true` |

- プロパティ値を **true** に設定すると、DITA-OT コマンドライン機能が有効になり、DITA-OT コマンドラインからメタデータを渡すことができます。
- プロパティ値を **false** に設定すると、DITA-OT コマンドライン機能が無効になります。 その後、プリセットのプロパティ フィールドを使用して、メタデータを渡すことができます。



## AEM コンポーネントを使用した DITA 要素マッピングのカスタマイズ {#id1679J600HEL}

AEM Guides内の DITA エレメントは、対応するAEM コンポーネントにマッピングされます。 AEM Guidesは、公開やレビューなどのワークフローでこのマッピングを使用して、DITA 要素を対応するAEM コンポーネントに変換します。 マッピングは `elementmapping.xml` ファイルで定義され、パッケージマネージャーを使用してアクセスできます。

>[!NOTE]
>
> ``libs`` ノードでデフォルトの設定ファイルをカスタマイズする必要はありません。 ``apps`` ノードに ``libs`` ノードのオーバーレイを作成し、``apps`` ノードでのみ必要なファイルを更新する必要があります。

定義済みの DITA エレメントマッピングを使用するか、カスタムのAEM コンポーネントに DITA エレメントをマッピングできます。 カスタム AEM コンポーネントを使用するには、`elementmapping.xml` ファイルの構造を理解している必要があります。

### elementmapping.xml 構造

`elementmapping.xml` の構造の概要を以下に説明します。

1. すべての DITA 要素は、最初に要素名に基づいて対応するコンポーネントマッピングを検索されます。 例：

   ```XML
   <ditaelement>     
      <name>**substeps**</name>  
      <class>- topic/ol task/substeps</class>  
      <componentpath>dita/components/ditaolist</componentpath>  
      <type>COMPOSITE</type>  
      <target>para</target>
   </ditaelement>
   ```

   上記の例では、すべて `substeps`DITA エレメントが `dita/components/ditaolist` コンポーネントを使用してレンダリングされます。

1. DITA エレメントが名前に基づく一致を見つけられない場合は、`class` に基づく一致が行われます。 例：

   ```XML
   <ditaelement>  
      <name>topic</name>  
      <class>**- topic/topic**</class>  
      <componentpath>fmdita/components/dita/topic</componentpath>  
      <type>COMPOSITE</type>  
      <target>para</target>  
      <attributemap> 
         <attribute from="id" to="id" />  
      </attributemap>
   </ditaelement>
   ```

   上記の例では、`task` 要素にマッピングが定義されていない場合、`task` 要素は上記のコンポーネントにマッピングされます。`task` れは、`topic` コンポーネントから継承されるからです。

1. 要素が対応するコンポーネントマッピングを持つ場合、その子要素のさらなる処理は `type` によって決定される。 例：

   ```XML
   <ditaelement>  
      <name>title</name>  
      <class>- topic/title</class>  
      <componentpath>foundation/components/title</componentpath>  
      <type>**STANDALONE**</type>  
      <target>para</target>  
      <textprop>jcr:title</textprop>
   </ditaelement>
   ```

   `type` は次の値を取ります。

   - COMPOSITE：要素からコンポーネントへ *子要素のマッピングも継続*。

   - STANDALONE：現在の要素の子要素が *それ以上マッピングされない*。

   上記の例では、`<title>` 要素に子要素がある場合、それらは他のコンポーネントにはマッピングされません。 要素のコンポーネントは `<title>``<title>` 要素内のすべての子要素のレンダリングを担当します。

1. 1 つの DITA エレメントに複数のコンポーネントがマッピングされている場合は、そのエレメントに最適なコンポーネントが選択されます。 最適なマッチコンポーネントを選択するには、DITA エレメントのドメインと構造的特殊化が考慮されます。

   ドメイン特殊化された DITA エレメントがあり、あるコンポーネントがドメイン特殊化にマップされている場合、そのコンポーネントは高い優先度を与えられます。

   同様に、構造的特殊化された DITA エレメントがあり、あるコンポーネントが構造的特殊化用にマッピングされている場合、そのコンポーネントは高い優先度を与えられます。

1. 要素マッピングで `<attributemap>` を使用して、属性値を対応するノードプロパティにマッピングできます。
1. `textprop` を使用して、DITA 要素のテキストコンテンツをノードプロパティにシリアル化できます。 また、要素タグで複数回使用して、公開階層内の複数の場所にあるテキストコンテンツをシリアル化できます。 ターゲットプロパティの場所と名前をカスタマイズすることもできます。 例：

   ```XML
   <ditaelement>
      <name>title</name>
      <componentpath>foundation/components/title</componentpath>
      <type>STANDALONE</type>
      <target>para</target>
       <textprop>**jcr:title**</textprop>
   </ditaelement>
   ```

   上記の要素マッピングでは、要素のテキストコンテンツ `<title>`、出力ノードの `jcr:title` という名前のプロパティの値として保存されることを指定しています。

1. 特定 `xmlprop` 要素の XML 全体をノードプロパティにシリアル化するために使用できます。 その後、コンポーネントはこのノードプロパティを読み取り、カスタムレンダリングを実行できます。 例：

   ```XML
   <ditaelement>
       <name>svg-container</name>
      <class>+ topic/foreign svg-d/svg-container</class>
       <componentpath>fmdita/components/dita/svg</componentpath>
       <type>STANDALONE</type>
       <target>para</target>
      <xmlprop>**data**</xmlprop>
   </ditaelement>
   ```

   上記の要素マッピングは、要素 `<svg-container>` の XML マークアップ全体が、出力ノードの `data` という名前のプロパティの値として保存されることを指定しています。

1. 出力生成プロセスでパス解決を処理するために、特別な属性マッピングがあります。 例：

   ```XML
   <attributemap>
      <attribute from="href" to="fileReference" ispath="true" rel="source" />
      <attribute from="height" to="height" />
       <attribute from="width" to="width" />
   </attributemap>
   ```

   上記の `attributemap` では、DITA 要素の `href` 属性が `fileReference` という名前のノードプロパティにマッピングされます。 `ispath` が `true` に設定されているので、出力生成プロセスはこのパスを解決して、ノードプロパティに設定 `fileReference` ます。

   この解決がどのように行われるかは、属性マッピングの `rel` 属性の値に基づいて決定されます。

   - `rel=source` の場合、現在処理中の DITA ソースファイルに関して `href` の値が解決されます。 `href` の値が解決され、プロパティの値 `fileReference` 配置されます。

   - `rel=target` の場合、`href` の値はルートの公開場所を基準に解決されます。 `href` の値が解決され、プロパティの値 `fileReference` 配置されます。

   パス属性に対して前処理または解決を実行しない場合は、`ispath` 属性を指定する必要はありません。 値がそのままコピーされ、コンポーネントは必要な解決を実行できます。


### DITA 要素スキーマ

ファイル内の DITA 要素スキーマの例 `elementmapping.xml` 次に示します。

```XML
<ditaelement>        
    <name>element_name</name>    
    <class>element_class</class>    
    <componentpath>fmdita/components/dita/component_name</componentpath>    
    <type>COMPOSITE|STANDALONE</type>     
    <attributeprop>propname_a</attributeprop>      
    <textprop>propname_t</textprop>    
    <xmlprop>propname_x</xmlprop>     
    <xpath>xpath expression string</xpath>     
    <target>head|para</target>     
    <wrapelement>div</wrapelement>     
    <wrapclass>class_name</wrapclass>     
    <attributemap>         
        <attribute from="attrname"         to="propname"         ispath="true|false"         rel="source|target" />    
    </attributemap>    
    <skip>true|false</skip> 
</ditaelement>
```

次の表に、DITA エレメントスキーマのエレメントを示します。

| 要素 | 説明 |
|-------|-----------|
| `<ditaelement>` | 各マッピング要素の最上位ノード。 |
| `<class>` | コンポーネントを書き込むターゲット DITA 要素のクラス属性。<br> たとえば、DITA トピックの class 属性は <br> のようになります。 `- topic/topic` |
| `<componentpath>` | マッピングされたAEM コンポーネントの CRXDE パス。 |
| `<type>` | 使用可能な値：<br> -   **COMPOSITE**：子要素も処理 <br> ます –    **STANDALONE**：子要素の処理をスキップします |
| `<attributeprop>` | シリアル化された DITA アトリビュートと値をプロパティとしてAEM ノードにマッピングするために使用します。 例えば、`<note type="Caution">` 要素があり、この要素用にマッピングされるコンポーネントに `<attributeprop>attr_t</ attributeprop>` がある場合、ノードの属性と値は、対応するAEM ノードの `attr_t` プロパティ \（`attr_t->type="caution"`\）にシリアル化されます。 |
| `<textprop>propname_t</textprop>` | `getTextContent()` 出力を `propname_t.` <br> で定義されたプロパティに保存します **メモ：** 最適化されたプロパティです。 |
| `<xmlprop>propname_x </xmlprop>` | このノードのシリアル化された XML を、で定義されたプロパティに保存します `propname_x.<br> `**注意：** これは最適化されたプロパティです。 |
| `<xpath>` | XPath 要素が要素マッピングで指定されている場合、使用するコンポーネントマッピングについて、要素名およびクラスと共に XPath 条件も満たす必要があります。 |
| `<target>` | DITA 要素を crx リポジトリ内の指定した場所に配置します。<br> 使用可能な値：<br>～**head**:head ノードの下 <br> - **text**：段落ノードの下 |
| `<wrapelement>` | コンテンツを含めるHTML要素。 |
| `<wrapclass>` | プロパティ `wrapclass.` の要素値 |
| `<attributemap>` | 1 つ以上の `<attribute>` ノードを含むコンテナノード。 |
| `<attribute from="attrname" to="propname" ispath="true|false" rel="source|target" />` | DITA 属性をAEM プロパティにマップします。<br> -   **`from`**: DITA 属性名 <br> -   **`to`**:AEM コンポーネントのプロパティ名 <br> -   **`ispath`**：属性がパス値の場合\（例：*image*\） <br> -   **`rel`**：パスがソースまたはターゲット <br> スの場合 **メモ：** `attrname` が `%` で始まる場合は、`attrname minus '%'` を prop 「`propname`」にマッピングします。 |

**補足事項**

- デフォルトの要素マッピングをオーバーライドする場合は、デフォルトの `elementmapping.xml` ファイルを変更しないことをお勧めします。 新しいマッピング XML ファイルを作成し、ファイルを別の場所（できれば、作成したカスタムアプリフォルダー内）に配置する必要があります。

- `elementmapping.xml` ファイルには、fmdita/components/dita/wrapper コンポーネントを参照するマッピングエントリが多数あります。 ラッパーは、サイトノードのプロパティを使用して比較的単純な DITA 構成をレンダリングし、関連するHTMLを生成する汎用コンポーネントです。 `wrapelement` プロパティを使用して囲むタグを生成し、子レンダリングを対応するコンポーネントに委任します。 これは、コンテナコンポーネントのみを必要とする場合に便利です。 `div` や `p` などの特定のコンテナタグをレンダリングする新しいコンポーネントを作成する代わりに、`wrapelement` プロパティと `wrapclass` プロパティを持つラッパーコンポーネントを使用して、同じ効果を得ることができます。

- 大量のテキストを文字列 JCR プロパティに保存することはお勧めしません。 出力生成の最適化されたプロパティタイプ計算により、大きなテキストコンテンツが文字列タイプとして保存されなくなります。 代わりに、特定のしきい値を超えるコンテンツを保存する必要がある場合は、プロパティのタイプをバイナリに変更します。 デフォルトでは、このしきい値は 512 バイトに設定されていますが、**バイナリしきい値として保存** 設定を変更することで、Configuration Manager \（*com.adobe.fmdita.config.ConfigManager*\）で変更できます。

- 一部の\（すべてではない\）の要素マッピングを上書きする場合は、`elementmapping.xml` ファイル全体をレプリケートする必要はありません。 新しい XML マッピングファイルを作成し、上書きする要素のみを定義する必要があります。

- カスタムの場所に XML ファイルを作成したら、`com.adobe.fmdita.config.ConfigManager` バンドルの `Override Element Mapping` 設定を更新します。


## DITA マップコンソールのカスタマイズ {#id188HC08M0CZ}

AEM Guidesには、DITA マップコンソールの機能を柔軟に拡張する機能があります。 例えば、AEM Guidesで使用可能なものとは異なる一連のレポートがある場合、そのようなレポートをマップコンソールに追加できます。 マップコンソールをカスタマイズするには、必要な機能を実行するコードを含むAEM クライアントライブラリ \（または ClientLib \）を作成する必要があります。

>[!NOTE]
>
> 製品の新しいリリースで上書きされるので、ページコンポーネントを直接変更することはお勧めしません。

AEM Guidesには、マップコンソールをカスタマイズするための `apps.fmdita.dashboard-extn` カテゴリが用意されています。 マップコンソールが読み込まれると、`apps.fmdita.dashboard-extn` カテゴリの下に作成された機能が実行されて読み込まれます。

>[!NOTE]
>
> AEM クライアントライブラリの作成について詳しくは、[ クライアントサイドライブラリの使用 ](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/implementing/developing/full-stack/clientlibs.html?lang=en) を参照してください。

## 出力生成時の画像レンディションの処理 {#id177BF0G0VY4}

AEMには、アセットの処理に使用するデフォルトのワークフローとメディアハンドルのセットが付属しています。 AEMには、最も一般的な MIME タイプのアセット処理を処理するための事前定義済みワークフローがあります。 通常、アップロードする画像ごとに、AEMによって同じ画像の複数のレンディションがバイナリ形式で作成されます。 これらのレンディションは、サイズ、解像度、透かしの追加、その他の変更された特性が異なる場合があります。 AEMでのアセットの処理方法について詳しくは、AEM ドキュメントの [ メディアハンドラーとワークフローを使用したAssetsの処理 ](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/assets/asset-microservices-overview.html?lang=en) を参照してください。

AEM Guidesでは、ドキュメントの出力を生成する際に使用する画像レンディションを設定できます。 例えば、デフォルトの画像レンディションの 1 つから選択するか、画像レンディションを作成し、それを使用してドキュメントを公開することができます。 ドキュメントを公開するための画像レンディションマッピングは、`/libs/fmdita/config/ **renditionmap.xml**` ファイルに保存されます。 ファイルのスニペ `renditionmap.xml` トを次に示します。

>[!NOTE]
>
> `renditionmap.xml` ファイルのコピーを、すべてのカスタマイズ用に `apps` フォルダーに作成することをお勧めします。

```XML
<renditionmap>
   <mapelement>
      <mimetype>image/png</mimetype>
      <rendition output="AEMSITE">cq5dam.web.1280.1280.jpeg</rendition>
      <rendition output="PDF">original</rendition>
      <rendition output="HTML5">cq5dam.web.1280.1280.jpeg</rendition>
      <rendition output="EPUB">cq5dam.web.1280.1280.jpeg</rendition>
      <rendition output="CUSTOM">cq5dam.web.1280.1280.jpeg</rendition>
   </mapelement>
...
</renditionmap>
```

`mimetype` 要素は、ファイル形式の MIME タイプを指定します。 `rendition output` 要素は、出力形式のタイプと、指定した出力の公開に使用するレンディションの名前\（例：`cq5dam.web.1280.1280.jpeg`\）を指定します。 サポートされる全ての出力形式（AEMSITE、PDF、HTML5、EPUB、CUSTOM）で使用する画像レンディションを指定できます。

指定したレンディションが存在しない場合、AEM Guides公開プロセスは、指定された画像の web レンディションを最初に検索します。 Web レンディションも見つからない場合は、画像の元のレンディションが使用されます。

>[!NOTE]
>
> これらの画像レンディションは、出力の生成のみを制御します。 画像の web レンディションは、ドキュメントをプレビューまたはレビュー用に開いたときに使用されます。

## 出力履歴の自動パージ期間の設定 {#id19AAI070V8Q}

出力を生成すると、出力が出力ログと共に作成されます。 大きな DITA マップの場合、これらのログはリポジトリ内に大量の領域を取る可能性があります。 デフォルトでは、ログはリポジトリ内の次の場所に保存されます。

`/var/dxml/metadata/outputHistory`

時間が経つと、すべてのログファイルの全体のサイズが GB に達する可能性があります。 AEM Guidesでは、これらのログファイルをリポジトリに保持する期間を設定できます。 指定した期間が経過すると、ログは出力生成履歴と共にリポジトリから削除されます。

>[!NOTE]
>
> 出力生成履歴は、「出力」タブの「生成された出力」リスト内のログエントリです。

履歴パージ機能を設定すると、リポジトリ内のすべての DITA マップの出力生成に影響します。 DITA マップの「出力」タブでは、履歴は指定した日数が経過した後、設定で指定した時間にパージされます。

>[!NOTE]
>
> ログファイルと出力生成履歴を削除しても、生成された出力には影響しません。

[ 設定の上書き ](download-install-additional-config-override.md#) の手順に従って、設定ファイルを作成します。 設定ファイルで、次の\（property\）詳細を指定して、出力履歴とログをパージする日時を設定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `output.history.purgeperiod` | 出力ログと共に出力履歴がパージされるまでの日数を指定します。 この機能を無効にする場合は、このプロパティを 0.Everyday に設定します。指定した時間に、このプロパティで指定した日数より前に生成された出力に対してパージ・プロセスが実行されます。<br> **デフォルト値**:5 |
| `output.history.purgetime` | パージプロセスが開始される時刻を指定します。<br> **デフォルト値**:0:00 \（または 12:00 midnight\） |

## 最近生成された出力リストの制限の変更 {#id1679JH0H0O2}

DITA マップの「出力」 タブに表示される出力の最大数を変更できます。

[ 設定の上書き ](download-install-additional-config-override.md#) の手順に従って、設定ファイルを作成します。 設定ファイルで、次の\（property\）の詳細を指定して、リストに表示する出力数を変更します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `output.historylimit` | 整数値。<br> **デフォルト値**:25 |

>[!TIP]
>
> 出力履歴の操作に関するベストプラクティスについては、ベストプラクティスガイドの *出力履歴* の節を参照してください。

