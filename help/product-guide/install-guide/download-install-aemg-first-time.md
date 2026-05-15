---
title: AEM Guidesを初めてダウンロードしてインストールする
description: AEM Guidesを初めてダウンロードしてインストールする方法について説明します
exl-id: 830a4381-303c-419c-b87f-9563352a7eeb
feature: Introduction, Installation
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/9EMSF4ux-NFRH6AuxPWneqRyp7AEGwm8ZTjbCvAx-XQ
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 262
ht-degree: 7%

---

# AEM Guidesを初めてダウンロードしてインストールする {#id213BCL00KEV}

コンピューターにAEM Guidesを初めてダウンロードしてインストールするには、次の手順を実行します。

>[!IMPORTANT]
>
> LivefyreとAEM Guidesを併用する場合は、AEM Guidesをインストールする前に、必ず3.0より前のバージョンのLivefyreをインストールしてください。 Livefyre バージョン 3.0以降を使用している場合、そのような制限はありません。

1. [AEM Guides Software Distribution Portal](https://experience.adobe.com/#/downloads/content/software-distribution/ja/aem.html)からAdobeをダウンロードします。

   >[!NOTE]
   >
   >Experience Manager Guidesをインストールする前に、お使いのシステムが[技術要件](../install-guide/download-install-technical-requirements.md)を満たしていることを確認してください。

1. AEM インスタンスにログインし、CRX Package Managerに移動します。 パッケージマネージャーにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/crx/packmgr/index.jsp
   ```

   パッケージマネージャーは、ローカルのAEM インストール上のパッケージを管理します。 パッケージマネージャーの操作について詳しくは、AEM ドキュメントの[&#x200B; パッケージの操作方法](https://helpx.adobe.com/jp/experience-manager/6-5/sites/administering/using/package-manager.html)を参照してください。

   ![](assets/package-manager.png){width="650"}

1. AEM Guides パッケージをアップロードするには、**パッケージをアップロード**&#x200B;をクリックします。

1. アップロードパッケージダイアログで、手順1でダウンロードしたAEM Guides ファイルに移動し、**OK**&#x200B;をクリックします。

   パッケージがAEM インスタンスにアップロードされます。

1. パッケージをインストールするには、**インストール**&#x200B;をクリックします。

   ![](assets/install-package.png){width="650"}

1. パッケージをインストール ダイアログで、**Install**&#x200B;をクリックします。

1. AEM Guidesを使い始めるには、CRX Package Managerの左上隅にあるホームボタン ![](assets/home-button.png)をクリックします。


>[!NOTE]
>
> セットアップ内のすべてのAEM サーバーのインスタンスに対して、インストール手順を実行します。

**親トピック：**&#x200B;[&#x200B; ダウンロードしてインストール &#x200B;](download-install.md)
