---
title: コンバージョンプロセスイベントハンドラー
description: 変換プロセス イベント ハンドラーについて説明します
exl-id: 8033935d-2113-4e39-ab74-b7431b89f948
feature: Conversion Process Event Handler
role: Developer
level: Experienced
TQID: https://experienceleague.adobe.com/VhlUaVSMTZpfyh5MiJI0WHFpc46s41xjLbuLMUnKH58
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 191
ht-degree: 3%

---

# コンバージョンプロセスイベントハンドラー {#id175UB30E05Z}

AEM Guidesは、ドキュメントの変換プロセスの完了後に後処理の処理を実行するために使用されるcom/adobe/fmdita/conversion/complete イベントを公開します。 このイベントは、DITA以外の文書がDITA ファイル形式に移行されるたびにトリガーされます。 例えば、WordからDITAへの変換またはInDesignからDITAへの変換プロセスを実行する場合、このイベントは変換プロセスの終了後に呼び出されます。

AEM イベントハンドラーを作成して、このイベントで使用可能なプロパティを読み取り、さらに処理を行う必要があります。

イベントの詳細は以下で説明します。

**イベント名**:

```HTTP
com/adobe/fmdita/conversion/complete 
```

**パラメーター**:

| 名前 | 種類 | 説明 |
|----|----|-----------|
| `status` | 文字列 | 実行された操作の戻りステータス。 可能なオプションは次のとおりです。 – 成功：変換プロセスが正常に完了しました。<br> – 完了エラー：変換プロセスは完了しましたが、エラーが発生しました。 <br> – 失敗：致命的なエラーが発生したため、変換プロセスに失敗しました。 |
| `filePath` | 文字列 | AEM リポジトリ内のソースファイル \（変換する\）の絶対パス。 |
| `outputPath` | 文字列 | 変換されたDITA ファイルが保存される保存先の絶対パス。 |
| `logPath` | 文字列 | コンバージョンログが保存されるノードの絶対パス。 |
