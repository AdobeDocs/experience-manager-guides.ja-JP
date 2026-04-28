---
title: 公開したコンテンツの一括アクティベーション
description: 公開したコンテンツの一括アクティベーションについて説明します。 AEM guidesのバルクアクティベーション機能の利点をご紹介します。
feature: Publishing, Bulk Activation
role: User
hide: true
exl-id: 4b60bf50-f6c2-4e87-8af6-fd1c26d4898f
source-git-commit: a70b3ce942b3e69445ad1d7ba6c8f7542e0ff176
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
