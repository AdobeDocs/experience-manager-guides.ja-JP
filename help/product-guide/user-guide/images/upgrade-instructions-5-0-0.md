---
title: リリースノート | Adobe Experience Manager Guides 5.0.0 リリースのアップグレード手順
description: 互換性マトリックスと、Adobe Experience Manager Guidesの5.0.0 リリースにアップグレードする方法について説明します。
source-git-commit: 9c53ac725618db1164b0ed310a47b258a7224778
workflow-type: tm+mt
source-wordcount: '412'
ht-degree: 6%

---

# 5.0.0 リリース（2025年3月）のアップグレード手順

この記事では、Adobe Experience Manager Guidesの5.0.0 リリースのアップグレード手順と互換性マトリックスについて説明します。

新機能と機能強化について詳しくは、[&#x200B; 5.0.0リリースの新機能](/help/product-guide/release-info/whats-new-5-0-0.md)を参照してください。

このリリースで修正された問題のリストについては、「[5.0.0 リリースで修正された問題](/help/product-guide/release-info/fixed-issues-5-0-0.md)」を参照してください。

## 互換性マトリックス

この節では、Experience Manager Guides 4.6.0 リリースでサポートされているソフトウェアアプリケーションの互換性マトリックスを示します。

### Adobe Experience Manager

**5.0.0 UUID**

バージョン 6.5 サービスパック 22、サービスパック 21およびサービスパック 20

詳細については、『オンプレミス インストールおよび設定ガイド』の「[技術要件](/help/product-guide/install-guide/download-install-technical-requirements.md)」セクションを参照してください。

### FrameMakerとFrameMaker Publishing Server

| リリース | FMPS | FM |
| --- | --- | --- |
| 5.0.0 （UUID） | サポート対象 | 2022年以降 |

### Oxygen コネクタ

| リリース | Oxygen コネクタウィンドウ | Oxygen Connector Mac | Oxygen ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- |--- |--- |
| 5.0.0 （UUID） | 3.7-uuid.2 | 3.7-uuid.2 | 2.3 | 2.3 |

### ナレッジベースのテンプレートバージョン

| コンポーネントパッケージ名 | コンポーネントバージョン | テンプレートバージョン |
|---|---|---|
| Cloud Service用Experience Manager Guides コンポーネントコンテンツパッケージ | dxml-components.all-1.3.0 | aem-site-template-dxml.all-1.0.4 |

### 新しいAEM サイトテンプレートのバージョン


| コンポーネントバージョン | サイトバージョン |
|---|---|
| guides-components.all-1.3.0 | aemg-docs.all-1.2.0 |


## Experience Manager Guidesの5.0.0 リリースへのアップグレード

現在のバージョンのGuidesをバージョン 5.0.0に簡単にアップグレードできます。Experience Manager Guidesのバージョン 5.0.0へのアップグレードを進める前に、次の点を考慮する必要があります。

- バージョン 4.6.3、4.6.1、4.6、または4.4を使用している場合は、バージョン 5.0.0に直接アップグレードできます。
- バージョン 4.2、4.2.1 （ホットフィックス 4.2.1.3）、4.1、または4.1.xを使用している場合は、バージョン 5.0.0にアップグレードする前に、バージョン 4.4にアップグレードする必要があります。
- バージョン 4.0を使用している場合は、バージョン 4.3.xにアップグレードする前にバージョン 4.2にアップグレードする必要があります。
- バージョン 3.8.5を使用している場合は、バージョン 4.2にアップグレードする前にバージョン 4.0にアップグレードする必要があります。
- 3.8.5より前のバージョンを使用している場合は、[Adobe Experience Manager Guides ヘルプ Experience Manager Guides アーカイブ &#x200B;](https://helpx.adobe.com/xml-documentation-for-experience-manager/archive.html)で入手できる製品固有のインストールガイドの「PDFのアップグレード」セクションを参照してください。

>[!NOTE]
>
>Experience Manager Guides バージョンをアップグレードする前に、AEM サービスパックをインストールする必要があります。

詳しくは、Experience Manager Guidesのオンプレミスリリース [の](/help/product-guide/install-guide/upgrade-xml-documentation.md) アップグレード手順を参照してください。
