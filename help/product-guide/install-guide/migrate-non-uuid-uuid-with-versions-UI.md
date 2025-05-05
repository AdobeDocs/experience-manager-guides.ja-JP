---
title: バージョンを持つ非 UUID コンテンツをユーザーインターフェイスから UUID コンテンツに変換する
description: 4.3.x のバージョンで UUID 以外のコンテンツを移行する方法を説明します。
source-git-commit: f18c19eb493cd4d2003f68b082e71ebe7b3e6b7a
workflow-type: tm+mt
source-wordcount: '688'
ht-degree: 1%

---

# バージョンを持つ非 UUID コンテンツをユーザーインターフェイスから移行します

バージョン 4.3.x 以降を使用している場合は、次の手順を実行して、バージョンがの非 UUID コンテンツを UUID コンテンツに移行します。

## 互換性マトリックス

| 現在のAEM Guidesのバージョン（非 UUID） | UUID への移行に必要なバージョン | サポートされるアップグレードパス |
|---|---|---|
| 4.3.x 以降 | 4.3.0 非 UUID | 4.3.1 （UUID）のインストール |

## 必須パッケージ

1. **バージョンのパージ**:`com.adobe.guides.version-purge-1.0.11.zip` （任意）
1. **移行前**: `com.adobe.guides.pre-uuid-migration-1.1.2 .zip`
1. **移行**: `com.adobe.guides.uuid-upgrade-1.1.13.zip`



## 移行前

1. （オプション）コンテンツに対してバージョンのパージを実行して、不要なバージョンを削除し、移行プロセスを高速化します。 バージョン 4.1 （4.0 ではサポートされていません）でバージョンのパージを実行するには、パッケージ `com.adobe.guides.version-purge-1.0.11.zip` をインストールしてから、この URL `http://<server-name> /libs/fmdita/clientlibs/xmleditor_version_purge/page.html` を使用してユーザーインターフェイスに移動します。

   >[!NOTE]
   >
   >このユーティリティは、ベースラインやレビューで使用されているバージョンを削除したり、ラベルを持ったりしません。
1. 事前移行パッケージ（`ccom.adobe.guides.pre-uuid-migration-1.1.2 .zip`）をインストールします。

   >[!NOTE]
   >
   >* 移行を実行するには、管理者権限が必要です。
   >* 移行を進める前にエラーのあるファイルを修正することをお勧めします。

1. 左側のパネルから **互換性評価** を選択し、フォルダーパスを参照します。
1. 互換性を確認して、次の情報を一覧表示します。
   * 合計ファイル数
   * 合計バージョン数
   * 移行の推定時間
   * エラーのあるファイルの数



![ 移行の「互換性の評価」タブ ](assets/migration-compatibility-assessment.png){width="800" align="left"}


1. 左側のパネルから **検証を設定** を選択します。 次に、マップの **マップを選択** および **プリセットを選択** して設定します。 現在の出力検証リストには移行前の出力ファイルが表示され、後で移行後に生成された出力ファイルと照合して検証できます。

![ 移行の「検証」タブの設定 ](assets/migration-configure-validation.png){width="800" align="left"}




## 移行

### 手順 1：設定の更新

1. 使用可能な空き領域が、移行中にAEM（crx-quickstart directory）で使用される領域の 10 倍以上あることを確認します。 移行が完了したら、コンパクションを実行して、ディスク領域のほとんどを再利用できます（[ リビジョンクリーンアップ ](https://experienceleague.adobe.com/docs/experience-manager-65/deploying/deploying/revision-cleanup.html?lang=ja) を参照）。

1. `com.adobe.fmdita.config.ConfigManager` で *Post処理ワークフローランチャーを有効にする* を有効にする *および `com.adobe.fmdita.postprocess.version.PostProcessVersionObservation.` でバージョンの後処理を有効にする*

1. サポートされているリリースの UUID バージョンを非 UUID バージョンよりも先にインストールします。 例えば、4.0 非 UUID ビルドまたは 4.1 非 UUID ビルドを使用している場合は、UUID バージョン 4.1 をインストールする必要があります。

1. uuid 移行用の新しいパッケージ（`com.adobe.guides.uuid-upgrade-1.1.13`）をインストールします。

1. `http://localhost:4502/libs/cq/workflow/content/console.html` のランチャーを使用して、次のワークフローおよび `/content/dam` で実行されるその他のワークフローを無効にします。

   * DAM アセットの更新ワークフロー
   * DAM メタデータの書き戻しワークフロー

1. `com.adobe.fmdita.config.ConfigManager` で *Post処理ワークフローランチャーを有効にする* を無効にし、`com.adobe.fmdita.postprocess.version.PostProcessVersionObservation` で *バージョン後処理を有効にする* を無効にします。

1. Day CQ タグ付けサービスで、「検証を有効にする（`validation.enabled`）」プロパティを無効にします。

1. プロパティ `uuid.regex` フォルダーが `com.adobe.fmdita.config.ConfigManager` で正しく設定されていることを確認します。 空白の場合は、デフォルト値の `^GUID-(?<id>.*)` に設定します。
1. `com.adobe.fmdita.uuid.upgrade.UuidUpgrade` に別のロガーを追加します。ブラウザー応答は、`/content/uuid-upgrade/logs` でも利用できます。

### 手順 2：移行を実行し、検証する

#### 移行パッケージのインストール

![ 移行の「システムアップグレード」タブ ](assets/migration-system-upgrade.png){width="800" align="left"}

* 左側のパネルから **システムアップグレード** を選択して、移行を実行します。 `/content/dam` で実行する前に、データが小さいフォルダーから開始します。

* 移行実行中に「**レポートをダウンロード**」を選択し、フォルダー内のすべてのファイルが正しくアップグレードされているかどうか、およびすべての機能がそのフォルダーでのみ機能するかどうかを確認します。


>[!NOTE]
>
> コンテンツ移行は、フォルダーレベル、完全な `/content/dam` ージ、同じフォルダーで実行できます（移行の再実行）。

さらに、DITA コンテンツで使用したすべてのメディアアセット（画像やグラフィックなど）に対してコンテンツの移行も確実に行うことが重要です。

#### 移行のベースラインとレビュー

左側のパネルから「**ベースライン/レビューアップグレード**」を選択してベースラインを移行し、フォルダーレベルでレビューします。

![ 移行の「ベースライン」タブと「レビュー」タブ ](assets/migration-baseline-review-upgrade.png){width="800" align="left"}


### 手順 3：設定の復元

サーバーが正常に移行されたら、後処理、タグ付けおよび次のワークフロー（移行中に最初に無効になった他のすべてのワークフローを含む）を、サーバーで引き続き作業できるようにします。

* DAM アセットの更新ワークフロー
* DAM メタデータワークフロー

>[!NOTE]
>
>一部のファイルが移行前に処理されていないか破損しており、移行前に破損し、移行後も破損したままになる場合。

## 移行の検証

移行が完了したら、左側のパネルから **システムアップグレードの検証** を選択し、移行前と移行後に出力ファイルを検証して、移行が成功したことを確認します。

![ 移行の「システムアップグレードを検証」タブ ](assets/migration-validate-system-upgrade.png){width="800" align="left"}


1. 移行が完了したら、コンパクションを実行することで、ディスク領域のほとんどを再利用できます（`https://experienceleague.adobe.com/docs/experience-manager-65/deploying/deploying/revision-cleanup.html?lang=ja` を参照）。

