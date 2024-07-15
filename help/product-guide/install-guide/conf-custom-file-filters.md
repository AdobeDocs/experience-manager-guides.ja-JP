---
title: ファイル参照ダイアログのフィルターの設定
description: ファイル参照ダイアログのフィルターを設定する方法を説明します
exl-id: 1ef09820-3b18-4762-b177-4d40926e21f0
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '325'
ht-degree: 0%

---

# ファイル参照ダイアログのフィルターの設定 {#id20CIL7009GN}

Web エディターで作業している間は、ファイル参照ダイアログを使用して、画像、参照、キー参照などの要素を挿入する必要があります。 デフォルトのファイル参照ダイアログには、ファイルフィルタリングオプションは用意されていません。 必要なファイルに簡単にすばやくアクセスできる独自のフィルターを追加できます。

次の手順を実行して、カスタムのファイルフィルタリングオプションをファイルの参照ダイアログに追加します。

1. AEMにログインし、CRXDE Liteモードを開きます。

1. 次の場所にあるデフォルトの設定ファイルに移動します。

   `/libs/fmdita/clientlibs/clientlibs/xmleditor/ui_config.json`

1. デフォルトの設定ファイルのコピーを次の場所に作成します。

   `/apps/fmdita/xmleditor/ui_config.json`

1. に移動し、`apps` ノードの `ui_config.json` ファイルを開いて編集します。

1. `ui_config.json` ファイルに、追加するフィルターの定義を追加します。

   次のコードスニペットは、DITA ファイルと画像ファイルという 2 つのフィルタリングオプションを追加する方法を示しています。

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

   上記のコードスニペットでは、最初のフィルタは DITA ファイル用です。 フィルター定義には、次のパラメーターを使用します。

   - **タイトル：**   フィルターの表示名。 このタイトルは、ファイルの参照ダイアログでフィルタリングオプションとして表示されます。

   - **プロパティ：**   ファイルのメタデータ内で一致させるプロパティ。 例えば、プロパティに `dita_class` メタデータを持つファイルのみを許可するには、プロパティフィルターの値として「`jcr:content/metadata/dita_class`」を使用します。

   - **operation:**   プロパティパラメーターで指定された値の存在に一致するように「`exists`」を指定します。

   2 つ目のフィルターは画像ファイル用です。 パラメーターは、`value` パラメーターを除き、最初のフィルターに似ています。 `value` パラメーターは、画像型の配列を値として受け取ります。 value パラメータで指定されたすべてのファイル タイプが検索され、ファイル参照ダイアログに表示されます。その他のファイル タイプはすべて無視されます。

1. *ui\_config.json* ファイルを保存し、web エディターをリロードします。

   ファイルの参照ダイアログを起動すると、ui\_config.json ファイルで設定されたフィルターオプションが表示されます。

   ![](assets/file-browse-custom-filters.png){width="300" align="left"}
