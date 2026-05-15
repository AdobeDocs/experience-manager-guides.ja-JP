---
title: カスタム dita タイプの設定アイコン
description: AEMで様々なUIにアイコンを表示するためのカスタムデータタイプのアイコンを定義する方法を説明します
exl-id: 5a259ea0-3b5f-4c6e-b488-1586767aa991
TQID: https://experienceleague.adobe.com/OFZePwGXAKS5XhsNcrCqOya-bgEHmtO4yl1IciNUxdQ
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
  - id: d90290ec-3e61-4ebd-8649-bcafe0836803
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 496
ht-degree: 0%

---

# カスタム/専用dita （トピックまたはマップ）タイプのアイコンの設定


## 問題提起

AEM Guidesで使用されるカスタムスキーマを使用すると、カスタムトピックまたはマップタイプを作成できます。また、カスタムトピックまたはマップタイプがweb エディターまたはAssets UIにアイコンを表示しない場合があります。 参考までに、以下のスクリーンショットを参照してください

![参照用スクリーンショット &#x200B;](../assets/authoring/custom-ditatype-icon-notshown.png)


カスタムトピック/マップタイプにアイコンを割り当てるには、次の操作を行う必要があります。
- カスタムのトピック/マップタイプの検索
- カスタムタイプの目的のアイコンを追加するスタイルを書き込む


上記の手順を実装して、web エディター（リポジトリビュー）とAssets UIにアイコンを表示できます。 以下はその両方の手順です


## web エディタービューでのカスタムトピック/マップの表示アイコン

_Step 1 :_カスタム dita トピック/apのdita タイプを決定します
- web エディター/ブラウザーで開発者コンソールを開いて、リポジトリビューを開きます
- リストされたトピック/マップの横にあるアイコンスペースを確認します
- カスタムトピックに割り当てられたクラスを確認します
- 詳細については、以下のスクリーンショットを参照してください![&#x200B; スクリーンショットを参照](../assets/authoring/custom-ditatype-icon-knowditatype.png)
- このクラスを使用してアイコンを割り当て、CSSを記述します

_ステップ 2 :_Cssを作成し、このデータ型にアイコンを割り当てる
- /appsの下にクライアントライブラリを作成し、目的のパスの下にcq:ClientLibraryFolderを作成するとします
   - カテゴリ「apps.fmdita.xml_editor.page」を追加します
- このディレクトリの下に「assets」フォルダーを作成し、カスタム dita タイプに使用するすべてのアイコンを追加します
- クライアントライブラリフォルダーにcss ファイルを追加します。「tree-icons.css」と入力します。
   - それに次のコードを追加します

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

- クライアントライブラリフォルダーにcss.txtを追加し、作成したばかりの「tree-icon.css」への参照を追加します
- これらの変更を保存またはデプロイする

詳しくは、以下のスクリーンショットを参照してください。
![&#x200B; スクリーンショットを参照](../assets/authoring/custom-ditatype-icon-define-webeditor-styles.png)

そして、最終的な出力は以下のスクリーンショットに示されています
![&#x200B; スクリーンショットに表示](../assets/authoring/custom-ditatype-icon-webeditor-showstyles.png)


## Assets UIでのカスタムトピック/マップの表示アイコン

_ステップ 1 :_カスタム dita トピック/マップのdita タイプを決定する
- これは、以前の方法の手順1で説明しました

_Step 2 :_JavaScriptを作成して、カスタムのトピック/マップタイプ用のカスタム dita タイプに読み込むアイコンを定義します
- /appsの下にクライアントライブラリを作成し、目的のパスの下にcq:ClientLibraryFolderを作成するとします
   - 次のプロパティを追加します。
      - &quot;categories&quot;（multivalue string）値を&quot;dam.gui.admin.coral&quot;として指定します。
      - &quot;dependencies&quot;（multivalue string）値を&quot;libs.fmdita.versioncontrol&quot;として指定します。
- この/apps ディレクトリに「/libs/fmdita/clientlibs/clientlibs/xmleditor/clientlib-dam/topic_type.js」ファイルのコピーを作成します。
   - コピーした「topic_type.js」を編集し、変数「typeImageNameMap」の下にcustomtopictypeを変更/追加します
   - 変数「parentImagePath」の値をカスタムアイコンが保存される場所に変更して、画像フォルダーのパスを変更することもできます
- クライアントライブラリフォルダーにjs.txtという名前のファイルを作成し、「topic_type.js」への参照を追加します
- これらの変更を保存またはデプロイする
詳しくは、以下のスクリーンショットを参照してください。
  ![&#x200B; スクリーンショットを参照](../assets/authoring/custom-ditatype-icon-define-assetsui-styles.png)

最終的な出力は、スクリーンショット ![&#128279;](../assets/authoring/custom-ditatype-icon-assetsui-showstyles.png)に示すスクリーンショット に示すように表示されます
