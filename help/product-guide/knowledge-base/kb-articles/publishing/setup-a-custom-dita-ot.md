---
title: ' [!DNL AEM Guides] でカスタム DITA-OT を設定します。'
description: ' [!DNL Adobe Experience Manager Guides] でカスタム DITA-OT を設定する方法を説明します。'
role: Admin
exl-id: f479c2cf-5b8b-4517-be97-81303468007a
feature: DITA-OT Configuration
source-git-commit: be06612d832785a91a3b2a89b84e0c2438ba30f2
workflow-type: tm+mt
source-wordcount: '143'
ht-degree: 0%

---

# [!DNL AEM Guides] for AEMでのカスタム DITA-OT の設定

カスタム DITA-OT を追加する手順については、『インストールと設定ガイド _の節_ カスタム DITA-OT プラグインの使用 _を参照してください_。

大まかに言えば、手順は次のとおりです。

+ 基本的な DITA-OT の取得
   + 標準提供の DITA-OT のコピーを [!DNL AEM Guides] から取得する場合は、パス `/etc/fmdita/dita_resources/DITA-OT.zip` からダウンロードします
   + 別のバージョンを入手したい場合は、[dita-ot repo からダウンロードしてください &#x200B;](https://www.dita-ot.org/download)
+ [&#x200B; 新しいプラグインの追加 &#x200B;](https://www.dita-ot.org/dev/topics/plugins-installing.html)、既存のプラグインのカスタマイズなど、DITA-OT への変更を行います（以下の関連リンクの節の例を参照）。
+ 受信 `DITA-OT.zip` を `/apps/<project-folder>/dita_resources` にアップロードします（カスタムプロジェクトフォルダーの作成をお勧めします）
+ **[!UICONTROL Tools]** > **[!UICONTROL Guides]** > **[!UICONTROL DITA Profiles]** を使用して DITA プロファイルを追加します（カスタム DITA-OT がアップロードされる DITA-OT パスを使用します。以下のスクリーンショットを参照）。
  ![DITA プロファイル &#x200B;](assets/dita-profile.png)

>[!MORELIKETHIS]
>
>+ [DITA-OT プラグインサンプルのカスタマイズ &#x200B;](https://www.dita-ot.org/dev/topics/pdf-customization.html)
