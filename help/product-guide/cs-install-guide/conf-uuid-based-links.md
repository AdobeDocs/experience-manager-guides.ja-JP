---
title: UUID ベースのリンクの表示を設定
description: UUID ベースのリンクの表示を設定する方法を学ぶ
exl-id: 2ae6a27f-983b-4aa0-be29-166899aeb4ff
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '160'
ht-degree: 1%

---

# UUID ベースのリンクの表示を設定 {#id2035G20M0QN}

デフォルトでは、Web エディターで「参照を挿入」または「コンテンツを挿入/再利用」オプションを使用してリンクを作成すると、参照されるコンテンツの UUID を使用してリンクが作成されます。 参照されるコンテンツの **リンク** プロパティ\（プロパティパネル\）は、参照されるコンテンツの相対ファイルパスまたは UUID を表示するように設定できます。 デフォルトでは、参照されるコンテンツの UUID がプロパティパネルに表示されます。

[ 設定の上書き ](download-install-additional-config-override.md#) の手順に従って、設定ファイルを作成します。 設定ファイルで、次の\（property\）の詳細を指定して、Web エディター内の参照コンテンツの相対パスまたは UUID を表示します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.uuid` | ブール \（true/false\） リンクされたコンテンツの相対パスを表示する場合は、このプロパティを false に設定します。<br> **デフォルト値**:true |

**親トピック：**[ Web エディタのカスタマイズ ](conf-web-editor.md)
