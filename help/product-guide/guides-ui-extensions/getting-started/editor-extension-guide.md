---
title: Editor 2.0の拡張フレームワークの変更
description: エディター2.0の拡張フレームワークの変更点について説明します
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 3f38264b6ce09366d07cdd302c9c53e8abcf4b7c
workflow-type: tm+mt
source-wordcount: '2003'
ht-degree: 4%

---

# エディター2.0の拡張フレームワークの変更（新しいエディター）

このドキュメントでは、新しいエディター（ProseMirror ベースのエディター）の拡張フレームワークの一部として`guides.editor` （および`guides`）に追加されたすべてのAPIについて説明します。 これらのAPIを使用すると、外部の拡張機能は、直接DOM操作や内部の実装に関する知識がなくても、エディターと対話できます。

## 概要

グローバル `guides` オブジェクトは、すべての拡張機能の統合のエントリ ポイントです。

```js
guides.editor    // Editor interaction APIs
guides.util      // Utility libraries (lodash, async)
guides.ready(cb) // Lifecycle hook fires when the editor is fully loaded
```

すべての`guides.editor` APIは、拡張機能コントローラ、ツールバーハンドラー、およびダイアログロジックから安全に呼び出すことができます。

## ライフサイクル

`guides.ready(callback)`: ページビューマネージャーが完全に読み込まれたら、実行するコールバックを登録します。 プラグインを登録したり、エディター設定を実行したりする前に、これを使用します。

**署名：**

```ts
guides.ready(callback: () => void): void
```

**例：**

```js
guides.ready(() => {
  // Safe to access guides.editor APIs here
  guides.editor.registerPlugin(createMyPlugin);
});
```

## エディターの状態プロパティ

- `guides.editor.filePath`：現在アクティブなドキュメントのファイルパスを返します。

  **タイプ：** `string | undefined`

  **例：メタデータ API呼び出しのファイル パスの読み取り：**

  ```js
  const filePath = guides.editor.filePath;
  if (filePath) {
  tcx.api.getMetadata(filePath).subscribe((metadata) => {
    // use metadata...
    });
  }
  ```

  **例：ファイルの場所**&#x200B;に基づく条件付きロジック

  ```js
  const filePath = guides.editor.filePath;
  if (filePath?.endsWith(".ditamap")) {
    // ditamap-specific handling
  }
  ```

- `guides.editor.version`：現在読み込まれているエディターのバージョン文字列を返します。

  | 値 | エディター |
  |---------|------------------------------------|
  | `1.0.0` | レガシーCKEditor （`xml_author_view`） |
  | `2.0.0` | 新しいエディター（ProseMirror ベース） |

  **タイプ：** `string`

  **例：**

  ```js
  if (guides.editor.version  === '1.0.0') {
    // CKEditor specific logic 
  }
  ```

- `guides.editor.appState(keyName)`: キー名でアプリケーションモデルから値を読み取ります。

  **署名：**

  ```ts
  guides.editor.appState(keyName: string): unknown
  ```

  **例：**

  ```js
  const editorMode = guides.editor.appState('editorMode');
  ```

## 編集者インタラクション

- `guides.editor.focus()`: アクティブなエディターにフォーカスを設定します。 エディターにフォーカスが必要なコマンドを実行する前に、これを呼び出します。

  **署名：**

  ```ts
  guides.editor.focus(): boolean
  ```

  **例：コンテンツを挿入する前にフォーカス**

  ```js
  guides.editor.focus();
  const hasSelection = !!guides.editor.runUtil('hasSelection');
  // ...proceed with wrap or insert
  ```

- `guides.editor.canInsertXmlElement(tagName, insertAfter?)`：特定のXML要素を現在のカーソル位置に挿入できるかどうかを確認します。

  **署名：**

  ```ts
  guides.editor.canInsertXmlElement(tagName: string, insertAfter?: boolean): boolean
  ```

  **例：`<xref>`**&#x200B;を挿入する前に監視

  ```js
  const canInsert = guides.editor.canInsertXmlElement("xref");
  if (!canInsert) {
    return tcx.util.showAlert("warning", "xref is not allowed here");
  }
  ```

  **例：`<sup>` /`<sub>`**&#x200B;を挿入する前に監視

  ```js
  const canInsert = guides.editor.canInsertXmlElement("sup");
  if (!canInsert) {
    return tcx.util.showAlert("warning", "superscript is not allowed here");
  }
  ```

- `guides.editor.selectCurrentBlockElement()`: エディターで現在のブロックレベルの要素を選択します。

  **署名：**

  ```ts
  guides.editor.selectCurrentBlockElement(): boolean
  ```

  **例：**

  ```js
  guides.editor.selectCurrentBlockElement();
  ```

- `guides.editor.getValidElementNamesForInsertion(args)`：現在の位置に挿入できる有効なXML要素名のリストを返します。

  **署名：**

  ```ts
  guides.editor.getValidElementNamesForInsertion(args: {
    insertMode?: 'after' | 'before' | 'rename',
    strict: boolean
  }): string[] | false
  ```

  **例：**

  ```js
  const validElements = guides.editor.getValidElementNamesForInsertion({
    insertMode: 'after',
    strict: true
  });
  ```

