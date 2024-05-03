---
title: カスタム Dita 型用のアイコンの設定
description: カスタム Dita タイプのアイコンを定義して、AEMの様々な UI で表示する方法を説明します
source-git-commit: 40b4c0803c87dbf1d3c2756e7974848100b5e56e
workflow-type: tm+mt
source-wordcount: '482'
ht-degree: 0%

---

# カスタム dita （トピックまたはマップ） タイプのアイコンの設定


## 問題の説明

AEM Guides で使用されるカスタムスキーマを使用すると、カスタムトピックまたはマップのタイプを作成でき、カスタムトピックまたはマップが web エディターまたは Assets UI にアイコンが表示されないことがあります。 参照については、スクリーンショットを参照してください ![参照用のスクリーンショット](../assets/authoring/custom-ditatype-icon-notshown.png)

したがって、カスタムトピック/マップのタイプにアイコンを割り当てるには、次の手順を実行する必要があります。
- カスタムのトピック/マップのタイプを検索
- スタイルを記述して、カスタムタイプに必要なアイコンを追加します


Web エディター（リポジトリ表示）と Assets UI にアイコンを表示するために、上記の手順を実装できます。 以下は、両方の手順です


## Web エディタービューでカスタムトピック/マップのアイコンを表示しています

*手順 1 *: カスタム dita トピック/ap の dita タイプを決定します
- Web エディターでリポジトリ表示を開く/ ブラウザーで開発者コンソールを開きます。
- リストされたトピック/マップの横にあるアイコンスペースをInspectします
- カスタムトピックに割り当てられているクラスを確認します
- スクリーンショットを参照 ![スクリーンショットを参照](../assets/authoring/custom-ditatype-icon-knowditatype.png) を参照
- このクラスを使用してアイコンを割り当て、CSS を記述します

*手順 2 *: css を作成し、この dita タイプにアイコンを割り当てます
- /apps の下にクライアントライブラリを作成します。目的のパスの下に cq:ClientLibraryFolder を作成したとします
   - カテゴリ「apps.fmdita.xml_editor.page」を追加します
- このディレクトリの下に「assets」フォルダを作成し、カスタム dita タイプに使用するすべてのアイコンを追加します
- クライアントライブラリフォルダーに css ファイルを追加します。例えば、「tree-icons.css」とします
   - 次のコードを追加します

```
            .tree-item-icon {
                &.custommaptype {
                    background-image: url('assets/custommap.svg')
                }
                &.customtopictype {
                    background-image: url('assets/customtopic.svg')
                }
            }
```

- クライアントライブラリフォルダーに css.txt を追加し、作成した「tree-icon.css」への参照を追加します
- これらの変更を保存/デプロイ

スクリーンショットを参照 ![スクリーンショットを参照](../assets/authoring/custom-ditatype-icon-define-webeditor-styles.png) を参照してください。

最終的な出力はスクリーンショットで示されます。 ![スクリーンショットに表示](../assets/authoring/custom-ditatype-icon-webeditor-showstyles.png)


## Assets UI でのカスタムトピック/マップのアイコンの表示

*手順 1*：カスタム dita トピック/マップの dita タイプの決定
- これについては、前のメソッドの手順 1 で説明しました

*手順 2*:Javacscript を作成して、カスタムのトピック/マップタイプのカスタム dita タイプに読み込むアイコンを定義します
- /apps の下にクライアントライブラリを作成します。目的のパスの下に cq:ClientLibraryFolder を作成したとします
   - 次のプロパティを追加します。
      - 「categories」（複数値文字列）の値が「dam.gui.admin.coral」である
      - 「dependencies」（複数値文字列）値を「libs.fmdita.versioncontrol」として
- この/apps ディレクトリに「/libs/fmdita/clientlibs/clientlibs/xmleditor/clientlib-dam/topic_type.js」ファイルのコピーを作成します。
   - コピーした「topic_type.js」を編集し、変数「typeImageNameMap」の下の customtopictype を変更または追加します
   - また、変数「parentImagePath」の値を、カスタムアイコンが格納されている場所に変更することで、画像フォルダーのパスを変更することもできます
- クライアントライブラリフォルダーに js.txt という名前のファイルを作成し、「topic_type.js」への参照を追加します。
- これらの変更を保存/デプロイ スクリーンショットを参照 ![スクリーンショットを参照](../assets/authoring/custom-ditatype-icon-define-assetsui-styles.png) を参照してください。

最終的な出力はスクリーンショットに示されているように表示されます。 ![スクリーンショットに表示](../assets/authoring/custom-ditatype-icon-assetsui-showstyles.png)