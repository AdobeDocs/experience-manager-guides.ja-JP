---
title: 特定のユーザーのwebeditorのファイルコンテキストメニューから「削除」オプションを削除する
description: 特定のユーザー/グループのファイルコンテキストメニューから「削除」オプションを削除して、webeditorをカスタマイズする方法を説明します
exl-id: 31b4dd53-3938-42e1-bbc6-64806d668696
TQID: https://experienceleague.adobe.com/dzbMsXUoEibR5QxKB-Z-h4qGnQaX2NmIYLTtxVJHE-A
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: ab01a588-7dea-43f2-a699-0b3f128465d6
subfeature_v2: id: ad602516-aca3-4247-9ae8-f393d958efa9
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554
topic_v2: id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87cid: d095671a-1355-40aa-8b5f-06c33c68080b
source-git-commit: cc73b81787a3c3dbe8390d93e558064327e59965
workflow-type: tm+mt
source-wordcount: 240
ht-degree: 0%

---

# Webeditorのファイルコンテキストメニューから「削除」オプションを削除する

この記事では、AEM Guides Editorのファイルのコンテキストメニューで「削除」オプションを非表示にする方法について説明します。 ファイルのコンテキストメニューオプションに関するその他のカスタマイズについては、ガイド拡張機能のフレームワークを参照してください。 詳細については、[こちら](https://github.com/adobe/guides-extension/tree/main)を参照してください。

下のスニペットからわかるように、ファイルコンテキストメニューには、この特定のユーザーに対して利用可能な「削除」オプションがあります。

![削除を含むファイルのcontextmenu](../../../assets/authoring/file-contextmenu-Delete.png)

次に、このユーザーの「削除」オプションを非表示にする方法を見てみましょう。

## 導入手順：

- AEMのホームページから、ツール/セキュリティ/権限に移動します。
- 検索ボックスからグループまたはユーザーを選択します。
- 右上隅の「Add ACE」をクリックします。
- フォルダーパスを選択します。
- 権限「jcr:removeChildNodes」と「jcr:removeNode」を含めます。
- 「権限タイプ」を「拒否」として選択し、以下に示すように「追加」をクリックします。

![ ユーザー権限がACE](../../../assets/authoring/permission-ACE-Delete.png)を拒否しました

![権限のアクセス制御リスト ](../../../assets/authoring/delete-acl.png)

### テスト

- ACEが追加されたユーザーとしてAEMにログインします。
- web エディターを開きます。
- リポジトリビューに移動し、ACEが追加されたフォルダーを選択します。
- ファイルのコンテキストメニューを開きます。
- 「削除」オプションはコンテキストメニューには表示されません。

ファイルコンテキストメニューは次のようになります。

削除のない![ ファイルのcontextmenu](../../../assets/authoring/file-contextmenu-Delete-removed.png)

```
Please note that these steps would also remove 'move' and 'rename' options from the Editor as they are also tied to delete process at the backend.
```
