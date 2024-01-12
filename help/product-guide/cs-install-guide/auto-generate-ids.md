---
title: 要素 ID を自動生成
description: 要素 ID を自動生成する方法を説明します。
exl-id: a651db7f-228e-4de5-b569-3f1b4f86c418
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '284'
ht-degree: 1%

---

# 要素 ID を自動生成 {#id20CIL40016I}

AEMガイドは、作成する新しいドキュメントのドキュメント ID を生成します。 例えば、DITA マップを作成する際に、 `map.ditamap_random_digits` はマップの ID に割り当てられます。 また、ID が自動的に生成され、割り当てられる要素を定義することもできます。

AEMガイドでは簡単な設定を提供します。この設定では、ID が自動生成される要素と、ID のパターンを定義する必要があります。 デフォルトでは、 `section`, `table`, `ul`, `ol`に設定され、ID を自動生成するために使用されます。 このリストに他の要素を追加して、ドキュメントにこれらの要素が挿入されるたびに、AEMガイドは指定されたパターンに基づいて ID を生成し割り当てることができます

に示す手順を使用します。 [設定の上書き](download-install-additional-config-override.md#) をクリックして、設定ファイルを作成します。 設定ファイルで、自動生成される要素 ID を設定する次の\（プロパティ\）の詳細を指定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.classes` | 要素のコンマ区切りリストを指定します。 <br> **デフォルト値**: `"topic, section, table, simpletable, fig, image, ul, ol"` |

自動生成 ID のパターンを設定するには、次のプロパティを持つ設定ファイルを作成します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.pattern` | このフィールドのデフォルト値はに設定されています。 `${elementName}_${id}`. The `${elementName}` の値は、要素の名前に置き換えられます。 The `${id}` 変数は、要素の連続した番号を生成します。 例えば、自動生成された ID を持つ段落要素を割り当てた場合、トピックまたはドキュメントの最初の段落には p\_1 のような ID が、次の段落には p\_2 のような ID が付けられます。 ただし、別のドキュメントでは、ID 生成プロセスが再起動します。 つまり、別のドキュメントでは、p\_1 や p\_2 などの ID を段落要素に割り当てることができます。 **デフォルト値**: ``${elementName}_${id}`` |

**親トピック：**[ Web エディタのカスタマイズ](conf-web-editor.md)
