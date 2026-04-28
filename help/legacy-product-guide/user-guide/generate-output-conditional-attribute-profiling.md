---
title: 条件付き属性プロファイル
description: AEM Guidesで条件付き属性を作成する方法について説明します。 フォルダーおよびグローバルプロファイルで条件付き属性を使用して、コンテンツを条件付けします。
feature: Publishing
role: User
hide: true
exl-id: f8397acf-acd3-4e68-adce-9adbbef55337
source-git-commit: a70b3ce942b3e69445ad1d7ba6c8f7542e0ff176
workflow-type: tm+mt
source-wordcount: '481'
ht-degree: 1%

---

# 条件付き属性プロファイル {#id1843I0HN0Y4}

企業レベルでは、標準的なタグ付けシステムを導入することが非常に重要です。 タグまたは条件付き属性は、リポジトリ内のデジタルアセットに関連付けることができ、選択した条件に基づいて出力を公開するのに役立ちます。 例えば、WindowsおよびMac コンテンツの条件付き属性を作成できます。 次に、これらの属性をトピックの関連コンテンツに追加します。 コンテンツを公開する際に、WindowsとMacのみのコンテンツのどちらを公開するかを選択できます。

AEM Guidesでは、関連するDITA属性を使用して、条件付き属性を簡単に作成および関連付けることができます。 コンディショナル属性は、グローバルレベルまたはフォルダーレベルで定義できます。 グローバルに定義された条件は、すべてのプロジェクトで表示され、フォルダー固有の条件は、指定されたフォルダー内で作成されたプロジェクトでのみ表示されます。 コンテンツ作成者は、これらの条件付き属性を使用して、作成または使用するDITA トピックやマップ内のコンテンツを条件付けできます。 これらの条件は、パブリッシャーが条件プリセットを作成するために使用できます。 パブリッシャーは、コンディショナルプリセットを使用して、パブリッシュされた出力に含めるコンディションと除外するコンディションを決定できます。

>[!NOTE]
>
> アクセス権のあるフォルダープロファイルで、条件付き属性を作成または編集できます。 システム管理者がフォルダープロファイルへのアクセス権を付与していない場合、フォルダープロファイルで条件付き属性を作成または編集することはできません。

条件付き属性を定義するには、次の手順を実行します。

1. 上部のAdobe Experience Manager リンクをクリックし、**ツール**&#x200B;を選択します。

1. ツールのリストから「**ガイド**」を選択します。

1. **フォルダープロファイル** タイルをクリックし、フォルダープロファイルを選択します。

   >[!NOTE]
   >
   > グローバルプロファイルは編集できません。

1. 「**条件付き属性**」タブをクリックし、**編集**&#x200B;をクリックします。

   条件付き属性テーブルが表示されます。

1. 「**追加**」をクリックします。

1. 属性に&#x200B;**名前**、**値**&#x200B;および&#x200B;**ラベル**&#x200B;を入力します。

   You can save a profile with only the attribute name. However, an attribute can only be used when it has a value specified to it. If you specify both - value and label for an attribute, the Web Editor would still show only the value of the attribute. The label is shown to the publishing administrator at the time of creating conditional preset.

   The following screenshot shows the definition for the `platform` attribute with value of `unix` and a label of `Red Hat Linux`.

   ![](images/add-profile.png){width="800" align="left"}

1. If you want to add more values for the same attribute, click the **+** icon and enter additional value and label.

1. If you want to add more attributes, click **Add**.

1. 「**保存**」をクリックして、変更を保存します。


The `platform` attribute is stored in the system. Whenever an author decides to use the `platform` attribute in a DITA topic in a folder, they will see the values in the Properties tab in the Web Editor.

![](images/properties-tab.png){width="350" align="left"}

**親トピック：**&#x200B;[&#x200B;出力生成](generate-output.md)
