---
title: 閉じるときに新しいバージョンとして保存するようにプロンプトを設定する
description: 閉じるときに新しいバージョンとして保存するようにプロンプトを設定する方法を説明します
exl-id: 1b8c3eaa-a654-4563-9541-18a59b7d306c
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '214'
ht-degree: 0%

---

# 閉じるときに新しいバージョンとして保存するようにプロンプトを設定する {#id222HBI00XXA}

ユーザーが、ファイルのタブにある **閉じる** ボタンまたは [ オプション ] メニューの **閉じる** オプションを使用して、Web エディタで開いているファイルを閉じようとすると、ファイルに保存されていないデータまたは保存されていないバージョンがある場合は、ダイアログ ボックスが表示されます。 バージョンが保存されていない場合、ユーザーはファイルを新しいバージョンとして保存するように求められます。

**新しいバージョンとして保存** チェックボックスはデフォルトでは有効になっていないため、configMgr からこれを有効にする必要があります。 Web エディターでこのオプションをデフォルトで有効にするには、次の手順を実行します。

1. Adobe Experience Manager Web コンソール設定ページを開きます。

   設定ページにアクセスするためのデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** バンドルを検索してクリックします。

1. 「**閉じるときに新しいバージョンを要求**」オプションを選択します。

1. 「**保存**」をクリックします。


このオプションを選択すると、ダイアログボックスで「**新しいバージョンとして保存**」チェックボックスがデフォルトで選択されます。

詳しくは、『Adobe Experience Manager Guidesの使用as a Cloud Serviceガイド』の *ファイルの閉じるシナリオと保存シナリオ* 節を参照してください。

**親トピック：**[ Web エディタのカスタマイズ ](conf-web-editor.md)
