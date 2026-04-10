---
title: curl コマンドの使用
description: Experience Manager Guidesでアップロードされたコンテンツでcurl コマンドを使用する方法を説明します。
feature: Migration
role: Admin
level: Experienced
source-git-commit: 834959a6a0e22cd5d2b2c5d0e57ceb6d45c0c666
workflow-type: tm+mt
source-wordcount: '289'
ht-degree: 1%

---

# curl コマンドの使用

また、curl コマンドを使用して、DAMでフォルダーを作成し、ファイルをアップロードし、アップロードしたコンテンツにメタデータを追加することもできます。

## フォルダーを作成

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