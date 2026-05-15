---
title: インストールとセットアップ
description: AEM Guides拡張機能パッケージのインストールと使用
role: User, Admin
exl-id: 0304c8d0-35a8-4712-a9af-36557e3b247f
TQID: https://experienceleague.adobe.com/ngU5TVcI7yva051ZscfGCfBb6vEbtG4cvjoOgplqmoA
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 362
ht-degree: 1%

---

# AEM Guides拡張機能パッケージのインストールと使用

拡張機能を使用すると、ニーズに合わせてAEM Guides アプリをカスタマイズできます。 この拡張フレームワークは、AEM Guides v4.3以降（オンプレミス）および2310 （クラウド）でサポートされています。

## 要件

このパッケージには[git bash](https://github.com/git-guides/install-git)とnpmが必要です

## インストール

AEM Guides frameworkのインストールをブートストラップする最も簡単な方法は、cliを使用することです

```bash
npx @adobe/create-guides-extension
```

## カスタマイズコードの追加

1. `src/` ディレクトリで拡張する各コンポーネントのコードファイルを追加します。 一部のサンプルファイルは既に追加されています。
2. 現在、`src/` ディレクトリにある`index.ts` ファイル：
   - ビルドに追加するカスタマイズを含む`.ts` ファイルを読み込みます。
   - インポートを`window.extension`に追加
   - カスタマイズされたコンポーネントの`id`と対応するインポートを`tcx extensions`に登録します
   - サンプル `/src/index.ts`を参照してください

## カスタマイズされたコードの作成

- ルートディレクトリで`npm run build`を実行します。 ディレクトリ `dist/`に3つのファイルが表示されます。
   - `build.css`
   - `guides-extension.js`
   - `guides-extension.umd.cjs`

![&#x200B; ビルド出力](./../imgs/build_output.png)

## AEMへのカスタマイズの追加

- `CRXDE` `crx/de/index.jsp#/`に移動
- `apps` フォルダーの下で、タイプ `cq:ClientLibraryFolder`の新しいノードを作成します

![フォルダー構造](./../imgs/crxde_folder_structure.png)

- ノードの`properties`で「`Multi`」を選択し、次のプロパティを追加します
名前： `categories`
種類： `String []`
値：`apps.fmdita.review_overrides`、`apps.fmdita.xml_editor.page_overrides`

>[!NOTE]
>
> 2番目のUIの場合、値は`apps.fmdita.penultimate.xml_editor.page_overrides`と`apps.fmdita.review_overrides`です


![&#x200B; フォルダーのプロパティ &#x200B;](./../imgs/crxde_folder_properties.png)

- ビルドされたjsを追加するには、上記の作成したノードに新しいファイル（`tcx1.js`）を作成します。 ここで、`dist/guides-extension.umd.cjs`または`dist/guides-extension.js`のコードを追加します。 次に、新しいファイル `js.txt`を作成します。ここでは、js ファイルの名前を追加します。この場合は、次のようになります。

```t
#base=.
tcx1.js
```

- ビルドされたCSSを追加するには、上記の作成されたノードに新しいファイル `tcx1.css`を作成します。 ここで、`dist/build.css`からコードを追加します。 次に、新しいファイル `css.txt`を作成します。ここでは、css ファイルの名前を追加します。この場合は、次のようになります。

```t
#base=.
tcx1.css
```

- カスタマイズを使用してアプリを読み込むには、`shift + refresh`を実行してください。

## トラブルシューティング

上記のすべての手順が正しく実行されたことを確認してください。
コードをtcx.jsに追加したら、必ずハードリフレッシュ（shift+refresh）を行ってください。
AEMを開き、右クリックして `Inspect`
ソースに移動し、`[node_name].js` （例：extensions.js）ファイルを検索します。 Control / Cmd + Dを実行して、ファイルを検索します。 `dist/guides-extension.umd.cjs`または`dist/guides-extension.js`から貼り付けたJS コードを含む`.js` ファイルが存在する場合、設定は完了です
