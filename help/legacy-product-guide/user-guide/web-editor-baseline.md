---
title: Web エディターでのベースラインの作成と管理
description: AEM Guidesのweb エディターで、ベースラインを作成および管理できます。 ラベルに基づいてベースラインを作成し、ベースラインにフィルターを適用する方法を説明します。
feature: Authoring, Features of Web Editor, Publishing
role: User
hide: true
exl-id: f43bc3ae-b7b6-4a8c-b42d-28ec02d0d1d6
source-git-commit: a70b3ce942b3e69445ad1d7ba6c8f7542e0ff176
workflow-type: tm+mt
source-wordcount: '1707'
ht-degree: 0%

---

# Web エディターでのベースラインの作成と管理 {#id223MB0ZF043}

>[!TIP]
>
> AEM Guides as a Cloud Service 3月リリース以降にアップグレードした場合は、Web エディターのこのベースライン機能を使用することをお勧めします。

AEM Guidesには、Web エディター内に統合されたベースライン機能が用意されています。この機能を使用すると、ベースラインを作成し、様々なバージョンのトピックを公開または翻訳できます。 また、同じDITA マップの複数の出力プリセットを並行して公開することもできます。

## ベースラインの作成

Web エディターからベースラインを作成するには、次の手順を実行します。

1. リポジトリーパネルで、マップビューでDITA マップファイルを開きます。
1. 「**管理**」タブをクリックします。 **ベースライン** パネルには、DITA マップのベースラインが表示されます。

   ![ ベースラインパネル ](images/baseline-manage.png){width="800" align="left"}

