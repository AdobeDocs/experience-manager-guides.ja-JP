---
title: 追加方法 [!DNL Experience Manager Guides] を [!DNL Experience Manager as a Cloud Service] 環境
description: 追加方法を学ぶ [!DNL AEM Guides] を [!DNL AEM as a Cloud Service] 環境
exl-id: a1e020c2-360c-4d71-b5fd-8179d9ceacda
feature: Installation
role: Leader
source-git-commit: 1b25f1df67fa2442ab79830dc2ac5a6eabd0394c
workflow-type: tm+mt
source-wordcount: '155'
ht-degree: 0%

---

# [!DNL Adobe Experience Manager Guides] as a Cloud Service展開

追加方法を学ぶ [!DNL Experience Manager Guides] を [!DNL Experience Manager as a Cloud Service] 環境。


>[!NOTE]
>
> 2024.2.0 リリースより、Experience Managerガイドは、Experience Manageras a Cloud Serviceの自動アドオンとしてのみ使用できます。 Experience Managerガイドに手動で配置を使用する場合は、行を削除してください。 `<module>dox.installer</module> from file dox/pom.xml` クラウドで git コードベースを管理してから、プログラムのExperience Managerガイドを有効にします。

1. ログイン先 [!UICONTROL Cloud Manager].

1. 設定するプログラムを編集します [!DNL Experience Manager Guides].

1. 切り替え先 **[!UICONTROL ソリューションとアドオン]** タブをクリックします。

1. Adobe Analytics の **[!UICONTROL ソリューションとアドオン]** テーブル、クリック **[!UICONTROL Assets]**.

1. 選択 **[!UICONTROL ガイド]** を選択し、 **[!UICONTROL 保存]**.

プログラムを設定し、Experience Managerガイドソリューションの自動プロビジョニングを行いました。

![Experience Managerガイドソリューションの設定](assets/addon-configuration.png)

>[!NOTE]
>
>をインストールするには [!DNL Experience Manager Guides] 統合プログラムの下の任意の環境で、環境に関連付けられたパイプラインを実行する必要があります。 をインストールするために CM Git コードベースで追加の設定は必要ありません。 [!DNL Experience Manager Guides].
