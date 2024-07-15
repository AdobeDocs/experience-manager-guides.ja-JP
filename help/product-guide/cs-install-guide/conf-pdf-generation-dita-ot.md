---
title: 単一トピックPDFの生成の設定
description: 単一トピックのPDFの生成を設定する方法を説明します
exl-id: 5b66fd3b-6450-49ce-b06e-d2d5bab37990
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '268'
ht-degree: 0%

---

# 単一トピックPDFの生成の設定 {#id22ADC70M0XA}

AEM Guidesを使用すると、個々のトピックまたはマップ ファイル全体のPDFを生成できます。 ネイティブPDFまたは DITA-OT 方式を使用して、PDFフォーマットでトピックを公開できます。 ネイティブPDF方式を使用して、W3C CSS3 および CSS ページメディア標準に基づいた、機能豊富なPDF出力を生成します。 DITA-OT メソッドを使用して、マップダッシュボードからマップのPDF出力を生成できます。

>[!NOTE]
>
> ネイティブPDFは、現在のバージョンのAEM GuidesでPDFを生成するデフォルトの方法です。

DITA-OT を使用してトピックのプレビューモードから旧PDFの生成を有効にするには、次の手順を実行します。

1. Adobe Experience Managerに管理者としてログインし、UI コンフィギュレーションファイルをダウンロードします。

1. これを行うには、上部の「Adobe Experience Manager」リンクをクリックし、「**ツール**」を選択します。
1. ツールのリストから「**ガイド**」を選択し、「**フォルダープロファイル**」をクリックします。
1. **グローバルプロファイル** タイルをクリックします。
1. 「**XML エディター設定**」タブを選択し、上部の「**編集** アイコンをクリックします
1. **ダウンロード** アイコンをクリックして、ui\_config.json ファイルをローカルシステムにダウンロードします。 その後、ファイルに変更を加えて、同じものをアップロードできます。
1. `ui_config.json` ファイル内で、次の設定を探します。

   ```
   {
                           "component": "button",
                           "variant": "action",
                           "quiet": true,
                           "icon": "filePDF",
                           "title": "Download as PDF",
                           "on-click": "EDITOR_SAVE_AS_PDF"
                           }
   ```

   さらに、次の構文で置換します

   ```
   {
                           "component": "button",
                           "icon": "filePDF",
                           "variant": "action",
                           "quiet": true, "title": "Export as PDF",
                           "on-click": "DOWNLOAD_TOPIC_PDF",
                           "show" : ["@isPreviewMode", "@isXmlMode"]
                           }
   ```

1. ファイルを保存してアップロードします。

上記の手順を実行した後、Web エディタの User Preferences から同じフォルダプロファイルを選択すると、トピックのプレビューモードでPDFを生成するオプションが表示されます。

**親トピック：**[ Web エディタのカスタマイズ ](conf-web-editor.md)
