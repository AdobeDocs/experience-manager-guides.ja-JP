---
title: クエリの LimitReads 数の設定
description: クエリの LimitReads 数を設定する方法を説明します
exl-id: f6010cc3-5fec-4ec7-adf7-5ad3c9bd8879
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '99'
ht-degree: 2%

---

# クエリの LimitReads 数の設定 {#id231RC0HL0ID}

クエリで一度に読み取れるノードの数を増やすには、次の手順を実行します。

1. Adobe Experience Manager web コンソール JMX ページを開きます。

   設定ページにアクセスするためのデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/system/console/jmx
   ```

1. **QueryEngineSettings** を検索してクリックします。

1. **LimitReads** 属性の属性値を変更します。

1. 「**保存**」をクリックします。


この属性値を増やすと、より大きな DITA マップのレポートを生成できます。

**親トピック：**&#x200B;[&#x200B; Web エディタのカスタマイズ &#x200B;](conf-web-editor.md)
