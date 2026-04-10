---
title: 出力生成設定の設定
description: 出力生成設定の設定方法について説明します
exl-id: 6df31e3c-683c-4188-b917-9c1855d9b95b
feature: Output Generation
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 3aadc59f5034828cf319992b7acb32d5a88eaf93
workflow-type: tm+mt
source-wordcount: '5824'
ht-degree: 1%

---

# 出力生成設定の設定 {#id181AI0B0E30}

AEM Guidesには、出力生成プロセスをカスタマイズするための多くの設定オプションが用意されています。 このトピックでは、出力生成プロセスの設定に役立つすべての設定とカスタマイズについて説明します。

## DITA マップダッシュボードの「ベースライン」タブの設定 {#id223MD0D0YRM}

マップダッシュボードで使用可能な「ベースライン」タブを設定および非表示にできます。

「**ベースラインタブを非表示**」オプションはデフォルトで有効になっていないため、configMgrからこれを有効にする必要があります。 Web エディターでデフォルトでこのオプションを有効にするには、次の手順を実行します。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.config.ConfigManager** バンドルを検索してクリックします。

1. 「**ベースラインタブを非表示**」オプションを選択します。

1. 「**保存**」をクリックします。

   >[!NOTE]
   >
   > この設定はデフォルトで無効になっており、「ベースライン」タブはマップダッシュボードで使用できます。


## FrameMaker Publishing Serverの設定 {#id1678G0Z0TN6}

FrameMaker Publishing Server \（FMPS\）を使用して、DITA コンテンツの出力を生成できます。 FMPSを設定すると、FMPSでサポートされている複数の形式で出力を生成できます。

>[!NOTE]
>
> FMPSを使用して出力を生成するには、FMPS サーバーを設定する必要があります。 インストールと設定の詳細については、FrameMaker Publishing Server ユーザーガイドを参照してください。

FMPSを使用するようにAEM Guidesを設定するには、Web コンソールで`com.adobe.fmdita.config.ConfigManager` バンドルの次のプロパティを更新します。

>[!NOTE]
>
> http://<server name\>:<port\>/system/console/configMgr URLにアクセスして、Web コンソールを開きます。

| プロパティ | 説明 |
|--------|-----------|
| FrameMaker Publishing Server Login Domain | FrameMaker Publishing Serverをホストするドメイン名またはワークグループ名を指定します。 FMPS バージョンに基づいて、ドメイン名を:-として指定します   **FMPS 2020**: 192.168.1.101 <br>～ **FMPS 2019以前**&#x200B;のIP アドレスまたはドメイン名 |
| FRAMEMAKER PUBLISHING SERVER URL | FrameMaker Publishing ServerのURLを指定します。 FMPS バージョンに基づいて、FMPS URLを<br>- **FMPS 2020**: `http://<fmps_ip>:<port>` \（http://192.168.1.101:7000\） <br> - **FMPS 2019以前**: `http://<fmps_ip>:<port>/fmserver/v1/`として指定します |
| FMPS バージョン | FrameMaker Publishing Serverのバージョン番号を指定します。 FMPS バージョンに基づいて、バージョン情報を<br>- **FMPS 2020**: 2020 <br> - **FMPS 2019以前**: 2019または2017として指定します |
| FrameMaker Publishing Serverのユーザー名とパスワード | FrameMaker Publishing Serverにアクセスするためのユーザー名とパスワードを指定します。 |
| FMPS タイムアウト | \（*オプション*\） AEM GuidesがFrameMaker Publishing Serverからの応答を待機する時間を\（秒単位\）指定します。 指定した時間内に応答を受け取らなかった場合、AEM Guidesは公開タスクを終了し、タスクに「失敗」のフラグが付けられます。 <br> デフォルト値：300秒\（5分\） |
| 外部AEM URL | *\（Optional\）* FrameMaker Publishing Serverが生成された出力ファイルを配置するAEM URL。 例えば、`http://<server-name>:<port>/` のように指定します。 |
| AEM管理者のユーザー名とパスワード | *\（オプション\）* AEM設定の管理者のユーザー名とパスワード。 これは、FrameMaker Publishing ServerがAEMと通信するために使用します。 |
| FMPS タスク実行待機タイムアウト | この設定は、FMPS 2020にのみ適用されます。 FMPSがこのプロセスの実行を待つのを停止するまでの時間\（秒単位\）を指定します。 |

## 既存のAEM サイト内でのブレンド公開の設定 {#id1691I0V0MGR}

DITA コンテンツを含むAEM サイトがある場合は、AEM サイト出力を設定して、DITA コンテンツをサイト内の事前定義された場所に公開できます。 例えば、AEM サイトページの次のスクリーンショットでは、`ditacontent` ノードはDITA コンテンツを保存するために予約されています。

![](assets/publish-in-aem-site.png){width="300" align="left"}

ページ内の残りのノードは、AEM サイトエディターから直接作成されます。 DITA コンテンツを事前定義された場所に公開するように公開設定を設定すると、既存のDITA以外のコンテンツがAEM Guides公開プロセスによって変更されなくなります。

