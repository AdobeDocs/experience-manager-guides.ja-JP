---
title: AEM Guidesのアップグレード
description: AEM Guidesのアップグレード方法について説明します
exl-id: 57ae906f-69e3-4319-89f6-0fa9ddb7a3ff
feature: Installation
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/jGMljbRp60Wst7hVLeanMTLHY79Yhqo7yeUCCsLXx3k
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
role_v2: id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 114
ht-degree: 2%

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
