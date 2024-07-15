---
title: DITA トピックまたはマップファイルを同じタブで開く
description: DITA トピックまたはマップファイルを同じタブで開く方法を説明します
exl-id: 466cbea4-c75a-488e-bde2-465cf2c184d5
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '208'
ht-degree: 0%

---

# DITA トピックまたはマップファイルを同じタブで開く {#id223HH0301J3}

ワークフローによっては、トピックまたはマップ ファイルのリンクをクリックすると、新しいタブで開くこともあります。 これにより、ブラウザーで多くのタブが開き、生産性に影響を与える可能性があります。 新しいタブでトピックまたはマップ ファイルを開く動作を変更し、現在のタブ自体で開くようにすることができます。

[ 設定の上書き ](download-install-additional-config-override.md#) の手順に従って、設定ファイルを作成します。 設定ファイルで、トピックまたはマップ ファイルを新しいタブで開くには、次の\（property\）詳細を指定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.openinsametab` | ブール値\（true/false\）。<br> **デフォルト値**: `false` |

この設定は、トピックまたはマップ ファイルにアクセスできる場所の次の場所に影響します。

- DITA トピックを作成\（「トピックを開く **ボタンをクリックした場合、ワークフローの最後** 作成\

- DITA マップを作成\（「マップを開く **ボタンをクリックした場合、ワークフローの最後** 作成\

- DITA マップコンソールの「トピック」タブ

- DITA マップコンソールの「ベースライン」タブ

- DITA マップコンソールの「レポート」タブ


**親トピック：**[ Web エディタのカスタマイズ ](conf-web-editor.md)
