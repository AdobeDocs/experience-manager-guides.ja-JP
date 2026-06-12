---
title: リリースノート | Adobe Experience Manager Guides as a Cloud Service（2023年2月リリース）
description: Adobe Experience Manager Guides as a Cloud Serviceの2月リリース
exl-id: c639b136-11ed-4a8b-a595-4bb5da879747
feature: Release Notes
role: Leader
TQID: https://experienceleague.adobe.com/KtMCjANUmaT-PaKIJltf0G72WaHR0JV94HyutN9DyFY
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a3bd6397-2eb2-4908-a61c-226e26855dcaid: ab01a588-7dea-43f2-a699-0b3f128465d6
subfeature_v2: id: ad602516-aca3-4247-9ae8-f393d958efa9id: d5ea0417-7932-4688-a3e2-4d3b2e7076a3id: f89f75b0-cf2e-4e96-aec8-fe8c39cbd0ef
role_v2: id: f8a45b24-4be7-4f1b-909b-60d06b483a20
topic_v2: id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 857
ht-degree: 4%

---

# Adobe Experience Manager Guides as a Cloud Serviceの2023年2月リリース

このリリースノートでは、Adobe Experience Manager Guidesの2023年2月バージョン（後に&#x200B;*AEM Guides as a Cloud Service*&#x200B;と呼ばれます）で修正されたアップグレード手順、互換性マトリックス、および問題について説明します。

新機能と機能強化について詳しくは、[AEM Guides as a Cloud Serviceの2023年2月リリースの新機能](whats-new-2023-2-0.md)を参照してください。

## 2023年2月リリースへのアップグレード

次の手順を実行して、現在のAEM Guides as a Cloud Service設定をアップグレードします。
1. Cloud ServicesのGit コードを確認し、アップグレードする環境に対応するCloud Services パイプラインで設定されたブランチに切り替えます。
2. Cloud Services Git コードの`/dox/dox.installer/pom.xml` ファイルの`<dox.version>` プロパティを2023.2.235に更新します。
3. 変更を確定し、Cloud Services パイプラインを実行して、AEM Guides as a Cloud Serviceの2023年2月リリースにアップグレードします。

## 既存のコンテンツをインデックス化する手順（AEM Guides as a Cloud Serviceの9月リリース以前のバージョンを使用している場合のみ）

既存のコンテンツのインデックスを作成するには、次の手順を実行し、マップレベルで新しい検索と置換のテキストを使用します。

* サーバーへのPOST リクエストを実行します（正しい認証を使用） - `http://<server:port>/bin/guides/map-find/indexing`。
（オプション：マップの特定のパスを渡してインデックスを作成できます。デフォルトでは、すべてのマップにインデックスが付けられます||例：`https://<Server:port>/bin/guides/map-find/indexing?paths=<map_path_in_repository>`）

* APIはjobIdを返します。 ジョブのステータスを確認するには、ジョブ IDを持つGET リクエストを同じエンドポイントに送信できます。 `http://<server:port>/bin/guides/map-find/indexing?jobId={jobId}`
（例：http://&lt;_localhost:8080_/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678）

* ジョブが完了すると、上記のGET リクエストは成功して応答し、マップが失敗した場合にメンションします。 正常にインデックス化されたマップは、サーバーログから確認できます。

## 互換性マトリックス

この節では、AEM Guides as a Cloud Service 2023年2月リリースでサポートされるソフトウェアアプリケーションの互換性マトリックスを示します。

### FrameMakerとFrameMaker Publishing Server

| AEM Guides as a Cloud リリース | FMPS | FrameMaker |
| --- | --- | --- |
| 2023.02.0 | 互換性がありません | 2022年以降 |
| | | |

* AEMで作成されたベースラインと条件は、2020.2以降のFMPS リリースでサポートされています。

### Oxygen コネクタ

| AEM Guides as a Cloud リリース | Oxygen コネクタウィンドウ | Oxygen Connector Mac | Oxygen ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- | --- | --- |
| 2023.02.0 | 2.8-uuid-8 | 2.8-uuid-8 | 2.3 | 2.3 |
|  |  |  |  |  |

