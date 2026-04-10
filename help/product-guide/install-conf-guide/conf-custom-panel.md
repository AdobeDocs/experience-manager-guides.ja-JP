---
title: 左側のパネルでのカスタムパネルの設定
description: 左側のパネルでカスタムパネルを設定する方法について説明します
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 5057f9935982d4b13c245453f15a93f48679f16b
workflow-type: tm+mt
source-wordcount: '81'
ht-degree: 0%

---

# 左側のパネルでのカスタムパネルの設定 {#id224JI200Y6F}


エディターの左側のパネルにカスタムパネルを追加するには、次の手順を実行します。

1. *clientlib* フォルダーを作成し、JavaScriptとCSS ファイルをこのフォルダーに追加します。
1. *clientlib* フォルダーのcategories プロパティを更新するには、*apps.fmdita.xml\_editor.page\_overrides*&#x200B;の値を割り当てます。

カスタムパネルを設定するサンプルコード：

```JavaScript
tcx.ready(function () { //Ready will call the callback after editor code is set for events and global variable excess
 
 
    // APP_ADD_AUTHOR_LEFT_TAB event will add a new left tab in the left panel, user can show hide it using editor settings
    tcx.eventHandler.next(tcx.eventHandler.KEYS.APP_ADD_AUTHOR_LEFT_TAB, {
            id: 'my_panel',
            class: 'my-panel-tab',
            icon: 'file', //Any valid Adobe Spectrum icon name https://spectrum.adobe.com/page/icons/
            label: 'My Tab',
            prevTabID: 'repository_panel' //Existing tab ids are 'collection_panel', 'repository_panel', 'map_panel', 'outline_panel', 'conref_panel', 'glossary_panel', 'condition_panel', 'subject_scheme_panel', 'snippet_panel', 'template_panel', 'search_panel'
    })
 
    // APP_PANEL_DID_MOUNT event will be called after user has selected the panel and panel is rendered in the DOM
    tcx.eventHandler.subscribe({
        key: tcx.eventHandler.KEYS.APP_PANEL_DID_MOUNT,
        next: function(opts) {
            // TODO create panel ui inside $el
            let $el = opts.$el //$el is Tab panel content html node
            let id = opts.id //id is tab panel id (my_panel)
            console.log("mounted", opts)
        }
    })
 
  // APP_PANEL_WILL_UNMOUNT will be called before destorying the new left panel
  tcx.eventHandler.subscribe({
        key: tcx.eventHandler.KEYS.APP_PANEL_WILL_UNMOUNT,
        next: function(opts) {
            //TODO do some cleanup
            let id = opts.id //id is tab panel id (my_panel)
            console.log("unmounted", opts)
        }
    })
 
});
```
