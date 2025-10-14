---
title: リリースノート | Adobe Experience Manager Guidesas a Cloud Service、2023 年 3 月リリース
description: Adobe Experience Manager Guidesas a Cloud Serviceの 3 月リリース
exl-id: 6a0bba92-7d7d-4b20-ad46-0eacc91268da
feature: Release Notes
role: Leader
source-git-commit: 6d8c01f20f7b59fed92c404561b647d9ebecb050
workflow-type: tm+mt
source-wordcount: '561'
ht-degree: 0%

---

# 2023 年 3 月Adobe Experience Manager Guidesas a Cloud Serviceリリース

このリリースノートでは、Adobe Experience Manager Guidesの 2023 年 3 月バージョン（後で *AEM Guidesas a Cloud Service*）で修正されたアップグレード手順、互換性マトリックスおよび問題について説明します。

新機能と機能強化について詳しくは、[AEM Guidesas a Cloud Serviceの 2023 年 3 月リリースの新機能 &#x200B;](whats-new-2023-3-0.md) を参照してください。

## 2023 年 3 月リリースへのアップグレード

次の手順を実行して、現在のAEM Guidesのas a Cloud Service設定をアップグレードします。

1. Cloud Serviceの Git コードをチェックアウトし、アップグレードする環境に対応する、Cloud Serviceパイプラインで設定されたブランチに切り替えます。
1. Cloud Service`<dox.version>`Git コード `/dox/dox.installer/pom.xml` ファイルのプロパティを 2023.3.242 に更新します。
1. 変更をコミットし、Cloud Serviceパイプラインを実行して、AEM Guidesas a Cloud Serviceの 2023 年 3 月リリースにアップグレードします。

## 既存のコンテンツをインデックス作成する手順（AEM Guidesas a Cloud Serviceの 9 月のリリースより前のバージョンを使用している場合のみ）

既存のコンテンツのインデックスを作成し、新しい検索と置換のテキストをマップレベルで使用するには、次の手順を実行します。

* （正しいPOSTを使用して）サーバへの認証リクエストを実行します。`http://<server:port>/bin/guides/map-find/indexing`
（オプション：マップの特定のパスを渡してインデックスを作成できます。デフォルトでは、すべてのマップにインデックスが作成されます ||例：`https://<Server:port>/bin/guides/map-find/indexing?paths=<map_path_in_repository>`）

* API は jobId を返します。 ジョブのステータスを確認するには、ジョブ ID を含むGETリクエストを同じエンドポイント（`http://<server:port>/bin/guides/map-find/indexing?jobId={jobId}`）に送信します。
（例：http://&lt;_localhost:8080_>/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678）

* ジョブが完了すると、上記のGETリクエストが成功を返し、マップが失敗したかどうかを示します。 正常にインデックス化されたマップは、サーバ ログから確認できます。

## 互換性マトリックス

この節では、AEM Guidesas a Cloud Serviceの 2023 年 3 月リリースでサポートされるソフトウェアアプリケーションの互換性マトリックスを示します。

### FrameMakerとFrameMaker Publishing Server

| AEM Guides as a Cloud リリース | FMPS | FrameMaker |
| --- | --- | --- |
| 2023.03.0 | 互換性がありません | 2022 以上 |
| | | |


### 酸素コネクタ

| AEM Guides as a Cloud リリース | 酸素コネクタウィンドウ | 酸素コネクタMac | 酸素ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- | --- | --- |
| 2023.03.0 | 2.9-uuid-2 | 2.9-uuid-2 | 2.3 | 2.3 |
|  |  |  |  |

## 修正された問題

様々な領域で修正されたバグを以下に示します。

* ダウンロードPDFプロセスが web エディターで適切に機能しない。 （11496）
* JSON 出力 | プロパティ値が `"value in spaces and double quotes"` であるマップメタデータを指定すると、公開エラーが発生します。 （11438）
* オーディオおよびビデオマルチメディアファイルの挿入が、「マルチメディアの挿入 **アイコンの下のYouTube形式で失敗** ます。 （11320）
* 検証エラーは、特殊なタイトル要素を持つテンプレートを使用してマップを作成したときに発生します。 （11212）
* ネイティブPDF | テーブルヘッダーに脚注が存在する場合、PDF出力内の対応するページフッターに太字や中央揃えのテキストが表示されます。 （10610）
>[!NOTE]
>
>ネイティブPDFの変更を反映するには、/content/dam/dita-templates にあるPDFフォルダーを削除してから、最新のビルドにアップグレードします。 （10610）

### 回避策に関する既知の問題

Adobeでは、AEM Guidesの 2023 年 3 月のas a Cloud Serviceリリースに関して、次の既知の問題を特定しました。

* ユーザーが、重複したアセットのバージョンを保存または作成できない。

**回避策**：重複アセットに変更を加える前に、Assets UI から再処理します。
