---
title: リリースノート | Adobe Experience Managerガイド 4.4.0 リリースの新機能
description: Adobe Experience Managerガイドの 4.4.0 リリースの新機能および機能強化について説明します
source-git-commit: 027e8e6a6119145a5b2255449514a76488c90463
workflow-type: tm+mt
source-wordcount: '2307'
ht-degree: 0%

---

# Adobe Experience Managerガイドの 4.4.0 リリース（2024 年 1 月）の新機能

この記事では、Adobe Experience Managerガイド ( 後で *Experience Managerガイド*) をクリックします。

アップグレードの手順、互換性マトリックス、およびこのリリースで修正された問題について詳しくは、 [リリースノート](./release-notes-4.4.md).

## Web エディターの改良されたバージョン履歴機能

Experience Managerガイドに、拡張されたバージョン履歴機能が追加され、ドキュメントに加えられた変更を経時的に比較できるようになりました。 新しい並べ替え表示では、現在のバージョンのコンテンツとメタデータを、同じドキュメントの以前のバージョンと簡単に比較できます。 比較対象のバージョンのラベルおよびコメントも表示できます。 管理者は、トピックのバージョンメタデータと、その値を **バージョン履歴** ダイアログボックス。

![バージョン履歴ダイアログボックス](assets/version-history-dialog-web-editor.png){width="800" align="left"}
*トピックの様々なバージョンでの変更をプレビューします。*


