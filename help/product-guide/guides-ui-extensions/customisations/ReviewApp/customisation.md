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
- フック： `this.updateExtraProps`:

前述のとおり [こちら](../../aem_guides_framework/basic-customisation.md)の場合、カスタマイズ中に追加された新しい属性はに分類されます。 `this.model.extraProps`. メソッド `updateExtraProps` を使用すると、レビューコメントに属性を追加し、追加した属性のサーバー上での更新と保存も処理できます。

### 使用例

例えば、フィールドを追加するとします `commentRationale` および `severity` ご意見をお聞かせください。
を更新しましょう `commentRationale` 「これは重要な文です。」 および `severity` 「重大」に変更します。
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

1. フック： `onNewCommentEvent`
フック `onNewCommentEvent` 新しいコメントまたは返信イベントで、イベントをスローしたり、メソッドを呼び出したりできます。
で受け取った引数 `onNewCommentEvent` 次を含める：
   - events：ディスパッチされたコメント/返信イベント。
   - newComment: boolean ディスパッチされたイベントが新しいコメントイベントだった場合、つまり `highlight`, `insertion`, `deletion`, `sticky note comment`
   - newReply: boolean ディスパッチされたイベントが新しい返信イベントだった場合。

2. フック： `sendExtraProps`

このフックは、 `event` を送信します `extraProps` インラインレビューパネルから変更します。 この 2 つのフックの使い方を以下に説明します。

### インラインレビューパネルの例

extraProp を送信したいとします。 `userInfo`新しいコメントまたは返信がディスパッチされるたびに行われます。 これで、インラインレビューパネルを使用してこれが行われますが、新しく生成されたコメントの commentId への参照がないので、これを達成するために、次のコードを記述できます。

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

上記のコードスニペットでは、ディスパッチされたイベントが新しいコメントか返信かを確認しています。 新しいコメントまたは返信の場合は、メソッドを呼び出しています `setUserInfo`

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

フック `updateExtraProps` 本来呼び出すフック `sendExtraProps`では、いつ何を使うべきでしょうか。

使用 `updateExtraProps` が含まれる `review_comment` コントローラ （既にのコメントがある） `id` したがって、以下の点に注意してください `extraProps.`

この `inline_review_panel` ただし、はコメントの id にアクセスできないので、インラインレビューパネルからイベントをディスパッチする必要がある場合はいつでも、 `sendExtraProps` 便利になります。
