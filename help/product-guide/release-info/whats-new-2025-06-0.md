---
title: リリースノート | Adobe Experience Manager Guides 2025.06.0 リリースの新機能
description: Adobe Experience Manager Guides 2025.06.0 リリースの新機能と強化機能について説明します
role: Leader
exl-id: 48f27aa6-d870-4228-8e62-db81699a25f7
TQID: https://experienceleague.adobe.com/Lu9Ebb7OEpxiRmjkho1KnXiry5Kz5kDwfAYbXJD8-uI
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2:
  - id: ad602516-aca3-4247-9ae8-f393d958efa9
role_v2:
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
topic_v2:
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 404
ht-degree: 3%

---

# 2025.06.0 リリース（2025年6月）の新機能

この記事では、Adobe Experience Manager Guides as a Cloud Serviceの2025.06.0 リリースで導入された新機能と強化機能について説明します。

このリリースで修正された問題の一覧については、[2025.06.0リリースで修正された問題](fixed-issues-2025-06-0.md)を参照してください。

2025.06.0 リリース [&#128279;](../release-info/upgrade-instructions-2025-06-0.md)の アップグレード手順について説明します。

## 偶発的なコンテンツの損失を防ぐためのセッションタイムアウトプロンプト

Adobe Experience Manager セッションの有効期限が切れ、非アクティブな状態が原因でログアウトすると、ポップアップメッセージが表示されるようになりました。 このメッセージは、セッションの終了後にExperience Manager Guidesでコンテンツを編集しようとしたときにトリガーされます。 この機能は、保存されていない作業を失うリスクを減らし、非アクティブな期間中でもエクスペリエンスの全体的な信頼性と柔軟性を高めるのに役立ちます。

![](assets/sign-out-prompt.png)

Experience Manager Guidesの[&#x200B; セッション タイムアウトプロンプト &#x200B;](../user-guide/session-timeout-prompt.md)の詳細をご覧ください。

## エディターの強化されたマップダウンロードオプション

Experience Manager Guidesは、**マップをダウンロード** ダイアログで新しい&#x200B;**実際のファイル名を使用** オプションを導入しました。 現在、マップファイルをダウンロードする際には、デフォルトのUUIDではなく元のファイル名を保持するように選択できるため、ファイルの認識と管理がはるかに簡単になります。 このオプションは、**ファイル階層を保持**&#x200B;を選択した場合にのみ使用でき、**ファイル階層を統合**&#x200B;を選択した場合は無効になるので、ダウンロードしたマップをより柔軟に整理できます。

詳細については、[&#x200B; ファイルのダウンロード &#x200B;](../user-guide/authoring-download-assets.md#download-a-dita-map-file-from-the-editor)を参照してください。

![](assets/download-map-dialog-new.png){width="300"}


## エディターでの`navref`処理の強化

エディターの最新の機能強化により、DITA マップ内の`navref`要素の処理が改善されました。 これで、`navref`要素をマップに追加すると、**パスを選択** ダイアログが開き、マップにナビゲーションリンクとして含めるマップ参照を簡単に選択できるようになりました。 追加されたマップのタイトルは、作成者ビューとレイアウトビューの両方に表示され、オーサリング時に含まれるナビゲーションをより見やすくします。  さらに、追加された`navref`要素は自動的に解決され、エディターに参照されたマップが表示されます。

詳細については、[&#x200B; ナビゲーション参照の追加](../user-guide/map-editor-other-features.md#add-navigation-references)を参照してください。

## AI アシスタントのパフォーマンスの向上

このリリースでは、AI アシスタント バックエンドエンジンに強化が導入され、パフォーマンスの向上と安定性の向上が実現されました。 この更新を有効にし、AI アシスタント ヘルプを引き続き使用するには：

- 新しいエンドポイント URLを反映するように`chat.url`設定を更新します。
- Cloud Managerに新しい環境変数`GUIDES_AI_SITE_ID`を追加します。

詳しくは、[AI アシスタントの設定](../cs-install-guide/conf-smart-suggestions.md)を参照してください。

