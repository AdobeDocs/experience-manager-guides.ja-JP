---
title: テキストフィルターの設定
description: テキストフィルターの設定方法を学ぶ
exl-id: 180e4ab5-5259-4a00-ac3c-bb1d6814ce0d
feature: Web Editor Configuration
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 3aadc59f5034828cf319992b7acb32d5a88eaf93
workflow-type: tm+mt
source-wordcount: '366'
ht-degree: 0%

---

# テキストフィルターの設定 {#id21BPD0FK0XA}

AEM Guidesには、AEM リポジトリの選択したパスにあるファイル内のテキストを検索する機能が用意されています。 フィルター検索を使用して、リポジトリパネルからファイルを検索したり、ファイルを参照したりできます。 Web エディターでの作業中に、ファイル参照ダイアログを使用して、画像、参照、キー参照などの要素を挿入する必要があります。

デフォルトでは、一部の拡張フィルターを使用して、AEM リポジトリ内のファイルを検索できます。 選択したパスに存在するすべてのDITA ファイルまたは非DITA ファイルをフィルタリングできます。 DITA エレメントの属性で特定の値を検索することもできます。 指定したユーザーがチェックアウトしたファイルを探すこともできます。

>[!NOTE]
>
> また、グローバルプロファイルを設定し、検索用にフィルターを追加することもできます。

テキストフィルターを設定するには、次の手順を実行します。

1. Adobe Experience Managerに管理者としてログインします。
1. 上部の&#x200B;**Adobe Experience Manager** リンクをクリックし、**ツール**&#x200B;を選択します。
1. ツールのリストから&#x200B;**ガイド**&#x200B;を選択し、**フォルダープロファイル**&#x200B;をクリックします。
1. 「**グローバルプロファイル**」タイルをクリックします。
1. **XML エディター設定**&#x200B;をクリックします。
1. 上部の&#x200B;**編集** アイコンをクリックします。
1. ui\_config.json ファイルをダウンロードします。
1. ファイル内のフィルターを設定します。 次の例に示すように、カスタムフィルターを追加することもできます。

   次のコードスニペットは、フィルタリングオプション DITA ファイル、非DITA、DITA エレメントおよびファイルによるチェックアウトを追加する方法を示しています。 また、カスタムフィルター – Tagsも含まれています。

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

   上記のコードスニペットでは、最初のフィルターはDITA ファイル用です。 フィルター定義は、次のパラメーターを使用します。

   - **タイトル：** フィルターの表示名。 このタイトルは、ファイル参照ダイアログにフィルタリングオプションとして表示されます。

   - **プロパティ：** ファイルのメタデータで一致するプロパティ。 例えば、プロパティにdita\_class メタデータを持つファイルのみを許可するには、プロパティフィルターは「jcr:content/metadata/dita\_class」を値として取ります。

   - **操作** プロパティ パラメーターで指定された値の存在と一致するように「存在する」を指定します

1. 追加したフィルターを含む更新されたui\_config.json ファイルをアップロードします。

設定されたフィルターは、フィルターパネルで使用できます。

**親トピック：**[ Web エディターのカスタマイズ ](conf-web-editor.md)
