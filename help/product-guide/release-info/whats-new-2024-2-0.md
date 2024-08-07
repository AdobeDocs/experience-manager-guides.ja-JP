---
title: リリースノート | Adobe Experience Manager Guides 2024.2.0 リリースの新機能
description: Adobe Experience Manager Guidesas a Cloud Serviceの 2024.2.0 リリースの新機能と機能強化について説明します。
exl-id: 234d430a-d775-484a-aea8-6e422b0a01eb
source-git-commit: b1bb2b9da71bf0551fe40c84ac382df0e78e007b
workflow-type: tm+mt
source-wordcount: '1066'
ht-degree: 2%

---

# 2024.2.0 リリースの新機能

この記事では、Adobe Experience Manager Guides 2024.2.0 リリースの新機能と機能強化について説明します。

このリリースで修正された問題の一覧については、[2024.2.0リリースで修正された問題](fixed-issues-2024-2-0.md)を参照してください。


[2024.2.0 リリースのアップグレード手順 ](upgrade-instructions-2024-2-0.md) について説明します。



## コンテンツのオーサリング時にコンテンツ参照を追加するための AI を活用したスマート提案

スマート候補は、web エディターの新しい AI ベースの機能で、オーサリングジャーニーを強化できます。 コンテンツをオーサリングする際に、このインテリジェントな機能によって、コンテンツ参照の提案をリアルタイムで行うことができ、ワークフローが改善され、精度が向上し、比類のない効率が実現します。


コンテンツを正確かつ一貫性を保つために、検索と提案は組織が所有するコンテンツに限定され、検索するキーワードと密接に一致します。

![Web エディターの ](assets/web-editor-smart-suggestion.png) {width="800" align="left"} のスマート候補パネル


*スマート候補を表示して、コンテンツリポジトリから一致するコンテンツ参照を検索および追加します。*

また、現在のコンテンツを、他のトピックの類似コンテンツと比較することもできます。 その後、様々なトピックからコンテンツを簡単に選択し、それらをコンテンツ参照として現在のトピックに追加できます。 コンテンツ参照を追加すると、特に大規模なドキュメントプロジェクトで、更新を管理しやすくなります。 例えば、製品の最新機能に関するパンフレットを作成しているとします。 その場合は、更新された仕様を、関連する機能ドキュメントからのコンテンツ参照としてすばやく追加できます。

このインテリジェントな機能により、関連コンテンツを手動で検索する手間が軽減され、新しいコンテンツの作成に集中できるようになります。  また、一貫性を維持し、チームの共同作業を促進します。

詳しくは、[ コンテンツを作成するための AI を利用したスマートな提案 ](../user-guide/authoring-ai-based-smart-suggestions.md) を参照してください。

## Web エディターのバージョン履歴機能を改訂しました。

Experience Manager Guidesには、ドキュメントに加えられた変更を時間の経過と共に比較できる、拡張バージョン履歴機能が追加されました。 新しい並列表示では、現在のバージョンのコンテンツやメタデータを、同じドキュメントの以前のバージョンと簡単に比較できます。 また、比較したバージョンのラベルとコメントを表示することもできます。 管理者は、トピックのバージョンメタデータとその値を **バージョン履歴** ダイアログボックスに表示されるように制御できます。

![ バージョン履歴ダイアログボックス ](assets/version-history-dialog-web-editor.png){width="800" align="left"}
*トピックの異なるバージョンでの変更をプレビューします。*


