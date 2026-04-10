---
title: Web エディターでの翻訳機能の設定
description: Web エディターでの翻訳機能の設定方法を説明します
exl-id: e25473c3-9a84-4658-87c9-6fd72bcaa2b6
feature: Web Editor Configuration
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 564ee1731be2378744ffd2ed54a2fd423901a0b3
workflow-type: tm+mt
source-wordcount: '154'
ht-degree: 0%

---

# Web エディターでの翻訳機能の設定 {#id21BONI0J0YR}

Web エディターには、コンテンツを複数の言語に翻訳するための強力な翻訳機能が用意されています。

Web エディターの「**管理**」タブを使用して、コンテンツを翻訳できます。 このタブはデフォルトで使用できます。

Web エディターで「**管理**」タブを非表示にするには、次の手順を実行します。

1. **Adobe Experience Manager**&#x200B;に管理者としてログインします。
1. 上部の&#x200B;**Adobe Experience Manager** リンクをクリックし、**ツール**&#x200B;を選択します。
1. ツールのリストから&#x200B;**ガイド**&#x200B;を選択し、**フォルダープロファイル**&#x200B;をクリックします。
1. 「**グローバルプロファイル**」タイルをクリックします。
1. **XML エディター設定**&#x200B;をクリックします。
1. 上部の&#x200B;**編集** アイコンをクリックします。
1. `ui\_config.json` ファイルをダウンロードします。ダウンロードしたファイルから次のコードスニペットを削除します。

   ```json
   {
       "component":"tab",
       "id":"workflow",
       "title":"Manage",
       "on-click":"APP_MODE_CHANGE",
       "items":
       [
           {
               "component":"label",
               "label":"Manage"
           }
       ]
   },
   ```

1. 更新したui\_config.json ファイルをアップロードします。

**管理** フィルターは使用できなくなりました。

**親トピック：**&#x200B;[&#x200B; Web エディターのカスタマイズ &#x200B;](conf-web-editor.md)
