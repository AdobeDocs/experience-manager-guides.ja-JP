---
title: リリースノート | Adobe Experience Manager Guides（2024.4.0 リリース）の修正済みの問題
description: Adobe Experience Manager Guides as a Cloud Service 2024.04.0 リリースのバグ修正について説明します。
exl-id: 35351d71-7739-4ad3-a063-67adf64906bf
TQID: https://experienceleague.adobe.com/cHKuFCElWbjxik0EHgoTrtlq2t3I62LQ5zUArzBoMqk
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a3bd6397-2eb2-4908-a61c-226e26855dcaid: ab01a588-7dea-43f2-a699-0b3f128465d6
subfeature_v2: id: ad602516-aca3-4247-9ae8-f393d958efa9id: d6596f3f-92a7-43ec-b444-237db6adad05id: f89f75b0-cf2e-4e96-aec8-fe8c39cbd0efid: fd6cc9e1-e5e5-494e-b7b1-a32f2d6cd7c9
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554
topic_v2: id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 577
ht-degree: 8%

---

# 2024.04.0 リリースで修正された問題

この記事では、Adobe Experience Manager Guides as a Cloud Serviceの2024.04.0 リリースの様々な領域で修正されたバグについて説明します。

新機能と機能強化について詳しくは、[ 2024.04.0リリースの新機能](whats-new-2024-04-0.md)を参照してください。

2024.04.0 リリース ](upgrade-instructions-2024-04-0.md)の[ アップグレード手順について説明します。

## オーサリング

- **Copy**&#x200B;関数は、Adobe Experience Manager as a Cloud Serviceの空のフォルダーを複製できません。 (15353)
- Web エディターは.pptx ファイルをアップロードできません。 (14837)
- Web エディターでテキストを検索する際に、Enter キーを押すと、検索したテキストの最初の出現にカーソルが戻ります。 (14820)
- 自動保存は複数の問題を引き起こし、カーソルの位置を変更し、文書内を手動でクリックする必要があります。 (14253)
- グローバル **検索と置換**&#x200B;で見つかったファイルを開くと、検索結果が無効になります。 (12142)
- ソースビューで、`</conbody>`が誤った場所に挿入されることがあります。 (11305)
- XML エディターで、ツールチップ機能がSource フィールドの更新に失敗する。 (15847)
- **UUID リンクを共有**&#x200B;機能は、Adobe Experience Managerの画像では機能しません。 (15598)
- `<reltable>`および`<fig>` タグで重複テキストの問題が発生します。 (15238)
- **属性** パネルで、ちらつき問題が発生します。 (15237)
- コンテンツ内の文字または単語を削除すると、カーソルはブロック要素の間にジャンプします。 (15224)
- **属性** パネルは、Web エディターのSource ビューには表示されません。 (14387)
- Web エディターのタグの末尾で編集中に、不要な改行されないスペースが追加される。 (11786)
- DITA ファイルのスペルミスを修正すると、コンテンツが削除されます。 (11610)


## 公開

- 「**孤立サイトを削除**」オプションが有効になっている場合、AEM サイトの出力の生成に失敗します。 (15896)
- マップコレクションにファイルを追加する際に、編集機能が機能しない。 (15813)
- JSON出力で、DITA マップまたはトピックのメタデータがJSON出力ファイルに反映されない。 (15713)
- プリセットの名前を変更すると、PDFのネイティブ公開に失敗します。 (15662)
- パブリッシュされたAEM サイト出力の&#x200B;**sourcePath** プロパティが正しくありません。 (15502)
- PDFのネイティブ出力プリセットで、言語変数の選択とカスタマイズが正しく機能しない。 (15399)
- 大きなスタイルシートまたはレイアウトを含むテンプレートを使用すると、PDFのネイティブ生成が失敗します。 (15344)
- `<conref>`が絶対パスで使用されている場合、公開された出力でコンテンツが適切にレンダリングされません。
- `fmdita rewriter`と`ResourceResolver`の間の競合により、AEM Sites URLの短縮が機能しません。 (14793)
- AEM Sites出力では、**processing-role=&quot;resource-only&quot;**、**search=&quot;no&quot;**、**chunk=&quot;to-content&quot;**&#x200B;の属性がそれぞれ表示されません。 (14442)
- 2k マップを含むフォルダーがフォルダープロファイル内のフォルダーパスに設定されている場合、出力プリセットに適用された変更は失敗します。（14852）

## 管理

- 2023年10月リリースのExperience Manager Guides as a Cloud Serviceの後、閉じられていない&#x200B;**Resource Resolvers**&#x200B;が原因でセッション数が増加し、PathNotFoundException エラーが発生します。 (15604)
- 機能フラグ **fmdita.useapproval**&#x200B;が期待どおりに機能していません。 (15310)
- Java APIを使用したベースラインの作成は、Experience Manager Guides as a Cloud Serviceの2023年6月リリースでは機能しません。 (14787)
- アセットのアップロードが500 MBを超える場合、`/bin/fmdita/import` APIは保留中のリクエストに無期限で停止したままになります。 (14743)

## レビュー

- レビューノードを削除すると、Adobe Experience Manager Guidesでコメントを開いたり表示したりできなくなります。 (15366)
- Web エディターで、レビューパネルの読み込みが遅くなります。 (14680)

## 翻訳

- **翻訳を受け入れる**&#x200B;は、一時ファイルの翻訳を完了できませんでした。 (14665)
