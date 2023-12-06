---
title: AEM Guide のインストールの確認
description: AEM Guide のインストールを確認する方法を説明します。
exl-id: 8e0afe18-5675-4c7e-b216-6de1a752bd01
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '165'
ht-degree: 0%

---

# AEM Guide のインストールの確認 {#id213BD030FBE}

AEMガイドをインストールしたら、インストールが成功したかどうかを確認する必要があります。 次の手順を実行して、インストールプロセスを検証します。

1. AEMインスタンスにログインし、AEM Web Console Bundles ページに移動します。 バンドルページにアクセスするデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/system/console/bundles
   ```

   バンドルのリストが表示されます。

1. バンドルのリストをフィルターするには、フィルターテキストボックスに「 fmdita 」と入力し、 **入力**.

   バンドルのリストがフィルタリングされ、AEM Guides によってインストールされたバンドルが表示されます。 インストールが成功した場合、インストールされたすべてのバンドルには **ステータス** / **アクティブ**.

   いずれかのバンドルに **アクティブ** 「 」ステータスで、「 AEM Logs 」を確認して、インストールに関する問題のトラブルシューティングをおこないます。


>[!IMPORTANT]
>
> システムパフォーマンスの向上を検討できる、パフォーマンス最適化に関する推奨事項が多数あります。 詳しくは、 [Recommendations （パフォーマンス最適化）](download-install-recommend-perf-optimiz.md#) 」を参照してください。

**親トピック：**[&#x200B;ダウンロードとインストール](download-install.md)
