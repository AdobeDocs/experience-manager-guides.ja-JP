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

ネイティブPDFの公開では、別の JVM プロセスを開始して、PDFを生成します。 異なるシナリオをサポートするには、この JVM の設定を調整する必要がある場合があります。 例えば、より大きなワークロードを実行するには、生成された JVM プロセスで使用可能な最大ヒープサイズを増やす必要があります。

次の手順を実行して、AEM Guides Native Guide Publishing JVM フラグをPDFします。

1. Adobe Experience Manager Web コンソール設定ページを開きます。

   設定ページにアクセスするデフォルトの URL は次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. を検索して選択します。 *com.adobe.fmdita.config.ConfigManager* バンドル。

1. プロパティを更新します。 **ネイティブ pdf 用の Java コマンドラインオプション** (*native.pdf.java.opts*) をクリックして、標準の JVM フラグを渡します。



1. 「**保存**」をクリックします。
