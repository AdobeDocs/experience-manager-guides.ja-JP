---
title: Adobe Experience Managerのインストール
description: Adobe Experience Managerのインストール方法について説明します
feature: Introduction, Installation
role: Admin
level: Experienced
exl-id: d72b007c-9f0a-41be-bca2-2d6b54c30de1
source-git-commit: 82c93529b8535532cf50f6428c41a1881b24859e
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
> システムのパフォーマンスを向上させるために考慮できるパフォーマンス最適化の推奨事項はいくつかあります。 詳しくは、[ パフォーマンス最適化に関する推奨事項](./perf-optimization-on-prem.md)を参照してください。
