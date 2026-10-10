---
title: リリースノート | Adobe Experience Manager Guidesの2024.12.0 リリースで修正された問題
description: Adobe Experience Manager Guides as a Cloud Service 2024.12.0 リリースのバグ修正について説明します。
exl-id: 04a57e1a-6e74-46f6-acde-5045d3dcacdc
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '422'
ht-degree: 3%
---
# 2024.12.0 リリースで修正された問題

この記事では、Adobe Experience Manager Guides as a Cloud Serviceの2024.12.0 リリースの様々な領域で修正されたバグについて説明します。

2024.12.0 リリース [&#128279;](./upgrade-instructions-2024-12-0.md)の アップグレード手順について説明します。

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

- ベースラインに多数のトピックやマップがある場合、1分後にベースラインを編集してクラウド設定タイムアウトに保存します。 (19558)

## 翻訳

- ベースラインを使用したマップ翻訳が遅くなり、関連するすべてのトピックとマップファイルのリストの読み込みに失敗します。 (19733)

## 回避策の既知の問題

Adobeでは、Adobe Experience Manager Guides as a Cloud Serviceの2024.12.0 リリースで、次の既知の問題を特定しました。

**コンテンツの翻訳処理中にプロジェクトの作成に失敗しました**

翻訳用のコンテンツを送信する際、プロジェクトの作成は次のログエラーで失敗します。

翻訳プロジェクトの処理中に`com.adobe.cq.wcm.translation.impl.TranslationPrepareResource` エラーが発生しました

`com.adobe.cq.projects.api.ProjectException`: プロジェクトを作成できません

原因：`org.apache.jackrabbit.oak.api.CommitFailedException`: `OakAccess0000`: アクセスが拒否されました


**回避策**：この問題を解決するには、次の回避策の手順を実行します。

1. repoinit ファイルを追加します。 ファイルが存在しない場合は、[&#x200B; サンプル repoinit構成作成手順](https://experienceleaguecommunities.adobe.com/t5/adobe-experience-cloud-questions/repoinit-configuration-for-property-set-on-aem-as-cloud-service/m-p/438854?profile.language=ja)を実行してファイルを作成します。
2. ファイルに次の行を追加し、コードをデプロイします。

   ```
   { "scripts": [ "set principal ACL for translation-job-service\n allow jcr:all on /home/users/system/cq:services/internal/translation\nend" ] }
   ```

3. デプロイメント後に翻訳をテストします。

