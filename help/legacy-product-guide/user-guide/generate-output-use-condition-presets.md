---
title: 条件プリセットの使用
description: AEM Guidesでの条件プリセットの使用について説明します。 AEMで条件プリセットを作成、編集、コピー、削除する方法について説明します。
feature: Publishing
role: User
hide: true
exl-id: 991179c7-186e-4b23-b918-248f596644ec
source-git-commit: a70b3ce942b3e69445ad1d7ba6c8f7542e0ff176
workflow-type: tm+mt
source-wordcount: '1213'
ht-degree: 2%

---

# 条件プリセットの使用 {#id1825FL004PN}

DITA トピックで属性を定義し、条件プリセットを使用して、最終的な出力で属性に対して何が起こるかを指定できます。 例えば、コンテンツにバージョン 1.0とバージョン 2.0として属性を追加し、条件プリセットを使用してリリース 1.0のバージョン 1.0を含め、バージョン 2.0を除外できます。 同様に、OS WindowsおよびOS Linuxの属性をコンテンツに追加し、オペレーティングシステムに応じて最終的な出力に関連するコンテンツを含めたり除外したりできます。

条件プリセットは、次の2つの方法で作成できます。

* Web エディターから：Web エディターからDITA マップの条件プリセットを作成および管理できます。
* マップダッシュボードから：マップダッシュボードからDITA マップの条件プリセットを作成および管理できます。


## Web エディターからの条件プリセット

Experience Manager Guidesでは、Web エディターから条件プリセットを管理し、出力プリセット内でそれらを使用して最終的な出力を生成できます。
Web エディターの**条件プリセット** ビューから、条件プリセットの作成と表示、属性の表示、現在のマップのアクションの管理を行うことができます。

<img src="images//manage-condtions-presets.png" alt= "web エディターのコンディションプリセット" width="800" border="1px">



### 条件プリセットの作成

**条件プリセット** ビューには、条件プリセットに関する詳細（属性、値、アクションなど）が表示されます。
トピックの条件プリセットを作成するには、次の手順を実行します。

1. **リポジトリ** パネルで、マップビューでDITA マップファイルを開きます。
1. 「**管理**」タブを選択します。
1. 左側の&#x200B;**条件プリセット**&#x200B;を選択します。 DITA マップに定義された条件プリセットのリストが表示されます。
1. **条件プリセット**&#x200B;の横にある「+」アイコンを選択して、**新しい条件プリセット** ダイアログを開きます。
1. プリセットの一意の名前を入力します。

   >[!NOTE]
   >
   > 名前フィールドが空の場合、または無効な文字または既存の条件プリセットと同じ名前を入力した場合は、エラーが表示されます。 ハイフン「 – 」またはアンダースコア「_」を区切り記号として使用できます。

1. 「**作成**」を選択します。
新しい条件プリセットがリストに追加されます。
1. 条件プリセットをダブルクリックして、属性とアクションを表示します。
**属性** パネルには、マップに存在する参照に追加されたすべての属性が表示されます。 右側のパネルには、条件プリセットに追加した条件のみが表示されます。
1. 属性を追加するには、次のいずれかの操作を行います。
   * 1つ以上の属性を選択して、その下のすべての値を条件プリセットに追加します。 例えば、`platform`属性を選択して、すべての値を追加できます。
   * 1つ以上の属性値を選択して、条件プリセットに追加します。 例えば、platform属性の`Unix`と`Win`の値を選択できます
   * 任意の属性と値のペアを選択し、中央パネルにドラッグします。 例えば、platform属性の`Unix`値を選択してドラッグできます。
   * **すべてを選択**して、すべての属性とその値を条件プリセットに追加します。
デフォルトでは、属性のアクションは`Include`です。

1. 「**追加**」を選択します。 この手順を繰り返して、さらに属性を追加できます。 追加した属性は、中央パネルから右側パネルに移動します。
1. 上部のアクションバーから「削除」を選択して、右側のパネルで選択した属性を削除します。
1. （オプション）必要に応じて、属性に適用されるアクションを上書きできます。
次のいずれかの操作を行います。
   * 任意の属性について、「アクション」ドロップダウンから次のいずれかのアクションを選択します。
      * 次を含む
      * 除外
      * 通過
      * フラグ
   * 右側のパネルから複数の属性行を選択し、上部のアクションバーからアクションを選択します。 例えば、選択した属性に対して「除外」アクションを選択できます。
