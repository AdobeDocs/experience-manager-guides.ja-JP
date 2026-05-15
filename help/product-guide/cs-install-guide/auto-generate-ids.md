---
title: エレメント IDの自動生成
description: 要素IDを自動生成する方法を説明します
exl-id: a651db7f-228e-4de5-b569-3f1b4f86c418
feature: Web Editor Configuration
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/xnUjt33qyeXgxwIH3L2t08FShHaicDSVVvXQQNGytI4
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2:
  - id: b0521e56-a0b2-40b6-bf47-ebc98751f9ba
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 291
ht-degree: 1%

---

# エレメント IDの自動生成 {#id20CIL40016I}

AEM Guidesは、作成した新規ドキュメントのドキュメント IDを生成します。 例えば、DITA マップを作成する場合、`map.ditamap_random_digits`のようなIDがマップのIDに割り当てられます。 IDが自動的に生成され、割り当てられる要素を定義することもできます。

AEM Guidesでは、IDが自動生成される要素とIDのパターンを定義する必要がある、簡単な設定を提供します。 デフォルトでは、`section`、`table`、`ul`、`ol`などの一部の要素は、IDの自動生成用に設定されています。 このリストに他のエレメントを追加すると、これらのエレメントがドキュメントに挿入されるたびに、AEM Guidesが指定されたパターンに基づいてIDを生成して割り当てることができます

設定ファイルを作成するには、[設定の上書き](download-install-additional-config-override.md#)の手順を使用します。 設定ファイルで、自動生成された要素IDを設定するために次の\（property\）詳細を指定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.classes` | エレメントのコンマ区切りリストを指定します。<br> **デフォルト値**: `"topic, section, table, simpletable, fig, image, ul, ol"` |

自動生成IDのパターンを設定するには、次のプロパティを持つ設定ファイルを作成します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.pattern` | このフィールドのデフォルト値は`${elementName}_${id}`に設定されています。 `${elementName}`値は、要素の名前に置き換えられます。 `${id}`変数は、要素の連続番号を生成します。 例えば、段落要素に自動生成IDを割り当てると、トピックまたはドキュメントの最初の段落にp\_1などのIDが割り当てられ、次の段落にp\_2などが割り当てられます。 ただし、別の文書では、ID生成プロセスが再開されます。 つまり、別の文書では、p\_1やp\_2などのIDを段落要素に割り当てることができます。 **デフォルト値**: ``${elementName}_${id}`` |

**親トピック：**&#x200B;[&#x200B; Web エディターのカスタマイズ &#x200B;](conf-web-editor.md)
