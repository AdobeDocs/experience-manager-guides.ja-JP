---
title: データソースコネクタの設定
description: データソースコネクタの設定方法を説明します
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 834959a6a0e22cd5d2b2c5d0e57ceb6d45c0c666
workflow-type: tm+mt
source-wordcount: '457'
ht-degree: 0%

---

# Cloud Serviceのデータソースコネクタの設定

AEM Guidesには、JIRA、SQL （MySQL、PostgreSQL、Microsoft SQL Server、SQLite、MariaDB、H2DB）、Adobe Commerce、Elasticsearchの各データベース用のすぐに利用できるコネクタが用意されています。 デフォルトインターフェイスを拡張して、他のコネクタを追加することもできます。 次の設定を使用すると、様々なデータソースを簡単に追加できます。 追加したら、Web エディターでデータソースを表示できます。

次の手順を実行してデータソースコネクタを設定し、Web エディターから使用します。

## コネクタの設定

JSON ファイルをアップロードすることで、すぐに使用できるコネクタを設定できます。 次のサンプル設定ファイルを使用して、JIRA、SQL （MySQL、PostgreSQL、Microsoft SQL Server、SQLite、MariaDB、H2DB）、Adobe CommerceおよびElasticsearch データベース用のコネクタを設定できます。

ユーザー名とパスワードを使用したJiraの基本認証のサンプル設定ファイル：

```
{
    "connectorClazz": "com.adobe.guides.konnect.definitions.ootb.connector.rest.JiraConnector",
    "configName": "Jira",
    "templateFolders": ["/content/dam/dita-templates/konnect/jira"],
    "connectionConfig": {
        "configClazz": "com.adobe.guides.konnect.definitions.ootb.config.rest.BasicAuthUserNamePasswordRestConfig",
        "configData": {
            "username": "jirausername",
            "password": "jirapassword",
            "url": "https://jira.corp.adobe.com/rest/api/latest/search"
        }
    }
}
```

例えば、`jira.json`として保存します。

トークンを使用したJiraの基本認証のサンプル設定ファイル：

```
{
    "connectorClazz": "com.adobe.guides.konnect.definitions.ootb.connector.rest.JiraConnector",
    "configName": "Jira",
    "templateFolders": ["/content/dam/dita-templates/konnect/jira"],
    "connectionConfig": {
        "configClazz": "com.adobe.guides.konnect.definitions.ootb.config.rest.BasicAuthTokenRestConfig",
        "configData": {
            "token": "jiraauthtoken",
            "url": "https://jira.corp.adobe.com/rest/api/latest/search"
        }
    }
}
```

例えば、`jira.json`として保存します。

Jiraの基本認証のサンプル設定ファイルに、「基本」キーワードが含まれているトークンが含まれています。

```
{
    "connectorClazz": "com.adobe.guides.konnect.definitions.ootb.connector.rest.JiraConnector",
    "configName": "Jira",
    "templateFolders": ["/content/dam/dita-templates/konnect/jira"],
    "connectionConfig": {
        "configClazz": "com.adobe.guides.konnect.definitions.ootb.config.rest.BasicAuthTokenRestConfig",
        "configData": {
            "token": "Basic jiraauthtoken",
            "url": "https://jira.corp.adobe.com/rest/api/latest/search"
        }
    }
}
```

例えば、`jira.json`として保存します。

MySqlの基本認証のサンプル設定ファイル：

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

例えば、`mysql.json`として保存します。

PostgreSQLの基本認証のサンプル設定ファイル：

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

例えば、`postgres.json`として保存します。

Microsoft SQL Serverの基本認証のサンプル セットアップ ファイル：

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

例えば、`mssqlserver.json`として保存します。

SQLiteの基本認証用のサンプル設定ファイル：

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

例えば、`sqqlite.json`として保存します。



H2DBのサンプル設定ファイル：

