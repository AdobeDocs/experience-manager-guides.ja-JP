---
title: Editor 2.0の拡張フレームワークの変更の移行
description: Editor 2.0の拡張フレームワークへの移行について説明します。
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 75954eab3ac1738705fe2a7280973af39b9214df
workflow-type: tm+mt
source-wordcount: '1904'
ht-degree: 0%

---


# 拡張機能フレームワークをEditor 2.0に移行（新しいエディター）

このガイドでは、拡張機能の作成者が、カスタマイズを&#x200B;**旧エディター**&#x200B;から&#x200B;**新エディター**&#x200B;にAEM Guidesで移行する際に何が必要かを理解し、移行をスムーズかつ最小限の混乱で計画できるようにします。

>[!IMPORTANT]
> 
> カスタムコンテキストメニュー項目、ツールバーボタン、ダイアログ、属性またはメタデータロジック、コンテンツスタイルなど、既存のAEM Guides拡張機能（旧エディター）がある場合、このガイドは新しいエディターで機能し続けるのに役立ちます。

## 概要

- **登録が変更されません**: `window.extension` / `tcx.extension.register`を引き続きご利用ください。
- **エディターキャンバスは新しいサーフェスです。** コンテキストメニュー項目では、新しいウィジェット IDを宣言する必要があります
  `markup_editor_menu`。エディター内の動作は、DOMへの操作を停止する必要があります。
