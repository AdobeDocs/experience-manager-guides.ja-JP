---
title: ドキュメント状態フィルターの設定
description: ドキュメント状態フィルターの設定方法を学ぶ
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 4942b914ff278ebcf09d00da32d6f9c7cc4d7ff9
workflow-type: tm+mt
source-wordcount: '251'
ht-degree: 0%

---

# ドキュメント状態フィルターの設定

Adobe Experience Manager Guidesには、現在のドキュメントステートに基づいてファイルを検索する機能が用意されています。 フィルター検索を使用して、リポジトリインターフェイスからファイルを検索し、ファイルを参照できます。

ドキュメント状態フィルターを設定するには、以下の手順を実行します。

1. Adobe Experience Managerに管理者としてログインします。
1. 上部の「Adobe Experience Manager」リンクを選択し、「**ツール**」を選択します。
1. ツールのリストから「**ガイド**」を選択し、「**フォルダープロファイル**」を選択します。
1. **グローバルプロファイル** タイルを開きます。 また、これらの変更をグローバルではなく特定のフォルダーにのみ適用する場合は、特定のフォルダープロファイルタイルを選択することもできます。
1. **XML エディター設定** に移動します。
1. 上部の **編集** アイコンを選択します。
1. **ダウンロード** アイコンを選択して、ローカルシステムに `ui\_config.json` ファイルをダウンロードします。
ダウンロードした `ui\_config.json` ファイルで、次の節を参照してください。

       ```
       &quot;repositoryFilters&quot;: [
       {
       &quot;title&quot;: &quot;ドキュメントの状態&quot;,
       &quot;property&quot;: &quot;jcr:content/metadata/docstate&quot;,
       &quot;children&quot;: [
       {
       &quot;title&quot;: &quot;Draft&quot;,
       &quot;value&quot;: &quot;Draft&quot;
       },
       {
       &quot;title&quot;: &quot;Edit&quot;,
       &quot;value&quot;: &quot;編集&quot;
       },
       {
       &quot;title&quot;: &quot;In-Review&quot;,
       &quot;value&quot;: &quot;In-Review&quot;
       },
       {
       &quot;title&quot;: &quot;Approved&quot;,
       &quot;value&quot;: &quot;Approved&quot;
       },
       {
       &quot;title&quot;: &quot;Reviewed&quot;,
       &quot;value&quot;: &quot;Reviewed&quot;
       },
       {
       &quot;title&quot;: &quot;Done&quot;,
       &quot;value&quot;: &quot;Done&quot;
       }
       ]
       }
       ]
       ```

   このスニペットは、Experience Manager Guidesで使用できるデフォルトのドキュメント状態フィルターを表します。

1. 組織のワークフローに応じて、フィルター値をカスタマイズできます。 例えば、カスタムのドキュメントの状態 **保留中** を追加するには、`children` の下に次のエントリを挿入します。

   ```
   {
       "title": "Pending",
       "value": "Pending"
   }
   ```

1. 更新したら、ファイルを保存してアップロードします。

設定したフィルターは、ホームページのリポジトリの **フィルター** パネルに表示されます。

**親トピック：**&#x200B;[&#x200B; Web エディタのカスタマイズ &#x200B;](conf-web-editor.md)
