---
title: Web エディターでのファイルの自動保存の設定
description: Web エディターでファイルの自動保存を設定する方法を説明します
exl-id: 4d99c3d8-cf6a-4cf3-aaec-9009a0376c1e
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 6e23f52fc9124d0f07f8108da1b5fe574f553469
workflow-type: tm+mt
source-wordcount: '182'
ht-degree: 1%

---

# Web エディターでのファイルの自動保存の設定 {#id199CC0J0M5Z}

ブラウザーベースのエディターで最も一般的な機能の 1 つは、特定の期間の後にデータを保存する機能です。 AEM Guides web エディターでは、指定した時間間隔でのトピックおよびマップファイルの自動保存もサポートされています。 この機能がトリガーされると、トピックまたはマップの作業コピーが保存されます。 トピックまたはマップの新しいバージョンが作成されません。 新しいバージョンを作成するには、Web エディタのツールバーにある「リビジョンを保存」アイコンをクリックする必要があります。

自動保存機能はデフォルトでは有効になっていないので、設定ファイルを使用して有効にする必要があります。

[ 設定の上書き ](download-install-additional-config-override.md#) の手順に従って、設定ファイルを作成します。 設定ファイルで、ファイルの自動保存と自動保存時間間隔を設定するために、次の\（property\）の詳細を指定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.autosave` | ブール値\（true/false\）.<br> **デフォルト値**:false |
| `xmleditor.autosaveinterval` | 自動保存機能をトリガーにする時間間隔を秒単位で指定します。 |  |

**親トピック：**[ Web エディタのカスタマイズ ](conf-web-editor.md)
