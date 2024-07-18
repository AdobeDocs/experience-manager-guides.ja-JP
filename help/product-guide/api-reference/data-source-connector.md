---
title: データソースコネクタを登録するための REST API
description: データソースコネクタを登録するための REST API について説明します
exl-id: e2811892-c3cf-41f5-94d8-c2b37823a53a
feature: Rest API Data Source
role: Developer
level: Experienced
source-git-commit: b4762314ec5269abe62b622184f1724762a6cfa0
workflow-type: tm+mt
source-wordcount: '81'
ht-degree: 7%

---

# データソースコネクタを登録するための REST API {#id236LG0Y0CXA}

次の REST API を使用すると、データソースコネクタを登録できます。

## データソースコネクタの登録

GETソースコネクタを登録するデータメソッド。

**リクエスト URL**:
`http://server:port/bin/guides/v1/konnect/config/register?path=<uploaded file path>`

**パラメーター**:

| 名前 | 型 | 必須 | 説明 |
|----|----|--------|-----------|
| `path` | String | はい | AEM リポジトリ内のパスを指す文字列。 `/content/dam or /var/dxml` 内のパスを指定することもできます。 |

**例**:\
`http://host:4502/bin/guides/v1/konnect/config/register?path=/var/dxml/konnect/jira.json`
