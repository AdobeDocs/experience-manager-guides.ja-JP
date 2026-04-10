---
title: Adobe Experience Managerのインストール
description: Adobe Experience Managerのインストール方法について説明します
exl-id: 4693b102-b75a-4904-b2d5-914e774305f3
feature: Introduction, Installation
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 3aadc59f5034828cf319992b7acb32d5a88eaf93
workflow-type: tm+mt
source-wordcount: '172'
ht-degree: 0%

---

# Adobe Experience Managerのインストール {#id213BCI020E8}

AEM Guidesは、Adobe Experience Manager上にインストールされるプラグインです。 AEMをインストールするには、AEMの基本的な概念と推奨されるデプロイメントのシナリオについて理解する必要があります。 次のリンクは、AEMのインストールを開始するのに役立ちます。

- [AEMの基本概念](https://helpx.adobe.com/experience-manager/6-5/sites/deploying/using/deploy.html#BasicConcepts)

- [推奨されるAEMの展開](https://helpx.adobe.com/experience-manager/6-5/sites/deploying/using/recommended-deploys.html)


>[!IMPORTANT]
>
> AEM 6.5.xでJava 11を使用している場合、問題が発生する可能性があります – *JDK 11が`NoClassDefFoundError`*&#x200B;を引き起こします。 この問題を解決するには、[JDK 11によってNoClassDefFoundError \| AEM 6.5](https://helpx.adobe.com/experience-manager/kb/jdk-11-causes-noclassdeffounderror---aem-6-5.html)の記事を参照してください。

自社に最適なデプロイメント戦略を特定したら、AEM ドキュメントの「*[はじめに](https://helpx.adobe.com/jp/experience-manager/6-5/sites/deploying/using/deploy.html#GettingStarted)*」セクションで説明されているように、インストールプロセスを実行します。

AEM インスタンスをアップグレードする場合は、指定された順序に従う必要があります。

1. AEM Guidesをアンインストールします。
1. AEM インスタンスをアップグレードします。
1. AEM Guidesをインストールします。

>[!IMPORTANT]
>
> システムのパフォーマンスを向上させるために考慮できるパフォーマンス最適化の推奨事項はいくつかあります。 詳しくは、[ パフォーマンス最適化に関する推奨事項](download-install-recommend-perf-optimiz.md#)を参照してください。

**親トピック：**[ ダウンロードしてインストール ](download-install.md)
