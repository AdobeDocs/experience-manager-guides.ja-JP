---
title: AEMのデフォルトディクショナリのカスタマイズ
description: AEMのデフォルトディクショナリをカスタマイズする方法について説明します
exl-id: ecffcd14-6728-4938-a209-5c4b12af6fbb
feature: Web Editor Configuration
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 564ee1731be2378744ffd2ed54a2fd423901a0b3
workflow-type: tm+mt
source-wordcount: '175'
ht-degree: 1%

---

# AEMのデフォルトディクショナリのカスタマイズ {#id209SD8000WU}

Web エディターは、AEMのスペルチェッカーまたはブラウザーのスペルチェッカーを使用するように設定できます。 AEMのスペルチェッカーを使用すれば、独自の単語リストを柔軟に定義できます。 次に、これらのカスタム単語がAEMの辞書に追加され、これらの単語はWeb エディターで\（不正な\）フラグが付けられません。

次の手順を実行して、AEM ディクショナリに追加されたカスタム単語リストを作成します。

1. カスタム辞書で定義する単語のリストを含むuser\_dictionary.txt ファイルを作成します。

   >[!NOTE]
   >
   > 各カスタムワードは、新しい行で定義する必要があります。

1. Cloud ManagerのGit リポジトリの次の場所にファイルを保存します。

   /apps/fmdita/config

1. ファイルを保存します。

   変更を確定し、Cloud Manager \（CI/CD\） パイプラインを実行して、設定変更をデプロイします。


作成者は、AEM ディクショナリでカスタム単語リストを更新するには、Web エディターセッションを再起動する必要がありました。

**親トピック：**[ Web エディターのカスタマイズ ](conf-web-editor.md)
