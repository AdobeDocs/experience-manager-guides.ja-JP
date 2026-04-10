---
title: AEM Guidesのインストールを確認する
description: AEM Guidesのインストールを確認する方法を説明します
exl-id: 8e0afe18-5675-4c7e-b216-6de1a752bd01
feature: Installation
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 3aadc59f5034828cf319992b7acb32d5a88eaf93
workflow-type: tm+mt
source-wordcount: '165'
ht-degree: 0%

---

# AEM Guidesのインストールを確認する {#id213BD030FBE}

AEM Guidesをインストールしたら、インストールが成功したかどうかを確認する必要があります。 次の手順を実行して、インストールプロセスを確認します。

1. AEM インスタンスにログインし、AEM Web コンソールバンドルページに移動します。 バンドルページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/bundles
   ```

   バンドルのリストが表示されます。

1. フィルターテキストボックスにfmditaを入力してバンドルのリストをフィルタリングし、**Enter**&#x200B;を押します。

   バンドルのリストがフィルタリングされ、AEM Guidesによってインストールされたバンドルが表示されます。 インストールが正常に完了した場合、インストールされたすべてのバンドルには、**アクティブ**&#x200B;の&#x200B;**ステータス**&#x200B;が含まれます。

   いずれかのバンドルに&#x200B;**Active** ステータスがない場合は、AEM ログを確認して、インストールに関する問題をトラブルシューティングします。


>[!IMPORTANT]
>
> システムのパフォーマンスを向上させるために考慮できるパフォーマンス最適化の推奨事項はいくつかあります。 詳しくは、[&#x200B; パフォーマンス最適化に関する推奨事項](download-install-recommend-perf-optimiz.md#)を参照してください。

**親トピック：**&#x200B;[&#x200B; ダウンロードしてインストール &#x200B;](download-install.md)
