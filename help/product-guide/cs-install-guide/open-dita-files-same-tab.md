---
title: DITA トピックまたはマップファイルを同じタブで開く
description: DITA トピックまたはマップファイルを同じタブで開く方法について説明します
exl-id: 466cbea4-c75a-488e-bde2-465cf2c184d5
feature: Web Editor Configuration
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/futODy2B62sg-Epb4bnmxHVAOUVoGDoKg5WJWV-7bpM
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
  - id: d90290ec-3e61-4ebd-8649-bcafe0836803
subfeature_v2:
  - id: b0521e56-a0b2-40b6-bf47-ebc98751f9ba
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 207
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
