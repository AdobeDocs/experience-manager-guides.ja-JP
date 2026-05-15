---
title: UUID ベースのリンクの表示の設定
description: UUID ベースのリンクの表示方法を説明します
exl-id: ab1b0ecf-cb50-4fcd-b36e-d16a8c396054
feature: Web Editor Configuration
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/QlYbIRVwAM10wfcu-Fz3CzOkCCUDZHbVzZo3xCxT3wI
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2: id: b0521e56-a0b2-40b6-bf47-ebc98751f9ba
role_v2: id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 211
ht-degree: 0%

---

# UUID ベースのリンクの表示の設定 {#id2035G20M0QN}

デフォルトでは、Web エディターの「参照を挿入」または「コンテンツを挿入」オプションを使用してリンクを作成する場合、参照コンテンツのUUIDを使用してリンクが作成されます。 参照コンテンツの&#x200B;**Link** プロパティ \（プロパティパネル\）を設定して、参照コンテンツまたはUUIDの相対ファイルパスを表示できます。 この表示は、configMgrの&#x200B;**UUIDs**&#x200B;を有効にするオプションによって制御されます。 デフォルトでは、オンになっています。これは、参照されたコンテンツのUUIDがプロパティパネルに表示されることを意味します。

Web エディターで参照されるコンテンツの相対パスまたはUUIDを表示するには、次の手順を実行します。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** バンドルを検索してクリックします。

1. *XmlEditorConfig*&#x200B;設定では、**UUIDs**&#x200B;を有効にするオプションがデフォルトで有効になっています。 これは、参照されたコンテンツのUUIDがプロパティパネルの&#x200B;**Link** プロパティに表示されることを意味します。

   リンクされたコンテンツの相対パスを表示する場合は、「**UUIDを有効にする**」オプションの選択を解除します。

1. 「**保存**」をクリックします。


**親トピック：**[ Web エディターのカスタマイズ ](conf-web-editor.md)
