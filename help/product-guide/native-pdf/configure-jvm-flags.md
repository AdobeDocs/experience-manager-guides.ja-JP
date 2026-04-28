---
title: ネイティブ PDF | ネイティブ PDF パブリッシング用のJVM フラグの設定
description: ネイティブ PDF パブリッシング用のJVM フラグの設定
feature: Output Generation
role: Admin
level: Experienced
exl-id: d5432913-4b5a-48e7-9467-7f6c6e0adbe4
source-git-commit: ccaf2ead1a9a24ab822298c6b9ef6866a1c32e8c
workflow-type: tm+mt
source-wordcount: '128'
ht-degree: 1%

---

# オンプレミス用のネイティブ PDF パブリッシング用のJVM フラグの設定

ネイティブのPDF パブリッシングでは、別のJVM プロセスを開始してPDFを生成します。 様々なシナリオをサポートするために、このJVMの設定を調整する必要がある場合があります。 例えば、より大きなワークロードを実行するには、生成されたJVM プロセスで使用可能な最大ヒープサイズを増やす必要があります。

AEM Guides Native PDF Publishing JVM フラグを設定するには、次の手順を実行します。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.config.ConfigManager* バンドルを検索して選択します。

1. 任意の標準JVM フラグを渡すために、ネイティブ pdf **（*native.pdf.java.opts*）のプロパティ** Java コマンドラインオプションを更新します。



1. 「**保存**」をクリックします。
