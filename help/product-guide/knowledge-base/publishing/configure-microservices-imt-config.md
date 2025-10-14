---
title: AEM Guidesas a Cloud Serviceの OAuth 認証を使用したマイクロサービスベースのパブリッシングの設定
description: AEM Guidesの OAuth 認証を使用してマイクロサービスベースのパブリッシングを設定する方法について説明します。
feature: Microservice in AEM Guides
role: Admin
exl-id: db0c83c7-1ece-4010-b214-f8d806d26bc9
source-git-commit: c51a372dc44921a489219f5ac99e3ad180ccc91d
workflow-type: tm+mt
source-wordcount: '827'
ht-degree: 0%

---

# OAuth 認証を使用したマイクロサービスベースの公開の設定

パブリッシングマイクロサービスを使用すると、Experience Manager Guidesas a Cloud Serviceで大規模なパブリッシングワークロードを同時に実行し、業界をリードするAdobe I/O Runtime サーバーレスプラットフォームを活用できます。

公開リクエストごとに、Experience Manager Guidesas a Cloud Serviceは、ユーザーリクエストに応じて水平方向に拡大・縮小される個別のコンテナを実行します。 これにより、複数の公開リクエストを実行し、大規模なオンプレミス Adobe Experience Manager サーバーよりも高いパフォーマンスを得ることができます。

>[!NOTE]
>
> Experience Manager Guidesのマイクロサービスベースの公開では、PDF（ネイティブと DITA-OT ベースの両方）、HTML 5、JSON、カスタムの各種類の出力プリセットがサポートされています。

Cloud Publishing Service はAdobe IMSの OAuth ベースの認証で保護されているので、次の手順を実行して環境をAdobeのセキュアトークンベースの認証ワークフローと統合し、クラウドベースのスケーラブルな公開ソリューションの使用を開始します。


## Adobe Developer Consoleでの IMS 設定の作成

**設定の作成に必要な役割**：システム管理者

**Adobe Developer Console** で IMS 設定を作成するには、次の手順を実行します。

>[!NOTE]
>
>AI を利用したスマート提案をオーサリング用に設定する OAuth プロジェクトを既に作成している場合は、次の手順をスキップしてプロジェクトを作成できます。

1. **Developer Console**: `https://developer.adobe.com/console` を開きます。

1. 上部の「**プロジェクト**」タブに切り替えます。

   <img src="assets/projects-tab.png" alt="「プロジェクト」タブ" width="500">

   ***Adobe Developer Consoleの「**&#x200B;プロジェクト&#x200B;**」タブを選択***

1. 新しい空のプロジェクトを作成するには、「**新しいプロジェクトを作成**」ドロップダウンから **空のプロジェクト** を選択します。

   <img src="assets/create-new-project.png" alt="新規プロジェクトを作成" width="500">

   *新しい空のプロジェクトを作成します。*

1. **プロジェクトに追加** ドロップダウンから「**API**」を選択して、プロジェクトに IO 管理 API を追加します。

   <img src="assets/add-project.png" alt="プロジェクトを追加" width="300">

   *ドロップダウンから API プロジェクトを選択します。*

   <img src="assets/io-management-api.png" alt="io 管理" width="500">

   *I/O Management API をプロジェクトに追加します*。

1. 新しい OAuth 認証情報を作成し、保存します。

   <img src="assets/microservice-api-oauth.png" alt="キーペアを生成" width="500">

   *API に OAuth 認証情報を設定します。*


1. 「**プロジェクト**」タブに戻り、左側の **プロジェクトの概要** を選択します。

   <img src="assets/project-overview.png" alt="プロジェクトの概要" width="500">

   *新しいプロジェクトの概要*

1. 上部の「**ダウンロード**」ボタンをクリックして、サービス JSON をダウンロードします。

   <img src="assets/download-json.png" alt="json をダウンロード" width="500">

   *JSON サービスの詳細をダウンロードします。*

OAuth 認証の詳細を設定し、JSON サービスの詳細をダウンロードしました。 次の節で必要になるので、このファイルは手元に置いておいてください。


## 環境への IMS 設定の追加

>[!NOTE]
>
>スマート提案用の OAuth プロジェクトを既に作成している場合は、同じプロジェクトをマイクロサービスに再利用し、以下の手順をスキップして IMS 設定を環境に追加できます。

### 既存の設定の更新（JWT）   から OAuth shift）

