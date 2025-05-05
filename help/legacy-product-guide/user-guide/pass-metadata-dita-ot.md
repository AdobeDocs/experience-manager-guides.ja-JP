---
title: DITA-OT を使用してメタデータを出力に渡す
description: AEM Guidesでの DITA-OT 公開を使用してメタデータを出力に渡す方法を説明します。
feature: Publishing, Metadata Management
role: User
hide: true
exl-id: 55d70c6d-feb0-43f7-9f18-6d1ccdd1e728
source-git-commit: ea597cd14469f21e197c700542b9be7c373aef14
workflow-type: tm+mt
source-wordcount: '305'
ht-degree: 0%

---

# DITA-OT を使用してメタデータを出力に渡す {#id21BJ00QD0XA}

メタデータは、出力に関する追加情報です。 AEM Guidesでは、既存のメタデータを渡したり、カスタムメタデータタグを作成したりできます。 DITA-OT パブリッシングを使用して、AEM、PDF、HTML5、EPUB、およびカスタム形式の出力にメタデータを渡すことができます。

次の手順を実行し、DITA-OT 発行を使用してメタデータを出力に渡します。

1. **0&rbrace;Assets UI&rbrace; で、メタデータを DITA-OT に渡す DITA マップファイルに移動してクリックします。**
1. メタデータフィールドを渡す出力プリセットを選択して編集します。 例えば、「PDF出力プリセット」を選択します。
1. 選択した出力プリセットの「使用して生成 &lt;output\>」オプションで「**DITA-OT**」を選択します。

   ![](images/custom-meta-data-output-preset.png){width="800" align="left"}

1. プロパティ ドロップダウンから、DITA-OT パブリッシングに渡すメタデータを選択します。

   「プロパティ」ドロップダウンリストには、カスタムプロパティとデフォルトプロパティの両方が表示されます。 例えば、上記のスクリーンショットでは、author はカスタムプロパティですが、`dc:description`、`dc:language`、`dc:title`、`docstate` はデフォルトのプロパティです。

   >[!NOTE]
   >
   > これらのプロパティは、次の場所にある metadataList ファイルから選択されます。`/libs/fmdita/config/metadataList` デフォルトでは、このファイルには 4 つのプロパティ（`dc:description`、`dc:language`、`dc:title`、`docstate`）がリストされています。

   このファイルは、`/apps/fmdita/config/metadataList` でオーバーレイできます。

   値を既に定義したカスタムプロパティを渡すには、[DITA-OT PDF出力でのAEM メタデータの使用 ](https://experienceleaguecommunities.adobe.com/t5/xml-documentation-discussions/use-aem-metadata-in-dita-ot-pdf-output/td-p/411880?profile.language=ja) を参照してください。

1. **プロパティ** ドロップダウンから、必要なカスタムプロパティとデフォルトのプロパティを選択します。 例えば、「`author`」、「`dc:title`」、「`dc:description`」を選択します。 これらは、ファイルを作成すると作成される標準 `metadata/properties` です。 選択したプロパティがドロップボックスの下に表示されます。

   ![](images/selected-metadata-properties.png){width="300" align="left"}

1. 左上の **完了** をクリックして、変更を保存します。
1. 出力を生成。

選択したメタデータプロパティは、DITA-OT を使用して生成された出力に渡されます。

**親トピック：**&#x200B;[ 出力生成 ](generate-output.md)
