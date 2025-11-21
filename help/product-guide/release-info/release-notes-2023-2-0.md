---
title: リリースノート | Adobe Experience Manager Guidesas a Cloud Service、2023 年 2 月リリース
description: Adobe Experience Manager Guides as a Cloud Serviceの 2 月リリース
exl-id: c639b136-11ed-4a8b-a595-4bb5da879747
feature: Release Notes
role: Leader
source-git-commit: 6e23f52fc9124d0f07f8108da1b5fe574f553469
workflow-type: tm+mt
source-wordcount: '869'
ht-degree: 1%

---

# 2023 年 2 月Adobe Experience Manager Guidesas a Cloud Serviceのリリース

このリリースノートでは、2023 年 2 月バージョンのAdobe Experience Manager Guides（後の *AEM Guides as a Cloud Service*）で修正されたアップグレード手順、互換性マトリックスおよび問題について説明します。

新機能と機能強化について詳しくは、[AEM Guides as a Cloud Serviceの 2023 年 2 月リリースの新機能 ](whats-new-2023-2-0.md) を参照してください。

## 2023 年 2 月リリースへのアップグレード

次の手順を実行して、現在のAEM Guides as a Cloud Service設定をアップグレードします。
1. Cloud Services の Git コードをチェックアウトし、アップグレードする環境に対応する、Cloud Services パイプラインで設定されたブランチに切り替えます。
2. Cloud Services Git コ `<dox.version>` ド `/dox/dox.installer/pom.xml` ファイルのプロパティを 2023.2.235 に更新します。
3. 変更内容をコミットし、Cloud Services パイプラインを実行して、2023 年 2 月リリースのAEM Guides as a Cloud Serviceにアップグレードします。

## 既存のコンテンツのインデックスを作成する手順（AEM Guides as a Cloud Serviceの 9 月のリリースより前のバージョンを使用している場合のみ）

既存のコンテンツのインデックスを作成し、新しい検索と置換のテキストをマップレベルで使用するには、次の手順を実行します。

* （正しい認証で） サーバーへの POST リクエストを実行します – `http://<server:port>/bin/guides/map-find/indexing`。
（オプション：マップの特定のパスを渡してインデックスを作成できます。デフォルトでは、すべてのマップにインデックスが作成されます ||例：`https://<Server:port>/bin/guides/map-find/indexing?paths=<map_path_in_repository>`）

* API は jobId を返します。 ジョブのステータスを確認するには、同じエンドポイント `http://<server:port>/bin/guides/map-find/indexing?jobId={jobId}` にジョブ ID を含むGET リクエストを送信します。
（例：http://&lt;_localhost:8080_>/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678）

* ジョブが完了すると、上記のGET リクエストが成功を返し、失敗したマップがあるかどうかを示します。 正常にインデックス化されたマップは、サーバ ログから確認できます。

## 互換性マトリックス

この節では、2023 年 2 月リリースのAEM Guides as a Cloud Serviceでサポートされるソフトウェアアプリケーションの互換性マトリックスを示します。

### FrameMakerとFrameMaker Publishing Server

| AEM Guides as a Cloud リリース | FMPS | FrameMaker |
| --- | --- | --- |
| 2023.02.0 | 互換性がありません | 2022 以上 |
| | | |

*AEMで作成されたベースラインと条件は、2020.2 以降の FMPS リリースでサポートされます。

### 酸素コネクタ

| AEM Guides as a Cloud リリース | 酸素コネクタウィンドウ | 酸素コネクタMac | 酸素ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- | --- | --- |
| 2023.02.0 | 2.8-uuid-8 | 2.8-uuid-8 | 2.3 | 2.3 |
|  |  |  |  |  |

## 修正された問題

様々な領域で修正されたバグを以下に示します。

### オーサリング

* Web エディターの HTML を変更すると、`<dl>` および `<dlentry>` で問題が発生する。 （11024）
* 一部の属性は条件付きとして扱われず、問題の原因となります。 （10895）
* ネイティブのPDF書き出しで、3 つ以上のレベルのネストされた `<indexterm>` がネストされていない。 （10799）
* オーサービューからSource ビューに切り替えると、タスクの本文にコンテンツが表示されなくなります。 （10735）
* レビュータスク内にレビュコメントが誤って配置される。 （10625）
* 一部のファイルで **取り消し** または **やり直し** が正しく機能しない。 （10373）
* コピーアクションと貼り付けアクションでカスタムメタデータが保持されない。 （10367）
* XML エディターの取り消しオプションを使用すると、ユーザーはページの先頭に移動します。 （10091）
* アセットのコピーと貼り付け操作の後に、ノードプロパティが削除される。 （10053）
* mimeType は、DITA アセットの作成と更新のためにハードコードされています。 （8979）
* Assets UI を使用してアップロードされたファイルのバージョン履歴のバージョン作成者名は「fmdita-serviceuser」です。 （8910）
* AEM Guidesが Cloud にインストールされている場合、コンテンツフラグメントをコピーして貼り付けることはできません。 （11315）
* カスタムスキーマを使用してコンテンツを読み込むと、ブラウザー（web エディター）がフリーズする。 （11211）

### 管理

* （アセット UI から） DITA マップアセットをコピーすると、コピーされたアセットに誤ったベースラインが作成される。 （11218）
* AEMで許可されている上限（デフォルトでは 2 GB）を超えるファイルをアップロードしても警告メッセージが表示されません。 （10817）
* Web エディター – ベースライン | Web エディター内の新しいベースラインダッシュボードで、最新の列の動作が異なります。 （10808）
* 翻訳 |無効な/libs/fmdita/i18n/ja.jsonが原因で翻訳ジョブが開始されない。 （10543）
* 翻訳 |翻訳ダッシュボード（人間翻訳）から作成されたスコーピング翻訳プロジェクトでエラーが発生します。 （10526）
* 翻訳 |アクティブな翻訳プロジェクトにアセットが存在する言語フォルダー全体に対して、後処理がブロックされます。 （10332）
* ベースラインエディターでバージョンを変更して保存すると、すべてのアセットに複数のポップアップが表示されます。 （10399）
* セッションリークは `com.day.cq.search.impl.builder.QueryBuilderImpl.createResourceResolver(QueryBuilderImpl.java:210)` で発生します。 （10279）

### 公開

* 一部のシナリオで、トピックの再生成が機能しない。 （10635）
* Publishlistener は、要求されたデータを情報ログに表示せず、いくつかの迷惑ログも含む。（10567）
* ネイティブ PDF |「フォルダープロファイルに追加」オプションを使用して出力プリセットを作成すると、PDFの生成が失敗し Null ポインター例外が発生する。 （10950）
* ネイティブ PDF | テーブルヘッダーの回転で問題が発生します。 （10555）
* ネイティブ PDF | ネストされた `<indexterm>` は、ネイティブのPDF書き出しではネストされません。 （10521）
* ネイティブ PDF | appendices のネストされた topicref は、すべて一時HTMLで h1 に変換されます。 （10454）
* FrameMaker Publishing Server 2020 を使用して生成されたPDFのベースライン公開が失敗する。 （10551）
* ネイティブ PDF |画像に `xref` を追加しても、生成されたPDFで画像がレンダリングされない。 （11346）
* ネイティブ PDF |画像タグは、すべての画像に display-inline 属性を追加します。 （10653）
* ネイティブ PDF |生成された出力では、ドラフトコメントはデフォルトで非表示になっています。 （10560）
* ネイティブ PDF | navtitle は topichead に対して適用されません。 （10509）
