---
title: Edge Delivery Services用GitLabのセットアップと設定
description: GitLab リポジトリ、アクセストークン、Cloud Manager、webhook、およびBring Your Own Gitを設定して、Experience Manager GuidesからEdge Delivery Servicesにコンテンツを公開する方法を説明します。
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 97620587a9e736e0886ea4d7158af330814e6392
workflow-type: tm+mt
source-wordcount: '1256'
ht-degree: 3%
---

# Edge Delivery Services用GitLabのセットアップと設定

GitLabを使用してExperience Manager GuidesからEdge Delivery Services（EDS）にコンテンツを公開するには、Cloud Managerの&#x200B;*Bring Your Own Git* （BYOG）機能を使用して、GitLab リポジトリをEDS サイトに接続します。 この記事では、手順を順を追って説明します。 各ステップの詳細については、リンクされたドキュメントを参照してください。

## 仕組み

- **GitHub リポジトリ**&#x200B;は、AEM Code Sync アプリを使用してEDS サイトを作成します。
- **GitLab リポジトリ**&#x200B;は、Experience Manager Guidesから公開されたコンテンツを保存します。
- **Cloud Manager**&#x200B;は、GitLab プッシュイベント （webhook）を受け取り、EDS サイトに同期することで、2つをリンクします。

## 前提条件

