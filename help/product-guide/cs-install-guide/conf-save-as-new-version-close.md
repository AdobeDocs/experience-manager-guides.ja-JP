---
title: 閉じるときに新しいバージョンとして保存するプロンプトを設定
description: 閉じるときに新しいバージョンとして保存するプロンプトを設定する方法について説明します
exl-id: 9029b671-8ff8-45eb-b27e-ab89bd09e7ed
feature: Web Editor Configuration
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 564ee1731be2378744ffd2ed54a2fd423901a0b3
workflow-type: tm+mt
source-wordcount: '186'
ht-degree: 1%

---

# 閉じるときに新しいバージョンとして保存するプロンプトを設定 {#id222HBI00XXA}

ファイルのタブの&#x200B;**閉じる** ボタンまたはオプションメニューの&#x200B;**閉じる** オプションを使用して、Web エディターで開いているファイルを閉じようとすると、ファイルに保存されていないデータまたは保存されていないバージョンがある場合は、ダイアログが表示されます。 バージョンが保存されていない場合は、ファイルを新しいバージョンとして保存するように求められます。

設定ファイルを作成するには、[設定の上書き](download-install-additional-config-override.md#)の手順を使用します。 設定ファイルで、次の\（property\）詳細を指定して、クローズ時に新しいバージョンとして保存するプロンプトを設定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.savenewversion` | ブール値\（true/ false\）。<br>  **デフォルト値**: true |

この設定を有効にすると、ダイアログボックスで「**新しいバージョンとして保存**」チェックボックスがデフォルトで選択されます。

詳しくは、Adobe Experience Manager Guides as a Cloud Serviceの使用ガイドの「*ファイルの閉じおよび保存シナリオ*」セクションを参照してください。

**親トピック：**&#x200B;[&#x200B; Web エディターのカスタマイズ &#x200B;](conf-web-editor.md)
