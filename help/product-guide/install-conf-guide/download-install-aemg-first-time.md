---
title: AEM Guidesを初めてダウンロードしてインストールする
description: AEM Guidesを初めてダウンロードしてインストールする方法について説明します
feature: Introduction, Installation
role: Admin
level: Experienced
exl-id: 1c4a93c2-e477-4466-8390-3fda21ead9ff
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
feature_v2:
  - id: e88e74c7-6080-446a-8eb0-496f1ac5f7e6
    internal-label: Administration
subfeature_v2:
  - id: c5fd2af0-6cbb-4746-ab0d-40ecb093af12
    internal-label: Introduction
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
source-wordcount: '255'
ht-degree: 7%
---
# AEM Guidesを初めてダウンロードしてインストールする {#id213BCL00KEV}

AEM Guidesを初めてダウンロードしてインストールするには、次の手順を実行します。

>[!IMPORTANT]
>
> LivefyreとAEM Guidesを併用する場合は、AEM Guidesをインストールする前に、必ず3.0より前のバージョンのLivefyreをインストールしてください。 Livefyre バージョン 3.0以降を使用している場合、そのような制限はありません。

1. [AEM Guides Software Distribution Portal](https://experience.adobe.com/#/downloads/content/software-distribution/ja/aem.html)からAdobeをダウンロードします。

   >[!NOTE]
   >
   >Experience Manager Guidesをインストールする前に、お使いのシステムが[技術要件](../install-conf-guide/aemg-technical-requirements.md)を満たしていることを確認してください。

1. AEM インスタンスにログインし、CRX Package Managerに移動します。 パッケージマネージャーにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/crx/packmgr/index.jsp
   ```

   パッケージマネージャーは、ローカルのAEM インストール上のパッケージを管理します。 パッケージマネージャーの操作について詳しくは、AEM ドキュメントの[ パッケージの操作方法](https://helpx.adobe.com/jp/experience-manager/6-5/sites/administering/using/package-manager.html)を参照してください。

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
