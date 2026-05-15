---
title: リリースノート | Adobe Experience Manager Guides as a Cloud Service（2022年10月リリース）
description: Adobe Experience Manager Guides as a Cloud Service 10月リリース
exl-id: 38638080-625c-49c3-9e54-56cc23831546
feature: Release Notes
role: Leader
TQID: https://experienceleague.adobe.com/w-fw81jYGDRDrmn98Dzn-hYIkOZzT0B3-4-y-bcxdz4
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
subfeature_v2:
  - id: d5ea0417-7932-4688-a3e2-4d3b2e7076a3
  - id: fd6cc9e1-e5e5-494e-b7b1-a32f2d6cd7c9
role_v2:
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 489
ht-degree: 3%

---

# Adobe Experience Manager Guides as a Cloud Service 10月リリース

## 10月リリースへのアップグレード

次の手順を実行して、現在のAdobe Experience Manager Guides as a Cloud Service（後で&#x200B;*AEM Guides as a Cloud Service*&#x200B;と呼ばれます）の設定をアップグレードします。
1. Cloud ServicesのGit コードを確認し、アップグレードする環境に対応するCloud Services パイプラインで設定されたブランチに切り替えます。
1. Cloud Services Git コードの`/dox/dox.installer/pom.xml` ファイルの`<dox.version>` プロパティを2022.10.183に更新します。
1. 変更を確定し、Cloud Services パイプラインを実行して、AEM Guides as a Cloud Serviceの10月リリースにアップグレードします。

## 互換性マトリックス

この節では、AEM Guides as a Cloud Service 2022年10月リリースでサポートされるソフトウェアアプリケーションの互換性マトリックスを示します。

### FrameMakerとFrameMaker Publishing Server

| FMPS | FrameMaker |
| --- | --- |
| 互換性がありません | 2020年アップデート 4以降 |
| | |

* AEMで作成されたベースラインと条件は、2020.2以降のFMPS リリースでサポートされています。

### Oxygen コネクタ

| AEM Guides as a Cloud リリース | Oxygen コネクタウィンドウ | Oxygen Connector Mac | Oxygen ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- | --- | --- |
| 2022.10.0 | 2.7.13 | 2.7.13 | 2.3 | 2.3 |
|  |  |  |  |  |


## 新機能と機能強化

AEM Guides as a Cloud Serviceは、10月リリースで次の機能強化と新機能を提供します。


### クイック生成パネル

AEM Guidesには、**クイック生成** パネルが用意されています。このパネルを使用すると、DITA マップ用に作成されたプリセットの出力をすばやく生成して表示できます。

![&#x200B; クイック生成アイコン &#x200B;](assets/quick-generate-icon.png)

**クイック生成** パネルで、DITA マップ用に作成されたすべての出力プリセットのリストを表示できます。

![&#x200B; クイック生成パネル &#x200B;](assets/quick-generate-panel.png)

1つ以上のプリセットを選択して、出力をすばやく生成します。 また、プリセット用に生成された出力をすばやく表示することもできます。 出力の生成に成功メッセージが表示されます。 出力生成が失敗した場合は、エラーメッセージが表示されます。 エラーログを表示して、生成プロセスで発生したエラーの詳細を確認することもできます。


## 修正された問題

様々な領域で修正されたバグを以下に示します。

* ネイティブ PDF | PDF出力からリソースのみのトピックを削除すると、エラーが発生します。 (10554)
* ネイティブ PDF | PDF出力に空のキーフレームが表示される。 (10553)
* ネイティブ PDF | `topichead`の`navtitle`は尊重されません。 (10509)
* ネイティブ PDF | amd64 JDK フレーバーに必要なサポート。 (10465)
* ネイティブ PDF |目次からフロントマタートピックを非表示にできない。 (10355)
* Native PDF | チャプターレイアウトでページ番号を再開すると、前のチャプターの最後から番号がランダムに付けられます。 (10154)
* Chrome ブラウザー| UIから任意の要素をドラッグ&amp;ドロップすると、画面が空白になります。 例えば、条件パネルから条件をドラッグする場合などです。 (10524)
* アセットのコピー&amp;ペースト操作の後、ノードプロパティが削除されます。 (10053)
* 「**閉じる**」をクリックすると、ユーザーがアセットにリダイレクトされました。ユーザーをAEMのホームページに誘導するようにエクスペリエンスが修正されました。 (9654)
