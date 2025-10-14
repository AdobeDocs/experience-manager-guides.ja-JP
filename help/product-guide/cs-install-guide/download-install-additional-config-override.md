---
title: 設定の上書き
description: 設定の上書き方法を学ぶ
exl-id: dc5f81f7-5b0a-4d12-a944-ba66b0239d5c
feature: Installation
role: Admin
level: Experienced
source-git-commit: e4b213b5f0efda18fb24f100f3ee8237947890bf
workflow-type: tm+mt
source-wordcount: '306'
ht-degree: 0%

---

# 設定の上書き {#id216IFC003XA}

設定を更新する場合は、次の一般的なアプローチを使用する必要があります。

1. Cloud Managerの Git リポジトリにアクセスします。

1. 次の場所に新しい JSON ファイルを作成します。

   src/main/content/jcr\_root/apps/fmditaCustom/config/

1. 次の形式でファイルに名前を付けます。

   $\{PID\}.cfg.json

   ここで、PID は設定のプロセス ID です。

1. 次の形式を使用して、JSON ファイルにプロパティを追加します。

   ```
   {
      "aem.adminuname": "updatedUserjson",
      "valid.characters": "[-a-zA-Z0-9_@$]",
      "dita.serialization": true
   }
   ```

1. 変更をコミットし、Cloud Manager パイプラインを実行して、更新された設定をデプロイします。

## Experience Manager Guides UI の設定

Adobe Experience Manager Guidesの 2025.02.0 リリースでは、UI の改訂と機能の強化により、以前よりも迅速かつ効率的に作業できるようになりました。 これには、まったく新しいホームページ、よりクリーンで整理されたエディターツールバー、専用のマップコンソール、拡張機能などが含まれます。

スムーズに移行し、中断を最小限に抑えるために、Experience Manager Guidesでは、必要に応じて古い UI に戻すことができる設定オプションを提供しています（逆も同様です）。

>[!IMPORTANT]
>
> 新しい UI と古い UI を切り替えるこの設定オプションは、2025.4.0 リリースまでサポートされていました。 2025.6.0 リリースでは、この設定は非推奨（廃止予定）となり、古い UI に戻すために使用できなくなりました。

Experience Manager Guides UI を設定するには、次の手順を実行します。

1. Adobe Experience Managerを開き、設定する環境が含まれているプログラムを選択します。
2. 「**環境**」タブに切り替えます。
3. 設定する環境名を選択します。 これにより、**環境情報** ページに移動します。
4. 「**設定**」タブに切り替えます。
5. 「**追加/更新**」を選択します。
6. UI 設定の詳細を追加します。 次のスクリーンショットで示したのと同じ名前と設定を使用していることを確認してください。

   ![](assets/enable-penultimate-ui.png){width="800" align="left"}

   値を **true** に設定すると古い UI が保持され、**false** に設定すると新しい UI がアクティブになります。



**親トピック：**&#x200B;[&#x200B; ダウンロードとインストール &#x200B;](download-install.md)
