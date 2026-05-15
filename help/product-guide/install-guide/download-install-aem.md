---
title: Adobe Experience Managerのインストール
description: Adobe Experience Managerのインストール方法について説明します
exl-id: 4693b102-b75a-4904-b2d5-914e774305f3
feature: Introduction, Installation
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/yoV8cMoMPIDbFi-cTm2LmmOSTpOjx8TrhengJ3WPrBs
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
role_v2: id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
topic_v2: id: cdd65e7e-8839-44a2-bc21-0e03623b5dd1
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 215
ht-degree: 5%

---

# Adobe Experience Managerのインストール {#id213BCI020E8}

AEM Guidesは、Adobe Experience Manager上にインストールされるプラグインです。 AEMをインストールするには、AEMの基本的な概念と推奨されるデプロイメントのシナリオについて理解する必要があります。 次のリンクは、AEMのインストールを開始するのに役立ちます。

- [AEMの基本コンセプト](https://helpx.adobe.com/experience-manager/6-5/sites/deploying/using/deploy.html#BasicConcepts)

- [AEMの推奨デプロイメント](https://helpx.adobe.com/experience-manager/6-5/sites/deploying/using/recommended-deploys.html)


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
