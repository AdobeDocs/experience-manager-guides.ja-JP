---
title: 詳細マップエディターをデフォルトに設定する
description: 詳細マップエディターをデフォルトとして設定する方法について説明します
exl-id: ecc023f6-48eb-4afd-97a2-4b3cdd5a8991
feature: Web Editor Configuration
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/dwHfKsMVg9UWOs2eIClHcDeGn4lFHo6JqGZEYl3NEFE
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2: id: b0521e56-a0b2-40b6-bf47-ebc98751f9ba
role_v2: id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 272
ht-degree: 0%

---

# 詳細マップエディターをデフォルトに設定する {#id181AI0003PN}

>[!NOTE]
>
> 以前はExperience Manager Guidesで使用されていた基本マップエディターは、バージョン 4.3および2307以降で非推奨（廃止予定）になりました。 基本マップエディターにアクセスして、DITA マップを作成および管理することはできません。
>詳細マップエディターを使用することをお勧めします。 高度なマップエディターには、高度な機能と優れたカスタマイズオプションが用意されています。 [高度なマップエディター](../user-guide/map-editor-advanced-map-editor.md)の操作方法について詳しく説明します。

4.3および2307より前のバージョンの場合、Experience Manager Guidesには基本マップエディターと高度なマップエディターが付属しています。 基本マップエディターには、マップファイルを作成するために必要なすべての機能が用意されています。 高度なマップエディターは機能豊富で、Web エディター内に統合されています。 高度なマップエディターを使用すると、作成者は使いやすいインターフェイスでDITA マップファイルを作成および編集できます。

デフォルトでは、新しいマップファイルを作成するたびに、基本マップエディターで開きます。 この動作を変更するには、設定を有効にして詳細マップエディターをデフォルトで開きます。

詳細マップエディターをマップファイルのデフォルトエディターにするには、次の手順を実行します。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** バンドルを検索してクリックします。

1. 「**基本マップエディターを非表示**」オプションを選択します。

   このオプションを選択すると、ユーザーインターフェイスのどこにも基本マップエディターのリンクが表示されません。 デフォルトでは、マップファイルは高度なマップエディターで開きます。
