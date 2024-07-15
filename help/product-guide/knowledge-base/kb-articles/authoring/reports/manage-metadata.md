---
title: AEM Guidesでの DITA ファイルのタグの管理
description: AEM Guidesでの cq:tags の管理について説明する簡単な記事です
exl-id: 2d805c26-df9b-405a-81ca-7aa84c6f86c8
feature: Metadata Management
role: User, Admin
source-git-commit: be06612d832785a91a3b2a89b84e0c2438ba30f2
workflow-type: tm+mt
source-wordcount: '280'
ht-degree: 1%

---

# DITA コンテンツへのタグの追加、削除、および管理方法

タグは、コンテンツの分類に役立ちます。 コンテンツが適切にタグ付けされている場合は、そのコンテンツを使用すると、ビットマップ内の正確なトピックを見つけ、エンドユーザーが公開済みの出力上で適切なコンテンツをより迅速に見つけることができます

> **_メモ：_** 次の記事は、AEM Guides ビルド 4.2 （オンプレミス）/2023 年 2 月（クラウド版）以降を対象としています


## タグを作成

タグ付けはAEMのネイティブ機能で、AEM管理者がこれらのタグの初期作成と設定を支援できます。


## DITA コンテンツのタグの追加、削除、管理

**AEM cq で作成された任意のタグ：DITA コンテンツに対してタグを追加、削除、管理できます**

DITA コンテンツにタグを追加する方法は様々ですが、ここではAEM Guidesの Web Editor UI について説明します。

### 手順：

1. ガイド UI のリポジトリビューに移動します
2. ditamap をダブルクリックし、マップ ビューで開きます
3. 「管理」タブに移動
4. 「管理」タブで、「メタデータ」オプションに移動します。
5. すべての直接および間接 ditamap ファイルには、ここに読み込みがリストされます。
6. 1 つ以上のファイルを選択し、「管理」アイコンをクリックします。 ここで、選択したファイルにタグを追加できます。
また、選択したファイルに共通する既存のタグを削除することもできます。

<img title="AEM Guidesでのタグの管理 " alt="DITA でのタグの管理 " src="ManageTags.jpg">

## トラブルシューティングと FAQ

### 管理/メタデータのリストが空か不完全です

`If list is empty or  incomplete then you may need to run the indexing on your ditamap, You can refer` [ アップグレード手順（コンテンツのインデックス作成） ](https://experienceleague.adobe.com/docs/experience-manager-guides-learn/tutorials/install-guide/on-prem-ig/download-install-upgrade-aemg/upgrade-xml-documentation.html?lang=en#steps-to-index-the-existing-content-to-use-the-new-find-and-replace%3A)

### カスタムメタデータがリストに表示されない

`Only Tags present in cq:tags can be managed from here and custom metadata is not supported`




## その他の役立つリソース

- [ マップダッシュボードを使用した一括タグ付け（Assets UI） ](https://experienceleague.adobe.com/docs/experience-manager-guides-learn/tutorials/user-guide/manaege-metadata/map-editor-bulk-tagging.html?lang=en)
- [Web エディター内の Ditamap レポート ](https://experienceleague.adobe.com/docs/experience-manager-guides-learn/tutorials/user-guide/reports-aem-guide/reports-web-editor.html?lang=en)
- [AEMでのタグ付け ](https://experienceleague.adobe.com/docs/experience-manager-learn/assets/configuring/tagging.html?lang=en)


**その他の質問については、担当の CSM にお問い合わせください**
