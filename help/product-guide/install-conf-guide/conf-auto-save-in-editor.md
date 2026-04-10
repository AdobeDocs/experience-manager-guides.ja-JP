---
title: Web エディターでのファイル自動保存の設定
description: Web エディターでファイル自動保存を設定する方法について説明します
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '266'
ht-degree: 1%

---

# Web エディターでのファイル自動保存の設定 {#id199CC0J0M5Z}

ブラウザーベースのエディターの最も一般的な機能のひとつは、特定の期間が経過した後にデータを保存できることです。 AEM Guides Web Editorでは、指定した時間間隔でのトピックファイルとマップファイルの自動保存もサポートしています。 この機能がトリガーされると、トピックまたはマップの作業用コピーが保存されます。 トピックまたはマップの新しいバージョンは作成されません。 新しいバージョンを作成するには、Web エディターのツールバーにある「リビジョンを保存」アイコンをクリックする必要があります。

自動保存機能はデフォルトでは有効になっていません。Cloud Serviceの設定ファイルとオンプレミスの`configMgr`からこれを有効にする必要があります。

次のタブでは、Experience Manager Guidesの設定に基づいてWeb エディターの自動保存機能を有効にする手順を示します。Cloud Serviceまたはオンプレミス。

>[!BEGINTABS]

>[!TAB Cloud Service]

設定ファイルを作成するには、[設定の上書き](download-install-config-override.md#)の手順を使用します。 設定ファイルで、ファイルの自動保存と自動保存の時間間隔を設定するために、次の\（property\）詳細を指定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.autosave` | ブール値\（true/false\）。<br> **デフォルト値**: false |
| `xmleditor.autosaveinterval` | 自動保存機能をトリガーするための時間間隔を秒単位で指定します。 |

>[!TAB  オンプレミス ]

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** バンドルを検索してクリックします。

1. *XmlEditorConfig*&#x200B;設定で、**自動保存** オプションを選択します。

1. **自動保存間隔** フィールドで、自動保存機能をトリガーする時間間隔を秒単位で指定します。

1. 「**保存**」をクリックします。

>[!ENDTABS]