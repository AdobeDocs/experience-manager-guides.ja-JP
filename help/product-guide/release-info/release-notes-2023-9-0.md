---
title: リリースノート | Adobe Experience Manager Guidesのアップグレード手順と修正された問題（2023年9月リリース）
description: Adobe Experience Manager Guides as a Cloud Serviceのバグ修正と2023年9月リリースへのアップグレード方法について説明します
exl-id: 795b86a0-e763-404a-a4bb-35d3d2a42672
feature: Release Notes
role: Leader
TQID: https://experienceleague.adobe.com/CoWG1c1gE-wPrI90-qp0QJu-oOE4pDLcY6bIEN2QQpE
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
  - id: f89f75b0-cf2e-4e96-aec8-fe8c39cbd0ef
role_v2:
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 1492
ht-degree: 3%

---

# Adobe Experience Manager Guides as a Cloud Serviceの2023年9月リリース

このリリースノートでは、Adobe Experience Manager Guidesの2023年9月バージョン（後に&#x200B;*AEM Guides as a Cloud Service*&#x200B;と呼ばれます）で修正されたアップグレード手順、互換性マトリックス、および問題について説明します。

新機能と機能強化について詳しくは、[AEM Guides as a Cloud Serviceの2023年9月リリースの新機能](whats-new-2023-9-0.md)を参照してください。

## 2023年9月リリースへのアップグレード

次の手順を実行して、現在のAEM Guides as a Cloud Service設定をアップグレードします。

1. Cloud ServicesのGit コードを確認し、アップグレードする環境に対応するCloud Services パイプラインで設定されたブランチに切り替えます。
2. Cloud Services Git コードの`/dox/dox.installer/pom.xml` ファイルの`<dox.version>` プロパティを2023.9.0.359に更新します。
3. 変更を確定し、Cloud Services パイプラインを実行して、AEM Guides as a Cloud Serviceの2023年9月リリースにアップグレードします。

## サーブレットを使用したスクリプトのトリガーを有効にする手順

（AEM Guides as a Cloud Serviceの2023年6月リリース以前のバージョンを使用している場合のみ）

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

前の応答JSONでは、キー`lockNodePath`は、送信されたジョブを指すリポジトリで作成されたノードへのパスを保持します。 ジョブが完了すると自動的に削除されます。それまでは、このノードを参照してジョブの現在のステータスを確認できます。

このジョブが完了するまで待ってから、次の手順に進みます。

>[!NOTE]
>
> ノードがまだ存在するかどうかを確認し、ジョブのステータスを確認する必要があります。

```
GET
http://<aem_domain>/var/dxml/executor-locks/translation-map-upgrade/1683190032886.json
```

## 既存のコンテンツを後処理して、壊れたリンクレポートを使用する手順

（AEM Guides as a Cloud Serviceの2023年6月リリース以前のバージョンを使用している場合のみ）

既存のコンテンツを後処理し、新しい壊れたリンクレポートを使用するには、次の手順を実行します。

1. （オプション）システムに100,000個を超えるdita ファイルがある場合は、`org.apache.jackrabbit.oak.query.QueryEngineSettingsService`の`queryLimitReads`を大きな値（存在するアセット数よりも大きい値、例えば200,000個）に更新してから再デプロイします。

   - Adobe Experience Manager Guidesのインストールと設定の「*設定の上書き*」セクションに記載されている手順を使用します
as a Cloud Serviceを使用して、設定ファイルを作成します。
   - 設定ファイルで、次の（プロパティ）詳細を指定してqueryLimitReads オプションを設定します。

     | PID | プロパティキー | プロパティの値 |
     |---|---|---|
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitReads | 値：200000 デフォルト値：100000 |

1. サーバーへのPOST リクエストを実行します（正しい認証を使用） - `http://<server:port>//bin/guides/reports/upgrade`。

