---
title: マップ エディタのその他の機能
description: 基本および高度なマップエディターの一般的な機能を説明します。 マップエディターでキー参照を解決する方法を説明します。
feature: Authoring, Map Editor
role: User
source-git-commit: 76c731c6a0e496b5b1237b9b9fb84adda8fa8a92
workflow-type: tm+mt
source-wordcount: '467'
ht-degree: 0%

---

# マップ エディタのその他の機能 {#id1942D0T0HUI}

基本および高度なマップ エディタの一般的な機能は次のとおりです。

## 主要な参照の解決 {#id176GD01H05Z}

DITA コンテンツキー参照、または `conkeyref` は、あるトピックから別のトピックにコンテンツの一部を挿入するメカニズムです。 このメカニズムでは、再利用するコンテンツを見つけるために、ダイレクトコンテンツ参照のメカニズムではなくキーを使用します。 DITA での直接および間接参照の詳細については、「OASIS DITA 言語仕様」の *DITA アドレス指定* を参照してください。

DITA トピックに関連するキー参照がある場合は、トピックをプレビュー、編集、またはレビューする前に解決する必要があります。

キー参照は、次の優先順位で設定されたルート マップに基づいて解決されます。

1. ユーザーの環境設定
1. マップ ビューパネル
1. フォルダープロファイル

ユーザーの環境設定で選択したルートマップが、キー参照の解決で最も優先され、次にマップビューパネルとフォルダープロファイルルートマップが選択されます。 したがって、ユーザ環境設定でマップが設定されていない場合は、マップ ビューパネルで開いたマップが使用されます。 [ マップ ビュー ] パネルでマップが開かれていない場合、フォルダ プロファイルのマップ セットを使用してキー参照が解決されます。

キー参照は、DITA マップファイルまたは別個の DITA ファイルに保存できます。 AEM Guidesでは、プロジェクトレベルまたはセッションレベルで主要な参照を指定できます。 ユーザーセッション用にルートマップが既に定義されている場合は、キーの解決に使用されます。 それ以外の場合は、そのフォルダーのデフォルトのルートマップが使用されます。 デフォルトのルートマップが設定されていない場合、見つからないキー参照がユーザーに対してハイライト表示されます。

次の場所で使用する DITA マップを定義して、DITA トピック内のキー参照を解決する方法はいくつかあります。

**プロジェクトプロパティ** - プロジェクトを作成する際にキー参照を解決するためのルートマップを「プロジェクトプロパティ」セクションで定義できます。

このルートマップは、そのプロジェクトに関連付けられたすべてのアセット\（フォルダーとサブフォルダー\）に適用されます。 複数のプロジェクトで参照されるコンテンツの場合、プロジェクトのアルファベット順のリストが維持され、最初のプロジェクトに関連付けられたデフォルトのルートマップが使用されます。 キー参照の解決に使用する DITA マップをリストから選択することもできます。

**トピックのプレビュー** - トピックのプレビューモードで、ツールバーのキー解像度アイコンをクリックし、キー参照に使用する DITA ファイルを選択します。

**トピック編集ビュー** - DITA トピックの編集中に「キー解決」アイコンをクリックし、キー参照の解決に使用する DITA ファイルを選択します。

**親トピック：**[ マップ エディタの操作 ](map-editor.md)