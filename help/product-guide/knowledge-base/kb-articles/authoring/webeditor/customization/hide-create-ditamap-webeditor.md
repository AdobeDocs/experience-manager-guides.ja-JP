---
title: 特定のユーザーまたはグループのフォルダーコンテキストメニューオプションから「DitaMap を作成」オプションを非表示にします。
description: 特定のユーザーまたはグループのフォルダーコンテキストメニューから「DitaMap」オプションを非表示にして、webeditor をカスタマイズする方法を説明します
exl-id: 796bfe3a-3950-4ade-9215-c33534791055
source-git-commit: e40ebf4122decc431d0abb2cdf1794ea704e5496
workflow-type: tm+mt
source-wordcount: '541'
ht-degree: 0%

---

# Webeditor のフォルダーコンテキストメニューから「DitaMAP を作成」を表示/非表示

この記事では、ユーザー/グループの権限に基づいて、Guides Web Editor をカスタマイズして、フォルダーコンテキストメニューの「Create DitaMap」オプションの表示/非表示を切り替える方法について説明します。
このユースケースでは、作成者でないすべてのユーザーに対してこのオプションを非表示にします。

## 前提条件

AEM Guides拡張機能パッケージを利用して、必要に応じてアプリの UI をカスタマイズできます。
Guides 拡張機能フレームワークの仕組みについて詳しくは、この [ ドキュメント ](https://github.com/adobe/guides-extension/tree/main) を参照してください。

それでは、それでは、フォルダーコンテキストメニューをカスタマイズして、オーサー以外のすべてのユーザーに対してこのオプションを非表示にする方法について説明します。

以下のスニペットからわかるように、「DitaMap を作成」オプションは作成者ユーザーに対して表示されます。

![DitaMap 作成オプションを表示 ](../../../assets/authoring/ditamap-show-author.png)

次に、Guides 拡張機能フレームワークを使用してこのオプションを非表示にする方法を見てみましょう。

## 実装手順

実装は、以下の部分で構成されています。

- **Folder_options コントローラの変更点**

  各コンテキスト メニューには、コントローラ ID が関連付けられています。 このコントローラは、さまざまなコンテキスト メニューオプションのオン イベント機能を処理します。

  この例では、フォルダーのコンテキストメニューをカスタマイズして、作成者以外のユーザーに対して「DitaMap を作成」オプションを非表示にします。 この目的のために、guides extension framework リポジトリの/src の下にある folder_options.ts ファイルを変更します。

  コンテキストメニューからこのオプションを非表示にするには、「viewState」を「REPLACE」として使用しています。
キー「id」を使用して、この folder_options で新しいウィジェットを呼び出しています。

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

  このオプションを非表示にするロジックを作成者以外のユーザーに対してのみ記述するには、新しいウィジェットの作成（customoptions.ts）が必要です。 これを実現するために、JSON 構造でトグルとして機能する「show」キーを使用しました。

  独自の外部サーブレットを作成して、グループの詳細を確認できます。 これにより、カスタムグループのフォルダーメニューオプションもカスタマイズできます。
この例では、上記のスニペットに示すように、OOTB AEMの「rolesapi」呼び出しを利用して、ユーザーの詳細を取得し、応答を「isAuthor」に設定しました。

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

これにより、「show」の値に基づいて、「Dita Map」というラベルの付いたボタンを非表示にすることができます。

モデルの「isAuthor」属性を設定するコントローラーを追加しました。これは、コントローラーで次の構文を使用して行うことができます。

```typescript
this.model.extraProps.set("key", value);
```

ここで、キーは「isAuthor」、値は rolesapi 呼び出しからの応答です。
また、「createNewDitaMap」イベントを定義して、DitaMap 作成オプションを有効にしました（作成者ユーザー向け）。

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

- **カスタマイズされたコードの追加**

  folder_options.ts と customoptions.ts を/src の下の index.ts ファイルに読み込みます。

## テスト

- 作成者グループに属していないユーザーでAEMにログインします。 「DitaMap を作成」オプションは、以下に示すように、どのフォルダのコンテキストメニューでも非表示になります。
このユースケースは GIT に追加されました。以下の関連リソースを参照してください。

![ 作成 DitaMap オプションを非表示 ](../../../assets/authoring/ditamap-hide-non-author.png)

### 関連リソース

- **拡張機能フレームワークのベースリポジトリ** - [GIT](https://github.com/adobe/guides-extension/tree/main)

- **ドキュメント** - [on Experience League](../../../../../guides-ui-extensions/aem_guides_framework/basic-customisation.md)

- **ドキュメント化された一般的なユースケース** - [Experience League時 ](../../../../../guides-ui-extensions/aem_guides_framework/jui-framework.md)

- **サンプルを使用した公開リポジトリ** - [on GIT](https://github.com/adobe/guides-extension/tree/sc-expert-session)。 ブランチ sc-expert-session を参照します

```

```
