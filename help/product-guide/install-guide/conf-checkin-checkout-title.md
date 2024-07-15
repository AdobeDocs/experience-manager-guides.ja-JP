---
title: チェックイン アイコンとチェックアウト アイコンのタイトルの設定
description: チェックインおよびチェックアウトアイコンのタイトルを設定する方法について説明します
exl-id: a8888a17-e819-4fa2-bb6f-cafe1002803a
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '166'
ht-degree: 0%

---

# 「チェックイン」アイコンと「チェックアウト」アイコンのタイトルの設定

AEM Guidesでは、web エディターでチェックインおよびチェックアウトのアイコンのタイトルを設定できます。 以下の手順を実行して、「チェックイン」アイコンと「チェックアウト」アイコンのタイトルを設定します。

1. 管理者としてAdobe Experience Managerにログインして、UI コンフィギュレーションファイルをダウンロードします。
1. 上部の「Adobe Experience Manager」リンクをクリックし、「**ツール**」を選択します。
1. ツールのリストから「**ガイド**」を選択し、「**フォルダープロファイル**」をクリックします。
1. **グローバルプロファイル** タイルをクリックします。
1. 「**XML エディター設定**」タブを選択し、上部の **編集** アイコンをクリックします。
1. 「**XML エディターの UI 設定**」セクションで「**ダウンロード**」アイコンをクリックして、`ui_config.json` ファイルをローカルシステムにダウンロードします。
1. `ui_config.json` ファイルで、「topbar」セクションのタイトルを変更します。 次の値を変更できます。

   ```json
   //Change title to "Check out" instead of "Lock"
           "title": "Check out"
   
   //Change title to "Check in" instead of "@checkOutBy
            "title": "Check in"
   ```

1. ファイルを保存してアップロードします。
