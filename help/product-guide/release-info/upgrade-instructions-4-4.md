---
title: リリースノート | Adobe Experience Manager Guides 4.4.0 リリースのアップグレード手順
description: Adobe Experience Manager Guidesの 4.4.0 リリースへのアップグレード方法について説明します
role: Leader
exl-id: 884178b6-7a72-471a-a6e3-238a543fb227
source-git-commit: 47c06dcc30b34780cbd26ded1ca400a5056a59ba
workflow-type: tm+mt
source-wordcount: '461'
ht-degree: 5%

---

# 4.4.0 リリースのアップグレード手順（2024 年 1 月）

この記事では、Adobe Experience Manager Guides 4.4.0 リリースのアップグレード手順と互換性マトリックスについて説明します。

新機能と機能強化について詳しくは、[ 4.4.0リリースの新機能](../release-info/whats-new-4-4.md)を参照してください。

このリリースで修正された問題のリストについては、[4.4.0 リリースで修正された問題 ](../release-info/fixed-issues-4-4.md) を参照してください。




## 互換性マトリックス

この節では、Experience Manager Guides 4.4.0 リリースでサポートされるソフトウェアアプリケーションの互換表を示します。

### Adobe Experience Manager

**4.4.0 非 UUID**
バージョン 6.5 サービスパック 20、19、18、17

**4.4.0 UUID**
バージョン 6.5 サービスパック 20、19、18、17


詳しくは、『オンプレミスのインストールおよび設定ガイド』の [ 技術要件 ](../install-guide/download-install-technical-requirements.md) の節を参照してください。

### FrameMakerとFrameMaker Publishing Server

| リリース | FMPS 2022 | FMPS 2020 | Fm 2022 | Fm 2020 |
| --- | --- | --- | --- | --- |
| 4.4.0 （非 UUID） | 2022 以上 | 2020.2 以上* | 2022 以上 | 2020.3 以上 |
| 4.4.0 （UUID） | 2022 以上 | 2020.2 以上* | 2022 以上 | 2020.4 以上 |
| | | | |

*AEMで作成されたベースラインと条件は、2020.2 以降の FMPS リリースでサポートされます。

### 酸素コネクタ

| リリース | 酸素コネクタウィンドウ | 酸素コネクタMac | 酸素ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- |--- |--- |
| 4.4.0 （非 UUID） | 2.7-regular-1 | 2.7-regular-1 | 1.6 | 1.6 |
| 4.4.0 （UUID） | 3.4-uuid-1 | 3.4-uuid-1 | 2.3 | 2.3 |
|  |  |   |



### ナレッジベーステンプレートバージョン

| コンポーネントパッケージ名 | コンポーネントのバージョン | テンプレートのバージョン |
|---|---|---|
| Cloud Service用Experience Manager Guides コンポーネントコンテンツパッケージ | dxml-components.all-1.2.2 | aem-site-template-dxml.all-1.0.15 |



## Experience Manager Guidesの 4.4.0 リリースへのアップグレード


Guides の現在のバージョンをバージョン 4.4.0 に簡単にアップグレードできます。Experience Manager Guidesのバージョン 4.4.0 へのアップグレードを行う前に、次の点を考慮する必要があります。


- バージョン 4.3.1、4.3.0、または 4.2.1 （ホットフィックス 4.2.1.3）を使用している場合は、バージョン 4.4.0 に直接アップグレードできます。
- バージョン 4.2、4.1 または 4.1.x を使用している場合は、バージョン 4.4.0 にアップグレードする前に、バージョン 4.3.1、4.3.0 または 4.2.1 （Hotfix 4.2.1.3）にアップグレードする必要があります。
- バージョン 4.0 を使用している場合、バージョン 4.3.x にアップグレードする前にバージョン 4.2 にアップグレードする必要があります。
- バージョン 3.8.5 を使用している場合、バージョン 4.2 にアップグレードする前にバージョン 4.0 にアップグレードする必要があります。
- バージョン 3.8.5 より前のバージョンを使用している場合は、[Experience Manager Guides ヘルプPDFアーカイブ ](https://helpx.adobe.com/xml-documentation-for-experience-manager/archive.html) にある製品固有のインストールガイドのAdobe Experience Manager Guidesのアップグレードの節を参照してください。



>[!NOTE]
>
>Experience Manager Guides版をアップグレードする前に、AEM サービスパックをインストールする必要があります。

詳しくは、Experience Manager Guidesの [ オンプレミスリリースのアップグレード手順 ](../install-guide/upgrade-xml-documentation.md) を参照してください。
