---
title: ネイティブ PDF | ネイティブ PDF パブリッシング用のJVM フラグの設定
description: ネイティブ PDF パブリッシング用のJVM フラグの設定
feature: Output Generation
role: Admin
level: Experienced
exl-id: d5432913-4b5a-48e7-9467-7f6c6e0adbe4
TQID: https://experienceleague.adobe.com/UvDTutOu-rfQ7tNTMZ6f1dNYJ90dwSGCtTJvWWFm638
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2:
  - id: d6596f3f-92a7-43ec-b444-237db6adad05
  - id: fd6cc9e1-e5e5-494e-b7b1-a32f2d6cd7c9
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 128
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