- **DOMの読み取りと書き込みを停止**: `tcx.curEditor.*`のDOM アクセスを
  `guides.editor` API: [を`runUtil(...)`](#migrate-reads-dom-runutil)で読み取り、[を`runCommand(...)`](#migrate-writes-dom-mutation-runcommand)で書き込み、[ スタイルを装飾](#migrate-rendering-only-logic-dom-paint-decorations)で書き出し、[ アプリイベント ](#migrate-global-actions-savefocus-app-events)を通じてグローバルアクション（保存）を実行します。
- **App-shell メニュー（リポジトリ、マップビューア、ファイル/フォルダー）は変更されません**：まだ実行されます
レガシーフレームワーク：
- **両方のエディターが共存**：両方を配列でターゲットします。 **Register** プラグインを無条件に読み込む場合。ファイルが開かれるまで`1.0.0`残る`guides.editor.version`までに&#x200B;*ランタイム* アクションのみをゲートします。[ エディターとブートストラップを安全に検出する](#detect-the-Editor-and-bootstrap-safely)を表示します。


## この変更の理由

| 条件 | レガシーCKEditor | 新しいMarkupEditor |
|---|---|---|
| Source of truth | DOM | ProseMirror ドキュメント |
| 選択範囲 | `getSelection()` （ルート文書） | ProseMirrorの選択（位置/範囲） |
| コンテンツを変更するには | DOM属性/クラスの変更 | コマンドのディスパッチ（トランザクション） |
| レンダリング | DOMは永続的です | DOMはシャドウ DOM内の一時的なレンダリングで、いつでも再構築されます |
| スタイル設定 | ページまたはclientlib CSS | CSSはレジスタルプラグインを通じてシャドウ DOMを挿入しました。 既存のクラスを使用してCSSを追加し、新しいクラスを追加してスタイルを追加するには、[Hello world: CSS専用ハイライトプラグイン ](#hello-world-a-css-only-highlight-plugin)を参照し、レンダリング専用ロジックを[移行](#migrate-rendering-only-logic-dom-paint-decorations)してください。 |

DOMを変更する拡張機能やDOMの変更は保持されず、次のリレンダリング時に消去されます。 移行は基本的に&#x200B;*DOM ファーストからモデル ファーストに移行します*。

## エディターとブートストラップを安全に検出

グローバル `guides` オブジェクトは、すべての新しい統合のエントリ ポイントです。

```js
guides.editor    // editor interaction APIs
guides.util      // bundled utility libs (lodash, async)
guides.ready(cb) // fires once at app load (view system ready) — before any file is open
```

`guides.editor.version`さんが&#x200B;**現在開いているエディター**を報告するので、これは1回だけ意味があります
ファイルが実際に開いています：

| `guides.editor.version` | 意味 |
|---|---|
| `2.0.0` | MarkupEditor （ProseMirror） ファイルが開いています |
| `1.0.0` | 従来のCKEditor ファイルが開いているか、ファイルがまだ開いていません |

>[!IMPORTANT]
>
> `guides.ready` イベントが発生した場合、ファイルはまだ開かれていないので、`version`はMarkupEditorが有効かどうかに関係なく`1.0.0`としてレポートされます。 `version`を使用して、プラグインが&#x200B;*登録済み*&#x200B;かどうかを判断しないでください（[ プラグイン登録とランタイムゲーティング ](#plugin-registration-and-runtime-gating)を表示）。 これを使用して&#x200B;*ランタイム*&#x200B;動作を分岐し、ファイルが開くことが保証されている実行時（メニューハンドラー内など）に評価します。

### プラグイン登録とランタイムゲート

- **登録** （`registerPlugin`、1回限りの設定）: `guides.ready`で&#x200B;**無条件**&#x200B;を実行します。 これは従来のエディターでは無害な操作です。従来のエディターはプラグインレジストリを読み取ることはなく、MarkupEditorが実際に構築されたときにのみファクトリが実行されます。 **not**&#x200B;のスローを実行します。

- **ランタイム呼び出し** （`runCommand`、`runUtil`、`addDecoration`、...）: バージョン別のゲートが存在し、呼び出し時に「1.0.0」と等しくありません。 レガシーエディターはスローされませんが（`false`/`undefined`を安全に返します）、ゲーティングはノーオプトワープの警告を回避し、レガシーフォールバックを維持できます。

```js
guides.ready(() => {
  // Always register — inert on legacy, applied only when a MarkupEditor opens.
  guides.editor.registerPlugin(createMyPlugin);
});

function onMenuClick() {
  if (guides.editor.version && guides.editor.version !== "1.0.0") {
    guides.editor.runCommand('surroundWithElement', 'sup'); // MarkupEditor path
  } else {
    // legacy path (or no-op)
  }
}
```

**factory** `() => ({ plugin, css })`を`registerPlugin`に渡します。構築されたプラグインインスタンスは決してありません。 非関数は拒否される唯一の入力です（両方のエディターにスローされます）。 エディターインスタンスをキャッシュしないでください。毎回`guides.editor.*`を新鮮に呼び出してください。

### Hello world:CSS専用のハイライトプラグイン

最小の便利な拡張機能には、No-op ProseMirror プラグインとスタイルが&#x200B;**のみCSS**に付属しています。 この
エディター内で`<note>`要素ごとに黄色の背景でハイライト表示します。

```js
guides.ready(() => {
  guides.editor.registerPlugin(() => ({
    plugin: new guides.editor.prosemirror.state.Plugin({}), // no behavior — CSS only
    css: `[data-xml-element="note"] { background: #fff3cd; outline: 1px solid #ffe08a; }`
  }));
});
```

- すべての要素は`data-xml-element="<tag>"`としてレンダリングされるので、その方法で任意のDITA要素をターゲットにできます
（`note`、`codeblock`、`section`、`table`、...）
- CSS **must**はregisterPluginを介して出荷されます。エディターはシャドウ DOMに存在するため、page/clientlib CSSでは出荷できません
達成まで。
- `<note>`を含むDITA トピックを開いて、適用されていることを確認します。 登録は無条件です（§2.1）。
したがって、`version`が`guides.ready`時点でまだ`1.0.0`であるにもかかわらず、これは安全です。


## 拡張機能のインベントリ（grep チェックリスト）

```bash
# DOM-first reads that will break
grep -rnE "rootDocument|rootElement|getSelection\(|selectedHtml|selectedText|\.xmlDoc|\.ancestors\b" src

# DOM/legacy writes that will break
grep -rnE "updateAttributes\(|setAttribute\(|classList\.|\.saveFile\(|resetDirty\(|validateRangeForInsertion\(" src

# The editor handle itself
grep -rn "tcx.curEditor" src

