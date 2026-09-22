---
title: AI アシスタントを使用してドキュメントをスマートに作成する」
description: AI アシスタントを使用して、Adobe Experience Manager Guidesでドキュメントをスマートに検索および作成する方法を説明します。
exl-id: c18e8761-333e-40ef-9e16-e71a194a754a
TQID: https://experienceleague.adobe.com/pg9zeEg8m3NeDbN-j945SqPbaMX0GgBmuquAsQcrjOM
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
feature_v2:
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
    internal-label: Authoring
  - id: ec4263d9-bf7c-44c7-b3f1-3e664861c8f2
    internal-label: Generative AI
subfeature_v2:
  - id: ad602516-aca3-4247-9ae8-f393d958efa9
    internal-label: Editor
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
topic_v2:
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
  - id: f5c2a4bb-71ca-4d7e-8efd-442250e6ba48
    internal-label: Content reuse
source-git-commit: 5ed0a5191e1852dd65e0461f02d520b195f7cc39
workflow-type: tm+mt
source-wordcount: '615'
ht-degree: 0%
---
# AI アシスタント（Beta）

Adobe Experience Manager Guidesの&#x200B;**AI アシスタント**&#x200B;は、AIを活用した強力なツールで、スマートヘルプ、オーサリング、タグ付け機能を通じて生産性を向上させるように設計されています。 **標準** モードでは、Experience Manager Guides インターフェイスに&#x200B;**オーサリング**&#x200B;と&#x200B;**ヘルプ**&#x200B;の2つの堅牢なAI機能が統合され、コンテンツのオーサリングとExperience Manager Guides ドキュメントからの情報へのアクセスをより迅速かつ効率的におこなうことができます。 **エージェント** モードでは、AI アシスタントが代わりに&#x200B;**スマートタグ**&#x200B;を提供し、会話プロンプトウィンドウを通じて、コンテンツのタグレコメンデーションを求め、1つ以上のトピックに適用することができます。

>[!NOTE]
>
> 現在、Adobe Experience Manager Guides as a Cloud ServiceではAI アシスタント機能を利用できます。

## AI アシスタントモード

>[!NOTE]
>
>お客様の環境でエージェンティックモードでAI アシスタントを有効にするには、カスタマーサクセスチームにお問い合わせください。

AI アシスタントは、**Agentic**&#x200B;と&#x200B;**Standard**&#x200B;の2つのモードで利用できます。 管理者は、**Workspace設定**&#x200B;の「**一般**」タブの「**AI アシスタント**」セクションから、2つのモードのいずれかを選択できます。 AI アシスタントパネルは、エディターの両方のモードで同じですが、その中で使用できる機能は異なります。

* **エージェント** モードでは、Adobe CX Enterprise Coworkerの&#x200B;**スマートタグ** スキルを使用して、コンテンツを分析し、組織の分類基準に基づいて関連タグを推奨します。
* **標準** モードでは、既存のAI アシスタント エクスペリエンスが提供され、AI アシスタント パネルには&#x200B;**ヘルプ**&#x200B;と&#x200B;**オーサリング** タブがあります。

## エージェント モード

### スマートタグ付け

エージェント型モードのAI アシスタントなら、対話型のプロンプトウィンドウを通じて、コンテンツへのタグ付けをすばやく簡単に実行できます。 AI アシスタントは、Adobe CX Enterprise Coworkerのエージェント型スマートタグ付けスキルを使用し、コンテンツのタグ付けを求めると、最適なタグを提案します。 提案されたタグを確認し、マップ内の複数のトピックを含む1つまたは複数のトピックに適用することを選択して、コントロールを維持できます。

詳しくは、[ エージェンティック AI アシスタントの基本を学ぶ](./ai-assistant-agentic.md)を参照してください。

![ai アシスタントのスマートタグ ](./images/suggested-prompts.png)

## 標準モード

### オーサリング

AI アシスタントが&#x200B;**標準** モードで設定されている場合、AI アシスタントの&#x200B;**オーサリング**&#x200B;機能により、オーサリングプロセスがよりスマートかつ迅速になります。 選択したコンテンツに基づいて、コンテンツの再利用に向けたインテリジェントな提案の生成、コンテンツの翻訳、コンテンツ品質の向上など、さまざまな機能を提供します。 この機能は、オーサリングエクスペリエンス全体と作成者の生産性を向上させます。

詳しくは、[ オーサリング ](./ai-assistant-right-panel.md)を参照してください。

![ai アシスタント ](./images/ai-assistant-panel.png)

### ヘルプ

AI アシスタントが&#x200B;**標準** モードで設定されている場合、**ヘルプ**&#x200B;機能は、Experience Manager Guidesの理解、問題のトラブルシューティング、Adobe Experience Manager Guides ドキュメントの情報の検索を支援する、直感的なチャットベースのエクスペリエンスを提供します。 ユーザーガイドや参照ドキュメントを検索する代わりに、**ヘルプ**&#x200B;機能を使用して、クエリに関連する回答をすばやく見つけることができます。 これにより、時間を節約し、コンテンツ制作に専念できるようになり、生産性と効率性が向上します。

詳細については、[ ヘルプ ](./ai-based-smart-help.md)を参照してください。


![ スマートヘルプパネル ](images/smart-help-panel.png)

## 標準モードでAI アシスタントを使い始める

標準モードで&#x200B;**AI アシスタント**&#x200B;を初めて使用する場合は、Experience Manager Guidesの生成AI機能を使用する前に、同意を送信するように求められます。

AI アシスタントを起動するには、次の手順を実行します。

1. Experience Manager Guidesにログインします。
1. ホームページで、上部から「**AI Assistant**」を選択します。 管理者が目的のモードでAI アシスタント機能を有効にしていることを確認します。

AI アシスタントに、主要な機能、ユーザーガイドラインのリンク、および「**開始**」ボタンが表示されます。

![ スマートヘルプパネル ](images/get-started-ai.png)

ユーザーガイドラインを注意深く読み、**開始**&#x200B;を選択してAI アシスタントを起動します。

**関連トピック**

[AI アシスタントのセキュリティに関するFAQ](./ai-assistant-faq.md)

[Adobe Experience Manager Guidesの生成AIに関する情報開示](./adobe-generative-ai-disclosures.md)

[スマートヘルプとオーサリング用にAI アシスタントを設定する](../cs-install-guide/conf-smart-suggestions.md)