- `guides.editor.updateAttributeByXpath(args)`: XPathで識別されるノードの特定のXML属性を更新します。 アクティブなエディターの`updateAttributeByXpath` メソッドにデリゲートします。

  **署名：**

  ```ts
  guides.editor.updateAttributeByXpath(args: UpdateXpathArgs): any
  ```

## コマンド実行

- `guides.editor.runCommand(commandName, ...args)`：新しいエディターで名前付きコマンドを実行します。 コマンドが成功した場合は`true`、成功しなかった場合は`false`を返します。

  **署名：**

  ```ts
  guides.editor.runCommand(commandName: string, ...args: any[]): boolean
  ```

  **使用可能なコマンド**

  >[!NOTE]
  >
  > 安定性：以下に示すコマンドは、公開インターフェイスの一部です。 それらの名前、署名、および観測可能な動作は安定していると見なされ、互換性のために維持されます。 追加のコマンドはエディター内に存在する場合がありますが、これらは内部であり、外部での使用を目的としたものではなく、事前の通知なしに変更または削除される場合があります。

  | カテゴリ | コマンド | 引数 | 説明 |
  |---|---|---|---|
  | 一般 | `undo` | _（なし）_ | 最後の文書変更を取り消す |
  | 一般 | `redo` | _（なし）_ | 最後に取り消した変更をやり直す |
  | 選択範囲 | `select` | `from: number, to?: number` | `from`から`to`までの範囲を選択します（`to`が省略された場合は`from`のみです） |
  | 選択範囲 | `cursor` | `pos: number` | カーソルを`pos`に移動します |
  | 選択範囲 | `selectNodesFromXpaths` | `xpaths: Array<{path: Array<{name: string, count: number}>}>` | XPathの位置によって識別されるノードを選択します |
  | 書式設定 | `toggleBold` | _（なし）_ | 現在の選択範囲の太字の書式設定を切り替えます |
  | 書式設定 | `toggleItalic` | _（なし）_ | 現在の選択範囲の斜体の書式設定を切り替えます |
  | 書式設定 | `toggleUnderline` | _（なし）_ | 現在の選択範囲の下線書式を切り替えます |
  | 書式設定 | `toggleFormatting` | `markType: string, allowEmptySelection?: boolean` | 選択範囲の書式設定要素（例：`'b'`、`'i'`、`'sup'`、`'sub'`）を切り替えます |
  | 挿入 | `insertText` | `text: string` | カーソルにプレーンテキストを挿入 |
  | 挿入 | `insertXml` | `xml: string, position?: number, options?: InsertXmlOptions` | 生のXMLをカーソルまたは特定の位置に挿入します |
  | 挿入 | `insertXmlAfterElement` | `elementName: string, xmlString: string` | `elementName`に一致する最も近い祖先の直後にXMLを挿入 |
  | 挿入 | `replaceSelectionWithXml` | `xmlString: string` | 現在の選択範囲を指定されたXMLに置き換えます |
  | ノード操作 | `surroundWithElement` | `tagName: string, attrs?: Record<string,unknown>, replaceTextWithEmptyNode?: boolean` | 現在の選択範囲を特定の要素で囲みます |
  | ノード操作 | `wrapNode` | `type: string, target?: number, attrs?: Record<string, unknown>` | ノードを`target` （または現在のノード）で`type`の要素にラップします |
  | ノード操作 | `renameNode` | `newNodeName: string` | 現在のノードの要素の名前を変更します |
  | ノード操作 | `unwrapNode` | _（なし）_ | 現在のノードのラッパー要素を削除し、その内容を維持します |
  | 削除 | `deleteSelection` | _（なし）_ | 現在選択されているコンテンツを削除します |
  | 削除 | `deleteNode` | _（なし）_ | 現在のノード全体を削除します |
  | 属性 | `setNodeXmlAttributes` | `position: number, attrs: Record<string, unknown>` | ノード `position`に複数のXML属性を設定します |
  | 属性 | `setNodeXmlAttribute` | `position: number, attrName: string, value: string` | ノード `position`に単一のXML属性を設定します |
  | リスト | `toggleList` | `listName: 'ol' \| 'ul'` | 指定された種類のリストと段落の間で現在のブロックを切り替えます |
  | テーブル | `addRowAfter` | `count?: number` | 現在の行の下に`count`行を追加します（デフォルトは1） |
  | テーブル | `addColumnAfter` | `count?: number` | 現在の列の右側に`count`列を追加します（デフォルトは1） |
  | テーブル | `deleteRow` | _（なし）_ | 現在の行を削除します |
  | テーブル | `deleteColumn` | _（なし）_ | 現在の列を削除します |
  | テーブル | `mergeCells` | _（なし）_ | 現在選択されているセルを結合します |
  | クリップボード | `copy` | _（なし）_ | 現在の選択範囲をクリップボードにコピーします |
  | クリップボード | `cut` | _（なし）_ | 現在の選択範囲をクリップボードにカットします |
  | 検索と置換 | `setSearchQuery` | `query: string, options?: { caseSensitive?: boolean, regex?: boolean }` | アクティブな検索クエリを設定します |
  | 検索と置換 | `findNext` | _（なし）_ | 次の検索一致に移動 |
  | 検索と置換 | `replaceAll` | `replacement?: string` | 現在の検索クエリのすべての一致を`replacement`に置換します |

   - **例：ノードに複数の属性を設定**

     ```js
     guides.editor.runCommand(
       "setNodeXmlAttributes",
       rootRange.from,
       { createdDate: "2024-01-01", author: "Jane Doe" }
     );
     ```

   - **例：ノードに単一の属性を設定**

     ```js
     guides.editor.runCommand(
       "setNodeXmlAttribute",
       range.from,
       "placeholdertext",
       "Chapter 3 — Safety Requirements"
     );
     ```

   - **例：選択範囲を要素で折り返し、属性を設定**

     ```js
     const didWrap = guides.editor.runCommand(
       "surroundWithElement",
       "ph",
       { outputclass: "highlight" },
       true   // replace text content with empty node
     );
     ```

   - **例：`<sup>`で選択範囲を折り返す（上付き文字を切り替える）**

     ```js
     const didWrap = guides.editor.runCommand('surroundWithElement', 'sup');
     if (!didWrap) {
       tcx.util.showAlert("warning", "superscript is not allowed here");
     }
     ```

   - **例：現在のノードのラップ解除（上付き文字をオフに切り替え）**

     ```js
     const didUnwrap = guides.editor.runCommand('unwrapNode');
     ```

   - **例：カーソルにXMLを挿入し、中にキャレットを配置**

     ```js
     guides.editor.runCommand(
       'insertXml',
       '<sup></sup>',
       undefined,
       { setCursorInContent: true, focusEditor: true, selectInsertedXml: false }
     );
     ```

