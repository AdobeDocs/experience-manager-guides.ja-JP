---
title: AEM Guidesのインストールの確認
description: AEM Guidesのインストールを確認する方法を学ぶ
exl-id: 4e566c57-a522-4605-bc70-47155f20b429
feature: Installation
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '128'
ht-degree: 0%

---

# AEM Guidesのインストールの確認 {#id213BD030FBE}

AEM Guidesをインストールしたら、インストールが成功したかどうかを確認する必要があります。 インストールを確認するには、次の手順を実行します。

1. Cloud ServiceのDeveloper Consoleにアクセスします。

   Developer Consoleへのアクセスについて詳しくは、AEM ドキュメントの [Developer Console アクセス ](https://experienceleague.adobe.com/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/developer-console.html?lang=ja) を参照してください。

1. AEMで OSGi バンドルのリストにアクセスします。

   バンドルへのアクセスについて詳しくは、AEM ドキュメントの [ バンドル ](https://experienceleague.adobe.com/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/developer-console.html?lang=en#bundles) を参照してください。

1. バンドルのリストで fmdita を検索し、そのステータスを確認します。

   正常にデプロイされたバンドルのステータスが *アクティブ* になります。 バンドルのステータスがアクティブでない場合は、AEM ログを確認してインストールの問題のトラブルシューティングを行ってください。


**親トピック：**[ ダウンロードとインストール ](download-install.md)
