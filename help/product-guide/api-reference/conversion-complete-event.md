---
title: コンバージョンプロセスイベントハンドラー
description: 変換プロセス イベント ハンドラーについて説明します
exl-id: 8033935d-2113-4e39-ab74-b7431b89f948
feature: Conversion Process Event Handler
role: Developer
level: Experienced
TQID: 'https://experienceleague.adobe.com/VhlUaVSMTZpfyh5MiJI0WHFpc46s41xjLbuLMUnKH58'
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
feature_v2:
  - id: c6d09140-3c91-45d3-b7ed-b681af752f43
    internal-label: APIs
subfeature_v2:
  - id: bb416568-e09c-46e3-b3e9-fa7154401215
    internal-label: Conversion process event handler
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '191'
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
| `status` | String | 実行された操作の戻りステータス。 可能なオプションは次のとおりです。 – 成功：変換プロセスが正常に完了しました。<br> – 完了エラー：変換プロセスは完了しましたが、エラーが発生しました。 <br> – 失敗：致命的なエラーが発生したため、変換プロセスに失敗しました。 |
| `filePath` | 文字列 | AEM リポジトリ内のソースファイル \（変換する\）の絶対パス。 |
| `outputPath` | 文字列 | 変換されたDITA ファイルが保存される保存先の絶対パス。 |
| `logPath` | 文字列 | コンバージョンログが保存されるノードの絶対パス。 |
