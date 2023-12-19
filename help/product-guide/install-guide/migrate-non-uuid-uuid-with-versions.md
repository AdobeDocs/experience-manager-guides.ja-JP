---
title: UUID 以外のコンテンツをバージョン付きで UUID コンテンツに変換
description: UUID 以外のコンテンツをバージョン付きで UUID コンテンツに移行する方法を説明します。
source-git-commit: d37cb4a416d85b072c152d795d8a28b5ac70ef4e
workflow-type: tm+mt
source-wordcount: '755'
ht-degree: 1%

---

# バージョン管理されたコンテンツを移行

UUID 以外のバージョンのコンテンツを UUID コンテンツに移行するには、次の手順を実行します。

>[!NOTE]
>
>フォロー： [アップグレード手順](./upgrade-xml-documentation.md) 製品のライセンス版に固有です。

## 互換性マトリックス

| 現在のExperience Managerガイドのバージョン（非 UUID） | UUID に移行するために必要なバージョン | サポートされるアップグレードパス |
|---|---|---|
| 3.8.5、4.0.x、4.1.x | 4.1 非 UUID | 4.1(UUID) をインストールし、移行を実行します。 |
| 4.2、4.2.x、または 4.3 | 4.3.0 非 UUID | 4.3.1(UUID) をインストールし、移行を実行します。 |
| 4.3.1 | 該当なし | 該当なし |

## パッケージのインストール

ご使用のバージョンに応じて、Adobeソフトウェア配布ポータルから必要なパッケージをダウンロードします。
<details>
<summary>  バージョン 4.1 のアップグレードパス用のパッケージ</summary>

1. **移行前**: [com.adobe.guides.pre-uuid-migration-1.0.9.zip](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2Fother-packages%2Fuuid-migration%2F1-0%2Fcom.adobe.guides.pre-uuid-migration-1.0.9.zip)
1. **移行**: [com.adobe.guides.uuid-upgrade-1.0.19.zip](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2Fother-packages%2Fuuid-migration%2F1-0%2Fcom.adobe.guides.uuid-upgrade-1.0.19.zip)
</details>


<details>
<summary> バージョン 4.3.1 のアップグレードパス用パッケージ</summary>

1. **移行前**: [com.adobe.guides.pre-uuid-migration-1.1.3.zip](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2Fother-packages%2Fuuid-migration%2Fcom.adobe.guides.pre-uuid-migration-1.1.3.zip)
1. **移行**: [com.adobe.guides.uuid-upgrade-1.1.15.zip](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2Fother-packages%2Fuuid-migration%2Fcom.adobe.guides.uuid-upgrade-1.1.15.zip)

</details>

## 移行前

非 UUID バージョン（4.1 非 UUID または 4.3.0 非 UUID）に対して、次のチェックを実行します。

1. お使いのバージョンに従って、移行前パッケージをインストールします。

   >[!NOTE]
   >
   >* 移行を実行するには、管理者権限が必要です。
   >* 移行を続行する前に、エラーが発生したファイルを修正することをお勧めします。

1. （オプション）コンテンツに対してバージョンのパージを実行して、不要なバージョンを削除し、移行プロセスを高速化します。 バージョンのパージを実行するには、「 」オプションを選択します **バージョンのパージ** 移行画面から、URL を使用してユーザーインターフェイスに移動します。 `http://<server- name>/libs/fmdita/clientlibs/xmleditor_uuid_upgrade/page.html`.
   >[!NOTE]
   >
   >このユーティリティは、ベースラインまたはレビューで使用されるバージョンや、ラベルを持つバージョンを削除しません。

1. Launch `http://<server-name>/libs/fmdita/clientlibs/xmleditor_uuid_upgrade/page.html`.
1. 選択 **互換性評価**  左のパネルから、フォルダパスを参照します。
1. 互換性を確認して、次の情報をリストします。
   * 合計ファイル数
   * 合計バージョン数
   * 移行の推定時間
   * エラーが発生したファイルの数

   ![移行時の互換性評価タブ](assets/migration-compatibility-assessment.png){width="800" align="left"}


1. 選択 **検証を設定** を左側のパネルからクリックします。 すると、 **マップを選択** および **プリセットを選択** を設定します。 現在の出力検証リストには、移行前に存在する出力ファイルが表示され、後で移行後に生成される出力ファイルに対して検証できます。

   ![移行時に「検証を設定」タブを使用](assets/migration-configure-validation.png){width="800" align="left"}




