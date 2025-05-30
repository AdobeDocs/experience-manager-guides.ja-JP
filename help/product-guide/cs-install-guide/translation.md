---
title: コンテンツの翻訳
description: コンテンツの翻訳方法を学ぶ
exl-id: 5af78233-343e-47ba-b60c-b7f4789e2406
feature: Translation
role: Admin
level: Experienced
source-git-commit: ea3083542e955a56c27cd833600370a7962c6b8d
workflow-type: tm+mt
source-wordcount: '773'
ht-degree: 10%

---

# コンテンツの翻訳 {#id181GB0400UI}

ページコンテンツ、アセットおよびユーザー生成コンテンツの翻訳を自動化して、多言語の web サイトを作成および管理します。翻訳ワークフローを自動化するには、翻訳サービスプロバイダーと AEM とを統合して、コンテンツを複数の言語に翻訳するためのプロジェクトを作成します。AEM では人間による翻訳と機械翻訳のワークフローがサポートされます。

- 人間による翻訳：コンテンツが翻訳プロバイダーに送信され、専門の翻訳者によって翻訳されます。完了すると、翻訳済みコンテンツが返され、AEMに読み込まれます。 翻訳プロバイダーとAEMを連携すると、AEMと翻訳プロバイダーとの間でコンテンツが自動的に交換されます

- 機械翻訳：機械翻訳サービスでは、コンテンツがすぐに翻訳されます


コンテンツの翻訳には次の手順が含まれます。

1. AEMを [ 翻訳サービスプロバイダー ](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/administering/reusing-content/translation/integration-framework.html?lang=ja) に接続し、翻訳統合フレームワーク設定を作成します。

1. 翻訳サービスとフレームワークの設定に言語マスターのページを関連付けます。

1. [ 翻訳するコンテンツ ](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/administering/reusing-content/translation/rules.html?lang=ja) のタイプを特定します。

1. [翻訳するコンテンツを準備](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/administering/reusing-content/translation/preparation.html?lang=ja)します。そのためには、言語マスターをオーサリングして、言語コピーのルートページを作成します。

1. [ 翻訳プロジェクト ](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/administering/reusing-content/translation/managing-projects.html?lang=ja) を作成して、翻訳するコンテンツを収集し、翻訳プロセスを準備します。

1. 翻訳プロジェクトを使用して [ コンテンツの翻訳の管理 ](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/administering/reusing-content/translation/managing-projects.html?lang=ja) プロセスを実行します。


AEMとの統合のためのコネクタが翻訳サービスプロバイダーに用意されていない場合、AEMでは翻訳済みコンテンツ（XML 形式）の手動による書き出しと読み込みがサポートされます。

>[!TIP]
>
> コンテンツの翻訳に関するベストプラクティスについては、ベストプラクティスガイドの *翻訳* の節を参照してください。

## DITA マップダッシュボードの「翻訳」タブを設定します

DITA マップダッシュボードの「翻訳」 タブを非表示にするには、次の手順を実行します。

1. [ 設定の上書き ](download-install-additional-config-override.md#) の手順に従って、設定ファイルを作成します。
1. 設定ファイルで、次の\（property\）の詳細を指定して、マップダッシュボードの「翻訳」タブを設定します。

   | PID | プロパティキー | プロパティの値 |
   |---|------------|--------------|
   | `com.adobe.fmdita.config.ConfigManager` | `tabs.translation` | ブール値\（true/ false\）.<br> **デフォルト値**: `true` |

   >[!NOTE]
   >
   > この設定はデフォルトで有効になっており、マップダッシュボードでは「翻訳」タブは使用できません。


## コンポーネントベースの翻訳ワークフローの設定

翻訳ベンダーのコネクタが DITA コンテンツをサポートしていない場合は、コンポーネントベースの翻訳ワークフローを有効にする必要があります。 有効にすると、翻訳可能コンテンツがアセットメタデータとして送信されます。 ただし、このワークフローを機能させるには、コネクタがアセットメタデータの翻訳をサポートしている必要があります。

設定で使用した翻訳ワークフローに基づいて、コンポーネントベースの翻訳ワークフローオプションを設定する必要があります。 [ 設定の上書き ](download-install-additional-config-override.md#) の手順に従って、設定ファイルを作成します。 設定ファイルで、コンポーネントベースの翻訳ワークフローを設定するために、次の\（property\）の詳細を指定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `component.translation` | ブール値：<br> -   人間による翻訳を使用している場合は、「*コンポーネントベースの翻訳ワークフロー&#x200B;**オプションを無効* \（`false`\）** します。 <br> -   機械翻訳を使用している場合は、「*コンポーネントベースの翻訳ワークフロー&#x200B;**オプション* 「\（`true`\）を有効にする** を選択します。 |



## 従来の翻訳ワークフローの設定

>[!IMPORTANT]
>
> パフォーマンスを向上させるには、AEM Guides 2024.06.0 以降で利用可能な最新の翻訳ワークフローを使用することをお勧めします。 ただし、翻訳プロセスのカスタマイズを有効にして、新しいワークフローの影響を受ける場合は、回避策として従来の翻訳ワークフローに戻すことを検討してください。

[ 設定の上書き ](download-install-additional-config-override.md#) の手順に従って、設定ファイルを作成します。 設定ファイルで、レガシー翻訳ワークフローを設定するために、次の（プロパティ）の詳細を指定します。


| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `translation.workflow.version.legacy` | Boolean:<br> – 最新の翻訳ワークフローを使用する場合は、「*レガシーの翻訳ワークフローを実行*」オプションを **無効**\（`false`\）にします。  <br> -   従来の翻訳を使用する場合は、「*従来の翻訳ワークフローを実行&#x200B;**オプション* 「\（`true`\）を有効にする** を選択します。<br> **デフォルト値**:false |




>[!NOTE]
>
> 翻訳コネクタを使用している場合は、Adobe Experience Manager ドキュメントの *[翻訳統合フレームワークの設定 ](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/administering/reusing-content/translation/integration-framework.html?lang=ja)* トピックの説明に従ってコネクタが設定されていることを確認してください。

>[!IMPORTANT]
>
> 翻訳設定を行った後、言語フォルダーに適切なクラウド設定をセットアップしたことを確認します。

## 一時的な言語コピーの後処理の設定

翻訳ワークフローを開始すると、ソースコンテンツの一時的な言語コピーが作成されます。 これらの一時ファイルに対する後処理操作を有効または無効にすることができます。 後処理操作では、ファイルからの着信および発信参照が解決され、他の操作と共にドキュメントの状態が設定されます。 これらの一時ファイルの後処理を有効にすると、翻訳プロセスの完了に時間がかかる可能性があります。 そのため、後処理オプションは無効にしておくことをお勧めします。

[ 設定の上書き ](download-install-additional-config-override.md#) の手順に従って、設定ファイルを作成します。 設定ファイルで、一時的な言語コピーの後処理を設定するために、次の\（property\）の詳細を指定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `postprocess.temporary.langcopies` | ブール値：<br> -   一時ファイルに対して後処理操作を実行しない場合は *無効* \（false\） **後処理言語コピー** オプションを選択します。<br> -   一時ファイルに対して後処理操作を実行する場合は *有効* \（true\） **後処理言語コピー** オプションを選択します。<br> **デフォルト値**:false |

