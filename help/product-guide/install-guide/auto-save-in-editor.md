---
title: Web エディターでのファイル自動保存の設定
description: Web エディターでファイル自動保存を設定する方法について説明します
exl-id: 23fe404c-c76d-43ba-9b28-c49ab1e524de
feature: Web Editor Configuration
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 34687ac8f8877d05e545b23cf0830aa0345a25f7
workflow-type: tm+mt
source-wordcount: '197'
ht-degree: 1%

---

# Web エディターでのファイル自動保存の設定 {#id199CC0J0M5Z}

ブラウザーベースのエディターの最も一般的な機能のひとつは、特定の期間が経過した後にデータを保存できることです。 AEM GuidesのWeb エディターでは、指定した時間間隔でのトピックファイルとマップファイルの自動保存もサポートしています。 この機能がトリガーされると、トピックまたはマップの作業用コピーが保存されます。 トピックまたはマップの新しいバージョンは作成されません。 新しいバージョンを作成するには、Web エディターのツールバーにある「リビジョンを保存」アイコンをクリックする必要があります。

自動保存機能はデフォルトで有効になっていないため、configMgrからこれを有効にする必要があります。 Web エディターで自動保存機能を有効にするには、次の手順を実行します。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** バンドルを検索してクリックします。

1. *XmlEditorConfig*&#x200B;設定で、**自動保存** オプションを選択します。

1. **自動保存間隔** フィールドで、自動保存機能をトリガーする時間間隔を秒単位で指定します。

1. 「**保存**」をクリックします。


**親トピック：**&#x200B;[&#x200B; Web エディターのカスタマイズ &#x200B;](conf-web-editor.md)
