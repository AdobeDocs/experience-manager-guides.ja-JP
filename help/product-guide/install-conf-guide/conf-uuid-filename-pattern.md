---
title: UUID ファイル名パターンの設定
description: UUID ファイル名パターンの設定方法を説明します
feature: Migration
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '297'
ht-degree: 1%

---

# UUID ファイル名パターンの設定

コンテンツを読み込む際に、ファイル名がUUIDに基づく必要はありません。 UUID ベースのファイル名を使用するシステムでは、すべてのファイルを元のファイル名ではなくUUIDを使用して参照することが必須です。 読み込んだファイルにUUID ベースのファイル名がない場合は、UUIDをファイルプロパティに追加するようにシステムを設定できます。 このUUIDは、UUIDがファイルの命名に使用されないファイルを参照するために使用されます。

## UUID ファイル名パターンを設定する手順

次のタブでは、Experience Manager Guidesの設定に基づいてUUID ファイル名パターンを設定する手順を示します。例えば、Cloud Serviceまたはオンプレミスです。

>[!BEGINTABS]

>[!TAB Cloud Service]

設定ファイルを作成するには、[設定の上書き](download-install-config-override.md#)の手順を使用します。 設定ファイルで、UUID ファイル名パターンを設定するために次の\（property\）詳細を指定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `uuid.regex` | UUID ファイル名パターンの正規表現を指定する文字列。 <br> ファイルが指定されたパターンに従わない場合、UUIDがファイルのプロパティに追加され、ファイルへのすべての参照が、ファイルに割り当てられたUUIDで更新されます。<br> **デフォルト値**: `"^GUID-(?<id>.*)"` |

>[!TAB  オンプレミス ]

UUID パターンに対してファイル名をチェックし、UUIDが割り当てられていないファイルにUUIDを割り当てるには、次の手順を実行します。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.config.ConfigManager* バンドルを検索して選択します。

1. **UUID Filename Patterns** プロパティで、読み込んだファイルの名前を確認するパターンを指定します。

   ファイルが指定されたパターンに従わない場合、UUIDがファイルのプロパティに追加され、ファイルへのすべての参照が、ファイルに割り当てられたUUIDで更新されます。

1. 「**保存**」を選択します。

>[!ENDTABS]