1. APIはjobIdを返します。 ジョブのステータスを確認するには、ジョブ IDを持つGET リクエストを同じエンドポイントに送信できます。 `http://<server:port>/bin/guides/reports/upgrade?jobId= {jobId}`
（例：`http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`）

1. ジョブが完了すると、以前のGET リクエストは正常に応答します。 何らかの理由でジョブが失敗した場合は、サーバーログからエラーが表示されます。

1. 手順1で変更した場合は、デフォルト値または以前の既存の値`queryLimitReads`に戻します。

## 「レポート」タブの新しい検索と置換およびトピックリストを使用して、既存のコンテンツをインデックス化する手順：

（AEM Guides as a Cloud Serviceの2023年6月リリース以前のバージョンを使用している場合のみ）

既存のコンテンツのインデックスを作成するには、次の手順を実行し、「レポート」タブのマップレベルとトピックリストで新しい検索と置換のテキストを使用します。

1. サーバー\（正しい認証\）に対してPOST リクエストを実行します – `http://<server:port\>/bin/guides/map-find/indexing`。 （オプション：マップの特定のパスを渡してインデックスを作成できます。デフォルトでは、すべてのマップにインデックスが付けられます（例：`https://<Server:port\>/bin/guides/map-find/indexing?paths=<map\_path\_in\_repository\>`）。

1. ルートフォルダーを渡して、特定のフォルダー（およびそのサブフォルダー）のDITA マップをインデックス化することもできます。 例えば、`http://<server:port\>/bin/guides/map-find/indexing?root=/content/dam/test` のようになります。 パス パラメーターとルート パラメーターの両方が渡された場合は、パス パラメーターのみが考慮されます。

1. APIはjobIdを返します。 ジョブのステータスを確認するには、ジョブ IDを持つGET リクエストを同じエンドポイント `http://<server:port\>/bin/guides/map-find/indexing?jobId=\{jobId\}`\（例：`http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42`\）に送信できます


1. ジョブが完了すると、以前のGET リクエストは成功して応答し、マップが失敗した場合にメンションします。 正常にインデックス化されたマップは、サーバーログから確認できます。

## 互換性マトリックス

この節では、AEM Guides as a Cloud Service 2023年9月リリースでサポートされるソフトウェアアプリケーションの互換性マトリックスを示します。

### FrameMakerとFrameMaker Publishing Server

| AEM Guides as a Cloud リリース | FMPS | FrameMaker |
| --- | --- | --- |
| 2023.09.0 | 互換性がありません | 2022年以降 |
| | | |


### Oxygen コネクタ

| AEM Guides as a Cloud リリース | Oxygen コネクタウィンドウ | Oxygen Connector Mac | Oxygen ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- | --- | --- |
| 2023.09.0 | 3.1-uuid 17 | 3.1-uuid 17 | 2.3 | 2.3 |
|  |  |  |  |  |


### ナレッジベースのテンプレートバージョン

| コンポーネントパッケージ名 | コンポーネントバージョン | テンプレートバージョン |
|---|---|---|
| Cloud Service用AEM Guides コンポーネントコンテンツパッケージ | dxml-components.all-1.2.2 | aem-site-template-dxml.all-1.0.15 |

## 修正された問題

様々な領域で修正されたバグを以下に示します。

### オーサリング

- Web エディターではトピックファイルのロックが解除されませんが、「ファイルのロックを解除」オプションと「保存しない」オプションが選択されています。 (12558)
- チェックイン前に変更を破棄する「いいえ」オプションを選択しても、Web エディターでファイルをチェックアウトできません。 (12557)
- Web エディター内のメインツールバーにあるファイルのロックとロック解除のアイコンのツールヒントが、リポジトリビューに表示されるアイコンと一致しません（12555）。
- チェックアウトをキャンセルしてロック解除オプションは、まだマップビューでチェックアウトされていないWeb エディターのファイルに表示されます。 (12556)
- 既存の「topicref」リンクでPDF アセットを選択できません。 (12477).
- リポジトリビューでは、検索/フィルター機能を使用した後にトピックや画像をドラッグすることはできません。 (12396)
- 検索したファイルを1つ開くと、検索と置換パネルで検索結果が無効になります。 (12142)
- AEM Guides エディタで、サイドキーボードの「8」番号キーが機能しない。 (12106)

