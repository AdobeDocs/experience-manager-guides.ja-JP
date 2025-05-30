---
title: AEM Guidesでのコンテンツの翻訳
description: コンテンツの翻訳方法を学ぶ
exl-id: 0d3a909c-3499-4ef4-b033-02e412dae959
feature: Translation
role: Admin
level: Experienced
source-git-commit: ea3083542e955a56c27cd833600370a7962c6b8d
workflow-type: tm+mt
source-wordcount: '854'
ht-degree: 9%

---

# コンテンツの翻訳 {#id181GB0400UI}

ページコンテンツ、アセットおよびユーザー生成コンテンツの翻訳を自動化して、多言語の web サイトを作成および管理します。翻訳ワークフローを自動化するには、翻訳サービスプロバイダーと AEM とを統合して、コンテンツを複数の言語に翻訳するためのプロジェクトを作成します。AEM では人間による翻訳と機械翻訳のワークフローがサポートされます。

- 人間による翻訳：コンテンツが翻訳プロバイダーに送信され、専門の翻訳者によって翻訳されます。完了すると、翻訳済みコンテンツが返され、AEMに読み込まれます。 翻訳プロバイダーとAEMを連携すると、AEMと翻訳プロバイダーとの間でコンテンツが自動的に交換されます

- 機械翻訳：機械翻訳サービスでは、コンテンツがすぐに翻訳されます


コンテンツの翻訳には次の手順が含まれます。

