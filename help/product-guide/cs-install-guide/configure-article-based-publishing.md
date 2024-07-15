---
title: 記事ベースの公開用パッケージのインストール
description: 記事ベースの公開用パッケージのインストール方法を学ぶ
exl-id: d83fc1a9-0822-47f0-8099-22a74b9ced2a
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '348'
ht-degree: 0%

---

# 記事ベースの公開用パッケージのインストール {#id21BNL02052Z}

AEM Guidesは、Web エディターと統合された、記事ベースの強力な公開機能を提供します。 この機能を使用すると、1 つ以上のトピックを同時に公開できます。 マップエディターでマップを開いたら、「出力」タブに移動してプリセットを作成し、出力を生成する 1 つ以上のトピックを選択します。 記事ベースの公開機能を使用すると、1 つ以上のトピックの出力を増分的に生成したり、記事ごとにナレッジベースプラットフォームにコンテンツを公開したりできます。 詳細については、『ユーザガイド』の *Web エディタからの記事ベースの公開* を参照してください。

記事ベースの出力を公開するためのAEM サイトを作成するには、次の手順を実行します。

1. **Cloud Service用のXML Documentation コンポーネント コンテンツパッケージを** 2}Adobeソフトウェア配布ポータル ](https://experience.adobe.com/#/downloads/content/software-distribution/jp/general.html) からダウンロードします。[
1. AEM パッケージマネージャーを開きます。 パッケージマネージャーにアクセスするデフォルトの URL は `https://<hostname>/crx/packmgr/index.jsp` です。
1. Cloud Service用のXML Documentation コンポーネントコンテンツパッケージをアップロードしてからインストールします。
1. `Knowledge-base-template-for-article-based-publishing-for-cloud-service.zip` ファイルを [Adobe ソフトウェア配布ポータル ](https://experience.adobe.com/#/downloads/content/software-distribution/jp/general.html) からダウンロードします。
1. グローバルナビゲーションから「**サイト**」を選択します。
1. Sites UI 内で、右上隅の **作成** ボタンをクリックします。
1. **作成** ドロップダウンから **テンプレートのサイト** を選択します。
1. 「**インポート**」ボタンをクリックし、システムにダウンロードした `Knowledge-base-template-for-article-based-publishing-for-cloud-service.zip` を選択します。 サイトテンプレートが読み込まれると、下部に表示されます。

   >[!NOTE]
   >
   > ZIP ファイルは初回のみ読み込む必要があります。 インポートすると、リストでサイトテンプレートを使用できるようになります。

   **記事ベースの公開用のナレッジベーステンプレート** を選択してAEM サイトを作成し、右上隅にある **次へ** をクリックします。

1. **サイトのタイトル** と **サイト名** を入力し、右上隅の **作成** をクリックします。 AEM サイトは、Tragopan サイトテンプレートを使用して作成されます。 \（Tragopan のサイトは、カテゴリページ、セクションページ、記事ページ用のテンプレートを含むナレッジベース AEM サイトのサンプルです。\）

   >[!NOTE]
   >
   > 同じテンプレートを使用して複数のAEM サイトを作成できます。


AEM サイトでは、Web エディターの出力プリセットを使用して記事を公開できます。

**親トピック：**[ Web エディタのカスタマイズ ](conf-web-editor.md)
