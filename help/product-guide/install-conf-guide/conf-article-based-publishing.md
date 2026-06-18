---
title: 記事ベースの公開用パッケージのインストール
description: 記事ベースの公開用パッケージのインストール方法について説明します
feature: Web Editor Configuration
role: Admin
level: Experienced
exl-id: 24e47af6-8d81-4994-8d97-474f5029392b
source-git-commit: cc73b81787a3c3dbe8390d93e558064327e59965
workflow-type: tm+mt
source-wordcount: '459'
ht-degree: 3%

---

# 記事ベースの公開用パッケージのインストール {#id21BNL02052Z}

AEM Guidesは、エディターと統合された強力な記事ベースの公開機能を提供します。 この機能を使用すると、1つ以上のトピックを同時に公開できます。 マップエディターでマップを開いたら、「出力」タブに移動してプリセットを作成し、1つ以上のトピックを選択して出力を生成できます。 記事ベースの公開機能を使用すると、1つ以上のトピックの出力を段階的に生成したり、記事ごとにコンテンツをナレッジベースプラットフォームに公開したりできます。 詳しくは、ユーザーガイドの「*エディターからの記事ベースの公開」セクション*&#x200B;を参照してください。

次のタブでは、Experience Manager Guidesの設定に基づいて、記事ベースの出力を公開するためのAEM サイトを作成する手順を示します。Cloud Serviceまたはオンプレミス。

>[!BEGINTABS]

>[!TAB Cloud Service]

1. [XML Documentation ソフトウェア配布ポータル &#x200B;](https://experience.adobe.com/#/downloads/content/software-distribution/jp/general.html)から&#x200B;**Cloud Service コンポーネントコンテンツパッケージ for Adobe**&#x200B;をダウンロードします。
1. AEM Package Managerを開きます。 パッケージマネージャーにアクセスするためのデフォルト URLは`https://<hostname>/crx/packmgr/index.jsp`です
1. Cloud Service用XML Documentation コンポーネントコンテンツパッケージをアップロードし、インストールします。
1. [Adobe Software Distribution Portal](https://experience.adobe.com/#/downloads/content/software-distribution/jp/general.html)から`Knowledge-base-template-for-article-based-publishing-for-cloud-service.zip` ファイルをダウンロードします。
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


AEM サイトを使用して、エディターの出力プリセットを使用して記事を公開できます。

>[!TAB  オンプレミス ]

記事ベースの公開を有効にするには、Adobe ソフトウェア配布ポータルから次のパッケージをダウンロードしてインストールします。 それらをインストールしてTragopan サイトを作成します。 \（Tragopan サイトは、カテゴリ、セクション、記事ページのテンプレートを含むサンプル ナレッジベース AEM サイトです。\） エディターの出力プリセットを使用してAEM サイト出力を生成するようにTragopan サイトを更新します。

- 記事ベースの公開用ナレッジベーステンプレート
- 記事ベースの公開用のコンポーネントパッケージ

>[!ENDTABS]


**親トピック：**&#x200B;[&#x200B; エディターのカスタマイズ &#x200B;](customize-overview.md)
