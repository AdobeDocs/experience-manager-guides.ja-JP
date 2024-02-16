---
title: リリースノート | Adobe Experience Managerガイドas a Cloud Service、2023 年 2 月リリース
description: Adobe Experience Managerガイドの 2 月リリースas a Cloud Service
exl-id: c639b136-11ed-4a8b-a595-4bb5da879747
feature: Release Notes
role: Leader
source-git-commit: 6d8c01f20f7b59fed92c404561b647d9ebecb050
workflow-type: tm+mt
source-wordcount: '870'
ht-degree: 1%

---

# 2023 年 2 月リリースのAdobe Experience Managerガイドas a Cloud Service

このリリースノートでは、アップグレードの手順、互換性マトリックス、Adobe Experience Managerガイドの 2023 年 2 月バージョンで修正された問題 ( 後で *AEMガイドas a Cloud Service*) をクリックします。

新機能および機能強化について詳しくは、 [2023 年 2 月リリースのAEMガイドas a Cloud Serviceの新機能](whats-new-2023-2-0.md).

## 2023 年 2 月リリースにアップグレード

次の手順に従って、現在のAEM Guidesas a Cloud Service設定をアップグレードします。
1. Cloud Serviceの Git コードを確認し、アップグレードする環境に対応するCloud Serviceパイプラインで設定されたブランチに切り替えます。
2. 更新 `<dox.version>` プロパティ： `/dox/dox.installer/pom.xml` ファイルのCloud ServiceGit コードを 2023.2.235 に変更します。
3. 変更をコミットし、Cloud Serviceパイプラインを実行して、2023 年 2 月リリースのAEM Guides as a Cloud Serviceにアップグレードします。

## 既存のコンテンツのインデックスを作成する手順 (AEMガイドas a Cloud Serviceの 9 月リリースより前のバージョンを使用している場合のみ )

既存のコンテンツのインデックスを作成し、マップレベルで新しい検索と置換テキストを使用するには、次の手順を実行します。

* サーバーに対してPOSTリクエストを実行します（正しい認証を使用） - `http://<server:port>/bin/guides/map-find/indexing`.
( オプション：マップの特定のパスを渡してインデックスを作成できます。デフォルトでは、すべてのマップにインデックスが作成されます。 || 例： `https://<Server:port>/bin/guides/map-find/indexing?paths=<map_path_in_repository>`)

* API は jobId を返します。 ジョブのステータスを確認するには、ジョブ ID を持つGETリクエストを同じエンドポイントに送信します。 `http://<server:port>/bin/guides/map-find/indexing?jobId={jobId}`
( 例： http://&lt;_localhost:8080_>/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678)

* ジョブが完了すると、上記のGETリクエストは成功と共に応答し、マップが失敗した場合はメンションします。 正常にインデックス付けされたマップは、サーバーログから確認できます。

## 互換性マトリックス

この節では、2023 年 2 月のリリースでas a Cloud ServiceするAEMガイドでサポートされているソフトウェアアプリケーションの互換性マトリックスを示します。

### FrameMakerとFrameMaker Publishing Server

| AEM Guides as a Cloud リリース | FMPS | FrameMaker |
| --- | --- | --- |
| 2023.02.0 | 互換性がありません | 2022 以降 |
| | | |

* AEMで作成されたベースラインと条件は、2020.2 以降の FMPS リリースでサポートされています。

### 酸素コネクタ

| AEM Guides as a Cloud リリース | Oxygen Connector ウィンドウ | Oxygen Connector Mac | Oxygen Windows で編集 | Oxen Macで編集 |
| --- | --- | --- | --- | --- |
| 2023.02.0 | 2.8-uuid-8 | 2.8-uuid-8 | 2.3 | 2.3 |
|  |  |  |  |

## 修正された問題

様々な領域で修正されたバグを以下に示します。

### オーサリング

* Web エディターの HTML を変更すると、 `<dl>` および `<dlentry>`. (11024)
* 一部の属性は、条件付きとして扱われず、問題が発生しています。 (10895)
* 3 つ以上のレベルでネスト `<indexterm>` は、ネイティブPDF書き出しでネストされません。 (10799)
* 作成者ビューからソースビューに切り替えると、コンテンツはタスクの本文に表示されなくなります。 (10735)
* レビュータスク内にレビューコメントが配置されていません。 (10625)
* **取り消し** または **やり直し** 一部のファイルではが正しく機能しない問題を修正しました。 (10373)
* コピー&amp;貼り付け操作で、カスタムメタデータが保持されない。 (10367)
* XML Editor の「元に戻す」オプションを使用すると、ユーザーはページの先頭に移動します。 (10091)
* アセットのコピー&amp;ペースト操作を実行すると、ノードのプロパティが削除されます。 (10053)
* mimeType は、DITA アセットの作成および更新用にハードコードされています。 (8979)
* バージョン履歴のバージョン作成者名は、Assets UI を介してアップロードされたファイルの「fmdita-serviceuser」です。 (8910)
* AEMガイドがクラウドにインストールされている場合、コンテンツフラグメントをコピーして貼り付けることはできません。 (11315)
* カスタムスキーマでコンテンツを読み込むと、ブラウザー（Web エディター）がフリーズする。 (11211)

### 管理

* （ Asset UI から）DITA マップアセットをコピーすると、コピーされたアセットで誤ったベースラインが発生します。 (11218)
* AEMで許可されている上限（デフォルトでは 2 GB）を超えるファイルのアップロード時に警告メッセージが表示されない。 (10817)
* Web エディタ — ベースライン | Web エディタ内の新しいベースラインダッシュボードでは、「最新」列の動作が異なります。 (10808)
* 翻訳 | /libs/fmdita/i18n/ja.jsonが無効なので、翻訳ジョブは開始されません。 (10543)
* 翻訳 | 翻訳ダッシュボード（人間翻訳）から作成されたスコーピング翻訳プロジェクトでエラーが発生しました。 (10526)
* 翻訳 | アクティブな翻訳プロジェクトにアセットが存在する言語フォルダー全体に対して、後処理がブロックされます。 (10332)
* バージョンが変更され、ベースラインエディターに保存されている場合、任意のアセットに対して複数のポップアップが表示されます。 (10399)
* セッションリークは次の時点で発生します： `com.day.cq.search.impl.builder.QueryBuilderImpl.createResourceResolver(QueryBuilderImpl.java:210)`. (10279)

### 公開

* 一部のシナリオで、トピックの再生成が機能しません。 (10635)
* Publishlistener は、要求されたデータを情報ログに表示しません。また、一部のジャンクログも含まれています。( 10567)
* ネイティブPDF | 「フォルダープロファイルに追加」オプションを使用して出力プリセットを作成すると、PDF生成が「ヌルポインター」の例外で失敗します。 (10950)
* ネイティブPDF | Table ヘッダーを回転すると問題が発生します。 (10555)
* ネイティブPDF | 入れ子 `<indexterm>` は、ネイティブPDF書き出しでネストされません。 (10521)
* ネイティブPDF | 付録内のネストされた topicref は、すべて一時HTMLの h1 に変換されます。 (10454)
* FrameMaker Publishing Server2020 で生成されたPDFのベースライン公開が失敗しました。 (10551)
* ネイティブPDF | 追加中 `xref` を画像に設定すると、生成された画像上で画像がレンダリングされません。PDF (11346)
* ネイティブPDF | 画像タグは、すべての画像に display-inline 属性を追加します。 (10653)
* ネイティブPDF | 下書きコメントは、生成された出力ではデフォルトで非表示になっています。 (10560)
* ネイティブPDF | navtitle は topichead に対しては受け入れられません。 (10509)
