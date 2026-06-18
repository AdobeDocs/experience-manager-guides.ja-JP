---
title: ファイル参照ダイアログのフィルターの設定
description: ファイル参照ダイアログのフィルターの設定方法を説明します
exl-id: 1ef09820-3b18-4762-b177-4d40926e21f0
feature: Web Editor Configuration
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/7AzojwFiEQkwYtDnwsHhmMOwSCG3vWgsZW5oXZRsTFw
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2: id: b0521e56-a0b2-40b6-bf47-ebc98751f9ba
role_v2: id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
topic_v2: id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
source-git-commit: cc73b81787a3c3dbe8390d93e558064327e59965
workflow-type: tm+mt
source-wordcount: 323
ht-degree: 0%

---

# ファイル参照ダイアログのフィルターの設定 {#id20CIL7009GN}

エディターでの作業中に、ファイル参照ダイアログを使用して、画像、参照、キー参照などの要素を挿入する必要があります。 デフォルトのファイル参照ダイアログには、ファイルフィルタリングオプションはありません。 必要なファイルに簡単かつ迅速にアクセスできる独自のフィルターを追加できます。

ファイル参照ダイアログにカスタムファイルフィルタリングオプションを追加するには、次の手順を実行します。

1. AEMにログインし、CRXDE Lite モードを開きます。

1. 次の場所にあるデフォルトの設定ファイルに移動します。

   `/libs/fmdita/clientlibs/clientlibs/xmleditor/ui_config.json`

1. デフォルト設定ファイルのコピーを次の場所に作成します。

   `/apps/fmdita/xmleditor/ui_config.json`

1. に移動し、`apps` ノードの`ui_config.json` ファイルを開いて編集します。

1. `ui_config.json` ファイルで、追加するフィルターの定義を追加します。

   次のコードスニペットは、DITA ファイルと画像ファイルという2つのフィルタリングオプションを追加する方法を示しています。

   ```json
   "browseFilters": [
       {
         "title": "DITA Files",
         "property": "jcr:content/metadata/dita_class",
         "operation": "exists"
       },
       {
         "title": "Image Files",
         "property": "jcr:content/metadata/dc:format",
         "value": [        
           "image/jpeg",
           "image/gif",
           "image/png"
         ]
       }
   ]
   ```

   上記のコードスニペットでは、最初のフィルターはDITA ファイル用です。 フィルター定義は、次のパラメーターを使用します。

   - **title:** フィルターの表示名。 このタイトルは、ファイル参照ダイアログにフィルタリングオプションとして表示されます。

   - **プロパティ：** ファイルのメタデータで一致するプロパティ。 例えば、プロパティに`dita_class` メタデータが含まれているファイルのみを許可するには、プロパティフィルターは「`jcr:content/metadata/dita_class`」を値として取ります。

   - **操作：** プロパティ パラメーターで指定された値の存在に一致するように「`exists`」を指定します。

   2つ目のフィルターは画像ファイル用です。 パラメーターは、`value` パラメーターを除く最初のフィルターと似ています。 `value` パラメーターは、画像タイプの配列を値として受け取ります。 value パラメーターで指定されたすべてのファイルタイプが検索され、ファイル参照ダイアログに表示されます。その他のすべてのファイルタイプは無視されます。

1. *ui\_config.json* ファイルを保存し、エディターを再読み込みします。

   ファイル参照ダイアログを起動すると、ui\_config.json ファイルで設定されたフィルターオプションが表示されます。

   ![](assets/file-browse-custom-filters.png){width="300"}
