---
title: AEM Guidesのインストールの確認
description: AEM Guidesのインストールを確認する方法を学ぶ
exl-id: 8e0afe18-5675-4c7e-b216-6de1a752bd01
feature: Installation
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '165'
ht-degree: 0%

---

# AEM Guidesのインストールの確認 {#id213BD030FBE}

AEM Guidesをインストールしたら、インストールが成功したかどうかを確認する必要があります。 インストールプロセスを確認するには、次の手順を実行します。

1. AEM インスタンスにログインし、AEM web コンソールのバンドル ページに移動します。 バンドルページにアクセスするデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/system/console/bundles
   ```

   バンドルのリストが表示されます。

1. フィルタリングテキストボックスに fmdita と入力し、**Enter** キーを押して、バンドルのリストをフィルタリングします。

   バンドルのリストは、AEM Guidesによってインストールされたバンドルを表示するようにフィルタリングされます。 インストールに成功した場合、インストールされているすべてのバンドルの **ステータス** は **アクティブ** になります。

   いずれかのバンドルのステータスが **アクティブ** でない場合は、AEM ログを確認してインストールの問題のトラブルシューティングを行ってください。


>[!IMPORTANT]
>
> システムパフォーマンスを向上させるために検討できるパフォーマンス最適化の推奨事項が多数あります。 詳しくは、[ パフォーマンスの最適化のRecommendations](download-install-recommend-perf-optimiz.md#) を参照してください。

**親トピック：**[ ダウンロードとインストール ](download-install.md)
