---
title: Adobe Experience Manager Guidesのアップグレード
description: Adobe Experience Manager Guidesのアップグレード方法について説明します
feature: Installation
role: Admin
level: Experienced
source-git-commit: 453da51a42984b912547570f2e1de70806b41171
workflow-type: tm+mt
source-wordcount: '1661'
ht-degree: 0%

---

# バージョン 4.6.0以降のAdobe Experience Manager Guidesのアップグレード

この記事では、Experience Manager Guides バージョン 4.6.0以降をアップグレードする手順について説明します。

>[!NOTE]
>
> 製品のライセンス版に固有のアップグレード手順に従います。

現在のバージョンのExperience Manager Guidesをバージョン 5.1.0 Service Pack 3にアップグレードできます。

- バージョン 5.1.0または5.1.xを使用している場合は、バージョン 5.1.0 Service Pack 3に直接アップグレードできます。
- バージョン 4.6.0、4.6.x、5.0.0、または5.0.xを使用している場合は、バージョン 5.1.0にアップグレードする必要があります。
- 4.6.0より前のバージョンを使用している場合は、アップグレード手順の詳細については、[&#x200B; バージョン 4.4.0以前のAdobe Experience Manager Guidesのアップグレード &#x200B;](./upgrade-aemg-prev-versions.md)を参照してください。

>[!NOTE]
>
> Experience Manager Guides バージョンをアップグレードする前に、AEM サービスパックをインストールする必要があります。

詳しくは、次の手順を参照してください。

- [バージョン 5.1.0へのアップグレード](#upgrade-to-version-510)
- [バージョン 5.0.0へのアップグレード](#upgrade-to-version-500)
- [バージョン 4.6.0へのアップグレード](#upgrade-to-version-460)

>[!IMPORTANT]
>
> アップグレードを開始する前に、完全なシステムバックアップを実行して、データの損失を回避します。


## バージョン 5.1.0へのアップグレード


>[!IMPORTANT]
>
> 現在AEM 6.5を使用しており、AEM 6.5 LTSに移行する予定がある場合は、Experience Manager Guides 5.1.0 アップグレードを進める前に、必ずAEM アップグレードを完了してください。 詳しくは、[Adobe Experience Manager（AEM） 6.5 LTS](https://experienceleague.adobe.com/ja/docs/experience-manager-65-lts/content/implementing/deploying/upgrading/upgrade)へのアップグレードを参照してください。

**前提条件**

>[!NOTE]
>
>5.1.0 Service Pack 3にアップグレードする場合は、Experience Manager Guidesのバージョン 5.1.0または5.1.xにインストールする必要があります。 5.1.0 Service Pack 3 リリースのアップグレードプロセスは、5.1.0 リリースと同じ手順に従います。

Experience Manager Guides 5.1.0のアップグレードプロセスを開始する前に、次のことを確認してください。

1. Experience Manager Guides バージョン 4.6.3、4.6.4、5.0.0、または5.0.0 Service Pack 1にアップグレードしました。
1. （オプション）すべての翻訳タスクを閉じました。
1. **クラスのログレベルを** INFO`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript`に変更し、これらのログを新しいログファイル （例：`logs/translation_upgrade.log`）に追加しました。

>[!NOTE]
>
> 後処理とインデックス作成には数時間かかる場合があります。 オフピーク時間中にアップグレードプロセスを開始することをお勧めします。

**バージョン 5.1.0**&#x200B;のインストール

[Adobe Software Distribution Portal](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)から5.1.0 バージョンのパッケージをダウンロードし、[&#x200B; インストールおよびインストール後のアップグレードワークフロー](#installation-and-post-installation-upgrade-workflow)の手順に従って、アップグレードプロセスを完了します。


## バージョン 5.0.0へのアップグレード

>[!TIP]
>
> バージョン 5.0.0 Service Pack 3へのアップグレードは、現在のバージョンのExperience Manager Guidesによって異なります。 バージョン 5.0.0 Service Pack 2、5.0.0 Service Pack 1または5.0.0を使用している場合は、バージョン 5.0.0 Service Pack 3に直接アップグレードできます。 アップグレード手順は、バージョン 5.0.0と同じです。

>[!NOTE]
>
> 後処理とインデックス作成には数時間かかる場合があります。 オフピーク時間中にアップグレードプロセスを開始することをお勧めします。

**前提条件**

Experience Manager Guides 5.0.0のアップグレードプロセスを開始する前に、次のことを確認してください。

1. Experience Manager Guides バージョン 4.6.3、4.6.1、4.6.0、または4.4にアップグレードしました。
1. （オプション）すべての翻訳タスクを閉じました。
1. **クラスのログレベルを** INFO`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript`に変更し、これらのログを新しいログファイル （例：`logs/translation_upgrade.log`）に追加しました。


**バージョン 5.0.0**&#x200B;のインストール

[Adobe Software Distribution Portal](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)から5.0.0 バージョンのパッケージをダウンロードし、[&#x200B; インストールおよびインストール後のアップグレードワークフロー](#installation-and-post-installation-upgrade-workflow)の指示に従って、アップグレードプロセスを完了します。

## バージョン 4.6.0へのアップグレード

>[!TIP]
>
> バージョン 4.6.0、4.6.0 サービスパック 1または4.6.0 サービスパック 3に加えて4.6.0 サービスパック 4をインストールすることをお勧めします。 4.6.0 サービスパック 4 リリースのアップグレードプロセスは、4.6.0 リリースと同じ手順に従います。

バージョン 4.6.0へのアップグレードは、現在のバージョンのExperience Manager Guidesによって異なります。 バージョン 4.4.0、4.3.1、4.3.0、4.2、または4.2.1 （ホットフィックス 4.2.1.3）を使用している場合は、バージョン 4.6.0に直接アップグレードできます。

>[!NOTE]
>
> 後処理とインデックス作成には数時間かかる場合があります。 オフピーク時間中にアップグレードプロセスを開始することをお勧めします。

**前提条件**

Experience Manager Guides 4.6.0のアップグレードプロセスを開始する前に、次のことを確認してください。

1. Experience Manager Guides バージョン 4.3.1、4.3.0、または4.2.1 （ホットフィックス 4.2.1.3）にアップグレードしました。
1. （オプション）すべての翻訳タスクを閉じました。
1. **クラスのログレベルを** INFO`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript`に変更し、これらのログを新しいログファイル （例：`logs/translation_upgrade.log`）に追加しました。

**バージョン 4.6.0**&#x200B;のインストール

[Adobe Software Distribution Portal](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)から4.6.0 バージョンのパッケージをダウンロードし、[&#x200B; インストールおよびインストール後のアップグレードワークフロー](#installation-and-post-installation-upgrade-workflow)の手順に従って、アップグレードプロセスを完了します。

## インストールとインストール後のアップグレードワークフロー

### バージョンパッケージのインストール

バージョンパッケージをインストールするには、次の手順を実行します。

1. アップグレードするバージョンパッケージをインストールします。
1. トリガーを押して、翻訳マップのアップグレードジョブを開始します。 詳しくは、[&#x200B; サーブレットを介したスクリプトのトリガーを有効にする](#enable-trigger-of-script-via-a-servlet)を参照してください。

1. パッケージのインストールが完了したら、ログに次のメッセージが表示されるまで待ちます。

   `Completed the post deployment setup script`

   上記のメッセージは、インストールのすべての手順が完了したことを示します。

   次のエラーのいずれかが発生した場合は、カスタマーサクセスチームに報告してください。

   - デプロイメント後のセットアップ スクリプトでエラーが発生しました
   - 翻訳マップの書き出し中に例外が発生しました
   - プロパティのv1からv2への翻訳マップをポートできません
1. （オプション）アップグレードするバージョンでリリースされたOxygen コネクタプラグインをアップグレードします。
1. パッケージのインストール後、ブラウザーキャッシュをクリアします。

### インストール後のプロセス

Experience Manager Guidesをインストールした後、新しくインストールしたバージョンに適用できる様々な設定を設定に統合できます。

>[!NOTE]
>
> dam-update-asset モデルはカスタマイズできます。 ですから、カスタマイズが行われた場合は、カスタマイズとExperience Manager Guidesをモデルの作業コピーに同期させる必要があります。

**DAM アセットの更新ワークフロー\（後処理変更\）:**

1. URLを開く：

   ```
   http://localhost:4502/libs/cq/workflow/admin/console/content/models.html 
   ```

1. **DAM アセットの更新ワークフロー**&#x200B;を選択します。
1. 「**編集**」を選択します。
1. **DXML Post Process Initiator** コンポーネントが存在する場合は、カスタマイズが同期されていることを確認します。
1. **DXML Post Process Initiator** コンポーネントが存在しない場合は、次の手順を実行してコンポーネントを挿入します。

   - 「**コンポーネントを挿入** \（処理の最終ステップとしてExperience Manager Guides後処理を担当\）を選択します。
   - 以下の詳細を含む&#x200B;**プロセス手順**&#x200B;を設定します。

     **共通タブ：**

      - **タイトル：** DXML後処理イニシエータ

      - **説明**：変更または作成されたアセットのDXML後処理のSling ジョブをトリガーするDXML後処理イニシエータステップ

     **プロセスタブ**

      - 「**プロセス**」ドロップダウンから「**DXML Post Process Initiator**」を選択します
      - **ハンドラーの詳細**&#x200B;を選択
      - **完了**&#x200B;を選択

1. 変更を完了した後、右上の&#x200B;**同期**&#x200B;を選択します。 成功の通知が届きます。

   >[!NOTE]
   >
   > 更新して、カスタマイズされた変更とExperience Manager Guides後処理ステップが最終的なワークフローモデルに存在することを確認します。

1. **DAM アセットの更新ワークフロー**&#x200B;が検証されたら、対応するランチャー設定を確認します。 AEMのワークフローインターフェイスでランチャーを開きます。

   ```http
   http://localhost:4502/libs/cq/workflow/content/console.html
   ```

   **DAM アセットの更新ワークフロー**&#x200B;に対応する次の2つのランチャー\（アクティブにする必要がある場合\）を検索して変更します。

1. 条件&#x200B;*の* DAM アセット更新ワークフロー&#x200B;**の「** Node Created`"jcr:content/jcr:mimeType!=video"`」のランチャー – 「Globbing」の値は次のようにする必要があります。

   ```json
   /content/dam(/((?!/subassets|/translation_output).)*/)renditions/original
   ```

   - &#39;excludeList&#39;には`"event-user-data:changedByWorkflowProcess"`を指定する必要があります。
   - 条件「*」の* DAM アセットの更新ワークフロー – **の「** Node Modified`jcr:content/jcr:mimeType!=video`」のランチャー。Globbing値は次のとおりです。

   ```json
   /content/dam(/((?!/subassets|/translation_output).)*/)renditions/original
   ```

   - `excludeList`には`"event-user-data:changedByWorkflowProcess"`が必要です。

1. アップグレードが完了したら、新しいアプリケーションコードと一致するように、カスタマイズ/オーバーレイのいずれかが検証および更新されていることを確認します。 いくつかの例を以下に示します。
   - `/libs/fmditaor/libsshould`からオーバーレイされたコンポーネントは、新しい製品コードと比較され、更新は/アプリの下のオーバーレイファイルで行う必要があります。
   - 製品から使用されている`clientlib` カテゴリは、変更を確認する必要があります。 最新の機能を取得するには、上書きされた設定`\(examples below\)`を最新の設定と比較する必要があります。
   - elementmapping.xml
   - `ui\_config.json\(may have been set in folder profiles\)`
   - 修正済み`com.adobe.fmdita.config.ConfigManager`

1. damAssetLuceneでカスタマイズを追加した場合は、再度適用する必要がある場合があります。 これらの変更を行った後、reindexをtrueに設定します。 これにより、カスタマイズを使用して、既存のすべてのノードが再インデックスされます。 完了すると、再インデックスフラグは再びfalseに設定されます。 システム内のアセットの数によっては、この処理に数時間かかる場合があります。

### Experience Manager Guides インデックスを再インデックス化する手順

1. `crx/de`を開き、インデックスパス `/oak:index/guidesAssetProperties`に移動します
2. 再インデックスプロパティを`true` （`false` デフォルト）に設定し、**すべて保存**&#x200B;をクリックします。
3. 再インデックスが完了すると、再インデックス プロパティが`false`に設定され、再インデックス数が1増加します。

   >[!NOTE]
   >
   > データ量によっては数分かかる場合があります。
4. 他の追加または変更されたインデックスに対しても、同じ手順を実行します：`guidesBulkActivation`、`guidesPeerLinkIndex`、および`guidesKonnectTemplateIndex`。

### 既存のコンテンツをインデックス化する手順

既存のコンテンツのインデックスを作成するには、次の手順を実行します。

- サーバー\（正しい認証\）に対してPOST リクエストを実行します – `http://<server:port\>/bin/guides/map-find/indexing`。 （オプション：マップの特定のパスを渡してインデックスを作成できます。デフォルトでは、すべてのマップにインデックスが付けられます||例：`https://<Server:port\>/bin/guides/map-find/indexing?paths=<map\_path\_in\_repository\>`）

- APIは`jobId`を返します。 ジョブのステータスを確認するには、ジョブ IDを持つGET リクエストを同じエンドポイント `http://<server:port\>/bin/guides/map-find/indexing?jobId=\{jobId\}`\（例：` http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`）に送信できます

- ジョブが完了すると、上記のGET リクエストは成功して応答し、マップが失敗した場合に言及します。 正常にインデックス化されたマップは、サーバーログから確認できます。


>[!NOTE]
>
> カスタムスキーマを使用している場合は、**カタログの統合** オプションで、AEM リポジトリのカスタム DTD ファイルとXSD catalog.xml ファイルのパスを定義する必要があります。

### `'fmdita rewriter'`競合を処理する手順

Experience Manager Guidesには、クロスマップの場合に生成されるリンク（2つの異なるマップのトピック間のリンク）を処理するための&#x200B;[**カスタム sling rewriter**](../install-conf-guide/conf-output-generation.md#custom-rewriter) モジュールがあります。

コードベースに別のカスタムスリングリライターがある場合は、`'order'`値が50より大きい値を使用します。これは、Experience Manager Guides sling リライターが`'order'` 50を使用するからです。  これを上書きするには、50を超える値が必要です。 詳細については、[出力の書き換えパイプライン &#x200B;](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html)を参照してください。

このアップグレードでは、`'order'`の値が1000から50に変更されるので、既存のカスタムリライターがある場合は`'fmdita-rewriter'`と結合する必要があります。


### damAssetLuceneのインデックスを再作成する手順

AEM Guidesを使用してdamAssetLuceneのインデックス定義を更新します。 必要なバージョンにアップグレードした後、damAssetLuceneのインデックス再作成については、[この記事](https://experienceleague.adobe.com/ja/docs/experience-cloud-kcs/kbarticles/ka-16460)を参照してください。

>[!NOTE]
>
> ドキュメントに従いながら、`reindex=true`のプロパティ（`reindex-async=true`と`/oak:index/damAssetLucene`）の両方が保存操作で同時に更新されていることを確認してください。

