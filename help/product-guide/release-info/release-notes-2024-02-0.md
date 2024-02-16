---
title: リリースノート | 2024 年 2 月リリースのAdobe Experience Managerガイドにおけるアップグレード手順と修正された問題
description: バグ修正と、2024 年 2 月リリースのAdobe Experience Managerガイドas a Cloud Serviceにアップグレードする方法について説明します。
source-git-commit: 6d8c01f20f7b59fed92c404561b647d9ebecb050
workflow-type: tm+mt
source-wordcount: '1311'
ht-degree: 1%

---

# 2024 年 2 月リリースのAdobe Experience Manager Guides as a Cloud Service

このリリースノートでは、アップグレードの手順、互換性マトリックス、および 2024 年 2 月のバージョンで修正されたAdobe Experience Managerガイドas a Cloud Service( 後で *Experience Managerガイドas a Cloud Service*) をクリックします。

新機能および機能強化の詳細については、「 [2024 年 2 月リリースのExperience Managerガイドas a Cloud Service](whats-new-2024-02-0.md).

## 2024 年 2 月リリースにアップグレード

次の手順を実行して、現在のExperience Managerガイドのas a Cloud Service設定をアップグレードします。

1. Cloud Serviceの Git コードを確認し、アップグレードする環境に対応するCloud Serviceパイプラインで設定されたブランチに切り替えます。
2. 更新 `<dox.version>` プロパティ： `/dox/dox.installer/pom.xml` ファイルのCloud ServiceGit コードを2024.02.0.15に保存します。
3. 変更をコミットし、Cloud Serviceパイプラインを実行して、2024 年 2 月リリースのExperience Managerガイドas a Cloud Service版にアップグレードします。

## サーブレットを介したスクリプトのトリガーを有効にする手順

(2023 年 6 月リリースより前のバージョンのExperience Managerガイドをas a Cloud Serviceの場合のみ )

インストールが完了したら、「トリガーを押して翻訳ジョブを開始」を選択できます。

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

前の応答 JSON では、キー `lockNodePath` は、送信されたジョブを指す、リポジトリで作成されたノードへのパスを保持します。 ジョブが完了すると、ジョブは自動的に削除されます。その後、このノードを参照してジョブのステータスを確認できます。

このジョブが完了するまで待ってから、次の手順に進みます。

>[!NOTE]
>
> ノードがまだ存在するかどうか、およびジョブのステータスを確認する必要があります。

```
GET
http://<aem_domain>/var/dxml/executor-locks/translation-map-upgrade/1683190032886.json
```

## リンク切れレポートを使用するために既存のコンテンツを後で処理する手順

(2023 年 6 月リリースより前のバージョンのExperience Managerガイドをas a Cloud Serviceの場合のみ )

既存のコンテンツを後処理し、新しい壊れたリンクレポートを使用するには、次の手順を実行します。

1. （オプション）システムに 100,000 個を超える DITA ファイルがある場合、 `queryLimitReads` および `queryLimitInMemory` under `org.apache.jackrabbit.oak.query.QueryEngineSettingsService` を大きい値 ( 存在するアセットの数（例：200,000）を超える値 ) に設定し、再デプロイします。

   - 指示に従い、 *設定の上書き* 設定ファイルを作成するには、 Adobe Experience Manager Guides のインストールと設定をas a Cloud Service的に行ってください。
   - 設定ファイルで、次の（プロパティ）詳細を指定して、 `queryLimitReads` および `queryLimitInMemory` オプション：

     | PID | プロパティキー | プロパティの値 |
     |---|---|---|
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitReads | 値：200000デフォルト値：100000 |
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitInMemory | 値：200000デフォルト値：100000 |

1. サーバーに対してPOSTリクエストを実行します（正しい認証を使用） - `http://<server>//bin/guides/reports/upgrade`.

1. API は jobId を返します。 ジョブのステータスを確認するには、ジョブ ID を持つGETリクエストを同じエンドポイントに送信します。 `http://<server>/bin/guides/reports/upgrade?jobId= {jobId}`
( 例： `http://localhost:8080/bin/guides/reports/upgrade?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`)

1. ジョブが完了すると、前のGETリクエストへの応答が成功します。 何らかの理由でジョブが失敗した場合は、サーバーログから失敗を確認できます。

1. のデフォルト値または以前の既存の値に戻す `queryLimitReads` 手順 1 で変更した場合。

## 「レポート」タブの新しい検索と置換、およびトピックリストを使用するために既存のコンテンツをインデックス化する手順は次のとおりです。

(2023 年 6 月リリースより前のバージョンのExperience Managerガイドをas a Cloud Serviceの場合のみ )

既存のコンテンツのインデックス作成に関する次の手順を実行し、「レポート」タブのマップレベルおよびトピックリストで新しい検索と置換テキストを使用します。

1. サーバーに対してPOSTリクエストを実行します（正しい認証を使用） - `http://<server:port>/bin/guides/map-find/indexing`. （任意）マップの特定のパスを渡してインデックスを作成できます。デフォルトでは、すべてのマップがインデックス付けされます|| 例： `https://<Server:port>/bin/guides/map-find/indexing?paths=<path of the MAP in repository>`)

1. API は jobId を返します。 ジョブのステータスを確認するには、ジョブ ID を持つGETリクエストを同じエンドポイントに送信します。 `http://<server:port>/bin/guides/map-find/indexing?jobId={jobId}`( 例： `http://localhost:8080/bin/guides/reports/upgrade?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`)

