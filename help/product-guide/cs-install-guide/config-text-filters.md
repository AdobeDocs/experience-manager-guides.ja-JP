---
title: テキストフィルターの設定
description: テキストフィルターの設定方法を説明します
exl-id: 0963606c-010e-4a72-b7bf-850b86b34a84
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '389'
ht-degree: 0%

---

# テキストフィルターの設定 {#id21BPD0FK0XA}

AEMガイドは、AEMリポジトリの選択されたパスに存在するファイル内のテキストを検索する機能を提供します。 フィルター検索を使用して、リポジトリパネルからファイルを検索したり、ファイルを参照したりできます。 Web エディターで作業を行う際は、ファイル参照ダイアログを使用して、画像、参照、キー参照などの要素を挿入する必要があります。

デフォルトでは、いくつかの拡張フィルターを使用してAEMリポジトリ内のファイルを検索できます。 選択したパスに存在するすべての DITA ファイルまたは非 DITA ファイルをフィルターできます。 また、DITA 要素の属性内の特定の値を検索することもできます。 また、指定したユーザーがチェックアウトしたファイルを探すこともできます。

>[!NOTE]
>
> また、グローバルプロファイルを設定し、検索用にさらにフィルターを追加することもできます。

次の手順を実行して、テキストフィルターを設定します。

1. 管理者としてAdobe Experience Managerにログインします。
1. 上部の「 Adobe Experience Manager 」リンクをクリックし、「 」を選択します。 **ツール**.
1. 選択 **ガイド** ツールのリストから、 **フォルダープロファイル**.
1. をクリックします。 **Global Profile** タイル。
1. クリック： **XML エディターの設定**.
1. クリック： **編集** アイコンをクリックします。
1. 次をクリック： **ダウンロード** アイコンを使用して、ui\_config.json ファイルをローカルシステムにダウンロードします。 その後、ファイルに変更を加えてから、同じファイルをアップロードできます。
   1. ファイルでフィルターを設定します。 また、次の例に示すように、カスタムフィルターを追加できます。

      次のコードスニペットは、DITA ファイル、非 DITA、DITA 要素およびファイルによるチェックアウトのフィルタリングオプションを追加する方法を示しています。 また、カスタムフィルターの —Tags も含まれます。

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

      上記のコードスニペットでは、最初のフィルターは DITA ファイル用です。 フィルター定義では、次のパラメーターを取ります。

      ****タイトル****：フィルターの表示名。 このタイトルは、ファイル参照ダイアログでフィルタリングオプションとして表示されます。

      ****プロパティ****：ファイルのメタデータで一致させるプロパティ。 例えば、プロパティに dita\_class メタデータを持つファイルのみを許可する場合、プロパティフィルターは値として「jcr:content/metadata/dita\_class」を取ります。

      ****操作&#x200B;**:**プロパティパラメーターで指定された値が存在するかどうかを調べるには、「exists」を指定します。

1. 追加したフィルターを含む、更新された ui\_config.json ファイルをアップロードします。

設定済みのフィルターは、フィルターパネルで使用できます。

**親トピック：**[ Web エディタのカスタマイズ](conf-web-editor.md)
