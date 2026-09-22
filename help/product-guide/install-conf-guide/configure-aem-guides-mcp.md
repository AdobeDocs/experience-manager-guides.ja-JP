---
title: Adobe Experience Manager GuidesのMCPの設定
description: Cloud Serviceとオンプレミスの両方のデプロイメント用のExperience Manager Guides MCP サーバーにAI アシスタントを接続する方法について説明します
meta-feature: Authoring
meta-product: Experience Manager, Experience Manager Guides
meta-role: User
meta-type: Documentation
source-git-commit: 6841c373b75770e8691a2cac4d56aeb368b09480
workflow-type: tm+mt
source-wordcount: '1557'
ht-degree: 1%
---

# Experience Manager Guides MCP サーバーの設定

この記事では、Experience Manager Guides MCP サーバーに接続するための環境固有の詳細について説明します。 設定は、Experience Manager Guides インスタンスがas a Cloud Serviceを実行するか、オンプレミスを実行するかに応じて異なります。 環境に一致するタブを選択します。

>[!BEGINTABS]

>[!TAB Cloud Service]

## MCP サーバーエンドポイント

Experience Manager Guidesは、単一のHTTP エンドポイントを通じてMCP機能を公開します。

| MCP サーバー | エンドポイント | 説明 |
|---|---|---|
| **Experience Manager Guides** | `https://mcp.adobeaemcloud.com/adobe/mcp/guides` | Experience Manager Guidesでトピックとマップ、[新しいベースライン &#x200B;](../user-guide/web-editor-baseline-v2.md)、レポートを操作します。 |

お使いの環境の現在のツールリストを確認するには、アシスタントに次の質問を行います。

```
List all Experience Manager Guides tools available from the author https://author-pXXXX-eXXXX.adobeaemcloud.com and describe what they do.
```

## 組織のアクセスをリクエスト

Experience Manager Guides MCP サーバーへのアクセスは、組織ごとに&#x200B;**オプトイン**&#x200B;です。 組織内の誰もが次のことにアクセスできるようになります。

- AEM as a Cloud Service環境でExperience Manager Guidesを有効にする必要があります。
- 組織のIMS組織ID （組織ID）は、Adobe Guides チームが許可リストに登録している必要があります。

アクセスをリクエストするには、Adobe カスタマーサクセス部門にお問い合わせください。

## セットアップ

ローカルに何もインストールしません。 クライアントをサーバーURLに指定し、Adobe IMSのサインインフローを使用して認証を行います。

### 人道クロード

公式のチュートリアルに従います。[AEM MCP用にClaudeを設定](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/mcp-support/chat-applications/setup-claude)。 カスタムコネクタを追加する場合は、Experience Manager Guides エンドポイントを使用します。

```
https://mcp.adobeaemcloud.com/adobe/mcp/guides
```

### カーソル / Visual Studio Code

サーバーをMCP設定に追加します。 カーソルの場合は、`.cursor/mcp.json`に追加します。

```json
{
  "mcpServers": {
    "aem-guides": {
      "url": "https://mcp.adobeaemcloud.com/adobe/mcp/guides"
    }
  }
}
```

ローカル （Studio） サーバーのみをサポートするクライアントの場合、[`mcp-remote`](https://www.npmjs.com/package/mcp-remote)を使用してリモート エンドポイントにブリッジします。

```json
{
  "mcpServers": {
    "aem-guides": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://mcp.adobeaemcloud.com/adobe/mcp/guides"]
    }
  }
}
```

>[!TAB  オンプレミス ]

Model Context Protocol （MCP）を使用して、サポートされているAI クライアントをExperience Manager Guides オンプレミス インスタンスに接続できます。 接続を確立すると、クライアントはAEM ユーザーアカウントで利用可能なExperience Manager Guides操作にアクセスできます。

すべての操作は、**お使いのAEM IDと権限**&#x200B;を使用して実行されます。 接続しているクライアントは、AEM アカウントがアクセスを許可されているコンテンツとリソースのみを表示または変更できます。

認証では、Proof Key for Code Exchange （PKCE）を使用したOAuth 2.0認証コードフローを使用します。 初めてクライアントを接続する際に、AEMで認証を行います。 認証が成功すると、接続はアクセストークンを自動的に更新します。

次のクライアントを接続できます。

| クライアント | 接続メソッド | AEM インスタンスの要件 |
| ------------------ | ----------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **クラウド デスクトップ** | デスクトップ拡張機能（`.mcpb`） | 企業ネットワークからアクセス可能な内部ホストなど、HTTPおよびHTTPS エンドポイントをサポートします。 |
| **ChatGPT （webおよびデスクトップ）** | カスタムコネクタ | 有効で信頼できるTLS証明書を持つ、一般にアクセス可能なHTTPS エンドポイントが必要です。 |
| **カーソル** | `~/.cursor/mcp.json`のMCP設定 | 企業ネットワークからアクセス可能な内部ホストなど、HTTPおよびHTTPS エンドポイントをサポートします。 |

## 前提条件

クライアントを接続する前に、AEM管理者と協力して次の設定を確認します。

1. **MCP機能がデプロイされていることを確認します。**: MCP機能がデプロイされ、Experience Manager Guides インスタンスで実行されていることを確認します。

2. **Granite ベース URLを設定します。**: AEM Web Console Configuration Manager （`/system/console/configMgr`）で、**Experience Manager Guides OAuth PKCE Token Wrapper**&#x200B;の設定を探し、Granite ベース URLが設定されていることを確認します。 Graniteのベース URLが正しく設定されていない場合、クライアントは接続を確立できません。

3. **Day CQ Link Externalizerを設定します。**: AEM Web Console Configuration Managerで、**Day CQ Link Externalizer**&#x200B;設定を見つけ、外部オーサーURLが正しいAEM オーサーインスタンスを指していることを確認します。 外部オーサーURLは、OAuthの検出時に使用されます。 URLが正しくないと、クライアントが接続を完了できなくなる可能性があります。

   詳しくは、[AEM Guides オンプレミスのMCP接続設定の設定](./configure-aem-guides-mcp-on-prem.md)を参照してください

4. **MCP サーバーのURLを取得します。**: MCP サーバーのURLは、次の形式を使用します。

   ```
   http(s)://<AEM-HOST>/bin/guides/v1/mcp/sse
   ```

   >[!NOTE]
   >
   > クライアントの設定時に、完全なSSE エンドポイントを使用します。 URLに末尾のスラッシュを追加しないでください。

   次に例を示します。

   **内部AEM オーサーインスタンス：**

   ```
   http://10.42.42.20:4502/bin/guides/v1/mcp/sse
   ```

   **パブリック AEM オーサーインスタンス：**

   ```
   https://author.example.com/bin/guides/v1/mcp/sse
   ```



5. **AEMの資格情報と権限を確認します。**: AEM インスタンスの有効なアカウントが必要です。 AEM ユーザーインターフェイスへのログインに使用するのと同じ資格情報を使用します。 MCPを通じて使用可能な操作は、このアカウントに割り当てられた権限によって決まります。

## Claude Desktopを接続する

Claude Desktopはデスクトップ拡張機能（`.mcpb`）をサポートしています。 Experience Manager Guides MCP拡張機能は、MCP JSON設定を手動で編集する必要がないように、接続設定をパッケージ化します。

1. [`aem-guides-mcp.mcpb`](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=/content/software-distribution/en/details.html/content/dam/aem/public/aemdox/other-packages/guides-mcp/aem-guides-mcp.zip)拡張機能ファイルを取得します。

2. **Claude Desktop**&#x200B;を開き、**設定/拡張機能**&#x200B;に移動します。

3. ファイルをダブルクリックするか、拡張機能ウィンドウにドラッグして、`aem-guides-mcp.mcpb`をインストールします。

   **Adobe Experience Manager Guides MCP**&#x200B;がインストールダイアログに表示されます。

4. **インストール**&#x200B;を選択します。

5. 「**Experience Manager Guides MCP Server URL**」フィールドに、AEM インスタンスのSSE エンドポイント全体を入力します。

   次に例を示します。

   ```
   http://<AEM-HOST>:4502/bin/guides/v1/mcp/sse
   ```

6. **保存**&#x200B;を選択し、拡張機能が有効になっていることを確認します。

## ChatGPTの接続

Experience Manager Guides MCP サーバーは、ChatGPTでカスタムコネクタとして設定できます。

>[!IMPORTANT]
>
> ChatGPTでは、MCP サーバーが、有効で信頼されたTLS証明書&#x200B;**を持つ**&#x200B;一般にアクセス可能なHTTPS エンドポイントを通じて利用できる必要があります。
>
> HTTP エンドポイント、`localhost`、プライベート IP アドレス、および自己署名証明書はサポートされていません。 AEM インスタンスは、ロードバランサー、リバースプロキシ、またはTLSで設定されたDispatcherなどのHTTPS ホストを介して公開する必要があります。
>
> **Day CQ Link Externalizer**&#x200B;で設定された外部オーサーURLも、パブリック HTTPS アドレスを指している必要があります。 それ以外の場合、OAuth検出メタデータは誤った認証エンドポイントをアドバタイズし、ログインを防ぐことができます。

1. MCP サーバーがパブリック HTTPS URLで次の形式で使用可能であることを確認します。

   ```
   https://<PUBLIC-AEM-HOST>/bin/guides/v1/mcp/sse
   ```

   ブラウザーでエンドポイントを開き、証明書の警告や接続エラーがなくてもホストに到達できることを確認します。

2. ChatGPTで、**設定/ プラグイン**&#x200B;を開きます。

   >[!NOTE]
   >
   > コネクタの可用性は、ChatGPT プランとワークスペース設定によって異なります。 ワークスペース管理者は、カスタムコネクタまたは開発者コネクタを有効にする必要がある場合があります。

3. プラグインを追加または作成するオプションを選択します。

4. コネクタの詳細を指定します。

   * **名前：** `Experience Manager Guides`または他のわかりやすい名前を入力します。
   * **MCP サーバーのURL:** パブリック HTTPS SSE エンドポイントを入力します。
   * **認証：** **OAuth**&#x200B;を選択します。

   OAuth クライアント IDまたはクライアントシークレットを指定する必要はありません。 MCP サーバーは、自動クライアント登録をサポートしています。

5. コネクターを作成します。

## カーソルを接続

MCP設定にサーバーの詳細を追加して、CursorでExperience Manager Guides MCP サーバーを設定します。

1. カーソルで、**カスタマイズ/MCP/新規**&#x200B;に移動します。

   カーソルで`~/.cursor/mcp.json`設定ファイルが開きます。

2. Experience Manager Guides MCP サーバー設定を追加します。

   次に例を示します。

   ```json
   {
     "mcpServers": {
       "aem-guides": {
         "url": "http://10.42.34.176:4502/bin/guides/v1/mcp/sse",
         "type": "http"
       }
     }
   }
   ```

3. サンプル URLを、AEM インスタンスのMCP SSE エンドポイントに置き換えます。

4. 設定を保存します。

5. 設定したMCP サーバーを有効にします。

>[!ENDTABS]

## Experience Manager Guidesの認証と使用

クライアントでMCP接続を設定したら、AEM アカウントで認証します。

1. クライアントから認証プロセスを開始します。

   * **Claude Desktop:**&#x200B;認証フローは、Claudeが最初にExperience Manager Guides接続を使用しようとしたときに開始されます。
   * **ChatGPT:**&#x200B;認証は、Experience Manager Guides コネクタを作成して接続した後に開始されます。
   * **カーソル：**&#x200B;設定したMCP サーバーを有効にし、**認証**&#x200B;を選択します。

2. ブラウザーでAEM ログインページが開いたら、AEMの資格情報を使用してログインします。

3. プロンプトが表示されたら、アクセス要求を承認します。

4. 認証が完了したら、クライアントに戻ります。

これで、アカウントで使用可能なExperience Manager Guides操作を使用できるようになりました。 例えば、次のようなプロンプトを試します。

```
List the available Experience Manager Guides operations.
```

```
Get the topic list for my map in Experience Manager Guides.
```

```
Show me the broken-link report for my map.
```

>[!NOTE]
>
> MCPを通じて使用可能な操作とコンテンツは、認証に使用するAEM アカウントの権限によって決まります。 MCP接続では、追加のAEM権限は提供されません。

認証が成功すると、クライアントは認証トークンを自動的に更新します。 通常、セッションが期限切れになったり、アクセスが取り消されたりしない限り、再ログインする必要はありません。

## 接続の問題のトラブルシューティング

次の情報を使用して、一般的な接続と認証の問題をトラブルシューティングします。

| クライアント | 問題 | 考えられる原因と解決策 |
| -------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Claude Desktop | 拡張機能をインストールできないか、無効になっています。 | お使いのバージョンのClaude Desktopは拡張機能をサポートしていない可能性があります。 Claude Desktopをアップデートして、もう一度試してください。 |
| Claude Desktop | ブラウザーが認証のために開いていないか、接続が完了していません。 | MCP サーバーのURLを確認します。 末尾が`/bin/guides/v1/mcp/sse`である必要があります。末尾にスラッシュを含めないでください。 また、AEM インスタンスにコンピューターからアクセスできることを確認します。 |
| ChatGPT | ChatGPTはMCP サーバーに接続できないか、コネクタを追加できません。 | エンドポイントがHTTPS経由で一般にアクセスできることを確認します。 HTTP エンドポイント、`localhost`、プライベート IP アドレス、およびプライベート ネットワーク エンドポイントはサポートされていません。 |
| ChatGPT | 証明書またはセキュリティエラーが表示されます。 | サーバーが、公開済みの信頼できる認証局によって発行された有効な期限切れ証明書を使用していることを確認します。 自己署名証明書はサポートされていません。 |
| ChatGPT | 認証は、誤ったホストにリダイレクトされるか、検出中に失敗します。 | **Day CQ Link Externalizer**&#x200B;の外部作成者URLが、パブリック HTTPS AEM作成者アドレスを指していることを確認します。 |
| すべてのクライアント | 認証中に登録が失敗します。 | AEM管理者がサーバーサイドのOAuth登録設定を行っていることを確認します。 |
| すべてのクライアント | 認証が失敗するか、完了しません。 | Granite ベース URL、Day CQ Link Externalizer設定、MCP サーバーURL、およびAEM インスタンスへの接続性を確認します。 |
| すべてのクライアント | 接続は成功しますが、Experience Manager Guidesの操作や結果は利用できません。 | 認証されたAEM アカウントに必要なExperience Manager Guides権限があり、リクエストされた操作がアカウントで利用できることを確認します。 |
| すべてのクライアント | クライアントは、接続が以前に動作した後に認証を要求します。 | 認証セッションが期限切れになったり、アクセスが取り消されたりする可能性があります。 もう一度AEMで認証します。 |



