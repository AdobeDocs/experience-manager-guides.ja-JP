---
title: タグビューのデフォルト値の設定
description: タグビューのデフォルト値を設定する方法について説明します
exl-id: 52214459-74b8-47ec-982b-6176145348a8
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '214'
ht-degree: 0%

---

# タグビューのデフォルト値の設定 {#id223GN0M0NDC}

AEM Guidesでは、web エディターでタグビューのデフォルトのステートを設定できます。これにより、新しいユーザーのセッションに対して、タグビューをデフォルトでオンまたはオフに保つことができます。タグビューのデフォルト値を設定するには、次の手順を実行します。

1. 管理者としてAdobe Experience Managerにログインして、UI コンフィギュレーションファイルをダウンロードします。
1. 上部の「Adobe Experience Manager」リンクをクリックし、「**ツール**」を選択します。
1. ツールのリストから「**ガイド**」を選択し、「**フォルダープロファイル**」をクリックします。
1. **グローバルプロファイル** タイルをクリックします。
1. 「**XML エディター設定**」タブを選択し、上部の **編集** アイコンをクリックします。
1. 「**XML エディターの UI 設定**」セクションで「**ダウンロード**」アイコンをクリックして、`ui_config.json` ファイルをローカルシステムにダウンロードします。
1. `ui_config.json` ファイルで、defaultValues セクションを次のように変更して、デフォルトのタグビュー状態を変更します。

   ```json
   "defaultValues":
                   {
                   "tagsView": true
                   }
   ```

1. ファイルを保存してアップロードします。

>[!NOTE]
>
> タグビューを有効/無効にする web エディターのユーザーの環境設定は、このデフォルト値よりも優先されます。 そのため、ユーザーが web エディターからタグビューを有効にした場合、セッションをまたいで有効なままになります。

**親トピック：**&#x200B;[ Web エディタのカスタマイズ ](conf-web-editor.md)
