---
title: 詳細マップ エディタを既定値として設定します。
description: 詳細マップエディターをデフォルトとして設定する方法を説明します
exl-id: ecc023f6-48eb-4afd-97a2-4b3cdd5a8991
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '199'
ht-degree: 0%

---

# 詳細マップ エディタを既定値として設定します。 {#id181AI0003PN}

AEM Guidesには、基本マップエディターと高度なマップエディターが付属しています。 基本マップ エディタには、マップ ファイルを作成するために必要なすべての機能が用意されています。 高度なマップエディタは、より豊富な機能を備えており、Web エディタ内に統合されています。 高度なマップエディタを使用すると、作成者は使いやすいインタフェースを使用して DITA マップファイルを作成および編集できます。

既定では、新しいマップ ファイルが作成されるたびに、そのファイルが基本マップ エディタで開かれます。 この動作を変更するには、この設定を有効にして、デフォルトで詳細マップエディターを開きます。

次の手順を実行して、高度なマップ エディタをマップ ファイルの既定のエディタとして設定します。

1. Adobe Experience Manager Web コンソール設定ページを開きます。

   設定ページにアクセスするためのデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** バンドルを検索してクリックします。

1. **基本マップ エディタを非表示にする** オプションを選択します。

   このオプションを選択すると、ユーザ インタフェースの任意の場所に基本マップ エディタ リンクが表示されなくなります。 既定では、マップ ファイルは高度なマップ エディタで開きます。
