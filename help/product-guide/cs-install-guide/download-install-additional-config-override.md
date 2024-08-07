---
title: 設定の上書き
description: 設定の上書き方法を学ぶ
exl-id: dc5f81f7-5b0a-4d12-a944-ba66b0239d5c
feature: Installation
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '93'
ht-degree: 0%

---

# 設定の上書き {#id216IFC003XA}

設定を更新する場合は、次の一般的なアプローチを使用する必要があります。

1. Cloud Managerの Git リポジトリにアクセスします。

1. 次の場所に新しい JSON ファイルを作成します。

   src/main/content/jcr\_root/apps/fmditaCustom/config/

1. 次の形式でファイルに名前を付けます。

   $\{PID\}.cfg.json

   ここで、PID は設定のプロセス ID です。

1. 次の形式を使用して、JSON ファイルにプロパティを追加します。

   ```
   {
      "aem.adminuname": "updatedUserjson",
      "valid.characters": "[-a-zA-Z0-9_@$]",
      "dita.serialization": true
   }
   ```

1. 変更をコミットし、Cloud Manager パイプラインを実行して、更新された設定をデプロイします。


**親トピック：**[ ダウンロードとインストール ](download-install.md)
