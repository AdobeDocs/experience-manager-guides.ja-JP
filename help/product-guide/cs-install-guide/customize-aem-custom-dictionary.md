---
title: AEMのデフォルトディクショナリのカスタマイズ
description: AEMのデフォルトディクショナリをカスタマイズする方法について説明します
exl-id: ecffcd14-6728-4938-a209-5c4b12af6fbb
feature: Web Editor Configuration
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/omWGECpXvtuNBUH8dcOnggOHmG8z1PevjBmZ-ZcYWjY
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2:
  - id: b0521e56-a0b2-40b6-bf47-ebc98751f9ba
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 174
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

**親トピック：**&#x200B;[&#x200B; Web エディターのカスタマイズ &#x200B;](conf-web-editor.md)
