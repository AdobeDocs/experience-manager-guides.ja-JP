---
title: 以前のバージョンのオンプレミスでのAdobe Experience Manager Guidesのアップグレード
description: Adobe Experience Manager Guidesのアップグレード方法について説明します
feature: Installation
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '3159'
ht-degree: 0%

---

# Adobe Experience Manager Guides オンプレミスのアップグレード（バージョン 4.4.0以前）

この記事では、**Adobe Experience Manager Guides** バージョン **を4.6.0**&#x200B;より前（最大&#x200B;**4.4.0**&#x200B;を含む）にアップグレードする手順について説明します。

3.8.5 **より前のバージョン**&#x200B;を使用している場合は、**Experience Manager Guides ヘルプのPDF アーカイブ**&#x200B;で入手できる製品固有のインストールガイドの[Adobe Experience Manager Guidesのアップグレード &#x200B;](https://helpx.adobe.com/xml-documentation-for-experience-manager/archive.html)の節を参照してください。

新しいリリースのアップグレード手順については、[&#x200B; バージョン 4.6.0以降のAdobe Experience Manager Guidesのアップグレード &#x200B;](./upgrade-aemg-latest-version.md)を参照してください。

## 事前準備

>[!NOTE]
>
> Experience Manager Guides バージョンをアップグレードする前に、ライセンス版の製品に固有の手順をアップグレードし、AEM サービスパックをインストールする必要があります。

>[!IMPORTANT]
>
> アップグレードを開始する前に、**完全なシステムバックアップ**&#x200B;を実行して、データの損失を回避します。

## この記事で説明したパスのアップグレード

この記事には、次の手順が含まれます。

- [バージョン 4.4.0へのアップグレード](#upgrade-to-version-440)
- [バージョン 4.3.1.5にアップグレード](#upgrade-to-version-4315)
- [バージョン 4.3.1へのアップグレード](#upgrade-to-version-431)
- [バージョン 4.3.0へのアップグレード](#upgrade-to-version-430)
- [バージョン 4.2.1へのアップグレード](#upgrade-to-version-421)
- [バージョン 4.2へのアップグレード](#upgrade-to-version-42)
- [3.8.5からバージョン 4.0へのアップグレード](#upgrade-from-version-385-to-version-40)


## グローバル前提条件（手順で特に指定されていない限り、すべてのアップグレードに適用されます）

アップグレードプロセスを実行する前に、次のタスクを実行します。

1. レビュー用に開いているトピックにレビューコメントを読み込みます。
2. アクティブなレビューをすべて閉じます。
3. すべての翻訳タスクを閉じます。
4. 以前のバージョン（メジャーリリースまたはパッチリリース）にインストールされているExperience Manager Guides ホットフィックスをすべてアンインストールします。

一部のアップグレードでは、翻訳アップグレードクラスのログレベルを`INFO`に設定し、別のファイルにログを記録する必要があります。これらの要件は、関連するアップグレード手順で説明します。

## バージョン 3.8.5からバージョン 4.0へのアップグレード

>[!NOTE]
>
> このアップグレードプロセスは、**3.8.5**&#x200B;から&#x200B;**4.0**&#x200B;まで&#x200B;**のみ**&#x200B;適用できます。 **3.4以降**&#x200B;から&#x200B;**3.8.5**&#x200B;へのアップグレードについては、[Adobe Experience Manager Guides ヘルプ PDF アーカイブ &#x200B;](https://helpx.adobe.com/xml-documentation-for-experience-manager/archive.html)で入手できる製品固有のインストールガイドを参照してください。

Experience Manager Guides バージョン **3.8.5**&#x200B;を使用している場合は、以前のバージョンをアンインストールせずにバージョン **4.0**&#x200B;にアップグレードできます。

### バージョン 4.0のインストール前

1. Experience Manager Guidesがバージョン **3.8.5**&#x200B;であることを確認します。
2. アップグレードスクリプトパッケージをダウンロードします。Adobe Software Distribution Portalで「**」XML Documentation solution 4.0 Upgrade Package 「**」を検索します（`.zip`をダウンロード）。
3. **Package Manager**&#x200B;を介してパッケージをAEMにアップロードし、インストールします。
4. アップグレードパッケージをインストールしたら、以下に説明する順序でスクリプトを実行します。

**アップグレードの互換性を確認するAPI**

このAPIは、現在のシステムのステータスを評価し、アップグレードが可能かどうかをレポートするように設計されています。 このスクリプトを実行するには、次のエンドポイントをトリガーします。

| 終点 | /bin/dxml/upgrade/3xto4x/report |
| --- | --- |
| リクエストタイプ | **GET** <br> **注**：管理者としてAEM インスタンスにログインしているWeb ブラウザーを使用できます。 |
| 期待される応答 | -   必要なノードをすべて移動できる場合は、合格チェックを受け取ります。 <br>-   ノードがターゲットの場所に存在する場合、関連するエラーが表示されます。 リポジトリ \（delete node /var/dxml\）をクリーンアップし、アップグレードパッケージを再インストールしてから、このエンドポイントを再度トリガーします。 <br>**注意：**&#x200B;これは、3.x Experience Manager Guidesではターゲットの場所が以前に使用されていないため、一般的なエラーではありません。 <br> -   このスクリプトが成功しない場合は、続行せずにカスタマーサクセスチームに報告してください。 |

**システム データ移行API**

このAPIは、**移行マッピング** セクションで説明されているように、システム データを移行するように設計されています。

1. アップグレード互換性の確認APIが失敗した場合は、このスクリプトを実行しないでください\（続行しないでください\）。
1. アップグレード互換性を確認APIが正常に返されたら、アップグレード スクリプトを実行できます。

| 終点 | /bin/dxml/upgrade/3xto4x |
| --- | --- |
| リクエストタイプ | **POST** <br>**注意**：このスクリプトはPOST リクエストであるため、Postmanなどのエージェントを介して実行する必要があります。 |
| 期待される応答 | -   移行が正常に完了したら、XML Documentation ソリューション バージョン 4.0.<br>-   エラーが発生した場合は、最後のチェックポイントに復元し、エラーログとAPI出力をカスタマーサクセスチームと共有します。 |


**移行マッピング**

このAPIは、ソースの場所にあるすべてのデータをターゲットの場所に移行します。

| ソース | ターゲット |
|------|------|
| /content/fmdita | /var/dxml |
| /content/dxml | /var/dxml |
| /etc/fmdita | /libs/fmdita |

### バージョン 4.0のインストール

1. アップグレード手順が正常に実行された場合にのみ、バージョン 4.0をインストールします。
1. [Adobe Software Distribution Portal](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)から4.0 バージョンのパッケージをダウンロードします。

   - UUID バージョンのソフトウェアを使用している場合は、「4.0 UUID Release for XML Documentation solution for AEM 6.5」を検索します。
   - 非UUID バージョンのソフトウェアを使用している場合は、「4.0 Non-UUID Release for XML Documentation solution for AEM 6.5」を検索します。
CRX Package Managerを使用して、パッケージを既存のAEM サーバーインスタンスにアップロードし、インストールします。

     >[!NOTE]
     >
     > すべてのシステムコンポーネントが起動するのを待ちます。

1. パッケージのインストール後、ブラウザーキャッシュをクリアします。
1. DispatcherがAEM オーサーインスタンスで設定されている場合は、次の手順を実行します。
   - Dispatcher ルールで次の処理が行われることを確認します。
   - URL パターン /home/users/\*/preferencesはホワイトリストに登録されています。
   - URL パターン /libs/cq/security/userinfo.jsonはキャッシュされません。
1. Dispatcher キャッシュ \（キャッシュされた`clientlibs`個の\）をクリアします。

## バージョン 4.2へのアップグレード

バージョン **4.0**、**4.1**&#x200B;または&#x200B;**4.1.x**&#x200B;を使用している場合は、バージョン **4.2**&#x200B;に直接アップグレードできます。

### バージョン 4.2のインストール前

Experience Manager Guides 4.2のアップグレードプロセスを開始する前に、次のことを確認してください。

1. Experience Manager Guides **4.0**、**4.1**&#x200B;または&#x200B;**4.1.x**&#x200B;にアップグレードしました。
2. すべての翻訳タスクを閉じました。
3. `INFO`のログレベルを`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript`に設定し、新しいログファイル （例：`logs/translation_upgrade.log`）にログを記録します。

   >[!NOTE]
   > 
   > アクティブなレビューはすべて閉じる必要があります。 4.2へのアップグレード中にレビューが閉じられていない場合、古い進行中のレビュータスクは引き続き古いレビューページを開くことができます。アップグレード後に作成された新しいレビュータスクには、最新の機能更新が表示されます。

### バージョン 4.2のインストール

1. **Adobe Software Distribution Portal**&#x200B;から[4.2](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html) パッケージをダウンロードします。
2. 4.2 パッケージをインストールします。
3. インストール後、ログに次のメッセージが表示されるまで待ちます。

   `Completed the post deployment setup script`

   上記のメッセージは、すべてのインストール手順が完了したことを示します。

   次のいずれかのエラーが発生した場合は、カスタマーサクセスに報告してください。

   - `Error in post deployment setup script`
   - `Exception while porting the translation MAP`
   - `Unable to port translation map from v1 to v2 for property`

4. （オプション）バージョン 4.2でリリースされたOxygen コネクタプラグインをアップグレードします。
5. パッケージのインストール後、ブラウザーキャッシュをクリアします。
6. 次の節で詳しく説明しているように、カスタマイズのアップグレードを続行します。

### バージョン 4.2のインストール後

>[!IMPORTANT]
>
> アップグレードされたサーバーにハイテク テンプレートが表示されない。 ハイテク テンプレートをサーバーに含めるには、それをコピーできます：Source: `/libs/fmdita/pdf/Hi-Tech` Destination: `/content/dam/dita-templates/pdf`.

次に、[一般的なアップグレード後タスク（すべてのバージョン） &#x200B;](#common-postupgrade-tasks-all-versions)の共有アップグレード後タスクに進みます。

## バージョン 4.2.1へのアップグレード

>[!TIP]
>
> バージョン **4.2.14.2.1.3**&#x200B;の上に&#x200B;**ホットフィックス**&#x200B;をインストールすることをお勧めします。

**4.1**、**4.1.x**、**4.2**&#x200B;のいずれかを使用している場合は、バージョン **4.2.1**&#x200B;に直接アップグレードできます。

>[!NOTE]
>
> 後処理とインデックス作成には数時間かかる場合があります。 オフピーク時にアップグレードを開始します。

### バージョン 4.2.1のインストール前

1. Experience Manager Guides **4.1**、**4.1.x**&#x200B;または&#x200B;**4.2**&#x200B;にアップグレードします。
2. すべての翻訳タスクを閉じます。
3. `INFO`のログレベルを`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript`に設定し、新しいファイル （例：`logs/translation_upgrade.log`）にログを記録します。

>[!NOTE]
>
> アクティブなすべてのレビューを閉じる必要があります（4.2と同じ動作）。

### バージョン 4.2.1のインストール

1. **Adobe Software Distribution Portal**&#x200B;から[4.2.1](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html) パッケージをダウンロードします。
2. 4.2.1 パッケージをインストールします。
3. オプションで、翻訳マップのアップグレードジョブをトリガーします。 詳しくは、[&#x200B; サーブレットを介したスクリプトのトリガーを有効にする](#enable-trigger-of-script-via-a-servlet)を参照してください。

4. インストール後、ログで`Completed the post deployment setup script`を待ちます。

   これらのエラーをカスタマーサクセスに報告します。

   - `Error in post deployment setup script`
   - `Exception while porting the translation MAP`
   - `Unable to port translation map from v1 to v2 for property`
5. （オプション） バージョン **4.2**&#x200B;でリリースされたOxygen コネクタプラグインのアップグレード
6. ブラウザーのキャッシュを消去します。
7. [一般的なアップグレード後のタスク（すべてのバージョン） &#x200B;](#common-postupgrade-tasks-all-versions)で続行します。

### バージョン 4.2.1のインストール後

>[!IMPORTANT]
>
> アップグレードされたサーバーにハイテク テンプレートが表示されない。 ハイテク テンプレートをサーバーに含めるには、それをコピーできます：Source: `/libs/fmdita/pdf/Hi-Tech` Destination: `/content/dam/dita-templates/pdf`.

[一般的なアップグレード後のタスク（すべてのバージョン） &#x200B;](#common-postupgrade-tasks-all-versions)および（必要に応じて） [&#x200B; マップの検索と置換に使用する既存のコンテンツのインデックス作成](#index-existing-content-for-map-find-and-replace)。


## バージョン 4.3.0へのアップグレード

バージョン 4.3.0へのアップグレードは、現在のバージョンのExperience Manager Guidesによって異なります。 バージョン 4.2または4.2.xを使用している場合は、バージョン 4.3.0に直接アップグレードできます。

>[!NOTE]
>
>後処理とインデックス作成には数時間かかる場合があります。 オフピーク時間中にアップグレードプロセスを開始することをお勧めします。

### バージョン 4.3.0のインストール前

Experience Manager Guides 4.3.0のアップグレードプロセスを開始する前に、次のことを確認してください。

1. Experience Manager Guides バージョン 4.2または4.2.xにアップグレードし、それぞれのインストール手順を完了しました。
1. すべての翻訳タスクを閉じました。

### バージョン 4.3.0のインストール

1. [Adobe Software Distribution Portal](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)から4.3.0 バージョンのパッケージをダウンロードします。
1. バージョン 4.3.0 パッケージをインストールします。
1. パッケージのインストール後、ブラウザーキャッシュをクリアします。
1. フォルダープロファイルの「`ui_config.json`XML Editor Configuration **」タブから** ファイルをアップグレードします。

### バージョン 4.3.0のインストール後

次の操作を行います。

- [一般的なアップグレード後のタスク（すべてのバージョン） &#x200B;](#common-postupgrade-tasks-all-versions)
- 該当する場合：[壊れたリンク レポートの既存のコンテンツを後処理](#post-process-existing-content-for-broken-link-report)

## バージョン 4.3.1へのアップグレード

バージョン 4.3.1へのアップグレードは、現在のバージョンのExperience Manager Guidesによって異なります。 バージョン 4.3.0、4.2、または4.2.1を使用している場合は、バージョン 4.3.1に直接アップグレードできます。

>[!NOTE]
>
>後処理とインデックス作成には数時間かかる場合があります。 オフピーク時間中にアップグレードプロセスを開始することをお勧めします。

### バージョン 4.3.1のインストール前

Experience Manager Guides 4.3.1のアップグレードプロセスを開始する前に、次のことを確認してください。

1. Experience Manager Guides バージョン 4.3.0、4.2、または4.2.1にアップグレードし、それぞれのインストール手順を完了しました。
1. （オプション）すべての翻訳タスクを閉じました。
1. **クラスのログレベルを** INFO`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript`に変更し、これらのログを新しいログファイル （例：`logs/translation_upgrade.log`）に追加しました。

### バージョン 4.3.1のインストール

1. [Adobe Software Distribution Portal](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)から4.3.1 バージョンのパッケージをダウンロードします。
1. バージョン 4.3.1 パッケージをインストールします。
1. オプションで、翻訳マップのアップグレードジョブをトリガーします。 詳しくは、[&#x200B; サーブレットを介したスクリプトのトリガーを有効にする](#enable-trigger-of-script-via-a-servlet)を参照してください。
1. インストール後、ログで`Completed the post deployment setup script`を待ちます。
これらのエラーをカスタマーサクセスに報告します。\
   `Error in post deployment setup script`、`Exception while porting the translation MAP`、`Unable to port translation map from v1 to v2 for property`
1. （オプション） バージョン **4.2**&#x200B;でリリースされたOxygen コネクタプラグインをアップグレードします。
1. ブラウザーのキャッシュを消去します。

### バージョン 4.3.1のインストール後

次の操作を行います。

- [一般的なアップグレード後のタスク（すべてのバージョン） &#x200B;](#common-postupgrade-tasks-all-versions)
- 該当する場合：[&#x200B; マップの検索と置換に使用する既存コンテンツのインデックス &#x200B;](#index-existing-content-for-map-find-and-replace)
- 該当する場合：[壊れたリンク レポートの既存のコンテンツを後処理](#post-process-existing-content-for-broken-link-report)


## バージョン 4.3.1.5にアップグレード

バージョン **4.3.1.5** 4.3.1 **を使用している場合は、直接**&#x200B;にアップグレードできます。

### バージョン 4.3.1.5をインストール

1. **4.3.1.5** Adobe Software Distribution Portal[から](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html) パッケージをダウンロードします。
2. 4.3.1.5 パッケージをインストールします。
3. インストールプロセスが正常に完了するのを待ちます。
4. 次の節で詳しく説明しているように、カスタマイズのアップグレードを続行します。

## バージョン 4.3.1.5のインストール後

>[!NOTE]
>
>org.apache.velocity バンドルを使用する場合は、バンドルをアップロードする前に次の手順を実行します。
> 1. `<server>:<port>/system/console/bundles` に移動します。
> 1. org.apache.velocityを検索します。
> 1. 検索したバンドルをアンインストールします。
> 1. 必要なvelocity バンドルをインストールします。

1. アップグレードが完了したら、新しいアプリケーションコードと一致するように、カスタマイズ/オーバーレイのいずれかが検証および更新されていることを確認します。 いくつかの例を以下に示します。
   - `/libs/fmdita`または` /libs`からオーバーレイされたコンポーネントは、新しい製品コードと比較し、`/apps`の下のオーバーレイファイルで更新する必要があります。
   - 製品から使用されるclientlib カテゴリは、変更について確認する必要があります。 上書きされた設定\（以下の例\）は、最新の機能を取得するために、最新の設定と比較する必要があります。
   - `elementmapping.xml`
   - `ui\_config.json\` （フォルダープロファイルで設定されている可能性があります\）
   - 修正済み`com.adobe.fmdita.config.ConfigManager`


## バージョン 4.4.0へのアップグレード

**4.3.1**、**4.3.0**、**4.2**&#x200B;または&#x200B;**4.2.1 （ホットフィックス**） **を使用している場合は、直接4.2.1.34.4.0**&#x200B;にアップグレードできます。

>[!NOTE]
>
>後処理とインデックス作成には数時間かかる場合があります。 オフピーク時間中にアップグレードプロセスを開始することをお勧めします。

### バージョン 4.4.0のインストール前

Experience Manager Guides 4.4.0のアップグレードプロセスを開始する前に、次のことを確認してください。

1. Experience Manager Guides バージョン 4.3.1、4.3.0、または4.2.1 （ホットフィックス 4.2.1.3）にアップグレードし、それぞれのインストール手順を完了しました。
1. （オプション）すべての翻訳タスクを閉じました。
1. **クラスのログレベルを** INFO`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript`に変更し、これらのログを新しいログファイル （例：`logs/translation_upgrade.log`）に追加しました。

### バージョン 4.4.0のインストール

1. [Adobe Software Distribution Portal](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)から4.4.0 バージョンパッケージをダウンロードします。
2. 4.4.0 パッケージをインストールします。
3. オプションで、翻訳マップのアップグレードジョブをトリガーします。 詳しくは、[&#x200B; サーブレットを介したスクリプトのトリガーを有効にする](#enable-trigger-of-script-via-a-servlet)を参照してください。
4. パッケージのインストールが完了したら、ログに次のメッセージが表示されるまで待ちます。

   `Completed the post deployment setup script`

   上記のメッセージは、インストールのすべての手順が完了したことを示します。

   次のエラー接頭辞のいずれかが発生した場合は、カスタマーサクセスチームに報告してください。

   - `Error in post deployment setup script`
   - `Exception while porting the translation MAP`
   - `Unable to port translation map from v1 to v2 for property`
5. （オプション） バージョン **4.4.0**&#x200B;でリリースされたOxygen コネクタプラグインをアップグレードします。
6. ブラウザーのキャッシュを消去します。
7. 次でログイン：

   - [アップグレード後の一般的なタスク（すべてのバージョン）](#common-ppostupgrade-tasks-all-versions)
   - [&#x200B; マップ検索と置換のための既存コンテンツのインデックス作成](#index-existing-content-for-map-find-and-replace) （該当する場合のみ）
   - [壊れたリンク レポートの既存コンテンツを後処理](#post-process-existing-content-for-broken-link-report) （該当する場合のみ）
   - [翻訳マップのアップグレード（サーブレットトリガー） &#x200B;](#translation-map-upgrade-servlet-trigger) （該当する場合のみ）


## アップグレード後の一般的なタスク（すべてのバージョン）

Experience Manager Guidesをインストールした後、新しくインストールしたバージョンから設定に適用可能な設定を結合する必要がある場合があります。

>[!NOTE]
>
> **DAM アセットの更新** ワークフローモデルはカスタマイズできます。 カスタマイズがある場合は、モデルの作業コピーのExperience Manager Guidesの変更と同期します。

### DAM アセットの更新ワークフローの検証（後処理の変更）

1. AEM Workflow Models UIを開きます（ソースに示す例）。\
   `http://<host>:4502/libs/cq/workflow/admin/console/content/models.html`
2. **DAM アセットの更新ワークフロー**&#x200B;を選択します。
3. 「**編集**」を選択します。
4. **DXML Post Process Initiator** コンポーネントが存在する場合は、カスタマイズが同期されていることを確認します。
5. コンポーネントが存在しない場合は、次のように挿入します。
   1. 「**コンポーネントを挿入**」（最後の手順としてガイドの後処理を担当）をクリックします。
   2. **プロセス手順**&#x200B;を設定します。
      **共通タブ**
- タイトル：`DXML Post Process Initiator`
 – 説明：`DXML post process initiator step which will trigger a sling job for DXML post-processing of the modified/created asset`
      **プロセスタブ**
- プロセス：`DXML Post Process Initiator`を選択
- `Handler Advance`を選択
- `Done`を選択
   3. 変更を完了したら、右上の&#x200B;**同期**&#x200B;をクリックします。 成功の通知が届きます。

>[!NOTE]
>
> 更新して、カスタマイズされた変更とExperience Manager Guides後処理ステップが最終的なワークフローモデルに存在することを確認します。

### ランチャー設定の検証

1. AEM Workflow インターフェイスに移動し、**Launchers**&#x200B;を開きます。

```http
    http://localhost:4502/libs/cq/workflow/content/console.html
```

1. **DAM アセットの更新ワークフロー**&#x200B;に対応する次の2つのランチャー\（アクティブにする必要がある場合\）を検索して変更します。

1. 条件&#x200B;*の* DAM アセット更新ワークフロー&#x200B;**の「** Node Created`"jcr:content/jcr:mimeType!=video"`」のランチャー – 「Globbing」の値は次のようにする必要があります。

   ```json
   /content/dam(/((?!/subassets|/translation_output).)*/)renditions/original
   ```

   - `excludeList`には`"event-user-data:changedByWorkflowProcess"`が必要です。
   - 条件「*」の* DAM アセットの更新ワークフロー – **の** Node Modified`jcr:content/jcr:mimeType!=video`のランチャーです。「Globbing」の値は次のとおりです。

   ```json
   /content/dam(/((?!/subassets|/translation_output).)*/)renditions/original
   ```

   - `excludeList`には`"event-user-data:changedByWorkflowProcess"`が必要です。

### オーバーレイとカスタマイズの検証

アップグレード完了後：

1. アップグレードが完了したら、新しいアプリケーションコードと一致するように、カスタマイズ/オーバーレイのいずれかが検証および更新されていることを確認します。 いくつかの例を以下に示します。
   - /libs/fmditor/libsbからオーバーレイされたコンポーネントは、新しい製品コードと比較し、/appsの下のオーバーレイファイルで更新する必要があります。
   - 製品から使用されるclientlib カテゴリは、変更について確認する必要があります。 上書きされた設定\（以下の例\）は、最新の機能を取得するために、最新の設定と比較する必要があります。
   - elementmapping.xml
   - ui\_config.json\（フォルダープロファイルで設定されている可能性があります\）
   - 修正済み`com.adobe.fmdita.config.ConfigManager`

1. damAssetLuceneでカスタマイズを追加した場合は、再度適用する必要がある場合があります。 これらの変更を行った後、reindexをtrueに設定します。 これにより、カスタマイズを使用して、既存のすべてのノードが再インデックスされます。 完了すると、再インデックスフラグは再びfalseに設定されます。 システム内のアセットの数によっては、この処理に数時間かかる場合があります。

## マップの検索と置換のための既存コンテンツのインデックス作成

このセクションでは、新しい&#x200B;**マップレベルの検索および置換**&#x200B;機能を有効にするために使用された繰り返し&#x200B;**インデックス作成**&#x200B;手順を統合します。

**インデックス作成をスキップできる場合**

ソースには、アップグレードパスに応じて「スキップ」ノートが含まれます（例えば、「4.3.0または4.3.1からアップグレードする場合は、これらの手順を実行する必要はありません」や同様のノートが含まれます）。 アップグレードセクションに記載されているスキップノートに従います。

既存のコンテンツのインデックスを作成するには、次の手順を実行し、マップレベルで新しい検索と置換のテキストを使用します。

1. POST リクエストを実行します（認証付き）。

```http
POST http://<server:port>/bin/guides/map-find/indexing
```

ソースでサポートされているオプションのパラメーター：

- 特定のマップパスのインデックス作成（デフォルトでは、すべてのマップのインデックス作成）:

  ```http
  POST http://<server:port>/bin/guides/map-find/indexing?paths=<map_path_in_repository>
  ```

- ルートフォルダー（およびそのサブフォルダー）の下にDITA マップをインデックス化します。

  ```http
  POST http://<server:port>/bin/guides/map-find/indexing?root=/content/dam/test
  ```

  >[!NOTE]
  >
  > `paths`と`root`の両方が渡された場合は、`paths`のみが考慮されます。

1. APIは`jobId`を返します。 ステータスを確認するには、GET リクエストを送信します。

   ```http
   GET http://<server:port>/bin/guides/map-find/indexing?jobId={jobId}
   ```

   期待される完了動作：

   - 完了時に、GETは正常に応答し、マップが失敗したかどうかを示します。
   - サーバーログで正常にインデックス付けされたマップを確認します。

### damAssetLucene インデックス作成が完了していることを確認します（該当する場合）

ソースは、damAssetLuceneのインデックス作成にはデータサイズに応じて時間がかかる可能性があり、`reindex`が`false`の下にある場合に完了を確認できることを指摘しています。

`http://<server:port>/oak:index/damAssetLucene`

`damAssetLucene`でカスタマイズを追加した場合、インデックス再作成完了後に再度適用する必要がある場合があります。

### 「読み取りまたは100000 ノードを超えてトラバースしたクエリ」の回避策（ジョブが失敗した場合）

インデックス作成ジョブが失敗し、エラーが表示される場合：

「クエリは、100000のノードよりも多くのノードを読み取るかトラバースしました。 他のタスクへの影響を避けるために、処理は停止されました。」

ソースから次の回避策を試してください。

1. `damAssetLucene` oak インデックスで、`indexNodeName=true`にブール型プロパティ `/oak:index/damAssetLucene/indexRules/dam:Asset`を追加します。
2. `excerpt`という名前の新しいノードを`/oak:index/damAssetLucene/indexRules/dam:Asset/properties`の下に追加し、ソースに示すようにプロパティを設定します。
   - `name=rep:excerpt`
   - `propertyIndex=true`
   - `notNullCheckEnabled=true`
3. `damAssetLucene`を設定して`reindex=true`のインデックスを再作成し、再度`false`になるまで待ちます（時間がかかる場合があります）。
4. インデックス作成スクリプトをもう一度実行します（POSTとジョブトラッキングを繰り返します）。

## リンク切れレポート用の既存コンテンツの後処理

このセクションでは、**壊れたリンクレポート**&#x200B;を有効にするために使用された繰り返しの&#x200B;**後処理**&#x200B;手順を統合します。

**後処理をスキップできる場合**

ソースには、アップグレードパスに応じて「スキップ」メモが含まれます（例えば、「4.3.0からアップグレードする場合は、これらの手順を実行する必要はありません」、「4.3.0または4.3.1からアップグレードする場合は」など）。 アップグレードセクションに記載されているスキップノートに従います。

リンク切れレポートを有効にするには、次の手順を実行します。

1. （オプション）大規模なリポジトリの場合はOak queryLimitReadsを増やします

   **100,000個を超えるDITA ファイル**&#x200B;がある場合、`queryLimitReads`の`org.apache.jackrabbit.oak.query.QueryEngineSettingsService`をアセット数より大きい値に更新し（例：`200000`）、再配置して続行します。

   | PID | プロパティキー | プロパティの値 |
   |---|---|---|
   | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitReads | 値：200000 <br> デフォルト値：100000 |

1. すべてのファイルに対して後処理を実行するには、次のAPIを実行します。

   | 終点 | /bin/guides/reports/upgrade |
   |---|---|
   | リクエストタイプ | **POST**&#x200B;このスクリプトはPOST リクエストであるため、Postmanなどのエージェントを介して実行する必要があります。 |
   | 期待される応答 | APIはjobIdを返します。 ジョブのステータスを確認するには、ジョブ IDを持つGET リクエストを同じエンドポイントに送信できます。<br> サンプル URL: `http://<server:port>/bin/guides/reports/upgrade` |

   | 終点 | /bin/guides/reports/upgrade |
   |---|---|
   | リクエストタイプ | **GET** |
   | Param | jobId：以前の投稿リクエストから受信したjobIdを渡します。 |
   | 期待される応答 | - ジョブが完了すると、GET リクエストは正常に応答します。 <br> - エラーが発生した場合は、エラーログとAPI出力をカスタマーサクセス チームと共有します。  <br> サンプル URL: `http://<server:port>/bin/guides/reports/upgrade?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678` |

1. 手順1で変更した場合は、デフォルト値または以前の既存の値`queryLimitReads`に戻します。

## サーブレットを使用したスクリプトのトリガーを有効にする

いくつかのバージョンには、サーブレットを使用して翻訳マップのアップグレードジョブをトリガーするオプションの手順が含まれています。 このセクションでは、繰り返された手順を統合し、ソースで提供されるすべての詳細を含みます。


>[!NOTE]
>
> 4.3.0または4.3.1からアップグレードする場合は、これらの手順を実行する必要はありません。

投稿：

```
http://localhost:4503/bin/guides/script/start?jobType=translation-map-upgrade
```

応答：

```
{
"msg": "Job is successfully submitted and lock node is created for future reference",
"lockNodePath": "/var/dxml/executor-locks/translation-map-upgrade/1683190032886",
"status": "SCHEDULED"
}
```

上記の応答JSONでは、キー`lockNodePath`は、送信されたジョブを指すリポジトリで作成されたノードへのパスを保持します。 ジョブが完了すると自動的に削除されます。それまでは、このノードを参照してジョブの現在のステータスを確認できます。

次の手順に進む前に、`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript Completed porting of translation map from V1 to V2`と`com.adobe.fmdita.xmltranslation.ots.TranslationMapUpgradeOTS Completed the thread to upgrade translation map from V1 to V2`を探します。

>[!NOTE]
>
> ノードがまだ存在し、ジョブのステータスを確認する必要があります。

**GET**: `http://<aem_domain>/var/dxml/executor-locks/translation-map-upgrade/1683190032886.json`


### &#39;fmdita rewriter&#39;競合を処理する手順

Experience Manager Guidesには、クロスマップリンク用に生成されたリンクを処理するためのカスタム Sling リライターモジュール （`fmditarewriter`）が含まれています。

コードベースに別のカスタム Sling リライターがある場合：

- Guidesでは`order`が使用されるため、**の値**&#x200B;を50`order=50`より大きくしてください。
- このアップグレード中、`order`の値が`1000`から`50`に変更されるので、既存のカスタムリライター（ある場合）を`fmditarewriter`と統合する必要があります。

