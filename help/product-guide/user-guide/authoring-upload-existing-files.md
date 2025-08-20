---
title: ファイルのアップロード
description: ファイルをAEM リポジトリにアップロードし、エラーを処理する方法について説明します。 Assets コンソールのユーザーインターフェイス、AEM デスクトップアプリ、アセットの一括取得、FrameMakerの一括アップロードの使用について説明します。
exl-id: b5430242-1122-43df-a0b2-275b1dea33f2
feature: Content Management
role: User
source-git-commit: 0259c0c0b7270d860198f17e6ea5f5829df038d5
workflow-type: tm+mt
source-wordcount: '476'
ht-degree: 2%

---

# ファイルのアップロード {#id176FF000JUI}

ほとんどの場合、Adobe Experience Manager Guidesで使用する既存の DITA コンテンツのリポジトリがあります。 このような既存のコンテンツの場合、次のいずれかの方法を使用して、コンテンツをAdobe Experience Manager リポジトリに一括アップロードできます。

>[!IMPORTANT]
>
> Adobe Experience Managerでサポートされるコンテンツアップロード方法について詳しくは、[Adobe Experience Manager as a Cloud Service Assetsへのデジタルアセットの追加 ](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/assets/manage/add-assets.html?lang=ja) を参照してください。

## Assets コンソールのユーザーインターフェイス

Assets Console ユーザーインターフェイスを使用してAdobe Experience Manager as a Cloud Service Assetsにデジタルアセットを [ 追加 ](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/assets/manage/add-assets.html?lang=ja#filename-handling?lang=ja#upload-assets) するには、デスクトップ上で必要なアセットを選択し、Adobe Experience Manager ユーザーインターフェイス\（web ブラウザー\）上の目的のフォルダーにドラッグします。 アセットをアップロードする際は、ファイル名にサポートされていない文字や禁止されている文字が含まれていないことを確認します。

詳しくは、Adobe Experience Manager ドキュメントの [ ファイル名の処理と禁止文字 ](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/assets/manage/add-assets.html?lang=ja#filename-handling) 節を参照してください。

## Adobe Experience Manager デスクトップアプリケーション

クリエイティブ専門家で、ローカルデスクトップでアセットを管理する必要がある場合は、Adobe Experience Manager デスクトップアプリケーションを使用します。 これらのアセットを開いて、デスクトップアプリケーションで編集できます。 また、バージョンを管理し、他のユーザーとファイルを共有することもできます。 詳しくは、[Adobe Experience Manager デスクトップアプリケーション ](https://experienceleague.adobe.com/docs/experience-manager-desktop-app/using/using.html?lang=ja) を参照してください。

## アセットの一括取得

大規模な移行が行われ、一括で取り込みを行うことがある場合は、アセットの一括取得を使用してコンテンツをアップロードします。 このツールを使用すると、Azure や S3 などのサポートされているデータストアから一括コンテンツをアップロードできます。 詳しくは、[ アセット一括取得 ](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/assets/manage/add-assets.html?lang=ja#asset-bulk-ingestor) を参照してください。

## FrameMakerを使用したバルクアップロード

Adobe FrameMakerには強力なAdobe Experience Manager コネクタが付属しており、既存の DITA やその他のFrameMaker文書\（`.book` and `.fm`\）をAdobe Experience Managerに簡単にアップロードできます。 単一ファイルのアップロード、依存関係の有無を問わず完全なフォルダーのアップロード\（コンテンツ参照、相互参照、グラフィックなど\）など、様々なファイルアップロード機能を使用できます。

FrameMakerでのバルクアップロード機能の使用について詳しくは、『FrameMaker ユーザーガイド』の *CRX フォルダーの作成とファイルのアップロード* の節を参照してください。

## コンテンツのアップロード中のエラー処理 {#id201MI0I04Y4}

1 つ以上のファイルのアップロードに失敗した場合は、アップロードプロセスの最後に、アップロードに失敗したファイルのリストを示すプロンプトが次のスニペットに表示されます。

![](images/uuid-files-failed-to-upload_cs.png){width="650" align="center"}

様々なファイルアップロードシナリオの機能について詳しくは、[ ファイルとフォルダーの管理 ](authoring-file-management.md#) を参照してください。

Adobe Experience Manager デスクトップアプリケーションやアセット一括取得などのツールを使用する場合、重複するファイルに対して実行するアクションはAdobe Experience Manager サーバーの設定によって制御されます。 この設定については、システム管理者にお問い合わせください。

**親トピック：**&#x200B;[ コンテンツの管理 ](authoring.md)
