---
title: リリースノート | Adobe Experience Manager Guides 5.1.0 Service Pack 4 リリースのアップグレード手順
description: 互換性マトリックスと、Adobe Experience Manager Guidesの5.1.0 Service Pack 4 リリースにアップグレードする方法について説明します。
source-git-commit: acc063d149f52a457d4ce2447c8eafaff6296dac
workflow-type: tm+mt
source-wordcount: '587'
ht-degree: 3%

---

# 5.1.0 サービスパック 4 リリース（2026年4月）のアップグレード手順

この記事では、Adobe Experience Manager Guidesの5.1.0 Service Pack 4 リリースのアップグレード手順と互換性マトリックスについて説明します。

このリリースで修正された問題のリストについては、5.1.0 サービスパック 4 リリース [の](../release-info/fixed-issues-5-1-0-sp4.md)修正済みの問題を参照してください。

## 互換性マトリックス

この節では、Experience Manager Guides 5.1.0 Service Pack 4 リリースでサポートされているソフトウェアアプリケーションの互換性マトリックスを示します。

| AEM ガイド | AEM のバージョン | サービスパック |
| --- | --- | --- |
| 5.1.0 サービスパック 4 （UUID） | 6.5 LTS | 1 |
| 5.1.0 サービスパック 4 （UUID） | 6.5 | 23、22、21 |

詳細については、『オンプレミス インストールおよび設定ガイド』の「[技術要件](../install-guide/download-install-technical-requirements.md)」セクションを参照してください。

### FrameMakerとFrameMaker Publishing Server

| リリース | FMPS | FM |
| --- | --- | --- |
| 5.1.0 サービスパック 4 （UUID） | サポート対象 | 2022年以降 |

### Oxygen コネクタ

| リリース | Oxygen コネクタウィンドウ | Oxygen Connector Mac | Oxygen ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- |--- |--- |
| 5.1.0 サービスパック 4 （UUID） | 3.8-uuid.1 | 3.8-uuid.1 | 2.3 | 2.3 |

### ナレッジベースのテンプレートバージョン

| コンポーネントパッケージ名 | コンポーネントバージョン | テンプレートバージョン |
|---|---|---|
| Cloud Service用Experience Manager Guides コンポーネントコンテンツパッケージ | dxml-components.all-1.3.0 | aem-site-template-dxml.all-1.0.4 |

### 新しいAEM サイトテンプレートのバージョン

| AEM ガイド | AEM バージョン | コンポーネントバージョン | サイトバージョン |
|---|---|---| ---|
| 5.1.0 サービスパック 4 UUID | 6.5 LTS | guides-components.all-1.4.1 | aemg-docs.all-1.2.0 |
| 5.1.0 サービスパック 4 UUID | 6.5 | guides-components.all-1.4.0 | aemg-docs.all-1.2.0 |


## 前提条件

標準のDITA動作では、外部リソースへの参照のみを目的としているため、scope=`external`属性を内部リンクに適用しないでください。 この属性を内部リンクに適用すると、ワークフローが中断される可能性があります。 Experience Manager Guidesで管理されているコンテンツの場合は、代わりにデフォルトのscope=`local`またはキーベースの参照を使用します。

## Experience Manager Guidesの5.1.0 Service Pack 4 リリースへのアップグレード

現在のバージョンのExperience Manager Guidesを、**AEM 6.5**&#x200B;または&#x200B;**AEM 6.5 LTS**&#x200B;のバージョン 5.1.0 Service Pack 4に簡単にアップグレードできます。

>[!NOTE]
>
> 現在AEM 6.5を使用しており、AEM 6.5 LTSへの移行を計画している場合は、[Adobe Experience Manager（AEM） 6.5 LTSへのアップグレード &#x200B;](https://experienceleague.adobe.com/ja/docs/experience-manager-65-lts/content/implementing/deploying/upgrading/upgrade)を参照してください。

Experience Manager Guidesのバージョン 5.1.0 サービスパック 4へのアップグレードを進める前に、次の点を考慮する必要があります。

- バージョン 5.1.0または5.1.xを使用している場合は、バージョン 5.1.0 Service Pack 4に直接アップグレードできます。
- バージョン 4.6.0、4.6.x、5.0.0、または5.0.xを使用している場合は、バージョン 5.1.0にアップグレードする必要があります。
- バージョン 4.6.3、4.6.1、4.6、または4.4を使用している場合は、バージョン 5.0.0にアップグレードする必要があります。
- バージョン 4.3.x、4.2、4.2.1 （ホットフィックス 4.2.1.3）、4.1、または4.1.xを使用している場合は、バージョン 5.0.0にアップグレードする前にバージョン 4.4にアップグレードする必要があります。
- バージョン 4.0を使用している場合は、バージョン 4.3.xにアップグレードする前にバージョン 4.2にアップグレードする必要があります。
- バージョン 3.8.5を使用している場合は、バージョン 4.2にアップグレードする前にバージョン 4.0にアップグレードする必要があります。
- 3.8.5より前のバージョンを使用している場合は、[Adobe Experience Manager Guides ヘルプ Experience Manager Guides アーカイブ &#x200B;](https://helpx.adobe.com/jp/xml-documentation-for-experience-manager/archive.html)で入手できる製品固有のインストールガイドの「PDFのアップグレード」セクションを参照してください。

>[!NOTE]
>
> Experience Manager Guides バージョンをアップグレードする前に、AEM サービスパックをインストールする必要があります。

詳しくは、Experience Manager Guidesのオンプレミスリリース [の](../install-guide/upgrade-xml-documentation.md) アップグレード手順を参照してください。
