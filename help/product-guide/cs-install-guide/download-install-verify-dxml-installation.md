---
title: AEM Guide のインストールの確認
description: AEM Guide のインストールを確認する方法を説明します。
exl-id: 4e566c57-a522-4605-bc70-47155f20b429
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '128'
ht-degree: 0%

---

# AEM Guide のインストールの確認 {#id213BD030FBE}

AEMガイドをインストールしたら、インストールが成功したかどうかを確認する必要があります。 次の手順を実行して、インストールを検証します。

1. Cloud Serviceの開発者コンソールにアクセスします。

   開発者コンソールへのアクセスについて詳しくは、 [開発者コンソールへのアクセス](https://experienceleague.adobe.com/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/developer-console.html?lang=ja) (AEMドキュメント )。

1. AEMの OSGi バンドルのリストにアクセスします。

   バンドルへのアクセスについて詳しくは、 [バンドル](https://experienceleague.adobe.com/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/developer-console.html?lang=en#bundles) (AEMドキュメント )。

1. バンドルのリストで fmdita を検索し、そのステータスを確認します。

   ステータスが表示されます *アクティブ* バンドルが正常にデプロイされた場合。 いずれかのバンドルのステータスが「Active」でない場合は、AEMログを調べて、インストールに関する問題をトラブルシューティングします。


**親トピック：**[&#x200B;ダウンロードとインストール](download-install.md)
