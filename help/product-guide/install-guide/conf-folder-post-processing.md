---
title: ファイル名の設定
description: Adobe Experience Manager Assetsにアップロードされたフォルダーの後処理を無効にする方法を説明します
feature: Filename Configuration
role: Admin
level: Experienced
exl-id: ff6e1322-9655-42aa-b353-199c70c9de49
source-git-commit: e84a00237e61275c6cd1ddd312883ac4f66b65ff
workflow-type: tm+mt
source-wordcount: '394'
ht-degree: 0%

---

# フォルダーの後処理を無効にする

デフォルトでは、アップロードされたすべてのアセットは、DAM アセットの更新ワークフローを使用して処理されます。 Experience Manager Guidesは、このワークフローの一部として、後処理と呼ばれる追加の処理を実行します。 これは UUID の生成にも役立ちます。

ファイルやフォルダーを *Adobe Experience Manager Assets* サーバーにアップロードする際に、後処理を無効にしたり、UUID を生成したりすることもできます。


次の手順を実行して、特定のパスの後処理を無効にするか、フォルダーの後処理を無視します。


1. Adobe Experience Manager Web コンソール設定ページを開きます。

   設定ページにアクセスするためのデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.config.ConfigManager** バンドルを検索してクリックします。

1. 後処理用にフォルダーを無視するには、「**後処理用に無視されたパス**」オプションを選択します。

   標準の NODE_OPTIONSを設定する文字列値（複数値プロパティ、末尾に `/` を省略するパスを持つ文字列）

   **デフォルト値**: `/content/dam/projects/translation_output`

   >[!NOTE]
   >
   > このプロパティはデフォルトで無効になっており、マップダッシュボードで「翻訳」タブを使用できます。

1. 「**Enabled Paths for Post Processing**」オプションを選択して、後処理用のパスを有効にします。

   標準の NODE_OPTIONSを設定する文字列値（複数値プロパティ、末尾に `/` を省略するパスを持つ文字列）

   **デフォルト値**: `/content/dam/`

   >[!NOTE]
   >
   > このプロパティはデフォルトで無効になっており、マップダッシュボードで「翻訳」タブを使用できます。


1. 「**保存**」をクリックします。

>[!NOTE]
>
> OSGi 設定を通じて設定される、無視された有効なパスに加えて、後処理動作は、`/var/dxml/postprocess/ignoredPaths` にあるリポジトリレベルのノードの影響も受けます。 <br> フォルダーが後処理から予期せず除外されていて、OSGi 設定に表示されない場合は、このリポジトリーノードを確認することをお勧めします。 パスがそこに表示され、`true` に設定されている場合は無視されます。 処理を再度有効にするには、対応するプロパティをノードから手動で削除します。

## 後処理を有効または無効にするためのルール

デフォルトでは、Experience Manager DAM フォルダーの下にあるすべてのフォルダーパスに対して後処理が行われます。 設定は、次のルールに従って任意のフォルダーに適用されます。

* 後処理で親が無視され、子フォルダーが有効な場合は、子およびそのすべての後続フォルダーが有効と見なされます。
* 親が後処理に対して有効になっていても子が無視される場合、子およびそのすべての後続タスクは無視されます。
* ignored.post.processing.paths 設定と enabled.post.processing.paths 設定の両方に同じフォルダーパスが存在する場合、後処理では無視されます。
