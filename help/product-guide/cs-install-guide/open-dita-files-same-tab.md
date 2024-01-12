---
title: 同じタブで DITA トピックまたはマップファイルを開く
description: 同じタブで DITA トピックまたはマップファイルを開く方法を説明します
exl-id: 466cbea4-c75a-488e-bde2-465cf2c184d5
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '208'
ht-degree: 0%

---

# 同じタブで DITA トピックまたはマップファイルを開く {#id223HH0301J3}

一部のワークフローでは、トピックまたはマップファイルのリンクをクリックすると、新しいタブで開きます。 これにより、ブラウザーで多くのタブが開き、生産性に影響を与える可能性があります。 トピックまたはマップファイルを新しいタブで開くというこの動作を変更し、現在のタブで強制的に開くことができます。

に示す手順を使用します。 [設定の上書き](download-install-additional-config-override.md#) をクリックして、設定ファイルを作成します。 設定ファイルで、トピックまたはマップファイルを新しいタブで開くための次の\(property\) 詳細を指定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.openinsametab` | ブール値\(true/false\)。 <br> **デフォルト値**: `false` |

この設定は、トピックまたはマップファイルにアクセスできる次の場所に影響します。

- DITA トピックを作成\( ワークフローの最後で、 **トピックを開く** ボタン\)

- DITA マップを作成\( ワークフローの最後で、 **マップを開く** ボタン\)

- DITA マップコンソールの「トピック」タブ

- DITA マップコンソールの「ベースライン」タブ

- DITA マップコンソールの「レポート」タブ


**親トピック：**[ Web エディタのカスタマイズ](conf-web-editor.md)
