---
title: リリースノート | Adobe Experience Manager Guides 5.1.0 サービスパック 1 リリースのアップグレード手順
description: 互換性マトリックスと、Adobe Experience Manager Guides 5.1.0 Service Pack 1 リリースへのアップグレード方法について説明します。
source-git-commit: 1df6b18aa441df33f96eb8298f4ef2799754cbcf
workflow-type: tm+mt
source-wordcount: '472'
ht-degree: 1%

---

# 5.1.0 サービスパック 1 リリース（2025 年 10 月）のアップグレード手順

この記事では、Adobe Experience Manager Guides 5.1.0 サービスパック 1 リリースのアップグレード手順と互換性マトリックスについて説明します。

このリリースで修正された問題の一覧は、[5.1.0 サービスパック 1 リリースで修正された問題 &#x200B;](../release-info/fixed-issues-5-1-0-sp1.md) を参照してください。

## 互換性マトリックス

ここでは、Experience Manager Guides 5.1.0 サービスパック 1 リリースでサポートされているソフトウェアアプリケーションの互換表を示します。

### Adobe Experience Manager

**5.1.0 サービスパック 1 UUID**

バージョン 6.5 サービスパック 23、サービスパック 22、サービスパック 21

詳しくは、『オンプレミスのインストールおよび設定ガイド』の [&#x200B; 技術要件 &#x200B;](../install-guide/download-install-technical-requirements.md) の節を参照してください。

### FrameMakerとFrameMaker Publishing Server

| リリース | FMPS | FM |
| --- | --- | --- |
| 5.1.0 サービスパック 1 （UUID） | サポート対象 | 2022 以上 |

### 酸素コネクタ

| リリース | 酸素コネクタウィンドウ | 酸素コネクタMac | 酸素ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- |--- |--- |
| 5.1.0 サービスパック 1 （UUID） | 3.8-uuid.1 | 3.8-uuid.1 | 2.3 | 2.3 |

### ナレッジベーステンプレートバージョン

| コンポーネントパッケージ名 | コンポーネントのバージョン | テンプレートのバージョン |
|---|---|---|
| Cloud Service用Experience Manager Guides コンポーネントコンテンツパッケージ | dxml-components.all-1.3.0 | aem-site-template-dxml.all-1.0.4 |

### 新しいバージョンのAEM サイトテンプレート


| コンポーネントのバージョン | サイトバージョン |
|---|---|
| guides-components.all-1.4.0 | aemg-docs.all-1.2.0 |


## Experience Manager Guidesの 5.1.0 サービスパック 1 リリースへのアップグレード

Guides の現在のバージョンを 5.1.0 サービスパック 1 に簡単にアップグレードできます。 Experience Manager Guidesのバージョン 5.1.0 サービスパック 1 へのアップグレードを行う前に、次の点を考慮する必要があります。

- バージョン 5.1.0 を使用している場合は、バージョン 5.1.0 サービスパック 1 に直接アップグレードできます。
- バージョン 4.6.0、4.6.x、5.0.0 または 5.0.x を使用している場合は、バージョン 5.1.0 にアップグレードする必要があります。
- バージョン 4.6.3、4.6.1、4.6 または 4.4 を使用している場合は、バージョン 5.0.0 にアップグレードする必要があります。
- バージョン 4.3.x、4.2、4.2.1 （ホットフィックス 4.2.1.3）、4.1、または 4.1.x を使用している場合は、バージョン 5.0.0 にアップグレードする前にバージョン 4.4 にアップグレードする必要があります。
- バージョン 4.0 を使用している場合、バージョン 4.3.x にアップグレードする前にバージョン 4.2 にアップグレードする必要があります。
- バージョン 3.8.5 を使用している場合、バージョン 4.2 にアップグレードする前にバージョン 4.0 にアップグレードする必要があります。
- バージョン 3.8.5 より前のバージョンを使用している場合は、[Experience Manager Guides ヘルプ PDF アーカイブ &#x200B;](https://helpx.adobe.com/jp/xml-documentation-for-experience-manager/archive.html) にある製品固有のインストールガイドのAdobe Experience Manager Guidesのアップグレードの節を参照してください。

>[!NOTE]
>
>Experience Manager Guides版をアップグレードする前に、AEM サービスパックをインストールする必要があります。

詳しくは、Experience Manager Guidesの [&#x200B; オンプレミスリリースのアップグレード手順 &#x200B;](../install-guide/upgrade-xml-documentation.md) を参照してください。
