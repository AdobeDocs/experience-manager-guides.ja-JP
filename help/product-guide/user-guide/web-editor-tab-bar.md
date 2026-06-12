---
title: エディターのタブバー
description: エディターのタブバーについて説明します。 Adobe Experience Manager Guidesのエディターインターフェイスと機能について説明します。
feature: Authoring, Features of Web Editor
role: User
exl-id: 02e45d34-898f-411c-bd80-bd4f2364b7d7
TQID: https://experienceleague.adobe.com/sqNExkYi3iIqIxC7mdlhWw-59-LcAXCOU8w7GD63d8Q
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: ab01a588-7dea-43f2-a699-0b3f128465d6id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2: id: ad602516-aca3-4247-9ae8-f393d958efa9id: f89f75b0-cf2e-4e96-aec8-fe8c39cbd0ef
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554
source-git-commit: a13143053c75ab65cbcd20a52c8ca3fb953edecf
workflow-type: tm+mt
source-wordcount: 566
ht-degree: 0%

---

# エディターのタブバー

>[!INFO]
>
> このトピックは、新しいエディターと古いエディターの両方に適用されます。 コア機能は一貫していますが、ユーザーインターフェイス、用語、インタラクションの違いは、該当する場合はタブとコールアウトを使用してコンテンツ内に示されます。

タブバーはエディターのインターフェイスの上部にあり、様々なファイルレベルの機能にアクセスできます。

>[!BEGINTABS]

>[!TAB 新しいエディター]

![](./images/web-editor-tab-bar-editor-2-0.png)

>[!TAB 古いエディター]

![](./images/web-editor-tab-bar.png)

>[!ENDTABS]

**タブ**

エディターで現在開いているトピックをファイルタブとして表示します。 複数のトピックを同時に開くことができ、これらはタブバーのそれぞれのタブに表示されます。 デフォルトでは、タブでファイルタイトルを表示できます。 ファイルにカーソルを合わせると、ファイルタイトルとファイルパスがツールチップとして表示されます。

>[!NOTE]
>
> 管理者は、タブ内のファイル名でファイルのリストを表示することもできます。 [ ユーザー設定](./intro-home-page.md#user-preferences)の「**エディターファイル表示設定**」セクションで「**ファイル名**」オプションを選択します。

「ファイル」タブを選択すると、「新しいバージョンとして保存」、「コピー」、「検索」、「追加先」、「プロパティ」、「分割」、「PDFとしてダウンロード」、「閉じる」オプションを備えたコンテキストメニューが開きます。

**すべて保存**

開いているすべてのトピックで行った変更を保存します。 エディターで複数のトピックを開いている場合、**すべて保存**&#x200B;を選択するか、**Ctrl**+**S** ショートカットキーを使用すると、すべてのドキュメントをワンクリックで保存できます。 各ドキュメントを個別に保存する必要はありません。

>[!NOTE]
>
> **すべて保存**&#x200B;操作では、トピックの新しいバージョンは作成されません。 新しいバージョンを作成するには、**新しいバージョンとして保存** オプションを使用します。

**AI アシスタント**

AIを活用したパワフルなツールは、スマートなヘルプとオーサリング機能によって生産性を向上させるように設計されています。 **オーサリング**&#x200B;と&#x200B;**ヘルプ**&#x200B;の2つの堅牢なAI機能をExperience Manager Guides インターフェイスに統合し、コンテンツのオーサリングとExperience Manager Guides ドキュメントからの情報へのアクセスをより迅速かつ効率的におこなうことができます。

>[!NOTE]
>
> 現在、Adobe Experience Manager Guides as a Cloud ServiceではAI アシスタント機能を利用できます。

**ビューを展開**: **展開** アイコンを使用してページビューを展開できます。 このビューでは、Adobe Experience Manager ロゴを含むヘッダーバーは非表示になっています。 これにより、編集のためのコンテンツスペースが最大化されます。 標準ビューに戻るには、**拡張ビュー**&#x200B;を終了アイコンを使用します。

**その他のアクション**：追加のオプションへのアクセスを提供します。 このボタンを選択すると、次のオプションを含むメニューが開きます。

- **Assets**：設定に基づいて宛先に移動します。
   - **Cloud Services**: Cloud Servicesを使用している場合、**Assets** オプションを選択すると、AEM ナビゲーション ページに移動します。

   - **オンプレミスソフトウェア**: Adobe Experience Manager Guides（4.2.1以降）を使用している場合、**Assets** オプションを選択すると、Assets UIの現在のファイルパスに移動します。
- **Workspace settings**: Workspace settings ダイアログに移動します。 詳しくは、[Workspace設定の設定](../install-conf-guide/workspace-settings.md)を参照してください。

>[!NOTE]
>
>バージョン 5.2より前のオンプレミス設定でAdobe Experience Manager Guidesを使用している場合、Workspace設定オプションは、その他のアクション メニューの下に&#x200B;**Settings**&#x200B;として引き続き表示されます。

- **エディター設定**: エディター設定ダイアログに移動し、個々の作成者レベルでエディターの動作をカスタマイズできます。 オーサリング時に、タグ、コメント、その他のエディターレベルの設定の表示と動作を制御できます。 詳しくは、[ エディター設定](../install-conf-guide/workspace-settings.md)を参照してください。

**親トピック：**[ エディターの概要](web-editor.md)
