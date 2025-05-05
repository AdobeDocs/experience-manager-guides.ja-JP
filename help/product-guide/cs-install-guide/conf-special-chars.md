---
title: 許可される特殊文字の設定
description: 許可される特殊文字の設定方法を説明します
exl-id: 7ff4305f-71bb-4155-b8e5-911cea6f0ad9
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '206'
ht-degree: 0%

---

# 許可される特殊文字の設定 {#id20CIL600035}

Web エディターでは、一部の特殊文字を標準で挿入できます。 ただし、作成者がドキュメントに挿入できる特殊文字のリストをカスタマイズすることができます。 特殊文字リストをカスタマイズすると、デフォルトの特殊文字セットが上書きされます。 設定で追加した特殊文字のみを、作成者が使用できます。

デフォルトの特殊文字のリストを上書きするには、次の手順を実行します。

1. Cloud Manager`symbols.json`Git リポジトリの次の場所にファイルを作成します。

   ```
   /apps/fmdita/xmleditor/
   ```

1. `symbols.json` ファイルに次のように特殊文字の定義を追加します。

   ```
   {"symbols": [{"label": "Arrows",
      "items": [
      {   "name": "←",   "title": "Left Arrow"   } 
      ,   
      {   "name": "↑",   "title": "Up Arrow"      } 
      ]   
      }   ]   }
   ```


`symbols.json` ファイルの構造については、以下で説明します。

- `"label": "Arrows"`：特殊文字のカテゴリを指定します。 スニペットでは、`"Arrows"` という名前のカテゴリが定義されています。
- `"items"`: カテゴリ内の特殊文字のコレクションを定義します。
- `"name": "←", "title": "Left Arrow"`：特殊文字の定義です。 このラベルは `"name"` のラベルから始まりますが、変更しないでください。 名前の後に特殊文字が続きます。 `"title"` は、その特殊文字のツールチップとして表示される特殊文字の名前またはタイトルです。

  1 つのカテゴリ内で複数の特殊文字の定義を定義できます。


**親トピック：**&#x200B;[ Web エディタのカスタマイズ ](conf-web-editor.md)
