---
title: AEM Guidesのインストールを確認する
description: AEM Guidesのインストールを確認する方法を説明します
exl-id: 8e0afe18-5675-4c7e-b216-6de1a752bd01
feature: Installation
role: Admin
level: Experienced
TQID: 'https://experienceleague.adobe.com/sniTYknUIyJH0D1moIL3olj3AeBT08kLH52Gba27sqs'
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
feature_v2:
  - id: e88e74c7-6080-446a-8eb0-496f1ac5f7e6
    internal-label: Administration
subfeature_v2:
  - id: e557051c-ff02-4ff8-9421-cf452af0edd5
    internal-label: Installation
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
topic_v2:
  - id: cdd65e7e-8839-44a2-bc21-0e03623b5dd1
    internal-label: Optimization
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '164'
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
