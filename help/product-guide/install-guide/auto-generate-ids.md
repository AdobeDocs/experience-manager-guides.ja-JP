---
title: 要素 ID の自動生成
description: 要素 ID を自動生成する方法を学ぶ
exl-id: 8d09ab89-4be5-49f1-9831-9f01c92dc472
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '337'
ht-degree: 0%

---

# 要素 ID の自動生成 {#id20CIL40016I}

AEM Guidesは、作成する新規ドキュメントのドキュメント ID を生成します。 たとえば、DITA マップを作成すると、`map.ditamap_random_digits` のような ID がマップの ID に割り当てられます。 また、ID が自動的に生成され、割り当てられる要素を定義できます。

AEM Guidesは、ID が自動生成される要素と ID のパターンを定義する必要がある、設定を簡単に提供します。 デフォルトでは、`section`、`table`、`ul`、`ol` などの一部の要素は、ID の自動生成用に設定されています。 このリストに他のエレメントを加えることで、これらのエレメントが文書に挿入されるたびに、AEM Guidesは指定されたパターンに基づいて ID を生成して割り当てます

要素に自動生成された ID を設定するには、次の手順を実行します。

1. Adobe Experience Manager Web コンソール設定ページを開きます。

   設定ページにアクセスするためのデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** バンドルを検索してクリックします。

1. 「*XmlEditorConfig*」設定の「**要素タグの ID を自動生成**」フィールドに、1 つ以上の要素を指定します。

   >[!NOTE]
   >
   > エレメントタグは、`body`、`title`、`codeblock` などの DITA エレメント名です。 複数の要素を指定するには、要素名をコンマで区切ります。

1. 「ID 生成のパタ **ン**」フィールドで、ID を生成するパターンを指定します。

   このフィールドのデフォルト値は `${elementName}_${id}` に設定されています。 `${elementName}` の値は要素の名前に置き換えられます。 `${id}` 変数は、要素の連続番号を生成します。 例えば、段落要素に自動生成された ID を割り当てると、トピックまたはドキュメント内の最初の段落に p\_1 のような ID が割り当てられ、次の段落に p\_2 などが割り当てられます。 ただし、別のドキュメントでは、ID 生成プロセスが再開します。 つまり、別のドキュメントで、p\_1 や p\_2 などの ID を段落要素に割り当てることができます。

   指定したパターンでドキュメントに ID が既に含まれている場合、自動生成プロセスは、それらの ID を新しい要素に割り当てません。

1. 「**保存**」をクリックします。


**親トピック：**&#x200B;[ Web エディタのカスタマイズ ](conf-web-editor.md)
