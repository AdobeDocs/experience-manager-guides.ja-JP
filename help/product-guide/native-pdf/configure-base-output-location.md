---
title: オンプレミスサービスの出力を公開するためのベース出力場所の設定
description: オンプレミスサービスの出力を公開するためのベース出力場所の設定
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: ab6f1f09de2ef758d7f05ba0a49194ac9f387dea
workflow-type: tm+mt
source-wordcount: '108'
ht-degree: 1%

---

# オンプレミスサービスの出力を公開するためのベース出力場所の設定

ベースの出力場所を設定するには、次の手順を実行します。

1. Adobe Experience Manager Web コンソール設定ページを開きます。

   設定ページにアクセスするためのデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.config.ConfigManager* バンドルを検索して選択します。

1. プロパティ **ベース出力場所** を更新して、公開後にPDFが保存されるAEM リポジトリ内のデフォルトパスを指定します。 さらに、無効なパスを入力すると、自動的にデフォルトパス /content/dam/fmdita-outputs に戻ります。

1. 「**保存**」をクリックします。


