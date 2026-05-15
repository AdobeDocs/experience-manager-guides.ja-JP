---
title: AEM Guidesのアンインストール
description: AEM Guidesのアンインストール方法を説明します
exl-id: 6c6b9692-cdec-426f-bc3b-f09d0091da39
feature: Installation
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/W6cpFBqAnriNXNYqP6r-GZm7tJhPWnlSI53q33iduvE
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
topic_v2:
  - id: cdd65e7e-8839-44a2-bc21-0e03623b5dd1
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 147
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
