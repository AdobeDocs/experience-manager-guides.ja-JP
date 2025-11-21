---
title: リリースノート | Adobe Experience Manager Guidesのアップグレード手順と修正された問題、2023 年 12 月リリース
description: バグ修正と、2023 年 12 月リリースのAdobe Experience Manager Guides as a Cloud Serviceにアップグレードする方法について説明します。
feature: Release Notes
role: Leader
exl-id: 63efe42a-b817-49df-8f76-df8d7acf9194
source-git-commit: 6e23f52fc9124d0f07f8108da1b5fe574f553469
workflow-type: tm+mt
source-wordcount: '1319'
ht-degree: 1%

---

# 2023 年 12 月リリースのAdobe Experience Manager Guidesas a Cloud Service

このリリースノートでは、2023 年 12 月バージョンのAdobe Experience Manager Guides as a Cloud Service（後の *Experience Manager Guides as a Cloud Service*）で修正されたアップグレード手順、互換性マトリックスおよび問題について説明します。

新機能と機能強化について詳しくは、[Experience Manager Guides as a Cloud Serviceの 2023 年 12 月リリースの新機能 ](whats-new-2023-12-0.md) を参照してください。

## 2023 年 12 月リリースへのアップグレード

次の手順を実行して、現在のExperience Manager Guides as a Cloud Service設定をアップグレードします。

1. Cloud Services の Git コードをチェックアウトし、アップグレードする環境に対応する、Cloud Services パイプラインで設定されたブランチに切り替えます。
2. Cloud Services Git コ `<dox.version>` ド `/dox/dox.installer/pom.xml` ファイルのプロパティを 2023.12.0.16 に更新します。
3. 変更内容をコミットし、Cloud Services パイプラインを実行して、2023 年 12 月リリースのExperience Manager Guides as a Cloud Serviceにアップグレードします。

## サーブレットを使用したスクリプトのトリガーを有効にする手順

（2023 年 6 月リリースのExperience Manager Guides as a Cloud Serviceより前のバージョンを使用している場合のみ）

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

前の応答 JSON では、キー `lockNodePath` は、送信されたジョブを指す、リポジトリで作成されたノードへのパスを保持します。 ジョブが完了すると自動的に削除されるので、このノードでジョブのステータスを確認できます。

このジョブが完了するのを待ってから、次の手順に進みます。

>[!NOTE]
>
> ノードがまだ存在するかどうか、およびジョブのステータスを確認する必要があります。

```
GET
http://<aem_domain>/var/dxml/executor-locks/translation-map-upgrade/1683190032886.json
```

## 壊れたリンクレポートを使用するために、既存のコンテンツを後処理する手順

（2023 年 6 月リリースのExperience Manager Guides as a Cloud Serviceより前のバージョンを使用している場合のみ）

既存のコンテンツを後処理し、新しい壊れたリンクのレポートを使用するには、次の手順を実行します。

1. （オプション）システムに 100,000 個を超える DITA ファイルがある場合は、`queryLimitReads` 下の `queryLimitInMemory` および `org.apache.jackrabbit.oak.query.QueryEngineSettingsService` を大きい値（存在するアセットの数を超える値は、たとえば 200,000）に変更してから再デプロイします。

   - Adobe Experience Manager Guides as a Cloud Serviceのインストールと設定の *設定の上書き* の節で説明した手順に従って、設定ファイルを作成します。
   - 設定ファイルで、`queryLimitReads` と `queryLimitInMemory` オプションを設定するために、次の（プロパティ）の詳細を指定します。

     | PID | プロパティキー | プロパティの値 |
     |---|---|---|
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitReads | 値：200000 デフォルト値：100000 |
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitInMemory | 値：200000 デフォルト値：100000 |

1. （正しい認証で） サーバーへの POST リクエストを実行します – `http://<server>//bin/guides/reports/upgrade`。

1. API は jobId を返します。 ジョブのステータスを確認するには、同じエンドポイント `http://<server>/bin/guides/reports/upgrade?jobId= {jobId}` にジョブ ID を含むGET リクエストを送信します。
（例：`http://localhost:8080/bin/guides/reports/upgrade?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`）

1. ジョブが完了すると、前回のGET リクエストが正常に応答します。 何らかの理由でジョブが失敗した場合は、サーバーログに失敗が示されます。

1. 手順 1 で変更した場合は、デフォルトまたは以前の既存の値 `queryLimitReads` に戻します。

## 「レポート」タブで新しい「検索と置換」および「トピック」リストを使用するために、既存のコンテンツにインデックスを作成する手順は次のとおりです。

（2023 年 6 月リリースのExperience Manager Guides as a Cloud Serviceより前のバージョンを使用している場合のみ）

既存のコンテンツのインデックスを作成する次の手順を実行し、「レポート」タブの新しい検索と置換のテキストをマップレベルとトピックリストで使用します。

1. （正しい認証で） サーバーへの POST リクエストを実行します – `http://<server:port>/bin/guides/map-find/indexing`。 （オプション：マップの特定のパスをインデックスを作成するために渡すことができます。デフォルトでは、すべてのマップにインデックスが作成されます||例：`https://<Server:port>/bin/guides/map-find/indexing?paths=<map_path_in_repository>`）。

1. ルートフォルダーを渡して、特定のフォルダー（およびそのサブフォルダー）の DITA マップのインデックスを作成することもできます。 例えば、`http://<server:port>/bin/guides/map-find/indexing?root=/content/dam/test` のようになります。paths パラメーターと root パラメーターの両方が渡される場合、paths パラメーターのみが考慮されることに注意してください。