- リポジトリとトークンを作成するためのGitHubとGitLab （GitLab.comまたはセルフホスト）へのアクセス。
- Cloud Managerにアクセスし、リポジトリ（デプロイメントマネージャーまたはビジネスオーナー）を追加できるロールを持つ。
- Cloud Manager API統合を作成するには、Adobe組織のシステム管理者またはAPI開発者ロールを使用します。
- 構成サービスに`aem.live`組織が登録されました。 詳しくは、[設定サービスの設定](https://www.aem.live/docs/config-service-setup)を参照してください。

## 設定シーケンス

1. [GitHubを使用したEDS サイトの作成](#1-create-the-eds-site-using-github-create-eds-site)
2. [GitLab リポジトリの作成](#2-create-the-gitlab-repository)
3. [マウントポイント URLの設定](#3-configure-the-mountpoint-url)
4. [GitLab アクセストークンの作成](#4-create-gitlab-access-tokens)
5. [GitLab リポジトリをCloud Managerに追加する](#5-add-the-gitlab-repository-to-cloud-manager)
6. [Cloud Manager API キーの生成](#6-generate-a-cloud-manager-api-key)
7. [GitLab Webhookの設定](#7-configure-the-gitlab-webhook)
8. [EDS サイトをCloud Managerに追加](#8-add-the-eds-site-to-cloud-manager)
9. [Bring Your Own Gitを使用してリポジトリを接続する](#9-connect-the-repository-using-bring-your-own-git)
10. [Cloud Managerを使用するようにEDS サイトを設定する](#10-configure-the-eds-site-to-use-cloud-manager)
11. [同期と検証](#11-sync-and-verify)
12. [Experience Manager Guidesから公開](#12-publish-from-experience-manager-guides)

### &#x200B;1. GitHubを使用したEDS サイトの作成 {#create-eds-site}

AEM GuidesのボイラープレートからGitHub リポジトリを作成し、その上にAEM Code Sync アプリをインストールします。 生成された&#x200B;**ライブ URL** （`https://<branch>--<github-repo>--<github-username>.aem.live`）を後で使用するために保存します。

手順については、[Create a GitHub repository for EDS](./configure-eds.md#create-a-github-repository-for-eds)および[AEM Code Sync](./configure-eds.md#connect-github-to-adobe-via-aem-code-sync)を使用してGitHubをAdobeに接続するを参照してください。

>[!IMPORTANT]
>
> Cloud Managerのワンクリックオプションを使用してEDS サイトを作成しないでください。 この方法で作成されたサイトでは、後の手順で必要となる管理者権限が付与されません。 詳しくは、[Edge Delivery Services サイトの準備](https://www.aem.live/developer/byo-git#1.-prepare-your-edge-delivery-services-site)を参照してください。

### &#x200B;2. GitLab リポジトリの作成

同じAEM Guides ボイラープレートから別のGitLab リポジトリ（例：`my-eds-gitlab`）を作成します。 Experience Manager Guidesは、生成された出力をこのリポジトリに公開します。 EDSには`main` ブランチが必要です。

リポジトリを作成するには、空白のプロジェクトを作成し、[aem-guides-boilerplate](https://github.com/adobe/aem-guides-boilerplate)の内容をそれにプッシュするか、ボイラープレートを新しいプロジェクトに読み込みます。 手順については、GitLab ドキュメントの[&#x200B; プロジェクトの作成](https://docs.gitlab.com/user/project/)および[GitHubからGitLab](https://docs.gitlab.com/user/project/import/github/)へのプロジェクトのインポートを参照してください。

### &#x200B;3. マウントポイント URLの設定

GitHub リポジトリで、コンテンツソースがGitLab リポジトリを指すように`fstab.yaml`を更新し、変更を`main`にコミットします。

```text
https://<worker URL>/gitlab/<git acc domain>/<git username>/<git repo>/main/docs
```

| パラメーター | 説明 |
|---|---|
| `<worker URL>` | Adobeが提供するワーカーノード URL。 |
| `<git acc domain>` | `gitlab.com`などのGitLab ドメインまたはセルフホスト ドメイン。 |
| `<git username>` | GitLab ユーザー名。 |
| `<git repo>` | GitLab リポジトリの名前。 |
| `main` / `docs` | ブランチおよびルートフォルダー。 Experience Manager Guidesのデフォルト。 |

### &#x200B;4. GitLab アクセストークンの作成

以下に必要なアクセストークンを作成します。

- **Cloud Manager**。リポジトリを検証してアクセスします。 詳しくは、[Cloud Managerで外部リポジトリを追加する](https://experienceleague.adobe.com/ja/docs/experience-manager-cloud-manager/content/managing-code/external-repositories)を参照してください。
- **Experience Manager Guides パブリッシュプロファイル**&#x200B;を使用して、パブリッシュされた出力を確定します。 **Developer**&#x200B;の役割と`api`のスコープを持つGitLab プロジェクト アクセス トークンを作成します。 詳しくは、[GitLab ドキュメント &#x200B;](https://docs.gitlab.com/ee/user/project/settings/project_access_tokens.html)を参照してください。

>[!NOTE]
>
> トークンが期限切れになる前に更新します。 公開プロファイルのトークンが期限切れになっている場合、公開は失敗します。 Cloud Managerで使用するトークンを更新するには、[外部リポジトリのアクセストークンの管理](https://experienceleague.adobe.com/ja/docs/experience-manager-cloud-manager/content/managing-code/manage-access-tokens)を参照してください。

### &#x200B;5. GitLab リポジトリをCloud Managerに追加する

Cloud Managerで、**Repositories** > **Add Repository**&#x200B;に移動し、**Private Repository**&#x200B;を選択し、アクセストークンを使用して所有権を検証します。 リポジトリのステータスが&#x200B;**準備完了**&#x200B;になるまで待ちます。 BYOG オプションは、少なくとも1つの外部リポジトリが準備完了した後にのみ使用できます。

手順については、[Cloud Managerで外部リポジトリを追加する](https://experienceleague.adobe.com/ja/docs/experience-manager-cloud-manager/content/managing-code/external-repositories)を参照してください。

### &#x200B;6. Cloud Manager API キーの生成

Adobe Developer ConsoleでAPI統合を作成し（**Cloud Manager** API、**OAuth サーバー間**）、**クライアント ID （API キー）**&#x200B;をコピーします。

手順については、[API統合プロジェクトの作成](https://developer.adobe.com/experience-cloud/cloud-manager/guides/getting-started/create-api-integration)を参照してください。

### &#x200B;7. GitLab Webhookの設定

Cloud Managerで、リポジトリの&#x200B;**Config Webhook**&#x200B;を選択し、**Webhook URL**&#x200B;と&#x200B;**Secret**&#x200B;をコピーします。 API キーをURL （`<webhook URL>&api-key=<CLIENT_ID>`）に追加します。 GitLabで、**Settings** > **Webhook**&#x200B;に移動し、URLとシークレットを追加して`main` ブランチを選択し、**プッシュイベント**&#x200B;を有効にします。

詳しくは、[Cloud Managerでの外部リポジトリの設定](https://www.aem.live/developer/byo-git#2.-configure-your-external-repository-in-cloud-manager)を参照してください。

### &#x200B;8. EDS サイトをCloud Managerに追加

Cloud Managerで、**Edge Delivery** > **Edge Delivery サイトを追加**&#x200B;に移動し、手順1で保存したライブ URLを入力します。 所有権の検証を完了します。

手順については、[Edge Delivery サイトの追加](https://experienceleague.adobe.com/ja/docs/experience-manager-cloud-service/content/implementing/using-cloud-manager/edge-delivery-sites/add-edge-delivery-site)を参照してください。

### &#x200B;9. Bring Your Own Gitを使用してリポジトリを接続する

Cloud ManagerのEDS サイトで、**自分のGit （BYOG）**&#x200B;を選択し、GitLab リポジトリを選択して確定します。 生成された秘密鍵をコピーして安全に保存します。 これは1回だけ表示され、サイトを再設定すると新しい秘密鍵が生成されます。

詳しくは、[Cloud ManagerでのEdge Delivery サイトの設定](https://www.aem.live/developer/byo-git#3.-configure-your-edge-delivery-site-in-cloud-manager)を参照してください。

### &#x200B;10. Cloud Managerを使用するようにEDS サイトを設定する

Webhook URLから&#x200B;**プログラム ID** （`/program/<PROGRAM_ID>/`）と&#x200B;**リポジトリ ID** （`/repo/<REPO_ID>/`）を使用して、EDS サイトのコードソースをCloud Manager リポジトリに設定します。 次に、手順9のシークレットを使用して、正確に`cm-byog`という名前のシークレットを作成します。

Admin API呼び出しの場合は、[Cloud Managerを使用するようにAEM サイトを設定](https://www.aem.live/developer/byo-git#4.-configure-your-aem-site-to-use-cloud-manager)します。

### &#x200B;11. 同期と検証

Cloud Managerで、サイトのメニューから「**コードを同期**」を選択し、`main` ブランチを選択します。 次に、`https://main--<site>--<org>.aem.page`を開いてサイトを確認します。

詳しくは、[最初のトリガー](https://www.aem.live/developer/byo-git#5.-trigger-your-first-sync)と[AEM サイトの確認](https://www.aem.live/developer/byo-git#6.-verify-your-aem-site)を参照してください。

### &#x200B;12. Experience Manager Guidesから公開

手順4のプロジェクトアクセストークンを使用して、**Git アカウントタイプ**&#x200B;が&#x200B;**GitLab**&#x200B;に設定されたEDS公開プロファイルを作成します。 次に、EDS出力プリセットでこのプロファイルを選択し、出力を生成します。 出力は、GitLab リポジトリの`docs` フォルダーにコミットされます。

手順については、[EDS公開プロファイルの作成](./configure-eds.md#create-the-eds-publish-profile-for-github-or-gitlab)および[EDS用の出力プリセットの作成と出力の生成](./configure-eds.md#create-an-output-preset-for-eds-and-generate-output)を参照してください。

## トラブルシューティング

- プッシュ後に&#x200B;**サイトに古いコンテンツが表示される：** WebhookがCloud Managerにイベントを配信していることを確認し、最新の同期ジョブのステータスを確認します。
- **同期エラー`Unable to fetch hlxignore: 401`:** `cm-byog`秘密鍵が正しくありません。 手順9の秘密鍵を使用して再作成します。
- **別のサイトにリンクされたリポジトリ：** Cloud Manager リポジトリは、一度に1つのサイトにのみリンクできます。 サイト間でリポジトリを共有するには、[Repoless](https://www.aem.live/docs/repoless)を使用します。

詳細については、「[独自のGitを取り込む](https://www.aem.live/developer/byo-git#troubleshooting)」のトラブルシューティングを参照してください。
