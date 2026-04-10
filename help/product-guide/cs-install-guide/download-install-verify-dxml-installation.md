---
title: AEM Guidesのインストールを確認する
description: AEM Guidesのインストールを確認する方法を説明します
exl-id: 4e566c57-a522-4605-bc70-47155f20b429
feature: Installation
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 564ee1731be2378744ffd2ed54a2fd423901a0b3
workflow-type: tm+mt
source-wordcount: '128'
ht-degree: 0%

---

# AEM Guidesのインストールを確認する {#id213BD030FBE}

AEM Guidesをインストールしたら、インストールが成功したかどうかを確認する必要があります。 インストールを確認するには、次の手順を実行します。

1. Cloud ServiceのDeveloper Consoleにアクセスします。

   Developer Consoleへのアクセスについて詳しくは、AEM ドキュメントの[Developer Console access](https://experienceleague.adobe.com/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/developer-console.html?lang=ja)を参照してください。

1. AEMのOSGi バンドルのリストにアクセスします。

   バンドルへのアクセスについて詳しくは、AEM ドキュメントの[ バンドル ](https://experienceleague.adobe.com/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/developer-console.html?lang=en#bundles)を参照してください。

1. バンドルのリストでfmditaを検索し、そのステータスを確認します。

   正常にデプロイされたバンドルのステータスに&#x200B;*Active*&#x200B;が表示されます。 いずれかのバンドルにアクティブステータスがない場合は、AEM ログを確認して、インストールに関する問題をトラブルシューティングします。


**親トピック：**[ ダウンロードしてインストール ](download-install.md)
