---
title: Web エディターでの翻訳機能の設定
description: Web エディターでの翻訳機能の設定方法を説明します
exl-id: e25473c3-9a84-4658-87c9-6fd72bcaa2b6
feature: Web Editor Configuration
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/7-SFQ0FXQ6bGo3pjAOK-18sEsU4-zriruioG2nMx2o0
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2: id: b0521e56-a0b2-40b6-bf47-ebc98751f9baid: b1ef4d86-3917-4b76-a0bc-4a4771f9b3b0
role_v2: id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 154
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

**親トピック：**[ Web エディターのカスタマイズ ](conf-web-editor.md)
