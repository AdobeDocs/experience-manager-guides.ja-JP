---
title: リリースノート | Adobe Experience Manager Guidesのas a Cloud Service、2023 年 4 月リリース
description: 2023 年 4 月Adobe Experience Manager Guidesas a Cloud Serviceリリース
exl-id: 269e3a13-584d-4cff-a18a-d4fa89646a5a
feature: Release Notes
role: Leader
source-git-commit: 6d8c01f20f7b59fed92c404561b647d9ebecb050
workflow-type: tm+mt
source-wordcount: '381'
ht-degree: 0%

---

# Adobe Experience Manager Guidesas a Cloud Serviceの 2023 年 4 月リリースの新機能

この記事では、Adobe Experience Manager Guides 2023 年 4 月バージョン（後で *AEM Guidesas a Cloud Service*）の新機能および拡張機能について説明します。

アップグレードの手順、互換性マトリックス、およびこのリリースで修正された問題について詳しくは、[ リリースノート ](release-notes-2023-4-0.md) の記事を参照してください。

## PDF公開での高度なメタデータのサポート

AEM Guidesでは、PDF出力のメタデータにマッピングされるメタデータの高度なサポートが提供されるようになりました。 メタデータオプションには、作成者の名前、ドキュメントのタイトル、キーワード、著作権情報、その他のデータフィールドなど、ドキュメントとその内容に関する情報が含まれます。

<img src="assets/pdf-metadata.png" alt=" ネイティブ pdf メタデータ">

XMP ファイルを読み込むと、AEM Guidesがファイルから情報を選択できます。 また、ドロップダウンを使用してメタデータの名前と値を指定することもできます。 名前フィールドに直接入力してカスタムメタデータを追加することもできます。


## [ アウトライン ビューの拡張 ] パネル

AEM Guidesでは、改善されたアウトラインビューパネルが提供され、ドキュメントで使用されているエレメントの階層ビューを取得できます。

<img src="assets/select-element-content-outline-view_cs.png" alt=" ネイティブ pdf メタデータ">

アウトライン表示では、次の機能が強化されています。

* 「表示オプション」ドロップダウンは、「アウトライン表示」パネルの上部に表示されます。 要素に ID、属性およびテキストが含まれている場合は、ドロップダウンから選択して、要素とともに表示できます。 アウトライン・ビュー・パネルに表示できる属性は、管理者が **エディタの設定** 内で構成した属性表示の設定によって決まります。

* 検索機能を使用して、名前、ID、テキスト、属性値で要素を検索できます。


## AEM Guidesas a Cloud Service向けのマイクロサービスベースの公開

AEM Guides as a Cloud Serviceは、大規模なパブリッシングワークロードをマイクロサービスベースのパブリッシングと同時に実行し、業界をリードするAdobe I/O Runtime サーバーレスプラットフォームを活用する機能を提供します。

4 月のリリースで、複数の公開リクエストを同時に実行し、マイクロサービスベースのネイティブPDF公開を使用して一括PDF出力を非常に効率的に生成できるようになりました。
詳しくは、[AEM Guidesas a Cloud Serviceの新しいマイクロサービスベースの公開を設定する ](../knowledge-base/publishing/configure-microservices.md) を参照してください。
