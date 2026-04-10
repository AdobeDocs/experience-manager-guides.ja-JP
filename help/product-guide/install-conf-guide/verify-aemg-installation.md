---
title: AEM Guidesのインストールを確認する
description: AEM Guidesのインストールを確認する方法を説明します
feature: Installation
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '274'
ht-degree: 0%

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


