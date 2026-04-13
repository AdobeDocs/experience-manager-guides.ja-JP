---
title: AEM Guidesのアンインストール
description: AEM Guidesのアンインストール方法を説明します
feature: Installation
role: Admin
level: Experienced
exl-id: 84b248da-af7b-4811-a184-4ab17838faaa
source-git-commit: 2749c0df3bd5640c9491dce3ab6c96f707625969
workflow-type: tm+mt
source-wordcount: '148'
ht-degree: 0%

---

# オンプレミス用AEM Guidesのアンインストール{#id21BHG0C0SXA}

オンプレミス用AEM Guidesは、CRX パッケージマネージャーを使用してアンインストールできます。 アンインストール中、リポジトリの内容は、パッケージのインストール直前に作成されたスナップショットに戻されます。

オンプレミス用AEM Guidesをアンインストールするには、次の手順を実行します。

1. AEM インスタンスにログインし、CRX Package Managerに移動します。 パッケージマネージャーにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/crx/packmgr/index.jsp
   ```

1. `com.adobe.fmdita` パッケージを検索します。
1. パッケージをクリックして展開します。
1. **詳細**&#x200B;をクリックしてドロップダウンを開きます。
1. 「**アンインストール**」をクリックし、アンインストールが完了するのを待ちます。
1. このパッケージが不要になった場合は、パッケージをアンインストールした後、**削除**&#x200B;をクリックします。

## アンインストール後

アンインストール後に残りのファイルをクリーンアップするには、次の手順を実行します。

1. 次を使用してスクリプトキャッシュをクリーニングします。

   ```http
   http://<host>:<port>/system/console/scriptcache
   ```

1. キャッシュを無効にするには、次のコマンドを使用します。

   ```http
   http://<host>:<port>/libs/granite/ui/content/dumplibs.rebuild.html?back=true
   ```

1. 「**キャッシュを無効にする**」をクリックします。
1. ブラウザーのキャッシュをクリーニングします。
