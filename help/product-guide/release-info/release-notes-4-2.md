---
title: リリースノート | Adobe Experience Manager Guides 4.2 リリース
description: バグ修正と、Adobe Experience Manager Guides 4.2 リリースへのアップグレード方法について説明します。
exl-id: 8a7fef77-63af-462f-89c5-054ab31e079b
feature: Release Notes
role: Leader
source-git-commit: 6d8c01f20f7b59fed92c404561b647d9ebecb050
workflow-type: tm+mt
source-wordcount: '1391'
ht-degree: 1%

---

# 4.2 Adobe Experience Manager Guidesのリリース（2023 年 2 月）

このリリースノートでは、Adobe Experience Manager Guides バージョン 4.2 （以降は *AEM Guides*）で修正されたアップグレード手順、互換性マトリックスおよび問題について説明します。

新機能と機能強化について詳しくは、[Adobe Experience Manager Guides 4.2 リリースの新機能 ](whats-new-4-2-release.md) を参照してください。

## AEM Guides 4.2 リリースへのアップグレード

AEM Guidesの現在のバージョンをバージョン 4.2 に簡単にアップグレードできます。AEM Guidesのバージョン 4.2 へのアップグレードを行う前に、次の点を考慮する必要があります。
* バージョン 4.0、4.1、または 4.1.x を使用している場合は、バージョン 4.2 に直接アップグレードできます。
* バージョン 3.8.5 を使用している場合、バージョン 4.2 にアップグレードする前にバージョン 4.0 にアップグレードする必要があります。
* バージョン 3.8.5 より前のバージョンを使用している場合は、製品固有のインストールガイドの *AEM Guidesのアップグレード* の節を参照してください。

>[!NOTE]
>
>AEM Guides版をアップグレードする前に、AEM サービスパックをインストールする必要があります。

詳しくは、[ アップグレードの手順 ](assets/Adobe-Experience-Manager-Guides-Upgrade-Instructions-EN.pdf) を参照してください。

## 互換性マトリックス

この節では、AEM Guides 4.2 リリースでサポートされているソフトウェアアプリケーションの互換表を示します。

### Adobe Experience Manager

**非 UUID**
バージョン 6.5 サービスパック 15、14、13、12

**UUID**
バージョン 6.5 サービスパック 15、14、13、12

詳しくは、『Adobe Experience Manager Guides インストールと設定ガイド』の *技術要件* の節を参照してください。

### FrameMakerとFrameMaker Publishing Server

| リリース | FMPS 2022 | FMPS 2020 | Fm 2022 | Fm 2020 |
| --- | --- | --- | --- | --- |
| 4.2 （非 UUID） | 2022 以上 | 2020.2 以上* | 2022 以上 | 2020.3 以上 |
| 4.2 （UUID） | 2022 以上 | 2020.2 以上* | 2022 以上 | 2020.4 以上 |
| | | | |

*AEMで作成されたベースラインと条件は、2020.2 以降の FMPS リリースでサポートされます。

### 酸素コネクタ

| リリース | 酸素コネクタウィンドウ | 酸素コネクタMac | 酸素ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- |--- |--- |
| 4.2 （非 UUID） | 2.1-regular-4 | 2.1-regular-4 | 1.6 | 1.6 |
| 4.2 （UUID） | 2.8-uuid-8 | 2.8-uuid-8 | 2.3 | 2.3 |
|  |  |   |

## 修正された問題

様々な領域で修正されたバグを以下に示します。

### オーサリング

* タブを追加すると、左のパネルが機能しなくなります。 （11126）
* Web エディターの HTML を変更すると、`<dl>` および `<dlentry>` で問題が発生する。 （11024）
* 一部の属性は条件付きとして扱われず、問題の原因となります。 （10895）
* ネイティブPDFの書き出しで、ネストされた 3 レベル以上の `<indexterm>` がネストされていません。 （10799）
* オーサービューからSource ビューに切り替えると、タスクの本文にコンテンツが表示されなくなります。 （10735）
* レビュータスク内にレビュコメントが誤って配置される。 （10625）
* `<conref>` タグ内のメモがプレビューモードで表示されません。 （10559）
* リスト項目の最後に backspace を押すと、リスト全体が削除されます。 （10540）
* UI からの任意の要素（例えば、条件パネルから）をドラッグ&amp;ドロップすると、Chrome v106 で画面が空白として表示される。 （10524）
* **Source** ビューのツールバーに「自動インデント」ボタンがない。 （10448）
* リスト項目の最初の文字は、エディターでリストを作成しているときに失われることがあります。（10447）
* 一部のファイルで **取り消し** または **やり直し** が正しく機能しない。 （10373）
* コピーアクションと貼り付けアクションでカスタムメタデータが保持されない。 （10367）
* コンテンツのコピー（Ctrl+C）と貼り付け（Ctrl+V）を行うとエラーが発生する。 （10304）
* オーサーモードからSource モードに切り替えても、アウトラインパネルにコンテンツが表示されない。 （10296）
* サブマップが DITA テンプレート内のメインマップを参照する場合、サブマップは作成されません。 （10231）
* 4.0 へのアップグレード後に、web エディターでナビゲーションの問題が発生する。 （10159）
* XML エディターの取り消しオプションを使用すると、ユーザーはページの先頭に移動します。 （10091）
* アセットのコピーと貼り付け操作の後に、ノードプロパティが削除される。 （10053）
* DITA トピックに追加されたSVGファイルは、エディタのプレビューモードでは表示されません。 （10010）
* ダークモードでは、web エディター内での検索と置換の検索結果を読み取れません。 （9978）
* マップ テンプレートからマップを作成している間、ローダーは存在しません。 （9891）
* トピックテンプレートの Conref が機能せず、コピーされたハッシュ ID がコンテンツのコピーで更新されない。 （9890）
* トピックまたはマップ フォルダのサブフォルダ内のトピックまたはマップ テンプレートを参照するオプションは表示されません。 （9889）
* トピックまたはマップのサブフォルダに新しいテンプレートを作成するオプションはありません。 （9888）
* XML エディターがトピックの画像を更新しない。 （9500）
* mimeType は、DITA アセットの作成と更新のためにハードコードされています。 （8979）
* **特殊文字を挿入** ダイアログで改行しないハイフンを選択すると、通常のハイフンが挿入されます。 （8919）
* Assets UI を使用してアップロードされたファイルのバージョン履歴のバージョン作成者名は「fmdita-serviceuser」です。 （8910）
* Assets UI の列表示で作業している場合、「編集」オプションが画像に対して機能しない。 （8758）
* **プロパティ** ページで行った変更で、DITA トピックが自動更新されない。 （8745）
* Web エディターでトピック内の要素を移動する際に、要素に割り当てられた ID が、自動割り当てられた ID で上書きされます。 （7895）

