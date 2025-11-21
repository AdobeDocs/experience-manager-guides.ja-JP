---
title: データソースコネクタの設定
description: データソースコネクタの設定方法を学ぶ
exl-id: bd1188e1-0e1d-4e70-928a-10251c3d529d
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 6e23f52fc9124d0f07f8108da1b5fe574f553469
workflow-type: tm+mt
source-wordcount: '387'
ht-degree: 0%

---

# データソースコネクタの設定

AEM Guidesには、JIRA および SQL （MySQL、PostgreSQL、SQL Server、SQLite）データベース用の標準のコネクタが用意されています。 デフォルトのインタフェースを拡張して、ほかのコネクタを追加することもできます。 次の設定を使用すると、様々なデータソースを簡単に追加できます。 追加したデータソースは、web エディターで表示できます。

次の手順を実行してデータソースコネクタを設定し、web エディターから使用します。

## コネクタの設定

JSON ファイルをアップロードすることで、標準のコネクタを設定できます。 次のサンプルセットアップファイルを使用して、Jira および SQL （MySQL、PostgreSQL、SQL Server、SQLite）データベース用のコネクタを設定できます。

ユーザー名とパスワードを使用した Jira の基本認証用のサンプルセットアップファイルを次に示します。

```
{
    "connectorClazz": "com.adobe.guides.konnect.definitions.ootb.connector.rest.JiraConnector",
    "configName": "Jira",
    "templateFolders": ["/content/dam/dita-templates/konnect/jira"],
    "connectionConfig": {
        "configClazz": "com.adobe.guides.konnect.definitions.ootb.config.rest.BasicAuthRestConfig",
        "configData": {
            "username": "jirausername",
            "password": "jirapassword",
            "url": "https://jira.corp.adobe.com/rest/api/latest/search"
        }
    }
}
```

例えば、`jira.json` として保存します。

トークンを使用した Jira の基本認証のサンプル設定ファイルは次のとおりです。

```
{
    "connectorClazz": "com.adobe.guides.konnect.definitions.ootb.connector.rest.JiraConnector",
    "configName": "Jira",
    "templateFolders": ["/content/dam/dita-templates/konnect/jira"],
    "connectionConfig": {
        "configClazz": "com.adobe.guides.konnect.definitions.ootb.config.rest.BasicAuthRestConfig",
        "configData": {
            "token": "jiraauthtoken",
            "url": "https://jira.corp.adobe.com/rest/api/latest/search"
        }
    }
}
```

例えば、`jira.json` として保存します。

Jira の基本認証のサンプル設定ファイルで、トークンには「Basic」キーワードが含まれています。

```
{
    "connectorClazz": "com.adobe.guides.konnect.definitions.ootb.connector.rest.JiraConnector",
    "configName": "Jira",
    "templateFolders": ["/content/dam/dita-templates/konnect/jira"],
    "connectionConfig": {
        "configClazz": "com.adobe.guides.konnect.definitions.ootb.config.rest.BasicAuthRestConfig",
        "configData": {
            "token": "Basic jiraauthtoken",
            "url": "https://jira.corp.adobe.com/rest/api/latest/search"
        }
    }
}
```

例えば、`jira.json` として保存します。

MySql の基本認証の設定例を次に示します。

```
{
    "connectorClazz": "com.adobe.guides.konnect.definitions.ootb.connector.sql.MySqlConnector",
    "configName": "MySQL",
    "templateFolders": ["/content/dam/dita-templates/konnect/sql"],
    "connectionConfig": {
        "configClazz": "com.adobe.guides.konnect.definitions.ootb.config.sql.UserPassSqlConfig",
        "configData": {
            "username": "admin",
            "password": "admin",
            "driver": "com.mysql.jdbc.Driver",
            "connectionString": "jdbc:mysql://host.corp.adobe.com:3306/plm"
        }
    }
}
```

例えば、`mysql.json` として保存します。

PostgreSQL の基本認証用の設定例を次に示します。

```
{
    "connectorClazz": "com.adobe.guides.konnect.definitions.ootb.connector.sql.PostgreSqlConnector",
    "configName": "PostgreSQL",
    "templateFolders": ["/content/dam/dita-templates/konnect/sql"],
    "connectionConfig": {
        "configClazz": "com.adobe.guides.konnect.definitions.ootb.config.sql.UserPassSqlConfig",
        "configData": {
            "username": "admin",
            "password": "admin",
            "driver": "org.postgresql.Driver",
            "connectionString": "jdbc:postgresql://host:port/database"
        }
    }
}
```

例えば、`postgres.json` として保存します。

MS SQL Server の基本認証用のサンプル セットアップ ファイル：

```
{
    "connectorClazz": "com.adobe.guides.konnect.definitions.ootb.connector.sql.MsSqlServerConnector",
    "configName": "MSSQLServer",
    "templateFolders": ["/content/dam/dita-templates/konnect/sql"],
    "connectionConfig": {
        "configClazz": "com.adobe.guides.konnect.definitions.ootb.config.sql.UserPassSqlConfig",
        "configData": {
            "username": "admin",
            "password": "admin",
            "driver": "com.microsoft.sqlserver.jdbc.SQLServerDriver",
            "connectionString": "jdbc:sqlserver://10.10.10.10\\SQLEXPRESS01:1433;database=TutorialDB;encrypt=false;trustServerCertificate=true"
        }
    }
}
```

例えば、`mssqlserver.json` として保存します。

SQLite の基本認証用のサンプル セットアップ ファイル：

```
{
    "connectorClazz": "com.adobe.guides.konnect.definitions.ootb.connector.sql.SqliteConnector",
    "configName": "SQLiteServer",
    "templateFolders": ["/content/dam/dita-templates/konnect/sql"],
    "connectionConfig": {
        "configClazz": "com.adobe.guides.konnect.definitions.ootb.config.sql.UserPassSqlConfig",
        "configData": {
            "username": "admin",
            "password": "admin",
            "driver": "org.sqlite.JDBC",
            "connectionString": "jdbc:sqlite:sample.db"
        }
    }
}
```

例えば、`sqqlite.json` として保存します。

### コネクタ設定のカスタマイズ

AEM Guidesでは、ユーザーのニーズに合わせて設定ファイルの一部の値をカスタマイズできます。

| プロパティ名 | 説明 |
|---|---|
| configName | ユーザーは、コネクタの識別に役立つ設定名を指定できます |
| templateFolders | テンプレートの取得元となるフォルダーのリスト |

その他のフィールドは、コネクタを実行するために選択された設定クラスに基づいてカスタマイズされます。

## AEMの場所にファイルをアップロードします。

AEM Assetsの任意の場所にファイルをアップロードします。

例：`/content/dam/jira.json`

## REST API を使用した設定の作成

REST API を使用して、設定を登録できます。 詳しくは、『Adobe Experience Manager Guides API リファレンス』の *REST API を参照して、データソースコネクタを登録し* ください。

データソースを設定すると、コネクタが Web エディターのデータソース パネルの下に表示されます。 その後、データソースに接続し、トピックにコンテンツスニペットを挿入できます。 詳しくは、[&#x200B; データソースからコンテンツスニペットを挿入する &#x200B;](../user-guide/web-editor-content-snippet.md) を参照してください。
