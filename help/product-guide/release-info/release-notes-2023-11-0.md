---
title: リリースノート | Adobe Experience Manager Guidesのアップグレード手順と修正された問題（2023年11月リリース）
description: Adobe Experience Manager Guides as a Cloud Serviceのバグ修正と2023年11月リリースへのアップグレード方法について説明します
exl-id: 80839890-075f-4187-a167-444c73215496
feature: Release Notes
role: Leader
TQID: https://experienceleague.adobe.com/LUI-d06rZGiDMXwm0x6m4LAkppl0O5ceCWFhaTiJff0
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
  - id: afb45297-4313-4f67-818e-bc0b03abe086
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
  - id: d90290ec-3e61-4ebd-8649-bcafe0836803
subfeature_v2:
  - id: ad602516-aca3-4247-9ae8-f393d958efa9
  - id: cda0baeb-996e-4aaa-92d1-41032e34fd68
  - id: d5ea0417-7932-4688-a3e2-4d3b2e7076a3
  - id: d6596f3f-92a7-43ec-b444-237db6adad05
  - id: f89f75b0-cf2e-4e96-aec8-fe8c39cbd0ef
role_v2:
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
  - id: cc72dcf1-72e1-48cc-b434-e7c27d62d67c
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 1694
ht-degree: 3%

---

# Adobe Experience Manager Guides as a Cloud Serviceの2023年11月リリース

このリリースノートでは、2023年11月バージョンのAdobe Experience Manager Guides as a Cloud Service（後で&#x200B;*Experience Manager Guides as a Cloud Service*&#x200B;と呼ばれます）で修正されたアップグレード手順、互換性マトリックス、および問題について説明します。

新機能と機能強化について詳しくは、[Experience Manager Guides as a Cloud Serviceの2023年11月リリースの新機能](whats-new-2023-11-0.md)を参照してください。

## 2023年11月リリースへのアップグレード

次の手順を実行して、現在のExperience Manager Guides as a Cloud Service設定をアップグレードします。

1. Cloud ServicesのGit コードを確認し、アップグレードする環境に対応するCloud Services パイプラインで設定されたブランチに切り替えます。
2. Cloud Services Git コードの`/dox/dox.installer/pom.xml` ファイルの`<dox.version>` プロパティを2023.11.0.406に更新します。
3. 変更を確定し、Cloud Services パイプラインを実行して、Experience Manager Guides as a Cloud Serviceの2023年11月リリースにアップグレードします。

## サーブレットを使用したスクリプトのトリガーを有効にする手順

（Experience Manager Guides as a Cloud Serviceの2023年6月リリース以前のバージョンを使用している場合のみ）

インストールが完了したら、トリガーを押して翻訳ジョブを開始します。

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

前の応答JSONでは、キー`lockNodePath`は、送信されたジョブを指すリポジトリで作成されたノードへのパスを保持します。 ジョブが完了すると自動的に削除されます。その後、ジョブのステータスについては、このノードを参照できます。

このジョブが完了するまで待ってから、次の手順に進みます。

>[!NOTE]
>
> ノードがまだ存在するかどうかを確認し、ジョブのステータスを確認する必要があります。

```
GET
http://<aem_domain>/var/dxml/executor-locks/translation-map-upgrade/1683190032886.json
```

## 既存のコンテンツを後処理して、壊れたリンクレポートを使用する手順

（Experience Manager Guides as a Cloud Serviceの2023年6月リリース以前のバージョンを使用している場合のみ）

既存のコンテンツを後処理し、新しい壊れたリンクレポートを使用するには、次の手順を実行します。

1. （オプション）システムに100,000個を超えるDITA ファイルがある場合は、`org.apache.jackrabbit.oak.query.QueryEngineSettingsService`の`queryLimitReads`と`queryLimitInMemory`をより大きな値（存在するアセット数より大きな値、例えば200,000個）に更新してから再展開します。

   - Adobe Experience Manager Guides as a Cloud Serviceの「*設定の上書き*」セクションで指定されている手順を使用して、設定ファイルを作成します。
   - 設定ファイルで、次の（プロパティ）詳細を指定して、`queryLimitReads`および`queryLimitInMemory` オプションを設定します。

     | PID | プロパティキー | プロパティの値 |
     |---|---|---|
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitReads | 値：200000 デフォルト値：100000 |
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitInMemory | 値：200000 デフォルト値：100000 |

1. サーバーへのPOST リクエストを実行します（正しい認証を使用） - `http://<server:port>//bin/guides/reports/upgrade`。

1. APIはjobIdを返します。 ジョブのステータスを確認するには、ジョブ IDを持つGET リクエストを同じエンドポイントに送信できます。 `http://<server:port>/bin/guides/reports/upgrade?jobId= {jobId}`
（例：`http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`）

