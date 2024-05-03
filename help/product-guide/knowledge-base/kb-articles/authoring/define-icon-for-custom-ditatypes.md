---
title: カスタム Dita 型用のアイコンの設定
description: カスタム Dita タイプのアイコンを定義して、AEMの様々な UI で表示する方法を説明します
source-git-commit: ce2f5e4ab6b05fbce7b8384ff59091ebf9bab7be
workflow-type: tm+mt
source-wordcount: '484'
ht-degree: 0%

---

# カスタム dita （トピックまたはマップ） タイプのアイコンの設定


## 問題の説明

AEM Guides で使用されるカスタムスキーマを使用すると、カスタムトピックまたはマップのタイプを作成でき、カスタムトピックまたはマップが web エディターまたは Assets UI にアイコンが表示されないことがあります。 参照については、スクリーンショットを参照してください  （../assets/authoring/custom-ditatype-icon-notshown.png）

したがって、カスタムトピック/マップのタイプにアイコンを割り当てるには、次の手順を実行する必要があります。
- カスタムのトピック/マップのタイプを検索
- スタイルを記述して、カスタムタイプに必要なアイコンを追加します


Web エディター（リポジトリ表示）と Assets UI にアイコンを表示するために、上記の手順を実装できます。 以下は、両方の手順です


## Web エディタービューでカスタムトピック/マップのアイコンを表示しています

手順 1：カスタム dita トピック/ap の dita タイプを特定する – web-editor でリポジトリビューを開く/ ブラウザで developer console を開く – リストされたトピック/マップの横のアイコンスペースをInspectする – カスタムトピックに割り当てられたクラスを確認する – スクリーンショットを参照  （../assets/authoring/custom-ditatype-icon-knowditatype.png）詳しくは、このクラスを使用してアイコンを割り当て、CSS を記述します

手順 2: CSS を作成してこの dita 型にアイコンを割り当てる – /apps の下にクライアントライブラリを作成します。必要なパスに cq:ClientLibraryFolder を作成します。そのディレクトリにカテゴリ「apps.fmdita.xml_editor.page」を追加します。このディレクトリの下にフォルダー「assets」を作成し、カスタム dita 型に使用するすべてのアイコンを追加します。

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
     – これらの変更を保存/デプロイします
スクリーンショットを参照  （../assets/authoring/custom-ditatype-icon-define-webeditor-styles.png）を参照してください。

最終的な出力はスクリーンショットで示されます。  （../assets/authoring/custom-ditatype-icon-webeditor-showstyles.png）


## Assets UI でのカスタムトピック/マップのアイコンの表示

手順 1：カスタム dita トピック/マップの dita タイプの決定 – 前のメソッドの手順 1 で説明します

/libs/fmdita/clientlibs/clientlibs/xmleditor/clientlib-dam/topic_type.js手順 2：カスタムトピック/マップ型用のカスタム dita 型に読み込むアイコンを定義する Javacscript を作成する – /apps の下にクライアントライブラリを作成します。例えば、必要なパスに cq:ClientLibraryFolder を作成します。次のプロパティを追加します。– 「categories」（複数値文字列）値を「dam.gui.admin.coral」に追加します。変数「parentImagePath」の値を、カスタムアイコンの保存場所に変更することで、images フォルダーのパスを変更することもできます。クライアントライブラリフォルダーの下に js.txt という名前のファイルを作成し、「topic_type.js」への参照を追加します。これらの変更を保存またはデプロイします。スクリーンショットを参照  （../assets/authoring/custom-ditatype-icon-define-assetsui-styles.png）を参照してください。

最終的な出力はスクリーンショットに示されているように表示されます。  （../assets/authoring/custom-ditatype-icon-assetsui-showstyles.png）