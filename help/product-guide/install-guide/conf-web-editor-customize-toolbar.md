---
title: ツールバーをカスタマイズ
description: ツールバーのカスタマイズ方法を学ぶ
exl-id: 14a82c7e-5c07-43a8-bd9e-b221d80f6d05
feature: Web Editor Configuration
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 3aadc59f5034828cf319992b7acb32d5a88eaf93
workflow-type: tm+mt
source-wordcount: '951'
ht-degree: 0%

---

# ツールバーをカスタマイズ {#id172FB00L0V6}

デフォルトでは、Web エディターには、任意のDITA エディターで必要な最も一般的な編集機能が付属しています。 テキストリスト \（番号付きまたは箇条書き\）、相互参照、コンテンツ参照、表、段落、文字の書式設定などのエレメントの挿入などの機能をエディターで利用できます。 これらの基本要素に加えて、Web エディターをカスタマイズして、オーサリング環境で使用される要素を挿入できます。

>[!NOTE]
>
> 古いUIから新しいAEM Guides UI （AEM Guidesの2502および5.0 リリースから適用可能）に移行する場合、`ui_config`への更新を、より柔軟でモジュール化されたUI設定に変換する必要があります。 このフレームワークにより、editor_toolbarやその他のターゲットウィジェットに必要に応じてシームレスに変更を適用できます。 詳しくは、[UI構成の変換](https://experienceleague.adobe.com/en/docs/experience-manager-guides-learn/videos/advanced-user-guide/conver-ui-config)の概要を参照してください。

Web エディターのツールバーをカスタマイズするには、次の2つの方法があります。

- ツールバーに新しい機能を追加

- ツールバーから既存の機能を削除


## ツールバーでの機能の追加

Web エディターに機能を追加するには、主に2つの作業が必要です。*ui\_config.json* ファイルに機能のアイコンを追加し、JavaScriptでバックグラウンド機能を追加します。

**ツールバーにアイコンを追加**

Web エディターのツールバーに機能を追加するには、次の手順を実行します。

1. AEMにログインし、CRXDE Lite モードを開きます。

1. 次の場所にあるデフォルトの設定ファイルに移動します。

   `/libs/fmdita/clientlibs/clientlibs/xmleditor/ui_config.json`

1. デフォルト設定ファイルのコピーを次の場所に作成します。

   `/apps/fmdita/xmleditor/ui_config.json`

1. に移動し、`ui_config.json` ノードの`apps` ファイルを開いて編集します。

1. `ui_config.json` ファイルで、「ツールバー」セクションに新しい機能の定義を追加します。 通常、新しいツールバーボタングループを作成し、1つ以上のツールバーボタンを追加できます。 または、既存のツールバーグループ内に新しいツールバーボタンを追加することもできます。 新しいツールバーグループを作成するには、次の詳細が必要です。

   - **type:**`blockGroup`を`type`値として指定します。 この値は、1つ以上のツールバーグループを含むブロックグループを作成していることを示します。

   - **extraclass:** クラスの名前またはスペースで区切られたクラス。

   - **項目：** ツールバーのすべてのグループの定義を指定します。 各グループには、1つまたは複数のツールバーアイコンを含めることができます。 ツールバーグループ内のアイコンを定義するには、`type`内で`items`属性を再度定義し、その値を`buttonGroup`に設定する必要があります。 `extraclass` プロパティで1つ以上のクラス名を指定してください。 `label` プロパティで機能名を指定します。 `ui_config.json` ファイルの次のスニペットは、メインのツールバーブロックの定義を示し、その後に`buttonGroup`定義を示しています。

     ```json
     "toolbar": {    
       "type": "blockGroup",    
       "extraclass": 
       "toolbar operations",    
         "items": [      
           {        
             "type": "buttonGroup",        
             "extraclass": "left-controls",        
             "label": "Left Controls",        
             "items": [
     ```

     `items` コレクション内で、1つ以上のツールバーアイコンの定義を指定する必要があります。
ツールバーアイコンを追加するには、次のプロパティを定義する必要があります。

   - **type:** `button`を`type`値として指定します。 この値は、ツールバーボタンを追加していることを示します。

   - **アイコン：** ツールバーで使用するCoral アイコンの名前を指定します。

   - **バリアント：** `quiet`を`variant`値として指定します。

   - **title:** アイコンのツールヒントを指定します。

   - **クリック時：** JavaScript ファイルで機能に定義されているコマンド名を指定します。 コマンドに入力パラメーターが必要な場合は、コマンド名を次のように指定します。

     ```JavaScript
     "on-click": {"name": "AUTHOR_INSERT_ELEMENT", "args": "simpletable"}
     ```

   - **表示または非表示：** `show` プロパティを定義する場合は、アイコンが表示されるモードを指定します。 使用可能な値は、`@isAuthorMode`、`@isSourceMode`、`@isPreviewMode`、`true` \（すべてのモードで表示\）または`false` \（すべてのモードで非表示\）です。

   `show`の代わりに、`hide` プロパティを定義することもできます。 指定されたモードでアイコンが表示されない唯一の違いは、`show` プロパティの値と同じです。

1. *clientlib* フォルダーを作成し、JavaScriptをこのフォルダーに追加します。

1. *clientlib* フォルダーのcategories プロパティを更新するには、*apps.fmdita.xml\_editor.page\_overrides*&#x200B;の値を割り当てます。

1. *ui\_config.json* ファイルを保存し、Web エディターを再読み込みします。


**JavaScript コードサンプル**

この節では、カスタム機能の追加を開始するのに役立つJavaScript コードの2つの例を示します。 次の例は、ユーザーがツールバーの「バージョンを表示」アイコンをクリックした場合のAEM Guidesのバージョン番号を示しています。

次のコードをJavaScript ファイルに追加します。

```JavaScript
/**
* This file contains an example to show AEM Guides version 
* number when a user clicks on the Show Version icon in the toolbar. 
* Step 1. Create a clientlib folder and add save a file with your *JavaScript code into this folder. A code sample is shared below.
* Step 2: Update the categories property of the clientlib folder by *assigning it the value of 
* "apps.fmdita.xml_editor.page_overrides".
* Step 3: Add the feature in the ui_config.json file as shown after the *sample code. Save the ui_config.json file and reload the Web Editor
 */

(function (window) {
  "use strict";

  window.addEventListener('DOMContentLoaded', function () {
    fmxml.ready(function () {
      fmxml.eventHandler.subscribe({
        key: 'user.alert',
        next: function next() {
          alert("AEM Guides version x.x");
        }
      });
    });
  });
})(window);
```

ui\_config.json ファイルに次のように機能を追加します。

```json
 {
      "type": "button",
      "icon": "alert",
      "title": "About AEM Guides",
      "variant": "quiet",

  "show": "true",
      "on-click": "user.alert"
  } 
```

次の例は、ドキュメントのアクティブなファイルの状態を「レビュー中」に変更する方法を示しています。

```JavaScript
/**
* This file contains an example to set the document state of an active *open documen to "In-Review". 
* Step 1. Create a clientlib folder and add save a file with your *JavaScript code into this folder. A code sample is shared below.
* Step 2: Update the categories property of the clientlib folder by *assigning it the value of 
* "apps.fmdita.xml_editor.page_overrides".
* Step 3: Add the feature in the ui_config.json file as shown after the *sample code. Save the ui_config.json file and reload the Web Editor
 */

(function (window) {
  "use strict";

  //Wait for the page has been completely loaded 

  window.addEventListener('DOMContentLoaded', function () {

    //Wait for the xml editor to start
    fmxml.ready(function () {

      //Subscribe to 'user.docstate.to.in-review' event
      fmxml.eventHandler.subscribe({
        key: 'user.docstate.to.in-review',
        next: function next() {
          var docstate = "In-Review"; // New docstate name
          var filePath = fmxml.curEditor.filePath; 
// Get the file path of active open file
          if (filePath) {
            //Call API to change the doc state
            $.ajax({
              type: 'POST',
              url: '/bin/fmdita/states',
              data: {
                paths: filePath,
                operation: "setdocstates",
                docstate: docstate
              }
            }).fail(function (xhr, textStatus, errorThrown) {
              console.error("Cannot update docstate to " + docstate);
            }).success(function (data) {
              console.log('docstate updated to ' + docstate);
            });
          }
        }
      });
    });
  });
})(window);
```

ui\_config.json ファイルに次のように機能を追加します。

```json
 {
      "type": "button",
      "icon": "actions",
      "title": "Change document state to In-Review",
      "variant": "quiet",
      "show": "true",
      "on-click": "user.docstate.to.in-review"
    } 
```

## ツールバーからの機能の削除

Web エディターで現在利用可能なすべての機能を提供したくない場合があります。その場合、Web エディターのツールバーから不要な機能を削除できます。

ツールバーから不要な機能を削除するには、次の手順を実行します。

1. AEMにログインし、CRXDE Lite モードを開きます。

1. 次の場所にあるデフォルトの設定ファイルに移動します。

   `/libs/fmdita/clientlibs/clientlibs/xmleditor/ui_config.json`

1. デフォルト設定ファイルのコピーを次の場所に作成します。

   `/apps/fmdita/xmleditor/ui_config.json`

1. に移動し、`ui_config.json` ノードの`apps` ファイルを開いて編集します。
`ui_config.json` ファイルには、次の3つのセクションがあります。

- **ツールバー：**   このセクションには、番号付きリストの挿入/削除、\（ファイル\）閉じる、保存、コメントなど、エディターのツールバーで使用できるすべての機能の定義が含まれています。

- **ショートカット：**   このセクションでは、エディターの特定の機能に割り当てられたキーボードショートカットの定義について説明します。

- **テンプレート：**   このセクションには、文書内で使用できるDITA エレメントの定義済み構造が含まれています。 デフォルトでは、テンプレートセクションには、段落、単純な表、表、および本文の要素のテンプレート定義が含まれています。 目的のエレメントに有効なXML構造を追加することで、任意のエレメントのテンプレート定義を作成できます。 例えば、リスト内の新しい`p`要素ごとに`li`要素を追加する場合、「テンプレート」セクションの最後に次のコードを追加して、これを実現できます。

```HTML
"li": "<li><p></p></li>"
```

1. ツールバーのセクションから、ユーザーに公開しない機能のエントリを削除します。

1. *ui\_config.json* ファイルを保存し、Web エディターを再読み込みします。


**親トピック：**[ Web エディターのカスタマイズ ](conf-web-editor.md)
