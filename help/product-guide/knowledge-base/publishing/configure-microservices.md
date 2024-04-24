---
title: AEM ガイド用の新しいマイクロサービスベースのパブリッシングの設定as a Cloud Service
description: AEM Guides 用に新しいマイクロサービスベースのパブリッシングを設定する方法について説明します。
exl-id: 92e3091d-6337-4dc6-9609-12b1503684cd
feature: Microservice in AEM Guides
role: User, Admin
source-git-commit: f929d4fd74e98e2025d80c14dbef6aeb464c0dd5
workflow-type: tm+mt
source-wordcount: '711'
ht-degree: 2%

---

# JWT 認証を使用したマイクロサービスベースの公開の設定

[!BADGE Cloud Service]{type=Informative}

>[!NOTE]
>
> サービスアカウント（JWT）資格情報は、OAuth サーバー間認証情報に代わって非推奨（廃止予定）になりました。サービスアカウント（JWT）資格情報を使用するアプリケーションは、2025 年 1 月 1 日（PT）以降は機能しなくなります。 アプリケーションが引き続き機能するように、2025 年 1 月 1 日までに新しい資格情報に移行する必要があります。 の詳細情報 [サービスアカウント（JWT）資格情報から OAuth サーバー間資格情報への移行](https://developer.adobe.com/developer-console/docs/guides/authentication/ServerToServerAuthentication/migration/).



Adobe Experience Manager ガイド用のマイクロサービスベースの公開as a Cloud Serviceでは、PDF（ネイティブと DITA-OT ベースの両方）、HTML 5、JSON、カスタムの各種類の出力プリセットがサポートされています。

サービスアカウント（JWT）資格情報は非推奨になったので、Adobe IMS OAuth ベースの認証を使用することをお勧めします。 方法を学ぶ [oauth 認証を使用したマイクロサービスベースのパブリッシングの設定](configure-microservices-imt-config.md).

Adobe IMSの JWT ベースの認証で保護された Cloud Publishing サービスの場合、以下の手順に従って環境をAdobeのセキュアトークンベースの認証ワークフローと統合し、新しいクラウドベースのスケーラブルな公開ソリューションの使用を開始する必要があります。


## Adobe Developer コンソールでの IMS 設定の作成

**集計の作成に必要な役割**: システム管理者

Adobe Developer コンソールで IMS 設定を作成するには、次の手順を実行します。

1. Developer Console を開きます。 `https://developer.adobe.com/console`.

1. 切り替え先 **プロジェクト** タブを上から選択します。

   <img src="assets/projects-tab.png" alt="「プロジェクト」タブ" width="500">

1. 新しい空のプロジェクトを作成するには、を選択します。 **空のプロジェクト** から **新規プロジェクトを作成** ドロップダウン。

   <img src="assets/create-new-project.png" alt="新規プロジェクトを作成" width="500">

1. を選択 **API** から **プロジェクトに追加** ドロップダウンで、プロジェクトに IO 管理 API を追加します。

   <img src="assets/add-project.png" alt="プロジェクトを追加" width="300">

   <img src="assets/io-management-api.png" alt="io 管理" width="500">

1. API の追加時に、新しい秘密鍵と公開鍵のペアを作成します。 これにより、秘密鍵がシステムに自動的にダウンロードされます。

   <img src="assets/generate-key-pair.png" alt="キーペアを生成" width="500">

1. 設定済みの API を保存します。

   <img src="assets/save-api.png" alt="save api" width="600">

1. に戻る **プロジェクト** tab キーを押してクリック **プロジェクトの概要** 左側。

   <img src="assets/project-overview.png" alt="プロジェクトの概要" width="500">

1. クリック **Download** 上部のボタンをクリックして、サービス JSON をダウンロードします。

   <img src="assets/download-json.png" alt="json をダウンロード" width="500">

これで、JWT 認証の詳細が設定され、秘密鍵とサービスの詳細の JSON もダウンロードされました。 次の節では、これらのファイルが必要なので、これら 2 つのファイルを手元に置いてください。

### 環境への IMS 設定の追加

次の手順を実行して、環境に IMS 設定を追加します。

1. Experience manager を開き、設定する環境が含まれているプログラムを選択します。
1. 切り替え先 **環境** タブ。
1. 設定する環境名をクリックします。 これにより、環境情報ページに移動します。
1. 切り替え先 **設定** タブ。
1. 以下のスクリーンショットに示すように、秘密鍵とプロジェクト JSON をアップロードします。 以下にハイライト表示されているのと同じ名前と設定を使用していることを確認します。

   <img src="assets/ims-config-environment.png" alt="ims 設定" width="500">

>[!NOTE]
>
> 上記のスクリーンショットに示すように、秘密鍵とサービスの詳細の JSON ファイルの内容を開き、コピーして、設定パネルの「値」列に貼り付ける必要があります。

IMS 設定を環境に追加したら、次の手順を実行して、OSGi を使用してこれらのプロパティをExperience Managerガイドにリンクします。

1. Cloud Manager Git プロジェクトコードで、以下の 2 つのファイルを指定して追加します（ファイルの内容については、 [付録](#appendix)）に設定します。

   * `com.adobe.aem.guides.eventing.ImsConfiguratorService.cfg.json`
   * `com.adobe.fmdita.publishworkflow.PublishWorkflowConfigurationService.xml`
1. 新しく追加したファイルがによってカバーされていることを確認します。 `filter.xml`.
1. Git の変更をコミットし、プッシュします。
1. パイプラインを実行して変更を環境に適用します。

この操作が完了すると、新しい microservice ベースのクラウドパブリッシングを使用できるようになります。

## FAQ

1. 1 つのキーを複数のクラウド環境で使用できますか？
   * はい。1 つの秘密鍵を生成し、すべての環境で使用できますが、すべての環境に環境変数を設定し、同じ鍵を使用する必要があります。
1. マイクロサービスを使用する OSGi 設定が有効になっている場合、公開プロセスは同じコードベースを持つローカル AEM サーバーで動作しますか？
   * いいえ（フラグの場合） `dxml.use.publish.microservice` はに設定されています。 `true` 次に、マイクロサービスの設定が常に検索されます。 を設定 `dxml.use.publish.microservice` 対象： `false` ローカルで公開を機能させるために使用します。
1. マイクロサービスベースのパブリッシングを使用する場合、DITA プロセスに割り当てられるメモリの量 これは DITA プロファイルの ant パラメータを介して実行されますか。
   * マイクロサービスベースのパブリッシングでは、メモリ割り当ては DITA プロファイルの ant パラメーターによって実行されません。 サービスコンテナで使用可能なメモリの合計は 8 GB で、そのうち 6 GB が DITA-OT プロセスに割り当てられます。


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
* `dxml.use.publish.microservice`:DITA-OT を使用したマイクロサービスベースの公開を有効にするように切り替えます
* `dxml.use.publish.microservice.native.pdf`：マイクロサービスベースのネイティブPDF公開を有効にするように切り替えます

```
<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:jcr="http://www.jcp.org/jcr/1.0" xmlns:sling="http://sling.apache.org/jcr/sling/1.0"
          jcr:primaryType="sling:OsgiConfig"
          dxml.publish.microservice.url="https://adobeioruntime.net/api/v1/web/543112-guidespublisher/default/publishercaller.json"
          dxml.use.publish.microservice="{Boolean}true"
          dxml.use.publish.microservice.native.pdf="{Boolean}true"
/>
```
