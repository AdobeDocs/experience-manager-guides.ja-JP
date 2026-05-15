---
title: コンテンツを検索するためのスマートヘルプの設定
description: コンテンツを検索するためのスマートヘルプの設定方法を説明します
exl-id: b5836c02-027e-459a-a7f0-f7d631f999dc
TQID: https://experienceleague.adobe.com/CVY-v5lrpyLwIjmcxA6-p-4E0OuKZM14cvJomBqADz4
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a01bfd36-4ab8-4bf8-9dc0-5b45b890552eid: a3bd6397-2eb2-4908-a61c-226e26855dcaid: ab01a588-7dea-43f2-a699-0b3f128465d6id: c6d09140-3c91-45d3-b7ed-b681af752f43id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2: id: ad602516-aca3-4247-9ae8-f393d958efa9
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 619
ht-degree: 0%

---

# AIを活用したスマートヘルプを設定してコンテンツを検索

管理者は、作成者に対してスマートヘルプ機能を設定できます。 スマートヘルプサービスは、Adobe IMS認証ベースの認証によって保護されています。 Adobeの安全なトークンベースの認証ワークフローと既存の環境を統合し、新しいスマートヘルプ機能を使用できるようにします。 次の設定を使用すると、**AI設定** タブをフォルダープロファイルに追加できます。 追加したら、Web エディターのスマートヘルプ機能を使用できます。

## Adobe Developer ConsoleでのIMS設定の作成

Adobe Developer ConsoleでIMS設定を作成するには、次の手順を実行します。

>[!NOTE]
>
>スマート提案の機能またはマイクロサービスベースの公開を設定するOAuth プロジェクトを既に作成している場合は、次の手順をスキップしてプロジェクトを作成できます。 手順8から始めます。

1. [Adobe Developer Console](https://developer.adobe.com/console)を起動します。
1. Developer Consoleに正常にログインすると、**Home**&#x200B;画面が表示されます。 **ホーム**&#x200B;画面では、プロジェクトやダウンロードへのトップナビゲーションリンクなど、情報やクイックリンクを簡単に見つけることができます。
1. 新しい空のプロジェクトを作成するには、**クイックスタート** リンクから「**新しいプロジェクトを作成**」を選択します。
   ![ クイックスタートリンク ](assets/conf-ss-quick-start.png) {width="550"}
   *新しいプロジェクトを作成します。*

1. **プロジェクト**&#x200B;画面から「**API**&#x200B;を追加」を選択します。  「**API**&#x200B;を追加」画面が表示されます。 この画面には、アプリケーションの開発に使用できるAdobe製品およびテクノロジに使用できるすべてのAPI、イベント、サービスが表示されます。

1. **I/O Management API**を選択して、プロジェクトに追加します。
   ![IO管理API](assets/confi-ss-io-management.png)
   *I/O Management APIをプロジェクトに追加します。*

1. 新しい&#x200B;**OAuth資格情報**を作成して保存します。
   configure API](assets/conf-ss-OAuth-credential.png)の![OAuth資格情報タイル {width="3000"}
   *APIにOAuth資格情報を設定します。*

1. 「**プロジェクト**」タブで、「**OAuth サーバーからサーバー**」オプションを選択し、新しく作成した資格情報を選択します。

1. 「**OAuth サーバー間**」リンクを選択して、プロジェクトの資格情報の詳細を表示します。

   ![接続された資格情報](assets/conf-ss-connected-credentials.png) {width="800"}

   *プロジェクトに接続して、資格情報の詳細を表示します。*

1. **プロジェクト** タブに戻り、左側の&#x200B;**プロジェクト概要**&#x200B;を選択します。

   <img src="assets/project-overview.png" alt="プロジェクト概要" width="500">

   *新しいプロジェクトを開始します。*

1. 上部の「**ダウンロード**」ボタンをクリックして、サービス JSONをダウンロードします。

   <img src="assets/download-json.png" alt="jsonをダウンロード" width="500">

   *JSON サービスの詳細をダウンロードします。*

OAuth認証の詳細を設定し、JSON サービスの詳細をダウンロードしました。 次のセクションで必要となるので、このファイルを便利に使用できます。

### 環境へのIMS設定の追加

環境にIMS設定を追加するには、次の手順を実行します。

1. Experience Managerを開き、設定する環境を含むプログラムを選択します。
1. 「**環境**」タブに切り替えます。
1. 設定する環境名を選択します。 これにより、**環境情報** ページに移動します。
1. 「**設定**」タブに切り替えます。
1. SERVICE_ACCOUNT_DETAILS JSON フィールドを更新します。 次のスクリーンショットに示すように、同じ名前と設定を使用していることを確認します。

![ims サービス アカウント設定](assets/ims-service-account-config.png){width="800"}


*環境設定の詳細を追加します。*




IMS設定を環境に追加したら、次の手順を実行して、これらのプロパティをOSGiを使用してAEM Guidesにリンクします。

1. Cloud ManagerのGit プロジェクトコードで、次の2つのファイルを追加します（ファイルの内容については、[付録](#appendix)を参照）。

   * `com.adobe.aem.guides.eventing.ImsConfiguratorService.cfg.json`

1. 新しく追加されたファイルが`filter.xml`でカバーされていることを確認します。
1. Gitの変更をコミットしてプッシュします。
1. パイプラインを実行して、環境に変更を適用します。

これが完了すると、**スマートヘルプ**&#x200B;機能を使用できるようになります。



## 付録 {#appendix}

**ファイル**:
`com.adobe.aem.guides.eventing.ImsConfiguratorService.cfg.json`

**コンテンツ**:

```
{
 "service.account.details": "$[secret:SERVICE_ACCOUNT_DETAILS]",
}
```


設定が完了すると、**スマートヘルプ** ![ スマートヘルプ ](assets/smart-help-icon.svg) アイコンがWeb エディターの右側のパネルに表示されます。 アイコンを選択して、**スマートヘルプ** パネルを表示します。
詳しくは、Experience Manager ユーザーガイドの「[AIを活用したスマートヘルプでコンテンツを検索する](../user-guide/ai-based-smart-help.md)」の節を参照してください。
