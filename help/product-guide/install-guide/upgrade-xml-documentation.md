---
title: Adobe Experience Manager Guidesのアップグレード
description: Adobe Experience Manager Guidesのアップグレード方法を学ぶ
exl-id: f058b39f-7408-4874-942b-693e133886cf
feature: Installation
role: Admin
level: Experienced
source-git-commit: 7ecf29537ddfbfcff644c4f6e3dff32750868282
workflow-type: tm+mt
source-wordcount: '9155'
ht-degree: 0%

---

# Adobe Experience Manager Guidesのアップグレード {#id224MBE0M0XA}

>[!NOTE]
>
> 製品のライセンス済みバージョンに固有のアップグレード手順に従います。

現在のExperience Manager Guidesのバージョンを 5.1.0 サービスパック 3 にアップグレードできます。

- バージョン 5.1.0 または 5.1.x を使用している場合は、バージョン 5.1.0 サービスパック 3 に直接アップグレードできます。
- バージョン 4.6.0、4.6.x、5.0.0 または 5.0.x を使用している場合は、バージョン 5.1.0 にアップグレードする必要があります。
- バージョン 4.6.3、4.6.1、4.6 または 4.4 を使用している場合は、バージョン 5.0.0 にアップグレードする必要があります。
- バージョン 4.3.x、4.2、4.2.1 （ホットフィックス 4.2.1.3）、4.1、または 4.1.x を使用している場合は、バージョン 5.0.0 にアップグレードする前にバージョン 4.4 にアップグレードする必要があります。
- バージョン 4.0 を使用している場合、バージョン 4.3.x にアップグレードする前にバージョン 4.2 にアップグレードする必要があります。
- バージョン 3.8.5 を使用している場合、バージョン 4.2 にアップグレードする前にバージョン 4.0 にアップグレードする必要があります。
- バージョン 3.8.5 より前のバージョンを使用している場合は、[Experience Manager Guides ヘルプ PDF アーカイブ &#x200B;](https://helpx.adobe.com/xml-documentation-for-experience-manager/archive.html) にある製品固有のインストールガイドのAdobe Experience Manager Guidesのアップグレードの節を参照してください。


>[!NOTE]
>
> Experience Manager Guides版をアップグレードする前に、AEM サービスパックをインストールする必要があります。

詳しくは、次の手順を参照してください。

- [バージョン 5.1.0 へのアップグレード](#upgrade-to-version-510)
- [バージョン 5.0.0 へのアップグレード](#upgrade-to-version-500)
- [バージョン 4.6.0 へのアップグレード](#upgrade-to-version-460)
- [バージョン 4.4.0 へのアップグレード](#upgrade-to-version-440)
- [バージョン 4.3.1.5 へのアップグレード](#upgrade-to-version-4315)
- [バージョン 4.3.1 へのアップグレード](#upgrade-to-version-431)
- [バージョン 4.3.0 へのアップグレード](#upgrade-to-version-430)
- [バージョン 4.2.1 へのアップグレード](#upgrade-to-version-421)
- [バージョン 4.2 へのアップグレード](#upgrade-to-version-42)
- [3.8.5 からバージョン 4.0 へのアップグレード](#upgrade-from-version-385-to-version-40)


>[!IMPORTANT]
>
> アップグレードを開始する前に、データの損失を避けるために完全なシステムバックアップを取ります。

## バージョン 3.8.5 からバージョン 4.0 へのアップグレード

Experience Manager Guides バージョン 3.8.5 を使用している場合は、Experience Manager Guidesのバージョン 4.0 にアップグレードできます。 アップグレード機能を使用すると、以前のバージョンのExperience Manager Guidesをアンインストールする必要がなくなります。

プロセスを実行する前に、完了する必要がある特定のタスクがあります。 次のサブセクションでは、前提条件、レポートの生成および移行プロセスについて説明します。 また、Experience Manager Guides バージョン 4.0 のインストール後、お客様の設定に合わせて様々な設定をカスタマイズできます。

>[!NOTE]
>
> このアップグレードプロセスは、バージョン 3.8.5 からバージョン 4.0 までの場合にのみ適用されます。バージョン 3.4 以降から 3.8.5 へのアップグレードのプロセスについては、*Adobe Experience Manager Guides ヘルプのExperience Manager Guides アーカイブ* にある製品固有のインストールガイドの [PDFのアップグレード &#x200B;](https://helpx.adobe.com/xml-documentation-for-experience-manager/archive.html) の節を参照してください。



**&#x200B;**&#x200B;前提条件&#x200B;**&#x200B;**

Experience Manager Guidesのアップグレードプロセスを開始する前に、次のことを確認します。

1. レビュー用に開いているトピックのレビューコメントを読み込みました。
1. すべてのアクティブなレビューをクローズしました。
1. すべての翻訳タスクを終了しました。
1. Experience Manager Guidesの以前のバージョン\（メジャーリリースまたはパッチリリース\）の上にインストールされているExperience Manager Guides ホットフィックスをすべてアンインストールします。

**バージョン 4.0 のインストール前**

バージョン 4.0 をインストールする前に、次の手順を実行します。

1. この時点で、Experience Manager Guidesがバージョン 3.8.5 であることを確認します。
1. アップグレードスクリプトパッケージをダウンロードします。 これを行うには、[Adobe ソフトウェア配布ポータルで「XML Documentation solution 4.0 Upgrade Package」を検索します。これにより &#x200B;](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)zip ファイルがダウンロードされます。
1. パッケージマネージャーを介してこのパッケージをAEMにアップロードし、このパッケージをインストールします。
1. アップグレードパッケージがインストールされたら、以下のスクリプトを同じ順序で実行し、以下の手順に従います。

**アップグレード互換性 API を確認**

この API は、現在のシステムステータスを評価し、アップグレードが可能かどうかを報告するように設計されています。 このスクリプトを実行するには、以下に指定されたエンドポイントをトリガーします。

| エンドポイント | /bin/dxml/upgrade/3xto4x/report |
| --- | --- |
| リクエストタイプ | **GET** Web ブラウザーを使用できます。このブラウザーでは、管理者としてAEM インスタンスにログインしています。 |
| 期待される応答 | -   必要なノードをすべて移動できる場合は、合格したチェックが表示されます。 <br>-   ターゲットの場所にノードが存在する場合は、関連するエラーが表示されます。 リポジトリ \（delete node /var/dxml\）をクリーンアップし、アップグレードパッケージを再インストールしてから、このエンドポイントを再度トリガーします。 <br>**メモ：** これは一般的なエラーではありません。3.x Experience Manager Guidesでは、以前はターゲットの場所が使用されていないからです。 <br> -   このスクリプトが成功しない場合は、続行してカスタマーサクセスチームに報告しないでください。 |

**システムデータ移行 API**

この API は、**移行マッピング** の節で説明されているように、システムデータを移行するように設計されています。

1. アップグレード互換性 API の確認が失敗した場合は、このスクリプトを実行しないでください\（実行しないでください\）。
1. アップグレード互換性 API のチェックが成功を返したら、アップグレードスクリプトを実行できます。

| エンドポイント | /bin/dxml/upgrade/3xto4x |
| --- | --- |
| リクエストタイプ | **POST** このスクリプトは POST リクエストなので、Postmanなどのエージェントを使用して実行する必要があります。 |
| 期待される応答 | -   移行が正常に完了したら、XML Documentation ソリューションバージョン 4.0.<br> – をインストールできます。   エラーが発生した場合は、最後のチェックポイントに復元し、エラーログと API 出力をカスタマーサクセスチームと共有します。 |

**移行マッピング**：上記の API は、ソースの場所の下のすべてのデータをターゲットの場所に移行します。

| ソース | ターゲット |
|------|------|
| /content/fmdita | /var/dxml |
| /content/dxml | /var/dxml |
| /etc/fmdita | /libs/fmdita |

## バージョン 4.0 のインストール {#id23598G006XA}

1. アップグレード手順が正常に完了した場合にのみ、バージョン 4.0 をインストールします。
1. [Adobe ソフトウェア配布ポータル &#x200B;](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html) から 4.0 バージョン パッケージをダウンロードします：

   - UUID 版のソフトウェアを使用している場合は、「4.0 UUID Release for XML Documentation solution for AEM 6.5」を検索してください。
   - 非 UUID 版のソフトウェアを使用している場合は、「4.0 Non-UUID Release for XML Documentation solution for AEM 6.5」を検索します。
CRX パッケージマネージャーを使用して、パッケージを既存のAEM サーバーインスタンスにアップロードし、インストールします。

   >[!NOTE]
   >
   > すべてのシステムコンポーネントが起動するのを待ちます。

1. パッケージのインストール後にブラウザーのキャッシュをクリアします。
1. AEM オーサーインスタンスに Dispatcher が設定されている場合は、次の手順を実行します。
   - Dispatcher ルールで以下が処理されることを確認します。
   - /home/users/\*/preferences という URL パターンが許可リストに登録されています。
   - URL パターン /libs/cq/security/userinfo.jsonはキャッシュされません。
1. Dispatcher のキャッシュをクリア\（キャッシュされた `clientlibs` をクリアする場合）\。

## バージョン 4.2 へのアップグレード

バージョン 4.2 へのアップグレードは、Experience Manager Guidesの現在のバージョンによって異なります。

バージョン 4.0、4.1 または 4.1.x を使用している場合は、バージョン 4.2 に直接アップグレードできます。

**&#x200B;**&#x200B;前提条件&#x200B;**&#x200B;**

Experience Manager Guides 4.2 のアップグレードプロセスを開始する前に、次のことを確認してください。

1. Experience Manager Guides バージョン 4.0、4.1 または 4.1.x へのアップグレード。
1. すべての翻訳タスクを終了しました。
1. **のクラスのログレベルを** INFO`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript` に変更し、これらのログを新しいログファイル（例：`logs/translation_upgrade.log.`）に追加しました

>[!NOTE]
>
> すべてのアクティブなレビューをクローズする必要があります。 4.2 へのアップグレード中にレビュータスクが閉じられない場合、古い進行中のレビュータスクでは引き続き古いレビューページにユーザーが表示され、アップグレード後に作成されたレビュータスクでは機能の最新の更新が表示されます。

## バージョン 4.2 のインストール {#id2245IK0E0EV}

1. [Adobe ソフトウェア配布ポータル &#x200B;](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html) から 4.2 バージョン パッケージをダウンロードします。
1. バージョン 4.2 パッケージをインストールします。
1. パッケージのインストールが完了したら、次のメッセージがログに表示されるまで待ちます。

   `Completed the post deployment setup script`

   上記のメッセージは、インストールのすべての手順が完了したことを示しています。

   次のエラープレフィックスのいずれかが発生した場合は、カスタマーサクセスチームに報告してください。

   - デプロイメント後セットアップスクリプトのエラー
   - 翻訳マップの移行中の例外
   - プロパティの翻訳マップを v1 から v2 にポートできません
1. バージョン 4.2 \（必要に応じて\）でリリースされた Oxygen コネクタプラグインをアップグレードします。
1. パッケージのインストール後にブラウザーのキャッシュをクリアします。
1. 次のセクションで説明するように、カスタマイズのアップグレードを続行します。

## バージョン 4.2 のインストール後 {#id2326F02004K}

>[!IMPORTANT]
>
> アップグレードしたサーバーにハイテク テンプレートが表示されない。 ハイテクテンプレートをサーバーに含めるには、次の場所にコピーします。Source: /libs/fmdita/pdf/Hi-Tech Destination: /content/dam/dita-templates/pdf

Experience Manager Guidesをインストールした後、新しくインストールしたバージョンから適用できる様々な設定をセットアップに結合できます。

>[!NOTE]
>
> dam-update-asset モデルはカスタマイズできます。 そのため、カスタマイズが完了している場合は、カスタマイズとExperience Manager Guidesをモデルの作業用コピーに同期する必要があります。

1. **DAM アセットの更新ワークフロー\（変更の後処理\）:**

1. 次の URL を開きます。

   ```http
   http://localhost:4502/libs/cq/workflow/admin/console/content/models.html
   ```

1. **DAM アセットの更新ワークフロー** を選択します。
1. **編集**&#x200B;をクリックします。
1. **DXML 後処理イニシエーター** コンポーネントが存在する場合は、カスタマイズが同期されていることを確認します。
1. **DXML Post Process Initiator** コンポーネントがない場合は、次の手順を実行して挿入します。

1. **コンポーネントを挿入**\（プロセスの最後の手順としてExperience Manager Guidesの後処理を担当\）をクリックします。
1. 以下の詳細を使用して **プロセスステップ** を設定します。

   **「共通」タブ**

   **タイトル：** DXML 後処理イニシエーター

   **説明**：変更または作成されたアセットの DXML 後処理のための Sling ジョブをトリガーする DXML 後処理イニシエーターステップ

   **「プロセス」タブ**

   - **プロセス** ドロップダウンから **DXML 後処理イニシエーター** を選択します

   - **ハンドラー処理の設定** を選択します

   - 「**完了**」を選択します。

1. 変更が完了したら、右上の「**同期**」をクリックします。 成功通知が届きます。

   >[!NOTE]
   >
   > カスタマイズした変更内容およびExperience Manager Guides後処理ステップが最終的なワークフローモデルに存在することを更新して確認します。

1. **DAM アセットの更新ワークフロー** を検証したら、対応するランチャー設定を確認します。 これを行うには、AEM ワークフローインターフェイスに移動し、ランチャーを開きます。

   ```http
   http://localhost:4502/libs/cq/workflow/content/console.html
   ```

   **DAM アセットの更新」ワークフローに対応する次の 2 つのランチャー\（アクティブである必要があります\）を検索して変更し** す。

1. *DAM アセットの更新ワークフロー」の「* ノードが作成されました **」のランチャー** – 条件 `"jcr:content/jcr:mimeType!=video"` の場合、「グロビング」値は次のようになります。

   ```json
   /content/dam(/((?!/subassets|/translation_output).)*/)renditions/original
   ```

   - 「excludeList」には `"event-user-data:changedByWorkflowProcess"` が必要です。
   - *DAM アセットの更新ワークフロー –* 条件「**」の「** ノードが変更されました `jcr:content/jcr:mimeType!=video`」のランチャー
   - 「グロビング」値は次のようになります。

   ```json
   /content/dam(/((?!/subassets|/translation_output).)*/)renditions/original
   ```

   - 「excludeList」には `"event-user-data:changedByWorkflowProcess"` が必要です。
1. アップグレードが完了したら、カスタマイズやオーバーレイが検証され、新しいアプリケーションコードに一致するように更新されます。 以下に例をいくつか示します。
   - /libs/fmditaor/libsor からオーバーレイされたコンポーネントは、新しい製品コードと比較する必要があり、更新は/apps の下のオーバーレイされたファイルで行う必要があります。
   - 製品で使用される clientlib カテゴリについては、変更の有無を確認する必要があります。 オーバーライドされた設定は、最新の機能を取得するために、\（以下の例\）最新の設定と比較する必要があります。
   - elementmapping.xml
   - ui\_config.json\（フォルダープロファイルで設定されている可能性があります\）
   - 修正 `com.adobe.fmdita.config.ConfigManager`
   - [&#x200B; 移行マッピング &#x200B;](#id2244LE040XA) の節\で説明したように）カスタムコードのいずれかが古いパスを使用していたかどうかを確認します。カスタマイズが期待どおりに機能するように、新しいパスに更新する必要があります。
1. 現在のリリースで導入された新しい設定について確認し（[&#x200B; リリースノート &#x200B;](../release-info/release-notes-4-3.md)\）、機能に影響があるかどうかを確認してから適切なアクションを実行します。 例えば、バージョン 4.0 で導入された「ファイルとバージョンの処理の改善」を利用するには、設定を有効にする必要があります。

## 新しい検索と置換を使用するために、既存のコンテンツのインデックスを作成する手順は次のとおりです。

既存のコンテンツのインデックスを作成し、新しい検索と置換のテキストをマップレベルで使用するには、次の手順を実行します。

- サーバー\（正しい認証\） - `http://<server:port\>/bin/guides/map-find/indexing` に対して POST リクエストを実行します。 \（オプション：マップの特定のパスをインデックスを作成するために渡すことができます。既定では、すべてのマップにインデックスが作成されます\|\|例：`https://<Server:port\>/bin/guides/map-find/indexing?paths=<map\_path\_in\_repository\>`\）

- API は jobId を返します。 ジョブのステータスを確認するには、ジョブ ID を含むGET リクエストを同じエンドポイントに送信します。

`http://<server:port\>/bin/guides/map-find/indexing?jobId=\{jobId\}`\（例：`http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42`\）

- ジョブが完了すると、上記のGET リクエストが成功を返し、失敗したマップがあるかどうかを示します。 正常にインデックス化されたマップは、サーバ ログから確認できます。

アップグレードジョブが失敗し、エラーログに次のエラーが表示される場合：

「*クエリ* が *100000 個を超えるノードを読み取りまたはトラバースしました*。 他のタスクへの影響を避けるために、処理は停止されました。」

これは、アップグレードで使用されるクエリに対してインデックスが正しく設定されていないことが原因で発生する可能性があります。 次の回避策を試すことができます。

1. damAssetLucene oak インデックスで、ノードに `indexNodeName` のようにブール値プロパティ `true` を追加します。
   `/oak:index/damAssetLucene/indexRules/dam:Asset`
1. ノードの下に、抜粋という名前の新しいノードを追加します。

   `/oak:index/damAssetLucene/indexRules/dam:Asset/properties`
ノードで次のプロパティを設定します。

   ```
   name - rep:excerpt
   propertyIndex - {Boolean}true
   notNullCheckEnabled - {Boolean}true
   ```

   `damAssetLucene` の構造は次のようになります。

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


   （他の既存のノードおよびプロパティと共に）

1. `damAssetLucene` インデックスを再インデックス化します（reindex フラグをに設定します）。`true`:
再度インデックスが `false` 成されるのを待ちます（これは、インデックス再作成が完了したことを示します）。 インデックスのサイズによっては、数時間かかる場合があります。
1. 前の手順を実行して、インデックス作成スクリプトを再度実行します。


## バージョン 4.2.1 へのアップグレード

>[!TIP]
>
>Hotfix 4.2.1.3 はバージョン 4.2.1 にインストールすることをお勧めします。

バージョン 4.2.1 へのアップグレードは、Experience Manager Guidesの現在のバージョンによって異なります。 バージョン 4.1、4.1.x、または 4.2 を使用している場合は、バージョン 4.2.1 に直接アップグレードできます。

>[!NOTE]
>
>後処理とインデックス作成には数時間かかる場合があります。 アップグレードプロセスは、ピーク時を避けて開始することをお勧めします。

**&#x200B;**&#x200B;前提条件&#x200B;**&#x200B;**

Experience Manager Guides 4.2.1 のアップグレードプロセスを開始する前に、次のことを確認してください。

1. Experience Manager Guides バージョン 4.1、4.1.x、または 4.2 にアップグレードしました。
1. すべての翻訳タスクを終了しました。
1. **のクラスのログレベルを** INFO`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript` に変更し、これらのログを新しいログファイル（例：`logs/translation_upgrade.log.`）に追加しました

>[!NOTE]
>
> すべてのアクティブなレビューをクローズする必要があります。 4.2 へのアップグレード中にレビュータスクが閉じられない場合、古い進行中のレビュータスクでは引き続き古いレビューページにユーザーが表示され、アップグレード後に作成されたレビュータスクでは機能の最新の更新が表示されます。

## バージョン 4.2.1 のインストール

1. [Adobe ソフトウェア配布ポータル &#x200B;](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html) から 4.2.1 バージョン パッケージをダウンロードします。
1. バージョン 4.2.1 パッケージをインストールします。
1. トリガーをヒットして、翻訳マップのアップグレードジョブを開始することもできます。 詳しくは、[&#x200B; サーブレットを使用したスクリプトのトリガーを有効にする &#x200B;](#enable-trigger-of-script-via-a-servlet-for-421) を参照してください。


1. パッケージのインストールが完了したら、次のメッセージがログに表示されるまで待ちます。

   `Completed the post deployment setup script`

   上記のメッセージは、インストールのすべての手順が完了したことを示しています。

   次のエラープレフィックスのいずれかが発生した場合は、カスタマーサクセスチームに報告してください。

   - デプロイメント後セットアップスクリプトのエラー
   - 翻訳マップの移行中の例外
   - プロパティの翻訳マップを v1 から v2 にポートできません
1. バージョン 4.2 \（必要に応じて\）でリリースされた Oxygen コネクタプラグインをアップグレードします。
1. パッケージのインストール後にブラウザーのキャッシュをクリアします。
1. 次のセクションで説明するように、カスタマイズのアップグレードを続行します。

### サーブレットを使用したスクリプトのトリガーを有効にする（4.2.1 の場合）

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

上記の応答 JSON では、キー `lockNodePath` は、リポジトリーで作成されたノードへのパスを保持し、送信されたジョブを指します。 ジョブが完了すると自動的に削除されますが、その時点まで、ジョブの現在のステータスについては、このノードを参照できます。

サンプルログ：
以下は、スクリプトのトリガー後にログファイルに表示されるログのサンプルです。

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

次の手順に進む前に、`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript Completed porting of translation map from V1 to V2` と `com.adobe.fmdita.xmltranslation.ots.TranslationMapUpgradeOTS Completed the thread to upgrade translation map from V1 to V2` を探します。



## バージョン 4.2.1 のインストール後

>[!IMPORTANT]
>
> アップグレードしたサーバーにハイテク テンプレートが表示されない。 ハイテクテンプレートをサーバーに含めるには、次の場所にコピーします。Source: /libs/fmdita/pdf/Hi-Tech Destination: /content/dam/dita-templates/pdf

Experience Manager Guidesをインストールした後、新しくインストールしたバージョンから適用できる様々な設定をセットアップに結合できます。

>[!NOTE]
>
> dam-update-asset モデルはカスタマイズできます。 そのため、カスタマイズが完了している場合は、カスタマイズとExperience Manager Guidesをモデルの作業用コピーに同期する必要があります。

1. **DAM アセットの更新ワークフロー\（変更の後処理\）:**

1. 次の URL を開きます。

   ```http
   http://localhost:4502/libs/cq/workflow/admin/console/content/models.html
   ```

1. **DAM アセットの更新ワークフロー** を選択します。
1. **編集**&#x200B;をクリックします。
1. **DXML 後処理イニシエーター** コンポーネントが存在する場合は、カスタマイズが同期されていることを確認します。
1. **DXML Post Process Initiator** コンポーネントがない場合は、次の手順を実行して挿入します。

1. **コンポーネントを挿入**\（プロセスの最後の手順としてExperience Manager Guidesの後処理を担当\）をクリックします。
1. 以下の詳細を使用して **プロセスステップ** を設定します。

   **「共通」タブ**

   **タイトル：** DXML 後処理イニシエーター

   **説明**：変更または作成されたアセットの DXML 後処理のための Sling ジョブをトリガーする DXML 後処理イニシエーターステップ

   **「プロセス」タブ**

   - **プロセス** ドロップダウンから **DXML 後処理イニシエーター** を選択します

   - **ハンドラー処理の設定** を選択します

   - 「**完了**」を選択します。

1. 変更が完了したら、右上の「**同期**」をクリックします。 成功通知が届きます。

   >[!NOTE]
   >
   > カスタマイズした変更内容およびExperience Manager Guides後処理ステップが最終的なワークフローモデルに存在することを更新して確認します。

1. **DAM アセットの更新ワークフロー** を検証したら、対応するランチャー設定を確認します。 これを行うには、AEM ワークフローインターフェイスに移動し、ランチャーを開きます。

   ```http
   http://localhost:4502/libs/cq/workflow/content/console.html
   ```

   **DAM アセットの更新」ワークフローに対応する次の 2 つのランチャー\（アクティブである必要があります\）を検索して変更し** す。

1. *DAM アセットの更新ワークフロー」の「* ノードが作成されました **」のランチャー** – 条件 `"jcr:content/jcr:mimeType!=video"` の場合、「グロビング」値は次のようになります。

   ```json
   /content/dam(/((?!/subassets|/translation_output).)*/)renditions/original
   ```

   - 「excludeList」には `"event-user-data:changedByWorkflowProcess"` が必要です。
   - *DAM アセットの更新ワークフロー」の「* ノードが変更されました **」のランチャー –** 条件「`jcr:content/jcr:mimeType!=video`」の場合、「グロビング」の値は次のようになります。

   ```json
   /content/dam(/((?!/subassets|/translation_output).)*/)renditions/original
   ```

   - `excludeList` は `"event-user-data:changedByWorkflowProcess"` を持っているはずです。

1. アップグレードが完了したら、カスタマイズやオーバーレイが検証され、新しいアプリケーションコードに一致するように更新されます。 以下に例をいくつか示します。
   - /libs/fmditaor/libsor からオーバーレイされたコンポーネントは、新しい製品コードと比較する必要があり、更新は/apps の下のオーバーレイされたファイルで行う必要があります。
   - 製品で使用される clientlib カテゴリについては、変更の有無を確認する必要があります。 オーバーライドされた設定は、最新の機能を取得するために、\（以下の例\）最新の設定と比較する必要があります。
   - elementmapping.xml
   - ui\_config.json\（フォルダープロファイルで設定されている可能性があります\）
   - 修正 `com.adobe.fmdita.config.ConfigManager`
   - [&#x200B; 移行マッピング &#x200B;](#id2244LE040XA) の節\で説明したように）カスタムコードのいずれかが古いパスを使用していたかどうかを確認します。カスタマイズが期待どおりに機能するように、新しいパスに更新する必要があります。
1. 現在のリリースで導入された新しい設定について確認し（[&#x200B; リリースノート &#x200B;](../release-info/release-notes-4-2-1.md)\）、機能に影響があるかどうかを確認してから適切なアクションを実行します。 例えば、バージョン 4.0 で導入された「ファイルとバージョンの処理の改善」を利用するには、設定を有効にする必要があります。

## 新しい検索と置換を使用するために、既存のコンテンツのインデックスを作成する手順は次のとおりです。

既存のコンテンツのインデックスを作成し、新しい検索と置換のテキストをマップレベルで使用するには、次の手順を実行します。

- `damAssetLucene` のインデックス作成が完了したことを確認します。 サーバーに存在するデータの量に応じて、最大数時間かかる場合があります。 で再インデックスフィールドが false に設定されていることを確認すると、再インデックスが完了したことを確認できます。
  `http://<server:port>/oak:index/damAssetLucene`。  また、`damAssetLucene` にカスタマイズを追加した場合は、そのカスタマイズを再度適用する必要がある可能性があります。

- サーバー\（正しい認証\） - `http://<server:port\>/bin/guides/map-find/indexing` に対して POST リクエストを実行します。 （オプション：マップの特定のパスをインデックスに指定できます。デフォルトでは、すべてのマップにインデックスが付けられます\|\|例：`https://<Server:port\>/bin/guides/map-find/indexing?paths=<map\_path\_in\_repository\>`）。

- ルートフォルダーを渡して、特定のフォルダー（およびそのサブフォルダー）の DITA マップのインデックスを作成することもできます。 例えば、`http://<server:port\>/bin/guides/map-find/indexing?root=/content/dam/test` のようになります。paths パラメーターと root パラメーターの両方が渡される場合、paths パラメーターのみが考慮されることに注意してください。

- API は jobId を返します。 ジョブのステータスを確認するには、同じエンドポイント `http://<server:port\>/bin/guides/map-find/indexing?jobId=\{jobId\}`\（例：`http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42`\）にジョブ ID を含むGET リクエストを送信します


- ジョブが完了すると、上記のGET リクエストが成功を返し、失敗したマップがあるかどうかを示します。 正常にインデックス化されたマップは、サーバ ログから確認できます。


## バージョン 4.3.0 へのアップグレード

バージョン 4.3.0 へのアップグレードは、Experience Manager Guidesの現在のバージョンによって異なります。 バージョン 4.2 または 4.2.x を使用している場合は、バージョン 4.3.0 に直接アップグレードできます。

>[!NOTE]
>
>後処理とインデックス作成には数時間かかる場合があります。 アップグレードプロセスは、ピーク時を避けて開始することをお勧めします。

**&#x200B;**&#x200B;前提条件&#x200B;**&#x200B;**

Experience Manager Guides 4.3.0 のアップグレードプロセスを開始する前に、次のことを確認してください。

1. Experience Manager Guides バージョン 4.2 または 4.2.x にアップグレードし、それぞれのインストール手順を完了しました。
1. すべての翻訳タスクを終了しました。



## バージョン 4.3.0 のインストール

1. [Adobe ソフトウェア配布ポータル &#x200B;](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html) から 4.3.0 バージョン パッケージをダウンロードします。
1. バージョン 4.3.0 パッケージをインストールします。
1. パッケージのインストール後にブラウザーのキャッシュをクリアします。
1. フォルダープロファイルの「`ui_config.json`XML エディター設定 **」タブから** ファイルをアップグレードします。


## バージョン 4.3.0 のインストール後

Experience Manager Guidesをインストールした後、新しくインストールしたバージョンから適用できる様々な設定をセットアップに結合できます。

## 壊れたリンクレポートを使用するために、既存のコンテンツを後処理する手順


既存のコンテンツを後処理し、新しい壊れたリンクのレポートを使用するには、次の手順を実行します。

1. （オプション）システムに 100,000 個を超える Dita ファイルがある場合は、`queryLimitReads` の `org.apache.jackrabbit.oak.query.QueryEngineSettingsService` を大きい値（存在するアセットの数を超える値は、たとえば 200,000）に変更してから再デプロイします。

   | PID | プロパティキー | プロパティの値 |
   |---|---|---|
   | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitReads | 値：200000 <br> デフォルト値：100000 |

1. 次の API を実行して、すべてのファイルに対して後処理を実行します。

   | エンドポイント | /bin/guides/reports/upgrade |
   |---|---|
   | リクエストタイプ | **POST** このスクリプトは POST リクエストなので、Postmanなどのエージェントを使用して実行する必要があります。 |
   | 期待される応答 | API は jobId を返します。 ジョブのステータスを確認するには、ジョブ ID を含むGET リクエストを同じエンドポイントに送信します。<br> サンプル URL: `http://<server:port>/bin/guides/reports/upgrade` |

   | エンドポイント | /bin/guides/reports/upgrade |
   |---|---|
   | リクエストタイプ | **GET** |
   | パラメーター | jobId：前の POST リクエストから受け取った jobId を渡します。 |
   | 期待される応答 | - ジョブが完了すると、GET リクエストは正常に応答します。 <br> - エラーが発生した場合は、エラーログを API 出力と共にカスタマーサクセスチームと共有します。  <br> サンプル URL: `http://<server:port>/bin/guides/reports/upgrade?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678` |


1. 手順 1 で変更した場合は、デフォルトまたは以前の既存の値 `queryLimitReads` に戻します。



## バージョン 4.3.1 へのアップグレード

バージョン 4.3.1 へのアップグレードは、Experience Manager Guidesの現在のバージョンによって異なります。 バージョン 4.3.0、4.2 または 4.2.1 を使用している場合は、バージョン 4.3.1 に直接アップグレードできます。

>[!NOTE]
>
>後処理とインデックス作成には数時間かかる場合があります。 アップグレードプロセスは、ピーク時を避けて開始することをお勧めします。

**&#x200B;**&#x200B;前提条件&#x200B;**&#x200B;**

Experience Manager Guides 4.3.1 のアップグレードプロセスを開始する前に、次のことを確認します。

1. Experience Manager Guides バージョン 4.3.0、4.2 または 4.2.1 にアップグレードして、それぞれのインストール手順を完了しました。
1. （任意）すべての翻訳タスクを終了しました。
1. **のクラスのログレベルを** INFO`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript` に変更し、これらのログを新しいログファイル（例：`logs/translation_upgrade.log`）に追加しました。


## バージョン 4.3.1 のインストール

1. [Adobe ソフトウェア配布ポータル &#x200B;](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html) から 4.3.1 バージョン パッケージをダウンロードします。
1. バージョン 4.3.1 パッケージをインストールします。
1. トリガーをヒットして、翻訳マップのアップグレードジョブを開始することもできます。 詳しくは、[&#x200B; サーブレットを使用したスクリプトのトリガーを有効にする &#x200B;](#enable-trigger-of-script-via-a-servlet-for-431) を参照してください。


1. パッケージのインストールが完了したら、次のメッセージがログに表示されるまで待ちます。

   `Completed the post deployment setup script`

   上記のメッセージは、インストールのすべての手順が完了したことを示しています。

   次のエラープレフィックスのいずれかが発生した場合は、カスタマーサクセスチームに報告してください。

   - デプロイメント後セットアップスクリプトのエラー
   - 翻訳マップの移行中の例外
   - プロパティの翻訳マップを v1 から v2 にポートできません
1. バージョン 4.2 \（必要に応じて\）でリリースされた Oxygen コネクタプラグインをアップグレードします。
1. パッケージのインストール後にブラウザーのキャッシュをクリアします。
1. 次のセクションで説明するように、カスタマイズのアップグレードを続行します。

### サーブレットを使用したスクリプトのトリガーを有効にする（4.3.1 の場合）

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

上記の応答 JSON では、キー `lockNodePath` は、リポジトリーで作成されたノードへのパスを保持し、送信されたジョブを指します。 ジョブが完了すると自動的に削除されますが、その時点まで、ジョブの現在のステータスについては、このノードを参照できます。

サンプルログ：
以下は、スクリプトのトリガー後にログファイルに表示されるログのサンプルです。

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

次の手順に進む前に、`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript Completed porting of translation map from V1 to V2` と `com.adobe.fmdita.xmltranslation.ots.TranslationMapUpgradeOTS Completed the thread to upgrade translation map from V1 to V2` を探します。

## バージョン 4.3.1 のインストール後



Experience Manager Guidesをインストールした後、新しくインストールしたバージョンから適用できる様々な設定をセットアップに結合できます。

>[!NOTE]
>
> dam-update-asset モデルはカスタマイズできます。 そのため、カスタマイズが完了している場合は、カスタマイズとExperience Manager Guidesをモデルの作業用コピーに同期する必要があります。

1. **DAM アセットの更新ワークフロー\（変更の後処理\）:**

1. 次の URL を開きます。

   ```
   http://localhost:4502/libs/cq/workflow/admin/console/content/models.html 
   ```

1. **DAM アセットの更新ワークフロー** を選択します。
1. **編集**&#x200B;をクリックします。
1. **DXML 後処理イニシエーター** コンポーネントが存在する場合は、カスタマイズが同期されていることを確認します。
1. **DXML Post Process Initiator** コンポーネントがない場合は、次の手順を実行して挿入します。

1. **コンポーネントを挿入**\（プロセスの最後の手順としてExperience Manager Guidesの後処理を担当\）をクリックします。
1. 以下の詳細を使用して **プロセスステップ** を設定します。

   **「共通」タブ**

   **タイトル：** DXML 後処理イニシエーター

   **説明**：変更または作成されたアセットの DXML 後処理のための Sling ジョブをトリガーする DXML 後処理イニシエーターステップ

   **「プロセス」タブ**

   - **プロセス** ドロップダウンから **DXML 後処理イニシエーター** を選択します

   - **ハンドラー処理の設定** を選択します

   - 「**完了**」を選択します。

1. 変更が完了したら、右上の「**同期**」をクリックします。 成功通知が届きます。

   >[!NOTE]
   >
   > カスタマイズした変更内容およびExperience Manager Guides後処理ステップが最終的なワークフローモデルに存在することを更新して確認します。

1. **DAM アセットの更新ワークフロー** を検証したら、対応するランチャー設定を確認します。 これを行うには、AEM ワークフローインターフェイスに移動し、ランチャーを開きます。

   ```http
   http://localhost:4502/libs/cq/workflow/content/console.html
   ```

   **DAM アセットの更新」ワークフローに対応する次の 2 つのランチャー\（アクティブである必要があります\）を検索して変更し** す。

1. *DAM アセットの更新ワークフロー」の「* ノードが作成されました **」のランチャー** – 条件 `"jcr:content/jcr:mimeType!=video"` の場合、「グロビング」値は次のようになります。

   ```json
   /content/dam(/((?!/subassets|/translation_output).)*/)renditions/original
   ```

   - 「excludeList」には `"event-user-data:changedByWorkflowProcess"` が必要です。
   - *DAM アセットの更新ワークフロー」の「* ノードが変更されました **」のランチャー –** 条件「`jcr:content/jcr:mimeType!=video`」の場合、「グロビング」の値は次のようになります。

   ```json
   /content/dam(/((?!/subassets|/translation_output).)*/)renditions/original
   ```

   - `excludeList` は `"event-user-data:changedByWorkflowProcess"` を持っているはずです。

1. アップグレードが完了したら、カスタマイズやオーバーレイが検証され、新しいアプリケーションコードに一致するように更新されます。 以下に例をいくつか示します。
   - /libs/fmditaor/libsor からオーバーレイされたコンポーネントは、新しい製品コードと比較する必要があり、更新は/apps の下のオーバーレイされたファイルで行う必要があります。
   - 製品で使用される clientlib カテゴリについては、変更の有無を確認する必要があります。 オーバーライドされた設定は、最新の機能を取得するために、\（以下の例\）最新の設定と比較する必要があります。
   - elementmapping.xml
   - ui\_config.json\（フォルダープロファイルで設定されている可能性があります\）
   - 修正 `com.adobe.fmdita.config.ConfigManager`


## 既存のコンテンツのインデックス作成手順

>[!NOTE]
>
> 4.3.0 または 4.2.1 からアップグレードする場合は、これらの手順を実行する必要はありません。

既存のコンテンツのインデックスを作成し、新しい検索と置換のテキストをマップレベルで使用するには、次の手順を実行します。


- サーバー\（正しい認証\） - `http://<server:port\>/bin/guides/map-find/indexing` に対して POST リクエストを実行します。 （オプション：マップの特定のパスをインデックスに指定できます。デフォルトでは、すべてのマップにインデックスが付けられます\|\|例：`https://<Server:port\>/bin/guides/map-find/indexing?paths=<map\_path\_in\_repository\>`）。


- API は jobId を返します。 ジョブのステータスを確認するには、同じエンドポイント `http://<server:port\>/bin/guides/map-find/indexing?jobId=\{jobId\}`\（例：`http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42`\）にジョブ ID を含むGET リクエストを送信します


- ジョブが完了すると、上記のGET リクエストが成功を返し、失敗したマップがあるかどうかを示します。 正常にインデックス化されたマップは、サーバ ログから確認できます。

## 壊れたリンクレポートを使用するために、既存のコンテンツを後処理する手順

>[!NOTE]
>
> 4.3.0 からアップグレードする場合は、これらの手順を実行する必要はありません

既存のコンテンツを後処理し、新しい壊れたリンクのレポートを使用するには、次の手順を実行します。

1. （オプション）システムに 100,000 個を超える Dita ファイルがある場合は、`queryLimitReads` の `org.apache.jackrabbit.oak.query.QueryEngineSettingsService` を大きい値（存在するアセットの数を超える値は、たとえば 200,000）に変更してから再デプロイします。

   | PID | プロパティキー | プロパティの値 |
   |---|---|---|
   | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitReads | 値：200000 <br> デフォルト値：100000 |

1. 次の API を実行して、すべてのファイルに対して後処理を実行します。

   | エンドポイント | /bin/guides/reports/upgrade |
   |---|---|
   | リクエストタイプ | **POST** このスクリプトは POST リクエストなので、Postmanなどのエージェントを使用して実行する必要があります。 |
   | 期待される応答 | API は jobId を返します。 ジョブのステータスを確認するには、ジョブ ID を含むGET リクエストを同じエンドポイントに送信します。<br> サンプル URL: `http://<server:port>/bin/guides/reports/upgrade` |

   | エンドポイント | /bin/guides/reports/upgrade |
   |---|---|
   | リクエストタイプ | **GET** |
   | パラメーター | jobId：前の POST リクエストから受け取った jobId を渡します。 |
   | 期待される応答 | - ジョブが完了すると、GET リクエストは正常に応答します。 <br> - エラーが発生した場合は、エラーログを API 出力と共にカスタマーサクセスチームと共有します。  <br> サンプル URL: `http://<server:port>/bin/guides/reports/upgrade?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678` |


1. 手順 1 で変更した場合は、デフォルトまたは以前の既存の値 `queryLimitReads` に戻します。



## バージョン 4.3.1.5 へのアップグレード

バージョン 4.3.1.5 にアップグレードするかどうかは、Experience Manager Guidesの現在のバージョンによって異なります。 バージョン 4.3.1 を使用している場合は、バージョン 4.3.1.5 に直接アップグレードできます。



## バージョン 4.3.1.5 のインストール

1. 4.3.1.5Adobe ソフトウェア配布ポータル [&#x200B; から &#x200B;](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html) のバージョン パッケージをダウンロードします。
1. パッケージのバージョン 4.3.1.5 インストールします。

1. インストールプロセスが正常に完了するまで待ちます。
1. 次のセクションで説明するように、カスタマイズのアップグレードを続行します。


## バージョン 4.3.1.5 のインストール後


>[!NOTE]
>
>org.apache.velocity バンドルを使用する場合は、バンドルをアップロードする前に次の手順を実行します。
> 1. `<server>:<port>/system/console/bundles` にアクセスします。
> 1. org.apache.velocity を検索します。
> 1. 検索したバンドルをアンインストールします。
> 1. 必要な velocity バンドルをインストールします。


1. アップグレードが完了したら、カスタマイズやオーバーレイが検証され、新しいアプリケーションコードに一致するように更新されます。 以下に例をいくつか示します。
   - `/libs/fmdita` または ` /libs` からオーバーレイされたコンポーネントは、新しい製品コードと比較する必要があり、更新は `/apps` の下のオーバーレイされたファイルで行う必要があります。
   - 製品で使用される clientlib カテゴリについては、変更の有無を確認する必要があります。 オーバーライドされた設定は、最新の機能を取得するために、\（以下の例\）最新の設定と比較する必要があります。
   - `elementmapping.xml`
   - `ui\_config.json\` （フォルダープロファイルで設定されている可能性\）
   - 修正 `com.adobe.fmdita.config.ConfigManager`







## バージョン 4.4.0 へのアップグレード

バージョン 4.4.0 へのアップグレードは、Experience Manager Guidesの現在のバージョンによって異なります。 バージョン 4.3.1、4.3.0、4.2 または 4.2.1 （ホットフィックス 4.2.1.3）を使用している場合は、バージョン 4.4.0 に直接アップグレードできます

>[!NOTE]
>
>後処理とインデックス作成には数時間かかる場合があります。 アップグレードプロセスは、ピーク時を避けて開始することをお勧めします。

**&#x200B;**&#x200B;前提条件&#x200B;**&#x200B;**

Experience Manager Guides 4.4.0 のアップグレードプロセスを開始する前に、次のことを確認してください。

1. Experience Manager Guides バージョン 4.3.1、4.3.0、4.2.1 （ホットフィックス 4.2.1.3）にアップグレードして、それぞれのインストール手順を完了しました。
1. （任意）すべての翻訳タスクを終了しました。
1. **のクラスのログレベルを** INFO`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript` に変更し、これらのログを新しいログファイル（例：`logs/translation_upgrade.log`）に追加しました。


## バージョン 4.4.0 のインストール

1. [Adobe ソフトウェア配布ポータル &#x200B;](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html) から 4.4.0 バージョン パッケージをダウンロードします。
1. バージョン 4.4.0 パッケージをインストールします。
1. トリガーをヒットして、翻訳マップのアップグレードジョブを開始することもできます。 詳しくは、[&#x200B; サーブレットを使用したスクリプトのトリガーを有効にする &#x200B;](#enable-trigger-of-script-via-a-servlet) を参照してください。

1. パッケージのインストールが完了したら、次のメッセージがログに表示されるまで待ちます。

   `Completed the post deployment setup script`

   上記のメッセージは、インストールのすべての手順が完了したことを示しています。

   次のエラープレフィックスのいずれかが発生した場合は、カスタマーサクセスチームに報告してください。

   - デプロイメント後セットアップスクリプトのエラー
   - 翻訳マップの移行中の例外
   - プロパティの翻訳マップを v1 から v2 にポートできません
1. バージョン 4.4.0 \（必要に応じて\）でリリースされた Oxygen コネクタプラグインをアップグレードします。
1. パッケージのインストール後にブラウザーのキャッシュをクリアします。
1. 次のセクションで説明するように、カスタマイズのアップグレードを続行します。


## バージョン 4.4.0 のインストール後

Experience Manager Guidesをインストールした後、新しくインストールしたバージョンから適用できる様々な設定をセットアップに結合できます。

>[!NOTE]
>
> dam-update-asset モデルはカスタマイズできます。 そのため、カスタマイズが完了している場合は、カスタマイズとExperience Manager Guidesをモデルの作業用コピーに同期する必要があります。

1. **DAM アセットの更新ワークフロー\（変更の後処理\）:**

1. 次の URL を開きます。

   ```
   http://localhost:4502/libs/cq/workflow/admin/console/content/models.html 
   ```

1. **DAM アセットの更新ワークフロー** を選択します。
1. **編集**&#x200B;をクリックします。
1. **DXML 後処理イニシエーター** コンポーネントが存在する場合は、カスタマイズが同期されていることを確認します。
1. **DXML Post Process Initiator** コンポーネントがない場合は、次の手順を実行して挿入します。

1. **コンポーネントを挿入**\（プロセスの最後の手順としてExperience Manager Guidesの後処理を担当\）をクリックします。
1. 以下の詳細を使用して **プロセスステップ** を設定します。

   **「共通」タブ**

   **タイトル：** DXML 後処理イニシエーター

   **説明**：変更または作成されたアセットの DXML 後処理のための Sling ジョブをトリガーする DXML 後処理イニシエーターステップ

   **「プロセス」タブ**

   - **プロセス** ドロップダウンから **DXML 後処理イニシエーター** を選択します

   - **ハンドラー処理の設定** を選択します

   - 「**完了**」を選択します。

1. 変更が完了したら、右上の「**同期**」をクリックします。 成功通知が届きます。

   >[!NOTE]
   >
   > カスタマイズした変更内容およびExperience Manager Guides後処理ステップが最終的なワークフローモデルに存在することを更新して確認します。

1. **DAM アセットの更新ワークフロー** を検証したら、対応するランチャー設定を確認します。 これを行うには、AEM ワークフローインターフェイスに移動し、ランチャーを開きます。

   ```http
   http://localhost:4502/libs/cq/workflow/content/console.html
   ```

   **DAM アセットの更新」ワークフローに対応する次の 2 つのランチャー\（アクティブである必要があります\）を検索して変更し** す。

1. *DAM アセットの更新ワークフロー」の「* ノードが作成されました **」のランチャー** – 条件 `"jcr:content/jcr:mimeType!=video"` の場合、「グロビング」値は次のようになります。

   ```json
   /content/dam(/((?!/subassets|/translation_output).)*/)renditions/original
   ```

   - 「excludeList」には `"event-user-data:changedByWorkflowProcess"` が必要です。
   - *DAM アセットの更新ワークフロー」の「* ノードが変更されました **」のランチャー –** 条件「`jcr:content/jcr:mimeType!=video`」の場合、「グロビング」の値は次のようになります。

   ```json
   /content/dam(/((?!/subassets|/translation_output).)*/)renditions/original
   ```

   - `excludeList` は `"event-user-data:changedByWorkflowProcess"` を持っているはずです。

1. アップグレードが完了したら、カスタマイズやオーバーレイが検証され、新しいアプリケーションコードに一致するように更新されます。 以下に例をいくつか示します。
   - /libs/fmditaor/libsor からオーバーレイされたコンポーネントは、新しい製品コードと比較する必要があり、更新は/apps の下のオーバーレイされたファイルで行う必要があります。
   - 製品で使用される clientlib カテゴリについては、変更の有無を確認する必要があります。 オーバーライドされた設定は、最新の機能を取得するために、\（以下の例\）最新の設定と比較する必要があります。
   - elementmapping.xml
   - ui\_config.json\（フォルダープロファイルで設定されている可能性があります\）
   - 修正 `com.adobe.fmdita.config.ConfigManager`

1. damAssetLucene にカスタマイズを追加した場合は、必要に応じて再度適用します。 これらの変更を行ったら、reindex を true に設定します。 これにより、カスタマイズを含む既存のノードがすべて再インデックスされます。 完了すると、再インデックスフラグは再度 false に設定されます。 システム内のアセットの数によっては、この処理に数時間かかる場合があります。

## 既存のコンテンツのインデックス作成手順

>[!NOTE]
>
> 4.3.0 または 4.3.1 からアップグレードする場合は、これらの手順を実行する必要はありません。

既存のコンテンツのインデックスを作成し、新しい検索と置換のテキストをマップレベルで使用するには、次の手順を実行します。

- サーバー\（正しい認証\） - `http://<server:port\>/bin/guides/map-find/indexing` に対して POST リクエストを実行します。 （オプション：マップの特定のパスをインデックスに指定できます。デフォルトでは、すべてのマップにインデックスが付けられます\|\|例：`https://<Server:port\>/bin/guides/map-find/indexing?paths=<map\_path\_in\_repository\>`）。

- API は jobId を返します。 ジョブのステータスを確認するには、同じエンドポイント `http://<server:port\>/bin/guides/map-find/indexing?jobId=\{jobId\}`\（例：`http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42`\）にジョブ ID を含むGET リクエストを送信します

- ジョブが完了すると、上記のGET リクエストが成功を返し、失敗したマップがあるかどうかを示します。 正常にインデックス化されたマップは、サーバ ログから確認できます。

## 壊れたリンクレポートを使用するために、既存のコンテンツを後処理する手順

>[!NOTE]
>
> 4.3.0 または 4.3.1 からアップグレードする場合は、これらの手順を実行する必要はありません。

既存のコンテンツを後処理し、新しい壊れたリンクのレポートを使用するには、次の手順を実行します。

1. （オプション）システムに 100,000 個を超える Dita ファイルがある場合は、`queryLimitReads` の `org.apache.jackrabbit.oak.query.QueryEngineSettingsService` を大きい値（存在するアセットの数を超える値は、たとえば 200,000）に変更してから再デプロイします。

   | PID | プロパティキー | プロパティの値 |
   |---|---|---|
   | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitReads | 値：200000 <br> デフォルト値：100000 |

1. 次の API を実行して、すべてのファイルに対して後処理を実行します。

   | エンドポイント | /bin/guides/reports/upgrade |
   |---|---|
   | リクエストタイプ | **POST** このスクリプトは POST リクエストなので、Postmanなどのエージェントを使用して実行する必要があります。 |
   | 期待される応答 | API は jobId を返します。 ジョブのステータスを確認するには、ジョブ ID を含むGET リクエストを同じエンドポイントに送信します。<br> サンプル URL: `http://<server:port>/bin/guides/reports/upgrade` |

   | エンドポイント | /bin/guides/reports/upgrade |
   |---|---|
   | リクエストタイプ | **GET** |
   | パラメーター | jobId：前の POST リクエストから受け取った jobId を渡します。 |
   | 期待される応答 | - ジョブが完了すると、GET リクエストは正常に応答します。 <br> - エラーが発生した場合は、エラーログを API 出力と共にカスタマーサクセスチームと共有します。  <br> サンプル URL: `http://<server:port>/bin/guides/reports/upgrade?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678` |

1. 手順 1 で変更した場合は、デフォルトまたは以前の既存の値 `queryLimitReads` に戻します。

### サーブレットを介したスクリプトのトリガーを有効にする

>[!NOTE]
>
> 4.3.0 または 4.3.1 からアップグレードする場合は、これらの手順を実行する必要はありません。

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

上記の応答 JSON では、キー `lockNodePath` は、リポジトリーで作成されたノードへのパスを保持し、送信されたジョブを指します。 ジョブが完了すると自動的に削除されますが、その時点まで、ジョブの現在のステータスについては、このノードを参照できます。

次の手順に進む前に、`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript Completed porting of translation map from V1 to V2` と `com.adobe.fmdita.xmltranslation.ots.TranslationMapUpgradeOTS Completed the thread to upgrade translation map from V1 to V2` を探します。

>[!NOTE]
>
> ノードがまだ存在しているかどうか、およびジョブのステータスを確認する必要があります。

**GET**: `http://<aem_domain>/var/dxml/executor-locks/translation-map-upgrade/1683190032886.json`



## `'fmdita rewriter'` の競合を処理する手順

Experience Manager Guidesには、クロスマップ（2 つの異なるマップのトピック間のリンク）の場合に生成されるリンクを処理する [**custom sling rewriter**](../cs-install-guide/conf-output-generation.md#custom-rewriter) モジュールがあります。

コードベースに別のカスタム sling rewriter がある場合は、Experience Manager Guides sling rewriter が 50 を使用するように、50 より大きい `'order'` 値を使用し `'order'` す。  これを上書きするには、50 より大きい値が必要です。 詳しくは、[&#x200B; 出力の書き換えパイプライン &#x200B;](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html) を参照してください。

このアップグレード中に、`'order'` の値が 1000 から 50 に変更されるので、既存のカスタムリライターがある場合は `'fmdita-rewriter'` と結合する必要があります。


**親トピック：**&#x200B;[&#x200B; ダウンロードとインストール &#x200B;](download-install.md)


## バージョン 4.6.0 へのアップグレード

>[!TIP]
>
> バージョン 4.6.0、4.6.0 サービスパック 1 または 4.6.0 サービスパック 3 の上に 4.6.0 サービスパック 4 をインストールすることをお勧めします。 4.6.0 サービスパック 4 リリースのアップグレードプロセスは、4.6.0 リリースと同じ手順に従います。

バージョン 4.6.0 へのアップグレードは、Experience Manager Guidesの現在のバージョンによって異なります。 バージョン 4.4.0、4.3.1、4.3.0、4.2 または 4.2.1 （ホットフィックス 4.2.1.3）を使用している場合は、バージョン 4.6.0 に直接アップグレードできます。

>[!NOTE]
>
> 後処理とインデックス作成には数時間かかる場合があります。 アップグレードプロセスは、ピーク時を避けて開始することをお勧めします。

**&#x200B;**&#x200B;前提条件&#x200B;**&#x200B;**

Experience Manager Guides 4.6.0 のアップグレードプロセスを開始する前に、次のことを確認してください。

1. Experience Manager Guides バージョン 4.3.1、4.3.0、4.2.1 （ホットフィックス 4.2.1.3）にアップグレードして、それぞれのインストール手順を完了しました。
1. （任意）すべての翻訳タスクを終了しました。
1. **のクラスのログレベルを** INFO`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript` に変更し、これらのログを新しいログファイル（例：`logs/translation_upgrade.log`）に追加しました。


## バージョン 4.6.0 のインストール

1. [Adobe ソフトウェア配布ポータル &#x200B;](https://experience.adobe.com/#/downloads/content/software-distribution/ja/aem.html) から 4.6.0 バージョンのパッケージをダウンロードします。
1. バージョン 4.6.0 パッケージをインストールします。
1. トリガーをヒットして、翻訳マップのアップグレードジョブを開始することもできます。 詳しくは、[&#x200B; サーブレットを使用したスクリプトのトリガーを有効にする &#x200B;](#enable-trigger-of-script-via-a-servlet) を参照してください。

1. パッケージのインストールが完了したら、次のメッセージがログに表示されるまで待ちます。

   `Completed the post deployment setup script`

   上記のメッセージは、インストールのすべての手順が完了したことを示しています。

   次のエラープレフィックスのいずれかが発生した場合は、カスタマーサクセスチームに報告してください。

   - デプロイメント後セットアップスクリプトのエラー
   - 翻訳マップの移行中の例外
   - プロパティの翻訳マップを v1 から v2 にポートできません
1. バージョン 4.6.0 でリリースされた酸素コネクタプラグインをアップグレードします\（必要に応じて\）。
1. パッケージのインストール後にブラウザーのキャッシュをクリアします。

## バージョン 4.6.0 のインストール後

Experience Manager Guidesをインストールした後、新しくインストールしたバージョンから適用できる様々な設定をセットアップに結合できます。

>[!NOTE]
>
> dam-update-asset モデルはカスタマイズできます。 そのため、カスタマイズが完了している場合は、カスタマイズとExperience Manager Guidesをモデルの作業用コピーに同期する必要があります。

1. **DAM アセットの更新ワークフロー\（変更の後処理\）:**

1. 次の URL を開きます。

   ```
   http://localhost:4502/libs/cq/workflow/admin/console/content/models.html 
   ```

1. **DAM アセットの更新ワークフロー** を選択します。
1. **編集**&#x200B;をクリックします。
1. **DXML 後処理イニシエーター** コンポーネントが存在する場合は、カスタマイズが同期されていることを確認します。
1. **DXML Post Process Initiator** コンポーネントがない場合は、次の手順を実行して挿入します。

1. **コンポーネントを挿入**\（プロセスの最後の手順としてExperience Manager Guidesの後処理を担当\）をクリックします。
1. 以下の詳細を使用して **プロセスステップ** を設定します。

   **「共通」タブ**

   **タイトル：** DXML 後処理イニシエーター

   **説明**：変更または作成されたアセットの DXML 後処理のための Sling ジョブをトリガーする DXML 後処理イニシエーターステップ

   **「プロセス」タブ**

   - **プロセス** ドロップダウンから「**DXML 後処理イニシエーター**」を選択します

   - **ハンドラー処理の設定** を選択します

   - 「**完了**」を選択します。

1. 変更が完了したら、右上の「**同期**」をクリックします。 成功通知が届きます。

   >[!NOTE]
   >
   > カスタマイズした変更内容およびExperience Manager Guides後処理ステップが最終的なワークフローモデルに存在することを更新して確認します。

1. **DAM アセットの更新ワークフロー** を検証したら、対応するランチャー設定を確認します。 これを行うには、AEM ワークフローインターフェイスに移動し、ランチャーを開きます。

   ```http
   http://localhost:4502/libs/cq/workflow/content/console.html
   ```

   **DAM アセットの更新」ワークフローに対応する次の 2 つのランチャー\（アクティブである必要があります\）を検索して変更し** す。

1. *DAM アセットの更新ワークフロー」の「* ノードが作成されました **」のランチャー** – 条件 `"jcr:content/jcr:mimeType!=video"` の場合、「グロビング」値は次のようになります。

   ```json
   /content/dam(/((?!/subassets|/translation_output).)*/)renditions/original
   ```

   - 「excludeList」には `"event-user-data:changedByWorkflowProcess"` が必要です。
   - *DAM アセットの更新ワークフロー」の「* ノードが変更されました **」のランチャー –** 条件「`jcr:content/jcr:mimeType!=video`」の場合、「グロビング」の値は次のようになります。

   ```json
   /content/dam(/((?!/subassets|/translation_output).)*/)renditions/original
   ```

   - `excludeList` は `"event-user-data:changedByWorkflowProcess"` を持っているはずです。

1. アップグレードが完了したら、カスタマイズやオーバーレイが検証され、新しいアプリケーションコードに一致するように更新されます。 以下に例をいくつか示します。
   - /libs/fmditaor/libsor からオーバーレイされたコンポーネントは、新しい製品コードと比較する必要があり、更新は/apps の下のオーバーレイされたファイルで行う必要があります。
   - 製品で使用される clientlib カテゴリについては、変更の有無を確認する必要があります。 オーバーライドされた設定は、最新の機能を取得するために、\（以下の例\）最新の設定と比較する必要があります。
   - elementmapping.xml
   - ui\_config.json\（フォルダープロファイルで設定されている可能性があります\）
   - 修正 `com.adobe.fmdita.config.ConfigManager`

1. damAssetLucene にカスタマイズを追加した場合は、必要に応じて再度適用します。 これらの変更を行ったら、reindex を true に設定します。 これにより、カスタマイズを含む既存のノードがすべて再インデックスされます。 完了すると、再インデックスフラグは再度 false に設定されます。 システム内のアセットの数によっては、この処理に数時間かかる場合があります。

## Experience Manager Guides インデックスの再作成手順

1. `crx/de` を開き、インデックスパス `/oak:index/guidesAssetProperties` に移動します。
2. reindex プロパティを `true` に設定し（デフォルトでは `false`）、「**すべて保存**」をクリックします。
3. 再インデックスが完了すると、再インデックスプロパティが再度 `false` に設定され、再インデックスのカウントが 1 増分されます。

   >[!NOTE]
   >
   > データの量によっては、この処理に数分かかる場合があります。
4. その他の追加または変更されたインデックスにも、`guidesBulkActivation`、`guidesPeerLinkIndex`、`guidesKonnectTemplateIndex` と同じ手順に従います。

## 既存のコンテンツのインデックス作成手順



既存のコンテンツのインデックスを作成するには、次の手順を実行します。

- サーバー\（正しい認証\） - `http://<server:port\>/bin/guides/map-find/indexing` に対して POST リクエストを実行します。 （オプション：マップの特定のパスを渡してインデックスを作成できます。デフォルトでは、すべてのマップにインデックスが作成されます ||例：`https://<Server:port\>/bin/guides/map-find/indexing?paths=<map\_path\_in\_repository\>`）

- API は jobId を返します。 ジョブのステータスを確認するには、同じエンドポイント `http://<server:port\>/bin/guides/map-find/indexing?jobId=\{jobId\}`\（例：` http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`）にジョブ ID を含むGET リクエストを送信します。

- ジョブが完了すると、上記のGET リクエストが成功を返し、失敗したマップがあるかどうかを示します。 正常にインデックス化されたマップは、サーバ ログから確認できます。


>[!NOTE]
>
> カスタムスキーマを使用している場合は、「**カタログの統合**」オプションで、カスタム DTD ファイルと XSD catalog.xml ファイルのパスをAEM リポジトリに定義する必要があります。




## `'fmdita rewriter'` の競合を処理する手順

Experience Manager Guidesには、クロスマップ（2 つの異なるマップのトピック間のリンク）の場合に生成されるリンクを処理する [**custom sling rewriter**](../cs-install-guide/conf-output-generation.md#custom-rewriter) モジュールがあります。

コードベースに別のカスタム sling rewriter がある場合は、Experience Manager Guides sling rewriter が 50 を使用するように、50 より大きい `'order'` 値を使用し `'order'` す。  これを上書きするには、50 より大きい値が必要です。 詳しくは、[&#x200B; 出力の書き換えパイプライン &#x200B;](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html) を参照してください。

このアップグレード中に、`'order'` の値が 1000 から 50 に変更されるので、既存のカスタムリライターがある場合は `'fmdita-rewriter'` と結合する必要があります。


## バージョン 5.0.0 へのアップグレード

>[!TIP]
>
> バージョン 5.0.0 サービスパック 2 へのアップグレードは、Experience Manager Guidesの現在のバージョンによって異なります。 バージョン 5.0.0 Service Pack 1 または 5.0.0 を使用している場合は、バージョン 5.0.0 Service Pack 2 に直接アップグレードできます。

>[!NOTE]
>
> 後処理とインデックス作成には数時間かかる場合があります。 アップグレードプロセスは、ピーク時を避けて開始することをお勧めします。

**&#x200B;**&#x200B;前提条件&#x200B;**&#x200B;**

Experience Manager Guides 5.0.0 のアップグレードプロセスを開始する前に、次のことを確認してください。

1. Experience Manager Guides バージョン 4.6.3、4.6.1、4.6.0、4.4 にアップグレードして、それぞれのインストール手順を完了します。
1. （任意）すべての翻訳タスクを終了しました。
1. **のクラスのログレベルを** INFO`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript` に変更し、これらのログを新しいログファイル（例：`logs/translation_upgrade.log`）に追加しました。


## バージョン 5.0.0 のインストール

1. [Adobe ソフトウェア配布ポータル &#x200B;](https://experience.adobe.com/#/downloads/content/software-distribution/ja/aem.html) から 5.0.0 バージョンのパッケージをダウンロードします。
1. バージョン 5.0.0 パッケージをインストールします。
1. トリガーをヒットして、翻訳マップのアップグレードジョブを開始することもできます。 詳しくは、[&#x200B; サーブレットを使用したスクリプトのトリガーを有効にする &#x200B;](#enable-trigger-of-script-via-a-servlet) を参照してください。

1. パッケージのインストールが完了したら、次のメッセージがログに表示されるまで待ちます。

   `Completed the post deployment setup script`

   上記のメッセージは、インストールのすべての手順が完了したことを示しています。

   次のエラープレフィックスのいずれかが発生した場合は、カスタマーサクセスチームに報告してください。

   - デプロイメント後セットアップスクリプトのエラー
   - 翻訳マップの移行中の例外
   - プロパティの翻訳マップを v1 から v2 にポートできません
1. バージョン 5.0.0 でリリースされた酸素コネクタプラグインをアップグレードします\（必要に応じて\）。
1. パッケージのインストール後にブラウザーのキャッシュをクリアします。

## バージョン 5.0.0 のインストール後

Experience Manager Guidesをインストールした後、新しくインストールしたバージョンから適用できる様々な設定をセットアップに結合できます。

>[!NOTE]
>
> dam-update-asset モデルはカスタマイズできます。 そのため、カスタマイズが完了している場合は、カスタマイズとExperience Manager Guidesをモデルの作業用コピーに同期する必要があります。

1. **DAM アセットの更新ワークフロー\（変更の後処理\）:**

1. 次の URL を開きます。

   ```
   http://localhost:4502/libs/cq/workflow/admin/console/content/models.html 
   ```

1. **DAM アセットの更新ワークフロー** を選択します。
1. **編集**&#x200B;をクリックします。
1. **DXML 後処理イニシエーター** コンポーネントが存在する場合は、カスタマイズが同期されていることを確認します。
1. **DXML Post Process Initiator** コンポーネントがない場合は、次の手順を実行して挿入します。

1. **コンポーネントを挿入**\（プロセスの最後の手順としてExperience Manager Guidesの後処理を担当\）をクリックします。
1. 以下の詳細を使用して **プロセスステップ** を設定します。

   **「共通」タブ**

   **タイトル：** DXML 後処理イニシエーター

   **説明**：変更または作成されたアセットの DXML 後処理のための Sling ジョブをトリガーする DXML 後処理イニシエーターステップ

   **「プロセス」タブ**

   - **プロセス** ドロップダウンから「**DXML 後処理イニシエーター**」を選択します

   - **ハンドラー処理の設定** を選択します

   - 「**完了**」を選択します。

1. 変更が完了したら、右上の「**同期**」をクリックします。 成功通知が届きます。

   >[!NOTE]
   >
   > カスタマイズした変更内容およびExperience Manager Guides後処理ステップが最終的なワークフローモデルに存在することを更新して確認します。

1. **DAM アセットの更新ワークフロー** を検証したら、対応するランチャー設定を確認します。 これを行うには、AEM ワークフローインターフェイスに移動し、ランチャーを開きます。

   ```http
   http://localhost:4502/libs/cq/workflow/content/console.html
   ```

   **DAM アセットの更新」ワークフローに対応する次の 2 つのランチャー\（アクティブである必要があります\）を検索して変更し** す。

1. *DAM アセットの更新ワークフロー」の「* ノードが作成されました **」のランチャー** – 条件 `"jcr:content/jcr:mimeType!=video"` の場合、「グロビング」値は次のようになります。

   ```json
   /content/dam(/((?!/subassets|/translation_output).)*/)renditions/original
   ```

   - 「excludeList」には `"event-user-data:changedByWorkflowProcess"` が必要です。
   - *DAM アセットの更新ワークフロー」の「* ノードが変更されました **」のランチャー –** 条件「`jcr:content/jcr:mimeType!=video`」の場合、「グロビング」の値は次のようになります。

   ```json
   /content/dam(/((?!/subassets|/translation_output).)*/)renditions/original
   ```

   - `excludeList` は `"event-user-data:changedByWorkflowProcess"` を持っているはずです。

1. アップグレードが完了したら、カスタマイズやオーバーレイが検証され、新しいアプリケーションコードに一致するように更新されます。 以下に例をいくつか示します。
   - /libs/fmditaor/libsor からオーバーレイされたコンポーネントは、新しい製品コードと比較する必要があり、更新は/apps の下のオーバーレイされたファイルで行う必要があります。
   - 製品で使用される clientlib カテゴリについては、変更の有無を確認する必要があります。 オーバーライドされた設定は、最新の機能を取得するために、\（以下の例\）最新の設定と比較する必要があります。
   - elementmapping.xml
   - ui\_config.json\（フォルダープロファイルで設定されている可能性があります\）
   - 修正 `com.adobe.fmdita.config.ConfigManager`

1. damAssetLucene にカスタマイズを追加した場合は、必要に応じて再度適用します。 これらの変更を行ったら、reindex を true に設定します。 これにより、カスタマイズを含む既存のノードがすべて再インデックスされます。 完了すると、再インデックスフラグは再度 false に設定されます。 システム内のアセットの数によっては、この処理に数時間かかる場合があります。

## Experience Manager Guides インデックスの再作成手順

1. `crx/de` を開き、インデックスパス `/oak:index/guidesAssetProperties` に移動します。
2. reindex プロパティを `true` に設定し（デフォルトでは `false`）、「**すべて保存**」をクリックします。
3. 再インデックスが完了すると、再インデックスプロパティが再度 `false` に設定され、再インデックスのカウントが 1 増分されます。

   >[!NOTE]
   >
   > データの量によっては、この処理に数分かかる場合があります。
4. その他の追加または変更されたインデックスにも、`guidesBulkActivation`、`guidesPeerLinkIndex`、`guidesKonnectTemplateIndex` と同じ手順に従います。

## 既存のコンテンツのインデックス作成手順



既存のコンテンツのインデックスを作成するには、次の手順を実行します。

- サーバー\（正しい認証\） - `http://<server:port\>/bin/guides/map-find/indexing` に対して POST リクエストを実行します。 （オプション：マップの特定のパスを渡してインデックスを作成できます。デフォルトでは、すべてのマップにインデックスが作成されます ||例：`https://<Server:port\>/bin/guides/map-find/indexing?paths=<map\_path\_in\_repository\>`）

- API は jobId を返します。 ジョブのステータスを確認するには、同じエンドポイント `http://<server:port\>/bin/guides/map-find/indexing?jobId=\{jobId\}`\（例：` http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`）にジョブ ID を含むGET リクエストを送信します。

- ジョブが完了すると、上記のGET リクエストが成功を返し、失敗したマップがあるかどうかを示します。 正常にインデックス化されたマップは、サーバ ログから確認できます。


>[!NOTE]
>
> カスタムスキーマを使用している場合は、「**カタログの統合**」オプションで、カスタム DTD ファイルと XSD catalog.xml ファイルのパスをAEM リポジトリに定義する必要があります。




## `'fmdita rewriter'` の競合を処理する手順

Experience Manager Guidesには、クロスマップ（2 つの異なるマップのトピック間のリンク）の場合に生成されるリンクを処理する [**custom sling rewriter**](../cs-install-guide/conf-output-generation.md#custom-rewriter) モジュールがあります。

コードベースに別のカスタム sling rewriter がある場合は、Experience Manager Guides sling rewriter が 50 を使用するように、50 より大きい `'order'` 値を使用し `'order'` す。  これを上書きするには、50 より大きい値が必要です。 詳しくは、[&#x200B; 出力の書き換えパイプライン &#x200B;](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html) を参照してください。

このアップグレード中に、`'order'` の値が 1000 から 50 に変更されるので、既存のカスタムリライターがある場合は `'fmdita-rewriter'` と結合する必要があります。



## damAssetLucene の再インデックス化手順

ガイドを含む damAssetLucene のインデックス定義が更新されました。 5.0.0 バージョンへのアップグレード後に damAssetLucene のインデックスを再作成する方法については、[&#x200B; この記事 &#x200B;](https://experienceleague.adobe.com/en/docs/experience-cloud-kcs/kbarticles/ka-16460) を参照してください。

>[!NOTE]
>
> ドキュメントに従いながら、保存操作で両方のプロパティ（reindex=true および/oak:index/damAssetLucene の reindex-async=true）が同時に更新されていることを確認します。

## バージョン 5.1.0 へのアップグレード

>[!IMPORTANT]
>
> 現在AEM 6.5 を使用していて、AEM 6.5 LTS への移行を計画している場合は、まずAEMのアップグレードを完了してから、Experience Manager Guides 5.1.0 のアップグレードを進めてください。 詳しくは、[Adobe Experience Manager（AEM） 6.5 LTS へのアップグレード &#x200B;](https://experienceleague.adobe.com/en/docs/experience-manager-65-lts/content/implementing/deploying/upgrading/upgrade) を参照してください。

**前提条件**

>[!NOTE]
>
>5.1.0 サービスパック 3 にアップグレードする場合は、Experience Manager Guidesのバージョン 5.1.0 または 5.1.x を使用している必要があります。

Experience Manager Guides 5.1.0 のアップグレードプロセスを開始する前に、次のことを確認してください。

1. Experience Manager Guides バージョン 4.6.3、4.6.4、5.0.0、または 5.0.0 サービスパック 1 にアップグレードして、それぞれのインストール手順を完了しました。
1. （任意）すべての翻訳タスクを終了しました。
1. **のクラスのログレベルを** INFO`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript` に変更し、これらのログを新しいログファイル（例：`logs/translation_upgrade.log`）に追加しました。

>[!NOTE]
>
> 後処理とインデックス作成には数時間かかる場合があります。 アップグレードプロセスは、ピーク時を避けて開始することをお勧めします。

## バージョン 5.1.0 のインストール

1. [Adobe ソフトウェア配布ポータル &#x200B;](https://experience.adobe.com/#/downloads/content/software-distribution/ja/aem.html) から 5.1.0 バージョンのパッケージをダウンロードします。
1. バージョン 5.1.0 パッケージをインストールします。
1. トリガーをヒットして、翻訳マップのアップグレードジョブを開始することもできます。 詳しくは、[&#x200B; サーブレットを使用したスクリプトのトリガーを有効にする &#x200B;](#enable-trigger-of-script-via-a-servlet) を参照してください。

1. パッケージのインストールが完了したら、次のメッセージがログに表示されるまで待ちます。

   `Completed the post deployment setup script`

   上記のメッセージは、インストールのすべての手順が完了したことを示しています。

   次のエラープレフィックスのいずれかが発生した場合は、カスタマーサクセスチームに報告してください。

   - デプロイメント後セットアップスクリプトのエラー
   - 翻訳マップの移行中の例外
   - プロパティの翻訳マップを v1 から v2 にポートできません
1. バージョン 5.1.0 でリリースされた酸素コネクタプラグインをアップグレードします\（必要に応じて\）。
1. パッケージのインストール後にブラウザーのキャッシュをクリアします。

## バージョン 5.1.0 のインストール後

Experience Manager Guidesをインストールした後、新しくインストールしたバージョンから適用できる様々な設定をセットアップに結合できます。

>[!NOTE]
>
> dam-update-asset モデルはカスタマイズできます。 そのため、カスタマイズが完了している場合は、カスタマイズとExperience Manager Guidesをモデルの作業用コピーに同期する必要があります。

1. **DAM アセットの更新ワークフロー\（変更の後処理\）:**

1. 次の URL を開きます。

   ```
   http://localhost:4502/libs/cq/workflow/admin/console/content/models.html 
   ```

1. **DAM アセットの更新ワークフロー** を選択します。
1. 「**編集**」を選択します。
1. **DXML 後処理イニシエーター** コンポーネントが存在する場合は、カスタマイズが同期されていることを確認します。
1. **DXML Post Process Initiator** コンポーネントがない場合は、次の手順を実行して挿入します。

1. **コンポーネントを挿入**\（プロセスの最後の手順としてExperience Manager Guidesの後処理を担当\）を選択します。
1. 以下の詳細を使用して **プロセスステップ** を設定します。

   **「共通」タブ**

   **タイトル：** DXML 後処理イニシエーター

   **説明**：変更または作成されたアセットの DXML 後処理のための Sling ジョブをトリガーする DXML 後処理イニシエーターステップ

   **「プロセス」タブ**

   - **プロセス** ドロップダウンから「**DXML 後処理イニシエーター**」を選択します

   - **ハンドラー処理の設定** を選択します

   - 「**完了**」を選択します。

1. 変更を完了した後、右上の「**同期**」を選択します。 成功通知が届きます。

   >[!NOTE]
   >
   > カスタマイズした変更内容およびExperience Manager Guides後処理ステップが最終的なワークフローモデルに存在することを更新して確認します。

1. **DAM アセットの更新ワークフロー** を検証したら、対応するランチャー設定を確認します。 これを行うには、AEM ワークフローインターフェイスに移動し、ランチャーを開きます。

   ```http
   http://localhost:4502/libs/cq/workflow/content/console.html
   ```

   **DAM アセットの更新」ワークフローに対応する次の 2 つのランチャー\（アクティブである必要があります\）を検索して変更し** す。

1. *DAM アセットの更新ワークフロー」の「* ノードが作成されました **」のランチャー** – 条件 `"jcr:content/jcr:mimeType!=video"` の場合、「グロビング」値は次のようになります。

   ```json
   /content/dam(/((?!/subassets|/translation_output).)*/)renditions/original
   ```

   - 「excludeList」には `"event-user-data:changedByWorkflowProcess"` が必要です。
   - *DAM アセットの更新ワークフロー」の「* ノードが変更されました **」のランチャー –** 条件「`jcr:content/jcr:mimeType!=video`」の場合、「グロビング」の値は次のようになります。

   ```json
   /content/dam(/((?!/subassets|/translation_output).)*/)renditions/original
   ```

   - `excludeList` は `"event-user-data:changedByWorkflowProcess"` を持っているはずです。

1. アップグレードが完了したら、カスタマイズやオーバーレイが検証され、新しいアプリケーションコードに一致するように更新されます。 以下に例をいくつか示します。
   - /libs/fmditaor/libsor からオーバーレイされたコンポーネントは、新しい製品コードと比較する必要があり、更新は/apps の下のオーバーレイされたファイルで行う必要があります。
   - 製品で使用される clientlib カテゴリについては、変更の有無を確認する必要があります。 オーバーライドされた設定は、最新の機能を取得するために、\（以下の例\）最新の設定と比較する必要があります。
   - elementmapping.xml
   - ui\_config.json\（フォルダープロファイルで設定されている可能性があります\）
   - 修正 `com.adobe.fmdita.config.ConfigManager`

1. damAssetLucene にカスタマイズを追加した場合は、必要に応じて再度適用します。 これらの変更を行ったら、reindex を true に設定します。 これにより、カスタマイズを含む既存のノードがすべて再インデックスされます。 完了すると、再インデックスフラグは再度 false に設定されます。 システム内のアセットの数によっては、この処理に数時間かかる場合があります。

## Experience Manager Guides インデックスの再作成手順

1. `crx/de` を開き、インデックスパス `/oak:index/guidesAssetProperties` に移動します。
2. reindex プロパティを `true` に設定し（デフォルトでは `false`）、「**すべて保存**」をクリックします。
3. 再インデックスが完了すると、再インデックスプロパティが再度 `false` に設定され、再インデックスのカウントが 1 増分されます。

   >[!NOTE]
   >
   > データの量によっては、この処理に数分かかる場合があります。
4. その他の追加または変更されたインデックスにも、`guidesBulkActivation`、`guidesPeerLinkIndex`、`guidesKonnectTemplateIndex` と同じ手順に従います。

## 既存のコンテンツのインデックス作成手順



既存のコンテンツのインデックスを作成するには、次の手順を実行します。

- サーバー\（正しい認証\） - `http://<server:port\>/bin/guides/map-find/indexing` に対して POST リクエストを実行します。 （オプション：マップの特定のパスを渡してインデックスを作成できます。デフォルトでは、すべてのマップにインデックスが作成されます ||例：`https://<Server:port\>/bin/guides/map-find/indexing?paths=<map\_path\_in\_repository\>`）

- API は jobId を返します。 ジョブのステータスを確認するには、同じエンドポイント `http://<server:port\>/bin/guides/map-find/indexing?jobId=\{jobId\}`\（例：` http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`）にジョブ ID を含むGET リクエストを送信します。

- ジョブが完了すると、上記のGET リクエストが成功を返し、失敗したマップがあるかどうかを示します。 正常にインデックス化されたマップは、サーバ ログから確認できます。


>[!NOTE]
>
> カスタムスキーマを使用している場合は、「**カタログの統合**」オプションで、カスタム DTD ファイルと XSD catalog.xml ファイルのパスをAEM リポジトリに定義する必要があります。




## `'fmdita rewriter'` の競合を処理する手順

Experience Manager Guidesには、クロスマップ（2 つの異なるマップのトピック間のリンク）の場合に生成されるリンクを処理する [**custom sling rewriter**](../cs-install-guide/conf-output-generation.md#custom-rewriter) モジュールがあります。

コードベースに別のカスタム sling rewriter がある場合は、Experience Manager Guides sling rewriter が 50 を使用するように、50 より大きい `'order'` 値を使用し `'order'` す。  これを上書きするには、50 より大きい値が必要です。 詳しくは、[&#x200B; 出力の書き換えパイプライン &#x200B;](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html) を参照してください。

このアップグレード中に、`'order'` の値が 1000 から 50 に変更されるので、既存のカスタムリライターがある場合は `'fmdita-rewriter'` と結合する必要があります。



## damAssetLucene の再インデックス化手順

ガイドを含む damAssetLucene のインデックス定義が更新されました。 5.1.0 バージョンにアップグレードした後に damAssetLucene のインデックスを再作成する方法については、[&#x200B; この記事 &#x200B;](https://experienceleague.adobe.com/en/docs/experience-cloud-kcs/kbarticles/ka-16460) を参照してください。

>[!NOTE]
>
> ドキュメントに従いながら、保存操作で両方のプロパティ（reindex=true および/oak:index/damAssetLucene の reindex-async=true）が同時に更新されていることを確認します。



**親トピック：**&#x200B;[&#x200B; ダウンロードしてインストール &#x200B;](download-install.md)
