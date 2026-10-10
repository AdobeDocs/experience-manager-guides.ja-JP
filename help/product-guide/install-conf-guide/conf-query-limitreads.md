---
title: クエリのLimitReads数を設定します
description: クエリのLimitReads数の設定方法を説明します
feature: Web Editor Configuration
role: Admin
level: Experienced
exl-id: 53748636-f3d1-4b3b-a772-2730b78741cb
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
feature_v2:
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
    internal-label: Configuration
subfeature_v2:
  - id: b0521e56-a0b2-40b6-bf47-ebc98751f9ba
    internal-label: Web Editor configuration
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '100'
ht-degree: 2%
---
# オンプレミス用クエリのLimitReads数を設定します

クエリが一度に読み取れるノードの数を増やすには、次の手順を実行します。

1. Adobe Experience Manager Web コンソール JMX ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/jmx
   ```

1. **QueryEngineSettings**&#x200B;を検索してクリックします。

1. **LimitReads**&#x200B;属性の属性値を変更します。

1. 「**保存**」をクリックします。


この属性値を増やすと、より大きなDITA マップのレポートを生成するのに役立ちます。

**親トピック：**&#x200B;[&#x200B; エディターのカスタマイズ &#x200B;](customize-overview.md)
