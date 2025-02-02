---
title: リリースノート | Adobe Experience Manager Guides 2024.12.0 リリースの問題を修正しました
description: Adobe Experience Manager Guidesas a Cloud Serviceの 2024.12.0 リリースのバグ修正について説明します。
source-git-commit: f643a4a22151af2ff14288ab3885c1a6657a80ca
workflow-type: tm+mt
source-wordcount: '299'
ht-degree: 1%

---

# 2024.12.0 リリースの問題を修正しました

この記事では、Adobe Experience Manager Guidesas a Cloud Serviceの 2024.12.0 リリースの様々な領域で修正されたバグについて説明します。

[2024.12.0 リリースのアップグレード手順 ](./upgrade-instructions-2024-12-0.md) について説明します。

## オーサリング

- `XMLEditorConfig` で `xmleditor.uniquefilenames` が有効な場合、UUID インスタンスでの DITA マップの作成が失敗します。 （21201）
- ファイルを閉じると、**変更を保存してファイルをロック解除** ダイアログボックスに追加されたコメントとラベルが、新しいバージョンでバージョン履歴に保存されません。 これは、`XMLEditorConfig` で **閉じるときにチェックインを依頼** または **閉じるときに新しいバージョンを依頼** が有効になっているユースケースに固有の機能です。 （20065）
- **完了** とマークされたドキュメントの状態は、新しいバージョンを保存する前に **ドラフト** に戻るので、どのドキュメントバージョンにも **完了** 状態が保持されません。 （20006）
- PDFファイルを Web エディタのトピックのイメージ参照として追加できません。 （21206）
- Assets UI で DITA ファイルを選択すると、設定で無効になっている場合でも、「**FrameMakerで開く** オプションが表示されます。 （20082）

## 公開

- ネイティブPDF出力で、チャプタータイトルが目次から欠落し、誤った階層が発生する。 （21840）


## 管理

- リソースリークは、ログの **Unclosed ResourceResolver** エラーが原因で発生します。 （18488）
- 新しいベースラインまたは重複したベースラインを作成すると、ラベルはランダムな順序で表示されます。 （19307）


## ベースライン

- ベースラインに多数のトピックまたはマップがある場合、クラウド設定でベースラインを編集して保存すると、1 分後にタイムアウトになります。 （19558）

## 翻訳

- ベースラインを使用したマップの変換が遅くなり、最終的に関連するすべてのトピックとマップ ファイルのリストのロードに失敗します。 （19733）
