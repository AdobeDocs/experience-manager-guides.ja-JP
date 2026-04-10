---
title: このガイドについて
description: このガイドの詳細
exl-id: cdd40267-3f0c-40d2-acbc-2ebe43633c2f
feature: Introduction
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 564ee1731be2378744ffd2ed54a2fd423901a0b3
workflow-type: tm+mt
source-wordcount: '663'
ht-degree: 3%

---

# このガイドについて {#id175MC0P0S5Z}

Adobe Experience Manager Guides \（後に&#x200B;*AEM Guides*\）は、強力なクラウドベースのエンタープライズグレードのコンポーネントコンテンツ管理ソリューション \（CCMS\）です。 Adobe Experience Managerでネイティブ DITA サポートを有効にし、AEMがDITA ベースのコンテンツの制作と配信を処理できるようにします。 これにより、作成者は使いやすい組み込みweb エディターを使用してコンテンツを作成し、さまざまな出力形式に公開できます。

このガイドでは、AEM Guidesのダウンロード、インストール、設定の手順について説明します。 このガイドでは、組織のオーサリングと公開のニーズに応じて、AEM Guidesを設定するための詳細な手順について説明します。

このガイドは、次のタイプのオーディエンスを対象としています。

- AEM Guidesをインストールおよび管理する管理者。

- 様々な形式で出力を生成するパブリッシングタスクを実行するパブリッシャー。


## コンテンツ構造

このガイドの情報は、次のように構成されています。

- [このガイドについて](#id175MC0P0S5Z)：このトピックでは、このガイドの概要、対象となるオーディエンス、および情報がこのガイドでどのように整理されるかについて説明します。

- [ ダウンロードしてインストール ](download-install.md#)：このトピックでは、AEM Guidesのダウンロード、インストール、またはアップグレード方法について説明します。

- [ ユーザーの管理とセキュリティ ](user-admin-sec.md#)：このトピックでは、AEMでのユーザーと認証の中核的な概念と、AEM Guidesによって作成されたデフォルトのユーザーグループについて説明します。

- [ カスタム DITA-OTとDITAの特殊化を使用](dita-ot-specialization.md#)：このトピックでは、カスタム DITA-OT プラグインを設定し、DITAの特殊化を使用する方法について説明します。

- [ ドキュメントの状態を設定](customize-doc-state.md#)：このトピックでは、DITA ドキュメントのカスタム状態を設定する方法について説明します。

- [既存のコンテンツを移行](migrate-content.md#)：このトピックでは、AEM リポジトリに既存のコンテンツをオンボードする方法について説明します。

- [ ファイル名の設定](conf-file-names.md#)：このトピックでは、ファイル名を自動的に割り当て、有効なファイル名文字の正規表現を定義するように設定する方法について説明します。

- [ トピックとマップテンプレートの設定](conf-template-tags.md#)：このトピックでは、オーサリングのニーズに合わせてトピックとマップテンプレートを設定する方法について説明します。 AEMのタグ付けシステムについて説明し、AEM Guidesで使用するタグを設定する方法について説明します。

- [Web エディターのカスタマイズ ](conf-web-editor.md#)：このトピックでは、Web エディターで機能を向上させるために行うことができるさまざまなカスタマイズについて説明します。

- [ デフォルトで@navtitle属性を含める](auto-add-navtitle.md#)：このトピックでは、デフォルトでマップ内の参照ファイルに`@navtitle`属性を追加する方法について説明します。

- [ グローバルレベルまたはフォルダーレベルのプロファイルを設定](conf-folder-level.md#)：このトピックでは、フォルダープロファイルを作成し、特定のユーザーに権限を付与するプロセスについて説明します。

- [ バージョン管理](version-management.md#)：このトピックでは、Web エディターで編集用に開くファイルの自動チェックアウトを設定する方法について説明します。

- [出力生成設定の設定](conf-output-generation.md#)：このトピックでは、デフォルトの出力生成プロセスをカスタマイズするための様々な設定について説明します。

- [ ワークフローの設定とカスタマイズ ](customize-workflows.md#)：このトピックでは、AEM Guidesに付属するデフォルトのワークフローをカスタマイズするための様々な設定について説明します。

- [ コンテンツを翻訳](translation.md#)：このトピックでは、翻訳フレームワークの理解と設定に役立つ、AEM ドキュメントの関連するヘルプ記事へのリンクを提供します。 また、コンポーネントベースの翻訳ワークフローを有効にする方法についても説明します。

- [AEM Assets UIの検索を設定](conf-dita-search.md#)：このトピックでは、Assets UIでDITA コンテンツ検索を設定し、検索にカスタム属性を追加する方法について説明します。


## Adobe Experience Managerの概要\（AEM\）

[Adobe Experience Manager \（AEM\） ](https://business.adobe.com/jp/products/experience-manager/adobe-experience-manager.html)は、web サイト、モバイルアプリ、フォームを作成するための包括的なコンテンツ管理ソリューションです。 AEMは、マーケティングコンテンツとアセットの管理を支援します。 AEMはas a Cloud Serviceで利用できます。 AEM as a Cloud Serviceは、AEM Content Management SystemとAEM Digital Asset Managementを組み合わせることで、パーソナライズされたコンテンツ主導型のエクスペリエンスをお客様に提供するのに役立ちます。AEM as a Cloud Serviceの導入を開始するのに役立つ主なリソースは次のとおりです。

- [Experience Manager as a Cloud Serviceの概要](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/home.html?lang=en)
- [AEM as a Cloud Serviceへの移行ジャーニーの概要](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/migration-journey/getting-started.html?lang=en)
- [Experience Manager as a Cloud Serviceへのオンボーディングを開始](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/onboarding/home.html?lang=enhttps://experienceleague.adobe.com/docs/experience-manager-cloud-service/moving/home.html?lang=en)
- [AEM as a Cloud Service のアプリケーションの実装](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/implementing/home.html?lang=ja)
- [AEM as a Cloud Service へのデプロイ](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/implementing/deploying/overview.html?lang=ja)
- [Assets as a Cloud Service ガイド ](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/assets/home.html?lang=ja)

## その他のリソース

以下は、[ ラーニングとサポート ](https://helpx.adobe.com/support/xml-documentation-for-experience-manager.html) ページで入手できるAEM Guidesのその他の役立つリソースの一覧です。

- ユーザーガイド
- API リファレンスガイド