1. **ベースライン** パネルで、右上の「+」アイコンを選択して、ベースラインの作成を開始します。
1. ベースラインの名前を&#x200B;**名前**&#x200B;に入力します。
1. **構成**&#x200B;では、**手動アップデート** オプションまたは&#x200B;**自動アップデート** オプションのいずれかを選択できます。

   **手動アップデート**：特定の日時に利用可能なトピックと参照コンテンツの特定のバージョン、またはトピックのバージョンに対して定義されたラベルを使用して、静的ベースラインを手動で作成できます。

   - **に基づいてバージョンを選択し、**&#x200B;で次のいずれかのオプションを選択します。


      1. **日付** &lt; タイムスタンプ\>：指定した日時のトピックのバージョンを選択します。
      1. **ラベル**：適用されたラベルに従ってトピックを選択するには、このオプションを選択します。 トピックにラベルが指定されている場合、そのラベルはドロップダウンに一覧表示されます。 リストからラベルを選択できます。 テキストボックスにラベルを追加することもできます。

         静的ベースラインの直接参照の場合、ラベルは最新の保存済みバージョンのマップから取得されます。 例えば、トピック Aのバージョン 1.0と1.1に対してラベル `Label Release 1.0`と`Label Release 1.1`を作成し、バージョン 1.0として保存されたマップにトピック Aを追加した場合です。 In this case, you can view the labels `Label Release 1.0` and `Label Release 1.1` in the dropdown for static baseline labels.


         When you select **Label,** you can choose the direct and indirect references.
         - For direct references within the DITA map, you are given an option to use the latest version of topics that do not have the specified label applied to them.

           >[!NOTE]
           >
           > If you enter a label that does not exist and select the option **Do not create a baseline** then the baseline creation fails and gives an error message near the baseline name in the Baseline panel.

         - For indirect references within the DITA map, you are given an additional option to use the latest version of topics that do not have the specified label applied on them. You can also choose to **Pick Automatically** for the referenced content, and the system automatically picks the version of the referenced content corresponding to the version of the content in which it is referenced.

         日付としてラベルまたはバージョンを選択すると、マップ内のすべての参照トピックとメディアファイルが適切に選択されます。 このトピックの選択は、ユーザーインターフェイスには表示されませんが、バックエンドに保存されます。

   **Automatic update**: Select this option for baseline creation to automatically pick the topics according to the label applied to them.

   Baselines created using the automatic update configuration are updated dynamically. If you generate a baseline, download a baseline, or create a translation project using a baseline, the files are picked dynamically based on the updated labels. For example, if you have used version 1.2 of a topic with Label Release 1.0 for the baseline and later updated version 1.5 with Label Release 1.0, the baseline will be updated dynamically, and version 1.5 will be used.

   ![Create a baseline](images/dynamic-baseline.png){width="300" align="left"}

   - **Labels**: If the topics have labels specified for them,  then use the **Labels** dropdown to choose from the [listed labels](#labels-list).
The labels selected first are given higher priority over the later ones.

     >[!NOTE]
     >
     >While the labels are being pulled a loader appears, and the dropdown is disabled.

     For dynamic baselines, the labels are pulled from the latest saved version and the current working copy of the map. For example, if you have created labels   `Label Release A.1.0 ` and `Label Release A.1.1` for versions 1.0 and 1.1 of Topic A and labels `Label Release B.1.0` and `Label Release B.1.1` for versions 1.0 and 1.1 of Topic B . Then you can add Topic A to Map A in version 1.0 and Topic B to Map A in 1.0* (working copy). In this case, you can view  `Label Release A.1.0 `, `Label Release A.1.1`, `Label Release B.1.0`,  and `Label Release B.1.1` in the dropdown of dynamic baseline labels.

1. **Indirect References**: For indirect references within the DITA map, you are given the following options:

   - **Pick automatically**: You can choose to **Pick Automatically** for the referenced content, and the system automatically picks the version of the referenced content corresponding to the version of the content in which it is referenced.

   - **Use selected label**: You can create a baseline with the selected label defined for a version of topics.
   - **Use the latest version or the working copy**: Use the latest version of topics that do not have the specified label applied on them, or if no version has been created, then use the working copy of the topics to create the baseline.
1. 「**適用**」をクリックします。

The baseline is created. ベースラインの作成は非同期で行われるので、Web エディター内の他のファイルを引き続き操作できます。 ベースラインを作成すると、ベースラインが作成されたことを確認するポップアップメッセージが表示され、同じベースラインのインボックス通知も受け取ります。

## ベースラインの管理

ベースラインダッシュボードの様々な機能を使用して、既存のベースラインを管理できます。

- ベースラインパネルのテキストボックスを使用して、既存のベースラインを検索できます。 「**フィルターを適用**」アイコンを使用して、すべてのベースラインを表示するか、作成ステータスが「成功」、「進行中」、「失敗」のベースラインを一覧表示します。
- ベースラインパネルの&#x200B;**更新** アイコンを使用して、すべてのベースラインを再確認し、マップビューで開いたDITA マップのベースラインの新しいリストを表示します。
- 既存の静的ベースラインの内容を表示または編集するには、**ベースライン** パネルのリストからベースラインをダブルクリックします。 中央のベースライン編集ウィンドウには、DITA マップファイル、マップの内容またはトピック、参照コンテンツが表示されます。

  >[!NOTE]
  >
  >静的ベースラインの編集操作は、参照変更が少ない場合にのみ推奨されます。 すべての参照を再計算する必要があるため、メイン DITA マップのバージョンを変更する場合は、編集操作はお勧めしません。 これにより、大規模なDITA マップのベースライン更新エラーが発生する可能性があります。 大きなDITA マップの場合は、新しいベースラインを作成したり、ベースラインのプロパティを編集したりできます。
  >
  >動的ベースラインの場合の編集操作では、動的ベースラインの参照が実行時にラベルを使用して生成されるため、ベースラインのプロパティを編集できます。

  ベースラインの![ オプション ](images/baseline-options.png){width="800" align="left"}



  オプションメニューから、ベースラインに対して次の操作を実行することもできます。

### ベースラインの複製

ベースラインを複製し、必要に応じて変更できます。
![ ベースラインの複製](images/baseline-duplicate.png){width="300" align="left"}
*ラベルに基づいてベースラインを複製するか、正確なコピーを作成します。*

1. ベースラインのオプションメニューから「**複製**」を選択します。 「**ベースラインを複製**」ダイアログボックスが開きます。
>[!NOTE]
>
> ベースラインのデフォルト名は`<selected baseline name>`_suffixです（sample-baseline_1など）。 必要に応じて名前を変更できます。

   **に基づいてバージョンを選択**&#x200B;すると、**正確なコピー** オプションまたは&#x200B;**ラベル** オプションのいずれかを選択できます。

   - **正確なコピー**: Experience Manager Guidesは、すべてのトピックの同じバージョンを選択し、複製されたベースラインの正確なコピーを作成します。
   - **ラベル**: ドロップダウンを使用すると、リストされている[ ラベル ](#labels-list)のいずれかを選択できます。 Experience Manager Guidesは、選択したラベルが定義されているトピックのバージョンを選択し、残りのトピックについては、複製されたベースラインからバージョンを選択します。 例えば、ドロップダウンからラベル `Release 1.0`を選択すると、このラベルを定義したトピックのバージョンが選択されます。 その他のすべてのトピックについては、複製されたベースラインからバージョンを選択します。
1. 「**複製**」をクリックします。

- **既存のベースラインの名前を変更**&#x200B;するか、**削除**&#x200B;します。
- 静的ベースラインの「**ラベルを管理**」オプションから、既存のラベルを追加、削除、または変更します。 管理者が定義済みのラベルを設定している場合は、ラベルを追加ドロップダウンリストにラベルが表示されます。 ラベルの追加について詳しくは、[ ラベルの使用](web-editor-use-label.md#)を参照してください。

  >[!NOTE]
  >
  > ラベルを追加または削除するプロセスは非同期で実行されるため、Web エディター内の他のファイルを引き続き操作できます。 ラベルが追加または削除されると、ラベルが追加または削除されたことを確認するポップアップメッセージが表示され、同じラベルのインボックス通知も受け取ります。

- ベースラインの作成中に設定した既存の静的ベースラインの&#x200B;**プロパティ**&#x200B;を編集します。
- **ベースラインの書き出し** オプションを使用して、Microsoft Excel ファイルでベースラインのスナップショットを書き出します。


### ラベルのリスト {#labels-list}

ドロップダウンにリストされているラベルは、次の条件に基づいています。
- ラベルは、（ベースラインが作成される） DITA マップ内のトピックのいずれかのバージョンに追加する必要があります。
- また、ラベルの選択には、DITA マップの第1 レベルの参照（トピックまたはサブマップ）のみが考慮されます。



## ベースラインフィルター

**ベースラインフィルター** パネルの「フィルター」アイコンを使用すると、ベースライン編集ウィンドウで開いたベースラインにフィルターを適用できます。

![ ベースラインフィルター](images/baseline-filter.png){width="300" align="left"}

- ファイル名またはファイルの場所に基づいてファイルをフィルタリングします。
- ファイルタイプ、参照タイプなど、様々な列の値に基づいてファイルをフィルタリングします。
- ベースライン編集ウィンドウに表示する列を選択します。

>[!NOTE]
>
> 列の見出しをクリックし、ベースライン編集ウィンドウの列に基づいてファイルを並べ替えることができます。

**ベースラインの保存またはリセット**

ベースラインを編集したら、上部の「**保存**」ボタンをクリックして、ベースラインへの変更を保存できます。 変更を保存してベースラインをリセットしない場合は、**リセット** ボタンをクリックできます。 「**リセット**」ボタンをクリックすると、保存されていない変更が失われるという警告が表示されます。

**親トピック：**[ Web エディターの操作](web-editor.md)
