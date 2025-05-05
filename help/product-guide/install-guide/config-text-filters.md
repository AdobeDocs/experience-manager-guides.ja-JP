---
title: テキストフィルターの設定
description: テキストフィルターの設定方法を学ぶ
exl-id: 180e4ab5-5259-4a00-ac3c-bb1d6814ce0d
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '367'
ht-degree: 0%

---

# テキストフィルターの設定 {#id21BPD0FK0XA}

AEM Guidesには、AEM リポジトリーの選択されたパスにあるファイルのテキストを検索する機能があります。 フィルター検索を使用して、リポジトリパネルからファイルを検索したり、ファイルを参照したりできます。 Web エディターで作業している間は、ファイル参照ダイアログを使用して、画像、参照、キー参照などの要素を挿入する必要があります。

デフォルトでは、一部の拡張フィルターを使用して、AEM リポジトリー内のファイルを検索できます。 選択したパスに存在するすべての DITA ファイルまたは非 DITA ファイルをフィルタできます。 また、DITA エレメントの属性で特定の値を検索することもできます。 また、指定したユーザーがチェックアウトしているファイルを検索することもできます。

>[!NOTE]
>
> また、グローバルプロファイルを設定して、検索用にさらにフィルターを追加することもできます。

次の手順を実行して、テキストフィルターを設定します。

1. Adobe Experience Managerに管理者としてログインします。
1. 上部の **Adobe Experience Manager** リンクをクリックし、「**ツール**」を選択します。
1. ツールのリストから「**ガイド**」を選択し、「**フォルダープロファイル**」をクリックします。
1. **グローバルプロファイル** タイルをクリックします。
1. 「**XML エディター設定**」をクリックします。
1. 上部の **編集** アイコンをクリックします。
1. ui\_config.json ファイルをダウンロードします。
1. ファイルでフィルターを設定します。 次の例に示すように、カスタムフィルターを追加することもできます。

   次のコードスニペットは、フィルタリングオプション DITA ファイル、非 DITA、DITA エレメント、およびチェックアウトしたファイルを追加する方法を示しています。 また、カスタムフィルター – タグも含まれています。

   ```json
   [
     {
       "title": "DITA files",
       "property": "jcr:content/metadata/dita_class",
       "operation": "like",
       "children": [
         {
           "title": "DITA Topics",
           "value": "- topic/topic",
           "checked": true
         },
         {
           "title": "DITA Maps",
           "value": "- map/map",
           "checked": true
         }
       ]
     },
     {
       "title": "DITA elements",
       "property": "jcr:content/ditameta",
       "widgetId": "dita_filter",
       "operation": "like"
     },
     {
       "title": "Checked out by",
       "property": "jcr:content/cq:drivelock",
       "operation": "like",
       "itemConfig": {
         "component": "textfield",
         "placeholder": "Checked out by"
       },
       "children": [
         {
           "title": "Check out"
         }
       ]
     },
     {
       "title": "Tags",
       "property": "jcr:content/metadata/cq:tags",
       "itemConfig": {
         "component": "textfield",
         "placeholder": "Enter Tag"
       },
       "children": [
         {
           "title": "Tags"
         }
       ]
     }
   ]
   ```

   上記のコードスニペットでは、最初のフィルタは DITA ファイル用です。 フィルター定義には、次のパラメーターを使用します。

   - **タイトル：** フィルターの表示名。 このタイトルは、ファイルの参照ダイアログでフィルタリングオプションとして表示されます。

   - **プロパティ：** ファイルのメタデータ内で一致するプロパティ。 例えば、プロパティに dita\_class メタデータを含むファイルのみを許可するには、プロパティフィルターの値として「jcr:content/metadata/dita\_class」を使用します。

   - **操作** プロパティパラメーターで指定された値の存在と一致するように「exists」を指定します

1. 追加したフィルターを含む、更新された ui\_config.json ファイルをアップロードします。

設定したフィルターは、フィルターパネルで使用できます。

**親トピック：**&#x200B;[ Web エディタのカスタマイズ ](conf-web-editor.md)