既存のサイトで次の設定を実行して、事前定義されたノードにDITA コンテンツを公開できるようにする必要があります。

- サイトのテンプレートプロパティを設定する

- サイト内のノードを追加してDITA コンテンツを公開する


既存のサイトのテンプレートプロパティを設定するには、次の手順を実行します。

1. AEMにログインし、CRXDE Lite モードを開きます。

1. サイトのテンプレート設定ノードに移動します。 例えば、AEM Guidesでは、デフォルトのテンプレート設定が次のノードに保存されます。

   `/libs/fmdita/config/templates/default`

   >[!NOTE]
   >
   > `libs` ノードで使用できる既定の構成ファイルのカスタマイズを行わないでください。 `libs` ノードで`apps` ノードのオーバーレイを作成し、`apps` ノードでのみ必要なファイルを更新する必要があります。

1. 以下のプロパティを追加します。

   | プロパティ名 | タイプ | 値 |
   |-------------|----|-----|
   | `topicContentNode` | 文字列 | DITA コンテンツを公開するノード名を指定します。 例えば、AEM GuidesがDITA コンテンツを公開するデフォルトノードは<br>`jcr:content/contentnode`です |
   | `topicHeadNode` | 文字列 | DITA コンテンツのメタデータ情報を保存するノード名を指定します。 例えば、AEM Guidesがメタデータ情報を保存するデフォルトのノードは<br>`jcr:content/headnode`です |


次のスクリーンショットは、AEM Guidesのデフォルトテンプレートノードに追加されたプロパティを示しています。

![](assets/add-content-node.png){width="800" align="left"}

次回、サイトのテンプレート設定を使用してDITA コンテンツを公開すると、コンテンツは`topicContentNode`および`topicHeadNode` プロパティで指定されたノードに公開されます。

ただし、既存のサイトの場合は、`topicContentNode`と`topicHeadNode` ノードを手動で追加する必要があります。

次の手順を実行して、必要なノードを既存のサイトに追加します。

1. AEMにログインし、CRXDE Lite モードを開きます。

1. サイトノード内の`jcr:content`を見つけます。

1. サイトのテンプレート設定で指定した名前と同じ名前の`topicContentNode`および`topicHeadNode`個のノードを追加します。


## AEM サイト出力のカスタマイズ {#id166TG0B30WR}

AEM Guidesでは、次の形式での出力の作成をサポートしています。

- AEMサイト

- PDF

- HTML5
- EPUB
- DITA-OTによるカスタム出力

AEM サイト出力では、異なる出力タスクに異なるデザインテンプレートを割り当てることができます。 これらのデザインテンプレートは、異なるレイアウトでDITA コンテンツをレンダリングできます。 たとえば、社内外のオーディエンスに対して、異なるデザインテンプレートを指定することができます。

AEM Guidesでは、カスタマイズされたDITA Open Toolkit \（DITA-OT\） プラグインを使用することもできます。 これらのカスタム DITA-OT プラグインをアップロードして、特定の方法でPDF出力を生成できます。

>[!TIP]
>
> AEM サイト出力の作成に関するベストプラクティスについては、ベストプラクティスガイド *appendix.md\#*&#x200B;の[AEM サイト公開](appendix.md#) セクションを参照してください。

### 出力を生成するためのデザインテンプレートのカスタマイズ {#customize_xml-add-on}

AEM Guidesでは、一連の定義済みデザインテンプレートを使用して、AEM サイト出力を生成します。 AEM Guidesのデザインテンプレートをカスタマイズして、自社のブランディングに合った出力を生成できます。 デザインテンプレートは、様々なスタイル \（CSS\）、スクリプト \（サーバーサイドとクライアントサイドの両方\）、リソース \（画像、ロゴ、その他のアセット\）、およびJCR ノードのコレクションで、これらのリソースをすべて結びつけます。 デザインテンプレートは、単一のサーバーサイドスクリプトと複数のJCR ノードの組み合わせ、またはスタイル、リソース、JCR ノードの複雑な組み合わせで作成できます。 デザインテンプレートは、AEM Guides パブリッシングサブシステムでAEM サイト出力を生成する際に使用され、生成された出力の構造、外観を制御します。

デザインテンプレートリソースをサーバー上のどこに配置するかという制限はありませんが、通常は機能に応じて論理的に整理されています。 例えば、デフォルトのテンプレートには、すべてのJavaScript ファイルとCSS ファイルが`/etc/designs/fmdita/clientlibs/siteoutput/default` フォルダーに保存されています。 これらのファイルの場所は、JCR ノードのコレクションによってリンクされています。 これらのJCR ノードとファイルは、デザインテンプレート全体を構成します。

AEM Guidesに付属しているデフォルトのデザインテンプレートでは、ランディングページ、トピックおよび検索ページコンポーネントをカスタマイズできます。 デフォルトデザインと対応する参照テンプレートのコピーを作成し、様々なコンポーネントを指定して目的の出力を生成できます。

次の手順を実行して、AEM サイト出力の生成に使用する独自のデザインテンプレートを指定します。

1. AEMにログインし、CRXDE Lite モードを開きます。