# Context-menu targeting + page CSS
grep -rnE "contextMenuWidget|dita_editor_menu|author_outline_element" src
grep -rn "dita_content_overrides" .
```

すべてのヒットは移行アイテムです。 それぞれを&#x200B;*コンテキストメニューサーフェス*、*状態の読み取り*、*コンテンツとして分類します*、*グローバルアクション*、*レンダリング専用*&#x200B;または&#x200B;*CSS*&#x200B;を書き込みます。


## 両方のエディターに共通

次の動作と構造は、両方のエディターに同じように適用されます。

- **登録：** `window.extension[id] = config`または`tcx.extension.register(id, config)`
`tcx-loaded` イベント。
- **Config オブジェクトの形状：** `{ id, contextMenuWidget, view: { items }, controller }`。
- **アプリシェルのコンテキストメニュー**&#x200B;は、既存のウィジェット IDと従来の動作を維持します。

  | サーフェス | ウィジェット ID （変更なし） |
  |---|---|
  | リポジトリパネル（ファイル/フォルダー） | `repository_panel` / `file_options` / `folder_options` |
  | マップビューアー | `ditamap_viewer` / `map_view_options` |
  | ベースライン/プリセットパネル | `baseline_panel_menu` / `preset_item_menu` |

  これらのサーフェスをターゲットとするアイテムは、新規エディターに&#x200B;**変更なし**が必要です。次の場所に移動しないでください
  `markup_editor_menu`.

## API置換リファレンス

| レガシー（`tcx.curEditor…` / DOM） | 新しいMarkupEditor |
|---|---|
| `tcx.curEditor.filePath` | `guides.editor.filePath` |
| `getSelection()` / `selectedHtml` / `selectedText` | `runUtil('getSelectedXml' / 'getSelectedPlainText' / 'hasSelection')` |
| `rootDocument.querySelector(tag)` | `runUtil('findPositionRange' / 'findPositionRanges', tag)` |
| 要素`.getAttribute` / `xmlDoc.attributes` | `runUtil('getAttributeAtPosition', pos, name)` / `getSerializableAttributes(xpath)` |
| ルート id （`querySelector('[concept]').id`） | `runUtil('getAttributeAtPosition', 0, 'id')` |
| `editor.ancestors` | `runUtil('getAncestorsDetails' / 'getAncestorXpaths')` |
| `editor.updateAttributes(attrs, root)` | `runCommand('setNodeXmlAttributes', 0, attrs)` |
| エレメントに属性を設定 | `runCommand('setNodeXmlAttribute', pos, name, value)` |
| 選択範囲をラップ/挿入/ラップ解除 | `runCommand('surroundWithElement' / 'insertXml' / 'unwrapNode', …)` |
| `canInsertXmlElement` / `validateRangeForInsertion` | `canRunCommand(name, …)` / `canInsertXmlElement(tag)` |
| `editor.focus()` | `guides.editor.focus()` |
| `tcx.curEditor.saveFile()` | `tcx.eventHandler.next(KEYS.AUTHOR_SAVE_KEY)` |
| スタイル設定の`setAttribute` / `classList` | `addDecoration` / `batchDecorations` / `registerPlugin` |
| エディターコンテンツ用のpage/clientlib CSS | `registerPlugin({ css })` （シャドウ DOM） |
| `contextMenuWidget: 'dita_editor_menu'` | `['dita_editor_menu', 'markup_editor_menu']` |


## コンテキストメニュー項目の移行（エディターキャンバス）

これは、**エディター** （`dita_editor_menu`）をターゲットにしたメニューにのみ適用されます。
`author_outline_element`）。つまり、編集サーフェス内の右クリック / パンくずメニューです。

### 新しいエディターでのルート方法

```
window.extension[id]  ─►  filtered by contextMenuWidget == 'markup_editor_menu'
                      ─►  view.items rendered in the canvas menu
   (click) ───────────►  fires an extension event:
                          • eventid is a known global key  → run as a built-in editor command
                          • otherwise                       → your controller[eventid]() runs
```

### 新しいウィジェット IDを追加します（配列は従来の動作を維持します）

```js
// BEFORE
contextMenuWidget: 'dita_editor_menu',
// AFTER
contextMenuWidget: ['dita_editor_menu', 'markup_editor_menu'],
```

### 予想どおりの形を保つ

- `data.eventid`を持つ`view.items`の下に実用アイテムがあります。
- 各`controller` メソッド名&#x200B;**は、その`eventid`と**&#x200B;が正確に一致します。

```js
view: {
  items: [{
    displayName: 'Edit Cross Reference',
    icon: 'link',
    data: { eventid: 'editCrossReference' },
    target: { key: 'displayName', value: 'Cut', viewState: 'prepend' }
  }]
},
controller: {
  editCrossReference() { /* runs on click */ }
}
```

### `target`を再アンカー

新しいメニューでは、MarkupEditor独自のメニュー項目に対して`target`が解決されます。

- `target.key`：`displayName | id | icon | eventid`
- `target.viewState`：`append | prepend | replace`
- **`Cut`**&#x200B;などの安定したネイティブアイテムに固定します。
- アンカーが解決しない場合、アイテムは引き続き表示されますが、デフォルトの位置に配置されます
（エラーではなく、アンカーを修正してください）。

### 品目ごとの工順の選択

```js
data: { eventid: 'AUTHOR_CUT' }          // built-in command → routed natively, no controller needed
data: { eventid: 'editCrossReference' }  // custom → runs controller.editCrossReference()
```

読み取り専用コンテンツで有効にしておく必要がある項目に`readOnly: true`を追加します。

### ハンドラー本文の書き換え

通常、ハンドラーは選択範囲を読み取り、ノードを変更し、DOMから移行します。

## 読み取りを移行（DOM: `runUtil`）

```js
// BEFORE — DOM selection / queries
const { editor } = tcx.curEditor;
const html = editor.selectedHtml;
const topicId = editor.rootDocument.querySelector('[data-tcx-tag="concept"]').id;

