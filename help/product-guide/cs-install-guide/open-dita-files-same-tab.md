---
title: DITA トピックまたはマップファイルを同じタブで開く
description: DITA トピックまたはマップファイルを同じタブで開く方法について説明します
exl-id: 466cbea4-c75a-488e-bde2-465cf2c184d5
feature: Web Editor Configuration
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 564ee1731be2378744ffd2ed54a2fd423901a0b3
workflow-type: tm+mt
source-wordcount: '208'
ht-degree: 0%

---

# DITA トピックまたはマップファイルを同じタブで開く {#id223HH0301J3}

一部のワークフローでは、トピックまたはマップファイルのリンクをクリックすると、新しいタブが開きます。 これにより、ブラウザーで多くのタブが開かれるようになり、生産性に影響を与える可能性があります。 この動作を変更して、新しいタブでトピックまたはマップファイルを開き、現在のタブ自体で強制的に開くことができます。

設定ファイルを作成するには、[設定の上書き](download-install-additional-config-override.md#)の手順を使用します。 設定ファイルで、トピックまたはマップファイルを新しいタブで開くために、次の\（property\）詳細を指定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.openinsametab` | ブール値\（true/false\）。<br> **デフォルト値**: `false` |

この設定は、トピックファイルまたはマップファイルにアクセスできる場所から次の場所に影響を与えます。

- DITA トピックを作成\（**トピックを開く** ボタンをクリックすると、ワークフローの最後に\）

- DITA マップを作成\（**マップを開く** ボタンをクリックすると、ワークフローの最後に\）

- DITA マップコンソールの「トピック」タブ

- DITA マップコンソールの「ベースライン」タブ

- DITA マップコンソールの「レポート」タブ


**親トピック：**&#x200B;[&#x200B; Web エディターのカスタマイズ &#x200B;](conf-web-editor.md)
