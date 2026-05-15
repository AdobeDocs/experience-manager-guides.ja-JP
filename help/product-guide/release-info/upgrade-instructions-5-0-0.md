---
title: リリースノート | Adobe Experience Manager Guides 5.0.0 リリースのアップグレード手順
description: 互換性マトリックスと、Adobe Experience Manager Guidesの5.0.0 リリースにアップグレードする方法について説明します。
exl-id: 763db247-133e-40c0-807a-2f965b1ddb2f
TQID: https://experienceleague.adobe.com/0CNevtZOBMBZ3Nvtk60KTkKKoraZ-PfeAVau1tyWmSY
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a3bd6397-2eb2-4908-a61c-226e26855dcaid: afb45297-4313-4f67-818e-bc0b03abe086id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2: id: cda0baeb-996e-4aaa-92d1-41032e34fd68id: d5ea0417-7932-4688-a3e2-4d3b2e7076a3
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 412
ht-degree: 5%

---

# 5.0.0 リリース（2025年3月）のアップグレード手順

この記事では、Adobe Experience Manager Guidesの5.0.0 リリースのアップグレード手順と互換性マトリックスについて説明します。

新機能と機能強化について詳しくは、[ 5.0.0リリースの新機能](../release-info/whats-new-5-0-0.md)を参照してください。

このリリースで修正された問題のリストについては、「[5.0.0 リリースで修正された問題](../release-info/fixed-issues-5-0-0.md)」を参照してください。

## 互換性マトリックス

この節では、Experience Manager Guides 5.0.0 リリースでサポートされているソフトウェアアプリケーションの互換性マトリックスを示します。

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

現在のバージョンのGuidesをバージョン 5.0.0に簡単にアップグレードできます。 Experience Manager Guidesのバージョン 5.0.0へのアップグレードを進める前に、次の点を考慮する必要があります。

- バージョン 4.6.3、4.6.1、4.6、または4.4を使用している場合は、バージョン 5.0.0に直接アップグレードできます。
- バージョン 4.3.x、4.2、4.2.1 （ホットフィックス 4.2.1.3）、4.1、または4.1.xを使用している場合は、バージョン 5.0.0にアップグレードする前にバージョン 4.4にアップグレードする必要があります。
- バージョン 4.0を使用している場合は、バージョン 4.3.xにアップグレードする前にバージョン 4.2にアップグレードする必要があります。
- バージョン 3.8.5を使用している場合は、バージョン 4.2にアップグレードする前にバージョン 4.0にアップグレードする必要があります。
- 3.8.5より前のバージョンを使用している場合は、[Adobe Experience Manager Guides ヘルプ Experience Manager Guides アーカイブ ](https://helpx.adobe.com/xml-documentation-for-experience-manager/archive.html)で入手できる製品固有のインストールガイドの「PDFのアップグレード」セクションを参照してください。

>[!NOTE]
>
>Experience Manager Guides バージョンをアップグレードする前に、AEM サービスパックをインストールする必要があります。

詳しくは、Experience Manager Guidesのオンプレミスリリース ](../install-guide/upgrade-xml-documentation.md)の[ アップグレード手順を参照してください。