// AFTER — read from the document model
const selectedXml = guides.editor.runUtil('getSelectedXml');
const hasSel      = !!guides.editor.runUtil('hasSelection'); // check if selection is empty
const topicId     = guides.editor.runUtil('getAttributeAtPosition', 0, 'id'); // root = position 0
```

タグによるノードの検索、IDによる一致、XML属性の読み取り：

```js
let value = '';
for (const range of (guides.editor.runUtil('findPositionRanges', 'xref') || [])) {
  const id = guides.editor.runUtil('getAttributeAtPosition', range.from, 'id');
  if (String(id) !== String(targetId)) continue;
  value = guides.editor.runUtil('getAttributeAtPosition', range.from, 'placeholdertext') || '';
  break;
}
```

**読み取りユーティリティ：** `getTextPos`、`getNodePosition`、`getSelectedXml`、`getSelectedPlainText`、
`hasSelection`, `getAncestorsNames`, `getAncestorsDetails`, `getAncestorXpaths`,
`findPositionRange`, `findPositionRanges`, `getAttributeAtPosition`, `getSerializableAttributes`. [付録](#appendix-a-more-exposed-utils-examples)を参照してください。


## 書き込みを移行します（DOMの変更：`runCommand`）

```js
// BEFORE
const root = editor.rootElement.findOne('[data-tcx-tag="concept"]');
editor.updateAttributes({ docOwner: 'Jane' }, root);

// AFTER — update the model; persists across rerenders
guides.editor.runCommand('setNodeXmlAttributes', 0, { docOwner: 'Jane' });
```

```js
// Set one attribute at a found position
guides.editor.runCommand('setNodeXmlAttribute', pos, 'placeholdertext', text);

// Wrap / insert / unwrap
guides.editor.runCommand('surroundWithElement', 'sup');
guides.editor.runCommand('insertXml', '<sup></sup>', undefined, { setCursorInContent: true });
guides.editor.runCommand('unwrapNode');
```

**前提条件**

```js
guides.editor.focus();
if (!guides.editor.canInsertXmlElement('xref')) {
  return tcx.util.showAlert('warning', 'xref is not allowed here'); 
}
if (guides.editor.canRunCommand('surroundWithElement', 'sup')) {
  guides.editor.runCommand('surroundWithElement', 'sup');
}
```

**コマンド：** `setNodeXmlAttributes`、`setNodeXmlAttribute`、`surroundWithElement`、`insertXml`、
`unwrapNode`. [付録](#appendix-b-more-exposed-commands-examples)を参照してください。

## グローバルアクションの移行（保存/フォーカス：アプリイベント）

```js
// BEFORE
tcx.curEditor?.saveFile?.();
// AFTER
tcx.eventHandler.next(tcx.eventHandler.KEYS.AUTHOR_SAVE_KEY);
```

`resetDirty(...)`および`tcx.curEditor.html`にはMarkupEditorと同等の機能がないため、それらを削除してください。保存します
ダーティステートを一元的に処理します。 フォーカスに`guides.editor.focus()`を使用します。


## レンダリング専用ロジックの移行（DOM ペイント：デコレーション）

DOMを変更してCSS クラス、`data-*`属性、または「表示テキスト」を追加するものは何でも
**装飾**&#x200B;になるか、リレンダリング時に消えます。 以下は単純な宣言的なケースです。

```js
guides.editor.addDecoration('important-sections', 'section', {
  class: 'section-important',
  computeAttributes: (node, ctx) => ({ 'data-number-label': String(ctx.index + 1) }),
  filter: (node) => node.attrs?.xmlAttrs?.importance === 'high'
});

