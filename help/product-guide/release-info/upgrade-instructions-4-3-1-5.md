---
title: リリースノート | Adobe Experience Manager Guides 4.3.1.5 リリースのアップグレード手順
description: Adobe Experience Manager Guidesの4.3.1.5 リリースへのアップグレード方法について説明します
role: Leader
exl-id: 856970ef-9f50-4452-b589-ba1f5ee73322
TQID: https://experienceleague.adobe.com/wN9EyxDaR5dSTnaUQIqKV-8jhbw2LUj36vpeUd8Obc4
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
  - id: afb45297-4313-4f67-818e-bc0b03abe086
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2:
  - id: d5ea0417-7932-4688-a3e2-4d3b2e7076a3
role_v2:
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 434
ht-degree: 2%

---

# 4.3.1.5 リリースのアップグレード手順

この記事では、Adobe Experience Manager Guidesの4.3.1.5 リリースのアップグレード手順と互換性マトリックスについて説明します。


このリリースで修正された問題のリストについては、4.3.1.5 リリース [&#128279;](../release-info/fixed-issues-4-3-1-5.md)の修正済みの問題を参照してください。




## 互換性マトリックス

この節では、Experience Manager Guides 4.3.1.5 リリースでサポートされているソフトウェアアプリケーションの互換性マトリックスを示します。

### Adobe Experience Manager

**4.3.1.5非UUID**
バージョン 6.5 サービスパック 18、17、16、15、14

**4.3.1.5UUID**
バージョン 6.5 サービスパック 18、17、16、15、14

詳しくは、オンプレミスのインストールおよび設定ガイドの&#x200B;*技術要件* セクションを参照してください。

### FrameMakerとFrameMaker Publishing Server

| リリース | FMPS 2022 | FMPS 2020 | Fm 2022 | Fm 2020 |
| --- | --- | --- | --- | --- |
| 4.3.1.5 （非UUID） | 2022年以降 | 2020.2以降* | 2022年以降 | 2020.3以降 |
| 4.3.1.5 （UUID） | 2022年以降 | 2020.2以降* | 2022年以降 | 2020.4以降 |
| | | | | |

* AEMで作成されたベースラインと条件は、2020.2以降のFMPS リリースでサポートされています。

### Oxygen コネクタ

| リリース | Oxygen コネクタウィンドウ | Oxygen Connector Mac | Oxygen ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- |--- |--- |
| 4.3.1.5 （非UUID） | 2.3-regular-5 | 2.3-regular-5 | 1.6 | 1.6 |
| 4.3.1.5 （UUID） | 3.2-uuid-5 | 3.2-uuid-5 | 2.3 | 2.3 |
|  |  |   | | |



### ナレッジベースのテンプレートバージョン

| コンポーネントパッケージ名 | コンポーネントバージョン | テンプレートバージョン |
|---|---|---|
| Cloud Service用Experience Manager Guides コンポーネントコンテンツパッケージ | dxml-components.all-1.2.2 | aem-site-template-dxml.all-1.0.15 |



## Experience Manager Guidesの4.3.1.5 リリースへのアップグレード


現在のバージョンのGuidesをバージョン 4.3.1.5に簡単にアップグレードできます。 Experience Manager Guidesのバージョン 4.3.1.5へのアップグレードを進める前に、次の点を考慮する必要があります。


&#x200B;- バージョン 4.3.1または4.3.1.xを使用している場合は、バージョン 4.3.1.5に直接アップグレードできます。
&#x200B;- バージョン 4.3.0または4.2 （ホットフィックス 4.2.1.3）を使用している場合は、バージョン 4.3.1.5にアップグレードする前に、バージョン 4.3.1にアップグレードする必要があります。

&#x200B;- バージョン 4.1または4.1.xを使用している場合は、バージョン 4.3.1.5にアップグレードする前にバージョン 4.3.1にアップグレードする必要があります。


&#x200B;- バージョン 4.0を使用している場合は、バージョン 4.3.xにアップグレードする前にバージョン 4.2にアップグレードする必要があります。
&#x200B;- バージョン 3.8.5を使用している場合は、バージョン 4.2にアップグレードする前にバージョン 4.0にアップグレードする必要があります。
&#x200B;- 3.8.5より前のバージョンを使用している場合は、[Adobe Experience Manager Guides ヘルプ Experience Manager Guides アーカイブ &#x200B;](https://helpx.adobe.com/xml-documentation-for-experience-manager/archive.html)で入手できる製品固有のインストールガイドの「PDFのアップグレード」セクションを参照してください。



>[!NOTE]
>
>Experience Manager Guides バージョンをアップグレードする前に、AEM サービスパックをインストールする必要があります。

詳しくは、Experience Manager Guidesのオンプレミスリリース [&#128279;](../install-guide/upgrade-xml-documentation.md)の アップグレード手順を参照してください。
