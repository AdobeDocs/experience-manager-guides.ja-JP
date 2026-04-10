---
title: Cloud Services用AEM Sites テンプレートのダウンロードとインストール
description: クラウドサービス用AEM Sites テンプレートのダウンロードとインストール方法について説明します
feature: Installation
role: Admin
level: Experienced
source-git-commit: 834959a6a0e22cd5d2b2c5d0e57ceb6d45c0c666
workflow-type: tm+mt
source-wordcount: '845'
ht-degree: 1%

---

# AEM Sites テンプレートのダウンロードとインストール

このガイドでは、クラウド環境でAEM Sites ページを生成するための最新のAEM Guides テンプレートを設定および設定する手順を説明します。 必要なパッケージのインストール、プリセットの作成と設定、AEM Sitesの生成を行うには、次の手順に従います。

## 前提条件

次のタブには、Experience Manager Guidesの設定に基づいて必要な前提条件が用意されています。Cloud Serviceまたはオンプレミス。

>[!BEGINTABS]

>[!TAB Cloud Service]

- **Adobe Experience Manager （AEM） Cloud**: **AEM Guides 2502以降のバージョン**&#x200B;を含む&#x200B;**AEM as a Cloud Service**&#x200B;の実行中のインスタンス。

- **必要な権限**：次の権限が必要です：

   - パッケージをデプロイするための&#x200B;**Cloud Manager**&#x200B;へのアクセス。
   - 環境に関連付けられた&#x200B;**Git リポジトリ**&#x200B;へのアクセス。
   - AEM Guidesでプリセットを作成および変更するための権限。

- **パッケージをダウンロード**: ソフトウェア配布ポータルから次のパッケージをダウンロードします。

   - コンポーネントパッケージ：guides-components.all-1.x.0.zip
   - サイトテンプレート：aemg-docs-1.x.0.zip

>[!TAB  オンプレミス ]

- **Adobe Experience Manager （AEM）:** **サービスパック** 21、20、および19と&#x200B;**AEM 4.6.0**&#x200B;以降のバージョンがインストールされた&#x200B;**AEM Guides 6.5**&#x200B;の実行中のインスタンス。

- **必要な権限**：次の権限を持っていることを確認してください：

   - 必要なパッケージをダウンロードするための&#x200B;**ソフトウェア配布ポータル**&#x200B;へのアクセス
   - AEMにパッケージをインストールするための&#x200B;**CRX Package Manager**&#x200B;へのアクセス。
   - AEM Guidesでプリセットを作成および変更するための権限。

- **パッケージをダウンロード**: **ソフトウェア配布ポータル**&#x200B;から次のパッケージをダウンロードします。

   - コンポーネントパッケージ：on-prem-guides-components.all-1.x.0.zip
   - Sites パッケージ：aemg-docs.all-1.x.0.zip

>[!ENDTABS]


## パッケージインストール

次のタブには、Experience Manager Guidesの設定に基づくパッケージインストールの手順が表示されます。Cloud Serviceまたはオンプレミス。

>[!BEGINTABS]

>[!TAB Cloud Service]

**コンポーネントパッケージ（guides-components.all-1.x.x.zip）**&#x200B;をインストールし、次の手順を実行します

1. **クローン Git リポジトリ：**
   1. Cloud Managerの左側のパネルで&#x200B;**Repositories**&#x200B;に移動します。
   2. 「**リポジトリ情報にアクセス**」を選択し、Git clone コマンドをコピーします。

      ![ アクセス リポジトリ情報を選択](/help/product-guide/knowledge-base/kb-articles/assets/publishing/access-repo.png){width="350" align="left"}

   3. 提供されたユーザー名とパスワードを使用して、リポジトリをローカルシステムに複製します（必要に応じてパスワードを生成します）。
2. **パッケージをMaven バンドルに追加：**
   1. ローカルに複製したリポジトリーで、新しいMaven バンドルを作成するか、既存のバンドルに追加します。
   2. Maven プロジェクトに構造`/jcr_root/apps/fmdita/` インストールが存在することを確認します。

      Maven プロジェクトの![構造](/help/product-guide/knowledge-base/kb-articles/assets/publishing/maven-structure.png){width="650" align="left"}


   3. ダウンロードしたguides-components.all-1.x.x.zip ファイルをインストールフォルダーに配置します。

3. **filters.xmlの更新：**

   1. 親コンテンツディレクトリのMETA-INF フォルダーにあるfilters.xml ファイルを開きます。
   2. 次のフィルターを追加します：filter root=`/apps/fmdita` mode=`merge`/


      ![ フィルターを追加](/help/product-guide/knowledge-base/kb-articles/assets/publishing/add-filter-xml.png){width="650" align="left"}


4. **pom.xmlの設定：**&#x200B;環境要件に従ってpom.xml ファイルを更新します。
5. **変更をプッシュしてパイプラインを実行：**
   1. 変更をメインのGit リポジトリにプッシュします。
   2. Cloud Managerの&#x200B;**パイプライン**&#x200B;に移動し、目的の環境に対してパイプラインを実行します。
6. **インストールの確認：** デプロイメントが完了すると、コンポーネントパッケージがAEM Cloud環境にインストールされます。

