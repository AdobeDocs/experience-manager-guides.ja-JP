---
title: はじめに
description: AEM Guidesの API リファレンスガイドの概要
exl-id: d8ee9cf7-1d67-4b4a-aa80-64e893a99463
feature: API Introduction
role: Developer
level: Experienced
source-git-commit: 00a926e82f7d848e0c8041de758f20e79758b01b
workflow-type: tm+mt
source-wordcount: '760'
ht-degree: 0%

---

# はじめに {#id1761C0007W7}

Adobe Experience Manager Guides \（後で *AEM Guides*\）は、Adobe Experience Manager \（AEM\）で DITA ベースのコンテンツの作成と配信のためのコンポーネントコンテンツ管理ソリューション \（CCMS\）機能を実現するエンドツーエンドのエンタープライズソリューションです。 お客様は、AEM Guides API を使用してプログラムでAEM Guides ワークフローにアクセスし、他のエンタープライズアプリケーションと統合できます。 また、これらの API は、Adobe パートナーが、機能を拡張したり、他のアプリケーションやサービスと統合したりすることで、AEM Guidesの価値提案を強化するためにも使用できます。

## AEM Guidesの API

AEM Guides API には、HTTP と Java の 2 つの形式があります。 これらの API は、AEM Guidesの主要な機能をアプリケーション開発者に公開します。 これらの関数を使用すると、開発者は独自のプラグインを作成して、標準のワークフローを拡張できます。 この API は、DITA コンテンツの出力の管理、DITA マップの操作、フォルダーレベルのプロファイルへの条件属性の追加、HTML文書と Words 文書の DITA フォーマットへの変換などに使用できます。

## ローカルの Apache Maven リポジトリへの JAR のインストール {#install-jar-local}

AEM Guidesで公開された JAR ファイルを使用するには、ローカルの Apache Maven リポジトリにそれらをインストールする必要があります。 次の手順を実行して、JAR を Maven リポジトリの場所にインストールします。

1. ローカルシステムにAEM Guides パッケージ \（.zip\） ファイルの内容を解凍します。

2. コマンドプロンプトで、抽出されたコンテンツパスの次のフォルダーに移動します。

   ```
   \jcr_root\libs\fmdita\osgi-bundles\install
   ```

3. 次のコマンドを実行して、API バンドルをローカル Maven リポジトリにインストールします。

   ```
   mvn install:install-file -Dfile=api-X.x.jar -DgroupId=com.adobe.fmdita -DartifactId=api -Dversion=X.x -Dpackaging=jar**
   ```

   >[!NOTE]
   >
   > 上記のコマンドで、X.x を Dfile および Dversion パラメータの実際のバージョン番号に置き換える必要があります。

4. \（*オプション*\） ローカルの Maven プロジェクトのリポジトリに依存関係をインストールします。 これを行うには、Maven プロジェクトにフォルダーを作成し、前の手順で指定した `mvn install` コマンドを次の追加パラメーターで実行します。

   ```
   -DlocalRepositoryPath=<path_to_project_repository>
   ```

   次に、プロジェクトのローカルリポジトリフォルダーを Maven ビルドプロセスに公開するには、以下に示すように、親 pom.xml ファイルに `repository` 要素を追加します。

   ```XML
   <repositories>
      <repository>
         <id>project-repository</id>
         <url>file://${project.basedir}/repository</url>
      </repository>
   </repositories>
   ```


このプロセスにより、API JAR がローカルの Maven リポジトリにインストールされます。

## Maven プロジェクトでのサービス API JAR の使用

API JAR をローカル Maven リポジトリにインストールした後、次の手順を実行してプロジェクトで JAR を使用します。

1. JAR をコードベースに追加し、「dependencies」などのフォルダーの下にあるコードベースリポジトリにコミットします。 フォルダー名は、コードベース階層に応じて異なります。