1. AEMを [ 翻訳サービスプロバイダー ](https://helpx.adobe.com/jp/experience-manager/6-5/sites/administering/using/tc-tic.html#ConnectingtoaTranslationServiceProvider) 接続して、[ 翻訳統合フレームワーク設定 ](https://helpx.adobe.com/jp/experience-manager/6-5/sites/administering/using/tc-tic.html#CreatingaTranslationIntegrationConfiguration) を作成します。

1. 言語マスターのページを [ 翻訳サービスとフレームワークの設定 ](https://helpx.adobe.com/jp/experience-manager/6-5/sites/administering/using/tc-tic.html#ConfiguringPagesforTranslation) に関連付けます。

1. [ 翻訳するコンテンツ ](https://helpx.adobe.com/jp/experience-manager/6-5/sites/administering/using/tc-rules.html?lang=ja-JP) のタイプを特定します。

1. [翻訳するコンテンツを準備](https://helpx.adobe.com/jp/experience-manager/6-5/sites/administering/using/tc-prep.html)します。そのためには、言語マスターをオーサリングして、言語コピーのルートページを作成します。

1. [ 翻訳プロジェクト ](https://experienceleague.adobe.com/docs/experience-manager-65/administering/introduction/tc-manage.html?lang=ja) を作成して、翻訳するコンテンツを収集し、翻訳プロセスを準備します。

1. 翻訳プロジェクトを使用して [ コンテンツの翻訳の管理 ](https://experienceleague.adobe.com/docs/experience-manager-65/administering/introduction/tc-manage.html?lang=ja) プロセスを実行します。


AEMとの統合のためのコネクタが翻訳サービスプロバイダーに用意されていない場合、AEMでは翻訳済みコンテンツ（XML 形式）の手動による書き出しと読み込みがサポートされます。

>[!TIP]
>
> コンテンツの翻訳に関す *ベストプラクティスについては、ベストプラクティスガイドの* 翻訳」の節を参照してください。

## DITA マップダッシュボードの「翻訳」タブを設定します

「翻訳タブを非表示」オプションはデフォルトでは有効になっていません。configMgr からこれを有効にする必要があります。 DITA マップダッシュボードの「翻訳」 タブを非表示にするには、次の手順を実行します。

1. Adobe Experience Manager Web コンソール設定ページを開きます。

   設定ページにアクセスするためのデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.config.ConfigManager** バンドルを検索してクリックします。

1. 「**翻訳タブを非表示**」オプションを選択して、マップダッシュボードの「翻訳」タブを非表示にします。

   >[!NOTE]
   >
   > このプロパティはデフォルトで無効になっており、マップダッシュボードで「翻訳」タブを使用できます。

1. 「**保存**」をクリックします。

## コンポーネントベースの翻訳ワークフローの設定

翻訳ベンダーのコネクタが DITA コンテンツをサポートしていない場合は、コンポーネントベースの翻訳ワークフローを有効にする必要があります。 有効にすると、翻訳可能コンテンツがアセットメタデータとして送信されます。 ただし、このワークフローを機能させるには、コネクタがアセットメタデータの翻訳をサポートしている必要があります。

設定で使用した翻訳ワークフローに基づいて、コンポーネントベースの翻訳ワークフローオプションは次のように設定する必要があります。

1. Adobe Experience Manager Web コンソール設定ページを開きます。

   設定ページにアクセスするためのデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.config.ConfigManager** バンドルを検索してクリックします。

1. 設定に従って「**コンポーネントベースの DITA 翻訳ワークフロー**」オプションを設定します。

   - 人間による翻訳を使用している場合は、「*コンポーネントベースの翻訳ワークフロー&#x200B;**オプションを* 無効** にします。

   - 機械翻訳を使用する場合は、「*コンポーネントベースの翻訳ワークフロー&#x200B;**オプションを* 有効** にします。

   >[!NOTE]
   >
   > 翻訳コネクタを使用している場合は、AEM ドキュメントの *[翻訳統合フレームワークの設定 ](https://helpx.adobe.com/jp/experience-manager/6-5/sites/administering/using/tc-tic.html)* トピックの説明に従ってコネクタが設定されていることを確認してください。

1. 「**保存**」をクリックします。

>[!IMPORTANT]
>
> 翻訳設定を行った後、言語フォルダーに適切なクラウド設定をセットアップしたことを確認します。

## 従来の翻訳ワークフローの設定

>[!IMPORTANT]
> 
> パフォーマンスを向上させるには、AEM Guides 4.6.0 以降で使用できる最新の翻訳ワークフローを使用することをお勧めします。 ただし、翻訳プロセスのカスタマイズを有効にして、新しいワークフローの影響を受ける場合は、回避策として従来の翻訳ワークフローに戻すことを検討してください。



デフォルトでは、従来の翻訳ワークフローオプションは無効になっています。 このオプションを設定するには、次の手順を実行します。

1. Adobe Experience Manager Web コンソール設定ページを開きます。

   設定ページにアクセスするためのデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.config.ConfigManager** バンドルを検索してクリックします。

1. 設定に応じて、従来の翻訳ワークフローオプションを設定します。

   - （*デフォルト*）最新の翻訳ワークフローを使用する場合は、「**従来の翻訳ワークフローを実行**」オプションを無効にします。
   - 従来の翻訳ワークフローを使用する場合は、「**従来の翻訳ワークフローを実行**」オプションを有効にします。

1. 「**保存**」をクリックします。






<!---

This was added for 2406 CS IG

## Configure the legacy translation workflow 

It is recommended that you use the latest translation workflow, which provides enhanced performance. However, you can configure the legacy translation workflow if necessary.

Based on the translation workflow used in your setup, provide the following (property) details to configure the legacy translation workflow: the component-based translation workflow option should be configured as follows:

1.  Open the Adobe Experience Manager Web Console Configuration page.

    The default URL to access the configuration page is:

    ! Add the syntax of http as given in previous config

    Note: Configure htttp code as given in previous sample
    

1.  Search for and click on the **com.adobe.fmdita.config.ConfigManager** bundle.



1.  Configure the **Run legacy translation workflow** option as per your setup:

    -   If you use the latest translation workflow, then *Disable* \( `false`\) the **Run legacy translation workflow** option. The latest translation workflow is enabled by default. <br> 

    -   If you use the legacy translation, then *Enable \( `true`\)* the **Run legacy translation workflow** option.

1.  Click **Save**.


--->


## 一時的な言語コピーの後処理の設定

翻訳ワークフローを開始すると、ソースコンテンツの一時的な言語コピーが作成されます。 これらの一時ファイルに対する後処理操作を有効または無効にすることができます。 後処理操作では、ファイルからの着信および発信参照が解決され、他の操作と共にドキュメントの状態が設定されます。 これらの一時ファイルの後処理を有効にすると、翻訳プロセスの完了に時間がかかる可能性があります。 そのため、後処理オプションは無効にしておくことをお勧めします。

デフォルトでは、「一時ファイルの後処理」オプションは無効になっています。 このオプションを設定するには、次の手順を実行します。

1. Adobe Experience Manager Web コンソール設定ページを開きます。

   設定ページにアクセスするためのデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.config.ConfigManager** バンドルを検索してクリックします。

1. 設定に応じて **後処理言語コピー** オプションを設定します。

   - \（*デフォルト*\）一時ファイルに対する後処理操作を実行しない場合は、「*後処理言語コピー&#x200B;**」オプションを* 無効** にします。

   - 一時ファイルに対して後処理操作を実行する場合は、「*後処理言語コピー&#x200B;**オプションを* 有効** にします。

1. 「**保存**」をクリックします。
