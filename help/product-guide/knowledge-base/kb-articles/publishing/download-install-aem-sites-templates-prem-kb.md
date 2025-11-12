---
title: オンプレミスサービス用のAEM Sites テンプレートをダウンロードしてインストールする
description: オンプレミスのサービスでのAEM Sites テンプレートのダウンロードおよびインストール方法について説明します
feature: Installation
role: Admin
level: Experienced
exl-id: aa843a72-ff0d-4c9a-a87d-48d099087b5e
source-git-commit: 4c564a0ffaa8f287bcaf012634d49dbf1e0682b4
workflow-type: tm+mt
source-wordcount: '440'
ht-degree: 0%

---

# AEM Sites テンプレートのダウンロードとインストール（オンプレミスサービス）

このガイドでは、AEM Sitesを生成するための最新のAEM Guides テンプレートをセットアップおよび設定する手順を説明します。 次の手順に従って、必要なパッケージをインストールし、プリセットを作成および設定して、AEM Sitesを生成します。

## 前提条件

設定を進める前に、次の前提条件が満たされていることを確認します。

- **Adobe Experience Manager（AEM）:**&#x200B;**サービスパック** 21、20、19 および **AEM 4.6.0&rbrace; 以降がインストールされた** 2&rbrace;AEM Guides 6.5 **の実行中のインスタンス。**

- **必要な権限**：次の権限があることを確認します。

   - **ソフトウェア配布ポータル** にアクセスして、必要なパッケージをダウンロードします
   - AEMにパッケージをインストールするには、**CRX パッケージマネージャー** にアクセスします。
   - AEM Guidesでプリセットを作成および変更する権限。

- **パッケージをダウンロード**:**ソフトウェア配布ポータル** から次のパッケージをダウンロードします。

   - コンポーネントパッケージ：on-prem-guides-components.all-1.x.0.zip
   - Sites パッケージ：aemg-docs.all-1.x.0.zip

## CRX パッケージマネージャーを使用したパッケージインストール

1. **コンポーネントパッケージをインストールします。**
   1. [**CRX パッケージマネージャー**](http://&lt;your-aem-instance>/crx/packmgr) に移動します。
   2. on-prem-guides-components.all-1.x.0.zip パッケージをアップロードしてインストールします。

2. **Sites パッケージのインストール：** CRX パッケージマネージャーを使用して、aemg-docs.all-1.x.0.zip パッケージをアップロードしてインストールします。


## AEM サイトプリセットを作成して設定する

1. **新しいプリセットを作成する：**
   1. AEM Guidesで DITA マップを開き、**出力** パネルに移動します。
   2. **プリセットを作成** を選択します。
   3. タイプを **AEM Sites** として選択します。
   4. プリセットの名前を入力します。
   5. 「**従来のコンポーネントマッピングを使用**」設定をオフにします。
   6. 「**追加**」を選択して、プリセットを作成します。

      ![&#x200B; 新しい出力プリセットダイアログ &#x200B;](/help/product-guide/knowledge-base/kb-articles/assets/publishing/new-output-preset.png){width="350" align="left"}


2. **AEM サイトプリセットを設定する：** 標準提供（OOTB）サイトを設定するには、次の 2 つのオプションがあります。

   **オプション 1：サイトのドロップダウンを使用する**

   1. **AEMG ドキュメント** として **サイト** を選択します。
   2. **公開パス** と **トピックページテンプレート** が自動的に次のように設定されていることを確認します。
      - 公開パス：`aemg-docs/en/docs/product1`
      - トピックページテンプレート：トピックページ。

      ![&#x200B; サイトドロップダウンを使用 &#x200B;](/help/product-guide/knowledge-base/kb-articles/assets/publishing/use-site-dropdown.png){width="350" align="left"}

   **オプション 2：サイトパスの使用**

   1. 必要に応じて **サイトパス** を手動で設定 `/content/aemg-docs/en/docs/product1` ます。
   2. **トピック ページ テンプレート** が自動的にトピック ページに設定されていることを確認します。

      ![&#x200B; サイトパスを使用 &#x200B;](/help/product-guide/knowledge-base/kb-articles/assets/publishing/use-site-path.png){width="350" align="left"}

3. **プリセットを保存：** プリセットに加えた変更を保存します。

## AEM Sitesを生成

1. **サイトの生成：**
   1. プリセットが設定されたので、対応する DITA マップのAEM サイトを生成できるようになりました。
   2. 生成されたサイトは、次のパスで使用できます。`/content/aemg-docs/en/docs/product1`
2. **デフォルトの生成パスを変更（オプション）:** サイト生成のデフォルトパスを変更する場合は、次の手順を実行します。

   1. **AEM Sites** に移動します。
   2. OOTB サイト構造の下に新しい製品ページを作成します。
   3. **AEMG Docs**/**English**/**Docs** に移動します。

      ![AEM サイト構造でページを作成 &#x200B;](/help/product-guide/knowledge-base/kb-articles/assets/publishing/create-new-page.png){width="350" align="left"}

   4. **ホームページ** タイルを選択してから、「**次へ**」を選択します。

      ![&#x200B; ホームページタイルを選択 &#x200B;](/help/product-guide/knowledge-base/kb-articles/assets/publishing/home-page-tile.png){width="350" align="left"}

   5. ページの **タイトル** と **名前** を入力します。
   6. 「**作成**」を選択します。
