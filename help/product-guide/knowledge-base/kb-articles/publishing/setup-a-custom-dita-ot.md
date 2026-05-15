---
title: カスタム DITA-OTを [!DNL AEM Guides]で設定
description: ' [!DNL Adobe Experience Manager Guides]でカスタム DITA-OTを設定する方法について説明します'
role: Admin
exl-id: f479c2cf-5b8b-4517-be97-81303468007a
feature: DITA-OT Configuration
TQID: https://experienceleague.adobe.com/EaU6rkZL-RBkkYDhKxHNkizIVSqNzEDd-TtFlJAmREw
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2:
  - id: b1ef4d86-3917-4b76-a0bc-4a4771f9b3b0
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 174
ht-degree: 0%

---

# AEM用に[!DNL AEM Guides]でカスタム DITA-OTを設定する

カスタム DITA-OTを追加する手順については、_インストールおよび設定ガイド_&#x200B;の「_カスタム DITA-OT プラグインを使用する_」の節を参照してください。

大まかな段階は次のとおりです。

+ 基本的なDITA-OTを入手する
   + [!DNL AEM Guides]からすぐに使えるDITA-OTのコピーを取得する場合は、パス `/etc/fmdita/dita_resources/DITA-OT.zip`からダウンロードします
   + 別のバージョンを取得する場合は、[dita-ot リポジトリ &#x200B;](https://www.dita-ot.org/download)からダウンロードできます
+ [新しいプラグイン &#x200B;](https://www.dita-ot.org/dev/topics/plugins-installing.html)の追加、既存のプラグインのカスタマイズなど、DITA-OTに変更を加えます（以下の関連リンクの節の例を参照）
+ `DITA-OT.zip`のアップロードを`/apps/<project-folder>/dita_resources`に受信しました（カスタムプロジェクトフォルダーの作成は推奨されるアプローチです）
+ **[!UICONTROL ツール]**/**[!UICONTROL ガイド]**/**[!UICONTROL DITA プロファイル]**&#x200B;を使用してDITA プロファイルを追加します（カスタム DITA-OTがアップロードされるDITA-OT パスを使用します。以下のスクリーンショットを参照してください）
  ![DITA プロファイル &#x200B;](assets/dita-profile.png)

>[!MORELIKETHIS]
>
>+ [DITA-OT プラグインサンプルのカスタマイズ &#x200B;](https://www.dita-ot.org/dev/topics/pdf-customization.html)
