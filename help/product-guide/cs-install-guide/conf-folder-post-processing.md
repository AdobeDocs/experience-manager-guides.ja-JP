---
title: ファイル名の設定
description: Adobe Experience Manager Assetsにアップロードされたフォルダーの後処理を無効にする方法を説明します
feature: Filename Configuration
role: Admin
level: Experienced
exl-id: 42722c6f-1b1c-4a7e-89ef-a373623eb774
source-git-commit: 5d99274da8fdacbd255d426fa4913b5773ca45f8
workflow-type: tm+mt
source-wordcount: '258'
ht-degree: 1%

---

# フォルダーの後処理を無効にする

デフォルトでは、アップロードされたすべてのアセットは、DAM アセットの更新ワークフローを使用して処理されます。 Experience Manager Guidesは、このワークフローの一部として、後処理と呼ばれる追加の処理を実行します。 これは UUID の生成にも役立ちます

ファイルやフォルダーを *Adobe Experience Manager Assets* サーバーにアップロードする際に、後処理を無効にしたり、UUID を生成したりすることもできます。


[&#x200B; 設定のオーバーライド &#x200B;](download-install-additional-config-override.md#) の手順に従って、設定ファイルを作成します。 設定ファイルで、次の（プロパティ）の詳細を指定して、特定のパスの後処理を無効にするか、フォルダーの後処理を無視します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `ignored.post.processing.paths` | 標準の NODE_path （複数値プロパティ、末尾に `/` を省略するOPTIONSを含む文字列）を設定する <br> 字列値 **デフォルト値**: `/content/dam/projects/translation_output` |


| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `enabled.post.processing.paths` | 標準の NODE_path （複数値プロパティ、末尾に `/` を省略するOPTIONSを含む文字列）を設定する <br> 字列値 **デフォルト値**: `/content/dam` |


## 後処理を有効または無効にするためのルール

デフォルトでは、Experience Manager DAM フォルダーの下にあるすべてのフォルダーパスに対して後処理が行われます。 設定は、次のルールに従って任意のフォルダーに適用されます。

* 後処理で親が無視され、子フォルダーが有効な場合は、子およびそのすべての後続フォルダーが有効と見なされます。
* 親が後処理に対して有効になっていても子が無視される場合、子およびそのすべての後続タスクは無視されます。
* ignored.post.processing.paths 設定と enabled.post.processing.paths 設定の両方に同じフォルダーパスが存在する場合、後処理では無視されます。
