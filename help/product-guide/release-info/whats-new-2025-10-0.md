---
title: リリースノート | Adobe Experience Manager Guides 2025.10.0 リリースの新機能
description: Adobe Experience Manager Guides 2025.10.0 リリースの新機能と強化機能について説明します
role: Leader
exl-id: 5bc6f1f6-225b-46c0-a05a-099583e402d8
TQID: https://experienceleague.adobe.com/G-6R7iN6pqp0e2J68IyyXdN9Fz--FjmMKcEhwtdAP2Q
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a3bd6397-2eb2-4908-a61c-226e26855dcaid: d90290ec-3e61-4ebd-8649-bcafe0836803
subfeature_v2: id: f9dbea21-a714-40dd-bc90-080d8046c93f
role_v2: id: f8a45b24-4be7-4f1b-909b-60d06b483a20
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 523
ht-degree: 3%

---

# 2025.10.0 リリース（2025年10月）の新機能

この記事では、Adobe Experience Manager Guides as a Cloud Serviceの2025.10.0 リリースで導入された新機能と強化機能について説明します。

このリリースで修正された問題の一覧については、[2025.10.0リリースで修正された問題](fixed-issues-2025-10-0.md)を参照してください。

2025.10.0 リリース ](../release-info/upgrade-instructions-2025-10-0.md)の[ アップグレード手順について説明します。


## エディター設定の名前がWorkspace設定に変更され、ホームページからアクセスできるようになりました

ナビゲーションと使いやすさを向上させるために、次の機能強化が導入されました。

- Experience Manager Guidesの&#x200B;**Editor settings**&#x200B;の名前が&#x200B;**Workspace settings**&#x200B;に変更されました。
- 以前はエディターとマップコンソールのインターフェイスでのみ使用していた&#x200B;**詳細アクション** メニュー（3点メニュー）に、[ ホームページ ](../user-guide/intro-home-page.md)からアクセスできるようになりました。

  ![](assets/workspace-settings.png)

## 作成者ビューで、トピックやマップ内の重複するIDを簡単に識別して修正できます

Experience Manager Guidesでは、エディターに「**重複ID**」ボタンが追加され、1つのトピックまたはマップ内に存在する重複IDをすばやく特定して修正できるようになりました。 重複したIDが検出されると、このボタンは&#x200B;**作成者** ビューのエディターインターフェイスの左下隅に表示されます。 ボタンを選択すると、重複IDを持つすべてのインスタンスのリストがポップオーバーに表示されます。 インスタンスを選択すると、トピックまたはマップ内の対応するコンテンツがハイライト表示され、右側のパネルから重複するIDを見つけて修正できます。

詳細については、[ エディターの追加機能](../user-guide/web-editor-other-features.md)を参照してください。

![](assets/duplicate-element-IDs.png){width="350"}

## リポジトリおよびレポートフィルターの機能強化

リポジトリの詳細フィルターの下にある&#x200B;**Locked by** フィルターと、DITA マップの&#x200B;**Author** フィルターでは、一度にすべてを一度に読み込むのではなく、スクロールするとユーザーリストが徐々に読み込まれるようになりました。 ページ分割された読み込みにより、速度が向上し、大規模なユーザーデータセットをより効率的かつシームレスに操作できるようになります。

## レビューパネルからレビュータスクのステータスに直接アクセス

レビュータスクの開始者として、レビューパネルからレビュータスクのステータスを直接確認できるようになりました。 最新の機能強化では、レビューパネル内の&#x200B;**更新タスク** ダイアログに、新しい&#x200B;**レビューステータスを確認** オプションが含まれています。 このオプションを選択すると、レビューダッシュボードに直接アクセスできます。このダッシュボードでは、レビューアーごとにタスクのステータスを表示でき、コンテキストを切り替えることなく、タスクの進捗状況にすばやくアクセスできます。

詳細については、[ レビューの依頼または作成者としてのレビュータスクの終了](../user-guide/review-close-review-task.md)を参照してください。

![](assets/check-review-status-icon.png){width="350"}



## フォルダーまたはアセットの後処理ステータスを追跡するAPI

新しいAPIを使用して、個々のアセットとフォルダーの後処理ステータスを追跡できるようになりました。 これは、コンテンツが完全に処理された後にのみ公開する必要がある、自動化されたワークフローを使用するチームにとって特に有用です。 APIは、準備状況を確認するための信頼性の高い方法を提供し、不完全な処理によって引き起こされる公開エラーのリスクを軽減します。

また、このAPIの導入により、アセット後処理イベントが自動的に実行されなくなります。 代わりに、管理者は`fmdita config manager`の設定を通じてこのイベントを有効にできるようになりました。

詳細については、次を参照してください。

- [個々のアセットとフォルダーの後処理ステータスを追跡するAPI](../api-reference/track-post-processing-status.md)
- [fmdita config managerの後処理イベントハンドラー設定](../api-reference/post-process-event.md)
