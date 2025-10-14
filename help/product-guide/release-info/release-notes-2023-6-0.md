---
title: リリースノート | Adobe Experience Manager Guidesのアップグレード手順と修正された問題、2023 年 6 月リリース
description: バグ修正と、2023 年 6 月リリースのAdobe Experience Manager Guidesas a Cloud Serviceへのアップグレード方法について説明します
exl-id: df17ee33-9f50-4223-ab9f-a57a31097d22
feature: Release Notes
role: Leader
source-git-commit: 6d8c01f20f7b59fed92c404561b647d9ebecb050
workflow-type: tm+mt
source-wordcount: '1170'
ht-degree: 1%

---

# 2023 年 6 月Adobe Experience Manager Guidesas a Cloud Serviceリリース

このリリースノートでは、2023 年 6 月バージョンのAdobe Experience Manager Guides（後で *AEM Guidesas a Cloud Service* と呼ばれます）で修正されたアップグレード手順、互換性マトリックスおよび問題について説明します。

新機能と機能強化について詳しくは、[AEM Guidesas a Cloud Serviceの 2023 年 6 月リリースの新機能 &#x200B;](whats-new-2023-6-0.md) を参照してください。

## 2023 年 6 月リリースへのアップグレード

次の手順を実行して、現在のAEM Guidesのas a Cloud Service設定をアップグレードします。

1. Cloud Serviceの Git コードをチェックアウトし、アップグレードする環境に対応する、Cloud Serviceパイプラインで設定されたブランチに切り替えます。
2. Cloud Service`<dox.version>`Git コード `/dox/dox.installer/pom.xml` ファイルのプロパティを 2023.6.297 に更新します。
3. 変更内容をコミットし、Cloud Serviceパイプラインを実行して、2023 年 6 月リリースのAEM Guidesas a Cloud Serviceにアップグレードします。

## サーブレットを使用したスクリプトのトリガーを有効にする手順

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

1. （オプション）システムに 100,000 個を超える Dita ファイルがある場合は、`org.apache.jackrabbit.oak.query.QueryEngineSettingsService` の `queryLimitReads` を大きい値（存在するアセットの数を超える値は、たとえば 200,000）に変更してから再デプロイします。

   - Adobe Experience Manager Guidesのインストールと設定の *設定の上書き* の節で説明している手順を使用します
as a Cloud Service：設定ファイルを作成します。
   - 設定ファイルで、次の（プロパティ）の詳細を指定して queryLimitReads オプションを設定します。

     | PID | プロパティキー | プロパティの値 |
     |---|---|---|
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitReads | 値：200000 デフォルト値：100000 |

1. （正しいPOSTを使用して）サーバへの認証リクエストを実行します。`http://<server:port>//bin/guides/reports/upgrade`

1. API は jobId を返します。 ジョブのステータスを確認するには、ジョブ ID を含むGETリクエストを同じエンドポイント（`http://<server:port>/bin/guides/reports/upgrade?jobId= {jobId}`）に送信します。
（例：`http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`）

1. ジョブが完了すると、前回のGETリクエストが正常に応答します。 何らかの理由でジョブが失敗した場合は、失敗がサーバーログに記録されます。

1. 手順 1 で変更した場合は、デフォルトまたは以前の既存の値 `queryLimitReads` に戻します。

## 「レポート」タブで新しい「検索と置換」および「トピック」リストを使用するために、既存のコンテンツにインデックスを作成する手順は次のとおりです。

（AEM Guidesas a Cloud Serviceの 2022 年 9 月リリースより前のバージョンを使用している場合のみ）

既存のコンテンツのインデックスを作成する次の手順を実行し、「レポート」タブの新しい検索と置換のテキストをマップレベルとトピックリストで使用します。

1. サーバー\（正しい認証\） - `http://<server:port\>/bin/guides/map-find/indexing` へのPOSTリクエストを実行します。 （オプション：マップの特定のパスをインデックスに指定できます。デフォルトでは、すべてのマップにインデックスが付けられます\|\|例：`https://<Server:port\>/bin/guides/map-find/indexing?paths=<map\_path\_in\_repository\>`）。

1. ルートフォルダーを渡して、特定のフォルダー（およびそのサブフォルダー）の DITA マップのインデックスを作成することもできます。 例えば、`http://<server:port\>/bin/guides/map-find/indexing?root=/content/dam/test` のようになります。paths パラメーターと root パラメーターの両方が渡される場合、paths パラメーターのみが考慮されることに注意してください。

1. API は jobId を返します。 ジョブのステータスを確認するには、同じエンドポイント `http://<server:port\>/bin/guides/map-find/indexing?jobId=\{jobId\}`\（例：`http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42`\）にジョブ ID を含むGETリクエストを送信します


1. ジョブが完了すると、前回のGETリクエストが成功を返し、マップが失敗したかどうかを示します。 正常にインデックス化されたマップは、サーバ ログから確認できます。

## 互換性マトリックス

この節では、2023 年 6 月リリースのAEM Guidesas a Cloud Serviceでサポートされているソフトウェアアプリケーションの互換性マトリックスを示します。

### FrameMakerとFrameMaker Publishing Server

| AEM Guides as a Cloud リリース | FMPS | FrameMaker |
| --- | --- | --- |
| 2023.06.0 | 互換性がありません | 2022 以上 |
| | | |


### 酸素コネクタ

| AEM Guides as a Cloud リリース | 酸素コネクタウィンドウ | 酸素コネクタMac | 酸素ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- | --- | --- |
| 2023.06.0 | 2.9-uuid-2 | 2.9-uuid-2 | 2.3 | 2.3 |
|  |  |  |  |


## 修正された問題

様々な領域で修正されたバグを以下に示します。

### オーサリング

- レイアウトビューからオーサービューまたはソースビューに切り替えると、Navtitle が content33 から削除されます。 （12174）
- DITA マップをクリックすると、アプリケーションエラーが発生することがあります。 （11842）
- Web エディター | トピックの編集中に、XML エディターに改行なしのスペースが追加される。 （11786）
- アセット UI | リスト表示では、オーバーレイされた使用可能な列は結合できません。 （11528）
- Keyref はマップ ビューでは解決されません。 （11490）
- XML エディター内を移動すると、トップメニューが表示されない。 （10868）
- ph タグの `conref` |表示される参照ダイアログが正しくありません。 （9481）
- 他の要素へのローカルリンクは、web エディターでは解決されません。 （8790）
- Matches （）関数はスキーマトロン機能では動作しません。 （11224）


### 管理

- Web エディタ UI の「レポート」タブに、4.2 へのアップグレード前に作成された古い DITA マップのトピックリストが表示されません。 （11708）

- 4.2 リリースでは、Assets UI の「ファイルをアップロード」ボタン機能が機能しなくなりました。 （11633）

### 公開

- 更新または再起動された可能性のあるポッドから一時ファイルを読み取ると、AEM サイトへの公開が失敗する。 （12113）
- ネイティブPDF | brackets （）を含む出力クラスを持つコンテンツを公開すると、公開が凍結される。 （11936）
- JSON 出力 | プロパティ値が `"value in spaces and double quotes"` であるマップメタデータを指定すると、公開エラーが発生します。 （11933）
- Web エディター |出力パスおよびテンプレートは、AEM プリセットで選択できません。 （11530）
- ネイティブPDF | カスタム属性は、一時HTMLーまたはPDFエンジンには生成されません。 （DXML-12005）
- ネイティブPDF | Java OutOfMemoryError は、大きなコンテンツの公開時に発生します。 （11789）
- JSON 出力 | JSON の jcr:content ノードの `fmUuid` プロパティが、JSON 内の「id」と異なる。 （11564）
- JSON 出力 | ファイル名が同じマップとトピックが存在する場合、マップの JSON は削除されます。 （11524）
- ネイティブPDF | Xref は、Xref ラベルの代わりに href トピック タイトルの内容を印刷しています。 （11322）
- ネイティブPDF |PDFテンプレートの設定を保存できません。 （10751）
- ネイティブPDF |複数の外部参照を含むの列の幅を超えて、テキストが延長されます。 （10876）
- ネイティブPDF |`<note>` `</note>` 要素で、そのタイプの追加の span タイトルが生成されない。 （10549）
- ネイティブPDF |生成されるPDFに、WCAG 2.0 に準拠するように言語メタデータを設定することはできません。 （12296）



### 翻訳

- Post 2 月のクラウドリリース（2302）、すべての翻訳コンテンツに「同期されていません」または「コピーがありません」と表示される。 （11834）

### レビュー

- 新しいレビュー UI |条件は、Web エディターでの作業とは異なり、作業の強調表示と表示を切り替えます。 （11628）
