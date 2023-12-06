---
title: AEM Guides のアンインストール
description: AEMガイドのアンインストール方法の詳細
exl-id: 6c6b9692-cdec-426f-bc3b-f09d0091da39
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '148'
ht-degree: 0%

---

# AEM Guides のアンインストール {#id21BHG0C0SXA}

CRX パッケージマネージャーを使用してAEM Guides をアンインストールできます。 アンインストール中、リポジトリの内容は、パッケージのインストール直前に作成されたスナップショットに戻されます。

次の手順を実行して、AEM Guides をアンインストールします。

1. AEMインスタンスにログインし、CRX パッケージマネージャーに移動します。 パッケージマネージャーにアクセスするデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/crx/packmgr/index.jsp
   ```

1. com.adobe.fmdita パッケージを検索します。
1. パッケージをクリックして展開します。
1. クリック **その他** をクリックしてドロップダウンを開きます。
1. クリック **アンインストール** アンインストールが完了するまで待ちます。
1. このパッケージが不要になった場合は、 **削除** パッケージのアンインストール後。

## アンインストール後

アンインストール後に残りのファイルをクリーンアップするには、次の手順に従います。

1. 次を使用してスクリプトキャッシュをクリーンアップします。

   ```http
   http://<host>:<port>/system/console/scriptcache
   ```

1. キャッシュを無効にするには、次の手順を実行します。

   ```http
   http://<host>:<port>/libs/granite/ui/content/dumplibs.rebuild.html?back=true
   ```

1. クリック **キャッシュの無効化**.
1. ブラウザーのキャッシュをクリーンアップします。

**親トピック：**[&#x200B;ダウンロードとインストール](download-install.md)
