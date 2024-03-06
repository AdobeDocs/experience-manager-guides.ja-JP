---
title: オーサリング用のスマート候補の設定
description: オーサリング用のスマート候補の設定方法を説明します
source-git-commit: 1cdad275651b78d794ebc3f4ad9ead266ebeb0bd
workflow-type: tm+mt
source-wordcount: '689'
ht-degree: 1%

---

# AI を利用したオーサリング用のスマート候補の設定

管理者は、作成者向けにスマート候補機能を設定できます。 スマート修正サービスは、Adobe IMS認証ベースの認証で保護されます。 お使いの環境を、Adobeのセキュアなトークンベースの認証ワークフローと統合し、新しいスマート提案機能の使用を開始します。 次の設定は、 **AI 設定** タブをフォルダープロファイルに移動します。 追加後は、Web エディターでスマート候補機能を使用できます。

## Adobe Developer Console での IMS 設定の作成

Adobe Developer Console で IMS 設定を作成するには、次の手順を実行します。
1. Launch [Adobe Developer Console](https://developer.adobe.com/console).
1. 開発者コンソールに正常にログインすると、 **ホーム** 画面。 The **ホーム** 画面では、プロジェクトやダウンロードへのトップナビゲーションリンクを含む、情報やクイックリンクを簡単に見つけることができます。
1. 新しい空のプロジェクトを作成するには、「  **新規プロジェクトを作成** から  **クイックスタート** リンク。
   ![クイックスタートリンク](assets/conf-ss-quick-start.png) {width="550" align="left"}
   *新しいプロジェクトを作成します。*

1. 選択  **API を追加**  から  **プロジェクト** 画面。  The **API を追加** 画面が表示されます。 この画面には、アプリケーションを開発できるAdobe製品およびテクノロジーで使用可能なすべての API、イベント、サービスが表示されます。

1. を選択します。 **I/O 管理 API** をクリックして、プロジェクトに追加します。
   ![IO 管理 API](assets/confi-ss-io-management.png)
   *I/O 管理 API をプロジェクトに追加します。*

1. 新規作成 **OAuth 秘密鍵証明書** 保存します。
   ![API 設定の OAuth 秘密鍵証明書タイル](assets/conf-ss-OAuth-credential.png) {width="3000" align="left"}
   *OAuth 資格情報を API に設定します。*

1. Adobe Analytics の  **プロジェクト** タブ、選択 **OAuth サーバーからサーバーへ** 」オプションを選択し、新しく作成した資格情報を選択します。

1. を選択します。 **OAuth サーバー間通信** プロジェクトの秘密鍵証明書の詳細を表示するためのリンク。

   ![接続資格情報](assets/conf-ss-connected-credentials.png) {width="800" align="left"}

   *プロジェクトに接続して、秘密鍵証明書の詳細を表示します。*
1. CLIENT_ID キーと CLIENT_SECRET キーをコピーします。

これで、OAuth 認証の詳細が設定されました。 これら 2 つのキーは、次の節で必要となるので、便利に使用してください。

### 環境に IMS 設定を追加する

IMS 設定を環境に追加するには、次の手順を実行します。

1. Experience Managerを開き、設定する環境を含むプログラムを選択します。
1. 次に切り替え： **環境** タブをクリックします。
1. 設定する環境名を選択します。 これにより、環境情報ページに移動します。
1. 次に切り替え： **設定** タブをクリックします。
1. 次のスクリーンショットに示すように、 CLIENT_ID キーと CLIENT_SECRET キーを追加します。 次に示すように、同じ名前と設定を使用していることを確認します。
   ![環境の設定](assets/conf-ss-environment.png) {width="800" align="left"}
   *環境設定の詳細を追加します。*




IMS 設定を環境に追加したら、次の手順を実行して、OSGi を使用してこれらのプロパティをAEMガイドにリンクします。

1. Cloud Manager の Git プロジェクトコードで、以下の 2 つのファイルを追加します ( ファイルのコンテンツ用に、 [付録](#appendix)) をクリックします。

   * `com.adobe.fmdita.ims.service.ImsOauthUserAccountHeadersImpl.cfg.json`
   * `com.adobe.fmdita.smartsuggest.service.SmartSuggestConfigurationConsumer.cfg.json`
1. 新しく追加されたファイルが、 `filter.xml`.
1. Git の変更をコミットしてプッシュします。
1. パイプラインを実行して、環境に変更を適用します。

その後、スマート候補機能を使用できるようになります。



## 付録 {#appendix}

**ファイル**:
`com.adobe.fmdita.ims.service.ImsOauthUserAccountHeadersImpl.cfg.json`

**コンテンツ**:

```
{
  "client.id": "$[secret:CLIENT_ID]",
  "client.secret": "$[secret:CLIENT_SECRET]",
  "ims.url": "https://ims-na1.adobelogin.com"
}
```

**ファイル**: `com.adobe.fmdita.smartsuggest.service.SmartSuggestConfigurationConsumer.cfg.json`

**コンテンツ**:

```
{
  "smart.suggestion.flag":true,
  "conref.inline.threshold":0.6,
  "conref.block.threshold":0.7,
  "emerald.url":"https://adobeioruntime.net/apis/543112-smartsuggest/emerald/v1",
  "instance.type":"prod"
}
```

## スマート候補の設定の詳細

| キー | 説明 | 許可されている値 | デフォルト値 |
|---|---|---|---|
| smart.suggestion.flag | スマート候補を有効にするかどうかを制御します | true/false | false |
| conref.inline.threshold | ユーザーが現在入力中のタグに対して取得した提案の精度/再現率を制御するしきい値。 | -1.0 ～ 1.0 の任意の値。 | 0.6 |
| conref.block.threshold | ファイル全体でタグに対して取得された候補の精度と再現率を制御するしきい値。 | -1.0 ～ 1.0 の任意の値。 | 0.7 |
| emerald.url | Emerald ベクトルデータベースのエンドポイント | [https://adobeioruntime.net/apis/543112-smartsuggest/emerald/v1](https://adobeioruntime.net/apis/543112-smartsuggest/emerald/v1) | [https://adobeioruntime.net/apis/543112-smartsuggest/emerald/v1](https://adobeioruntime.net/apis/543112-smartsuggest/emerald/v1) |
| instance.type | AEMインスタンスのタイプ。 スマート候補が設定されているAEMインスタンスごとに一意であることを確認します。 この機能は「instance.type」 = 「stage」を使用してステージ環境でテストする場合に使用しますが、同時に、「prod」でも設定されます。 | 環境を識別する一意のキー。 のみ *英数字* の値を使用できます。 &quot;dev&quot;/&quot;stage&quot;/&quot;prod&quot;/&quot;test1&quot;/&quot;stage2&quot; | &quot;prod&quot; |

設定が完了すると、Web エディターの右側のパネルにスマート候補アイコンが表示されます。 トピックを編集する際に、スマート候補のリストを表示できます。 詳しくは、 [オーサリングに対する AI ベースのスマート提案](../user-guide/authoring-ai-based-smart-suggestions.md) 」の節を参照してください。
