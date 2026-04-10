---
title: 詳細マップエディターをデフォルトに設定する
description: 詳細マップエディターをデフォルトとして設定する方法について説明します
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '392'
ht-degree: 0%

---

# 詳細マップエディターをデフォルトに設定する {#id181AI0003PN}

>[!NOTE]
>
> 以前はExperience Manager Guidesで使用されていた基本マップエディターは、バージョン 4.3および2307以降で非推奨（廃止予定）になりました。 基本マップエディターにアクセスして、DITA マップを作成および管理することはできません。
>詳細マップエディターを使用することをお勧めします。 高度なマップエディターには、高度な機能と優れたカスタマイズオプションが用意されています。 [高度なマップエディター](../user-guide/map-editor-advanced-map-editor.md)の操作方法について詳しく説明します。

4.3および2307より前のバージョンの場合、Experience Manager Guidesには基本マップエディターと高度なマップエディターが付属しています。 基本マップエディターには、マップファイルを作成するために必要なすべての機能が用意されています。 高度なマップエディターは機能豊富で、Web エディター内に統合されています。 高度なマップエディターを使用すると、作成者は使いやすいインターフェイスでDITA マップファイルを作成および編集できます。

デフォルトでは、新しいマップファイルを作成するたびに、基本マップエディターで開きます。 この動作を変更するには、設定を有効にして詳細マップエディターをデフォルトで開きます。

次のタブでは、Experience Manager Guidesの設定に基づいて、詳細マップエディターをマップファイルのデフォルトエディターとして設定する手順を示します。Cloud Serviceまたはオンプレミスです。


>[!BEGINTABS]

>[!TAB Cloud Service]

設定ファイルを作成するには、[設定の上書き](download-install-config-override.md#)の手順を使用します。 設定ファイルで、基本マップエディターを有効にするために次の\（property\）詳細を指定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | ``fmdita.hide.oldmapeditor`` | ブール値\（true/false\）。 デフォルトで高度なマップエディターを使用する場合は、このプロパティをtrueに設定します。<br> **デフォルト値**: false |

>[!NOTE]
>
> デフォルトでは、作成者がマップファイルを作成し、編集用に開くことを選択すると、基本マップエディターが起動します。 Assets UIからマップファイルの「編集」オプションを選択すると、基本マップエディターでも開きます。

>[!TAB  オンプレミス ]

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** バンドルを検索してクリックします。

1. 「**基本マップエディターを非表示**」オプションを選択します。

   このオプションを選択すると、ユーザーインターフェイスのどこにも基本マップエディターのリンクが表示されません。 デフォルトでは、マップファイルは高度なマップエディターで開きます。

>[!ENDTABS]

**親トピック：**[ Web エディターのカスタマイズ ](customize-overview.md)
