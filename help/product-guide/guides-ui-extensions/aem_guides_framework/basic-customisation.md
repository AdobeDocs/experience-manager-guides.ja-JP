---
title: アプリのカスタマイズ
description: アプリのカスタマイズ
role: User, Admin
exl-id: 3e454c48-2168-41a5-bbab-05c8a5b5aeb1
source-git-commit: 3615928117ce1be527dc3c6d2ec8ddd115b78b0a
workflow-type: tm+mt
source-wordcount: '486'
ht-degree: 0%

---

# アプリのカスタマイズ

## 拡張機能フレームワークの下で公開された機能

データ、config およびトリガーイベントへのアクセスに使用できる `proxy` の下で、一連の関数とゲッターを公開しました。 以下のリストとアクセス方法を参照してください。

```typescript
interface EventData {
  key?: string,
  keys?: string[]
  view?: any,
  next?: any,
  error?: any,
  completed?: any,
  id?: any
}

* getValue(key)
* setValue(key, value)
* subject // getter
* subscribe(opts: EventData)
* subscribeAppEvent(opts: EventData)
* subscribeAppModel(key, next)
* subscribeParentEvent(opts: EventData)
* parentEventHandlerNext(eventName: string, opts: any)
* appModelNext(eventName:string, opts) 
* appEventHandlerNext(eventName:string, opts)
* next(eventName:string, opts, eventHandler?)
* viewConfig //getter
* args //getter
```

このアプリは MVC （モデル、ビュー、コントローラ）構造に従います

## モデル

モデルは、様々な属性を定義し、その値を保存します。 モデルに格納されている各種属性の値には、構文を使用してコントローラからアクセスできます

```typescript
this.getValue('attributeName')
```

アプリでカスタマイズする場合は、新しく作成したすべての属性がモデルのマップの下に追加されます。
モデルに新しい属性を設定するには、コントローラで次の構文を使用します。

```typescript
// If a key is not already in model then it will be added to extraProps
this.setValue('key', value)
```

モデルに追加された属性にアクセスするには、次の構文を使用します。

```typescript
const value = this.getValue("key")
```

## 表示

ビューは、アプリの UI を定義します。 JSON ファイルを使用して、ファイルの表示を定義します。 ここでは、コンポーネント、css （コンポーネントの抽出で指定）を定義し、モデルに保存された値をレンダリングします。
アプリでは、各ビューは JSON を使用して定義されます。 JSON は、`id` と呼ばれる一意の ID を使用して参照されます。

## コントローラー

コントローラは、イベントを処理し、データを処理するために使用されます。 コントローラーは、サーバーからデータを取得して送信するために使用され、UI に表示されるものとバックエンドに保存されるものの間のインターフェイスです。

- 初期化時に値を設定するには、`init` 関数を使用します。
- コントローラにメソッドを追加するには、次の構文を使用します。

```typescript
methodName: function(args){
    // functionality
}
```

ここでの `methodName` は、JSON （ビュー）または他の関数でメソッドを参照する `key` として機能します

- コントローラでメソッドを呼び出すには、構文を使用します

```typescript
this.next('methodName', args)
```

## 例

次に、簡単な例を使って、これらの 3 つのコンポーネントがどのように相互にやり取りするかを示します。
クリックするとラベル値を切り替えるボタンを追加します

### 例を表示

次に、モデル内に格納された動的テキストを変数名 `buttonLabel` の下に表示するボタンの JSON を定義します。
この例では、ボタンをクリックすると、ラベルが変更されます。

```JSON
{
    "component": "button",
    "label": "@extraProps.buttonLabel",
    "variant": "cta",
    "on-click": "switchButtonLabel",
}
```

### モデルの例

この場合、ボタンのラベル `extraProps.buttonLabel` 保持します

### コントローラの例

```typescript
  controller: {
    init: function () {
      this.setValue("buttonLabel", "Submit")
    },

    switchButtonLabel(){
        const buttonLabel = this.getValue("buttonLabel") === "Submit"? "Cancel" : "Submit"
        this.setValue("buttonLabel", buttonLabel)
    }
  }
```

以下のGIFは、上記のコードの動作を示しています
![basic_customization](imgs/basic_customisation.gif "Basic customization button")


### 設定の例を表示

この場合、`viewConfig` を使用して検索モードイベントにアクセスし、イベントをトリガーして更新します

```typescript
  { 
    id: 'repository_panel', 
    controller: {
      init: function () {
        console.log('Logging view config ', this.viewConfig)
        this.next(this.viewConfig.items[1].searchModeChangedEvent, { searchMode: true })
      }
    }
  }
```

### 購読の例

この場合、「ファイル名の変更」オプションがクリックされたときに、ファイル名の変更をコンソールログに追加するサブスクリプションを追加します

```typescript
  { 
    id: 'repository_panel', 
    controller: {
      init: function () {
        this.subscribe({
          key: 'rename',
          next: () => { console.log('rename using extension') }
        })
      }
    }
  }
```

### 購読アプリのイベントの例

この場合、変更されたアクティブなドキュメントのコンソールログを表示します（エディター UI のタブの変更）

```typescript
  { 
    id: 'repository_panel', 
    controller: {
      init: function () {
        this.subscribeAppEvent({
          key: 'app.active_document_changed',
          next: () => { console.log('Extension: active document changed') }
        })
      }
    }
  }
```

### 購読アプリモデルイベントの例

`app.mode` などのアプリモデルイベントを登録する例

```typescript
  { 
    id: 'repository_panel', 
    controller: {
      init: function () {
        this.subscribeAppModel('app.mode',
          () => { console.log('app mode subs') }
        )
      }
    }
  }
```

### 親コントローラ イベントの例

この中で、私たちは、動作 `tabChange` るコントローラのイベントであるイベント `left_panel_container` サブスクリプションを追加します
`repository_panel` の親コントローラとして

```typescript
  { 
    id: 'repository_panel', 
    controller: {
      init: function () {
        this.subscribeParentEvent({
          key: 'tabChange',
          next: () => { console.log('tab change subs') }
        })
        this.parentEventHandlerNext('tabChange', {
          data: 'map_panel'
        )
      }
    }
  }
```

### 次のアプリケーション モデルとアプリケーション コントローラー

実行する正しいイベントとそのデータを把握することで、これらは直接トリガーされます

```typescript
  { 
    id: 'file_options', 
    controller: {
      init: function () {
        this.appModelNext('app.mode', 'author')
        this.appEventHandlerNext('app.active_document_changed', 'active doc changed')   
      }
    }
  } 
```
