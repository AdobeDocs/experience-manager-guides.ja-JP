---
title: 既存の DITA コンテンツのアップロード
description: 既存の DITA コンテンツをアップロードする方法を学ぶ
exl-id: 2b385eef-00a7-4c25-9e78-367a0c9e44ba
feature: Migration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '499'
ht-degree: 0%

---

# 既存の DITA コンテンツのアップロード {#id176FF000JUI}

ほとんどの場合、AEM Guidesで使用する既存の DITA コンテンツのリポジトリがあります。 このような既存のコンテンツの場合、[Adobe Experience Manager as a Cloud Service Assetsへのデジタルアセットの追加 &#x200B;](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/assets/manage/add-assets.html?lang=ja) で説明されている、サポートされている任意の方法を使用することができます。

## UUID ファイル名パターンの設定

コンテンツを読み込む場合、ファイル名が UUID に基づいている必要はありません。 UUID ベースのファイル名を使用するシステムでは、元のファイル名ではなく、すべてのファイルを UUID を使用して参照する必要があります。 読み込んだファイルが UUID ベースのファイル名を持たない場合は、そのファイルプロパティに UUID を追加するようにシステムを設定できます。 次に、この UUID は、そのようなファイルを参照するために使用されます。UUID は、ファイルの命名には使用されません。

[&#x200B; 設定の上書き &#x200B;](download-install-additional-config-override.md#) の手順に従って、設定ファイルを作成します。 UUID ファイルパターンを設定するには、設定ファイルで、次の\（property\）の詳細を指定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `uuid.regex` | UUID ファイル名パターンの正規表現を指定する文字列。 <br> ファイルが指定されたパターンに従わない場合、UUID がファイルのプロパティに追加され、ファイルへのすべての参照が UUID がファイルに割り当てられて更新されます。<br> **デフォルト値**: `"^GUID-(?<id>.*)"` |

## curl コマンドの使用

また、curl コマンドを使用して、DAM へのフォルダーの作成、ファイルのアップロード、アップロードされたコンテンツへのメタデータの追加を行うこともできます。

**フォルダーの作成**

次のコマンドを実行して、AEM リポジトリにフォルダーを作成します。

```
curl --user <username>:<password> --data jcr:primaryType=sling:Folder "<server folder path>"
```

フォルダーを作成するには、次のパラメーターを指定します。

- `<username>:<passowrd>`:AEM リポジトリにアクセスするためのユーザー名とパスワードを指定します。 このユーザーには、フォルダー作成権限が必要です。

- `jcr:primaryType=sling:Folder`：このパラメーター *そのまま* を指定して、フォルダータイプのリソースを作成します。

- `<server folder path>`:AEM リポジトリに作成する新しいフォルダーの名前を含む、完全なフォルダーパス。 例えば、パスを `http://192.168.1.1:4502/content/dam/projects/AEM-Guides` として指定した場合、フォルダー `AEM-Guides` は DAM の `projects` フォルダー内に作成されます。


**ファイルのアップロード**

次のコマンドを実行して、AEM リポジトリにファイルをアップロードします。

```
curl --user <username>:<password> -T "<local file path>" "<server folder path>"
```

次のパラメーターを指定して、ファイルをアップロードします。

- `<username>:<passowrd>`:AEM リポジトリにアクセスするためのユーザー名とパスワードを指定します。 このユーザーには、`server folder path` に対する書き込み権限が必要です。

- ``local file path``：アップロードするローカルシステム上の完全ファイルパス。

- `<server folder path>`：ファイルをアップロードするAEM サーバー上のフォルダーパスを入力します。


**メタデータを追加**

次のコマンドを実行して、ファイルにメタデータを追加します。

```
curl --user <username>:<password> -F<attribute name>=<value> <metadata node path>
```

メタデータ情報を追加するには、次のパラメーターを指定します。

- `<username>:<passowrd>`:AEM リポジトリにアクセスするためのユーザー名とパスワードを指定します。 このユーザーには、``metadata node path`` に対する書き込み権限が必要です。

- ``-F<attribute name>=<value>``: `<attribute name>` は、`audience` などのメタデータ属性の名前で、`<value>` は `internal` にすることができます。 複数の属性の名前と値のペアをスペースで区切って指定できます。

- `<metadata node path>`：ファイル名とそのメタデータノードを含む完全なフォルダーパス。 例えば、パスに `http://192.168.1.1:4502/content/dam/projects/AEM-Guides/intro.xml/jcr:content/metadata` を指定した場合、指定したメタデータ情報がファイルに設定 `intro.xml` れます。


**親トピック：**&#x200B;[&#x200B; 既存のコンテンツを移行 &#x200B;](migrate-content.md)
