---
title: ファイルのアップロード
description: AEM リポジトリにファイルをアップロードし、エラーを処理する方法について説明します。 アセットコンソールのユーザーインターフェイス、AEM デスクトップアプリ、アセットの一括取り込み、FrameMakerを使用した一括アップロードについて説明します。
feature: Content Management
role: User
hide: true
exl-id: fcb2cc43-6a36-42f2-a695-7a50ae1031a0
source-git-commit: a70b3ce942b3e69445ad1d7ba6c8f7542e0ff176
workflow-type: tm+mt
source-wordcount: '451'
ht-degree: 3%

---

# ファイルのアップロード {#id176FF000JUI}

AEM Guidesで使用する既存のDITA コンテンツのリポジトリがある可能性があります。 このような既存のコンテンツの場合は、次のいずれかの方法を使用して、コンテンツをAEM リポジトリに一括アップロードできます。

>[!IMPORTANT]
>
> AEMでサポートされているコンテンツのアップロード方法について詳しくは、[Adobe Experience Manager as a Cloud Service Assetsにデジタルアセットを追加する](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/assets/manage/add-assets.html)を参照してください。

## Assets Console ユーザーインターフェイス

デスクトップでコンテンツを選択し、AEM ユーザーインターフェイス \（web ブラウザー\）を移動先フォルダーにドラッグできます。 詳しくは、AEM ドキュメントの[ アセットのアップロード ](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/assets/manage/add-assets.html#upload-assets)を参照してください。

## AEM デスクトップアプリケーション

クリエイターで、ローカルデスクトップでアセットを管理する場合は、AEM デスクトップアプリを使用します。 これらのアセットは、デスクトップアプリケーションで開いて編集できます。 バージョンを管理したり、他のユーザーとファイルを共有したりすることもできます。 詳しくは、[AEM デスクトップアプリ ](https://experienceleague.adobe.com/docs/experience-manager-desktop-app/using/using.html?lang=ja)を参照してください。

## アセットの一括取り込み

大規模な移行や時折の一括取り込みがある場合は、アセットの一括取り込み機能を使用してコンテンツをアップロードします。 このツールを使用すると、AzureやS3などのサポートされているデータストアから一括コンテンツをアップロードできます。 詳しくは、[ アセットの一括インジェスター](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/assets/manage/add-assets.html?lang=en#asset-bulk-ingestor)を参照してください。

## FrameMakerを使用した一括アップロード

Adobe FrameMakerには、既存のDITAおよびその他のFrameMaker ドキュメント \（`.book`および`.fm`\）をAEMに簡単にアップロードできる強力なAEM コネクタが付属しています。 1つのファイルのアップロード、依存関係の有無にかかわらず完全なフォルダーのアップロード（コンテンツ参照、相互参照、グラフィックなど）など、様々なファイルアップロード機能を使用できます。

FrameMakerでのバルクアップロード機能の使用について詳しくは、「CRX フォルダーの作成」および「FrameMaker ユーザーガイドの「*」の節を参照してください。*

## コンテンツのアップロード中にエラー処理が発生しました {#id201MI0I04Y4}

1つ以上のファイルのアップロードに失敗した場合、アップロードプロセスの最後に、アップロードに失敗したファイルのリストを示すプロンプトが表示されます。

![](images/uuid-files-failed-to-upload_cs.png){width="650" align="center"}

For more details about how the various file uploading scenarios, see [Upload DITA content](authoring-file-management.md#).

In case you use a tool like AEM desktop app or Asset bulk ingestor, then the action to perform on a duplicate file is controlled by a setting in the AEM server. Contact your system administrator to know about this configuration.

**Parent topic:**[ Manage content](authoring.md)
