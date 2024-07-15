---
title: ファイルを閉じるときにチェックインするようにプロンプトを設定する
description: ファイルを閉じるときにチェックインするようにプロンプトを設定する方法を説明します
exl-id: 5b09ec46-aea4-4a3f-8bab-42414e31e37d
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '174'
ht-degree: 1%

---

# ファイルを閉じるときにチェックインするようにプロンプトを設定する {#id222HC040PE8}

ユーザーが、ファイルのタブにある **閉じる** ボタンまたは [ オプション ] メニューの **閉じる** オプションを使用して、Web エディタで開いているファイルを閉じようとすると、ファイルに保存されていないデータまたは保存されていないバージョンがある場合は、ダイアログ ボックスが表示されます。 ファイルがロックされている場合は、ロックを解除するように求められます。

[ 設定の上書き ](download-install-additional-config-override.md#) の手順に従って、設定ファイルを作成します。 設定ファイルで、次の\（property\）の詳細を指定して、ファイルを閉じるときにチェックインするように求めるプロンプトを設定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.checkin` | ブール値\（true/ false\）.<br> **デフォルト値**:false |

この設定を有効にすると、ダイアログボックスで「**ファイルのロックを解除**」チェックボックスがデフォルトで選択されます。

詳しくは、『Adobe Experience Manager Guidesの使用as a Cloud Serviceガイド』の *ファイルの閉じるシナリオと保存シナリオ* 節を参照してください。

**親トピック：**[ Web エディタのカスタマイズ ](conf-web-editor.md)