詳しくは、 **バージョン履歴** 機能の説明 [左パネル](../user-guide/web-editor-features.md#id2051EA0M0HS) 」セクションに入力します。

## 条件プリセットの管理

DITA トピックで条件属性を定義できます。 次に、条件プリセットの条件属性を使用して、DITA マップでコンテンツを公開します。 また、Experience Managerガイドは Web エディターで強化されたエクスペリエンスを提供するようになりました。これにより、条件プリセットをより効率的に作成および管理できます。 また、簡単に編集、複製、削除できます。

![Web エディターの「管理」タブからの条件プリセット ](assets/web-editor-manage-condition-presets.png){width="550" align="left"}

詳しくは、 [条件プリセットの使用](../user-guide/generate-output-use-condition-presets.md).

## 属性を編集するエクスペリエンスが改良されました。

これで、要素の属性を **コンテンツのプロパティ** パネルを使用して、Web エディターで設定できます。

![属性パネル](assets/attributes-multiple-properties.png){width="300" align="left"}

*[ コンテンツプロパティ ] パネルから属性を追加します。*

また、属性を簡単に編集および削除することもできます。
詳しくは、 **コンテンツのプロパティ** 内の機能の説明 [右パネル](../user-guide/web-editor-features.md#id2051EB003YK) 」セクションに入力します。

## オーサリング中にメタデータを編集

これで、オーサリング中に、 **ファイルのプロパティ** をクリックします。 また、 **その他のプロパティを編集** をクリックして、さらにメタデータを更新します。

![file-properties](assets/file-properties-general.png){width="300" align="left"}

*右側のパネルからメタデータを更新し、ファイルのプロパティを編集します。*

詳しくは、 **ファイルのプロパティ** 内の機能の説明 [右パネル](../user-guide/web-editor-features.md#id2051EB003YK) 」セクションに入力します。

## マップビューでキー属性を表示する

トピックまたはマップ参照のキー属性を定義する際に、タイトル、対応するアイコンおよびキーを左側のパネルに表示することもできます。 キーは次のように表示されます。 `key=<key-name>`.

![マップビューのキー](assets/view-key-title-map-view.png) {width="300" align="left"}

*[ マップビュー ] で key 属性を表示します。*


詳しくは、 **マップビュー** 機能の説明 [左パネル](../user-guide/web-editor-features.md#id2051EA0M0HS) 」セクションに入力します。

## ラベルに基づいてベースラインを複製する機能

Experience Managerガイドで、Web エディターからベースラインを作成する際のユーザーエクスペリエンスが強化されました。
オプション **手動更新** および **自動更新** はより直感的で、静的ベースラインを作成するか、ラベルに従って自動的に更新するかを簡単に選択できます。

![新しいベースラインを作成](assets/dynamic-baseline-4-4.png) {width="300" align="left"}
*Web エディターからベースラインを作成します。*

また、ラベルに基づいてベースラインを複製することもできます。 参照バージョンは、複製時に指定されたラベルに基づいて選択されます（存在する場合）。複製時に選択されない場合は、複製されたベースラインからバージョンを選択します。


![ベースラインを複製 ](assets/duplicate-baseline.png) {width="300" align="left"}

*ラベルに基づいてベースラインを複製するか、正確なコピーを作成します。*

方法の詳細 [Web エディタからのベースラインの作成と管理](../user-guide/web-editor-baseline.md).

## 強化されたマップコレクションダッシュボード

Experience Managerガイドは、強化されたマップコレクションダッシュボードを提供します。 マップコレクションでは、DITA マップ用のメタデータプロパティを一括ですばやく設定できます。 各 DITA マップのメタデータプロパティを個別に更新する必要がないので、この機能は便利です。

これで、DITA マップのファイル名を表示できます。 また、ベースラインも表示できます。 これにより、プリセットに使用されるベースラインをすばやく見つけるのに役立ちます。

![コレクションダッシュボードをマッピング](assets/map-collection-dashboard.png){width="800" align="left"}

*マップコレクションダッシュボードで出力を表示、編集、生成します。*

方法を学ぶ [出力生成にマップコレクションを使用](../user-guide/generate-output-use-map-collection-output-generation.md).

## 翻訳パネルの強化

The **翻訳** パネルが改善されました。  次の項目を表示すると、 **使用可能な言語** プロジェクトを翻訳するロケールを一覧表示し、すばやく選択します。 1 つを選択した場合は、 **すべて選択** をクリックして、プロジェクトを使用可能なすべての言語に翻訳します。

![翻訳パネル](assets/translation-languages-4.4.png){width="300" align="left"}



*プロジェクトを翻訳するロケールを選択します。 翻訳するファイルのデフォルト、ベースライン、または最新バージョンを選択します。*

方法の詳細 [コンテンツを翻訳](../user-guide/translation.md).

## 要素を挿入ダイアログボックスの検索ロジックが改善されました。

[ 要素を挿入 ] ダイアログボックスで、要素を簡単に検索できるようになりました。  検索ボックスに文字列を入力すると、入力した文字列で始まる有効な要素の一覧を取得できます。

例えば、要素を挿入する段落の編集中に文字「t」を検索して、「t」で始まる有効な要素をすべて取得できます。


![[ 挿入 ] ダイアログボックス](assets/insert-element.png){width="300" align="left"}

*文字を入力すると、その文字で始まるすべての有効な要素が検索されます。*


詳しくは、 **要素を挿入** 機能の説明 [左パネル](../user-guide/web-editor-features.md#id2051EA0M0HS) 」セクションに入力します。


## 同じレベルでリストを分割する機能

これで、Web エディターでリストを簡単に分割できます。 を選択します。 **リストを分割** オプションを使用して、現在のリストを分割します。 分割用に選択したリスト項目から始まる同じレベルに新しいリストが作成されます。

![翻訳パネル](assets/context-menu-split-list.png){width="300" align="left"}

*現在のリストを分割するには、このオプションを選択します。*

詳しくは、 **リストの挿入** 機能の説明 [左パネル](../user-guide/web-editor-features.md#id2051EA0M0HS) 」セクションに入力します。

## DITA 要素のアンラップが簡単に

Web エディターで要素のコンテキストメニューの「 」オプションを使用すると、要素の展開を簡単に行うことができます。 これにより、要素のテキストを親要素と簡単に結合できます。
詳しくは、 **要素のアンラップ** セクションを [Web エディタのその他の機能](../user-guide/web-editor-other-features.md).

## オーサリングのソースモードでのファイルプロパティへのアクセス

これで、適切なパネルの **ファイルのプロパティ** の機能は、レイアウト、作成者、ソース、プレビューの 4 つのモードまたはビューのすべてで使用できます。  これにより、異なるモードを切り替えた場合でも、ファイルのプロパティを表示できます。

詳しくは、 **ファイルのプロパティ** 機能の説明 [右パネル](../user-guide/web-editor-features.md#id2051EB003YK) 」セクションに入力します。


## ファイルをタイトルまたはファイル名で表示

Web エディターでファイルを表示するデフォルトの方法を選択できるようになりました。 オーサー表示では、様々なパネルのタイトル別またはファイル名別にファイルのリストを表示できます。

![ユーザーの環境設定ダイアログ](assets/user-preferences-2311.png){width="550" align="left"}

*ファイルを表示するデフォルトの方法を変更するには、**ユーザーの環境設定**ダイアログ。*


## ブラウザーの更新時にファイルのタブを復元

Experience Managerガイドは、ブラウザを更新したときに、Web エディタで開かれたファイルタブの状態を復元します。 詳しくは、 **ファイルの編集中にブラウザーを更新** の下のセクション [Web エディターでトピックを編集](../user-guide/web-editor-edit-topics.md).


## キーボードショートカットを使用したナビゲーション機能

Experience Managerガイドで、Web エディターでカーソルを移動する際に、キーボードショートカットを使用できるようになりました。 キーボードショートカットを使用して、1 単語を左右にすばやく移動できます。 キーボードショートカットを使用して、行の先頭または末尾に移動することもできます。
これで、キーボードショートカットを使用して、カーソルを次の要素の先頭または前の要素の末尾に移動することもできます。
詳しくは、 [Web エディターのキーボードショートカット](../user-guide/web-editor-keyboard-shortcuts.md).


## AEM Site 出力のクロスマップリンクの解決

AEMサイト出力でレンダリングされるクロスマップリンク（スコープピアを持つ XREF）が、生成されたマップに対してパブリッシュコンテキストセットのファイルタイトルに従って解決されるようになりました。


## ドキュメントのタイトルを使用するAEM Site 出力の URL を設定

Experience Managerガイドを使用すると、AEM Site 出力の URL を管理者が設定できます。 ファイル名が存在しない場合や、すべての特殊文字が含まれている場合は、AEM Site 出力の URL で区切り文字に置き換えるように設定できます。 また、最初の子トピックの名前に置き換えることもできます。 方法を学ぶ [ドキュメントのタイトルを使用するAEM Site 出力の URL を設定](../cs-install-guide/conf-output-generation.md#configure-the-url-of-the-aem-site-output-to-use-the-document-title).


## 複数の出力プリセットを並行して公開する

Experience Managerは、適用されたラベルに従ってトピックを自動的に選択することで、ベースラインを作成する機能を提供します。 同じ DITA マップの自動ベースラインを使用して、複数の出力プリセットをシームレスに公開できるようになりました。 一度に 1 つのプリセットのみを公開する必要はありませんが、複数の出力プリセットを同時に簡単に公開できます。

方法の詳細 [Web エディタからのベースラインの作成と管理](../user-guide/web-editor-baseline.md).

## ネイティブPDFの強化

4.4.0 リリースでは、次のネイティブPDFの機能強化がおこなわれました。

### 変数をPDF出力で使用

変数を使用して、再利用可能な情報を動的に挿入し、管理できます。 Experience Managerガイドは、変数を作成、編集およびプレビューする際に、PDF出力を生成する際に役立ちます。 変数の値をすばやく変更し、ドキュメントを移動しやすく、簡単に更新できます。

![ネイティブ pdf 変数](assets/add-variable-default.png){width="800" align="left"}

*Web エディターで変数を作成および管理します。*

また、デフォルト値を上書きする変数セットを作成し、変数に代替値を割り当てることもできます。 これらの変数をページレイアウト内に挿入し、同じPDFレイアウトを使用する場合、値のセットごとに別々のレイアウトを作成する必要はありません。 例えば、各製品リリースに対して変数セットを作成できます。 この変数セットは、製品名、バージョン番号、リリース日など、様々な製品詳細の変数で構成できます。 次に、これらの変数に異なる値を追加できます。

**変数セット 1:Adobeセット 1**

* ProductName:Experience Managerガイド
* バージョン番号： 2311
* リリース日： 11/02/2023

**変数セット 2:Adobeセット 2**

* ProductName:Experience Managerガイド
* バージョン番号： 2310
* リリース日： 09/27/2023



<img src="./assets/native-pdf-variable-output.png" alt="PDF出力のフッター" width="500" border="2px">

*PDFレイアウトの変数を使用して、PDF出力を生成します。*

スタイルを適用し、変数の書式設定にHTMLマークアップを使用できます。  また、必要に応じて任意の変数の値をすばやく更新し、出力を再生成することもできます。 例えば、バージョンの詳細を更新する必要がある場合は、VersionNumber 変数でバージョンの値を編集し、出力を再生成できます。


使用方法の詳細 [変数をPDF出力](../native-pdf/native-pdf-variables.md).


### アセットのメタデータをPDF出力に反映

Experience Managerに、アセットのメタデータプロパティを DITA マップからPDF出力に転送する機能が追加されました。
ネイティブPDFの出力プリセットから、PDF公開プロセスに反映するメタデータを選択できます。 カスタムプロパティとデフォルトプロパティの両方を選択できます。  選択したメタデータプロパティは、「ネイティブPDF」を使用して生成されたPDFファイルに転送されます。

この機能は、作成者、作成日、ドキュメントタイトルなどのアセットプロパティの一貫性を保つのに役立ちます。 これにより、ドキュメントの整理、検索、分類が容易になります。

詳しくは、 **詳細** 設定 [公開PDF出力](../web-editor/native-pdf-web-editor.md).

### に追加されたメタデータを使用 `topicmeta` PDF出力用の要素

ネイティブPDF公開のメタデータ機能は、コンテンツ管理に役立ち、インターネット上でのファイルの検索に役立ちます。
<img src="assets/pdf-metadata-4-4.png" alt="「メタデータ」タブ" width="800">

*メタデータオプションを追加およびカスタマイズするオプションを選択します。*

Experience Managerガイドで、 `topicmeta` DITA マップの要素を使用して、PDF出力のメタデータフィールドを設定します。 このオプションはデフォルトで選択されています。

この機能により、ドキュメントの管理が向上し、一貫性が確保され、ドキュメントが検索可能になります。

詳しくは、 **メタデータ** 」タブをクリックします。 [公開PDF出力](../web-editor/native-pdf-web-editor.md).

### 標準のテンプレートを使用および複製するPDF

Experience Managerガイドには、すぐに使用できるテンプレートまたは工場出荷時のPDFテンプレートが用意されています。 ファクトリPDFテンプレートを複製して、カスタムテンプレートPDFを作成します。

これで、テンプレートを作成および複製する際に、テンプレートのサムネール画像をプレビューすることもできます。 また、この画像を編集または削除することもできます。 この機能は、類似した名前のテンプレートのブランディングや区別に役立ちます。
詳しくは、 [PDFテンプレート](../native-pdf/pdf-template.md).

![複製PDFテンプレートダイアログ](assets/duplicate-template.png){width="550" align="left"}

*既存のテンプレートをPDFします。*


### ページの順序を変更し、1 シートに複数のページを公開する

複数ページのドキュメントを公開する際に、ソースドキュメントに従ってページを公開する以外に、PDF内のページの順序を変更することもできます。  これにより、奇数ページや偶数ページから始まるページなど、様々な順序でページを柔軟に公開できます。 また、小冊子として発行し、本のようにページを読むこともできます。 また、1 枚の用紙に発行するページ数も指定できます。 詳しくは、 [ページ組織](../native-pdf/components-pdf-template.md#page-organization) 」セクションに入力します。

### 並べ替えキーに基づいて用語集の用語を並べ替える

これで、並べ替えキーに基づいて用語集の用語を並べ替えることもできます。 「sort-as」タグを使用して、用語集の用語の並べ替えキーを定義できます。 次に、キーワードの代わりに並べ替えキーに基づいて並べ替えることができます。 これにより、異なる言語で使用されている用語に従って用語集の用語を並べ替えることができます。 また、フレーズまたは単語のグループを含む用語集用語に対して単一の並べ替えキーを定義することもできます。
詳しくは、 [詳細PDF設定](../native-pdf/components-pdf-template.md#advanced-pdf-settings).


### ネイティブリソーステンプレートのリソース管理をPDFしました。

Experience Managerガイドで、ネイティブリソーステンプレートのPDF管理が改善されました。 画像、CSS ファイル、フォントファイルなどのリソースを、複数のネイティブテンプレート間で共有および再利用できるようになりましたPDF。 この改善により、多数のテンプレートのリソースを管理する作業がより簡単になりました。 各テンプレートに重複リソースを作成する必要はなく、共有フォルダーに保存して、すべてのネイティブPDFテンプレートで使用することもできます。
詳しくは、 [PDFテンプレート](../native-pdf/pdf-template.md).






























