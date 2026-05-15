---
title: アプリのカスタマイズ
description: アプリのカスタマイズ
role: User, Admin
exl-id: 3e454c48-2168-41a5-bbab-05c8a5b5aeb1
TQID: https://experienceleague.adobe.com/7DiEcUTAvp4rT3Fy9pIv4-zaHKwswjokjlaBgx8Pbyo
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: ab01a588-7dea-43f2-a699-0b3f128465d6
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 485
ht-degree: 0%

---

# アプリのカスタマイズ

## 拡張フレームワークで公開された機能

データ、設定、トリガーイベントへのアクセスに使用できる`proxy`の下の一連の関数とゲッターを公開しました。 以下はリストとそのアクセス方法です。

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

私たちのアプリは、MVC （モデル、ビュー、コントローラー）構造に従います

## モデル

モデルは様々な属性を定義し、その値を格納します。 モデルに格納されている様々な属性の値は、構文を使用してコントローラからアクセスできます

```typescript
this.getValue('attributeName')
```

アプリでカスタマイズするには、新しく作成されたすべての属性がモデルのマップの下に追加されます。
モデルに新しい属性を設定するには、コントローラーで次の構文を使用します。

```typescript
// If a key is not already in model then it will be added to extraProps
this.setValue('key', value)
```

モデルに追加された属性にアクセスするには、次の構文を使用します。

```typescript
const value = this.getValue("key")
```

## 表示

ビューは、アプリのUIを定義します。 JSON ファイルを使用してファイルのビューを定義します。 ここでは、コンポーネントとcss （コンポーネントの抽出クラスで指定）を定義し、モデルに格納されている値をレンダリングします。
アドビのアプリでは、各ビューはJSONを使用して定義されています。 JSONは、`id`と呼ばれる一意のIDを使用して参照されます。

## コントローラー

コントローラは、イベントを処理し、データを処理するために使用されます。 コントローラは、サーバーからデータを取得して送信するために使用され、UIに表示され、バックエンドに保存されているものの間のインターフェイスです。

- 初期化時に値を設定するには、`init`関数を使用します。
- コントローラにメソッドを追加するには、次の構文を使用します。

```typescript
methodName: function(args){
    // functionality
}
```

ここの`methodName`は、JSON （ビュー）または他の関数でメソッドを参照する`key`として機能します

- コントローラでメソッドを呼び出すには、構文を使用します

```typescript
this.next('methodName', args)
```

## 例

これらの3つのコンポーネントがどのように相互に作用するかを示すために、簡単な例を使用してみましょう。
クリックするだけでラベル値を切り替えるボタンを追加します

### 例を表示

以下では、変数名`buttonLabel`の下にモデルに保存された動的テキストを示すボタンのJSONを定義します。
この例では、ボタンをクリックするとラベルが変更されます。

```JSON
{
    "component": "button",
    "label": "@extraProps.buttonLabel",
    "variant": "cta",
    "on-click": "switchButtonLabel",
}
```

### モデル例

この場合、`extraProps.buttonLabel`はボタンのラベルを保持します

### コントローラーの例

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

GIFの下には、上記のコードが実際に表示されています
![basic_customization](imgs/basic_customisation.gif "基本カスタマイズボタン ")


### ビュー設定の例

この場合、`viewConfig`を使用して検索モードイベントにアクセスし、イベントをトリガーして更新します

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

### 購入の例

この場合、「ファイル名を変更」オプションをクリックすると、「ファイル名を変更」のサブスクリプションがコンソールログに追加されます

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

### サブスクリプションアプリイベントの例

この場合、アクティブなドキュメントのログオンが変更されました（エディターUIのタブの変更）

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

### サブスクリプションアプリモデルイベントの例

`app.mode`などのアプリモデルイベントの購読の例

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

### 親コントローラーイベントの例

この場合、`left_panel_container` コントローラーのイベントである`tabChange` イベントにサブスクリプションを追加します
`repository_panel`の親コントローラーとして

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

### アプリモデルとアプリコントローラーの次

イベントを起動させる正しいイベントとそのデータを知ることで、直接トリガーできます

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
