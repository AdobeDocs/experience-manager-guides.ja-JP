---
title: リリースノート | Adobe Experience Manager Guides（2025.07.0 リリース）で修正された問題
description: Adobe Experience Manager Guides as a Cloud Service 2025.07.0 リリースのバグ修正について説明します。
exl-id: 0744e821-5aee-432b-a6c8-7ed6538935db
TQID: https://experienceleague.adobe.com/xzYzEvtyVvvIpq3tfLftkCDuiC08hahdNhr5ZXcQPo8
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
subfeature_v2:
  - id: ad602516-aca3-4247-9ae8-f393d958efa9
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
  - id: ce44533e-8ec8-4e11-a9e9-78b0fe561832
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 520
ht-degree: 4%

---

# 2025.07.0 リリースで修正された問題

この記事では、Adobe Experience Manager Guides as a Cloud Serviceの2025.07.0 リリースの様々な領域で修正されたバグについて説明します。

新機能と機能強化について詳しくは、[&#x200B; 2025.07.0リリースの新機能](whats-new-2025-07-0.md)を参照してください。

2025.07.0 リリース [&#128279;](upgrade-instructions-2025-07-0.md)の アップグレード手順について説明します。

## オーサリング

- Source ビューのエレメント内にXML コメントが追加されると、ビューを切り替えると、コメントの前後のスペースが失われます。 （GUIDES-29781）
- ツールバーの省略記号アイコン（**詳細** メニュー）内にある場合、マルチメディアオプションは機能しません。 （GUIDES-29583）
- Assets UIまたはエディターを使用して新しいトピックを作成する場合、`XMLEditorConfig`で`xmleditor.uniquefilenames`設定がtrueに設定されている場合、エディターでトピックが自動的に開きません。 （GUIDES-28171）
- Source ビューでMathML数式内に追加されたスペースは、エディタービューを切り替えても保持されません。 （GUIDES-26111）

## アセット管理

- ブラウザーを更新した後に作成者ビューでトピックを開くと、ファイルのプロパティパネルで以前に適用されたタグは保持されず、新しいタグを追加すると、特に多数のタグを選択できる場合に、既存のタグが上書きされます。 （GUIDES-29078）
- 多数のアセットを含むDITA マップのメタデータレポートを生成すると、**管理** ボタンが応答しなくなり、応答が遅くなります。 （GUIDES-28443）

## レビュー

- レビューノードが作成されないため、AEM ワークフローを使用してレビュータスクを作成しようとすると、常に失敗します。 （GUIDES-28214）

## 公開

- Cloud Managerを通じてAEM Sites公開コンポーネントパッケージ `guides-components.all-1.3.0.zip`をデプロイすると、コード品質エラーが発生します。 （GUIDES-28873）
- `chunk=to-content`属性を持つDITA マップを公開すると、新しいAEM Sites出力に重複したJCR ノードが作成され、AEM Sitesのコンテンツ構造が冗長になります。 （GUIDES-28104）
- 新しいAEM Sites出力を使用してDITA マップを公開する際に、トピックに`chunk =to-content`属性があり、出力がトピックタイトルをページ名として使用するように設定されている場合、生成されたページ名に元のトピック名を保持する代わりに&#x200B;**chunk**&#x200B;という単語が誤って表示されます。 （GUIDES-28102）
- 新しいAEM Sites公開用のAEM Guides トピックテンプレートで設定されている`cq:template` プロパティに誤った値が表示され、テンプレート構造とコンテンツのレンダリングに影響を与えます。 （GUIDES-27789）


## プラットフォーム

- 大きなコレクションを操作する際に、読み込み時間の長さや断続的なタイムアウトなどのパフォーマンスの問題が発生します。 （GUIDES-29065、GUIDES-28793）
- Experience Manager GuidesにアップロードされたAEM Guides コンポーネントで使用されている非推奨のGuava ライブラリに関連する脆弱性（GUIDES-27402）

## 既知の問題

Adobeでは、2025.07.0 リリースの次の既知の問題を特定しました。

- Markdown トピックを操作する場合、エディターツールバーに&#x200B;**トピック参照** ボタンが表示されますが、機能しません。 （GUIDES-31038）
- フォルダーのノード名が、エディターのフォルダータイトルの代わりに誤って表示される。 （GUIDES-30909）
- **結合** ダイアログで、選択したトピックの使用可能なバージョンを表示する代わりに、ドロップダウンリストに&#x200B;**メインコンテンツ**&#x200B;が誤って表示されます。 （GUIDES-30820）
- 統合シェルを有効にしてDITA マップを開くと、エディターが断続的に更新されます。（GUIDES-26919）
