---
title: ガイド アシスタントを設定してコンテンツを検索する
description: ガイド アシスタントを設定してコンテンツを検索する方法を説明します
source-git-commit: 8ac0ed6b867a3efdef750cb19ed4955a67def9ee
workflow-type: tm+mt
source-wordcount: '603'
ht-degree: 0%

---


# AI を利用したガイドアシスタントの設定によるコンテンツの検索

管理者は、作成者向けのガイドアシスタント機能を設定できます。 Guides Assistant サービスは、Adobe IMS認証ベースの認証で保護されています。 お使いの環境をAdobeのセキュアなトークンベースの認証ワークフローと統合し、新しい Guides Assistant 機能の使用を開始します。 次の設定は、「**AI 設定**」タブをフォルダープロファイルに追加する場合に役立ちます。 追加したら、Web エディターのガイドアシスタント機能を使用できます。

## Adobe Developer Consoleでの IMS 設定の作成

Adobe Developer Consoleで IMS 設定を作成するには、次の手順を実行します。

>[!NOTE]
>
>スマート提案機能またはマイクロサービスベースの公開機能を設定する OAuth プロジェクトを既に作成している場合は、次の手順をスキップしてプロジェクトを作成できます。

1. [Adobe Developer Console](https://developer.adobe.com/console) を起動します。
1. Developer Consoleに正常にログインしたら、**ホーム** 画面が表示されます。 **ホーム** 画面では、情報や、プロジェクトおよびダウンロードへのトップナビゲーションリンクなどのクイックリンクを簡単に見つけることができます。
1. 空のプロジェクトを新規作成するには、「**クイックスタート** リンクから **新規プロジェクトを作成** を選択します。
   ![ クイックスタートリンク ](assets/conf-ss-quick-start.png) {width="550" align="left"}
   *新規プロジェクトの作成*

1. **プロジェクト** 画面から **API を追加** を選択します。  **API の追加** 画面が表示されます。 この画面には、アプリケーションの開発に使用できるAdobe製品およびテクノロジに対して使用可能なすべての API、イベント、およびサービスが表示されます。

1. **I/O Management API** を選択して、プロジェクトに追加します。
   ![IO 管理 API](assets/confi-ss-io-management.png)
   *I/O Management API をプロジェクトに追加します*。

1. 新しい **OAuth 認証情報** を作成して保存します。
   ![API 設定の OAuth 認証情報タイル ](assets/conf-ss-OAuth-credential.png) {width="3000" align="left"}
   *API に OAuth 認証情報を設定します。*

1. 「**プロジェクト**」タブで「**OAuth サーバーからサーバーへ**」オプションを選択し、新しく作成した資格情報を選択します。

1. **OAuth サーバー間** リンクを選択して、プロジェクトの資格情報の詳細を表示します。

   ![ 接続された資格情報 ](assets/conf-ss-connected-credentials.png) {width="800" align="left"}

   *プロジェクトに接続して、資格情報の詳細を表示します。*

1. 「**プロジェクト**」タブに戻り、左側の **プロジェクトの概要** を選択します。

   <img src="assets/project-overview.png" alt="プロジェクトの概要" width="500">

   *新しいプロジェクトの概要*

1. 上部の「**ダウンロード**」ボタンをクリックして、サービス JSON をダウンロードします。

   <img src="assets/download-json.png" alt="json をダウンロード" width="500">

   *JSON サービスの詳細をダウンロードします。*

OAuth 認証の詳細を設定し、JSON サービスの詳細をダウンロードしました。 次の節で必要になるので、このファイルは手元に置いておいてください。

### 環境への IMS 設定の追加

次の手順を実行して、環境に IMS 設定を追加します。

1. Experience Managerを開き、設定する環境を含むプログラムを選択します。
1. 「**環境**」タブに切り替えます。
1. 設定する環境名を選択します。 これにより、**環境情報** ページに移動します。
1. 「**設定**」タブに切り替えます。
1. SERVICE_ACCOUNT_DETAILS JSON フィールドを更新します。 次のスクリーンショットで示したのと同じ名前と設定を使用していることを確認してください。

![ims サービスアカウントの設定 ](assets/ims-service-account-config.png){width="800" align="left"}


*環境設定の詳細を追加します*。




IMS 設定を環境に追加したら、次の手順を実行して、OSGi を使用してこれらのプロパティをAEM Guidesにリンクします。

1. Cloud Manager Git プロジェクトコードに、以下の 2 つのファイルを追加します（ファイルの内容については、「付録 [ を参照 ](#appendix)。

   * `com.adobe.aem.guides.eventing.ImsConfiguratorService.cfg.json`

1. 新しく追加したファイルが `filter.xml` でカバーされていることを確認します。
1. Git の変更をコミットし、プッシュします。
1. パイプラインを実行して、変更を環境に適用します。

この操作が完了すると、**ガイドアシスタント** 機能を使用できるようになります。



## 付録 {#appendix}

**ファイル**:
`com.adobe.aem.guides.eventing.ImsConfiguratorService.cfg.json`

**コンテンツ**:

```
{
 "service.account.details": "$[secret:SERVICE_ACCOUNT_DETAILS]",
}
```


設定すると、「**Guides Assistant**![Guides Assistant](assets/guides-assistant-icon.svg)」アイコンが Web エディターの右側のパネルに表示されます。 アイコンを選択して、**ガイドアシスタント** パネルを表示します。
詳しくは、Experience Managerユーザーガイドの [AI を利用した Guides Assistant to search content](../user-guide/ai-based-guides-assistant.md) の節を参照してください。
