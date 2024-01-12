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

ユーザーが、Web エディターで開いているファイルを **閉じる** ボタンをクリックします。 **閉じる** オプションメニューの「 」オプションは、ファイルに未保存のデータが含まれている場合や未保存のバージョンの場合に、ダイアログが表示されます。 バージョンが保存されていない場合は、ファイルを新しいバージョンとして保存するように求められます。

The **新しいバージョンとして保存** このチェックボックスはデフォルトでは有効になっていないので、configMgr から有効にする必要があります。 Web エディターでデフォルトでこのオプションを有効にするには、次の手順を実行します。

1. Adobe Experience Manager Web コンソール設定ページを開きます。

   設定ページにアクセスするデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. を検索して、 **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** バンドル。

1. を選択します。 **終了時に新しいバージョンを要求** オプション。

1. 「**保存**」をクリックします。


このオプションを選択すると、 **新しいバージョンとして保存** ダイアログボックスでは、デフォルトでチェックボックスがオンになっています。

詳しくは、 *ファイルの閉じて保存するシナリオ* 『 Adobe Experience Managerガイドの使用』as a Cloud Serviceガイドの節を参照してください。

**親トピック：**[ Web エディタのカスタマイズ](conf-web-editor.md)
