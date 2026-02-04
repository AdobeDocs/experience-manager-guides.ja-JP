---
title: ツールを使用したデータソースコネクタの設定
description: ツールを使用してデータソースコネクタを設定する方法を説明します。
exl-id: d7cd412b-89ea-43a5-97b3-09944863bbee
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: c790d5edd1ab799564aebfa96f4a41288c977a6c
workflow-type: tm+mt
source-wordcount: '883'
ht-degree: 0%

---

# ユーザーインターフェイスからのデータソースコネクタの設定

Experience Manager Guidesには、データソース用の標準のコネクタを設定するのに役立つ **データソース** ツールが付属しています。 JIRA、SQL （MySQL、PostgreSQL、Microsoft SQL Server、SQLite、MariaDB、H2DB）、AdobeCommerce、Elasticsearchおよび汎用 REST クライアントコネクタを設定できます。


これらの標準のコネクタに加えて、Experience Manager Guidesには Salsify、Akeneo、およびMicrosoft Azure DevOps Boards （ADO）データソース用のコネクタが用意されています。 これらのオープンソースコネクタは、[Maven Central リポジトリ ](https://central.sonatype.com/search?q=com.adobe.aem.addon.guides) からダウンロードしてインストールできます。 その後、ユーザーはこれらのコネクタを設定できます。
方法について説明します [ オープンソースコネクタをインストールする ](#install-open-source-connector)。



また、ファイルコネクタを使用して JSON データファイルに接続することもできます。 コンピューターから JSON ファイルをアップロードするか、Adobe Experience Manager Assets から参照します。 次に、ジェネレーターを使用してコンテンツスニペットまたはトピックを作成します。

コネクタを設定するには、次の手順を実行します。

1. 上部の **Adobe Experience Manager** リンクを選択し、「ツール」を選択します。
1. ツールのリストから **ガイド** を選択します。
1. **データソース** タイルを選択します。 **データソース** ページが表示されます。 接続されたデータソースを表示できます。

   **リスト表示** または **タイル表示** を切り替えて、接続された様々なデータソースをリストまたはタイルとして表示できます。

   <img src="./assets/data-sources-create-window.png" alt= "データソースページにリストされたデータソース" width="800">

   *データソースコネクタの表示または作成*

1. 「**作成**」をクリックします。
1. コネクタを作成するデータベースを選択します。 例えば、Elasticsearch コネクタです。

   >[!NOTE]
   >
   >すぐに使用できるデータベースがすべて一覧表示されます。

1. 「**次へ**」をクリックします。
1. データベースに応じて、設定と接続の詳細を入力します。

   >[!TIP]
   >
   >* カーソルを合わせる フィールドの近くを <img src="./assets/info-details.svg" alt= "情報アイコン" width="25"> リックすると、フィールドに関する詳細が表示されます。
   >* *を含むフィールドは必須です。 例えば、Elasticsearch コネクタに関して次の詳細を入力できます。

   * **名前**: データソースの名前を入力します。
   * **認証タイプ**：ドロップダウンから認証のタイプを選択します。 例：基本的なユーザー名とパスワードの認証
   * **ユーザー名**：ユーザー名を入力します。
   * **パスワード**：ユーザー名とパスワードを入力します。
   * **URL**:API の URL を追加します。


1. 「**ファクトリテンプレートを除外**」オプションを選択して、ファクトリテンプレートをトピックおよびスニペットの生成に使用しないようにします。 これらのプロパティは、「**コンテンツスニペットジェネレーターを追加**」ダイアログボックスまたは **トピックジェネレーターを追加** ダイアログボックスの **データマッピングテンプレート** ドロップダウンに表示されません。
1. **接続をテスト** を選択します。 **接続をテスト** ボタンは、必要な詳細を追加した後でのみ有効になります。 接続の詳細が正しい場合は、成功メッセージを表示します。 そうしないと、エラーメッセージが表示される場合があります。
1. 上部の「**保存**」を選択して、コネクタを保存します。     すべての詳細を入力して接続に成功したら、有効な **保存** ボタンを表示します。


   コネクタが正常に保存されると、接続されたデータソースがページに表示されます。

**複数のリソースへの接続**

Generic REST Client、Salsify、Akeneo、Microsoft Azure DevOps Boards （ADO）などの一部のコネクタでは、異なる URL に基づいて複数のリソースを追加または使用できます。 次に、それらを接続し、ジェネレーターを使用してコンテンツスニペットやトピックを作成します。

リソースを作成するには、以下の手順を実行します。

1. ![URL リソース ](assets/Add_icon.svg) セクションの **追加アイコン** を選択して、各 URL のリソースを追加します。
1. **リソースを追加** ダイアログボックスですべての詳細を設定します。
1. 「**追加**」をクリックします。
1. URL リソースリストで、リソースの編集 ![ 編集アイコン ](assets/edit_pencil_icon.svg) または削除 ![ 削除 ](assets/Delete_icon.svg) を行うことができます。
1. また、Salsify、Akeneo、Microsoft ADO などのデータ ソースで使用できる既定のリソースを使用することもできます。 データソースに設定しないリソースのオプションをオフに切り替えます。

これにより、単一のコンテンツスニペットまたはトピック内の特定のデータソースについて、任意のリソースからデータをすばやく取得できます。



## オープンソースコネクタのインストール{#install-open-source-connector}

[Maven Central リポジトリ ](https://central.sonatype.com/search?q=com.adobe.aem.addon.guides) に存在する依存関係を Cloud Services に公開するには、オープンソースコネクタの依存関係を含めて埋め込む必要があります。

1. Cloud Manager Git プロジェクトコードの `all/pom.xml` に依存関係を追加します。 例えば、Microsoft Azure DevOps Boards データソースコネクタに次の依存関係を追加できます。


   ```
   <dependency>
       <groupId>com.adobe.aem.addon.guides</groupId>
       <artifactId>konnect-azure-devops</artifactId>
       <version>1.0.0</version>
       <type>jar</type>
   </dependency> 
   ```

1. 追加した依存関係を埋め込みます。

   ```
   <embedded>
       <groupId>com.adobe.aem.addon.guides</groupId>
       <artifactId>konnect-azure-devops</artifactId>
       <type>jar</type>
       <target>/apps/aemdoxonaemcsstageprogram-vendor-packages/content/install</target>
   </embedded> 
   ```

1. パイプラインを実行して、Cloud Services に変更を適用します。
コネクタは環境にインストールされています。


## コネクタで使用できる機能

* **リスト表示** または **タイル表示** を切り替えて、接続された様々なデータソースをリストまたはタイルとして表示します。
* 単一のコネクタのチェックボックスを選択します。 **すべてを選択** をクリックして、すべてのコネクタを選択します。 すべてのコネクタを選択したら、「**すべて選択解除**」をクリックできます。

<img src="./assets/data-sources-features.png" alt= "「データソース」ページのデータソースの機能" width="800">

*データソースコネクタの編集、再接続、複製、削除*

**データソース** ページのコネクタでは、次の機能を使用できます。

* **編集**：選択したコネクタの設定の詳細を編集します。

* **再接続**：切断されたコネクタに再接続します。

* **複製**：現在のコネクタをベースとして使用して、新しい重複コネクタを作成します。 重複コネクタは、デフォルトでサフィックス（connectorname_1 など）が付いて作成されます。 例えば、sample-elastic-search_1 と指定します。
同じ名前のコネクタが存在する場合は、エラーが表示されます。

* **削除**：選択したコネクタを削除します。


データソースを設定すると、コネクタが Web エディターの **データソース** パネルの下に表示されます。 その後、データソースに接続し、トピックにコンテンツスニペットを挿入できます。 詳しくは、[ データソースからコンテンツスニペットを挿入する ](../user-guide/web-editor-content-snippet.md) を参照してください。

