---
title: デスクトップベースのXML エディターの統合
description: デスクトップベースのXML エディターの統合方法を説明します
feature: Publishing FrameMaker Documents
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '511'
ht-degree: 2%

---

# デスクトップベースのXML エディターの統合

市場には多くのXML エディターがあり、すでに使用している可能性があります。 Adobe FrameMakerは、AEM コネクタを備えた最も強力なXML エディターの1つです。 FrameMakerのAEM コネクタを使用すると、AEM リポジトリへの接続、ファイルのチェックアウトとチェックイン、FrameMakerでのファイルの直接編集を簡単に行うことができます。 また、Web エディターからFrameMakerを起動するようにExperience Manager Guidesを設定することもできます。 FrameMakerでファイルを開いた後、ファイルを編集してAEM リポジトリに戻すことができます。

## Web エディターからFrameMakerでのファイル編集を有効にする

FrameMakerまたはその他のDITA エディターを使用して、DITA コンテンツを作成および更新できます。 ただし、組織でFrameMakerをDITA エディターとして使用している場合は、AEMからFrameMakerでDITA ドキュメントを直接開くオプションをユーザーに提供できます。


デフォルトでは、AEM ツールバーに「**FrameMakerで開く**」ボタンは表示されません。

次のタブでは、Experience Manager Guidesの設定に基づいて、AEM ツールバーにこのボタンを追加する手順を示します。Cloud Serviceまたはオンプレミスです。

>[!BEGINTABS]

>[!TAB Cloud Service]

設定ファイルを作成するには、[設定の上書き](download-install-config-override.md#)の手順を使用します。 設定ファイルで、次の\（property\）詳細を入力して、AEM ツールバーにこのボタンを追加します。


| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.openinframebuttonshow` | ブール値\（true/false\）。 「**FrameMakerで開く**」ボタンを表示する場合は、このプロパティをtrueに設定します。<br> **デフォルト値**: false |



バージョン 2409およびFrameMaker 2022年9月リリース – アップデート 3を使用している場合は、ユーザーがFrameMaker サーバーの詳細をFrameMakerに渡すために、**Experience Manager Guides バージョン 2022 アップデート 3以降**&#x200B;の設定を有効にする必要があります。  デフォルトでは無効になっています。


| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.openinframe2022above` | ブール値\（true/false\）。 FrameMaker 2022年9月リリース（アップデート 3）を使用している場合は、このプロパティをtrueに設定します。<br> **デフォルト値**: false |



*openinframebuttonshow* プロパティをtrueに設定すると、AEM リポジトリ内の任意のDITA ファイルを選択すると、「**FrameMakerで開く**」ボタンが表示されます。 このプロパティが&#x200B;*true*&#x200B;に設定されていない場合、「**FrameMakerで開く**」ボタンは、リポジトリで.fmまたは.book ファイルを選択した場合にのみ表示されます

>[!TAB  オンプレミス ]

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** バンドルを検索してクリックします。
   ![](assets/open-in-fm-config.png)

1. 「**FrameMakerで開くボタンを表示**」オプションを選択します。

1. バージョン 4.6およびFrameMaker 2022年9月リリース – アップデート 3を使用している場合は、ユーザーがExperience Manager Guides サーバーの詳細をFrameMakerに渡すために、**FrameMaker バージョン 2022 アップデート 3以降**&#x200B;の設定を有効にする必要があります。 このオプションは、デフォルトで無効になっています。


1. 「**保存**」をクリックします。


「**FrameMakerで開くボタンを表示**」オプションを有効にすると、「**FrameMakerで開く**」ボタンが、AEM リポジトリ内の任意のDITA ファイルを選択したときに表示されます。 このオプションが&#x200B;*有効になっていない*&#x200B;場合、「**FrameMakerで開く**」ボタンは、リポジトリで.fmまたは.book ファイルを選択した場合にのみ表示されます。

>[!ENDTABS]
