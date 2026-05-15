---
title: リリースノート | Adobe Experience Manager Guidesの2024.10.0 Service Pack 1 リリースで修正された問題
description: Adobe Experience Manager Guides as a Cloud Serviceの2024.10.0 Service Pack 1 リリースのバグ修正について説明します。
exl-id: d5fa200b-1f15-4ec2-adf9-a29382afc3de
TQID: https://experienceleague.adobe.com/ziRAAFKf5Dl-6Hd7ziXwSJepbiVzkXLGz5jDWIILPkU
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a3bd6397-2eb2-4908-a61c-226e26855dcaid: ab01a588-7dea-43f2-a699-0b3f128465d6id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2: id: ad602516-aca3-4247-9ae8-f393d958efa9id: d4f22c6d-7923-41e5-9da3-527ff8df4bc8id: f89f75b0-cf2e-4e96-aec8-fe8c39cbd0ef
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 299
ht-degree: 5%

---

# 2024.10.0 Service Pack 1 リリースで修正された問題

この記事では、Adobe Experience Manager Guides as a Cloud Serviceの2024.10.0 Service Pack 1 リリースの様々な領域で修正されたバグについて説明します。

## オーサリング

- `xmleditor.uniquefilenames`が`XMLEditorConfig`で有効になっている場合、UUID インスタンスでのDITA マップの作成が失敗します。 (21201)
- ファイルを閉じると、**変更を保存してファイルをロック解除** ダイアログボックスに追加されたコメントとラベルが、新しいバージョンのバージョン履歴に保存されません。 これは、`XMLEditorConfig`で&#x200B;**閉じる**&#x200B;でのチェックインの要求または&#x200B;**閉じる**&#x200B;での新しいバージョンの要求が有効になっているユースケースに固有です。 (20065)
- **完了**&#x200B;とマークされたドキュメント状態は、新しいバージョンを保存する前に&#x200B;**ドラフト**&#x200B;に戻ります。その結果、**完了**&#x200B;状態はどのドキュメントバージョンにも保持されません。 (20006)
- Web エディターのトピックで、PDF ファイルを画像参照として追加できません。 (21206)
- Assets UIでDITA ファイルを選択すると、設定で無効になっている場合でも、「**FrameMakerで開く**」オプションが表示されます。 (20082)

## 公開

- PDFのネイティブ出力では、チャプタータイトルが目次に表示されないため、階層が正しくありません。 (21840)


## 管理

- リソースの漏洩は、ログの&#x200B;**Unclosed ResourceResolver** エラーが原因で発生します。 (18488)
- 新しいベースラインまたは重複するベースラインを作成する場合、ラベルはランダムな順序で表示されます。 (19307)


## ベースライン

- ベースラインに多数のトピックやマップがある場合、ベースラインをクラウド設定に保存すると、1分後にタイムアウトします。 (19558)

## 翻訳

- ベースラインを使用したマップ翻訳が遅くなり、関連するすべてのトピックとマップファイルのリストの読み込みに失敗します。 (19733)
