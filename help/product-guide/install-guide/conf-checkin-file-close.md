---
title: ファイルを閉じるときにチェックインするようにプロンプトを設定する
description: ファイルを閉じるときにチェックインするようにプロンプトを設定する方法を説明します
exl-id: d184c97f-8405-4bcd-963d-635f17584897
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '200'
ht-degree: 1%

---

# ファイルを閉じるときにチェックインするようにプロンプトを設定する {#id222HC040PE8}

ユーザーが、ファイルのタブにある **閉じる** ボタンまたは [ オプション ] メニューの **閉じる** オプションを使用して、Web エディタで開いているファイルを閉じようとすると、ファイルに保存されていないデータまたは保存されていないバージョンがある場合は、ダイアログ ボックスが表示されます。 ファイルがロックされている場合は、ロックを解除するように求められます。

**ファイルのロックを解除** チェックボックスはデフォルトでは有効になっていないので、configMgr からこれを有効にする必要があります。 Web エディターでこのオプションをデフォルトで有効にするには、次の手順を実行します。

1. Adobe Experience Manager Web コンソール設定ページを開きます。

   設定ページにアクセスするためのデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** バンドルを検索してクリックします。

1. 「**閉じるときにチェックインを要求** オプションを選択します。

1. 「**保存**」をクリックします。


この設定を有効にすると、ダイアログボックスで「**ファイルのロックを解除**」チェックボックスがデフォルトで選択されます。

詳しくは、『Adobe Experience Manager Guidesの使用as a Cloud Serviceガイド』の *ファイルの閉じるシナリオと保存シナリオ* 節を参照してください。

**親トピック：**&#x200B;[&#x200B; Web エディタのカスタマイズ &#x200B;](conf-web-editor.md)