>[!TAB  オンプレミス ]

1. **コンポーネントパッケージをインストールします：**
   1. [**CRX Package Manager**](http://<your-aem-instance>/crx/packmgr)に移動します。
   2. on-prem-guides-components.all-1.x.0.zip パッケージをアップロードしてインストールします。

2. **Sites パッケージをインストール：** CRX Package Managerを使用して、aemg-docs.all-1.x.0.zip パッケージをアップロードしてインストールします。

>[!ENDTABS]

## インストール済みテンプレートを使用したサイトの作成（Cloud Service用）

1. **サイトテンプレートの読み込み：**
   1. AEM Sites ページ（servername/sites.html/content）に移動します。
   2. テンプレートから&#x200B;**Create** > **Site**&#x200B;を選択します。
   3. **Import** オプションを使用して、サイトテンプレート aemg-docs-1.x.x.zipをインポートします。
2. **テンプレートを選択：** **AEMG Docs 1.x.x**&#x200B;を選択し、**次へ**&#x200B;を選択します。
3. **サイトの詳細を入力：** **サイトのタイトル**&#x200B;と&#x200B;**サイト名**&#x200B;を入力します。

   ![サイトの作成](/help/product-guide/knowledge-base/kb-articles/assets/publishing/create-site.png){width="350" align="left"}

4. 「**作成**」を選択します。

## AEM サイトプリセットの作成

1. **新しいプリセットを作成：**
   1. AEM GuidesでDITA マップを開き、**出力** パネルに移動します。
   2. 「**プリセットを作成**」を選択します。
   3. 型を&#x200B;**AEM Sites**&#x200B;として選択します。
   4. プリセットの名前を入力します。
   5. **従来のコンポーネントマッピングを使用**&#x200B;設定のチェックを外します。
   6. 「**追加**」を選択して、プリセットを作成します。

      ![新しいAEM サイトプリセットを作成](/help/product-guide/knowledge-base/kb-articles/assets/publishing/new-output-preset.png){width="350" align="left"}


2. **AEM サイト プリセットの設定：**&#x200B;標準（OOTB）サイトを設定するには、次の2つのオプションがあります。

   **オプション 1: サイト ドロップダウンの使用**

   1. **サイト**&#x200B;を上記のように選択します（例：AEMG Docs サイト）。
   2. **公開パス**&#x200B;および&#x200B;**トピックページ** テンプレートが自動的に次のように設定されていることを確認します。
      - 公開パス：Cloud Service: `/content/AEMG-Docs-Site/en/docs/product`およびオンプレミス：`aemg-docs/en/docs/product1`
      - トピックページテンプレート：トピックページ

      ![ サイト ドロップダウンを使用して、AEM サイトを設定します](/help/product-guide/knowledge-base/kb-articles/assets/publishing/use-site-dropdown-cs.png){width="350" align="left"}

   **オプション 2: サイト パスを使用**

   1. **サイトパス**&#x200B;をCloud Serviceの`/content/AEMG-Docs-Site/en/docs/product`として、オンプレミスの`/content/aemg-docs/en/docs/product1`として手動で設定します。
   2. **トピックページ** テンプレートが自動的にトピックページに設定されていることを確認します。

      Cloud Service用：

      ![ サイト パスを使用してAEM サイトを構成する](/help/product-guide/knowledge-base/kb-articles/assets/publishing/use-site-path-cs.png){width="650" align="left"}

      オンプレミス用：

      ![ サイトパスを使用](/help/product-guide/knowledge-base/kb-articles/assets/publishing/use-site-path.png){width="350" align="left"}

3. **プリセットを保存：** プリセットに加えた変更を保存します。

## AEM Sitesを生成

1. **サイトを生成：**
   1. プリセットが設定された状態で、対応するDITA マップのAEM サイトを生成します。
   2. 生成されたサイトは、Cloud Serviceのパス `/content/AEMG-Docs-Site/en/docs/product`およびオンプレミスのパス `/content/aemg-docs/en/docs/product1`で利用できます。
2. **既定の生成パスの変更（オプション）:** サイト生成用の既定のパスを変更する場合は、次の手順を実行します。
   1. **AEM Sites**&#x200B;に移動します。
   2. OOTB サイト構造の下に新しい製品ページを作成します。
   3. **AEMG Docs** > **English** > **Docs**&#x200B;に移動します。

      ![ページを作成](/help/product-guide/knowledge-base/kb-articles/assets/publishing/create-page-cs.png){width="650" align="left"}

   4. 「**ホームページ**」タイルを選択し、「**次へ**」を選択します。

      ![ ホームタイルを選択](/help/product-guide/knowledge-base/kb-articles/assets/publishing/home-tile-cs.png){width="650" align="left"}

   5. ページの&#x200B;**タイトル**&#x200B;と&#x200B;**名前**&#x200B;を入力します。
   6. 「**作成**」を選択します。

>[!NOTE]
>
> Cloud Service設定の場合は、実稼動環境にデプロイする前に、すべての設定が非実稼動環境でテストされていることを確認します。 <br><br>詳細については、[AEM as a Cloud Serviceへのデプロイに関する公式ドキュメント ](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/deploying/overview)を参照してください。
