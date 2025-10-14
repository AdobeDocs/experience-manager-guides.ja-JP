---
title: Web エディターでの翻訳機能の設定
description: Web エディターで翻訳機能を設定する方法を説明します
exl-id: e25473c3-9a84-4658-87c9-6fd72bcaa2b6
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '154'
ht-degree: 0%

---

# Web エディターでの翻訳機能の設定 {#id21BONI0J0YR}

Web エディターは、コンテンツを複数の言語に翻訳する強力な翻訳機能を提供します。

Web エディターの **管理** タブを使用して、コンテンツを翻訳できます。 このタブは、デフォルトで使用できます。

Web エディターで「**管理**」タブを非表示にするには、次の手順を実行します。

1. **Adobe Experience Manager** に管理者としてログインします。
1. 上部の **Adobe Experience Manager** リンクをクリックし、「**ツール**」を選択します。
1. ツールのリストから「**ガイド**」を選択し、「**フォルダープロファイル**」をクリックします。
1. **グローバルプロファイル** タイルをクリックします。
1. 「**XML エディター設定**」をクリックします。
1. 上部の **編集** アイコンをクリックします。
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

1. 更新された ui\_config.json ファイルをアップロードします。

**管理** フィルターは使用できなくなりました。

**親トピック：**&#x200B;[&#x200B; Web エディタのカスタマイズ &#x200B;](conf-web-editor.md)
