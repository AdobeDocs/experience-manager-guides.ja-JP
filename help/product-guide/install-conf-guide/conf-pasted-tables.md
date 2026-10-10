---
title: エディターをカスタマイズ
description: エディターで貼り付けられたテーブルの表示をカスタマイズする方法を説明します
feature: Web Editor Configuration
role: Admin
level: Experienced
exl-id: e66c13e4-6dc0-41a0-8582-32bacec9ae6c
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
feature_v2:
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
    internal-label: Configuration
subfeature_v2:
  - id: b0521e56-a0b2-40b6-bf47-ebc98751f9ba
    internal-label: Web Editor configuration
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '225'
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
