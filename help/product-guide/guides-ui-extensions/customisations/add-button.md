---
title: 容易にカスタマイズ
description: シンプルなカスタマイズ例
role: User, Admin
exl-id: 7f19f0b0-2a1b-4a8b-b28c-3918a1bc9096
TQID: https://experienceleague.adobe.com/IFKRQlzewz3NcnX-xruXzInQMiEzwEmhe-4knxXPrJM
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
source-wordcount: 296
ht-degree: 0%

---

# シンプルなカスタマイズ例

AEM Guidesアプリにこれらのカスタマイズを統合する方法をご紹介します。

例えば、このボタンをアプリの既存のビューに追加したいとします。
そのために、次の3つの基本的な事が必要です。

1. コンポーネントを追加するビューJSONの`id`。
2. `target` （つまり、新しいコンポーネントを追加するJSON内の場所）。 `target`は`key`と`value`を使用して定義されています。 キーと値のペアは、コンポーネントの一意の識別に役立つコンポーネントを定義するために使用される任意の属性です。
インデックスを使用してターゲットを参照することもできます。
3つのviewStatesがあります：`APPEND`、`PREPEND`、`REPLACE`。
3. 新しく作成されたコンポーネントと対応するメソッドのJSON。

レビューで使用する注釈ツールボックスに、AEMでファイルを開くボタンを追加するとします。

```typescript
export default {
  id: 'annotation_toolbox', 
  view: {
    items: [
      {
        component: 'button',
        icon: 'linkOut',
        title: 'Open topic in Assets view',
        'on-click': 'openTopicInAEM',
        target: {
          key: 'value',
          value: 'addcomment',
          viewState: VIEW_STATE.APPEND

        },
      },
    ],
  },
  controller: {
    openTopicInAEM: function (args) {
        const topicIndex = tcx.model.getValue(tcx.model.KEYS.REVIEW_CURR_TOPIC)
        const {allTopics = {}} = tcx.model.getValue(tcx.model.KEYS.REVIEW_DATA) || {}
        tcx.appGet('util').openInAEM(allTopics[topicIndex])
    },
  },
}
```

上記の例では、次の項目があります。

1. コンポーネントを挿入するJSONの`id`、つまり`annotation_toolbox`
2. ターゲットは`addcomment` ボタンです。 viewState `append`を使用して、`addcomment` ボタンの後にボタンを追加します。
3. 私たちは、コントローラ内のボタンのクリック時のイベントを定義します。

&quot;annotation_toolbox&quot; `.src/jsons/review_app/annotation_toolbox.json`のJSON

カスタマイズする前の注釈ツールボックスは次のようになっていました。

![annotation-toolbox](imgs/annotation_toolbox.png "注釈ツールボックス ")

カスタマイズ後、注釈ツールボックスは次のようになります。

![customized-annotation-toolbox](imgs/customised_annotation_toolbox.png " カスタマイズされた注釈ツールボックス ")

## CSSの追加

一貫性のために、コンポーネントはすでにスタイル設定されています。 挿入されたJSONには、固有のスタイルが適用されます
Cssを管理する主な方法は、拡張機能のextraClass キーを使用することです。

```js
{    
    "view":{
        items:[
            {
                compoenent:"button",
                extraClass:"underline bg-red",
            }
        ]
    }
}
```

clientlibsにcss ファイルを追加することで、CSS クラスを使用したカスタムスタイルを作成できます。 ビルド中に、tailwindのユーティリティクラスの[Tailwind](https://tailwindcss.com/docs/utility-first)出力も作成します。 同じ設定は、`./tailwind.config.js`の拡張機能の`tailwind.config.js`にあります
