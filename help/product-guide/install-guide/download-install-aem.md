---
title: Adobe Experience Managerのインストール
description: Adobe Experience Managerのインストール方法を学ぶ
exl-id: 4693b102-b75a-4904-b2d5-914e774305f3
feature: Introduction, Installation
role: Admin
level: Experienced
source-git-commit: be06612d832785a91a3b2a89b84e0c2438ba30f2
workflow-type: tm+mt
source-wordcount: '172'
ht-degree: 0%

---

# Adobe Experience Managerのインストール {#id213BCI020E8}

AEM Guidesは、Adobe Experience Managerにインストールされるプラグインです。 AEMをインストールするには、AEMのいくつかの基本的な概念と推奨されるデプロイメントシナリオに関する理解が必要です。 次のリンクは、AEMのインストールを開始する際に役立ちます。

- [AEMの基本概念 ](https://helpx.adobe.com/jp/experience-manager/6-5/sites/deploying/using/deploy.html#BasicConcepts)

- [ 推奨されるAEM デプロイメント ](https://helpx.adobe.com/jp/experience-manager/6-5/sites/deploying/using/recommended-deploys.html)


>[!IMPORTANT]
>
> AEM 6.5.x で Java 11 を使用している場合は、問題が発生する可能性があります。*JDK 11 が原因`NoClassDefFoundError`* す。 この問題を解決するには、[JDK 11 が原因で NoClassDefFoundError \| AEM 6.5](https://helpx.adobe.com/experience-manager/kb/jdk-11-causes-noclassdeffounderror---aem-6-5.html) の記事を参照してください。

組織に最適なデプロイメント方法を特定したら、AEM ドキュメントの *[はじめに ](https://helpx.adobe.com/jp/experience-manager/6-5/sites/deploying/using/deploy.html#GettingStarted)* の節に従ってインストールプロセスを実行します。

AEM インスタンスをアップグレードする場合は、次の順序に従う必要があります。

1. AEM Guidesをアンインストールします。
1. AEM インスタンスをアップグレードします。
1. AEM Guidesをインストールします。

>[!IMPORTANT]
>
> システムパフォーマンスを向上させるために検討できるパフォーマンス最適化の推奨事項が多数あります。 詳しくは、[ パフォーマンスの最適化のRecommendations](download-install-recommend-perf-optimiz.md#) を参照してください。

**親トピック：**&#x200B;[ ダウンロードとインストール ](download-install.md)
