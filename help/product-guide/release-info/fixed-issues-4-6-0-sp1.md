---
title: リリースノート | Adobe Experience Manager Guides 4.6.0 Service Pack 1 リリースの修正済みの問題
description: Adobe Experience Manager Guides 4.6.0 Service Pack 1 リリースのバグ修正について説明します
role: Leader
exl-id: ab45ac10-8a97-4ade-accc-2b884da0e973
TQID: https://experienceleague.adobe.com/-PGxudGeachzaYoru1fHTObZcwRuXzle5s7KRRJlfBA
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2:
  - id: ad602516-aca3-4247-9ae8-f393d958efa9
  - id: d4f22c6d-7923-41e5-9da3-527ff8df4bc8
  - id: f89f75b0-cf2e-4e96-aec8-fe8c39cbd0ef
role_v2:
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 312
ht-degree: 4%

---

# 4.6.0 サービスパック 1 リリース（2024年10月）で修正された問題


この記事では、Adobe Experience Manager Guidesの4.6.0 Service Pack 1 リリースの様々な領域で修正されたバグについて説明します。

4.6.0 サービスパック 1 リリース [&#128279;](upgrade-instructions-4-6-0-sp1.md)の アップグレード手順について説明します。

## オーサリング

- `xmleditor.uniquefilenames`が`XMLEditorConfig`で有効になっている場合、UUID インスタンスでのDITA マップの作成が失敗します。 (21201)
- ファイルを閉じると、**変更を保存してファイルをロック解除** ダイアログボックスに追加されたコメントとラベルが、新しいバージョンのバージョン履歴に保存されません。 これは、`XMLEditorConfig`で&#x200B;**閉じる**&#x200B;でのチェックインの要求または&#x200B;**閉じる**&#x200B;での新しいバージョンの要求が有効になっているユースケースに固有です。 (20065)
- 新しいバージョンを保存する前に、**完了**&#x200B;とマークされたドキュメント状態が&#x200B;**ドラフト**&#x200B;に戻ります。その結果、**完了**&#x200B;状態はどのドキュメントバージョンにも保持されません。 (20006)
- Web エディターのトピックで、PDF ファイルを画像参照として追加できません。 (21206)
- Assets UIでDITA ファイルを選択すると、設定で無効になっている場合でも、「**FrameMakerで開く**」オプションが表示されます。 (20082)


## 公開

- 添付ファイルのパスが許可された長さを超えると、Salesforceへの添付ファイルのアップロードに失敗します。 (19420)
- Salesforceにトピックを公開すると、PDF ファイルのリンクが解決されません。 (19304)
- Salesforceで既存の記事を再公開しようとすると、`DUPLICATE_VALUE` エラーが断続的に発生します。 (17932)
- PDFのネイティブ出力では、チャプタータイトルが目次に表示されないため、階層が正しくありません。 (21840)
- AEM Sitesを公開する場合、目次に含めることができる属性の数は限られています。 (7483)

## 管理

- ログの閉じられていない&#x200B;**ResourceResolver** エラーが原因でリソースの漏洩が発生します。 (18488)
- 新しいベースラインまたは重複するベースラインを作成する場合、ラベルはランダムな順序で表示されます。 (19307)
