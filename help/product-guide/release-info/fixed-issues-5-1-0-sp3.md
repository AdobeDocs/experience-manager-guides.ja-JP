---
title: リリースノート | Adobe Experience Manager Guides 5.1.0 Service Pack 3 リリースの修正済みの問題
description: Adobe Experience Manager Guides 5.1.0 Service Pack 3 リリースのバグ修正について説明します
role: Leader
exl-id: faa9a5d7-616f-4692-98d1-23abc78556b6
TQID: https://experienceleague.adobe.com/qiVY-B-D3FcHq2PH7Go2AAFpnstCrPJ2MVLEalQCVn0
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a3bd6397-2eb2-4908-a61c-226e26855dcaid: ab01a588-7dea-43f2-a699-0b3f128465d6
role_v2: id: f8a45b24-4be7-4f1b-909b-60d06b483a20
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 297
ht-degree: 2%

---

# 5.1.0 サービスパック 3 リリース（2025年12月）で修正された問題


この記事では、Adobe Experience Manager Guidesの5.1.0 Service Pack 3 リリースの様々な領域で修正されたバグについて説明します。

5.1.0 サービスパック 3 リリース ](upgrade-instructions-5-1-0-sp3.md)の[ アップグレード手順について説明します。


## オーサリング

- トピックまたはマップのフォルダーレベルのプロファイルに適用されたカスタム CSSは、ブラウザーの更新時にプレビューモードでデフォルトのスタイルに戻されます。 （GUIDES-31098）
- **新しいバージョンとして保存** ダイアログから、トピックに複数の&#x200B;**バージョンラベル**&#x200B;を追加できません。 （GUIDES-32716）


## アセット管理

- Assets UIの&#x200B;**バージョン履歴** パネルからバージョン ラベルを削除できません。 （GUIDES-38276）


## レビュー

- レビュー担当者がレビュータスクを完了するか、開始者がコメントを入力せずにレビュータスクを更新すると、送信された通知メールに最新の以前のコメントが表示されます。 （GUIDES-33590）

## 公開

- 従来のコンポーネントマッピングを使用してAEM Sites出力を生成すると、`copy-to`属性を使用するトピックは、`copy-to`属性で設定された名前ではなく`copy-from` トピックの名前で公開されます。 （GUIDES-22155）
- ネイティブ PDF出力が動的ベースラインを使用して生成される場合、実際のマップタイトルではなく、PDF タイトルとして&#x200B;**PDFProject**&#x200B;という用語が表示されます。 （GUIDES-31102）

## プラットフォーム

- トピックまたはマップ内のDAM コンテンツへの参照に`scope="external"`を使用すると、アセットの相対パスがGUIDで置き換えられます。 （GUIDES-35605）

## 既知の問題

Adobeでは、5.1.0 Service Pack 3 リリースの既知の問題を次のように特定しました。

- タスクの詳細ページからレビュータスクを「完了」とマークすると、タスクは完了して閉じられます。ただし、レビューダッシュボードでは、ステータスが&#x200B;**進行中**&#x200B;として表示され続けます。 （GUIDES-39375）