1. デフォルトのデザインテンプレートノードに移動します。 デフォルトのデザインテンプレートノードの場所は次のとおりです。

   `/libs/fmdita/config/templates/`

   ![](assets/templates-node.png){width="300" align="left"}

   >[!NOTE]
   >
   > `libs` フォルダーから`apps` フォルダーにデフォルトのデザインテンプレートをコピーし、`apps` フォルダーに変更を加えます。 デフォルトのテンプレートノードから参照されるテンプレートも変更する必要があります。 参照されたテンプレートは`/libs/fmdita/templates/default/cqtemplates` ノードの下に配置されます。 変更を加える前に、`apps` フォルダー内の参照テンプレートのコピーを作成します。

1. *テンプレート* ノードの&#x200B;*デフォルト* コンポーネントをクリックして、そのプロパティにアクセスします。

   AEM Guidesのデザインテンプレートプロパティについては、次の表で説明します。

   | プロパティ | 説明 |
   |--------|-----------|
   | `landingPageTemplate`、`searchPageTemplate`、`topicPageTemplate`、`shadowPageTemplate` | これらの対応するページ \（ランディング、検索、トピック\）の`cq:Template` ノードを指定します。 デフォルトでは、これらのページの`cq:Template` ノードは`/libs/fmdita/templates/default/cqtemplates` ノードにあります。 このノードは、ランディングページ、検索ページ、トピックページの構造とプロパティを定義します。 <br>`shadowPageTemplate`は、チャンク化されたコンテンツの最適化に使用されます。 このプロパティの値を<br>に設定する必要があります `fmdita/templates/default/cqtemplates/shadowpage` <br> **注** `topicPageTemplate`の値を指定する必要があります。 `landingPageTemplate`と`searchPageTemplate`はオプションのプロパティです。 検索ページとランディングページを生成しない場合は、これらのプロパティを指定しないでください。 |
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

