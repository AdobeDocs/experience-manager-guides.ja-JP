---
title: AEMのデフォルトの辞書をカスタマイズ
description: AEMのデフォルトの辞書をカスタマイズする方法
exl-id: 8bfd3ea7-0be8-4e7a-b389-5face043200b
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '173'
ht-degree: 2%

---

# AEMのデフォルトの辞書をカスタマイズ {#id209SD8000WU}

Web エディタは、AEMのスペルチェッカーまたはブラウザのスペルチェッカーを使用するように設定できます。 AEM スペルチェッカーを使用すると、カスタム単語リストを柔軟に定義できます。 これらのカスタム単語はAEM ディクショナリに追加され、Web エディタでこれらの単語に\（as incorrect\）というフラグは付けられません。

次の手順を実行してカスタム単語リストを作成し、AEM辞書に追加します。

1. AEMにログインし、CRXDE Liteモードを開きます。

1. 次のノードに移動します。

   /apps/fmdita/config

1. user\_dictionary.txt という名前の新規ファイルを作成します。

1. ファイルを開き、カスタム辞書に定義する単語のリストを追加します。

   次のスクリーンショットは、user\_dictionary.txt ファイルに追加されたカスタム単語リストを示しています。

   ![](assets/custom-words-list-dictionary.png){width="650" align="left"}

1. ファイルを保存して閉じます。


作成者は、AEM ディクショナリでカスタム単語リストを更新するには、web エディターセッションを再起動する必要があります。

**親トピック：**[ Web エディタのカスタマイズ ](conf-web-editor.md)
