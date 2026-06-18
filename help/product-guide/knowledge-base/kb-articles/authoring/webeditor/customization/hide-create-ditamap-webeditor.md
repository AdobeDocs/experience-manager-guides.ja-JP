---
title: 特定のユーザーまたはグループのフォルダーコンテキストメニューオプションから「DitaMapを作成」オプションを非表示にします。
description: 特定のユーザー/グループのフォルダーコンテキストメニューから「DitaMap」オプションを非表示にして、webeditorをカスタマイズする方法を説明します
exl-id: 796bfe3a-3950-4ade-9215-c33534791055
TQID: https://experienceleague.adobe.com/fAMBEOKlPA4KHsE81zfI-6EJ6zwaQOgRfx0w-cx-mmw
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
subfeature_v2:
  - id: ad602516-aca3-4247-9ae8-f393d958efa9
  - id: f89f75b0-cf2e-4e96-aec8-fe8c39cbd0ef
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
source-git-commit: cc73b81787a3c3dbe8390d93e558064327e59965
workflow-type: tm+mt
source-wordcount: 444
ht-degree: 1%

---

# Webeditorのフォルダーコンテキストメニューで「DitaMAPを作成」を表示/非表示

この記事では、ユーザー/グループの権限に基づいて、フォルダーのコンテキストメニューで「DitaMapを作成」オプションを非表示または表示するようにガイドエディターをカスタマイズする方法について説明します。
このユースケースでは、オーサー以外のすべてのユーザーに対してこのオプションを非表示にします。

## 前提条件

アドビでは、AEM Guidesの拡張機能パッケージを活用します。このパッケージを使用すると、必要に応じてアプリのUIをカスタマイズできます。
Guides Extension Frameworkの仕組みについて詳しくは、この[&#x200B; ドキュメント &#x200B;](https://github.com/adobe/guides-extension/tree/main)を参照してください。

これで、フォルダーのコンテキストメニューをカスタマイズして、オーサー以外のすべてのユーザーに対してこのオプションを非表示にする方法を説明します。

下のスニペットから分かるように、オーサーユーザーには「DitaMapを作成」オプションが表示されます。

![DitaMap作成オプションを表示](../../../assets/authoring/ditamap-show-author.png)

Guides拡張機能フレームワークを使用してこのオプションを非表示にする方法を見てみましょう。

## 実装手順

実装は以下の部分で分かれています。

- **Folder_options コントローラー**&#x200B;の変更

  各コンテキストメニューにはコントローラ IDが関連付けられています。 このコントローラは、様々なコンテキストメニューオプションのイベント時の機能を処理します。

  この例では、フォルダーコンテキストメニューをカスタマイズして、作成者以外のユーザーの「DitaMapを作成」オプションを非表示にします。 このためには、guides拡張フレームワークリポジトリの/srcの下にあるfolder_options.ts ファイルを変更します。

  コンテキストメニューからこのオプションを非表示にするために、「viewState」を「REPLACE」として使用しています。
キー「id」を通じて、このfolder_optionsで新しいウィジェットを呼び出しています。

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

- **ロジックを処理するための新しいウィジェットの作成**

  このオプションを非表示にするロジックを書き込むには、作成者ではないユーザーに対してのみ、新しいウィジェットの作成（customoptions.ts）が必要です。 これを実現するために、JSON構造のトグルとして機能する「show」キーを使用しました。

  グループの詳細を確認するには、独自の外部サーブレットを記述できます。これにより、カスタムグループのフォルダーメニューオプションもカスタマイズできます。
この例では、OOTB AEMの「rolesapi」呼び出しを活用して、上記のスニペットに示すように、ユーザーの詳細を取得し、「isAuthor」に応答を設定しました。

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

これにより、「show」の値に基づいて「Dita Map」というラベルの付いたボタンを非表示にすることができます。

モデルで「isAuthor」属性を設定するためのコントローラーを追加しました。これは、コントローラーの次の構文を使用して行うことができます。

```typescript
this.model.extraProps.set("key", value);
```

ここで、キーは「isAuthor」で、値はrolesapi呼び出しからの応答です。
また、「createNewDitaMap」イベントを定義して、「DitaMapを作成」オプション（オーサーユーザー向け）を有効にしました。

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

  folder_options.tsおよびcustomoptions.tsを/srcの下のindex.ts ファイルにインポートします。

## テスト

- 作成者グループに属していないユーザーをAEMにログインします。DitaMapを作成オプションは、次に示すように、フォルダーのコンテキストメニューでは非表示になります。
このユースケースはGITに追加されました。以下の関連リソースを参照してください。

![DitaMap作成オプションを非表示](../../../assets/authoring/ditamap-hide-non-author.png)

### 関連リソース

- **拡張機能フレームワーク ベース リポジトリ** - [GIT](https://github.com/adobe/guides-extension/tree/main)

- **Experience League[&#128279;](../../../../../guides-ui-extensions/aem_guides_framework/basic-customisation.md)のドキュメント** - 

- **Experience League[&#128279;](../../../../../guides-ui-extensions/aem_guides_framework/jui-framework.md)で一般的な使用例** ～ を文書化しました

- **GIT[&#128279;](https://github.com/adobe/guides-extension/tree/sc-expert-session)のサンプル** - を含むパブリックリポジトリ。 ブランチ sc-expert-sessionを参照してください

```

```
