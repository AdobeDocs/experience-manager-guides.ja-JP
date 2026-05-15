---
title: リリースノート | Adobe Experience Manager Guides 4.6.0 Service Pack 3 リリースのアップグレード手順
description: Adobe Experience Manager Guidesの4.6.0 Service Pack 3 リリースへのアップグレード方法について説明します
role: Leader
exl-id: f0612eff-c18b-4667-a487-5f8809127d75
TQID: https://experienceleague.adobe.com/vuj58wNzA6nQPPdhszA1ZEBkW6ghJzK6zAN-AIF3LI8
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a3bd6397-2eb2-4908-a61c-226e26855dcaid: afb45297-4313-4f67-818e-bc0b03abe086id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2: id: d5ea0417-7932-4688-a3e2-4d3b2e7076a3
role_v2: id: f8a45b24-4be7-4f1b-909b-60d06b483a20
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 523
ht-degree: 1%

---

# 4.6.0 サービスパック 3 リリース（2025年1月）のアップグレード手順

この記事では、Adobe Experience Manager Guidesの4.6.0 Service Pack 3 リリースのアップグレード手順と互換性マトリックスについて説明します。

このリリースで修正された問題のリストについては、[4.6.0 サービスパック 3 リリース ](fixed-issues-4-6-0-sp2.md)で修正された問題を参照してください。

## 互換性マトリックス

この節では、Experience Manager Guides 4.6.0 Service Pack 3 リリースでサポートされているソフトウェアアプリケーションの互換性マトリックスを示します。

### Adobe Experience Manager

**4.6.0 サービスパック 3非UUID**
バージョン 6.5 Service Pack 21、20および19

**4.6.0 サービスパック 3 UUID**
バージョン 6.5 Service Pack 21、20および19

詳細については、『オンプレミス インストールおよび設定ガイド』の「[技術要件](../install-guide/download-install-technical-requirements.md)」セクションを参照してください。

### FrameMakerとFrameMaker Publishing Server

| リリース | FMPS 2022 | FMPS 2020 | FM 2022 | FM 2020 |
| --- | --- | --- | --- | --- |
| 4.6.0 サービスパック 3 （非UUID） | 2022年以降 | 2020.2以降* | 2022年以降 | 2020.3以降 |
| 4.6.0 サービスパック 3 （UUID） | 2022年以降 | 2020.2以降* | 2022年以降 | 2020.4以降 |
| | | | | |

* AEMで作成されたベースラインと条件は、2020.2以降のFMPS リリースでサポートされています。

### Oxygen コネクタ

| リリース | Oxygen コネクタウィンドウ | Oxygen Connector Mac | Oxygen ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- |--- |--- |
| 4.6.0 サービスパック 3 （非UUID） | 2.8-regular-10 | 2.8-regular-10 | 1.6 | 1.6 |
| 4.6.0 サービスパック 3 （UUID） | 3.6-uuid.9 | 3.6-uuid.9 | 2.3 | 2.3 |
|  |  |   | |  |

### ナレッジベースのテンプレートバージョン

| コンポーネントパッケージ名 | コンポーネントバージョン | テンプレートバージョン |
|---|---|---|
| Cloud Service用Experience Manager Guides コンポーネントコンテンツパッケージ | dxml-components.all-1.2.2 | aem-site-template-dxml.all-1.0.15 |

### 新しいAEM サイトテンプレートのバージョン

| コンポーネントバージョン | サイトバージョン |
|---|---|
| guides-components.all-1.0.0 | aemg-docs.all-1.0.0 |

## Experience Manager Guidesの4.6.0 サービスパック 3 リリースへのアップグレード

現在のバージョンのGuidesを4.6.0 Service Pack 3に簡単にアップグレードできます。 アップグレードを進める前に、次の点を考慮する必要があります。

- バージョン 4.6.0または4.6.0 Service Pack 1を使用している場合は、4.6.0 Service Pack 3に直接アップグレードできます。
- バージョン 4.4、4.3.1または4.3.0を使用している場合は、バージョン 4.6.0にアップグレードする必要があります。
- バージョン 4.2、4.2.1 （ホットフィックス 4.2.1.3）、4.1、または4.1.xを使用している場合は、バージョン 4.6.0にアップグレードする前に、バージョン 4.4にアップグレードする必要があります。
- バージョン 4.0を使用している場合は、バージョン 4.3.xにアップグレードする前にバージョン 4.2にアップグレードする必要があります。
- バージョン 3.8.5を使用している場合は、バージョン 4.2にアップグレードする前にバージョン 4.0にアップグレードする必要があります。
- 3.8.5より前のバージョンを使用している場合は、[Adobe Experience Manager Guides ヘルプ Experience Manager Guides アーカイブ ](https://helpx.adobe.com/xml-documentation-for-experience-manager/archive.html)で入手できる製品固有のインストールガイドの「PDFのアップグレード」セクションを参照してください。

>[!NOTE]
>
>Experience Manager Guides バージョンをアップグレードする前に、AEM サービスパックをインストールする必要があります。

4.6.0 サービスパック 3 リリースのアップグレードプロセスは、4.6.0 リリースと同じ手順に従います。 詳細な手順については、[Experience Manager Guidesのオンプレミスリリース ](../install-guide/upgrade-xml-documentation.md)のアップグレード手順を参照してください。
