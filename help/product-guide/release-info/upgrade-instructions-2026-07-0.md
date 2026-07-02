---
title: リリースノート | Adobe Experience Manager Guides（2026.07.0 リリース）のアップグレード手順と修正された問題
description: 互換性マトリックスと、Adobe Experience Manager Guides as a Cloud Serviceの2026.07.0 リリースにアップグレードする方法について説明します。
source-git-commit: 40c6c9e3c041eee77ed5d2caf24d08b8b6d60d11
workflow-type: tm+mt
source-wordcount: '266'
ht-degree: 1%

---

# 2026.07.0 リリースのアップグレード手順

この記事では、Adobe Experience Manager Guides as a Cloud Serviceの2026.07.0 リリースのアップグレード手順と互換性マトリックスについて説明します。

このリリースで修正された問題のリストについては、[2026.07.0 リリース &#x200B;](fixed-issues-2026-07-0.md)で修正された問題を参照してください。

## 互換性マトリックス

この節では、Experience Manager Guides as a Cloud Serviceの2026.07.0 リリースでサポートされているソフトウェアアプリケーションの互換性マトリックスを示します。

### FrameMakerとFrameMaker Publishing Server

| Experience Manager Guides as a Cloud リリース | FMPS | FrameMaker | Oxygen Author |
| --- | --- | --- | --- |
| 2026.07.0 | 互換性がありません | 2022年以降 | 26.1 |


### Oxygen コネクタ

| Experience Manager Guides as a Cloud リリース | Oxygen コネクタウィンドウ | Oxygen Connector Mac | Oxygen ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- | --- | --- |
| 2026.07.0 | 3.8 -uuid 1 | 3.8 -uuid 1 | 2.3 | 2.3 |


### AEM サイトテンプレートのバージョン

| コンポーネントバージョン | サイトバージョン |
|---|---|
| guides-components.all-1.5.1 | aemg-sites-template-1.3.0 |

### ナレッジベースのテンプレートバージョン

| コンポーネントパッケージ名 | コンポーネントバージョン | テンプレートバージョン |
|---|---|---|
| Cloud Service用Experience Manager Guides コンポーネントコンテンツパッケージ | guides-components.all-1.4.0 | aem-site-template-dxml-1.0.17 |

## 2026.07.0 リリースへのアップグレード

Experience Manager Guidesは、Experience Manager as a Cloud Serviceの最新リリースにアップグレードすると自動的にアップグレードされます。

設定の設定を確認して検証し、正しく実装されていることを確認します。 カスタム設定の変更を導入した場合は、アップグレード元のバージョンに適用される追加手順について、[Cloud Serviceをアップグレードするための追加設定](../install-conf-guide/additional-config-for-upgrade.md)を参照してください。
