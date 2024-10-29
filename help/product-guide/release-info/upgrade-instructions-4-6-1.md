---
title: リリースノート | Adobe Experience Manager Guides 4.6.1 リリースのアップグレード手順
description: Adobe Experience Manager Guidesの 4.6.1 リリースへのアップグレード方法について説明します
role: Leader
source-git-commit: 3547eb43977f31dae297ca5cb1f1ab53f7f2b067
workflow-type: tm+mt
source-wordcount: '487'
ht-degree: 1%

---

# 4.6.1 リリースのアップグレード手順（2024 年 10 月）

この記事では、Adobe Experience Manager Guides 4.6.1 リリースのアップグレード手順と互換性マトリックスについて説明します。

このリリースで修正された問題のリストについては、[4.6.1 リリースで修正された問題 ](fixed-issues-4-6-1.md) を参照してください。

## 互換性マトリックス

この節では、Experience Manager Guides 4.6.1 リリースでサポートされるソフトウェアアプリケーションの互換表を示します。

### Adobe Experience Manager

**4.6.1 非 UUID**
バージョン 6.5 サービスパック 21、20、19

**4.6.1 UUID**
バージョン 6.5 サービスパック 21、20、19

詳しくは、『オンプレミスのインストールおよび設定ガイド』の [ 技術要件 ](../install-guide/download-install-technical-requirements.md) の節を参照してください。

### FrameMakerとFrameMaker Publishing Server

| リリース | FMPS 2022 | FMPS 2020 | FM 2022 | FM 2020 |
| --- | --- | --- | --- | --- |
| 4.6.1 （非 UUID） | 2022 以上 | 2020.2 以上* | 2022 以上 | 2020.3 以上 |
| 4.6.1 （UUID） | 2022 以上 | 2020.2 以上* | 2022 以上 | 2020.4 以上 |
| | | | |

*AEMで作成されたベースラインと条件は、2020.2 以降の FMPS リリースでサポートされます。

### 酸素コネクタ

| リリース | 酸素コネクタウィンドウ | 酸素コネクタMac | 酸素ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- |--- |--- |
| 4.6.1 （非 UUID） | 2.8-regular-10 | 2.8-regular-10 | 1.6 | 1.6 |
| 4.6.1 （UUID） | 3.6-uuid.9 | 3.6-uuid.9 | 2.3 | 2.3 |
|  |  |   |

### ナレッジベーステンプレートバージョン

| コンポーネントパッケージ名 | コンポーネントのバージョン | テンプレートのバージョン |
|---|---|---|
| Cloud Service用Experience Manager Guides コンポーネントコンテンツパッケージ | dxml-components.all-1.2.2 | aem-site-template-dxml.all-1.0.15 |

### 新しいAEM サイトテンプレートバージョン


| コンポーネントのバージョン | サイトバージョン |
|---|---|
| guides-components.all-1.0.0 | aemg-docs.all-1.0.0 |

## Experience Manager Guidesの 4.6.1 リリースへのアップグレード

Guides の現在のバージョンをバージョン 4.6.1 に簡単にアップグレードできます。Experience Manager Guidesのバージョン 4.6.1 へのアップグレードを行う前に、次の点を考慮する必要があります。

- バージョン 4.6.0 を使用している場合は、バージョン 4.6.1 に直接アップグレードできます。
- バージョン 4.4、4.3.1 または 4.3.0 を使用している場合は、4.6.1 にアップグレードする前にバージョン 4.6.0 にアップグレードする必要があります。
- バージョン 4.2、4.2.1 （ホットフィックス 4.2.1.3）、4.1、または 4.1.x を使用している場合は、バージョン 4.6.0 にアップグレードする前にバージョン 4.4 にアップグレードする必要があります。
- バージョン 4.0 を使用している場合、バージョン 4.3.x にアップグレードする前にバージョン 4.2 にアップグレードする必要があります。
- バージョン 3.8.5 を使用している場合、バージョン 4.2 にアップグレードする前にバージョン 4.0 にアップグレードする必要があります。
- バージョン 3.8.5 より前のバージョンを使用している場合は、[Experience Manager Guides ヘルプPDFアーカイブ ](https://helpx.adobe.com/xml-documentation-for-experience-manager/archive.html) にある製品固有のインストールガイドのAdobe Experience Manager Guidesのアップグレードの節を参照してください。

>[!NOTE]
>
>Experience Manager Guides版をアップグレードする前に、AEM サービスパックをインストールする必要があります。

4.6.1 リリースのアップグレードプロセスは、4.6.0 リリースと同じ手順に従います。 手順について詳しくは、Experience Manager Guidesの [ オンプレミスリリースのアップグレード手順 ](../install-guide/upgrade-xml-documentation.md) を参照してください。
