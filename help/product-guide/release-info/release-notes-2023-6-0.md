---
title: リリースノート | Adobe Experience Manager Guidesのアップグレード手順と修正された問題（2023年6月リリース）
description: Adobe Experience Manager Guides as a Cloud Serviceのバグ修正と2023年6月リリースへのアップグレード方法について説明します
exl-id: df17ee33-9f50-4223-ab9f-a57a31097d22
feature: Release Notes
role: Leader
TQID: https://experienceleague.adobe.com/LIY9wVDmvusGD-K-kyjK-lmzpyxJELj0mWzn9YoP0vw
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a3bd6397-2eb2-4908-a61c-226e26855dcaid: ab01a588-7dea-43f2-a699-0b3f128465d6id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0eid: d90290ec-3e61-4ebd-8649-bcafe0836803
subfeature_v2: id: ad602516-aca3-4247-9ae8-f393d958efa9id: d5ea0417-7932-4688-a3e2-4d3b2e7076a3id: f89f75b0-cf2e-4e96-aec8-fe8c39cbd0ef
role_v2: id: f8a45b24-4be7-4f1b-909b-60d06b483a20
topic_v2: id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 1169
ht-degree: 3%

---

# Adobe Experience Manager Guides as a Cloud Serviceの2023年6月リリース

このリリースノートでは、Adobe Experience Manager Guidesの2023年6月バージョン（後に&#x200B;*AEM Guides as a Cloud Service*&#x200B;と呼ばれます）で修正されたアップグレード手順、互換性マトリックス、および問題について説明します。

新機能と機能強化について詳しくは、[AEM Guides as a Cloud Serviceの2023年6月リリースの新機能](whats-new-2023-6-0.md)を参照してください。

## 2023年6月リリースへのアップグレード

次の手順を実行して、現在のAEM Guides as a Cloud Service設定をアップグレードします。

1. Cloud ServicesのGit コードを確認し、アップグレードする環境に対応するCloud Services パイプラインで設定されたブランチに切り替えます。
2. Cloud Services Git コードの`/dox/dox.installer/pom.xml` ファイルの`<dox.version>` プロパティを2023.6.297に更新します。
3. 変更を確定し、Cloud Services パイプラインを実行して、AEM Guides as a Cloud Serviceの2023年6月リリースにアップグレードします。

## サーブレットを使用したスクリプトのトリガーを有効にする手順

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

1. ジョブが完了すると、前のGET リクエストが成功して応答します。 何らかの理由でジョブが失敗した場合は、サーバーログからエラーが表示されます。

1. 手順1で変更した場合は、デフォルト値または以前の既存の値`queryLimitReads`に戻します。

## 「レポート」タブの新しい検索と置換およびトピックリストを使用して、既存のコンテンツをインデックス化する手順：

（AEM Guides as a Cloud Serviceの2022年9月リリース以前のバージョンを使用している場合のみ）

既存のコンテンツのインデックスを作成するには、次の手順を実行し、「レポート」タブのマップレベルとトピックリストで新しい検索と置換のテキストを使用します。

1. サーバー\（正しい認証\）に対してPOST リクエストを実行します – `http://<server:port\>/bin/guides/map-find/indexing`。 （オプション：マップの特定のパスを渡してインデックスを作成できます。デフォルトでは、すべてのマップにインデックスが付けられます（例：`https://<Server:port\>/bin/guides/map-find/indexing?paths=<map\_path\_in\_repository\>`）。

1. ルートフォルダーを渡して、特定のフォルダー（およびそのサブフォルダー）のDITA マップをインデックス化することもできます。 例えば、`http://<server:port\>/bin/guides/map-find/indexing?root=/content/dam/test` のようになります。 パス パラメーターとルート パラメーターの両方が渡された場合は、パス パラメーターのみが考慮されます。

1. APIはjobIdを返します。 ジョブのステータスを確認するには、ジョブ IDが同じエンドポイント `http://<server:port\>/bin/guides/map-find/indexing?jobId=\{jobId\}`\（例：`http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42`\）にGET リクエストを送信できます


