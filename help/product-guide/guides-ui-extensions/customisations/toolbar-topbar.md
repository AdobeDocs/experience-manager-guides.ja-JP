---
title: 上部バーとツールバー
description: 上部バーとツールバーのカスタマイズ
role: User, Admin
exl-id: 7065c9b8-67ac-4f6d-8124-daa547f2dc3b
source-git-commit: 4f41609368b64415993b93be27162b069e7b2e32
workflow-type: tm+mt
source-wordcount: '75'
ht-degree: 0%

---

# 上部バーとツールバーのカスタマイズ

`topbar` と `toolbar` をカスタマイズするには、ID `topbar` または `toolbar` を使用し、同じビュー、コントローラー構造に従います。

次に、ツールバーのカスタマイズの簡単な例を示します。 ここでは、「`Insert Numbered List`」ボタンを削除し、カスタマイズされたオンクリックハンドラーを使用して、「`Insert Paragraph`」ボタンを独自のコンポーネントに置き換えました。

オブジェクトの下に公開され `proxy` 機能にアクセスするには、値を取得する `this.proxy.getValue` のなどを使用してアクセスする必要があります。

```js title = toolbar_customisation.js
const toolbarExtend = {
    id: "toolbar",
    view: {
        items: [
            {
                component: "div",
                target: {
                    key:"title",value: "Insert Numbered List",                    
                    viewState: VIEW_STATE.REPLACE
                }
            },
            {
                {
                    "component": "button",
                    "icon": "textParagraph",
                    "variant": "action",
                    "quiet": true,
                    "title": "Insert Paragraph",
                    "on-click": "INSERT_P"
                },

                target: {
                    key:"title",value: "Insert Paragraph",                    
                    viewState: VIEW_STATE.REPLACE
                }
            },
        ]
    },
    controller: {
        init: function() {
            console.log(this.proxy.getValue("canUndo"))
            this.proxy.subscribeAppEvent({
              key: "editor.preview_rendered",
              next: async function (e) {
                console.log(this.proxy.getValue("canUndo"))
              }.bind(this)
            })
        },
        INSERT_P(){
            this.next("AUTHOR_INSERT_ELEMENT",  "p" )
        }
    }
}
```