- `guides.editor.canRunCommand(commandName, ...args)`：名前付きコマンドを実際に実行せずに、現在実行できるかどうかを確認します。

  **署名：**

  ```ts
  guides.editor.canRunCommand(commandName: string, ...args: any[]): boolean
  ```

  **例：**

  ```js
  if (guides.editor.canRunCommand('surroundWithElement', 'sup')) {
    guides.editor.runCommand('surroundWithElement', 'sup');
  }
  ```

## ユーティリティ関数

- `guides.editor.runUtil(utilName, ...args)`：新しいエディターのユーティリティ レジストリから名前付きユーティリティを呼び出します。 ユーティリティの結果、またはユーティリティが見つからない場合は`undefined`を返します。

  **署名：**

  ```ts
  guides.editor.runUtil(utilName: string, ...args: any[]): any
  ```

  **使用可能なユーティリティ**

  >[!NOTE]
  >
  > 安定性：以下に示すユーティリティは、公開インターフェイスの一部です。 それらの名前、署名、および観測可能な動作は安定していると見なされ、互換性のために維持されます。 追加のコマンドはエディター内に存在する場合がありますが、これらは内部であり、外部での使用を目的としたものではなく、事前の通知なしに変更または削除される場合があります。


  | カテゴリ | ユーティリティ | 引数 | 戻り値 | 説明 |
  |---|---|---|---|---|
  | 位置 | `getTextPos` | _（なし）_ | `{ start: number, end: number }` | ProseMirror ドキュメント内の現在の選択範囲の開始位置と終了位置 |
  | 位置 | `getNodePosition` | `position?: number` | `number` | 現在選択/フォーカスされているノードのドキュメントの位置 |
  | 位置 | `mapToXpath` | `position: number` | `XPathPosition` | ProseMirrorの位置をXPath記述子にマッピングします |
  | 位置 | `inverseMap` | `xpath: XPathPosition \| number` | `number` | XPath記述子（または数値位置）をProseMirror位置にマッピングします |
  | ドキュメント | `getNodeTree` | _（なし）_ | `NodeTree \| null` | アウトラインのレンダリングに適した、ドキュメントのツリー表現 |
  | ドキュメント | `getAncestorsNames` | `position?: number` | `string[]` | `position`にある祖先ノードのXML タグ名 |
  | ドキュメント | `getAncestorsDetails` | `position?: number` | `{ currNode: string, ancestors: Array<{tagName: string}>, previousSibling?: string, nextSibling?: string } \| undefined` | 現在のノード、祖先、および`position`の直近の兄弟 |
  | ドキュメント | `getAncestorXpaths` | `includeId?: boolean` | `AncestorXpathItem[]` | すべての祖先ノードのXPath文字列 |
  | ドキュメント | `getPreviousSibling` | `position?: number` | `string \| undefined` | 前の兄弟のタグ名（存在する場合） |
  | ドキュメント | `getNextSibling` | `position?: number` | `string \| undefined` | 次の兄弟のタグ名（ある場合） |
  | ドキュメント | `getTagName` | `position?: number` | `string \| null` | `position` （またはカーソル）にある要素のタグ名 |
  | 要素検索 | `findPositionRange` | `tagName: string` | `{ from: number, to: number } \| undefined` | 指定されたタグを持つ最初の要素の範囲 |
  | 要素検索 | `findPositionRanges` | `tagName: string` | `Array<{ from: number, to: number }>` | `tagName`に一致する要素のすべての範囲 |
  | 属性 | `getAttributeAtPosition` | `position: number, attrName: string` | `unknown` | `position`にあるノードからXML属性値を読み取ります |
  | 属性 | `getSerializableAttributes` | `xpath: string` | `Record<string, unknown>` | `xpath`のノードのすべてのシリアル化可能なXML属性 |
  | シリアル化 | `serialize` | _（なし）_ | `string` | 文書全体をXMLにシリアライズします |
  | シリアル化 | `serializeToText` | _（なし）_ | `string` | ドキュメント全体をプレーンテキストにシリアライズします |
  | シリアル化 | `getRangeXml` | `xpaths: AncestorXpathItem[]` | `string` | XPath定義範囲のXMLを返します |
  | 選択範囲 | `getSelectedXml` | _（なし）_ | `string` | 現在選択されているコンテンツをXML文字列として |
  | 選択範囲 | `getSelectedText` | _（なし）_ | `string` | マークアップなしで選択したテキスト |
  | 選択範囲 | `hasSelection` | _（なし）_ | `boolean` | アクティブなテキスト/ノード選択がある場合は`true` |
  | 選択範囲 | `isSelectionEditable` | _（なし）_ | `boolean` | 現在の選択範囲が編集可能なコンテンツ内にあるかどうか |
  | 選択範囲 | `isPositionEditable` | `position: number` | `boolean` | `position`が編集可能なコンテンツ内にあるかどうか |
  | 挿入 | `canInsert` | `name: string, position?: number, insertMode?: 'after' \| 'before' \| 'rename'` | `boolean` | `name`を`position` （またはカーソル）に挿入できるかどうか |
  | 挿入 | `getInsertPosition` | `name: string, position?: number, insertMode?: 'after' \| 'before' \| 'rename'` | `number \| null` | 挿入できない場合は、`name`または`null`の挿入の位置が有効です |
  | 挿入 | `getNodeXml` | `nodeName: string, nodeContent?: string` | `string \| null` | ノードタイプのXML テンプレート |
  | 回り込み/名前変更 | `getValidWrapNodeElementNames` | _（なし）_ | `string[]` | 現在の選択範囲をラップする可能性のあるエレメント名 |
  | 回り込み/名前変更 | `getValidRenameNodeElementNames` | _（なし）_ | `string[]` | 現在のノードの名前を変更できる要素名 |
  | テーブル | `getTableInfo` | `position?: number` | `{ rows: number, cols: number, header: number }` | 現在のテーブルのディメンション |
  | タグビュー | `isTagViewActive` | _（なし）_ | `boolean` | タグビューレンダリングがアクティブかどうか |

  **例：カーソル位置と祖先名を取得**

  ```js
  const textPos = guides.editor.runUtil("getTextPos");
  const ancestorNames = guides.editor.runUtil(
    "getAncestorsNames",
    typeof textPos === "number" ? textPos : undefined
  );
  ```

  **例：すべての`<xref>`要素を検索し、属性を読み取る**

  ```js
  const xrefRanges = guides.editor.runUtil("findPositionRanges", "xref") || [];
  xrefRanges.forEach((range) => {
    const id = guides.editor.runUtil("getAttributeAtPosition", range.from, "id");
    const placeholderText = guides.editor.runUtil(
      "getAttributeAtPosition",
      range.from,
      "placeholdertext"
    );
  });
  ```

  **例：ルート要素の範囲を検索し、その属性を読み取る**

  ```js
  const rootRange = guides.editor.runUtil("findPositionRange", "concept"); // or "topic"
  if (rootRange) {
    const createdDate = guides.editor.runUtil(
      "getAttributeAtPosition",
      rootRange.from,
      "createdDate"
    );
    const author = guides.editor.runUtil(
      "getAttributeAtPosition",
      rootRange.from,
      "author"
    );
  }
  ```

  **例：操作の前に選択を確認し、祖先のコンテキストを検証する**

  ```js
  const ancestorsDetails = guides.editor.runUtil('getAncestorsDetails');
  const selectedText = guides.editor.runUtil('getSelectedPlainText');
  const hasSelection = !!guides.editor.runUtil('hasSelection');
  
  const firstAncestor = ancestorsDetails?.currNode || ancestorsDetails?.ancestors?.[0]?.tagName;
  if (firstAncestor === 'ph') {
    tcx.util.showAlert("warning", "Operation is not allowed inside this element type.");
    return;
  }
  ```

  **例：祖先XPath**&#x200B;から要素IDを取得

  ```js
  const ancestorItems = guides.editor.runUtil('getAncestorXpaths', true);
  for (const item of ancestorItems) {
    const attrs = guides.editor.runUtil('getSerializableAttributes', item.xpath);
    if (attrs?.id) { /* use element ID */ }
  }
  ```

