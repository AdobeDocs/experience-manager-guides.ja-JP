---
title: ツールバーのカスタマイズ
description: ツールバーのカスタマイズ方法を学ぶ
exl-id: 14a82c7e-5c07-43a8-bd9e-b221d80f6d05
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 5778ed2855287d1010728e689abbe6020ad56574
workflow-type: tm+mt
source-wordcount: '951'
ht-degree: 0%

---

# ツールバーのカスタマイズ {#id172FB00L0V6}

デフォルトでは、Web エディタには、DITA エディタに必要な最も一般的な編集機能が付属しています。 エディターでは、リストタイプ \（番号付きまたは箇条書き\）の要素の挿入、相互参照、コンテンツ参照、テーブル、段落、文字の書式設定などの機能を使用できます。 これらの基本要素に加えて、Web エディターをカスタマイズして、オーサリング環境で使用する要素を挿入できます。

>[!NOTE]
>
> 古い UI から新しいAEM Guides UI に移行する際（AEM Guides 2502 および 5.0 リリースから適用）、`ui_config` の更新はより柔軟なモジュール型 UI 設定に変換する必要があります。 このフレームワークは、editor_toolbar や他のターゲットウィジェット（該当する場合）に変更をシームレスに導入するのに役立ちます。 詳しくは、[ 変換 UI 設定の概要 ](https://experienceleague.adobe.com/en/docs/experience-manager-guides-learn/videos/advanced-user-guide/conver-ui-config) を参照してください。

Web エディタのツールバーをカスタマイズする方法は 2 つあります。

- ツールバーへの新しい機能の追加

- ツールバーから既存の機能を削除します


## ツールバーでの機能の追加

Web エディターへの機能の追加には、主に 2 つのタスクが必要です。*ui\_config.json* ファイルへの機能のアイコンの追加と、JavaScriptへのバックグラウンド機能の追加です。

**ツールバーでのアイコンの追加**

Web エディターのツールバーに機能を追加するには、以下の手順を実行します。

1. AEMにログインし、CRXDE Lite モードを開きます。

1. 次の場所にあるデフォルトの設定ファイルに移動します。

   `/libs/fmdita/clientlibs/clientlibs/xmleditor/ui_config.json`

1. デフォルトの設定ファイルのコピーを次の場所に作成します。

   `/apps/fmdita/xmleditor/ui_config.json`

1. に移動し、`apps` ノードの `ui_config.json` ファイルを開いて編集します。

1. `ui_config.json` ファイルのツールバーセクションに新しいフィーチャーの定義を追加します。 通常は、新しいツールバーボタン グループを作成し、そのグループに 1 つまたは複数のツールバーボタンを追加します。 または、既存のツールバーグループ内に新しいツールバーボタンを追加できます。 新しいツールバーグループを作成するには、次の詳細が必要です。

   - **type:**`blockGroup` を `type` 値として指定します。 この値は、1 つまたは複数のツールバーグループを含むブロック グループを作成していることを示しています。

   - **extraclass:** クラスまたはクラスの名前（スペース区切り）。

   - **items:** ツールバーのすべてのグループの定義を指定します。 各グループには、1 つまたは複数のツールバーアイコンを含めることができます。 ツールバーグループ内でアイコンを定義するには、`items` ールバー内で `type` 属性を再度定義し、その値を `buttonGroup` に設定する必要があります。 `extraclass` プロパティに 1 つ以上のクラス名を指定します。 `label` プロパティでフィーチャー名を指定します。 `ui_config.json` ファイルの次のスニペットは、メインのツールバーブロックの定義と、`buttonGroup` の定義を示しています。

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

     `items` コレクション内で、1 つ以上のツールバーアイコンの定義を指定する必要があります。
ツールバーアイコンを追加するには、次のプロパティを定義する必要があります。

   - **type:** `type` 値として `button` を指定します。 この値は、ツールバーボタンを追加していることを示します。

   - **icon:** ツールバーで使用する Coral アイコンの名前を指定します。

   - **バリアント型：** `variant` 値として `quiet` を指定します。

   - **タイトル：** アイコンのツールチップを指定します。

   - **クリック時：** JavaScript ファイル内のフィーチャーに定義されているコマンド名を指定します。 コマンドに入力パラメーターが必要な場合は、コマンド名を次のように指定します。

     ```JavaScript
     "on-click": {"name": "AUTHOR_INSERT_ELEMENT", "args": "simpletable"}
     ```

   - **表示または非表示：**`show` プロパティを定義している場合は、アイコンを表示するモードを指定します。 使用可能な値は、- `@isAuthorMode`、`@isSourceMode`、`@isPreviewMode`、`true` \（すべてのモードで表示\）、または `false` \（すべてのモードで非表示\）です。

   `show` の代わりに、`hide` プロパティを定義することもできます。 使用できる値は、プロパティの場合と同じ `show` すが、指定したモードではアイコンが表示されないという違いしかありません。

1. *clientlib* フォルダーを作成し、JavaScriptをこのフォルダーに追加します。

1. *apps.fmdita.xml\_editor.page\_overrides* の値を割り当てて、*clientlib* フォルダーのカテゴリプロパティを更新します。

1. *ui\_config.json* ファイルを保存し、web エディターをリロードします。


**JavaScriptのコードサンプル**

この節では、カスタム機能の追加を開始する際に役立つ、JavaScript コードの 2 つの例を示します。 次の例では、ユーザーがツールバーの「バージョンを表示」アイコンをクリックした際のAEM Guidesのバージョン番号を示しています。

JavaScript ファイルに次のコードを追加します。

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

この機能を ui\_config.json ファイルに次のように追加します。

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

次の例は、アクティブなファイルのドキュメントの状態を「レビュー中」に変更する方法を示しています。

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

この機能を ui\_config.json ファイルに次のように追加します。

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

## ツールバーからフィーチャを削除する

現在 Web エディタで使用できるすべての機能を提供したくない場合があります。その場合は、Web エディタのツールバーから不要な機能を削除できます。

ツールバーから不要な機能を削除するには、次の手順を実行します。

1. AEMにログインし、CRXDE Lite モードを開きます。

1. 次の場所にあるデフォルトの設定ファイルに移動します。

   `/libs/fmdita/clientlibs/clientlibs/xmleditor/ui_config.json`

1. デフォルトの設定ファイルのコピーを次の場所に作成します。

   `/apps/fmdita/xmleditor/ui_config.json`

1. に移動し、`apps` ノードの `ui_config.json` ファイルを開いて編集します。
`ui_config.json` ファイルには次の 3 つのセクションがあります。

- **ツールバー：**   このセクションには、番号付きリストの挿入/削除、\（file\）閉じる、保存、コメントなど、エディターのツールバーで使用できるすべての機能の定義が含まれます。

- **ショートカット：**   このセクションでは、エディタの特定の機能に割り当てられたキーボード ショートカットの定義について説明します。

- **templates:**   このセクションには、文書で使用できる DITA エレメントの構造が事前に定義されています。 既定では、[ テンプレート ] セクションには、段落、簡易テーブル、テーブル、および本文の各要素に対するテンプレート定義が含まれています。 目的の要素に対して有効な XML 構造を追加することで、任意の要素のテンプレート定義を作成できます。 例えば、リスト内の新しい `li` 要素ごとに `p` 要素を追加する場合は、「テンプレート」セクションの最後に次のコードを追加して、これを行うことができます。

```HTML
"li": "<li><p></p></li>"
```

1. ツールバーセクションから、ユーザーに公開しない機能のエントリを削除します。

1. *ui\_config.json* ファイルを保存し、web エディターをリロードします。


**親トピック：**&#x200B;[ Web エディタのカスタマイズ ](conf-web-editor.md)
