---
title: Adobe Experience Manager GuidesでのMCPの使用
description: AEM GuidesでModel Context Protocol （MCP）を使用して、AI アシスタントを通じてトピック、マップ、ベースライン、レポートを操作する方法を説明します
feature: Authoring, Publishing
role: User
source-git-commit: c724946a3426e28a1270ba01cdf2646bbf5f2a0d
workflow-type: tm+mt
source-wordcount: '974'
ht-degree: 0%

---


# Adobe Experience Manager Guides MCP Serverの使用

モデルコンテキストプロトコル（MCP）は、AI アシスタントがコンテキストを切り替えて自身のツールを操作するのではなく、外部のツールやデータに接続するための標準的な方法です。

Adobe Experience Manager Guides MCP サーバーは、これをExperience Manager Guidesに取り込みます。 これにより、Anthropic ClaudeなどのMCP対応AI アシスタントがExperience Manager Guides環境に接続し、独自のAEM権限の下でユーザーに代わって行動できるようになります。 接続すると、Experience Manager Guides as a Cloud Serviceで自然言語を使用して、マップ、トピック、ベースライン、レポートを操作できます。

この記事では、MCPがExperience Manager Guidesに役立つ理由、MCP サーバーがカバーするアプリケーション、その設定方法、およびその使用方法について説明します。

## Experience Manager Guides向けMCPが有用な理由

ドキュメントチームは、大規模なマップ内のトピックの検索、ドキュメントの状態の確認、壊れたリンクのトラッキング、リリースのベースラインの作成、レポートのエクスポートなど、繰り返しの多いナビゲーション作業に多くの時間を費やしています。 Experience Manager Guides MCP サーバーを使用すると、Experience Manager Guides UIに切り替えることなく、AI アシスタントにこれらを直接処理するように依頼できます。

次に例を示します。

- マップを開いて各トピックの状態を1つずつ確認する代わりに、アシスタントにトピックとその状態をリストするように依頼します。
- 手作業でリンク切れレポートを開始し、Experience Manager Guides UIを待つ代わりに、レポートを実行し、いつ完了したかをアシスタントに伝えるように依頼します。
- ベースライン画面に移動する代わりに、アシスタントに特定のマップのベースラインを作成するように依頼します。

## Experience Manager Guidesが提供するMCP サーバー

Experience Manager Guidesは、単一のHTTP エンドポイントを通じてMCP機能を公開します。

| MCP サーバー | エンドポイント | 説明 |
| --- | --- | --- |
| **Experience Manager Guides** | `https://mcp.adobeaemcloud.com/adobe/mcp/guides` | Experience Manager Guidesでトピック、マップ、ベースライン、レポートを操作します。 |

この1つのエンドポイントは、次の4つの領域をカバーしています。

- **トピックとマップ** - トピックとマップを作成、読み取り、更新、削除、バージョン、ロックします。
- **ベースライン** - ベースラインを作成、リスト化、書き出し、複製、再構築、ラベル付けします。
- **レポート** - トピックリスト、メタデータ、壊れたリンク、マルチメディアの使用状況。
- **システム** - パッケージのバージョン、バンドルの正常性、および環境の診断。

利用できるツールは、時間の経過とともに変化します。 固定のリストに頼るのではなく、アシスタントに利用可能なものを教えてもらいましょう。

```
List all Experience Manager Guides tools available from the author https://author-pXXXX-eXXXX.adobeaemcloud.com and describe what they do.
```

## 組織のアクセスをリクエスト

Experience Manager Guides MCP サーバーへのアクセスは、組織ごとに&#x200B;**オプトイン**&#x200B;です。 組織内の誰もが次のことにアクセスできるようになります。

- AEM as a Cloud Service環境でExperience Manager Guidesを有効にする必要があります。
- 組織のIMS組織ID （組織ID）は、Adobe Guides チームが許可リストに登録している必要があります。

アクセスをリクエストするには、Adobe カスタマーサクセス部門にお問い合わせください。

## サポートされているアプリケーション

Experience Manager Guides MCP サーバーは&#x200B;**リモート** サーバーです。 次のようなリモートサーバーをサポートするあらゆるMCP クライアントで動作します。

### チャットアプリ

- Anthropic Claude （ウェブとデスクトップ）

### 開発者ツール

- カーソル
- Visual Studio Code
- その他のMCP対応IDE

## セットアップ

ローカルに何もインストールしません。 クライアントをサーバーURLに指定し、Adobe IMSのサインインフローを使用して認証を行います。

### 人道クロード

公式のチュートリアルに従います。[AEM MCP用にClaudeを設定](https://experienceleague.adobe.com/ja/docs/experience-manager-cloud-service/content/ai-in-aem/mcp-support/chat-applications/setup-claude)。 カスタムコネクタを追加する場合は、Experience Manager Guides エンドポイントを使用します。

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

## 認証

Experience Manager Guides MCP サーバーは、Adobe IMSに&#x200B;**認証**&#x200B;を使用しています。

- 最初の接続時に、クライアントはブラウザーのログインウィンドウを開きます。 Adobe IDでログインして、接続を完了します。
- ログインすると、すべてのアクションが既存のAEM権限の下で実行されます。 AEMでアクションに対する権限がない場合、MCPを通じて同じアクションが失敗します。

## Experience Manager Guides MCP Serverの使用

接続したら、目的のものを平易な言葉で記述します。 アシスタントは適切なツールを選択し、マップパスやベースライン名などのパラメーターを入力します。

>[!IMPORTANT]
>
>書き出し、ベースライン構築、一括更新など、複数のステップを伴ったり、完了までに時間がかかったりするリクエストは、思考モデルで最も効果的に機能します。 これらはバックグラウンドで実行されます。アシスタントはジョブを開始し、結果またはダウンロードリンクが準備ができるまでステータスを確認します。

### プロンプト例

次のプロンプトは、それぞれ異なるツールをトリガーする一般的なリクエストを示しています。

1. **マップ内のトピックの状態を確認**

   > マップ内のすべてのトピック（`/content/dam/docs/user-guide.ditamap`）を一覧表示し、それらのタイトルとドキュメントの状態を表示します。

1. **ベースラインの作成**

   > 「リリース 3.2」というタイトルの`/content/dam/docs/user-guide.ditamap`の静的ベースラインを作成します。

1. **レポートを実行**

   > ユーザーガイドのリンク切れレポートを実行し、準備ができたらダウンロードリンクを教えてください。

## 期待管理

- **結果を検証** - アシスタントは、間違ったマップやトピックを選択するなど、間違いを犯す可能性があります。 レポートまたは新しいベースラインを使用する前に確認します。
- **時間の経過とともに改善します** - アシスタントが向上するにつれ、今日数プロンプトを受け取るタスクは、後で1つのプロンプトを受け取る場合があります。
- **引き続き呼び出しを行います** - アシスタントは、トピックの状態や壊れたリンクのリストを確認できますが、コンテンツを公開する準備ができているかどうかは、まだレビュー担当者または発行者が判断できます。
- **自動承認に注意してください** - Claudeを含む一部のMCP クライアントでは、アクションを確認する代わりに、アクションを自動承認できます。 これは、レポートの実行など、読み取り専用のアクションで使用できます。 コンテンツを作成、変更、ロックするアクションの場合は、各コンテンツを確認して、コンテンツが適用される前にレビューできるようにします。

Experience Manager Guides MCPに関するご質問は、Adobe カスタマーサクセス部門にお問い合わせください。


