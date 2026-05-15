---
title: Web エディターでのファイル自動保存の設定
description: Web エディターでファイル自動保存を設定する方法について説明します
exl-id: 4d99c3d8-cf6a-4cf3-aaec-9009a0376c1e
feature: Web Editor Configuration
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/yHZSl9G2a6ras7kUUpNho5TG8yeIJzeFXzwxGQSWp44
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2:
  - id: b0521e56-a0b2-40b6-bf47-ebc98751f9ba
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 190
ht-degree: 1%

---

# Web エディターでのファイル自動保存の設定 {#id199CC0J0M5Z}

ブラウザーベースのエディターの最も一般的な機能のひとつは、特定の期間が経過した後にデータを保存できることです。 AEM Guides Web Editorでは、指定した時間間隔でのトピックファイルとマップファイルの自動保存もサポートしています。 この機能がトリガーされると、トピックまたはマップの作業用コピーが保存されます。 トピックまたはマップの新しいバージョンは作成されません。 新しいバージョンを作成するには、Web エディターのツールバーにある「リビジョンを保存」アイコンをクリックする必要があります。

自動保存機能はデフォルトで有効になっていないため、設定ファイルを使用してこれを有効にする必要があります。

設定ファイルを作成するには、[設定の上書き](download-install-additional-config-override.md#)の手順を使用します。 設定ファイルで、ファイルの自動保存と自動保存の時間間隔を設定するために、次の\（property\）詳細を指定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.autosave` | ブール値\（true/false\）。<br> **デフォルト値**: false |
| `xmleditor.autosaveinterval` | 自動保存機能をトリガーするための時間間隔を秒単位で指定します。 |  |

**親トピック：**&#x200B;[&#x200B; Web エディターのカスタマイズ &#x200B;](conf-web-editor.md)
