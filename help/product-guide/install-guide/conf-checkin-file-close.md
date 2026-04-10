---
title: 閉じるときにファイルをチェックインするプロンプトを設定
description: 閉じるときにファイルをチェックインするためのプロンプトを設定する方法について説明します
exl-id: d184c97f-8405-4bcd-963d-635f17584897
feature: Web Editor Configuration
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 3aadc59f5034828cf319992b7acb32d5a88eaf93
workflow-type: tm+mt
source-wordcount: '200'
ht-degree: 1%

---

# 閉じるときにファイルをチェックインするプロンプトを設定 {#id222HC040PE8}

ファイルのタブの&#x200B;**閉じる** ボタンまたはオプションメニューの&#x200B;**閉じる** オプションを使用して、Web エディターで開いているファイルを閉じようとすると、ファイルに保存されていないデータまたは保存されていないバージョンがある場合は、ダイアログが表示されます。 ファイルがロックされている場合は、ロック解除を求めるメッセージが表示されます。

「**ファイルをロック解除**」チェックボックスはデフォルトで有効になっていないため、configMgrからこれを有効にする必要があります。 Web エディターでデフォルトでこのオプションを有効にするには、次の手順を実行します。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** バンドルを検索してクリックします。

1. 「**閉じるチェックインを要求**」オプションを選択します。

1. 「**保存**」をクリックします。


この設定を有効にすると、ダイアログボックスで「**ファイルのロックを解除**」チェックボックスがデフォルトで選択されます。

詳しくは、Adobe Experience Manager Guides as a Cloud Serviceの使用ガイドの「*ファイルの閉じおよび保存シナリオ*」セクションを参照してください。

**親トピック：**[ Web エディターのカスタマイズ ](conf-web-editor.md)
