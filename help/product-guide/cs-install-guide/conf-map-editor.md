---
title: 詳細マップエディターをデフォルトに設定する
description: 詳細マップエディターをデフォルトとして設定する方法について説明します
exl-id: 365264ab-f990-42c1-ab79-61a40ecea42f
feature: Web Editor Configuration
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 564ee1731be2378744ffd2ed54a2fd423901a0b3
workflow-type: tm+mt
source-wordcount: '297'
ht-degree: 0%

---

# 詳細マップエディターをデフォルトに設定する {#id181AI0003PN}

>[!NOTE]
>
> 以前はExperience Manager Guidesで使用されていた基本マップエディターは、バージョン 4.3および2307以降で非推奨（廃止予定）になりました。 基本マップエディターにアクセスして、DITA マップを作成および管理することはできません。
>詳細マップエディターを使用することをお勧めします。 高度なマップエディターには、高度な機能と優れたカスタマイズオプションが用意されています。 [高度なマップエディター](../user-guide/map-editor-advanced-map-editor.md)の操作方法について詳しく説明します。

4.3および2307より前のバージョンの場合、Experience Manager Guidesには基本マップエディターと高度なマップエディターが付属しています。 基本マップエディターには、マップファイルを作成するために必要なすべての機能が用意されています。 高度なマップエディターは機能豊富で、Web エディター内に統合されています。 高度なマップエディターを使用すると、作成者は使いやすいインターフェイスでDITA マップファイルを作成および編集できます。

デフォルトでは、新しいマップファイルを作成するたびに、基本マップエディターで開きます。 この動作を変更するには、設定を有効にして詳細マップエディターをデフォルトで開きます。

設定ファイルを作成するには、[設定の上書き](download-install-additional-config-override.md#)の手順を使用します。 設定ファイルで、基本マップエディターを有効にするために次の\（property\）詳細を指定します。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | ``fmdita.hide.oldmapeditor`` | ブール値\（true/false\）。 デフォルトで高度なマップエディターを使用する場合は、このプロパティをtrueに設定します。<br> **デフォルト値**: false |

>[!NOTE]
>
> デフォルトでは、作成者がマップファイルを作成し、編集用に開くことを選択すると、基本マップエディターが起動します。 Assets UIからマップファイルの「編集」オプションを選択すると、基本マップエディターでも開きます。

**親トピック：**&#x200B;[&#x200B; Web エディターのカスタマイズ &#x200B;](conf-web-editor.md)
