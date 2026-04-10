---
title: ' [!DNL Experience Manager Guides] 環境に [!DNL Experience Manager as a Cloud Service] を追加する方法'
description: ' [!DNL AEM Guides] 環境に [!DNL AEM as a Cloud Service] を追加する方法について説明します'
exl-id: a1e020c2-360c-4d71-b5fd-8179d9ceacda
feature: Installation
role: Leader
hidefromtoc: true
source-git-commit: 55edd53d1dda7a68352e53b2e59eafd15b677fdd
workflow-type: tm+mt
source-wordcount: '155'
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
