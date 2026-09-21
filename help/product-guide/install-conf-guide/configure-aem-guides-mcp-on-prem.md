---
title: AEM Guides オンプレミスのMCP接続設定
description: AEM Guides オンプレミスのMCP接続設定を行う方法について説明します。
meta-feature: Authoring
meta-product: Experience Manager, Experience Manager Guides
meta-role: Admin
meta-type: Documentation
source-git-commit: e234425f1e277990de25057971f3e2453c93360f
workflow-type: tm+mt
source-wordcount: '361'
ht-degree: 4%
---

# Experience Manager GuidesのMCP接続設定（オンプレミス）

Claude、Cursor、CodexなどのAI ツールは、Model Context Protocol （MCP）を使用してExperience Manager Guidesに接続できます。 MCP接続と認証の設定は、Adobe Experience Manager Web コンソールの設定ページから行うことができます。

使用可能な設定は、トークンの処理、リファラー情報を含まないリクエスト、AEM オーサーインスタンスの外部URLを制御します。

## サインイントークン処理の設定

サインイントークンの処理を設定するには、次の手順を実行します。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```
   http://<server name>:<port>/system/console/configMgr
   ```

2. **AEM Guides OAuth PKCE Token Wrapper**&#x200B;を検索して選択します。

3. 以下のプロパティを設定します。

   | プロパティ | デフォルト | 説明 |
   |---|---|---|
   | Granite ベース URL | `http://localhost:4502` | 認証時にAEMがオーサーインスタンスと通信するために使用するURLを指定します。 オーサーインスタンスが別のポートを使用している場合にのみ、デフォルトのポート 4502を変更します。 |
   | 花崗岩のタイムアウト （ミリ秒） | `5000` | 認証リクエストが完了するまでの最大時間（ミリ秒単位）を指定します。 |

4. 「**保存**」を選択します。

## リファラー情報なしでリクエストを設定

>[!NOTE]
>
> この設定は、カーソルを使用している場合にのみ設定する必要があります。

Cursorを含む一部のMCP クライアントは、リファラー情報なしでリクエストを送信する場合があります。 これらのリクエストを許可するには、次のようにApache Sling リファラーフィルターを設定します。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```
   http://<server name>:<port>/system/console/configMgr
   ```

2. **Apache Sling Referrer Filter**&#x200B;を検索して選択します。

3. **Allow Empty** プロパティで、値を`true`に設定します。

   この設定を使用すると、認証時にリファラー情報を含まないリクエストを許可できます。

4. 「**保存**」を選択します。

## オーサーインスタンスの外部URLの設定

**Day CQ Link Externalizer** サービスを使用すると、AEM オーサーインスタンスのURLを含む、リソースパスのプレフィックスに使用する外部URLを一元的に定義できます。

外部URLを設定するには、次の手順を実行します。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```
   http://<server name>:<port>/system/console/configMgr
   ```

2. 「**Day CQ Link Externalizer**」を検索して選択します。

3. **ドメイン**&#x200B;で、次の形式を使用して`author` マッピングを追加または更新します。

   ```
   author [scheme://]server[:port][/contextpath]
   ```

   例：

   ```
   author https://author.mycompany.com
   ```

4. 「**保存**」を選択します。