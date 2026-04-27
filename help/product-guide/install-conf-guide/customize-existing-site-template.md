---
title: AEM Guides用の既存のAEM サイトテンプレートのカスタマイズ
description: AEM Guides用の既存のAEM サイトテンプレートのカスタマイズ方法について説明します
feature: Installation
role: Admin
level: Experienced
exl-id: eabaec57-e717-45a9-8321-4057b993d7fb
source-git-commit: d5dbd67ba44735cf1545291e9a03e3096acd8166
workflow-type: tm+mt
source-wordcount: '944'
ht-degree: 2%

---

# 新しいAEM サイトテンプレートのカスタマイズ

このガイドでは、既存のAEM サイトテンプレートをカスタマイズしてAEM Guidesで使用し、DITA マップやトピックからAEM Sitesを生成する手順を説明します。

すぐに使用できるAEM Guides（AEMG Docs）テンプレートを使用している場合、設定とコンポーネントは既に配置されており、そのまま使用してAEM Guides コンテンツを公開できます。 ただし、既存のAEM Sites テンプレートとカスタムブランディングを使用してAEM Guides コンテンツを公開する場合は、次の手順に従って、サイトテンプレートとAEM Guides レンダリング要件を調整します。


## 前提条件

- AEM テンプレートに対する適切な権限とアクセス権があります。
- AEMの編集可能なテンプレートとAEM サイト構造について理解します。
- 編集可能なテンプレートを使用して作成された既存のサイト階層があります。
- 既存のプロジェクトから少なくとも2つのテンプレートがあります。

   - DITA マップをドキュメントのルートとしてレンダリングするために使用される&#x200B;**ドキュメントコンテナページテンプレート**。
   - 個別のDITA トピックページのレンダリングに使用される&#x200B;**トピックページテンプレート**。

## テンプレートの命名に関する考慮事項

テンプレート名は、プロジェクトの設定によって異なります。 例えば、OOTB AEMG Docs設定で次のように指定します。

- ドキュメントコンテナページ：`/conf/AEMG-Docs-Site/settings/wcm/templates/kb-content`

- トピックページ：`/conf/AEMG-Docs-Site/settings/wcm/templates/topic-content`

**カスタマイズ：** カスタマイズ プロセスには、次の2つの主要な手順があります。

1. テンプレートの設定：2つのテンプレート（コンテナとトピック）を特定して設定します。
2. Guides コンポーネントのレンダリング：目次、ナビゲーション、メタデータ表示などの機能を有効にするために必要なAEM Guides コンポーネントを埋め込みます。

## テンプレート設定

AEM サイトから2つの編集可能なテンプレートを選択して設定します。

### ドキュメントコンテナページテンプレート

ドキュメントコンテナページテンプレートは、DITA マップのコンテンツをレンダリングする製品ドキュメントコンテナページを作成するために使用されます。

- 特定のドキュメント（製品マニュアルやガイドなど）のエントリポイントまたはホームページとして機能します。
- id=&quot;category-page&quot; プロパティをテンプレートの最初のノードのjcr:contentに追加します。 これにより、このテンプレートから作成されたすべてのページが、AEM Guidesによってドキュメントコンテナとして自動的に処理されるようになります。

  ![ID=&quot;category-page&quot;](/help/product-guide/knowledge-base/kb-articles/assets/publishing/add-id-category-page.png){width="650" align="left"}を追加しています