1. ジョブが完了すると、前のGET リクエストが成功して応答します。 何らかの理由でジョブが失敗した場合は、サーバーログから失敗が確認できます。

1. 手順1で変更した場合は、デフォルト値または以前の既存の値`queryLimitReads`に戻します。

## 「レポート」タブの新しい検索と置換およびトピックリストを使用して、既存のコンテンツをインデックス化する手順：

（Experience Manager Guides as a Cloud Serviceの2023年6月リリース以前のバージョンを使用している場合のみ）

既存のコンテンツのインデックスを作成するには、次の手順を実行し、「レポート」タブのマップレベルとトピックリストで新しい検索と置換のテキストを使用します。

1. サーバーへのPOST リクエストを実行します（正しい認証を使用） - `http://<server:port>/bin/guides/map-find/indexing`。 （オプション：マップの特定のパスを渡してインデックスを作成できます。デフォルトでは、すべてのマップにインデックスが付けられます||例：`https://<Server:port>/bin/guides/map-find/indexing?paths=<map_path_in_repository>`）

1. ルートフォルダーを渡して、特定のフォルダー（およびそのサブフォルダー）のDITA マップをインデックス化することもできます。 例えば、`http://<server:port>/bin/guides/map-find/indexing?root=/content/dam/test` のようになります。 パス パラメーターとルート パラメーターの両方が渡された場合は、パス パラメーターのみが考慮されます。

1. APIはjobIdを返します。 ジョブのステータスを確認するには、ジョブ IDを持つGET リクエストを同じエンドポイント `http://<server:port>/bin/guides/map-find/indexing?jobId={jobId}`に送信できます（例：`http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42`）


1. ジョブが完了すると、以前のGET リクエストは成功して応答し、マップが失敗した場合にメンションします。 正常にインデックス化されたマップは、サーバーログから確認できます。

## `'fmdita rewriter'`競合を処理する手順

Experience Manager Guidesには、クロスマップの場合に生成されるリンク（2つの異なるマップのトピック間のリンク）を処理するための&#x200B;[**カスタム sling rewriter**](../cs-install-guide/conf-output-generation.md#custom-rewriter) モジュールがあります。

