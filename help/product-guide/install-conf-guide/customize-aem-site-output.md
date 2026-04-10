---
title: 出力生成設定の設定
description: 出力生成設定の設定方法について説明します
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '3098'
ht-degree: 1%

---


# AEM サイト出力のカスタマイズ {#id166TG0B30WR}

AEM Guidesでは、次の形式での出力の作成がサポートされています。

- AEMサイト
- PDF
- HTML5
- EPUB
- DITA-OTによるカスタム出力

AEM サイト出力では、異なる出力タスクに異なるデザインテンプレートを割り当てることができます。 これらのデザインテンプレートは、異なるレイアウトでDITA コンテンツをレンダリングできます。 たとえば、社内外のオーディエンスに対して、異なるデザインテンプレートを指定することができます。

カスタマイズされたDITA Open Toolkit \（DITA-OT\） プラグインをAEM Guidesと共に使用することもできます。 これらのカスタム DITA-OT プラグインをアップロードして、特定の方法でPDF出力を生成できます。

>[!TIP]
>
> AEM サイト出力の作成に関するベストプラクティスについては、*ベストプラクティスガイド*&#x200B;の[AEM サイト公開](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/cs-mar-22/Adobe-Experience-Manager-Guides_Best-Practices_EN.pdf)の節を参照してください。


## 出力を生成するためのデザインテンプレートのカスタマイズ {#customize_xml-add-on}

AEM Guidesでは、一連の定義済みデザインテンプレートを使用して、AEM サイト出力を生成します。 AEM Guides デザインテンプレートをカスタマイズして、企業ブランディングに準拠した出力を生成できます。 デザインテンプレートは、様々なスタイル \（CSS\）、スクリプト \（サーバーサイドとクライアントサイドの両方\）、リソース \（画像、ロゴ、その他のアセット\）、およびJCR ノードのコレクションで、これらのリソースをすべて結びつけます。 デザインテンプレートは、単一のサーバーサイドスクリプトと複数のJCR ノードの組み合わせ、またはスタイル、リソース、JCR ノードの複雑な組み合わせで作成できます。 デザインテンプレートは、AEM Guides パブリッシングサブシステムでAEM サイト出力を生成する際に使用され、生成された出力の構造、外観を制御します。

デザインテンプレートリソースをサーバー上のどこに配置するかという制限はありませんが、通常は機能に応じて論理的に整理されています。 例えば、デフォルトのテンプレートには、すべてのJavaScript ファイルとCSS ファイルが`/etc/designs/fmdita/clientlibs/siteoutput/default` フォルダーに保存されています。 これらのファイルの場所は、JCR ノードのコレクションによってリンクされています。 これらのJCR ノードとファイルは、デザインテンプレート全体を構成します。

AEM Guidesに付属しているデフォルトのデザインテンプレートでは、ランディングページ、トピックおよび検索ページコンポーネントをカスタマイズできます。 デフォルトデザインと対応する参照テンプレートのコピーを作成し、様々なコンポーネントを指定して目的の出力を生成できます。

次のタブには、Experience Manager Guidesの設定に基づいてAEM サイト出力の生成に使用する独自のデザインテンプレートを指定する手順が示されています。Cloud Serviceまたはオンプレミス。

>[!BEGINTABS]

>[!TAB Cloud Service]

1. パッケージマネージャーを使用して、デフォルトデザインテンプレートを次の場所からダウンロードします。

   /libs/fmdita/config/templates

1. Cloud ManagerのGit リポジトリの次の場所に、ダウンロードしたファイルのコピーを作成します。

   /apps/fmdita/config/templates

1. また、デフォルトのテンプレートノードから参照されるテンプレートをダウンロードしてコピーする必要があります。 参照されたテンプレートは、次の場所に配置されます。

   /libs/fmdita/templates/default/cqtemplates

>[!TAB  オンプレミス ]

1. AEMにログインし、CRXDE Lite モードを開きます。

