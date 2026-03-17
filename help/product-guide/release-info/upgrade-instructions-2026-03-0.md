---
title: リリースノート | Adobe Experience Manager Guides 2026.03.0 リリースのアップグレード手順と修正された問題
description: 互換性マトリックスと、Adobe Experience Manager Guides as a Cloud Serviceの 2026.03.0 リリースにアップグレードする方法について説明します。
source-git-commit: 91befea8c232cd487762ea71f522004e5ca63ee0
workflow-type: tm+mt
source-wordcount: '332'
ht-degree: 11%

---

# 2026.03.0 リリースのアップグレード手順

この記事では、Adobe Experience Manager Guides as a Cloud Service 2026.03.0 リリースのアップグレード手順と互換性マトリックスについて説明します。

新機能と機能強化について詳しくは、[&#x200B; 2026.03.0リリースの新機能](whats-new-2026-03-0.md)を参照してください。

このリリースで修正された問題の一覧については、[2026.03.0リリースで修正された問題](fixed-issues-2026-03-0.md)を参照してください。

## 互換性マトリックス

この節では、Experience Manager Guides as a Cloud Service 2026.03.0 リリースでサポートされるソフトウェアアプリケーションの互換性マトリックスについて説明します。

### FrameMakerとFrameMaker Publishing Server

| Experience Manager Guides as a Cloud リリース | FMPS | FrameMaker | 酸素作成者 |
| --- | --- | --- | --- |
| 2026.03.0 | 互換性がありません | 2022 以上 | 26.1 |


### 酸素コネクタ

| Experience Manager Guides as a Cloud リリース | 酸素コネクタウィンドウ | 酸素コネクタMac | 酸素ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- | --- | --- |
| 2026.03.0 | 3.8 -uuid 1 | 3.8 -uuid 1 | 2.3 | 2.3 |


### AEM サイトテンプレートのバージョン

| コンポーネントのバージョン | サイトバージョン |
|---|---|
| guides-components.all-1.4.0 | aemg-sites-template-1.3.0 |

### ナレッジベーステンプレートバージョン

| コンポーネントパッケージ名 | コンポーネントのバージョン | テンプレートのバージョン |
|---|---|---|
| Cloud Service用Experience Manager Guides コンポーネントコンテンツパッケージ | guides-components.all-1.4.0 | aem-site-template-dxml-1.0.17 |

## 2026.03.0 リリースへのアップグレード

Experience Manager Guidesは、Experience Manager as a Cloud Serviceの最新リリースにアップグレードすると、自動的にアップグレードされます。

>[!IMPORTANT]
>
> このリリースには、フォルダープロファイル設定（ui_config.json）の更新が含まれています。 カスタム設定を使用している場合は、アップグレードの前にこれらの設定を必ずバックアップしてください。 更新後、最新バージョンで導入された変更に合わせて設定を確認および調整します。

セットアップ設定を確認および検証し、正しく実装されていることを確認します。 カスタム設定の変更を行った場合は、[Cloud Serviceのアップグレード用の追加設定 &#x200B;](../cs-install-guide/additional-config-for-cloud-service.md) を参照して、アップグレード元のバージョンに適用できるその他の手順を確認してください。

