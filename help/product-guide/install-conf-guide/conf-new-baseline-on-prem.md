---
title: オンプレミスの新しいベースラインの設定
description: オンプレミスの新しいベースラインを有効または無効にする方法を説明します
feature: Configuration
role: Admin
level: Experienced
source-git-commit: 8d231bdbf00adb354bc31616e880495b00a3959c
workflow-type: tm+mt
source-wordcount: '125'
ht-degree: 1%

---

# オンプレミスの新しいベースラインの設定

>[!IMPORTANT]
>
> ランタイム環境でシステム設定を手動で適用する代わりに、コードを使用してシステム設定をデプロイします。

次の手順では、オンプレミス環境で新しいベースラインを有効にする方法を説明します。

1. Adobe Experience Manager Web コンソールの設定ページを開きます。

   設定ページにアクセスするためのデフォルトのURLは次のとおりです。

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.config.ConfigManager** バンドルを検索して選択します。

1. 設定&#x200B;**より高速なベースライン （v2）**&#x200B;を有効にします。 正確な設定名`enable.baseline.v2`で検索することもできます。

1. 「**保存**」を選択します。

>[!NOTE]
>
>この機能を有効にした後、既存のベースラインを新しいベースラインに移行する必要があります。 ステップバイステップの手順とチュートリアル動画については、[Experience Manager Guidesの新しいベースライン（Beta）を](../user-guide/web-editor-baseline-v2.md)ご覧ください。

