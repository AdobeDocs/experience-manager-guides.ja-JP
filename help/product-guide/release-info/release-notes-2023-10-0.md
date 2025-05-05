---
title: リリースノート | Adobe Experience Manager Guidesのアップグレード手順と修正された問題、2023 年 10 月リリース
description: バグ修正と、Adobe Experience Manager Guidesas a Cloud Serviceの 2023 年 10 月リリースへのアップグレード方法について説明します
exl-id: 536d2ec2-31a0-4533-9c29-16a27525acca
feature: Release Notes
role: Leader
source-git-commit: 6d8c01f20f7b59fed92c404561b647d9ebecb050
workflow-type: tm+mt
source-wordcount: '1045'
ht-degree: 1%

---

# 2023 年 10 月Adobe Experience Manager Guidesas a Cloud Serviceリリース

このリリースノートでは、Adobe Experience Manager Guidesの 2023 年 10 月バージョン（後で *AEM Guidesas a Cloud Service* と呼ばれます）で修正されたアップグレード手順、互換性マトリックスおよび問題について説明します。

新機能と機能強化について詳しくは、[AEM Guidesas a Cloud Serviceの 2023 年 10 月リリースの新機能 ](whats-new-2023-10-0.md) を参照してください。

## 2023 年 10 月リリースへのアップグレード

次の手順を実行して、現在のAEM Guidesのas a Cloud Service設定をアップグレードします。

1. Cloud Serviceの Git コードをチェックアウトし、アップグレードする環境に対応する、Cloud Serviceパイプラインで設定されたブランチに切り替えます。
2. Cloud Service`<dox.version>`Git コード `/dox/dox.installer/pom.xml` ファイルのプロパティを 2023.10.0.373 に更新します。
3. 変更内容をコミットし、Cloud Serviceパイプラインを実行して、2023 年 10 月リリースのAEM Guidesas a Cloud Serviceにアップグレードします。

## サーブレットを使用したスクリプトのトリガーを有効にする手順

（AEM Guidesas a Cloud Serviceの 2023 年 6 月リリースより前のバージョンを使用している場合のみ）

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

（AEM Guidesas a Cloud Serviceの 2023 年 6 月リリースより前のバージョンを使用している場合のみ）

既存のコンテンツを後処理し、新しい壊れたリンクのレポートを使用するには、次の手順を実行します。

1. （オプション）システムに 100,000 個を超える DITA ファイルがある場合は、`org.apache.jackrabbit.oak.query.QueryEngineSettingsService` の `queryLimitReads` を大きい値（存在するアセットの数を超える値は、たとえば 200,000）に変更してから再デプロイします。

   - Adobe Experience Manager Guidesのインストールと設定のas a Cloud Serviceの *設定の上書き* の節で説明している手順に従って、設定ファイルを作成します。
   - 設定ファイルで、次の（プロパティ）の詳細を指定して queryLimitReads オプションを設定します。

     | PID | プロパティキー | プロパティの値 |
     |---|---|---|
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitReads | 値：200000 デフォルト値：100000 |

1. （正しいPOSTを使用して）サーバへの認証リクエストを実行します。`http://<server:port>//bin/guides/reports/upgrade`

1. API は jobId を返します。 ジョブのステータスを確認するには、ジョブ ID を含むGETリクエストを同じエンドポイント（`http://<server:port>/bin/guides/reports/upgrade?jobId= {jobId}`）に送信します。
（例：`http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`）

1. ジョブが完了すると、前回のGETリクエストが正常に応答します。 何らかの理由でジョブが失敗した場合は、サーバーログに失敗が示されます。

1. 手順 1 で変更した場合は、デフォルトまたは以前の既存の値 `queryLimitReads` に戻します。

## 「レポート」タブで新しい「検索と置換」および「トピック」リストを使用するために、既存のコンテンツにインデックスを作成する手順は次のとおりです。

（AEM Guidesas a Cloud Serviceの 2023 年 6 月リリースより前のバージョンを使用している場合のみ）

既存のコンテンツのインデックスを作成する次の手順を実行し、「レポート」タブの新しい検索と置換のテキストをマップレベルとトピックリストで使用します。

