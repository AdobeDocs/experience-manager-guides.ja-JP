---
title: トップバーとツールバー
description: トップバーとツールバーのカスタマイズ
role: User, Admin
source-git-commit: be06612d832785a91a3b2a89b84e0c2438ba30f2
workflow-type: tm+mt
source-wordcount: '56'
ht-degree: 0%

---


# トップバーとツールバーのカスタマイズ

をカスタマイズするには `topbar` および `toolbar`を使用する場合、次の id を使用します。 `topbar` または `toolbar`、同じビュー、コントローラ構造に従います。

次に、ツールバーのカスタマイズの簡単な例を示します。 ここで、 `Insert Numbered List` ボタンをクリックし、 `Insert Paragraph` ボタンを使用し、カスタマイズされたオンクリックハンドラーを使用してアドビのコンポーネントに追加します。

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

        INSERT_P(){
            this.next("AUTHOR_INSERT_ELEMENT",  "p" )
        }
    }
}
```
