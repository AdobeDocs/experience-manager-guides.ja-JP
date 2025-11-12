---
title: はじめに
description: AEM Guidesの API リファレンスガイドの概要
exl-id: d8ee9cf7-1d67-4b4a-aa80-64e893a99463
feature: API Introduction
role: Developer
level: Experienced
source-git-commit: 67e844faece8b6bb8988bb0e67f357cda1db9a4d
workflow-type: tm+mt
source-wordcount: '623'
ht-degree: 0%

---

# はじめに {#id1761C0007W7}

Adobe Experience Manager Guides \（後で *AEM Guides*\）は、Adobe Experience Manager \（AEM\）で DITA ベースのコンテンツの作成と配信のためのコンポーネントコンテンツ管理ソリューション \（CCMS\）機能を実現するエンドツーエンドのエンタープライズソリューションです。 お客様は、AEM Guides API を使用してプログラムでAEM Guides ワークフローにアクセスし、他のエンタープライズアプリケーションと統合できます。 また、これらの API は、Adobe パートナーが、機能を拡張したり、他のアプリケーションやサービスと統合したりすることで、AEM Guidesの価値提案を強化するためにも使用できます。

## AEM Guidesの API

AEM Guides API は次の 2 つの形式で使用できます。

- [Java ベースの API](#java-based-apis)
- [REST ベースの API](#rest-based-apis)

これらの API は、AEM Guidesの主要な機能をアプリケーション開発者に公開します。 これらの関数を使用すると、開発者は独自のプラグインを作成して、標準のワークフローを拡張できます。 この API は、DITA コンテンツの出力の管理、DITA マップの操作、フォルダーレベルのプロファイルへの条件属性の追加、HTML文書と Words 文書の DITA フォーマットへの変換などに使用できます。


### Java ベースの API

Experience Manager Guidesで使用可能な Java ベースの API を使用して、カスタムプラグインを作成し、標準のワークフローを拡張できます。

**AEM Guides as a Cloud Service用のSDKを Maven 中央リポジトリから設定する**

>[!INFO]
>
>Experience Manager Guides as a Cloud Service用 Java ベース API の使用に関する最新および詳細なドキュメントについては、[![javadoc](https://javadoc.io/badge2/com.adobe.aem/aem-dox-sdk-api/javadoc.svg)](https://javadoc.io/doc/com.adobe.aem/aem-dox-sdk-api/latest/index.html) を参照してください。

Maven リポジトリのサービス API JAR をプロジェクトで設定して使用するには、以下に示すように、API SDKをプロジェクトの `pom.xml` ファイルにプロジェクトの依存関係として追加します。

    ```XML
    &lt;dependency>
    &lt;groupId>com.adobe.aem&lt;/groupId>
    &lt;artifactId>aem-dox-sdk-api&lt;/artifactId>
    &lt;version>${RELEASE}&lt;/version>
    &lt;/dependency>
    
    ```

>[!NOTE]
>
> サーバーにインストールされているAEM Guides パッケージと同じバージョンの API JAR を使用していることを確認してください。

**Maven 中央リポジトリ（オンプレミス）からの API JAR の設定と使用**

>[!INFO]
>
>Experience Manager Guides オンプレミス設定用の Java ベース API の使用に関する最新および詳細なドキュメントについては、[![javadoc](https://javadoc.io/badge2/com.adobe.aem/aem-guides-sdk-api/javadoc.svg)](https://javadoc.io/doc/com.adobe.aem/aem-guides-sdk-api/latest/index.html) を参照してください。

オンプレミスデプロイメントにサービス API JAR を設定して使用するには、次に示すように、サービス API JAR をプロジェクトの `pom.xml` ファイルにプロジェクトの依存関係として追加します。

    ```XML
    &lt;dependency>
    &lt;groupId>com.adobe.aem&lt;/groupId>
    &lt;artifactId>aem-guides-sdk-api&lt;/artifactId>
    &lt;version>${RELEASE}&lt;/version>
    &lt;/dependency>
    
    ```

>[!NOTE]
>
> サーバーにインストールされているAEM Guides パッケージと同じバージョンの API JAR を使用していることを確認してください。


**AEM Guidesの公開 Maven リポジトリ（オンプレミス）から API JAR を設定して使用する**

>[!NOTE]
>
> AEM Guidesの公開 Maven リポジトリーは、Experience Manager Guides 5.3.0 リリースの後で非推奨になります。 API JAR は、それ以降は Maven 中央リポジトリでのみ使用できます。

公開 Maven リポジトリのサービス API JAR を使用するには、次の手順を実行します。

1. 次に示すように、`pom.xml` または `settings.xml` ファイルにAEM Guidesの公開 Maven リポジトリーを設定します。

   ```XML
   <repository>
       <id>fmdita-public</id>
       <name>fmdita-public</name>
       <url>https://repo.aem-guides.com/repository/fmdita-public</url>
    </repository>
   ```

1. リポジトリを設定したら、サービス API JAR をプロジェクトの依存関係としてプロジェクトの `pom.xml` ファイルに追加します。

   ```XML
   <dependency>
       <groupId>com.adobe.fmdita</groupId>
       <artifactId>api</artifactId>
       <version>${RELEASE}</version>
   </dependency>
   ```

   >[!NOTE]
   >
   > サーバーにインストールしたAEM Guides パッケージと同じバージョンの API JAR を使用します。

サービス API JAR がプロジェクトの `pom.xml` ファイルにプロジェクトの依存関係として追加されたら、プロジェクトでAEM Guides Java API を構築して使用できます。


### REST ベースの API

Experience Manager Guidesは、デベロッパーが HTTP 経由でコア機能にアクセスしてやり取りできるようにする、REST ベースの API の包括的なセットを提供します。

これらの API は、次のものに最適です。

- Experience Manager Guidesと他のエンタープライズシステムとの統合
- 公開およびレビューワークフローの自動化
- カスタムアプリケーションと拡張機能の構築

API の使用方法、パラメーター、リクエスト例について詳しくは、Experience Manager Guides ドキュメントの **API リファレンス** の節で関連するトピックを参照してください。

## その他のリソース

次に、AEM Guidesに関するその他の役立つリソースのリストを示します。これらのリソースは、[ ラーニングとサポート ](https://helpx.adobe.com/support/xml-documentation-for-experience-manager.html) ページで利用できます。

- ユーザーガイド
- インストールおよび設定ガイド
- クイックスタートガイド
- [ ヘルプのアーカイブページ ](https://helpx.adobe.com/xml-documentation-for-experience-manager/archive.html) \（以前のリリースドキュメントにアクセス\）