guides.editor.batchDecorations([
  { action: 'remove', id: 'legacy-numbering' },
  { action: 'add', id: 'division-numbering', selector: 'conbody', options: { class: 'division-numbering' } }
]);

guides.editor.removeDecoration('important-sections');
guides.editor.clearDecorations();
guides.editor.getDecorations();
```

複雑なケース（カスタムステート、トランザクションメタを介したブロークンステート、ウィジェットテキスト）：を登録
公開されたライブラリを使用して、ProseMirror プラグインを1回実行します。

```js
const createXrefPlugin = () => {
  const { Plugin, PluginKey } = guides.editor.prosemirror.state;
  const { Decoration, DecorationSet } = guides.editor.prosemirror.view;
  return {
    plugin: new Plugin({ key: new PluginKey('xrefDisplay'), props: { decorations(state) { /* … */ } } }),
    css: `.xref-broken { text-decoration: underline wavy red; }`
  };
};

guides.ready(() => guides.editor.registerPlugin(createXrefPlugin));
```

アプリケーションの読み込み時にプラグインを登録する（一度）、ダイアログ内ではなく、繰り返し、レジストリは重複排除されません。`registerPlugin`は&#x200B;**ファクトリ関数のみを受け入れ、**はプラグインインスタンスを受け入れません。
`guides.editor.prosemirror`の公開：`state`、`model`、`view`、`transform`、`commands`、`keymap`、
`history`、`tables`、`dropcursor`、`collab`、`markdown`。


## CSSの移行（ページ clientlib → shadow DOM）

MarkupEditorは&#x200B;**shadow DOM**&#x200B;内でレンダリングされます。ページレベルおよびAEM clientlib CSSはレンダリングされません。

```js
guides.editor.registerPlugin(() => ({
  plugin: new guides.editor.prosemirror.state.Plugin({}),   // no-op, CSS only
  css: `[data-xml-element="codeblock"] { font-family: monospace; background: #f5f5f5; }`
}));
```

従来のコンテンツ clientlib カテゴリ （`apps.guides.xml_editor.dita_content_overrides`）は引き続き
レガシーエディターのみをスタイル設定し、両方をサポートしている場合は保持しますが、MarkupEditorでは無効であることを確認してください。

## ライブ EditorView （プラグイン `view` prop）へのアクセス：DOM エスケープ ハッチ

装飾やコマンドが推奨されるアプローチです。 ただし、一部の効果は装飾として実装できません。 そのような場合は、プラグイン `view` プロパティを使用してライブ `EditorView`にアクセスし、`editorView.dom`で操作します。 これは、レンダリングされたエディターDOMと直接やり取りする唯一のサポートされている方法です。

```js
const createMyPlugin = () => {
  const { Plugin } = guides.editor.prosemirror.state;
  return {
    plugin: new Plugin({
      view(editorView) {
        const root = editorView.dom;          // the shadow-DOM editor node
        const apply = () => { /* re-color / rewrite target nodes in `root` */ };
        apply();
        return {
          update(view, prevState): apply,                       // re-apply after every rerender
          destroy() { /* remove any listeners/observers */ },
        };
      },
    }),
    css: `/* ... */`,
  };
};

