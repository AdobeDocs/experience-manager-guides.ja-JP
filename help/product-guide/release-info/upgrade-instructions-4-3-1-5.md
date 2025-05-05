---
title: リリースノート | Adobe Experience Manager Guides 4.3.1.5 リリースのアップグレード手順
description: Adobe Experience Manager Guidesの 4.3.1.5 リリースへのアップグレード方法について説明します
role: Leader
exl-id: 856970ef-9f50-4452-b589-ba1f5ee73322
source-git-commit: e40ebf4122decc431d0abb2cdf1794ea704e5496
workflow-type: tm+mt
source-wordcount: '437'
ht-degree: 2%

---

# 4.3.1.5 リリースのアップグレード手順

この記事では、Adobe Experience Manager Guides 4.3.1.5 リリースのアップグレード手順と互換性マトリックスについて説明します。


このリリースで修正された問題のリストについては、[4.3.1.5 リリースで修正された問題 ](../release-info/fixed-issues-4-3-1-5.md) を参照してください。




## 互換性マトリックス

ここでは、Experience Manager Guides 4.3.1.5 リリースでサポートされているソフトウェアアプリケーションの互換表を示します。

### Adobe Experience Manager

**4.3.1.5 非 UUID**
バージョン 6.5 サービスパック 18、17、16、15、14

**4.3.1.5 UUID**
バージョン 6.5 サービスパック 18、17、16、15、14

詳しくは、オンプレミスのインストールおよび設定ガイドの *技術要件* の節を参照してください。

### FrameMakerとFrameMaker Publishing Server

| リリース | FMPS 2022 | FMPS 2020 | Fm 2022 | Fm 2020 |
| --- | --- | --- | --- | --- |
| 4.3.1.5 （非 UUID） | 2022 以上 | 2020.2 以上* | 2022 以上 | 2020.3 以上 |
| 4.3.1.5 （UUID） | 2022 以上 | 2020.2 以上* | 2022 以上 | 2020.4 以上 |
| | | | |

*AEMで作成されたベースラインと条件は、2020.2 以降の FMPS リリースでサポートされます。

### 酸素コネクタ

| リリース | 酸素コネクタウィンドウ | 酸素コネクタMac | 酸素ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- |--- |--- |
| 4.3.1.5 （非 UUID） | 2.3-regular-5 | 2.3-regular-5 | 1.6 | 1.6 |
| 4.3.1.5 （UUID） | 3.2-uuid-5 | 3.2-uuid-5 | 2.3 | 2.3 |
|  |  |   |



### ナレッジベーステンプレートバージョン

| コンポーネントパッケージ名 | コンポーネントのバージョン | テンプレートのバージョン |
|---|---|---|
| Cloud Service用Experience Manager Guides コンポーネントコンテンツパッケージ | dxml-components.all-1.2.2 | aem-site-template-dxml.all-1.0.15 |



## Experience Manager Guidesの 4.3.1.5 リリースへのアップグレード


Guides の現在のバージョンをバージョン 4.3.1.5 に簡単にアップグレードできます。Experience Manager Guidesのバージョン 4.3.1.5 へのアップグレードを行う前に、次の点を考慮する必要があります。


- バージョン 4.3.1 または 4.3.1.x を使用している場合は、バージョン 4.3.1.5 に直接アップグレードできます。
- バージョン 4.3.0 または 4.2 （ホットフィックス 4.2.1.3）を使用している場合は、バージョン 4.3.1.5 にアップグレードする前に、バージョン 4.3.1 にアップグレードする必要があります。

- バージョン 4.1 または 4.1.x を使用している場合は、バージョン 4.3.1.5 にアップグレードする前にバージョン 4.3.1 にアップグレードする必要があります。


- バージョン 4.0 を使用している場合、バージョン 4.3.x にアップグレードする前にバージョン 4.2 にアップグレードする必要があります。
- バージョン 3.8.5 を使用している場合、バージョン 4.2 にアップグレードする前にバージョン 4.0 にアップグレードする必要があります。
- バージョン 3.8.5 より前のバージョンを使用している場合は、[Experience Manager Guides ヘルプPDFアーカイブ ](https://helpx.adobe.com/jp/xml-documentation-for-experience-manager/archive.html) にある製品固有のインストールガイドのAdobe Experience Manager Guidesのアップグレードの節を参照してください。



>[!NOTE]
>
>Experience Manager Guides版をアップグレードする前に、AEM サービスパックをインストールする必要があります。

詳しくは、Experience Manager Guidesの [ オンプレミスリリースのアップグレード手順 ](../install-guide/upgrade-xml-documentation.md) を参照してください。
