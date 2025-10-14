---
title: リリースノート | Adobe Experience Manager Guidesのアップグレード手順と修正された問題、2023 年 11 月リリース
description: バグ修正と、Adobe Experience Manager Guidesas a Cloud Serviceの 2023 年 11 月リリースへのアップグレード方法について説明します
exl-id: 80839890-075f-4187-a167-444c73215496
feature: Release Notes
role: Leader
source-git-commit: 6d8c01f20f7b59fed92c404561b647d9ebecb050
workflow-type: tm+mt
source-wordcount: '1673'
ht-degree: 0%

---

# 2023 年 11 月Adobe Experience Manager Guidesas a Cloud Serviceリリース

このリリースノートでは、Adobe Experience Manager Guidesas a Cloud Service（後で *Experience Manager Guidesas a Cloud Service* と呼ばれます）の 2023 年 11 月バージョンで修正されたアップグレード手順、互換性マトリックスおよび問題について説明します。

新機能と機能強化について詳しくは、[Experience Manager Guidesas a Cloud Serviceの 2023 年 11 月リリースの新機能 &#x200B;](whats-new-2023-11-0.md) を参照してください。

## 2023 年 11 月リリースへのアップグレード

次の手順を実行して、現在のExperience Manager Guidesのas a Cloud Service設定をアップグレードします。

1. Cloud Serviceの Git コードをチェックアウトし、アップグレードする環境に対応する、Cloud Serviceパイプラインで設定されたブランチに切り替えます。
2. Cloud Service`<dox.version>`Git コード `/dox/dox.installer/pom.xml` ファイルのプロパティを 2023.11.0.406 に更新します。
3. 変更内容をコミットし、Cloud Serviceパイプラインを実行して、2023 年 11 月リリースのExperience Manager Guidesas a Cloud Serviceにアップグレードします。

## サーブレットを使用したスクリプトのトリガーを有効にする手順

（Experience Manager Guidesas a Cloud Serviceの 2023 年 6 月リリースより前のバージョンを使用している場合のみ）

インストールが完了したら、トリガーを押して翻訳ジョブを開始できます。

POST:

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

前の応答 JSON では、キー `lockNodePath` は、送信されたジョブを指す、リポジトリで作成されたノードへのパスを保持します。 ジョブが完了すると自動的に削除されるので、ジョブのステータスについては、このノードを参照してください。

このジョブが完了するのを待ってから、次の手順に進みます。

>[!NOTE]
>
> ノードがまだ存在するかどうか、およびジョブのステータスを確認する必要があります。

```
GET
http://<aem_domain>/var/dxml/executor-locks/translation-map-upgrade/1683190032886.json
```

## 壊れたリンクレポートを使用するために、既存のコンテンツを後処理する手順

（Experience Manager Guidesas a Cloud Serviceの 2023 年 6 月リリースより前のバージョンを使用している場合のみ）

既存のコンテンツを後処理し、新しい壊れたリンクのレポートを使用するには、次の手順を実行します。

1. （オプション）システムに 100,000 個を超える DITA ファイルがある場合は、`org.apache.jackrabbit.oak.query.QueryEngineSettingsService` 下の `queryLimitReads` および `queryLimitInMemory` を大きい値（存在するアセットの数を超える値は、たとえば 200,000）に変更してから再デプロイします。

   - Adobe Experience Manager Guidesのインストールと設定のas a Cloud Serviceの *設定の上書き* の節で説明している手順に従って、設定ファイルを作成します。
   - 設定ファイルで、`queryLimitReads` と `queryLimitInMemory` オプションを設定するために、次の（プロパティ）の詳細を指定します。

     | PID | プロパティキー | プロパティの値 |
     |---|---|---|
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitReads | 値：200000 デフォルト値：100000 |
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitInMemory | 値：200000 デフォルト値：100000 |

1. （正しいPOSTを使用して）サーバへの認証リクエストを実行します。`http://<server:port>//bin/guides/reports/upgrade`

1. API は jobId を返します。 ジョブのステータスを確認するには、ジョブ ID を含むGETリクエストを同じエンドポイント（`http://<server:port>/bin/guides/reports/upgrade?jobId= {jobId}`）に送信します。
（例：`http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`）

1. ジョブが完了すると、前回のGETリクエストが正常に応答します。 何らかの理由でジョブが失敗した場合は、サーバーログに失敗が示されます。

1. 手順 1 で変更した場合は、デフォルトまたは以前の既存の値 `queryLimitReads` に戻します。

## 「レポート」タブで新しい「検索と置換」および「トピック」リストを使用するために、既存のコンテンツにインデックスを作成する手順は次のとおりです。

（Experience Manager Guidesas a Cloud Serviceの 2023 年 6 月リリースより前のバージョンを使用している場合のみ）

既存のコンテンツのインデックスを作成する次の手順を実行し、「レポート」タブの新しい検索と置換のテキストをマップレベルとトピックリストで使用します。

1. （正しいPOSTを使用して）サーバへの認証リクエストを実行します。`http://<server:port>/bin/guides/map-find/indexing` （オプション：マップの特定のパスを渡してインデックスを作成できます。デフォルトでは、すべてのマップにインデックスが作成されます ||例：`https://<Server:port>/bin/guides/map-find/indexing?paths=<map_path_in_repository>`）

1. ルートフォルダーを渡して、特定のフォルダー（およびそのサブフォルダー）の DITA マップのインデックスを作成することもできます。 例えば、`http://<server:port>/bin/guides/map-find/indexing?root=/content/dam/test` のようになります。paths パラメーターと root パラメーターの両方が渡される場合、paths パラメーターのみが考慮されることに注意してください。

1. API は jobId を返します。 ジョブのステータスを確認するには、同じエンドポイント `http://<server:port>/bin/guides/map-find/indexing?jobId={jobId}` （例：`http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42`）にジョブ ID を含むGETリクエストを送信します


1. ジョブが完了すると、前回のGETリクエストが成功を示して応答し、マップが失敗したかどうかを示します。 正常にインデックス化されたマップは、サーバ ログから確認できます。

## `'fmdita rewriter'` の競合を処理する手順

Experience Manager Guidesには、クロスマップ（2 つの異なるマップのトピック間のリンク）の場合に生成されるリンクを処理する [**custom sling rewriter**](../cs-install-guide/conf-output-generation.md#custom-rewriter) モジュールがあります。

コードベースに別のカスタム sling rewriter がある場合は、Experience Manager Guides sling rewriter が 50 を使用するように、50 より大きい `'order'` 値を使用し `'order'` す。  これを上書きするには、50 より大きい値が必要です。 詳しくは、[&#x200B; 出力の書き換えパイプライン &#x200B;](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html) を参照してください。

このアップグレード中に、`'order'` の値が 1000 から 50 に変更されるので、既存のカスタムリライターがある場合は `'fmdita-rewriter'` と結合する必要があります。


## 互換性マトリックス

この節では、2023 年 11 月リリースのExperience Manager Guidesでサポートされているソフトウェアアプリケーションのas a Cloud Serviceマトリックスを示します。

### FrameMakerとFrameMaker Publishing Server

| Experience Manager Guides Guides as a Cloud リリース | FMPS | FrameMaker |
| --- | --- | --- |
| 2023.11.0 | 互換性がありません | 2022 以上 |
| | | |


### 酸素コネクタ

| Experience Manager Guides as a Cloud リリース | 酸素コネクタウィンドウ | 酸素コネクタMac | 酸素ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- | --- | --- |
| 2023.11.0 | 3.2-uuid 5 | 3.2-uuid 5 | 2.3 | 2.3 |
|  |  |  |  |


### ナレッジベーステンプレートバージョン

| コンポーネントパッケージ名 | コンポーネントのバージョン | テンプレートのバージョン |
|---|---|---|
| Cloud Service用Experience Manager Guides コンポーネントコンテンツパッケージ | dxml-components.all-1.2.2 | aem-site-template-dxml.all-1.0.15 |

## 修正された問題

様々な領域で修正されたバグを以下に示します。



### オーサリング

- トピックを保存すると、`<ph>` 要素の後のスペースが消える。 （13642）
- 後処理が完了する前に DITA ファイルを保存しようとすると、アプリケーションエラーが発生する。 （13571）
- トピックのタイトルにスラッシュ `/` が含まれている場合、エディターのタブには、その後に続く文字のみが表示されます。 （13455）
- エディターにプレビューを表示した後、画像のプレビューが消えない。 （13454）
- 他のトピックでルートマップ定義のキーを使用する場合、キーワードの挿入ポップアップが表示されない。 （12950）
- バージョン履歴パネルで非常に高いグラフィックをプレビューしている場合、閉じるアイコンは表示されません。 （12867）
- ベースラインの **バージョン作成日** 列のタイムゾーンを変更できません。 （12711）
- Assets UI の **バージョン履歴** パネルに、**現在** フィールドの誤ったタイムスタンプが表示される。 （12624）
- ファイル名が数字で始まるテンプレートから DITA ファイルを作成すると、名前空間エラーが発生する。 （12188）
- Web エディターで `varname` タグを挿入すると、**キー参照** ウィンドウが開きます。 （10940）
- Zip ファイルは、Web エディターで認識されず、ドラッグ&amp;ドロップできません。 （12709）
- 一部の属性が適用されたコンテンツが、オーサーモードまたはプレビューモードでハイライト表示されない。 （11063）
- 編集後にトピックを閉じると、フォルダービューに戻る代わりにAEM ホームページにリダイレクトされます。 （13306）
- クラウドサービスにコピーして貼り付けたファイルの後処理で遅延が発生します。 （12457）
- ユーザーがユーザー環境設定から明示的に設定しなくても、ルートマップ設定は web エディターに保持されます。 （11551）


### 公開

- 検索結果にリストされたファイルに対して、Publish as a コンテンツフラグメント機能が機能しない。 （14090）
- ネイティブPDFへの公開で、テンプレートレイアウト上の背景色を選択した場合に `None` に戻すには、ページを再読み込みする必要があります。 （13621）
- AEM Site Publishing で、スコープのピアリンクを含む大きな DITA マップのデータストアをコミットする際に問題が発生する。 （13530）
- ネイティブPDFでの公開では、ヘッダーやフッターの画像に代替テキストが表示されないので、アクセシビリティが損なわれます。 （12829）
- ネイティブPDFでのページレイアウトの複製は、拡張子が自動的に追加されない場合は機能しません。 （12534）
- ネイティブPDF公開を使用してPDF出力を生成する場合、ファイル名はピリオドの後に切り捨てられます。 （13620）
- ネイティブPDFでの公開に使用するテンプレートのページレイアウトツールバーにある「**コンテンツを編集**」オプションに、誤ったアイコンとツールヒントが表示される。 （13492）
- カスタムメタデータは、最終的な出力では使用できません。 （12116）
- fmdita リライターは、ユーザーのリライター設定と競合し、リンクではなく長い URL が表示される。 （12076）
- AEM サイトプリセットで、「各トピックに対して個別のPDFを生成 **するオプションを使用しても** 機能しません。 （11555）
- ネイティブPDFの公開では、CMYK カラースペース変換をサポートしていません。 （10754）
- 動的ベースライン呼び出しが title ではなく名前を使用しているため、DITA マップ API の書き出しが失敗します。 （14268）

### 管理

- GUID のない自己参照リンクを持つ DITA ファイルをコピーして貼り付けると、コンテンツ参照が壊れる （13540）
- Web エディタでは、ベースラインには、選択したバージョンの DITA ファイルではなく、以前のバージョンのタイトルが表示されます。 （13444）
- Experience Manager Guidesas a Cloud Serviceの 2023 年 7 月のアップグレード以前に作成された古い DITA マップのトピックリストが Web エディタ UI の「**レポート**」タブに表示されません。 （11852）
- 大きな DITA マップの条件プリセットが作成されない。 （10936）
- 自己参照リンクは、レポートの壊れたリンクのリストの下に表示されます。 （13539）

### レビュー

- Experience Manager Guidesas a Cloud Serviceの 2023 年 10 月リリースで、web エディターの以前のバージョンと現在のバージョンの並列レビューパネルが正しくありません。 （14156）
- **レビュー** ワークフローのメールテンプレートのカスタマイズが、ノードのオーバーレイで機能しない。 （13954）
- Experience Manager Guidesのレビューページの「**閉じる**」ボタンをクリックすると、AEM ホームページに移動します。 （13535）
- 韓国語でスニペットを作成すると、壊れた文字が表示される。 （13489）
- Experience Manager Guides レビュー画面の韓国語の添付ファイルをクリックできません。 （13436）
- レビューおよびコラボレーション画面でマップのタイトルが途切れ、完全なタイトルを表示するオプションがない。 （13012）

### 翻訳

- 自動承認が機能しないことがあり、**翻訳ステータス** に間違った値が設定されていると例外が発生することがあります。 （13607）
- 翻訳ダッシュボードから書き出されたベースラインが失敗し、ターゲット言語で開きません。 （12993）

## 既知の問題

Adobeでは、2023 年 11 月リリースの次の既知の問題を特定しました。

- AEM Site 出力の選択的なトピックの再生成に失敗します。
