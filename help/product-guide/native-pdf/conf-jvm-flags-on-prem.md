---
title: ネイティブ PDF | ネイティブ PDF パブリッシング用のJVM フラグの設定
description: ネイティブ PDF パブリッシング用のJVM フラグの設定
feature: Output Generation
role: Admin
level: Experienced
exl-id: a2a9f44c-cb17-4423-a66e-499bce921398
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
    internal-label: Publishing
subfeature_v2:
  - id: fd6cc9e1-e5e5-494e-b7b1-a32f2d6cd7c9
    internal-label: Output generation
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
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