1. 条件プリセットを保存するには、**保存**&#x200B;を選択します。

   >[!NOTE]
   >
   > 別のプリセットを選択するか、保存せずにプリセットを閉じると、警告が表示されます。

条件プリセットを作成すると、出力プリセットの&#x200B;**条件プリセット** ドロップダウンに表示されます。 PDF出力を[公開](/help/product-guide/web-editor/native-pdf-web-editor.md)する方法について詳しくは、こちらを参照してください。

### 条件プリセットの名前を変更

条件プリセットの名前を変更するには、次の手順を実行します。

1. **条件プリセット** パネルから条件プリセットにカーソルを合わせます。
1. オプションメニューから「**名前を変更**」を選択して、**条件プリセットの名前を変更** ダイアログを開きます。
1. 条件プリセットの名前を編集します。
1. 「**名前を変更**」をクリックします。

### 条件プリセットの複製

条件プリセットを複製するには、次の手順を実行します。

1. **条件プリセット** パネルから条件プリセットにカーソルを合わせます。
1. オプションメニューから「**重複**」を選択して、**条件プリセットの重複** ダイアログを開きます。
   >[!NOTE]
   >
   > プリセットのデフォルト名は`<selected condition preset name>_1`です。 必要に応じて名前を変更できます。

1. 「**複製**」をクリックします。

### 条件プリセットの削除

条件プリセットを削除するには、次の手順を実行します。

1. **条件プリセット** パネルから条件プリセットにカーソルを合わせます。
1. オプションメニューから「**削除**」を選択して、**条件プリセットの削除** ダイアログを開きます。
1. 「**削除**」をクリックします。



## マップダッシュボードの条件プリセット


### 条件プリセットの作成

条件プリセットを作成するには、次の手順を実行します。

1. DITA マップコンソールで「**条件プリセット**」タブを選択します。
1. 「**作成**」ボタンをクリックします。
1. **名前条件**&#x200B;にプリセットの名前を入力します。
1. 「**デフォルトアクションを**&#x200B;に設定」ドロップダウンから、次のいずれかのデフォルトアクションを選択します。

   * 次を含む
   * 除外
   * 通過
   * フラグ
アクションは、条件プリセットに追加されているかどうかにかかわらず、すべての属性に対してデフォルトアクションとして設定されます。

   For example, you have 15 condition attributes in your document and you have included four of them in the condition preset. If you select **exclude** as default action, it is applied to all 15 attributes.

1. 属性を追加するには、次のいずれかの操作を行います。
   * Click **Add** to one attribute to the condition preset. この手順を繰り返して、さらに属性を追加できます。
   * Click **Add all** to add all the attributes to the condition preset.
1. \(Optional\) If required, you can override the default action applied to the attributes in Step 4. 次のいずれかの操作を行います。
   * Select multiple attributes, choose an action from **Set the action for selected conditions to**, and click **Apply**.
   * Select an action for an attribute from the **Action** drop-down.
1. 「**保存**」をクリックします。

### Edit a condition preset

You can make changes in an existing condition preset to change the actions applied to the attributes in the condition preset. Perform the following steps to edit a condition preset:

1. DITA マップコンソールで「**条件プリセット**」タブを選択します。
1. Click **Edit** button.
1. Make required changes for all the attributes in the condition preset.
1. 「**保存**」をクリックします。

### Create a copy of a condition preset

You can create a copy of a condition preset and then modify it according to your requirement. Perform the following steps to create a copy of a condition preset:

1. DITA マップコンソールで「**条件プリセット**」タブを選択します。
1. Click **Duplicate** button.

   >[!NOTE]
   >
   > The default name of the preset is `<selected condition preset name>_Duplicate`

   You can change the name according to your requirement.

1. \(Optional\) Make required changes for all the attributes in the condition preset.
1. 「**保存**」をクリックします。

### 条件プリセットの削除

You can delete one or more condition presets from the **Condition Preset** tab of the DITA map console. 条件プリセットを削除するには、次の手順を実行します。

1. DITA マップコンソールで「**条件プリセット**」タブを選択します。
1. 削除する条件プリセットを選択します。
1. 「**削除**」ボタンをクリックします。
1. 「**削除**」をクリックして、アクションを確定します。

**親トピック：**[&#x200B;出力生成](generate-output.md)
