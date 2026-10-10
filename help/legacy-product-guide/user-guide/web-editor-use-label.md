---
title: ラベルを使用
description: AEM Guidesのファイルの様々なバージョンに対するラベルの使用について説明します。 トピックのバージョンにラベルを追加または削除する方法について説明します。
feature: Authoring, Features of Web Editor, Publishing
role: User
hide: true
exl-id: bd488298-57d7-46fb-9820-cec8d0db8bd5
TQID: 'https://experienceleague.adobe.com/e0RaL-brcNFr-xeegnXVtpTjgxN84Np-g5rw-0ONQDs'
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
    internal-label: Publishing
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
    internal-label: Authoring
  - id: 5445d7f0-b55c-5788-9564-f9ad3a7bee84
    internal-label: Features of Web Editor
  - id: f59890ff-de81-47d5-9ef8-7ab2dd10c6c3
    internal-label: Authoring and publishing content
subfeature_v2:
  - id: ad602516-aca3-4247-9ae8-f393d958efa9
    internal-label: Editor
  - id: d4f22c6d-7923-41e5-9da3-527ff8df4bc8
    internal-label: Document state
  - id: f89f75b0-cf2e-4e96-aec8-fe8c39cbd0ef
    internal-label: Web Editor
  - id: f901afa4-5613-4581-add5-219fa5f03fb5
    internal-label: Publishing
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '396'
ht-degree: 0%
---
# ラベルを使用 {#id164JBG0M0T1}

AEM Guidesでは、ファイルの様々なバージョンにラベルを追加できます。 これらのラベルを使用して、公開用のベースラインに含めるバージョンを指定できます。 ラベルを使用してベースラインを作成する方法について詳しくは、[ ベースラインの操作](generate-output-use-baseline-for-publishing.md#)を参照してください。

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

   ![](images/labels.png){width="300"}

>[!NOTE]
>
> ベースラインを使用して、複数のトピックにラベルを追加できます。 ベースラインを使用したラベルの追加について詳しくは、[ ベースラインへのラベルの追加](generate-output-use-baseline-for-publishing.md#id184KD0T305Z)を参照してください。

## ラベルの削除

ラベルを削除するには、次の手順を実行します。

1. Assets UIで、ラベルが追加されたトピックを選択します。
1. 左側のレールセレクターアイコンをクリックし、**バージョン履歴**&#x200B;を選択します。

   バージョン履歴では、トピックのすべてのバージョンとそれらに添付されたラベルが表示されます。 次の画像は、トピックの異なるバージョンの例を示しており、1つのバージョンにラベルが追加されています。

   ![](images/labels.png){width="300"}

1. ラベルを削除するには、削除ボタン \（**X**\）をクリックします。

   ![](images/delete-labels.png){width="300"}


**親トピック：**[ Web エディターの操作](web-editor.md)
