---
title: 要素 ID の自動生成
description: 要素 ID を自動生成する方法を学ぶ
exl-id: a651db7f-228e-4de5-b569-3f1b4f86c418
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '284'
ht-degree: 1%

---

# 要素 ID の自動生成 {#id20CIL40016I}

AEM Guidesは、作成する新規ドキュメントのドキュメント ID を生成します。 たとえば、DITA マップを作成すると、`map.ditamap_random_digits` のような ID がマップの ID に割り当てられます。 また、ID が自動的に生成され、割り当てられる要素を定義できます。

AEM Guidesは、ID が自動生成される要素と ID のパターンを定義する必要がある、設定を簡単に提供します。 デフォルトでは、`section`、`table`、`ul`、`ol` などの一部の要素は、ID の自動生成用に設定されています。 このリストに他のエレメントを加えることで、これらのエレメントが文書に挿入されるたびに、AEM Guidesは指定されたパターンに基づいて ID を生成して割り当てます

[&#x200B; 設定の上書き &#x200B;](download-install-additional-config-override.md#) の手順に従って、設定ファイルを作成します。 自動生成された要素 ID を設定するには、設定ファイルで、次の\（property\）の詳細を指定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.classes` | 要素のコンマ区切りリストを指定します。<br> **デフォルト値**: `"topic, section, table, simpletable, fig, image, ul, ol"` |

自動生成された ID のパターンを設定するには、次のプロパティを含む設定ファイルを作成します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.pattern` | このフィールドのデフォルト値は `${elementName}_${id}` に設定されています。 `${elementName}` の値は要素の名前に置き換えられます。 `${id}` 変数は、要素の連続番号を生成します。 例えば、段落要素に自動生成された ID を割り当てると、トピックまたはドキュメント内の最初の段落に p\_1 のような ID が割り当てられ、次の段落に p\_2 などが割り当てられます。 ただし、別のドキュメントでは、ID 生成プロセスが再開します。 つまり、別のドキュメントで、p\_1 や p\_2 などの ID を段落要素に割り当てることができます。 **デフォルト値**: ``${elementName}_${id}`` |

**親トピック：**&#x200B;[&#x200B; Web エディタのカスタマイズ &#x200B;](conf-web-editor.md)
