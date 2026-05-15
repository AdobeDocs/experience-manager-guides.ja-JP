---
title: DITA-OTを使用してメタデータを出力に渡します
description: AEM GuidesでDITA-OT パブリッシングを使用して、メタデータを出力に渡す方法を説明します。
exl-id: 70ca32dc-56c3-45ee-b6b9-0efb8cc79ea1
feature: Publishing, Metadata Management
role: User
TQID: https://experienceleague.adobe.com/X840xTCOxbuqBpg8-YYbmFKOuF-KDHX-tGyj8rEG0hE
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
subfeature_v2:
  - id: f9dbea21-a714-40dd-bc90-080d8046c93f
  - id: fd6cc9e1-e5e5-494e-b7b1-a32f2d6cd7c9
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
  - id: ebde5b41-29c9-4f5e-9ef6-1197e85409e3
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 620
ht-degree: 0%

---

# DITA-OTを使用してメタデータを出力に渡します {#id21BJ00QD0XA}

メタデータは、出力に関する追加情報です。 Adobe Experience Manager Guidesでは、既存のメタデータを渡したり、カスタムメタデータタグを作成したりできます。 DITA-OT パブリッシングを使用して、メタデータをAEM、PDF、HTML5、EPUB、カスタム形式の出力に渡すことができます。

DITA-OTを使用してメタデータをOutputに渡すには、次の2つの方法があります。

- [マップコンソールの使用](#using-map-console)
- [マップダッシュボードの使用](#using-map-dashboard)

## マップコンソールの使用

DITA-OT パブリッシングを使用してメタデータを出力に渡すには、次の手順を実行します。

1. [&#x200B; メタデータをDITA-OTに渡すDITA マップファイルをマップコンソール &#x200B;](./open-files-map-console.md)で開きます。
1. メタデータフィールドを渡す出力プリセットを選択して開きます。 例えば、「PDF出力プリセット」を選択します。 **DITA-OT** オプションを使用して作成されていることを確認します。
1. **ファイルプロパティ** ドロップダウンから、DITA-OT パブリッシングに渡すメタデータを選択します。

   ![](images/custom-metadata-output-preset-new.png)

   プロパティ ドロップダウンには、カスタムプロパティとデフォルトのプロパティの両方が一覧表示されます。 例えば、上記のスクリーンショットでは、`dc:description`、`dc:language`、`dc:title`、`docstate`がデフォルトのプロパティです。

   >[!NOTE]
   >
   > これらのプロパティは、次の場所にあるmetadataList ファイルから選択されます：`/libs/fmdita/config/metadataList`。 デフォルトでは、このファイルには4つのプロパティ（`dc:description`、`dc:language`、`dc:title`、および`docstate`）が一覧表示されます。

   このファイルは`/apps/fmdita/config/metadataList`でオーバーレイできます。

   既に値を定義したカスタムプロパティを渡すには、[DITA-OT PDF出力でのAEM メタデータの使用](https://experienceleaguecommunities.adobe.com/t5/xml-documentation-discussions/use-aem-metadata-in-dita-ot-pdf-output/td-p/411880?profile.language=ja)を参照してください。

1. 選択したプロパティは、ドロップダウンの下に表示されます。

   ![](images/metadata-added-dropdown.png){width="300"}

1. 右上の&#x200B;**保存**&#x200B;を選択して、変更を保存します。
1. 「**出力を生成**」を選択します。

選択したメタデータプロパティは、DITA-OTを使用して生成された出力に渡されます。

>[!NOTE]
>
> Experience Manager Guidesの2502 リリース以降、DITA-OT コマンドラインを通じてルートマップのメタデータ引数を渡す機能は廃止されました。 ただし、中断を避けるために、機能を有効または無効にするための新しいプロパティが`Config.Manager`に追加されました。  詳細については、[出力生成設定の設定](../cs-install-guide/conf-output-generation.md#configure-the-dita-ot-command-line-arguement-field-on-the-dita-map-dashboard)を参照してください。

## マップダッシュボードの使用

**Assets UI**&#x200B;で作業している場合は、次の手順を実行して、DITA-OT パブリッシングを使用してメタデータを出力に渡します。

1. **Assets UI**&#x200B;で、メタデータをDITA-OTに渡すDITA マップファイルに移動して選択します。
1. メタデータフィールドを渡す出力プリセットを選択して編集します。 例えば、「PDF出力プリセット」を選択します。
1. 選択した出力プリセットで「**DITA-OT**」オプションを選択します。

   ![](images/custom-meta-data-output-preset.png)

1. 「プロパティ」ドロップダウンから、DITA-OT パブリッシングに渡すメタデータを選択します。

   プロパティ ドロップダウンには、カスタムプロパティとデフォルトのプロパティの両方が一覧表示されます。 例えば、上記のスクリーンショットでは、作成者はカスタムプロパティですが、`dc:description`、`dc:language`、`dc:title`、`docstate`はデフォルトのプロパティです。

   >[!NOTE]
   >
   > これらのプロパティは、次の場所にあるmetadataList ファイルから選択されます：`/libs/fmdita/config/metadataList`。 デフォルトでは、このファイルには4つのプロパティ（`dc:description`、`dc:language`、`dc:title`、および`docstate`）が一覧表示されます。

   このファイルは`/apps/fmdita/config/metadataList`でオーバーレイできます。

   既に値を定義したカスタムプロパティを渡すには、[DITA-OT PDF出力でのAEM メタデータの使用](https://experienceleaguecommunities.adobe.com/t5/xml-documentation-discussions/use-aem-metadata-in-dita-ot-pdf-output/td-p/411880?profile.language=ja)を参照してください。

1. **プロパティ** ドロップダウンから、必要なカスタムプロパティとデフォルトプロパティを選択します。 例えば、`author`、`dc:title`、`dc:description`を選択します。 これらは、ファイルを作成すると作成される標準の`metadata/properties`です。 選択したプロパティはドロップボックスの下に表示されます。

   ![](images/selected-metadata-properties.png){width="300"}

1. 左上の「**完了**」を選択して、変更を保存します。
1. 出力を生成します。

選択したメタデータプロパティは、DITA-OTを使用して生成された出力に渡されます。



**親トピック：**&#x200B;[&#x200B;出力生成](generate-output.md)
