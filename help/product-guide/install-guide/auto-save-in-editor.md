---
title: エディターでのファイル自動保存の設定
description: エディターでファイルの自動保存を設定する方法について説明します
exl-id: 23fe404c-c76d-43ba-9b28-c49ab1e524de
feature: Web Editor Configuration
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/-VGsv3zHE6oACLVpnYm24-rX9-H6uUGyz3SEsP2ILBE
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2: id: b0521e56-a0b2-40b6-bf47-ebc98751f9ba
role_v2: id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: cc73b81787a3c3dbe8390d93e558064327e59965
workflow-type: tm+mt
source-wordcount: 197
ht-degree: 1%

---

# エディターでのファイル自動保存の設定 {#id199CC0J0M5Z}

ブラウザーベースのエディターの最も一般的な機能のひとつは、特定の期間が経過した後にデータを保存できることです。 AEM Guidesのエディターでは、指定した時間間隔でのトピックファイルとマップファイルの自動保存もサポートしています。 この機能がトリガーされると、トピックまたはマップの作業用コピーが保存されます。 トピックまたはマップの新しいバージョンは作成されません。 新しいバージョンを作成するには、エディターのツールバーにある「リビジョンを保存」アイコンをクリックする必要があります。

自動保存機能はデフォルトで有効になっていないため、configMgrからこれを有効にする必要があります。 エディターで自動保存機能を有効にするには、次の手順を実行します。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** バンドルを検索してクリックします。

1. *XmlEditorConfig*&#x200B;設定で、**自動保存** オプションを選択します。

1. **自動保存間隔** フィールドで、自動保存機能をトリガーする時間間隔を秒単位で指定します。

1. 「**保存**」をクリックします。


**親トピック：**[ エディターのカスタマイズ ](conf-web-editor.md)