**左側のパネル** の節で、[ バージョン履歴 ](../user-guide/web-editor-features.md#id2051EA0M0HS) 機能の説明について詳しく説明します。

## 翻訳パネルのユーザーエクスペリエンスの向上

**翻訳** パネルが改善されました。  **使用可能な言語** リストを表示して、プロジェクトを翻訳するロケールをすばやく選択できます。 1 つを選択した場合は、「**すべてを選択** を選択して、プロジェクトを使用可能なすべての言語に翻訳することもできます。

![翻訳パネル](assets/translation-languages-4.4.png){width="300" align="left"}

*プロジェクトを翻訳するロケールを選択します。 翻訳するファイルの既定、ベースライン、または最新バージョンを選択します。*

詳細情報：[ コンテンツの翻訳 ](../user-guide/translation.md)。


## 要素を挿入ダイアログボックスの検索ロジックの改善

[ 要素を挿入 ] ダイアログ ボックスで要素を簡単に検索できるようになりました。  検索ボックスに文字列を入力すると、入力した文字列で始まる有効なすべての要素のリストを取得できます。

例えば、要素を挿入したい段落を編集する際に、文字「t」を検索すると以下のようになります。
&#39;t&#39;で始まるすべての有効な要素。


![ 挿入ダイアログボックス ](assets/insert-element.png){width="300" align="left"}

*文字を入力すると、その文字で始まるすべての有効な要素が検索されます。*


詳しくは、「左パネル **セクションの [ 要素を挿入** 機能の説明を参照し ](../user-guide/web-editor-features.md#id2051EA0M0HS) ください。


## 現在のリストを分割し、同じレベルの新しいリスト項目から開始する機能

これで、web エディターでリストを簡単に分割できます。 リスト項目のコンテキストメニューから「**リストを分割**」オプションを選択して、現在のリストを分割します。 分割で選択したリスト項目から始まる新しいリストが同じレベルに作成されます。

![翻訳パネル](assets/context-menu-split-list.png){width="300" align="left"}

*現在のリストを分割するオプションを選択します。*

詳しくは、「左パネル **セクションの** リストを挿入 [ 機能の説明を参照し ](../user-guide/web-editor-features.md#id2051EA0M0HS) ください。

## ソースモードのオーサリングでのファイルプロパティへのアクセス

レイアウト、オーサー、Source、プレビューの 4 つのモードまたはビューすべてで、右側のパネルの **ファイルプロパティ** 機能にアクセスできるようになりました。  これにより、異なるモードに切り替えた場合でも、ファイルのプロパティを表示できます。

詳しくは、「右パネル **セクションの「[ ファイルプロパティ** 機能の説明 ](../user-guide/web-editor-features.md#id2051EB003YK) を参照してください。

## 動的ベースラインを含む複数の出力プリセットを並行して公開できる機能。

Experience Managerでは、適用されるラベルに従ってトピックを自動的に選択し、ベースラインを作成する機能を提供しています。 同じ DITA マップの自動ベースラインを使用して、複数の出力プリセットをシームレスに公開することもできます。 一度に 1 つのプリセットのみを公開する必要はありませんが、複数の出力プリセットを並行して簡単に公開できます。


## ネイティブPDFの機能強化

2024.2.0 リリースでは、次のネイティブPDFの機能強化が行われました。

### アセットのメタデータをPDF出力に渡す

Experience Managerでは、アセットのメタデータプロパティを DITA マップからPDF出力に渡すことができるようになりました。
ネイティブPDF出力プリセットから、PDF公開プロセスに渡すメタデータを選択できます。 カスタムプロパティとデフォルトプロパティの両方を選択できます。  選択したメタデータプロパティは、ネイティブPDFを使用して生成されたPDFファイルに渡されます。

この機能は、作成者、作成日、ドキュメントタイトルなどのアセットプロパティの一貫性を維持するのに役立つので便利です。 これにより、ドキュメントの整理、検索、分類が容易になります。

詳しくは、[PublishPDF出力の **詳細** 設定を参照してください ](../web-editor/native-pdf-web-editor.md)。


### `topicmeta` 要素に追加されたメタデータをPDF出力に使用

ネイティブPDF公開のメタデータ機能は、コンテンツ管理に役立ち、インターネット上のファイルを検索するのに役立ちます。
<img src="assets/pdf-metadata-4-4.png" alt="「メタデータ」タブ" width="800">

*オプションを選択して、メタデータオプションを追加およびカスタマイズします。*

Experience Manager Guidesには、DITA マップの `topicmeta` 要素に追加したメタデータを使用して、PDF出力のメタデータフィールドに入力するオプションが追加されました。 このオプションはデフォルトで選択されています。

この機能により、ドキュメント管理が向上し、一貫性が確保され、ドキュメントが検索可能になります。

詳しくは、[PublishPDF出力 **の「** メタデータ ](../web-editor/native-pdf-web-editor.md)」タブを参照してください。
