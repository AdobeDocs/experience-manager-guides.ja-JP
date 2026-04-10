---
title: クエリのLimitReads数を設定します
description: クエリのLimitReads数の設定方法を説明します
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '101'
ht-degree: 1%

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

**親トピック：**[ Web エディターのカスタマイズ ](customize-overview.md)
