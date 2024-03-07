---
title: リリースノート | Adobe Experience Managerガイド 4.3.1.5 リリースのアップグレード手順
description: Adobe Experience Managerガイドの 4.3.1.5 リリースにアップグレードする方法を説明します
role: Leader
source-git-commit: 296bbea301df8828c00436db2b3c8b46dd235e64
workflow-type: tm+mt
source-wordcount: '437'
ht-degree: 2%

---


# 4.3.1.5 リリースのアップグレード手順

この記事では、Adobe Experience Managerガイドの 4.3.1.5 リリースのアップグレード手順と互換性マトリックスについて説明します。


このリリースで修正された問題の一覧については、 [4.3.1.5 リリースの問題を修正しました](../release-info/fixed-issues-4-3-1-5.md).




## 互換性マトリックス

このセクションでは、Experience Managerガイド 4.3.1.5 リリースでサポートされているソフトウェアアプリケーションの互換性マトリックスを示します。

### Adobe Experience Manager

**4.3.1.5 非 UUID**
バージョン 6.5 Service Pack 18、17、16、15、14

**4.3.1.5 UUID**
バージョン 6.5 Service Pack 18、17、16、15、14

詳しくは、 *技術要件* 」の「オンプレミスのインストールと設定ガイド」の節を参照してください。

### FrameMakerとFrameMaker Publishing Server

| リリース | FMPS 2022 | FMPS 2020 | Fm 2022 | Fm 2020 |
| --- | --- | --- | --- | --- |
| 4.3.1.5（非 UUID） | 2022 以降 | 2020.2 以降* | 2022 以降 | 2020.3 以降 |
| 4.3.1.5(UUID) | 2022 以降 | 2020.2 以降* | 2022 以降 | 2020.4 以降 |
| | | | |

* AEMで作成されたベースラインと条件は、2020.2 以降の FMPS リリースでサポートされています。

### 酸素コネクタ

| リリース | Oxygen Connector ウィンドウ | Oxygen Connector Mac | Oxygen Windows で編集 | Oxen Macで編集 |
| --- | --- | --- |--- |--- |
| 4.3.1.5（非 UUID） | 2.3-regular-5 | 2.3-regular-5 | 1.6 | 1.6 |
| 4.3.1.5(UUID) | 3.2-uuid-5 | 3.2-uuid-5 | 2.3 | 2.3 |
|  |  |   |



### ナレッジベーステンプレートバージョン

| コンポーネントのパッケージ名 | コンポーネントのバージョン | テンプレートバージョン |
|---|---|---|
| Experience ManagerガイドコンポーネントCloud Service用コンテンツパッケージ | dxml-components.all-1.2.2 | aem-site-template-dxml.all-1.0.15 |



## Experience Managerガイドの 4.3.1.5 リリースにアップグレード


現在のバージョンのガイドをバージョン 4.3.1.5 に簡単にアップグレードできます。バージョン 4.3.1.5 のExperience Managerガイドへのアップグレードを進める前に、次の点を考慮する必要があります。


- バージョン 4.3.1 または 4.3.1.x を使用している場合は、直接バージョン 4.3.1.5 にアップグレードできます。
- バージョン 4.3.0 または 4.2（ホットフィックス 4.2.1.3）を使用している場合は、バージョン 4.3.1.5 にアップグレードする前に、バージョン 4.3.1 にアップグレードする必要があります。

- バージョン 4.1 または 4.1.x を使用している場合は、バージョン 4.3.1.5 にアップグレードする前に、バージョン 4.3.1 にアップグレードする必要があります。


- バージョン 4.0 を使用している場合は、バージョン 4.3.x にアップグレードする前に、バージョン 4.2 にアップグレードする必要があります。
- バージョン 3.8.5 を使用している場合は、バージョン 4.2 にアップグレードする前に、バージョン 4.0 にアップグレードする必要があります。
- 3.8.5 より前のバージョンを使用している場合は、で入手可能な製品固有のExperience Managerガイドの「アップグレードインストールガイド」の節を参照してください。 [Adobe Experience ManagerガイドヘルプPDFアーカイブ](https://helpx.adobe.com/xml-documentation-for-experience-manager/archive.html).



>[!NOTE]
>
>AEMガイドのバージョンをアップグレードする前に、 Service Pack をExperience Managerする必要があります。

詳細については、 [オンプレミスリリースのアップグレード手順](../install-guide/upgrade-xml-documentation.md) Experience Managerガイド

