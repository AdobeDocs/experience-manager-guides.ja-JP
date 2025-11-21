---
title: リリースノート | Adobe Experience Manager Guidesのアップグレード手順と修正された問題（2023 年 9 月リリース）
description: バグ修正と、Adobe Experience Manager Guides as a Cloud Serviceの 2023 年 9 月リリースへのアップグレード方法について説明します
exl-id: 795b86a0-e763-404a-a4bb-35d3d2a42672
feature: Release Notes
role: Leader
source-git-commit: 6e23f52fc9124d0f07f8108da1b5fe574f553469
workflow-type: tm+mt
source-wordcount: '1485'
ht-degree: 0%

---

# 2023 年 9 月リリースのAdobe Experience Manager Guidesas a Cloud Service

このリリースノートでは、2023 年 9 月バージョンのAdobe Experience Manager Guides（後の *AEM Guides as a Cloud Service*）で修正されたアップグレード手順、互換性マトリックスおよび問題について説明します。

新機能と機能強化について詳しくは、[2023 年 9 月リリースのAEM Guides as a Cloud Serviceの新機能 &#x200B;](whats-new-2023-9-0.md) を参照してください。

## 2023 年 9 月リリースへのアップグレード

次の手順を実行して、現在のAEM Guides as a Cloud Service設定をアップグレードします。

1. Cloud Services の Git コードをチェックアウトし、アップグレードする環境に対応する、Cloud Services パイプラインで設定されたブランチに切り替えます。
2. Cloud Services Git コ `<dox.version>` ド `/dox/dox.installer/pom.xml` ファイルのプロパティを 2023.9.0.359 に更新します。
3. 変更内容をコミットし、Cloud Services パイプラインを実行して、2023 年 9 月リリースのAEM Guides as a Cloud Serviceにアップグレードします。

## サーブレットを使用したスクリプトのトリガーを有効にする手順

（2023 年 6 月リリースのAEM Guides as a Cloud Serviceより前のバージョンを使用している場合のみ）

インストールが完了したら、トリガーを押して翻訳ジョブを開始できます。

投稿：

```
http://localhost:4503/bin/guides/script/start?jobType=translation-map-upgrade
```

応答：

```
{
"msg": "Job is successfully submitted and lock node is created for future reference",
"lockNodePath": "/var/dxml/executor-locks/translation-map-upgrade/1683190032886",
"status": "SCHEDULED"
}
```

前の応答 JSON では、キー `lockNodePath` は、送信されたジョブを指す、リポジトリで作成されたノードへのパスを保持します。 ジョブが完了すると自動的に削除されますが、その時点まで、ジョブの現在のステータスについては、このノードを参照できます。

このジョブが完了するのを待ってから、次の手順に進みます。

>[!NOTE]
>
> ノードがまだ存在するかどうか、およびジョブのステータスを確認する必要があります。

```
GET
http://<aem_domain>/var/dxml/executor-locks/translation-map-upgrade/1683190032886.json
```

## 壊れたリンクレポートを使用するために、既存のコンテンツを後処理する手順

（2023 年 6 月リリースのAEM Guides as a Cloud Serviceより前のバージョンを使用している場合のみ）

既存のコンテンツを後処理し、新しい壊れたリンクのレポートを使用するには、次の手順を実行します。

1. （オプション）システムに 100,000 個を超える Dita ファイルがある場合は、`queryLimitReads` の `org.apache.jackrabbit.oak.query.QueryEngineSettingsService` を大きい値（存在するアセットの数を超える値は、たとえば 200,000）に変更してから再デプロイします。

   - Adobe Experience Manager Guidesのインストールと設定の *設定の上書き* の節で説明している手順を使用します
as a Cloud Service（設定ファイルを作成する場合）
   - 設定ファイルで、次の（プロパティ）の詳細を指定して queryLimitReads オプションを設定します。

     | PID | プロパティキー | プロパティの値 |
     |---|---|---|
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitReads | 値：200000 デフォルト値：100000 |

1. （正しい認証で） サーバーへの POST リクエストを実行します – `http://<server:port>//bin/guides/reports/upgrade`。

1. API は jobId を返します。 ジョブのステータスを確認するには、同じエンドポイント `http://<server:port>/bin/guides/reports/upgrade?jobId= {jobId}` にジョブ ID を含むGET リクエストを送信します。
（例：`http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`）

1. ジョブが完了すると、前回のGET リクエストが正常に応答します。 何らかの理由でジョブが失敗した場合は、失敗がサーバーログに記録されます。

1. 手順 1 で変更した場合は、デフォルトまたは以前の既存の値 `queryLimitReads` に戻します。

## 「レポート」タブで新しい「検索と置換」および「トピック」リストを使用するために、既存のコンテンツにインデックスを作成する手順は次のとおりです。

（2023 年 6 月リリースのAEM Guides as a Cloud Serviceより前のバージョンを使用している場合のみ）

既存のコンテンツのインデックスを作成する次の手順を実行し、「レポート」タブの新しい検索と置換のテキストをマップレベルとトピックリストで使用します。

1. サーバー\（正しい認証\） - `http://<server:port\>/bin/guides/map-find/indexing` に対して POST リクエストを実行します。 （オプション：マップの特定のパスをインデックスに指定できます。デフォルトでは、すべてのマップにインデックスが付けられます\|\|例：`https://<Server:port\>/bin/guides/map-find/indexing?paths=<map\_path\_in\_repository\>`）。

1. ルートフォルダーを渡して、特定のフォルダー（およびそのサブフォルダー）の DITA マップのインデックスを作成することもできます。 例えば、`http://<server:port\>/bin/guides/map-find/indexing?root=/content/dam/test` のようになります。paths パラメーターと root パラメーターの両方が渡される場合、paths パラメーターのみが考慮されることに注意してください。

1. API は jobId を返します。 ジョブのステータスを確認するには、同じエンドポイント `http://<server:port\>/bin/guides/map-find/indexing?jobId=\{jobId\}`\（例：`http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42`\）にジョブ ID を含むGET リクエストを送信します


1. ジョブが完了すると、前回のGET リクエストが成功を返し、失敗したマップがあるかどうかを示します。 正常にインデックス化されたマップは、サーバ ログから確認できます。

## 互換性マトリックス

この節では、2023 年 9 月リリースのAEM Guides as a Cloud Serviceでサポートされるソフトウェアアプリケーションの互換性マトリックスを示します。

### FrameMakerとFrameMaker Publishing Server

| AEM Guides as a Cloud リリース | FMPS | FrameMaker |
| --- | --- | --- |
| 2023.09.0 | 互換性がありません | 2022 以上 |
| | | |


### 酸素コネクタ

| AEM Guides as a Cloud リリース | 酸素コネクタウィンドウ | 酸素コネクタMac | 酸素ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- | --- | --- |
| 2023.09.0 | 3.1-uuid 17 | 3.1-uuid 17 | 2.3 | 2.3 |
|  |  |  |  |  |


### ナレッジベーステンプレートバージョン

| コンポーネントパッケージ名 | コンポーネントのバージョン | テンプレートのバージョン |
|---|---|---|
| Cloud Service用AEM Guides コンポーネントコンテンツパッケージ | dxml-components.all-1.2.2 | aem-site-template-dxml.all-1.0.15 |

## 修正された問題

様々な領域で修正されたバグを以下に示します。

### オーサリング

- [ ファイルのロックを解除 ] オプションと [ 保存しない ] オプションが選択されていても、Web エディタでトピック ファイルのロックは解除されません。 （12558）
- チェックイン前に変更を破棄する場合に「いいえ」オプションを選択しても、Web エディターでファイルをチェックアウトできない。 （12557）
- Web エディター内のメインツールバーにあるファイルのロックとロック解除のアイコンのツールチップは、リポジトリビューに表示されるアイコンと一致しません。（12555）
- [ チェックアウトをキャンセル ] および [ ロック解除 ] オプションは、マップ ビューでまだチェックアウトされていない Web エディタ内のファイルに対して表示されます。 （12556）
- 既存の「topicref」リンクでPDF アセットを選択できない。 （12477）。
- リポジトリビューでは、検索/フィルター機能を使用した後にトピックまたは画像をドラッグすることはできません。 （12396）
- 検索したファイルを開くと、検索結果が「検索と置換」パネルで無効になります。 （12142）
- サイドキーボードの「8」数字キーがAEM Guides エディターで機能しません。 （12106）

- Web エディターのプレビューモードで、プレフィックスが重複します。 （13133）
- `Choicetable` 行が表示されていないか、選択できません。 （12616）
- カスタムスキーマを使用してトピックを作成すると、web エディターが特定のシナリオで検証エラーをスローする。 （12576）
- Ditaval トピック テンプレート参照では、マップ テンプレートからマップを作成する際に、コンテンツ フォルダにコピーが作成されません。 （12150）
- DITA マップの検索ボックスに「閉じる」ボタンがありません。 （11867）
- Web エディターに長いファイルを保存すると、`DirtyChecker` は長いスタックトレースを含む例外をスローし、ログファイルに記録されます。 （11860）
- DITA トピックを作成するには、対応するフォルダノードに削除権限が必要ですが、マップは書き込み権限で作成できます。 （11706）
- スラッシュが存在する場合、web エディターに間違ったタイトルが表示される。 （10949）


### 管理

- DITA マップメタデータプロパティの「タイトル」フィールドが、マップ `<title>` 要素によって上書きされます。 （10702）
- トピック ID が GUID と同じでない場合、コンテンツ参照が壊れてコピーと貼り付けされる DITA ファイル。 （12614）
- 動的ベースラインでは、ラベルのリストは DITA マップの作業コピーの直接参照から取り込まれません。 （11917）

### 公開

- ネイティブ PDF プリセットの名前を変更すると、公開が失敗します。 （12564）
- ネイティブのPDF テンプレートを複製すると、指定されたカスタムテンプレートの場所ではなく、デフォルトのテンプレートの場所に複製されます。 （12563）

- ネイティブ PDF |複数の外部参照を含めると、列の幅を超えてテキストが拡張されます。 （13004）
- ネイティブ PDF | トピックとタイトルの ID が同じ場合、PDF出力の生成が正しくありません。 （12644）
- ネイティブ PDF | DITA マップの親 `<topicref>` 要素に outputclass を追加し、カスタムスタイルを outputclass に適用すると、トピック本文内の要素（セクションタイトルを含む）にスタイル設定が適用されます。（12166）
- DITA マップに複数の ditavalrefs がある場合、増分公開は機能しません。 （12117）
- AEM サイト | keydef がトピックを変数として指すマップを作成し、processing-role=resource-only を追加すると、予期しないページがいくつか作成される。 （12099）
- AEMの DAM 内のアセットがAEM サイト以外の出力で使用されている場合、メタデータ「jcr:createdBy」には、公開者の名前または DITA マップまたはトピックを最後に変更したユーザーの名前は反映されません。 （12090）
- AEM Sites | DITA マップのナビゲーションに topichead が含まれる（サポートされていない文字を含む）と、不正なページ URL が表示される。 （11978）
- ネイティブ PDF | Frontmatter と Backmatter で topichead/topicmeta/navtitle をサポートする際に問題が発生する。 （11969）
- ネイティブ PDF |大きなドキュメントの PDF 生成には時間がかかります。 （11955）
- ネイティブ PDF | プリセット名を変更すると、PDF出力の生成中に NullPointerException がスローされる。 （11889）
- `<conref>` コンテンツは、PDF出力には表示されません。 （11131）
- ページレイアウトエディターでオーサービューとSourceビューを切り替えると、`<div>` 要素内にスペースが追加されます。 （10750）
- AEM Cloud Manager でレプリケートされたコンテンツは、パブリッシュインスタンスには表示されません。 （9564）

### 翻訳

- 翻訳用の名前の変更されたベースラインをエクスポートするプロセスが失敗します。 （12993）
- 翻訳されたファイルのタイトルが、ソースファイルのタイトルの代わりに表示されます。 （11630）
