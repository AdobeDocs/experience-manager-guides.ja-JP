---
title: 住所レビューのコメント
description: AEM Guidesで作成者としてのレビューコメントに対処する方法を説明します。 作成者がドキュメント内のコメントを編集、フィルタリング、許可、却下する方法を説明します。
exl-id: 4c969788-f700-4fd6-8afa-8e5b411b59f3
feature: Reviewing
role: User
source-git-commit: ac83f613d87547fc7f6a18070545e40ad4963616
workflow-type: tm+mt
source-wordcount: '1024'
ht-degree: 0%

---

# 住所レビューのコメント {#id2056B0X0KBI}


作成者は、Web エディターを使用して、トピック内のコメントに対処できます。 コメントは、レビューパネルで選択したレビュータスクに基づいて読み込まれます。 詳しくは、「左パネル **セクションの機能 ![](images/active-review-tasklist-icon.svg) 説明の** レビュー [ パネルを参照し ](../user-guide/web-editor-features.md#id2051EA0M0HS) ください。

次の節では、Web エディタでコメントを処理する方法について説明します。

作成者は、Web エディターからドキュメント内のコメントに対処できます。 コメントが\（text\）挿入されたか、削除されたか、または強調表示されたかを示す視覚的なインジケータが表示されます。 また、コメントのタイプは、各コメントエントリの上部にも記載されています。

>[!NOTE]
>
> レビューコメント\（アクティブなレビュードキュメント用\）に対処する際には、タグ全体の表示が有効な複数のタブでレビュー中のトピックを開かないように、オーサーモードとSourceビューモードを切り替えないようにしてください。

![](images/comments-page-web-editor_cs-new.png){align="left"}

Web エディターモードでは、右側のパネルに「レビュー」アイコンと「変更をトラック」アイコンが表示されます。 レビューパネルには、レビュー担当者がドキュメントに加えたすべてのコメントが表示されます。 **変更を追跡** パネルには、ドキュメントに挿入および削除されたすべてのコメントのステータスが表示されます。

- **A**: レビュータスクを選択して、レビュコメントを表示します。 トピックが複数のレビュータスクでレビュー用に共有されている場合は、このドロップダウンに表示されるタスクを確認できます。

  リストからレビュータスクを選択すると、レビュー担当者がタスクで作成したコメントを表示できます。 レビューのコメントはタスク内で個別に扱うことができます。つまり、コメントに対する更新は、それぞれのタスクのレビュー担当者にのみ表示されます。

- **B:** **コメント** パネルの ![](images/active-review-info-icon.svg) レビューの詳細 **&#x200B;**&#x200B;を選択すると、レビュータスクに関する詳細情報が表示されます。

   - **名前**: レビュータスクの名前です。
   - **レビューバージョン**：選択したレビュータスクに関連付けられているバージョンが表示されます。 これにより、レビュー用に共有したバージョンを追跡できます
   - **ステータス**：レビュータスクの現在のステータス。

  >[!NOTE]
  >
  > レビュータスクのルートマップがオーサリングのルートマップと異なる場合は、オーサリングとレビュールートマップが一致しないことを示す情報が表示されます。

- **C**：レビューを開始した後にトピックを更新した場合、「トピックをレビューに戻す」バージョン アイコンを選択すると、作業コピーがレビュー用に共有されたバージョンに戻ります。 これにより、レビュー用に共有されたバージョンにレビューフィードバックを直接組み込みやすくなります。 フィードバックを組み込んだ後、元に戻したバージョンの変更を保存したり、トピックの新しいリビジョンを作成したりできます。 トピックの新しいリビジョンを作成する場合は、レビュー用に共有されたトピックのバージョンから新しいブランチが作成されます。 例えば、現在のオーサリングバージョンが `1.3` ーサリングされているときに、トピックのバージョン `1.2` をレビュー用に共有した場合、このアイコンを使用してバージョン `1.2` に戻し、レビューコメントを組み込むことができます。 バージョン `1.2` に変更を組み込んだ後に新しいリビジョンを作成する場合は、トピックに対してバージョン `1.2.0` の新しいブランチが作成されます。

  通常は、レビューフィードバックを取り込んだ後に、最新バージョンのトピックの変更を結合します。 これを行うには、[ 結合 ](web-editor-features.md#id205DF04E0HS) 機能を使用して、トピックがレビュー用に共有された後に行われたすべての更新を取得します。

- **D**：左右に並べて表示するビューを開いて、トピックのコメントバージョンを表示します。 上のスクリーンショットからわかるように、一番左のセクションは、変更を加えることができるトピックの最新バージョンです。 次の節では、このトピックについてコメントで説明したバージョンを示します。 トピック内のコメント間を移動すると、側面図が変更され、コメントが作成されたトピックのバージョンが表示されます。 コメントパネル内の各コメントは、このセクション内の対応するテキストにリンクされています。 コメントされたテキストを識別するのに役立ちます。 コメントは、ドキュメント内のコメントされたテキストの順序で表示されます。

  側面図の上部にバージョン番号が表示されます。 このアイコンを再度選択すると、トピックのコメントされたバージョンが非表示になります。

- E：挿入および削除された\（または取り消し線\） コメントをトピックに直接読み込みます。 読み込みアイコンを選択すると、トピックの作業用コピーにすべてのテキストの挿入と削除が表示されます。 現在、コメントを承認または却下する方法は 2 つあります。

  提案された変更\（挿入または削除\）を 1 つずつ組み込む場合は、コンテンツ内のコメントを右クリックし、「変更を許可」または「変更を拒否」を選択します。 選択した内容に応じて、コメントが許可または却下されます。 承認されたコメントの場合は、コンテンツにコンテンツが追加され、拒否の場合は、コンテンツから削除されます。 また、レビューパネルでコメントのステータスが変更されます。

  ![](images/import-comment-accept-web-editor_cs-new.png){align="left"}

  また、変更履歴パネルを使用して、コメントを承認または却下することもできます。 コメントを選択すると、文書内のコメントが強調表示されます。

  ![](images/changes-tab_cs-new.png){align="left"}

  >[!IMPORTANT]
  >
  > コメントの読み込み機能は、レビュー用に共有されてから変更されていないドキュメントに対してのみ機能します。 ドキュメントをレビュー用に送信した後に変更を加えると、ドキュメントにコメント **インポートを強制** するアラートが表示されます。 ただし、この操作を行うと、ドキュメントに加えたすべての更新が失われます。 ドキュメントがの外部で作成され、レビュー用に共有される場合も、**読み込みを強制** アラートが表示されます。 コメントを読み込むことができます。

  と同様に、コメントを承認または却下すると、変更履歴リストから削除されます。 これは、ドキュメントで対処する必要のあるコメントの数を示す指標としても機能します。

- **F**：その他のオプション メニューから、レビュートピックに含まれるすべての添付ファイルをダウンロードします。
- **G**：コメント内のテキストを検索します。
- **H**：コメントを承認または却下します。

- **I**：コメントにフィルターを適用します。 注釈は、レビュータイプ \（all, highlighted, deleted, inserted, or sticky note\）、レビューステータス \（all, accepted, rejected, or none\）、レビュー担当者\（all or specific reviewer\（s\）\）、またはトピックのバージョンに基づいて表示するようにフィルタリングできます。


**親トピック：**&#x200B;[ レビューの概要 ](review.md)
