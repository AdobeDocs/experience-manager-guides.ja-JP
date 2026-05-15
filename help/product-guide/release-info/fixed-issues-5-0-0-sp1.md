---
title: リリースノート | Adobe Experience Manager Guides 5.0.0 Service Pack 1 リリースの修正済みの問題
description: Adobe Experience Manager Guides 5.0.0 Service Pack 1 リリースのバグ修正について説明します
role: Leader
exl-id: 1d0bc3d0-aedf-4f67-b6f7-2208facdee96
TQID: https://experienceleague.adobe.com/0qxye7ZUWt1iixHthjjTNJgtlOQX-C30jGi5zQlRJfA
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a3bd6397-2eb2-4908-a61c-226e26855dcaid: ab01a588-7dea-43f2-a699-0b3f128465d6
role_v2: id: f8a45b24-4be7-4f1b-909b-60d06b483a20
topic_v2: id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 288
ht-degree: 2%

---

# 5.0.0 サービスパック 1 リリース（2025年6月）で修正された問題


この記事では、Adobe Experience Manager Guidesの5.0.0 Service Pack 1 リリースの様々な領域で修正されたバグについて説明します。

5.0.0 Service Pack 1 リリース ](upgrade-instructions-5-0-0-sp1.md)の[ アップグレード手順について説明します。

## オーサリング

- コンテンツが`codeblock`にペーストされた場合、または`codeblock`にスペースが追加され、ビューが切り替えられると、間隔が失われます。 （GUIDES-29347）
- **Source** ビューのエレメント内でXML コメントが追加されると、ビューを切り替えると、コメントの前後のスペースが失われます。 （GUIDES- 28188）

## アセット管理

- ブラウザーの更新後に&#x200B;**作成者** ビューでトピックを開くと、**ファイルプロパティ** パネルで以前に適用されたタグは保持されず、新しいタグを追加すると、特に多数のタグが選択可能な場合、既存のタグが上書きされます。 （GUIDES-29078）
- 多数のアセットを含むDITA マップのメタデータレポートを生成すると、**管理** ボタンが応答しなくなり、応答が遅くなります。 （GUIDES-29778）

## 翻訳

- Experience Manager Guidesから翻訳用のアセットを送信する場合、アセットは翻訳ジョブに追加されません。これにより、**開始** ボタンが表示されず、翻訳ジョブが開始されません。 （GUIDES-28237）

## 公開

- フォルダープロファイル内の出力プリセットの設定を変更し、**プリセット変更を適用**&#x200B;を選択した場合、変更はDITA マップに存在する出力プリセットに反映されません。 （GUIDES-26694）

## レビュー

- レビューノードが作成されないため、AEM ワークフローを使用してレビュータスクを作成しようとすると、常に失敗します。 （GUIDES-28214）
