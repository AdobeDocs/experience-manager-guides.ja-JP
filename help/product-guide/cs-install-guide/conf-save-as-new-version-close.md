---
title: 閉じるときに新しいバージョンとして保存するプロンプトを設定
description: 閉じるときに新しいバージョンとして保存するプロンプトを設定する方法について説明します
exl-id: 9029b671-8ff8-45eb-b27e-ab89bd09e7ed
feature: Web Editor Configuration
role: Admin
level: Experienced
TQID: 'https://experienceleague.adobe.com/t42Tf7hh9Sm-yu05OGGmEx-hF1gYRkDeCnCiEEoqNDE'
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
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
source-wordcount: '185'
ht-degree: 1%
---
# 閉じるときに新しいバージョンとして保存するプロンプトを設定 {#id222HBI00XXA}

ファイルのタブの&#x200B;**閉じる** ボタンまたはオプションメニューの&#x200B;**閉じる** オプションを使用して、Web エディターで開いているファイルを閉じようとすると、ファイルに保存されていないデータまたは保存されていないバージョンがある場合は、ダイアログが表示されます。 バージョンが保存されていない場合は、ファイルを新しいバージョンとして保存するように求められます。

設定ファイルを作成するには、[設定の上書き](download-install-additional-config-override.md#)の手順を使用します。 設定ファイルで、次の\（property\）詳細を指定して、クローズ時に新しいバージョンとして保存するプロンプトを設定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.savenewversion` | ブール値\（true/ false\）。<br>  **デフォルト値**: true |

この設定を有効にすると、ダイアログボックスで「**新しいバージョンとして保存**」チェックボックスがデフォルトで選択されます。

詳しくは、Adobe Experience Manager Guides as a Cloud Serviceの使用ガイドの「*ファイルの閉じおよび保存シナリオ*」セクションを参照してください。

**親トピック：**&#x200B;[&#x200B; Web エディターのカスタマイズ &#x200B;](conf-web-editor.md)
