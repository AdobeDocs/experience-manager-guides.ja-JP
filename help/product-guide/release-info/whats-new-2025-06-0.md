---
title: リリースノート | Adobe Experience Manager Guides 2025.06.0 リリースの新機能
description: Adobe Experience Manager Guides 2025.06.0 リリースの新機能と機能強化について説明します
role: Leader
exl-id: 48f27aa6-d870-4228-8e62-db81699a25f7
source-git-commit: d418ffb254b11430509609b91e0174690815cf73
workflow-type: tm+mt
source-wordcount: '409'
ht-degree: 4%

---

# 2025.06.0 リリースの新機能（2025 年 6 月）

この記事では、Adobe Experience Manager Guides as a Cloud Service 2025.06.0 リリースで導入された新機能と機能強化について説明します。

このリリースで修正された問題の一覧については、[2025.06.0リリースで修正された問題](fixed-issues-2025-06-0.md)を参照してください。

[2025.06.0 リリースのアップグレード手順 ](../release-info/upgrade-instructions-2025-06-0.md) について説明します。

## コンテンツが誤って失われるのを防ぐためのセッションタイムアウトプロンプト

Adobe Experience Manager セッションの有効期限が切れ、無操作状態が原因でログアウトされたことを知らせるポップアップメッセージが表示されるようになりました。 このメッセージは、セッションが終了した後に、Experience Manager Guidesでコンテンツを編集しようとするとトリガーされます。 この機能により、未保存の作業が失われるリスクが軽減され、操作がない期間でもエクスペリエンスの全体的な信頼性と流動性が向上します。

![](assets/sign-out-prompt.png)

詳しくは、Experience Manager Guidesの [ セッションタイムアウトプロンプト ](../user-guide/session-timeout-prompt.md) を参照してください。

## エディターの強化されたマップダウンロードオプション

Experience Manager Guidesの **マップをダウンロード** ダイアログに、新しい **実際のファイル名を使用** オプションが導入されました。 マップ ファイルをダウンロードするときに、既定の UUID の代わりに元のファイル名を保持するように選択できるようになりました。これにより、ファイルの認識と管理がはるかに容易になります。 このオプションは、[**ファイル階層を保持**] を選択した場合にのみ使用でき、[**ファイル階層をフラット化**] を選択した場合は使用できません。これにより、ダウンロードしたマップをより柔軟に編成できます。

詳しくは、[ ファイルのダウンロード ](../user-guide/authoring-download-assets.md#download-a-dita-map-file-from-the-editor) を参照してください。

![](assets/download-map-dialog-new.png){width="300" align="left"}


## エディターでの `navref` 処理の強化

エディタの最新の機能強化により、DITA マップ内のエレメント `navref` 処理が改善されました。 `navref` 要素をマップに追加すると、[**パスを選択** ダイアログが開き、マップにナビゲーション リンクとして含めるマップ参照を簡単に選択できます。 追加されたマップのタイトルは、オーサービューとレイアウトビューの両方に表示されるため、オーサリング中に含まれるナビゲーションをより明確に把握できます。  さらに、追加された `navref` 要素は自動的に解決され、エディターに参照マップが表示されます。

詳しくは、[ ナビゲーション参照を追加 ](../user-guide/map-editor-other-features.md#add-navigation-references) を参照してください。

## AI アシスタントのパフォーマンスの強化

このリリースでは、AI Assistant バックエンド エンジンの機能強化が導入され、パフォーマンスの向上と安定性の向上が実現しています。 この更新を有効にして AI アシスタント ヘルプを引き続き使用するには：

- `chat.url` 設定を更新して、新しいエンドポイント URL を反映します。
- Cloud Managerで新しい環境変数 `GUIDES_AI_SITE_ID` を追加します。

詳しくは、[AI アシスタントの設定 ](../cs-install-guide/conf-smart-suggestions.md) を参照してください。

