---
title: 後処理イベントハンドラー
description: 後処理イベントハンドラーについて説明します
exl-id: 3b105ff5-02d4-40e3-a713-206a7fcf18b2
feature: Post-Processing Event Handler
role: Developer
level: Experienced
source-git-commit: 83966cc9187b13dd3b5956821e0aa038b41db28e
workflow-type: tm+mt
source-wordcount: '198'
ht-degree: 5%

---

# 後処理イベントハンドラー {#id175UB30E05Z}

AEM Guidesは、後処理操作の実行に使用される com/adobe/fmdita/postprocess/complete イベントを公開します。 このイベントは、DITA ファイルで操作が実行されるたびにトリガーされます。 DITA ファイルに対して次の操作を行うと、このイベントはトリガーされます。

>[!NOTE]
>
> このイベントは、AEM 6.1 の削除処理ではトリガーされません。

- アップロード
- 作成
- 変更
- 削除

このイベントで使用可能なプロパティを読み取り、さらに処理を行うには、AEM イベントハンドラーを作成する必要があります。

イベントの詳細は、以下で説明します。

**イベント名**:

```
com/adobe/fmdita/postprocess/complete 
```

**パラメーター**:

| 名前 | 種類 | 説明 |
|----|----|-----------|
| `path` | String | このイベントをトリガーしたファイルのパス。 通常、これは操作が実行されたファイルです。 |
| `status` | 文字列 | 実行された操作の復帰ステータス。 -<br> – 成功：後処理操作が正常に完了しました。 <br>- エラーが発生して完了：後処理操作は完了しましたが、いくつかのエラーが発生しました。 <br> – 失敗：致命的なエラーが発生したため、後処理操作が失敗しました。 |
| `message` | 文字列 | ステータスが「エラーあり」または「失敗」の場合、このパラメータにはエラーの詳細または失敗の理由が含まれます。 |
| `operation` | 文字列 | ファイルに対して実行された後処理操作。 <br> – 追加 <br> – 更新 <br> – 削除 |
