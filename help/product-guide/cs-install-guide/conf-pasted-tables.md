---
title: Web エディターのカスタマイズ
description: エディターで貼り付けたテーブルの表示をカスタマイズする方法を説明します
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: d03ac6ba3ec8e5c52c31a3239e2043bbae79622e
workflow-type: tm+mt
source-wordcount: '223'
ht-degree: 0%

---

# 貼り付けたテーブルの表示の設定

エディタの二次ツールバーを使用して、トピックの現在または次の有効な位置に単純なテーブルを挿入できます。 Microsoft Word または Excel からテーブルをコピーして、トピックファイルに直接貼り付けることもできます。

管理者は、コピーしたテーブルの表示方法を設定できます。 デフォルトでは、コピーされたテーブルはエディターに `simpletable` として表示されます。 ただし、この設定を変更して、XML エディターの設定を更新することで、コピーしたテーブルを `tgroup` のように表示することができます。

>[!NOTE]
>
> 結合された行または列を含む表をコピーすると、その表は通常の表 `trgoup` として貼り付けられ、XML エディタ設定で設定されている表設定に関係なく `simpletable` り付けられません。

デフォルトのテーブル形式を更新するには、次の手順を実行します。

1. Adobe Experience Managerのナビゲーション ページを開き、左側の **ツール** を選択します。
2. ツールパネルで、ツールのリストから **ガイド** を選択します。
3. **フォルダープロファイル** を選択してから、テーブル設定を更新するプロファイルを選択します。
4. 「**XML エディター設定**」タブに移動します。
5. 上部の **編集** アイコンを選択します。
6. **ダウンロード** アイコンを選択して、ローカルシステムに `ui_config.json` ファイルをダウンロードします。
7. `ui_config.json` ファイルで、次に示すように `simpletable` 設定を更新します。

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

