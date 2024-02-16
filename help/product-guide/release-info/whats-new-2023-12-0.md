---
title: リリースノート | 2023 年 12 月リリースのAdobe Experience Managerガイドの新機能
description: 2023 年 12 月リリースのAdobe Experience Managerガイドas a Cloud Serviceの新機能と機能強化について説明します。
feature: What's New
role: Leader
source-git-commit: 6d8c01f20f7b59fed92c404561b647d9ebecb050
workflow-type: tm+mt
source-wordcount: '966'
ht-degree: 0%

---

# 2023 年 12 月リリースのAdobe Experience Managerガイドas a Cloud Serviceの新機能

この記事では、Adobe Experience Managerガイド ( 後で *Experience Managerガイドas a Cloud Service*) をクリックします。

アップグレードの手順、互換性マトリックス、およびこのリリースで修正された問題の詳細については、 [リリースノート](release-notes-2023-12-0.md).


## 変数をPDF出力で使用

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

## ServiceNow ナレッジベースにコンテンツを公開する機能

コンテンツを ServiceNow ナレッジベースプラットフォームに公開することもできます。

2023 年 12 月リリースでは、管理者として ServiceNow ナレッジベースサーバーの公開プロファイルを作成できます。 次に、作成者または発行者として、出力プリセットでその ServiceNow 公開プロファイルを選択し、指定したナレッジベースに出力を公開できます。

この機能を使用すると、テキスト、ビデオ、画像などのコンテンツを ServiceNow ナレッジベースプラットフォームに公開し、包括的なリポジトリを維持できます。


![サービスがナレッジベースプリセットに](assets/knowledgebase--output-preset.png){width="300" align="left"}

*ServiceNow ナレッジベースの出力プリセットを作成します。*

詳しくは、 [ナレッジベース](../user-guide/generate-output-knowledge-base.md) 出力プリセット。

## 強化されたマップコレクションダッシュボード

Experience Managerガイドは、強化されたマップコレクションダッシュボードを提供します。 マップコレクションでは、DITA マップ用のメタデータプロパティを一括ですばやく設定できます。 各 DITA マップのメタデータプロパティを個別に更新する必要がないので、この機能は便利です。

これで、DITA マップのファイル名を表示できます。 また、ベースラインも表示できます。 これにより、プリセットに使用されるベースラインをすばやく見つけるのに役立ちます。

![コレクションダッシュボードをマッピング](assets/map-collection-dashboard.png){width="800" align="left"}

*マップコレクションダッシュボードで出力を表示、編集、生成します。*

方法を学ぶ [出力生成にマップコレクションを使用](../user-guide/generate-output-use-map-collection-output-generation.md).

## マップビューでキー属性を表示する

トピックまたはマップ参照のキー属性を定義する際に、タイトル、対応するアイコンおよびキーを左側のパネルに表示することもできます。 キーは次のように表示されます。 `key=<key-name>`.

詳しくは、 **マップビュー** 機能の説明 [左パネル](../user-guide/web-editor-features.md#id2051EA0M0HS) 」セクションに入力します。

![マップビューのキー](assets/view-key-title-map-view.png) {width="300" align="left"}

*[ マップビュー ] で key 属性を表示します。*

## ラベルに基づいてベースラインを複製する機能

Experience Managerガイドで、Web エディターからベースラインを作成する際のユーザーエクスペリエンスが強化されました。\
![新しいベースラインを作成](assets/create-new-baseline.png) {width="300" align="left"}
*Web エディターからベースラインを作成します。*

また、ラベルに基づいてベースラインを複製することもできます。 参照バージョンは、複製時に指定されたラベルに基づいて選択されます（存在する場合）。複製時に選択されない場合は、複製されたベースラインからバージョンを選択します。


![ベースラインを複製 ](assets/duplicate-baseline.png) {width="300" align="left"}

*ラベルに基づいてベースラインを複製するか、正確なコピーを作成します。*

方法の詳細 [Web エディタからのベースラインの作成と管理](../user-guide/web-editor-baseline.md).

## AEM Site 出力のクロスマップリンクの解決

AEMサイト出力でレンダリングされるクロスマップリンク（スコープピアを持つ XREF）が、生成されたマップに対してパブリッシュコンテキストセットのファイルタイトルに従って解決されるようになりました。


## ドキュメントのタイトルを使用するAEM Site 出力の URL を設定

Experience Managerガイドを使用すると、AEM Site 出力の URL を管理者が設定できます。 ファイル名が存在しない場合や、すべての特殊文字が含まれている場合は、AEM Site 出力の URL で区切り文字に置き換えるように設定できます。 また、最初の子トピックの名前に置き換えることもできます。 方法を学ぶ [ドキュメントのタイトルを使用するAEM Site 出力の URL を設定](../cs-install-guide/conf-output-generation.md#configure-the-url-of-the-aem-site-output-to-use-the-document-title).