## 装飾API

Decoration APIは、一般的なビジュアルカスタマイズ用の完全なProseMirror プラグインを作成する代わりに、より高水準の代替手段を提供します。 `Plugin`、`PluginKey`、`DecorationSet`を手動で管理する代わりに、*何*&#x200B;を装飾し、*方法*&#x200B;を記述します。エディターの中央の装飾マネージャーがProseMirror状態を内部で処理します。

装飾は文字列`id`で識別されるので、いつでも個別に更新または削除できます。

>[!NOTE]
>
> **新しいエディターのみ**&#x200B;これらのAPIは、レガシーエディター（`version === '1.0.0'`）で操作できません。

- `guides.editor.addDecoration(id, selector, options)`：装飾ルールを追加または置換します。 現在のドキュメントの`selector`に一致するすべてのノードは、`options`に従って装飾されます。 デコレーションは、ドキュメントが変更されるたびに自動的に再適用されます。

  **署名：**

  ```ts
  guides.editor.addDecoration(
    id: string,
    selector: string,
    options: DecorationOptions
  ): boolean
  ```

  **`DecorationOptions`フィールド：**

  | フィールド | 種類 | 説明 |
  |---|---|---|
  | `class` | `string` | 一致するノードに追加されたCSS クラス名 |
  | `computeAttributes` | `(node, context) => Record<string, string>` | ノードごとに動的`data-*`またはその他のHTML属性を返す関数 |
  | `filter` | `(node) => boolean` | オプションの述語 – これが`true`を返すノードのみが装飾されます |

  `computeAttributes`に渡された`context` オブジェクトには、次のものが含まれます。
   - `index` — セレクターに一致する兄弟のノードの0 ベースの位置

  **例：すべての`<section>`要素にCSS クラスを追加**

  ```js
  guides.editor.addDecoration('highlight-sections', 'section', {
    class: 'my-section-highlight'
  });
  ```

  **例：計算された`data-number-label`属性を各セクション**&#x200B;に追加します

  ```js
  guides.editor.addDecoration('section-numbers', 'section', {
    computeAttributes: (node, context) => ({
      'data-number-label': String(context.index + 1)
    })
  });
  ```

  **例：`importance="high"`属性**&#x200B;を持つセクションのみを装飾

  ```js
  guides.editor.addDecoration('important-sections', 'section', {
    class: 'section-important',
    filter: (node) => node.attrs?.xmlAttrs?.importance === 'high'
  });
  ```

  **例：クラスと計算属性を組み合わせる**

  ```js
  guides.editor.addDecoration('numbering-mode', 'conbody', {
    class: 'legacy-numbering'
  });
  
  guides.editor.addDecoration('section-numbers', 'section', {
    computeAttributes: (node, context) => ({
      'data-number-label': String(context.index + 1)
    })
  });
  ```

