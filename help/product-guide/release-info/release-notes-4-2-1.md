---
title: リリースノート | Adobe Experience Manager Guides 4.2.1 リリースのアップグレード手順と修正された問題
description: バグの修正と、Adobe Experience Manager Guides 4.2.1 リリースへのアップグレード方法について説明します。
exl-id: a75ec83f-564b-4243-b5c5-341049521adb
feature: Release Notes
role: Leader
source-git-commit: 6d8c01f20f7b59fed92c404561b647d9ebecb050
workflow-type: tm+mt
source-wordcount: '876'
ht-degree: 1%

---

# 4.2.1 リリースのAdobe Experience Manager Guides（2023 年 5 月）

このリリースノートでは、Adobe Experience Manager Guidesのバージョン 4.2.1 （後で *AEM Guides* と呼ばれます）で修正されたアップグレード手順、互換性マトリックスおよび問題について説明します。

新機能と機能強化について詳しくは、[Adobe Experience Manager Guides 4.2.1 リリースの新機能 ](whats-new-4-2-1-release.md) を参照してください。

## AEM Guidesの 4.2.1 リリースへのアップグレード


AEM Guidesを最新バージョンの 4.2.1 に簡単にアップグレードできます。AEM Guidesを最新バージョンの 4.2.1 にアップグレードする前に、以下の点を考慮する必要があります。
AEM Guidesはバージョン 4.2.1 にアップグレードできます
* バージョン 4.1、4.1.x、または 4.2 を使用している場合は、バージョン 4.2.1 に直接アップグレードできます。
* バージョン 4.0 を使用している場合、バージョン 4.2.1 にアップグレードする前にバージョン 4.2 にアップグレードする必要があります。
* バージョン 3.8.5 を使用している場合、バージョン 4.2 にアップグレードする前にバージョン 4.0 にアップグレードする必要があります。
* 使用しているバージョンが 3.8.5 より前の場合は、製品固有のインストールガイドのAEM Guidesのアップグレードの節を参照してください。

>[!NOTE]
>
>AEM Guides版をアップグレードする前に、AEM サービスパックをインストールする必要があります。

詳しくは、[ アップグレードの手順 ](../install-guide/upgrade-xml-documentation.md) を参照してください。

## 互換性マトリックス

ここでは、AEM Guides 4.2 でサポートされているソフトウェアアプリケーションの互換表を示します。 1 リリース。

### Adobe Experience Manager

**非 UUID**
バージョン 6.5 サービスパック 15、14、13、12

**UUID**
バージョン 6.5 サービスパック 15、14、13、12

詳しくは、『Adobe Experience Manager Guides インストールと設定ガイド』の *技術要件* の節を参照してください。

### FrameMakerとFrameMaker Publishing Server

| リリース | FMPS 2022 | FMPS 2020 | Fm 2022 | Fm 2020 |
| --- | --- | --- | --- | --- |
| 4.2.1 （非 UUID） | 2022 以上 | 2020.2 以上* | 2022 以上 | 2020.3 以上 |
| 4.2.1 （UUID） | 2022 以上 | 2020.2 以上* | 2022 以上 | 2020.4 以上 |
| | | | |

*AEMで作成されたベースラインと条件は、2020.2 以降の FMPS リリースでサポートされます。

### 酸素コネクタ

| リリース | 酸素コネクタウィンドウ | 酸素コネクタMac | 酸素ウィンドウで編集 | Oxygen Macで編集 |
| --- | --- | --- |--- |--- |
| 4.2.1 （非 UUID） | 2.2-regular-3 | 2.2-regular-3 | 1.6 | 1.6 |
| 4.2.1 （UUID） | 2.9-uuid-2 | 2.9-uuid-2 | 2.3 | 2.3 |
|  |  |   |

## 修正された問題

様々な領域で修正されたバグを以下に示します。

### オーサリング

* レイアウトビューからオーサービューまたはソースビューに切り替えると、ナビがコンテンツから削除されます。 （12174）
* Web エディターの「閉じる」ボタンがAEM ナビゲーションページに誘導されない。 （11948）
* DITA マップをクリックすると、アプリケーションエラーが発生することがあります。 （11842）
* 問題は、「変更の追跡」がオンの既存のリスト項目の代わりに移動（ドラッグ&amp;ドロップ）すると発生します。 （11570）
* 変更の追跡がオンの状態で、新しいリスト項目として移動（ドラッグ&amp;ドロップ）すると問題が発生する。 （11569）
* [ 変更の追跡 ] がオンの場合、リスト項目のインデントまたはインデント解除が正常に機能しない。 （11568）
* 「変更の追跡」をオンにして行にコンテンツを追加した後、「変更の追跡」をオフにしても、実際にはオフにはなりません。 （11567）
* リスト項目をドラッグ&amp;ドロップするのが困難な場合、リスト項目の代わりにテキストが移動されます。 （11566）
* 緑色で表示された要素（トラック変更）でオーサリングすると、トラック変更が無効になっていても、新しいコンテンツがトラック変更として表示されます。 （7021）
* カスタムスキーマを使用してコンテンツを読み込むと、ブラウザー（web エディター）がフリーズする。 （11211）
* ネイティブPDF |「フォルダープロファイルに追加」オプションを使用して出力プリセットを作成すると、PDFの生成が失敗し、ヌルポインター例外が発生する。 （10950）
* ネイティブPDF |画像タグは、すべての画像に display-inline 属性を追加します。 （10653）
* オーディオおよびビデオマルチメディアファイルの挿入が、「マルチメディアの挿入 **アイコンの下のYouTube形式で失敗** ます。 （11320）
* 検証エラーは、特殊なタイトル要素を持つテンプレートを使用してマップを作成したときに発生します。 （11212）
* Web エディター | トピックの編集中に、XML エディターに改行なしのスペースが追加される。 （11786）

### 管理

* Web エディタ UI の「レポート」タブに、4.2 へのアップグレード前に作成された古い DITA マップのトピックリストが表示されません。 （11708）

* 4.2 リリースでは、Assets UI の「ファイルをアップロード」ボタン機能が機能しなくなりました。 （11633）


### 公開

* ネイティブPDF | brackets （）を含む出力クラスを持つコンテンツを公開すると、公開が凍結される。 （11936）
* JSON 出力 | プロパティ値が `"value in spaces and double quotes"` であるマップメタデータを指定すると、公開エラーが発生します。 （11933）
* 問題はAEM サイト検索で発生します（2 ～ 3 レベルのノードを超えて機能しません）。 （11352）
* Web エディター |出力パスおよびテンプレートは、AEM プリセットで選択できません。 （11530）
* 4.1.x から 4.2 リリースにアップグレードすると、ネイティブPDFエンジンが機能せず、サポートされている OS でも NullPointerException がスローされる。（11526）
* ダウンロードPDFプロセスが web エディターで適切に機能しない。 （11496）
* ネイティブPDF |生成された出力では、ドラフトコメントはデフォルトで非表示になっています。 （10560）
* ネイティブPDF | navtitle は topichead に対して適用されません。 （10509）
* ネイティブPDF |画像に `xref` を追加しても、生成されたPDFで画像がレンダリングされない。 （11346）
* ネイティブPDF | テーブルヘッダーに脚注が存在する場合、PDF出力内の対応するページフッターに太字や中央揃えのテキストが表示されます。 （10610）

### 翻訳

* 4.2 へのアップグレードでは、すべての翻訳コンテンツで「同期されていません」または「コピーがありません」が表示されます。 （11834）

### レビュー

* 完了したレビューが読み取り専用モードで開かない。 （11387）
