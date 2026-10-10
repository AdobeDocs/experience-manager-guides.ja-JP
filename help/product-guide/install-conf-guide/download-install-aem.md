---
title: Adobe Experience Managerのインストール
description: Adobe Experience Managerのインストール方法について説明します
feature: Introduction, Installation
role: Admin
level: Experienced
exl-id: d72b007c-9f0a-41be-bca2-2d6b54c30de1
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
feature_v2:
  - id: e88e74c7-6080-446a-8eb0-496f1ac5f7e6
    internal-label: Administration
subfeature_v2:
  - id: c5fd2af0-6cbb-4746-ab0d-40ecb093af12
    internal-label: Introduction
  - id: e557051c-ff02-4ff8-9421-cf452af0edd5
    internal-label: Installation
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '213'
ht-degree: 5%
---
# Adobe Experience Managerのインストール {#id213BCI020E8}

AEM Guidesは、Adobe Experience Manager上にインストールされるプラグインです。 AEMをインストールするには、AEMの基本的な概念と推奨されるデプロイメントのシナリオについて理解する必要があります。 次のリンクリソースは、AEMのインストールを開始するのに役立ちます。

- [AEMの基本コンセプト](https://helpx.adobe.com/experience-manager/6-5/sites/deploying/using/deploy.html#BasicConcepts)

- [AEMの推奨デプロイメント](https://helpx.adobe.com/experience-manager/6-5/sites/deploying/using/recommended-deploys.html)

>[!IMPORTANT]
>
> AEM 6.5.xでJava 11を使用している場合、問題が発生する可能性があります – *JDK 11が`NoClassDefFoundError`*&#x200B;を引き起こします。 この問題を解決するには、[JDK 11によってNoClassDefFoundError \| AEM 6.5](https://helpx.adobe.com/experience-manager/kb/jdk-11-causes-noclassdeffounderror---aem-6-5.html)の記事を参照してください。

自社に最適なデプロイメント戦略を特定したら、AEM ドキュメントの「*[はじめに](https://helpx.adobe.com/jp/experience-manager/6-5/sites/deploying/using/deploy.html#GettingStarted)*」セクションで説明されているように、インストールプロセスを実行します。

AEM インスタンスをアップグレードする場合は、指定された順序に従う必要があります。

1. AEM Guidesをアンインストールします。
1. AEM インスタンスをアップグレードします。
1. AEM Guidesを再インストールします。

>[!IMPORTANT]
>
> システムのパフォーマンスを向上させるために考慮できるパフォーマンス最適化の推奨事項はいくつかあります。 詳しくは、[&#x200B; パフォーマンス最適化に関する推奨事項](./perf-optimization-on-prem.md)を参照してください。
