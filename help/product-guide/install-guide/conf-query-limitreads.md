---
title: クエリのLimitReads数を設定します
description: クエリのLimitReads数の設定方法を説明します
exl-id: f6010cc3-5fec-4ec7-adf7-5ad3c9bd8879
feature: Web Editor Configuration
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 3aadc59f5034828cf319992b7acb32d5a88eaf93
workflow-type: tm+mt
source-wordcount: '99'
ht-degree: 2%

---

# クエリのLimitReads数を設定します {#id231RC0HL0ID}

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

**親トピック：**[ Web エディターのカスタマイズ ](conf-web-editor.md)