## 移行

### 手順 1：設定を更新

1. 移行中にAEM（crx-quickstart ディレクトリ）が取る領域の少なくとも 10 倍に空き領域があることを確認します。 移行が完了したら、圧縮を実行して、ディスク容量のほとんどを再利用できます ( [リビジョンのクリーンアップ](https://experienceleague.adobe.com/docs/experience-manager-65/deploying/deploying/revision-cleanup.html?lang=ja)) をクリックします。

1. 有効にする *後処理ワークフローランチャーの有効化* in `com.adobe.fmdita.config.ConfigManager` および *バージョンの後処理を有効にする* in `com.adobe.fmdita.postprocess.version.PostProcessVersionObservation.`

1. UUID 以外のバージョンに対して、サポートされているリリースの UUID バージョンをインストールします。 例えば、4.1 以外の UUID ビルドを使用している場合は、UUID バージョン 4.1 をインストールし、移行を実行する必要があります。

1. UUID の移行用に新しいパッケージをインストールします。

1. 次のワークフローおよび実行中の他のワークフローを無効にする `/content/dam` ランチャーの使用 `http://<server-name>/libs/cq/workflow/content/console.html`.

   * DAM アセットの更新ワークフロー
   * DAM メタデータ書き戻しワークフロー

1. 無効にする *後処理ワークフローランチャーの有効化* in `com.adobe.fmdita.config.ConfigManager` および無効化 *バージョンの後処理を有効にする* in `com.adobe.fmdita.postprocess.version.PostProcessVersionObservation`.

1. プロパティ検証を有効にする (`validation.enabled`) を Day CQ Tagging Service で使用します。

1. 以下を確認します。 `uuid.regex` プロパティフォルダーがに正しく設定されている `com.adobe.fmdita.config.ConfigManager`. 空白の場合は、デフォルト値 ( `^GUID-(?<id>.*)`.
1. 別のロガーを `com.adobe.fmdita.uuid` ブラウザーの応答は、 `/content/uuid-upgrade/logs`.

### 手順 2：移行の実行と検証

#### 移行パッケージをインストールします。

1. Launch `http://<server-name>/libs/fmdita/clientlibs/xmleditor_uuid_upgrade/page.html`.

   ![移行時のシステムアップグレードタブ](assets/migration-system-upgrade.png){width="800" align="left"}

1. 選択 **システムのアップグレード** 移行を実行するには、左のパネルからを選択します。 より小さいデータを含むフォルダーを起動してから、で実行します。 `/content/dam`.

1. 選択 **レポートをダウンロード** 移行の実行中に、フォルダ内のすべてのファイルが正しくアップグレードされたかどうか、およびそのフォルダに対してのみすべての機能が機能するかどうかを確認します。


>[!NOTE]
>
> コンテンツの移行は、フォルダーレベルで実行でき、完了 `/content/dam`または同じフォルダー（移行を再実行）が存在する場合。

また、DITA コンテンツで使用した画像やグラフィックなど、すべてのメディアアセットに対して、コンテンツの移行を確実におこなうことが重要です。

#### ベースラインとレビューの移行

選択 **ベースライン/レビューアップグレード** 左のパネルからベースラインを移行し、フォルダーレベルでレビューします。

![移行のベースラインとレビュータブ](assets/migration-baseline-review-upgrade.png){width="800" align="left"}


### 手順 3：設定の復元

サーバーの移行に成功したら、後処理、タグ付け、および次のワークフロー（移行時に最初に無効にされたその他すべてのワークフローを含む）を有効にして、サーバー上で作業を続行します。

* DAM アセットの更新ワークフロー
* DAM メタデータワークフロー

>[!NOTE]
>
>移行前に処理または破損していないファイルがある場合は、移行前に破損し、移行後も破損したままになります。

## 移行の検証

1. 移行が完了したら、「 」を選択します。 **システムアップグレードの検証** 左側のパネルから、移行前と移行後に出力ファイルを検証し、移行が正常に完了していることを確認します。

   ![移行時のシステムアップグレードタブの検証](assets/migration-validate-system-upgrade.png){width="800" align="left"}


1. 検証が完了すると、圧縮を実行することで、ディスク領域のほとんどを再利用できます ( `https://experienceleague.adobe.com/docs/experience-manager-65/deploying/deploying/revision-cleanup.html?lang=en`) をクリックします。

