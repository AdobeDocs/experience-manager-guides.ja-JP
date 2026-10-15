---
title: AEM GuidesとGuides Knowledge AIの連携
description: AEM GuidesとGuides Knowledge AIの連携方法について説明します
feature: Introduction
role: Admin
level: Experienced
source-git-commit: 05976e2a408e57256a454f181bb93d900dc091ab
workflow-type: tm+mt
source-wordcount: '665'
ht-degree: 2%
---

# Adobe Adobe Experience Manager GuidesとGuides Knowledge AIを連携する（Beta）

>[!IMPORTANT]
>
> この機能はデフォルトでは無効になっています。 Guides ナレッジ AI機能を有効にするには、カスタマーサクセス チームにお問い合わせください。

この記事では、管理者およびコンテンツエンジニアに対して、Guides Knowledge AIへのアクセスを設定し、Knowledge AI内でExperience Manager Guides コンテンツをアップロードして利用するためのエンドツーエンドのプロセスを提供します。

## プロセスの概要

| ステップ | 行動の特定 |
|---|---|
| 1 | Adobe Developer Consoleでサービスアカウントを作成し、お使いの環境に合わせて設定します。 |
| 2 | サービスアカウントの資格情報ファイルからテクニカルアカウントの電子メールを取得します。 |
| 3 | 役割を作成してユーザーを追加することで、ナレッジ AIでサービスアカウントにアクセス権を付与します。 |
| 4 | Experience Manager Guidesでナレッジ AI出力プリセットを設定し、コンテンツをアップロードします。 |


## 前提条件

開始する前に、次のアクセス権と権限があることを確認してください。

| 要件 | 目的 |
|---|---|
| Adobe 開発者コンソール | サービスアカウントを作成し、そのJSON資格情報をダウンロードします。 |
| Adobe Experience Manager Guides | コンテンツを作成し、ナレッジ AIの出力プリセットを設定します。 |
| [&#x200B; ナレッジ AI](https://guidesai.adobe.io/) | 役割とユーザーを管理し、アップロードされたコンテンツを受け取ります。 |
| 権限：サービスアカウントの作成 | サービスアカウントを作成するには、Adobe Developer Consoleで必要です。 |
| 権限：ナレッジ AIでのユーザーと役割の管理 | ナレッジ AIでサービスアカウントにアクセス権を付与するために必要です。 |

## サービスアカウントの作成

ナレッジ AIは、サービスアカウントを使用して安全に認証し、コンテンツにアクセスします。

1. [&#x200B; マイクロサービス IMT設定の設定](https://experienceleague.adobe.com/en/docs/experience-manager-guides/using/knowledge-base/kb-articles/publishing/configure-microservices-imt-config)の手順に従います。

1. 新しいサービスアカウントを作成し、生成されたJSON資格情報ファイルをダウンロードします。

1. ダウンロードした資格情報を使用して、必要な環境設定を行います。

完了したら、サービスアカウントを環境に正常に関連付ける必要があります。

>[!NOTE]
>
> お使いの環境にサービスアカウントを既に作成して設定している場合は、次の手順に進むことができます。


## テクニカルアカウントのメールを取得

ナレッジ AIへのアクセス権を付与するには、サービスアカウントを特定します。

1. ダウンロードしたサービスアカウント JSON ファイルを開きます。
1. フィールド名`technical_account_email`を検索します。 次のような値を表示します。

   ```json
   {
   "technical_account_email": "a1b2c3d4e5f6@techacct.adobe.com"
   }
   ```

1. `technical_account_email`に関連付けられている電子メールアドレスをコピーします。 このメールアドレスは次のステップで使用します。

## ナレッジ AIへのアクセス権の付与

サービスアカウントがコンテンツを管理およびアップロードできるようにするには、適切な権限を持ってナレッジ AIに追加します。

1. [&#x200B; ナレッジ AI](https://guidesai.adobe.io/)を開きます。
1. **セキュリティ/役割**&#x200B;に移動し、必要な権限を最小限に抑えた役割を作成します。
1. **セキュリティ/ユーザー/ユーザーを追加**&#x200B;に移動します。 サービスアカウント JSONからコピーした`technical_account_email`を使用して新しいユーザーを追加し、**ドメイン** ドロップダウンからドメインを選択し、前の手順で作成した役割を割り当てます。

サービスアカウントが、コンテンツ管理およびアップロード操作の実行を許可されるようになりました。

## ナレッジ AI プリセットの設定とコンテンツのアップロード

ナレッジ AIにコンテンツを公開するには、権限を設定したらExperience Manager Guidesを設定します。

1. Experience Manager Guidesで&#x200B;**マップコンソール**&#x200B;を開きます。
1. 「**出力プリセット**」タブに移動します。
1. 「+」アイコンを選択して、出力プリセットを作成します。
1. **新しい出力プリセット** ダイアログボックスの&#x200B;**タイプ** ドロップダウンから&#x200B;**ナレッジ AI**&#x200B;を選択します。 **名前**&#x200B;を入力し、**現在のフォルダープロファイルに追加**&#x200B;を選択して、現在のフォルダープロファイル内に出力プリセットを作成します。

   ![knowledge-ai-preset-creation](assets/knowledge-ai-preset.png)

1. 「**追加**」を選択します。 ナレッジ AI プリセットが作成されます。
1. 設定したナレッジ AI プリセットを開きます。
1. 役割が`technical_account_email`に付与されたドメインを選択し、**コンテンツをアップロード**&#x200B;を選択します。 これにより、コンテンツのアップロードワークフローがナレッジ AIにトリガーされます。 アップロードプロセスが完了するのを待ちます。

   ![knowledge-ai-domain](assets/knowledge-ai-domain.png)

1. アップロードが完了したら、**ナレッジ AIで開く**&#x200B;を選択します。 これにより、アップロードされたコンテンツを使用して、ドメイン内のナレッジ AI チャットが開きます。

   ![knowledge-ai-open](assets/open-knowledge-ai.png)

サービスアカウントを正常に設定し、必要な権限を割り当て、ナレッジ AIでExperience Manager Guides コンテンツを利用できるようにしました。 更新されたコンテンツを公開する場合は、新しいナレッジ AI プリセットを作成し、[&#x200B; ナレッジ AI プリセットの設定とコンテンツのアップロード &#x200B;](#configure-knowledge-ai-preset-and-upload-content) セクションで説明されている手順に従います。