1. サーバー\（正しい認証\） - `http://<server:port\>/bin/guides/map-find/indexing` へのPOSTリクエストを実行します。 （オプション：マップの特定のパスをインデックスに指定できます。デフォルトでは、すべてのマップにインデックスが付けられます\|\|例：`https://<Server:port\>/bin/guides/map-find/indexing?paths=<map\_path\_in\_repository\>`）。

1. ルートフォルダーを渡して、特定のフォルダー（およびそのサブフォルダー）の DITA マップのインデックスを作成することもできます。 例えば、`http://<server:port\>/bin/guides/map-find/indexing?root=/content/dam/test` のようになります。paths パラメーターと root パラメーターの両方が渡される場合、paths パラメーターのみが考慮されることに注意してください。

1. API は jobId を返します。 ジョブのステータスを確認するには、同じエンドポイント `http://<server:port\>/bin/guides/map-find/indexing?jobId=\{jobId\}`\（例：`http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42`\）にジョブ ID を含むGETリクエストを送信します


1. ジョブが完了すると、前回のGETリクエストが成功を示して応答し、マップが失敗したかどうかを示します。 正常にインデックス化されたマップは、サーバ ログから確認できます。

## 互換性マトリックス

この節では、2023 年 10 月リリースのAEM Guidesas a Cloud Serviceでサポートされているソフトウェアアプリケーションの互換性マトリックスを示します。

### FrameMakerとFrameMaker Publishing Server

| AEM Guides as a Cloud リリース | FMPS | FrameMaker |
| --- | --- | --- |
| 2023.10.0 | 互換性がありません | 2022 以上 |
| | | |


### 酸素コネクタ

| AEM Guides as a Cloud リリース | 酸素コネクタウィンドウ | 酸素コネクタMac | 酸素ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- | --- | --- |
| 2023.10.0 | 3.2-uuid 5 | 3.2-uuid 5 | 2.3 | 2.3 |
|  |  |  |  |


### ナレッジベーステンプレートバージョン

| コンポーネントパッケージ名 | コンポーネントのバージョン | テンプレートのバージョン |
|---|---|---|
| Cloud Service用AEM Guides コンポーネントコンテンツパッケージ | dxml-components.all-1.2.2 | aem-site-template-dxml.all-1.0.15 |

## 修正された問題

様々な領域で修正されたバグを以下に示します。

### オーサリング

- ベースラインを作成する場合、午後の時間は **日付** に設定されません。 （12712）
- Web エディターの `<codeblock>` 要素に JSON コードを貼り付けることができない。 （12326）
- 保存されていないバージョンの変更とその指標は、大きなファイルでは表示されません。 （11784）
- 韓国語で編集している場合、最初の文字がデフォルトに変更されます。 （10049）


### 公開

- ネイティブPDF | PDF出力が生成される際、トピックの順序は固定されません。 （13157）
- ネイティブPDF| `<p>`element で使用できるデフォルトのスタイルタグはありません。 （12559）
- ネイティブPDF | コンテンツ領域に適用されたインラインスタイルは、前面と背面のトピックには適用されません。 （13510）
- `DeliveryTarget` 属性は、AEM サイト出力の生成時には反映されません。  （13132）
- 特定のエラーが発生したコンテンツのAEM サイト出力を生成している間に **0&rbrace;Publish&rbrace; ワークフローが停止します。**（12000）

### 管理

- アセットに `dc:format` プロパティが存在しない場合でも、バージョン履歴が表示されません。 （10463）


### レビュー

- トピックのレビューで、誤ったコメントが表示される。 （13453）



### 翻訳

- **翻訳** ダッシュボードから書き出されたベースラインが失敗し、ターゲット言語で開きません。 （13466）

- 選択した既存の翻訳プロジェクトに新しいジョブを追加する代わりに、新しい翻訳プロジェクトが作成されます。  （10214）

## 既知の問題

Adobeでは、2023 年 10 月リリースの次の既知の問題を特定しました。

- コンテンツフラグメントの再公開が失敗する。