1. ジョブが完了すると、前のGET リクエストが成功して応答し、マップが失敗した場合にメンションします。 正常にインデックス化されたマップは、サーバーログから確認できます。

## 互換性マトリックス

この節では、AEM Guides as a Cloud Service 2023年6月リリースでサポートされるソフトウェアアプリケーションの互換性マトリックスを示します。

### FrameMakerとFrameMaker Publishing Server

| AEM Guides as a Cloud リリース | FMPS | FrameMaker |
| --- | --- | --- |
| 2023.06.0 | 互換性がありません | 2022年以降 |
| | | |


### Oxygen コネクタ

| AEM Guides as a Cloud リリース | Oxygen コネクタウィンドウ | Oxygen Connector Mac | Oxygen ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- | --- | --- |
| 2023.06.0 | 2.9-uuid-2 | 2.9-uuid-2 | 2.3 | 2.3 |
|  |  |  |  |  |


## 修正された問題

様々な領域で修正されたバグを以下に示します。

### オーサリング

- レイアウト ビューから作成者またはソース ビューに切り替えると、Navtitleがcontent33から削除されます。 (12174)
- DITA マップをクリックすると、アプリケーションエラーが発生することがあります。 (11842)
- Web エディター| トピックの編集中に、XML エディターに改行なしのスペースが追加されます。 (11786)
- アセット UI | リストビューでは、オーバーレイされた使用可能な列はマージできません。 (11528)
- Keyrefはマップビューで解決されません。 (11490)
- XML エディターを使用して移動すると、トップメニューが表示されない。 (10868)
- ph タグの`conref` |表示されている参照ダイアログが正しくありません。 (9481)
- Web エディターでは、他の要素へのローカルリンクは解決されません。 (8790)
- Matches （）関数はschematron機能では機能しません。 (11224)


### 管理

- Web エディターUIの「レポート」タブには、4.2 アップグレード前に作成された古いDITA マップのトピックリストが表示されません。 (11708)

- 4.2 リリースのAssets UI ブレークの「ファイルをアップロード」ボタン機能。 (11633)

### 公開

- 更新または再起動した可能性のあるポッドから一時ファイルを読み取ると、AEM サイトへの公開が失敗します。 (12113)
- ネイティブ PDF | brackets （）を使用した出力クラスを持つコンテンツを公開すると、公開がフリーズします。 (11936)
- JSON出力| プロパティ値が`"value in spaces and double quotes"`のメタデータをマッピングすると、公開エラーが発生します。 (11933)
- Web エディター| AEM プリセットで出力パスとテンプレートを選択できません。 (11530)
- ネイティブ PDF | カスタム属性は、一時的なHTMLまたはPDF エンジンには反映されません。 （DXML-12005）
- ネイティブ PDF | Java OutOfMemoryErrorは、大規模なコンテンツの公開時に発生します。 (11789)
- JSON出力| JSONのjcr:content ノードの`fmUuid` プロパティが、JSON内の「id」と異なります。 (11564)
- JSON出力| ファイル名が同じマップとトピックが存在する場合、マップのJSONは削除されます。 (11524)
- Native PDF | Xrefは、外部参照ラベルの代わりにhref トピックタイトルの内容を出力します。 (11322)
- ネイティブ PDF | PDF テンプレート設定を保存できません。 (10751)
- ネイティブ PDF | テキストは、複数の外部参照を含めることで、列幅を超えて拡張されます。 (10876)
- ネイティブのPDF | `<note>``</note>`要素は、その種類の余分なスパンタイトルを生成しません。 (10549)
- ネイティブ PDF | WCAG 2.0に準拠するように、生成されたPDFで言語メタデータを設定することはできません。 (12296)



### 翻訳

- 2月以降のクラウドリリース（2302）では、すべての翻訳コンテンツに「同期が取り消された」または「コピーが見つからない」と表示されます。 (11834)

### レビュー

- 新しいレビューUI |条件がハイライト表示され、Web エディターでの作業方法とは異なる表示方法が表示されます。 (11628)
