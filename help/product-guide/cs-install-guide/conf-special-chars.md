---
title: 許可される特殊文字の設定
description: 許可されている特殊文字を設定する方法を説明します
exl-id: 7ff4305f-71bb-4155-b8e5-911cea6f0ad9
feature: Web Editor Configuration
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 564ee1731be2378744ffd2ed54a2fd423901a0b3
workflow-type: tm+mt
source-wordcount: '206'
ht-degree: 0%

---

# 許可される特殊文字の設定 {#id20CIL600035}

Web エディターでは、特殊文字をすぐに挿入できます。 ただし、作成者がドキュメントに挿入できる特殊文字のリストは、カスタマイズできます。 特殊文字リストをカスタマイズすると、デフォルトの特殊文字セットが上書きされます。 設定に追加した特殊文字のみが作成者が使用できます。

特殊文字のデフォルトリストを上書きするには、次の手順を実行します。

1. Cloud ManagerのGit リポジトリの次の場所に`symbols.json` ファイルを作成します。

   ```
   /apps/fmdita/xmleditor/
   ```

1. `symbols.json` ファイルの特殊文字定義を次のように追加します。

   ```
   {"symbols": [{"label": "Arrows",
      "items": [
      {   "name": "←",   "title": "Left Arrow"   } 
      ,   
      {   "name": "↑",   "title": "Up Arrow"      } 
      ]   
      }   ]   }
   ```


`symbols.json` ファイルの構造を次に示します。

- `"label": "Arrows"`：特殊文字のカテゴリを指定します。 スニペットでは、`"Arrows"`という名前のカテゴリが定義されています。
- `"items"`: カテゴリ内の特殊文字のコレクションを定義します。
- `"name": "←", "title": "Left Arrow"`：特殊文字の定義です。 最初は`"name"` ラベルで始まります。これは変更しないでください。 名前の後に特殊文字が続きます。 `"title"`は、その特殊文字のツールチップとして表示される特殊文字の名前またはタイトルです。

  カテゴリ内で複数の特殊文字の定義を定義できます。


**親トピック：**[ Web エディターのカスタマイズ ](conf-web-editor.md)
