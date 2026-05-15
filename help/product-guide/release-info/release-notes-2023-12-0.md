---
title: リリースノート | Adobe Experience Manager Guidesのアップグレード手順と修正された問題（2023年12月リリース）
description: バグ修正と、Adobe Experience Manager Guides as a Cloud Serviceの2023年12月リリースにアップグレードする方法について説明します。
feature: Release Notes
role: Leader
exl-id: 63efe42a-b817-49df-8f76-df8d7acf9194
TQID: https://experienceleague.adobe.com/dswxcBt1RlZEgMOSEay8bmaQxtgb8kjeSHxKxnGp3g8
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
  - id: cc72dcf1-72e1-48cc-b434-e7c27d62d67c
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 1341
ht-degree: 3%

---

# Adobe Experience Manager Guides as a Cloud Serviceの2023年12月リリース

このリリースノートでは、2023年12月のバージョンのAdobe Experience Manager Guides as a Cloud Service（後で&#x200B;*Experience Manager Guides as a Cloud Service*&#x200B;と呼ばれます）で修正されたアップグレード手順、互換性マトリックス、および問題について説明します。

新機能と機能強化について詳しくは、[Experience Manager Guides as a Cloud Serviceの2023年12月リリースの新機能](whats-new-2023-12-0.md)を参照してください。

## 2023年12月リリースへのアップグレード

次の手順を実行して、現在のExperience Manager Guides as a Cloud Service設定をアップグレードします。

1. Cloud ServicesのGit コードを確認し、アップグレードする環境に対応するCloud Services パイプラインで設定されたブランチに切り替えます。
2. Cloud Services Git コードの`/dox/dox.installer/pom.xml` ファイルの`<dox.version>` プロパティを2023.12.0.16に更新します。
3. 変更を確定し、Cloud Services パイプラインを実行して、Experience Manager Guides as a Cloud Serviceの2023年12月リリースにアップグレードします。

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

前の応答JSONでは、キー`lockNodePath`は、送信されたジョブを指すリポジトリで作成されたノードへのパスを保持します。 ジョブが完了すると自動的に削除され、ジョブのステータスについては、このノードを参照できます。

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

1. サーバーへのPOST リクエストを実行します（正しい認証を使用） - `http://<server>//bin/guides/reports/upgrade`。

1. APIはjobIdを返します。 ジョブのステータスを確認するには、ジョブ IDを持つGET リクエストを同じエンドポイントに送信できます。 `http://<server>/bin/guides/reports/upgrade?jobId= {jobId}`
（例：`http://localhost:8080/bin/guides/reports/upgrade?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`）

1. ジョブが完了すると、以前のGET リクエストは正常に応答します。 何らかの理由でジョブが失敗した場合は、サーバーログから失敗が確認できます。

1. 手順1で変更した場合は、デフォルト値または以前の既存の値`queryLimitReads`に戻します。

## 「レポート」タブの新しい検索と置換およびトピックリストを使用して、既存のコンテンツをインデックス化する手順：

（Experience Manager Guides as a Cloud Serviceの2023年6月リリース以前のバージョンを使用している場合のみ）

既存のコンテンツのインデックスを作成するには、次の手順を実行し、「レポート」タブのマップレベルとトピックリストで新しい検索と置換のテキストを使用します。

1. サーバーへのPOST リクエストを実行します（正しい認証を使用） - `http://<server:port>/bin/guides/map-find/indexing`。 （オプション：マップの特定のパスを渡してインデックスを作成できます。デフォルトでは、すべてのマップにインデックスが付けられます（例：`https://<Server:port>/bin/guides/map-find/indexing?paths=<map_path_in_repository>`）。

1. ルートフォルダーを渡して、特定のフォルダー（およびそのサブフォルダー）のDITA マップをインデックス化することもできます。 例えば、`http://<server:port>/bin/guides/map-find/indexing?root=/content/dam/test` のようになります。 パス パラメーターとルート パラメーターの両方が渡された場合は、パス パラメーターのみが考慮されます。

1. APIはjobIdを返します。 ジョブのステータスを確認するには、ジョブ IDを持つGET リクエストを同じエンドポイント `http://<server:port>/bin/guides/map-find/indexing?jobId={jobId}`に送信できます（例：`http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`）


1. ジョブが完了すると、以前のGET リクエストは成功して応答し、マップが失敗した場合にメンションします。 正常にインデックス化されたマップは、サーバーログから確認できます。

## `'fmdita rewriter'`競合を処理する手順

Experience Manager Guidesには、クロスマップの場合に生成されるリンク（2つの異なるマップのトピック間のリンク）を処理するための&#x200B;[**カスタム sling rewriter**](../cs-install-guide/conf-output-generation.md#custom-rewriter) モジュールがあります。

