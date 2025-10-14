---
title: Web エディターでのファイルの自動保存の設定
description: Web エディターでファイルの自動保存を設定する方法を説明します
exl-id: 23fe404c-c76d-43ba-9b28-c49ab1e524de
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '197'
ht-degree: 1%

---

# Web エディターでのファイルの自動保存の設定 {#id199CC0J0M5Z}

ブラウザーベースのエディターで最も一般的な機能の 1 つは、特定の期間の後にデータを保存する機能です。 AEM Guidesの Web エディターでは、指定した時間間隔でのトピックおよびマップファイルの自動保存もサポートされています。 この機能がトリガーされると、トピックまたはマップの作業コピーが保存されます。 トピックまたはマップの新しいバージョンが作成されません。 新しいバージョンを作成するには、Web エディタのツールバーにある「リビジョンを保存」アイコンをクリックする必要があります。

自動保存機能はデフォルトでは有効になっていないため、configMgr からこれを有効にする必要があります。 次の手順を実行して、Web エディターで自動保存機能を有効にします。

1. Adobe Experience Manager Web コンソール設定ページを開きます。

   設定ページにアクセスするためのデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** バンドルを検索してクリックします。

1. *XmlEditorConfig* 設定で、「**自動保存**」オプションを選択します。

1. **自動保存間隔** フィールドに、自動保存機能をトリガーする時間間隔（秒単位）を指定します。

1. 「**保存**」をクリックします。


**親トピック：**&#x200B;[&#x200B; Web エディタのカスタマイズ &#x200B;](conf-web-editor.md)