1. デフォルトのデザインテンプレートノードに移動します。 デフォルトのデザインテンプレートノードの場所は次のとおりです。

   `/libs/fmdita/config/templates/`

   ![](assets/templates-node.png){width="300" align="left"}

   >[!NOTE]
   >
   > `libs` フォルダーから`apps` フォルダーにデフォルトのデザインテンプレートをコピーし、`apps` フォルダーに変更を加えます。 デフォルトのテンプレートノードから参照されるテンプレートも変更する必要があります。 参照されたテンプレートは`/libs/fmdita/templates/default/cqtemplates` ノードの下に配置されます。 変更を加える前に、`apps` フォルダー内の参照テンプレートのコピーを作成します。

1. *テンプレート* ノードの&#x200B;*デフォルト* コンポーネントをクリックして、そのプロパティにアクセスします。

>[!ENDTABS]

AEM Guides デザインテンプレートのプロパティについては、次の表を参照してください。

| プロパティ | 説明 |
|--------|-----------|
| `landingPageTemplate`、`searchPageTemplate`、`topicPageTemplate`、`shadowPageTemplate` | これらの対応するページ \（ランディング、検索、トピック\）の`cq:Template` ノードを指定します。 デフォルトでは、これらのページの`cq:Template` ノードは`/libs/fmdita/templates/default/cqtemplates` ノードにあります。 このノードは、ランディングページ、検索ページ、トピックページの構造とプロパティを定義します。<br> `shadowPageTemplate`は、チャンク化されたコンテンツの最適化に使用されます。 このプロパティの値を`fmdita/templates/default/cqtemplates/shadowpage` <br>に設定する必要があります **メモ：** `topicPageTemplate`の値を指定する必要があります。 `landingPageTemplate`と`searchPageTemplate`はオプションのプロパティです。 検索ページとランディングページを生成しない場合は、これらのプロパティを指定しないでください。 |
| `title` | デザインテンプレートのわかりやすい名前。 |
| `topicContentNode` | トピックページ内のDITA コンテンツを含むノードの場所。 パスはトピックページを基準としています。 |
| `topicHeadNode` | DITA コンテンツから派生したヘッド値\（またはメタデータ\）を含むノードの場所。 パスはトピックページを基準としています。 |
| `tocNode` | 目次を含むノードの場所。 パスは、ランディングページまたは宛先パスを基準とした相対パスです。 |
| `basePathProp` | 公開されたサイトのルートのパスを保存するためのプロパティ名。 |
| `indexPathProp` | 公開されたサイトのランディング/インデックスページのパスを保存するためのプロパティ名。 |
| `pdfPathProp` | トピックのPDF生成が有効になっている場合の、トピックのPDF パスを格納するためのプロパティ名。 |
| `pdfTypeProp` | PDF生成の型を格納するプロパティ名。 現在、このプロパティには常に「トピック」が含まれています。 |
| `searchPathProp` | テンプレートに検索ページが含まれている場合、検索ページのパスを保存するためのプロパティ名。 |
| `siteTitleProp` | 公開するサイトのタイトルを保存するためのプロパティ名。 このタイトルは、通常、公開されるマップのタイトルと同じです。 |
| `sourcePathProp` | 現在のページのソース DITA トピックのパスを保存するためのプロパティ名。 |
| `tocPathProp` | 公開済みサイトの目次ルートのパスを保存するためのプロパティ名。 |


>[!NOTE]
>
> カスタムデザインテンプレートノードを作成した後、カスタムデザインテンプレートノードを使用するには、AEM サイト出力プリセットの「デザイン」オプションを更新する必要があります。

