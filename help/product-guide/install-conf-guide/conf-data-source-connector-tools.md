---
title: ツールを使用したデータソースコネクタの設定
description: ツールを使用してデータソースコネクタを設定する方法を説明します。
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 834959a6a0e22cd5d2b2c5d0e57ceb6d45c0c666
workflow-type: tm+mt
source-wordcount: '1204'
ht-degree: 0%

---

# ユーザーインターフェイスからのデータソースコネクタの設定

Experience Manager Guidesには、**データソース** ツールが付属しており、データソース用にすぐに使用できるコネクタを設定できます。 JIRA、SQL （MySQL、PostgreSQL、Microsoft SQL Server、SQLite、MariaDB、H2DB）、Adobe Commerce、Elasticsearch、Generic REST Client コネクタを設定できます。

Cloud Serviceの設定のみでは、これらの標準コネクタに加えて、Experience Manager GuidesはSalsify、Akeneo、Microsoft Azure DevOps Boards （ADO）データソース用のコネクタを提供します。 これらのオープンソースコネクタは、[Maven Central リポジトリ &#x200B;](https://central.sonatype.com/search?q=com.adobe.aem.addon.guides)からダウンロードしてインストールできます。 次に、ユーザーはこれらのコネクタを設定できます。
オープンソースコネクタを[&#x200B; インストールする方法について説明します](#install-open-source-connector)。

ファイルコネクタを使用してJSON データファイルに接続することもできます。 コンピューターからJSON ファイルをアップロードするか、Adobe Experience Manager アセットから参照します。 次に、ジェネレーターを使用してコンテンツスニペットまたはトピックを作成します。

次のタブには、Experience Manager Guidesの設定に基づいてコネクタを設定する手順が示されています。Cloud Serviceまたはオンプレミス。

>[!BEGINTABS]

>[!TAB Cloud Service]

1. 上部の&#x200B;**Adobe Experience Manager** リンクを選択し、「ツール」を選択します。
1. ツールのリストから「**ガイド**」を選択します。
1. 「**データソース**」タイルを選択します。 **データソース** ページが表示されます。 接続されたデータソースを表示できます。

   **リスト表示**&#x200B;または&#x200B;**タイル表示**&#x200B;を切り替えて、様々な接続されたデータソースをリストまたはタイルとして表示できます。

   <img src="./assets/data-sources-create-window.png" alt= "データソースページに表示されるデータソース" width="800">

   *データソースコネクタを表示または作成します。*
1. 「**作成**」をクリックします。
1. コネクタを作成するデータベースを選択します。 例えば、Elasticsearch コネクタがあります。
   >[!NOTE]
   >
   >すぐに利用できるすべてのデータベースが一覧表示されます。

1. 「**次へ**」をクリックします。
1. データベースに従って、設定と接続の詳細を入力します。

   >[!TIP]
   >
   >* カーソルを合わせる フィールドの近くの<img src="./assets/info-details.svg" alt= "情報アイコン" width="25">で、詳細を表示できます。
   > * &#x200B;* フィールドは必須です。 例えば、Elasticsearch コネクタに次の詳細を入力できます。

   * **名前**: データソースの名前を入力します。
   * **認証タイプ**: ドロップダウンから認証タイプを選択します。 例えば、Basic username-password認証のように指定します
   * **ユーザー名**: ユーザー名を入力してください。
   * **パスワード**: ユーザー名とパスワードを入力します。
   * **URL**: API URLを追加します。


1. **ファクトリテンプレートを除外** オプションを選択して、ファクトリテンプレートをトピックおよびスニペットの生成に使用されないようにします。 これらは、**コンテンツスニペットジェネレーター**&#x200B;または&#x200B;**トピックジェネレーター**&#x200B;を追加ダイアログボックスの&#x200B;**データマッピングテンプレート** ドロップダウンには表示されません。


1. **接続をテスト**&#x200B;を選択します。 必要な詳細を追加した後にのみ、**接続をテスト** ボタンを有効にして表示できます。 接続の詳細が正しい場合は、成功メッセージを表示します。 それ以外の場合は、エラーメッセージが表示される可能性があります。



1. 上部の&#x200B;**保存**&#x200B;を選択して、コネクタを保存します。     すべての詳細を入力し、接続が成功した後に有効になっている&#x200B;**保存** ボタンを表示します。


   コネクタが正常に保存された場合は、接続されたデータソースをページ上で表示できます。

**複数のリソースに接続**

Generic REST Client、Salsify、Akeneo、Microsoft Azure DevOps Boards （ADO）などの一部のコネクタでは、異なるURLに基づいて複数のリソースを追加または使用できます。 次に、それらを接続して、生成AIを使用してコンテンツスニペットやトピックを作成します。

リソースを作成するには、次の手順を実行します。

1. ![URL リソースセクション &#x200B;](assets/Add_icon.svg)の&#x200B;**追加アイコン**&#x200B;を選択して、各URLのリソースを追加します。
1. **リソースを追加** ダイアログボックスのすべての詳細を設定します。
1. 「**追加**」をクリックします。
1. ![編集アイコン &#x200B;](assets/edit_pencil_icon.svg)を編集するか、URL リソースリストから![削除](assets/Delete_icon.svg) リソースを削除できます。

1. Salsify、Akeneo、Microsoft ADOなどのデータソースで利用できるデフォルトリソースを使用することもできます。 データソース用に設定しないリソースのオプションをオフに切り替えます。

これにより、単一のコンテンツスニペットまたはトピック内の特定のデータソースの任意のリソースからデータをすばやく取得できます。

**オープンソース コネクタをインストールする{#install-open-source-connector}**

[Maven中央リポジトリ &#x200B;](https://central.sonatype.com/search?q=com.adobe.aem.addon.guides)に存在する依存関係をCloud Servicesに公開するには、オープンソースコネクタの依存関係を含めて埋め込む必要があります。

1. Cloud Manager Git プロジェクトコードに`all/pom.xml`の依存関係を追加します。 例えば、Microsoft Azure DevOps Boards データソースコネクタに次の依存関係を追加できます。


   ```
   <dependency>
       <groupId>com.adobe.aem.addon.guides</groupId>
       <artifactId>konnect-azure-devops</artifactId>
       <version>1.0.0</version>
       <type>jar</type>
   </dependency> 
   ```

1. 追加した依存関係を埋め込みます。

       &quot;&#39;
       &lt;embedded>
       &lt;groupId>com.adobe.aem.addon.guides&lt;/groupId>
       &lt;artifactId>konnect-azure-devops&lt;/artifactId>
       &lt;type>jar&lt;/type>
       &lt;target>/apps/aemdoxonaemcsstageprogram-vendor-packages/content/install&lt;/target>
       &lt;/embedded>
       &quot;&#39;
   
1. パイプラインを実行して、Cloud Servicesの変更を適用します。
コネクタが環境にインストールされます。

>[!TAB  オンプレミス ]

1. 上部の&#x200B;**Adobe Experience Manager** リンクを選択し、「ツール」を選択します。
1. ツールのリストから「**ガイド**」を選択します。
1. 「**データソース**」タイルを選択します。 **データソース** ページが表示されます。 接続されたデータソースを表示できます。

   **リスト表示**&#x200B;または&#x200B;**タイル表示**&#x200B;を切り替えて、様々な接続されたデータソースをリストまたはタイルとして表示できます。

   <img src="./assets/data-sources-create-window.png" alt= "データソースページに表示されるデータソース" width="800">

   *データソースコネクタを表示または作成します。*
1. 「**作成**」をクリックします。
1. コネクタを作成するデータベースを選択します。 例えば、Elasticsearch コネクタがあります。
   >[!NOTE]
   >
   >すぐに利用できるすべてのデータベースが一覧表示されます。

1. 「**次へ**」をクリックします。
1. データベースに従って、設定と接続の詳細を入力します。

   >[!TIP]
   >* カーソルを合わせる フィールドの近くの<img src="./assets/info-details.svg" alt= "情報アイコン" width="25">で、詳細を表示できます。
   > * &#x200B;* フィールドは必須です。 例えば、Elasticsearch コネクタに次の詳細を入力できます。

   * **名前**: データソースの名前を入力します。
   * 認証タイプ：ドロップダウンから認証タイプを選択します。 例えば、Basic username-password認証のように指定します
   * **ユーザー名**: ユーザー名を入力してください。
   * **パスワード**: ユーザー名とパスワードを入力します。
   * **URL**: API URLを追加します。

1. **接続をテスト**&#x200B;を選択します。 必要な詳細を追加した後にのみ、**接続をテスト** ボタンを有効にして表示できます。 接続の詳細が正しい場合は、成功メッセージを表示します。 それ以外の場合は、エラーメッセージが表示される可能性があります。

1. 上部の&#x200B;**保存**&#x200B;を選択して、コネクタを保存します。     すべての詳細を入力し、接続が成功した後に有効になっている&#x200B;**保存** ボタンを表示します。


   コネクタが正常に保存された場合は、接続されたデータソースをページ上で表示できます。

>[!ENDTABS]

## コネクタで使用できる機能

* **リスト表示**&#x200B;または&#x200B;**タイル表示**&#x200B;を切り替えて、様々な接続されたデータソースをリストまたはタイルとして表示します。
* 1つのコネクタのチェックボックスをオンにします。 「**すべてを選択**」をクリックして、すべてのコネクタを選択します。 すべてのコネクタが選択されている場合は、**すべてを選択解除**&#x200B;をクリックできます。

<img src="./assets/data-sources-features.png" alt= "データソースページのデータソースの機能" width="800">

*データソースコネクタを編集、再接続、複製、または削除します。*

**データソース** ページのコネクタには、次の機能を使用できます。

* **編集**：選択したコネクタの設定の詳細を編集します。

* **再接続**：切断されたコネクタに再接続します。

* **重複**：現在のコネクタをベースとして使用して、新しい重複コネクタを作成します。 デフォルトでは、重複したコネクタは接尾辞（connectorname_1など）を付けて作成されます。 例えば、sample-elastic-search_1です。
同じ名前のコネクタが存在する場合は、エラーが表示されます。

* **削除**：選択したコネクタを削除します。


データソースを設定すると、コネクタはWeb エディターの&#x200B;**データソースパネル**&#x200B;の下に表示されます。 次に、データソースに接続し、トピックにコンテンツスニペットを挿入します。 詳細については、[&#x200B; データソースからコンテンツスニペットを挿入](../user-guide/web-editor-content-snippet.md)を参照してください。

オンプレミス設定の場合のみ、カスタムコネクタを作成し、様々なデータソースで使用することもできます。 カスタムコネクタを[設定](https://experienceleague.adobe.com/ja/docs/experience-manager-guides/using/knowledge-base/kb-articles/external-data-source/conf-custom-data-source-connector)する方法について説明します。