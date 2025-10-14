---
title: AEM Guidesのアンインストール
description: AEM Guidesのアンインストール方法
exl-id: 6c6b9692-cdec-426f-bc3b-f09d0091da39
feature: Installation
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '148'
ht-degree: 0%

---

# AEM Guidesのアンインストール {#id21BHG0C0SXA}

AEM Guides パッケージマネージャーを使用して、CRXをアンインストールできます。 アンインストール中、リポジトリのコンテンツは、パッケージのインストールの直前に作成されたスナップショットに戻ります。

AEM Guidesをアンインストールするには、次の手順を実行します。

1. AEM インスタンスにログインし、CRX パッケージマネージャーに移動します。 パッケージマネージャーにアクセスするデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/crx/packmgr/index.jsp
   ```

1. com.adobe.fmdita パッケージを検索します。
1. パッケージをクリックして展開します。
1. **詳細** をクリックしてドロップダウンを開きます。
1. **アンインストール** をクリックして、アンインストールが完了するまで待ちます。
1. このパッケージが不要になった場合は、パッケージをアンインストールした後で **削除** をクリックします。

## アンインストール後

アンインストール後に残ったファイルをクリーンアップするには、次の手順に従います。

1. 次を使用してスクリプトキャッシュをクリーンアップします。

   ```http
   http://<host>:<port>/system/console/scriptcache
   ```

1. キャッシュは、次を使用して無効にできます。

   ```http
   http://<host>:<port>/libs/granite/ui/content/dumplibs.rebuild.html?back=true
   ```

1. **キャッシュを無効にする** をクリックします。
1. ブラウザーのキャッシュをクリーンアップします。

**親トピック：**&#x200B;[&#x200B; ダウンロードとインストール &#x200B;](download-install.md)
