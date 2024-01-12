---
title: Web エディターでのファイルの自動保存の設定
description: Web エディターでファイルを自動保存する設定方法を説明します。
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

ブラウザーベースのエディターで最も一般的な機能の 1 つは、特定の期間が経過した後にデータを保存できる機能です。 AEM Guides の Web エディターでは、指定した時間間隔でのトピックおよびマップファイルの自動保存もサポートしています。 この機能をトリガーすると、トピックまたはマップの作業用コピーが保存されます。 トピックまたはマップの新しいバージョンが作成されません。 新しいバージョンを作成するには、Web エディタのツールバーの「リビジョンを保存」アイコンをクリックする必要があります。

自動保存機能はデフォルトでは有効になっていないので、configMgr から有効にする必要があります。 Web エディターで自動保存機能を有効にするには、次の手順を実行します。

1. Adobe Experience Manager Web コンソール設定ページを開きます。

   設定ページにアクセスするデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. を検索して、 **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** バンドル。

1. Adobe Analytics の *XmlEditorConfig* 設定で、 **自動保存** オプション。

1. Adobe Analytics の **自動保存間隔** 「 」フィールドで、自動保存機能のトリガー間隔を秒単位で指定します。

1. 「**保存**」をクリックします。


**親トピック：**[ Web エディタのカスタマイズ](conf-web-editor.md)
