---
title: AEM Guidesのインストールを確認する
description: AEM Guidesのインストールを確認する方法を説明します
exl-id: 4e566c57-a522-4605-bc70-47155f20b429
feature: Installation
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/WDiYcOCdCuaJCrGYCupOS0TEk5TV-1q6Zi5z-S7KWLA
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 162
ht-degree: 10%

---

# AEM Guidesのインストールを確認する {#id213BD030FBE}

AEM Guidesをインストールしたら、インストールが成功したかどうかを確認する必要があります。 インストールを確認するには、次の手順を実行します。

1. Cloud ServiceのDeveloper Consoleにアクセスします。

   Developer Consoleへのアクセスについて詳しくは、AEM ドキュメントの[Developer Console access](https://experienceleague.adobe.com/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/developer-console.html?lang=ja)を参照してください。

1. AEMのOSGi バンドルのリストにアクセスします。

   バンドルへのアクセスについて詳しくは、AEM ドキュメントの[&#x200B; バンドル &#x200B;](https://experienceleague.adobe.com/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/developer-console.html?lang=en#bundles)を参照してください。

1. バンドルのリストでfmditaを検索し、そのステータスを確認します。

   正常にデプロイされたバンドルのステータスに&#x200B;*Active*&#x200B;が表示されます。 いずれかのバンドルにアクティブステータスがない場合は、AEM ログを確認して、インストールに関する問題をトラブルシューティングします。


**親トピック：**&#x200B;[&#x200B; ダウンロードしてインストール &#x200B;](download-install.md)