## 修正された問題

様々な領域で修正されたバグを以下に示します。

### オーサリング

* Web エディターのhtmlを変更すると、`<dl>`と`<dlentry>`に問題が発生します。 (11024)
* 一部の属性は条件付きとして扱われず、問題が発生します。 (10895)
* 3つ以上のネストされた`<indexterm>`が、ネイティブ PDF エクスポートにネストされていません。 (10799)
* 作成者からSource ビューに切り替えると、タスクの本文にコンテンツが表示されなくなります。 (10735)
* レビューコメントはレビュータスクに配置されません。 (10625)
* 一部のファイルで&#x200B;**取り消し**&#x200B;または&#x200B;**やり直し**&#x200B;が正しく機能しません。 (10373)
* コピー&amp;ペースト操作では、カスタムメタデータは保持されません。 (10367)
* XML エディターの「取り消し」オプションを使用すると、ユーザーはページの上部に移動します。 (10091)
* アセットのコピー&amp;ペースト操作の後、ノードプロパティが削除されます。 (10053)
* mimeTypeは、DITA アセットの作成および更新用にハードコードされています。 (8979)
* バージョン履歴のバージョン作成者名は、Assets UIを介してアップロードされたファイルの「fmdita-serviceuser」です。 (8910)
* AEM GuidesがCloudにインストールされている場合、コンテンツフラグメントをコピーして貼り付けることはできません。 (11315)
* カスタムスキーマを使用してコンテンツを読み込むと、ブラウザー（Web エディター）がフリーズする。 (11211)

### 管理

* （アセット UIから） DITA マップアセットをコピーすると、コピーしたアセット内に誤ったベースラインが発生します。 (11218)
* AEMで許可されている制限（デフォルトでは2 GB）を超えるファイルのアップロードには、警告メッセージは表示されません。 (10817)
* Web エディター – ベースライン |最新の列の動作は、Web エディター内の新しいベースラインダッシュボードで異なります。 (10808)
* 翻訳|無効な/libs/fmdita/i18n/ja.jsonが原因で、翻訳ジョブを開始できません。 (10543)
* 翻訳|翻訳ダッシュボードから作成されたスコーピング翻訳プロジェクトでエラーが発生します（人間による翻訳）。 (10526)
* 翻訳| アセットがアクティブな翻訳プロジェクトに存在する言語フォルダー全体で、後処理がブロックされます。 (10332)
* バージョンが変更され、ベースラインエディターに保存されている場合、アセットに複数のポップアップが表示されます。 (10399)
* セッション リークは`com.day.cq.search.impl.builder.QueryBuilderImpl.createResourceResolver(QueryBuilderImpl.java:210)`に発生します。 (10279)

### 公開

* 一部のシナリオでは、トピックの再生成が機能しない。 (10635)
* Publishlistenerは、リクエストされたデータを情報ログに表示せず、一部のジャンクログも含みます。（10567）
* ネイティブ PDF | 「フォルダーのプロファイルに追加」オプションを使用して出力プリセットを作成すると、PDFの生成が失敗し、ヌルポインターの例外が発生します。 (10950)
* ネイティブ PDF | テーブルヘッダーのローテーションに関する問題が発生します。 (10555)
* ネイティブ PDF | ネストされた`<indexterm>`は、ネイティブ PDF書き出しにネストされていません。 (10521)
* ネイティブ PDF |付録のネストされたtopicrefはすべて、一時的なHTMLのh1に変換されます。 (10454)
* FrameMaker Publishing Server 2020を使用して生成されたPDFのベースライン公開が失敗します。 (10551)
* ネイティブ PDF | イメージに`xref`を追加しても、生成されたPDFではイメージがレンダリングされません。 (11346)
* PDFのネイティブ機能| Image tagは、すべての画像にdisplay-inline属性を追加します。 (10653)
* ネイティブ PDF | ドラフトコメントは、生成された出力ではデフォルトで非表示になっています。 (10560)
* ネイティブ PDF | navtitleはtopicheadでは採用されません。 (10509)
