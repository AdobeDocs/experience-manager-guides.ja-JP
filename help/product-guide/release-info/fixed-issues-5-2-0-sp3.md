---
title: リリースノート | Adobe Experience Manager Guides 5.2.0 Service Pack 3 リリースの修正済みの問題
description: Adobe Experience Manager Guides 5.2.0 Service Pack 3 リリースのバグ修正について説明します
role: Leader
TQID: https://experienceleague.adobe.com/HEWV5RxPUfqUYf6m6kQW-fU-LiAM0UFGbfzKjtOCZxk
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
    internal-label: Publishing
role_v2:
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
    internal-label: Leader
source-git-commit: a3144f0078b2073289043befacc5e2358b9c0e02
workflow-type: tm+mt
source-wordcount: '816'
ht-degree: 1%
---
# 5.2.0 サービスパック 3 リリース（2026年11月）で修正された問題

この記事では、Adobe Experience Manager Guidesの5.2.0 Service Pack 3 リリースの様々な領域で修正されたバグについて説明します。

5.2.0 Service Pack 3 リリース [&#128279;](upgrade-instructions-5-2-0-sp3.md)の アップグレード手順について説明します。

## エディター2.0

- 作成者モードからテーブルをコピーして作成者モードにペーストすると、`colwidth`などの属性や`colspec`で定義されているその他の属性が削除され、列幅の設定が失われます。 （GUIDES-52916）
- Microsoft Wordから表を貼り付けると、見出し行のセルが作成されますが、その内容は失われます。 （GUIDES-49847）
- Microsoft Wordまたは同様のテキストエディターから`codeblock`要素にコードをペーストする際に、Ctrl+Vを使用すると、改行と行送りスペースが失われ、コードが1行に統合されます。 （GUIDES-33247）

## アセット管理

- アセットステータス APIは、パスにコンマが含まれているアセットの正しいステータスを返しません。 （GUIDES-49065）

## 公開

- AEM Sites上の`processing-role=resource-only`要素を含むDITA マップを公開する場合（従来のコンポーネントマッピングを含む）、孤立したサイトページは、`topicgroup`要素や特定のコンテンツ設定などの追加のシナリオでそれらの要素に対して生成されます。 （GUIDES-37650）
- ブランチフィルタリングは、`keydef`として使用される不要なトピックに対して追加のページを生成します（DITA-OTによって`resource-only ="true"`とマークされます）。 （GUIDES-19701）
- マップダッシュボードで、別のプリセットトリガーを選択すると、ピアリンクを取得するための呼び出しが行われ、その結果、さらに処理が行われます。 （GUIDES-53703）
- ネイティブ PDF出力では、`toc="no"`属性でマークされたトピック参照は引き続き目次に含まれるため、長くて乱雑な目次になります。 （GUIDES-20156）
- 完全なDITA マップが生成され、ダイナミックベースラインを使用してAEM Sitesに公開されると、特定のトピックは、現在の承認済みバージョンではなく、以前のバージョンまたは未承認バージョンで公開される場合があります。 （GUIDES-55646）
- 多数のアセットを処理する際、`PurgePresetExecutionDataJob`で処理できない`RuntimeNodeTraversalException`が発生し、ジョブが無限ループで停止し、過剰なログが生成されることがあります。 （GUIDES-53897）
- ネイティブ PDF出力では、`topichead`または`topicgroup`要素に設定された`outputclass`属性は、結果のPDF セクションに適用または転送されません。 （GUIDES-22950）
- 場合によっては、Native PDF engine v1で公開する際に、アクセシビリティ `settingsenabled`を持つコンテンツの読み取り順序が正しくないことがあります。 フッターのページ番号は、最後ではなくメインコンテンツの前に読み取られます（GUIDES-27790）。


## 翻訳

- 多くのアセットを含むマップにベースラインを適用すると、選択した言語の翻訳レポートの読み込みが遅くなり、レポートのレンダリング前にタイムアウトがリクエストされることがあります。 （GUIDES-45508）
- 選択した言語フォルダーがアンダースコア形式（`da_dk`）ではなくハイフネーション付きのロケールコード（`da-DK`など）を使用している場合、「Workspace設定」の「翻訳」タブの言語グループは保持されません。 （GUIDES-37843）
- XLIFF プロジェクトを使用して翻訳を開始すると、空のプロジェクトが作成され、進行中の状態に移動することはありません。 （GUIDES-51759）
- コントリビューターの役割のみを持つユーザーがエディターにアクセスすると、グローバルフォルダープロファイルの`propagateVersionLabel`設定が断続的に`false`にリセットされます。 （GUIDES-51870）

## ベースライン

- プリセットの保存されたベースライン選択は、ベースラインを削除した後、または動的ベースラインの作成中に&#x200B;*ベースラインなし*&#x200B;と誤って表示されます。 （GUIDES-52690）
- 再構築に失敗した後、動的ベースラインが処理状態のままになる場合があり、書き出しと出力の生成で、エラーを表示せずに古いトピックとマップのバージョンを使用する場合があります。 （GUIDES-56739）

## レビュー

- 多数のレビュータスクを伴うシナリオでは、レビューパネルを開いたり、プロジェクトフィルターを適用したりすると、タスクリストの読み込みに予想以上の時間がかかります。 （GUIDES-48893）
- レビューUIのコンテンツペインには、推奨される1600 pxの解像度など、特定の画面解像度に対して水平スクロールバーが表示されます。これにより、コンテンツがペイン幅を超えると、レビューコメントが非表示になります。 （GUIDES-44082）

## プラットフォーム

- Move API、Rename API、Assets UIでは、GUID ベースのファイル名を持つDITA アセットの名前を、人間が読み取れるファイル名に変更することはできません。 Assetsのファイル名は人間が読み取れるファイル名に変更できるようになりましたが、GUID ベースのファイル名を別のGUID ベースのファイル名に変更することは引き続き許可されていません。 （GUIDES-43006、GUIDES-59684）
- 非UUID設定からUUID設定に移行された画像などの非DITA アセットが元に戻されたり、別のバージョンに分岐されたりすると、そのUUIDは変更されます。 アセットへの既存の参照が解決されなくなり、画像を参照するトピックで画像が壊れて表示されます。 （GUIDES-58414）
- Experience Manager Guides サービスパックをインストールすると、ACS Commonsなどの以前にインストールされた外部ツールがAEM **ツール** セクションから削除されます。 （GUIDES-60365）

## 既知の問題

Adobeでは、5.2.0 サービスパック 3 リリースの次の既知の問題を特定しました。

- サービスパックをインストールすると、Schematronの検証が`NoClassDefFoundError`例外で失敗し、エディターにトピックを保存できないことがあります。 （GUIDES-60062） <br>**回避策：** AEM Web コンソール （`/system/console/bundles`）から`com.adobe.fmdita.schematron-wrapper` バンドルを更新します。