2. プロジェクトの pom.xml ファイルを次のように設定します。

   親プロジェクトの pom.xml ファイル :

   >[!IMPORTANT]
   >
   > 次のコードスニペットでは、X.x を実際のバージョン番号と API JAR のファイル名に置き換える必要があります。 この情報は、[ インストールプロセス ](#install-jar-local) の手順 3 で示した情報と同じです。

   ```XML
   <plugin>
   
       <groupId>org.apache.maven.plugins</groupId>
   
      <artifactId>maven-install-plugin</artifactId>
   
       <version>2.5.2</version>
   
       <configuration>
   
               <groupId>com.adobe.fmdita</groupId>
   
               <artifactId>api</artifactId>
   
               <version>X.x</version>
   
               <file>${basedir}/dependencies/fmdita/api-X.x.jar</file>
   
               <packaging>jar</packaging>
   
               <generatePom>true</generatePom>
   
       </configuration>
   
       <executions>
   
           <execution>
   
               <id>inst_fmdita</id>
   
                   <goals>
   
                       <goal>install-file</goal>
   
                   </goals>
   
                   <phase>clean</phase>
   
           </execution>
   
       </executions>
   </plugin>
   ```

   子モジュールの pom.xml ファイル：

   ```XML
   <plugin>
      <groupId>org.apache.maven.plugins</groupId>
   
      <artifactId>maven-install-plugin</artifactId>
   
      <configuration>
   
         <groupId>com.adobe.fmdita</groupId>
   
         <artifactId>api</artifactId>
   
         <version>3.6</version>
   
         <file>${basedir}/../dependencies/fmdita/api-3.6.jar</file>
   
         <packaging>jar</packaging>
   
         <generatePom>true</generatePom>
   
      </configuration>
   
      <executions>
   
         <execution>
   
            <id>inst_fmdita</id>
   
            <goals>
   
               <goal>install-file</goal>
   
            </goals>
   
            <phase>clean</phase>
   
         </execution>
   
      </executions>
   
   </plugin>
   ```


## 公開 Maven リポジトリからのサービス API JAR の設定と使用

次の手順を実行して、プロジェクトで公開 Maven リポジトリーのサービス API JAR を設定し、使用します。

1. サービス API JAR をプロジェクトで使用するには、pom.xml ファイルでAEM Guidesの公開 Maven リポジトリーを設定します。
2. Maven の settings.xml ファイルで、次のように公開 Maven リポジトリを設定します。

   ```XML
   <repository>
      <id>fmdita-public</id>
      <name>fmdita-public</name>
      <url>https://repo.aem-guides.com/repository/fmdita-public</url>
   </repository>
   ```

3. リポジトリを設定したら、サービス API JAR をプロジェクトの依存関係としてプロジェクトの pom.xml ファイルに追加します。

   >[!NOTE]
   >
   > サーバーにインストールしたAEM Guides パッケージと同じバージョンの API JAR を使用します。

4. Maven 依存関係を次のように設定します。

   ```XML
   <dependency>
      <groupId>com.adobe.fmdita</groupId>
      <artifactId>api</artifactId>
      <version>4.0</version>
   </dependency>
   ```


サービス API JAR をプロジェクトの pom.xml ファイルにプロジェクトの依存関係として追加すると、プロジェクトでAEM Guides Java API を構築して使用できるようになります。

## AEM Guides as a Cloud Serviceの Maven 中央リポジトリからの API JAR の使用

AEM Guides as a Cloud Serviceの場合、API JAR は Maven Central にデプロイされています。 API JAR は設定なしで使用できます。

>[!NOTE]
>
> API jar の命名規則が、クラウドアドオンの命名規則に従って更新されました。

API JAR を使用するには、次に示すように、依存関係をプロジェクトの pom.xml に追加する必要があります。

```XML
<dependency>
   <groupId>com.adobe.aem</groupId>
   <artifactId>aem-dox-sdk-api</artifactId>
   <version>${RELEASE}</version>
</dependency>
```

>[!NOTE]
>
> API JAR 内のパッケージはまだ同じなので、既存のクラウドプロジェクトでこの API JAR を使用するためにコードを変更する必要はありません。

### Java ベースの API

Experience Manager Guidesで使用可能な Java ベースの API を使用して、カスタムプラグインを作成し、標準のワークフローを拡張できます。 Java ベースの API の使用に関する最新および詳細なドキュメントについては、[![javadoc](https://javadoc.io/badge2/com.adobe.aem/aem-guides-sdk-api/javadoc.svg)](https://javadoc.io/doc/com.adobe.aem/aem-guides-sdk-api) を参照してください。



## その他のリソース

次に、AEM Guidesに関するその他の役立つリソースのリストを示します。これらのリソースは、[ ラーニングとサポート ](https://helpx.adobe.com/jp/support/xml-documentation-for-experience-manager.html) ページで利用できます。

- ユーザーガイド
- インストールおよび設定ガイド
- クイックスタートガイド
- [ ヘルプのアーカイブページ ](https://helpx.adobe.com/jp/xml-documentation-for-experience-manager/archive.html) \（以前のリリースドキュメントにアクセス\）
