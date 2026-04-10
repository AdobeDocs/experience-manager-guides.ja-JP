---
title: DITA トピックまたはマップファイルを同じタブで開く
description: DITA トピックまたはマップファイルを同じタブで開く方法について説明します
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '276'
ht-degree: 1%

---

# DITA トピックまたはマップファイルを同じタブで開く {#id223HI0P202H}

一部のワークフローでは、トピックまたはマップファイルのリンクをクリックすると、新しいタブが開きます。 これにより、ブラウザーで多くのタブが開かれるようになり、生産性に影響を与える可能性があります。 この動作を変更して、新しいタブでトピックまたはマップファイルを開き、現在のタブ自体で強制的に開くことができます。

次のタブには、Experience Manager Guidesの設定に基づいて、DITA トピックまたはマップファイルを同じタブで開く手順が示されています。Cloud Serviceまたはオンプレミス。

>[!BEGINTABS]

>[!TAB Cloud Service]

設定ファイルを作成するには、[設定の上書き](download-install-config-override.md#)の手順を使用します。 設定ファイルで、トピックまたはマップファイルを新しいタブで開くために、次の\（property\）詳細を指定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.openinsametab` | ブール値\（true/false\）。<br> **デフォルト値**: `false` |

>[!TAB  オンプレミス ]

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** バンドルを検索してクリックします。

1. 「**同じタブでDITA トピック/マップを開く**」オプションを選択します。

1. 「**保存**」をクリックします。

>[!ENDTABS]

この設定は、トピックファイルまたはマップファイルにアクセスできる場所から次の場所に影響を与えます。

- DITA トピックを作成\（**トピックを開く** ボタンをクリックすると、ワークフローの最後に\）

- DITA マップを作成\（**マップを開く** ボタンをクリックすると、ワークフローの最後に\）

- DITA マップコンソールの「トピック」タブ

- DITA マップコンソールの「ベースライン」タブ

- DITA マップコンソールの「レポート」タブ

**親トピック：**[ Web エディターのカスタマイズ ](customize-overview.md)
