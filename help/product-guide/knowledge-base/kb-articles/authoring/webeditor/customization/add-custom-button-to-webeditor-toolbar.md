---
title: webeditor ツールバーに新しいカスタムのアクション可能なボタンを追加する
description: Webeditor ツールバーに新しいカスタムボタンを追加し、JavaScriptを呼び出してカスタム操作する方法について説明します。
exl-id: 34999db6-027a-4d93-944f-b285b4a44288
feature: Web Editor
role: User, Admin
TQID: https://experienceleague.adobe.com/7NqswCerJdfej5j4XqnPhHzvvAkhlThHAUY3iQYL3t0
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2:
  - id: ad602516-aca3-4247-9ae8-f393d958efa9
  - id: b1ef4d86-3917-4b76-a0bc-4a4771f9b3b0
  - id: f89f75b0-cf2e-4e96-aec8-fe8c39cbd0ef
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 553
ht-degree: 0%

---

# webeditor ツールバーに新しいカスタムのアクション可能なボタンを追加する

この記事では、webeditor ツールバーに新しいカスタムボタンを追加し、javascriptを呼び出して目的のカスタム操作を実行する方法について説明します。

webeditorに実用的なボタンを追加するには、次の手順を実行します。
- *ui_config.json*&#x200B;のボタンを必要な位置に追加します
- ユーザーがクリックしたときにアクションを実行できるように、ボタンのクリック時イベントをwebeditorに登録する


## 実例を挙げて実施

作成者がjira参照をトピックプロログセクションに追加する例で、これを理解しましょう。 jira reference-idが埋め込まれたprolog セクションは、次のようになります。

JIRA ID参照![&#128279;](../../../assets/authoring/webeditor-add-customtoolbarbutton-prolog-sample.png)を持つProlog セクション

JIRA IDを含む「change-request-id」要素は、APIから取得する必要があります（例えば、アプリケーションで表示される特定のJIRA クエリに基づいて）。 ユーザーがprolog セクションをオーサリングしている場合、ユーザーはボタンをクリックして、web エディターのツールバーからjira参照IDを挿入できます。例えば次のようになります。

![&#x200B; プロログセクション - JIRA参照を追加](../../../assets/authoring/webeditor-add-customtoolbarbutton-prolog-insertjirareference.png)

ユーザーがボタンをクリックすると、ダイアログが表示され、可能なオプションが表示され、ユーザーは次のような目的のJIRA IDを選択できます。

![&#x200B; プロログセクションでJIRA ID ダイアログを追加](../../../assets/authoring/webeditor-add-customtoolbarbutton-prolog-insertjirareference-dialog.png)

次に、prologに「change-request-id」を追加します。

JIRA ID参照![&#128279;](../../../assets/authoring/webeditor-add-customtoolbarbutton-prolog-sample.png)を持つProlog セクション



## 導入中


### ボタンを&#x200B;*ui_config.json*&#x200B;で設定して、webeditorに追加します

フォルダープロファイルを使用して、「XML エディター設定」タブの&#x200B;*ui_config.json*&#x200B;を確認し、「ツールバー」グループの目的のセクションにボタン設定JSONを追加します

```
{
    "on-click":"insertJIRARef",
    "icon":"linkCheck",
    "variant":"quiet",
    "type":"button",
    "title":"Insert JIRA Reference"
}
```

[フォルダープロファイルとui_config.jsonの設定について詳しくは、このリンクを使用してください](https://experienceleague.adobe.com/docs/experience-manager-guides-learn/videos/advanced-user-guide/editor-configuration.html?lang=en)


### 新しいボタンのクリック時イベントを処理します

注：以下の手順は、この記事に添付されているパッケージとして利用できます


- フォルダープロファイルを保存した後、プロジェクトディレクトリの下に「cq:ClientLibraryFolder」を作成し（下の&#x200B;*/apps*にすることができます）、以下のスクリーンショットに示すようにプロパティを追加します。
  ![webeditor](../../../assets/authoring/webeditor-add-customtoolbarbutton-clientlibrarysettings.png)のクライアントライブラリ設定

```
This example uses "coralui3" library to show a dialog as it is used in the Javascript sample we presented.
You may use different library of your choice.
```

- このクライアントライブラリフォルダーの下に、以下に示すように2つのファイルを作成します。
   - *overrides.js*: 「insertJIRARef」のクリック時イベントを処理するためのjavascript コードが含まれます（添付パッケージを使用して、このjavascriptのコンテンツを取得します）
   - *js.txt*：このjavascriptを有効にする「overrides.js」が含まれます

- 変更を保存すれば、テストの準備が整います。


### テスト

- web エディターを開く
- ユーザー設定から、カスタム *ui_config.json*&#x200B;を追加したフォルダープロファイルを選択します。 グローバルプロファイルに追加した場合は、おそらく既にそれを使用しています。
- トピックを開くと、ツールバーに「Jira リファレンスを挿入」という新しいボタンが表示されます
- 次に、次に示すようにprolog セクションをトピックに追加し、prolog要素「change-request-reference」内の「Jira リファレンスを挿入」ボタンをクリックしてみてください

```
<prolog>
    <change-historylist>
        <change-item>
            <change-request-reference>
            </change-request-reference>
            <change-completed></change-completed>
            <change-summary></change-summary>
        </change-item>
    </change-historylist>
</prolog>
```

次のスクリーンショットを参照して、どのように表示されるかを確認してください。

![新しいボタンをテスト &#x200B;](../../../assets/authoring/webeditor-add-customtoolbarbutton-testing.png)


### 添付ファイル

- ツールバーボタンアクション用のjavascript コードを含むwebeditor クライアントライブラリをインストールするサンプル clientlibs パッケージ：[このリンクを使用してダウンロード &#x200B;](../../../assets/authoring/webeditor-addbuttonontoolbar-insertjira-clientlib.zip)
- フォルダープロファイルにアップロードできる&#x200B;*ui_config.json*&#x200B;のサンプル：[&#x200B; サンプル ui_config.json](../../../assets/authoring/sample_ui_config_Guides4.2-InsertJiraReference.json)をダウンロード

```
Please note this is compatible to AEM 6.5 and AEM Guides version 4.2.
If you are using a different version please add the toolbar button to the ui_config.json manually.
```
