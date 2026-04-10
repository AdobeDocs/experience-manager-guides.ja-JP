---
title: Web エディターのカスタマイズ
description: エディターで貼り付けられたテーブルの表示をカスタマイズする方法を説明します
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 834959a6a0e22cd5d2b2c5d0e57ceb6d45c0c666
workflow-type: tm+mt
source-wordcount: '226'
ht-degree: 0%

---

# Cloud Serviceの貼り付けテーブルの表示を設定する

エディターのセカンダリツールバーを使用すると、トピックの現在または次の有効な場所に簡単な表を挿入できます。 Microsoft WordまたはExcelから表をコピーして、トピックファイルに直接貼り付けることもできます。

管理者は、コピーしたテーブルの表示方法を設定できます。 デフォルトでは、このようなコピーされたテーブルはエディターに`simpletable`と表示されます。 ただし、XML エディターの設定設定を更新することで、コピーしたテーブルを`tgroup`として表示するように、この設定を変更できます。

>[!NOTE]
>
> 行または列が結合されたテーブルをコピーすると、XML エディター設定で設定されたテーブル設定に関係なく、テーブルは通常のテーブル `trgoup`として貼り付けられますが、`simpletable`ではありません。

デフォルトの表形式を更新するには、次の手順を実行します。

1. Adobe Experience Managerのナビゲーションページを開き、左側の&#x200B;**ツール**&#x200B;を選択します。
2. ツールパネルで、ツールのリストから「**ガイド**」を選択します。
3. 「**フォルダープロファイル**」を選択し、テーブル設定を更新するプロファイルを選択します。
4. 「**XML エディター設定**」タブに移動します。
5. 上部の&#x200B;**編集** アイコンを選択します。
6. **ダウンロード** アイコンを選択して、ローカルシステムに`ui_config.json` ファイルをダウンロードします。
7. `ui_config.json` ファイルで、次に示すように`simpletable`設定を更新します。

   ```
   "htmlToDitaMapping":{ "table": {
   "name" : "tgroup",
   "wrapTag" : {
       "dita" : "table",
       "html" : "div"
   }
   } },
   ```


更新したら、ファイルを保存してアップロードします。
