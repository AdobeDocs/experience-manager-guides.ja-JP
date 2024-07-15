---
title: カスタマイズ
description: レビューアプリのカスタマイズ
role: User, Admin
exl-id: 9f6a4e9f-fc13-40b5-a30f-151c94faff81
source-git-commit: 4f00d6b7ad45636618bafe92e643b3e288ec2643
workflow-type: tm+mt
source-wordcount: '402'
ht-degree: 0%

---

# レビューアプリのカスタマイズ

レビューアプリのカスタマイズを簡単にするために、以下に示すいくつかのフックを提供しました。

## レビュー – コメント

- id: `review_comment`
- フック：`this.updateExtraProps`:

[ こちら ](../../aem_guides_framework/basic-customisation.md) で説明しているように、カスタマイズ中に追加された新しい属性は `this.model.extraProps` の下に置かれます。 メソッド `updateExtraProps` を使用すると、レビューコメントに属性を追加し、追加した属性のサーバー上での更新と保存も処理できます。

### 使用例

例えば、コメントに `commentRationale` や `severity` のフィールドを追加するとします。
`commentRationale` を「これは重要な文です」に更新しましょう。 「重大」の `severity` です。
これは、次の構文を使用して実行できます。

```typescript
  this.next('updateExtraProps', {
    'commentRationale': 'This is an important sentence.',
    'severity': 'CRITICAL'
  })
```

上記のコードスニペットで、値の更新と保存を処理します。 保存された値は、ビューを定義することで UI にレンダリングできます。

```JSON
{
    "component" : "label",
    "label": "@extraProps.commentRationale"
}
```

## インラインレビューパネル

- id: `inline_review_panel`

1. フック：`onNewCommentEvent`
フック `onNewCommentEvent` を使用すると、新しいコメントまたは返信イベントでイベントをスローしたり、メソッドを呼び出したりできます。
`onNewCommentEvent` で受け取る引数は次のとおりです。
   - events：ディスパッチされたコメント/返信イベント。
   - newComment: ブール値
ディスパッチされたイベントが新しいコメントイベント（`highlight`、`insertion`、`deletion`、`sticky note comment` など）の場合
   - newReply: ブール値
ディスパッチされたイベントが新しい返信イベントだった場合。

2. フック：`sendExtraProps`

このフックは、`event` を拡張してインラインレビューパネルから `extraProps` を送信する場合に便利です。 この 2 つのフックの使い方を以下に説明します。

### インラインレビューパネルの例

新しいコメントや返信がディスパッチされるたびに extraProp、`userInfo` を送信したいとします。 これで、インラインレビューパネルを使用してこれが行われますが、新しく生成されたコメントの commentId への参照がないので、これを達成するために、次のコードを記述できます。

```typescript
    onNewCommentEvent(args){
      const events = _.get(args, "events")
      const currTopicIndex = tcx.model.getValue(tcx.model.KEYS.REVIEW_CURR_TOPIC) || this.getValue('currTopicIndex') || "0"
      const event = _.get(_.get(events, currTopicIndex), '0')
      const newComment = _.get(args, 'newComment')
      const newReply = _.get(args, 'newReply')
      if ((newComment || newReply) && event) {
        this.next('setUserInfo', event)
      }
    },
```

上記のコードスニペットでは、ディスパッチされたイベントが新しいコメントか返信かを確認しています。 新しいコメントまたは返信の場合は、メソッド `setUserInfo` を呼び出しています

```typescript
    setUserInfo(event) {
      this.loader?.getUserInfo(event.user).subscribe(userData => {
        const extraProps = {
          "userFirstName": userData?.givenName || '',
          "userLastName": userData?.familyName || '',
          "userTitle": userData?.title || '',
          "userJobTitle": userData?.jobTitle || '',
          'userEmail': userData?.email || '',
        }
        const data = {... event, extraProps}
        this.next(
          'sendExtraProps',
          data
        )
      })
    },
```

上記の方法では、ユーザーの名、メール、タイトルなどを含む extraProp を送信するようにイベントを拡張しています。 この方法でイベントを拡張すると、extraProp が正しい commentId で送信され、正しいコメントに添付されます。

フック `updateExtraProps` は本質的にフック `sendExtraProps` を呼び出します。

`review_comment` コントローラーでは `updateExtraProps` を使用します。このコントローラーには既にコメントの `id` が含まれているため、`extraProps.` を言及するだけです

ただし、`inline_review_panel` はコメントの ID にアクセスできないため、インラインレビューパネルからイベントをディスパッチする必要がある場合は、`sendExtraProps` が便利です。
