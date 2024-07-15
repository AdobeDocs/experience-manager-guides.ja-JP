---
title: コンテキストメニュー
description: コンテキストメニューのカスタマイズ
role: User, Admin
exl-id: 25aa76dd-ef05-41ed-b980-14bbc1626059
source-git-commit: 4f00d6b7ad45636618bafe92e643b3e288ec2643
workflow-type: tm+mt
source-wordcount: '154'
ht-degree: 1%

---

# コンテキストメニューのカスタマイズ

次のコンテキストメニューをカスタマイズできます。

- `file_options`
コントローラ：
   - マップ ビュー：`ditamap_viewer_controller`
   - リポジトリパネル：`repository_panel_controller`
   - お気に入りパネル：`collection_tree_controller`
   - ファイル プロパティ参照リンク：`file_references_links_controller`
   - リポジトリ検索パネル：`repository_search_controller`
   - 件名の設定パネル：`subject_scheme_tree_controller`

- `folder_options`
コントローラ：
   - リポジトリパネル：`repository_panel_controller`
   - お気に入りパネル：`collection_tree_controller`

- `collection_options`
コントローラ：
   - お気に入りパネル：`collection_tree_controller`

- `map_view_options`
コントローラ：
   - マップ ビュー：`ditamap_viewer_controller`

- `baseline_panel_menu`
コントローラ：
   - [ ベースライン ] パネル：`baseline_panel`

- `preset_item_menu`
コントローラ：
   - プリセットパネル：`preset_panel`

新しい一意の ID を定義することで、独自のコンテキストメニューを作成することもできます。

これで、各コンテキストメニューに `controller id` が関連付けられました。 このコントローラは、さまざまなコンテキスト メニューオプションの `on-event` 機能を処理します

を理解するための例を見てみましょう。

```js title=customise_context_menu.js"
const fileOptions = {
    id: "file_options",
    contextMenuWidget: "repository_panel",
    view: {
            items: [
                {
                    component: "div",
                    target: {
                        key:"displayName",value: "Delete",                    
                        viewState: VIEW_STATE.REPLACE
                    }
                },
                {
                    component: "div",
                    target: {
                        key:"displayName",value: "Edit",                    
                        viewState: VIEW_STATE.REPLACE
                    }
                },
                {
                    "displayName": "Download",
                    "data": {
                      "eventid": "downloadFile"
                    },
                    "icon": "downloadFromCloud",
                    "class": "menu-separator",         
                    target: {
                        key:"displayName",value: "Duplicate",                    
                        viewState: VIEW_STATE.REPLACE
                    }
                },
            ]

    },

    controller: {
        downloadFile(){
            const path  = this.getValue('selectedItems')[0].path
            this.loader.loadDitaFile(path).then((file) => {
              function download_file(name, contents) {
                const mime_type = "text/plain";
        
                const blob = new Blob([contents], {type: mime_type});
        
                const dlink = document.createElement('a');
                dlink.download = name;
                dlink.href = window.URL.createObjectURL(blob);
                dlink.onclick = function() {
                    // revokeObjectURL needs a delay to work properly
                    const that = this;
                    setTimeout(function() {
                        window.URL.revokeObjectURL(that.href);
                    }, 1500);
                };
        
                dlink.click();
                dlink.remove();
            }
            download_file(path,file.xml)
            });
          }
    }
}
```

次に、このコードの動作を説明します。

1. `id` は、カスタマイズするコンテキストメニューを識別するために使用します。
2. `contextMenuWidget` は、コンテキストメニューを呼び出してコンテン `events` を処理する `widget id` または `component` を定義するために使用されます。

残りの部分は同じままで、項目の定義に使用さ `view`、オプションの置き換え、追加または追加を行う場所を識別します。`target` の後、`contextMenuWidget` のコントローラが `on-click` のイベントを処理します。
