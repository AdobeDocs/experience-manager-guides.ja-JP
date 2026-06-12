---
title: エディターを起動
description: Adobe Experience Manager GuidesのAEM ナビゲーションページ、AEM Assets UI、マップコンソールからエディターを起動する方法について説明します。
exl-id: cdde7c29-ee49-4e17-902e-1e2bd6f32e8a
feature: Authoring, Web Editor
role: User
TQID: https://experienceleague.adobe.com/l9Cdw4skhzAGCQ9Db-3bcCKg6YhvJSXe-65JR1QxQJw
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: ab01a588-7dea-43f2-a699-0b3f128465d6
subfeature_v2: id: ad602516-aca3-4247-9ae8-f393d958efa9id: f89f75b0-cf2e-4e96-aec8-fe8c39cbd0ef
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 798
ht-degree: 0%

---

# エディターを起動 {#id2056B0140HS}

>[!INFO]
>
> このトピックは、新規エディターと古いエディターの両方に適用されます。 コア機能は一貫していますが、ユーザーインターフェイス、用語、インタラクションの違いは、該当する場合はタブとコールアウトを使用してコンテンツ内に示されます。

エディターは、次の場所から起動できます。

- [Adobe Experience Manager ナビゲーションページ](#adobe-experience-manager-navigation-page)
- [ADOBE EXPERIENCE MANAGER ASSETS UI](#adobe-experience-manager-assets-ui)
- [マップコンソール](#map-console)

以下の節では、さまざまな場所からエディターにアクセスして起動する方法の詳細について説明します。

## Adobe Experience Manager ナビゲーションページ

Experience Managerにログインすると、ナビゲーションページが表示されます。

![](images/web-editor-from-navigation-page.png)

**ガイド** リンクを選択すると、[Adobe Experience Manager Guides ホームページ ](./intro-home-page.md)に移動します。

![](images/aem-home-page.png)

エディターを起動するには、ナビゲーションバーに移動し、ドロップダウンから「**エディター**」を選択します。 ホームページはデフォルトで選択されています。

![](images/editor-home-page-dropdown.png){width="350"}

ファイルを選択せずにエディターを起動すると、空のエディター画面が表示されます。 Experience Manager **リポジトリ**&#x200B;または&#x200B;**コレクション**&#x200B;から編集用のファイルを開くことができます。

![](images/web-editor-launch-page.png)

または、[Adobe Experience Manager Guides ホームページ エクスペリエンス ](./intro-home-page.md)の&#x200B;**最近のファイル** ウィジェットと&#x200B;**コレクション** ウィジェットに存在する既存のファイルを開いて、エディターを起動することもできます。


Experience Manager ナビゲーションページに戻るには、上部ヘッダーの左上隅にあるAdobe Experience Manager ロゴを選択します。


## ADOBE EXPERIENCE MANAGER ASSETS UI

エディターを起動できる別の場所は、Experience Manager Assets UIです。 1つ以上のトピックを選択し、エディターで直接開くことができます。

エディターでトピックを開くには、次の手順に従います。

1. Assets UIで、編集するトピックに移動します。

   >[!NOTE]
   >
   > トピックのUUIDを表示することもできます。

   ![](images/assets_ui_with_uuid_cs.png)

   >[!IMPORTANT]
   >
   > 編集するトピックを含むフォルダーに対する読み取り権限と書き込み権限があることを確認します。

1. トピックの排他的ロックを取得するには、トピックを選択し、**チェックアウト**&#x200B;を選択します。

   >[!IMPORTANT]
   >
   > 管理者が「**ファイルをロックせずに編集を無効にする**」オプションを設定している場合は、編集する前にファイルをチェックアウトする必要があります。 ファイルをチェックアウトしない場合は、編集オプションを表示できません。

1. アセット選択モードを閉じて、編集するトピックを選択します。

   トピックのプレビューが表示されます。

   リスト表示、カード表示、プレビューモードからエディターを開くことができます。

   >[!IMPORTANT]
   >
   > 複数のトピックを開いて編集する場合は、アセット UIから目的のトピックを選択し、**編集**&#x200B;を選択します。 ブラウザーでポップアップブロッカーが有効になっていないことを確認します。有効になっていない場合は、選択したリストの最初のトピックのみが編集用に開かれます。

   ![](images/edit-from-preview_cs.png)

   トピックをプレビューせず、エディターで直接開く場合は、カード表示のクイックアクションメニューで&#x200B;**編集** アイコンを選択します。

   ![](images/edit-topic-from-quick-action_cs.png)

トピックがエディターで開きます。

>[!BEGINTABS]

>[!TAB 新しいエディター]

このビューでは、コンテンツが新規エディターでどのようにレンダリングされるかを表示します

![](images/edit-mode-editor-2-0.png)

>[!TAB 古いエディター]

このビューでは、古いエディターでのコンテンツのレンダリング方法が表示されます

![](images/edit-mode.png)

>[!ENDTABS]

Assets UIでマップファイルを開き、エディターを起動してマップファイルのトピックを編集することもできます。

エディターでマップを開くには、次の手順に従います。

1. Assets UIで、編集するトピックを含むマップファイルに移動して選択します。
1. DITA マップコンソールで、「**トピック**」タブに移動します。 マップファイル内のトピックのリストが表示されます。
1. 編集するトピックファイルを選択します。
1. 「**トピックを編集**」を選択します。

   ![](images/edit-topics-map-console_cs.png)

1. トピックがエディターで開きます。

   >[!IMPORTANT]
   >
   > 管理者が「**ファイルをロックせずに編集を無効にする**」オプションを設定している場合は、編集する前にファイルをチェックアウトする必要があります。 ファイルをチェックアウトしない場合、ドキュメントはエディターで読み取り専用モードで開きます。

## マップコンソール

マップコンソールからエディターを開くには、次の手順に従います。

1. ホームページを開き、マップコンソールを起動します。

   ![](images/editor-map-console-dropdown.png){width="350"}

   マップファイルを選択せずにマップコンソールを起動すると、空白のマップコンソール画面が表示されます。 Experience Manager **リポジトリ**&#x200B;または&#x200B;**コレクション**&#x200B;からマップファイルを開くこともできます。

   ![](images/launch-map-console.png){width="500"}

1. **マップを選択**&#x200B;して、エディターで編集するトピックを含むマップファイルを開きます。
1. マップファイルが配置されているパスを選択します。 選択したマップファイルがマップコンソールに追加されます。
1. マップファイルに移動し、ドロップダウンから「**エディターで開く**」を選択します。

   ![](images/map-console-open-in-editor.png)

トピックを含むマップファイルは、エディターで編集用に開かれています。


>[!BEGINTABS]

>[!TAB 新しいエディター]

新しいエディターでのマップ編集モード：

![](images/map-console-edit-topics-editor-2-0.png)

>[!TAB 古いエディター]

旧エディターのマップ編集モード：

![](images/map-console-edit-topics.png)


>[!ENDTABS]


**親トピック**: [編集者の概要](web-editor.md)
