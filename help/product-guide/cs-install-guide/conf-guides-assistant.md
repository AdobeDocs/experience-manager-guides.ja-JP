---
title: ガイド アシスタントを設定してコンテンツを検索する
description: ガイド アシスタントを設定してコンテンツを検索する方法を説明します
source-git-commit: 8ac0ed6b867a3efdef750cb19ed4955a67def9ee
workflow-type: tm+mt
source-wordcount: '603'
ht-degree: 0%

---


# AI を利用したガイドアシスタントの設定によるコンテンツの検索

管理者は、作成者向けのガイドアシスタント機能を設定できます。 Guides Assistant サービスは、Adobe IMS認証ベースの認証で保護されています。 お使いの環境をAdobeのセキュアなトークンベースの認証ワークフローと統合し、新しい Guides Assistant 機能の使用を開始します。 以下の設定は、の追加に役立ちます **AI 設定** tab キーを押すとフォルダープロファイルに移動します。 追加したら、Web エディターのガイドアシスタント機能を使用できます。

## Adobe Developer コンソールでの IMS 設定の作成

Adobe Developer コンソールで IMS 設定を作成するには、次の手順を実行します。

>[!NOTE]
>
>スマート提案機能またはマイクロサービスベースの公開機能を設定する OAuth プロジェクトを既に作成している場合は、次の手順をスキップしてプロジェクトを作成できます。

1. ローンチ [Adobe Developer コンソール](https://developer.adobe.com/console).
1. Developer Console に正常にログインしたら、 **ホーム** 画面。 この **ホーム** 画面では、情報や、プロジェクトおよびダウンロードへのトップナビゲーションリンクなどのクイックリンクを簡単に見つけることができます。
1. 新しい空のプロジェクトを作成するには、を選択します。 **新規プロジェクトを作成** から **クイックスタート** リンク。
   ![クイックスタートリンク](assets/conf-ss-quick-start.png) {width="550" align="left"}
   *新しいプロジェクトを作成します。*

1. を選択 **API を追加** から **プロジェクト** 画面。  この **API を追加** 画面が表示されます。 この画面には、アプリケーションの開発に使用できるAdobe製品およびテクノロジに対して使用可能なすべての API、イベント、およびサービスが表示されます。

1. 「」を選択します **I/O Management API** をクリックして、プロジェクトに追加します。
   ![IO 管理 API](assets/confi-ss-io-management.png)
   *I/O Management API をプロジェクトに追加します。*

1. 新しいを作成 **OAuth 認証情報** 保存します。
   ![設定 API の OAuth 認証情報タイル](assets/conf-ss-OAuth-credential.png) {width="3000" align="left"}
   *API に OAuth 認証情報を設定します。*

1. が含まれる  **プロジェクト** タブで、 **OAuth サーバーからサーバーへ** をオプションとして選択し、新しく作成した資格情報を選択します。

1. 「」を選択します **OAuth サーバー間** リンクして、プロジェクトの資格情報の詳細を表示します。

   ![接続された資格情報](assets/conf-ss-connected-credentials.png) {width="800" align="left"}

   *プロジェクトに接続して、資格情報の詳細を表示します。*

1. に戻る **プロジェクト** tab キーを押して選択 **プロジェクトの概要** 左側。

   <img src="assets/project-overview.png" alt="プロジェクトの概要" width="500">

   *新しいプロジェクトの基本を学びます。*

1. 「」をクリックします **Download** 上部のボタンをクリックして、サービス JSON をダウンロードします。

   <img src="assets/download-json.png" alt="json をダウンロード" width="500">

   *JSON サービスの詳細をダウンロードします。*

OAuth 認証の詳細を設定し、JSON サービスの詳細をダウンロードしました。 次の節で必要になるので、このファイルは手元に置いておいてください。

### 環境への IMS 設定の追加

次の手順を実行して、環境に IMS 設定を追加します。

1. Experience Managerを開き、設定する環境を含むプログラムを選択します。
1. に切り替え **環境** タブ。
1. 設定する環境名を選択します。 これで、 **環境情報** ページ。
1. に切り替え **設定** タブ。
1. SERVICE_ACCOUNT_DETAILS JSON フィールドを更新します。 次のスクリーンショットで示したのと同じ名前と設定を使用していることを確認してください。

![ims サービスアカウントの設定](assets/ims-service-account-config.png){width="800" align="left"}


*環境設定の詳細を追加します。*




IMS 設定を環境に追加したら、次の手順を実行して、OSGi を使用してこれらのプロパティをAEM Guides にリンクします。

1. Cloud Manager Git プロジェクトコードに、以下の 2 つのファイル（ファイルの内容は次を表示）を追加します。 [付録](#appendix)）に設定します。

   * `com.adobe.aem.guides.eventing.ImsConfiguratorService.cfg.json`

1. 新しく追加したファイルがによってカバーされていることを確認します。 `filter.xml`.
1. Git の変更をコミットし、プッシュします。
1. パイプラインを実行して、変更を環境に適用します。

この操作が完了すると、 **ガイド アシスタント** 機能



## 付録 {#appendix}

**ファイル**:
`com.adobe.aem.guides.eventing.ImsConfiguratorService.cfg.json`

**コンテンツ**:

```
{
 "service.account.details": "$[secret:SERVICE_ACCOUNT_DETAILS]",
}
```


設定した後、 **ガイド アシスタント** ![ガイド アシスタント](assets/guides-assistant-icon.svg) アイコンは、web エディターの右側のパネルに表示されます。 アイコンを選択して、 **ガイド アシスタント** パネル。
詳しくは、 [コンテンツを検索するための AI を活用したガイドアシスタント](../user-guide/ai-based-guides-assistant.md) の節（Experience Managerユーザーガイド）を参照してください。
