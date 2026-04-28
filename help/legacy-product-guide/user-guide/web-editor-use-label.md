---
title: ラベルを使用
description: AEM Guidesのファイルの様々なバージョンに対するラベルの使用について説明します。 トピックのバージョンにラベルを追加または削除する方法について説明します。
feature: Authoring, Features of Web Editor, Publishing
role: User
hide: true
exl-id: bd488298-57d7-46fb-9820-cec8d0db8bd5
source-git-commit: a70b3ce942b3e69445ad1d7ba6c8f7542e0ff176
workflow-type: tm+mt
source-wordcount: '396'
ht-degree: 0%

---

# ラベルを使用 {#id164JBG0M0T1}

AEM Guidesでは、ファイルの様々なバージョンにラベルを追加できます。 これらのラベルを使用して、公開用のベースラインに含めるバージョンを指定できます。 ラベルを使用してベースラインを作成する方法について詳しくは、[&#x200B; ベースラインの操作](generate-output-use-baseline-for-publishing.md#)を参照してください。

例えば、*リリース 2.0*&#x200B;の&#x200B;*リリース 1.0*&#x200B;のトピックの&#x200B;*バージョン 1.0*&#x200B;と同じトピックの&#x200B;*バージョン 1.1*&#x200B;を使用する場合、*バージョン 1.1*&#x200B;の&#x200B;*バージョン 1.0*&#x200B;と&#x200B;*リリース 2.0*&#x200B;のラベルに&#x200B;*リリース 1.0*&#x200B;のラベルを追加できます。

ラベルを追加したら、ベースラインを作成し、そのベースラインを使用して公開するトピックのバージョンを指定できます。 ベースラインに含めるバージョンまたは除外するバージョンを確認するには、「バージョン履歴」オプションを使用できます。

## ラベルを追加

トピックにラベルを追加するには、次の手順を実行します。

1. Assets UIで、トピックを選択
1. 左側のレールセレクターアイコンをクリックし、**バージョン履歴**&#x200B;を選択します。
1. バージョン履歴で、ラベルを追加するバージョンをクリックします。

1. 選択したバージョンのラベルを入力し、Enter キーを押します。 例：*2.6 リリース*&#x200B;です。

   >[!NOTE]
   >
   > トピックの異なるバージョンに同じラベルを追加することはできません。 ただし、同じバージョンのトピックに複数のラベルを追加することができます。

   ラベルは、選択したトピックのバージョン履歴に表示されます。 次のスクリーンショットは、ハイライト表示されたバージョンのトピックに追加されたラベル *x.x リリース*&#x200B;と&#x200B;*ユーザーガイド*&#x200B;を示しています。

   ![](images/labels.png){width="300" align="left"}

>[!NOTE]
>
> ベースラインを使用して、複数のトピックにラベルを追加できます。 ベースラインを使用したラベルの追加について詳しくは、[&#x200B; ベースラインへのラベルの追加](generate-output-use-baseline-for-publishing.md#id184KD0T305Z)を参照してください。

## ラベルの削除

ラベルを削除するには、次の手順を実行します。

1. In the Assets UI, select a topic that has a label added to it.
1. 左側のレールセレクターアイコンをクリックし、**バージョン履歴**&#x200B;を選択します。

   In the Version History, you will see all the versions of a topic and the labels attached to them. The following image shows an example of different versions of a topic and one version has labels added to it.

   ![](images/labels.png){width="300" align="left"}

1. Click the delete button \(**X**\) to delete the label.

   ![](images/delete-labels.png){width="300" align="left"}


**親トピック：**&#x200B;[&#x200B; Web エディターの操作](web-editor.md)
