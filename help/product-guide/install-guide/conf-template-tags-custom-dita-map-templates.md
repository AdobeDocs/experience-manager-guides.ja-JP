---
title: カスタム DITA マップテンプレートの設定
description: カスタム DITA マップテンプレートの設定方法について説明します
exl-id: ea8a6687-1a7b-45c7-8cbc-161f9e88a8be
feature: Template Configuration
role: Admin
level: Experienced
TQID: 'https://experienceleague.adobe.com/16cGf5xY2tAfhc0qIBZeUhYTes-RrdRp-Kj-MoTuacE'
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
feature_v2:
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
    internal-label: Authoring
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
    internal-label: Configuration
subfeature_v2:
  - id: a7bba4a6-624b-4427-a9b8-dd411a1bfd41
    internal-label: Map Editor
  - id: ad602516-aca3-4247-9ae8-f393d958efa9
    internal-label: Editor
  - id: df6fa66f-4542-4a6d-90ca-9f146eb5d494
    internal-label: Template configuration
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '336'
ht-degree: 1%
---
# カスタム DITA マップテンプレートの設定 {#id1774F04F05Z}

AEM Guidesには、DITA マップとBookmapという2つのマップテンプレートが用意されています。 これらのテンプレートに基づいてマップを作成したり、独自のマップテンプレートを定義して新しいマップを作成したりできます。

カスタムマップテンプレートを追加するには、次の手順を実行します。

1. Adobe Experience Managerに管理者としてログインします。

1. Assets UIで、マップテンプレートファイルを保存するように設定されているフォルダーに移動します。 デフォルトでは、すべてのマップテンプレートは/content/dam/dita-templates/maps フォルダーに保存されます。

   >[!NOTE]
   >
   > トピックまたはマップテンプレートを保存するカスタム場所を設定するには、[&#x200B; カスタム DITA テンプレートフォルダーパスの設定](conf-template-tags-custom-dita-topic-template.md#id191LCF0095Z)を参照してください

1. **作成** \> **DITA テンプレート**&#x200B;をクリックします。

1. ブループリントページで、作成するマップテンプレートのタイプを選択します。

   >[!NOTE]
   >
   > 新しいテンプレートのベースとして、マップまたはブックマップテンプレートを使用できます。

1. 「**次へ**」をクリックします。

1. 新しいテンプレートのプロパティ ページで、テンプレートの&#x200B;**タイトル**&#x200B;と&#x200B;**名前**&#x200B;を入力します。

   >[!NOTE]
   >
   > 名前は、テンプレートのタイトルに基づいて自動的に提案されます。 名前を手動で指定する場合は、「名前」にスペース、アポストロフィ、または中括弧が含まれておらず、.ditamapで終わっていることを確認します。

1. 「**作成**」をクリックします。

   マップ作成メッセージが表示されます。

   マップエディターで編集用にテンプレートを開くか、テンプレートファイルをテンプレートストアの場所に保存するかを選択できます。 テンプレートを作成したら、マップエディターを使用して、オーサリングのニーズに応じてテンプレートをカスタマイズできます。 テンプレートを配置したら、必ずグローバルプロファイルまたはフォルダーレベルのプロファイルに関連付けます。


次に新しいマップを作成すると、ブループリントページにテンプレートが表示されます。 DITA マップの作成について詳しくは、*Adobe Experience Manager Guidesの使用*&#x200B;を参照してください。

>[!TIP]
>
> カスタムマップテンプレートの使用に関するベストプラクティスについては、ベストプラクティスガイドの「*カスタムテンプレート*」の節を参照してください。

**親トピック：** [&#x200B; トピックとマップテンプレートの設定](conf-template-tags.md)
