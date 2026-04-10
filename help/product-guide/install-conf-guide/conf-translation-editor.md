---
title: Web エディターでの翻訳機能の設定
description: Web エディターでの翻訳機能の設定方法を説明します
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '157'
ht-degree: 0%

---

# Cloud ServiceのWeb エディターでの翻訳機能の設定

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

**親トピック：**[ Web エディターのカスタマイズ ](customize-overview.md)
