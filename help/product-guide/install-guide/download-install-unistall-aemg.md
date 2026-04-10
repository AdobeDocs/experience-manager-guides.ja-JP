---
title: AEM Guidesのアンインストール
description: AEM Guidesのアンインストール方法を説明します
exl-id: 6c6b9692-cdec-426f-bc3b-f09d0091da39
feature: Installation
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 3aadc59f5034828cf319992b7acb32d5a88eaf93
workflow-type: tm+mt
source-wordcount: '148'
ht-degree: 0%

---

# AEM Guidesのアンインストール {#id21BHG0C0SXA}

CRX Package Managerを使用してAEM Guidesをアンインストールできます。 アンインストール中、リポジトリの内容は、パッケージのインストール直前に作成されたスナップショットに戻されます。

AEM Guidesをアンインストールするには、次の手順を実行します。

1. AEM インスタンスにログインし、CRX Package Managerに移動します。 パッケージマネージャーにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/crx/packmgr/index.jsp
   ```

1. com.adobe.fmdita パッケージを検索します。
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

**親トピック：**&#x200B;[&#x200B; ダウンロードしてインストール &#x200B;](download-install.md)
