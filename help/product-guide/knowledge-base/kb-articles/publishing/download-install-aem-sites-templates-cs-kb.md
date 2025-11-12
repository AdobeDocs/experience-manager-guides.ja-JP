---
title: Cloud Services 用のAEM Sites テンプレートのダウンロードとインストール
description: クラウドサービス用のAEM Sites テンプレートをダウンロードしてインストールする方法を説明します
feature: Installation
role: Admin
level: Experienced
exl-id: 67f7ff26-fbc7-426c-aa7d-9bf4debf05d8
source-git-commit: 4c564a0ffaa8f287bcaf012634d49dbf1e0682b4
workflow-type: tm+mt
source-wordcount: '671'
ht-degree: 1%

---

# AEM Sites テンプレート（Cloud Services）のダウンロードとインストール

このガイドでは、クラウド環境でAEM Sites ページを生成するための最新のAEM Guides テンプレートをセットアップおよび設定する手順を説明します。 次の手順に従って、必要なパッケージをインストールし、プリセットを作成および設定して、AEM Sitesを生成します。

## 前提条件

設定を進める前に、次の前提条件が満たされていることを確認します。

- **Adobe Experience Manager （AEM） Cloud**: **AEM as a Cloud Service** の実行中のインスタンスで、**AEM Guides 2502 以降のバージョン** を持ちます。

- **必要な権限**：次の権限が必要です。

   - **Cloud Manager** にアクセスしてパッケージをデプロイします。
   - 環境に関連付けられた **Git リポジトリー** にアクセスします。
   - AEM Guidesでプリセットを作成および変更する権限。

- **パッケージをダウンロード**：ソフトウェア配布ポータルから次のパッケージをダウンロードします。

   - コンポーネントパッケージ：guides-components.all-1.x.0.zip
   - Sites テンプレート：aemg-docs-1.x.0.zip

## クラウドデプロイメントを介したパッケージのインストール

**コンポーネントパッケージ（guides-components.all-1.x.x.zip）をインストールして** 次の手順を実行します

