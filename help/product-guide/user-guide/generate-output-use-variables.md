---
title: 宛先パス、サイト名、ファイル名の各オプションを設定する変数を使用します
description: 変数を使用して、宛先パス、サイト名、ファイル名の各オプションを設定する方法を説明します。 AEM Guidesでサポートされている標準変数の把握。
exl-id: 3396c971-6332-45b5-b2ef-b07f0abf97f7
feature: Publishing
role: User
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '409'
ht-degree: 0%

---

# 宛先パス、サイト名、ファイル名の各オプションを設定する変数を使用します


AEM サイトまたはPDFで出力を生成する際には、変数を使用して、「Destination Path」、「AEM Site Name」、または「Destination File Name」PDFを定義できます。 これらのオプションは、変数の 1 つまたは組み合わせを使用して定義できます。

次の表に、標準でサポートされている変数を示します。

| 変数 | 最終的な宛先パス | 例 |
| --- | --- | --- |
| `${map_filename}` | DITA マップファイル名を使用して、コピー先のパスを作成します。 | **DITA マップ ファイル名**:<br>`AEMGuides.ditamap`<br><br>**出力先パス**:<br>`/content/output/sites/${map_filename}`<br><br>**最終出力先**:<br>`/content/output/sites/aemGuides/AEMGuides.html` |
| `${map_title}` | DITA マップのタイトルを使用して、コピー先のパスを作成します。 | **DITA マップ ファイル名**:<br>`AEMGuides.ditamap`<br><br>**DITA マップのタイトル**:<br>`AEMGuides`<br><br>**出力先パス**:<br>`/content/output/sites/${map_title}`<br><br>**最終出力先**:<br>`/content/output/sites/AEMGuides/AEMGuides.html` |
| `${preset_name}` | 出力プリセット名を使用して宛先パスを作成します。 | **出力プリセット名**:<br>`AEM Guides PDF Output`<br><br>**DITA マップ ファイル名**:<br>`SampleDita.ditamap`<br><br>**出力先パス** 次のように設定：<br>`/content/output/sites/${preset_name}`<br><br>**最終的な出力先**:<br>`/content/output/sites/AEM Guides PDF Output/SampleDita.html` |
| `${language_code}` | は、マップファイルがある言語コードを使用して宛先パスを作成します。 | **DITA マップ ファイル名**:<br>`SampleDita.ditamap`<br><br>**DITA マップ ファイルのパス**:<br>`/content/dam/projects/AEM-Guides/en/user-guide/`<br><br>**出力先のパス**:<br>`/content/output/sites/${language_code}`<br><br>**最終出力先**:<br>`/content/output/sites/en/SampleDita.html` |
| `${map_parentpath}` | は、マップ ファイルの完全パスを使用して宛先パスを作成します。<br><br>**注意**：この変数は、AEM サイト名またはPDFファイル名を指定するために使用することはできません。 | **DITA マップ ファイル名**:<br>`SampleDita.ditamap`<br><br>**DITA マップ ファイルのパス**:<br>`/content/dam/projects/AEM-Guides/en/user-guide`/<br><br>**出力先のパス**:<br>`/content/output/sites/${map_parentpath}`<br><br>**最終出力先**:<br>`/content/output/sites/content/dam/projects/AEM-Guides/en/user-guide/SampleDita.html` |
| `${path_after_langfolder}` | は、言語フォルダの後のマップ ファイルのパスを使用して、宛先パスを作成します。<br><br>**注意**：この変数は、AEM サイト名またはPDFファイル名を指定するために使用することはできません。 | **DITA マップ ファイル名**:<br>`SampleDita.ditamap`<br><br>**DITA マップ ファイルのパス**:<br>`/content/dam/projects/AEM-Guides/en/user-guide/`<br><br>**出力先のパス**:<br>`/content/output/sites/${path\_after\_langfolder}`<br><br>**最終出力先**:<br>`/content/output/sites/user-guide/SampleDita.html` |
| `${system_date}` | 現在のサーバー日付を使用して宛先パスを作成します。 | **DITA マップファイル名**: <br> `SampleDita.ditamap` <br><br> **DITA マップ ファイルのパス：** <br> `/content/dam/projects/AEM-Guides/en/user-guide/` <br><br> **宛先パス** は <br> のように設定されています `/content/output/sites/${system_date}` <br> <br> **最終的な出力先：** <br> /`content/output/sites/08252023/SampleDita.html` |
| `${system_time}` | 宛先パスの作成に現在のサーバー時間を使用します。 | **DITA マップファイル名：** <br>`SampleDita.ditamap` <br> <br> **DITA マップファイルパス：** <br>`/content/dam/projects/AEM-Guides/en/user-guide/` <br><Br>**宛先パス** が <br> として設定されている `/content/output/sites/${system_time}`<br><br>**最終的な出力先：**<br>`/content/output/sites/055612/SampleDita.html` |

さらに、DITA マップまたはブックマップファイル用に定義したメタデータを変数として使用することもできます。 メタデータは、DITA マップまたはブックマップファイルの `/jcr:content/metadata` ノードにあります。 例えば、`/jcr:content/metadata` ノードに定義されているメタデータプロパティの 1 つは `dc:title` です。 `${dc:title}` を指定でき、タイトル値が最終的な出力で使用されます。
**親トピック：**&#x200B;[ 出力生成 ](generate-output.md)