```
{
    "connectorClazz": "com.adobe.guides.konnect.definitions.ootb.connector.sql.H2DBConnector",
    "configName": "H2DBConnector",
    "templateFolders": ["/content/dam/dita-templates/konnect/sql"],
    "connectionConfig": {
        "configClazz": "com.adobe.guides.konnect.definitions.ootb.config.sql.UserPassSqlConfig",
        "configData": {
            "username": "admin",
            "password": "admin",
            "driver": "org.h2.Driver",
            "connectionString": "jdbc:h2:file:D:/h2db/db"
        }
    }
}
```

例えば、`sqqlite.json`として保存します。



MariaDbの基本認証のサンプルセットアップファイル：

```
{
    "connectorClazz": "com.adobe.guides.sample.konnect.connector.MariaDBConnector",
    "configName": "SampleMariaDbConnector",
    "templateFolders": ["/content/dam/dita-templates/konnect/sql"],
    "connectionConfig": {
        "configClazz": "com.adobe.guides.konnect.definitions.ootb.config.sql.UserPassSqlConfig",
        "configData": {
            "username": "admin",
            "password": "admin",
            "driver": "org.mariadb.jdbc.Driver",
            "connectionString": "jdbc:mariadb://no1010042073107.corp.adobe.com:3308/mysql"
        }
    }
}
```

例えば、`mariadb.json`として保存します。


Elasticsearchの基本認証のサンプル設定ファイル：

```
{
    "connectorClazz": "com.adobe.guides.konnect.definitions.ootb.connector.rest.ElasticsearchConnector",
    "configName": "SampleES",
    "templateFolders": ["/content/dam/dita-templates/konnect/sql"],
    "connectionConfig": {
        "configClazz": "com.adobe.guides.konnect.definitions.ootb.config.rest.BasicAuthUserNamePasswordRestConfig",
        "configData": {
            "username": "admin",
            "password": "admin",        
            "url": "https://testsearch-1370045986.us-east-1.bonsaisearch.net:443"   }
    }
}
```

例えば、`ES.json`として保存します。

Elastic Searchのクエリには、インデックスとクエリを含める必要があります。

```
{
"index": "kibana_sample_data_ecommerce",
"queryString":{
    "query": {
        "match_all": {}
    }
}
}
```



Adobe Commerce NoAuthのサンプル設定ファイル：

```
{
    "connectorClazz": "com.adobe.guides.konnect.definitions.ootb.connector.graphql.AdobeCommerceConnector",
    "configName": "SampleCommerce",
    "templateFolders": ["/content/dam/dita-templates/konnect"],
    "connectionConfig": {   "configClazz": "com.adobe.guides.konnect.definitions.ootb.config.rest.NoAuthRestConfig",
   "configData": {
               "url": "http://host/graphql"   
        }
    }
}
```

例えば、`commerce.json`として保存します。

### コネクタ設定のカスタマイズ

AEM Guidesでは、ユーザーのニーズに合わせて、設定ファイルの一部の値をカスタマイズできます。

| プロパティ名 | 説明 |
|---|---|
| configName | ユーザーは、コネクタの識別に役立つ設定名を指定できます |
| templateFolders | テンプレートが取得されるフォルダーのリスト |

その他のフィールドは、コネクタを実行するために選択した設定クラスに基づいてカスタマイズされます。

## AEMの場所にファイルをアップロードする

ファイルをAEM Assetsの任意の場所にアップロードします。

例：`/content/dam/jira.json`

## REST APIを使用した設定の作成

REST APIを使用して設定を登録できます。 詳しくは、「Adobe Experience Manager Guides用API リファレンス」の「*REST API to register a data source connector*」セクションを参照してください。

データソースを設定すると、コネクタはWeb エディターのデータソースパネルの下に表示されます。 次に、データソースに接続し、トピックにコンテンツスニペットを挿入します。 詳細については、[ データソースからコンテンツスニペットを挿入](../user-guide/web-editor-content-snippet.md)を参照してください。
