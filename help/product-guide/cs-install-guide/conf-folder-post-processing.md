---
title: ファイル名の設定
description: Adobe Experience Manager Assetsにアップロードされたフォルダーの後処理を無効にする方法を説明します
feature: Filename Configuration
role: Admin
level: Experienced
exl-id: 42722c6f-1b1c-4a7e-89ef-a373623eb774
source-git-commit: 635206ca34db633a998b0156e2549d86a83f8131
workflow-type: tm+mt
source-wordcount: '574'
ht-degree: 0%

---

# フォルダーの後処理を無効にする

デフォルトでは、アップロードされたすべてのアセットは、DAM アセットの更新ワークフローを使用して処理されます。 Experience Manager Guidesは、このワークフローの一部として、後処理と呼ばれる追加の処理を実行します。 これは UUID の生成にも役立ちます

ファイルやフォルダーを *Adobe Experience Manager Assets* サーバーにアップロードする際に、後処理を無効にしたり、UUID を生成したりすることもできます。

[ 設定のオーバーライド ](download-install-additional-config-override.md#) の手順に従って、設定ファイルを作成します。 設定ファイルで、次の（プロパティ）の詳細を指定して、特定のパスの後処理を無効にするか、フォルダーの後処理を無視します。

>[!NOTE]
>
> 正規表現（regex）を使用して、複数のフォルダーまたはフォルダー階層全体に適用されるルールを定義することもできます。 詳しくは、[ 後処理を有効または無効にする場合は正規表現を使用 ](#use-regex-to-enable-or-disable-post-processing) の節を参照してください。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `ignored.post.processing.paths` | 標準の NODE_OPTIONS （複数値プロパティ、末尾の `/` または正規表現を省略するパスを含む文字列）を設定する <br> 字列値 **デフォルト値**: `/content/dam/projects/translation_output` |

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `enabled.post.processing.paths` | 標準の NODE_OPTIONS （複数値プロパティ、末尾の `/` または正規表現を省略するパスを含む文字列）を設定する <br> 字列値 **デフォルト値**: `/content/dam` |

## 後処理を有効または無効にするためのルール

デフォルトでは、Experience Manager DAM フォルダーの下にあるすべてのフォルダーパスに対して後処理が行われます。 設定は、次のルールに従って任意のフォルダーに適用されます。

* 後処理で親が無視され、子フォルダーが有効な場合は、子およびそのすべての後続フォルダーが有効と見なされます。
* 親が後処理に対して有効になっていても子が無視される場合、子およびそのすべての後続タスクは無視されます。
* `ignored.post.processing.paths` 設定と `enabled.post.processing.paths` 設定の両方に同じフォルダーパスが存在する場合、後処理では無視されたと見なされます。

## 正規表現を使用して後処理を有効または無効にします

個々のフォルダーパスを指定する代わりに、正規表現（regex）を使用して、複数のフォルダーまたはフォルダー階層全体に適用されるルールを定義できます。

正規表現パターンは、後処理中に完全なアセットパスに対して評価されます。

正規表現（regex）を使用して、無視された後処理パスと有効な後処理パスを設定すると、AEM Guidesはアセットパスに対して両方の設定を評価します。 パスが無視ルールと有効化ルールの両方に一致する場合は、無視ルールが常に優先されます。

以下に、正規表現ベースの無視ルールおよび有効化ルールの評価方法を示します。

## 後処理の正規表現評価シナリオ

### 親階層を無視、特定のフォルダーを有効にする

**正規表現を無視**

`regex:/content/dam/lang-test/.*`

**正規表現を有効にする**

`regex:/content/dam/lang-test/.*/parent1`

上記の例では、`/content/dam/lang-test/en/parent1` の後処理が無効になります。

パスは enable regex に一致しますが、ignore regex によって既に一致しています。 無視ルールが優先されるので、後処理は有効になりません。

### 特定のフォルダーを無視して幅広い階層を有効にする

**正規表現を無視**

`regex:/content/dam/lang-test/.*/parent1`

**正規表現を有効にする**

`regex:/content/dam/lang-test/.*`

上記の例では、`/content/dam/lang-test/en/parent1` の後処理が無効になり、`/content/dam/lang-test/en/parent2` が有効になります。

`parent1` のパスは明示的に無視され、無効のままになります。 有効化の正規表現にのみ一致する他のフォルダーが処理されます。

### 親フォルダーを無視して子フォルダーを有効にする

**正規表現を無視**

`regex:/content/dam/lang-test/.*/parent1`

**正規表現を有効にする**

`regex:/content/dam/lang-test/.*/parent1/child1`

上記の例では、`/content/dam/lang-test/en/parent1` と `/content/dam/lang-test/en/parent1/child2` の後処理が無効になり、`/content/dam/lang-test/en/parent1/child1` の後処理が有効になります。

正規表現で明示的に有効になっている子フォルダーが処理されます。 その他の子フォルダーは、親パスが無視される正規表現に一致するので、無効のままです。

### 特定の子フォルダーを無視し、親階層を有効にする

**正規表現を無視**

`regex:/content/dam/lang-test/.*/parent1/child1`

**正規表現を有効にする**

`regex:/content/dam/lang-test/.*/parent1`

上記の例では、`/content/dam/lang-test/en/parent1/child1` の後処理が無効になり、`/content/dam/lang-test/en/parent1` と `/content/dam/lang-test/en/parent1/child2` で有効になります。

明示的に無視された子フォルダーのみがスキップされます。 親フォルダーとその他の子フォルダーは、使用可能な正規表現に一致し、無視する正規表現には一致しないので、処理されます。