詳しくは、[最初のAdobe Experience Manager web サイトの作成](https://experienceleague.adobe.com/docs/experience-manager-learn/getting-started-wknd-tutorial-develop/overview.html?lang=ja)および[AEMでの独自のweb サイトの開発の基本](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/implementing/developing/full-stack/develop-wknd-tutorial.html?lang=en)を参照してください。

## AEM サイト出力の生成にドキュメントタイトルを使用する

AEM サイト出力を生成する場合、URLの生成方法は、コンテンツの見つけやすさの中で重要な役割を果たします。 UUID ベースのファイル名を使用している場合、ファイルのUUIDに基づくURLの生成は検索に適していません。 管理者または発行者は、AEM サイト出力のURLを生成する方法を制御できます。 AEM Guidesでは、UUID ベースのファイル名ではなく、ファイルのタイトルを使用してAEM サイト出力のURLを生成するように設定できます。 UUID ベースのファイルシステムの場合、デフォルトでは、このオプションはオンになっています。 つまり、UUID ベースのファイルシステム用にAEM サイト出力を生成する場合、ファイルのタイトルは、ファイルのUUIDではなく、URLの生成に使用されます。

UUID ベース以外のファイルシステムを使用したオンプレミス設定の場合、AEM サイトの出力は、ファイルのタイトルではなくファイル名を使用して生成されます。 デフォルトでは、このオプションはオフになっています。 つまり、AEM サイト出力を生成する場合、ファイル名はファイルのタイトルではなくURLの生成に使用されます。 このオプションを有効にすると、ファイルのタイトルに基づいてURLを生成することができます。

次のタブには、Experience Manager Guidesの設定に基づいてAEM サイト出力で生成されるURLを設定する手順が示されています。Cloud Serviceまたはオンプレミス。

>[!NOTE]
>
> さらに、AEM サイト出力のURL内の一連の文字のみを許可するようにルールを設定できます。 詳しくは、[&#x200B; トピックの作成とAEM サイト出力の公開に関するファイル名削除ルールの設定](#id2164D0KD0XA)を参照してください。

>[!BEGINTABS]

>[!TAB Cloud Service]

設定ファイルを作成するには、[設定の上書き](download-install-config-override.md#)の手順を使用します。 コンフィギュレーションファイルで、次の\（property\）詳細を指定して、AEM サイト出力のURL生成を設定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `aemsite.pagetitle` | ブール値\（true/false\）。 ページタイトルを使用して出力を生成する場合は、このプロパティをtrueに設定します。 デフォルトでは、ファイル名を使用するように設定されています。<br> **デフォルト値**: false |


>[!TAB  オンプレミス ]

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.config.ConfigManager** バンドルを検索してクリックします。

1. 「**AEM サイトページ名にタイトルを使用**」オプションを選択します。

   >[!NOTE]
   >
   > ファイル名を使用して出力を生成する場合は、このオプションの選択を解除します。

1. 「**保存**」をクリックします。

>[!ENDTABS]

## ドキュメントタイトルを使用するようにAEM サイト出力のURLを設定します（Cloud Serviceのみ）

AEM サイト出力のURLにドキュメントタイトルを使用できます。 ファイル名が存在しない場合、またはすべての特殊文字が含まれている場合は、AEM サイト出力のURLで特殊文字を区切り記号に置き換えるようにシステムを設定できます。 また、最初の子トピックの名前に置き換えるように設定することもできます。


ページ名を設定するには、次の手順を実行します。

1. 設定ファイルを作成するには、[設定の上書き](download-install-config-override.md#)の手順を使用します。
1. 設定ファイルで、次の（プロパティ）詳細を指定して、トピックのページ名を設定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.common.SanitizeNodeName` | `nodename.systemDefinedPageName` | ブール値（`true/false`）。 **デフォルト値**: `false` |

例えば、*の*@navtitle`<topichead>`にすべての特殊文字があり、`aemsite.pagetitle` プロパティをtrueに設定した場合、デフォルトでは区切り記号が使用されます。 `nodename.systemDefinedPageName` プロパティをtrueに設定すると、最初の子トピックの名前が表示されます。


## AEM Sitesやその他の形式でトピックを作成し、出力を公開するためのファイル名サニタイズルールを設定します {#id2164D0KD0XA}

管理者は、ファイル名で許可される有効な特殊文字のリストを定義できます。これにより、AEM サイト出力のURLが作成されます。 以前のリリースでは、ユーザーは`@`、`$`、`>`などの特殊文字を含むファイル名を定義できました。 これらの特殊文字により、AEM サイトページの生成時にエンコードされたURLが生成されました。

3.8 リリース以降、ファイル名で許可される特殊文字のリストを定義するための設定が追加されました。 デフォルトでは、有効なファイル名設定には「`a-z A-Z 0-9 - _`」が含まれています。 つまり、ファイルの作成時に、ファイルのタイトルに特殊文字を使用できますが、内部的にはファイル名のハイフン\（`-`\）に置き換えられます。 例えば、ファイルのタイトルをIntroduction 1またはIntroduction@1にすることができます。両方の場合に生成される対応するファイル名はIntroduction-1です。

有効な文字のリストを定義する場合、これらの文字「`*/:[\]|#%{}?&<>"/+`」と`a space`は常にハイフン\（`-`\）に置き換えられることを忘れないでください。

>[!NOTE]
>
> 有効な特殊文字リストを設定しないと、ファイル作成プロセスで予期しない結果が発生する場合があります。

次のタブでは、Experience Manager Guidesの設定に基づいて、ファイル名とAEM サイト出力の有効な特殊文字を設定する手順を示します。Cloud Serviceまたはオンプレミスです。

>[!BEGINTABS]

>[!TAB Cloud Service]

設定ファイルを作成するには、[設定の上書き](download-install-config-override.md#)の手順を使用します。 コンフィギュレーションファイルで、ファイル名とAEM サイト出力に有効な特殊文字を設定するために、次の\（property\）詳細を指定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.common.SanitizeNodeNameImpl` | `aemsite.DisallowedFileNameChars` | プロパティが``'<>`@$``に設定されていることを確認してください。 このリストにさらに特殊文字を追加できます。 |

>[!NOTE]
> 
> 上記の設定は、すべての出力形式に適用されます。 つまり、PDF、HTML、またはカスタム出力を生成する場合、最終的な出力は、設定されたファイル名のサニタイズルールに従います。

ファイル名の大文字と小文字、無効な文字を処理する区切り記号、ファイル名で許可される最大文字数など、他のプロパティも設定できます。 これらのプロパティを設定するには、設定ファイルに次のキー値のペアを追加します。

| プロパティキー | プロパティの値 |
|------------|--------------|
| `nodename.uselower` | ブール値\（true/false\）。<br> **デフォルト値**: true |
| `nodename.separator` | 任意の文字。<br> **デフォルト値**: \_ *\（underscore\）* |
| `nodename.maxlength` | 整数値。<br> **デフォルト値**: 50 |

>[!TAB  オンプレミス ]

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.common.SanitizeNodeNameImpl* バンドルを検索してクリックします。

1. AEM Sites **への公開用に**&#x200B;許可されていない文字セット プロパティで、プロパティが```'<>`@$```に設定されていることを確認します。 このリストにはさらに特殊文字を追加できますが、必須の特殊文字が必要です。

   >[!NOTE]
   >
   > ファイル名に&#x200B;**小文字を使用**、無効な文字を処理する&#x200B;**区切り記号**、ファイル名に許可される最大文字数&#x200B;**など、他のプロパティも設定できます。**

1. 「**保存**」をクリックします。

1. **com.adobe.fmdita.config.ConfigManager** バンドルを検索してクリックします。

1. 有効な文字&#x200B;**プロパティの**&#x200B;正規表現で、プロパティが`[-a-zA-Z0-9_]`に設定されていることを確認します。 このリストにはさらに文字を追加できますが、これらの基本文字が必要であり、リストはハイフン \（`-`\）で始まる必要があります。

   >[!NOTE]
   >
   > このプロパティは、新しいファイルの作成に使用される有効な文字のリストを定義します。

1. 「**保存**」をクリックします。

>[!ENDTABS]

## AEM サイトノード構造のフラット化の設定

AEM サイト出力を生成すると、トピック内のすべてのエレメントのノードが内部的に作成されます。 数千のトピックを含むDITA マップの場合、このノード構造が深すぎる可能性があります。 このタイプの詳細にネストされたノード構造は、大規模なサイトのパフォーマンスに問題がある可能性があります。 次のスナップショットは、AEM サイト出力に対して深くネストされたノード構造を表示します。

![](assets/deep-nested-aem-site-node-structure.png)

上記のスナップショットでは、`p`要素とその後続のサブ要素ごとにノードが作成され、トピックで使用されるすべての他の要素にも同様の構造が作成されていることに注意してください。

AEM Guidesでは、AEM サイト出力のノード構造を内部的に作成する方法を設定できます。 指定した要素でノード構造を統合できます。つまり、メイン要素と見なされる要素を定義でき、その中のすべてのサブ要素がメイン要素と結合されます。 例えば、`p`要素を統合する場合、`p`要素内に表示されるすべての要素は、メインの`p`要素と結合されます。 `p`要素内のサブ要素に対して、別のメモは作成されません。 次のスナップショットは、`p`要素でフラット化されたノード構造を示しています。

![](assets/flattened-aem-site-node-structure.png)

次のタブでは、Experience Manager Guidesの設定に基づいてAEM サイトのノード構造を統合する手順を示します。Cloud Serviceまたはオンプレミス。

>[!BEGINTABS]

>[!TAB Cloud Service]

1. ノード構造をフラット化するエレメント\（s\）を指定します。

1. `libs` ノードの`apps` ノードのオーバーレイで、elementmapping.xml ファイルを開きます。

1. ノード構造をフラット化する要素の定義に`<flatten>true</flatten>` プロパティを追加します。 例えば、`p`要素でノード構造を統合する場合は、次に示すように、`p`要素の定義にflatten属性を追加します。

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
   > デフォルトでは、flatten ノードプロパティは`p`要素で設定されています。

1. 設定ファイルを作成するには、[設定の上書き](download-install-config-override.md#)の手順を使用します。
1. 設定ファイルで、次の\（property\）詳細を指定します。

   | PID | プロパティキー | プロパティの値 |
   |---|------------|--------------|
   | `com.adobe.dxml.flattening.FlatteningConfigurationService` | `flattening.enabled` | ブール値\（true/false\）。<br> **デフォルト値**: `false` |


これで、AEM サイト出力を生成すると、`p`要素内のノードは統合され、`p`要素自体に格納されます。 CRXDEの`p`要素の新しいフラット化プロパティを見つけることができます。

![](assets/flatten-aem-site-note-props-crxde.png)

>[!TAB  オンプレミス ]

1. ノード構造を統合するエレメントを指定します。

   1. `libs` ノードの`apps` ノードのオーバーレイで、elementmapping.xml ファイルを開きます。

   1. ノード構造をフラット化する要素の定義に`<flatten>true</flatten>` プロパティを追加します。 例えば、`p`要素でノード構造を統合する場合は、次に示すように、`p`要素の定義にflatten属性を追加します。

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
      > デフォルトでは、flatten ノードプロパティは`p`要素で設定されています。

1. configMgrでサイトノードのフラット化設定を有効にします。

   1. Adobe Experience Manager Web コンソールの設定ページを開きます。

      設定ページにアクセスするためのデフォルトのURLは次のとおりです。

      ```http
      http://<server name>:<port>/system/console/configMgr
      ```

   1. *com.adobe.dxml.flattening.FlatteningConfigurationService* バンドルを検索してクリックします。

   1. 「**プロパティの統合.enabled**」オプションを選択します。

   1. 「**保存**」をクリックします。


>[!IMPORTANT]
>
> elementmapping.xml ファイルに変更を加えた場合は、必ずconfigMgrを開き、変更を有効にするためにバンドルを保存してください。

これで、AEM サイト出力を生成すると、`p`要素内のノードは統合され、`p`要素自体に格納されます。 CRXDEの`p`要素の新しいフラット化プロパティを見つけることができます。

![](assets/flatten-aem-site-note-props-crxde.png){width="650" align="left"}

>[!ENDTABS]

**AEM サイト出力のコンテンツ内で文字列を検索します（Cloud Serviceのみ）**

デフォルトでは、AEM サイト出力内でのみ、タイトル内の文字列を検索できます。 タイトルとAEM サイト出力の内容または本文の両方で文字列を検索するようにシステムを設定できます。

>[!NOTE]
>
> コンテンツ内の一部の要素では検索が機能する場合もありますが、コンテンツ全体で機能するように設定することもできます。

![](assets/flatten-aem-site-note-props-crxde-search.png)

検索を有効にするには、AEM サイトノード構造のフラット化を設定する必要があります。

注意 :

最大1 MBのフラット化されたコンテンツを検索できます。 例えば、前のスクリーンショットでは、&lt;p\> タグの下のコンテンツが&lt;= 1Mbであるかどうかを検索できます。

>[!NOTE]
>
> 検索は、`<flatten>`属性がtrueに設定されている場合にのみ要素に対して機能します。 デフォルトでは、AEM Guidesの`<flatten>`属性は&lt;p\> &lt;ul\> &lt;lI\>など、一般的に使用されるテキスト要素に対してtrueに設定されています。 ただし、カスタム要素を作成した場合は、elementmapping.xml ファイルで`<flatten>`属性をtrueに設定する必要があります。

**AEM サイト ノード構造のフラット化を防止**

AEM サイト出力でフラット化するノードを指定するのと同様に、この設定から除外するエレメントを指定することもできます。 例えば、`body`要素でノードをフラット化する場合、`table`内の`body`要素をフラット化しない場合は、`table`要素の定義内にexclude プロパティを追加できます。

`table`要素をフラット化から除外するには、`table`要素の定義に次のプロパティを追加します。

`<preventancestorflattening>true|false</preventancestorflattening>`

## AEM サイト出力で削除されたページのバージョン管理を設定する

「既存の出力ページ」設定で「**削除」および「**&#x200B;作成&#x200B;**&#x200B;**」オプションを選択してAEM サイト出力を生成すると、削除するページのバージョンが作成されます。 システムを設定して、削除前にバージョンの作成を停止できます。

次のタブには、Experience Manager Guidesの設定に基づいて削除されるページ（Cloud Serviceまたはオンプレミス）のバージョンの作成を停止する手順が表示されます。

>[!BEGINTABS]

>[!TAB Cloud Service]

1. 設定ファイルを作成するには、[設定の上書き](download-install-config-override.md#)の手順を使用します。
1. 設定ファイルで、次の\（property\）詳細を指定して、**削除済みページのバージョンを作成しない** オプションを設定します。

   | PID | プロパティキー | プロパティの値 |
   |---|------------|--------------|
   | `com.adobe.fmdita.confi g.ConfigManager` | `no.version.creation.on.deletion` | ブール値\（true/false\）。<br> **デフォルト値**: `true` |

   >[!NOTE]
   >
   > このオプションを選択すると、ユーザーはバージョンを作成しなくても、任意のページを直接削除できます。 オプションが選択されていない場合は、ページ\（s\）が削除される前にバージョンが作成されます。

>[!TAB  オンプレミス ]

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.config.ConfigManager* バンドルを検索してクリックします。

1. 「**削除されたページのバージョンを作成しない**」オプションを選択します。

   >[!NOTE]
   >
   > このオプションを選択すると、ユーザーはバージョンを作成しなくても、任意のページを直接削除できます。 オプションが選択されていない場合は、ページ\（s\）が削除される前にバージョンが作成されます。

1. 「**保存**」をクリックします。

>[!ENDTABS]

## Experience Manager Guidesを使用したカスタムリライトの設定（Cloud Serviceのみ） {#custom-rewriter}

Experience Manager Guidesには、クロスマップ（2つの異なるマップのトピック間のリンク）の場合に生成されるリンクを処理するためのカスタムスリング [**rewriter**](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html) モジュールがあります。 この書き換え設定は、次のパスにインストールされています：<br> `/apps/fmdita/config/rewriter/fmdita-crossmap-link-patcher`。

コードベースに別のカスタムスリングリライターがある場合は、`'order'`値が50より大きい値を使用します。これは、Experience Manager Guides sling リライターが`'order'` 50を使用するからです。  これを上書きするには、値が50を超える必要があります。 詳細については、[出力の書き換えパイプライン &#x200B;](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html)を参照してください。



