---
title: コンテンツの翻訳
description: さらに詳しく
exl-id: 5af78233-343e-47ba-b60c-b7f4789e2406
feature: Translation
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/WjrAoZplwWbFYxySm-faIIda81AWTYnqhvbdsRk8tjU
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: ab01a588-7dea-43f2-a699-0b3f128465d6id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2: id: d4f22c6d-7923-41e5-9da3-527ff8df4bc8
role_v2: id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
topic_v2: id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 877
ht-degree: 10%

---

# コンテンツの翻訳 {#id181GB0400UI}

ページコンテンツ、アセットおよびユーザー生成コンテンツの翻訳を自動化して、多言語の web サイトを作成および管理します。 翻訳ワークフローを自動化するには、翻訳サービスプロバイダーと AEM とを統合して、コンテンツを複数の言語に翻訳するためのプロジェクトを作成します。 AEM では人間による翻訳と機械翻訳のワークフローがサポートされます。

- 人間による翻訳：コンテンツは翻訳プロバイダーに送信され、プロの翻訳者が翻訳します。 完了すると、翻訳コンテンツが返され、AEM に読み込まれます。 翻訳プロバイダーがAEMと統合されると、AEMと翻訳プロバイダー間でコンテンツが自動的に交換されます

- 機械翻訳：機械翻訳サービスは、コンテンツを即座に翻訳します


コンテンツの翻訳には次の手順が含まれます。

1. AEMを[翻訳サービスプロバイダー](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/administering/reusing-content/translation/integration-framework.html?lang=en)に接続し、翻訳統合フレームワーク設定を作成します。

1. 言語マスターのページを翻訳サービスとフレームワーク設定に関連付けます。

1. 翻訳する[ コンテンツの種類](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/administering/reusing-content/translation/rules.html?lang=en)を特定します。

1. [翻訳するコンテンツを準備](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/administering/reusing-content/translation/preparation.html?lang=en)します。そのためには、言語マスターをオーサリングして、言語コピーのルートページを作成します。

1. 翻訳するコンテンツを収集し、翻訳プロセスを準備するために、[翻訳プロジェクト ](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/administering/reusing-content/translation/managing-projects.html?lang=en)を作成します。

1. 翻訳プロジェクトを使用して、[ コンテンツ翻訳](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/administering/reusing-content/translation/managing-projects.html?lang=en) プロセスを管理します。


翻訳サービスプロバイダーがAEMとの統合にコネクタを提供しない場合、AEMでは、翻訳されたコンテンツのXML形式での手作業による書き出しと読み込みがサポートされます。

>[!TIP]
>
> コンテンツの翻訳に関するベストプラクティスについては、ベストプラクティスガイドの「*翻訳*」セクションを参照してください。

## DITA マップダッシュボードの「翻訳」タブの設定

DITA マップダッシュボードの「翻訳」タブを非表示にするには、次の手順を実行します。

1. 設定ファイルを作成するには、[設定の上書き](download-install-additional-config-override.md#)の手順を使用します。
1. 設定ファイルで、マップダッシュボードの「翻訳」タブを設定するために、次の\（プロパティ\）詳細を指定します。

   | PID | プロパティキー | プロパティの値 |
   |---|------------|--------------|
   | `com.adobe.fmdita.config.ConfigManager` | `tabs.translation` | ブール値\（true/ false\）。<br> **デフォルト値**: `true` |

   >[!NOTE]
   >
   > この設定はデフォルトで有効になっており、「翻訳」タブはマップダッシュボードでは使用できません。


## コンポーネントベースの翻訳ワークフローの設定

翻訳ベンダーのコネクタがDITA コンテンツをサポートしていない場合は、コンポーネントベースの翻訳ワークフローを有効にする必要があります。 有効にすると、翻訳可能なコンテンツがアセットメタデータとして送信されます。 ただし、このワークフローを機能させるには、コネクタでアセットのメタデータの翻訳をサポートする必要があります。

設定で使用する翻訳ワークフローに基づいて、コンポーネントベースの翻訳ワークフローオプションを設定する必要があります。 設定ファイルを作成するには、[設定の上書き](download-install-additional-config-override.md#)の手順を使用します。 コンポーネントベースの翻訳ワークフローを設定するには、設定ファイルで次の\（property\）詳細を指定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `component.translation` | ブール値：<br> – 人による翻訳を使用している場合は、*コンポーネントベースの翻訳ワークフロー&#x200B;**オプションを* \（`false`\）無効にします。<br> – 機械翻訳を使用している場合は、*コンポーネントベースの翻訳ワークフロー**オプションの\（`true`\）*&#x200B;を有効にします。**** |



## 従来の翻訳ワークフローの設定

>[!IMPORTANT]
>
> パフォーマンスを向上させるには、AEM Guides 2024.06.0以降で利用可能な最新の翻訳ワークフローを使用することをお勧めします。 ただし、翻訳プロセスでカスタマイズを有効にし、新しいワークフローの影響を受ける場合は、回避策として従来の翻訳ワークフローに戻すことを検討してください。

設定ファイルを作成するには、[設定の上書き](download-install-additional-config-override.md#)の手順を使用します。 設定ファイルで、次の（プロパティ）詳細を指定して、従来の翻訳ワークフローを設定します。


| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `translation.workflow.version.legacy` | ブール値：<br> – 最新の翻訳ワークフローを使用している場合は、*従来の翻訳ワークフローを実行&#x200B;**する**オプションを* \（`false`\）無効にします。 <br> - レガシー翻訳を使用する場合は、*レガシー翻訳ワークフローの実行&#x200B;**オプションの\（`true`\）*を有効にします。<br>** **デフォルト値**: false |




>[!NOTE]
>
> 翻訳コネクタを使用している場合は、Adobe Experience Manager ドキュメントの「*[Translation Integration Frameworkの設定](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/administering/reusing-content/translation/integration-framework.html?lang=en)*」のトピックで説明されているように、コネクタが設定されていることを確認してください。

>[!IMPORTANT]
>
> 翻訳設定を設定したら、言語フォルダーに適切なクラウド設定を設定していることを確認します。

## 一時的な言語コピーの後処理の設定

翻訳ワークフローを開始すると、ソースコンテンツの一時的な言語コピーがシステムによって作成されます。 これらの一時ファイルに対する後処理操作を有効にするか無効にするかを選択できます。 後処理操作では、ファイルからの入出力参照が解決され、文書状態が他の操作と共に設定されます。 これらの一時ファイルに対して後処理を有効にすると、翻訳プロセスの完了に時間がかかる場合があります。 したがって、後処理オプションを無効にすることをお勧めします。

設定ファイルを作成するには、[設定の上書き](download-install-additional-config-override.md#)の手順を使用します。 設定ファイルで、次の\（property\）詳細を指定して、一時的な言語コピーの後処理を設定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `postprocess.temporary.langcopies` | ブール値：<br> – 一時ファイルに対して後処理操作を実行しない場合は、*処理後の言語コピー&#x200B;**オプション**を*&#x200B;無効にする\（false\）。<br>  – 一時ファイルに対して後処理操作を実行する場合は、*Enable* \（true\）、**後処理言語コピー** オプションを使用します。<br> **デフォルト値**: false |

