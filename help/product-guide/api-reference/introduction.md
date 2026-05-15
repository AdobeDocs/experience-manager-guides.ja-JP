---
title: はじめに
description: AEM Guides API リファレンスガイドの概要
exl-id: d8ee9cf7-1d67-4b4a-aa80-64e893a99463
feature: API Introduction
role: Developer
level: Experienced
TQID: https://experienceleague.adobe.com/dNO8nZusaPCor506Q-2drrcJGf68mx-Hxo4uaT-cDtM
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a01bfd36-4ab8-4bf8-9dc0-5b45b890552e
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
  - id: c6d09140-3c91-45d3-b7ed-b681af752f43
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2:
  - id: b1ef4d86-3917-4b76-a0bc-4a4771f9b3b0
  - id: f3645292-50bd-4f4a-ac6a-29dcecdf8abe
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 656
ht-degree: 0%

---

# はじめに {#id1761C0007W7}

Adobe Experience Manager Guides \（後で&#x200B;*AEM Guides*\と呼ばれます）は、Adobe Experience Manager \（AEM\）がDITA ベースのコンテンツの作成と配信に対応するコンポーネントコンテンツ管理ソリューション \（CCMS\）機能を持つことを可能にする、エンドツーエンドのエンタープライズソリューションです。 お客様は、AEM Guides APIを使用してAEM Guides ワークフローにプログラムでアクセスし、他のエンタープライズアプリケーションと統合できます。 これらのAPIは、Adobeパートナーが機能を拡張したり、他のアプリケーションやサービスと統合したりすることで、AEM Guidesの価値提案を強化するためにも使用できます。

## AEM GUIDES API

AEM Guides APIには、次の2つの形式があります。

- [Java ベースのAPI](#java-based-apis)
- [REST ベースのAPI](#rest-based-apis)

これらのAPIは、AEM Guidesの主要な機能をアプリケーション開発者に公開します。 これらの機能を使用して、開発者は独自のプラグインを作成し、すぐに使用できるワークフローを拡張できます。 APIは、DITA コンテンツの出力の管理、DITA マップの操作、フォルダーレベルのプロファイルへの条件付き属性の追加、HTMLおよびWords ドキュメントのDITA フォーマットへの変換に関して使用できます。


### Java ベースのAPI

Experience Manager Guidesで利用可能なJava ベースのAPIを使用して、カスタムプラグインを作成し、すぐに利用できるワークフローを拡張できます。

**AEM Guides as a Cloud ServiceのMaven中央リポジトリからSDKを設定**

>[!INFO]
>
>Experience Manager Guides as a Cloud Service用のJava ベース APIの使用に関する最新の詳細なドキュメントについては、[![javadoc](./images/javadoc-cs-icon.svg)](https://javadoc.io/doc/com.adobe.aem/aem-dox-sdk-api/latest/index.html)をご覧ください。

Maven リポジトリのサービス API JARをプロジェクトで設定して使用するには、以下に示すように、API SDKをプロジェクトの`pom.xml` ファイルにプロジェクト依存関係として追加します。

```XML
<dependency>
<groupId>com.adobe.aem</groupId>
<artifactId>aem-dox-sdk-api</artifactId>
<version>${RELEASE}</version>
</dependency>
```

>[!NOTE]
>
> サーバーにインストールされているAEM Guides パッケージと同じバージョンのAPI JARを使用していることを確認してください。

**Maven中央リポジトリ（オンプレミス）からAPI JARを設定して使用する**

>[!INFO]
>
>Experience Manager Guides オンプレミス設定にJava ベースのAPIを使用する方法に関する最新の詳細なドキュメントについては、[![javadoc](https://javadoc.io/badge2/com.adobe.aem/aem-guides-sdk-api/javadoc.svg)](https://javadoc.io/doc/com.adobe.aem/aem-guides-sdk-api/latest/index.html)を参照してください。

オンプレミスのデプロイメント用にサービス API JARを設定して使用するには、次に示すように、サービス API JARをプロジェクトの`pom.xml` ファイルのプロジェクト依存関係として追加します。

```XML
<dependency>
<groupId>com.adobe.aem</groupId>
<artifactId>aem-guides-sdk-api</artifactId>
<version>${RELEASE}</version>
</dependency>
```

>[!NOTE]
>
> サーバーにインストールされているAEM Guides パッケージと同じバージョンのAPI JARを使用していることを確認してください。


**AEM Guidesのパブリック Maven リポジトリ（オンプレミス）からAPI JARを設定して使用する**

>[!NOTE]
>
> 公開されたAEM Guides Maven リポジトリは、Experience Manager Guidesの5.3.0 リリース後に非推奨（廃止予定）になります。 API JARは、それ以降はMaven中央リポジトリでのみ使用できます。

パブリック Maven リポジトリからサービス API JARを使用するには、次の手順を実行します。

1. 次に示すように、`pom.xml`または`settings.xml` ファイルでAEM Guides パブリック Maven リポジトリを設定します。

   ```XML
   <repository>
       <id>fmdita-public</id>
       <name>fmdita-public</name>
       <url>https://repo.aem-guides.com/repository/fmdita-public</url>
    </repository>
   ```

1. リポジトリを設定したら、プロジェクトの`pom.xml` ファイルにプロジェクト依存関係としてサービス API JARを追加します。

   ```XML
   <dependency>
       <groupId>com.adobe.fmdita</groupId>
       <artifactId>api</artifactId>
       <version>${RELEASE}</version>
   </dependency>
   ```

   >[!NOTE]
   >
   > サーバーにインストールしたAEM Guides パッケージと同じバージョンのAPI JARを使用します。

プロジェクトの`pom.xml` ファイルにサービス API JARがプロジェクト依存関係として追加されたら、プロジェクトでAEM Guides Java APIを構築して使用できます。


### REST ベースのAPI

Experience Manager Guidesには、開発者がHTTP経由でコア機能にアクセスして操作できる、包括的なREST ベースのAPI セットが用意されています。

これらのAPIは、次のような場合に最適です。

- Experience Manager Guidesの統合
- 公開ワークフローとレビューワークフローの自動化
- カスタムアプリケーションや拡張機能の構築

APIの使用状況、パラメーター、リクエストの例について詳しくは、Experience Manager Guides ドキュメントの&#x200B;**API リファレンス** セクションの関連トピックを参照してください。

## その他のリソース

以下は、[&#x200B; ラーニングとサポート &#x200B;](https://helpx.adobe.com/support/xml-documentation-for-experience-manager.html) ページで入手できるAEM Guidesのその他の役立つリソースの一覧です。

- ユーザーガイド
- インストールおよび設定ガイド
- クイックスタートガイド
- [&#x200B; ヘルプアーカイブページ &#x200B;](https://helpx.adobe.com/xml-documentation-for-experience-manager/archive.html) \（以前のリリースドキュメントにアクセス\）
