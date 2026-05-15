---
title: Web エディターのカスタマイズ
description: エディターで貼り付けられたテーブルの表示をカスタマイズする方法を説明します
feature: Web Editor Configuration
role: Admin
level: Experienced
exl-id: 839128b4-4889-4c61-b1c0-214ba1d3165e
TQID: https://experienceleague.adobe.com/0g3LyLfKxZEbtl968wJK6r1xPHRjagayeBF4xSvJF6c
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2: id: b0521e56-a0b2-40b6-bf47-ebc98751f9baid: b1ef4d86-3917-4b76-a0bc-4a4771f9b3b0
role_v2: id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 223
ht-degree: 0%

---

# 貼り付けた表の表示を設定する

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
