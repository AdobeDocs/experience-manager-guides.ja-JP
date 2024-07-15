---
title: デスクトップベースの XML エディターの統合
description: デスクトップベースの XML エディターを統合する方法を学ぶ
exl-id: 268e8613-bb3b-4577-96fb-a588dabfd834
feature: Publishing FrameMaker Documents
role: Admin
level: Experienced
source-git-commit: 82c7feab6599440c52ecbec845b5e3b8bb4a5046
workflow-type: tm+mt
source-wordcount: '272'
ht-degree: 0%

---

# デスクトップベースの XML エディターの統合 {#id181GB01G0HS}

市場には多くの XML エディターが存在しており、既に使用している可能性があります。 Adobe FrameMakerは、AEM コネクタに付属する最も強力な XML エディターの 1 つです。 FrameMakerでAEM コネクタを使用すると、AEM リポジトリとの接続、ファイルのチェックアウトとチェックイン、FrameMakerでの直接編集を簡単に行うことができます。 また、web エディターからFrameMakerを起動するようにAEM Guidesを設定することもできます。 ファイルをFrameMakerで開いたら、ファイルを編集してAEM リポジトリにチェックインできます。

## Web エディターからFrameMakerーでのファイル編集を有効にする

FrameMakerまたはその他の DITA エディタを使用して、DITA コンテンツを作成および更新できます。 ただし、FrameMakerを DITA エディタとして使用している場合は、AEMから直接FrameMakerで DITA 文書を開くことができます。

デフォルトでは、AEM ツールバーに「**FrameMakerで開く** ボタンは表示されません。 次の手順を実行して、このボタンをAEM ツールバーに追加します。

1. Adobe Experience Manager Web コンソール設定ページを開きます。

   設定ページにアクセスするためのデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** バンドルを検索してクリックします。

   ![](assets/open-in-fm-toolbar.png){width="550" align="left"}

1. 「**FrameMakerで開くボタンを表示**」オプションを選択します。

1. 「**保存**」をクリックします。


「**FrameMakerで開くボタンを表示**」オプションを有効にすると、AEM リポジトリ内の任意の DITA ファイルを選択したときに「**FrameMakerで開く**」ボタンが表示されます。 このオプションが *有効になっていない* 場合、「**FrameMakerで開く**」ボタンは、リポジトリで.fm または.book ファイルを選択した場合にのみ表示されます。
