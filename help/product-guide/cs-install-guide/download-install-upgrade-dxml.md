---
title: AEM Guidesのアップグレード
description: AEM Guidesのアップグレード方法を学ぶ
exl-id: 57ae906f-69e3-4319-89f6-0fa9ddb7a3ff
feature: Installation
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '98'
ht-degree: 0%

---

# AEM Guidesのアップグレード {#id213BD050YPH}

1. Cloud Managerの Git リポジトリにアクセスします。

1. dox/dox.installer/pom.xml ファイルを更新します。

1. dox.version 変数の値を、Adobeが提供するバージョンの詳細に更新します。

1. 変更をコミットし、Cloud Manager パイプラインを実行して、アップグレードしたパッケージをデプロイします。


>[!NOTE]
>
> CI/CD パイプラインの使用について詳しくは、[Cloud Manager Adobeでの CI/CD パイプラインの使用 ](https://experienceleague.adobe.com/docs/experience-manager-learn/foundation/cloud-manager/use-the-cicd-pipeline-in-cloud-manager-for-aem.html) を参照してください。

## ブラウザーキャッシュのクリア

アップグレードプロセスが完了したら、すべてのユーザーは、アップグレードされたバージョンのAEM Guidesを使用する前に、ブラウザーキャッシュをクリアする必要があります。

**親トピック：**[ ダウンロードとインストール ](download-install.md)