詳しくは、[最初のAdobe Experience Manager 6.3 web サイトの作成](https://helpx.adobe.com/experience-manager/using/first_aem63_website.html)および[AEMでの独自のweb サイトの開発の基本](https://helpx.adobe.com/experience-manager/6-3/sites/developing/using/the-basics.html)を参照してください。

### AEM サイト出力の生成にドキュメントタイトルを使用する

AEM サイト出力を生成する場合、URLの生成方法は、コンテンツの見つけやすさの中で重要な役割を果たします。 UUID ベースのファイル名を使用している場合、ファイルのUUIDに基づくURLの生成は検索に適していません。 管理者または発行者は、AEM サイト出力のURLを生成する方法を制御できます。 AEM Guidesでは、UUID ベースのファイル名ではなく、ファイルのタイトルを使用してAEM サイト出力のURLを生成するように設定できます。 UUID ベースのファイルシステムの場合、デフォルトでは、このオプションはオンになっています。 つまり、UUID ベースのファイルシステム用にAEM サイト出力を生成する場合、ファイルのタイトルは、ファイルのUUIDではなく、URLの生成に使用されます。

AEM サイト出力を生成する場合、URLの生成方法は、コンテンツの見つけやすさの中で重要な役割を果たします。 UUID ベース以外のファイルシステムの場合、AEM サイトの出力は、ファイルのタイトルではなく、ファイル名を使用して生成されます。 管理者または発行者は、AEM サイト出力のURLを生成する方法を制御できます。 AEM Guidesでは、ファイル名ではなくファイルのタイトルを使用して、AEM サイト出力のURLを生成するように設定できます。 デフォルトでは、このオプションはオフになっています。 つまり、AEM サイト出力を生成する場合、ファイル名はファイルのタイトルではなくURLの生成に使用されます。 このオプションを有効にすると、ファイルのタイトルに基づいてURLを生成することができます。

>[!NOTE]
>
> さらに、AEM サイト出力のURL内の一連の文字のみを許可するようにルールを設定できます。 詳しくは、[ トピックの作成とAEM サイト出力の公開に関するファイル名削除ルールの設定](#id2164D0KD0XA)を参照してください。

AEM サイト出力でURLの生成を設定するには、次の手順を実行します。

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


### トピックの作成とAEM サイト出力の公開に使用するファイル名のサニタイズルールを設定します {#id2164D0KD0XA}

管理者は、ファイル名で許可される有効な特殊文字のリストを定義できます。これにより、AEM サイト出力のURLが作成されます。 以前のリリースでは、ユーザーは`@`、`$`、`>`などの特殊文字を含むファイル名を定義できました。 これらの特殊文字により、AEM サイトページの生成時にエンコードされたURLが生成されました。

3.8 リリース以降、ファイル名で許可される特殊文字のリストを定義するための設定が追加されました。 デフォルトでは、有効なファイル名設定には「`a-z A-Z 0-9 - _`」が含まれています。 つまり、ファイルの作成時に、ファイルのタイトルに特殊文字を使用できますが、内部的にはファイル名のハイフン\（`-`\）に置き換えられます。 例えば、ファイルのタイトルをIntroduction 1またはIntroduction@1にすることができます。両方の場合に生成される対応するファイル名はIntroduction-1です。

有効な文字のリストを定義する場合、これらの文字「`*/:[\]|#%{}?&<>"/+`」と`a space`は常にハイフン\（`-`\）に置き換えられることを忘れないでください。

>[!NOTE]
>
> 有効な特殊文字リストを設定しないと、ファイル作成プロセスで予期しない結果が発生する場合があります。

ファイル名とAEM サイト出力で有効な特殊文字を設定するには、次の手順を実行します。

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


### AEM サイトノード構造のフラット化の設定

AEM サイト出力を生成すると、トピック内のすべてのエレメントのノードが内部的に作成されます。 数千のトピックを含むDITA マップの場合、このノード構造が深すぎる可能性があります。 このタイプの詳細にネストされたノード構造は、大規模なサイトのパフォーマンスに問題がある可能性があります。 次のスナップショットは、AEM サイト出力に対して深くネストされたノード構造を表示します。

![](assets/deep-nested-aem-site-node-structure.png){width="300" align="left"}

上記のスナップショットでは、`p`要素とその後続のサブ要素ごとにノードが作成され、トピックで使用されるすべての他の要素にも同様の構造が作成されていることに注意してください。

AEM Guidesでは、AEM サイト出力のノード構造を内部的に作成する方法を設定できます。 指定した要素でノード構造を統合できます。つまり、メイン要素と見なされる要素を定義でき、その中のすべてのサブ要素がメイン要素と結合されます。 例えば、`p`要素を統合する場合、`p`要素内に表示されるすべての要素は、メインの`p`要素と結合されます。 `p`要素内のサブ要素に対して、別のメモは作成されません。 次のスナップショットは、`p`要素でフラット化されたノード構造を示しています。

![](assets/flattened-aem-site-node-structure.png){width="300" align="left"}

AEM サイトのノード構造を統合するには、次の手順を実行します。

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

**AEM サイトのメモ構造の統合を防止**

AEM サイト出力でフラット化するノードを指定するのと同様に、この設定から除外するエレメントを指定することもできます。 例えば、`body`要素でノードをフラット化する場合、`table`内の`body`要素をフラット化しない場合は、`table`要素の定義内にexclude プロパティを追加できます。

`table`要素をフラット化から除外するには、`table`要素の定義に次のプロパティを追加します。

`<preventancestorflattening>true|false</preventancestorflattening>`

### AEM サイト出力で削除されたページのバージョン管理を設定する

「既存の出力ページ」設定で「**削除」および「**&#x200B;作成&#x200B;****」オプションを選択してAEM サイト出力を生成すると、削除するページのバージョンが作成されます。 システムを設定して、削除前にバージョンの作成を停止できます。

削除されるページのバージョンの作成を停止するには、次の手順を実行します。

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

## DITA-OTを介した出力の公開でメタデータを使用する {#id191LF0U0TY4}

AEM Guidesでは、DITA-OTを使用して出力を公開する際に、カスタムメタデータを渡す方法を提供します。 管理者およびパブリッシャーは、次のタスクを実行して、パブリッシュされた出力でカスタムメタデータを設定および使用する必要があります。

- 管理者として、システムに必要なメタデータを追加して、DITA マップのプロパティページで使用できるようにします。

- 管理者として、メタデータリストにカスタムメタデータを追加して、DITA マップコンソールに表示されるようにします。

- パブリッシャーとして、DITA マップでカスタムメタデータを設定および追加し、必要な出力を生成します。


システムに必要なメタデータを追加するには、次の手順を実行します。

1. Adobe Experience Managerに管理者としてログインします。

1. 上部のAdobe Experience Manager リンクをクリックし、**ツール**&#x200B;を選択します。

1. ツールのリストから「**Assets**」を選択します。

1. 「**メタデータスキーマ**」タイルをクリックします。

   メタデータスキーマのForms ページが表示されます。

1. リストから&#x200B;**default** フォームを選択します。

   >[!NOTE]
   >
   > DITA マップのプロパティページに表示されるプロパティは、このフォームから取得されます。

1. 「**編集**」をクリックします。

1. 公開出力で使用するカスタムメタデータを追加します。 例えば、次の手順を使用してオーディエンスメタデータを追加します。

   1. **フォームを作成** コンポーネント リストから、**単一行テキスト** コンポーネントをフォームにドラッグ&amp;ドロップします。

   1. 新しいフィールドを選択して、フィールドの&#x200B;**設定**&#x200B;を開きます。

   1. **フィールドラベル**&#x200B;に、メタデータ名「オーディエンス」を入力します。

   1. 「**プロパティにマッピング**」設定で、を指定します。/jcr:content/metadata/&lt; メタデータの名前\> この例では、にを設定します。/jcr:content/metadata/audience.

   これらの手順を使用して、必要なすべてのメタデータパラメーターを追加します。

1. 「**保存**」をクリックします。


新しいパラメーターが、すべてのDITA マップのプロパティページに表示されるようになりました。

![](assets/properties-page-custom-metadata.PNG){width="650" align="left"}

次に、カスタムメタデータをDITA マップコンソールで使用できるようにする必要があります。 カスタムメタデータをDITA マップダッシュボードで使用できるようにするには、次の手順を実行します。

1. AEMにログインし、CRXDE Lite モードを開きます。

1. 次の場所にあるmetadataList ファイルにアクセスします。

   /libs/fmdita/config/metadataList

   >[!NOTE]
   >
   > metadataList ファイルには、マップダッシュボードのDITA マップの&#x200B;**プロパティ** ドロップダウンリストに表示されるプロパティのリストが含まれています。 デフォルトでは、このファイルには、docstate、dc:language、dc:description、dc:titleの4つのプロパティが一覧表示されます。

1. Metadata Schema Forms ページに追加したカスタムメタデータを追加します。 この例では、オーディエンスパラメーターをデフォルトリストの最後に追加します。

1. 「**すべて保存**」をクリックします。


これで、カスタムメタデータがDITA マップコンソールの&#x200B;**プロパティ** ドロップダウンリストに表示されます。

最後に、パブリッシャーは、パブリッシュされた出力にカスタムメタデータを含める必要があります。 出力の生成中にカスタムメタデータを処理するには、次の手順を実行します。

1. Assets UIで、公開するDITA マップに移動します。

1. DITA マップファイルを選択し、そのプロパティページを開きます。

1. プロパティ ページで、カスタムメタデータの値を指定します。 この例では、audience パラメーターにExternalの値を指定しています。

   ![](assets/properties-page-custom-metadata-value.png){width="650" align="left"}

1. 「**保存して閉じる**」をクリックします。

1. DITA マップファイルをクリックして、DITA マップコンソールを開きます。

1. 「**出力プリセット**」タブで、出力の生成に使用する出力プリセットを選択します。

1. 「**編集**」をクリックします。

1. **プロパティ** ドロップダウンリストから、公開プロセスに渡すプロパティを選択します。

   ![](assets/props-in-publish-output.PNG){width="650" align="left"}


選択したプロパティ/メタデータは公開プロセスに渡され、最終出力で使用できるようになります。

## AEM コンポーネントを使用したDITA エレメントマッピングのカスタマイズ {#id1679J600HEL}

AEM GuidesのDITA エレメントは、対応するAEM コンポーネントにマッピングされます。 AEM Guidesでは、公開やレビューなどのワークフローでこのマッピングを使用して、DITA要素を対応するAEM コンポーネントに変換します。 マッピングは`elementmapping.xml` ファイルで定義され、CRXDE Lite モードからアクセスできます。 CRXDE Lite モードで次のURLにアクセスします。

`/libs/fmdita/config/elementmapping.xml`

>[!NOTE]
>
> ``libs`` ノードで使用できる既定の構成ファイルのカスタマイズを行わないでください。 ``libs`` ノードで``apps`` ノードのオーバーレイを作成し、``apps`` ノードでのみ必要なファイルを更新する必要があります。

定義済みのDITA エレメントマッピングを使用するか、DITA エレメントをカスタム AEM コンポーネントにマッピングできます。 カスタム AEM コンポーネントを使用するには、`elementmapping.xml` ファイルの構造を理解する必要があります。

### elementmapping.xml構造

`elementmapping.xml`構造の概要を以下に示します。

1. 各DITA エレメントは、最初に、エレメント名に基づいて対応するコンポーネントマッピングを検索します。 例：

   ```XML
   <ditaelement>     
      <name>**substeps**</name>  
      <class>- topic/ol task/substeps</class>  
      <componentpath>dita/components/ditaolist</componentpath>  
      <type>COMPOSITE</type>  
      <target>para</target>
   </ditaelement>
   ```

   上記の例では、すべての`substeps` DITA要素が`dita/components/ditaolist` コンポーネントを使用してレンダリングされます。

1. DITA要素が名前に基づいた一致を見つけられない場合、`class`に基づいた一致が行われます。 例：

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

   上記の例では、`task`要素にマッピングが定義されていない場合、`task`は`task` コンポーネントから継承されているため、`topic`要素は上記のコンポーネントにマッピングされます。

1. エレメントに対応するコンポーネントマッピングがある場合、その子要素の処理は`type`によって決定されます。 例：

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

   `type`は次の値を取ります：

   - 複合：子エレメント *についても、コンポーネント*&#x200B;のマッピングが続行されます。

   - スタンドアロン：現在の要素の子要素は&#x200B;*それ以降マッピングされていません*。

   上記の例では、`<title>`要素に子要素がある場合、他のコンポーネントにはマッピングされません。 `<title>`要素のコンポーネントは、`<title>`要素内のすべての子要素をレンダリングする責任があります。

1. 1つのDITA エレメントにマッピングされた複数のコンポーネントがある場合は、エレメントに最適な一致が選択されます。 最適なマッチコンポーネントを選択するには、DITA要素のドメインと構造的な特殊化を考慮します。

   ドメインの特殊化を持つDITA要素があり、コンポーネントがドメインの特殊化のためにマッピングされている場合、そのコンポーネントは高い優先度が与えられます。

   同様に、構造的特殊化を持つDITA要素があり、コンポーネントが構造的特殊化のためにマッピングされている場合、そのコンポーネントは優先度が高くなります。

1. エレメント マッピングで`<attributemap>`を使用して、属性値を対応するノード プロパティにマッピングできます。

1. `textprop`は、DITA要素のテキストコンテンツをノードプロパティにシリアル化するために使用できます。 さらに、エレメント タグで複数回使用して、公開階層内の複数の場所でテキストコンテンツをシリアライズできます。 また、ターゲットプロパティの場所と名前をカスタマイズすることもできます。 例：

   ```XML
   <ditaelement> 
       <name>title</name> 
       <class>- topic/title</class> 
       <componentpath>foundation/components/title</componentpath> 
       <type>STANDALONE</type> 
       <target>para</target> 
       <textprop>**jcr:title**</textprop>
   </ditaelement>
   ```

   上記の要素マッピングでは、`<title>`要素のテキストコンテンツが、出力ノードの`jcr:title`という名前のプロパティの値として保存されることを指定しています。

1. `xmlprop`は、特定の要素のXML全体をノードプロパティにシリアル化するために使用できます。 その後、コンポーネントはこのノードプロパティを読み取り、カスタムレンダリングを実行できます。 例：

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

   上記の要素マッピングでは、要素`<svg-container>`のXML マークアップ全体が、出力ノードの`data`という名前のプロパティの値として保存されることを指定しています。

1. 出力生成プロセスでパス解決を処理するための特殊な属性マッピングがあります。 例：

   ```XML
   <attributemap> 
       <attribute from="href" to="fileReference" ispath="true" rel="source" /> 
       <attribute from="height" to="height" /> 
       <attribute from="width" to="width" />
   </attributemap>
   ```

   上記の`attributemap`では、DITA要素内の`href`属性が`fileReference`という名前のノードプロパティにマッピングされます。 `ispath`が`true`に設定されているので、出力生成プロセスはこのパスを解決し、次に`fileReference` ノードプロパティに設定します。

   この解決方法は、属性マッピングの`rel`属性の値に基づいて決定されます。

   - `rel=source`の場合、`href`の値は、現在処理中のDITA ソースファイルに関して解決されます。 `href`の値が解決され、`fileReference` プロパティの値に配置されます。

   - `rel=target`の場合、`href`の値はルート公開場所に関して解決されます。 `href`の値が解決され、`fileReference` プロパティの値に配置されます。

   パス属性で前処理や解決を行いたくない場合は、`ispath`属性を指定する必要はありません。 値はそのままコピーされ、コンポーネントは必要な解決を行うことができます。


### DITA要素スキーマ

次に、`elementmapping.xml` ファイルのDITA要素スキーマの例を示します。

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
    <attribute from="attrname" to="propname" ispath="true|false" rel="source|target" />     
    </attributemap>     
    <skip>true|false</skip> 
</ditaelement>
```

次の表に、DITA エレメントスキーマのエレメントを示します。

| 要素 | 説明 |
|-------|-----------|
| `<ditaelement>` | 各マッピング要素の最上位ノード。 |
| `<class>` | コンポーネントを記述するターゲット DITA要素のクラス属性。 <br>例えば、DITA トピックのクラス属性は<br>`topic/topic`です |
| `<componentpath>` | マッピングされたAEM コンポーネントのCRXDE パス。 |
| `<type>` | 可能な値：<br>- **COMPOSITE**：子エレメントも処理します<br>- **STANDALONE**：子エレメントの処理をスキップします |
| `<attributeprop>` | シリアル化されたDITA属性と値をプロパティとしてAEM ノードにマッピングするために使用します。 例えば、`<note type="Caution">`要素があり、この要素にマッピングされるコンポーネントが`<attributeprop>attr_t</ attributeprop>`である場合、ノードの属性と値は、対応するAEM ノード \（`attr_t`\）の`attr_t->type="caution"` プロパティにシリアル化されます。 |
| `<textprop>propname_t</textprop>` | `getTextContent()`出力を`propname_t.`によって定義されたプロパティに保存&#x200B;**注：**&#x200B;これは最適化されたプロパティです。 |
| `<xmlprop>propname_x </xmlprop>` | このノードのシリアル化されたXMLを`propname_x.` **によって定義されたプロパティに保存します。注：**&#x200B;これは最適化されたプロパティです。 |
| `<xpath>` | 要素マッピングにXPath要素が指定されている場合は、要素名とクラスとともに、コンポーネントマッピングを使用するためにXPath条件も満たす必要があります。 |
| `<target>` | CRX リポジトリ内のDITA エレメントを指定した場所に配置します。 <br>指定可能な値：<br>- **head**: head ノード <br>- **text**: paragraph ノードの下 |
| `<wrapelement>` | 内で内容をラップするHTML要素。 |
| `<wrapclass>` | プロパティ `wrapclass.`への要素の値 |
| `<attributemap>` | 1つ以上の`<attribute>` ノードを含むコンテナノード。 |
| `<attribute from="attrname" to="propname" ispath="true\|false" rel="source\|target" />` | DITA属性をAEM プロパティにマッピングします：<br>- **`from`**: DITA属性名<br>- **`to`**: AEM コンポーネントプロパティ名<br>- **`ispath`**：属性がパス値\（例：*image*\） <br>- **`rel`**: パスがソースまたはターゲットの場合&#x200B;<br>**注意：** `attrname`が`%`で始まる場合、`attrname minus '%'`をprop &#39;`propname`&#39;にマッピングします。 |

**その他のメモ**

- デフォルトの要素マッピングを上書きする場合は、デフォルトの`elementmapping.xml` ファイルを変更しないことをお勧めします。 新しいマッピング XML ファイルを作成し、作成したカスタムアプリフォルダー内の別の場所にファイルを配置する必要があります。

- `elementmapping.xml` ファイルには、fmdita/components/dita/wrapper コンポーネントを参照する多くのマッピングエントリがあります。 Wrapperは、サイトノードのプロパティを使用して比較的単純なDITA構造をレンダリングし、関連するHTMLを生成する汎用コンポーネントです。 囲むタグを生成するために`wrapelement` プロパティを使用し、子レンダリングを対応するコンポーネントにデリゲートします。 これは、コンテナコンポーネントのみが必要な場合に便利です。 `div`または`p`のような特定のコンテナタグをレンダリングする新しいコンポーネントを作成する代わりに、`wrapelement`および`wrapclass` プロパティを含むWrapper コンポーネントを使用して、同じ効果を得ることができます。

- 文字列JCR プロパティに大量のテキストを保存することはお勧めしません。 出力生成で最適化されたプロパティタイプの計算を使用すると、大きなテキストコンテンツが文字列型として保存されなくなります。 代わりに、特定のしきい値を超えるコンテンツを保存する必要がある場合、プロパティのタイプはバイナリに変更されます。 デフォルトでは、このしきい値は512 バイトに設定されていますが、*バイナリしきい値として保存*&#x200B;設定を変更することで、Configuration Manager \（**com.adobe.fmdita.config.ConfigManager**\）で変更できます。

- 要素マッピングの\（すべてではない\）を上書きする場合は、`elementmapping.xml` ファイル全体をレプリケートする必要はありません。 新しいXML マッピングファイルを作成し、オーバーライドする要素のみを定義する必要があります。

- カスタムの場所にXML ファイルを作成したら、`Override Element Mapping` バンドルの`com.adobe.fmdita.config.ConfigManager`設定を更新します。


## DITA マップコンソールのカスタマイズ {#id188HC08M0CZ}

AEM Guidesでは、DITA マップコンソールの機能を柔軟に拡張できます。 例えば、AEM Guidesで利用できるレポートと異なるレポートセットがある場合、そのようなレポートをマップコンソールに追加できます。 マップコンソールをカスタマイズするには、必要な機能を実行するためのコードを含むAEM Client Library \（またはClientLib\）を作成する必要があります。

>[!NOTE]
>
> ページコンポーネントを直接変更することは、製品の新しいリリースによって上書きされるため、お勧めしません。

AEM Guidesには、マップコンソールをカスタマイズするための`apps.fmdita.dashboard-extn` カテゴリが用意されています。 マップコンソールが読み込まれると、`apps.fmdita.dashboard-extn` カテゴリで作成された機能が実行され、読み込まれます。

>[!NOTE]
>
> AEM クライアントライブラリの作成について詳しくは、[ クライアントサイドライブラリの使用](https://helpx.adobe.com/experience-manager/6-4/sites/developing/using/clientlibs.html)を参照してください。

## 出力生成時の画像レンディションの処理 {#id177BF0G0VY4}

AEMには、アセットを処理するためのデフォルトワークフローとメディアハンドルのセットが付属しています。 AEMには、最も一般的なMIME タイプのアセット処理を処理するための定義済みワークフローがあります。 通常、AEMでは、アップロードした画像ごとに、同じ画像の複数のレンディションがバイナリ形式で作成されます。 これらのレンディションのサイズは異なり、解像度も異なり、透かしが追加されたり、その他の特性が変更されたりします。 AEMでのアセットの処理方法について詳しくは、AEM ドキュメントの「[Media HandlersとWorkflowsを使用したAssetsの処理](https://helpx.adobe.com/experience-manager/6-5/assets/using/media-handlers.html)」を参照してください。

AEM Guidesでは、ドキュメントの出力を生成する際に使用する画像レンディションを設定できます。 例えば、デフォルトの画像レンディションのいずれかを選択するか、作成した画像レンディションを使用してドキュメントを公開できます。 ドキュメントを公開するための画像レンディションマッピングは、`/libs/fmdita/config/ **renditionmap.xml**` ファイルに保存されます。 `renditionmap.xml` ファイルのスニペットは次のとおりです。

>[!NOTE]
>
> すべてのカスタマイズに対して、`renditionmap.xml` フォルダーに`apps` ファイルのコピーを作成することをお勧めします。

```XML
<renditionmap>
   <mapelement>
      <mimetype>image/png</mimetype>
      <rendition output="AEMSITE">cq5dam.web.1280.1280.jpeg</rendition>
      <rendition output="PDF">original</rendition>
      <rendition output="HTML5">cq5dam.web.1280.1280.jpeg</rendition>
      <rendition output="HTML5" outputName="ditahtml5">cq5dam.thumbnail.319.319.png</rendition>
      <rendition output="EPUB">cq5dam.web.1280.1280.jpeg</rendition>
      <rendition output="CUSTOM">cq5dam.web.1280.1280.jpeg</rendition>
   </mapelement>
...
</renditionmap>
```

`mimetype`要素は、ファイル形式のMIME タイプを指定します。 `rendition output`要素は、指定された出力の公開に使用する出力形式のタイプとレンディション \（例：`cq5dam.web.1280.1280.jpeg`\）の名前を指定します。 サポートされているすべての出力形式（AEMSITE、PDF、HTML5、EPUB、カスタム）に使用する画像レンディションを指定できます。

出力プリセットに異なる画像レンディションを指定する場合は、`outputName`属性を使用して、同じ出力タイプの特定の出力プリセットに対するカスタムレンディションを定義できます。 これは、様々な公開シナリオに対して異なる画像サイズまたは形式が必要な場合に便利です。

例：


```XML
<renditionmap>
   <mapelement>
      <mimetype>image/png</mimetype>
      
      <rendition output="HTML5">cq5dam.web.1280.1280.jpeg</rendition>
      <rendition output="HTML5" outputName="ditahtml5">cq5dam.thumbnail.319.319.png</rendition>
      
   </mapelement>
...
</renditionmap>
```

上記のレンディションでは、レンディションで定義された`outputName`属性を使用して、ditahtml5 プリセットは`cq5dam.thumbnail.319.319.png`を使用し、`outputName`を使用せずに、すべてのHTML5出力は`cq5dam.web.1280.1280.jpeg`を使用します。

指定したレンディションが存在しない場合、AEM Guides公開プロセスは最初に指定した画像のweb レンディションを検索します。 Web レンディションが見つからない場合でも、画像の元のレンディションが使用されます。

>[!NOTE]
>
> これらの画像レンディションは、出力生成のみを制御します。 プレビューまたはレビュー用にドキュメントを開くと、画像のweb レンディションが使用されます。

## 出力履歴の自動削除期間の設定 {#id19AAI070V8Q}

出力を生成すると、出力は出力ログと共に作成されます。 大規模なDITA マップの場合、これらのログはリポジトリ内で大きなスペースを取る可能性があります。 デフォルトでは、ログはリポジトリ内の次の場所に保存されます。

/var/dxml/metadata/outputHistory/

時間の経過とともに、すべてのログファイルの合計サイズがGBに達する可能性があります。 AEM Guidesでは、これらのログファイルをリポジトリに保持する期間を設定できます。 指定された期間が経過すると、出力生成履歴と共にログがリポジトリから削除されます。

>[!NOTE]
>
> 出力生成履歴は、「出力」タブの「生成された出力」リストのログエントリです。

履歴パージ機能を設定すると、リポジトリ内のすべてのDITA マップの出力生成に影響します。 DITA マップの「出力」タブでは、履歴は指定された日数の後、設定で指定された時間に消去されます。

>[!NOTE]
>
> ログファイルと出力生成履歴を削除しても、生成された出力には影響しません。

出力履歴とログをパージする日時を設定するには、次の手順を実行します。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.config.ConfigManager** バンドルを検索してクリックします。

1. **出力履歴のパージ期間** プロパティで、出力ログと共に出力履歴がパージされるまでの日数を指定します。 デフォルトでは、5日に設定されています。 この機能を無効にする場合は、このプロパティを0に設定します。

1. **出力履歴パージ時間** プロパティで、パージ プロセスが開始される時間を指定します。 デフォルトでは、0:00 \（または12:00 midnight\）に設定されています。 この時点では、パージ処理は毎日、**出力履歴パージ期間** プロパティで指定された日数より前に生成された出力に対して実行されます。

   >[!NOTE]
   >
   > デフォルトでは、パージ機能は5日より古い出力で毎晩0時に実行されます。

1. 「**保存**」をクリックします。


## 最近生成された出力リストの制限を変更する {#id1679JH0H0O2}

DITA マップの「出力」タブに表示される生成された出力の最大数を変更できます。 デフォルトでは、最後に生成された25個の出力のリストが表示されます。 リストに表示する出力数を変更するには、**バンドルの**&#x200B;出力リストの制限`com.adobe.fmdita.config.ConfigManager`設定を更新します。

>[!TIP]
>
> 出力履歴の操作に関するベストプラクティスについては、ベストプラクティスガイド *appendix.md\#*&#x200B;の「[出力履歴](appendix.md#)」セクションを参照してください。

## 出力生成パフォーマンスの最適化 {#id176LB050VUI}

AEM Guidesでは、同時に実行される出力生成プロセスの数を制御する出力生成プロセスのプールサイズを設定できます。 デフォルトでは、プロセスプールサイズは、システムで使用可能な処理コアの数に1を加えた数に設定されます。 順次公開する場合は、この値を1に変更できます。 この場合、最初の公開タスクが実行され、次の公開タスクが公開キューに保存されます。

出力生成処理プールのサイズを変更するには、**バンドルの**&#x200B;生成プールのサイズ `com.adobe.fmdita.publish.manager.PublishThreadManagerImpl`設定を更新します。
