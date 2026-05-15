---
title: カスタマイズ
description: レビューアプリのカスタマイズ
role: User, Admin
exl-id: 9f6a4e9f-fc13-40b5-a30f-151c94faff81
TQID: https://experienceleague.adobe.com/s98wa8vFTKBHZ--qCeFjmynYwr3BRVOekxOlGJFIqds
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
topic_v2: id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 403
ht-degree: 0%

---

# レビューアプリのカスタマイズ

レビューアプリのカスタマイズを容易にするために、以下にリストされ、説明されているいくつかのフックを提供しました。

## Review-Comment

- id: `review_comment`
- フック：`this.next('updateExtraProps')`:

[ここ](../../aem_guides_framework/basic-customisation.md)で説明したように、カスタマイズ中に追加された新しい属性は`this.model.extraProps`に該当します。 メソッド `updateExtraProps`を使用すると、レビューコメントに属性を追加し、追加された属性の更新と保存をサーバー上でも処理できます。

### 使用例

例えば、コメントにフィールド `commentRationale`と`severity`を追加するとします。
`commentRationale`を「これは重要な文章です」に更新しましょう。 `severity`を「重要」に設定します。
これは、次の構文を使用して実行できます。

```typescript
  this.next('updateExtraProps', {
    'commentRationale': 'This is an important sentence.',
    'severity': 'CRITICAL'
  })
```

上記のコードスニペットは、値の更新と保存を処理します。 保存された値は、ビューを定義することでUI上でレンダリングできます。

```JSON
{
    "component" : "label",
    "label": "@extraProps.commentRationale"
}
```

## インラインレビューパネル

- id: `inline_review_panel`

1. フック： `onNewCommentEvent`
フック `onNewCommentEvent`を使用すると、新しいコメントまたは返信イベントでイベントをスローしたり、メソッドを呼び出したりできます。
`onNewCommentEvent`で受け取った引数には、次のものが含まれます。
   - イベント：ディスパッチされたコメント/返信イベント。
   - newComment: boolean
ディスパッチされたイベントが新しいコメントイベントである場合（例：`highlight`、`insertion`、`deletion`、`sticky note comment`）
   - newReply: boolean
ディスパッチされたイベントが新しい返信イベントの場合。

2. フック : `sendExtraProps`

このフックは、`event`を拡張して`extraProps`をインラインレビューパネルから送信する場合に便利です。 これら2つのフックの使用方法を以下に説明します。

### インラインレビューパネルの例

新しいコメントまたは返信がディスパッチされるたびに、extraProp `userInfo`を送信するとします。 これはインラインレビューパネルを介して行われますが、新しく生成されたコメントのcommentIdへの参照がないため、これを実現するために次のコードを記述できます。

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

上記のコードスニペットでは、ディスパッチされたイベントが新しいコメントまたは返信であるかどうかを確認しています。 新しいコメントまたは返信の場合、メソッド `setUserInfo`を呼び出しています

```typescript
    const getUserInfo = (userId) => {
      return $.ajax({
        url: '/bin/dxml/xmleditor/userinfo',
        data: {
          username: userId,
        },
        success: (data) => {
          return data
        }
      })
    }

    setUserInfo(event) {
      getUserInfo(event.user).done(userData => {
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

上記の方法では、ユーザーの名前、メール、タイトルなどを含むextraPropを送信するようにイベントを拡張しています。この方法でイベントを拡張すると、extraPropsが正しいcommentIdで送信され、正しいコメントに確実に添付されます。

フック `updateExtraProps`は本来フック `sendExtraProps`を呼び出すので、いつ使用しますか？

`review_comment` コントローラーで`updateExtraProps`を使用しています。このコントローラーにはコメントの`id`が既に含まれているため、`extraProps.`について説明する必要があります

ただし、`inline_review_panel`にはコメントのIDへのアクセス権がないため、インラインレビューパネルからイベントをディスパッチする必要がある場合は、いつでも`sendExtraProps`を使用できます。
