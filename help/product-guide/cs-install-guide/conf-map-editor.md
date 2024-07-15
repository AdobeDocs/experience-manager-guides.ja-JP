---
title: 詳細マップ エディタを既定値として設定します。
description: 詳細マップエディターをデフォルトとして設定する方法を説明します
exl-id: 365264ab-f990-42c1-ab79-61a40ecea42f
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '226'
ht-degree: 0%

---

# 詳細マップ エディタを既定値として設定します。 {#id181AI0003PN}

AEM Guidesには、基本マップエディターと高度なマップエディターが付属しています。 基本マップ エディタには、マップ ファイルを作成するために必要なすべての機能が用意されています。 高度なマップエディタは、より豊富な機能を備えており、Web エディタ内に統合されています。 高度なマップエディタを使用すると、作成者は使いやすいインタフェースを使用して DITA マップファイルを作成および編集できます。

既定では、新しいマップ ファイルが作成されるたびに、そのファイルが基本マップ エディタで開かれます。 この動作を変更するには、この設定を有効にして、デフォルトで詳細マップエディターを開きます。

[ 設定の上書き ](download-install-additional-config-override.md#) の手順に従って、設定ファイルを作成します。 設定ファイルに次の\（property\）の詳細を入力して、基本マップエディタを有効にします。

| PID | プロパティキー | プロパティの値 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | ``fmdita.hide.oldmapeditor`` | ブール \（true/false\） 高度なマップエディタをデフォルトで使用する場合は、このプロパティを true に設定します。<br> **デフォルト値**:false |

>[!NOTE]
>
> デフォルトでは、作成者がマップ ファイルを作成し、編集するために開くことを選択すると、基本マップ エディタが起動します。 Assets UI でマップファイルに対して「編集」オプションを選択すると、基本マップエディタでも開きます。

**親トピック：**[ Web エディタのカスタマイズ ](conf-web-editor.md)
