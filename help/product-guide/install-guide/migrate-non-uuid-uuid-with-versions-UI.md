---
title: ユーザーインターフェイスから UUID 以外のコンテンツを、バージョンを持つコンテンツから UUID コンテンツに変換します
description: 4.3.x バージョンで UUID 以外のコンテンツを移行する方法を説明します。
source-git-commit: f18c19eb493cd4d2003f68b082e71ebe7b3e6b7a
workflow-type: tm+mt
source-wordcount: '688'
ht-degree: 1%

---

# UUID 以外のコンテンツとバージョンのユーザーインターフェイスからの移行

バージョン 4.3.x 以降を使用している場合は、次の手順を実行して、UUID 以外のコンテンツをバージョン付きで UUID コンテンツに移行します。

## 互換性マトリックス

| 現在のAEM Guides バージョン（非 UUID） | UUID に移行するために必要なバージョン | サポートされるアップグレードパス |
|---|---|---|
| 4.3.x 以降 | 4.3.0 非 UUID | 4.3.1 (UUID) のインストール |

## 必要なパッケージ

1. **バージョンのパージ**: `com.adobe.guides.version-purge-1.0.11.zip` （オプション）
1. **移行前**: `com.adobe.guides.pre-uuid-migration-1.1.2 .zip`
1. **移行**: `com.adobe.guides.uuid-upgrade-1.1.13.zip`



## 移行前

1. （オプション）コンテンツに対してバージョンのパージを実行して、不要なバージョンを削除し、移行プロセスを高速化します。 バージョン 4.1（4.0 ではサポートされていません）でバージョンのパージを実行するには、パッケージをインストールします。 `com.adobe.guides.version-purge-1.0.11.zip`をクリックし、この URL を使用してユーザーインターフェイスに移動します。 `http://<server-name> /libs/fmdita/clientlibs/xmleditor_version_purge/page.html`.

   >[!NOTE]
   >
   >このユーティリティは、ベースラインまたはレビューで使用されるバージョンや、ラベルを持つバージョンを削除しません。
1. 移行前のパッケージ (`ccom.adobe.guides.pre-uuid-migration-1.1.2 .zip`) をクリックします。

   >[!NOTE]
   >
   >* 移行を実行するには、管理者権限が必要です。
   >* 移行を続行する前に、エラーが発生したファイルを修正することをお勧めします。

1. 選択 **互換性評価**  左のパネルから、フォルダパスを参照します。
1. 互換性を確認して、次の情報をリストします。
   * 合計ファイル数
   * 合計バージョン数
   * 移行の推定時間
   * エラーが発生したファイルの数



![移行時の互換性評価タブ](assets/migration-compatibility-assessment.png){width="800" align="left"}


1. 選択 **検証を設定** を左側のパネルからクリックします。 次に、 **マップを選択** および **プリセットを選択** を設定します。 現在の出力検証リストには、移行前に存在する出力ファイルが表示され、後で移行後に生成される出力ファイルに対して検証できます。

![移行時に「検証を設定」タブを使用](assets/migration-configure-validation.png){width="800" align="left"}




## 移行

### 手順 1：設定を更新

1. 移行中にAEM（crx-quickstart ディレクトリ）が取る領域の少なくとも 10 倍に空き領域があることを確認します。 移行が完了したら、圧縮を実行して、ディスク容量のほとんどを再利用できます ( [リビジョンのクリーンアップ](https://experienceleague.adobe.com/docs/experience-manager-65/deploying/deploying/revision-cleanup.html?lang=ja)) をクリックします。

1. 有効にする *後処理ワークフローランチャーの有効化* in `com.adobe.fmdita.config.ConfigManager` および *バージョンの後処理を有効にする* in `com.adobe.fmdita.postprocess.version.PostProcessVersionObservation.`

1. UUID 以外のバージョンに対して、サポートされているリリースの UUID バージョンをインストールします。 例えば、4.0 非 UUID ビルドまたは 4.1 非 UUID ビルドを使用している場合、UUID バージョン 4.1 をインストールする必要があります。

1. UUID 移行用の新しいパッケージをインストールします (`com.adobe.guides.uuid-upgrade-1.1.13`) をクリックします。

1. 次のワークフローおよび実行中の他のワークフローを無効にする `/content/dam` ランチャーの使用 `http://localhost:4502/libs/cq/workflow/content/console.html`.

   * DAM アセットの更新ワークフロー
   * DAM メタデータ書き戻しワークフロー

1. 無効にする *後処理ワークフローランチャーの有効化* in `com.adobe.fmdita.config.ConfigManager` および無効化 *バージョンの後処理を有効にする* in `com.adobe.fmdita.postprocess.version.PostProcessVersionObservation`.

1. プロパティ検証を有効にする (`validation.enabled`) を Day CQ Tagging Service で使用します。

1. 以下を確認します。 `uuid.regex` プロパティフォルダーがに正しく設定されている `com.adobe.fmdita.config.ConfigManager`. 空白の場合は、デフォルト値 ( `^GUID-(?<id>.*)`.
1. 別のロガーを `com.adobe.fmdita.uuid.upgrade.UuidUpgrade` ブラウザーの応答は、 `/content/uuid-upgrade/logs`.

### 手順 2：移行の実行と検証

#### 移行パッケージをインストールします。

![移行時のシステムアップグレードタブ](assets/migration-system-upgrade.png){width="800" align="left"}

* 選択 **システムのアップグレード** 移行を実行するには、左のパネルからを選択します。 より小さいデータを含むフォルダーを起動してから、で実行します。 `/content/dam`.

* 選択 **レポートをダウンロード** 移行の実行中に、フォルダ内のすべてのファイルが正しくアップグレードされたかどうか、およびそのフォルダに対してのみすべての機能が機能するかどうかを確認します。


>[!NOTE]
>
> コンテンツの移行は、フォルダーレベルで実行するか、完了してから実行できます `/content/dam` または同じフォルダー上（移行を再実行）

また、DITA コンテンツで使用した画像やグラフィックなど、すべてのメディアアセットに対しても、コンテンツの移行を確実におこなうことが重要です。

#### ベースラインとレビューの移行

選択 **ベースライン/レビューアップグレード** 左のパネルから、ベースラインを移行し、フォルダーレベルでレビューします。

![移行のベースラインとレビュータブ](assets/migration-baseline-review-upgrade.png){width="800" align="left"}


### 手順 3：設定の復元

サーバーが正常に移行されたら、後処理、タグ付け、および次のワークフロー（移行時に最初に無効になったその他すべてのワークフローを含む）を有効にして、サーバー上で作業を続行します。

* DAM アセットの更新ワークフロー
* DAM メタデータワークフロー

>[!NOTE]
>
>移行前に一部のファイルが処理されないか破損し、移行前に破損し、移行後も破損したままになる場合。

## 移行の検証

移行が完了したら、「 」を選択します。 **システムアップグレードの検証** 左側のパネルから、移行前と移行後に出力ファイルを検証し、移行が正常に完了していることを確認します。

![移行時のシステムアップグレードタブの検証](assets/migration-validate-system-upgrade.png){width="800" align="left"}


1. 移行が完了したら、圧縮を実行してディスク領域のほとんどを再利用できます ( `https://experienceleague.adobe.com/docs/experience-manager-65/deploying/deploying/revision-cleanup.html?lang=en`) をクリックします。

