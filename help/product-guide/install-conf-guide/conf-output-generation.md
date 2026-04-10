---
title: 出力生成設定の設定
description: 出力生成設定の設定方法について説明します
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '3314'
ht-degree: 1%

---

# 出力生成設定の設定 {#id181AI0B0E30}

AEM Guidesには、出力生成プロセスをカスタマイズするための多くの設定オプションが用意されています。 このトピックでは、出力生成プロセスの設定に役立つすべての設定とカスタマイズについて説明します。

## DITA マップダッシュボードの「ベースライン」タブの設定 {#id223MD0D0YRM}

以下のタブでは、Experience Manager Guidesの設定に基づいてDITA マップダッシュボードの「ベースライン」タブを非表示にする手順を示します。Cloud Serviceまたはオンプレミス。

>[!BEGINTABS]

>[!TAB Cloud Service]

1. 設定ファイルを作成するには、[設定の上書き](download-install-config-override.md#)の手順を使用します。
1. 設定ファイルで、マップダッシュボードの「ベースライン」タブを設定するために、次の\（プロパティ\）詳細を指定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `hide.tabs.baseline` | Boolean\（`true/false`\）。**デフォルト値**: `true` |

>[!NOTE]
>
> この設定はデフォルトで有効になっており、「ベースライン」タブはマップダッシュボードで使用できません。

>[!TAB  オンプレミス ]

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

>[!ENDTABS]


## 既存のAEM サイト内でのブレンド公開の設定 {#id1691I0V0MGR}

DITA コンテンツを含むAEM サイトがある場合は、AEM サイト出力を設定して、DITA コンテンツをサイト内の事前定義された場所に公開できます。 例えば、AEM サイトページの次のスクリーンショットでは、`ditacontent` ノードはDITA コンテンツを保存するために予約されています。

![](assets/publish-in-aem-site.png)

ページ内の残りのノードは、AEM サイトエディターから直接作成されます。 DITA コンテンツを事前定義された場所に公開するように公開設定を設定すると、既存のDITA以外のコンテンツがAEM Guides公開プロセスによって変更されなくなります。

既存のサイトで次の設定を実行して、事前定義されたノードにDITA コンテンツを公開できるようにする必要があります。

- サイトのテンプレートプロパティを設定する

- サイト内のノードを追加してDITA コンテンツを公開する


次のタブには、Experience Manager Guidesの設定に基づいて既存のサイトのテンプレートプロパティを設定する手順が示されています。Cloud Serviceまたはオンプレミス。

>[!BEGINTABS]

>[!TAB Cloud Service]

1. パッケージマネージャーを使用して、/libs/fmdita/config/templates/default ファイルをダウンロードします。

   >[!NOTE]
   >
   > `libs` ノードで使用できる既定の構成ファイルのカスタマイズを行わないでください。 `libs` ノードで`apps` ノードのオーバーレイを作成し、`apps` ノードでのみ必要なファイルを更新する必要があります。

1. 以下のプロパティを追加します。

   | プロパティ名 | タイプ | 値 |
   |-------------|----|-----|
   | `topicContentNode` | 文字列 | DITA コンテンツを公開するノード名を指定します。 例えば、AEM GuidesがDITA コンテンツを公開するデフォルトノードは<br>です `jcr:content/contentnode` |
   | `topicHeadNode` | 文字列 | DITA コンテンツのメタデータ情報を保存するノード名を指定します。 例えば、AEM Guidesがメタデータ情報を保存するデフォルトのノードは<br>です `jcr:content/headnode` |


次回、サイトのテンプレート設定を使用してDITA コンテンツを公開すると、コンテンツは`topicContentNode`および`topicHeadNode` プロパティで指定されたノードに公開されます。

>[!TAB  オンプレミス ]

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

>[!ENDTABS]

## 公開用の基本出力場所の設定

次のタブには、Experience Manager Guidesの設定に基づいてベース出力場所を設定する手順が示されています。Cloud Serviceまたはオンプレミス。

>[!BEGINTABS]

>[!TAB Cloud Service]

1. 設定ファイルを作成するには、[設定の上書き](download-install-config-override.md)の手順を使用します。

1. 設定ファイルで、次の（プロパティ）詳細を指定して、ベース出力の場所を設定します。

   | PID | プロパティキー | プロパティの値 |
   |---|---|---|
   | `com.adobe.fmdita.config.ConfigManager` | `base.output.path` | **デフォルト値：** &quot;/content/dam/fmdita-outputs&quot; |

>[!TAB  オンプレミス ]

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.config.ConfigManager* バンドルを検索して選択します。

1. プロパティ **Base Output Location**&#x200B;を更新して、公開後にPDFが保存されるAEM リポジトリのデフォルトパスを指定します。 さらに、無効なパスが入力されると、デフォルトのパス `/content/dam/fmdita-outputs`に自動的に戻ります。

1. 「**保存**」をクリックします。

>[!ENDTABS]

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

   2. 新しいフィールドを選択して、フィールドの&#x200B;**設定**&#x200B;を開きます。

   3. **フィールドラベル**&#x200B;に、メタデータ名「オーディエンス」を入力します。

   4. 「**プロパティにマッピング**」設定で、を指定します。/jcr:content/metadata/&lt; メタデータの名前\> この例では、にを設定します。/jcr:content/metadata/audience.

   これらの手順を使用して、必要なすべてのメタデータパラメーターを追加します。

1. 「**保存**」をクリックします。


新しいパラメーターが、すべてのDITA マップのプロパティページに表示されるようになりました。

![](assets/properties-page-custom-metadata.PNG)

次に、カスタムメタデータをDITA マップコンソールで使用できるようにする必要があります。 次のタブには、Experience Manager Guidesの設定に基づいて、カスタムメタデータをDITA マップダッシュボードで使用できるようにする手順が示されています。Cloud Serviceまたはオンプレミス。

>[!BEGINTABS]

>[!TAB Cloud Service]

1. パッケージマネージャーを使用して、Cloud ManagerのGit リポジトリの次の場所にあるmetadataList ファイルにアクセスします。

   /libs/fmdita/config/metadataList

   >[!NOTE]
   >
   > metadataList ファイルには、マップダッシュボードのDITA マップの&#x200B;**プロパティ** ドロップダウンリストに表示されるプロパティのリストが含まれています。 デフォルトでは、このファイルには、docstate、dc:language、dc:description、dc:titleの4つのプロパティが一覧表示されます。

1. Metadata Schema Forms ページに追加したカスタムメタデータを追加します。 この例では、オーディエンスパラメーターをデフォルトリストの最後に追加します。

>[!TAB  オンプレミス ]

1. AEMにログインし、CRXDE Lite モードを開きます。

1. 次の場所にあるmetadataList ファイルにアクセスします。

   /libs/fmdita/config/metadataList

   >[!NOTE]
   >
   > metadataList ファイルには、マップダッシュボードのDITA マップの&#x200B;**プロパティ** ドロップダウンリストに表示されるプロパティのリストが含まれています。 デフォルトでは、このファイルには、docstate、dc:language、dc:description、dc:titleの4つのプロパティが一覧表示されます。

1. Metadata Schema Forms ページに追加したカスタムメタデータを追加します。 この例では、オーディエンスパラメーターをデフォルトリストの最後に追加します。

1. 「**すべて保存**」をクリックします。

>[!ENDTABS]

これで、カスタムメタデータがDITA マップコンソールの&#x200B;**プロパティ** ドロップダウンリストに表示されます。

最後に、パブリッシャーは、パブリッシュされた出力にカスタムメタデータを含める必要があります。 出力の生成中にカスタムメタデータを処理するには、次の手順を実行します。

1. Assets UIで、公開するDITA マップに移動します。

1. DITA マップファイルを選択し、そのプロパティページを開きます。

1. プロパティ ページで、カスタムメタデータの値を指定します。 この例では、audience パラメーターにExternalの値を指定しています。

   ![](assets/properties-page-custom-metadata-value.png)

1. 「**保存して閉じる**」をクリックします。

1. DITA マップファイルをクリックして、DITA マップコンソールを開きます。

1. 「**出力プリセット**」タブで、出力の生成に使用する出力プリセットを選択します。

1. 「**編集**」をクリックします。

1. **プロパティ** ドロップダウンリストから、公開プロセスに渡すプロパティを選択します。

   ![](assets/props-in-publish-output.PNG)


選択したプロパティ/メタデータは公開プロセスに渡され、最終出力で使用できるようになります。

### DITA-OTに渡されたメタデータを検証して処理します（Cloud Serviceのみ）

DITA-OTに渡されたメタデータ値を検証するには、クラウド対応のjarを使用したローカル環境を使用できます。 クラウド上のローカルファイルシステムにはアクセスできないので、メタデータファイルを検証する唯一の方法はクラウド対応のjarを使用することです。

- ファイル名：metadata.xml
- ファイルの場所：crx-quickstart/profiles/ditamaps/&lt;ditamap-1234\>

  metadata.xmlにアクセスするには：

   - AEM インスタンスが実行されているサーバーの場所にログインします。
   - crx-quickstart/profiles/ditamaps/&lt;new-created-directory-name\>/metadata.xmlに移行します。
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


- isArray: メタデータが複数値\（Array\）であるかどうかを定義するブール値の属性。 値はセミコロンで区切られます。
- パス id: temp ディレクトリの下に保存されているファイルへの絶対パス。

>[!NOTE]
>
> 特定のメタデータがファイルに存在しない場合、キーを含む&lt;meta\> タグは、metadata.xml ファイル内のそのファイルのプロパティとして表示されません。

## ルートマップメタデータを受け入れるようにDITA-OT コマンドライン引数フィールドを設定します（Cloud Serviceのみ）

DITA-OT コマンドライン引数フィールドを使用してルートマップメタデータを渡すには、次の手順を実行します。

1. 設定ファイルを作成するには、[設定の上書き](download-install-config-override.md#)の手順を使用します。
1. 設定ファイルで、次の\（property\）詳細を指定して、プリセットのDITA-OT コマンドライン引数フィールドを設定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `pass.metadata.args.cmd.line` | Boolean\（`true/false`\）。**デフォルト値**: `true` |

- プロパティ値を&#x200B;**true**&#x200B;に設定すると、DITA-OT コマンドライン機能が有効になり、DITA-OT コマンドラインを通じてメタデータを渡すことができます。
- プロパティ値を&#x200B;**false**&#x200B;に設定すると、DITA-OT コマンドライン機能が無効になります。 次に、プリセットの「プロパティ」フィールドを使用して、メタデータを渡すことができます。

## DITA マップコンソールのカスタマイズ {#id188HC08M0CZ}

AEM Guidesでは、DITA マップコンソールの機能を柔軟に拡張できます。 例えば、AEM Guidesで使用できるレポートとは異なるレポートセットがある場合、そのようなレポートをマップコンソールに追加できます。 マップコンソールをカスタマイズするには、必要な機能を実行するためのコードを含むAEM Client Library \（またはClientLib\）を作成する必要があります。

>[!NOTE]
>
> ページコンポーネントを直接変更することは、製品の新しいリリースによって上書きされるため、お勧めしません。

AEM Guidesには、マップコンソールをカスタマイズするための`apps.fmdita.dashboard-extn` カテゴリが用意されています。 マップコンソールが読み込まれると、`apps.fmdita.dashboard-extn` カテゴリで作成された機能が実行され、読み込まれます。

>[!NOTE]
>
> AEM クライアントライブラリの作成について詳しくは、[ クライアントサイドライブラリの使用](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/implementing/developing/full-stack/clientlibs.html?lang=en)を参照してください。

## 出力生成時の画像レンディションの処理 {#id177BF0G0VY4}

AEMには、アセットを処理するためのデフォルトワークフローとメディアハンドルのセットが付属しています。 AEMには、最も一般的なMIME タイプのアセット処理を処理するための定義済みワークフローがあります。 通常、AEMでは、アップロードした画像ごとに、同じ画像の複数のレンディションがバイナリ形式で作成されます。 これらのレンディションのサイズは異なり、解像度も異なり、透かしが追加されたり、その他の特性が変更されたりします。 AEMでのアセットの処理方法について詳しくは、AEM ドキュメントの「[Media HandlersとWorkflowsを使用したAssetsの処理](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/assets/asset-microservices-overview.html?lang=en)」を参照してください。

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

出力プリセットに異なる画像レンディションを指定する場合は、`outputName`属性を使用して、その値をプリセットのタイトルに設定し、同じ出力タイプの特定の出力プリセットに対するカスタムレンディションを定義できます。 これは、様々な公開シナリオに対して異なる画像サイズまたは形式が必要な場合に便利です。

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

上記のレンディションでは、`outputName`属性が`ditahtml5` （プリセットタイトル）に設定されている場合、`ditahtml5` プリセットはサムネール画像`cq5dam.thumbnail.319.319.png`を使用します。 `outputName`属性が指定されていない場合、すべてのHTML5出力で大きな画像`cq5dam.web.1280.1280.jpeg`が使用されます。

指定したレンディションが存在しない場合、AEM Guides公開プロセスは最初に指定した画像のweb レンディションを検索します。 Web レンディションが見つからない場合でも、画像の元のレンディションが使用されます。

>[!NOTE]
>
> これらの画像レンディションは、出力生成のみを制御します。 プレビューまたはレビュー用にドキュメントを開くと、画像のweb レンディションが使用されます。

## 出力履歴の自動削除期間の設定 {#id19AAI070V8Q}

出力を生成すると、出力は出力ログと共に作成されます。 大規模なDITA マップの場合、これらのログはリポジトリ内で大きなスペースを取る可能性があります。 デフォルトでは、ログはリポジトリ内の次の場所に保存されます。

`/var/dxml/metadata/outputHistory`

時間の経過とともに、すべてのログファイルの合計サイズがGBに達する可能性があります。 AEM Guidesでは、これらのログファイルをリポジトリに保持する期間を設定できます。 指定された期間が経過すると、出力生成履歴と共にログがリポジトリから削除されます。

>[!NOTE]
>
> 出力生成履歴は、「出力」タブの「生成された出力」リストのログエントリです。

履歴パージ機能を設定すると、リポジトリ内のすべてのDITA マップの出力生成に影響します。 DITA マップの「出力」タブでは、履歴は指定された日数の後、設定で指定された時間に消去されます。

>[!NOTE]
>
> ログファイルと出力生成履歴を削除しても、生成された出力には影響しません。

次のタブでは、Experience Manager Guidesの設定に基づいて出力履歴とログをパージする日時を設定する手順を示します。Cloud Serviceまたはオンプレミス。

>[!BEGINTABS]

>[!TAB Cloud Service]

設定ファイルを作成するには、[設定の上書き](download-install-config-override.md#)の手順を使用します。 設定ファイルに次の\（property\）詳細を指定して、出力履歴とログをパージする日時を設定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager\|output.history.purgeperiod` | 出力ログとともに出力履歴が消去されるまでの日数を指定します。 この機能を無効にする場合は、このプロパティで指定された日数より前に生成された出力に対してパージ処理が実行される指定された時間に、このプロパティを0.Everydayに設定します。 | **デフォルト値**: 5 |
| `output.history.purgetime` | パージ処理が開始される時間を指定します。 | **デフォルト値**: 0:00 \（または12:00 midnight\） |

>[!TAB  オンプレミス ]

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

>[!ENDTABS]

## 最近生成された出力リストの制限を変更する {#id1679JH0H0O2}

DITA マップの「出力」タブに表示される生成された出力の最大数を変更できます。

>[!BEGINTABS]

>[!TAB Cloud Service]

設定ファイルを作成するには、[設定の上書き](download-install-config-override.md#)の手順を使用します。 設定ファイルで、リストに表示する出力数を変更するには、次の\（property\）詳細を指定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `output.historylimit` | 整数値。<br> **デフォルト値**: 25 |

>[!TAB  オンプレミス ]

デフォルトでは、最後に生成された25個の出力のリストが表示されます。 リストに表示する出力数を変更するには、**バンドルの**&#x200B;出力リストの制限`com.adobe.fmdita.config.ConfigManager`設定を更新します。

>[!ENDTABS]

>[!TIP]
>
> 出力履歴の操作に関するベストプラクティスについては、*ベストプラクティスガイド*&#x200B;の「[出力履歴](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/cs-mar-22/Adobe-Experience-Manager-Guides_Best-Practices_EN.pdf)」の節を参照してください。

## 出力生成パフォーマンスの最適化（オンプレミスのみ） {#id176LB050VUI}

AEM Guidesでは、同時に実行される出力生成プロセスの数を制御する出力生成プロセスのプールサイズを設定できます。 デフォルトでは、プロセスプールサイズは、システムで使用可能な処理コアの数に1を加えた数に設定されます。 順次公開する場合は、この値を1に変更できます。 この場合、最初の公開タスクが実行され、次の公開タスクが公開キューに保存されます。

出力生成処理プールのサイズを変更するには、**バンドルの**&#x200B;生成プールのサイズ `com.adobe.fmdita.publish.manager.PublishThreadManagerImpl`設定を更新します。

## FrameMaker Publishing Serverの設定（オンプレミスのみ） {#id1678G0Z0TN6}

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


