---
title: リリースノート | Adobe Experience Manager Guides 2025.06.0 リリースの新機能
description: Adobe Experience Manager Guides 2025.06.0 リリースの新機能と強化機能について説明します
role: Leader
exl-id: 48f27aa6-d870-4228-8e62-db81699a25f7
source-git-commit: 12ba7129255257970ddd7a0989149be664ce9803
workflow-type: tm+mt
source-wordcount: '404'
ht-degree: 3%

---

# 2025.06.0 リリース（2025年6月）の新機能

この記事では、Adobe Experience Manager Guides as a Cloud Serviceの2025.06.0 リリースで導入された新機能と強化機能について説明します。

このリリースで修正された問題の一覧については、[2025.06.0リリースで修正された問題](fixed-issues-2025-06-0.md)を参照してください。

2025.06.0 リリース ](../release-info/upgrade-instructions-2025-06-0.md)の[ アップグレード手順について説明します。

## 偶発的なコンテンツの損失を防ぐためのセッションタイムアウトプロンプト

Adobe Experience Manager セッションの有効期限が切れ、非アクティブな状態が原因でログアウトすると、ポップアップメッセージが表示されるようになりました。 このメッセージは、セッションの終了後にExperience Manager Guidesでコンテンツを編集しようとしたときにトリガーされます。 この機能は、保存されていない作業を失うリスクを減らし、非アクティブな期間中でもエクスペリエンスの全体的な信頼性と柔軟性を高めるのに役立ちます。

![](assets/sign-out-prompt.png)

Experience Manager Guidesの[ セッション タイムアウトプロンプト ](../user-guide/session-timeout-prompt.md)の詳細をご覧ください。

## エディターの強化されたマップダウンロードオプション

Experience Manager Guidesは、**マップをダウンロード** ダイアログで新しい&#x200B;**実際のファイル名を使用** オプションを導入しました。 現在、マップファイルをダウンロードする際には、デフォルトのUUIDではなく元のファイル名を保持するように選択できるため、ファイルの認識と管理がはるかに簡単になります。 このオプションは、**ファイル階層を保持**&#x200B;を選択した場合にのみ使用でき、**ファイル階層を統合**&#x200B;を選択した場合は無効になるので、ダウンロードしたマップをより柔軟に整理できます。

詳細については、[ ファイルのダウンロード ](../user-guide/authoring-download-assets.md#download-a-dita-map-file-from-the-editor)を参照してください。

![](assets/download-map-dialog-new.png){width="300"}


## エディターでの`navref`処理の強化

エディターの最新の機能強化により、DITA マップ内の`navref`要素の処理が改善されました。 これで、`navref`要素をマップに追加すると、**パスを選択** ダイアログが開き、マップにナビゲーションリンクとして含めるマップ参照を簡単に選択できるようになりました。 追加されたマップのタイトルは、作成者ビューとレイアウトビューの両方に表示され、オーサリング時に含まれるナビゲーションをより見やすくします。  さらに、追加された`navref`要素は自動的に解決され、エディターに参照されたマップが表示されます。

詳細については、[ ナビゲーション参照の追加](../user-guide/map-editor-other-features.md#add-navigation-references)を参照してください。

## AI アシスタントのパフォーマンスの向上

このリリースでは、AI アシスタント バックエンドエンジンに強化が導入され、パフォーマンスの向上と安定性の向上が実現されました。 この更新を有効にし、AI アシスタント ヘルプを引き続き使用するには：

- 新しいエンドポイント URLを反映するように`chat.url`設定を更新します。
- Cloud Managerに新しい環境変数`GUIDES_AI_SITE_ID`を追加します。

詳しくは、[AI アシスタントの設定](../cs-install-guide/conf-smart-suggestions.md)を参照してください。

