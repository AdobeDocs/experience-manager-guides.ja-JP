---
title: 変数を使用して、宛先パス、サイトパス、サイト名またはファイル名のオプションを設定します
description: 変数を使用して、宛先パス、サイト名、またはファイル名オプションを設定する方法を説明します。 AEM Guidesでサポートされている、すぐに使える変数を確認できます。
exl-id: 3396c971-6332-45b5-b2ef-b07f0abf97f7
feature: Publishing
role: User
TQID: https://experienceleague.adobe.com/JiQKZ28KLI-TI5cqYdpKLyW79uOzlR2VV3zqZPFoVWc
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
subfeature_v2:
  - id: fd6cc9e1-e5e5-494e-b7b1-a32f2d6cd7c9
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 399
ht-degree: 0%

---

# 変数を使用して、宛先パス、サイトパス、サイト名またはファイル名のオプションを設定します


AEM SitesまたはPDFで出力を生成する際に、変数を使用して、宛先パス、サイトパス、AEM サイト名、またはPDF ファイル名のオプションを定義できます。 単一または複数の変数を組み合わせて、これらのオプションを定義できます。

次の表に、標準でサポートされている変数を示します。

| 変数 | 最終宛先パス | 例 |
| --- | --- | --- |
| `${map_filename}` | DITA マップファイル名を使用して、宛先パスを作成します。 | **DITA マップファイル名**:<br>`AEMGuides.ditamap`<br><br>**宛先パス**&#x200B;が&#x200B;<br>`/content/output/sites/${map_filename}`<br><br>**最終出力場所**:<br>`/content/output/sites/aemGuides/AEMGuides.html`に設定されました |
| `${map_title}` | DITA マップタイトルを使用して、宛先パスを作成します。 | **DITA マップファイル名**:<br>`AEMGuides.ditamap`<br><br>**DITA マップタイトル**:<br>`AEMGuides`<br><br>**宛先パス**&#x200B;が&#x200B;<br>`/content/output/sites/${map_title}`<br><br>**最終出力場所**:<br>`/content/output/sites/AEMGuides/AEMGuides.html`に設定されました |
| `${preset_name}` | 出力プリセット名を使用して、宛先パスを作成します。 | **出力プリセット名**:<br>`AEM Guides PDF Output`<br><br>**DITA マップファイル名**:<br>`SampleDita.ditamap`<br><br>**宛先パス**&#x200B;が&#x200B;<br>`/content/output/sites/${preset_name}`<br><br>**最終出力場所**:<br>`/content/output/sites/AEM Guides PDF Output/SampleDita.html`に設定されました |
| `${language_code}` | マップファイルが配置されている言語コードを使用して、宛先パスを作成します。 | **DITA マップファイル名**:<br>`SampleDita.ditamap`<br><br>**DITA マップファイルのパス**:<br>`/content/dam/projects/AEM-Guides/en/user-guide/`<br><br>**宛先パス**&#x200B;が&#x200B;<br>`/content/output/sites/${language_code}`<br><br>**最終出力場所**:<br>`/content/output/sites/en/SampleDita.html`に設定されました |
| `${map_parentpath}` | マップファイルの完全なパスを使用して、宛先パスを作成します。<br><br>**注**:This&#x200B;変数は、AEM サイト名またはPDF ファイル名を指定するために使用することはできません。 | **DITA マップファイル名**:<br>`SampleDita.ditamap`<br><br>**DITA マップファイルのパス**:<br>`/content/dam/projects/AEM-Guides/en/user-guide`/<br><br>**宛先パス**&#x200B;が&#x200B;<br>`/content/output/sites/${map_parentpath}`<br><br>**最終出力場所**:<br>`/content/output/sites/content/dam/projects/AEM-Guides/en/user-guide/SampleDita.html`として設定されました |
| `${path_after_langfolder}` | 言語フォルダーの後のマップファイルのパスを使用して、保存先のパスを作成します。<br><br>**注意**：この変数を使用して、AEM サイト名またはPDF ファイル名を指定することはできません。 | **DITA マップファイル名**:<br>`SampleDita.ditamap`<br><br>**DITA マップファイルのパス**:<br>`/content/dam/projects/AEM-Guides/en/user-guide/`<br><br>**宛先パス**&#x200B;が&#x200B;<br>`/content/output/sites/${path\_after\_langfolder}`<br><br>**最終出力場所**:<br>`/content/output/sites/user-guide/SampleDita.html`に設定されました |
| `${system_date}` | 現在のサーバー日付を使用して、宛先パスを作成します。 | **DITA マップファイル名**: <br> `SampleDita.ditamap` <br><br> **DITA マップファイルのパス：** <br> `/content/dam/projects/AEM-Guides/en/user-guide/` <br><br> **宛先パス**&#x200B;が<br>として設定されました `/content/output/sites/${system_date}` <br> <br> **最終的な出力場所：** <br> /`content/output/sites/08252023/SampleDita.html` |
| `${system_time}` | 現在のサーバー時間を使用して、宛先パスを作成します。 | **DITA マップファイル名：** <br>`SampleDita.ditamap` <br> <br> **DITA マップファイルのパス：** <br>`/content/dam/projects/AEM-Guides/en/user-guide/` <br><Br>**宛先パス**&#x200B;が<br>として設定されました `/content/output/sites/${system_time}`<br><br>**最終的な出力場所：**<br>`/content/output/sites/055612/SampleDita.html` |

さらに、DITA マップファイルまたはブックマップファイルに定義されているメタデータを変数として使用することもできます。 メタデータは、DITA マップまたはブックマップファイルの`/jcr:content/metadata` ノードにあります。 例えば、`/jcr:content/metadata` ノードで定義されているメタデータプロパティの1つは`dc:title`です。 `${dc:title}`を指定すると、タイトルの値が最終的な出力で使用されます。
**親トピック：**&#x200B;[&#x200B;出力生成](generate-output.md)
