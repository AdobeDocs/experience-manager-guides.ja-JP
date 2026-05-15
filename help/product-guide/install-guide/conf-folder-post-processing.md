---
title: ファイル名の設定
description: Adobe Experience Manager Assetsにアップロードされたフォルダーの後処理を無効にする方法を説明します
feature: Filename Configuration
role: Admin
level: Experienced
exl-id: ff6e1322-9655-42aa-b353-199c70c9de49
TQID: https://experienceleague.adobe.com/QGFFy-2t4eZYQwe6eGna-m7tOnxnEqmpL7sM5F2R-oo
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2: id: ccd46b93-df7f-4458-ba4c-90a3562d9ab0
role_v2: id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 398
ht-degree: 0%

---

# フォルダーの後処理を無効にする

デフォルトでは、アップロードされたすべてのアセットは、DAM アセットの更新ワークフローを使用して処理されます。 Experience Manager Guidesでは、このワークフローの一部として、後処理と呼ばれる追加処理を実行します。 これは、UUIDの生成にも役立ちます。

ファイルとフォルダーを&#x200B;*Adobe Experience Manager Assets* サーバーにアップロードする際に、後処理とUUIDの生成を無効にすることもできます。


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

>[!NOTE]
>
> OSGi設定で構成された無視および有効なパスに加えて、後処理動作は、`/var/dxml/postprocess/ignoredPaths`にあるリポジトリーレベルのノードからも影響を受けます。<br> フォルダーが予期せず後処理から除外され、OSGi設定にリストされていない場合は、このリポジトリノードを確認することをお勧めします。 パスがそこに表示され、`true`に設定されている場合、パスは無視されます。 処理を再度有効にするには、対応するプロパティをノードから手動で削除します。

## 後処理を有効または無効にするルール

デフォルトでは、後処理は、Experience Manager DAM フォルダーの下にあるすべてのフォルダーパスに対して行われます。 設定は、次のルールに従って、任意のフォルダーに適用されます。

* 親が後処理のために無視されますが、子フォルダーが有効になっている場合、子フォルダーとそのすべての後継フォルダーは有効と見なされます。
* 親が後処理に対して有効になっていても、子が無視された場合、子とその後継のすべての子は無視されたとみなされます。
* ignored.post.processing.pathsとenabled.post.processing.paths設定の両方に同じフォルダーパスが存在する場合、後処理では無視されたものとみなされます。
