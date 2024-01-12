---
title: AEMのデフォルト辞書をカスタマイズ
description: AEMのデフォルト辞書をカスタマイズする方法を説明します
exl-id: 8bfd3ea7-0be8-4e7a-b389-5face043200b
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '173'
ht-degree: 2%

---

# AEMのデフォルト辞書をカスタマイズ {#id209SD8000WU}

Web エディターは、AEMスペルチェッカーまたはブラウザーのスペルチェッカーを使用するように設定できます。 AEMスペルチェッカーを使用する場合は、カスタムの単語リストを柔軟に定義できます。 その後、これらのカスタム単語はAEM辞書に追加され、Web エディターでは「（誤った）」というフラグは設定されません。

次の手順を実行して、AEM辞書に追加されるカスタム単語リストを作成します。

1. AEMにログインし、CRXDE Liteモードを開きます。

1. 次のノードに移動します。

   /apps/fmdita/config

1. user\_dictionary.txt という名前の新しいファイルを作成します。

1. ファイルを開き、カスタム辞書で定義する単語のリストを追加します。

   次のスクリーンショットは、カスタム単語リストが user\_dictionary.txt ファイルに追加されたことを示しています。

   ![](assets/custom-words-list-dictionary.png){width="650" align="left"}

1. ファイルを保存して閉じます。


作成者は、AEM辞書で更新されたカスタム単語リストを取得するには、Web エディターセッションを再起動する必要があります。

**親トピック：**[ Web エディタのカスタマイズ](conf-web-editor.md)