guides.ready(() => guides.editor.registerPlugin(createMyPlugin));
```

**ガードレール**:

- ハッチングのみをエスケープし、クラス、ラベル、スタイル設定に装飾を使用します。
- サポートされているハンドルは`editorView.dom`のみです。
- `update()`から再適用して、変更が再描画されても残るようにします。`destroy()`でクリーンアップします。

## プラグイン登録ライフサイクル

`guides.ready`の`registerPlugin`は、ファクトリを1回だけ登録します。 工場自体が再び稼働
ファイルが開かれるたびに、開かれるすべてのMarkupEditor ファイルは、そのファイルをビルドするために新しく呼び出されます
プラグインインスタンス：

## 一般的な問題

- DOM コードがノードと`Range`sをアドレスする場合、MarkupEditorは&#x200B;**position**&#x200B;をアドレスとし、ドキュメントにインデックスを作成するプレーン整数（`0` = ドキュメント開始、つまりルート）をアドレスします。 `range`は`{ from, to }`で、2つの位置がスパンに接しています。DOM `Range`ではありません。 ドキュメントの変更に伴って位置が変化するので、編集の間に1つをキャッシュしないでください。
- **アイテムが新しいエディターのメニューに表示されません**: `contextMenuWidget`がありません
  `markup_editor_menu`、または設定が登録された&#x200B;*後* エディターが開きました（設定が読み取られます）
  once at editor construction register at app load）。
- **項目が間違った場所に表示されます**: `target`個のアンカーが解決しません。次の項目にアンカーします
新しいメニューに存在します（例：`Cut`）。
- **「作品」を変更すると消える**: DOMを変更しました。 コマンド（書き込み）または装飾を使用する
（スタイル）を使用します。
- **CSSは効果がありません**：ページレベルです。エディターはシャドウ DOMにあります。 `registerPlugin({ css })` の使用
- **安全でないガードは**&#x200B;をスローします：`if (!tcx.curEditor && !tcx.curEditor.editor)`のようなパターンを評価します
  `.editor`が偽装オブジェクトに対して実行されます。代わりに`guides.editor`機能を監視します：
  `if (!guides?.editor) return;`.
- **アプリシェルメニューを移行しようとしています**: リポジトリ/マップ/ファイルメニューはエディターキャンバスではありません。
従来のウィジェット idのままにしておきます。

## 確認用チェックリスト

- コンテキストメニュー項目は、**従来のメニューとMarkupEditorのメニューの両方**&#x200B;に表示されます。
- アイテムは期待される位置に置かれます。
- カスタム `eventid`は`controller[eventid]`を実行します。グローバルキーは組み込みコマンドを実行します。
- 状態の読み取りは、入力/再描画の後に正しい値を返します（古いDOMではなくモデル）。
- コンテンツは、保存して再オープンした後も&#x200B;*保持されます*。
- 装飾は再描画を生き残ります。
- Shadow-DOM CSSは、エディター内で目に見える形で適用されます。
- `AUTHOR_SAVE_KEY`を介して火災を保存し、ダーティー状態をクリアします。
- ロックされたコンテンツで`readOnly`項目が正しく動作します。
- プレビューまたは並べて表示します。意図的な読み取り専用のDOM作業はそのまま残されます。
- `grep -rn "tcx.curEditor" src`はクリーンです（または文書化された意図的な残余のみです）。
- `guides.ready`内にプラグインが1回登録されました。


## 推奨ロールアウトシーケンス

1. **Bootstrap**：設定を`guides.ready`でラップします。無条件にプラグインを登録し、*ランタイム* アクションのみを中心に`version` ゲートを追加します（詳細については、[ プラグイン登録とランタイムゲート ](#plugin-registration-and-runtime-gating)を参照）。
2. **コンテキストメニューサーフェス**: `markup_editor_menu`を追加し、`target`個のアンカーを修正します。 アイテムが表示されるようになりました。
3. **読み取り**：選択/属性の読み取りを`runUtil`に移行します。
4. **書き込み**：ミューテーションを`runCommand`に移行します。アプリイベントに保存します。
5. **レンダリング**: DOM スタイルをデコレーションに移動/ `registerPlugin`; CSSをシャドウ DOMに移動します。
6. **Harden**：安全でないガードを修正し、エディターのハンドルを削除し、両方のエディターで確認します。

一度に1つのサーフェスを移行し、従来のパス（配列+バージョンのゲート）を動作させておくので、
単一の拡張機能ビルドは、移行中に両方のエディターで実行されます。

## 付録A：より多くの公開されたユーティリティ（例）

`runUtil`を通じて使用する以下のユーティリティを見つけます。

| Util | パラメーター→返品 | 動作 |
|---|---|---|
| `getTextPos` | `(): { start, end }` | 選択したテキストノードの現在の境界 |
| `getValidElementNames` | `(ancestorLevel?): ElementName[]` | 現在の選択範囲に挿入またはラップできるエレメント名。 |
| `getValidElementNamesBefore` | `(): ElementName[]` | エレメント名は、現在の選択範囲の直前に有効です。 |
| `getSelectedText` | `(): string` | 選択したテキストを生で書き出します。 |
| `getSerializableAttributes` | `(): { [key]: string }` | 現在のノードのXML属性マップ。属性名でキーが設定されています。 |
| `getTagName` | `(): string \| null` | 現在のノードのタグ名。 |
| `hasSelection` | `(): boolean` | 現在選択されているコンテンツがあるかどうか。 |
| `isSelectionEditable` | `(): boolean` | 現在の選択範囲を編集できるかどうか。 |
| `getAncestorPos` | `(name): number \| undefined` | 現在の選択範囲から、特定の要素名を持つ最も近い祖先の位置。 |
| `getValidWrapNodeElementNames` | `(): ElementName[]` | 現在の選択範囲の`wrapNode`に有効な要素名。 |
| `getValidRenameNodeElementNames` | `(): ElementName[]` | 現在のノードの名前を法的に変更できる要素名。 |
| `getValidSurroundElementNames` | `(): ElementName[]` | 現在の選択範囲の`surroundWithElement`に有効な要素名。 |
| `serialize` | `(doc?): string` | ProseMirror ドキュメント（またはドキュメント全体）をXMLにシリアル化します。 |
| `getSelectedXml` | `(range?): string` | 現在の選択範囲、または明示的な`{ from, to }`範囲のXML。 |
| `getRangeXml` | `(xpaths): string` | 1つ以上のxpath オブジェクト範囲のXML （§8のxpathに関する注意事項を参照）。これは文字列形式ではなく、オブジェクト形式です。 |
| `mapToXpath` | `(position, doc?): XPathPosition` | 位置をオブジェクト形式のxpathに変換します。 |
| `inverseMap` | `(xpath \| position, doc?): number` | オブジェクト形式のxpath （または位置）を位置に変換します。 |
| `getAncestorsDetails` | `(): { ancestors, previousSibling, nextSibling, currNode } \| undefined` | 現在のノードの祖先チェーンと即時の兄弟。 |
| `getAncestorsNames` | `(): ElementName[]` | 現在のノードのエレメント名としてのみ祖先チェーンを使用します。 |
| `getPreviousSibling` | `(): ElementName \| undefined` | 前の兄弟エレメントの名前。 |
| `getNextSibling` | `(): ElementName \| undefined` | 次の兄弟エレメントの名前。 |
| `getAncestorXpaths` | `(includeNodeAtPosition?): { tag, xpath }[]` | `{tag, xpath}` ペアとしての祖先チェーン – オブジェクト形式のxpathで、`updateAttributeByXpath`文字列形式（§8）ではありません。 |
| `getSelectedPlainText` | `(range?): string` | 現在の選択範囲または明示的な範囲のプレーンテキスト。 |
| `getDecorations` | `(): string[]` | 現在適用されているすべての装飾のID。 |
| `getResolvedDitaDocumentTitle` | `(props?): string` | DITA ドキュメントの表示タイトルを解決しました。 `props`: `doc`は特定のドキュメントをターゲットとし、`allowedPrefixElements`はtitle-prefix要素を許可します。 |

## 付録B：より多くの公開コマンド（例）

以下のコマンドは、`guides.editor.runCommand(name, ...args)`を介して公開されているものの例です。
現在のコンテキストで適用されない可能性があるコマンドを最初に`guides.editor.canRunCommand(name, ...args)`でガードします。

| コマンド | パラメーター | 動作 |
|---|---|---|
| `focusEditor` | `()` | エディターをフォーカスします。 |
| `unwrapNode` | `()` | 現在の選択範囲のラッピングエレメントを削除し、その子を保持します。 |
| `surroundWithElement` | `(elementName, attrs?, groupInline?)` | 現在の選択範囲を新しいインライン/ブロック要素で折り返します。 `attrs`：新しいラッピング要素に設定するXML属性マップ。 |
| `insertXml` | `(xml)` | カーソルにXML フラグメントを挿入します。 |
| `replaceSelectionWithXml` | `(xml)` | 現在の選択範囲をXMLに置き換えます。 |
| `insertText` | `(text)` | カーソルにプレーンテキストを挿入します。 |
| `selectNodesFromXpaths` | `(xpaths)` | オブジェクト形式のxpathを指定して、1つ以上のノードを選択します。 |
| `delete` | `()` | 現在の選択範囲を削除します。 |
| `undo` / `redo` | `()` | 標準的な取り消し/やり直し： |
| `removeDecoration` | `(id)` | IDで単一の装飾を削除します。 |
| `clearDecorations` | `()` | 現在の開いているファイル内のすべての装飾を削除します。 |
| `setFileReadOnly` | `(readOnly: boolean)` | ファイルの読み取り専用モードを切り替えます。 |
| `generateUniqueId` | `()` | 現在のノードに一意のID属性を生成して割り当てます。 |