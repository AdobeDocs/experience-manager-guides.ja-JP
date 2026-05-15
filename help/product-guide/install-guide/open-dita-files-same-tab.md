---
title: DITA トピックまたはマップファイルを同じタブで開く
description: DITA トピックまたはマップファイルを同じタブで開く方法について説明します
exl-id: 81ad2e18-3ea7-4cc1-8387-d703d1038a18
feature: Web Editor Configuration
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/-QYM6xoQCkvRcpxpsWtnJb5le7-4RirhgOZk94UvzIg
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0eid: d90290ec-3e61-4ebd-8649-bcafe0836803
subfeature_v2: id: b0521e56-a0b2-40b6-bf47-ebc98751f9ba
role_v2: id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 211
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


**親トピック：**[ Web エディターのカスタマイズ ](conf-web-editor.md)
