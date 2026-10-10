---
title: UUID ベースのリンクの表示の設定
description: UUID ベースのリンクの表示方法を説明します
exl-id: 2ae6a27f-983b-4aa0-be29-166899aeb4ff
feature: Web Editor Configuration
role: Admin
level: Experienced
TQID: 'https://experienceleague.adobe.com/--RdjezGIsplCdBLF8u-3LvR92rVBcgGmPo8a7GbQys'
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
source-wordcount: '162'
ht-degree: 1%
---
# UUID ベースのリンクの表示の設定 {#id2035G20M0QN}

デフォルトでは、Web エディターの「参照を挿入」または「コンテンツを挿入」オプションを使用してリンクを作成する場合、参照コンテンツのUUIDを使用してリンクが作成されます。 参照コンテンツの&#x200B;**Link** プロパティ \（プロパティパネル\）を設定して、参照コンテンツまたはUUIDの相対ファイルパスを表示できます。 デフォルトでは、参照されたコンテンツのUUIDがプロパティパネルに表示されます。

設定ファイルを作成するには、[設定の上書き](download-install-additional-config-override.md#)の手順を使用します。 設定ファイルで、次の\（property\）詳細を指定して、Web エディターで参照されるコンテンツの相対パスまたはUUIDを表示します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.uuid` | ブール値\（true/false\）。 リンクされたコンテンツの相対パスを表示する場合は、このプロパティをfalseに設定します。<br> **デフォルト値**: true |

**親トピック：**[ Web エディターのカスタマイズ ](conf-web-editor.md)
