---
title: AEM Guidesを初めてダウンロードしてインストールする
description: AEM Guidesの初めてのダウンロードおよびインストール方法を説明します
exl-id: 830a4381-303c-419c-b87f-9563352a7eeb
feature: Introduction, Installation
role: Admin
level: Experienced
source-git-commit: dbcc625220c9ad1fa60942b2f43c38d3d6778541
workflow-type: tm+mt
source-wordcount: '245'
ht-degree: 0%

---

# AEM Guidesを初めてダウンロードしてインストールする {#id213BCL00KEV}

以下の手順を実行して、AEM Guidesをダウンロードし、コンピューターに初めてインストールします。

>[!IMPORTANT]
>
> AEM Guidesと共に Livefyre を使用する場合は、AEM Guidesをインストールする前に 3.0 より前のバージョンの Livefyre をインストールしてください。 Livefyre バージョン 3.0 以降を使用している場合、そのような制限はありません。

1. [Adobeソフトウェア配布ポータル ](https://experience.adobe.com/#/downloads/content/software-distribution/ja/aem.html) からAEM Guidesをダウンロードします。

   >[!NOTE]
   >
   >Experience Manager Guidesをインストールする前に、お使いのシステムが [ 技術要件 ](../install-guide/download-install-technical-requirements.md) を満たしていることを確認してください。

1. AEM インスタンスにログインし、CRX パッケージマネージャーに移動します。 パッケージマネージャーにアクセスするデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/crx/packmgr/index.jsp
   ```

   パッケージマネージャーは、ローカル AEM インストール上のパッケージを管理します。 パッケージマネージャーの操作について詳しくは、AEM ドキュメントの [ パッケージの操作方法 ](https://helpx.adobe.com/jp/experience-manager/6-5/sites/administering/using/package-manager.html) を参照してください。

   ![](assets/package-manager.png){width="650" align="left"}

1. AEM Guides パッケージをアップロードするには、「**パッケージをアップロード**」をクリックします。

1. パッケージをアップロード ダイアログで、手順 1 でダウンロードしたAEM Guides ファイルに移動して、「**OK**」をクリックします。

   パッケージがAEM インスタンスにアップロードされます。

1. パッケージをインストールするには、「**インストール**」をクリックします。

   ![](assets/install-package.png){width="650" align="left"}

1. パッケージをインストール ダイアログで、「**インストール**」をクリックします。

1. AEM Guidesの使用を開始するには、CRX パッケージマネージャーの左上隅にある「ホーム」ボタンをクリックし ![](assets/home-button.png) す。


>[!NOTE]
>
> 設定したAEM サーバーのすべてのインスタンスでインストール手順を実行します。

**親トピック：**[ ダウンロードとインストール ](download-install.md)
