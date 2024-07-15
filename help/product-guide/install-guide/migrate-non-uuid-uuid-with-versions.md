---
title: バージョンを持つ非 UUID コンテンツを UUID コンテンツに変換する
description: バージョンを持つ非 UUID コンテンツを UUID コンテンツに移行する方法を説明します。
feature: Migration
role: Admin
level: Experienced
exl-id: 8f3a89fc-7d18-453d-909d-6dff5e275cab
source-git-commit: e40ebf4122decc431d0abb2cdf1794ea704e5496
workflow-type: tm+mt
source-wordcount: '755'
ht-degree: 1%

---

# バージョン管理されたコンテンツの移行

以下の手順を実行して、UUID でバージョン管理されていないコンテンツを UUID コンテンツに移行します。

>[!NOTE]
>
>製品のライセンス済みバージョンに固有の [ アップグレード手順 ](./upgrade-xml-documentation.md) に従います。

## 互換性マトリックス

| 現在のExperience Manager Guidesのバージョン（非 UUID） | UUID への移行に必要なバージョン | サポートされるアップグレードパス |
|---|---|---|
| 3.8.5、4.0.x、または 4.1.x | 4.1 非 UUID | 4.1 （UUID）をインストールし、移行を実行します。 |
| 4.2、4.2.x または 4.3 | 4.3.0 非 UUID | 4.3.1 （UUID）をインストールし、移行を実行します。 |
| 4.3.1 | 該当なし | 該当なし |

## パッケージのインストール

使用しているバージョンに応じて、Adobeソフトウェア配布ポータルから必要なパッケージをダウンロードします。
<details>
<summary>  バージョン 4.1 のアップグレード パス用パッケージ</summary>

1. **Pre-migration**:[com.adobe.guides.pre-uuid-migration-1.0.9.zip](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2Fother-packages%2Fuuid-migration%2F1-0%2Fcom.adobe.guides.pre-uuid-migration-1.0.9.zip)
1. **移行**:[com.adobe.guides.uuid-upgrade-1.0.19.zip](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2Fother-packages%2Fuuid-migration%2F1-0%2Fcom.adobe.guides.uuid-upgrade-1.0.19.zip)
</details>


<details>
<summary> バージョン 4.3.1 のアップグレードパス用パッケージ</summary>

1. **Pre-migration**:[com.adobe.guides.pre-uuid-migration-1.1.3.zip](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2Fother-packages%2Fuuid-migration%2Fcom.adobe.guides.pre-uuid-migration-1.1.3.zip)
1. **移行**:[com.adobe.guides.uuid-upgrade-1.1.15.zip](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2Fother-packages%2Fuuid-migration%2Fcom.adobe.guides.uuid-upgrade-1.1.15.zip)

</details>

## 移行前

非 UUID バージョン（4.1 非 UUID または 4.3.0 非 UUID）で次のチェックを実行します。

1. お使いのバージョンに応じて事前移行パッケージをインストールします。

   >[!NOTE]
   >
   >* 移行を実行するには、管理者権限が必要です。
   >* 移行を進める前にエラーのあるファイルを修正することをお勧めします。

1. （オプション）コンテンツに対してバージョンのパージを実行して、不要なバージョンを削除し、移行プロセスを高速化します。 バージョンのパージを実行するには、移行画面から「**バージョンのパージ**」オプションを選択し、URL `http://<server- name>/libs/fmdita/clientlibs/xmleditor_uuid_upgrade/page.html` を使用してユーザーインターフェイスに移動します。
   >[!NOTE]
   >
   >このユーティリティは、ベースラインやレビューで使用されているバージョンを削除したり、ラベルを持ったりしません。

1. `http://<server-name>/libs/fmdita/clientlibs/xmleditor_uuid_upgrade/page.html` を起動します。
1. 左側のパネルから **互換性評価** を選択し、フォルダーパスを参照します。
1. 互換性を確認して、次の情報を一覧表示します。
   * 合計ファイル数
   * 合計バージョン数
   * 移行の推定時間
   * エラーのあるファイルの数

   ![ 移行の「互換性の評価」タブ ](assets/migration-compatibility-assessment.png){width="800" align="left"}


1. 左側のパネルから **検証を設定** を選択します。 次に、マップの **マップを選択** および **プリセットを選択** して設定します。 現在の出力検証リストには、移行前の出力ファイルが表示されます。後で移行後に生成された出力ファイルと照合して検証できます。

   ![ 移行の「検証」タブの設定 ](assets/migration-configure-validation.png){width="800" align="left"}




