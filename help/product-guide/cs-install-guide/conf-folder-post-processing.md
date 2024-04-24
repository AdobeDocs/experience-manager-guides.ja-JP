---
title: ファイル名の設定
description: Adobe Experience Manager Assetsにアップロードされたフォルダーの後処理を無効にする方法を説明します
feature: Filename Configuration
role: Admin
level: Experienced
source-git-commit: fedd04f4a261ec199f86cb38ecd57e76b9393ae5
workflow-type: tm+mt
source-wordcount: '258'
ht-degree: 1%

---


# フォルダーの後処理を無効にする

デフォルトでは、アップロードされたすべてのアセットは、DAM アセットの更新ワークフローを使用して処理されます。 Experience Managerガイドは、このワークフローの一部として、後処理と呼ばれる追加処理を実行します。 これは UUID の生成にも役立ちます

ファイルおよびフォルダーをにアップロードする際に *Adobe Experience Manager Assets* サーバーで、後処理と UUID の生成を無効にすることもできます。


の説明を使用します。 [設定の上書き](download-install-additional-config-override.md#) 設定ファイルを作成します。 設定ファイルで、次の（プロパティ）の詳細を指定して、特定のパスの後処理を無効にするか、フォルダーの後処理を無視します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `ignored.post.processing.paths` | 標準の NODE_path （複数値プロパティ、OPTIONSを省略する文字列）を設定する文字列値 `/` 最後に） <br> **デフォルト値**: `/content/dam/projects/translation_output` |


| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `enabled.post.processing.paths` | 標準の NODE_path （複数値プロパティ、OPTIONSを省略する文字列）を設定する文字列値 `/` 最後に） <br> **デフォルト値**: `/content/dam` |


## 後処理を有効または無効にするためのルール

デフォルトでは、Experience Manager DAM フォルダーの下にあるすべてのフォルダーパスに対して後処理が行われます。 設定は、次のルールに従って任意のフォルダーに適用されます。

* 後処理で親が無視され、子フォルダーが有効な場合は、子およびそのすべての後続フォルダーが有効と見なされます。
* 親が後処理に対して有効になっていても子が無視される場合、子およびそのすべての後続タスクは無視されます。
* ignored.post.processing.paths 設定と enabled.post.processing.paths 設定の両方に同じフォルダーパスが存在する場合、後処理では無視されます。