- 必須プロパティを持つテキストコンポーネントを追加します：text=&quot;$category.html$&quot;。

  ![&#x200B; テキストコンポーネントの追加](/help/product-guide/knowledge-base/kb-articles/assets/publishing/add-text-component.png){width="650" align="left"}

- 通常は、ドキュメント内のセクションやトピックへのリンクなどのナビゲーション要素が含まれます。
- ブランディング、ヘッダー、フッター、その他のデザイン要素を含めるようにカスタマイズできます。

**使用例：**
製品マニュアルのDITA マップがある場合、ドキュメントコンテナページテンプレートはそのマニュアルのホームページを生成し、概要と個々のトピックへのリンクを表示します。

### トピックページテンプレート

- **トピックページテンプレート**&#x200B;は、個々の&#x200B;**DITA トピック**&#x200B;のページを作成するために使用されます。
- DITA マップの各トピックは、このテンプレートを使用して個別のページとしてレンダリングされます。
- 必須プロパティが&#x200B;**テキストコンポーネント**&#x200B;です：text=&quot;$topic.content$&quot;。

  ![必須プロパティを含むテキストコンポーネントを追加する](/help/product-guide/knowledge-base/kb-articles/assets/publishing/add-text-component-mandatory-property.png){width="650" align="left"}

- このプレースホルダーは、サイト生成時にDITA トピックの実際のコンテンツに置き換えられます。
   - テキストコンポーネントは通常、**コンテナコンポーネント**&#x200B;内に配置され、適切なレイアウトとスタイル設定が行われます。
   - あらゆるトピックページをまたいで、ヘッダー、フッター、ナビゲーション要素の一貫性を維持するようにカスタマイズできます。

**使用例：**
「インストール手順」に関するDITA トピックがある場合、トピックページテンプレートはそのトピックのコンテンツを表示するページを生成します。

**コンテナコンポーネント：**

![&#x200B; コンテナコンポーネントの追加](/help/product-guide/knowledge-base/kb-articles/assets/publishing/add-container-component.png){width="650" align="left"}

>[!NOTE]
>
> `wcm/foundation/components`の下のsling:resourceTypeを使用しているコンポーネントが、対応する`core/wcm/components`に移行されていることを確認します。

同じテンプレートの構造に同じ（コンテナとテキストコンポーネント）を追加します。

![&#x200B; コンテナとテキストコンポーネントの追加](/help/product-guide/knowledge-base/kb-articles/assets/publishing/add-container-and-text-component.png){width="650" align="left"}

## カスタマイズされたテンプレートでのGuides コンポーネントのレンダリング

目次、ページリダイレクト、ナビゲーション、メタデータ表示などのAEM Guides コンポーネントのコア機能を有効にするには、特定のAEM Guides コンポーネントをカスタムテンプレートに含める必要があります。 これらのコンポーネントを対応する編集可能なテンプレート（ドキュメントコンテナページまたはトピックページ）に明示的に追加して、意図した機能がサイト生成時および実行時に使用できるようにする必要があります。

コンポーネントのリストとその使用方法については、次の表を参照してください。

| 機能 | コンポーネント名 | 説明 | おすすめのテンプレート |
|---|---|---|---|
| 目次 | guidessidenavigation | DITA マップから完全な目次をレンダリング | ドキュメントコンテナ |
| ページリダイレクト | childredirect | マップの最初のトピックページにリダイレクトします | ドキュメントコンテナ |
| ミニ目次 | minitoc | 現在のトピックの目次を表示 | トピックページ |
| 最終更新日 | pageproperty | 最終変更日を表示 | トピックページ |
| Pager | pager | 前のトピックページと次のトピックページの間のナビゲーションを許可します | トピックページ |
| 言語ナビゲーション | 言語操作 | 異なる言語バージョン間の切り替えを有効にします | テンプレートか |


## コンポーネントのユースケース

- **リダイレクトコンポーネント （childredirect）:** DITA マップから生成された製品ホームページが最初のトピックページに自動的にリダイレクトされるように、これをドキュメントコンテナページテンプレートに追加します。 ドキュメントコンテナページが、カスタムコンポーネントとレイアウトを備えたスタンドアロンホームページとして機能するように設計されている場合、このコンポーネントは必要ありません。

- **目次（guidessidenavigation）:**&#x200B;これをトピックページテンプレートに追加して、トピックコンテンツに沿ってナビゲーション可能な目次をレンダリングします。 目次は、DITA マップから派生し、ユーザーが兄弟トピック間を移動するのに役立ちます。


## Guides クライアントライブラリの有効化

デフォルトでは、AEM Guides コンポーネントパッケージで提供されるクライアントライブラリ（clientlibs）は、カスタムテンプレートには適用されません。 有効にするには：

1. **テンプレートを編集：**

   1. **エディターモード**&#x200B;で&#x200B;**製品ページ**&#x200B;を開きます。
   2. 「**テンプレートを編集**」を選択します（conf/settings/wcm/templates/structure.htmlなどのURLが開きます）。

      ![テンプレートの編集](/help/product-guide/knowledge-base/kb-articles/assets/publishing/edit-template.png){width="650" align="left"}

2. **ページポリシーの更新：**

   1. **ページ情報** ボタンに移動し、**ページポリシー**&#x200B;を選択します。
   2. 次のクライアントライブラリを追加します。
      - **クライアントライブラリ**
      - **クライアントライブラリ JavaScript ページの先頭**

3. **変更を保存：**&#x200B;必要なクライアントライブラリを追加した後にテンプレートを保存します。

   ![&#x200B; クライアントライブラリを追加](/help/product-guide/knowledge-base/kb-articles/assets/publishing/add-client-libraries.png){width="650" align="left"}


>[!NOTE]
>
> 実稼動環境にデプロイする前に、テンプレートが実稼動以外の環境でテストされていることを確認します。<br><br>詳細については、[AEM Guides](https://experienceleague.adobe.com/en/docs/experience-manager-guides/using/overview)および[AEM Sites](https://experienceleague.adobe.com/ja/docs/experience-manager-core-components/using/get-started/authoring)の公式ドキュメントを参照してください。
