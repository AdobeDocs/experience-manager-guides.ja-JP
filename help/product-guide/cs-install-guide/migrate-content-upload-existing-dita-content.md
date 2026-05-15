---
title: 既存のDITA コンテンツのアップロード
description: 既存のDITA コンテンツをアップロードする方法について説明します
exl-id: 2b385eef-00a7-4c25-9e78-367a0c9e44ba
feature: Migration
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/oVLPpwMXyeRGo-1QO553dthsza05mbnRIedaIYpQ1Vg
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
role_v2: id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
topic_v2: id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 511
ht-degree: 0%

---

# 既存のDITA コンテンツのアップロード {#id176FF000JUI}

AEM Guidesで使用する既存のDITA コンテンツのリポジトリがある可能性があります。 このような既存のコンテンツに対しては、[ デジタルアセットをAdobe Experience Manager as a Cloud Service Assetsに追加](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/assets/manage/add-assets.html)で説明されているサポートされている方法のいずれかを使用できます。

## UUID ファイル名パターンの設定

コンテンツを読み込む際に、ファイル名がUUIDに基づく必要はありません。 UUID ベースのファイル名を使用するシステムでは、すべてのファイルを元のファイル名ではなくUUIDを使用して参照することが必須です。 読み込んだファイルにUUID ベースのファイル名がない場合は、UUIDをファイルプロパティに追加するようにシステムを設定できます。 このUUIDは、UUIDがファイルの命名に使用されないファイルを参照するために使用されます。

設定ファイルを作成するには、[設定の上書き](download-install-additional-config-override.md#)の手順を使用します。 設定ファイルで、UUID ファイル名パターンを設定するために次の\（property\）詳細を指定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `uuid.regex` | UUID ファイル名パターンの正規表現を指定する文字列。<br> ファイルが指定されたパターンに従わない場合、UUIDがファイルのプロパティに追加され、ファイルへのすべての参照が、ファイルに割り当てられたUUIDで更新されます。<br> **デフォルト値**: `"^GUID-(?<id>.*)"` |

## curl コマンドの使用

また、curl コマンドを使用して、DAMでフォルダーを作成し、ファイルをアップロードし、アップロードしたコンテンツにメタデータを追加することもできます。

**フォルダーを作成**

次のコマンドを実行して、AEM リポジトリにフォルダーを作成します。

```
curl --user <username>:<password> --data jcr:primaryType=sling:Folder "<server folder path>"
```

フォルダーを作成するには、次のパラメーターを指定します。

- `<username>:<passowrd>`: AEM リポジトリにアクセスするためのユーザー名とパスワードを指定します。 このユーザーにはフォルダー作成権限が必要です。

- `jcr:primaryType=sling:Folder`：このパラメーター&#x200B;*をそのまま*&#x200B;として指定して、フォルダーの種類のリソースを作成します。

- `<server folder path>`: AEM リポジトリで作成する新しいフォルダーの名前を含む完全なフォルダーパス。 例えば、パスを`http://192.168.1.1:4502/content/dam/projects/AEM-Guides`として指定した場合、フォルダー`AEM-Guides`はDAMの`projects` フォルダー内に作成されます。


**ファイルをアップロード**

次のコマンドを実行して、AEM リポジトリにファイルをアップロードします。

```
curl --user <username>:<password> -T "<local file path>" "<server folder path>"
```

ファイルをアップロードするには、次のパラメーターを指定します。

- `<username>:<passowrd>`: AEM リポジトリにアクセスするためのユーザー名とパスワードを指定します。 このユーザーは`server folder path`に対する書き込み権限を持っている必要があります。

- ``local file path``: アップロードするローカルシステム上の完全なファイルパス。

- `<server folder path>`: ファイルをアップロードするAEM サーバー上の完全なフォルダーパス。


**メタデータを追加**

次のコマンドを実行して、ファイルにメタデータを追加します。

```
curl --user <username>:<password> -F<attribute name>=<value> <metadata node path>
```

メタデータ情報を追加するには、次のパラメーターを指定します。

- `<username>:<passowrd>`: AEM リポジトリにアクセスするためのユーザー名とパスワードを指定します。 このユーザーは``metadata node path``に対する書き込み権限を持っている必要があります。

- ``-F<attribute name>=<value>``: `<attribute name>`は`audience`などのメタデータ属性の名前で、`<value>`は`internal`である可能性があります。 複数の属性名と値のペアをスペースで区切って指定できます。

- `<metadata node path>`: ファイル名とそのメタデータノードを含む完全なフォルダーパス。 例えば、パスを`http://192.168.1.1:4502/content/dam/projects/AEM-Guides/intro.xml/jcr:content/metadata`として指定した場合、指定したメタデータ情報は`intro.xml` ファイルに設定されます。


**親トピック：**[&#x200B;既存のコンテンツを移行](migrate-content.md)
