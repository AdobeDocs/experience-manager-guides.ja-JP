---
title: リリースノート |Adobe Experience Manager ガイド 4.6.0 サービス Pack 4 リリースのアップグレード専用の説明
description: Adobe Experience Managerガイドの 4.6.0 サービス Pack 4 リリースにアップグレードする方法について説明します。
role: Leader
source-git-commit: f6d5b1abb9e9a50d2564e8199b04129e3bc0f256
workflow-type: tm+mt
source-wordcount: '531'
ht-degree: 1%

---

# 4.6.0 サービス Pack 4 リリース(2025 年 4 月)のアップグレード専用手順

This article covers the upgrade instructions and the  compatibility matrix for 4.6.0 Service Pack 4 release of Adobe Experience Manager Guides.

このリリースで修正された問題リスト、4.6.0 サービス Pack 4 リリースの [固定 の問題表示](fixed-issues-4-6-0-sp4.md)。

## 互換性マトリックス

このセクションでは、Experience Manager Guides 4.6.0 サービス Pack 4 リリースでサポートされているソフトウェア アプリケーションの互換性マトリックスを示します。

### Adobe Experience Manager

**4.6.0 サービスパック 4 非 UUID**
バージョン 6.5 サービス Pack 21、20 および 19

**4.6.0 Service Pack 4 UUID**
バージョン 6.5 サービスパック 21、20、19

For more details, view the [Technical requirements](../install-guide/download-install-technical-requirements.md) section in the On-Premise Installation and Configuration Guide.

### FrameMaker and FrameMaker Publishing Server

| リリース | FMPS 2022 | FMPS 2020 | FM 2022 | FM 2020 |
| --- | --- | --- | --- | --- |
| 4.6.0 Service Pack 4 (Non-UUID) | 2022 以上 | 2020.2 or higher* | 2022年以降 | 2020.3 以降 |
| 4.6.0 サービスパック 4(UUID) | 2022年以降 | 2020.2 or higher* | 2022 以上 | 2020.4 以降 |
| | | | |

*AEM で作成されたベースラインおよび条件は、2020.2 以降の FMPS リリースでサポートされます。

### 酸素コネクタ

| リリース | 酸素コネクタウィンドウ | Oxygen Connector Mac | Edit in Oxygen Windows | Oxygen Macで編集 |
| --- | --- | --- |--- |--- |
| 4.6.0 サービスパック 4 （非 UUID） | 2.8-regular-10 | 2.8-regular-10 | 1.6 | 1.6 |
| 4.6.0 サービスパック 4 （UUID） | 3.6-uuid.9 | 3.6-uuid.9 | 2.3 | 2.3 |
|  |  |   |

### ナレッジベースのバージョン テンプレート

| コンポーネントパッケージ名 | Components version | Template version |
|---|---|---|
| Experience Manager Guides Components Content Package for Cloud Service | dxml-components.all-1.2.2 | aem-site-template-dxml.all-1.0.15 |

### New AEM Site template version

| コンポーネントのバージョン | Site version |
|---|---|
| guides-components.all-1.0.0 | aemg-docs.all-1.0.0 |

## Upgrade to 4.6.0 Service Pack 4 release of Experience Manager Guides

You can easily upgrade your current version of Guides to 4.6.0 Service Pack 4. Before you proceed with the upgrade, you must consider the following points:

- バージョン 4.6.0、4.6.0 サービス Pack 1、または 4.6.0 サービス Pack 3 を使用している場合は、4.6.0 サービス Pack 4 に直接アップグレードできます。
- バージョン 4.4、4.3.1 または 4.3.0 を使用している場合は、バージョン 4.6.0 にアップグレードする必要があります。
- バージョン 4.2、4.2.1 (ホットフィックス 4.2.1.3)、4.1、または 4.1.x を使用している場合は、バージョン 4.6.0 にアップグレードする前にバージョン 4.4 にアップグレードする必要があります。
- バージョン 4.0 を使用している場合は、バージョン 4.2 にアップグレードしてからバージョン 4.3.x にアップグレードする必要があります。
- バージョン 3.8.5 を使用している場合は、バージョン 4.0 にアップグレードしてからバージョン 4.2 にアップグレードする必要があります。
- If you are on a version prior to 3.8.5, refer to the Upgrade Experience Manager Guides section in the product-specific installation guide available on [Adobe Experience Manager Guides help PDF archive](https://helpx.adobe.com/jp/xml-documentation-for-experience-manager/archive.html).

>[!NOTE]
>
>Experience Manager Guides のバージョンAEMアップグレードする前に、サービスパックをインストールする必要があります。

4.6.0 サービス Pack 4 リリースのアップグレード プロセスは、4.6.0 リリースと同じ手順に従います。 詳細な手順については、Experience Managerガイドの [アップグレード専用オンプレミスリリースの手順](../install-guide/upgrade-xml-documentation.md) 表示。
