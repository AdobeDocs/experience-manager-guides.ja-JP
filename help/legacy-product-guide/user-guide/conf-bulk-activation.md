---
title: 公開したコンテンツの一括アクティベーション
description: 公開したコンテンツの一括アクティベーションについて説明します。 AEM guidesのバルクアクティベーション機能の利点をご紹介します。
feature: Publishing, Bulk Activation
role: User
hide: true
exl-id: 4b60bf50-f6c2-4e87-8af6-fd1c26d4898f
TQID: 'https://experienceleague.adobe.com/sUQxJ30NYLT37GPY6j0XvY7-2vWPomapr9nuhFG6wH8'
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
    internal-label: Publishing
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
    internal-label: Authoring
  - id: f59890ff-de81-47d5-9ef8-7ab2dd10c6c3
    internal-label: Authoring and publishing content
subfeature_v2:
  - id: c38bc65b-dea9-4a6e-9de3-3daf1d2b388b
    internal-label: Bulk activation
  - id: fd6cc9e1-e5e5-494e-b7b1-a32f2d6cd7c9
    internal-label: Output generation
  - id: f901afa4-5613-4581-add5-219fa5f03fb5
    internal-label: Publishing
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '257'
ht-degree: 0%
---
# 公開したコンテンツの一括アクティベーション {#id214GG080LE8}

実際のシナリオでは、作成者はAEMのオーサリングインスタンスにアクセスし、実際のコンテンツはAEMのパブリッシングインスタンスに公開されます。 その後、パブリッシングインスタンスを様々な地域にさらにデプロイできます。 公開された出力は、異なるプロセスを通じてこれらの公開サーバーに移動する必要があります。 オーサリングインスタンスからパブリッシングインスタンスにコンテンツを移動するプロセスは、コンテンツのアクティベーションまたはレプリケーションと呼ばれます。

>[!NOTE]
>
> AEMでオーサーインスタンスとパブリッシュインスタンスを設定する方法について詳しくは、[ オーサーとパブリッシュアーキテクチャの概要](https://experienceleague.adobe.com/docs/experience-manager-screens/user-guide/administering/author-publish/author-publish-architecture-overview.html?lang=en#prerequisites)を参照してください。

AEM Guidesのバルクアクティベーション機能を利用すれば、コンテンツのオーサリングからパブリッシングインスタンスへの移行を迅速かつ容易におこなえます。 バルクアクティベーション機能では、次のことを柔軟に実行できます。

- 1つのアクティベーションタスクに1つ以上のマップ \（マップコレクションに\）を追加する

- 公開する1つまたは複数の出力プリセットを選択します。 AEM サイト、PDF、ネイティブ PDF、HTML 5、カスタム、およびカスタムを追加できます
JSON出力プリセット：


- 出力をアクティブ化するロケールを定義します

- 監査ログにアクセスして、アクティベーションタスクが正常に完了したか、いくつかの問題があったかを確認します


- **[一括アクティベーションマップコレクションを作成](conf-bulk-activation-create-map-collection.md)**

- **[出力をアクティブ化](conf-bulk-activation-publish-map-collection.md)**

- **[一括アクティベーションマップコレクションの編集](conf-bulk-activation-edit-map-collection.md)**

- **[一括アクティベーションマップコレクションを削除](conf-bulk-activation-delete-map-collection.md)**


**親トピック：**[&#x200B;出力生成](generate-output.md)
