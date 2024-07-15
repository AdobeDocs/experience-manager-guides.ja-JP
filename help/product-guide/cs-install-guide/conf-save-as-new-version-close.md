---
title: 閉じるときに新しいバージョンとして保存するようにプロンプトを設定する
description: 閉じるときに新しいバージョンとして保存するようにプロンプトを設定する方法を説明します
exl-id: 9029b671-8ff8-45eb-b27e-ab89bd09e7ed
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '186'
ht-degree: 1%

---

# 閉じるときに新しいバージョンとして保存するようにプロンプトを設定する {#id222HBI00XXA}

ユーザーが、ファイルのタブにある **閉じる** ボタンまたは [ オプション ] メニューの **閉じる** オプションを使用して、Web エディタで開いているファイルを閉じようとすると、ファイルに保存されていないデータまたは保存されていないバージョンがある場合は、ダイアログ ボックスが表示されます。 バージョンが保存されていない場合、ユーザーはファイルを新しいバージョンとして保存するように求められます。

[ 設定の上書き ](download-install-additional-config-override.md#) の手順に従って、設定ファイルを作成します。 設定ファイルで、次の\（property\）の詳細を指定して、閉じるときに新しいバージョンとして保存するように求めるプロンプトを設定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.savenewversion` | ブール値\（true/ false\）。<br>  **デフォルト値**:true |

この設定を有効にすると、ダイアログボックスで「**新しいバージョンとして保存**」チェックボックスがデフォルトで選択されます。

詳しくは、『Adobe Experience Manager Guidesの使用as a Cloud Serviceガイド』の *ファイルの閉じるシナリオと保存シナリオ* 節を参照してください。

**親トピック：**[ Web エディタのカスタマイズ ](conf-web-editor.md)