- `guides.editor.removeDecoration(id)`：以前に追加した装飾をIDで削除します。

  **署名：**

  ```ts
  guides.editor.removeDecoration(id: string): boolean
  ```

  **例：**

  ```js
  guides.editor.removeDecoration('section-numbers');
  ```

- `guides.editor.batchDecorations(changes)`：単一のProseMirror ディスパッチで、複数の追加/削除デコレーション変更を適用します。 複数のデコレーションを一度に切り替える場合に使用して、複数の再レンダリングを避けます。

  **署名：**

  ```ts
  guides.editor.batchDecorations(changes: DecorationBatchChange[]): boolean
  
  type DecorationBatchChange =
    | { action: 'add', id: string, selector: string, options: DecorationOptions }
    | { action: 'remove', id: string }
  ```

  **例：2つの番号付けモードをアトミックに切り替える**

  ```js
  guides.editor.batchDecorations([
    { action: 'remove', id: 'legacy-numbering' },
    {
      action: 'add',
      id: 'division-numbering',
      selector: 'conbody',
      options: { class: 'division-numbering' }
    }
  ]);
  ```

  **例：1つの装飾をクリアし、2つの新しい装飾を追加**

  ```js
  guides.editor.batchDecorations([
    { action: 'remove', id: 'old-highlights' },
    {
      action: 'add',
      id: 'section-labels',
      selector: 'section',
      options: {
        computeAttributes: (node, ctx) => ({ 'data-section-index': String(ctx.index) })
      }
    },
    {
      action: 'add',
      id: 'note-style',
      selector: 'note',
      options: { class: 'styled-note' }
    }
  ]);
  ```

- `guides.editor.clearDecorations()`：装飾マネージャーが管理しているすべてのアクティブな装飾を削除します。

  **署名：**

  ```ts
  guides.editor.clearDecorations(): boolean
  ```

  **例：**

  ```js
  guides.editor.clearDecorations();
  ```

