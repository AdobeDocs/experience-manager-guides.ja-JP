---
title: ファイル名の設定
description: Adobe Experience Manager Assetsにアップロードされたフォルダーの後処理を無効にする方法を説明します
feature: Filename Configuration
role: Admin
level: Experienced
exl-id: ff6e1322-9655-42aa-b353-199c70c9de49
source-git-commit: d525775afeeb89754762ff514126b1c3a3307b3f
workflow-type: tm+mt
source-wordcount: '322'
ht-degree: 0%

---

# フォルダーの後処理を無効にする

デフォルトでは、アップロードされたすべてのアセットは、DAM アセットの更新ワークフローを使用して処理されます。 Experience Manager Guidesは、このワークフローの一部として、後処理と呼ばれる追加の処理を実行します。 これは UUID の生成にも役立ちます

ファイルやフォルダーを *Adobe Experience Manager Assets* サーバーにアップロードする際に、後処理を無効にしたり、UUID を生成したりすることもできます。


次の手順を実行して、特定のパスの後処理を無効にするか、フォルダーの後処理を無視します。


1. Adobe Experience Manager Web コンソール設定ページを開きます。

   設定ページにアクセスするためのデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.config.ConfigManager** バンドルを検索してクリックします。

1. 後処理用にフォルダーを無視するには、「**Post処理では無視されるパス**」オプションをオンにします。

   標準の NODE_path を設定する文字列値（複数値プロパティ、末尾に `/` を省略するOPTIONSを含む文字列）

   **デフォルト値**: `/content/dam/projects/translation_output`

   >[!NOTE]
   >
   > このプロパティはデフォルトで無効になっており、マップダッシュボードで「翻訳」タブを使用できます。

1. 「**Post処理の有効なパス**」オプションをオンにして、後処理のパスを有効にします。

   標準の NODE_path を設定する文字列値（複数値プロパティ、末尾に `/` を省略するOPTIONSを含む文字列）

   **デフォルト値**: `/content/dam/`

   >[!NOTE]
   >
   > このプロパティはデフォルトで無効になっており、マップダッシュボードで「翻訳」タブを使用できます。


1. 「**保存**」をクリックします。



## 後処理を有効または無効にするためのルール

デフォルトでは、Experience Manager DAM フォルダーの下にあるすべてのフォルダーパスに対して後処理が行われます。 設定は、次のルールに従って任意のフォルダーに適用されます。

* 後処理で親が無視され、子フォルダーが有効な場合は、子およびそのすべての後続フォルダーが有効と見なされます。
* 親が後処理に対して有効になっていても子が無視される場合、子およびそのすべての後続タスクは無視されます。
* ignored.post.processing.paths 設定と enabled.post.processing.paths 設定の両方に同じフォルダーパスが存在する場合、後処理では無視されます。