1. API は jobId を返します。 ジョブのステータスを確認するには、同じエンドポイント `http://<server:port>/bin/guides/map-find/indexing?jobId={jobId}` （例：`http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`）にジョブ ID を含むGET リクエストを送信します


1. ジョブが完了すると、前のGET リクエストが成功を示して応答し、失敗したマップがあるかどうかに関して言及します。 正常にインデックス化されたマップは、サーバ ログから確認できます。

## `'fmdita rewriter'` の競合を処理する手順

Experience Manager Guidesには、クロスマップ（2 つの異なるマップのトピック間のリンク）の場合に生成されるリンクを処理する [**custom sling rewriter**](../cs-install-guide/conf-output-generation.md#custom-rewriter) モジュールがあります。

コードベースに別のカスタム sling rewriter がある場合は、Experience Manager Guides sling rewriter が 50 を使用するように、50 より大きい `'order'` 値を使用し `'order'` す。  これを上書きするには、50 より大きい値が必要です。 詳しくは、[ 出力の書き換えパイプライン ](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html) を参照してください。

このアップグレード中に、`'order'` の値が 1000 から 50 に変更されるので、既存のカスタムリライターがある場合は `'fmdita-rewriter'` と結合する必要があります。


## 互換性マトリックス

この節では、2023 年 12 月リリースのExperience Manager Guides as a Cloud Serviceでサポートされているソフトウェアアプリケーションの互換表を示します。

### FrameMakerとFrameMaker Publishing Server

| Experience Manager Guides as a Cloud リリース | FMPS | FrameMaker |
| --- | --- | --- |
| 2023.12.0 | 互換性がありません | 2022 以上 |
| | | |


### 酸素コネクタ

| Experience Manager Guides as a Cloud リリース | 酸素コネクタウィンドウ | 酸素コネクタMac | 酸素ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- | --- | --- |
| 2023.12.0 | 3.3-uuid.5 | 3.3-uuid.5 | 2.3 | 2.3 |
|  |  |  |  |  |


### ナレッジベーステンプレートバージョン

| コンポーネントパッケージ名 | コンポーネントのバージョン | テンプレートのバージョン |
|---|---|---|
| Cloud Service用Experience Manager Guides コンポーネントコンテンツパッケージ | dxml-components.all-1.2.2 | aem-site-template-dxml.all-1.0.15 |

## 修正された問題

様々な領域で修正されたバグを以下に示します。



### オーサリング

- 「Web エディター」タブの **タイトル** が、ドット（.）文字の後に切り詰められる。 （14372）
- Assets UI の重複したマップ名に対するエラーメッセージが更新されていません。 （14320）
- アセットのドラッグ&amp;ドロップ中に、バージョン作成ロジックでエラーが発生します。 （14291）
- 再利用可能なコンテンツは、要素 ID をスキップします。 （14213）
- **出力** タブの下の **言語変数** パネルを非表示にするための設定コントロールがありません。 （14194）
- Web エディターでは、レイアウト ビューで特殊なスキーマを使用して新しい参照またはトピックを追加すると、アプリケーションエラーがスローされる。 （14094）
- `<dlentry>` または `<dt>` 要素へのアンカーリンクでリンクテキストが表示されない。 （13543）
- Web エディターの **お気に入り** コレクションを読み込めません。 （13495）
- 引用は、スペースを含む一意の ID で作成された場合、クリックできないリンクを表示します。 （13447）
- ブックマップの **レイアウト** ビューで **右に移動** を使用して、選択したチャプターをサブ要素にすることは機能しません。 （12567）
- Google ChromeおよびMicrosoft Edge ブラウザーで、XML エディターのプレビューウィンドウが切り詰められる。 （10755）
- Web エディターには、可能な親要素の中に要素を含める機能がありません。 （8791）

### 公開

- Fmdita コンポーネントは、`delegator.jsp` をハードコードしたパスを持つので、AEM Sites コンポーネントをオーバーレイできません。 （13993）
- Native PDF公開出力のPDF リアクターのタグ付きビューが、期待どおりに機能しない。 （13622）
- AEM サイト公開で、範囲ピアリンクを持つ大きなマップのデータストアをコミットすると、問題が発生します。 （13531）
- Experience Manager Guides一括公開ダッシュボードを使用してサイトをアクティベートできない。 （13439）
- AEM Sites出力で要素ラベルのローカライゼーションが正しく機能していません。 （12144）
- Web エディター UI で作成されたフォルダープロファイルレベルの出力プリセットに **ditaval** オプションが見つからない。 （11903）

### 管理

- AEM クラウド環境で、大規模なノードが原因で MongoWrite 例外が発生する。 （13509）

### 翻訳

- 自動承認された人間による翻訳で、「**許可/拒否**」ボタンが誤って表示される。 （14318）
- 英語以外の DITA ファイルをAEM ページに変換する際に、国際化対応（i18n）の問題が発生します。 （14286）
- 翻訳済みコンテンツが一時的な翻訳プロジェクトから同期できず、DITA XML エディタの翻訳ウィザードで、承認済みジョブのステータスが誤って **処理中** と表示される。 （9938）

### アクセシビリティ

- フォーカスがトピックエディターにトラップされるので、オーサーキャンバスのユーザーインターフェイス内を移動できない。 （13517）

## 既知の問題

Adobeでは、2023 年 12 月リリースの次の既知の問題を特定しました。
- 「Getting Invalid DTD Error」が、2023 年 12 月リリースへのアップグレード時に断続的に発生する。
