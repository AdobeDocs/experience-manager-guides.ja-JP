---
title: デプロイとDispatcherの設定
description: Experience Manager Guides as a Cloud ServiceのデプロイメントとDispatcher設定について説明します
feature: Introduction, Installation
role: Admin
level: Experienced
source-git-commit: 834959a6a0e22cd5d2b2c5d0e57ceb6d45c0c666
workflow-type: tm+mt
source-wordcount: '308'
ht-degree: 4%

---

# デプロイとDispatcherの設定

この記事では、Experience Manager Guides as a Cloud Serviceのデプロイ方法とDispatcherの設定方法について説明します。

## Experience Manager Guides as a Cloud Serviceのデプロイ

まず、Cloud Managerを介してExperience Manager Guidesをデプロイします。 モジュールをデプロイするには、[AEM Guides as a Cloud Service デプロイメント ](../release-info/deploy-xml-on-aemaacs.md)に記載されている手順に従います。

>[!NOTE]
>
> 2024.2.0 リリース以降、Experience Manager GuidesはExperience Manager as a Cloud Serviceの自動アドオンとしてのみ使用できます。 2023年12月以前のリリースを使用している場合は、GitHub リポジトリからAdobe Experience Manager Guidesをダウンロードしてインストールできます。 Experience Manager Guidesに手動デプロイメントを使用する場合は、プログラムでExperience Manager Guidesを有効にする前に、Cloud manage Git コードベースの`<module>dox.installer</module> from file dox/pom.xml`行を削除します。

Experience Manager Guides モジュールをデプロイするには、次の手順を実行します。

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


## Dispatcher を設定します

Dispatcher は、Adobe Experience Manager のキャッシュやロードバランシングを管理するツールです。詳しくは、[ クラウド内のDispatcher](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/implementing/content-delivery/disp-overview.html?lang=en)を参照してください。

1. AMSからCloud ServiceへのDispatcher設定の移行については、[AMSからAEM as a Cloud ServiceへのDispatcher設定の移行](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/implementing/content-delivery/ams-aem.html?lang=en)を参照してください。
1. Dispatcherの設定方法について詳しくは、[Dispatcherの設定](https://experienceleague.adobe.com/docs/experience-manager-dispatcher/using/configuring/dispatcher-configuration.html?lang=ja)を参照してください。

>[!NOTE]
>
> AEM as a Cloud Serviceは、オーサーインスタンスのDispatcherをサポートしていません。
