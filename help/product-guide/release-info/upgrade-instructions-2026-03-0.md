---
title: リリースノート | Adobe Experience Manager Guides（2026.03.0 リリース）のアップグレード手順と修正された問題
description: 互換性マトリックスと、Adobe Experience Manager Guides as a Cloud Serviceの2026.03.0 リリースにアップグレードする方法について説明します。
exl-id: 5700e649-104d-4caf-a195-6e667a71faee
hidefromtoc: true
source-git-commit: 22ea3fe3ccb974fe3795299f7815e7aae78d41e7
workflow-type: tm+mt
source-wordcount: '332'
ht-degree: 11%

---

# 2026.03.0 リリースのアップグレード手順

この記事では、Adobe Experience Manager Guides as a Cloud Serviceの2026.03.0 リリースのアップグレード手順と互換性マトリックスについて説明します。

新機能と機能強化について詳しくは、[ 2026.03.0リリースの新機能](whats-new-2026-03-0.md)を参照してください。

このリリースで修正された問題の一覧については、[2026.03.0リリースで修正された問題](fixed-issues-2026-03-0.md)を参照してください。

## 互換性マトリックス

この節では、Experience Manager Guides as a Cloud Serviceの2026.03.0 リリースでサポートされているソフトウェアアプリケーションの互換性マトリックスを示します。

### FrameMakerとFrameMaker Publishing Server

| Experience Manager Guides as a Cloud リリース | FMPS | FrameMaker | Oxygen Author |
| --- | --- | --- | --- |
| 2026.03.0 | 互換性がありません | 2022年以降 | 26.1 |


### Oxygen コネクタ

| Experience Manager Guides as a Cloud リリース | Oxygen コネクタウィンドウ | Oxygen Connector Mac | Oxygen ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- | --- | --- |
| 2026.03.0 | 3.8 -uuid 1 | 3.8 -uuid 1 | 2.3 | 2.3 |


### AEM サイトテンプレートのバージョン

| コンポーネントバージョン | サイトバージョン |
|---|---|
| guides-components.all-1.4.0 | aemg-sites-template-1.3.0 |

### ナレッジベースのテンプレートバージョン

| コンポーネントパッケージ名 | コンポーネントバージョン | テンプレートバージョン |
|---|---|---|
| Cloud Service用Experience Manager Guides コンポーネントコンテンツパッケージ | guides-components.all-1.4.0 | aem-site-template-dxml-1.0.17 |

## 2026.03.0 リリースへのアップグレード

Experience Manager Guidesは、Experience Manager as a Cloud Serviceの最新リリースにアップグレードすると自動的にアップグレードされます。

>[!IMPORTANT]
>
> このリリースには、フォルダープロファイル設定（ui_config.json）のアップデートが含まれています。 カスタム設定を使用している場合は、アップグレードする前に、必ずそれらのバックアップを取ってください。 更新後、最新バージョンで導入された変更に合わせて、設定を確認して調整します。

設定の設定を確認して検証し、正しく実装されていることを確認します。 カスタム設定の変更を導入した場合は、アップグレード元のバージョンに適用される追加手順について、[Cloud Serviceをアップグレードするための追加設定](../cs-install-guide/additional-config-for-cloud-service.md)を参照してください。