コードベースに別のカスタムスリングリライターがある場合は、`'order'`値が50より大きい値を使用します。これは、Experience Manager Guides sling リライターが`'order'` 50を使用するからです。  これを上書きするには、50を超える値が必要です。 詳細については、[出力の書き換えパイプライン &#x200B;](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html)を参照してください。

このアップグレードでは、`'order'`の値が1000から50に変更されるので、既存のカスタムリライターがある場合は`'fmdita-rewriter'`と結合する必要があります。


## 互換性マトリックス

この節では、Experience Manager Guides as a Cloud Service 2023年12月リリースでサポートされるソフトウェアアプリケーションの互換性マトリックスを示します。

### FrameMakerとFrameMaker Publishing Server

| Experience Manager Guides as a Cloud リリース | FMPS | FrameMaker |
| --- | --- | --- |
| 2023.12.0 | 互換性がありません | 2022年以降 |
| | | |


### Oxygen コネクタ

| Experience Manager Guides as a Cloud リリース | Oxygen コネクタウィンドウ | Oxygen Connector Mac | Oxygen ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- | --- | --- |
| 2023.12.0 | 3.3-uuid.5 | 3.3-uuid.5 | 2.3 | 2.3 |
|  |  |  |  |  |


### ナレッジベースのテンプレートバージョン

| コンポーネントパッケージ名 | コンポーネントバージョン | テンプレートバージョン |
|---|---|---|
| Cloud Service用Experience Manager Guides コンポーネントコンテンツパッケージ | dxml-components.all-1.2.2 | aem-site-template-dxml.all-1.0.15 |

## 修正された問題

様々な領域で修正されたバグを以下に示します。



### オーサリング

- Web エディタータブの&#x200B;**タイトル**&#x200B;は、ドット（。）の後に切り捨てられます キャラクター： (14372)
- Assets UIの重複したマップ名のエラーメッセージが更新されない。 (14320)
- アセットのドラッグ&amp;ドロップ中にバージョン作成ロジックでエラーが発生します。 (14291)
- 再利用可能なコンテンツでは、要素IDがスキップされます。 (14213)
- **出力** タブの下の&#x200B;**言語変数** パネルを非表示にする設定コントロールがありません。 (14194)
- Web エディターは、レイアウトビューで専用のスキーマを使用して新しい参照またはトピックを追加すると、アプリケーションエラーをスローします。 (14094)
- `<dlentry>`または`<dt>`要素へのアンカーリンクで、リンクテキストを表示できません。 (13543)
- Web エディターの&#x200B;**お気に入り** コレクションの読み込みに失敗しました。 (13495)
- スペースを含む一意のIDで作成すると、引用にクリック不可のリンクが表示されます。 (13447)
- ブックマップの&#x200B;**レイアウト** ビューで、**右に移動**&#x200B;を使用して、選択した章をサブ要素として機能させることはできません。 (12567)
- GOOGLE ChromeおよびMicrosoft Edge ブラウザーでは、XML エディターのプレビューウィンドウが切り捨てられます。 (10755)
- Web エディターには、可能な親エレメント内にエレメントをラップする機能がありません。 (8791)

### 公開

- Fmdita コンポーネントのパスは`delegator.jsp`で、AEM Sites コンポーネントのオーバーレイを防いでいます。 (13993)
- ネイティブ PDF パブリッシング出力のPDF reactorのタグ付きビューが期待どおりに機能しない。 (13622)
- AEM サイト公開で、スコープ ピア リンクを持つ大規模なマップのデータストアにコミットする際に問題が発生します。 (13531)
- Experience Manager Guides一括公開ダッシュボードを使用してサイトをアクティブ化できません。 (13439)
- エレメントラベルのローカライズがAEM Sites出力で正しく機能しない。 (12144)
- Web エディターUIで作成されたフォルダープロファイルレベルの出力プリセットに&#x200B;**ditaval** オプションがありません。 (11903)

### 管理

- AEM クラウド環境で、大きなノードが原因でMongoWriteの例外が発生します。 (13509)

### 翻訳

- 自動承認済みの人間による翻訳の場合、**受け入れ/拒否** ボタンが誤って表示される。 (14318)
- 国際化（i18n）の問題は、英語以外のDITA ファイルをAEM ページに変換する際に発生します。 (14286)
- 翻訳されたコンテンツが一時的な翻訳プロジェクトから同期されず、DITA XML エディター翻訳ウィザードで、承認済みジョブの&#x200B;**進行中** ステータスが誤って表示される。 (9938)

### アクセシビリティ

- トピックエディターでフォーカスがトラップされるため、オーサーキャンバスのユーザーインターフェイスを移動できません。 (13517)

## 既知の問題

Adobeでは、2023年12月リリースの既知の問題を次のように特定しました。
- 2023年12月リリースにアップグレードすると、「無効なDTD エラーの取得」が断続的に発生します。
