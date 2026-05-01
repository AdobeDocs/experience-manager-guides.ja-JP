---
title: オンプレミスサービス用AEM Sites テンプレートのダウンロードとインストール
description: オンプレミス サービス用のAEM Sites テンプレートをダウンロードしてインストールする方法について説明します
feature: Installation
role: Admin
level: Experienced
exl-id: aa843a72-ff0d-4c9a-a87d-48d099087b5e
source-git-commit: 12ba7129255257970ddd7a0989149be664ce9803
workflow-type: tm+mt
source-wordcount: '469'
ht-degree: 0%

---

# AEM Sites テンプレートのダウンロードとインストール（オンプレミスサービス）

このガイドでは、AEM Sitesを生成するための最新のAEM Guides テンプレートを設定および設定する手順を説明します。 必要なパッケージのインストール、プリセットの作成と設定、AEM Sitesの生成を行うには、次の手順に従います。

## 前提条件

設定に進む前に、次の前提条件が満たされていることを確認します。

- **Adobe Experience Manager （AEM）:** **サービスパック** 21、20、および19と&#x200B;**AEM 4.6.0**&#x200B;以降のバージョンがインストールされた&#x200B;**AEM Guides 6.5**&#x200B;の実行中のインスタンス。

- **必要な権限**：次の権限を持っていることを確認してください：

   - 必要なパッケージをダウンロードするための&#x200B;**ソフトウェア配布ポータル**&#x200B;へのアクセス
   - AEMにパッケージをインストールするための&#x200B;**CRX Package Manager**&#x200B;へのアクセス。
   - AEM Guidesでプリセットを作成および変更するための権限。

- **パッケージをダウンロード**: **ソフトウェア配布ポータル**&#x200B;から次のパッケージをダウンロードします。

   - コンポーネントパッケージ：on-prem-guides-components.all-1.x.0.zip
   - Sites パッケージ：aemg-docs.all-1.x.0.zip

## CRX Package Managerを使用したパッケージインストール

1. **コンポーネントパッケージをインストールします：**
   1. [**CRX Package Manager**](http://&lt;your-aem-instance>/crx/packmgr)に移動します。
   2. on-prem-guides-components.all-1.x.0.zip パッケージをアップロードしてインストールします。

2. **Sites パッケージをインストール：** CRX Package Managerを使用して、aemg-docs.all-1.x.0.zip パッケージをアップロードしてインストールします。


## AEM サイトプリセットの作成と設定

1. **新しいプリセットを作成：**
   1. AEM GuidesでDITA マップを開き、**出力** パネルに移動します。
   2. 「**プリセットを作成**」を選択します。
   3. 型を&#x200B;**AEM Sites**&#x200B;として選択します。
   4. プリセットの名前を入力します。
   5. **従来のコンポーネントマッピングを使用**&#x200B;設定のチェックを外します。
   6. 「**追加**」を選択して、プリセットを作成します。

      ![新しい出力プリセットダイアログ &#x200B;](/help/product-guide/knowledge-base/kb-articles/assets/publishing/new-output-preset.png){width="350"}


2. **AEM サイト プリセットの設定：**&#x200B;標準（OOTB）サイトを設定するには、次の2つのオプションがあります。

   **オプション 1: サイト ドロップダウンの使用**

   1. **Site**&#x200B;を&#x200B;**AEMG Docs**&#x200B;として選択します。
   2. **公開パス**&#x200B;と&#x200B;**トピックページテンプレート**&#x200B;が自動的に次のように設定されていることを確認します。
      - 公開パス：`aemg-docs/en/docs/product1`
      - トピックページテンプレート：トピックページ。

      ![&#x200B; サイトドロップダウンを使用](/help/product-guide/knowledge-base/kb-articles/assets/publishing/use-site-dropdown.png){width="350"}

   **オプション 2: サイト パスを使用**

   1. **サイトパス**&#x200B;を手動で`/content/aemg-docs/en/docs/product1`として設定します。
   2. **トピックページテンプレート**&#x200B;が自動的にトピックページに設定されていることを確認します。

      ![&#x200B; サイトパスを使用](/help/product-guide/knowledge-base/kb-articles/assets/publishing/use-site-path.png){width="350"}

3. **プリセットを保存：** プリセットに加えた変更を保存します。

## AEM Sitesを生成

1. **サイトを生成：**
   1. プリセットを設定すると、対応するDITA マップのAEM サイトを生成できるようになりました。
   2. 生成されたサイトは、次のパスで利用できます：`/content/aemg-docs/en/docs/product1`。
2. **既定の生成パスの変更（オプション）:** サイト生成用の既定のパスを変更する場合は、次の手順を実行します。

   1. **AEM Sites**&#x200B;に移動します。
   2. OOTB サイト構造の下に新しい製品ページを作成します。
   3. **AEMG Docs** > **English** > **Docs**&#x200B;に移動します。

      ![AEM サイト構造](/help/product-guide/knowledge-base/kb-articles/assets/publishing/create-new-page.png){width="350"}でページを作成

   4. 「**ホームページ**」タイルを選択し、「**次へ**」を選択します。

      ![&#x200B; ホームページ タイルを選択](/help/product-guide/knowledge-base/kb-articles/assets/publishing/home-page-tile.png){width="350"}

   5. ページの&#x200B;**タイトル**&#x200B;と&#x200B;**名前**&#x200B;を入力します。
   6. 「**作成**」を選択します。