- `guides.editor.getDecorations()`：現在アクティブなすべての装飾のIDを返します。

  **署名：**

  ```ts
  guides.editor.getDecorations(): string[]
  ```

  **例：**

  ```js
  const active = guides.editor.getDecorations();
  console.log('Active decorations:', active);
  // e.g. ['section-numbers', 'numbering-mode', 'note-style']
  ```


### 装飾APIと`registerPlugin`の比較

| シナリオ | 使用方法 |
|---|---|
| 一致する要素にCSS クラスまたは`data-*`属性を適用する | `addDecoration` |
| ランタイム状態（メタデータ、ユーザーアクション）に基づいてスタイルを切り替えたり、更新したりします | `addDecoration` / `removeDecoration` / `batchDecorations` |
| 複雑なプラグインロジック：カスタム状態、キーバインディング、ウィジェットの装飾、イベントハンドラー | `registerPlugin` |
| シャドウ DOMへのCSSの挿入 | `registerPlugin` （`css` フィールド） |


## ProseMirror プラグイン登録

- `guides.editor.registerPlugin(factory)`：すべての新規エディターインスタンスに含めるProseMirror プラグイン ファクトリを登録します。 ファクトリ関数のみが受け入れられ、直接プラグインインスタンスは拒否されます。 ファクトリはエディターインスタンスごとに1回呼び出され、独立したプラグイン状態になります。

  **署名：**

  ```ts
  guides.editor.registerPlugin(factory: () => PluginConfig): void
  
  interface PluginConfig {
    plugin: ProseMirrorPlugin | ProseMirrorPlugin[]
    css?: string  // Injected into editor's shadow DOM
  }
  ```

  **例：エディターの準備が整った後にプラグインを登録する**

  ```js
  guides.ready(() => {
    guides.editor.registerPlugin(createNumberingPlugin);
    guides.editor.registerPlugin(createXrefPlugin);
  });
  ```

  **例：CSS**&#x200B;を使用したインラインファクトリ

  ```js
  guides.editor.registerPlugin(() => ({
    plugin: new guides.editor.prosemirror.state.Plugin({
      key: new guides.editor.prosemirror.state.PluginKey("myPlugin"),
      props: {
        decorations(state) {
          // return DecorationSet...
        }
      }
    }),
    css: `.my-decoration { background: yellow; }`
  }));
  ```

  >[!NOTE]
  >
  > `css`を介して渡されたCSSは、エディターのシャドウ DOMに挿入されます。 通常のページレベルのスタイルシートは、エディター内には適用されません。

## ProseMirror ライブラリ

- `guides.editor.prosemirror`: プラグイン開発で使用するProseMirror パッケージを直接公開します。 これにより、ProseMirrorを個別に拡張コードにバンドルする必要がなくなります。

  | プロパティ | パッケージ |
  |---|---|
  | `state` | `prosemirror-state` |
  | `model` | `prosemirror-model` |
  | `view` | `prosemirror-view` |
  | `transform` | `prosemirror-transform` |
  | `commands` | `prosemirror-commands` |
  | `keymap` | `prosemirror-keymap` |
  | `history` | `prosemirror-history` |
  | `tables` | `prosemirror-tables` |
  | `dropcursor` | `prosemirror-dropcursor` |
  | `markdown` | `prosemirror-markdown` |

  **例：ノード装飾プラグインの作成**

  ```js
  const myPluginKey = new guides.editor.prosemirror.state.PluginKey("myPlugin");
  
  const createMyPlugin = () => {
    const { Plugin } = guides.editor.prosemirror.state;
    const { Decoration, DecorationSet } = guides.editor.prosemirror.view;
  
    return {
      plugin: new Plugin({
        key: myPluginKey,
        state: {
          init() { return { enabled: true }; },
          apply(tr, value) {
            const meta = tr.getMeta(myPluginKey);
            return meta ? { ...value, ...meta } : value;
          }
        },
        props: {
          decorations(state) {
            const decorations = [];
            state.doc.descendants((node, pos) => {
              if (node.type.name === "section") {
                decorations.push(
                  Decoration.node(pos, pos + node.nodeSize, { class: "my-section" })
                );
              }
            });
            return DecorationSet.create(state.doc, decorations);
          }
        }
      }),
      css: `.my-section { border-left: 3px solid #ccc; padding-left: 8px; }`
    };
  };
  ```

  **例：ウィジェット装飾プラグイン （インライン表示テキスト）の作成**

  ```js
  const xrefPluginKey = new guides.editor.prosemirror.state.PluginKey("xrefDisplay");
  
  const createXrefPlugin = () => {
    const { Plugin } = guides.editor.prosemirror.state;
    const { Decoration, DecorationSet } = guides.editor.prosemirror.view;
  
    return {
      plugin: new Plugin({
        key: xrefPluginKey,
        props: {
          decorations(state) {
            const decorations = [];
            state.doc.descendants((node, pos) => {
              if (node.type.name.includes("xref")) {
                const display = node.attrs?.xmlAttrs?.placeholdertext;
                if (display) {
                  decorations.push(
                    Decoration.widget(pos + 1, () => {
                      const el = document.createElement("span");
                      el.textContent = `[${display}]`;
                      el.setAttribute("contenteditable", "false");
                      return el;
                    }, { key: `xref-${pos}` })
                  );
                }
              }
            });
            return DecorationSet.create(state.doc, decorations);
          }
        }
      }),
      css: `.xref-display-text { color: #0074d9; pointer-events: none; }`
    };
  };
  ```

## エディターへのCSSの挿入

Guides DITA エディターは、カテゴリ `apps.guides.dita_editor.content`を持つclientlibからオーサーモードのコンテンツスタイルを読み込みます。 そのclientlibには、カテゴリに登録されているすべてのclientlibを自動的に取り込む`embed`宣言があります。

```
apps.guides.xml_editor.dita_content_overrides
```

カスタム CSSをエディターのコンテンツ領域に挿入するには、このカテゴリを持つAEM clientlib ノードを作成します。 追加の配線は必要ありません。エディターページが読み込まれると、Guidesによって自動的に取り込まれます。

**AEM clientlib ノード構造（`/apps/my-extension/clientlibs/editor-content-overrides/.content.xml`）**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:cq="http://www.day.com/jcr/cq/1.0"
          xmlns:jcr="http://www.jcp.org/jcr/1.0"
    jcr:primaryType="cq:ClientLibraryFolder"
    categories="[apps.guides.xml_editor.dita_content_overrides]"/>
```

