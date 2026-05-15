---
title: 記事ベースの公開用パッケージのインストール
description: 記事ベースの公開用パッケージのインストール方法について説明します
exl-id: d83fc1a9-0822-47f0-8099-22a74b9ced2a
feature: Web Editor Configuration
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/ZX3-rirhXTcufDkFQOF12vj3uh28gSfIpxFwlOQF-Yk
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
  - id: afb45297-4313-4f67-818e-bc0b03abe086
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2:
  - id: b0521e56-a0b2-40b6-bf47-ebc98751f9ba
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 374
ht-degree: 4%

---

# 記事ベースの公開用パッケージのインストール {#id21BNL02052Z}

AEM Guidesは、Web エディターと統合された強力な記事ベースの公開機能を提供します。 この機能を使用すると、1つ以上のトピックを同時に公開できます。 マップエディターでマップを開いたら、「出力」タブに移動してプリセットを作成し、1つ以上のトピックを選択して出力を生成できます。 記事ベースの公開機能を使用すると、1つ以上のトピックの出力を段階的に生成したり、記事ごとにコンテンツをナレッジベースプラットフォームに公開したりできます。 詳しくは、ユーザーガイドの「*Web エディターからの記事ベースの公開」セクション*&#x200B;を参照してください。

記事ベースの出力を公開するAEM サイトを作成するには、次の手順を実行します。

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


AEM サイトを使用して、Web エディターの出力プリセットを使用して記事を公開できます。

**親トピック：**&#x200B;[&#x200B; Web エディターのカスタマイズ &#x200B;](conf-web-editor.md)
