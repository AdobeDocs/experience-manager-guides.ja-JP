---
title: 特定のユーザーの webeditor のファイルのコンテキストメニューから「削除」オプションを削除
description: 特定のユーザー/グループについて、ファイルのコンテキストメニューから「削除」オプションを削除して webeditor をカスタマイズする方法を説明します
exl-id: 31b4dd53-3938-42e1-bbc6-64806d668696
source-git-commit: e40ebf4122decc431d0abb2cdf1794ea704e5496
workflow-type: tm+mt
source-wordcount: '236'
ht-degree: 0%

---

# Webeditor のファイルコンテキストメニューから「削除」オプションを削除

この記事では、特定のユーザーまたはグループに対して、AEM Guides web エディターのファイルコンテキストメニューから「削除」オプションを非表示にする方法について説明します。 ファイルコンテキストメニューオプションのその他のカスタマイズについては、Guides Extension フレームワークを参照してください。 詳しくは、[ こちら ](https://github.com/adobe/guides-extension/tree/main) を参照してください。

以下のスニペットからわかるように、ファイルのコンテキストメニューには、この特定のユーザーに対して「削除」オプションが用意されています。

![Delete を含むファイル contextmenu](../../../assets/authoring/file-contextmenu-Delete.png)

次に、このユーザーの「削除」オプションを非表示にする方法を見てみましょう。

## 実装手順：

- AEM ホームページからツール/セキュリティ/権限に移動します。
- 検索ボックスからグループまたはユーザーを選択します。
- 右上隅の「ACE を追加」をクリックします。
- フォルダーパスを選択します。
- 権限「jcr:removeChildNodes」および「jcr:removeNode」を含めます。
- 「権限タイプ」を「拒否」として選択し、「追加」をクリックします（下図を参照）。

![ ユーザー権限による ACE の拒否 ](../../../assets/authoring/permission-ACE-Delete.png)

![ 権限のアクセス制御リスト ](../../../assets/authoring/delete-acl.png)

### テスト

- ACE を追加したユーザーとしてAEMにログインします。
- Web エディターを開きます。
- リポジトリビューに移動し、ACE を追加したフォルダーを選択します。
- ファイルのコンテキストメニューを開きます。
- 「削除」オプションはコンテキストメニューに表示されません。

ファイルのコンテキストメニューは次のようになります。

![ 削除なしのファイル contextmenu](../../../assets/authoring/file-contextmenu-Delete-removed.png)

```
Please note that these steps would also remove 'move' and 'rename' options from the Web Editor as they are also tied to delete process at the backend.
```
