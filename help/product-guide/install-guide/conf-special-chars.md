---
title: 許可される特殊文字の設定
description: 許可される特殊文字を設定する方法を説明します。
exl-id: 3dd7752e-0836-480a-b1e1-6fa2099d404f
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '209'
ht-degree: 0%

---

# 許可される特殊文字の設定 {#id20CIL600035}

Web エディターを使用すると、標準の特殊文字を挿入できます。 ただし、作成者がドキュメントに挿入できる特殊文字のリストはカスタマイズできます。 特殊文字の一覧をカスタマイズすると、既定の特殊文字が上書きされます。 作成者は、設定に追加した特殊文字だけを使用できます。

次の手順を実行して、特殊文字のデフォルトのリストを上書きします。

1. AEMにログインし、CRXDE Liteモードを開きます。

1. 作成 `symbols.json` ファイルを次の場所に保存します。

   ```json
   /apps/fmdita/xmleditor/
   ```

1. 特殊文字定義を `symbols.json` ファイルの形式：

   ```json
   {"symbols": [{"label": "Arrows",
      "items": [
      {   "name": "←",   "title": "Left Arrow"   } 
      ,   
      {   "name": "↑",   "title": "Up Arrow"      } 
      ]   
      }   ]   }
   ```


の構造 `symbols.json` ファイルについては、以下で説明します。

- `"label": "Arrows"`：特殊文字のカテゴリを指定します。 スニペット内に、 `"Arrows"` が定義されている。
- `"items"`：カテゴリ内の特殊文字のコレクションを定義します。
- `"name": "←", "title": "Left Arrow"`：これは、特殊文字の定義です。 最初は `"name"` ラベル（変更不可）。 名前の後に特殊文字が続きます。 The `"title"` は、その特殊文字のツールチップとして表示される特殊文字の名前またはタイトルです。

  1 つのカテゴリ内で特殊文字の複数の定義を定義できます。


**親トピック：**[ Web エディタのカスタマイズ](conf-web-editor.md)
