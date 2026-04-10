---
title: ファイル参照ダイアログのフィルターの設定
description: ファイル参照ダイアログのフィルターの設定方法を説明します
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '626'
ht-degree: 0%

---

# ファイル参照ダイアログのフィルターの設定

Web エディターでの作業中に、ファイル参照ダイアログを使用して、画像、参照、キー参照などの要素を挿入する必要があります。 デフォルトのファイル参照ダイアログには、ファイルフィルタリングオプションはありません。 必要なファイルに簡単かつ迅速にアクセスできる独自のフィルターを追加できます。

次のタブには、Experience Manager Guidesの設定に基づいて、ファイル参照ダイアログにカスタムファイルフィルタリングオプションを追加する手順が示されています。Cloud Serviceまたはオンプレミス。

>[!BEGINTABS]

>[!TAB Cloud Service]

1. UI設定ファイルをダウンロードするには、管理者としてAdobe Experience Managerにログインします。

1. 上部のAdobe Experience Manager リンクをクリックし、**ツール**&#x200B;を選択します。
1. ツールのリストから&#x200B;**ガイド**&#x200B;を選択し、**フォルダープロファイル**&#x200B;をクリックします。
1. 「**グローバルプロファイル**」タイルをクリックします。
1. **XML エディターの設定** タブを選択し、上部の&#x200B;**編集** アイコンをクリックします
1. **ダウンロード** アイコンをクリックして、ui\_config.json ファイルをローカルシステムにダウンロードします。 その後、ファイルに変更を加えて、同じものをアップロードできます。
1. `ui_config.json` ファイルで、追加するフィルターの定義を追加します。

   次のコードスニペットは、DITA ファイルと画像ファイルという2つのフィルタリングオプションを追加する方法を示しています。

   ```
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

   title
:   フィルターの表示名。 このタイトルは、ファイル参照ダイアログにフィルタリングオプションとして表示されます。

   プロパティ
:   ファイルのメタデータで一致するプロパティ。 例えば、プロパティに`dita_class` メタデータが含まれているファイルのみを許可するには、プロパティフィルターは「`jcr:content/metadata/dita_class`」を値として取ります。

   操作
:   プロパティパラメーターで指定された値の存在に一致するように「`exists`」を指定します。

   2つ目のフィルターは画像ファイル用です。 パラメーターは、`value` パラメーターを除く最初のフィルターと似ています。 `value` パラメーターは、画像タイプの配列を値として受け取ります。 value パラメーターで指定されたすべてのファイルタイプが検索され、ファイル参照ダイアログに表示されます。その他のすべてのファイルタイプは無視されます。

1. *ui\_config.json* ファイルを保存し、同じファイルをアップロードします。 次に、Web エディターをリロードします。

   ファイル参照ダイアログを起動すると、ui\_config.json ファイルで設定されたフィルターオプションが表示されます。

   ![](assets/file-browse-custom-filters.png)

>[!TAB  オンプレミス ]

1. AEMにログインし、CRXDE Lite モードを開きます。

1. 次の場所にあるデフォルトの設定ファイルに移動します。

   `/libs/fmdita/clientlibs/clientlibs/xmleditor/ui_config.json`

1. デフォルト設定ファイルのコピーを次の場所に作成します。

   `/apps/fmdita/xmleditor/ui_config.json`

1. に移動し、`ui_config.json` ノードの`apps` ファイルを開いて編集します。

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

   - **タイトル：**   フィルターの表示名。 このタイトルは、ファイル参照ダイアログにフィルタリングオプションとして表示されます。

   - **プロパティ：**   ファイルのメタデータで一致するプロパティ。 例えば、プロパティに`dita_class` メタデータが含まれているファイルのみを許可するには、プロパティフィルターは「`jcr:content/metadata/dita_class`」を値として取ります。

   - **操作：**   プロパティパラメーターで指定された値の存在に一致するように「`exists`」を指定します。

   2つ目のフィルターは画像ファイル用です。 パラメーターは、`value` パラメーターを除く最初のフィルターと似ています。 `value` パラメーターは、画像タイプの配列を値として受け取ります。 value パラメーターで指定されたすべてのファイルタイプが検索され、ファイル参照ダイアログに表示されます。その他のすべてのファイルタイプは無視されます。

1. *ui\_config.json* ファイルを保存し、Web エディターを再読み込みします。

   ファイル参照ダイアログを起動すると、ui\_config.json ファイルで設定されたフィルターオプションが表示されます。

   ![](assets/file-browse-custom-filters.png){width="300" align="left"}

>[!ENDTABS]


**親トピック：**[ Web エディターのカスタマイズ ](customize-overview.md)
