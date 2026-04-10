---
title: オンプレミス サービスの出力を公開するための基本出力場所の設定
description: オンプレミス サービスの出力を公開するための基本出力場所の設定
feature: Output Generation
role: Admin
level: Experienced
exl-id: ae1d805a-7b79-4b76-8be2-a19c5552530c
hidefromtoc: true
source-git-commit: 3aadc59f5034828cf319992b7acb32d5a88eaf93
workflow-type: tm+mt
source-wordcount: '108'
ht-degree: 1%

---

# オンプレミス サービスの出力を公開するための基本出力場所の設定

次の手順を実行して、ベース出力の場所を設定します。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.config.ConfigManager* バンドルを検索して選択します。

1. プロパティ **Base Output Location**&#x200B;を更新して、公開後にPDFが保存されるAEM リポジトリのデフォルトパスを指定します。 さらに、無効なパスが入力されると、デフォルトのパス /content/dam/fmdita-outputsに自動的に戻ります。

1. 「**保存**」をクリックします。
