---
title: Experience Manager Guides ドキュメント
description: Adobe Experience Manager Guidesのドキュメントを参照してください。 Experience Managerのネイティブ DITA サポート、構造化オーサリング、マルチチャネル公開についてご確認ください。
feature: AEM Guides Tutorials
role: User
TQID: https://experienceleague.adobe.com/S4wTM-7gfU7D-JfKVbb9nK3qoQIG6PdiY7jtpsc6kDs
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
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
    internal-label: Configuration
  - id: d90290ec-3e61-4ebd-8649-bcafe0836803
    internal-label: Reports
  - id: f59890ff-de81-47d5-9ef8-7ab2dd10c6c3
    internal-label: Authoring and publishing content
subfeature_v2:
  - id: aad65a09-20cc-4780-ad44-329d14dc8481
    internal-label: Workflows
  - id: ad602516-aca3-4247-9ae8-f393d958efa9
    internal-label: Editor
  - id: f89f75b0-cf2e-4e96-aec8-fe8c39cbd0ef
    internal-label: Web Editor
  - id: f901afa4-5613-4581-add5-219fa5f03fb5
    internal-label: Publishing
  - id: fd6cc9e1-e5e5-494e-b7b1-a32f2d6cd7c9
    internal-label: Output generation
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
topic_v2:
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
    internal-label: Troubleshooting
  - id: f5c2a4bb-71ca-4d7e-8efd-442250e6ba48
    internal-label: Content reuse
source-git-commit: a45df7e9eef75b0c4684e944fd9611eb6e7b060e
workflow-type: tm+mt
source-wordcount: '289'
ht-degree: 6%
---
# Experience Manager Guides ドキュメント

Experience Manager Guidesは、構造化されたオーサリング、マルチチャネル公開、コンテンツライフサイクル管理を実現する、DITA対応のネイティブ CCMSです。

**デプロイメント：** [!BADGE Cloud Service]{type=Positive} [!BADGE &#x200B; オンプレミス &#x200B;]{type=Informative}

## 役割から始める

::::landing-cards-container
:::card
![管理者アイコン &#x200B;](../assets/admin.png)

管理者

フォルダープロファイル、権限、ワークフロー設定、出力テンプレートを設定します。

[管理ガイド](./install-conf-guide/introduction.md)
:::

:::card
![作成者アイコン &#x200B;](../assets/author.png)

作成者

DITA トピック、マップ、コンテンツ再利用、レビューワークフローを作成、管理します。

[オーサリングの概要](./user-guide/authoring-content.md)
:::

:::card
![発行者アイコン &#x200B;](../assets/publisher.png)

発行者

出力プリセットの設定、ベースラインの管理、チャネルをまたいだ出力の生成を行います。

[マップ管理と公開](./user-guide/map-console-overview.md)
:::

::::

<!--
:::card
![Architects icon](./user-guide/images/architect.svg)

Architects

Design DITA specializations, schemas, and content architecture for your implementation.

[DITA specialization](./install-conf-guide/dita-ot-specialization.md)
:::

::::
-->

## 機能エリア別の探索

<!-- Author note: Six cards wrap to two rows of three in production. The landing-cards-container component is in beta — verify rendering in production before publishing. -->

::::landing-cards-container

:::card
![&#x200B; オーサリングアイコン &#x200B;](../assets/authoring.png)

オーサリング

web エディター、FrameMakerとの統合、コンテンツの再利用、レビューサイクル。

[コンテンツの作成](./user-guide/web-editor.md)
:::

:::card
![&#x200B; レビューアイコン &#x200B;](../assets/review.png)

レビュー

トピックのレビュー、レビュータスクの管理、通知のレビューを行うことができます。

[レビューの概要](./user-guide/review.md)
:::

:::card
![公開アイコン &#x200B;](../assets/publishing.png)

公開

PDF、AEM Sites、HTML5、EPUB、JSON出力タイプ。

[コンテンツを公開](./user-guide/generate-output.md)
:::

:::card
![翻訳アイコン &#x200B;](../assets/translation.png)

翻訳

多言語コンテンツ向けの人間による翻訳と機械翻訳のワークフロー。

[コンテンツの翻訳](./user-guide/translation.md)
:::

:::card
![&#x200B; レポートアイコン &#x200B;](../assets/reports.png)

レポート

トピックリスト、マルチメディア、壊れているリンク、メタデータレポート。

[レポートの生成](./user-guide/reports-intro.md)
:::

:::card
![設定アイコン &#x200B;](../assets/configure.png)

設定

フォルダープロファイル、DITA-OT カスタマイズ、出力テンプレート。

[フォルダープロファイルの設定](./install-conf-guide/conf-profiles.md)
:::

::::

## 新機能

<!-- Author note: Update images, badge labels, feature titles, descriptions, and links each release cycle. Images are stored in /assets/. The shade box with a borderless HTML table provides the three-column layout. Blank lines inside each <td> are required for ExL to process badge and bold-link markdown syntax. -->

>[!BEGINSHADEBOX]

<table>
<tr style="border: 0;">
<td>

![Git コネクタ &#x200B;](../assets/whats-new-git-connector.svg)

**[Git コネクタを使用したコンテンツの読み込み](./user-guide/web-editor-git-connector.md)**

Git リポジトリから直接Guidesにコンテンツを読み込みます。

</td>
<td>

![&#x200B; マップコレクション &#x200B;](../assets/whats-new-map-collection.svg)

**[新しいマップコレクション](./user-guide/generate-output-use-new-map-collection-output-generation.md)**

マップの管理と出力の公開のための統合インターフェイス。

</td>
<td>

![&#x200B; レビューを委任](../assets/whats-new-delegate-review.svg)

**[レビュータスクを委任](./user-guide/review-complete-review-tasks.md#delegate-a-review-task-to-another-reviewer)**

レビューアーは、レビュータスクを別のレビューアーに委任できます。

</td>
</tr>
</table>

>[!ENDSHADEBOX]

## その他のリソース

* [Cloud Serviceのリリースノート](./release-info/latest-release-info-cs.md)
* [オンプレミスのリリースノート](./release-info/latest-release-info.md)
* [AEM Guides community](https://experienceleaguecommunities.adobe.com/adobe-experience-manager-guides-11){target="_blank"}
* [GitHub リポジトリ](https://github.com/AdobeDocs/experience-manager-guides.en){target="_blank"}
* [サポート](https://experienceleague.adobe.com/support/v2/en/){target="_blank"}
* [ビデオチュートリアル](https://experienceleague.adobe.com/en/docs/experience-manager-guides-learn/videos/getting-started/overview){target="_blank"}
