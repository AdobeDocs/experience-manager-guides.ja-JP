---
title: ファイル参照ダイアログのフィルターの設定
description: ファイル参照ダイアログのフィルターを設定する方法を説明します
exl-id: 1ef2cec8-2e77-40c1-9ed2-324048bf65fb
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '376'
ht-degree: 0%

---

# ファイル参照ダイアログのフィルターの設定 {#id20CIL7009GN}

Web エディターで作業している間は、ファイル参照ダイアログを使用して、画像、参照、キー参照などの要素を挿入する必要があります。 デフォルトのファイル参照ダイアログには、ファイルフィルタリングオプションは用意されていません。 必要なファイルに簡単にすばやくアクセスできる独自のフィルターを追加できます。

次の手順を実行して、カスタムのファイルフィルタリングオプションをファイルの参照ダイアログに追加します。

1. UI 設定ファイルをダウンロードするには、管理者としてAdobe Experience Managerにログインします。

1. 上部の「Adobe Experience Manager」リンクをクリックし、「**ツール**」を選択します。
1. ツールのリストから「**ガイド**」を選択し、「**フォルダープロファイル**」をクリックします。
1. **グローバルプロファイル** タイルをクリックします。
1. 「**XML エディター設定**」タブを選択し、上部の「**編集** アイコンをクリックします
1. **ダウンロード** アイコンをクリックして、ui\_config.json ファイルをローカルシステムにダウンロードします。 その後、ファイルに変更を加えて、同じものをアップロードできます。
1. `ui_config.json` ファイルに、追加するフィルターの定義を追加します。

   次のコードスニペットは、DITA ファイルと画像ファイルという 2 つのフィルタリングオプションを追加する方法を示しています。

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

   上記のコードスニペットでは、最初のフィルタは DITA ファイル用です。 フィルター定義には、次のパラメーターを使用します。

   タイトル
:   フィルターの表示名。 このタイトルは、ファイルの参照ダイアログでフィルタリングオプションとして表示されます。

   プロパティ
:   ファイルのメタデータ内で一致させるプロパティ。 例えば、プロパティに `dita_class` のメタデータを持つファイルのみを許可するには、プロパティフィルターの値として「`jcr:content/metadata/dita_class`」を使用します。

   操作
:   プロパティパラメーターで指定された値の存在に一致するように「`exists`」を指定します。

   2 つ目のフィルターは画像ファイル用です。 パラメーターは、`value` パラメーターを除き、最初のフィルターに似ています。 `value` パラメーターは、画像型の配列を値として受け取ります。 value パラメータで指定されたすべてのファイル タイプが検索され、ファイル参照ダイアログに表示されます。その他のファイル タイプはすべて無視されます。

1. *ui\_config.json* ファイルを保存してアップロードします。 次に、Web エディターをリロードします。

   ファイルの参照ダイアログを起動すると、ui\_config.json ファイルで設定されたフィルターオプションが表示されます。

   ![](assets/file-browse-custom-filters.png)


**親トピック：**&#x200B;[ Web エディタのカスタマイズ ](conf-web-editor.md)
