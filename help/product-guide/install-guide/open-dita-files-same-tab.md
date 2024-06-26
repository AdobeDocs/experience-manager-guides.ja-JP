---
title: 同じタブで DITA トピックまたはマップファイルを開く
description: 同じタブで DITA トピックまたはマップファイルを開く方法を説明します
exl-id: 81ad2e18-3ea7-4cc1-8387-d703d1038a18
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '212'
ht-degree: 0%

---

# 同じタブで DITA トピックまたはマップファイルを開く {#id223HI0P202H}

一部のワークフローでは、トピックまたはマップファイルのリンクをクリックすると、新しいタブで開きます。 これにより、ブラウザーで多くのタブが開き、生産性に影響を与える可能性があります。 トピックまたはマップファイルを新しいタブで開くというこの動作を変更し、現在のタブで強制的に開くことができます。 それには、次の設定変更を実行します。

1. Adobe Experience Manager Web コンソール設定ページを開きます。

   設定ページにアクセスするデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. を検索して、 **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** バンドル。

1. を選択します。 **DITA トピック/マップを同じタブで開く** オプション。

1. 「**保存**」をクリックします。


この設定は、トピックまたはマップファイルにアクセスできる次の場所に影響します。

- DITA トピックを作成\( ワークフローの最後で、 **トピックを開く** ボタン\)

- DITA マップを作成\( ワークフローの最後で、 **マップを開く** ボタン\)

- DITA マップコンソールの「トピック」タブ

- DITA マップコンソールの「ベースライン」タブ

- DITA マップコンソールの「レポート」タブ


**親トピック：**[ Web エディタのカスタマイズ](conf-web-editor.md)
