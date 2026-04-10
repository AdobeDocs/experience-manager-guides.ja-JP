---
title: UUID ベースのリンクの表示の設定
description: UUID ベースのリンクの表示方法を説明します
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '305'
ht-degree: 1%

---

# UUID ベースのリンクの表示の設定 {#id2035G20M0QN}

デフォルトでは、エディターの「参照を挿入」または「コンテンツを挿入」オプションを使用してリンクを作成する場合、参照コンテンツのUUIDを使用してリンクが作成されます。 参照コンテンツの&#x200B;**Link** プロパティ \（プロパティパネル\）を設定して、参照コンテンツまたはUUIDの相対ファイルパスを表示できます。 Cloud Serviceの場合、デフォルトでは、参照コンテンツのUUIDがプロパティパネルに表示されます。 オンプレミスの場合、この表示は&#x200B;**の** UUIDs`configMgr`を有効にするオプションによって制御されます。 デフォルトでは、オンになっています。これは、参照されたコンテンツのUUIDがプロパティパネルに表示されることを意味します。

次のタブには、Experience Manager Guidesの設定に基づいて、エディター内の参照コンテンツの相対パスまたはUUIDを表示する手順が示されています。Cloud Serviceまたはオンプレミス。

>[!BEGINTABS]

>[!TAB Cloud Service]

設定ファイルを作成するには、[設定の上書き](download-install-config-override.md#)の手順を使用します。 設定ファイルで、次の\（property\）詳細を指定して、エディターで参照されるコンテンツの相対パスまたはUUIDを表示します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.uuid` | ブール値\（true/false\）。 リンクされたコンテンツの相対パスを表示する場合は、このプロパティをfalseに設定します。<br> **デフォルト値**: true |


>[!TAB  オンプレミス ]

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** バンドルを検索してクリックします。

1. *XmlEditorConfig*&#x200B;設定では、**UUIDs**&#x200B;を有効にするオプションがデフォルトで有効になっています。 これは、参照されたコンテンツのUUIDがプロパティパネルの&#x200B;**Link** プロパティに表示されることを意味します。

   リンクされたコンテンツの相対パスを表示する場合は、「**UUIDを有効にする**」オプションの選択を解除します。

1. 「**保存**」をクリックします。

>[!ENDTABS]

**親トピック：**[ Web エディターのカスタマイズ ](customize-overview.md)
