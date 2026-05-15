---
title: コンテキストメニュー
description: コンテキストメニューのカスタマイズ
role: User, Admin
exl-id: 25aa76dd-ef05-41ed-b980-14bbc1626059
TQID: https://experienceleague.adobe.com/TJyqos515-hGMn2S0fG4Nqs-kKz2MDF7cM40PSuZFMY
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 154
ht-degree: 1%

---

# コンテキストメニューのカスタマイズ

次のコンテキストメニューをカスタマイズできます。

- `file_options`
コントローラー：
   - マップビュー：`ditamap_viewer_controller`
   - リポジトリーパネル：`repository_panel_controller`
   - お気に入りパネル：`collection_tree_controller`
   - ファイルのプロパティ参照リンク：`file_references_links_controller`
   - リポジトリ検索パネル：`repository_search_controller`
   - 件名スキームパネル：`subject_scheme_tree_controller`

- `folder_options`
コントローラー：
   - リポジトリーパネル：`repository_panel_controller`
   - お気に入りパネル：`collection_tree_controller`

- `collection_options`
コントローラー：
   - お気に入りパネル：`collection_tree_controller`

- `map_view_options`
コントローラー：
   - マップビュー：`ditamap_viewer_controller`

- `baseline_panel_menu`
コントローラー：
   - ベースラインパネル：`baseline_panel`

- `preset_item_menu`
コントローラー：
   - プリセットパネル：`preset_panel`

新しい一意のIDを定義して、独自のコンテキストメニューを作成することもできます。

これで、各コンテキストメニューに`controller id`が関連付けられました。 このコントローラーは、様々なコンテキストメニューオプションの`on-event`機能を処理します

この記事では、次の項目について解説します

```js title=customise_context_menu.js"
const loadDitaFile = (filePath, uuid) =>{
  return $.ajax({
    type: 'POST',
    url: '/bin/referencelistener',
    data: {
        operation: 'getdita',
        path: filePath,
        type: uuid ? 'UUID' : 'PATH',
        cache: false,
    },
  })
}

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
            loadDitaFile(path).then((file) => {
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

次に、このコードが何をしているのかを説明します。

1. `id`は、カスタマイズするコンテキストメニューを識別するために使用されます。
2. `contextMenuWidget`は、コンテキストメニューを呼び出して`events`を処理する`widget id`または`component`を定義するために使用されます。

残りの部分は同じままです。つまり、`view`は項目の定義に使用され、`target`はオプションの置き換え、追加、または追加の場所を特定し、`contextMenuWidget` コントローラーは`on-click` イベントを処理します。
