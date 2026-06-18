---
title: エディターでの翻訳機能の設定
description: エディターでの翻訳機能の設定方法を説明します
feature: Web Editor Configuration
role: Admin
level: Experienced
exl-id: 22d7e1c7-2059-43fb-b7aa-3ae4a6072678
source-git-commit: cc73b81787a3c3dbe8390d93e558064327e59965
workflow-type: tm+mt
source-wordcount: '150'
ht-degree: 0%

---

# Cloud Serviceのエディターでの翻訳機能の設定

エディターには、コンテンツを複数の言語に翻訳する強力な翻訳機能が用意されています。

エディターの「**管理**」タブを使用して、コンテンツを翻訳できます。 このタブはデフォルトで使用できます。

エディターで「**管理**」タブを非表示にするには、次の手順を実行します。

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

**親トピック：**[ エディターのカスタマイズ ](customize-overview.md)
