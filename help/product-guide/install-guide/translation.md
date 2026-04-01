---
title: AEM Guidesでのコンテンツの翻訳
description: さらに詳しく
exl-id: 0d3a909c-3499-4ef4-b033-02e412dae959
feature: Translation
role: Admin
level: Experienced
source-git-commit: bbdf4763e8202891eec0259a5f08a7efa9afc668
workflow-type: tm+mt
source-wordcount: '985'
ht-degree: 8%

---

# コンテンツの翻訳 {#id181GB0400UI}

ページコンテンツ、アセットおよびユーザー生成コンテンツの翻訳を自動化して、多言語の web サイトを作成および管理します。翻訳ワークフローを自動化するには、翻訳サービスプロバイダーと AEM とを統合して、コンテンツを複数の言語に翻訳するためのプロジェクトを作成します。AEM では人間による翻訳と機械翻訳のワークフローがサポートされます。

- 人間による翻訳：コンテンツは翻訳プロバイダーに送信され、プロの翻訳者が翻訳します。完了すると、翻訳されたコンテンツが返され、AEMに読み込まれます。 翻訳プロバイダーがAEMと統合されると、AEMと翻訳プロバイダー間でコンテンツが自動的に交換されます

- 機械翻訳：機械翻訳サービスは、コンテンツを即座に翻訳します


コンテンツの翻訳には次の手順が含まれます。

