---
title: Web エディターのツールバーで追加の特殊文字を設定する
description: AEM Guidesのweb エディターで特殊文字を追加する方法について説明します。
feature: Web Editor
role: User
exl-id: 0fbc05a5-a6b0-4f6b-bbc4-8fca03581d90
TQID: https://experienceleague.adobe.com/7InE1R4lpkq7cQ6xptqVIyjG4b-2i9klObtxf2y7Cw8
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 273
ht-degree: 0%

---

# Web エディターのツールバーでオンプレミス用の特殊文字を追加する方法

Web エディターのツールバーには、作成者が既に特殊文字を挿入できるショートカットオプションがあります。
以下のスクリーンショットにも同じことが見られます。

![特殊文字](assets/special-chars.png)


これらの文字のリストはここで設定可能です。 さらに文字を追加する必要がある場合は、次の手順に従います。

+ AEMにログインし、CRXDE Lite モードを開きます。

+ symbols.json ファイルを次の場所に作成します：&#39;/apps/fmdita/xmleditor/&#39; （デフォルトの場所を/libs/fmdita/clientlibs/clientlibs/xmleditor/symbols.jsonからコピーできます）

+ symbols.json ファイルの特殊文字定義を次のように追加します。

```
{
      "label": "Logical Symbols",
      "items": [
        {
          "name": "≥",
          "title": "Greater-Than or Equal To"
        },
        {
          "name": "≤",
          "title": "Smaller-Than or Equal To"
        }
      ]
}
```

symbols.json ファイルの構造を以下に示します。

+ &quot;label&quot;: &quot;Logical Symbols&quot;：特殊文字のカテゴリを指定します。 スニペットでは、「論理シンボル」という名前のカテゴリが定義されます。

+ &quot;items&quot;: カテゴリ内の特殊文字のコレクションを定義します。

+ &quot;name&quot;: &quot;≥&quot;, &quot;title&quot;: &quot;Greater-Than or Equal To&quot;：これは特殊文字の定義です。 「名前」ラベルで始まります。これは変更しないでください。 名前の後に特殊文字が続きます。 「タイトル」は、特殊文字のツールチップとして表示される特殊文字の名前またはタイトルです。

カテゴリ内で複数の特殊文字の定義を定義できます。

これにより、特殊文字ダイアログに別のカテゴリが追加されます。

![特殊シンボルカテゴリ ](assets/special-char-category.png)

![特殊文字を挿入](assets/insert-special-char.png)

>[!MORELIKETHIS]
>
>+ [ インストールおよび設定ガイド ](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/3-6/XML-Documentation-for-Adobe-Experience-Manager_Installation-Configuration-Guide_EN.pdf)
