---
title: DITA トピックまたはマップファイルを同じタブで開く
description: DITA トピックまたはマップファイルを同じタブで開く方法を説明します
exl-id: 81ad2e18-3ea7-4cc1-8387-d703d1038a18
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '212'
ht-degree: 0%

---

# DITA トピックまたはマップファイルを同じタブで開く {#id223HI0P202H}

ワークフローによっては、トピックまたはマップ ファイルのリンクをクリックすると、新しいタブで開くこともあります。 これにより、ブラウザーで多くのタブが開き、生産性に影響を与える可能性があります。 新しいタブでトピックまたはマップ ファイルを開く動作を変更し、現在のタブ自体で開くようにすることができます。 それには、次の設定変更を実行します。

1. Adobe Experience Manager Web コンソール設定ページを開きます。

   設定ページにアクセスするためのデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** バンドルを検索してクリックします。

1. 「**DITA トピック/マップを同じタブで開く**」オプションを選択します。

1. 「**保存**」をクリックします。


この設定は、トピックまたはマップ ファイルにアクセスできる場所の次の場所に影響します。

- DITA トピックを作成\（「トピックを開く **ボタンをクリックした場合、ワークフローの最後** 作成\

- DITA マップを作成\（「マップを開く **ボタンをクリックした場合、ワークフローの最後** 作成\

- DITA マップコンソールの「トピック」タブ

- DITA マップコンソールの「ベースライン」タブ

- DITA マップコンソールの「レポート」タブ


**親トピック：**&#x200B;[&#x200B; Web エディタのカスタマイズ &#x200B;](conf-web-editor.md)
