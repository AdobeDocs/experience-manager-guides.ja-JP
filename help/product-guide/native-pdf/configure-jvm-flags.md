---
title: ネイティブPDF | ネイティブPDF公開用の JVM フラグの設定
description: ネイティブPDF公開用の JVM フラグの設定
exl-id: d5432913-4b5a-48e7-9467-7f6c6e0adbe4
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '125'
ht-degree: 1%

---

# ネイティブPDF公開用の JVM フラグの設定

ネイティブPDFの公開により、別個の JVM プロセスが開始し、PDFが生成されます。 場合によっては、別のシナリオをサポートするために、この JVM の設定を調整する必要があります。 例えば、より大きなワークロードを実行するには、生成された JVM プロセスで使用可能な最大ヒープサイズを増やす必要があります。

AEM Guides ネイティブPDFに JVM フラグを公開するように設定するには、次の手順を実行します。

1. Adobe Experience Manager Web コンソール設定ページを開きます。

   設定ページにアクセスするためのデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.config.ConfigManager* バンドルを検索して選択します。

1. プロパティ **ネイティブ PDF の Java コマンドラインオプション** （*native.pdf.java.opts*）を更新して、標準の JVM フラグを渡します。



1. 「**保存**」をクリックします。
