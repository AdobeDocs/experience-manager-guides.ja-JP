---
title: トップバーとツールバー
description: トップバーとツールバーのカスタマイズ
role: User, Admin
exl-id: 7065c9b8-67ac-4f6d-8124-daa547f2dc3b
TQID: https://experienceleague.adobe.com/at8pRiy0xnloRpqJgBXnqJ8vkFwQ4hpotyO9dRFliK8
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 267
ht-degree: 0%

---

# トップバーとツールバーのカスタマイズ

`topbar`と`toolbar`をカスタマイズするには、ID : `topbar`または`toolbar`を使用し、同じビュー、コントローラ構造に従います。

>[!NOTE]
>
>2502 リリースのExperience Manager Guides以降、ID **toolbar**&#x200B;の名前が&#x200B;**editor toolbar**&#x200B;に変更されました。 以前のバージョンを使用している場合は、**ツールバー** IDを使用してツールバーをカスタマイズできます。 現在、**topbar**&#x200B;というIDはなく、代わりに&#x200B;**editor_tab_bar**&#x200B;を使用しています。

以下は、ツールバーのカスタマイズの簡単な例です。 ここでは、`Insert Numbered List` ボタンを削除し、カスタマイズされたクリック時のハンドラーを使用して、`Insert Paragraph` ボタンを独自のコンポーネントに置き換えました。

>[!TIP]
>
>**editor_toolbar**&#x200B;はボタンをレンダリングするように設計されているため、ウィジェットを追加すると、CSSと応答性が損なわれる可能性があります。 ボタンまたはラベルなどの基本的なコンポーネントのみを含めることをお勧めします。

`proxy` オブジェクトの下に公開されている機能にアクセスするには、`this.getValue`を使用してアクセスする必要があります。値を取得するにはと言います。

AEM Guides 2502 リリース以降については、以下のツールバーのカスタマイズ例を参照してください。

```js title = toolbar_customization.js
const toolbarExtend = {
    id: "editor_toolbar",
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
                "component": "button",
                "icon": "textParagraph",
                "variant": "action",
                "quiet": true,
                "title": "Insert Paragraph",
                "on-click": "INSERT_P",
                target: {
                    key:"title",value: "Insert Paragraph",                    
                    viewState: VIEW_STATE.REPLACE
                }
            },
            {
                "component": "button",
                "icon": "fileHTML",
                "variant": "action",
                "quiet": true,
                "title": "URL Link Customization",
                "on-click": "openExternalLinkDialog",
                target: {
                key: "title", value: "Insert Bulleted List",
                viewState: VIEW_STATE.REPLACE
                }
            }
        ]
    },
    controller: {
        init: function() {
            console.log(this.getValue("canUndo"))
            this.subscribeAppEvent({
              key: "editor.preview_rendered",
              next: async function (e) {
                console.log(this.getValue("canUndo"))
              }.bind(this)
            })
        },
        INSERT_P(){
            this.appEventHandlerNext("AUTHOR_INSERT_ELEMENT",  "p" )
        },
        openExternalLinkDialog() {
            this.appEventHandlerNext("AUTHOR_INSERT_ELEMENT",
                {
                args: "<xref href='' scope='external' format = 'dita' ></xref>", activeTabId: "conkey_reference"
                }
            )
        }
    }
}
```


カスタマイズが完了すると、最終的な出力は次のようになります。

![editor_toolbar](imgs/editor_toolbar.png)

AEM Guides 4.6.x リリースおよび以前のバージョンでツールバーをカスタマイズする場合は、次の例を参照してください。