## 移行

### 手順 1：設定の更新

1. 使用可能な空き領域が、移行中にAEM（crx-quickstart directory）で使用される領域の 10 倍以上あることを確認します。 移行が完了したら、コンパクションを実行して、ディスク領域のほとんどを再利用できます（[ リビジョンクリーンアップ ](https://experienceleague.adobe.com/docs/experience-manager-65/deploying/deploying/revision-cleanup.html?lang=ja) を参照）。

1. `com.adobe.fmdita.config.ConfigManager` で *Post処理ワークフローランチャーを有効にする* を有効にする *および `com.adobe.fmdita.postprocess.version.PostProcessVersionObservation.` でバージョンの後処理を有効にする*

1. サポートされているリリースの UUID バージョンを非 UUID バージョンよりも先にインストールします。 例えば、4.1 の非 UUID ビルドを使用している場合は、UUID バージョン 4.1 をインストールして、移行を実行する必要があります。

1. uuid 移行用の新しいパッケージをインストールします。

1. `http://<server-name>/libs/cq/workflow/content/console.html` のランチャーを使用して、次のワークフローおよび `/content/dam` で実行されるその他のワークフローを無効にします。

   * DAM アセットの更新ワークフロー
   * DAM メタデータの書き戻しワークフロー

1. `com.adobe.fmdita.config.ConfigManager` で *Post処理ワークフローランチャーを有効にする* を無効にし、`com.adobe.fmdita.postprocess.version.PostProcessVersionObservation` で *バージョン後処理を有効にする* を無効にします。

1. Day CQ タグ付けサービスで、「検証を有効にする（`validation.enabled`）」プロパティを無効にします。

1. プロパティ `uuid.regex` フォルダーが `com.adobe.fmdita.config.ConfigManager` で正しく設定されていることを確認します。 空白の場合は、デフォルト値の `^GUID-(?<id>.*)` に設定します。
1. `com.adobe.fmdita.uuid` に別のロガーを追加します。ブラウザー応答は、`/content/uuid-upgrade/logs` でも利用できます。

### 手順 2：移行を実行し、検証する

#### 移行パッケージのインストール

1. `http://<server-name>/libs/fmdita/clientlibs/xmleditor_uuid_upgrade/page.html` を起動します。

   ![ 移行の「システムアップグレード」タブ ](assets/migration-system-upgrade.png){width="800" align="left"}

1. 左側のパネルから **システムアップグレード** を選択して、移行を実行します。 `/content/dam` で実行する前に、データが小さいフォルダーから開始します。

1. 移行実行中に「**レポートをダウンロード**」を選択し、フォルダー内のすべてのファイルが正しくアップグレードされているかどうか、およびすべての機能がそのフォルダーでのみ機能するかどうかを確認します。


>[!NOTE]
>
> コンテンツの移行は、フォルダーレベル、完全な `/content/dam` ージ、または同じフォルダーで実行できます（移行の再実行）。

また、DITA コンテンツで使用したすべてのメディアアセット（画像やグラフィックなど）に対してコンテンツの移行が確実に行われるようにすることが重要です。

#### 移行のベースラインとレビュー

左側のパネルから **ベースライン/レビューアップグレード** を選択して、ベースラインを移行し、フォルダーレベルでレビューします。

![ 移行の「ベースライン」タブと「レビュー」タブ ](assets/migration-baseline-review-upgrade.png){width="800" align="left"}


### 手順 3：設定の復元

サーバーが正常に移行されたら、後処理、タグ付けおよび次のワークフロー（移行中に最初に無効にしたその他すべてのワークフローを含む）を有効にして、サーバーで作業を続行します。

* DAM アセットの更新ワークフロー
* DAM メタデータワークフロー

>[!NOTE]
>
>一部のファイルが移行前に処理されていないか破損している場合、それらのファイルは移行前に破損し、移行後も破損したままになります。

## 移行の検証

1. 移行が完了したら、左側のパネルから **システムアップグレードの検証** を選択し、移行前と移行後に出力ファイルを検証して、移行が成功したことを確認します。

   ![ 移行の「システムアップグレードを検証」タブ ](assets/migration-validate-system-upgrade.png){width="800" align="left"}


1. 検証が完了したら、コンパクションを実行することで、ディスク領域のほとんどを再利用できます（`https://experienceleague.adobe.com/docs/experience-manager-65/deploying/deploying/revision-cleanup.html?lang=en` を参照）。
