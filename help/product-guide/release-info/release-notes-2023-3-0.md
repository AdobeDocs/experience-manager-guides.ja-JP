---
title: リリースノート | Adobe Experience Managerガイドas a Cloud Service、2023 年 3 月リリース
description: Adobe Experience Manager Guides の 3 月リリースas a Cloud Service
exl-id: 6a0bba92-7d7d-4b20-ad46-0eacc91268da
feature: Release Notes
role: Leader
source-git-commit: 6d8c01f20f7b59fed92c404561b647d9ebecb050
workflow-type: tm+mt
source-wordcount: '561'
ht-degree: 0%

---

# 2023 年 3 月リリースのAdobe Experience Manager Guidesas a Cloud Service

このリリースノートでは、アップグレードの手順、互換性マトリックス、Adobe Experience Managerガイドの 2023 年 3 月に修正された問題 ( 後で *AEMガイドas a Cloud Service*) をクリックします。

新機能および機能強化について詳しくは、 [2023 年 3 月リリースのAEMガイドas a Cloud Serviceの新機能](whats-new-2023-3-0.md).

## 2023 年 3 月リリースにアップグレード

次の手順に従って、現在のAEM Guidesas a Cloud Service設定をアップグレードします。

1. Cloud Serviceの Git コードを確認し、アップグレードする環境に対応するCloud Serviceパイプラインで設定されたブランチに切り替えます。
1. 更新 `<dox.version>` プロパティ： `/dox/dox.installer/pom.xml` ファイルのCloud ServiceGit コードを 2023.3.242 に設定します。
1. 変更をコミットし、Cloud Serviceパイプラインを実行して、2023 年 3 月リリースのAEM Guides as a Cloud Serviceにアップグレードします。

## 既存のコンテンツのインデックスを作成する手順 (AEMガイドas a Cloud Serviceの 9 月リリースより前のバージョンを使用している場合のみ )

既存のコンテンツのインデックスを作成し、マップレベルで新しい検索と置換テキストを使用するには、次の手順を実行します。

* サーバーに対してPOSTリクエストを実行します（正しい認証を使用） - `http://<server:port>/bin/guides/map-find/indexing`.
( オプション：マップの特定のパスを渡してインデックスを作成できます。デフォルトでは、すべてのマップにインデックスが作成されます。 || 例： `https://<Server:port>/bin/guides/map-find/indexing?paths=<map_path_in_repository>`)

* API は jobId を返します。 ジョブのステータスを確認するには、ジョブ ID を持つGETリクエストを同じエンドポイントに送信します。 `http://<server:port>/bin/guides/map-find/indexing?jobId={jobId}`
( 例： http://&lt;_localhost:8080_>/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678)

* ジョブが完了すると、上記のGETリクエストは成功と共に応答し、マップが失敗した場合はメンションします。 正常にインデックス付けされたマップは、サーバーログから確認できます。

## 互換性マトリックス

この節では、AEMガイドのas a Cloud Service 2023 年 3 月リリースでサポートされているソフトウェアアプリケーションの互換性マトリックスを示します。

### FrameMakerとFrameMaker Publishing Server

| AEM Guides as a Cloud リリース | FMPS | FrameMaker |
| --- | --- | --- |
| 2023.03.0 | 互換性がありません | 2022 以降 |
| | | |


### 酸素コネクタ

| AEM Guides as a Cloud リリース | Oxygen Connector ウィンドウ | Oxygen Connector Mac | Oxygen Windows で編集 | Oxen Macで編集 |
| --- | --- | --- | --- | --- |
| 2023.03.0 | 2.9-uuid-2 | 2.9-uuid-2 | 2.3 | 2.3 |
|  |  |  |  |

## 修正された問題

様々な領域で修正されたバグを以下に示します。

* ダウンロードPDFプロセスが Web エディタで適切に動作していません。 (11496)
* JSON 出力 | プロパティ値がとなるマップメタデータ `"value in spaces and double quotes"` 公開エラーにつながります。 (11438)
* オーディオおよびビデオマルチメディアファイルの挿入が、YouTube形式で **マルチメディアの挿入** アイコン。 (11320)
* 検証エラーは、特殊なタイトル要素を持つテンプレートを使用してマップを作成した場合に発生します。 (11212)
* ネイティブPDF | テーブルヘッダーに存在する脚注は、PDF出力内の対応するページフッターで、太字および中央揃えのテキストになります。 (10610)
>[!NOTE]
>
>ネイティブPDFの変更を反映するには、/content/dam/dita-templates にあるPDFフォルダーを削除し、最新のビルドにアップグレードします。 (10610)

### 回避策に関する既知の問題

Adobeは、2023 年 3 月のリリースのAEMガイドに関して、次の既知の問題を特定しました。

* ユーザーが、重複したアセットのバージョンを保存または作成できない。

**回避策**：重複アセットに変更を加える前に、Assets UI から再処理します。