1. **Git リポジトリのクローン：**
   1. Cloud Managerの左側のパネルで **リポジトリ** に移動します。
   2. **リポジトリ情報にアクセス** を選択し、Git clone コマンドをコピーします。

      ![&#x200B; リポジトリ情報にアクセスを選択 &#x200B;](/help/product-guide/knowledge-base/kb-articles/assets/publishing/access-repo.png){width="350" align="left"}

   3. 指定されたユーザー名とパスワード（必要に応じてパスワードを生成）を使用して、リポジトリのクローンをローカルシステムに作成します。
2. **Maven バンドルにパッケージを追加：**
   1. ローカルで複製されたリポジトリで、新しい Maven バンドルを作成するか、既存のバンドルに追加します。
   2. インストールす `/jcr_root/apps/fmdita/` 構造が Maven プロジェクトに存在することを確認します。

      ![Maven プロジェクトの構造 &#x200B;](/help/product-guide/knowledge-base/kb-articles/assets/publishing/maven-structure.png){width="650" align="left"}


   3. ダウンロードした guides-components.all-1.x.x.zip ファイルをインストールフォルダーに配置します。

3. **filters.xml の更新：**

   1. 親コンテンツディレクトリのMETA-INF フォルダーにある filters.xml ファイルを開きます。
   2. 次のフィルターを追加します：filter root=`/apps/fmdita` mode=`merge`/


      ![&#x200B; フィルターを追加 &#x200B;](/help/product-guide/knowledge-base/kb-articles/assets/publishing/add-filter-xml.png){width="650" align="left"}


4. **pom.xml を設定：** 環境要件に従って pom.xml ファイルを更新します。
5. **変更をプッシュしてパイプラインを実行：**
   1. 変更をメイン Git リポジトリにプッシュします。
   2. Cloud Managerの **パイプライン** に移動し、目的の環境でパイプラインを実行します。
6. **インストールの確認：** デプロイメントが完了すると、コンポーネントパッケージがAEM Cloud Environment にインストールされます。

## インストールされたテンプレートを使用してサイトを作成

1. **サイトテンプレートを読み込み：**
   1. AEM Sitesページ（servername/sites.html/content）に移動します。
   2. テンプレートから **作成**/**サイト** を選択します。
   3. **Import** オプションを使用して、サイトテンプレート aemg-docs-1.x.x.zip を読み込みます。
2. **テンプレートを選択：**&#x200B;**AEMG ドキュメント 1.x.x** を選択してから「**次へ**」を選択します。
3. **サイトの詳細を入力：** **サイトのタイトル** および **サイト名** を入力します。

   ![サイトの作成](/help/product-guide/knowledge-base/kb-articles/assets/publishing/create-site.png){width="350" align="left"}

4. 「**作成**」を選択します。

## AEM サイトプリセットを作成

1. **新しいプリセットを作成する：**
   1. AEM Guidesで DITA マップを開き、**出力** パネルに移動します。
   2. **プリセットを作成** を選択します。
   3. タイプを **AEM Sites** として選択します。
   4. プリセットの名前を入力します。
   5. 「**従来のコンポーネントマッピングを使用**」設定をオフにします。

      ![&#x200B; 新しいAEM サイトプリセットの作成 &#x200B;](/help/product-guide/knowledge-base/kb-articles/assets/publishing/create-new-output-preset.png){width="350" align="left"}

   6. 「**追加**」を選択して、プリセットを作成します。
2. **AEM サイトプリセットを設定する：** 標準提供（OOTB）サイトを設定するには、次の 2 つのオプションがあります。

   **オプション 1：サイトのドロップダウンを使用する**

   1. **サイト** を、上記で作成したものとして選択します（例：AEMG ドキュメントサイト）。
   2. **公開パス** と **トピックページ** テンプレートが自動的に次のように設定されていることを確認します。
      - 公開パス：`/content/AEMG-Docs-Site/en/docs/product`
      - トピックページテンプレート：トピックページ

      ![&#x200B; サイトドロップダウンを使用して、AEM サイトを設定します &#x200B;](/help/product-guide/knowledge-base/kb-articles/assets/publishing/use-site-dropdown-cs.png){width="350" align="left"}

   **オプション 2：サイトパスの使用**

   1. 必要に応じて **サイトパス** を手動で設定 `/content/AEMG-Docs-Site/en/docs/product` ます。
   2. **トピック ページ** テンプレートが自動的にトピック ページに設定されていることを確認します。

      ![&#x200B; サイトパスを使用してAEM サイトを設定します &#x200B;](/help/product-guide/knowledge-base/kb-articles/assets/publishing/use-site-path-cs.png){width="650" align="left"}

3. **プリセットを保存：** プリセットに加えた変更を保存します。

## AEM Sitesを生成

1. **サイトの生成：**
   1. プリセットを設定した状態で、対応する DITA マップのAEM サイトを生成します。
   2. 生成されたサイトは、次のパスで使用できます。`/content/AEMG-Docs-Site/en/docs/product`
2. **デフォルトの生成パスを変更（オプション）:** サイト生成のデフォルトパスを変更する場合は、次の手順を実行します。
   1. **AEM Sites** に移動します。
   2. OOTB サイト構造の下に新しい製品ページを作成します。
   3. **AEMG Docs**/**English**/**Docs** に移動します。

      ![ページを作成](/help/product-guide/knowledge-base/kb-articles/assets/publishing/create-page-cs.png){width="650" align="left"}

   4. **ホームページ** タイルを選択してから、「**次へ**」を選択します。

      ![&#x200B; ホームタイルを選択 &#x200B;](/help/product-guide/knowledge-base/kb-articles/assets/publishing/home-tile-cs.png){width="650" align="left"}

   5. ページの **タイトル** と **名前** を入力します。
   6. 「**作成**」を選択します。

>[!NOTE]
>
> 実稼動環境にデプロイする前に、すべての設定が実稼動以外の環境でテストされていることを確認します。 <br><br> 詳しくは、公式の [AEM as a Cloud Serviceへのデプロイ ドキュメント &#x200B;](https://experienceleague.adobe.com/ja/docs/experience-manager-cloud-service/content/implementing/deploying/overview) を参照してください。
