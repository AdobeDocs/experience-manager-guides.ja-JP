---
title: AEM Guidesのアップグレード
description: AEM Guidesのアップグレード方法について説明します
exl-id: 57ae906f-69e3-4319-89f6-0fa9ddb7a3ff
feature: Installation
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 564ee1731be2378744ffd2ed54a2fd423901a0b3
workflow-type: tm+mt
source-wordcount: '98'
ht-degree: 3%

---

# AEM Guidesのアップグレード {#id213BD050YPH}

1. Cloud ManagerのGit リポジトリにアクセスします。

1. dox/dox.installer/pom.xml ファイルを更新します。

1. dox.version変数の値を、Adobeが提供するバージョンの詳細に更新します。

1. 変更を確定し、Cloud Manager パイプラインを実行して、アップグレードされたパッケージをデプロイします。


>[!NOTE]
>
> CI/CD パイプラインの使用について詳しくは、[Adobe Cloud ManagerでのCI/CD パイプラインの使用](https://experienceleague.adobe.com/docs/experience-manager-learn/foundation/cloud-manager/use-the-cicd-pipeline-in-cloud-manager-for-aem.html)を参照してください。

## ブラウザーキャッシュを消去します

アップグレード処理が完了したら、アップグレード版のAEM Guidesを使用する前に、すべてのユーザーがブラウザーキャッシュをクリアする必要があります。

**親トピック：**[ ダウンロードしてインストール ](download-install.md)
