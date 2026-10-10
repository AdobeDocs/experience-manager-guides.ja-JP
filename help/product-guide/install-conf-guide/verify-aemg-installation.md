---
title: AEM Guidesのインストールを確認する
description: AEM Guidesのインストールを確認する方法を説明します
feature: Installation
role: Admin
level: Experienced
exl-id: 19cded6f-6545-42af-8511-7c32cf4ddf2d
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
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
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '311'
ht-degree: 5%
---
# AEM Guidesのインストールを確認する {#id213BD030FBE}

AEM Guidesをインストールしたら、インストールが成功したかどうかを確認する必要があります。

次のタブには、Experience Manager Guidesの設定に基づいてAEM Guidesのインストールを確認する手順が表示されます。Cloud Serviceまたはオンプレミス。

>[!BEGINTABS]

>[!TAB Cloud Service]

インストールを確認するには、次の手順を実行します。

1. Cloud ServiceのDeveloper Consoleにアクセスします。

   Developer Consoleへのアクセスについて詳しくは、AEM ドキュメントの[Developer Console access](https://experienceleague.adobe.com/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/developer-console.html?lang=ja)を参照してください。

1. AEMのOSGi バンドルのリストにアクセスします。

   バンドルへのアクセスについて詳しくは、AEM ドキュメントの[ バンドル ](https://experienceleague.adobe.com/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/developer-console.html?lang=en#bundles)を参照してください。

1. バンドルのリストでfmditaを検索し、そのステータスを確認します。

   正常にデプロイされたバンドルのステータスに&#x200B;*Active*&#x200B;が表示されます。 いずれかのバンドルにアクティブステータスがない場合は、AEM ログを確認して、インストールに関する問題をトラブルシューティングします。

>[!TAB  オンプレミス ]

インストールを確認するには、次の手順を実行します。

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
> システムのパフォーマンスを向上させるために考慮できるパフォーマンス最適化の推奨事項はいくつかあります。 詳しくは、[ パフォーマンス最適化に関する推奨事項](perf-optimization-on-prem.md#)を参照してください。

>[!ENDTABS]
