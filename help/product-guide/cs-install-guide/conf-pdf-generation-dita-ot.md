---
title: 1つのトピックのPDF生成の設定
description: PDFの生成に関するシングルトピックの設定方法について説明します
exl-id: 5b66fd3b-6450-49ce-b06e-d2d5bab37990
feature: Web Editor Configuration
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 564ee1731be2378744ffd2ed54a2fd423901a0b3
workflow-type: tm+mt
source-wordcount: '268'
ht-degree: 0%

---

# 1つのトピックのPDF生成の設定 {#id22ADC70M0XA}

AEM Guidesを使用すると、個々のトピックのPDFまたはマップファイル全体を生成できます。 ネイティブのPDFまたはDITA-OT メソッドを使用して、PDF形式でトピックを公開できます。 ネイティブのPDF手法を使用して、W3C CSS3やCSS Paged Mediaなどの標準規格にもとづいた、豊かな機能を備えたPDF出力を生成できます。 DITA-OT メソッドを使用すると、マップダッシュボードからマップのPDF出力を生成できます。

>[!NOTE]
>
> ネイティブ PDFは、現在のバージョンのAEM GuidesでPDFを生成するためのデフォルトの方法です。

トピックプレビューモードからDITA-OTを使用して古いPDFの生成を有効にするには、次の手順を実行します。

1. Adobe Experience Managerに管理者としてログインし、UI設定ファイルをダウンロードします。

1. これを行うには、上部のAdobe Experience Manager リンクをクリックし、**ツール**&#x200B;を選択します。
1. ツールのリストから&#x200B;**ガイド**&#x200B;を選択し、**フォルダープロファイル**&#x200B;をクリックします。
1. 「**グローバルプロファイル**」タイルをクリックします。
1. **XML エディターの設定** タブを選択し、上部の&#x200B;**編集** アイコンをクリックします
1. **ダウンロード** アイコンをクリックして、ui\_config.json ファイルをローカルシステムにダウンロードします。 その後、ファイルに変更を加えて、同じものをアップロードできます。
1. `ui_config.json` ファイルで、次の設定を見つけます。

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

   次で置き換えることができます

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

上記の手順を実行した後、Web エディターのユーザー環境設定から同じフォルダープロファイルを選択すると、トピックのプレビューモードでPDF生成のオプションが表示されます。

**親トピック：**&#x200B;[&#x200B; Web エディターのカスタマイズ &#x200B;](conf-web-editor.md)
