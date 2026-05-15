---
title: ファイルのアップロード
description: AEM リポジトリにファイルをアップロードし、エラーを処理する方法について説明します。 アセットコンソールのユーザーインターフェイス、AEM デスクトップアプリ、アセットの一括取り込み、FrameMakerを使用した一括アップロードについて説明します。
feature: Content Management
role: User
hide: true
exl-id: fcb2cc43-6a36-42f2-a695-7a50ae1031a0
TQID: https://experienceleague.adobe.com/Kcxzs3D9Vcp7hhgttmCx7jdetS8NWR8YTP85UY0DlJU
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: ab01a588-7dea-43f2-a699-0b3f128465d6id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 451
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

様々なファイルのアップロード方法について詳しくは、[DITA コンテンツのアップロード ](authoring-file-management.md#)を参照してください。

AEM デスクトップアプリやAssetの一括取り込みツールなどのツールを使用する場合、重複ファイルに対して実行するアクションは、AEM サーバーの設定によって制御されます。 この設定について詳しくは、システム管理者にお問い合わせください。

**親トピック：**[ コンテンツの管理](authoring.md)
