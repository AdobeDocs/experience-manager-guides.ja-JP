---
title: AEM GuidesでのGit コネクタの設定
description: Experience Manager GuidesでGitを設定する方法を説明します。
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 5f626c210e74c6d11e2441f719cfbfeb33bf55c5
workflow-type: tm+mt
source-wordcount: '325'
ht-degree: 1%

---

# ユーザーインターフェイスからGit コネクタを作成および設定する

Experience Manager Guidesのデータソースツールを使用して、ユーザーインターフェイスからGit コネクタを作成および設定します。 コネクタを正常に設定したら、それを使用してGit リポジトリからExperience Manager Guidesにコンテンツを読み込むことができます。


1. 上部の&#x200B;**Adobe Experience Manager** リンクを選択し、**ツール**&#x200B;を選択します。
1. ツールのリストから「**ガイド**」を選択します。
1. 「**データソース**」タイルを選択します。 **データソース** ページが表示されます。
1. 「**作成**」を選択します。
1. データソースコネクタのリストから、**GitHub**&#x200B;を選択します。

   ![](assets/github-connector-tile.png){width="600"}

1. 「**次へ**」を選択します。
1. 設定と接続の詳細を入力します。

   ![](assets/conf-git-connector.png){width="600"}

   >[!TIP]
   >
   >* カーソルを合わせる フィールドの近くの<img src="./assets/info-details.svg" alt= "情報アイコン" width="25">で、詳細を表示できます。
   >* &#x200B;* フィールドは必須です。 例えば、Elasticsearch コネクタに次の詳細を入力できます。

   * **名前**: データソースの名前を入力します。
   * **Target AEMのルートパス**: Gitから読み込まれたコンテンツを保存するAEM リポジトリ内のパスを入力します。
   * **ファイルの種類フィルター（含める）**：読み込み時に含めるファイルの種類を指定します。
   * **除外パス （正規表現）**：読み込みから除外するパス パターンを指定します。
   * **認証タイプ**: ドロップダウンリストから認証タイプを選択します。 現在、**個人アクセストークン（PAT）**&#x200B;のみがサポートされている認証方法です。 コネクタの設定時にPATを入力して、認証し、Git リポジトリにアクセスします。
   * **リポジトリ URL**: コンテンツをインポートするGit リポジトリ URLを入力します。
   * **分岐**: コンテンツの読み込みに使用する分岐を入力します。

1. 接続をテストします。 「**接続をテスト**」ボタンは、必要な詳細を入力した後にのみ有効になります。 接続の詳細が正しい場合は、成功メッセージが表示されます。 それ以外の場合は、エラーメッセージが表示されます。

   ![](assets/git-connector-test-connection.png){width="600"}

1. 上部の&#x200B;**保存**&#x200B;を選択して、コネクタを保存します。

   「保存」ボタンは、必要なすべての詳細が入力され、接続が成功した後にのみ有効になります。 コネクタが正常に保存された場合は、**データソース** ページで設定されたGithub コネクタを表示できます。

   ![](assets/git-connector-connected.png){width="600"}