```js title = toolbar_customization.js
const topbarExtend = {
    id: "toolbar",
    view: {
        items: [
            {
                component: "div",
                target: {
                    key:"title",value: "Insert Element",                    
                    viewState: VIEW_STATE.REPLACE
                }
            },
            {
                component: "div",
                target: {
                    key:"title",value: "Insert Paragraph",                    
                    viewState: VIEW_STATE.REPLACE
                }
            },
            {
                component: "div",
                target: {
                    key:"title",value: "Insert Numbered List",                    
                    viewState: VIEW_STATE.REPLACE
                }
            },
            {
                component: "div",
                target: {
                    key:"title",value: "Insert Bulleted List",                    
                    viewState: VIEW_STATE.REPLACE
                }
            },
            {
                "component": "button",
                "extraclass": "insert-multimedia",
                "icon": "more",
                "variant": "action",
                "quiet": true,
                "holdAffordance": true,
                "title": "More Insert Options",
                "elementID": "toolbar_insert",
                "on-click": {
                    "name": "APP_SHOW_OPTIONS_POPOVER",
                    "args":{
                        "target": "toolbar_insert",
                        "extraclass": "new_options_buttons",
                        "items": [
                            {
                                "component": "button",
                                "icon": "add",
                                "variant": "action",
                                "quiet": true,
                                "title": "Insert Element",
                                "on-click": "AUTHOR_SHOW_INSERT_ELEMENT_UI"
                            },
                            {
                                "component": "button",
                                "icon": "textParagraph",
                                "variant": "action",
                                "quiet": true,
                                "title": "Insert Paragraph",
                                "on-click": "INSERT_P"
                            },
                            {
                                "component": "button",
                                "icon": "textNumbered",
                                "variant": "action",
                                "quiet": true,
                                "title": "Insert Numbered List",
                                "on-click": "AUTHOR_INSERT_REMOVE_NUMBERED_LIST"
                            },
                            {
                                "component": "button",
                                "icon": "textBulleted",
                                "variant": "action",
                                "quiet": true,
                                "title": "Insert Bulleted List",
                                "on-click": "AUTHOR_INSERT_REMOVE_BULLETED_LIST"
                            },
                            {
                                "component": "button",
                                "icon": "table",
                                "variant": "action",
                                "quiet": true,
                                "title": "Insert Table",
                                "on-click": "AUTHOR_INSERT_ELEMENT",
                            }
                        ]
                    },
                },
                target: {
                    key:"title",value: "Insert Table",                    
                    viewState: VIEW_STATE.REPLACE
                }
            },
        ]
    },
    controller: {
        init() {
            console.log(this.proxy.getValue('canUndo'))
            this.proxy.subscribeAppEvent({
                key: "editor.preview_rendered",
                next: async function (e) {
                    console.log(this.proxy.getValue('canUndo'))
                }.bind(this)
            })
        },
        INSERT_P(){
            this.next("AUTHOR_INSERT_ELEMENT",  "p" )
        }
    }
}
```

カスタマイズが完了すると、最終的な出力は次のようになります。

![&#x200B; ツールバー](imgs/toolbar.png)


別の例では、電子メール、ファイル参照、Weblinkなどの&#x200B;**相互参照**&#x200B;の任意のサブオプションに直接ジャンプできるカスタムツールバーボタンを作成します。


```js title = toolbar_customisation.js
const toolbarExtend = {
    id: "editor_toolbar",
    view: {
        items: [
            
                {
                    "component": "button",
                    "icon": "fileHTML",
                    "variant": "action",
                    "quiet": true,
                    "title": "External URL Link",
                    "on-click": "openExternalLinkDialogP",
            
                target: {
                    key:"title",value: "Insert Bulleted List",                    
                    viewState: VIEW_STATE.REPLACE
                }
            }
        ]
    },
    controller: {
        openExternalLinkDialog() {
            tcx.eventHandler.next ("AUTHOR_INSERT_ELEMENT")
            t{
          args:"<xref href='' scope='external' format = 'dita' ></xref>",activeTabId:"conkey_reference"
        }
    }
  }
}
```

ここでは、`activeTabId`は正しいタブを選択するための列挙です。 デフォルトでは、「相互参照」タブを選択すると、`file_link`が開きます。 `activeTabId`の値は、要件に基づいて`content_reference`、`conkey_reference`、`key_reference`、`file_link`、`web_link`および` email_link`に変更できます。
