---
title: リリースノート | Adobe Experience Manager Guides 2024.12.0 リリースの問題を修正しました
description: Adobe Experience Manager Guidesas a Cloud Serviceの 2024.12.0 リリースのバグ修正について説明します。
exl-id: 04a57e1a-6e74-46f6-acde-5045d3dcacdc
source-git-commit: dd404c42863f0b4a5f31b54f770c0bf296d68ab9
workflow-type: tm+mt
source-wordcount: '408'
ht-degree: 1%

---

# 2024.12.0 リリースの問題を修正しました

この記事では、Adobe Experience Manager Guidesas a Cloud Serviceの 2024.12.0 リリースの様々な領域で修正されたバグについて説明します。

[2024.12.0 リリースのアップグレード手順 &#x200B;](./upgrade-instructions-2024-12-0.md) について説明します。

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

## 回避策に関する既知の問題

Adobe Experience Manager Guides as a Cloud Serviceの 2024.12.0 リリースで、Adobeは次の既知の問題を特定しました。

**コンテンツの翻訳処理中にプロジェクトの作成に失敗する**

翻訳用のコンテンツの送信中に、プロジェクトの作成が次のログエラーで失敗します。

翻訳プロジェクトの処理中に `com.adobe.cq.wcm.translation.impl.TranslationPrepareResource` エラーが発生しました

`com.adobe.cq.projects.api.ProjectException`: プロジェクトを作成できません

原因：`org.apache.jackrabbit.oak.api.CommitFailedException`: `OakAccess0000`: アクセスが拒否されました


**回避策**：この問題を解決するには、次の回避策の手順を実行します。

1. repoinit ファイルを追加します ファイルが存在しない場合は、[sample repoinit config creation steps](https://experienceleaguecommunities.adobe.com/t5/adobe-experience-cloud-questions/repoinit-configuration-for-property-set-on-aem-as-cloud-service/m-p/438854?profile.language=ja) を実行してファイルを作成します。
2. ファイルに次の行を追加して、コードをデプロイします。

   ```
   { "scripts": [ "set principal ACL for translation-job-service\n allow jcr:all on /home/users/system/cq:services/internal/translation\nend" ] }
   ```

3. デプロイメント後の翻訳のテスト。

