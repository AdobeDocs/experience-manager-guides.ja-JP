---
title: 新しいエディターを設定
description: 新規エディターを有効または無効にする方法を説明します
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
source-wordcount: '79'
ht-degree: 2%
---
# オンプレミス用に新しいエディターを設定

>[!IMPORTANT]
>
> ランタイム環境でシステム設定を手動で適用する代わりに、コードを使用してシステム設定をデプロイします。

次の手順では、オンプレミス環境で新しいエディターを有効にする方法について説明します。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.config.ConfigManager** バンドルを検索して選択します。

1. 設定&#x200B;**エディターを有効にする2.0** （`enable.markup.editor`）を有効にします。

1. 「**保存**」を選択します。