このフォルダー内にCSS ファイル （`css.txt` + `.css` ファイル）を配置します。 エディターのコンテンツスタイルシートに自動的に埋め込まれます。

**例：作成者モードでセクション見出しスタイルを上書き**

```css
/* /apps/my-extension/clientlibs/editor-content-overrides/css/content.css */

/* Increase section title font size in author mode */
.section > title {
  font-size: 1.4em;
  font-weight: bold;
  color: #333;
}

/* Highlight note blocks */
.note {
  border-left: 4px solid #0074d9;
  padding-left: 12px;
  background: #f0f7ff;
}
```

>[!NOTE]
>
>このCSSは、従来のCKEditor ベースのオーサーサーフェスのみをターゲットにしています。 シャドウ DOMを使用する新しいエディター（ProseMirror）内では効果がありません。


### 新しいエディター：`registerPlugin`の`css`

新しいエディターは&#x200B;**シャドウ DOM**&#x200B;内でレンダリングされ、AEM `clientlibs`を含むすべてのページレベルのスタイルから分離されます。 新しいエディターのオーサーサーフェスにCSSを挿入するには、プラグインファクトリーから返された`PluginConfig`の一部として`css`文字列を渡します。

CSSは、エディターインスタンスが作成されるたびに、エディターのシャドウ ルート内に`<style>` タグとして直接挿入されます。

**例：装飾プラグインと一緒にスタイルを挿入**

```js
guides.ready(() => {
  guides.editor.registerPlugin(() => ({
    plugin: createMyPlugin(), // your ProseMirror plugin
    css: `
      /* Styles scoped to the New Editor shadow DOM */
      .section > .title-node {
        font-size: 1.4em;
        font-weight: bold;
        color: #333;
      }

      .note-node {
        border-left: 4px solid #0074d9;
        padding-left: 12px;
        background: #f0f7ff;
      }
    `
  }));
});
```

**例：CSSのみのプラグイン （デコレーションロジックなし）**

```js
guides.ready(() => {
  guides.editor.registerPlugin(() => ({
    plugin: new guides.editor.prosemirror.state.Plugin({}), // no-op plugin
    css: `
      /* Custom author-mode typography */
      [data-xml-element="codeblock"] {
        font-family: monospace;
        background: #f5f5f5;
        padding: 8px;
        border-radius: 4px;
      }
    `
  }));
});
```

>[!NOTE]
>
> このCSSは、新規エディターのシャドウ DOM内でのみ適用されます。 ページの残りの部分や従来のエディターには影響しません。


## コンテキストメニュー拡張機能（`contextMenuWidget`）

拡張機能は、拡張機能の設定で`contextMenuWidget` フィールドを宣言することで、エディターの右クリック/パンくずコンテキストメニューに項目を追加できます。 これは、ターゲットにするエディターのメニューをフレームワークに伝えます。

### ウィジェット ID

| Widget ID | エディター |
|---|---|
| `dita_editor_menu` | 従来のCKEditor オーサーサーフェス（パンくずリスト + エレメントのコンテキストメニュー） |
| `markup_editor_menu` | 新しいエディター（ProseMirror）のパンくずリストとエレメントのコンテキストメニュー |

両方のウィジェットが同時にページにマウントされます。 フレームワークは、このフィールドに基づいて各拡張機能を正しいメニューに一致させます。

