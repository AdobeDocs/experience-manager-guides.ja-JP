---
title: 閉じるときにファイルをチェックインするプロンプトを設定する
description: 閉じるときにファイルをチェックインするようにプロンプトを設定する方法を説明します
exl-id: 5b09ec46-aea4-4a3f-8bab-42414e31e37d
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '174'
ht-degree: 1%

---

# 閉じるときにファイルをチェックインするプロンプトを設定する {#id222HC040PE8}

ユーザーが、Web エディターで開いているファイルを **閉じる** ボタンをクリックします。 **閉じる**&#x200B;オプションメニューの「 」オプションは、ファイルに未保存のデータが含まれている場合や未保存のバージョンの場合に、ダイアログが表示されます。 ロックされている場合は、ファイルのロックを解除するように求められます。

に示す手順を使用します。 [設定の上書き](download-install-additional-config-override.md#) をクリックして、設定ファイルを作成します。 設定ファイルで、次の\（プロパティ\）の詳細を指定して、閉じるときにファイルをチェックインするプロンプトを設定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.checkin` | ブール値\( true/ false\)。<br> **デフォルト値**: false |

この設定が有効な場合、 **ファイルのロックを解除** ダイアログボックスでは、デフォルトでチェックボックスがオンになっています。

詳しくは、 *ファイルの閉じて保存するシナリオ* 『 Adobe Experience Managerガイドの使用』as a Cloud Serviceガイドの節を参照してください。

**親トピック：**[ Web エディタのカスタマイズ](conf-web-editor.md)
