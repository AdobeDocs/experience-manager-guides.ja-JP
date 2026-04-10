---
title: 記事ベースの公開用パッケージのインストール
description: 記事ベースの公開用パッケージのインストール方法について説明します
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '433'
ht-degree: 0%

---

# 記事ベースの公開用パッケージのインストール {#id21BNL02052Z}

AEM Guidesは、Web エディターと統合された強力な記事ベースの公開機能を提供します。 この機能を使用すると、1つ以上のトピックを同時に公開できます。 マップエディターでマップを開いたら、「出力」タブに移動してプリセットを作成し、1つ以上のトピックを選択して出力を生成できます。 記事ベースの公開機能を使用すると、1つ以上のトピックの出力を段階的に生成したり、記事ごとにコンテンツをナレッジベースプラットフォームに公開したりできます。 詳しくは、ユーザーガイドの「*Web エディターからの記事ベースの公開」セクション*&#x200B;を参照してください。

次のタブでは、Experience Manager Guidesの設定に基づいて、記事ベースの出力を公開するためのAEM サイトを作成する手順を示します。Cloud Serviceまたはオンプレミス。

>[!BEGINTABS]

>[!TAB Cloud Service]

1. **XML Documentation ソフトウェア配布ポータル**&#x200B;から[Cloud Service コンポーネントコンテンツパッケージ for Adobe](https://experience.adobe.com/#/downloads/content/software-distribution/jp/general.html)をダウンロードします。
1. AEM Package Managerを開きます。 パッケージマネージャーにアクセスするためのデフォルト URLは`https://<hostname>/crx/packmgr/index.jsp`です
1. Cloud Service用XML Documentation コンポーネントコンテンツパッケージをアップロードし、インストールします。
1. `Knowledge-base-template-for-article-based-publishing-for-cloud-service.zip`Adobe Software Distribution Portal[から](https://experience.adobe.com/#/downloads/content/software-distribution/jp/general.html) ファイルをダウンロードします。
1. グローバルナビゲーションから、**Sites**&#x200B;を選択します。
1. サイト UIの右上隅にある「**作成**」ボタンをクリックします。
1. 「**作成**」ドロップダウンから「**テンプレートからサイト**」を選択します。
1. 「**読み込み**」ボタンをクリックし、システムでダウンロードした`Knowledge-base-template-for-article-based-publishing-for-cloud-service.zip`を選択します。 サイトテンプレートを読み込むと、下部に表示されます。

   >[!NOTE]
   >
   > ZIP ファイルを初めて読み込む必要があります。 読み込むと、サイトテンプレートがリストに表示されます。

   記事ベースの公開用&#x200B;**ナレッジベーステンプレート**&#x200B;を選択してAEM サイトを作成し、右上隅の&#x200B;**次へ**&#x200B;をクリックします。

1. **サイトのタイトル**&#x200B;と&#x200B;**サイト名**&#x200B;を入力し、右上隅の&#x200B;**作成**&#x200B;をクリックします。 AEM サイトは、Tragopan サイトテンプレートを使用して作成されます。 \（Tragopan サイトは、カテゴリ、セクション、記事ページのテンプレートを含むサンプル ナレッジベース AEM サイトです。\）

   >[!NOTE]
   >
   > 同じテンプレートを使用して、複数のAEM サイトを作成できます。


AEM サイトを使用して、Web エディターの出力プリセットを使用して記事を公開できます。

>[!TAB  オンプレミス ]

記事ベースの公開を有効にするには、Adobe ソフトウェア配布ポータルから次のパッケージをダウンロードしてインストールします。 それらをインストールしてTragopan サイトを作成します。 \（Tragopan サイトは、カテゴリ、セクション、記事ページのテンプレートを含むサンプル ナレッジベース AEM サイトです。\） Web Editorの出力プリセットを使用してAEM サイト出力を生成するようにTragopan サイトを更新します。

- 記事ベースの公開用ナレッジベーステンプレート
- 記事ベースの公開用のコンポーネントパッケージ

>[!ENDTABS]


**親トピック：**[ Web エディターのカスタマイズ ](customize-overview.md)