1. AEMを[翻訳サービスプロバイダー](https://helpx.adobe.com/jp/experience-manager/6-5/sites/administering/using/tc-tic.html#ConnectingtoaTranslationServiceProvider)と接続し、[翻訳インテグレーションフレームワーク設定](https://helpx.adobe.com/jp/experience-manager/6-5/sites/administering/using/tc-tic.html#CreatingaTranslationIntegrationConfiguration)を作成します。

1. 言語マスターのページを[翻訳サービスとフレームワーク設定](https://helpx.adobe.com/jp/experience-manager/6-5/sites/administering/using/tc-tic.html#ConfiguringPagesforTranslation)に関連付けます。

1. 翻訳する[&#x200B; コンテンツの種類](https://helpx.adobe.com/jp/experience-manager/6-5/sites/administering/using/tc-rules.html?lang=ja-JP)を特定します。

1. [翻訳するコンテンツを準備](https://helpx.adobe.com/jp/experience-manager/6-5/sites/administering/using/tc-prep.html)します。そのためには、言語マスターをオーサリングして、言語コピーのルートページを作成します。

1. 翻訳するコンテンツを収集し、翻訳プロセスを準備するために、[翻訳プロジェクト &#x200B;](https://experienceleague.adobe.com/docs/experience-manager-65/administering/introduction/tc-manage.html?lang=ja)を作成します。

1. 翻訳プロジェクトを使用して、[&#x200B; コンテンツ翻訳](https://experienceleague.adobe.com/docs/experience-manager-65/administering/introduction/tc-manage.html?lang=ja) プロセスを管理します。


翻訳サービスプロバイダーがAEMとの統合にコネクタを提供しない場合、AEMでは、翻訳されたコンテンツのXML形式での手作業による書き出しと読み込みがサポートされます。

>[!TIP]
>
> コンテンツの翻訳に関するベストプラクティスについては、ベストプラクティスガイドの「*翻訳*」セクションを参照してください。

## DITA マップダッシュボードの「翻訳」タブの設定

「翻訳タブを非表示」オプションはデフォルトでは有効になっていないため、configMgrからこれを有効にする必要があります。 DITA マップダッシュボードの「翻訳」タブを非表示にするには、次の手順を実行します。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.config.ConfigManager** バンドルを検索してクリックします。

1. 「**翻訳タブを非表示**」オプションを選択して、マップダッシュボードの「翻訳」タブを非表示にします。

   >[!NOTE]
   >
   > このプロパティはデフォルトで無効になっており、「翻訳」タブはマップダッシュボードで使用できます。

1. 「**保存**」をクリックします。

## コンポーネントベースの翻訳ワークフローの設定

翻訳ベンダーのコネクタがDITA コンテンツをサポートしていない場合は、コンポーネントベースの翻訳ワークフローを有効にする必要があります。 有効にすると、翻訳可能なコンテンツがアセットメタデータとして送信されます。 ただし、このワークフローを機能させるには、コネクタでアセットのメタデータの翻訳をサポートする必要があります。

設定で使用する翻訳ワークフローに基づいて、コンポーネントベースの翻訳ワークフローオプションを次のように設定する必要があります。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.config.ConfigManager** バンドルを検索してクリックします。

1. 設定に従って、**コンポーネントベースのDITA翻訳ワークフロー** オプションを設定します。

   - 人による翻訳を使用している場合は、*コンポーネントベースの翻訳ワークフロー* オプションを&#x200B;**無効にします。**

   - 機械翻訳を使用している場合は、*コンポーネントベースの翻訳ワークフロー* オプションを&#x200B;**有効にします。**

   >[!NOTE]
   >
   > 翻訳コネクタを使用している場合は、AEM ドキュメントの「*[Translation Integration Frameworkの設定](https://helpx.adobe.com/jp/experience-manager/6-5/sites/administering/using/tc-tic.html)*」のトピックで説明されているように、コネクタが設定されていることを確認してください。

1. 「**保存**」をクリックします。

>[!IMPORTANT]
>
> 翻訳設定を設定したら、言語フォルダーに適切なクラウド設定を設定していることを確認します。

## 従来の翻訳ワークフローの設定

>[!IMPORTANT]
> 
> パフォーマンスを向上させるには、AEM Guides 4.6.0以降で利用可能な最新の翻訳ワークフローを使用することをお勧めします。 ただし、翻訳プロセスでカスタマイズを有効にし、新しいワークフローの影響を受ける場合は、回避策として従来の翻訳ワークフローに戻すことを検討してください。



デフォルトでは、従来の翻訳ワークフローオプションは無効になっています。 このオプションを設定するには、次の手順を実行します。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.config.ConfigManager** バンドルを検索してクリックします。

1. 設定に従って、従来の翻訳ワークフローオプションを設定します。

   - （*デフォルト*）最新の翻訳ワークフローを使用する場合は、**従来の翻訳ワークフローを実行** オプションを無効にします。
   - レガシー翻訳ワークフローを使用する場合は、「**レガシー翻訳ワークフローを実行**」オプションを有効にします。

1. 「**保存**」をクリックします。

## 初回翻訳動作の設定

デフォルトでは、初めて翻訳を実行すると、宛先言語に空のXML ファイルが作成されます。 これらのファイルは、承認後にのみ翻訳されます。 この動作を制御するには、次の手順を使用して`Initialize destination language copy with source content`設定を有効にできます。

>[!NOTE]
>
> この設定は、従来の翻訳ワークフローが無効になっている場合にのみ適用されます。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.config.ConfigManager** バンドルを検索してクリックします。

1. `Initialize destination language copy with source content`設定を選択します。

   - 有効にすると、初回翻訳時に空のXML ファイルを生成する代わりに、作業コピーからソースコンテンツを含むバージョンなしコピーが作成されます。
   - （*Default*）無効にすると、デフォルトの動作が適用され、初回翻訳時に宛先言語に空のXML ファイルが作成されます。

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

翻訳ワークフローを開始すると、ソースコンテンツの一時的な言語コピーがシステムによって作成されます。 これらの一時ファイルに対する後処理操作を有効にするか無効にするかを選択できます。 後処理操作では、ファイルからの入出力参照が解決され、文書状態が他の操作と共に設定されます。 これらの一時ファイルに対して後処理を有効にすると、翻訳プロセスの完了に時間がかかる場合があります。 したがって、後処理オプションを無効にすることをお勧めします。

デフォルトでは、一時ファイルの後処理オプションは無効になっています。 このオプションを設定するには、次の手順を実行します。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.config.ConfigManager** バンドルを検索してクリックします。

1. 設定に従って、**後処理の言語コピー** オプションを設定します。

   - \（*Default*\）一時ファイルに対する後処理操作を実行しない場合は、*処理後の言語コピー*&#x200B;を&#x200B;**無効にします** オプション。

   - 一時ファイルに対して後処理操作を実行する場合は、*有効*、**後処理言語コピー** オプションを選択します。

1. 「**保存**」をクリックします。
