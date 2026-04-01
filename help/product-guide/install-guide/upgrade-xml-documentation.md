---
title: Adobe Experience Manager Guidesのアップグレード
description: Adobe Experience Manager Guidesのアップグレード方法について説明します
exl-id: f058b39f-7408-4874-942b-693e133886cf
feature: Installation
role: Admin
level: Experienced
source-git-commit: acc063d149f52a457d4ce2447c8eafaff6296dac
workflow-type: tm+mt
source-wordcount: '9148'
ht-degree: 0%

---

# Adobe Experience Manager Guidesのアップグレード {#id224MBE0M0XA}

>[!NOTE]
>
> 製品のライセンス版に固有のアップグレード手順に従います。

現在のバージョンのExperience Manager Guidesをバージョン 5.1.0 Service Pack 4にアップグレードできます。

- バージョン 5.1.0または5.1.xを使用している場合は、バージョン 5.1.0 Service Pack 4に直接アップグレードできます。
- バージョン 4.6.0、4.6.x、5.0.0、または5.0.xを使用している場合は、バージョン 5.1.0にアップグレードする必要があります。
- バージョン 4.6.3、4.6.1、4.6、または4.4を使用している場合は、バージョン 5.0.0にアップグレードする必要があります。
- バージョン 4.3.x、4.2、4.2.1 （ホットフィックス 4.2.1.3）、4.1、または4.1.xを使用している場合は、バージョン 5.0.0にアップグレードする前にバージョン 4.4にアップグレードする必要があります。
- バージョン 4.0を使用している場合は、バージョン 4.3.xにアップグレードする前にバージョン 4.2にアップグレードする必要があります。
- バージョン 3.8.5を使用している場合は、バージョン 4.2にアップグレードする前にバージョン 4.0にアップグレードする必要があります。
- 3.8.5より前のバージョンを使用している場合は、[Adobe Experience Manager Guides ヘルプ Experience Manager Guides アーカイブ ](https://helpx.adobe.com/xml-documentation-for-experience-manager/archive.html)で入手できる製品固有のインストールガイドの「PDFのアップグレード」セクションを参照してください。


>[!NOTE]
>
> Experience Manager Guides バージョンをアップグレードする前に、AEM サービスパックをインストールする必要があります。

詳しくは、次の手順を参照してください。

- [バージョン 5.1.0へのアップグレード](#upgrade-to-version-510)
- [バージョン 5.0.0へのアップグレード](#upgrade-to-version-500)
- [バージョン 4.6.0へのアップグレード](#upgrade-to-version-460)
- [バージョン 4.4.0へのアップグレード](#upgrade-to-version-440)
- [バージョン 4.3.1.5にアップグレード](#upgrade-to-version-4315)
- [バージョン 4.3.1へのアップグレード](#upgrade-to-version-431)
- [バージョン 4.3.0へのアップグレード](#upgrade-to-version-430)
- [バージョン 4.2.1へのアップグレード](#upgrade-to-version-421)
- [バージョン 4.2へのアップグレード](#upgrade-to-version-42)
- [3.8.5からバージョン 4.0へのアップグレード](#upgrade-from-version-385-to-version-40)


>[!IMPORTANT]
>
> アップグレードを開始する前に、完全なシステムバックアップを実行して、データの損失を回避します。

## バージョン 3.8.5からバージョン 4.0へのアップグレード

Experience Manager Guides バージョン 3.8.5を使用している場合は、Experience Manager Guides バージョン 4.0にアップグレードできます。 アップグレード機能を使用すると、以前のバージョンのExperience Manager Guidesをアンインストールする必要はありません。

プロセスを実行する前に、完了する必要がある特定のタスクがあります。 次のサブセクションでは、前提条件、レポートの生成、移行プロセスについて説明します。 また、Experience Manager Guides バージョン 4.0をインストールした後は、お客様の設定に応じて様々な設定をカスタマイズできます。

>[!NOTE]
>
> このアップグレードプロセスは、バージョン 3.8.5からバージョン 4.0にのみ適用されます。バージョン 3.4以降から3.8.5にアップグレードするプロセスについては、*Adobe Experience Manager Guides ヘルプのExperience Manager Guides アーカイブ*&#x200B;で入手できる製品固有のインストールガイドの[PDFのアップグレード ](https://helpx.adobe.com/xml-documentation-for-experience-manager/archive.html)の節を参照してください。



****前提条件****

Experience Manager Guidesのアップグレードプロセスを開始する前に、次のことを確認してください。

1. レビュー用に開いているトピックにレビューコメントを読み込みました。
1. アクティブなレビューをすべて閉じました。
1. すべての翻訳タスクを閉じました。
1. Experience Manager Guidesの以前のバージョン \（メジャーリリースまたはパッチリリース\）の上部にインストールされているExperience Manager Guides ホットフィックスをすべてアンインストールします。

**バージョン 4.0**&#x200B;をインストールする前

バージョン 4.0をインストールする前に、次の手順を実行します。

1. この時点でExperience Manager Guidesがバージョン 3.8.5であることを確認します。
1. アップグレードスクリプトパッケージをダウンロードします。 それには、[XML Documentation Software Distribution Portal](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)で「Adobe solution 4.0 Upgrade Package」を検索し、zip ファイルをダウンロードします。
1. パッケージマネージャーを使用して、このパッケージをAEMにアップロードし、このパッケージをインストールします。
1. アップグレードパッケージをインストールしたら、以下のスクリプトを同じ順序で実行し、指定された手順に従います。

**アップグレードの互換性を確認するAPI**

このAPIは、現在のシステムのステータスを評価し、アップグレードが可能かどうかをレポートするように設計されています。 このスクリプトを実行するには、次のエンドポイントをトリガーします。

| 終点 | /bin/dxml/upgrade/3xto4x/report |
| --- | --- |
| リクエストタイプ | **GET**&#x200B;管理者としてAEM インスタンスにログインしているWeb ブラウザーを使用できます。 |
| 期待される応答 | -   必要なノードをすべて移動できる場合は、合格チェックを受け取ります。 <br>-   ノードがターゲットの場所に存在する場合、関連するエラーが表示されます。 リポジトリ \（delete node /var/dxml\）をクリーンアップし、アップグレードパッケージを再インストールしてから、このエンドポイントを再度トリガーします。 <br>**注意：**&#x200B;これは、3.x Experience Manager Guidesではターゲットの場所が以前に使用されていないため、一般的なエラーではありません。 <br> -   このスクリプトが成功しない場合は、続行せずにカスタマーサクセスチームに報告してください。 |

**システム データ移行API**

このAPIは、**移行マッピング** セクションで説明されているように、システム データを移行するように設計されています。

1. アップグレード互換性の確認APIが失敗した場合は、このスクリプトを実行しないでください\（続行しないでください\）。
1. アップグレード互換性を確認APIが正常に返されたら、アップグレード スクリプトを実行できます。

| 終点 | /bin/dxml/upgrade/3xto4x |
| --- | --- |
| リクエストタイプ | **POST**&#x200B;このスクリプトはPOST リクエストであるため、Postmanなどのエージェントを介して実行する必要があります。 |
| 期待される応答 | -   移行が正常に完了したら、XML Documentation ソリューション バージョン 4.0.<br>-   エラーが発生した場合は、最後のチェックポイントに復元し、エラーログとAPI出力をカスタマーサクセスチームと共有します。 |

**移行マッピング**：上記のAPIは、ソースの場所にあるすべてのデータをターゲットの場所に移行します。

| ソース | ターゲット |
|------|------|
| /content/fmdita | /var/dxml |
| /content/dxml | /var/dxml |
| /etc/fmdita | /libs/fmdita |

## バージョン 4.0のインストール {#id23598G006XA}

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

バージョン 4.2へのアップグレードは、現在のバージョンのExperience Manager Guidesによって異なります。

バージョン 4.0、4.1または4.1.xを使用している場合は、バージョン 4.2に直接アップグレードできます。

****前提条件****

Experience Manager Guides 4.2のアップグレードプロセスを開始する前に、次のことを確認してください。

1. Experience Manager Guides バージョン 4.0、4.1または4.1.xにアップグレードしました。
1. すべての翻訳タスクを閉じました。
1. **クラスのログレベルを** INFO`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript`に変更し、これらのログを新しいログファイル （例：`logs/translation_upgrade.log.`）に追加しました

>[!NOTE]
>
> アクティブなレビューはすべて閉じる必要があります。 4.2へのアップグレード中にレビュータスクが閉じられていない場合、古い進行中のレビュータスクは古いレビューページにユーザーを引き続き移動し、アップグレード後に作成されたレビュータスクには機能の最新の更新が表示されます。

## バージョン 4.2のインストール {#id2245IK0E0EV}

1. [Adobe Software Distribution Portal](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)から4.2 バージョンパッケージをダウンロードします。
1. バージョン 4.2 パッケージをインストールします。
1. パッケージのインストールが完了したら、次のメッセージ\（s\）がログに記録されるのを待ちます。

   `Completed the post deployment setup script`

   上記のメッセージは、インストールのすべての手順が完了したことを示します。

   次のエラー接頭辞のいずれかが発生した場合は、カスタマーサクセスチームに報告してください。

   - デプロイメント後のセットアップ スクリプトでエラーが発生しました
   - 翻訳マップの書き出し中に例外が発生しました
   - プロパティのv1からv2への翻訳マップをポートできません
1. バージョン 4.2 \（必要に応じて\）でリリースされたOxygen コネクタプラグインをアップグレードします。
1. パッケージのインストール後、ブラウザーキャッシュをクリアします。
1. 次の節で詳しく説明しているように、カスタマイズのアップグレードを続行します。

## バージョン 4.2のインストール後 {#id2326F02004K}

>[!IMPORTANT]
>
> アップグレードされたサーバーにハイテク テンプレートが表示されない。 サーバーにハイテク テンプレートを含めるには、次のようにコピーします。Source: /libs/fmdita/pdf/Hi-Tech Destination: /content/dam/dita-templates/pdf

Experience Manager Guidesをインストールした後、新しくインストールしたバージョンに適用できる様々な設定を設定に統合できます。

>[!NOTE]
>
> dam-update-asset モデルはカスタマイズできます。 ですから、カスタマイズが行われた場合は、カスタマイズとExperience Manager Guidesをモデルの作業コピーに同期させる必要があります。

1. **DAM アセットの更新ワークフロー\（後処理変更\）:**

1. URLを開く：

   ```http
   http://localhost:4502/libs/cq/workflow/admin/console/content/models.html
   ```

1. **DAM アセットの更新ワークフロー**&#x200B;を選択します。
1. **編集**&#x200B;をクリックします。
1. **DXML Post Process Initiator** コンポーネントが存在する場合は、カスタマイズが同期されていることを確認します。
1. **DXML Post Process Initiator** コンポーネントが存在しない場合は、次の手順を実行してコンポーネントを挿入します。

1. 「**コンポーネントを挿入** \（処理の最後の手順としてExperience Manager Guidesの後処理を担当\）をクリックします。
1. 以下の詳細を含む&#x200B;**プロセス手順**&#x200B;を設定します。

   **共通タブ**

   **タイトル：** DXML後処理イニシエータ

   **説明**：変更または作成されたアセットのDXML後処理のSling ジョブをトリガーするDXML後処理イニシエータステップ

   **プロセスタブ**

   - 「**プロセス**」ドロップダウンから「**DXML Post Process Initiator**」を選択します

   - **ハンドラーの詳細**&#x200B;を選択

   - **完了**&#x200B;を選択

1. 変更を完了したら、右上の&#x200B;**同期**&#x200B;をクリックします。 成功の通知が届きます。

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
   - 条件「*」の* DAM アセット更新ワークフロー – **の「** Node Modified`jcr:content/jcr:mimeType!=video`」のランチャー
   - &#39;Globbing&#39;の値は次のとおりです。

   ```json
   /content/dam(/((?!/subassets|/translation_output).)*/)renditions/original
   ```

   - &#39;excludeList&#39;には`"event-user-data:changedByWorkflowProcess"`を指定する必要があります。
1. アップグレードが完了したら、新しいアプリケーションコードと一致するように、カスタマイズ/オーバーレイのいずれかが検証および更新されていることを確認します。 いくつかの例を以下に示します。
   - /libs/fmditor/libsbからオーバーレイされたコンポーネントは、新しい製品コードと比較し、/appsの下のオーバーレイファイルで更新する必要があります。
   - 製品から使用されるclientlib カテゴリは、変更について確認する必要があります。 上書きされた設定\（以下の例\）は、最新の機能を取得するために、最新の設定と比較する必要があります。
   - elementmapping.xml
   - ui\_config.json\（フォルダープロファイルで設定されている可能性があります\）
   - 修正済み`com.adobe.fmdita.config.ConfigManager`
   - 任意のカスタムコードが古いパス \（[移行マッピング ](#id2244LE040XA) セクション\）を使用しているかどうかを確認します。カスタマイズも期待どおりに機能するように、新しいパスに更新する必要があります。
1. 現在のリリースで導入された新しい設定について説明します\（[ リリースノート ](../release-info/release-notes-4-3.md)\）を参照し、影響を受ける機能があるかどうかを確認してから、適切なアクションを実行します。 例えば、バージョン 4.0で導入された「改善されたファイルとバージョンの処理」を使用する場合があります。この場合、設定を有効にする必要があります。

## 既存のコンテンツをインデックス化して、新しい検索と置換を使用する手順：

既存のコンテンツのインデックスを作成するには、次の手順を実行し、マップレベルで新しい検索と置換のテキストを使用します。

- サーバー\（正しい認証\）に対してPOST リクエストを実行します – `http://<server:port\>/bin/guides/map-find/indexing`。 \（オプション：マップの特定のパスを渡してインデックスを作成できます。デフォルトでは、すべてのマップにインデックスが作成されます（例：`https://<Server:port\>/bin/guides/map-find/indexing?paths=<map\_path\_in\_repository\>`\）

- APIはjobIdを返します。 ジョブのステータスを確認するには、ジョブ IDを持つGET リクエストを同じエンドポイントに送信できます。

`http://<server:port\>/bin/guides/map-find/indexing?jobId=\{jobId\}`\（例：`http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42`\）

- ジョブが完了すると、上記のGET リクエストは成功して応答し、マップが失敗した場合に言及します。 正常にインデックス化されたマップは、サーバーログから確認できます。

アップグレードジョブが失敗し、エラーログに次のエラーが表示される場合：

「*クエリ*&#x200B;は、*100000個を超えるノード*&#x200B;を読み取るかトラバースしました。 他のタスクへの影響を避けるために、処理は停止されました。」

これは、アップグレードで使用されるクエリに対してインデックスが正しく設定されていないために発生する可能性があります。 次の回避策を試すことができます。

1. damAssetLucene oak インデックスで、ブール値プロパティ `indexNodeName`を`true`としてノードに追加します。
   `/oak:index/damAssetLucene/indexRules/dam:Asset`
1. ノードの下に名前の抜粋を含む新しいノードを追加します。

   `/oak:index/damAssetLucene/indexRules/dam:Asset/properties`
ノードで次のプロパティを設定します。

   ```
   name - rep:excerpt
   propertyIndex - {Boolean}true
   notNullCheckEnabled - {Boolean}true
   ```

   `damAssetLucene`の構造は次のようになります。

   ```
   <damAssetLucene compatVersion="{Long}2" async="async, nrt" jcr:primaryType="oak:QueryIndexDefinition" evaluatePathRestrictions="{Boolean}true" type="lucene">
   <indexRules jcr:primaryType="nt:unstructured">
     <dam:Asset indexNodeName="{Boolean}true" jcr:primaryType="nt:unstructured">
       <properties jcr:primaryType="nt:unstructured">
         <excerpt name="rep:excerpt" propertyIndex="{Boolean}true" jcr:primaryType="nt:unstructured" notNullCheckEnabled="{Boolean}true"/>
       </properties>
       </dam:Asset>
     </indexRules>
   </damAssetLucene>    
   ```


   （他の既存のノードやプロパティと一緒に）

1. `damAssetLucene` インデックスのインデックスを再作成します（インデックス再作成フラグを`true`に設定します）
もう一度`false`になるまで待ちます（これは、インデックス再作成が完了したことを示します）。 インデックスのサイズによっては数時間かかる場合があります。
1. 前の手順を実行して、インデックス作成スクリプトを再度実行します。


## バージョン 4.2.1へのアップグレード

>[!TIP]
>
>バージョン 4.2.1にホットフィックス 4.2.1.3をインストールすることをお勧めします。

バージョン 4.2.1へのアップグレードは、現在のバージョンのExperience Manager Guidesによって異なります。 バージョン 4.1または4.1.x、または4.2を使用している場合は、バージョン 4.2.1に直接アップグレードできます。

>[!NOTE]
>
>後処理とインデックス作成には数時間かかる場合があります。 オフピーク時間中にアップグレードプロセスを開始することをお勧めします。

****前提条件****

Experience Manager Guides 4.2.1のアップグレードプロセスを開始する前に、次のことを確認してください。

1. Experience Manager Guides バージョン 4.1、4.1.xまたは4.2にアップグレードしました。
1. すべての翻訳タスクを閉じました。
1. **クラスのログレベルを** INFO`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript`に変更し、これらのログを新しいログファイル （例：`logs/translation_upgrade.log.`）に追加しました

>[!NOTE]
>
> アクティブなレビューはすべて閉じる必要があります。 4.2へのアップグレード中にレビュータスクが閉じられていない場合、古い進行中のレビュータスクは古いレビューページにユーザーを引き続き移動し、アップグレード後に作成されたレビュータスクには機能の最新の更新が表示されます。

## バージョン 4.2.1のインストール

1. [Adobe Software Distribution Portal](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)から4.2.1 バージョンのパッケージをダウンロードします。
1. バージョン 4.2.1 パッケージをインストールします。
1. トリガーを押して、翻訳マップのアップグレードジョブを開始します。 詳しくは、[ サーブレットを介したスクリプトのトリガーを有効にする](#enable-trigger-of-script-via-a-servlet-for-421)を参照してください。


1. パッケージのインストールが完了したら、次のメッセージ\（s\）がログに記録されるのを待ちます。

   `Completed the post deployment setup script`

   上記のメッセージは、インストールのすべての手順が完了したことを示します。

   次のエラー接頭辞のいずれかが発生した場合は、カスタマーサクセスチームに報告してください。

   - デプロイメント後のセットアップ スクリプトでエラーが発生しました
   - 翻訳マップの書き出し中に例外が発生しました
   - プロパティのv1からv2への翻訳マップをポートできません
1. バージョン 4.2 \（必要に応じて\）でリリースされたOxygen コネクタプラグインをアップグレードします。
1. パッケージのインストール後、ブラウザーキャッシュをクリアします。
1. 次の節で詳しく説明しているように、カスタマイズのアップグレードを続行します。

### サーブレットを使用したスクリプトのトリガーを有効にする（4.2.1の場合）

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

サンプルログ：
次に、スクリプトをトリガーした後にログファイルに表示されるログの例を示します。

```
04.05.2023 14:17:12.876 *INFO* [[0:0:0:0:0:0:0:1] [1683190032736] POST /bin/guides/script/start HTTP/1.1] com.adobe.dxml.common.executor.RunnableSynchronizedOTS Acquiring lock for job : translation-map-upgrade
04.05.2023 14:17:12.897 *INFO* [pool-59-thread-1] com.adobe.fmdita.xmltranslation.ots.TranslationMapUpgradeOTS Starting the thread to upgrade translation map from V1 to V2
04.05.2023 14:17:12.899 *INFO* [pool-59-thread-1] com.adobe.dxml.common.executor.RunnableSynchronizedOTS Initiating lock for node : /var/dxml/executor-locks/translation-map-upgrade/1683190032886
04.05.2023 14:17:12.901 *INFO* [pool-59-thread-1] com.adobe.fmdita.translationservices.TranslationMapUpgradeScript Starting porting of translation map from V1 to V2
04.05.2023 14:17:12.904 *INFO* [pool-59-thread-1] com.adobe.fmdita.translationservices.TranslationMapUpgradeScript Memory increase is of : 764 kB
04.05.2023 14:17:12.906 *INFO* [pool-59-thread-1] com.adobe.fmdita.translationservices.TranslationMapUpgradeScript Completed porting of translation map from V1 to V2
04.05.2023 14:17:12.907 *INFO* [pool-59-thread-1] com.adobe.dxml.common.executor.RunnableSynchronizedOTS Releasing lock for node : /var/dxml/executor-locks/translation-map-upgrade/1683190032886
04.05.2023 14:17:12.909 *INFO* [pool-59-thread-1] com.adobe.fmdita.xmltranslation.ots.TranslationMapUpgradeOTS Completed the thread to upgrade translation map from V1 to V2
```

次の手順に進む前に、`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript Completed porting of translation map from V1 to V2`と`com.adobe.fmdita.xmltranslation.ots.TranslationMapUpgradeOTS Completed the thread to upgrade translation map from V1 to V2`を探します。



## バージョン 4.2.1のインストール後

>[!IMPORTANT]
>
> アップグレードされたサーバーにハイテク テンプレートが表示されない。 サーバーにハイテク テンプレートを含めるには、次のようにコピーします。Source: /libs/fmdita/pdf/Hi-Tech Destination: /content/dam/dita-templates/pdf

Experience Manager Guidesをインストールした後、新しくインストールしたバージョンに適用できる様々な設定を設定に統合できます。

>[!NOTE]
>
> dam-update-asset モデルはカスタマイズできます。 ですから、カスタマイズが行われた場合は、カスタマイズとExperience Manager Guidesをモデルの作業コピーに同期させる必要があります。

1. **DAM アセットの更新ワークフロー\（後処理変更\）:**

1. URLを開く：

   ```http
   http://localhost:4502/libs/cq/workflow/admin/console/content/models.html
   ```

1. **DAM アセットの更新ワークフロー**&#x200B;を選択します。
1. **編集**&#x200B;をクリックします。
1. **DXML Post Process Initiator** コンポーネントが存在する場合は、カスタマイズが同期されていることを確認します。
1. **DXML Post Process Initiator** コンポーネントが存在しない場合は、次の手順を実行してコンポーネントを挿入します。

1. 「**コンポーネントを挿入** \（処理の最後の手順としてExperience Manager Guidesの後処理を担当\）をクリックします。
1. 以下の詳細を含む&#x200B;**プロセス手順**&#x200B;を設定します。

   **共通タブ**

   **タイトル：** DXML後処理イニシエータ

   **説明**：変更または作成されたアセットのDXML後処理のSling ジョブをトリガーするDXML後処理イニシエータステップ

   **プロセスタブ**

   - 「**プロセス**」ドロップダウンから「**DXML Post Process Initiator**」を選択します

   - **ハンドラーの詳細**&#x200B;を選択

   - **完了**&#x200B;を選択

1. 変更を完了したら、右上の&#x200B;**同期**&#x200B;をクリックします。 成功の通知が届きます。

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
   - /libs/fmditor/libsbからオーバーレイされたコンポーネントは、新しい製品コードと比較し、/appsの下のオーバーレイファイルで更新する必要があります。
   - 製品から使用されるclientlib カテゴリは、変更について確認する必要があります。 上書きされた設定\（以下の例\）は、最新の機能を取得するために、最新の設定と比較する必要があります。
   - elementmapping.xml
   - ui\_config.json\（フォルダープロファイルで設定されている可能性があります\）
   - 修正済み`com.adobe.fmdita.config.ConfigManager`
   - 任意のカスタムコードが古いパス \（[移行マッピング ](#id2244LE040XA) セクション\）を使用しているかどうかを確認します。カスタマイズも期待どおりに機能するように、新しいパスに更新する必要があります。
1. 現在のリリースで導入された新しい設定について説明します\（[ リリースノート ](../release-info/release-notes-4-2-1.md)\）を参照し、影響を受ける機能があるかどうかを確認してから、適切なアクションを実行します。 例えば、バージョン 4.0で導入された「改善されたファイルとバージョンの処理」を使用する場合があります。この場合、設定を有効にする必要があります。

## 既存のコンテンツをインデックス化して、新しい検索と置換を使用する手順：

既存のコンテンツのインデックスを作成するには、次の手順を実行し、マップレベルで新しい検索と置換のテキストを使用します。

- `damAssetLucene`のインデックス作成が完了していることを確認します。 サーバーに存在するデータ量に応じて、最大で数時間かかる場合があります。 インデックス再作成が完了したことを確認するには、でインデックス再作成フィールドがfalseに設定されていることを確認します
  `http://<server:port>/oak:index/damAssetLucene`。  また、`damAssetLucene`でカスタマイズを追加した場合は、再度適用する必要がある場合があります。

- サーバー\（正しい認証\）に対してPOST リクエストを実行します – `http://<server:port\>/bin/guides/map-find/indexing`。 （オプション：マップの特定のパスを渡してインデックスを作成できます。デフォルトでは、すべてのマップにインデックスが付けられます（例：`https://<Server:port\>/bin/guides/map-find/indexing?paths=<map\_path\_in\_repository\>`）。

- ルートフォルダーを渡して、特定のフォルダー（およびそのサブフォルダー）のDITA マップをインデックス化することもできます。 例えば、`http://<server:port\>/bin/guides/map-find/indexing?root=/content/dam/test` のようになります。パス パラメーターとルート パラメーターの両方が渡された場合は、パス パラメーターのみが考慮されます。

- APIはjobIdを返します。 ジョブのステータスを確認するには、ジョブ IDを持つGET リクエストを同じエンドポイント `http://<server:port\>/bin/guides/map-find/indexing?jobId=\{jobId\}`\（例：`http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42`\）に送信できます


- ジョブが完了すると、上記のGET リクエストは成功して応答し、マップが失敗した場合に言及します。 正常にインデックス化されたマップは、サーバーログから確認できます。


## バージョン 4.3.0へのアップグレード

バージョン 4.3.0へのアップグレードは、現在のバージョンのExperience Manager Guidesによって異なります。 バージョン 4.2または4.2.xを使用している場合は、バージョン 4.3.0に直接アップグレードできます。

>[!NOTE]
>
>後処理とインデックス作成には数時間かかる場合があります。 オフピーク時間中にアップグレードプロセスを開始することをお勧めします。

****前提条件****

Experience Manager Guides 4.3.0のアップグレードプロセスを開始する前に、次のことを確認してください。

1. Experience Manager Guides バージョン 4.2または4.2.xにアップグレードし、それぞれのインストール手順を完了しました。
1. すべての翻訳タスクを閉じました。



## バージョン 4.3.0のインストール

1. [Adobe Software Distribution Portal](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)から4.3.0 バージョンのパッケージをダウンロードします。
1. バージョン 4.3.0 パッケージをインストールします。
1. パッケージのインストール後、ブラウザーキャッシュをクリアします。
1. フォルダープロファイルの「`ui_config.json`XML Editor Configuration **」タブから** ファイルをアップグレードします。


## バージョン 4.3.0のインストール後

Experience Manager Guidesをインストールした後、新しくインストールしたバージョンに適用できる様々な設定を設定に統合できます。

## 既存のコンテンツを後処理して、壊れたリンクレポートを使用する手順


既存のコンテンツを後処理し、新しい壊れたリンクレポートを使用するには、次の手順を実行します。

1. （オプション）システムに100,000個を超えるdita ファイルがある場合は、`queryLimitReads`の`org.apache.jackrabbit.oak.query.QueryEngineSettingsService`を大きな値（存在するアセット数よりも大きい値、例えば200,000個）に更新してから再デプロイします。

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



## バージョン 4.3.1へのアップグレード

バージョン 4.3.1へのアップグレードは、現在のバージョンのExperience Manager Guidesによって異なります。 バージョン 4.3.0、4.2、または4.2.1を使用している場合は、バージョン 4.3.1に直接アップグレードできます。

>[!NOTE]
>
>後処理とインデックス作成には数時間かかる場合があります。 オフピーク時間中にアップグレードプロセスを開始することをお勧めします。

****前提条件****

Experience Manager Guides 4.3.1のアップグレードプロセスを開始する前に、次のことを確認してください。

1. Experience Manager Guides バージョン 4.3.0、4.2、または4.2.1にアップグレードし、それぞれのインストール手順を完了しました。
1. （オプション）すべての翻訳タスクを閉じました。
1. **クラスのログレベルを** INFO`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript`に変更し、これらのログを新しいログファイル （例：`logs/translation_upgrade.log`）に追加しました。


## バージョン 4.3.1のインストール

1. [Adobe Software Distribution Portal](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)から4.3.1 バージョンのパッケージをダウンロードします。
1. バージョン 4.3.1 パッケージをインストールします。
1. トリガーを押して、翻訳マップのアップグレードジョブを開始します。 詳しくは、[ サーブレットを介したスクリプトのトリガーを有効にする](#enable-trigger-of-script-via-a-servlet-for-431)を参照してください。


1. パッケージのインストールが完了したら、次のメッセージ\（s\）がログに記録されるのを待ちます。

   `Completed the post deployment setup script`

   上記のメッセージは、インストールのすべての手順が完了したことを示します。

   次のエラー接頭辞のいずれかが発生した場合は、カスタマーサクセスチームに報告してください。

   - デプロイメント後のセットアップ スクリプトでエラーが発生しました
   - 翻訳マップの書き出し中に例外が発生しました
   - プロパティのv1からv2への翻訳マップをポートできません
1. バージョン 4.2 \（必要に応じて\）でリリースされたOxygen コネクタプラグインをアップグレードします。
1. パッケージのインストール後、ブラウザーキャッシュをクリアします。
1. 次の節で詳しく説明しているように、カスタマイズのアップグレードを続行します。

### サーブレットを使用したスクリプトのトリガーを有効にする（4.3.1の場合）

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

サンプルログ：
次に、スクリプトをトリガーした後にログファイルに表示されるログの例を示します。

```
04.05.2023 14:17:12.876 *INFO* [[0:0:0:0:0:0:0:1] [1683190032736] POST /bin/guides/script/start HTTP/1.1] com.adobe.dxml.common.executor.RunnableSynchronizedOTS Acquiring lock for job : translation-map-upgrade
04.05.2023 14:17:12.897 *INFO* [pool-59-thread-1] com.adobe.fmdita.xmltranslation.ots.TranslationMapUpgradeOTS Starting the thread to upgrade translation map from V1 to V2
04.05.2023 14:17:12.899 *INFO* [pool-59-thread-1] com.adobe.dxml.common.executor.RunnableSynchronizedOTS Initiating lock for node : /var/dxml/executor-locks/translation-map-upgrade/1683190032886
04.05.2023 14:17:12.901 *INFO* [pool-59-thread-1] com.adobe.fmdita.translationservices.TranslationMapUpgradeScript Starting porting of translation map from V1 to V2
04.05.2023 14:17:12.904 *INFO* [pool-59-thread-1] com.adobe.fmdita.translationservices.TranslationMapUpgradeScript Memory increase is of : 764 kB
04.05.2023 14:17:12.906 *INFO* [pool-59-thread-1] com.adobe.fmdita.translationservices.TranslationMapUpgradeScript Completed porting of translation map from V1 to V2
04.05.2023 14:17:12.907 *INFO* [pool-59-thread-1] com.adobe.dxml.common.executor.RunnableSynchronizedOTS Releasing lock for node : /var/dxml/executor-locks/translation-map-upgrade/1683190032886
04.05.2023 14:17:12.909 *INFO* [pool-59-thread-1] com.adobe.fmdita.xmltranslation.ots.TranslationMapUpgradeOTS Completed the thread to upgrade translation map from V1 to V2
```

次の手順に進む前に、`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript Completed porting of translation map from V1 to V2`と`com.adobe.fmdita.xmltranslation.ots.TranslationMapUpgradeOTS Completed the thread to upgrade translation map from V1 to V2`を探します。

## バージョン 4.3.1のインストール後



Experience Manager Guidesをインストールした後、新しくインストールしたバージョンに適用できる様々な設定を設定に統合できます。

>[!NOTE]
>
> dam-update-asset モデルはカスタマイズできます。 ですから、カスタマイズが行われた場合は、カスタマイズとExperience Manager Guidesをモデルの作業コピーに同期させる必要があります。

1. **DAM アセットの更新ワークフロー\（後処理変更\）:**

1. URLを開く：

   ```
   http://localhost:4502/libs/cq/workflow/admin/console/content/models.html 
   ```

1. **DAM アセットの更新ワークフロー**&#x200B;を選択します。
1. **編集**&#x200B;をクリックします。
1. **DXML Post Process Initiator** コンポーネントが存在する場合は、カスタマイズが同期されていることを確認します。
1. **DXML Post Process Initiator** コンポーネントが存在しない場合は、次の手順を実行してコンポーネントを挿入します。

1. 「**コンポーネントを挿入** \（処理の最後の手順としてExperience Manager Guidesの後処理を担当\）をクリックします。
1. 以下の詳細を含む&#x200B;**プロセス手順**&#x200B;を設定します。

   **共通タブ**

   **タイトル：** DXML後処理イニシエータ

   **説明**：変更または作成されたアセットのDXML後処理のSling ジョブをトリガーするDXML後処理イニシエータステップ

   **プロセスタブ**

   - 「**プロセス**」ドロップダウンから「**DXML Post Process Initiator**」を選択します

   - **ハンドラーの詳細**&#x200B;を選択

   - **完了**&#x200B;を選択

1. 変更を完了したら、右上の&#x200B;**同期**&#x200B;をクリックします。 成功の通知が届きます。

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
   - /libs/fmditor/libsbからオーバーレイされたコンポーネントは、新しい製品コードと比較し、/appsの下のオーバーレイファイルで更新する必要があります。
   - 製品から使用されるclientlib カテゴリは、変更について確認する必要があります。 上書きされた設定\（以下の例\）は、最新の機能を取得するために、最新の設定と比較する必要があります。
   - elementmapping.xml
   - ui\_config.json\（フォルダープロファイルで設定されている可能性があります\）
   - 修正済み`com.adobe.fmdita.config.ConfigManager`


## 既存のコンテンツをインデックス化する手順

>[!NOTE]
>
> 4.3.0または4.2.1からアップグレードする場合は、これらの手順を実行する必要はありません。

既存のコンテンツのインデックスを作成するには、次の手順を実行し、マップレベルで新しい検索と置換のテキストを使用します。


- サーバー\（正しい認証\）に対してPOST リクエストを実行します – `http://<server:port\>/bin/guides/map-find/indexing`。 （オプション：マップの特定のパスを渡してインデックスを作成できます。デフォルトでは、すべてのマップにインデックスが付けられます（例：`https://<Server:port\>/bin/guides/map-find/indexing?paths=<map\_path\_in\_repository\>`）。


- APIはjobIdを返します。 ジョブのステータスを確認するには、ジョブ IDを持つGET リクエストを同じエンドポイント `http://<server:port\>/bin/guides/map-find/indexing?jobId=\{jobId\}`\（例：`http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42`\）に送信できます


- ジョブが完了すると、上記のGET リクエストは成功して応答し、マップが失敗した場合に言及します。 正常にインデックス化されたマップは、サーバーログから確認できます。

## 既存のコンテンツを後処理して、壊れたリンクレポートを使用する手順

>[!NOTE]
>
> 4.3.0からアップグレードする場合、これらの手順を実行する必要はありません

既存のコンテンツを後処理し、新しい壊れたリンクレポートを使用するには、次の手順を実行します。

1. （オプション）システムに100,000個を超えるdita ファイルがある場合は、`queryLimitReads`の`org.apache.jackrabbit.oak.query.QueryEngineSettingsService`を大きな値（存在するアセット数よりも大きい値、例えば200,000個）に更新してから再デプロイします。

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



## バージョン 4.3.1.5にアップグレード

バージョン 4.3.1.5へのアップグレードは、現在のバージョンのExperience Manager Guidesによって異なります。 バージョン 4.3.1を使用している場合は、バージョン 4.3.1.5に直接アップグレードできます。



## バージョン 4.3.1.5をインストール

1. 4.3.1.5Adobe Software Distribution Portal[から](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html) バージョンのパッケージをダウンロードします。
1. バージョン 4.3.1.5 パッケージをインストールします。

1. インストールプロセスが正常に完了するのを待ちます。
1. 次の節で詳しく説明しているように、カスタマイズのアップグレードを続行します。


## バージョン 4.3.1.5のインストール後


>[!NOTE]
>
>org.apache.velocity バンドルを使用する場合は、バンドルをアップロードする前に次の手順を実行します。
> 1. `<server>:<port>/system/console/bundles` にアクセスします。
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

バージョン 4.4.0へのアップグレードは、現在のバージョンのExperience Manager Guidesによって異なります。 バージョン 4.3.1、4.3.0、4.2、または4.2.1 （ホットフィックス 4.2.1.3）を使用している場合は、バージョン 4.4.0に直接アップグレードできます

>[!NOTE]
>
>後処理とインデックス作成には数時間かかる場合があります。 オフピーク時間中にアップグレードプロセスを開始することをお勧めします。

****前提条件****

Experience Manager Guides 4.4.0のアップグレードプロセスを開始する前に、次のことを確認してください。

1. Experience Manager Guides バージョン 4.3.1、4.3.0、または4.2.1 （ホットフィックス 4.2.1.3）にアップグレードし、それぞれのインストール手順を完了しました。
1. （オプション）すべての翻訳タスクを閉じました。
1. **クラスのログレベルを** INFO`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript`に変更し、これらのログを新しいログファイル （例：`logs/translation_upgrade.log`）に追加しました。


## バージョン 4.4.0のインストール

1. [Adobe Software Distribution Portal](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)から4.4.0 バージョンパッケージをダウンロードします。
1. バージョン 4.4.0 パッケージをインストールします。
1. トリガーを押して、翻訳マップのアップグレードジョブを開始します。 詳しくは、[ サーブレットを介したスクリプトのトリガーを有効にする](#enable-trigger-of-script-via-a-servlet)を参照してください。

1. パッケージのインストールが完了したら、次のメッセージ\（s\）がログに記録されるのを待ちます。

   `Completed the post deployment setup script`

   上記のメッセージは、インストールのすべての手順が完了したことを示します。

   次のエラー接頭辞のいずれかが発生した場合は、カスタマーサクセスチームに報告してください。

   - デプロイメント後のセットアップ スクリプトでエラーが発生しました
   - 翻訳マップの書き出し中に例外が発生しました
   - プロパティのv1からv2への翻訳マップをポートできません
1. バージョン 4.4.0 \（必要に応じて\）でリリースされたOxygen コネクタプラグインをアップグレードします。
1. パッケージのインストール後、ブラウザーキャッシュをクリアします。
1. 次の節で詳しく説明しているように、カスタマイズのアップグレードを続行します。


## バージョン 4.4.0のインストール後

Experience Manager Guidesをインストールした後、新しくインストールしたバージョンに適用できる様々な設定を設定に統合できます。

>[!NOTE]
>
> dam-update-asset モデルはカスタマイズできます。 ですから、カスタマイズが行われた場合は、カスタマイズとExperience Manager Guidesをモデルの作業コピーに同期させる必要があります。

1. **DAM アセットの更新ワークフロー\（後処理変更\）:**

1. URLを開く：

   ```
   http://localhost:4502/libs/cq/workflow/admin/console/content/models.html 
   ```

1. **DAM アセットの更新ワークフロー**&#x200B;を選択します。
1. **編集**&#x200B;をクリックします。
1. **DXML Post Process Initiator** コンポーネントが存在する場合は、カスタマイズが同期されていることを確認します。
1. **DXML Post Process Initiator** コンポーネントが存在しない場合は、次の手順を実行してコンポーネントを挿入します。

1. 「**コンポーネントを挿入** \（処理の最後の手順としてExperience Manager Guidesの後処理を担当\）をクリックします。
1. 以下の詳細を含む&#x200B;**プロセス手順**&#x200B;を設定します。

   **共通タブ**

   **タイトル：** DXML後処理イニシエータ

   **説明**：変更または作成されたアセットのDXML後処理のSling ジョブをトリガーするDXML後処理イニシエータステップ

   **プロセスタブ**

   - 「**プロセス**」ドロップダウンから「**DXML Post Process Initiator**」を選択します

   - **ハンドラーの詳細**&#x200B;を選択

   - **完了**&#x200B;を選択

1. 変更を完了したら、右上の&#x200B;**同期**&#x200B;をクリックします。 成功の通知が届きます。

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
   - /libs/fmditor/libsbからオーバーレイされたコンポーネントは、新しい製品コードと比較し、/appsの下のオーバーレイファイルで更新する必要があります。
   - 製品から使用されるclientlib カテゴリは、変更について確認する必要があります。 上書きされた設定\（以下の例\）は、最新の機能を取得するために、最新の設定と比較する必要があります。
   - elementmapping.xml
   - ui\_config.json\（フォルダープロファイルで設定されている可能性があります\）
   - 修正済み`com.adobe.fmdita.config.ConfigManager`

1. damAssetLuceneでカスタマイズを追加した場合は、再度適用する必要がある場合があります。 これらの変更を行った後、reindexをtrueに設定します。 これにより、カスタマイズを使用して、既存のすべてのノードが再インデックスされます。 完了すると、再インデックスフラグは再びfalseに設定されます。 システム内のアセットの数によっては、この処理に数時間かかる場合があります。

## 既存のコンテンツをインデックス化する手順

>[!NOTE]
>
> 4.3.0または4.3.1からアップグレードする場合は、これらの手順を実行する必要はありません。

既存のコンテンツのインデックスを作成するには、次の手順を実行し、マップレベルで新しい検索と置換のテキストを使用します。

- サーバー\（正しい認証\）に対してPOST リクエストを実行します – `http://<server:port\>/bin/guides/map-find/indexing`。 （オプション：マップの特定のパスを渡してインデックスを作成できます。デフォルトでは、すべてのマップにインデックスが付けられます（例：`https://<Server:port\>/bin/guides/map-find/indexing?paths=<map\_path\_in\_repository\>`）。

- APIはjobIdを返します。 ジョブのステータスを確認するには、ジョブ IDを持つGET リクエストを同じエンドポイント `http://<server:port\>/bin/guides/map-find/indexing?jobId=\{jobId\}`\（例：`http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42`\）に送信できます

- ジョブが完了すると、上記のGET リクエストは成功して応答し、マップが失敗した場合に言及します。 正常にインデックス化されたマップは、サーバーログから確認できます。

## 既存のコンテンツを後処理して、壊れたリンクレポートを使用する手順

>[!NOTE]
>
> 4.3.0または4.3.1からアップグレードする場合は、これらの手順を実行する必要はありません。

既存のコンテンツを後処理し、新しい壊れたリンクレポートを使用するには、次の手順を実行します。

1. （オプション）システムに100,000個を超えるdita ファイルがある場合は、`queryLimitReads`の`org.apache.jackrabbit.oak.query.QueryEngineSettingsService`を大きな値（存在するアセット数よりも大きい値、例えば200,000個）に更新してから再デプロイします。

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

### サーブレットを使用したスクリプトのトリガーを有効にする

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



## `'fmdita rewriter'`競合を処理する手順

Experience Manager Guidesには、クロスマップの場合に生成されるリンク（2つの異なるマップのトピック間のリンク）を処理するための&#x200B;[**カスタム sling rewriter**](../cs-install-guide/conf-output-generation.md#custom-rewriter) モジュールがあります。

コードベースに別のカスタムスリングリライターがある場合は、`'order'`値が50より大きい値を使用します。これは、Experience Manager Guides sling リライターが`'order'` 50を使用するからです。  これを上書きするには、50を超える値が必要です。 詳細については、[出力の書き換えパイプライン ](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html)を参照してください。

このアップグレードでは、`'order'`の値が1000から50に変更されるので、既存のカスタムリライターがある場合は`'fmdita-rewriter'`と結合する必要があります。


**親トピック：**[ ダウンロードしてインストール ](download-install.md)


## バージョン 4.6.0へのアップグレード

>[!TIP]
>
> バージョン 4.6.0、4.6.0 サービスパック 1または4.6.0 サービスパック 3に加えて4.6.0 サービスパック 4をインストールすることをお勧めします。 4.6.0 サービスパック 4 リリースのアップグレードプロセスは、4.6.0 リリースと同じ手順に従います。

バージョン 4.6.0へのアップグレードは、現在のバージョンのExperience Manager Guidesによって異なります。 バージョン 4.4.0、4.3.1、4.3.0、4.2、または4.2.1 （ホットフィックス 4.2.1.3）を使用している場合は、バージョン 4.6.0に直接アップグレードできます。

>[!NOTE]
>
> 後処理とインデックス作成には数時間かかる場合があります。 オフピーク時間中にアップグレードプロセスを開始することをお勧めします。

****前提条件****

Experience Manager Guides 4.6.0のアップグレードプロセスを開始する前に、次のことを確認してください。

1. Experience Manager Guides バージョン 4.3.1、4.3.0、または4.2.1 （ホットフィックス 4.2.1.3）にアップグレードし、それぞれのインストール手順を完了しました。
1. （オプション）すべての翻訳タスクを閉じました。
1. **クラスのログレベルを** INFO`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript`に変更し、これらのログを新しいログファイル （例：`logs/translation_upgrade.log`）に追加しました。


## バージョン 4.6.0のインストール

1. [Adobe Software Distribution Portal](https://experience.adobe.com/#/downloads/content/software-distribution/ja/aem.html)から4.6.0 バージョンのパッケージをダウンロードします。
1. バージョン 4.6.0 パッケージをインストールします。
1. トリガーを押して、翻訳マップのアップグレードジョブを開始します。 詳しくは、[ サーブレットを介したスクリプトのトリガーを有効にする](#enable-trigger-of-script-via-a-servlet)を参照してください。

1. パッケージのインストールが完了したら、次のメッセージ\（s\）がログに記録されるのを待ちます。

   `Completed the post deployment setup script`

   上記のメッセージは、インストールのすべての手順が完了したことを示します。

   次のエラー接頭辞のいずれかが発生した場合は、カスタマーサクセスチームに報告してください。

   - デプロイメント後のセットアップ スクリプトでエラーが発生しました
   - 翻訳マップの書き出し中に例外が発生しました
   - プロパティのv1からv2への翻訳マップをポートできません
1. バージョン 4.6.0 \（必要に応じて\）でリリースされたOxygen コネクタプラグインをアップグレードします。
1. パッケージのインストール後、ブラウザーキャッシュをクリアします。

## バージョン 4.6.0のインストール後

Experience Manager Guidesをインストールした後、新しくインストールしたバージョンに適用できる様々な設定を設定に統合できます。

>[!NOTE]
>
> dam-update-asset モデルはカスタマイズできます。 ですから、カスタマイズが行われた場合は、カスタマイズとExperience Manager Guidesをモデルの作業コピーに同期させる必要があります。

1. **DAM アセットの更新ワークフロー\（後処理変更\）:**

1. URLを開く：

   ```
   http://localhost:4502/libs/cq/workflow/admin/console/content/models.html 
   ```

1. **DAM アセットの更新ワークフロー**&#x200B;を選択します。
1. **編集**&#x200B;をクリックします。
1. **DXML Post Process Initiator** コンポーネントが存在する場合は、カスタマイズが同期されていることを確認します。
1. **DXML Post Process Initiator** コンポーネントが存在しない場合は、次の手順を実行してコンポーネントを挿入します。

1. 「**コンポーネントを挿入** \（処理の最後の手順としてExperience Manager Guidesの後処理を担当\）をクリックします。
1. 以下の詳細を含む&#x200B;**プロセス手順**&#x200B;を設定します。

   **共通タブ**

   **タイトル：** DXML後処理イニシエータ

   **説明**：変更または作成されたアセットのDXML後処理のSling ジョブをトリガーするDXML後処理イニシエータステップ

   **プロセスタブ**

   - 「**プロセス**」ドロップダウンから「**DXML Post Process Initiator**」を選択します

   - **ハンドラーの詳細**&#x200B;を選択

   - **完了**&#x200B;を選択

1. 変更を完了したら、右上の&#x200B;**同期**&#x200B;をクリックします。 成功の通知が届きます。

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
   - /libs/fmditor/libsbからオーバーレイされたコンポーネントは、新しい製品コードと比較し、/appsの下のオーバーレイファイルで更新する必要があります。
   - 製品から使用されるclientlib カテゴリは、変更について確認する必要があります。 上書きされた設定\（以下の例\）は、最新の機能を取得するために、最新の設定と比較する必要があります。
   - elementmapping.xml
   - ui\_config.json\（フォルダープロファイルで設定されている可能性があります\）
   - 修正済み`com.adobe.fmdita.config.ConfigManager`

1. damAssetLuceneでカスタマイズを追加した場合は、再度適用する必要がある場合があります。 これらの変更を行った後、reindexをtrueに設定します。 これにより、カスタマイズを使用して、既存のすべてのノードが再インデックスされます。 完了すると、再インデックスフラグは再びfalseに設定されます。 システム内のアセットの数によっては、この処理に数時間かかる場合があります。

## Experience Manager Guides インデックスを再インデックス化する手順

1. `crx/de`を開き、インデックスパス `/oak:index/guidesAssetProperties`に移動します
2. 再インデックスプロパティを`true` （`false` デフォルト）に設定し、**すべて保存**&#x200B;をクリックします。
3. 再インデックスが完了すると、再インデックス プロパティが`false`に設定され、再インデックス数が1増加します。

   >[!NOTE]
   >
   > データ量によっては数分かかる場合があります。
4. 他の追加または変更されたインデックスに対しても、同じ手順を実行します：`guidesBulkActivation`、`guidesPeerLinkIndex`、および`guidesKonnectTemplateIndex`。

## 既存のコンテンツをインデックス化する手順



既存のコンテンツのインデックスを作成するには、次の手順を実行します。

- サーバー\（正しい認証\）に対してPOST リクエストを実行します – `http://<server:port\>/bin/guides/map-find/indexing`。 （オプション：マップの特定のパスを渡してインデックスを作成できます。デフォルトでは、すべてのマップにインデックスが付けられます||例：`https://<Server:port\>/bin/guides/map-find/indexing?paths=<map\_path\_in\_repository\>`）

- APIはjobIdを返します。 ジョブのステータスを確認するには、ジョブ IDを持つGET リクエストを同じエンドポイント `http://<server:port\>/bin/guides/map-find/indexing?jobId=\{jobId\}`\（例：` http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`）に送信できます

- ジョブが完了すると、上記のGET リクエストは成功して応答し、マップが失敗した場合に言及します。 正常にインデックス化されたマップは、サーバーログから確認できます。


>[!NOTE]
>
> カスタムスキーマを使用している場合は、**カタログの統合** オプションで、AEM リポジトリのカスタム DTD ファイルとXSD catalog.xml ファイルのパスを定義する必要があります。




## `'fmdita rewriter'`競合を処理する手順

Experience Manager Guidesには、クロスマップの場合に生成されるリンク（2つの異なるマップのトピック間のリンク）を処理するための&#x200B;[**カスタム sling rewriter**](../cs-install-guide/conf-output-generation.md#custom-rewriter) モジュールがあります。

コードベースに別のカスタムスリングリライターがある場合は、`'order'`値が50より大きい値を使用します。これは、Experience Manager Guides sling リライターが`'order'` 50を使用するからです。  これを上書きするには、50を超える値が必要です。 詳細については、[出力の書き換えパイプライン ](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html)を参照してください。

このアップグレードでは、`'order'`の値が1000から50に変更されるので、既存のカスタムリライターがある場合は`'fmdita-rewriter'`と結合する必要があります。


## バージョン 5.0.0へのアップグレード

>[!TIP]
>
> バージョン 5.0.0 Service Pack 4へのアップグレードは、現在のバージョンのExperience Manager Guidesによって異なります。 バージョン 5.0.xを使用している場合は、バージョン 5.0.0 Service Pack 4に直接アップグレードできます。

>[!NOTE]
>
> 後処理とインデックス作成には数時間かかる場合があります。 オフピーク時間中にアップグレードプロセスを開始することをお勧めします。

****前提条件****

Experience Manager Guides 5.0.0のアップグレードプロセスを開始する前に、次のことを確認してください。

1. Experience Manager Guides バージョン 4.6.3、4.6.1、4.6.0、または4.4にアップグレードし、それぞれのインストール手順を完了しました。
1. （オプション）すべての翻訳タスクを閉じました。
1. **クラスのログレベルを** INFO`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript`に変更し、これらのログを新しいログファイル （例：`logs/translation_upgrade.log`）に追加しました。


## バージョン 5.0.0のインストール

1. [Adobe Software Distribution Portal](https://experience.adobe.com/#/downloads/content/software-distribution/ja/aem.html)から5.0.0 バージョンパッケージをダウンロードします。
1. バージョン 5.0.0 パッケージをインストールします。
1. トリガーを押して、翻訳マップのアップグレードジョブを開始します。 詳しくは、[ サーブレットを介したスクリプトのトリガーを有効にする](#enable-trigger-of-script-via-a-servlet)を参照してください。

1. パッケージのインストールが完了したら、次のメッセージ\（s\）がログに記録されるのを待ちます。

   `Completed the post deployment setup script`

   上記のメッセージは、インストールのすべての手順が完了したことを示します。

   次のエラー接頭辞のいずれかが発生した場合は、カスタマーサクセスチームに報告してください。

   - デプロイメント後のセットアップ スクリプトでエラーが発生しました
   - 翻訳マップの書き出し中に例外が発生しました
   - プロパティのv1からv2への翻訳マップをポートできません
1. バージョン 5.0.0 \（必要に応じて\）でリリースされたOxygen コネクタプラグインをアップグレードします。
1. パッケージのインストール後、ブラウザーキャッシュをクリアします。

## バージョン 5.0.0のインストール後

Experience Manager Guidesをインストールした後、新しくインストールしたバージョンに適用できる様々な設定を設定に統合できます。

>[!NOTE]
>
> dam-update-asset モデルはカスタマイズできます。 ですから、カスタマイズが行われた場合は、カスタマイズとExperience Manager Guidesをモデルの作業コピーに同期させる必要があります。

1. **DAM アセットの更新ワークフロー\（後処理変更\）:**

1. URLを開く：

   ```
   http://localhost:4502/libs/cq/workflow/admin/console/content/models.html 
   ```

1. **DAM アセットの更新ワークフロー**&#x200B;を選択します。
1. **編集**&#x200B;をクリックします。
1. **DXML Post Process Initiator** コンポーネントが存在する場合は、カスタマイズが同期されていることを確認します。
1. **DXML Post Process Initiator** コンポーネントが存在しない場合は、次の手順を実行してコンポーネントを挿入します。

1. 「**コンポーネントを挿入** \（処理の最後の手順としてExperience Manager Guidesの後処理を担当\）をクリックします。
1. 以下の詳細を含む&#x200B;**プロセス手順**&#x200B;を設定します。

   **共通タブ**

   **タイトル：** DXML後処理イニシエータ

   **説明**：変更または作成されたアセットのDXML後処理のSling ジョブをトリガーするDXML後処理イニシエータステップ

   **プロセスタブ**

   - 「**プロセス**」ドロップダウンから「**DXML Post Process Initiator**」を選択します

   - **ハンドラーの詳細**&#x200B;を選択

   - **完了**&#x200B;を選択

1. 変更を完了したら、右上の&#x200B;**同期**&#x200B;をクリックします。 成功の通知が届きます。

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
   - /libs/fmditor/libsbからオーバーレイされたコンポーネントは、新しい製品コードと比較し、/appsの下のオーバーレイファイルで更新する必要があります。
   - 製品から使用されるclientlib カテゴリは、変更について確認する必要があります。 上書きされた設定\（以下の例\）は、最新の機能を取得するために、最新の設定と比較する必要があります。
   - elementmapping.xml
   - ui\_config.json\（フォルダープロファイルで設定されている可能性があります\）
   - 修正済み`com.adobe.fmdita.config.ConfigManager`

1. damAssetLuceneでカスタマイズを追加した場合は、再度適用する必要がある場合があります。 これらの変更を行った後、reindexをtrueに設定します。 これにより、カスタマイズを使用して、既存のすべてのノードが再インデックスされます。 完了すると、再インデックスフラグは再びfalseに設定されます。 システム内のアセットの数によっては、この処理に数時間かかる場合があります。

## Experience Manager Guides インデックスを再インデックス化する手順

1. `crx/de`を開き、インデックスパス `/oak:index/guidesAssetProperties`に移動します
2. 再インデックスプロパティを`true` （`false` デフォルト）に設定し、**すべて保存**&#x200B;をクリックします。
3. 再インデックスが完了すると、再インデックス プロパティが`false`に設定され、再インデックス数が1増加します。

   >[!NOTE]
   >
   > データ量によっては数分かかる場合があります。
4. 他の追加または変更されたインデックスに対しても、同じ手順を実行します：`guidesBulkActivation`、`guidesPeerLinkIndex`、および`guidesKonnectTemplateIndex`。

## 既存のコンテンツをインデックス化する手順



既存のコンテンツのインデックスを作成するには、次の手順を実行します。

- サーバー\（正しい認証\）に対してPOST リクエストを実行します – `http://<server:port\>/bin/guides/map-find/indexing`。 （オプション：マップの特定のパスを渡してインデックスを作成できます。デフォルトでは、すべてのマップにインデックスが付けられます||例：`https://<Server:port\>/bin/guides/map-find/indexing?paths=<map\_path\_in\_repository\>`）

- APIはjobIdを返します。 ジョブのステータスを確認するには、ジョブ IDを持つGET リクエストを同じエンドポイント `http://<server:port\>/bin/guides/map-find/indexing?jobId=\{jobId\}`\（例：` http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`）に送信できます

- ジョブが完了すると、上記のGET リクエストは成功して応答し、マップが失敗した場合に言及します。 正常にインデックス化されたマップは、サーバーログから確認できます。


>[!NOTE]
>
> カスタムスキーマを使用している場合は、**カタログの統合** オプションで、AEM リポジトリのカスタム DTD ファイルとXSD catalog.xml ファイルのパスを定義する必要があります。




## `'fmdita rewriter'`競合を処理する手順

Experience Manager Guidesには、クロスマップの場合に生成されるリンク（2つの異なるマップのトピック間のリンク）を処理するための&#x200B;[**カスタム sling rewriter**](../cs-install-guide/conf-output-generation.md#custom-rewriter) モジュールがあります。

コードベースに別のカスタムスリングリライターがある場合は、`'order'`値が50より大きい値を使用します。これは、Experience Manager Guides sling リライターが`'order'` 50を使用するからです。  これを上書きするには、50を超える値が必要です。 詳細については、[出力の書き換えパイプライン ](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html)を参照してください。

このアップグレードでは、`'order'`の値が1000から50に変更されるので、既存のカスタムリライターがある場合は`'fmdita-rewriter'`と結合する必要があります。



## damAssetLuceneのインデックスを再作成する手順

インデックス定義は、ガイド付きdamAssetLuceneで更新されます。 バージョン 5.0.0にアップグレードした後にdamAssetLuceneのインデックスを再作成する方法については、[この記事](https://experienceleague.adobe.com/en/docs/experience-cloud-kcs/kbarticles/ka-16460)を参照してください。

>[!NOTE]
>
> ドキュメントに従いながら、/oak:index/damAssetLuceneのreindex=trueとreindex-async=trueの両方のプロパティが、保存操作で同時に更新されていることを確認してください。

## バージョン 5.1.0へのアップグレード

>[!IMPORTANT]
>
> 現在AEM 6.5を使用しており、AEM 6.5 LTSに移行する予定がある場合は、Experience Manager Guides 5.1.0 アップグレードを進める前に、必ずAEM アップグレードを完了してください。 詳しくは、[Adobe Experience Manager（AEM） 6.5 LTS](https://experienceleague.adobe.com/en/docs/experience-manager-65-lts/content/implementing/deploying/upgrading/upgrade)へのアップグレードを参照してください。

**前提条件**

>[!NOTE]
>
>5.1.0 Service Pack 4にアップグレードする場合は、Experience Manager Guidesのバージョン 5.1.0または5.1.xにインストールする必要があります。

Experience Manager Guides 5.1.0のアップグレードプロセスを開始する前に、次のことを確認してください。

1. Experience Manager Guides バージョン 4.6.3、4.6.4、5.0.0、または5.0.0 Service Pack 1にアップグレードし、それぞれのインストール手順を完了しました。
1. （オプション）すべての翻訳タスクを閉じました。
1. **クラスのログレベルを** INFO`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript`に変更し、これらのログを新しいログファイル （例：`logs/translation_upgrade.log`）に追加しました。

>[!NOTE]
>
> 後処理とインデックス作成には数時間かかる場合があります。 オフピーク時間中にアップグレードプロセスを開始することをお勧めします。

## バージョン 5.1.0のインストール

1. [Adobe Software Distribution Portal](https://experience.adobe.com/#/downloads/content/software-distribution/ja/aem.html)から5.1.0 バージョンのパッケージをダウンロードします。
1. バージョン 5.1.0 パッケージをインストールします。
1. トリガーを押して、翻訳マップのアップグレードジョブを開始します。 詳しくは、[ サーブレットを介したスクリプトのトリガーを有効にする](#enable-trigger-of-script-via-a-servlet)を参照してください。

1. パッケージのインストールが完了したら、次のメッセージ\（s\）がログに記録されるのを待ちます。

   `Completed the post deployment setup script`

   上記のメッセージは、インストールのすべての手順が完了したことを示します。

   次のエラー接頭辞のいずれかが発生した場合は、カスタマーサクセスチームに報告してください。

   - デプロイメント後のセットアップ スクリプトでエラーが発生しました
   - 翻訳マップの書き出し中に例外が発生しました
   - プロパティのv1からv2への翻訳マップをポートできません
1. バージョン 5.1.0 \（必要に応じて\）でリリースされたOxygen コネクタプラグインをアップグレードします。
1. パッケージのインストール後、ブラウザーキャッシュをクリアします。

## バージョン 5.1.0のインストール後

Experience Manager Guidesをインストールした後、新しくインストールしたバージョンに適用できる様々な設定を設定に統合できます。

>[!NOTE]
>
> dam-update-asset モデルはカスタマイズできます。 ですから、カスタマイズが行われた場合は、カスタマイズとExperience Manager Guidesをモデルの作業コピーに同期させる必要があります。

1. **DAM アセットの更新ワークフロー\（後処理変更\）:**

1. URLを開く：

   ```
   http://localhost:4502/libs/cq/workflow/admin/console/content/models.html 
   ```

1. **DAM アセットの更新ワークフロー**&#x200B;を選択します。
1. 「**編集**」を選択します。
1. **DXML Post Process Initiator** コンポーネントが存在する場合は、カスタマイズが同期されていることを確認します。
1. **DXML Post Process Initiator** コンポーネントが存在しない場合は、次の手順を実行してコンポーネントを挿入します。

1. 「**コンポーネントを挿入** \（処理の最終ステップとしてExperience Manager Guides後処理を担当\）を選択します。
1. 以下の詳細を含む&#x200B;**プロセス手順**&#x200B;を設定します。

   **共通タブ**

   **タイトル：** DXML後処理イニシエータ

   **説明**：変更または作成されたアセットのDXML後処理のSling ジョブをトリガーするDXML後処理イニシエータステップ

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
   - /libs/fmditor/libsbからオーバーレイされたコンポーネントは、新しい製品コードと比較し、/appsの下のオーバーレイファイルで更新する必要があります。
   - 製品から使用されるclientlib カテゴリは、変更について確認する必要があります。 上書きされた設定\（以下の例\）は、最新の機能を取得するために、最新の設定と比較する必要があります。
   - elementmapping.xml
   - ui\_config.json\（フォルダープロファイルで設定されている可能性があります\）
   - 修正済み`com.adobe.fmdita.config.ConfigManager`

1. damAssetLuceneでカスタマイズを追加した場合は、再度適用する必要がある場合があります。 これらの変更を行った後、reindexをtrueに設定します。 これにより、カスタマイズを使用して、既存のすべてのノードが再インデックスされます。 完了すると、再インデックスフラグは再びfalseに設定されます。 システム内のアセットの数によっては、この処理に数時間かかる場合があります。

## Experience Manager Guides インデックスを再インデックス化する手順

1. `crx/de`を開き、インデックスパス `/oak:index/guidesAssetProperties`に移動します
2. 再インデックスプロパティを`true` （`false` デフォルト）に設定し、**すべて保存**&#x200B;をクリックします。
3. 再インデックスが完了すると、再インデックス プロパティが`false`に設定され、再インデックス数が1増加します。

   >[!NOTE]
   >
   > データ量によっては数分かかる場合があります。
4. 他の追加または変更されたインデックスに対しても、同じ手順を実行します：`guidesBulkActivation`、`guidesPeerLinkIndex`、および`guidesKonnectTemplateIndex`。

## 既存のコンテンツをインデックス化する手順



既存のコンテンツのインデックスを作成するには、次の手順を実行します。

- サーバー\（正しい認証\）に対してPOST リクエストを実行します – `http://<server:port\>/bin/guides/map-find/indexing`。 （オプション：マップの特定のパスを渡してインデックスを作成できます。デフォルトでは、すべてのマップにインデックスが付けられます||例：`https://<Server:port\>/bin/guides/map-find/indexing?paths=<map\_path\_in\_repository\>`）

- APIはjobIdを返します。 ジョブのステータスを確認するには、ジョブ IDを持つGET リクエストを同じエンドポイント `http://<server:port\>/bin/guides/map-find/indexing?jobId=\{jobId\}`\（例：` http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`）に送信できます

- ジョブが完了すると、上記のGET リクエストは成功して応答し、マップが失敗した場合に言及します。 正常にインデックス化されたマップは、サーバーログから確認できます。


>[!NOTE]
>
> カスタムスキーマを使用している場合は、**カタログの統合** オプションで、AEM リポジトリのカスタム DTD ファイルとXSD catalog.xml ファイルのパスを定義する必要があります。




## `'fmdita rewriter'`競合を処理する手順

Experience Manager Guidesには、クロスマップの場合に生成されるリンク（2つの異なるマップのトピック間のリンク）を処理するための&#x200B;[**カスタム sling rewriter**](../cs-install-guide/conf-output-generation.md#custom-rewriter) モジュールがあります。

コードベースに別のカスタムスリングリライターがある場合は、`'order'`値が50より大きい値を使用します。これは、Experience Manager Guides sling リライターが`'order'` 50を使用するからです。  これを上書きするには、50を超える値が必要です。 詳細については、[出力の書き換えパイプライン ](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html)を参照してください。

このアップグレードでは、`'order'`の値が1000から50に変更されるので、既存のカスタムリライターがある場合は`'fmdita-rewriter'`と結合する必要があります。



## damAssetLuceneのインデックスを再作成する手順

インデックス定義は、ガイド付きdamAssetLuceneで更新されます。 バージョン 5.1.0にアップグレードした後にdamAssetLuceneのインデックスを再作成する方法については、[この記事](https://experienceleague.adobe.com/en/docs/experience-cloud-kcs/kbarticles/ka-16460)を参照してください。

>[!NOTE]
>
> ドキュメントに従いながら、/oak:index/damAssetLuceneのreindex=trueとreindex-async=trueの両方のプロパティが、保存操作で同時に更新されていることを確認してください。



**親トピック：** [ ダウンロードしてインストール ](download-install.md)
