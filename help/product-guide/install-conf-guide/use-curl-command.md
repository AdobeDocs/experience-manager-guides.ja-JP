---
title: curl コマンドの使用
description: Experience Manager Guidesでアップロードされたコンテンツでcurl コマンドを使用する方法を説明します。
feature: Migration
role: Admin
level: Experienced
exl-id: 7772246c-f885-46c0-a1e5-915d111bbc61
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
feature_v2:
  - id: 5be0fc8f-1cff-5c3e-bb92-2903a56a3de6
    internal-label: Migration
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '290'
ht-degree: 1%
---
# curl コマンドの使用

また、curl コマンドを使用して、DAMでフォルダーを作成し、ファイルをアップロードし、アップロードしたコンテンツにメタデータを追加することもできます。

## フォルダーの作成

次のコマンドを実行して、AEM リポジトリにフォルダーを作成します。

```curl
curl --user <username>:<password> --data jcr:primaryType=sling:Folder "<server folder path>"
```

フォルダーを作成するには、次のパラメーターを指定します。

- `<username>:<passowrd>`: AEM リポジトリにアクセスするためのユーザー名とパスワードを指定します。 このユーザーにはフォルダー作成権限が必要です。

- `jcr:primaryType=sling:Folder`：このパラメーター&#x200B;*をそのまま*&#x200B;として指定して、フォルダーの種類のリソースを作成します。

- `<server folder path>`: AEM リポジトリで作成する新しいフォルダーの名前を含む完全なフォルダーパス。 例えば、パスを`http://192.168.1.1:4502/content/dam/projects/AEM-Guides`として指定した場合、フォルダー`AEM-Guides`はDAMの`projects` フォルダー内に作成されます。


## ファイルをアップロード

次のコマンドを実行して、AEM リポジトリにファイルをアップロードします。

```curl
curl --user <username>:<password> -T "<local file path>" "<server folder path>"
```

ファイルをアップロードするには、次のパラメーターを指定します。

- `<username>:<passowrd>`: AEM リポジトリにアクセスするためのユーザー名とパスワードを指定します。 このユーザーは`server folder path`に対する書き込み権限を持っている必要があります。

- ``local file path``: アップロードするローカルシステム上の完全なファイルパス。

- `<server folder path>`: ファイルをアップロードするAEM サーバー上の完全なフォルダーパス。


## メタデータを追加

次のコマンドを実行して、ファイルにメタデータを追加します。

```curl
curl --user <username>:<password> -F<attribute name>=<value> <metadata node path>
```

メタデータ情報を追加するには、次のパラメーターを指定します。

- `<username>:<passowrd>`: AEM リポジトリにアクセスするためのユーザー名とパスワードを指定します。 このユーザーは``metadata node path``に対する書き込み権限を持っている必要があります。

- ``-F<attribute name>=<value>``: `<attribute name>`は`audience`などのメタデータ属性の名前で、`<value>`は`internal`である可能性があります。 複数の属性名と値のペアをスペースで区切って指定できます。

- `<metadata node path>`: ファイル名とそのメタデータノードを含む完全なフォルダーパス。 例えば、パスを`http://192.168.1.1:4502/content/dam/projects/AEM-Guides/intro.xml/jcr:content/metadata`として指定した場合、指定したメタデータ情報は`intro.xml` ファイルに設定されます。
