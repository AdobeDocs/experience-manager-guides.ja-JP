---
title: AEMのデフォルトディクショナリのカスタマイズ
description: AEMのデフォルトディクショナリをカスタマイズする方法について説明します
exl-id: 8bfd3ea7-0be8-4e7a-b389-5face043200b
feature: Web Editor Configuration
role: Admin
level: Experienced
TQID: 'https://experienceleague.adobe.com/q1L3-BdWTGmgtrqjOipnk-39Tw-50NT6R--khdTXhbI'
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
feature_v2:
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
    internal-label: Configuration
subfeature_v2:
  - id: b0521e56-a0b2-40b6-bf47-ebc98751f9ba
    internal-label: Web Editor configuration
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '172'
ht-degree: 2%
---
# AEMのデフォルトディクショナリのカスタマイズ {#id209SD8000WU}

Web エディターは、AEMのスペルチェッカーまたはブラウザーのスペルチェッカーを使用するように設定できます。 AEMのスペルチェッカーを使用すれば、独自の単語リストを柔軟に定義できます。 次に、これらのカスタム単語がAEMの辞書に追加され、これらの単語はWeb エディターで\（不正な\）フラグが付けられません。

次の手順を実行して、AEM ディクショナリに追加されたカスタム単語リストを作成します。

1. AEMにログインし、CRXDE Lite モードを開きます。

1. 次のノードに移動します。

   /apps/fmdita/config

1. user\_dictionary.txtという名前の新規ファイルを作成します。

1. ファイルを開き、カスタム辞書で定義する単語のリストを追加します。

   次のスクリーンショットは、user\_dictionary.txt ファイルに追加されたカスタム単語リストを示しています。

   ![](assets/custom-words-list-dictionary.png){width="650"}

1. ファイルを保存して閉じます。


作成者は、AEM ディクショナリでカスタム単語リストを更新するには、Web エディターセッションを再起動する必要がありました。

**親トピック：**&#x200B;[&#x200B; Web エディターのカスタマイズ &#x200B;](conf-web-editor.md)
