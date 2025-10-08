---
title: リリースノート | Adobe Experience Manager Guides 5.1.0 リリースのアップグレード手順
description: 互換性マトリックスとAdobe Experience Manager Guides 5.1.0 リリースへのアップグレード方法について説明します。
exl-id: 4b7b6756-d260-4baf-a9cb-d99fc02f020f
source-git-commit: 6bcfed792036a51aa0c11498e4cb489199280a56
workflow-type: tm+mt
source-wordcount: '520'
ht-degree: 7%

---

# 5.1.0 リリースのアップグレード手順（2025 年 9 月）

この記事では、Adobe Experience Manager Guides 5.1.0 リリースのアップグレード手順と互換性マトリックスについて説明します。

新機能と機能強化について詳しくは、[&#x200B; 5.1.0リリースの新機能](../release-info/whats-new-5-1-0.md)を参照してください。

このリリースで修正された問題のリストについては、[5.1.0 リリースで修正された問題 &#x200B;](../release-info/fixed-issues-5-1-0.md) を参照してください。

## 互換性マトリックス

この節では、Experience Manager Guides 5.1.0 リリースでサポートされるソフトウェアアプリケーションの互換表を示します。

| AEM ガイド | AEM のバージョン | サービスパック |
| --- | --- | --- |
| 5.1.0 （UUID） | 6.5 LTS | 1 |
| 5.1.0 （UUID） | 6.5 | 23、22、21 |

詳しくは、『オンプレミスのインストールおよび設定ガイド』の [&#x200B; 技術要件 &#x200B;](../install-guide/download-install-technical-requirements.md) の節を参照してください。

### FrameMakerとFrameMaker Publishing Server

| リリース | FMPS | FM |
| --- | --- | --- |
| 5.1.0 （UUID） | サポート対象 | 2022 以上 |

### 酸素コネクタ

| リリース | 酸素コネクタウィンドウ | 酸素コネクタMac | 酸素ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- |--- |--- |
| 5.1.0 （UUID） | 3.8-uuid.1 | 3.8-uuid.1 | 2.3 | 2.3 |

### ナレッジベーステンプレートバージョン

| コンポーネントパッケージ名 | コンポーネントのバージョン | テンプレートのバージョン |
|---|---|---|
| Cloud Service用Experience Manager Guides コンポーネントコンテンツパッケージ | dxml-components.all-1.3.0 | aem-site-template-dxml.all-1.0.4 |

### 新しいバージョンのAEM サイトテンプレート


| AEM ガイド | AEM バージョン | コンポーネントのバージョン | サイトバージョン |
|---|---|---| ---|
| 5.1.0 UUID | 6.5 LTS | guides-components.all-1.4.1 | aemg-docs.all-1.2.0 |
| 5.1.0 UUID | 6.5 | guides-components.all-1.4.0 | aemg-docs.all-1.2.0 |

## Experience Manager Guides 5.1.0 へのアップグレード

**AEM 6.5 または** AEM 6.5 LTS&rbrace; の現在のExperience Manager Guidesをバージョン 5.1.0 **簡単にアップグレ** ドできます。

>[!NOTE]
>
> 現在AEM 6.5 を使用していて、AEM 6.5 LTS への移行を計画している場合は、まずAEMのアップグレードを完了してから、Experience Manager Guides 5.1.0 のアップグレードを進めてください。 詳しくは、[Adobe Experience Manager（AEM） 6.5 LTS へのアップグレード &#x200B;](https://experienceleague.adobe.com/ja/docs/experience-manager-65-lts/content/implementing/deploying/upgrading/upgrade) を参照してください。

Experience Manager Guidesのバージョン 5.1.0 へのアップグレードを行う前に、次の点を考慮する必要があります。

- バージョン 4.6.3、4.6.4、5.0.0、または 5.0.0 Service Pack 1 を使用している場合は、バージョン 5.1.0 に直接アップグレードできます。
- バージョン 4.6.0、4.6.1 を使用している場合は、バージョン 5.1.0 にアップグレードする前にバージョン 4.6.3、4.6.4 または 5.0.0 にアップグレードする必要があります。
- バージョン 4.3.x、4.2、4.2.1 （ホットフィックス 4.2.1.3）、4.1、または 4.1.x を使用している場合は、バージョン 5.1.0 にアップグレードする前にバージョン 4.4 にアップグレードする必要があります。
- バージョン 4.0 を使用している場合、バージョン 4.3.x にアップグレードする前にバージョン 4.2 にアップグレードする必要があります。
- バージョン 3.8.5 を使用している場合、バージョン 4.2 にアップグレードする前にバージョン 4.0 にアップグレードする必要があります。
- バージョン 3.8.5 より前のバージョンを使用している場合は、[Experience Manager Guides ヘルプ PDF アーカイブ &#x200B;](https://helpx.adobe.com/jp/xml-documentation-for-experience-manager/archive.html) にある製品固有のインストールガイドのAdobe Experience Manager Guidesのアップグレードの節を参照してください。

>[!NOTE]
>
>Experience Manager Guides版をアップグレードする前に、AEM サービスパックをインストールする必要があります。

詳しくは、Experience Manager Guidesの [&#x200B; オンプレミスリリースのアップグレード手順 &#x200B;](../install-guide/upgrade-xml-documentation.md) を参照してください。


