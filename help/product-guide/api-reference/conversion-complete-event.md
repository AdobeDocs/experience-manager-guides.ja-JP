---
title: 変換処理イベントハンドラー
description: コンバージョンプロセスイベントハンドラーについて説明します
exl-id: 8033935d-2113-4e39-ab74-b7431b89f948
feature: Conversion Process Event Handler
role: Developer
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '189'
ht-degree: 0%

---

# 変換処理イベントハンドラー {#id175UB30E05Z}

AEM Guidesは、文書変換処理の完了後に後処理処理を実行するために使用される com/adobe/fmdita/conversion/complete イベントを公開します。 このイベントは、非 DITA 文書が DITA ファイル形式に移行されるたびにトリガーされます。 たとえば、Word から DITA への変換または DITA へのInDesign処理を実行する場合、このイベントは変換処理の終了後に呼び出されます。

このイベントで使用可能なプロパティを読み取り、さらに処理を行うには、AEM イベントハンドラーを作成する必要があります。

イベントの詳細は、以下で説明します。

**イベント名**:

```HTTP
com/adobe/fmdita/conversion/complete 
```

**パラメーター**:\
|名前|種類|説明|
|----|----|-----------|
|`status`|文字列|実行された操作の戻り値の状態。 使用できるオプションは次のとおりです。-   成功：コンバージョンプロセスが正常に完了しました。 <br> -   エラーが発生して完了：変換処理は完了しましたが、いくつかのエラーが発生しました。 <br>-   失敗：致命的なエラーが発生したため、変換プロセスが失敗しました。|
|`filePath`|文字列|AEM リポジトリ内のソースファイル \（変換する\）の絶対パス。|
|`outputPath`|文字列|変換された DITA ファイルを保存する保存先の絶対パス。|
|`logPath`|文字列|変換ログが保存されるノードの絶対パス。|