JWT （非推奨）を使用して公開するために、既にマイクロサービスを使用している場合は、次の手順を実行して設定を更新します。



1. **Experience Managerを開き** 設定する環境が含まれているプログラムを選択してください。
1. 「**環境**」タブに切り替えます。
1. 設定する環境の名前を選択します。 これにより、**環境情報** ページに移動します。
1. 「**設定**」タブに切り替えます。

1. SERVICE_ACCOUNT_DETAILS JSON フィールドを、ダウンロードした新しい OAuth JSON ファイルで更新します。
1. PRIVATE_KEY フィールドを削除します。



   <img src="assets/ims-service-account-config.png" alt="ims サービスアカウントの設定" width="500">

   *既存の JWT 環境設定を更新します*。

### 初回設定

パブリッシングマイクロサービスを初めて使用するには、次の手順に従って設定を更新します。
1. **Experience Managerを開き** 設定する環境が含まれているプログラムを選択してください。
1. 「**環境**」タブに切り替えます。
1. 設定する環境の名前を選択します。 これにより、**環境情報** ページに移動します。
1. 「**設定**」タブに切り替えます。

1. SERVICE_ACCOUNT_DETAILS という名前の新しい設定を作成します。 値に、開発者コンソールからダウンロードした OAuth JSON ファイルのコンテンツを追加します。


<img src="assets/jws-service-account-config.png" alt="ims サービスアカウントの設定" width="500">

*初めて環境を設定します。*


### マイクロサービスベースのパブリッシングを有効化するための初回コード変更

>[!NOTE]
>
> マイクロサービスベースの公開を既に使用している場合は、次の手順をスキップしてください。

IMS 設定を環境に追加したら、次の手順を実行して、OSGi を使用してこれらのプロパティをExperience Manager Guidesにリンクします。

1. Cloud Manager Git プロジェクトコードで、次の 2 つのファイルを `/apps/fmditaCustom/config` に追加します（ファイルの内容については、[&#x200B; 付録 &#x200B;](#appendix) を参照）。

   * `com.adobe.aem.guides.eventing.ImsConfiguratorService.cfg.json`
   * `com.adobe.fmdita.publishworkflow.PublishWorkflowConfigurationService.xml`
1. 新しく追加したファイルが `filter.xml` でカバーされていることを確認します。
1. Git の変更をコミットし、プッシュします。
1. パイプラインを実行して、変更を環境に適用します。

この操作が完了したら、microservice ベースのクラウドパブリッシングを使用できます。

## FAQ


1. マイクロサービスを使用する OSGi 設定が有効になっている場合、公開プロセスは同じコードベースのローカルExperience Managerサーバーで動作しますか？
   * いいえ、フラグ `dxml.use.publish.microservice` が `true` に設定されている場合は、常にマイクロサービスの設定が検索されます。 ローカルサーバーで公開を機能させるには、`dxml.use.publish.microservice` を `false` に設定します。
1. マイクロサービスベースのパブリッシングを使用する場合、DITA プロセスに割り当てられるメモリの量 これは DITA プロファイルとパラメータによって駆動されますか？
   * マイクロサービスベースのパブリッシングでは、メモリ割り当ては DITA プロファイルとパラメーターによって実行されません。 サービスコンテナで使用可能なメモリの合計は 8 GB で、そのうち 6 GB が DITA-OT プロセスに割り当てられます。


## 付録 {#appendix}

**ファイル**:
`com.adobe.aem.guides.eventing.ImsConfiguratorService.cfg.json`

**コンテンツ**:

```
{
"service.account.details": "$[secret:SERVICE_ACCOUNT_DETAILS]",
}
```

**ファイル**: `com.adobe.fmdita.publishworkflow.PublishWorkflowConfigurationService.xml`

**コンテンツ**:
* `dxml.use.publish.microservice`: DITA-OT を使用したマイクロサービスベースの公開を有効にするように切り替えます
* `dxml.use.publish.microservice.native.pdf`: マイクロサービスベースのネイティブPDF公開を有効にするように切り替えます

```
<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:jcr="http://www.jcp.org/jcr/1.0" xmlns:sling="http://sling.apache.org/jcr/sling/1.0"
          jcr:primaryType="sling:OsgiConfig"
          dxml.publish.microservice.url="https://adobeioruntime.net/api/v1/web/543112-guidespublisher/default/publishercaller.json"
          dxml.use.publish.microservice="{Boolean}true"
          dxml.use.publish.microservice.native.pdf="{Boolean}true"
/>
```
