---
title: 特定のユーザーの WebEditor のファイルコンテキストメニューから「削除」オプションを削除
description: 特定のユーザー/グループのファイルコンテキストメニューから「削除」オプションを削除して、WebEditor をカスタマイズする方法を説明します。
source-git-commit: aacc04e2fb6ca061825e5e219ad6e03bf711b3d0
workflow-type: tm+mt
source-wordcount: '236'
ht-degree: 0%

---


# webeditor のファイルコンテキストメニューから「削除」オプションを削除

この記事では、特定のユーザーまたはグループに対して、AEMガイド Web エディターのファイルコンテキストメニューで「削除」オプションを非表示にする方法について説明します。 ファイルのコンテキストメニューオプションのその他のカスタマイズについては、「ガイド拡張」フレームワークを確認してください。 詳細はこちら [ここ](https://github.com/adobe/guides-extension/tree/main).

下のスニペットから分かるように、ファイルコンテキストメニューには、この特定のユーザーに対して「削除」オプションが表示されます。

![削除を含むファイルコンテキストメニュー](../../../assets/authoring/file-contextmenu-Delete.png)

次に、このユーザーの「削除」オプションを非表示にする方法を見てみましょう。

## 実装手順：

- AEMホームページで、ツール/セキュリティ/権限に移動します。
- 検索ボックスからグループまたはユーザーを選択します。
- 右上隅の「ACE を追加」をクリックします。
- フォルダーパスを選択します。
- 権限「jcr:removeChildNodes」および「jcr:removeNode」を含めます。
- 「権限の種類」を「拒否」として選択し、以下に示すように「追加」をクリックします。

![ユーザー権限 ACE の拒否](../../../assets/authoring/permission-ACE-Delete.png)

![権限のアクセス制御リスト](../../../assets/authoring/delete-acl.png)

### テスト

- ACE が追加されたユーザーとしてAEMにログインします。
- Web-editor を開きます。
- リポジトリビューに移動し、ACE が追加されたフォルダを選択します。
- ファイルのコンテキストメニューを開きます。
- 「削除」オプションは、コンテキストメニューに表示されません。

ファイルのコンテキストメニューは次のようになります。

![削除しないファイルコンテキストメニュー](../../../assets/authoring/file-contextmenu-Delete-removed.png)

```
Please note that these steps would also remove 'move' and 'rename' options from the Web Editor as they are also tied to delete process at the backend.
```
