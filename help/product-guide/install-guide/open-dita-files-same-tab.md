---
title: DITA トピックまたはマップファイルを同じタブで開く
description: DITA トピックまたはマップファイルを同じタブで開く方法について説明します
exl-id: 81ad2e18-3ea7-4cc1-8387-d703d1038a18
feature: Web Editor Configuration
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 3aadc59f5034828cf319992b7acb32d5a88eaf93
workflow-type: tm+mt
source-wordcount: '212'
ht-degree: 0%

---

# DITA トピックまたはマップファイルを同じタブで開く {#id223HI0P202H}

一部のワークフローでは、トピックまたはマップファイルのリンクをクリックすると、新しいタブが開きます。 これにより、ブラウザーで多くのタブが開かれるようになり、生産性に影響を与える可能性があります。 この動作を変更して、新しいタブでトピックまたはマップファイルを開き、現在のタブ自体で強制的に開くことができます。 これを行うには、次の設定変更を実行します。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** バンドルを検索してクリックします。

1. 「**同じタブでDITA トピック/マップを開く**」オプションを選択します。

1. 「**保存**」をクリックします。


この設定は、トピックファイルまたはマップファイルにアクセスできる場所から次の場所に影響を与えます。

- DITA トピックを作成\（**トピックを開く** ボタンをクリックすると、ワークフローの最後に\）

- DITA マップを作成\（**マップを開く** ボタンをクリックすると、ワークフローの最後に\）

- DITA マップコンソールの「トピック」タブ

- DITA マップコンソールの「ベースライン」タブ

- DITA マップコンソールの「レポート」タブ


**親トピック：**&#x200B;[&#x200B; Web エディターのカスタマイズ &#x200B;](conf-web-editor.md)