> 拡張機能は、次の配列を渡すことにより、両方のエディターをターゲットにすることもできます。`contextMenuWidget: ["dita_editor_menu", "markup_editor_menu"]`

### レガシーエディター：`dita_editor_menu`

これは、従来のCKEditor コンテキストメニューに表示される拡張機能に使用します。

```js
const myContextMenuExtension = {
  id: "dita_author_view_menu",
  contextMenuWidget: "dita_editor_menu",
  view: {
    items: [
      {
        displayName: "My Custom Action",
        data: { eventid: "myCustomAction" },
        icon: "textSpaceAfter",
        target: {
          key: "displayName",
          value: "Wrap Element",   // insert after this existing menu item
          viewState: "append",
        },
      },
    ],
  },
  controller: {
    myCustomAction() {
      console.log("Custom action triggered");
    },
  },
};
```

### 新しいエディター：`markup_editor_menu`

新規エディターのコンテキストメニュー（パンくずリストとエレメントを右クリック）に表示される拡張機能に使用します。 コントローラは`handleExtensionEvent`を介してイベントを受信し、ローカルハンドラーを`markup_editor_menu` コントローラにルーティングし、アプリイベントハンドラーを介してグローバルイベントをディスパッチします。

```js
const myMarkupContextMenu = {
  id: "dita_author_view_menu",
  contextMenuWidget: "markup_editor_menu",
  view: {
    items: [
      {
        displayName: "Edit Cross Reference",
        data: { eventid: "editCrossReference" },
        icon: "link",
        target: {
          key: "displayName",
          value: "Cut",
          viewState: "prepend",
        },
      },
      {
        displayName: "Remove Cross Reference",
        data: { eventid: "removeCrossReference" },
        icon: "deleteOutline",
        target: {
          key: "displayName",
          value: "Edit Cross Reference",
          viewState: "append",
        },
      },
    ],
  },
  controller: {
    editCrossReference() {
      // Use guides.editor APIs to read context
      const ancestorXpaths = guides.editor.runUtil("getAncestorXpaths", true);
      // open dialog or take action...
    },
    removeCrossReference() {
      guides.editor.runCommand("unwrapNode");
    },
  },
};
```

## ユーティリティライブラリ

- `guides.util.lodash`:The lodash ユーティリティライブラリ。同じインスタンスがエディターにバンドルされています。

  ```js
  const uniqueIds = guides.util.lodash.uniq(ids);
  ```

- `guides.util.async`：拡張機能で使用する非同期ユーティリティ ライブラリ。

  ```js
  guides.util.async.parallel([task1, task2], callback);
  ```

## 完全なAPI リファレンス

| API | 説明 |
|---|---|
| `filePath` | アクティブな文書のファイルパスを取得 |
| `version` | 読み込まれたエディターバージョン文字列を取得 |
| `appState(key)` | アプリケーションモデルから値を読み取る |
| `focus()` | アクティブなエディターをフォーカス |
| `canInsertXmlElement(tag, insertAfter?)` | カーソル位置にエレメントを挿入できるかどうかを確認します |
| `selectCurrentBlockElement()` | 現在のブロック要素を選択 |
| `getValidElementNamesForInsertion(args)` | 挿入用の有効なエレメント名のリスト |
| `updateAttributeByXpath(args)` | XPathによる属性の更新 |
| `runCommand(name, ...args)` | 名前付きエディターコマンドの実行 |
| `canRunCommand(name, ...args)` | コマンドが実行できるかどうかを確認する |
| `runUtil(name, ...args)` | 名前付きエディターユーティリティの呼び出し |
| `addDecoration(id, selector, options)` | 一致する要素に名前付き装飾ルールを追加または置換する |
| `removeDecoration(id)` | IDによる装飾ルールの削除 |
| `batchDecorations(changes)` | 1回のディスパッチで複数の追加/削除のデコレーション変更を適用 |
| `clearDecorations()` | アクティブな装飾ルールをすべて削除 |
| `getDecorations()` | 現在アクティブなすべてのデコレーションのIDを取得 |
| `registerPlugin(factory)` | ProseMirror プラグインファクトリの登録（シャドウ DOM CSS インジェクションのメカニズムも登録） |
| `prosemirror.state` | `prosemirror-state` パッケージ |
| `prosemirror.model` | `prosemirror-model` パッケージ |
| `prosemirror.view` | `prosemirror-view` パッケージ |
| `prosemirror.transform` | `prosemirror-transform` パッケージ |
| `prosemirror.commands` | `prosemirror-commands` パッケージ |
| `prosemirror.keymap` | `prosemirror-keymap` パッケージ |
| `prosemirror.history` | `prosemirror-history` パッケージ |
| `prosemirror.tables` | `prosemirror-tables` パッケージ |
| `prosemirror.dropcursor` | `prosemirror-dropcursor` パッケージ |
| `prosemirror.collab` | `prosemirror-collab` パッケージ |
| `prosemirror.markdown` | `prosemirror-markdown` パッケージ |
