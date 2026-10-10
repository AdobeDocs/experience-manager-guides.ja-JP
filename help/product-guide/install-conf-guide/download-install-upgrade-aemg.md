---
title: Cloud Service用AEM Guidesのアップグレード
description: AEM Guidesのアップグレード方法について説明します
feature: Installation
role: Admin
level: Experienced
exl-id: 9d48a7c4-384d-4ad4-a1d3-4c50d97e5d5b
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
feature_v2:
  - id: e88e74c7-6080-446a-8eb0-496f1ac5f7e6
    internal-label: Administration
subfeature_v2:
  - id: e557051c-ff02-4ff8-9421-cf452af0edd5
    internal-label: Installation
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '120'
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
> CI/CD パイプラインの使用について詳しくは、[Adobe Cloud ManagerでのCI/CD パイプラインの使用](https://experienceleague.adobe.com/docs/experience-manager-learn/foundation/cloud-manager/use-the-cicd-pipeline-in-cloud-manager-for-aem.html?lang=ja)を参照してください。

## ブラウザーキャッシュを消去します

アップグレード処理が完了したら、アップグレード版のAEM Guidesを使用する前に、すべてのユーザーがブラウザーキャッシュをクリアする必要があります。