### 管理

* （アセット UI から） DITA マップアセットをコピーすると、コピーされたアセットに誤ったベースラインが作成される。 （11218）
* AEMで許可されている上限（デフォルトでは 2 GB）を超えるファイルをアップロードしても警告メッセージが表示されません。 （10817）
* Web エディター – ベースライン | Web エディター内の新しいベースラインダッシュボードで、最新の列の動作が異なります。 （10808）
* 翻訳 |無効な/libs/fmdita/i18n/ja.jsonが原因で翻訳ジョブが開始されない。 （10543）
* 翻訳 |翻訳ダッシュボード（人間翻訳）から作成されたスコーピング翻訳プロジェクトでエラーが発生します。 （10526）
* 翻訳 | アクティブな翻訳プロジェクトにアセットが存在する言語フォルダー全体に対して、Post処理がブロックされます。 （10332）
* 翻訳| メタデータとタグが、翻訳済みコピーに反映されない。 （4696）
* ベースラインエディターでバージョンを変更して保存すると、すべてのアセットに複数のポップアップが表示されます。 （10399）
* セッションリークは、com.day.cq.search.impl.builder.QueryBuilderImpl.createResourceResolver （QueryBuilderImpl.java:210）で発生します。 （10279）
* 親フォルダーの名前にスペースが含まれている場合、ビデオファイルがベースラインに表示されません。 （10031）

### 公開

* 一部のシナリオで、トピックの再生成が機能しない。 （10635）
* （既存のプリセットの）重複するプリセットの出力を生成すると、PDFの公開が失敗する。 （10584）
* プリセットに対してPDFの生成が失敗した場合、「ログを表示」ボタンが機能しない。 （10576）
* Publishlistener は、要求されたデータを情報ログに表示せず、いくつかの迷惑ログも含む。（10567）
* ネイティブPDF | PDFの生成が Null ポインター例外で失敗します。 （10950）
* ネイティブPDF | conkeyref は、生成された出力で解決されません。 （10564）
* ネイティブPDF |PDF出力で参照する必要があるマップのメタデータに問題が発生します。（10556）
* ネイティブPDF | テーブルヘッダーの回転で問題が発生します。 （10555）
* ネイティブPDF |処理 role=&#39;resource-only&#39;を持つトピックを削除すると、問題が発生します。 （10554）
* ネイティブPDF |空のキー参照がPDF出力に表示されます。 （10553）
* ネイティブPDF | ネストされた `<indexterm>` は、ネイティブPDFの書き出しではネストされません。 （10521）
* ネイティブPDF | ネイティブPDFでは、生成されたタグにクラス名の代わりにインラインスタイルを使用します。 （10498）
* ネイティブPDF | appendices のネストされた topicref はすべて、一時HTMLで h1 に変換されます。（10454）
* ネイティブPDF |目次から重要なトピックを非表示にできません。 （10355）
* ネイティブPDF | （クラスとして）一時HTMLに反映されないテーブル フレーム属性。 （10353）
* ネイティブPDF |一時HTMLファイルは、colsep クラスと rowsep クラスをに追加します <td> また <th> 値がソース DITA 内で 0 の場合でも。 （10352）
* ネイティブPDF |章レイアウトでページ番号を再度開始すると、前の章の最後から番号がランダムに開始されます。 （10154）
* ネイティブPDF |画像または外部リンクを含む keydefs のキー参照が解決されません。 （10063）
* ネイティブPDF |生成されたPDFのチャプターとして付録が表示されています。 （9829）
* xml エディターの「テンプレート」タブがフォルダープロファイル管理者に表示されません。 （10266）
* FrameMaker Publishing Server 2020 を使用して生成されたPDFの場合、ベースラインの公開が失敗します。 （10551）
* クイック生成ポップアップの「出力プリセット」チェックボックスですべてのプリセットを選択した後、「編集」ボタンをクリックすると、アプリケーションエラーが発生する。 （10388）
* Web エディターの「出力」タブに多数のプリセットが表示されている場合、「プリセット」セクションは垂直方向にスクロールできず、使用可能なプリセットの一部が表示されません。 （9787）
* エディター経由での公開中に、出力ワークフローからプリセットを削除できない。 （9100）
* ピアリンクは、生成されたページ上のリンクではなく、通常のテキストとしてレンダリングされます。 （7774）

## 既知の問題

Adobeでは、AEM Guides 4.2 リリースに関する次の既知の問題を特定しました。

* ユーザーは、レビュータスクが完了した後でもレビュー操作を実行できます。
