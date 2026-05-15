---
title: リリースノート | Adobe Experience Manager Guides as a Cloud Service（2023年3月リリース）
description: Adobe Experience Manager Guides as a Cloud Serviceの3月リリース
exl-id: 6a0bba92-7d7d-4b20-ad46-0eacc91268da
feature: Release Notes
role: Leader
TQID: https://experienceleague.adobe.com/eIPiGBWr-vxglYwzI0zYT64a4orZXm42hWthchmcceU
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a3bd6397-2eb2-4908-a61c-226e26855dca
subfeature_v2: id: d5ea0417-7932-4688-a3e2-4d3b2e7076a3
role_v2: id: f8a45b24-4be7-4f1b-909b-60d06b483a20
topic_v2: id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 565
ht-degree: 2%

---

# Adobe Experience Manager Guides as a Cloud Serviceの2023年3月リリース

このリリースノートでは、Adobe Experience Manager Guidesの2023年3月バージョン（後に&#x200B;*AEM Guides as a Cloud Service*&#x200B;と呼ばれます）で修正されたアップグレード手順、互換性マトリックス、および問題について説明します。

新機能と機能強化について詳しくは、[AEM Guides as a Cloud Serviceの2023年3月リリースの新機能](whats-new-2023-3-0.md)を参照してください。

## 2023年3月リリースへのアップグレード

次の手順を実行して、現在のAEM Guides as a Cloud Service設定をアップグレードします。

1. Cloud ServicesのGit コードを確認し、アップグレードする環境に対応するCloud Services パイプラインで設定されたブランチに切り替えます。
1. Cloud Services Git コードの`/dox/dox.installer/pom.xml` ファイルの`<dox.version>` プロパティを2023.3.242に更新します。
1. 変更を確定し、Cloud Services パイプラインを実行して、AEM Guides as a Cloud Serviceの2023年3月リリースにアップグレードします。

## 既存のコンテンツをインデックス化する手順（AEM Guides as a Cloud Serviceの9月リリース以前のバージョンを使用している場合のみ）

既存のコンテンツにインデックスを作成し、マップレベルで新しい検索と置換のテキストを使用するには、次の手順を実行します。

* サーバーへのPOST リクエストを実行します（正しい認証を使用） - `http://<server:port>/bin/guides/map-find/indexing`。
（オプション：マップの特定のパスを渡してインデックスを作成できます。デフォルトでは、すべてのマップにインデックスが付けられます||例：`https://<Server:port>/bin/guides/map-find/indexing?paths=<map_path_in_repository>`）

* APIはjobIdを返します。 ジョブのステータスを確認するには、ジョブ IDを持つGET リクエストを同じエンドポイントに送信できます。 `http://<server:port>/bin/guides/map-find/indexing?jobId={jobId}`
（例：http://&lt;_localhost:8080_/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678）

* ジョブが完了すると、上記のGET リクエストは成功して応答し、マップが失敗した場合に言及します。 正常にインデックス化されたマップは、サーバーログから確認できます。

## 互換性マトリックス

この節では、AEM Guides as a Cloud Service 2023年3月リリースでサポートされるソフトウェアアプリケーションの互換性マトリックスを示します。

### FrameMakerとFrameMaker Publishing Server

| AEM Guides as a Cloud リリース | FMPS | FrameMaker |
| --- | --- | --- |
| 2023.03.0 | 互換性がありません | 2022年以降 |
| | | |


### Oxygen コネクタ

| AEM Guides as a Cloud リリース | Oxygen コネクタウィンドウ | Oxygen Connector Mac | Oxygen ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- | --- | --- |
| 2023.03.0 | 2.9-uuid-2 | 2.9-uuid-2 | 2.3 | 2.3 |
|  |  |  |  |  |

## 修正された問題

様々な領域で修正されたバグを以下に示します。

* Web エディターでPDFのダウンロード プロセスが適切に機能しない。 (11496)
* JSON出力| プロパティ値が`"value in spaces and double quotes"`のメタデータをマッピングすると、公開エラーが発生します。 (11438)
* オーディオおよびビデオのマルチメディアファイルの挿入は、**マルチメディアの挿入** アイコンの下のYouTube形式で失敗します。 (11320)
* 特殊なタイトル要素を持つテンプレートを使用してマップを作成すると、検証エラーが発生します。 (11212)
* 表のヘッダーにPDFのネイティブ脚注を配置すると、PDF出力内の対応するページフッターに太字と中央揃えのテキストが表示されます。 (10610)
>[!NOTE]
>
>ネイティブ PDFの変更を反映するには、/content/dam/dita-templatesにあるPDF フォルダーを削除し、最新のビルドにアップグレードします。 (10610)

### 回避策の既知の問題

Adobeでは、AEM Guides as a Cloud Service 2023年3月リリースの既知の問題を次のように特定しました。

* ユーザーは、複製されたアセットのバージョンを保存または作成できません。

**回避策**：複製アセットに変更を加える前に、Assets UIからアセットを再処理します。
