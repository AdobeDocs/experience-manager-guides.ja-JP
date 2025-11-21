---
title: データソースコネクタの設定
description: データソースコネクタの設定方法を学ぶ
exl-id: 6e01098b-53fe-41e0-bffe-9ad056d4a9b3
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 6e23f52fc9124d0f07f8108da1b5fe574f553469
workflow-type: tm+mt
source-wordcount: '454'
ht-degree: 0%

---

# データソースコネクタの設定

AEM Guidesには、JIRA、SQL （MySQL、PostgreSQL、Microsoft SQL Server、SQLite、MariaDB、H2DB）、AdobeCommerce、Elasticsearchの各データベース用の標準のコネクタが用意されています。 デフォルトのインタフェースを拡張して、ほかのコネクタを追加することもできます。 次の設定を使用すると、様々なデータソースを簡単に追加できます。 追加したデータソースは、web エディターで表示できます。

次の手順を実行してデータソースコネクタを設定し、web エディターから使用します。

## コネクタの設定

JSON ファイルをアップロードすることで、標準のコネクタを設定できます。 次のサンプル設定ファイルを使用して、JIRA、SQL （MySQL、PostgreSQL、Microsoft SQL Server、SQLite、MariaDB、H2DB）、AdobeCommerce およびElasticsearch データベース用のコネクタを設定できます。

ユーザー名とパスワードを使用した Jira の基本認証用のサンプルセットアップファイルを次に示します。

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

例えば、`jira.json` として保存します。

トークンを使用した Jira の基本認証のサンプル設定ファイルは次のとおりです。

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

例えば、`jira.json` として保存します。

Jira の基本認証のサンプル設定ファイルで、トークンには「Basic」キーワードが含まれています。

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

Microsoft SQL Server の基本認証のサンプル設定ファイル：

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



H2DB のセットアップ ファイルの例は次のとおりです。

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

例えば、`sqqlite.json` として保存します。



MariaDb の基本認証用のサンプル設定ファイル：

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

例えば、`mariadb.json` として保存します。


Elasticsearchの基本認証用のセットアップファイルのサンプルは次のとおりです。

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

例えば、`ES.json` として保存します。

Elastic Search のクエリには、インデックスとクエリが含まれている必要があります。

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



Adobe Commerce NoAuth のサンプル設定ファイル：

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

例えば、`commerce.json` として保存します。

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
