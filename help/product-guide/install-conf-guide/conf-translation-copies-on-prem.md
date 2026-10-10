---
title: オンプレミスの翻訳ワークフローでの宛先コピーの初期化の設定
description: オンプレミスの翻訳ワークフローで、宛先コピーの初期化を有効または無効にする方法を説明します
feature: Configuration
role: Admin
level: Experienced
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '111'
ht-degree: 1%
---
# オンプレミスの翻訳ワークフローでの宛先コピーの初期化の設定

次の手順では、オンプレミス環境の翻訳ワークフローで宛先コピーの初期化を有効にする方法を説明します。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.config.ConfigManager** バンドルを検索して選択します。

1. 必要に応じて、ソースコンテンツ **（translation.workflow.propagate.source.content）を使用して宛先言語コピーを初期化する設定を有効または無効にします。**&#x200B;この設定は、従来の翻訳ワークフローが無効になっている場合にのみ適用されます。

1. 「**保存**」を選択します。
