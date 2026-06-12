---
title: リリースノート | Adobe Experience Manager Guides as a Cloud Service（2023年4月リリース）
description: Adobe Experience Manager Guides as a Cloud Serviceの2023年4月リリース
exl-id: 269e3a13-584d-4cff-a18a-d4fa89646a5a
feature: Release Notes
role: Leader
TQID: https://experienceleague.adobe.com/c1aOcwHgxAs11yAalOnlW-ghsTP1Or32TnBwLsc59-M
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a3bd6397-2eb2-4908-a61c-226e26855dca
subfeature_v2: id: d6596f3f-92a7-43ec-b444-237db6adad05
role_v2: id: f8a45b24-4be7-4f1b-909b-60d06b483a20
topic_v2: id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 370
ht-degree: 0%

---

# Adobe Experience Manager Guides as a Cloud Serviceの2023年4月リリースの新機能

この記事では、Adobe Experience Manager Guidesの2023年4月バージョン（後に&#x200B;*AEM Guides as a Cloud Service*&#x200B;と呼ばれます）の新機能と強化機能について説明します。

アップグレード手順、互換性マトリックス、およびこのリリースで修正された問題について詳しくは、[ リリースノート ](release-notes-2023-4-0.md)の記事を参照してください。

## PDF公開時の高度なメタデータのサポート

AEM Guidesでは、PDF出力のメタデータにマッピングされるメタデータの高度なサポートが提供されるようになりました。 メタデータオプションには、作成者の名前、ドキュメントタイトル、キーワード、著作権情報、その他のデータフィールドなど、ドキュメントとそのコンテンツに関する情報が含まれます。

<img src="assets/pdf-metadata.png" alt=" ネイティブ pdf メタデータ">

XMP ファイルを読み込むことができ、AEM Guidesはファイルから情報を選択できます。 ドロップダウンを使用して、メタデータ名と値を指定するオプションもあります。 また、「名前」フィールドに直接入力して、カスタムメタデータを追加することもできます。


## 拡張アウトライン表示パネル

AEM Guidesでは、ドキュメントで使用されるエレメントの階層ビューを取得するための改善されたアウトライン表示パネルを提供しています。

<img src="assets/select-element-content-outline-view_cs.png" alt=" ネイティブ pdf メタデータ">

アウトラインビューには、次の機能強化が用意されています。

* アウトライン表示パネルの上に「表示オプション」ドロップダウンが表示されます。 エレメントにID、属性およびテキストがある場合は、ドロップダウンからエレメントを選択して、エレメントと共に表示できます。 アウトライン表示パネルに表示できる属性は、管理者が&#x200B;**エディター設定**&#x200B;内で設定した表示属性の設定によって決まります。

* 検索機能を使用すると、名前、ID、テキストまたは属性値でエレメントを検索できます。


## AEM Guides as a Cloud Serviceのマイクロサービスベースの公開

AEM Guides as a Cloud Serviceは、マイクロサービスベースのパブリッシングと同時に大規模なパブリッシングワークロードを実行し、業界をリードするAdobe I/O Runtimeサーバーレスプラットフォームを活用する機能を提供します。

4月リリースでは、複数の公開リクエストを同時に実行し、マイクロサービスベースのネイティブのPDF パブリッシングを使用して一括のPDF出力を非常に効率的に生成できます。
詳しくは、[AEM Guides as a Cloud Service用の新しいマイクロサービスベースの公開の設定](../knowledge-base/publishing/configure-microservices.md)を参照してください。
