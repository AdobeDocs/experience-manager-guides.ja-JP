---
title: ファイル名の設定
description: Adobe Experience Manager Assetsにアップロードされたフォルダーの後処理を無効にする方法を説明します
feature: Filename Configuration
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '425'
ht-degree: 0%

---

# フォルダーの後処理を無効にする

デフォルトでは、アップロードされたすべてのアセットは、DAM アセットの更新ワークフローを使用して処理されます。 Experience Manager Guidesでは、このワークフローの一部として、後処理と呼ばれる追加処理を実行します。 これは、UUIDの生成にも役立ちます

ファイルとフォルダーを&#x200B;*Adobe Experience Manager Assets* サーバーにアップロードする際に、後処理とUUIDの生成を無効にすることもできます。

次のタブには、Experience Manager Guidesの設定に基づいてフォルダーの後処理を無効にする手順が表示されます。Cloud Serviceまたはオンプレミス。

>[!BEGINTABS]

>[!TAB Cloud Service]

設定ファイルを作成するには、[設定の上書き](download-install-config-override.md#)の手順を使用します。 設定ファイルで、特定のパスの後処理を無効にしたり、フォルダーの後処理を無視したりするために、次の（プロパティ）詳細を指定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `ignored.post.processing.paths` | 任意の標準NODE_OPTIONSを設定する文字列値（複数値のプロパティ、末尾に`/`を省略するパスを持つ文字列） <br> **デフォルト値**: `/content/dam/projects/translation_output` |
| `com.adobe.fmdita.config.ConfigManager` | `enabled.post.processing.paths` | 任意の標準NODE_OPTIONSを設定する文字列値（複数値のプロパティ、末尾に`/`を省略するパスを持つ文字列） <br> **デフォルト値**: `/content/dam` |

>[!TAB  オンプレミス ]

特定のパスの後処理を無効にするか、フォルダーの後処理を無視するには、次の手順を実行します。


1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.config.ConfigManager** バンドルを検索してクリックします。

1. 後処理のフォルダーを無視するには、「**後処理の無視されたパス**」オプションを選択します。

   任意の標準NODE_OPTIONSを設定する文字列値（複数値プロパティ、末尾に`/`を省略するパスを持つ文字列）

   **デフォルト値**: `/content/dam/projects/translation_output`

   >[!NOTE]
   >
   > このプロパティはデフォルトで無効になっており、「翻訳」タブはマップダッシュボードで使用できます。

1. 後処理のパスを有効にするには、「**後処理の有効なパス**」オプションを選択します。

   任意の標準NODE_OPTIONSを設定する文字列値（複数値プロパティ、末尾に`/`を省略するパスを持つ文字列）

   **デフォルト値**: `/content/dam/`

   >[!NOTE]
   >
   > このプロパティはデフォルトで無効になっており、「翻訳」タブはマップダッシュボードで使用できます。


1. 「**保存**」をクリックします。

>[!ENDTABS]

## 後処理を有効または無効にするルール

デフォルトでは、後処理は、Experience Manager DAM フォルダーの下にあるすべてのフォルダーパスに対して行われます。 設定は、次のルールに従って、任意のフォルダーに適用されます。

* 親が後処理のために無視されますが、子フォルダーが有効になっている場合、子フォルダーとそのすべての後継フォルダーは有効と見なされます。
* 親が後処理に対して有効になっていても、子が無視された場合、子とその後継のすべての子は無視されたとみなされます。
* ignored.post.processing.pathsとenabled.post.processing.paths設定の両方に同じフォルダーパスが存在する場合、後処理では無視されたものとみなされます。

