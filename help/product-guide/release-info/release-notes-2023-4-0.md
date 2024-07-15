---
title: リリースノート | Adobe Experience Manager Guidesのas a Cloud Service、2023 年 4 月リリース
description: 2023 年 4 月Adobe Experience Manager Guidesas a Cloud Serviceリリース
exl-id: fa339eab-d3d0-4763-adbf-6411e39aa213
feature: Release Notes
role: Leader
source-git-commit: 6d8c01f20f7b59fed92c404561b647d9ebecb050
workflow-type: tm+mt
source-wordcount: '598'
ht-degree: 0%

---

# 2023 年 4 月Adobe Experience Manager Guidesas a Cloud Serviceリリース

このリリースノートでは、Adobe Experience Manager Guidesの 2023 年 4 月バージョン（後で *AEM Guidesas a Cloud Service*）で修正されたアップグレード手順、互換性マトリックスおよび問題について説明します。

新機能と機能強化について詳しくは、[AEM Guidesas a Cloud Serviceの 2023 年 4 月リリースの新機能 ](whats-new-2023-4-0.md) を参照してください。

## 2023 年 4 月リリースへのアップグレード

次の手順を実行して、現在のAEM Guidesのas a Cloud Service設定をアップグレードします。

1. Cloud Serviceの Git コードをチェックアウトし、アップグレードする環境に対応する、Cloud Serviceパイプラインで設定されたブランチに切り替えます。
2. Cloud Service`<dox.version>`Git コード `/dox/dox.installer/pom.xml` ファイルのプロパティを 2023.4.249 に更新します。
3. 変更内容をコミットし、Cloud Serviceパイプラインを実行して、2023 年 4 月リリースのAEM Guidesas a Cloud Serviceにアップグレードします。

## 既存のコンテンツをインデックス作成する手順（AEM Guidesas a Cloud Serviceの 9 月のリリースより前のバージョンを使用している場合のみ）

既存のコンテンツのインデックスを作成し、新しい検索と置換のテキストをマップレベルで使用するには、次の手順を実行します。

* （正しいPOSTを使用して）サーバへの認証リクエストを実行します。`http://<server:port>/bin/guides/map-find/indexing`
（オプション：マップの特定のパスを渡してインデックスを作成できます。デフォルトでは、すべてのマップにインデックスが作成されます ||例：`https://<Server:port>/bin/guides/map-find/indexing?paths=<map_path_in_repository>`）

* API は jobId を返します。 ジョブのステータスを確認するには、ジョブ ID を含むGETリクエストを同じエンドポイント（`http://<server:port>/bin/guides/map-find/indexing?jobId={jobId}`）に送信します。
（例：http://&lt;_localhost:8080_>/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678）

* ジョブが完了すると、上記のGETリクエストが成功を返し、マップが失敗したかどうかを示します。 正常にインデックス化されたマップは、サーバ ログから確認できます。

## 互換性マトリックス

この節では、2023 年 4 月リリースのAEM Guidesでサポートされるソフトウェアアプリケーションのas a Cloud Service一覧を示します。

### FrameMakerとFrameMaker Publishing Server

| AEM Guides as a Cloud リリース | FMPS | FrameMaker |
| --- | --- | --- |
| 2023.04.0 | 互換性がありません | 2022 以上 |
| | | |


### 酸素コネクタ

| AEM Guides as a Cloud リリース | 酸素コネクタウィンドウ | 酸素コネクタMac | 酸素ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- | --- | --- |
| 2023.04.0 | 2.9-uuid-2 | 2.9-uuid-2 | 2.3 | 2.3 |
|  |  |  |  |



## 修正された問題

様々な領域で修正されたバグを以下に示します。

* ネイティブPDF | brackets （）を含む出力クラスを持つコンテンツを公開すると、公開が凍結される。 （11596）
* 問題は、「変更の追跡」がオンの既存のリスト項目の代わりに移動（ドラッグ&amp;ドロップ）すると発生します。 （11570）
* 変更の追跡がオンの状態で、新しいリスト項目として移動（ドラッグ&amp;ドロップ）すると問題が発生する。 （11569）
* [ 変更の追跡 ] がオンの場合、リスト項目のインデントまたはインデント解除が正常に機能しない。 （11568）
* 「変更の追跡」をオンにして行にコンテンツを追加した後、「変更の追跡」をオフにしても、実際にはオフにはなりません。 （11567）
* リスト項目をドラッグ&amp;ドロップするのが困難な場合、リスト項目の代わりにテキストが移動されます。 （11566）
* 完了したレビューが読み取り専用モードで開かない。 （11387）
* 問題はAEM サイト検索で発生します（2 ～ 3 レベルのノードを超えて機能しません）。 （11352）
* 緑色で表示された要素（トラック変更）でオーサリングすると、トラック変更が無効になっていても、新しいコンテンツがトラック変更として表示されます。 （7021）

### 回避策に関する既知の問題

Adobeでは、AEM Guidesの 2023 年 4 月のas a Cloud Serviceリリースに関して、次の既知の問題を特定しました。

* ネイティブPDF |出力プリセットが明示的に開かれるまで、古いメタデータは入力されません。
