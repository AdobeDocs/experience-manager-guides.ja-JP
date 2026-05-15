---
title: テキストフィルターの設定
description: テキストフィルターの設定方法を学ぶ
exl-id: 0963606c-010e-4a72-b7bf-850b86b34a84
feature: Web Editor Configuration
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/kni90T4QnDideo-hhxJZRje3H4WTEvBfwEaLa2zOzcg
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2:
  - id: b0521e56-a0b2-40b6-bf47-ebc98751f9ba
  - id: b1ef4d86-3917-4b76-a0bc-4a4771f9b3b0
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 389
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
1. 上部のAdobe Experience Manager リンクをクリックし、**ツール**&#x200B;を選択します。
1. ツールのリストから&#x200B;**ガイド**&#x200B;を選択し、**フォルダープロファイル**&#x200B;をクリックします。
1. 「**グローバルプロファイル**」タイルをクリックします。
1. **XML エディター設定**&#x200B;をクリックします。
1. 上部の&#x200B;**編集** アイコンをクリックします。
1. **ダウンロード** アイコンをクリックして、ui\_config.json ファイルをローカルシステムにダウンロードします。 その後、ファイルに変更を加えて、同じものをアップロードできます。
   1. ファイル内のフィルターを設定します。 次の例に示すように、カスタムフィルターを追加することもできます。

      次のコードスニペットは、フィルタリングオプション DITA ファイル、非DITA、DITA エレメントおよびファイルによるチェックアウトを追加する方法を示しています。 また、カスタムフィルター – Tagsも含まれています。

      ```
       "operation":"like"
                                      },
                                      {
                                      "title":"Checked out by",
                                      "property":"jcr:content/cq:drivelock",
                                      "operation":"like",
                                      "itemConfig":{
                                      "component":"textfield",
                                      "placeholder":"Checked out by"
                                      },
                                      "children":[
                                      {
                                      "title":"Check out"
                                      }
                                      ]
                                      },
                                      {
                                      "title":"Tags",
                                      "property":"jcr:content/metadata/cq:tags",
                                      "itemConfig":{
                                      "component":"textfield",
                                      "placeholder":"Enter Tag"
                                      },
                                      "children":[
                                      {
                                      "title":"Tags"
                                      }
                                      ]
                                      }
                                      ]
      ```

      上記のコードスニペットでは、最初のフィルターはDITA ファイル用です。 フィルター定義は、次のパラメーターを使用します。

      **&#x200B;**&#x200B;タイトル&#x200B;**&#x200B;**: フィルターの表示名。 このタイトルは、ファイル参照ダイアログにフィルタリングオプションとして表示されます。

      **&#x200B;**&#x200B;プロパティ&#x200B;**&#x200B;**: ファイルのメタデータで一致するプロパティ。 例えば、プロパティにdita\_class メタデータを持つファイルのみを許可するには、プロパティフィルターは「jcr:content/metadata/dita\_class」を値として取ります。

      **&#x200B;**&#x200B;操作&#x200B;**:**&#x200B;プロパティ パラメーターで指定された値の存在と一致するように「存在する」を指定します

1. 追加したフィルターを含む更新されたui\_config.json ファイルをアップロードします。

設定されたフィルターは、フィルターパネルで使用できます。

**親トピック：**&#x200B;[&#x200B; Web エディターのカスタマイズ &#x200B;](conf-web-editor.md)
