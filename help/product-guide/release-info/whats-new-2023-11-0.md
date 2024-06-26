---
title: リリースノート | 2023 年 11 月リリースのAdobe Experience Managerガイドの新機能
description: 2023 年 11 月リリースのAdobe Experience Managerガイドas a Cloud Serviceの新機能および機能強化について説明します。
exl-id: 83c04e01-92f1-41b0-8866-a202f4106b51
feature: What's New
role: Leader
source-git-commit: 6d8c01f20f7b59fed92c404561b647d9ebecb050
workflow-type: tm+mt
source-wordcount: '803'
ht-degree: 0%

---

# 2023 年 11 月リリースのAdobe Experience Managerガイドas a Cloud Serviceの新機能

この記事では、Adobe Experience Managerガイド ( 後で *Experience Managerガイドas a Cloud Service*) をクリックします。

アップグレードの手順、互換性マトリックス、およびこのリリースで修正された問題の詳細については、 [リリースノート](release-notes-2023-11-0.md).

## ネイティブPDFの強化

2023 年 11 月リリースで、次のネイティブPDFの機能強化がおこなわれました。

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

## Web エディターの機能強化

2023 年 11 月リリースでは、Web エディターに関する次の機能強化がおこなわれました。


### ファイルをタイトルまたはファイル名で表示

Web エディターでファイルを表示するデフォルトの方法を選択できるようになりました。 オーサー表示では、様々なパネルのタイトル別またはファイル名別にファイルのリストを表示できます。

![ユーザーの環境設定ダイアログ](assets/user-preferences-2311.png){width="550" align="left"}

*ファイルを表示するデフォルトの方法を変更するには、**ユーザーの環境設定**ダイアログ。*


### 条件プリセットの管理

DITA トピックで条件属性を定義できます。 次に、条件プリセットの条件属性を使用して、DITA マップでコンテンツを公開します。 Experience Managerガイドでは、Web エディターから条件プリセットを作成および管理できるようになりました。 また、簡単に編集、複製、削除できます。

![Web エディターの「管理」タブからの条件プリセット ](assets/web-editor-manage-condition-presets.png){width="550" align="left"}

詳しくは、 [条件プリセットの使用](../user-guide/generate-output-use-condition-presets.md).

### ブラウザーの更新時にファイルのタブを復元

Experience Managerガイドは、ブラウザを更新したときに、Web エディタで開かれたファイルタブの状態を復元します。 詳しくは、 **ファイルの編集中にブラウザーを更新** の下のセクション [Web エディターでトピックを編集](../user-guide/web-editor-edit-topics.md).

### 要素のアンラップが容易

Web エディターで要素のコンテキストメニューの「 」オプションを使用すると、要素の展開を簡単に行うことができます。 これにより、要素のテキストを親要素と簡単に結合できます。
詳しくは、 **要素のアンラップ** セクションを [Web エディタのその他の機能](../user-guide/web-editor-other-features.md).

### カーソルを移動するキーボードショートカット

Experience Managerガイドで、Web エディターでカーソルを移動する際に、キーボードショートカットを使用できるようになりました。 キーボードショートカットを使用して、1 単語を左右にすばやく移動できます。 キーボードショートカットを使用して、行の先頭または末尾に移動することもできます。
これで、キーボードショートカットを使用して、カーソルを次の要素の先頭または前の要素の末尾に移動することもできます。
詳しくは、 [Web エディターのキーボードショートカット](../user-guide/web-editor-keyboard-shortcuts.md).