コードベースに別のカスタムスリングリライターがある場合は、`'order'`値が50より大きい値を使用します。これは、Experience Manager Guides sling リライターが`'order'` 50を使用するからです。  これを上書きするには、50を超える値が必要です。 詳細については、[出力の書き換えパイプライン &#x200B;](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html)を参照してください。

このアップグレードでは、`'order'`の値が1000から50に変更されるので、既存のカスタムリライターがある場合は`'fmdita-rewriter'`と結合する必要があります。


## 互換性マトリックス

この節では、Experience Manager Guides as a Cloud Service 2023年11月リリースでサポートされるソフトウェアアプリケーションの互換性マトリックスを示します。

### FrameMakerとFrameMaker Publishing Server

| Experience Manager Guides Guides as a Cloud リリース | FMPS | FrameMaker |
| --- | --- | --- |
| 2023.11.0 | 互換性がありません | 2022年以降 |
| | | |


### Oxygen コネクタ

| Experience Manager Guides as a Cloud リリース | Oxygen コネクタウィンドウ | Oxygen Connector Mac | Oxygen ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- | --- | --- |
| 2023.11.0 | 3.2-uuid 5 | 3.2-uuid 5 | 2.3 | 2.3 |
|  |  |  |  |  |


### ナレッジベースのテンプレートバージョン

| コンポーネントパッケージ名 | コンポーネントバージョン | テンプレートバージョン |
|---|---|---|
| Cloud Service用Experience Manager Guides コンポーネントコンテンツパッケージ | dxml-components.all-1.2.2 | aem-site-template-dxml.all-1.0.15 |

## 修正された問題

様々な領域で修正されたバグを以下に示します。



### オーサリング

- トピックを保存すると、conref `<ph>`要素の後のスペースが消えます。 (13642)
- 後処理が完了する前にDITA ファイルを保存しようとすると、アプリケーションエラーが発生します。 (13571)
- トピックのタイトルにスラッシュ `/`が含まれている場合、エディターのタブには、その後に続く文字のみが表示されます。 (13455)
- エディターにプレビューを表示しても、画像のプレビューが消えない。 (13454)
- 他のトピックでルートマップ定義キーを使用する場合、キーワードポップアップが表示されません。 (12950)
- バージョン履歴パネルで非常に高いグラフィックをプレビューすると、閉じるアイコンは表示されません。 (12867)
- ベースラインの&#x200B;**バージョン作成日**&#x200B;列のタイムゾーンを変更できません。 (12711)
- Assets UIの&#x200B;**バージョン履歴** パネルに、**現在** フィールドのタイムスタンプが正しくありません。 (12624)
- テンプレートから数字文字で始まるファイル名を持つDITA ファイルを作成すると、名前空間エラーが発生します。 (12188)
- Web エディターで、`varname` タグを挿入すると、**キー参照** ウィンドウが開きます。 (10940)
- Zip ファイルはWeb エディターで認識されず、ドラッグ&amp;ドロップできません。 (12709)
- 一部の属性が適用されたコンテンツが、作成者モードまたはプレビューモードでハイライト表示されない。 (11063)
- 編集後にトピックを閉じると、フォルダービューに戻る代わりに、AEM ホームページにリダイレクトされます。 (13306)
- クラウドサービスにコピー&amp;ペーストされたファイルの後処理で遅延が発生します。 (12457)
- ユーザーがユーザー環境設定から明示的に設定していない場合でも、ロードマップ設定はWeb エディターに保持されます。 (11551)


### 公開

- 検索結果に表示されるファイルで、「コンテンツフラグメントとして公開」機能が機能しない。 (14090)
- ネイティブ PDF パブリッシングでは、テンプレート レイアウトで背景色を選択した場合、`None`に戻す際にページを再読み込みする必要があります。 (13621)
- AEM サイト公開のスコープピアリンクを含む大規模なDITA マップのデータストアにコミットする際の問題。 (13530)
- ネイティブ PDF パブリッシングでは、ヘッダーとフッターの画像に代替テキストが表示されないため、アクセシビリティが低下します。 (12829)
- 拡張機能が自動的に追加されていない場合、Native PDFでのページレイアウトの重複は機能しません。 (12534)
- ネイティブのPDF パブリッシングでPDF出力を生成する場合、ファイル名は一定期間後に切り捨てられます。 (13620)
- ネイティブPDFの公開で使用されるテンプレートのページレイアウトツールバーに、**コンテンツを編集** オプションに対して、誤ったアイコンとツールチップが表示される。 (13492)
- カスタムメタデータは、最終出力では使用できません。 (12116)
- fmdita リライターはユーザーのリライター設定と競合し、リンクではなく長いURLが表示されます。 (12076)
- AEM サイトプリセットでは、**トピックごとに個別のPDFを生成**&#x200B;するオプションは機能しません。 (11555)
- ネイティブのPDF パブリッシングでは、CMYK カラースペースの変換がサポートされていません。 (10754)
- 動的なベースライン呼び出しは、タイトルではなく名前を使用しているため、DITA マップの書き出しAPIが失敗します。 (14268)

### 管理

- GUIDのない自己参照リンクを持つDITA ファイルをコピー&amp;ペーストすると、コンテンツ参照が破損する。 (13540)
- Web エディターでは、ベースラインには、選択したDITA ファイルのバージョンではなく、以前のバージョンのタイトルが表示されます。 (13444)
- Web エディターUIの「**レポート**」タブに、Experience Manager Guides as a Cloud Serviceの2023年7月アップグレード前に作成された古いDITA マップのトピックリストが表示されない。 (11852)
- 大きなDITA マップの条件プリセットが作成されていません。 (10936)
- レポートの壊れたリンクのリストの下に、自己参照リンクが表示されます。 (13539)

### レビュー

- Experience Manager Guides as a Cloud Serviceの2023年10月リリースでは、Web エディターの以前のバージョンと現在のバージョンを並べて確認するパネルが正しくありません。 (14156)
- **レビュー** ワークフローのメールテンプレートのカスタマイズは、ノードのオーバーレイでは機能しません。 (13954)
- Experience Manager Guidesのレビューページの「**閉じる**」ボタンをクリックすると、AEM ホームページに移動します。 (13535)
- 韓国語でスニペットを作成する際に、壊れた文字が表示される。 (13489)
- Experience Manager Guides レビュー画面の韓国語の添付ファイルはクリックできません。 (13436)
- マップタイトルは、レビューと共同作業画面で切り取られます。完全なタイトルを表示するオプションはありません。 (13012)

### 翻訳

- 自動承認が機能しないことがあり、**翻訳ステータス**&#x200B;に誤った値が設定されている場合に例外が発生します。 (13607)
- 翻訳ダッシュボードから書き出されたベースラインが失敗し、ターゲット言語で開きません。 (12993)

## 既知の問題

Adobeでは、2023年11月リリースの既知の問題を次のように特定しました。

- AEM サイト出力の選択的なトピックの再生成が失敗します。
