---
title: チェックインとチェックアウトのアイコンのタイトルの設定
description: チェックインとチェックアウトのアイコンのタイトルを設定する方法について説明します
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 834959a6a0e22cd5d2b2c5d0e57ceb6d45c0c666
workflow-type: tm+mt
source-wordcount: '168'
ht-degree: 0%

---

# オンプレミスのチェックインとチェックアウトのアイコンのタイトルの設定

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
