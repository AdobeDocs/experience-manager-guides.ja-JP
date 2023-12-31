---
title: ツールを使用したデータソースコネクタの設定
description: ツールを使用してデータソースコネクタを設定する方法を説明します。
exl-id: 2a0ac0a0-b2a9-453e-851b-fb04c8903526
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '521'
ht-degree: 0%

---

# ユーザーインターフェイスからのデータソースコネクタの設定

Experience Managerガイドには、 **データソース** データソース用の標準コネクタを設定する際に使用するツールです。 JIRA、SQL(MySQL、PostgreSQL、Microsoft SQL Server、SQLite、MariaDB、H2DB)、AdobeCommerce およびElasticsearchの各データベース用のコネクタを設定できます。

コネクタを設定するには、次の手順を実行します。

1. を選択します。 **Adobe Experience Manager** リンクをクリックし、「ツール」を選択します。
1. 選択 **ガイド** を選択します。
1. を選択します。 **データソース** タイル。 The **データソース** ページが表示されます。 接続されたデータソースを表示できます。

   次の項目を切り替えることができます。 **リスト表示** または **タイル表示** 様々な接続済みデータソースをリストまたはタイルとして表示する。

   <img src="./assets/data-sources-create-window.png" alt= "データソースページに表示されるデータソース" width="800">

   *データソースコネクタを表示または作成します。*
1. 「**作成**」をクリックします。
1. コネクタを作成するデータベースを選択します。 例えば、Elasticsearchコネクタ。
   >[!NOTE]
   >
   >すべての使用可能な標準データベースが表示されます。

1. 「**次へ**」をクリックします。
1. データベースに従って、設定と接続の詳細を入力します。

   >[!TIP]
   >* カーソルを合わせる <img src="./assets/info-details.svg" alt= "情報アイコン" width="25"> フィールドの近くで詳細を確認できます。
   > * 「*」を含むフィールドは必須です。 例えば、Elasticsearchコネクタには次の詳細を入力できます。

   * **名前**：データソースの名前を入力します。
   * 認証タイプ：ドロップダウンから認証のタイプを選択します。 例：基本的なユーザー名とパスワードの認証
   * **ユーザー名**：ユーザー名を入力します。
   * **パスワード**：ユーザー名とパスワードを入力します。
   * **URL**:API URL を追加します。

1. 選択 **接続をテスト**. 次の項目を表示すると、 **接続をテスト** ボタンは、必要な詳細を追加した後にのみ有効になります。 接続の詳細が正しい場合は、成功メッセージを表示します。 そうしないと、エラーメッセージが表示される場合があります。



1. 選択 **保存** をクリックして、コネクタを保存します。     次を表示： **保存** 」ボタンが有効になります。


   コネクタが正常に保存された場合は、接続されたデータソースをページに表示できます。

## コネクタで使用できる機能

* 切り替え： **リスト表示** または **タイル表示**  様々な接続済みデータソースをリストまたはタイルとして表示する。
* 単一のコネクタのチェックボックスをオンにします。 クリック **すべてを選択** をクリックして、すべてのコネクタを選択します。 次をクリックできます。 **すべてを選択解除** （すべてのコネクタが選択されている場合）

<img src="./assets/data-sources-features.png" alt= "データソースページ上のデータソースの機能" width="800">

*データソースコネクタの編集、再接続、複製、削除を行います。*

上のコネクタには、次の機能を使用できます。 **データソース** ページ：

* **編集**：選択したコネクタの設定の詳細を編集します。

* **再接続**：接続が切断されたコネクタに再接続します。

* **複製**：現在のコネクタをベースとして使用し、新しい重複コネクタを作成します。 重複したコネクタは、デフォルトでサフィックス（connectorname_1 など）を付けて作成されます。 例えば、sample-elastic-search_1 のように指定します。
同じ名前のコネクタが存在する場合は、エラーが表示されます。

* **削除**：選択したコネクタを削除します。


データソースを設定すると、コネクタが「 **データソースパネル** をクリックします。 その後、データソースに接続し、トピックにコンテンツスニペットを挿入できます。 詳しくは、 [データソースからコンテンツスニペットを挿入する](../user-guide/web-editor-content-snippet.md).
