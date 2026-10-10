---
title: 閉じるときにファイルをチェックインするプロンプトを設定
description: 閉じるときにファイルをチェックインするためのプロンプトを設定する方法について説明します
feature: Web Editor Configuration
role: Admin
level: Experienced
exl-id: 6b1b5894-0d55-4230-83cf-6b219e969116
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
feature_v2:
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
    internal-label: Configuration
subfeature_v2:
  - id: b0521e56-a0b2-40b6-bf47-ebc98751f9ba
    internal-label: Web Editor configuration
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '317'
ht-degree: 1%
---
# 閉じるときにファイルをチェックインするプロンプトを設定 {#id222HC040PE8}

ファイルのタブの&#x200B;**閉じる** ボタンまたはオプションメニューの&#x200B;**閉じる** オプションを使用して、エディターで開いているファイルを閉じようとすると、ファイルに保存されていないデータまたは保存されていないバージョンがある場合は、ダイアログが表示されます。 ファイルがロックされている場合は、ロック解除を求めるメッセージが表示されます。

次のタブには、Experience Manager Guidesの設定に基づいて、Editorの「閉じる」オプションにデフォルトでファイルをチェックインするようにプロンプトを設定する手順が示されています。Cloud Serviceまたはオンプレミス。

>[!BEGINTABS]

>[!TAB Cloud Service]

設定ファイルを作成するには、[設定の上書き](download-install-config-override.md#)の手順を使用します。 設定ファイルで、次の\（property\）詳細を指定して、クローズ時にファイルをチェックインするプロンプトを設定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.checkin` | ブール値\（true/ false\）。<br> **デフォルト値**: false |

この設定を有効にすると、ダイアログボックスで「**ファイルのロックを解除**」チェックボックスがデフォルトで選択されます。

詳しくは、Adobe Experience Manager Guides as a Cloud Serviceの使用ガイドの「*ファイルの閉じおよび保存シナリオ*」セクションを参照してください。

>[!TAB  オンプレミス ]

>[!NOTE]
>
>「**ファイルをロック解除**」チェックボックスはデフォルトで有効になっていないため、configMgrからこれを有効にする必要があります。 エディターでデフォルトでこのオプションを有効にするには、次の手順を実行します。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** バンドルを検索してクリックします。

1. 「**閉じるチェックインを要求**」オプションを選択します。

1. 「**保存**」をクリックします。


この設定を有効にすると、ダイアログボックスで「**ファイルのロックを解除**」チェックボックスがデフォルトで選択されます。

詳しくは、Adobe Experience Manager Guides as a Cloud Serviceの使用ガイドの「*ファイルの閉じおよび保存シナリオ*」セクションを参照してください。

>[!ENDTABS]

**親トピック：**[ エディターのカスタマイズ ](customize-overview.md)
