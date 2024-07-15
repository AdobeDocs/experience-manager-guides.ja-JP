---
title: アプリのカスタマイズ
description: アプリのカスタマイズ
role: User, Admin
exl-id: 3e454c48-2168-41a5-bbab-05c8a5b5aeb1
source-git-commit: 4f00d6b7ad45636618bafe92e643b3e288ec2643
workflow-type: tm+mt
source-wordcount: '336'
ht-degree: 0%

---

# アプリのカスタマイズ

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
    init: function (context) {
      context.setValue("buttonLabel", "Submit")
    },

    switchButtonLabel(){
        const buttonLabel = this.getValue("buttonLabel") === "Submit"? "Cancel" : "Submit"
        this.setValue("buttonLabel", buttonLabel)
    }
  }
```

以下のGIFは、上記のコードの動作を示しています
![basic_customization](imgs/basic_customisation.gif "Basic customization button")
