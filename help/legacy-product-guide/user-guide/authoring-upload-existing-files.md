---
title: ファイルのアップロード
description: ファイルをAEM リポジトリにアップロードし、エラーを処理する方法について説明します。 Assets コンソールのユーザーインターフェイス、AEM デスクトップアプリ、アセットの一括取得、FrameMakerの一括アップロードの使用について説明します。
feature: Content Management
role: User
hide: true
exl-id: fcb2cc43-6a36-42f2-a695-7a50ae1031a0
source-git-commit: 7286c3fb36695caa08157296fd6e0de722078c2b
workflow-type: tm+mt
source-wordcount: '405'
ht-degree: 1%

---

# ファイルのアップロード {#id176FF000JUI}

ほとんどの場合、AEM Guidesで使用する既存の DITA コンテンツのリポジトリがあります。 このような既存のコンテンツの場合、次のいずれかの方法を使用して、コンテンツをAEM リポジトリに一括アップロードできます。

>[!IMPORTANT]
>
> Adobe Experience Manager as a Cloud ServiceAssetsでサポートされるコンテンツアップロード方法について詳しくは、[AEMへのデジタルアセットの追加 ](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/assets/manage/add-assets.html) を参照してください。

## Assets コンソールのユーザーインターフェイス

デスクトップ上でコンテンツを選択し、AEM ユーザーインターフェイス\（web ブラウザー\）を目的のフォルダーにドラッグできます。 詳しくは、AEM ドキュメントの [ アセットのアップロード ](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/assets/manage/add-assets.html#upload-assets) を参照してください。

## AEM デスクトップアプリケーション

クリエイティブ専門家で、ローカルデスクトップでアセットを管理する必要がある場合は、AEM デスクトップアプリケーションを使用します。 これらのアセットを開いて、デスクトップアプリケーションで編集できます。 また、バージョンを管理し、他のユーザーとファイルを共有することもできます。 詳しくは、[AEM デスクトップアプリケーション ](https://experienceleague.adobe.com/docs/experience-manager-desktop-app/using/using.html?lang=ja) を参照してください。

## アセットの一括取得

大規模な移行が行われ、一括で取り込みを行うことがある場合は、アセットの一括取得を使用してコンテンツをアップロードします。 このツールを使用すると、Azure や S3 などのサポートされているデータストアから一括コンテンツをアップロードできます。 詳しくは、[ アセット一括取得 ](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/assets/manage/add-assets.html?lang=en#asset-bulk-ingestor) を参照してください。

## FrameMakerを使用したバルクアップロード

Adobe FrameMakerには強力なAEM コネクタが付属しており、既存の DITA やその他のFrameMaker文書\（`.book` and `.fm`\）をAEMに簡単にアップロードできます。 単一ファイルのアップロード、依存関係の有無を問わず完全なフォルダーのアップロード\（コンテンツ参照、相互参照、グラフィックなど\）など、様々なファイルアップロード機能を使用できます。

FrameMakerでのバルクアップロード機能の使用について詳しくは、『FrameMaker ユーザーガイド』の *CRX フォルダーの作成とファイルのアップロード* を参照してください。

## コンテンツのアップロード中のエラー処理 {#id201MI0I04Y4}

1 つ以上のファイルのアップロードに失敗した場合は、アップロードプロセスの最後に、アップロードに失敗したファイルのリストを示すプロンプトが表示されます。

![](images/uuid-files-failed-to-upload_cs.png){width="650" align="center"}

様々なファイルのアップロードシナリオについて詳しくは、[DITA コンテンツのアップロード ](authoring-file-management.md#) を参照してください。

AEM デスクトップアプリケーションやアセット一括取得などのツールを使用する場合、重複するファイルに対して実行するアクションはAEM サーバーの設定によって制御されます。 この設定については、システム管理者にお問い合わせください。

**親トピック：**&#x200B;[ コンテンツの管理 ](authoring.md)
