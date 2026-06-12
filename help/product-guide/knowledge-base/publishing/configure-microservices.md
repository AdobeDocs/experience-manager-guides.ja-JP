---
title: AEM Guides as a Cloud Service用の新しいマイクロサービスベースの公開を設定します
description: AEM Guides用に新しいマイクロサービスベースのパブリッシングを設定する方法について説明します。
exl-id: 92e3091d-6337-4dc6-9609-12b1503684cd
feature: Microservice in AEM Guides
role: User, Admin
TQID: https://experienceleague.adobe.com/1M-gDrJclVMkYHOo69FPmKqkJvzYaDHK0ljK5dIh-tA
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2:
  - id: d6596f3f-92a7-43ec-b444-237db6adad05
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 740
ht-degree: 3%

---

# JWT認証によるマイクロサービスベースの公開を設定します

[!BADGE Cloud Service]{type=Informative}

>[!NOTE]
>
> サービスアカウント（JWT）資格情報は、OAuth サーバー間認証情報に代わって非推奨（廃止予定）になりました。 サービスアカウント（JWT）資格情報を使用しているアプリケーションは、2025年1月1日以降に動作を停止します。 アプリケーションが引き続き機能するようにするには、2025年1月1日までに新しい資格情報に移行する必要があります。 サービスアカウント （JWT）資格情報からOAuth サーバー間資格情報への[移行の詳細](https://developer.adobe.com/developer-console/docs/guides/authentication/ServerToServerAuthentication/migration/)。



Adobe Experience Manager Guides as a Cloud Service用のマイクロサービスベースのパブリッシングでは、PDF（ネイティブベースとDITA-OT ベースの両方）、HTML5、JSON、およびカスタムタイプの出力プリセットをサポートしています。

サービスアカウント（JWT）資格情報が廃止されたため、Adobe IMSのOAuth ベース認証を使用することをお勧めします。 OAuth認証[&#128279;](configure-microservices-imt-config.md)を使用してマイクロサービスベースの公開を設定する方法について説明します。

Adobe IMS JWT ベースの認証によって保護されるクラウドパブリッシングサービスについては、以下の手順に従って、環境をAdobeのセキュアトークンベースの認証ワークフローと統合し、新しいクラウドベースのスケーラブルなパブリッシングソリューションの使用を開始する必要があります。


## Adobe Developer ConsoleでのIMS設定の作成

**統合の作成に必要な役割**: システム管理者

Adobe Developer ConsoleでIMS設定を作成するには、次の手順を実行します。

1. Developer Consoleを開きます：`https://developer.adobe.com/console`。

1. 上から「**プロジェクト**」タブに切り替えます。

   <img src="assets/projects-tab.png" alt="「プロジェクト」タブ" width="500">

1. 新しい空のプロジェクトを作成するには、「**新しいプロジェクトを作成**」ドロップダウンから「**空のプロジェクト**」を選択します。

   <img src="assets/create-new-project.png" alt="新規プロジェクトを作成" width="500">

1. 「**プロジェクトに追加**」ドロップダウンから「**API**」を選択して、プロジェクトにIO管理APIを追加します。

   <img src="assets/add-project.png" alt="プロジェクトを追加" width="300">

   <img src="assets/io-management-api.png" alt="io管理" width="500">

1. APIの追加時に、新しい秘密鍵と公開鍵のペアを作成します。 これにより、秘密鍵がシステムに自動的にダウンロードされます。

   <img src="assets/generate-key-pair.png" alt="キーペアを生成" width="500">

1. 設定したAPIを保存します。

   <img src="assets/save-api.png" alt="apiを保存" width="600">

1. **プロジェクト** タブに戻り、左側の&#x200B;**プロジェクト概要**&#x200B;をクリックします。

   <img src="assets/project-overview.png" alt="プロジェクト概要" width="500">

1. 上部の「**ダウンロード**」ボタンをクリックして、サービス JSONをダウンロードします。

   <img src="assets/download-json.png" alt="jsonをダウンロード" width="500">

これで、JWT認証の詳細を設定し、秘密鍵とサービスの詳細JSONもダウンロードしました。 次のセクションで必要なファイルなので、これらの2つのファイルを便利に使用できます。

### 環境へのIMS設定の追加

環境にIMS設定を追加するには、次の手順を実行します。

1. Experience Managerを開き、設定する環境を含むプログラムを選択します。
1. 「**環境**」タブに切り替えます。
1. 設定する環境名をクリックします。 これにより、環境情報ページに移動します。
1. 「**設定**」タブに切り替えます。
1. 以下のスクリーンショットに示すように、秘密鍵とプロジェクト JSONをアップロードします。 以下に強調表示されているのと同じ名前と設定を使用していることを確認してください。

   <img src="assets/ims-config-environment.png" alt="ims設定" width="500">

>[!NOTE]
>
> 上記のスクリーンショットに示すように、秘密鍵とサービスの詳細JSON ファイルの内容を開いてコピーし、設定パネルの値列に貼り付ける必要があります。

IMS設定を環境に追加したら、次の手順を実行して、これらのプロパティをOSGiを使用してExperience Manager Guidesにリンクします。

1. Cloud ManagerのGit プロジェクトコードで、以下の2つのファイルを追加します（ファイルの内容については、[付録](#appendix)を参照）。

   * `com.adobe.aem.guides.eventing.ImsConfiguratorService.cfg.json`
   * `com.adobe.fmdita.publishworkflow.PublishWorkflowConfigurationService.xml`
1. 新しく追加されたファイルが`filter.xml`でカバーされていることを確認します。
1. Gitの変更をコミットしてプッシュします。
1. パイプラインを実行して、環境に変更を適用します。

これが完了すると、新しいマイクロサービスベースのクラウドパブリッシングを使用できるようになります。

## FAQ

1. 単一のキーを複数のクラウド環境で使用できますか？
   * はい、1つの秘密鍵を生成してすべての環境に使用できますが、すべての環境に環境変数を設定し、同じキーを使用する必要があります。
1. マイクロサービスを使用するOSGi設定が有効になっている場合、公開プロセスは同じコードベースを持つローカル AEM サーバーで機能しますか？
   * いいえ。フラグ `dxml.use.publish.microservice`が`true`に設定されている場合、常にマイクロサービス設定を探します。 パブリッシングがローカルで機能するように、`dxml.use.publish.microservice`を`false`に設定します。
1. マイクロサービスベースのパブリッシングを使用する場合、DITA プロセスに割り当てられるメモリの量はどれくらいですか？ これはDITA プロファイルのant パラメーターを使用して実行されますか？
   * マイクロサービスベースのパブリッシングでは、メモリ割り当てはDITA プロファイルアントパラメーターを通じて行われません。 サービスコンテナで使用可能な合計メモリは8 GBで、そのうち6 GBがDITA-OT プロセスに割り当てられます。


## 付録 {#appendix}

**ファイル**:
`com.adobe.aem.guides.eventing.ImsConfiguratorService.cfg.json`

**コンテンツ**:

```
{
  "service.account.details": "$[secret:SERVICE_ACCOUNT_DETAILS]",
  "private.key": "$[secret:PRIVATE_KEY]"
}
```

**ファイル**: `com.adobe.fmdita.publishworkflow.PublishWorkflowConfigurationService.xml`

**コンテンツ**:
* `dxml.use.publish.microservice`: DITA-OTを使用してマイクロサービスベースの公開を有効に切り替えます
* `dxml.use.publish.microservice.native.pdf`: マイクロサービスベースのネイティブ PDF パブリッシングを有効にする切り替え

```
<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:jcr="http://www.jcp.org/jcr/1.0" xmlns:sling="http://sling.apache.org/jcr/sling/1.0"
          jcr:primaryType="sling:OsgiConfig"
          dxml.publish.microservice.url="https://adobeioruntime.net/api/v1/web/543112-guidespublisher/default/publishercaller.json"
          dxml.use.publish.microservice="{Boolean}true"
          dxml.use.publish.microservice.native.pdf="{Boolean}true"
/>
```
