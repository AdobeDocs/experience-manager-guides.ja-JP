---
title: Web エディターでのファイル自動保存の設定
description: Web エディターでファイル自動保存を設定する方法について説明します
exl-id: 4d99c3d8-cf6a-4cf3-aaec-9009a0376c1e
feature: Web Editor Configuration
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 564ee1731be2378744ffd2ed54a2fd423901a0b3
workflow-type: tm+mt
source-wordcount: '182'
ht-degree: 1%

---

# Web エディターでのファイル自動保存の設定 {#id199CC0J0M5Z}

ブラウザーベースのエディターの最も一般的な機能のひとつは、特定の期間が経過した後にデータを保存できることです。 AEM Guides Web Editorでは、指定した時間間隔でのトピックファイルとマップファイルの自動保存もサポートしています。 この機能がトリガーされると、トピックまたはマップの作業用コピーが保存されます。 トピックまたはマップの新しいバージョンは作成されません。 新しいバージョンを作成するには、Web エディターのツールバーにある「リビジョンを保存」アイコンをクリックする必要があります。

自動保存機能はデフォルトで有効になっていないため、設定ファイルを使用してこれを有効にする必要があります。

設定ファイルを作成するには、[設定の上書き](download-install-additional-config-override.md#)の手順を使用します。 設定ファイルで、ファイルの自動保存と自動保存の時間間隔を設定するために、次の\（property\）詳細を指定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.autosave` | ブール値\（true/false\）。<br> **デフォルト値**: false |
| `xmleditor.autosaveinterval` | 自動保存機能をトリガーするための時間間隔を秒単位で指定します。 |  |

**親トピック：**&#x200B;[&#x200B; Web エディターのカスタマイズ &#x200B;](conf-web-editor.md)
