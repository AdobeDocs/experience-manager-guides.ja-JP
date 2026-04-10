---
title: ファイル名の設定
description: Adobe Experience Manager Assetsにアップロードされたフォルダーの後処理を無効にする方法を説明します
feature: Filename Configuration
role: Admin
level: Experienced
exl-id: 42722c6f-1b1c-4a7e-89ef-a373623eb774
hidefromtoc: true
source-git-commit: 564ee1731be2378744ffd2ed54a2fd423901a0b3
workflow-type: tm+mt
source-wordcount: '574'
ht-degree: 0%

---

# フォルダーの後処理を無効にする

デフォルトでは、アップロードされたすべてのアセットは、DAM アセットの更新ワークフローを使用して処理されます。 Experience Manager Guidesでは、このワークフローの一部として、後処理と呼ばれる追加処理を実行します。 これは、UUIDの生成にも役立ちます

ファイルとフォルダーを&#x200B;*Adobe Experience Manager Assets* サーバーにアップロードする際に、後処理とUUIDの生成を無効にすることもできます。

設定ファイルを作成するには、[設定の上書き](download-install-additional-config-override.md#)の手順を使用します。 設定ファイルで、特定のパスの後処理を無効にしたり、フォルダーの後処理を無視したりするために、次の（プロパティ）詳細を指定します。

>[!NOTE]
>
> 正規表現（regex）を使用して、複数のフォルダーまたはフォルダー階層全体に適用されるルールを定義することもできます。 詳細については、「[正規表現を使用して後処理を有効または無効にする](#use-regex-to-enable-or-disable-post-processing)」セクションを参照してください。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `ignored.post.processing.paths` | 任意の標準NODE_OPTIONS （複数値プロパティ、末尾または正規表現で`/`を省略するパスを持つ文字列）を設定する文字列値<br> **デフォルト値**: `/content/dam/projects/translation_output` |

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `enabled.post.processing.paths` | 任意の標準NODE_OPTIONS （複数値プロパティ、末尾または正規表現で`/`を省略するパスを持つ文字列）を設定する文字列値<br> **デフォルト値**: `/content/dam` |

## 後処理を有効または無効にするルール

デフォルトでは、後処理は、Experience Manager DAM フォルダーの下にあるすべてのフォルダーパスに対して行われます。 設定は、次のルールに従って、任意のフォルダーに適用されます。

* 親が後処理のために無視されますが、子フォルダーが有効になっている場合、子フォルダーとそのすべての後継フォルダーは有効と見なされます。
* 親が後処理に対して有効になっていても、子が無視された場合、子とその後継のすべての子は無視されたとみなされます。
* 同じフォルダーパスが`ignored.post.processing.paths`と`enabled.post.processing.paths`の両方の設定に存在する場合、後処理では無視されたと見なされます。

## 正規表現を使用して後処理を有効または無効にする

個々のフォルダーパスを指定する代わりに、正規表現（regex）を使用して、複数のフォルダーまたはフォルダー階層全体に適用されるルールを定義できます。

正規表現パターンは、後処理中に完全なアセットパスに対して評価されます。

正規表現（regex）を使用して無視され、有効になっている後処理パスを設定する場合、AEM Guidesは両方の設定をアセットパスに対して評価します。 パスが無視ルールと有効ルールの両方に一致する場合は、常に無視ルールが優先されます。

次の例は、正規表現ベースの無視ルールと有効ルールがどのように評価されるかを示しています。

## 後処理の正規表現の評価シナリオ

### 親階層を無視し、特定のフォルダーを有効にする

**正規表現を無視**

`regex:/content/dam/lang-test/.*`

**正規表現を有効にする**

`regex:/content/dam/lang-test/.*/parent1`

上記の例では、`/content/dam/lang-test/en/parent1`の後処理は無効になっています。

パスはイネーブル正規表現と一致しますが、すでに無視された正規表現と一致しています。 無視ルールが優先されるため、後処理は有効になっていません。

### 特定のフォルダーを無視し、より広い階層を有効にする

**正規表現を無視**

`regex:/content/dam/lang-test/.*/parent1`

**正規表現を有効にする**

`regex:/content/dam/lang-test/.*`

上記の例では、後処理は`/content/dam/lang-test/en/parent1`に対して無効になり、`/content/dam/lang-test/en/parent2`に対して有効になります。

`parent1` パスは明示的に無視され、無効のままです。 有効な正規表現のみに一致するその他のフォルダーが処理されます。

### 親フォルダーを無視し、子フォルダーを有効にする

**正規表現を無視**

`regex:/content/dam/lang-test/.*/parent1`

**正規表現を有効にする**

`regex:/content/dam/lang-test/.*/parent1/child1`

上記の例では、`/content/dam/lang-test/en/parent1`と`/content/dam/lang-test/en/parent1/child2`の後処理は無効になり、`/content/dam/lang-test/en/parent1/child1`の後処理は有効になります。

regexによって明示的に有効になっている子フォルダーが処理されます。 親パスがignore regexと一致するため、他の子フォルダーは無効のままです。

### 特定の子フォルダーを無視し、親階層を有効にする

**正規表現を無視**

`regex:/content/dam/lang-test/.*/parent1/child1`

**正規表現を有効にする**

`regex:/content/dam/lang-test/.*/parent1`

上記の例では、後処理は`/content/dam/lang-test/en/parent1/child1`に対して無効になり、`/content/dam/lang-test/en/parent1`と`/content/dam/lang-test/en/parent1/child2`に対して有効になります。

明示的に無視された子フォルダーのみがスキップされます。 親フォルダーとその他の子フォルダーは、有効な正規表現に一致し、無視する正規表現に一致しないため、処理されます。

