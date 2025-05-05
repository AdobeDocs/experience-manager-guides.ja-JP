---
title: このガイドについて
description: このガイドの概要
exl-id: 90d5ad94-eb68-4d73-9b23-a1f3d4b802ba
feature: Introduction
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '580'
ht-degree: 0%

---

# このガイドについて {#id175MC0P0S5Z}

Adobe Experience Manager Guides \（後で *AEM Guides*\と呼ばれます）は、強力なエンタープライズグレードのコンポーネントコンテンツ管理ソリューション \（CCMS\）です。 これにより、Adobe Experience Managerでのネイティブ DITA サポートが可能になり、AEMが DITA ベースのコンテンツの作成と配信を処理できるようになります。 これにより、作成者は、Adobe FrameMakerや使いやすい組み込みの Web Editor など、オフラインの DITA オーサリングツールを使用してコンテンツを作成できます。

このガイドでは、AEM Guidesのダウンロード、インストール、設定の手順を説明します。 このガイドでは、組織のオーサリングおよび公開のニーズに応じてAEM Guidesを設定する詳細な手順を説明します。

このガイドは、次のタイプのオーディエンスを対象としています。

- 管理者：Adobe Experience ManagerにAEM Guidesをインストールして管理します。

- パブリッシングタスクを実行して、様々な形式の出力を生成するパブリッシャー。


## コンテンツ構造

このガイドの情報は、次のように構成されています。

- [ このガイドについて ](#id175MC0P0S5Z)：このトピックでは、このガイドの概要、対象オーディエンス、このガイドでの情報の編成方法を説明します。

- [ ダウンロードとインストール ](download-install.md#)：このトピックでは、AEM Guidesをダウンロード、インストール、アップグレードする方法について説明します。

- [ ユーザー管理とセキュリティ ](user-admin-sec.md#)：このトピックでは、AEMのユーザーと認証のコア概念と、AEM Guidesで作成されるデフォルトのユーザーグループについて説明します。

- [ カスタム DITA-OT および DITA 特殊化の使用 ](dita-ot-specialization.md#)：このトピックでは、カスタム DITA-OT プラグインの設定方法と DITA 特殊化の使用方法を説明します。

- [ 文書状態の設定 ](customize-doc-state.md#)：このトピックでは、DITA 文書のカスタム状態を設定する方法について説明します。

- [ 既存のコンテンツを移行 ](migrate-content.md#)：このトピックでは、AEM リポジトリー上の既存のコンテンツをオンボーディングする方法について説明します。

- [ ファイル名の設定 ](conf-file-names.md#)：このトピックでは、ファイル名を自動的に割り当てたり、有効なファイル名文字に正規表現を定義したりするための設定の設定方法について説明します。

- [ トピックおよびマップテンプレートの設定 ](conf-template-tags.md#)：このトピックでは、オーサリングのニーズに合わせてトピックおよびマップテンプレートを設定する方法について説明します。 AEMのタグ付けシステムと、AEM Guidesと連携するようにタグを設定する方法について説明します。

- [Web エディターのカスタマイズ ](conf-web-editor.md#)：このトピックでは、機能を強化するために Web エディターで実行できる様々なカスタマイズについて説明します。

- [ 詳細マップ エディタを既定値として設定 ](conf-map-editor.md#id194GHE0I0CW)：このトピックでは、詳細マップ エディタをマップ ファイルの既定のエディタとして設定する方法について説明します。

- [ デフォルトで@navtitle 属性を含める ](auto-add-navtitle.md#)：このトピックでは、`@navtitle` 属性をデフォルトでマップ内の参照ファイルに追加する方法について説明します。

- [ グローバルプロファイルまたはフォルダーレベルのプロファイルの設定 ](conf-folder-level.md#)：このトピックでは、フォルダープロファイルを作成し、特定のユーザーに権限を付与するプロセスについて説明します。

- [ バージョン管理 ](version-management.md#)：このトピックでは、Web エディターで編集用に開くファイルの自動ファイルチェックアウトを設定する方法について説明します。

- [ デスクトップベースの XML エディターの統合 ](integrate-desktop-editors.md#)：このトピックでは、外部 XML エディターでドキュメントの編集を有効にするために必要な設定について説明します。

- [ 出力生成設定の指定 ](conf-output-generation.md#)：このトピックでは、デフォルトの出力生成プロセスをカスタマイズするための様々な設定について説明します。

- [ ワークフローの設定とカスタマイズ ](customize-workflows.md#)：このトピックでは、AEM Guidesに付属するデフォルトのワークフローをカスタマイズするための様々な設定について説明します。

- [ コンテンツの翻訳 ](translation.md#)：翻訳フレームワークの理解と設定に役立つ関連ヘルプ記事へのリンクが含まれているAEM ドキュメントです。 コンポーネントベースの翻訳ワークフローを有効にする方法についても説明します。

- [AEM Assets UI の検索の設定 ](conf-dita-search.md#)：このトピックでは、Assets UI で DITA コンテンツ検索を設定し、検索にカスタム属性を追加する方法について説明します。


## その他のリソース

次に、AEM Guidesに関するその他の役立つリソースのリストを示します。これらのリソースは、[ ラーニングとサポート ](https://helpx.adobe.com/jp/support/xml-documentation-for-experience-manager.html) ページで利用できます。

- ユーザーガイド
- API リファレンスガイド
- クイックスタートガイド
- [ ヘルプのアーカイブページ ](https://helpx.adobe.com/jp/xml-documentation-for-experience-manager/archive.html) \（以前のリリースドキュメントにアクセス\）
