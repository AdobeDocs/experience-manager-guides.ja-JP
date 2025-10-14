---
title: Adobe Experience Manager Guidesのマップコンソール
description: マップコンソールと、Adobe Experience Manager Guidesでマップを公開および管理できる様々な機能について説明します。
feature: Publishing
role: User
exl-id: b273b1ae-fbb2-4b35-abce-0df78eeb2e11
source-git-commit: e14b19ff7c128899b4536d5b8c4290c476991bef
workflow-type: tm+mt
source-wordcount: '767'
ht-degree: 0%

---

# マップコンソールの概要

Adobe Experience Manager Guidesには、**マップコンソール** と呼ばれる専用のコンソールが用意されており、すべてのマップ管理タスクと公開タスクを効率化できます。 この一元化されたインタフェースにより、出力の生成、コンテンツの翻訳、レポートへのアクセスなどを 1 か所で行えるオプションが提供されるため、マップ関連アクティビティの生産性と精度が向上します。

![[ ファイル プロパティ ] の [ オプション ] タブ &#x200B;](./images/map-console-screen.png){align="left"}

マップ コンソール インターフェイスは、主に 2 つのセクション **ナビゲーション バー** および **左パネル** に分かれています。

![&#x200B; 新規 &#x200B;](images/map-console-sections.png){align="left"}

- （**A**） **ナビゲーションバー**：ナビゲーションバーには、ナビゲーションの切り替え、ページビューの調整、選択したマップファイルの名前の表示を行うためのツールが表示されます。

  ナビゲーションバーで使用できる機能の説明は次のとおりです。

   - **ナビゲーションスイッチャー**：他のページ（エディターまたはホームページ）にシームレスにナビゲーションできます。
   - **選択されたマップ ファイル**：現在選択されているマップ ファイルの名前が表示されます。 これをエディターで開くか、マップコンソール用に別のマップファイルを選択できます。
   - **その他のアクション**:**Assets UI**&#x200B;**Workspace設定** に移動するためのオプションを提供します。 詳細については、[&#x200B; タブバー &#x200B;](./web-editor-tab-bar.md) を参照してください。

  >[!NOTE]
  >
  > オンプレミス設定でAdobe Experience Manager Guidesを使用している場合、「Workspace設定」オプションは「その他のアクション」メニューの下に **設定** として引き続き表示されます。

   - **ビューを展開**:「**展開** アイコンを使用してページビューを展開できます。 この表示では、ヘッダーバーは非表示になり、コンテンツスペースが最大化されます。 標準ビューに戻るには、「**展開ビューを終了** アイコンを使用します。

  >[!NOTE]
  >
  > Adobe Experience Manager Guides as a Cloud Serviceを使用している場合は、追加の機能 [AI アシスタント &#x200B;](./ai-assistant.md) がナビゲーションバーに表示されます。

- （**B**） **左パネル**：左パネルからは、出力の生成、レポートの作成と管理、ベースライン、条件プリセット、コンテンツの翻訳、Workfront（設定されている場合のみ）の各機能にすばやくアクセスできます。

  詳しくは、次の [Map コンソール機能 &#x200B;](#map-console-features) の節を参照してください。

## マップ コンソールの機能

[&#x200B; マップコンソールで DITA マップファイルを開く &#x200B;](./open-files-map-console.md) 場合、左側のパネルで次の機能を使用できます。

**出力生成**

Map コンソールを使用すると、AEM Sites、PDF、HTML5、EPUB、JSON、DITA-OT、Native PDF公開、FMPS によるカスタム出力など、様々な形式の出力を効率的に生成できます。 DITA マップ全体の出力を生成することも、更新したいくつかのトピックのみを選択的に公開することもできます。 ベースライン公開機能を使用して、DITA マップまたはトピックの特定のバージョンを選択的に公開することもできます。

詳しくは、[&#x200B; 出力生成 &#x200B;](./generate-output.md) を参照してください。

**報告書の作成及び管理**

組織設定では、作業を開始したり、ドキュメントをライブでプッシュしたりする前に、技術ドキュメントの全体的な完全性を検証する必要があります。 マルチユーザー環境や大規模環境では、そのニーズはますます高まっています。 Map コンソールを使用してExperience Manager Guides レポートにアクセスすると、リポジトリ内のコンテンツの全体的な正常性と、ドキュメントプロセスでのコンテンツの使用方法に関する有用なinsightを得ることができます。

詳しくは、[Experience Manager Guidesのレポート &#x200B;](./reports-intro.md) を参照してください。

**ベースライン**

Experience Manager Guidesは、トピックおよびアセットのバージョンを作成して公開や翻訳に使用できるベースライン機能を提供します。 同じ DITA マップの複数の出力プリセットを並行して公開することもできます。

Experience Manager Guidesでベースラインを作成および管理する方法を説明します [。](./web-editor-baseline.md)

**条件プリセット**

Experience Manager Guidesでは、DITA トピックで属性を定義し、条件プリセットを使用して、最終的な出力で属性がどうなるかを指定できます。 例えば、コンテンツにバージョン 1.0 およびバージョン 2.0 として属性を追加し、条件プリセットを使用してリリース 1.0 のバージョン 1.0 を含め、バージョン 2.0 を除外できます。同様に、OS Windows および OS Linux として属性をコンテンツに追加し、オペレーティングシステムに応じて、最終的な出力に関連するコンテンツを含めたり除外したりできます。

詳しくは、[&#x200B; 条件プリセット &#x200B;](./generate-output-use-condition-presets.md) を参照してください。

**コンテンツの翻訳**

Experience Manager Guidesには、コンテンツを複数の言語に翻訳できる強力な機能が用意されています。 Experience Manager Guidesでは、人間による翻訳と機械翻訳の両方のワークフローがサポートされています。

Map コンソールでは、翻訳ワークフローの使用を開始するために必要なすべてのオプションにアクセスできます。 詳しくは、[&#x200B; コンテンツの翻訳 &#x200B;](./translation.md) を参照してください。


**Workfront**

Workfront機能はマップ コンソールにも存在し、Experience Manager Guidesから直接Adobe Workfront タスクを操作できます。

[Experience Manager GuidesのAdobe Workfront統合 &#x200B;](./workfront-integration.md) について説明します。

この機能には、管理者がExperience Manager Guides インスタンスで **Adobe Workfront** 統合を設定している場合にのみアクセスできます。
