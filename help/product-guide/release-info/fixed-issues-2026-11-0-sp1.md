---
title: リリースノート | Adobe Experience Manager Guides（2026.11.0 Service Pack 1 リリース）の修正済みの問題
description: Adobe Experience Manager Guides as a Cloud Serviceの2026.11.0 Service Pack 1 リリースのバグ修正について説明します。
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
source-git-commit: 8821e671951d83439688aa33f88ac1f91f0919eb
workflow-type: tm+mt
source-wordcount: '315'
ht-degree: 0%
---
# 2026.11.0 Service Pack 1 リリースで修正された問題

この記事では、Adobe Experience Manager Guides as a Cloud Serviceの2026.11.0 Service Pack 1 リリースで修正されたバグについて説明します。

## 公開

AEM Sitesへの公開時（複合コンポーネントマッピングを使用）に、次の問題が発生します。

- 選択したトピックまたは`microservice-based`公開付きのサブマップを再生成するには、完全なマップを生成する必要があります。 （GUIDES-59322）
- 分断されたトピックを含むサブマップを再生成すると、目次に誤ったタイトルとリンクが表示されます。 各チャンク化されたトピック項目には、最後のチャンク化されたトピックのタイトルが表示されます。 （GUIDES-58650）

ベースライン（レガシー）または新規ベースラインのいずれかの動的ベースラインを使用してAEM Sitesに公開すると、次の問題が発生します。

- ベースラインは、同じパブリッシュ操作中に複数回リビルドされ、パブリッシュ時間が長くなり、場合によってはリビルドがストールします。 新しいベースラインでは、増分公開では、現在のベースラインではなく古いベースラインも使用されるため、出力に最新のコンテンツが反映されない場合があります。 （GUIDES-60189）
- マップダッシュボードを使用すると、パフォーマンスの問題が発生します。 （GUIDES-60189、GUIDES-55646）

## 既知の問題

Adobeでは、2026.11.0 Service Pack 1 リリースの次の既知の問題を特定しました。

- Experience Manager Guides as a Cloud Service 2026.11.0以降を使用する場合、AEMが公開プロセス中に特定の内部サービス（サーバーインスタンスの開始時など）を再起動すると、公開がアプリケーションエラーで失敗します。 （GUIDES-60804） <br>**回避策：**&#x200B;この問題を解決するには、公開を再試行してください。
- 複数のAEM Sites（複合コンポーネントマッピングを使用）プリセットまたは&#x200B;**Map collection**&#x200B;またはAPIを介してネイティブPDF プリセットの出力を生成する場合、出力の生成は`Rebuild the Baseline`例外で失敗します。 <br>**回避策：** プリセットを同時ではなく順を追って公開して、問題を回避します。