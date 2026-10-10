---
title: '[!DNL Experience Manager as a Cloud Service]環境に[!DNL Experience Manager Guides]を追加する方法'
description: '[!DNL AEM as a Cloud Service]環境に[!DNL AEM Guides]を追加する方法について説明します'
exl-id: a1e020c2-360c-4d71-b5fd-8179d9ceacda
feature: Installation
role: Leader
TQID: 'https://experienceleague.adobe.com/lb5mjLR6M3pdFlsdQpwGXotEhbPeyetJ4zVwKV-J-Yg'
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
feature_v2:
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
    internal-label: Configuration
  - id: e88e74c7-6080-446a-8eb0-496f1ac5f7e6
    internal-label: Administration
subfeature_v2:
  - id: e557051c-ff02-4ff8-9421-cf452af0edd5
    internal-label: Installation
role_v2:
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
    internal-label: Leader
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '157'
ht-degree: 0%
---
# [!DNL Adobe Experience Manager Guides] as a Cloud Service デプロイメント

[!DNL Experience Manager Guides]を[!DNL Experience Manager as a Cloud Service]環境に追加する方法について説明します。


>[!NOTE]
>
> 2024.2.0 リリース以降、Experience Manager GuidesはExperience Manager as a Cloud Serviceの自動アドオンとしてのみ使用できます。 Experience Manager Guidesの手動デプロイメントを使用する場合は、プログラムでExperience Manager Guidesを有効にする前に、Cloud manage Git コードベースの`<module>dox.installer</module> from file dox/pom.xml`行を削除してください。

1. [!UICONTROL Cloud Manager]にログインします。

1. [!DNL Experience Manager Guides]を設定するプログラムを編集します。

1. 「**[!UICONTROL ソリューションとアドオン]**」タブに切り替えます。

1. **[!UICONTROL ソリューションとアドオン]**&#x200B;の表で、**[!UICONTROL Assets]**&#x200B;をクリックします。

1. **[!UICONTROL ガイド]**&#x200B;を選択し、**[!UICONTROL 保存]**&#x200B;を選択します。

Experience Manager Guides ソリューションの自動プロビジョニング用にプログラムを正常に設定しました。

![Experience Manager Guides ソリューションの設定](assets/addon-configuration.png)

>[!NOTE]
>
>統合プログラムの任意の環境に[!DNL Experience Manager Guides]をインストールするには、環境に関連付けられたパイプラインを実行する必要があります。 [!DNL Experience Manager Guides]をインストールするために、CM Git コードベースに追加の設定は必要ありません。
