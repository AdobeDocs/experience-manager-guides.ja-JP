---
title: DITA-OT を使用してメタデータを出力に渡す
description: AEM Guidesでの DITA-OT 公開を使用してメタデータを出力に渡す方法を説明します。
exl-id: 70ca32dc-56c3-45ee-b6b9-0efb8cc79ea1
feature: Publishing, Metadata Management
role: User
source-git-commit: ac83f613d87547fc7f6a18070545e40ad4963616
workflow-type: tm+mt
source-wordcount: '571'
ht-degree: 0%

---

# DITA-OT を使用してメタデータを出力に渡す {#id21BJ00QD0XA}

メタデータは、出力に関する追加情報です。 Adobe Experience Manager Guidesでは、既存のメタデータを渡したり、カスタムメタデータタグを作成したりできます。 DITA-OT パブリッシングを使用して、AEM、PDF、HTML5、EPUB、およびカスタム形式の出力にメタデータを渡すことができます。

DITA-OT を使用して出力にメタデータを渡す方法は 2 つあります。

- [マップコンソールの使用](#using-map-console)
- [Map ダッシュボードの使用](#using-map-dashboard)

## マップコンソールの使用

次の手順を実行し、DITA-OT 発行を使用してメタデータを出力に渡します。

1. [ マップコンソールで DITA マップファイルを開きます ](./open-files-map-console.md) ここでメタデータを DITA-OT に渡します。
1. メタデータフィールドを渡す出力プリセットを選択して開きます。 例えば、「PDF出力プリセット」を選択します。 **DITA-OT** オプションを使用して作成してください。
1. **File properties** ドロップダウンから、DITA-OT パブリッシングに渡すメタデータを選択します。

   ![](images/custom-metadata-output-preset-new.png){align="left"}

   「プロパティ」ドロップダウンリストには、カスタムプロパティとデフォルトプロパティの両方が表示されます。 例えば、上記のスクリーンショットでは、`dc:description`、`dc:language`、`dc:title` および `docstate` がデフォルトのプロパティです。

   >[!NOTE]
   >
   > これらのプロパティは、次の場所にある metadataList ファイルから選択されます。`/libs/fmdita/config/metadataList` デフォルトでは、このファイルには 4 つのプロパティ（`dc:description`、`dc:language`、`dc:title`、`docstate`）がリストされています。

   このファイルは、`/apps/fmdita/config/metadataList` でオーバーレイできます。

   値を既に定義したカスタムプロパティを渡すには、[DITA-OT PDF出力でAEM メタデータを使用 ](https://experienceleaguecommunities.adobe.com/t5/xml-documentation-discussions/use-aem-metadata-in-dita-ot-pdf-output/td-p/411880) を参照してください。

1. 選択したプロパティがドロップダウンの下に一覧表示されます。

   ![](images/metadata-added-dropdown.png){width="300" align="left"}

1. 右上の **保存** を選択して、変更を保存します。
1. 「**出力を生成**」を選択します。

選択したメタデータプロパティは、DITA-OT を使用して生成された出力に渡されます。

>[!NOTE]
>
> 2502 リリースのExperience Manager Guidesでは、ルートマップメタデータ引数を DITA-OT コマンドラインを使用して渡す機能は非推奨（廃止予定）になりました。 ただし、中断を避けるために、機能を有効または無効にする新しいプロパティが `Config.Manager` に追加されました。  詳しくは、[ 出力生成設定の指定 ](../cs-install-guide/conf-output-generation.md#configure-the-dita-ot-command-line-arguement-field-on-the-dita-map-dashboard) を参照してください。

## Map ダッシュボードの使用

**Assets UI** を使用している場合は、次の手順を実行して、DITA-OT 公開を使用してメタデータを出力に渡します。

1. **0&rbrace;Assets UI&rbrace; で、メタデータを DITA-OT に渡す DITA マップファイルを探して選択します。**
1. メタデータフィールドを渡す出力プリセットを選択して編集します。 例えば、「PDF出力プリセット」を選択します。
1. 選択した出力プリセットで「**DITA-OT**」オプションを選択します。

   ![](images/custom-meta-data-output-preset.png){align="left"}

1. プロパティ ドロップダウンから、DITA-OT パブリッシングに渡すメタデータを選択します。

   「プロパティ」ドロップダウンリストには、カスタムプロパティとデフォルトプロパティの両方が表示されます。 例えば、上記のスクリーンショットでは、author はカスタムプロパティですが、`dc:description`、`dc:language`、`dc:title`、`docstate` はデフォルトのプロパティです。

   >[!NOTE]
   >
   > これらのプロパティは、次の場所にある metadataList ファイルから選択されます。`/libs/fmdita/config/metadataList` デフォルトでは、このファイルには 4 つのプロパティ（`dc:description`、`dc:language`、`dc:title`、`docstate`）がリストされています。

   このファイルは、`/apps/fmdita/config/metadataList` でオーバーレイできます。

   値を既に定義したカスタムプロパティを渡すには、[DITA-OT PDF出力でAEM メタデータを使用 ](https://experienceleaguecommunities.adobe.com/t5/xml-documentation-discussions/use-aem-metadata-in-dita-ot-pdf-output/td-p/411880) を参照してください。

1. **プロパティ** ドロップダウンから、必要なカスタムプロパティとデフォルトのプロパティを選択します。 例えば、「`author`」、「`dc:title`」、「`dc:description`」を選択します。 これらは、ファイルを作成すると作成される標準 `metadata/properties` です。 選択したプロパティがドロップボックスの下に表示されます。

   ![](images/selected-metadata-properties.png){width="300" align="left"}

1. 左上の **完了** を選択して、変更を保存します。
1. 出力を生成。

選択したメタデータプロパティは、DITA-OT を使用して生成された出力に渡されます。



**親トピック：**&#x200B;[ 出力生成 ](generate-output.md)
