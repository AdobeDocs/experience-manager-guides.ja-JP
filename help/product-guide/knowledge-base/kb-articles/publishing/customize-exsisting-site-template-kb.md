---
title: AEM Guides用の既存のAEM サイトテンプレートのカスタマイズ
description: AEM Guides用の既存のAEM サイトテンプレートをカスタマイズする方法を説明します
feature: Installation
role: Admin
level: Experienced
exl-id: d48709b8-f5b2-4545-ac65-838c5d8b1bae
source-git-commit: 4c564a0ffaa8f287bcaf012634d49dbf1e0682b4
workflow-type: tm+mt
source-wordcount: '919'
ht-degree: 1%

---

# AEM Guides用の既存のAEM サイトテンプレートのカスタマイズ

このガイドでは、既存のAEM サイトテンプレートをカスタマイズし、AEM Guidesで使用して DITA マップとトピックからAEM Sitesを生成する手順を順を追って説明します。

標準のAEM Guides（AEMG ドキュメント）テンプレートを使用している場合は、設定とコンポーネントは既に配置されており、AEM Guides コンテンツの公開にそのまま使用できます。 ただし、既存のAEM Sites テンプレートをカスタムブランディングで使用してAEM Guides コンテンツを公開する場合は、次の手順に従って、サイトテンプレートをAEM Guidesのレンダリング要件に合わせます。


## 前提条件

- 適切な権限とAEM テンプレートへのアクセス権を持っている。
- AEMの編集可能テンプレートとAEM Site 構造について理解している。
- 編集可能なテンプレートを使用して構築された既存のサイト階層がある。
- 既存のプロジェクトから少なくとも 2 つのテンプレートがある。

   - **ドキュメントコンテナページテンプレート** DITA マップをドキュメントルートとしてレンダリングするために使用されます。
   - **トピックページテンプレート** 個々の DITA トピックページのレンダリングに使用します。

## テンプレートの命名に関する考慮事項

テンプレート名は、プロジェクト設定に応じて異なります。 例えば、OOTB AEMG ドキュメント設定では次のようになります。

- ドキュメントコンテナページ：`/conf/AEMG-Docs-Site/settings/wcm/templates/kb-content`

- トピック ページ：`/conf/AEMG-Docs-Site/settings/wcm/templates/topic-content`

**カスタマイズ：** カスタマイズプロセスには、次の 2 つの主な手順が含まれます。

1. テンプレートの設定：2 つのテンプレート（コンテナとトピック）を識別して設定します。
2. レンダリングガイドコンポーネント：必要なAEM Guides コンポーネントを埋め込んで、目次、ナビゲーション、メタデータ表示などの機能を有効にします。

## テンプレート設定

AEM サイトから 2 つの編集可能なテンプレートを選択して設定します。

### ドキュメントコンテナページテンプレート

ドキュメントコンテナページテンプレートは、DITA マップのコンテンツをレンダリングする製品ドキュメントコンテナページを作成するために使用されます。

