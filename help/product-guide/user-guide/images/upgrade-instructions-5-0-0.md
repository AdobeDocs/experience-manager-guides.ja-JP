---
title: リリースノート | Adobe Experience Manager Guides 5.0.0 リリースのアップグレード手順
description: 互換表と、Adobe Experience Manager Guidesの 5.0.0 リリースにアップグレードする方法について説明します。
source-git-commit: 410d7c059ff1219b73f2dc6199690c77d1ba0e48
workflow-type: tm+mt
source-wordcount: '412'
ht-degree: 6%

---

# 5.0.0 リリースのアップグレード手順（2025 年 3 月）

この記事では、Adobe Experience Manager Guides 5.0.0 リリースのアップグレード手順と互換性マトリックスについて説明します。

新機能と機能強化について詳しくは、[ 5.0.0リリースの新機能](../release-info/whats-new-5-0.md)を参照してください。

このリリースで修正された問題のリストについては、[5.0.0 リリースで修正された問題 ](../release-info/fixed-issues-5-0-0.md) を参照してください。

## 互換性マトリックス

この節では、Experience Manager Guides 4.6.0 リリースでサポートされるソフトウェアアプリケーションの互換表を示します。

### Adobe Experience Manager

**5.0.0 UUID**

バージョン 6.5 サービスパック 22、サービスパック 21、サービスパック 20

詳しくは、『オンプレミスのインストールおよび設定ガイド』の [ 技術要件 ](../install-guide/download-install-technical-requirements.md) の節を参照してください。

### FrameMakerとFrameMaker Publishing Server

| リリース | FMPS | FM |
| --- | --- | --- |
| 5.0.0 （UUID） | サポート対象 | 2022 以上 |

### 酸素コネクタ

| リリース | 酸素コネクタウィンドウ | 酸素コネクタMac | 酸素ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- |--- |--- |
| 5.0.0 （UUID） | 3.7-uuid.2 | 3.7-uuid.2 | 2.3 | 2.3 |

### ナレッジベーステンプレートバージョン

| コンポーネントパッケージ名 | コンポーネントのバージョン | テンプレートのバージョン |
|---|---|---|
| Cloud Service用Experience Manager Guides コンポーネントコンテンツパッケージ | dxml-components.all-1.3.0 | aem-site-template-dxml.all-1.0.4 |

### 新しいバージョンのAEM サイトテンプレート


| コンポーネントのバージョン | サイトバージョン |
|---|---|
| guides-components.all-1.3.0 | aemg-docs.all-1.2.0 |


## Experience Manager Guidesの 5.0.0 リリースへのアップグレード

Guides の現在のバージョンをバージョン 5.0.0 に簡単にアップグレードできます。Experience Manager Guidesのバージョン 5.0.0 へのアップグレードを行う前に、次の点を考慮する必要があります。

- バージョン 4.6.3、4.6.1、4.6 または 4.4 を使用している場合は、バージョン 5.0.0 に直接アップグレードできます。
- バージョン 4.2、4.2.1 （ホットフィックス 4.2.1.3）、4.1、または 4.1.x を使用している場合、バージョン 5.0.0 にアップグレードする前にバージョン 4.4 にアップグレードする必要があります。
- バージョン 4.0 を使用している場合、バージョン 4.3.x にアップグレードする前にバージョン 4.2 にアップグレードする必要があります。
- バージョン 3.8.5 を使用している場合、バージョン 4.2 にアップグレードする前にバージョン 4.0 にアップグレードする必要があります。
- バージョン 3.8.5 より前のバージョンを使用している場合は、[Experience Manager Guides ヘルプ PDF アーカイブ ](https://helpx.adobe.com/jp/xml-documentation-for-experience-manager/archive.html) にある製品固有のインストールガイドのAdobe Experience Manager Guidesのアップグレードの節を参照してください。

>[!NOTE]
>
>Experience Manager Guides版をアップグレードする前に、AEM サービスパックをインストールする必要があります。

詳しくは、Experience Manager Guidesの [ オンプレミスリリースのアップグレード手順 ](../install-guide/upgrade-xml-documentation.md) を参照してください。