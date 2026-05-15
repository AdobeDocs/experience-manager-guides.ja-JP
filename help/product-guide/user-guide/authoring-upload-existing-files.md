---
title: ファイルのアップロード
description: AEM リポジトリにファイルをアップロードし、エラーを処理する方法について説明します。 アセットコンソールのユーザーインターフェイス、AEM デスクトップアプリ、アセットの一括取り込み、FrameMakerを使用した一括アップロードについて説明します。
exl-id: b5430242-1122-43df-a0b2-275b1dea33f2
feature: Content Management
role: User
TQID: https://experienceleague.adobe.com/GG5Bx2yyJz2GaQFmMsDZ6wq6xzb4XUAsSBxEkRNvEVE
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 536
ht-degree: 3%

---

# ファイルのアップロード {#id176FF000JUI}

Adobe Experience Manager Guidesで使用する既存のDITA コンテンツのリポジトリがある可能性があります。 このような既存のコンテンツの場合は、次のいずれかの方法を使用して、コンテンツをAdobe Experience Manager リポジトリに一括アップロードできます。

>[!IMPORTANT]
>
> Adobe Experience Managerでサポートされているコンテンツのアップロード方法の詳細については、[&#x200B; デジタルアセットをAdobe Experience Manager as a Cloud Service Assetsに追加する](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/assets/manage/add-assets.html?lang=ja)を参照してください。

## Assets Console ユーザーインターフェイス

Assets Console ユーザーインターフェイスを使用してAdobe Experience Manager as a Cloud Service Assets[&#128279;](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/assets/manage/add-assets.html?lang=ja#filename-handling?lang=ja#upload-assets)にデジタルアセットを追加するには、デスクトップで必要なアセットを選択し、Adobe Experience Manager ユーザーインターフェイス \（web ブラウザー\）を移動先フォルダーにドラッグします。 アセットをアップロードする際には、ファイル名にサポートされていない文字や禁止されている文字が含まれていないことを確認してください。

詳しくは、Adobe Experience Manager ドキュメントの「[&#x200B; ファイル名の処理と禁止文字](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/assets/manage/add-assets.html?lang=ja#filename-handling)」セクションを参照してください。

## Adobe Experience Manager デスクトップアプリケーション

クリエイターで、ローカルデスクトップでアセットを管理する場合は、Adobe Experience Manager デスクトップアプリを使用します。 これらのアセットは、デスクトップアプリケーションで開いて編集できます。 バージョンを管理したり、他のユーザーとファイルを共有したりすることもできます。 詳しくは、[Adobe Experience Manager デスクトップアプリ &#x200B;](https://experienceleague.adobe.com/docs/experience-manager-desktop-app/using/using.html?lang=ja)を参照してください。

## アセットの一括取り込み

大規模な移行や時折の一括取り込みがある場合は、アセットの一括取り込み機能を使用してコンテンツをアップロードします。 このツールを使用すると、AzureやS3などのサポートされているデータストアから一括コンテンツをアップロードできます。 詳細については、[&#x200B; アセットの一括インジェスター](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/assets/manage/add-assets.html?lang=ja#asset-bulk-ingestor)を参照してください。

## FrameMakerを使用した一括アップロード

Adobe FrameMakerには、既存のDITAおよびその他のFrameMaker ドキュメント \（`.book`および`.fm`\）をAdobe Experience Managerに簡単にアップロードできる強力なAdobe Experience Manager コネクタが付属しています。 1つのファイルのアップロード、依存関係の有無にかかわらず完全なフォルダーのアップロード（コンテンツ参照、相互参照、グラフィックなど）など、様々なファイルアップロード機能を使用できます。

FrameMakerでのバルクアップロード機能の使用について詳しくは、「*CRX フォルダーの作成とファイルのアップロード*」のFrameMaker ユーザーガイドを参照してください。

## コンテンツのアップロード中にエラー処理が発生しました {#id201MI0I04Y4}

1つ以上のファイルのアップロードに失敗した場合は、アップロードプロセスの最後に、下のスニペットに示すように、アップロードに失敗したファイルのリストが表示されたプロンプトが表示されます。

![](images/uuid-files-failed-to-upload_cs.png){width="650" align="center"}

様々なファイルのアップロード シナリオ機能の詳細については、[&#x200B; ファイルとフォルダーの管理](authoring-file-management.md#)を参照してください。

Adobe Experience Manager デスクトップアプリやAssetの一括取り込みツールなどのツールを使用する場合、重複ファイルに対して実行するアクションは、Adobe Experience Manager サーバーの設定によって制御されます。 この設定について詳しくは、システム管理者にお問い合わせください。

**親トピック：**&#x200B;[&#x200B; コンテンツの管理](authoring.md)
