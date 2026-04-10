---
title: Cloud Serviceの設定の変更
description: 設定の上書きの方法を説明します
feature: Installation
role: Admin
level: Experienced
source-git-commit: 834959a6a0e22cd5d2b2c5d0e57ceb6d45c0c666
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

