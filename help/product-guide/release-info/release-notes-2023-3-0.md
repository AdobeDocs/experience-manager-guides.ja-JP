---
title: リリースノート | Adobe Experience Manager Guidesas a Cloud Service、2023 年 3 月リリース
description: Adobe Experience Manager Guides as a Cloud Serviceの 3 月リリース
exl-id: 6a0bba92-7d7d-4b20-ad46-0eacc91268da
feature: Release Notes
role: Leader
source-git-commit: 6e23f52fc9124d0f07f8108da1b5fe574f553469
workflow-type: tm+mt
source-wordcount: '560'
ht-degree: 0%

---

# 2023 年 3 月Adobe Experience Manager Guidesas a Cloud Serviceリリース

このリリースノートでは、Adobe Experience Manager Guidesの 2023 年 3 月バージョン（後で *AEM Guides as a Cloud Service*）で修正されたアップグレード手順、互換性マトリックスおよび問題について説明します。

新機能と機能強化について詳しくは、[AEM Guides as a Cloud Serviceの 2023 年 3 月リリースの新機能 ](whats-new-2023-3-0.md) を参照してください。

## 2023 年 3 月リリースへのアップグレード

次の手順を実行して、現在のAEM Guides as a Cloud Service設定をアップグレードします。

1. Cloud Services の Git コードをチェックアウトし、アップグレードする環境に対応する、Cloud Services パイプラインで設定されたブランチに切り替えます。
1. Cloud Services Git コ `<dox.version>` ド `/dox/dox.installer/pom.xml` ファイルのプロパティを 2023.3.242 に更新します。
1. 変更内容をコミットし、Cloud Services パイプラインを実行して、2023 年 3 月リリースのAEM Guides as a Cloud Serviceにアップグレードします。

## 既存のコンテンツのインデックスを作成する手順（AEM Guides as a Cloud Serviceの 9 月のリリースより前のバージョンを使用している場合のみ）

既存のコンテンツのインデックスを作成し、新しい検索と置換のテキストをマップレベルで使用するには、次の手順を実行します。

* （正しい認証で） サーバーへの POST リクエストを実行します – `http://<server:port>/bin/guides/map-find/indexing`。
（オプション：マップの特定のパスを渡してインデックスを作成できます。デフォルトでは、すべてのマップにインデックスが作成されます ||例：`https://<Server:port>/bin/guides/map-find/indexing?paths=<map_path_in_repository>`）

* API は jobId を返します。 ジョブのステータスを確認するには、同じエンドポイント `http://<server:port>/bin/guides/map-find/indexing?jobId={jobId}` にジョブ ID を含むGET リクエストを送信します。
（例：http://&lt;_localhost:8080_>/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678）

* ジョブが完了すると、上記のGET リクエストが成功を返し、失敗したマップがあるかどうかを示します。 正常にインデックス化されたマップは、サーバ ログから確認できます。

## 互換性マトリックス

この節では、2023 年 3 月リリースのAEM Guides as a Cloud Serviceでサポートされるソフトウェアアプリケーションの互換表を示します。

### FrameMakerとFrameMaker Publishing Server

| AEM Guides as a Cloud リリース | FMPS | FrameMaker |
| --- | --- | --- |
| 2023.03.0 | 互換性がありません | 2022 以上 |
| | | |


### 酸素コネクタ

| AEM Guides as a Cloud リリース | 酸素コネクタウィンドウ | 酸素コネクタMac | 酸素ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- | --- | --- |
| 2023.03.0 | 2.9-uuid-2 | 2.9-uuid-2 | 2.3 | 2.3 |
|  |  |  |  |  |

## 修正された問題

様々な領域で修正されたバグを以下に示します。

* PDFのダウンロードプロセスが web エディターで適切に機能しない。 （11496）
* JSON 出力 | プロパティ値が `"value in spaces and double quotes"` であるマップメタデータを指定すると、公開エラーが発生します。 （11438）
* オーディオおよびビデオマルチメディアファイルの挿入が、「マルチメディアの挿入 **アイコンの下のYouTube形式で失敗** ます。 （11320）
* 検証エラーは、特殊なタイトル要素を持つテンプレートを使用してマップを作成したときに発生します。 （11212）
* ネイティブ PDF | テーブルヘッダーに脚注が存在する場合、PDF出力内の対応するページフッターに太字や中央揃えのテキストが表示されます。 （10610）
>[!NOTE]
>
>ネイティブのPDFの変更を反映するには、/content/dam/dita-templates にあるPDF フォルダーを削除してから、最新のビルドにアップグレードしてください。 （10610）

### 回避策に関する既知の問題

Adobeでは、AEM Guides as a Cloud Service 2023 年 3 月リリースの次の既知の問題を特定しました。

* ユーザーが、重複したアセットのバージョンを保存または作成できない。

**回避策**：重複アセットに変更を加える前に、Assets UI から再処理します。
