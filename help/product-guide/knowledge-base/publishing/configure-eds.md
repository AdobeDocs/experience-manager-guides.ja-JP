---
title: Experience Manager GuidesとEdge Delivery Services（Beta）
description: Edge Delivery Services（Beta）によって、Experience Manager Guidesのオーサリングおよび公開機能がどのように拡張されるかを説明します。
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 5808d42c530e55e309f192c99a0e71334c888b57
workflow-type: tm+mt
source-wordcount: '1532'
ht-degree: 0%

---

# Experience Manager GuidesとEdge Delivery Services（Beta）

Adobe Experience Manager Guidesを使用すると、専用の GitHub ベースの公開プロファイルを通じて、DITA コンテンツをEdge Delivery Services（EDS）（現在 *Beta* で利用可能）に直接公開できます。 この機能を使用すると、Experience Manager Guidesで DITA ベースのオーサリングワークフローを維持しながら、高パフォーマンスでレスポンシブなドキュメントエクスペリエンスを提供できます。

Adobe Experience Managerでの EDS の使用について詳しくは、[Edge Delivery Servicesの概要 &#x200B;](https://experienceleague.adobe.com/ja/docs/experience-manager-cloud-service/content/edge-delivery/overview) を参照してください。

Experience Manager Guidesから EDS （Beta）に公開できるようにするには、GitHub とExperience Manager Guidesをまたいで一連の設定手順を実行する必要があります。 以下の節では、各手順を順番に説明し、公開ワークフロー全体で各手順がどのように連携するかについて説明します。

1. [GitHub for EDS のセットアップと設定（Beta）](#set-up-and-configure-github-for-eds-beta)
2. [Experience Manager Guidesでの EDS （Beta）用の公開プロファイルの作成と設定](#create-and-configure-a-publish-profile-for-eds-beta-in-experience-manager)
3. [EDS ブロックを使用した出力のカスタマイズ](#customize-output-using-eds-blocks)

ビデオの簡単なチュートリアルについては、[AEM Guidesでの公開 &#x200B;](https://experienceleague.adobe.com/en/docs/experience-manager-guides/using/knowledge-base/expert-session/publishing-in-aem-guides-aug25) を参照してください。



## GitHub for EDS のセットアップと設定（Beta）

この節では、EDS （Beta）で使用する GitHub のセットアップ方法と設定方法について説明します。 Adobe ボイラープレートを使用したリポジトリーの作成、AEM コード同期を通じたAdobe Experience Managerへの GitHub の接続、必要な GitHub および OAuth アプリケーションの設定、コンテンツの公開に使用するリポジトリーマウントポイントの定義について説明します。

### EDS 用の GitHub リポジトリの作成（Beta）

EDS （Beta）には、事前に定義された構造を持つ GitHub リポジトリが必要です。 Adobeは、Experience Manager Guides ユーザー向けに特別に設計された、公式のボイラープレートリポジトリを提供します。

リポジトリを作成するには、次の手順を実行します。

1. Experience Manager Guides ボイラープレートテンプレートリポジトリ [`aem-guides-boilerplate`](https://github.com/adobe/aem-guides-boilerplate) ージを開きます。
   ![](assets/eds-boilerplate-template.png){align="left"}

2. このテンプレートを使用して新しいリポジトリを作成します。 [&#x200B; テンプレートからのリポジトリの作成 &#x200B;](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) について説明します。 EDS からアクセスできるように、リポジトリの表示が *公開* に設定されていることを確認します。

   ![](assets/eds-create-new-repo.png){align="left"}

これで、リポジトリが作成され、ボイラープレートテンプレート構造に合わせて配置されます。

![](assets/eds-repo-created-github-view.png){align="left"}

### AEM Code Sync を使用して GitHub をAdobeに接続する

Adobe Experience Managerは、**AEM コード同期** と呼ばれる GitHub アプリケーションを使用して、コンテンツをExperience Manager Guidesから GitHub にプッシュします。

次の手順を実行して、*AEM Code Sync* アプリケーションをインストールし設定します。

1. [AEM コード同期 &#x200B;](https://github.com/apps/aem-code-sync) ページに移動して、「**インストール**」を選択します。
2. *AEM コード同期* は、リポジトリの変更を監視し、更新が GitHub に正しくプッシュされていることを確認します。

   >
   >
   > アプリケーションのインストール時に、リポジトリを所有しているのと同じ GitHub アカウントを使用していることを確認してください。

   ![](assets/eds-aem-code-sync-page.png){align="left"}
3. 次のページで、作成したリポジトリへのアクセス権を付与します。 これを行うには、「**リポジトリの選択のみ**」オプションを選択し、ドロップダウンからリポジトリを選択します。

   ![](assets/eds-aem-code-sync-install-authorize.png){width="350" align="left"}
4. **インストールして認証** を選択します。

GitHub のセットアップページにリダイレクトされ、*AEM Code Sync* アプリケーションの登録が成功したことが確認されます。 このページから、web サイトのプレビュー URL とライブ URL を保存することもできます。

![](assets/eds-aem-code-sync-registered.png){align="left"}

### 新しい GitHub アプリの作成

1. GitHub で、左側のサイドバーに移動し、「**開発者設定**」を選択します。
2. 左側のサイドバーで、「**GitHub アプリ**」を選択します。
3. 「**新規 GitHub アプリ**」を選択します。

   ![](assets/eds-new-github-app.png){width="650" align="left"}
4. **新しい GitHub アプリを登録** ページで、次の詳細を入力します。
   - **GitHub アプリ名**：アプリの名前を入力します。 例えば、`USERNAME-eds-app` の場合、USERNAME は GitHub のユーザー名です。
   - **ホームページ URL**:Experience Manager Guides インスタンスへの URL を入力します。

     サンプル URL （形式）: `https://<aem-author-url>/libs/fmdita/clientlibs/xmleditor/page.html`

     サンプル URL: `https://author-p16602-e335172-cmstg.adobeaemcloud.com/libs/fmdita/clientlibs/xmleditor/page.html`
   - **コールバック URL**：ホームページ URL と同じです。
   - **Webhook URL**：このオプションを無効にします。
   - **リポジトリ権限**:**アクション、管理、アテステーション** の *読み取りおよび書き込み* 権限を設定します。
5. 「**GitHub アプリを作成**」を選択します。

これで、アプリの準備が整いました。 GitHub アプリの **設定** ページにリダイレクトされます。

![](assets/eds-github-app-registered-page.png){align="left"}

### 新しい OAuth アプリの作成

Experience Manager Guidesで EDS （Beta）公開プロファイルを作成する際にユーザーを認証するには、OAuth アプリが必要です。 *クライアント ID* および *クライアントシークレット* を使用した安全なログインフローを有効にします。

以下の手順を実行して、新しい OAuth アプリを作成します。

1. GitHub で、左側のサイドバーに移動し、「**開発者設定**」を選択します。
2. 左側のサイドバーで、「**OAuth アプリ**」を選択します。
3. 「**新規 OAuth アプリ**」を選択します。

   ![](assets/eds-new-oauth-app.png){width="650" align="left"}
4. 次の必須詳細を入力して、アプリケーションを登録します。
   - **アプリケーション名**:EDS リポジトリの名前を入力します
   - **ホームページ URL**:Experience Manager Guides インスタンスへの URL を入力します。 （サンプル URL 形式については、「[&#x200B; 新しい GitHub アプリの作成 &#x200B;](#create-a-new-github-app)」のステップ 4 を参照してください。
   - **認証コールバック URL**：ホームページ URL と同じ
5. 「**デバイスフローを有効にする**」オプションを選択し、「**アプリケーションを登録**」を選択して登録を完了します。

   ![](assets/eds-new-github-app-register.png){width="650" align="left"}

これで、アプリの準備が整いました。 *クライアント ID* をメモしておきます。 Experience Manager Guidesで公開プロファイルを設定する際に、今または後で最大 5 つの *クライアントシークレット* を生成できます。

![](assets/eds-new-oauth-app-page.png){align="left"}


### EDS （Beta）リポジトリ内のマウントポイント URL の構成

EDS （Beta）は、*ファイル内の* マウントポイント `fstab.yaml` URL として定義された GitHub リポジトリーパスからコンテンツを読み取ります。

`fstab.yaml` ファイルのマウントポイント URL を構成するには、次の手順に従います。

1. リポジトリで `fstab.yaml` ファイルを開き、以下を更新します。
   - `your-user-name`
   - `your-repo-name`

   >
   >
   > マウントポイント URL で、`main` はコンテンツを公開するブランチを示し、`docs` は作業中の EDS （Beta）リポジトリのルートフォルダーを示します。 GitHub のブランチ名を変更する場合は、（*ファイル内の* mountpoint`fstab.yaml` URL と、対応するExperience Manager Guidesの EDS 公開プロファイルに記載された同じブランチ名を更新する必要があります。

   ![](assets/eds-fstab-yaml-file.png){width="650" align="left"}
2. 「**変更をコミット**」を選択し、コミットの詳細を入力して確認します。
3. [&#x200B; 開発者設定 &#x200B;](https://github.com/settings/apps) に戻り、アプリを探して **編集** を選択します。

   ![](assets/eds-edit-github-app.png){width="650" align="left"}
4. 「**アプリをインストール**」ページに移動し、「**インストール**」を選択します。

   ![](assets/eds-install-eds-app.png){width="650" align="left"}
5. [AEM コード同期を使用して GitHub をAdobeに接続する &#x200B;](#connect-github-to-adobe-via-aem-code-sync) セクションの手順 2 と 3 を繰り返して、リポジトリを認証します。

## Experience Managerでの EDS （Beta）用の公開プロファイルの作成と設定

以下の節では、各手順を順に説明し、EDS （Beta）公開プロファイルを設定する方法、出力プリセットを設定する方法、Experience Manager Guidesで EDS （Beta）を使用して出力を生成する方法について説明します。

### EDS （Beta）公開プロファイルの作成

1. **[Workspace設定]** **>** **プロファイルを公開** に移動します。
2. **+** アイコンを選択して新しい公開プロファイルを作成し、次の詳細を入力します。
   - **サーバータイプ**：ドロップダウンから **GitHub Edge Delivery Services （Beta）** を選択します。
   - **名前**：このプロファイルの名前を入力します。
   - **リポジトリ名**：ボイラープレートから作成した GitHub リポジトリ名を使用します。
   - **ユーザー名**:GitHub のユーザー名を入力します。
   - **Branch main**:main （デフォルト）に設定します。
   - **ルートフォルダー**:docs に設定します（デフォルト）。
   - **クライアント ID とクライアントシークレット**:GitHub アプリからこれらを取得します（詳しくは、[&#x200B; 新しい OAuth アプリの作成 &#x200B;](#create-a-new-oauth-app) の節を参照してください）。
3. 「**ログイン**」を選択して認証します。

   ![](assets/eds-publish-profile.png){width="650" align="left"}
4. 認証に成功したら、「**保存**」を選択します。

これで、EDS （Beta）公開プロファイルが設定されました。

### EDS （Beta）の出力プリセットを作成して、出力を生成する

1. マップ コンソールでマップを開きます。
2. 「**出力プリセット**」タブで、「**+**」を選択して新しい出力プリセットを作成します。
3. **新しい出力プリセット** ダイアログで、次の詳細を入力します。
   - **種類**: **Edge Delivery サービス （Beta）を選択してください**
   - **名前**：このプリセットの名前を指定します
4. 「**追加**」を選択します。

   ![](assets/eds-output-preset.png){width="650" align="left"}
5. 新しく作成した EDS （Beta）出力プリセットを開き、「**Config**」タブに移動します。
   - 前の手順で作成したパブリッシュプロファイルを選択します。
   - **プッシュをライブに** を有効にします。

   **ライブにプッシュ** が有効な場合、生成された出力は GitHub にコミットされ、対応する更新がライブ web サイトに直ちに反映されます。

   ![](assets/eds-output-preset-config-tab.png){width="650" align="left"}

6. **保存** を選択し、次に **出力を生成** を選択します。

>
>
> 生成された出力は、EDS （Beta）リポジトリの **docs** フォルダーに保存されます。

これで、EDS （Beta）出力が生成されました。 コンテンツは、クリーンでレスポンシブなレイアウトで表示されます。 ページタイトル、パンくずリスト、本文コンテンツ、トピックで使用されるブロックなどの通常の要素が含まれます。 左側の目次（マップから生成）はトピック間を移動するのに役立ち、右側のミニ目次は現在のページ内のセクションをハイライト表示します。 出力全体が完全にレスポンシブなため、デバイス間で最適化された一貫性のある読み取りエクスペリエンスが確保されます。

![](assets/eds-site-output.png){align="left"}

## EDS ブロックを使用した出力のカスタマイズ

EDS は、`blocks` を使用して、コンテンツのさまざまな部分のスタイル設定および表示方法を制御します。 既存のブロックを修正したり、カスタムのブロックを作成することができます。

以下に概説する例では、既存のブロックをカスタマイズし、新しいブロックを作成して、Experience Manager Guidesの最終的な EDS （Beta）出力のスタイルを設定する方法について順を追って説明します。

### パンくずブロックをカスタマイズしてテキストの色を更新

パンくずリストは、ユーザーがドキュメント内の位置を理解するのに役立つように、ページ全体で使用されます。 このブロックは web サイト全体で一貫して表示されるので、スタイル設定を更新すると、統一されたデザイン更新が可能になります。

パンくずブロックをカスタマイズしてテキストの色を更新するには、次の手順を実行します。

1. GitHub リポジトリに移動し、`blocks` フォルダーを開きます。
2. **パンくず** ブロックを選択します。

   ![](assets/eds-breadcrumbs.png){width="650" align="left"}
3. `css` ファイルを開き、テキストの色を更新します。
4. 変更内容を GitHub にコミットします。
5. ライブ web サイトを更新して、更新内容を表示します。

### EDS （Beta）スクリプトを更新して、公開出力にカスタム要素を作成する

場合によっては、コンテンツの特定の部分のみのスタイルを設定したい場合があります。 カスタムブロックを使用してこれを行うには、次の手順を実行します。

1. トピックファイルを開き、タグ要素内のテキストを選択します。

   次のスクリーンショットでは、`example` タグ内のコンテンツが選択されています。
   ![](assets/eds-example-tag-org-output.png){width="650" align="left"}
2. `example` タグ内のテキストを設定するには：
   - **コンテンツのプロパティ** に移動します。
   - `outputclass` 属性を追加します。
   - その値を `example eds-force-block` に設定します。
   - 「**追加**」を選択します。
     ![](assets/eds-example-tag.png){width="650" align="left"}
3. 出力を保存して再生成します。
4. `outputclass` ディレクトリ内に、`blocks` と同じ名前の新しいフォルダーを作成します。 [&#x200B; リポジトリへのファイルの追加 &#x200B;](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-using-the-command-line) について説明します。

   ![](assets/eds-example-folder.png){width="650" align="left"}
5. 必須の `css` ファイルとオプションの `js` ファイルを追加します。

   ![](assets/eds-example-folder-subfolders.png){width="650" align="left"}
6. 変更をコミットして出力を再生成します。

選択したコンテンツには、ブロックで定義したカスタムスタイル設定が表示されます。

![](assets/eds-example-output.png){width="650" align="left"}