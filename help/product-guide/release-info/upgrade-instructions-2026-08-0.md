---
title: リリースノート | Adobe Experience Manager Guides（2026.08.0 リリース）のアップグレード手順と修正された問題
description: 互換性マトリックスと、Adobe Experience Manager Guides as a Cloud Serviceの2026.08.0 リリースにアップグレードする方法について説明します。
source-git-commit: 0de22d4883096f6a9f3b2ca8acfad4a10992f5e7
workflow-type: tm+mt
source-wordcount: '417'
ht-degree: 1%

---

# 2026.08.0 リリースのアップグレード手順

この記事では、Adobe Experience Manager Guides as a Cloud Serviceの2026.08.0 リリースのアップグレード手順と互換性マトリックスについて説明します。

新機能と機能強化について詳しくは、[2026.08.0 リリース &#x200B;](whats-new-2026-08-0.md)の新機能を参照してください。

このリリースで修正された問題のリストについては、[2026.08.0 リリース &#x200B;](fixed-issues-2026-08-0.md)で修正された問題を参照してください。

## 互換性マトリックス

この節では、Experience Manager Guides as a Cloud Serviceの2026.08.0 リリースでサポートされているソフトウェアアプリケーションの互換性マトリックスを示します。

### Java SDKのリソース

カスタム Java プラグインまたはExperience Manager Guidesとの統合を開発する場合は、次の資料を参照してください。 SDKのバージョンが、インストールされているExperience Manager Guides リリースと一致していることを確認します。

| リリース | Java SDK バージョン | Maven Central | Java API リファレンス |
|---|---|---|----|
| 2026.08.0 | 2026.8.0 | [AEM Guides SDK API 2026.8.0](https://central.sonatype.com/artifact/com.adobe.aem/aem-dox-sdk-api/2026.8.0) | [Javadoc 2026.8.0](https://javadoc.io/doc/com.adobe.aem/aem-dox-sdk-api/latest/index.html) |

詳細については、[Maven Central リポジトリ &#x200B;](https://experienceleague.adobe.com/ja/docs/experience-manager-guides/using/api-reference/introduction)のAPI JARを設定して使用することを参照してください。

### FrameMakerとFrameMaker Publishing Server

| Experience Manager Guides as a Cloud リリース | FMPS | FrameMaker | Oxygen Author |
| --- | --- | --- | --- |
| 2026.08.0 | 互換性がありません | 2022年以降 | 26.1 |


### Oxygen コネクタ

| Experience Manager Guides as a Cloud リリース | Oxygen コネクタウィンドウ | Oxygen Connector Mac | Oxygen ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- | --- | --- |
| 2026.08.0 | 3.8 -uuid 1 | 3.8 -uuid 1 | 2.3 | 2.3 |


### AEM サイトテンプレートのバージョン

| コンポーネントバージョン | サイトバージョン |
|---|---|
| guides-components.all-1.5.1 | aemg-sites-template-1.3.0 |

### ナレッジベースのテンプレートバージョン

| コンポーネントパッケージ名 | コンポーネントバージョン | テンプレートバージョン |
|---|---|---|
| Cloud Service用Experience Manager Guides コンポーネントコンテンツパッケージ | guides-components.all-1.4.0 | aem-site-template-dxml-1.0.17 |

## 2026.08.0 リリースへのアップグレード

Experience Manager Guidesは、Experience Manager as a Cloud Serviceの最新リリースにアップグレードすると自動的にアップグレードされます。

>[!IMPORTANT]
>
> このリリースには、フォルダープロファイル設定（ui_config.json）の更新が含まれています。 カスタム設定を使用している場合は、アップグレードする前に、必ずそれらのバックアップを取ってください。 更新後、最新バージョンで導入された変更に合わせて、設定を確認して調整します。

設定の設定を確認して検証し、正しく実装されていることを確認します。 カスタム設定の変更を導入した場合は、アップグレード元のバージョンに適用される追加手順について、[Cloud Serviceをアップグレードするための追加設定](../install-conf-guide/additional-config-for-upgrade.md)を参照してください。
