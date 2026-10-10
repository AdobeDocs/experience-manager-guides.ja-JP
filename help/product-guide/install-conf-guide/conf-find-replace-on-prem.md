---
title: オンプレミス用の検索と置換（Source ビュー）の設定
description: オンプレミスの検索と置換（Source ビュー）を設定する方法について説明します
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
source-wordcount: '84'
ht-degree: 2%
---
# オンプレミス用の検索と置換（Source ビュー）の設定

次の手順では、オンプレミス環境で検索と置換（Source ビュー）を有効にする方法について説明します。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.config.ConfigManager** バンドルを検索して選択します。

1. 設定&#x200B;**マークアップ検索と置換を有効にする** （enable.markup.findreplace）を有効にします。

1. 「**保存**」を選択します。
