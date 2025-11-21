---
title: リリースノート | Adobe Experience Manager Guidesのアップグレード手順と修正された問題、2023 年 7 月リリース
description: バグ修正と、Adobe Experience Manager Guides as a Cloud Serviceの 2023 年 7 月リリースへのアップグレード方法について説明します
exl-id: f1765c6a-cb8e-4a06-a6f4-f5c225b6bc88
feature: Release Notes
role: Leader
source-git-commit: 6e23f52fc9124d0f07f8108da1b5fe574f553469
workflow-type: tm+mt
source-wordcount: '926'
ht-degree: 1%

---

# 2023 年 7 月リリースのAdobe Experience Manager Guides as a Cloud Service

このリリースノートでは、2023 年 7 月バージョンのAdobe Experience Manager Guides（後で *AEM Guides as a Cloud Service* と呼ばれます）で修正されたアップグレード手順、互換性マトリックスおよび問題について説明します。

新機能と機能強化について詳しくは、[AEM Guides as a Cloud Serviceの 2023 年 7 月リリースの新機能 ](whats-new-2023-7-0.md) を参照してください。

## 2023 年 7 月リリースへのアップグレード

次の手順を実行して、現在のAEM Guides as a Cloud Service設定をアップグレードします。

1. Cloud Services の Git コードをチェックアウトし、アップグレードする環境に対応する、Cloud Services パイプラインで設定されたブランチに切り替えます。
2. Cloud Services Git コ `<dox.version>` ド `/dox/dox.installer/pom.xml` ファイルのプロパティを 2023.7.0.314 に更新します。
3. 変更内容をコミットし、Cloud Services パイプラインを実行して、2023 年 7 月リリースのAEM Guides as a Cloud Serviceにアップグレードします。

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

この節では、2023 年 7 月リリースのAEM Guides as a Cloud Serviceでサポートされるソフトウェアアプリケーションの互換性マトリックスを示します。

### FrameMakerとFrameMaker Publishing Server

| AEM Guides as a Cloud リリース | FMPS | FrameMaker |
| --- | --- | --- |
| 2023.07.0 | 互換性がありません | 2022 以上 |
| | | |


### 酸素コネクタ

| AEM Guides as a Cloud リリース | 酸素コネクタウィンドウ | 酸素コネクタMac | 酸素ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- | --- | --- |
| 2023.07.0 | 2.9-uuid-2 | 2.9-uuid-2 | 2.3 | 2.3 |
|  |  |  |  |  |


## 修正された問題

様々な領域で修正されたバグを以下に示します。

### オーサリング

- インライン/表示属性が Web エディターのレイアウト ビューに表示されません。 （12498）
- 利用している場合、AEM Guides用 Oxygen プラグインへのファイルのアップロードが Cloud Services で機能しない。 をファイル名で使用します。 （12207）
- 編集可能テンプレートを使用すると、DITA マップの公開が非常に遅くなる。 （12075）
- グローバルプロファイル UI 設定がフォルダープロファイルと一致しません。 （11970）
- DITA ファイルをコピーして貼り付けると、コンテンツ参照が壊れます。 （11959）
- AEM Guidesがインストールされている場合、列表示でコンテンツフラグメントを編集できない。 （7342）
- 展開された外部参照がサブ要素タグの下にある場合、コンテンツは失われます。 （12532）

### 公開

- 右側のパネルの「ファイル」プロパティで docstate を「終了状態」に変更すると、承認ワークフローが機能しない。 （11026）
