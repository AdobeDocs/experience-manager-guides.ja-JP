---
title: イベントハンドラーの後処理
description: 後処理イベントハンドラーの詳細
exl-id: 3b105ff5-02d4-40e3-a713-206a7fcf18b2
feature: Post-Processing Event Handler
role: Developer
level: Experienced
source-git-commit: be06612d832785a91a3b2a89b84e0c2438ba30f2
workflow-type: tm+mt
source-wordcount: '198'
ht-degree: 1%

---

# イベントハンドラーの後処理 {#id175UB30E05Z}

AEMガイドは、後処理操作の実行に使用される com/adobe/fmdita/postprocess/complete イベントを公開します。 このイベントは、DITA ファイルに対する操作が実行されるたびにトリガーされます。 このイベントの DITA ファイルトリガーに対する次の操作：

>[!NOTE]
>
> このイベントは、AEM 6.1 の削除操作に対してはトリガーされません。

- アップロード
- 作成
- 変更
- 削除

このイベントで使用可能なプロパティを読み取り、さらに処理をおこなうには、AEMイベントハンドラーを作成する必要があります。

イベントの詳細については、以下で説明します。

**イベント名**:

```
com/adobe/fmdita/postprocess/complete 
```

**パラメーター**: |名前|型|説明| |—|—|—| |`path`|String|このイベントを発生させたファイルのパス。 通常、これは操作が実行されたファイルです。| |`status`|String|実行された操作の戻り値のステータス。 次のオプションを選択できます。 - <br> — 成功：後処理操作が正常に完了しました。 <br> — エラーあり完了：後処理操作が完了しましたが、エラーが発生しました。 <br> — 失敗：一部の致命的なエラーが原因で、後処理操作に失敗しました。| |`message`|String|ステータスが COMPLETED WITH ERRORS または FAILED の場合、このパラメータにはエラーまたは失敗の理由に関する詳細が含まれます。| |`operation`|String|ファイルに対して実行された後処理操作。 次のオプションを選択できます。<br> — 追加 <br> — 更新 <br> — 削除|
