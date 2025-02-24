---
title: スマートヘルプとオーサリングのための AI アシスタントの設定
description: Experience Manager Guidesで AI アシスタントを設定する方法を説明します
exl-id: a595ca1f-0123-40d3-a79c-a066bc6517b4
source-git-commit: 6856b9b31ee5d1111ee1c53836dfa8138780a283
workflow-type: tm+mt
source-wordcount: '880'
ht-degree: 0%

---

# AI アシスタントの設定

管理者は、Experience Manager Guidesで AI アシスタント機能を設定できます。 AI アシスタントは、Adobe IMS認証ベースの認証によって保護されます。 環境をAdobeのセキュアなトークンベースの認証ワークフローと統合し、AI アシスタント機能の使用を開始します。 次の設定は、「**AI 設定**」タブをフォルダープロファイルに追加する際に役立ちます。 追加したら、Experience Manager Guidesの AI アシスタント機能を使用できます。

AI アシスタントを設定するには、次の手順を実行します。

1. [Adobe Developer Consoleで IMS 設定を作成します ](#create-ims-configurations-in-adobe-developer-console)。
2. [環境への IMS 設定の追加](#add-ims-configuration-to-the-environment)
3. [環境で AI フラグを有効にする](#enable-ai-flag-in-the-environment)
4. [環境への変更の適用](#apply-changes-to-the-environment)
5. [フォルダープロファイルで AI アシスタントを有効にする](#enable-ai-assistant-in-folder-profile)
6. [フォルダープロファイルでのスマート候補の設定](./conf-folder-level.md#configure-ai-assistant-for-smart-help-and-authoring)

## Adobe Developer Consoleでの IMS 設定の作成

Adobe Developer Consoleで IMS 設定を作成するには、次の手順を実行します。

>[!NOTE]
>
>マイクロサービスベースの公開を設定する OAuth プロジェクトを既に作成している場合は、次の手順をスキップしてプロジェクトを作成できます。

1. [Adobe Developer Console](https://developer.adobe.com/console) を起動します。
1. Developer Consoleに正常にログインしたら、**ホーム** 画面が表示されます。 **ホーム** 画面では、情報や、プロジェクトおよびダウンロードへのトップナビゲーションリンクなどのクイックリンクを簡単に見つけることができます。
1. 空のプロジェクトを新規作成するには、「**クイックスタート** リンクから **新規プロジェクトを作成** を選択します。
   ![ クイックスタートリンク ](assets/conf-ss-quick-start.png) {width="550" align="left"}
   *新規プロジェクトの作成*

1. **プロジェクト** 画面から **API を追加** を選択します。  **API の追加** 画面が表示されます。 この画面には、アプリケーションの開発に使用できるAdobe製品およびテクノロジーに関して使用可能なすべての API、イベントおよびサービスが表示されます。

1. **I/O Management API** を選択して、プロジェクトに追加します。
   ![IO 管理 API](assets/confi-ss-io-management.png)
   *I/O Management API をプロジェクトに追加します*。

1. 新しい **OAuth 認証情報** を作成して保存します。

   ![API 設定の OAuth 認証情報タイル ](assets/conf-ss-OAuth-credential.png)

   *API に OAuth 認証情報を設定します。*

1. 「**プロジェクト**」タブで「**OAuth サーバーからサーバーへ**」オプションを選択し、新しく作成した資格情報を選択します。

1. **OAuth サーバー間** リンクを選択して、プロジェクトの資格情報の詳細を表示します。

   ![ 接続された資格情報 ](assets/conf-ss-connected-credentials.png) {width="800" align="left"}

   *プロジェクトに接続して、資格情報の詳細を表示します。*

1. 「**プロジェクト**」タブに戻り、左側の **プロジェクトの概要** を選択します。

   <img src="assets/project-overview.png" alt="プロジェクトの概要" width="500">

   *新しいプロジェクトの概要*

1. 上部の「**ダウンロード**」ボタンを選択して、サービス JSON をダウンロードします。

   <img src="assets/download-json.png" alt="json をダウンロード" width="500">

   *JSON サービスの詳細をダウンロードします。*

OAuth 認証の詳細を設定し、JSON サービスの詳細をダウンロードしました。 次の節で必要になるので、このファイルは手元に置いておいてください。

## 環境への IMS 設定の追加

次の手順を実行して、環境に IMS 設定を追加します。

1. Experience Managerを開き、設定する環境が含まれているプログラムを選択します。
1. 「**環境**」タブに切り替えます。
1. 設定する環境名を選択します。 これにより、**環境情報** ページに移動します。
1. 「**設定**」タブに切り替えます。
1. SERVICE_ACCOUNT_DETAILS JSON フィールドを更新します。 次のスクリーンショットで示したのと同じ名前と設定を使用していることを確認してください。

   ![ims サービスアカウントの設定 ](assets/ims-service-account-config.png){width="800" align="left"}

## 環境で AI フラグを有効にする

Experience Manager Guides UI で AI アシスタント機能を有効にするには、環境で `ENABLES_GUIDES_AI` フラグを追加します。

次のスクリーンショットで示したのと同じ名前と設定を使用していることを確認してください。

![](assets/conf-folder-ai-assistant-enable.png){width="800" align="left"}

フラグを **true** に設定すると機能が有効になり、**false** に設定すると無効になります。

## 環境への変更の適用

IMS 設定を追加し、AI Assistant フラグを環境に有効にしたら、次の手順を実行して、OSGi を使用してこれらのプロパティをAEM Guidesにリンクします。

1. Cloud Manager Git プロジェクトコードに、以下の 2 つのファイルを追加します（ファイルの内容については、「付録 [ を参照 ](#appendix)。

   * `com.adobe.aem.guides.eventing.ImsConfiguratorService.cfg.json`
   * `com.adobe.guides.ai.config.service.AiConfigImpl.cfg.json`
1. 新しく追加したファイルが `filter.xml` でカバーされていることを確認します。
1. Git の変更をコミットし、プッシュします。
1. パイプラインを実行して変更を環境に適用します。

## フォルダープロファイルで AI アシスタントを有効にする

設定の変更を適用したら、目的のフォルダープロファイルの AI アシスタント機能を有効にします。

詳しくは、[ エディターの機能について ](../user-guide/web-editor-features.md) を参照してください。

![](assets/conf-folder-ai-assistant-enable-settings.png){width="300" align="left"}

## フォルダープロファイルでのスマート候補の設定

AI アシスタント機能を有効にした後、フォルダープロファイルでスマート候補機能を設定します。

詳しくは、[ フォルダープロファイルでのスマート候補の設定 ](./conf-folder-level.md#configure-ai-assistant-for-smart-help-and-authoring) を参照してください。


## 付録 {#appendix}

**ファイル**:
`com.adobe.aem.guides.eventing.ImsConfiguratorService.cfg.json`

**コンテンツ**:

```
{
 "service.account.details": "$[secret:SERVICE_ACCOUNT_DETAILS]",
}
```

**ファイル**: `com.adobe.guides.ai.config.service.AiConfigImpl.cfg.json`

**コンテンツ**:

```
{
  "conref.inline.threshold":0.6,
  "conref.block.threshold":0.7,
  "related.link.threshold":0.5,
  "emerald.url":"https://adobeioruntime.net/apis/543112-smartsuggest/emerald/v1",
  "instance.type":"prod",
  "chat.url":"https://aem-guides-ai.adobe.io"
}
```

## AI アシスタントの設定の詳細

| キー | 説明 | 使用できる値 | デフォルト値 |
|---|---|---|---|
| conref.inline.threshold | ユーザーが現在入力しているタグに対して取得した候補の精度/呼び出しを制御するしきい値。 | -1.0 から 1.0 までの任意の値。 | 0.6 |
| conref.block.threshold | ファイル全体でタグに対して取得された候補の精度/呼び出しを制御するしきい値。 | -1.0 から 1.0 までの任意の値。 | 0.7 |
| emerald.url | スマート提案ベクターデータベースのエンドポイント | [https://adobeioruntime.net/apis/543112-smartsuggest/emerald/v1](https://adobeioruntime.net/apis/543112-smartsuggest/emerald/v1) | [https://adobeioruntime.net/apis/543112-smartsuggest/emerald/v1](https://adobeioruntime.net/apis/543112-smartsuggest/emerald/v1) |
| chat.url | AI アシスタントサービスのエンドポイント | [https://aem-guides-ai.adobe.io](https://aem-guides-ai.adobe.io) | [https://aem-guides-ai.adobe.io](https://aem-guides-ai.adobe.io) |
| instance.type | AEM インスタンスのタイプ。 スマート候補が設定されているAEM インスタンスごとに、これが一意であることを確認してください。 ユースケースは、「instance.type」=「stage」を使用してステージング環境で機能をテストすると同時に、「prod」でも機能を設定することです。 | 環境を識別する一意のキー。 *英数字* の値のみを使用できます。 &quot;dev&quot;/&quot;stage&quot;/&quot;prod&quot;/&quot;test1&quot;/&quot;stage2&quot; | 「prod」 |

設定すると、「AI アシスタント」アイコンがExperience Manager Guidesのホームページおよびエディターに表示されます。 詳しくは、『Experience Manager ユーザーガイド』の [AI アシスタント ](../user-guide/ai-assistant.md) の節を参照してください。
