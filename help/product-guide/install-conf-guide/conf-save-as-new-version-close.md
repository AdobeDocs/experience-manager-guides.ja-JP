---
title: 閉じるときに新しいバージョンとして保存するプロンプトを設定
description: 閉じるときに新しいバージョンとして保存するプロンプトを設定する方法について説明します
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '300'
ht-degree: 1%

---

# 閉じるときに新しいバージョンとして保存するプロンプトを設定 {#id222HBI00XXA}

ファイルのタブの&#x200B;**閉じる** ボタンまたはオプションメニューの&#x200B;**閉じる** オプションを使用して、Web エディターで開いているファイルを閉じようとすると、ファイルに保存されていないデータまたは保存されていないバージョンがある場合は、ダイアログが表示されます。 バージョンが保存されていない場合は、ファイルを新しいバージョンとして保存するように求められます。

次のタブには、Experience Manager Guidesの設定に基づく手順が表示されます。Cloud Serviceまたはオンプレミス。

>[!BEGINTABS]

>[!TAB Cloud Service]

設定ファイルを作成するには、[設定の上書き](download-install-config-override.md#)の手順を使用します。 設定ファイルで、次の\（property\）詳細を指定して、クローズ時に新しいバージョンとして保存するプロンプトを設定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.savenewversion` | ブール値\（true/ false\）。<br>  **デフォルト値**: true |

この設定を有効にすると、ダイアログボックスで「**新しいバージョンとして保存**」チェックボックスがデフォルトで選択されます。

詳しくは、Adobe Experience Manager Guides as a Cloud Serviceの使用ガイドの「*ファイルの閉じおよび保存シナリオ*」セクションを参照してください。

>[!TAB  オンプレミス ]

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** バンドルを検索してクリックします。

1. 「**クローズ時に新しいバージョンを要求**」オプションを選択します。

1. 「**保存**」をクリックします。


**新しいバージョンとして保存** チェックボックスはデフォルトで有効になっていないため、configMgrからこれを有効にする必要があります。

このオプションを選択すると、ダイアログボックスで「**新しいバージョンとして保存**」チェックボックスがデフォルトで選択されます。

詳しくは、Adobe Experience Manager Guides as a Cloud Serviceの使用ガイドの「*ファイルの閉じおよび保存シナリオ*」セクションを参照してください。

>[!ENDTABS]