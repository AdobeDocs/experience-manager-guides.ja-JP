---
title: チェックインとチェックアウトのアイコンのタイトルの設定
description: チェックインとチェックアウトのアイコンのタイトルを設定する方法について説明します
exl-id: a8888a17-e819-4fa2-bb6f-cafe1002803a
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: ccaf2ead1a9a24ab822298c6b9ef6866a1c32e8c
workflow-type: tm+mt
source-wordcount: '166'
ht-degree: 0%

---

# チェックインとチェックアウトのアイコンのタイトルの設定

AEM Guidesでは、Web エディターのチェックインとチェックアウトのアイコンのタイトルを設定できます。 チェックインとチェックアウトのアイコンのタイトルを設定するには、次の手順を実行します。

1. 管理者としてAdobe Experience Managerにログインして、UI設定ファイルをダウンロードします。
1. 上部のAdobe Experience Manager リンクをクリックし、**ツール**&#x200B;を選択します。
1. ツールのリストから&#x200B;**ガイド**&#x200B;を選択し、**フォルダープロファイル**&#x200B;をクリックします。
1. 「**グローバルプロファイル**」タイルをクリックします。
1. **XML エディターの設定** タブを選択し、上部の&#x200B;**編集** アイコンをクリックします。
1. **XML エディターのUI設定** セクションで、**ダウンロード** アイコンをクリックして、ローカルシステムに`ui_config.json` ファイルをダウンロードします。
1. `ui_config.json` ファイルで、「トップバー」セクションのタイトルを変更します。 次の値を変更できます。

   ```json
   //Change title to "Check out" instead of "Lock"
           "title": "Check out"
   
   //Change title to "Check in" instead of "@checkOutBy
            "title": "Check in"
   ```

1. ファイルを保存してアップロードします。
