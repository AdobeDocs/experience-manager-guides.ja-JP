---
title: エレメント IDの自動生成
description: 要素IDを自動生成する方法を説明します
exl-id: 8d09ab89-4be5-49f1-9831-9f01c92dc472
feature: Web Editor Configuration
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 3aadc59f5034828cf319992b7acb32d5a88eaf93
workflow-type: tm+mt
source-wordcount: '337'
ht-degree: 0%

---

# エレメント IDの自動生成 {#id20CIL40016I}

AEM Guidesは、作成した新規ドキュメントのドキュメント IDを生成します。 例えば、DITA マップを作成する場合、`map.ditamap_random_digits`のようなIDがマップのIDに割り当てられます。 IDが自動的に生成され、割り当てられる要素を定義することもできます。

AEM Guidesでは、IDが自動生成される要素とIDのパターンを定義する必要がある、簡単な設定を提供します。 デフォルトでは、`section`、`table`、`ul`、`ol`などの一部の要素は、IDの自動生成用に設定されています。 このリストに他のエレメントを追加すると、これらのエレメントがドキュメントに挿入されるたびに、AEM Guidesが指定されたパターンに基づいてIDを生成して割り当てることができます

自動生成されたIDを持つように要素を設定するには、次の手順を実行します。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** バンドルを検索してクリックします。

1. *XmlEditorConfig*&#x200B;設定で、**要素タグのIDを自動生成** フィールドに1つ以上の要素を指定します。

   >[!NOTE]
   >
   > エレメントタグは、`body`、`title`、`codeblock`などのDITA エレメント名です。 複数のエレメントを指定するには、エレメント名をコンマで区切ります。

1. IDを生成するための&#x200B;**パターン** フィールドで、IDを生成するためのパターンを指定します。

   このフィールドのデフォルト値は`${elementName}_${id}`に設定されています。 `${elementName}`値は、要素の名前に置き換えられます。 `${id}`変数は、要素の連続番号を生成します。 例えば、段落要素に自動生成IDを割り当てると、トピックまたはドキュメントの最初の段落にp\_1などのIDが割り当てられ、次の段落にp\_2などが割り当てられます。 ただし、別の文書では、ID生成プロセスが再開されます。 つまり、別の文書では、p\_1やp\_2などのIDを段落要素に割り当てることができます。

   文書に指定したパターンのIDが既に含まれている場合、自動生成プロセスでは、これらのIDが新しい要素に割り当てられません。

1. 「**保存**」をクリックします。


**親トピック：**[ Web エディターのカスタマイズ ](conf-web-editor.md)