- これは、特定のドキュメントセット（製品マニュアルやガイドなど）のエントリポイントまたはホームページとして機能します。
- テンプレートの最初のノードの jcr:content に id=&quot;category-page&quot; プロパティを追加します。 これにより、このテンプレートから作成されたすべてのページが、AEM Guidesでドキュメントコンテナとして自動的に扱われます。

  ![id=&quot;category-page&quot;の追加 &#x200B;](/help/product-guide/knowledge-base/kb-articles/assets/publishing/add-id-category-page.png){width="650" align="left"}

- 必須プロパティ text=&quot;$category.html$&quot;を持つテキストコンポーネントを追加します。

  ![&#x200B; テキストコンポーネントの追加 &#x200B;](/help/product-guide/knowledge-base/kb-articles/assets/publishing/add-text-component.png){width="650" align="left"}

- 通常、ナビゲーション要素（ドキュメント内のセクションやトピックへのリンクなど）が含まれます。
- ブランディング、ヘッダー、フッターおよびその他のデザイン要素を含めるようにカスタマイズできます。

**ユースケースの例：**
製品マニュアルの DITA マップがある場合、ドキュメントコンテナページテンプレートは、そのマニュアルのホームページを生成し、概要と個々のトピックへのリンクを表示します。

### トピック ページ テンプレート

- **トピックページテンプレート** は、個々の **DITA トピック** のページを作成するために使用します。
- DITA マップ内の各トピックは、このテンプレートを使用して個別のページとしてレンダリングされます。
- 必須のプロパティ **text=&quot;$topic.content$&quot;を持つ** テキストコンポーネント」が含まれます。

  ![&#x200B; 必須プロパティを持つテキストコンポーネントの追加 &#x200B;](/help/product-guide/knowledge-base/kb-articles/assets/publishing/add-text-component-mandatory-property.png){width="650" align="left"}

- このプレースホルダーは、サイト生成時に DITA トピックの実際のコンテンツに置き換えられます。
   - テキストコンポーネントは、適切なレイアウトとスタイル設定を確保するために、通常は **コンテナ コンポーネント** 内に配置されます。
   - は、すべてのトピックページにわたって一貫したヘッダー、フッター、ナビゲーション要素を含めるようにカスタマイズできます。

**ユースケースの例：**
「インストール手順」に関する DITA トピックがある場合、トピックページテンプレートは、そのトピックのコンテンツを表示するページを生成します。

**コンテナコンポーネント：**

![&#x200B; コンテナコンポーネントの追加 &#x200B;](/help/product-guide/knowledge-base/kb-articles/assets/publishing/add-container-component.png){width="650" align="left"}

>[!NOTE]
>
> :resourceType の下で sling`wcm/foundation/components` を使用しているコンポーネントが、対応する `core/wcm/components` に移行されていることを確認します。

同じテンプレートの構造に同じ（コンテナとテキストコンポーネント）を追加します。

![&#x200B; コンテナとテキストコンポーネントの追加 &#x200B;](/help/product-guide/knowledge-base/kb-articles/assets/publishing/add-container-and-text-component.png){width="650" align="left"}

## カスタマイズされたテンプレートでのガイド コンポーネントのレンダリング

目次、ページリダイレクト、ナビゲーション、メタデータ表示などのコア AEM Guides コンポーネント機能を有効にするには、特定のAEM Guides コンポーネントをカスタムテンプレートに含める必要があります。 これらのコンポーネントは、サイトの生成時および実行時に意図した機能が使用可能になるように、対応する編集可能なテンプレート（ドキュメントコンテナページまたはトピックページ）に明示的に追加する必要があります。

コンポーネントのリストとその使用方法については、次の表を参照してください。

| 機能 | コンポーネント名 | 説明 | 推奨テンプレート |
|---|---|---|---|
| 目次 | 案内的ナビゲーション | DITA マップから目次をすべてレンダリングします | ドキュメントコンテナ |
| ページリダイレクト | childredirect | マップの最初のトピック ページにリダイレクトします | ドキュメントコンテナ |
| ミニ目次 | 最小 | 現在のトピックの目次を表示します | トピックページ |
| 最終更新日 | pageproperty | 最終変更日を表示します | トピックページ |
| ポケットベル | ページャ | 前のトピック ページと次のトピック ページ間を移動できるようにします。 | トピックページ |
| 言語ナビゲーション | 言語化 | 異なる言語バージョンを切り替えることができます。 | いずれかのテンプレート |


## コンポーネントの使用例

- **リダイレクトコンポーネント （childredirect）:** これをドキュメントコンテナページテンプレートに追加して、DITA マップから生成された製品ホームページが自動的に最初のトピックページにリダイレクトされるようにします。 ドキュメントコンテナページが、カスタムコンポーネントとレイアウトを備えたスタンドアロンのホームページとして機能するように設計されている場合、このコンポーネントは必要ありません。

- **目次（guidessidenavigation）:** これをトピックページテンプレートに追加して、トピックコンテンツと共にナビゲーション可能な目次をレンダリングします。 TOC は DITA マップから派生し、ユーザーが兄弟トピック間を移動できるようにします。


## Guides クライアントライブラリの有効化

デフォルトでは、AEM Guides コンポーネントパッケージで提供されるクライアントライブラリ（clientlibs）は、カスタムテンプレートには適用されません。 これらを有効にするには：

1. **テンプレートを編集：**

   1. **製品ページ** を **エディターモード** で開きます。
   2. **テンプレートを編集** を選択します（conf/settings/wcm/templates/structure.htmlのような URL が開きます）。

      ![テンプレートの編集](/help/product-guide/knowledge-base/kb-articles/assets/publishing/edit-template.png){width="650" align="left"}

2. **ページポリシーを更新：**

   1. 「**ページ情報**」ボタンに移動し、「**ページポリシー**」を選択します。
   2. 次のクライアントライブラリを追加します。
      - **クライアントライブラリ**
      - **クライアントライブラリのJavaScriptページの先頭**

3. **変更を保存：** 必要なクライアントライブラリを追加した後にテンプレートを保存します。

   ![&#x200B; クライアントライブラリの追加 &#x200B;](/help/product-guide/knowledge-base/kb-articles/assets/publishing/add-client-libraries.png){width="650" align="left"}


>[!NOTE]
>
> 実稼動環境にデプロイする前に、非実稼動環境でテンプレートがテストされていることを確認します。<br><br> 詳しくは、[AEM Guides](https://experienceleague.adobe.com/en/docs/experience-manager-guides/using/overview) および [AEM Sites](https://experienceleague.adobe.com/ja/docs/experience-manager-core-components/using/get-started/authoring) の公式ドキュメントを参照してください。