1. ジョブが完了すると、前のGETリクエストへの応答が成功します。 何らかの理由でジョブが失敗した場合は、サーバーログから失敗を確認できます。

1. 手順 1 で変更した場合は、デフォルト値または以前の既存値 queryLimitReads に戻します。

## を処理する手順 `'fmdita rewriter'` 競合

Experience Managerガイドには [**custom sling rewriter**](../cs-install-guide/conf-output-generation.md#custom-rewriter) クロスマップ（2 つの異なるマップのトピック間のリンク）の場合に生成されるリンクを処理するためのモジュール。

コードベースに別のカスタム Sling リライターがある場合は、 `'order'` 値が 50 より大きい (Experience Managerガイド sling rewriter が使用する ) `'order'` 50.  これを上書きするには、50 より大きい値が必要です。 詳しくは、 [出力書き換えパイプライン](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html).

このアップグレードの間、 `'order'` の値を 1000 から 50 に変更した場合、既存のカスタムリライターがある場合は、とマージする必要があります。 `'fmdita-rewriter'`.


## 互換性マトリックス

この節では、2024 年 2 月のリリースでas a Cloud ServiceしたExperience Managerガイドでサポートされるソフトウェアアプリケーションの互換性マトリックスを示します。

### FrameMakerとFrameMaker Publishing Server

| Experience Managerガイド as a Cloud リリース | FMPS | FrameMaker |
| --- | --- | --- |
| 2024.02.0 | 互換性がありません | 2022 以降 |
| | | |


### 酸素コネクタ

| Experience Managerガイド as a Cloud リリース | Oxygen Connector ウィンドウ | Oxygen Connector Mac | Oxygen Windows で編集 | Oxen Macで編集 |
| --- | --- | --- | --- | --- |
| 2024.02.0 | 3.1-uuid.17 | 3.1-uuid.17 | 2.3 | 2.3 |
|  |  |  |  |


### ナレッジベーステンプレートバージョン

| コンポーネントのパッケージ名 | コンポーネントのバージョン | テンプレートバージョン |
|---|---|---|
| Experience ManagerガイドコンポーネントCloud Service用コンテンツパッケージ | dxml-components.all-1.2.2 | aem-site-template-dxml.all-1.0.15 |

## 修正された問題

様々な領域で修正されたバグを以下に示します。

### オーサリング

- エディターでのスペルチェックでは、候補を選択できません。 (15045)
- グローバルナビゲーションボタンが機能せず、ダッシュボードの読み込みに失敗する。 (14968)
- Web エディターでは、ダウンロードマップ機能を使用して、ダウンロードの準備ができたときに、ポップアップ通知をトリガーできません。 (14626)
- Web エディタで、マップのダウンロード機能は、ベースラインを持つマップをダウンロードできません。 (14622)
- Experience Managerガイドas a Cloud Serviceバージョン 2310 の無効な DTD エラー。 (14482)
- 用語集トピックをリポジトリから用語集マップにドラッグすると、が作成されます。 `topicref`. (10767)
- Adobe Experience Manager Guides バージョン 4.3.1 を再インストールした後、Web エディターがアンインストールされます。 (14519)
- バージョン 4.3.1 のインストーラでフィルタの競合が発生し、 `apps/cq/core/content/projects/properties`. (14517)
- スニペットのプレビュー画面がフリーズしました。 (14840)

### 公開

- ネイティブPDFの公開では、条件プリセット内のカスタム属性がネイティブPDFの公開で機能しません。 (14943)
- 次からカスタムテンプレートを追加できません： **出力** 」タブをクリックします。 (14846)
- **AEM Site** テンプレートパスが空のため、プリセットが機能しません。 (14804)
- MathML 式を含むトピックを含む DITA マップで、AEMサイトの再生成が失敗します。 (14790)
- ネイティブPDF公開では、PDF生成での依存関係の取得時にエラーが発生します。 `Node.js` 公開中。 (14445)
- AEMプリセットでは、 `/content` 階層を Web エディターに表示します。 (14260)
- AEM Sites出力で、 `<lines>` サブ要素を持つ要素。(12542)
- カスタムメタデータは、最終出力では使用できません。 (12116)
- バージョン 4.3.1 にアップグレードすると、NativePDFノードで一部の例外が発生します。 (14492)


### 管理

- **ベースラインフィルター** ファイルが Web エディタでファイル名で動作しない。 (13486)
- 親 DITA マップのインデックス作成を無効にしてパフォーマンスを向上させると、特定の機能の機能に影響を与える場合があります。(12213)
- からのラベル `labels.json` ファイルは、Web エディタでランダムな順序で表示されます。 (10508)

### レビュー

- 右クリックのコンテキストメニューが **確定** または **拒否** 変更を追跡します。 (14607)
- Adobe Experience Managerガイドのバージョン 4.3.1 で、レビュー画面で DITA トピックを閉じる切り替えが機能しません。 (14537)
- レビューワークフロー用の電子メールテンプレートのカスタマイズは、オーバーレイでは機能しません。 (13954)

## 既知の問題

Adobeは、2024 年 2 月リリースで次の既知の問題を特定しました。

- 重複した DITA ファイルの UI にバージョン 1.0 が表示されません。
