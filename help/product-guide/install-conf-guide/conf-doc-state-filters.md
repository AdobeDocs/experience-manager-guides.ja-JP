---
title: ドキュメント状態フィルターの設定
description: ドキュメント状態フィルターの設定方法を説明します
feature: Web Editor Configuration
role: Admin
level: Experienced
exl-id: 6dee8479-770f-48d7-9939-5035388d16d8
source-git-commit: 4d8a6cd1e683af7ac3496464a2e0ed930eb9e8fc
workflow-type: tm+mt
source-wordcount: '208'
ht-degree: 0%

---

# Cloud Serviceのドキュメント状態フィルターの設定

Adobe Experience Manager Guidesには、現在のドキュメントの状態に基づいてファイルを検索する機能が用意されています。 フィルター検索を使用すると、リポジトリインターフェイスからファイルを検索してファイルを参照できます。

ドキュメント状態フィルターを設定するには、次の手順を実行します。

1. 管理者としてAdobe Experience Managerにログインします。
1. 上部のAdobe Experience Manager リンクを選択し、**ツール**&#x200B;を選択します。
1. ツールのリストから&#x200B;**ガイド**&#x200B;を選択し、**フォルダープロファイル**&#x200B;を選択します。
1. **グローバルプロファイル** タイルを開きます。 これらの変更をグローバルではなく、そのフォルダーにのみ適用する場合は、特定のフォルダープロファイルタイルを選択することもできます。
1. **XML エディター設定**&#x200B;に移動します。
1. 上部の&#x200B;**編集** アイコンを選択します。
1. **ダウンロード** アイコンを選択して、ローカルシステムに`ui\_config.json` ファイルをダウンロードします。
ダウンロードした`ui\_config.json` ファイルで、次の節を参照してください。

   ```
   "repositoryFilters": [
       {
       "title": "Document state",
       "property": "jcr:content/metadata/docstate",
       "children": [
           {
           "title": "Draft",
           "value": "Draft"
           },
           {
           "title": "Edit",
           "value": "Edit"
           },
           {
           "title": "In-Review",
           "value": "In-Review"
           },
           {
           "title": "Approved",
           "value": "Approved"
           },
           {
           "title": "Reviewed",
           "value": "Reviewed"
           },
           {
           "title": "Done",
           "value": "Done"
           }
       ]
       }
   ]
   ```

   このスニペットは、Experience Manager Guidesで使用できるデフォルトのドキュメント状態フィルターを表します。

1. 組織のワークフローに基づいて、フィルター値をカスタマイズできます。 例えば、カスタムドキュメント状態&#x200B;**保留中**&#x200B;を追加するには、`children`の下に次のエントリを挿入します。

   ```
   {
       "title": "Pending",
       "value": "Pending"
   }
   ```

1. 更新したら、ファイルを保存してアップロードします。

設定されたフィルターは、ホームページのリポジトリの&#x200B;**フィルター** パネルに表示されます。

**親トピック：**[ Web エディターのカスタマイズ ](customize-overview.md)
