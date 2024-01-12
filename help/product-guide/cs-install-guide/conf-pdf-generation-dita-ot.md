---
title: 単一トピックのPDF生成を設定
description: 単一トピックの生成を設定する方法についてPDF
exl-id: 5b66fd3b-6450-49ce-b06e-d2d5bab37990
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '268'
ht-degree: 0%

---

# 単一トピックのPDF生成を設定 {#id22ADC70M0XA}

AEMガイドを使用すると、個々のトピックのPDFまたはマップファイル全体を生成できます。 ネイティブPDFまたは DITA-OT メソッドを使用して、PDF形式でトピックを公開できます。 ネイティブPDF方式を使用して、W3C CSS3 および CSS ページ化メディア標準に基づいて、機能豊富なPDF出力を生成します。 DITA-OT メソッドを使用して、マップダッシュボードからマップのPDF出力を生成できます。

>[!NOTE]
>
> ネイティブPDFは、AEMガイドの現在のバージョンでPDFを生成するデフォルトの方法です。

トピックプレビューモードで DITA-OT を使用して古いPDFの生成を有効にするには、次の手順を実行します。

1. Adobe Experience Managerに管理者としてログインし、UI 設定ファイルをダウンロードします。

1. それには、上部の「 Adobe Experience Manager 」リンクをクリックし、「 」を選択します。 **ツール**.
1. 選択 **ガイド** ツールのリストから、 **フォルダープロファイル**.
1. をクリックします。 **Global Profile** タイル。
1. を選択します。 **XML エディターの設定** タブをクリックし、 **編集** 上部のアイコン
1. 次をクリック： **ダウンロード** アイコンを使用して、ui\_config.json ファイルをローカルシステムにダウンロードします。 その後、ファイルに変更を加えてから、同じファイルをアップロードできます。
1. Adobe Analytics の `ui_config.json` ファイルで、次の設定を探します。

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

   で置き換えます。

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

上記の手順を実行した後、Web エディターの「PDFの環境設定」から同じフォルダープロファイルを選択すると、トピックのプレビューモードに、ユーザー生成用のオプションが表示されます。

**親トピック：**[ Web エディタのカスタマイズ](conf-web-editor.md)
