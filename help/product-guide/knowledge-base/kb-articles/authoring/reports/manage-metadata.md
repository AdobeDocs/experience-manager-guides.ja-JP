---
title: AEM GuidesでのDITA ファイルのタグの管理
description: AEM Guidesでのcq:tagsの管理について説明する簡単な記事
exl-id: 2d805c26-df9b-405a-81ca-7aa84c6f86c8
feature: Metadata Management
author: Pulkit Nagpal(punagpal)
role: User, Admin
TQID: https://experienceleague.adobe.com/u3MZ3fUZIp-FYQE895I7kDRkF3l96KhwYMRMJ-rG2RE
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
  - id: d90290ec-3e61-4ebd-8649-bcafe0836803
subfeature_v2:
  - id: ad602516-aca3-4247-9ae8-f393d958efa9
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
  - id: ebde5b41-29c9-4f5e-9ef6-1197e85409e3
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 362
ht-degree: 0%

---

# DITA コンテンツのタグを追加、削除、管理する方法

タグは、コンテンツを分類するのに役立ちます。 コンテンツに適切にタグ付けすれば、ditamap内の正確なトピックを見つけることができ、エンドユーザーは公開された出力で適切なコンテンツをより迅速に見つけることができます

> **_NOTE:_**&#x200B;次の記事は、AEM Guides ビルド 4.2 （オンプレミス）/2023年2月（クラウド版）以降のバージョンを対象としています


## タグを作成

タグ付けはAEMのネイティブ機能であり、AEM管理者は、これらのタグの最初の作成と設定に役立ちます。


## DITA コンテンツ内のタグの追加、削除、管理

**AEM cqで作成されたすべてのタグ：DITA コンテンツに対してタグを追加、削除、管理できます**

DITA コンテンツにタグを追加する方法はいくつかありますが、この記事ではAEM Guidesのweb エディターUIについて説明します。

### 手順：

1. ガイド UIのリポジトリビューに移動
2. ditamapをダブルクリックし、マップビューで開く
3. 「管理」タブに移動
4. 「管理」タブで、「メタデータ」オプションに移動します
5. 直接および間接ditamap ファイルのリストは、ここに読み込まれます。
6. 1つ以上のファイルを選択し、「管理」アイコンをクリックします。 ここで、選択したファイルにタグを追加できます。
選択したファイルに共通する既存のタグを削除することもできます。

<img title="AEM Guidesでのタグの管理 " alt="DITAでのタグの管理 " src="ManageTags.jpg">

## トラブルシューティングと FAQ

### manage->metadataのリストが空または不完全です

`If list is empty or  incomplete then you may need to run the indexing on your ditamap, You can refer` [&#x200B; アップグレード手順（コンテンツのインデックス作成） &#x200B;](https://experienceleague.adobe.com/docs/experience-manager-guides-learn/tutorials/install-guide/on-prem-ig/download-install-upgrade-aemg/upgrade-xml-documentation.html?lang=en#steps-to-index-the-existing-content-to-use-the-new-find-and-replace%3A)

### カスタムメタデータがリストに表示されない

`Only Tags present in cq:tags can be managed from here and custom metadata is not supported`




## その他の役立つリソース

- [マップダッシュボードを使用したバルクタグ付け（Assets UI）](https://experienceleague.adobe.com/docs/experience-manager-guides-learn/tutorials/user-guide/manaege-metadata/map-editor-bulk-tagging.html?lang=en)
- [Web エディターでのDitamap レポート](https://experienceleague.adobe.com/docs/experience-manager-guides-learn/tutorials/user-guide/reports-aem-guide/reports-web-editor.html?lang=en)
- [AEMでのタグ付け](https://experienceleague.adobe.com/docs/experience-manager-learn/assets/configuring/tagging.html?lang=en)


**他の質問については、それぞれのCSMにお問い合わせください**
