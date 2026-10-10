---
title: Cloud Serviceの設定の変更
description: 設定の上書きの方法を説明します
feature: Installation
role: Admin
level: Experienced
exl-id: baf48913-ced7-444f-a125-661c0213d847
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
feature_v2:
  - id: e88e74c7-6080-446a-8eb0-496f1ac5f7e6
    internal-label: Administration
subfeature_v2:
  - id: e557051c-ff02-4ff8-9421-cf452af0edd5
    internal-label: Installation
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '91'
ht-degree: 0%
---
# Cloud Serviceの設定の変更 {#id216IFC003XA}

Experience Manager Guides as a Cloud Serviceで設定を更新する場合は、次の汎用的な方法を使用します。

1. Cloud ManagerのGit リポジトリにアクセスします。

1. 次の場所に新しいJSON ファイルを作成します。

   `src/main/content/jcr\_root/apps/fmditaCustom/config/`

1. 次の形式でファイルに名前を付けます。

   `$\{PID\}.cfg.json`

   ここでは、PIDは設定のプロセス IDです。

1. 次の形式を使用して、JSON ファイルにプロパティを追加します。

   ```
   {
      "aem.adminuname": "updatedUserjson",
      "valid.characters": "[-a-zA-Z0-9_@$]",
      "dita.serialization": true
   }
   ```

1. 変更を確定し、Cloud Manager パイプラインを実行して、更新された設定をデプロイします。