- プレフィックスは、Web エディターのプレビューモードで複製されます。 (13133)
- `Choicetable`行は表示されないか、選択できません。 (12616)
- Web エディターは、カスタムスキーマを使用してトピックを作成する際に、特定のシナリオで検証エラーをスローします。 (12576)
- ditaval トピックテンプレート参照では、マップテンプレートからマップを作成する際に、コンテンツフォルダーにコピーが作成されません。 (12150)
- DITA マップの検索ボックスには「閉じる」ボタンがありません。 (11867)
- Web エディターに長いファイルを保存すると、`DirtyChecker`は長いスタックトレースで例外をスローし、ログファイルを入力します。 (11860)
- DITA トピックを作成するには、対応するフォルダーノードに対する削除権限が必要ですが、マップは書き込み権限で作成できます。 (11706)
- スラッシュがある場合、Web エディターに間違ったタイトルが表示される。 (10949)


### 管理

- DITA マップメタデータプロパティの「タイトル」フィールドは、マップの`<title>`要素によって上書きされます。 (10702)
- トピック IDがGUIDと異なる場合、コンテンツ参照がDITA ファイルのコピー&amp;ペーストで壊れる。 (12614)
- 動的ベースラインでは、ラベルのリストは、DITA マップの作業コピーの直接参照から取得されません。 (11917)

### 公開

- ネイティブ PDF プリセットの名前を変更すると、公開に失敗します。 (12564)
- ネイティブ PDF テンプレートを複製すると、指定されたカスタムテンプレートの場所ではなく、デフォルトのテンプレートの場所に複製されます。 (12563)

- ネイティブ PDF |複数の外部参照を含めると、テキストが列幅を超えて拡張されます。 (13004)
- ネイティブ PDF | トピックとタイトルのIDが同じ場合、PDF出力の形式が正しくありません。 (12644)
- ネイティブ PDF | DITA マップの親`<topicref>`要素に出力クラスを追加し、出力クラスにカスタムスタイルを適用すると、セクションタイトルを含むトピック本文内の要素にスタイルが適用されます。（12166）
- DITA マップに複数のditavalrefsがある場合、増分公開は機能しません。 (12117)
- AEM サイト | トピックを変数として指定し、processing-role=resource-onlyを追加してkeydefを使用してマップを作成すると、予期しないページが作成されます。 (12099)
- AEM DAMのアセットがAEM サイト以外の出力で使用されている場合、メタデータ「jcr:createdBy」には、DITA マップまたはトピックを最後に変更したパブリッシャーの名前やユーザーの名前は反映されません。 (12090)
- AEM Sites | navtitleにtopicheadが含まれているDITA マップ （サポートされていない文字を含む）は、不正なページ URLにつながります。 (11978)
- Native PDF | FrontmatterおよびBackmatterのtopichead/topicmeta/navtitleをサポートする際に問題が発生します。 (11969)
- PDFのネイティブ機能|大きな文書のPDFを作成するのは時間がかかります。 (11955)
- ネイティブ PDF | プリセットの名前を変更すると、PDF出力の生成中にNullPointerExceptionがスローされます。 (11889)
- PDF出力に`<conref>` コンテンツが表示されません。 (11131)
- ページレイアウトエディターで作成者ビューとSource ビューを切り替えると、`<div>`要素の内部に余分なスペースが追加されます。 (10750)
- AEM Cloud Managerでレプリケートされたコンテンツは、パブリッシュインスタンスには表示されません。 (9564)

### 翻訳

- 翻訳用に名前が変更されたベースラインを書き出すプロセスが失敗します。 (12993)
- 翻訳されたファイルのタイトルは、ソースファイルのタイトルの代わりに表示されます。 (11630)
