---
title: AEMのデフォルトディクショナリのカスタマイズ
description: AEMのデフォルトディクショナリをカスタマイズする方法について説明します
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '269'
ht-degree: 2%

---

# AEMのデフォルトディクショナリのカスタマイズ {#id209SD8000WU}

Web エディターは、AEMのスペルチェッカーまたはブラウザーのスペルチェッカーを使用するように設定できます。 AEMのスペルチェッカーを使用すれば、独自の単語リストを柔軟に定義できます。 次に、これらのカスタム単語がAEMの辞書に追加され、これらの単語はWeb エディターで\（不正な\）フラグが付けられません。

次のタブには、Experience Manager Guidesの設定に基づいてAEM ディクショナリに追加されるカスタム単語リストを作成する手順が表示されます。Cloud Serviceまたはオンプレミス。

>[!BEGINTABS]

>[!TAB Cloud Service]

1. カスタム辞書で定義する単語のリストを含むuser\_dictionary.txt ファイルを作成します。

   >[!NOTE]
   >
   > 各カスタムワードは、新しい行で定義する必要があります。

1. Cloud ManagerのGit リポジトリの次の場所にファイルを保存します。

   /apps/fmdita/config

1. ファイルを保存します。

   変更を確定し、Cloud Manager \（CI/CD\） パイプラインを実行して、設定変更をデプロイします。


作成者は、AEM ディクショナリでカスタム単語リストを更新するには、Web エディターセッションを再起動する必要がありました。

>[!TAB  オンプレミス ]

1. AEMにログインし、CRXDE Lite モードを開きます。

1. 次のノードに移動します。

   /apps/fmdita/config

1. user\_dictionary.txtという名前の新規ファイルを作成します。

1. ファイルを開き、カスタム辞書で定義する単語のリストを追加します。

   次のスクリーンショットは、user\_dictionary.txt ファイルに追加されたカスタム単語リストを示しています。

   ![](assets/custom-words-list-dictionary.png){width="650" align="left"}

1. ファイルを保存して閉じます。


作成者は、AEM ディクショナリでカスタム単語リストを更新するには、Web エディターセッションを再起動する必要がありました。

>[!ENDTABS]

**親トピック：**[ Web エディターのカスタマイズ ](customize-overview.md)
