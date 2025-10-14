---
title: Markdown ドキュメントの作成
description: エディターから Markdown ドキュメントを作成します。 AEM Guidesで Markdown トピックを作成、オーサリング、プレビューする方法について説明します。
exl-id: def14e35-27c5-4b90-bc3d-eef7e8f317d2
feature: Authoring, Features of Web Editor
role: User
source-git-commit: 779be011c078fb3c2fae4fc6a92e3e2d734672b0
workflow-type: tm+mt
source-wordcount: '1197'
ht-degree: 2%

---

# エディターからの Markdown ドキュメントの作成 {#id223MIE0B079}

Markdown は、プレーンテキストドキュメントに書式設定要素を追加するのに役立つ軽量のマークアップ言語です。 Adobe Experience Manager Guidesには、エディターから Markdown \（.md\） トピックを作成、オーサリング、プレビューする機能が用意されています。 また、既存の Markdown ドキュメントをアップロードして、エディターで編集することもできます。

## Markdown トピックの作成

エディターから Markdown トピックを作成するには、次の手順を実行します。

1. リポジトリーパネルで「![](images/Add_icon.svg)」を選択し、ドロップダウンから **トピック** を選択します。
2. **新規トピック** ダイアログボックスで、次の詳細を入力します。

   ![](images/create-markdown-dialog.png){width="300" align="left"}

   * **タイトル**：トピックのタイトルを指定します。
   * **名前**：ファイル名は、トピックのタイトルに基づいて自動的に提示されます。 管理者が UUID 設定に基づく自動ファイル名を有効にしている場合、「名前」フィールドは表示されません。
   * **テンプレート**：ドロップダウンリストから **Markdown** を選択します。 テンプレート **トピック** はデフォルトで選択されています。
   * **パス**：トピックファイルを保存するパスを参照します。 デフォルトでは、リポジトリで現在選択されているフォルダーのパスが「パス」フィールドに表示されます。

   >[!NOTE]
   >
   > アップグレードの場合、使用中の現在のフォルダープロファイルに Markdown テンプレートを追加する必要があります。 エディターから [&#x200B; 新しいマークダウンテンプレートを作成 &#x200B;](./web-editor-features.md#templates) するか、マークダウンオーサリングに既存のテンプレートを使用できます。 Experience Manager Guidesにオーサリングテンプレートを追加する方法について詳しくは、[&#x200B; グローバルプロファイルまたはフォルダーレベルのプロファイルの設定 &#x200B;](../cs-install-guide/conf-folder-level.md) を参照してください。
3. 「**作成**」を選択します。

   Markdown トピックが選択したパスに作成され、編集用に開かれます。

   ![](images/markdown-topic-author.png){width="650" align="left"}


>[!NOTE]
>
> また、リポジトリーパネル内にフォルダーのマークダウントピックを作成することもできます。 Markdown トピックを作成するフォルダーを選択して、「**新規**」を選択し、オプションメニューから **トピック** を選択します。 **トピックを作成** ダイアログボックスにトピックの詳細を指定することで、Markdown トピックを作成できるようになりました。

## Markdown トピックのエディター機能を理解する

この節では、Markdown トピックのオーサリング用にエディターで使用できる様々な機能について説明します。 オーサリングインターフェイスは、次のセクションまたは領域に分かれています。

* [ツールバー](#toolbar)
* [コンテンツ編集領域](#content-editing-area)
* [Source、並べて表示およびプレビューモード](#source-side-by-side-and-preview-modes)
* [右側のパネル](#right-panel)


<!--
### Tab bar 

The tab bar features the file tabs of the topics or maps that are currently opened in the Editor along with other file-level options. 

Features available in the tab bar are explained as follows:

 ![](images/markdown-header.png){width="550" align="left"}




* **Topic tab**: Displays the currently opened topics in a tab. By default, you can view the file titles in the tab. As you hover over a file, you can view the file title and the file path as a tooltip.

    >![NOTE]
    >
    > As an administrator, you can also choose to view the list of files by filenames in the tabs. View [User preferences](./intro-home-page.md#user-preferences) for details.
* **Save all**: Saves the changes you have made in all opened topics. If you have multiple topics opened in the Editor, selecting **Save all** or pressing `Crtl+S` shortcut keys saves all documents in one click. You do not have to individually save each document.
* **AI Assistant**: [AI-powered Smart Help](./ai-based-smart-help.md) feature that helps you find relevant content from the Adobe Experience Manager Guides Documentation.
* **More actions**: Allows you to navigate to the **Assets UI**. As an administrator, you also get an option to navigate to the **Settings** page. Learn how to work with [settings](./web-editor-features.md#main-toolbar) or editor settings. 
* **Expand view**: Allows you to expand the page view using the **Expand** icon. In this view, the header bar is hidden, maximizing the content space. To return to the standard view, use the **Exit the expanded view** icon.

-->

### ツールバー

ツールバーは、タブバーのすぐ下にあります。 ツールバーで使用できる機能の説明は次のとおりです。

![](images/markdown-main-toolbar.png){align="left"}

| 機能 | 説明 |
|----------------|----------------|
| アクションの編集 | **切り取り** を含む様々なドキュメント編集機能にアクセスできます  ![](images/S_Cut_18_N.svg), **元に戻す**  ![](images/S_Undo_18_N.svg), **やり直し**  ![](images/S_Redo_18_N.svg), **コピー**  ![](images/S_Copy_18_N.svg), **削除**  ![](images/S_Delete_18_N.svg)、および **検索と置換**  ![](images/S_FindAndReplace_18_N.svg)。 使用可能なオプションには「**メニュー**」ドロップダウンからアクセスできます。 |
| テキストの書式設定オプション | **見出し** など、様々なテキスト書式設定オプションにアクセスできます  ![](images/S_DisplayHeading_18_N.svg), **太字**  ![](images/S_TextBold_18_N.svg), **斜体**  ![](images/S_TextItalic_18_N.svg), **打ち消し線**  ![](images/S_TextStrikethrough_18_N.svg), **コード**  ![](images/S_Code_18_N.svg)、および **ブロック引用**  ![](images/S_BlockQuoteMultipleLines_18_N.svg)。 |
| コンテンツ挿入オプション | **番号付きリスト** を挿入するオプションを提供します  ![](images/S_TextNumbered_18_N.svg), **順序付きリスト**  ![](images/S_TextBulleted_18_N.svg), **テーブル**  ![](images/tableAdd.svg), **画像** ![](images/S_ImageAdd_18_N.svg), **相互参照**  ![](images/S_LinkGlobe_18_N.svg)、および **Symbol**  ドキュメントに ![](images/S_SpecialCharacter_18_N.svg) り込みます。<br><br> **注意**：画像やその他のファイルを Markdown エディターにドラッグ&amp;ドロップすることもできます。 ファイルは相互参照リンクとして追加され、イメージは標準イメージ要素として表示されます。 |
| バージョン履歴 | Markdown ファイルのバージョンを作成し、変更の履歴を表示できます。 必要に応じて、様々なバージョンを比較したり、以前のバージョンに戻したりできます。 「バージョン履歴」オプションは **メニュー** ドロップダウンに表示されます。 |
| 新しいバージョンとして保存 | トピックに加えた変更を保存し、トピックの新しいバージョンを作成します。 新しく作成したトピックに取り組んでいる場合、バージョン情報はなしとして表示されます。 |
| ロック/ロック解除 | 現在のファイルをロックまたはロック解除します。 ファイルをロックすると、そのファイルへの排他的な書き込みアクセスが可能になります。 これにより、他のユーザーがファイルを編集できなくなります。 他のユーザーに編集アクセスを与える場合は、ファイルのロックを解除します。 管理者は、他のユーザーがロックしているファイルのロックを解除できる **ロック解除を強制** 機能にもアクセスできます。 |

>[!NOTE]
>
> **バージョン履歴** 機能と、編集操作、テキスト書式設定、コンテンツ挿入で説明されている機能には、**Source** と **並べて表示** の両方からアクセスできます。

### コンテンツ編集領域

コンテンツ編集領域には、トピックの Markdown ソースが表示されます。このソースで、すべてのコンテンツ編集を行います。 左右に並べて表示する場合、この領域は 2 つのセクションに分割されます。左側に Markdown ソースビュー、右側にプレビューです。 複数のトピックを同時に開いて、それぞれのタブに表示することができます。

### Source、並べて表示およびプレビューモード

Markdown オーサリングの場合、エディターは、コンテンツの作成と書式設定に役立つ 3 つの異なる表示モードをサポートします。

![](images/markdown-footer.png){align="left"}

* ソース
* 並列
* プレビュー

**ソース**

これは、エディターの Markdown コードビューです。 通常のマークダウンエディターと同様に、マークダウントピックを編集できます。 Source ビューには、文書のリビジョンの保存、見出しの挿入、表の挿入、イメージの挿入などのオプションがあります。

このビューは、レンダリングされた出力を表示せずに、生のマークダウンの書き込みと編集にのみ焦点を当てる場合に使用します。

**並列**

このモードでは、エディターが次の 2 つのパネルに分割されます。

* 編集中の Markdown トピックを表示するSource パネル。
* Markdown トピックのレンダリングされた出力をリアルタイムで表示するプレビューパネル。

![](images/markdown-topic-side-by-side.png){width="550" align="left"}

このビューは、markdown トピックの編集時にレンダリングされた出力をリアルタイムで表示する場合に使用します。

**プレビュー**

プレビューモードで Markdown トピックを開くと、ブラウザーでユーザーが表示したときにトピックがどのように表示されるかを示します。 この表示では、すべての編集機能がツールバーから削除されます。 ただし、ツールバーの **新規バージョンとして保存** 機能、**ロック/ロック解除** 機能、右側のパネルの **ファイルプロパティ** 機能には引き続きアクセスできます。

### 右側のパネル

右側のパネルでは、「**ファイルのプロパティ」パネルにアクセスできます。

ファイルのプロパティには、次の 2 つのセクションがあります。

**一般**

「一般」セクションでは、次の機能にアクセスできます。

* **ファイル名**：選択したトピックのファイル名が表示されます。
* **ID**：選択したトピックの ID が表示されます。
* **言語**：トピックの言語を表示します。 プロパティページの「言語」フィールドから設定されます。
* **作成日**: トピックが作成された日時を表示します。
* **変更日**: トピックが変更された日時を表示します。
* **ロック済み**: トピックをチェックアウトしたユーザーを表示します。
* **ドキュメントの状態**：現在開いているトピックのドキュメントの状態を選択および更新できます。 詳しくは、[&#x200B; ドキュメントの状態 &#x200B;](./web-editor-document-states.md) を参照してください。
* **タグ**：トピックのメタデータタグです。 これらは、プロパティ ページのタグ フィールドから設定します。 ドロップダウンから入力または選択できます。 タグがドロップダウンの下に表示されます。 タグを削除するには、タグの横にある十字アイコンを選択します。
* **その他のプロパティを編集**：ファイルのプロパティページから、その他のプロパティを編集できます。

**参照**

「参照」セクションでは、次の機能にアクセスできます。

* **使用されている場所**：参照に使用されているは、現在のファイルが参照または使用されているドキュメントのリストです。
* **送信リンク**：送信リンクには、現在のドキュメントで参照されているドキュメントのリストが表示されます。

>[!NOTE]
>
> 使用されているすべてのインリンク参照および送信リンク参照は、ドキュメントにハイパーリンクされています。 リンクされたドキュメントを簡単に開いて編集できます。

## 機能の制限

次のExperience Manager Guides機能は、現在、Markdown オーサリングには適用されません。

1. レビュー
2. 結合
3. AI アシスタント
4. 変更の追跡





**親トピック：**&#x200B;[&#x200B; エディターの概要 &#x200B;](web-editor.md)
