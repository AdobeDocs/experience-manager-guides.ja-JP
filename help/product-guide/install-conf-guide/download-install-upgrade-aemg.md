---
title: Cloud Service用AEM Guidesのアップグレード
description: AEM Guidesのアップグレード方法について説明します
feature: Installation
role: Admin
level: Experienced
source-git-commit: b416334318a83e882c32318bc4769d24268cdd1c
workflow-type: tm+mt
source-wordcount: '103'
ht-degree: 2%

---

# Cloud Service用AEM Guidesのアップグレード {#id213BD050YPH}

AEM Guidesをアップグレードするには、次の手順を実行します。

1. Cloud ManagerのGit リポジトリにアクセスします。

1. `dox/dox.installer/pom.xml` ファイルを更新します。

1. Adobeが提供するバージョンの詳細に`dox.version`変数の値を更新します。

1. 変更を確定し、Cloud Manager パイプラインを実行して、アップグレードされたパッケージをデプロイします。


>[!NOTE]
>
> CI/CD パイプラインの使用について詳しくは、[Adobe Cloud ManagerでのCI/CD パイプラインの使用](https://experienceleague.adobe.com/docs/experience-manager-learn/foundation/cloud-manager/use-the-cicd-pipeline-in-cloud-manager-for-aem.html)を参照してください。

## ブラウザーキャッシュを消去します

アップグレード処理が完了したら、アップグレード版のAEM Guidesを使用する前に、すべてのユーザーがブラウザーキャッシュをクリアする必要があります。
