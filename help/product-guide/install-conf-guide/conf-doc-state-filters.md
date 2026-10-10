---
title: ドキュメント状態フィルターの設定
description: ドキュメント状態フィルターの設定方法を説明します
feature: Web Editor Configuration
role: Admin
level: Experienced
exl-id: 6dee8479-770f-48d7-9939-5035388d16d8
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
feature_v2:
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
    internal-label: Configuration
subfeature_v2:
  - id: b0521e56-a0b2-40b6-bf47-ebc98751f9ba
    internal-label: Web Editor configuration
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '218'
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

**親トピック：**[ エディターのカスタマイズ ](customize-overview.md)
