---
title: UUID ベースのリンクの表示の設定
description: UUID ベースのリンクの表示方法を説明します
exl-id: 2ae6a27f-983b-4aa0-be29-166899aeb4ff
feature: Web Editor Configuration
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 564ee1731be2378744ffd2ed54a2fd423901a0b3
workflow-type: tm+mt
source-wordcount: '160'
ht-degree: 1%

---

# UUID ベースのリンクの表示の設定 {#id2035G20M0QN}

デフォルトでは、Web エディターの「参照を挿入」または「コンテンツを挿入」オプションを使用してリンクを作成する場合、参照コンテンツのUUIDを使用してリンクが作成されます。 参照コンテンツの&#x200B;**Link** プロパティ \（プロパティパネル\）を設定して、参照コンテンツまたはUUIDの相対ファイルパスを表示できます。 デフォルトでは、参照されたコンテンツのUUIDがプロパティパネルに表示されます。

設定ファイルを作成するには、[設定の上書き](download-install-additional-config-override.md#)の手順を使用します。 設定ファイルで、次の\（property\）詳細を指定して、Web エディターで参照されるコンテンツの相対パスまたはUUIDを表示します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.uuid` | ブール値\（true/false\）。 リンクされたコンテンツの相対パスを表示する場合は、このプロパティをfalseに設定します。<br> **デフォルト値**: true |

**親トピック：**[ Web エディターのカスタマイズ ](conf-web-editor.md)
