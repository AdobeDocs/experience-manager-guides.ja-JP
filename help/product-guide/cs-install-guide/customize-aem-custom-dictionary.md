---
title: AEMのデフォルトの辞書をカスタマイズ
description: AEMのデフォルトの辞書をカスタマイズする方法
exl-id: ecffcd14-6728-4938-a209-5c4b12af6fbb
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '175'
ht-degree: 1%

---

# AEMのデフォルトの辞書をカスタマイズ {#id209SD8000WU}

Web エディタは、AEMのスペルチェッカーまたはブラウザのスペルチェッカーを使用するように設定できます。 AEM スペルチェッカーを使用すると、カスタム単語リストを柔軟に定義できます。 これらのカスタム単語はAEM ディクショナリに追加され、Web エディタでこれらの単語に\（as incorrect\）というフラグは付けられません。

次の手順を実行してカスタム単語リストを作成し、AEM辞書に追加します。

1. user\_dictionary.txt ファイルを作成し、カスタム辞書で定義する単語のリストを指定します。

   >[!NOTE]
   >
   > 各カスタム単語は、新しい行で定義する必要があります。

1. Cloud Managerの Git リポジトリ内の次の場所に、ファイルを保存します。

   /apps/fmdita/config

1. ファイルを保存します。

   変更内容をコミットし、Cloud Manager \（CI/CD\） パイプラインを実行して、設定の変更をデプロイします。


作成者は、AEM ディクショナリでカスタム単語リストを更新するには、web エディターセッションを再起動する必要があります。

**親トピック：**&#x200B;[&#x200B; Web エディタのカスタマイズ &#x200B;](conf-web-editor.md)
