---
title: 変数を使用して、宛先パス、サイト名またはファイル名のオプションを設定します
description: Learn how to use variables for setting the Destination Path, Site Name, or File Name options. Know out-of-the-box variables supported in AEM Guides.
feature: Publishing
role: User
hide: true
exl-id: 19d9121f-6b72-445c-a7d9-07f00026b654
source-git-commit: a70b3ce942b3e69445ad1d7ba6c8f7542e0ff176
workflow-type: tm+mt
source-wordcount: '393'
ht-degree: 0%

---

# 変数を使用して、宛先パス、サイト名またはファイル名のオプションを設定します


While generating outputs in AEM Site or PDFs, you can use variables to define the Destination Path, AEM Site Name, or PDF File Name options. You can use a single or a combination of variables to define these options.

The following table lists the variables that are supported out of the box:

| 変数 | Final Destination Path | 例 |
| --- | --- | --- |
| `${map_filename}` | Uses the DITA map files name to create the destination path. | **DITA map file name**:<br>`AEMGuides.ditamap`<br><br>**Destination Path** configured as:<br>`/content/output/sites/${map_filename}`<br><br>**Final output location**:<br>`/content/output/sites/aemGuides/AEMGuides.html` |
| `${map_title}` | Uses the DITA map title to create the destination path. | **DITA map file name**:<br>`AEMGuides.ditamap`<br><br>**DITA map Title**:<br>`AEMGuides`<br><br>**Destination Path** configured as:<br>`/content/output/sites/${map_title}`<br><br>**Final output location**:<br>`/content/output/sites/AEMGuides/AEMGuides.html` |
| `${preset_name}` | Uses the output preset name to create the destination path. | **Output Preset Name**:<br>`AEM Guides PDF Output`<br><br>**DITA map file name**:<br>`SampleDita.ditamap`<br><br>**Destination Path** configured as:<br>`/content/output/sites/${preset_name}`<br><br>**Final output location**:<br>`/content/output/sites/AEM Guides PDF Output/SampleDita.html` |
| `${language_code}` | Uses the language code where the map file is located to create the destination path. | **DITA map file name**:<br>`SampleDita.ditamap`<br><br>**DITA map file path**:<br>`/content/dam/projects/AEM-Guides/en/user-guide/`<br><br>**Destination Path** configured as:<br>`/content/output/sites/${language_code}`<br><br>**Final output location**:<br>`/content/output/sites/en/SampleDita.html` |
| `${map_parentpath}` | Uses the complete path of the map file to create the destination path.<br><br>**Note**:This variable cannot be used to specify the AEM Site Name or PDF File Name. | **DITA map file name**:<br>`SampleDita.ditamap`<br><br>**DITA map file path**:<br>`/content/dam/projects/AEM-Guides/en/user-guide`/<br><br>**Destination Path** configured as:<br>`/content/output/sites/${map_parentpath}`<br><br>**Final output location**:<br>`/content/output/sites/content/dam/projects/AEM-Guides/en/user-guide/SampleDita.html` |
| `${path_after_langfolder}` | Uses the path of the map file after the language folder to create the destination path.<br><br>**Note**: This variable cannot be used to specify the AEM Site Name or PDF File Name. | **DITA map file name**:<br>`SampleDita.ditamap`<br><br>**DITA map file path**:<br>`/content/dam/projects/AEM-Guides/en/user-guide/`<br><br>**Destination Path** configured as:<br>`/content/output/sites/${path\_after\_langfolder}`<br><br>**Final output location**:<br>`/content/output/sites/user-guide/SampleDita.html` |
| `${system_date}` | Uses the current server date to create the destination path. | **DITA map file name**: <br> `SampleDita.ditamap` <br><br> **DITA map file path:** <br> `/content/dam/projects/AEM-Guides/en/user-guide/` <br><br> **Destination Path** configured as: <br> `/content/output/sites/${system_date}` <br> <br> **最終的な出力場所：** <br> /`content/output/sites/08252023/SampleDita.html` |
| `${system_time}` | 現在のサーバー時間を使用して、宛先パスを作成します。 | **DITA マップファイル名：** <br>`SampleDita.ditamap` <br> <br> **DITA マップファイルのパス：** <br>`/content/dam/projects/AEM-Guides/en/user-guide/` <br><Br>**宛先パス**&#x200B;が<br>として設定されました `/content/output/sites/${system_time}`<br><br>**最終的な出力場所：**<br>`/content/output/sites/055612/SampleDita.html` |

さらに、DITA マップファイルまたはブックマップファイルに定義されているメタデータを変数として使用することもできます。 メタデータは、DITA マップまたはブックマップファイルの`/jcr:content/metadata` ノードにあります。 例えば、`/jcr:content/metadata` ノードで定義されているメタデータプロパティの1つは`dc:title`です。 `${dc:title}`を指定すると、タイトルの値が最終的な出力で使用されます。
**親トピック：**&#x200B;[&#x200B;出力生成](generate-output.md)
