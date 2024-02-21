---
title: 特定のユーザーまたはグループのフォルダーコンテキストメニューオプションで「 DitaMap を作成」オプションを非表示にします。
description: 特定のユーザー/グループのフォルダーコンテキストメニューから「DitaMap」オプションを非表示にして、Webeditor をカスタマイズする方法を説明します。
source-git-commit: ea8fb646287f68676b6530b4cc5f56e7ba2d9b0c
workflow-type: tm+mt
source-wordcount: '541'
ht-degree: 0%

---


# Webeditor のフォルダーコンテキストメニューで「DitaMAP を作成」を表示/非表示

この記事では、ガイド Web エディタをカスタマイズし、ユーザー/グループの権限に基づいて、フォルダーのコンテキストメニューで「DitaMap を作成」オプションの表示/非表示を切り替える方法について説明します。
この使用例では、作成者以外のすべてのユーザーに対してこのオプションを非表示にします。

## 前提条件

必要に応じてアプリの UI をカスタマイズできるAEM Guides 拡張機能パッケージを活用します。
これを通して下さい [ドキュメント](https://github.com/adobe/guides-extension/tree/main) を参照して、Guides Extension Framework の仕組みに関する詳細なインサイトを得ることができます。

作成者以外のすべてのユーザーに対してこのオプションを非表示にするために、フォルダーのコンテキストメニューをカスタマイズする方法を説明します。

下のスニペットから分かるように、作成者ユーザーには「DitaMap を作成」オプションが表示されます。

![DitaMap 作成オプションを表示](../../../assets/authoring/ditamap-show-author.png)

次に、Guides Extension Framework を使用してこのオプションを非表示にする方法を見てみましょう。

## 実装手順

実装は以下の部分で壊れています。

- **Folder_options コントローラの変更**

  各コンテキストメニューには、コントローラ ID が関連付けられています。 このコントローラは、さまざまなコンテキストメニューオプションのオンイベント機能を処理します。

  この例では、フォルダーのコンテキストメニューをカスタマイズして、非作成者向けの「DitaMap を作成」オプションを非表示にします。 この場合、ガイド拡張機能フレームワークリポジトリの/src にある folder_options.ts ファイルを変更します。

  「viewState」を「REPLACE」として使用して、コンテキストメニューでこのオプションを非表示にします。
キー&#39;id&#39;を介してこの folder_options で新しいウィジェットを呼び出しています。

```typescript
const folderOptions = {
  id: "folder_options",
  contextMenuWidget: "repository_panel",
  view: {
    items: [
      {
        component: "widget",
        id: "customditamap",
        target: {
          key: "displayName",
          value: "DITA Map",
          viewState: VIEW_STATE.REPLACE,
        },
      },
    ],
  },
};
```

- **ロジックを処理する新しいウィジェットの作成**

  作成者以外のユーザーに対してのみこのオプションを非表示にするロジックを記述するには、新しいウィジェットの作成 (customoptions.ts) が必要です。 これを実現するために、JSON 構造の切り替えとして機能する「表示」キーを使用しました。

  独自の外部サーブレットを作成して、グループの詳細を確認できます。 これにより、カスタムグループのフォルダーメニューオプションもカスタマイズできます。
この例では、 OOTB AEMの「rolesapi」呼び出しを活用して、ユーザーの詳細を取得し、上記のスニペットに示すように、応答を「isAuthor」に設定しています。

```typescript
const folderOptions = {
  id: "customditamap",
  view: {
    component: "button",
    quiet: true,
    icon: "breakdownAdd",
    label: "DITA Map",
    "on-click": "createNewDitaMap",
    show: "@extraProps.isAuthor",
  },
};
```

これにより、「show」の値に基づいて、「Dita Map」というラベルの付いたボタンを非表示にできます。

モデルに「isAuthor」属性を設定するためのコントローラが追加されました。これは、コントローラで次の構文を使用して行うことができます。

```typescript
this.model.extraProps.set("key", value);
```

ここでは、キーは「isAuthor」で、値は rolesapi 呼び出しからの応答です。
また、「createNewDitaMap」イベントを定義して、（作成者ユーザー向けの）DitaMap 作成オプションを有効にしました。

```typescript
controller: {
    init: function () {
      this.model.extraProps.set("isAuthor", false);

      rolesApiResponse.then((result) => {
        console.log(result);
        this.model.extraProps.set(
          "isAuthor",
          result["/content/dam"].roles.authors
        );

        console.log("testresult" + result["/content/dam"].roles.authors);
      });
    },
    createNewDitaMap() {
      repositoryController && repositoryController.next("create_new.map");
    },
  },
```

- **カスタマイズしたコードの追加**

  /src の下の index.ts ファイルに folder_options.ts と customoptions.ts をインポートします。

## テスト

- 作成者グループに属していないユーザーでAEMにログインします。 以下に示すように、「DitaMap を作成」オプションは、任意のフォルダーのコンテキストメニューで非表示になります。
このユースケースは GIT に追加されました。関連リソースを以下に示します。

![「DitaMap の作成」オプションを非表示にします](../../../assets/authoring/ditamap-hide-non-author.png)

### 関連リソース

- **Extension Framework の基本リポジトリ** - [GIT](https://github.com/adobe/guides-extension/tree/main)

- **ドキュメント** - [Experience League時](../../../../../guides-ui-extensions/aem_guides_framework/basic-customisation.md)

- **一般的な使用例をドキュメント化** - [Experience League時](../../../../../guides-ui-extensions/aem_guides_framework/jui-framework.md)

- **サンプルを含むパブリックリポジトリ** - [GIT で](https://github.com/adobe/guides-extension/tree/sc-expert-session). sc-expert-session ブランチを参照してください。

```

```
